/* =====================================================================
   FUEL-CALCULATOR.JS — race fuel / pit-stop planner (calculadora.html)

   Lap race:   laps = scheduled laps
   Timed race: laps = ceil(duration / average lap time) (+1 if the rules
               let another lap start after time expires)
   Race fuel   = laps × fuel per lap
   Total       = race fuel + (reserve laps + formation laps) × fuel per lap
   Strategy    = fewest equal stints that fit in the tank, but at least
                 (mandatory stops + 1); every stint carries its laps +
                 reserve (+ formation on stint 1).
   Start       = always a full tank; each stop adds only what the next
                 stint needs minus what is left (rounded UP to the increment).
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("fuel-form");
  if (!form) return;

  const $ = id => document.getElementById(id);
  const num = id => {
    const v = parseFloat(String($(id).value).replace(",", "."));
    return Number.isFinite(v) ? v : 0;
  };

  // "1:42.350" / "1:42" / "102.35" (seconds) / "1.7" (minutes when < 10) -> seconds
  function parseLapTime(str) {
    str = String(str).trim().replace(",", ".");
    if (!str) return 0;
    if (str.includes(":")) {
      const [m, s] = str.split(":");
      return (parseFloat(m) || 0) * 60 + (parseFloat(s) || 0);
    }
    const v = parseFloat(str);
    if (!Number.isFinite(v)) return 0;
    return v < 10 ? v * 60 : v;
  }
  const fmtLap = sec => {
    const m = Math.floor(sec / 60), s = sec - m * 60;
    return `${m}:${s.toFixed(3).padStart(6, "0")}`;
  };
  const ceilTo = (v, step) => step > 0 ? Math.ceil(v / step - 1e-9) * step : v;
  const decimals = step => step > 0 && step < 1 ? Math.min(3, String(step).split(".")[1]?.length || 1) : 1;

  let mode = "laps";

  // Race-format toggle
  form.querySelectorAll("[data-mode]").forEach(btn => {
    btn.addEventListener("click", () => {
      mode = btn.dataset.mode;
      form.querySelectorAll("[data-mode]").forEach(b => b.classList.toggle("active", b === btn));
      form.querySelectorAll("[data-show]").forEach(el => { el.hidden = el.dataset.show !== mode; });
      calc();
    });
  });

  // Preset chips fill their input
  form.querySelectorAll(".fc-chips").forEach(group => {
    const input = $(group.dataset.for);
    group.querySelectorAll("button").forEach(chip => {
      chip.addEventListener("click", () => { input.value = chip.dataset.v; calc(); });
    });
  });

  function setChipState() {
    form.querySelectorAll(".fc-chips").forEach(group => {
      const v = String($(group.dataset.for).value).replace(",", ".");
      group.querySelectorAll("button").forEach(c => c.classList.toggle("active", parseFloat(c.dataset.v) === parseFloat(v)));
    });
  }

  /* ── Track picker (data: js/gt7-tracks.js), grouped by country ── */
  const FLAG = { "França": "fr", "Itália": "it", "Brasil": "br", "Japão": "jp", "Estados Unidos": "us", "Reino Unido": "gb",
    "Canadá": "ca", "Bélgica": "be", "Espanha": "es", "Suíça": "ch", "Croácia": "hr", "Austrália": "au",
    "Alemanha": "de", "Áustria": "at", "EAU": "ae" };
  const tracks = (typeof GT7_TRACKS !== "undefined" ? GT7_TRACKS : [])
    .map(([name, country, length, elevation, corners, straight], i) => ({ i, name, country, length, elevation, corners, straight }));
  const trackSel = $("fc-track");
  const fmtNum = (v, d = 0) => v.toLocaleString("pt-PT", { minimumFractionDigits: d, maximumFractionDigits: d });
  [...new Set(tracks.map(t => t.country))].sort((a, b) => a.localeCompare(b, "pt")).forEach(country => {
    const group = document.createElement("optgroup");
    group.label = country;
    tracks.filter(t => t.country === country).sort((a, b) => a.name.localeCompare(b.name, "pt")).forEach(t => {
      const opt = document.createElement("option");
      opt.value = t.i;
      opt.textContent = `${t.name} · ${fmtNum(t.length / 1000, 3)} km`;
      group.appendChild(opt);
    });
    trackSel.appendChild(group);
  });
  const selectedTrack = () => (trackSel.value === "" ? null : tracks[+trackSel.value]);

  function renderTrackInfo() {
    const t = selectedTrack();
    const info = $("fc-track-info");
    info.hidden = !t;
    updateStrategyLabel();
    if (!t) { info.innerHTML = ""; return; }
    info.innerHTML = `
      <div class="fc-track-head">
        ${FLAG[t.country] ? `<img src="https://flagcdn.com/w40/${FLAG[t.country]}.png" alt="" width="24" height="16" />` : ""}
        <span>${t.country}</span>
      </div>
      <div class="fc-track-stats">
        <div><span>Comprimento</span><strong>${fmtNum(t.length / 1000, 3)} km</strong></div>
        <div><span>Curvas</span><strong>${t.corners}</strong></div>
        <div><span>Desnível</span><strong>${fmtNum(t.elevation, t.elevation % 1 ? 1 : 0)} m</strong></div>
        <div><span>Reta mais longa</span><strong>${fmtNum(t.straight, t.straight % 1 ? 1 : 0)} m</strong></div>
      </div>`;
  }
  trackSel.addEventListener("change", () => { renderTrackInfo(); calc(); });

  /* ── Car picker (data: js/garage-data.js), grouped by category ── */
  const GROUPS = [["Gr.1", "Gr.1"], ["Gr.2", "Gr.2"], ["Gr.3", "Gr.3"], ["Gr.4", "Gr.4"], ["Gr.B", "Gr.B"], ["Road Car", "Estrada"]];
  const groupLabel = g => (GROUPS.find(([k]) => k === g) || [g, g])[1];
  const cars = typeof GARAGE_DATA !== "undefined" ? GARAGE_DATA : [];
  const carSel = $("fc-car");
  const groupOrder = [...GROUPS.map(([k]) => k), ...new Set(cars.map(c => c.group).filter(g => !GROUPS.some(([k]) => k === g)))];
  groupOrder.forEach(g => {
    const list = cars.filter(c => c.group === g).sort((a, b) => a.name.localeCompare(b.name, "pt"));
    if (!list.length) return;
    const group = document.createElement("optgroup");
    group.label = `${groupLabel(g)} (${list.length})`;
    list.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = c.name;
      group.appendChild(opt);
    });
    carSel.appendChild(group);
  });
  const selectedCar = () => cars.find(c => c.id === carSel.value) || null;

  function renderCarInfo() {
    const c = selectedCar();
    const info = $("fc-car-info");
    info.hidden = !c;
    updateStrategyLabel();
    if (!c) { info.innerHTML = ""; return; }
    info.innerHTML = `
      ${c.thumbnail ? `<img src="${c.thumbnail}" alt="${c.name}" loading="lazy" onerror="this.remove()" />` : ""}
      <div class="fc-car-meta">
        <span class="fc-car-group">${groupLabel(c.group)}</span>
        <strong>${c.name}</strong>
        <span>${c.manufacturer}</span>
      </div>`;
  }
  carSel.addEventListener("change", () => { renderCarInfo(); calc(); });

  // "Estratégia · <track> · <car>"
  function updateStrategyLabel() {
    const t = selectedTrack(), c = selectedCar();
    $("fc-strategy-track").textContent = [t && t.name, c && c.name].filter(Boolean).map(s => ` · ${s}`).join("");
  }

  /* ── Custom strategy: the user sets the laps of each stint; the last
     stint always covers whatever laps are left. Switching to "custom"
     starts from the current automatic plan. ── */
  let strategy = "auto";
  let custom = [];          // laps of every stint except the last
  let customReady = false;  // false = (re)start from the automatic plan
  const customEl = $("fc-custom");

  function renderEditor() {
    customEl.innerHTML = custom.map((c, i) => `
      <div class="fc-custom-row" data-row="${i}">
        <span class="fc-custom-name">Stint ${i + 1}</span>
        <input type="number" min="1" step="1" value="${c}" data-idx="${i}" inputmode="numeric" aria-label="Voltas do stint ${i + 1}" />
        <span class="fc-custom-unit">voltas</span>
        <button type="button" class="fc-custom-del" data-del="${i}" title="Remover esta paragem" aria-label="Remover stint ${i + 1}">&times;</button>
      </div>`).join("") + `
      <div class="fc-custom-row is-last" data-row="${custom.length}">
        <span class="fc-custom-name">Stint ${custom.length + 1}</span>
        <span class="fc-custom-rest" id="fc-custom-rest">—</span>
        <span class="fc-custom-unit">as voltas que faltam</span>
      </div>
      <div class="fc-custom-actions">
        <button type="button" data-action="add">+ Adicionar paragem</button>
        <button type="button" data-action="reset">Repor automática</button>
      </div>`;
  }

  $("fc-strategy-toggle").querySelectorAll("[data-strategy]").forEach(btn => {
    btn.addEventListener("click", () => {
      strategy = btn.dataset.strategy;
      $("fc-strategy-toggle").querySelectorAll("[data-strategy]").forEach(b => b.classList.toggle("active", b === btn));
      customEl.hidden = strategy !== "custom";
      customReady = false;
      calc();
    });
  });
  customEl.addEventListener("input", e => {
    const idx = e.target.dataset.idx;
    if (idx === undefined) return;
    custom[+idx] = Math.max(1, Math.round(parseFloat(e.target.value)) || 1);
    calc();
  });
  customEl.addEventListener("click", e => {
    const del = e.target.closest("[data-del]");
    const action = e.target.closest("[data-action]");
    if (del) {
      custom.splice(+del.dataset.del, 1);
    } else if (action && action.dataset.action === "add") {
      const rest = parseInt($("fc-custom-rest").textContent, 10) || 2;
      custom.push(Math.max(1, Math.floor(rest / 2)));
    } else if (action && action.dataset.action === "reset") {
      customReady = false;
    } else {
      return;
    }
    if (customReady) renderEditor();
    calc();
  });

  function calc() {
    setChipState();
    const perLap = num("fc-perlap");
    const reserve = num("fc-reserve");
    const formation = num("fc-formation");
    const tank = num("fc-tank");
    const step = num("fc-step");
    const dp = decimals(step);
    const out = v => v.toFixed(dp);

    let laps = 0, lapNote = "";
    if (mode === "laps") {
      laps = Math.max(0, Math.ceil(num("fc-laps")));
    } else {
      const dur = num("fc-duration") * 60;
      const lap = parseLapTime($("fc-laptime").value);
      if (lap > 0) {
        laps = Math.ceil(dur / lap - 1e-9) + ($("fc-extra").checked ? 1 : 0);
        lapNote = `${num("fc-duration")} min ÷ ${fmtLap(lap)}`;
      }
    }

    const valid = perLap > 0 && laps > 0;
    $("fc-results").classList.toggle("is-empty", !valid);
    if (!valid) {
      $("fc-load").textContent = "—";
      $("fc-load-sub").textContent = mode === "laps"
        ? "Indica o número de voltas e o consumo por volta."
        : "Indica a duração, o tempo médio por volta e o consumo.";
      ["fc-laps-out", "fc-race-fuel", "fc-range", "fc-refuel"].forEach(id => $(id).textContent = "—");
      $("fc-laps-note").textContent = ""; $("fc-distance").textContent = "";
      $("fc-timeline").innerHTML = "";
      $("fc-plan").innerHTML = "";
      return;
    }

    const raceFuel = laps * perLap;
    const total = raceFuel + (reserve + formation) * perLap;
    const range = tank > 0 ? tank / perLap : Infinity;

    $("fc-laps-out").textContent = laps;
    $("fc-laps-note").textContent = lapNote;
    const track = selectedTrack();
    $("fc-distance").textContent = track ? `≈ ${fmtNum(laps * track.length / 1000, 1)} km` : "";
    $("fc-race-fuel").textContent = out(raceFuel);
    $("fc-range").textContent = Number.isFinite(range) ? `${range.toFixed(1)} voltas` : "—";

    /* ── Stint plan ──
       As few equal stints as fit in the tank, but never fewer than the
       mandatory number of pit stops + 1. Every stint carries its laps +
       the reserve (+ formation on the first), so you always reach the
       pits with the reserve still in the tank. */
    const mandatoryOn = $("fc-mandatory").checked;
    const mStops = mandatoryOn ? Math.max(0, Math.round(num("fc-mandatory-stops"))) : 0;
    $("fc-mandatory-field").hidden = !mandatoryOn;
    let warn = "";
    if (mStops >= laps) warn = `Com ${laps} voltas só cabem ${laps - 1} paragens.`;

    const stints = [];
    const usable = tank > 0 ? tank - (reserve + formation) * perLap : Infinity;
    const impossible = usable <= 0;
    if (!impossible) {
      const nFuel = Number.isFinite(usable) ? Math.max(1, Math.ceil(laps * perLap / usable - 1e-9)) : 1;
      const n = Math.min(laps, Math.max(nFuel, mStops + 1));
      for (let k = 0; k < n; k++) {
        const from = Math.round(laps * k / n), to = Math.round(laps * (k + 1) / n);
        stints.push({ from, to, laps: to - from });
      }
    }
    if (impossible) {
      $("fc-load").textContent = "—";
      $("fc-load-sub").textContent = "O depósito não chega para a reserva e a volta de formação.";
      $("fc-refuel").textContent = "—";
      $("fc-timeline").innerHTML = "";
      $("fc-plan").innerHTML = `<p class="fc-plan-warn">Aumenta a capacidade do depósito ou reduz a reserva.</p>`;
      return;
    }

    if (strategy === "custom") {
      if (!customReady) {
        customReady = true;
        custom = stints.length > 1 ? stints.slice(0, -1).map(st => st.laps) : [Math.max(1, Math.floor(laps / 2))];
        renderEditor();
      }
      const rawSum = custom.reduce((a, c) => a + c, 0);
      stints.length = 0;
      let cum = 0;
      custom.forEach(c => {
        if (cum >= laps) return;
        const to = Math.min(laps, cum + c);
        stints.push({ from: cum, to, laps: to - cum });
        cum = to;
      });
      if (cum < laps) stints.push({ from: cum, to: laps, laps: laps - cum });
      if (rawSum > laps) warn += (warn ? "<br>" : "") + `Os stints somam ${rawSum} voltas, mais do que as ${laps} da corrida — os últimos foram cortados.`;
      if (stints.length - 1 < mStops) {
        warn += (warn ? "<br>" : "") + `A estratégia tem ${stints.length - 1} ${stints.length - 1 === 1 ? "paragem" : "paragens"}, mas o regulamento obriga a ${mStops}. Adiciona paragens.`;
      }
      $("fc-custom-rest").textContent = Math.max(0, laps - rawSum);
    }

    /* Always start with a full tank. At each stop, add only what the next
       stint needs (its laps + reserve) minus what is still in the tank,
       never more than fits. A stint that runs dry, or reaches the pits
       with less than the reserve, is flagged. */
    const fullTank = tank > 0 ? tank : total;
    const reserveFuel = reserve * perLap;
    let left = fullTank - (stints[0].laps + formation) * perLap;
    stints[0].dry = left < -1e-9;
    stints[0].short = !stints[0].dry && left < reserveFuel - 1e-9;
    let refuelTotal = 0;
    for (let i = 1; i < stints.length; i++) {
      const need = (stints[i].laps + reserve) * perLap;
      const add = Math.min(Math.max(0, ceilTo(need - left, step)), fullTank - Math.max(left, 0));
      stints[i].add = add;
      refuelTotal += add;
      left = Math.max(left, 0) + add - stints[i].laps * perLap;
      stints[i].dry = left < -1e-9;
      stints[i].short = !stints[i].dry && left < reserveFuel - 1e-9;
    }
    stints.forEach((st, i) => {
      if (st.dry) warn += (warn ? "<br>" : "") + `Stint ${i + 1}: ${st.laps} voltas não cabem num depósito — ficas sem combustível. Encurta este stint.`;
      else if (st.short) warn += (warn ? "<br>" : "") + `Stint ${i + 1}: chegas ao fim com menos do que a reserva de ${reserve} ${reserve === 1 ? "volta" : "voltas"}.`;
    });
    if (strategy === "custom") {
      customEl.querySelectorAll("[data-row]").forEach(row => {
        const st = stints[+row.dataset.row];
        row.classList.toggle("is-bad", !!(st && (st.dry || st.short)));
      });
    }
    const stops = stints.length - 1;
    $("fc-load").textContent = String(stops);
    $("fc-load-sub").textContent = `Partida com depósito cheio (${out(fullTank)})`
      + (stops > 0 ? ` · ${stops === 1 ? "1 paragem" : stops + " paragens"} nas boxes` : " · sem paragens");
    $("fc-refuel").textContent = out(refuelTotal);

    // Timeline: one block per stint, sized by its laps, with the pit stop after it.
    $("fc-timeline").innerHTML = `<span class="fc-tl-start" title="Partida"><img src="images/RTP_LOGO.png" alt="RTP" /></span>` + stints.map((st, i) => {
      const stop = i < stints.length - 1
        ? `<span class="fc-pit" title="Paragem ${i + 1} na volta ${st.to}">
             <span class="fc-pit-lap">V${st.to}</span></span>`
        : "";
      return `<div class="fc-stint${st.dry || st.short ? " is-bad" : ""}" style="flex:${Math.max(st.laps, 0.5)}">
                <span class="fc-stint-name">Stint ${i + 1}</span>
                <span class="fc-stint-laps">${st.laps} v</span>
              </div>${stop}`;
    }).join("") + `<span class="fc-tl-finish" title="Meta">&#127937;</span>`;

    let plan = "";
    if (warn) plan += `<p class="fc-plan-warn">${warn}</p>`;
    if (stops === 0 && stints[0].dry) {
      plan += `<p>Sem paragens precisas de ${out(total)}, mas o depósito só leva ${out(fullTank)}. Adiciona pelo menos uma paragem.</p>`;
    } else if (stops === 0) {
      const finishLeft = fullTank - (laps + formation) * perLap;
      plan += `<p class="fc-plan-ok">Um depósito cheio chega para a corrida toda — sem paragens.</p>
        <p>Acabas com cerca de <strong>${out(finishLeft)}</strong> no depósito (${(finishLeft / perLap).toFixed(1)} voltas de margem).</p>`;
    } else {
      const rows = [`<li><strong>Partida</strong> — depósito cheio · stint de ${stints[0].laps} voltas</li>`];
      for (let i = 1; i < stints.length; i++) {
        const prev = stints[i - 1];
        const what = stints[i].add > 0 ? `abastecer <strong>${out(stints[i].add)}</strong>` : "sem abastecer (já tens combustível suficiente)";
        rows.push(`<li><strong>Paragem ${i}</strong>
          — volta ${prev.to} · ${what} · stint de ${stints[i].laps} voltas</li>`);
      }
      plan += `<p>Estratégia com <strong>${stops} ${stops === 1 ? "paragem" : "paragens"}</strong>, sempre com
        ${reserve} ${reserve === 1 ? "volta" : "voltas"} de reserva no depósito ao chegar às boxes.</p>
        ${mStops > 0 && stops >= mStops ? `<p class="fc-plan-ok">Cumpre ${mStops === 1 ? "a paragem obrigatória" : `as ${mStops} paragens obrigatórias`}.</p>` : ""}
        <ol class="fc-plan-list">${rows.join("")}</ol>
        <p class="fc-plan-note">Estimativa de viabilidade: a melhor estratégia depende também dos pneus, do tempo de abastecimento, da perda nas boxes e do clima.</p>`;
    }
    $("fc-plan").innerHTML = plan;
  }

  form.addEventListener("input", calc);
  form.addEventListener("change", calc);
  form.addEventListener("submit", e => e.preventDefault());
  calc();
});
