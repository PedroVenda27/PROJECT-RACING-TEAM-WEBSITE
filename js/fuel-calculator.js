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
  let customTyres = [];     // compound of every stint (incl. the last), "" = main compound
  let tyreOpts = [];        // compounds filled in (set by calc)
  let mainTyre = "";        // compound of the automatic strategy (set by calc)
  let lastStints = [];      // stints of the plan on screen (set by calc)

  /* Drag a stint in the timeline onto another to move it there (mouse and
     touch, via pointer events). The new order becomes a custom strategy. */
  const timelineEl = $("fc-timeline");
  let drag = null;
  timelineEl.addEventListener("pointerdown", e => {
    const el = e.target.closest(".fc-stint.is-draggable");
    if (!el) return;
    drag = { from: +el.dataset.stint, el, over: null, x: e.clientX, moved: false };
    el.setPointerCapture(e.pointerId);
  });
  timelineEl.addEventListener("pointermove", e => {
    if (!drag) return;
    if (!drag.moved && Math.abs(e.clientX - drag.x) < 6) return;
    drag.moved = true;
    drag.el.classList.add("is-dragging");
    const under = document.elementFromPoint(e.clientX, e.clientY);
    const target = under && under.closest(".fc-stint");
    timelineEl.querySelectorAll(".fc-stint.is-target").forEach(s => s.classList.remove("is-target"));
    drag.over = target && target !== drag.el ? +target.dataset.stint : null;
    if (drag.over !== null) target.classList.add("is-target");
  });
  const endDrag = () => {
    if (!drag) return;
    const { from, over, moved } = drag;
    drag.el.classList.remove("is-dragging");
    timelineEl.querySelectorAll(".fc-stint.is-target").forEach(s => s.classList.remove("is-target"));
    drag = null;
    if (!moved || over === null || over === from) return;
    const list = lastStints.slice();
    const [item] = list.splice(from, 1);
    list.splice(over, 0, item);
    // switch to the custom strategy with the new order
    strategy = "custom";
    $("fc-strategy-toggle").querySelectorAll("[data-strategy]").forEach(b => b.classList.toggle("active", b.dataset.strategy === "custom"));
    customEl.hidden = false;
    custom = list.slice(0, -1).map(s => s.laps);
    customTyres = list.map(s => s.tyre || "");
    customReady = true;
    renderEditor();
    calc();
  };
  timelineEl.addEventListener("pointerup", endDrag);
  timelineEl.addEventListener("pointercancel", endDrag);
  const customEl = $("fc-custom");
  const TYRE_NAMES = { soft: "Soft", medium: "Médio", hard: "Hard" };

  const tyreSelect = i => tyreOpts.length ? `
        <select class="fc-custom-tyre" data-tyre-idx="${i}" aria-label="Pneu do stint ${i + 1}">
          ${tyreOpts.map(k => `<option value="${k}"${(customTyres[i] || mainTyre) === k ? " selected" : ""}>${TYRE_NAMES[k]}</option>`).join("")}
        </select>` : "";
  function renderEditor() {
    customEl.innerHTML = custom.map((c, i) => `
      <div class="fc-custom-row" data-row="${i}">
        <span class="fc-custom-name">Stint ${i + 1}</span>
        <input type="number" min="1" step="1" value="${c}" data-idx="${i}" inputmode="numeric" aria-label="Voltas do stint ${i + 1}" />
        <span class="fc-custom-unit">voltas</span>${tyreSelect(i)}
        <button type="button" class="fc-custom-del" data-del="${i}" title="Remover esta paragem" aria-label="Remover stint ${i + 1}">&times;</button>
      </div>`).join("") + `
      <div class="fc-custom-row is-last" data-row="${custom.length}">
        <span class="fc-custom-name">Stint ${custom.length + 1}</span>
        <span class="fc-custom-rest" id="fc-custom-rest">—</span>
        <span class="fc-custom-unit">as voltas que faltam</span>${tyreSelect(custom.length)}
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
  customEl.addEventListener("change", e => {
    const ti = e.target.dataset.tyreIdx;
    if (ti === undefined) return;
    customTyres[+ti] = e.target.value;
    calc();
  });
  $("fc-strategy-tyre").addEventListener("change", () => { customReady = false; calc(); });
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
      customTyres.splice(+del.dataset.del, 1);
    } else if (action && action.dataset.action === "add") {
      const rest = parseInt($("fc-custom-rest").textContent, 10) || 2;
      custom.push(Math.max(1, Math.floor(rest / 2)));
      customTyres.splice(custom.length - 1, 0, customTyres[custom.length - 1] || "");
    } else if (action && action.dataset.action === "reset") {
      customReady = false;
    } else {
      return;
    }
    if (customReady) renderEditor();
    calc();
  });

  /* ── Tyres: life (laps) and lap time per compound. For each compound used
     on its own: T tyre changes and F fuel stops (from the fuel plan) give
     max(T, F) stops: min(T, F) with tyres + fuel, the rest tyres only (T > F)
     or without a tyre change (F > T), each with its own time lost in the pits.
     Race time = laps × lap time + pit time. Blank compounds are ignored. ── */
  const TYRES = [["soft", "Soft"], ["medium", "Médio"], ["hard", "Hard"]];
  const fmtRace = sec => {
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec - h * 3600 - m * 60;
    return (h ? `${h}:${String(m).padStart(2, "0")}` : `${m}`) + `:${s.toFixed(3).padStart(6, "0")}`;
  };
  // maxStint = most laps one full tank allows (keeping the reserve): a tyre
  // can never run longer than that in one stint, so its life is capped to it.
  function renderTyres(laps, fuelStops, maxStint = Infinity) {
    const box = $("fc-tyre-result");
    const hint = $("fc-tyre-max");
    hint.hidden = !Number.isFinite(maxStint) || maxStint < 1;
    if (!hint.hidden) hint.innerHTML = `Limite do combustível: um stint dá no máximo <strong>${maxStint} voltas</strong> com o depósito cheio — a duração de cada pneu conta até este valor.`;
    // blank = not filled in yet (counted as 0 s and flagged in the table)
    // seconds ("25", "25,5") or m:ss ("1:05.5")
    const pitVal = id => {
      const s = String($(id).value).trim().replace(",", ".");
      if (!s) return null;
      if (s.includes(":")) { const [m, sec] = s.split(":"); return Math.max(0, (parseFloat(m) || 0) * 60 + (parseFloat(sec) || 0)); }
      const v = parseFloat(s);
      return Number.isFinite(v) ? Math.max(0, v) : null;
    };
    const pit = { stop: pitVal("fc-pit-stop"), tyres: pitVal("fc-pit-tyres"), both: pitVal("fc-pit-both") };
    const allTyres = Object.fromEntries(TYRES.map(([k, label]) => [k, {
      k, label, life: Math.round(num(`fc-tyre-${k}-life`)), lap: parseLapTime($(`fc-tyre-${k}-time`).value)
    }]));
    const rows = Object.values(allTyres).map(t => ({ ...t })).filter(t => t.life > 0 || t.lap > 0);
    // mandatory compounds (rule: must be fitted at least once — one lap is enough)
    const mandOn = $("fc-tyre-mand").checked;
    $("fc-tyre-mand-opts").hidden = !mandOn;
    const mand = mandOn ? TYRES.map(([k]) => k).filter(k => $(`fc-tyre-mand-${k}`).checked) : [];
    box.hidden = !rows.length || !(laps > 0);
    if (box.hidden) return { rows: [], allTyres, pit, mand, best: null };
    rows.forEach(t => {
      t.capped = t.life > 0 && Number.isFinite(maxStint) && maxStint >= 1 && t.life > maxStint;
      t.eff = t.capped ? maxStint : t.life;
      t.tyreStops = t.life > 0 ? Math.max(0, Math.ceil(laps / t.eff - 1e-9) - 1) : null;
      t.stops = t.tyreStops === null ? null : Math.max(t.tyreStops, fuelStops);
      if (t.stops !== null) {
        t.both = Math.min(t.tyreStops, fuelStops);
        t.tyresOnly = t.tyreStops - t.both;
        t.stopOnly = fuelStops - t.both;
        t.pit = t.both * (pit.both || 0) + t.tyresOnly * (pit.tyres || 0) + t.stopOnly * (pit.stop || 0);
        t.pitMissing = (t.both && pit.both === null) || (t.tyresOnly && pit.tyres === null) || (t.stopOnly && pit.stop === null);
      }
      t.race = t.lap > 0 && t.stops !== null ? laps * t.lap + t.pit : null;

      /* Mandatory compounds: running one lap on it is enough. Cheapest of
         (a) fit it for 1 lap and pit again (+1 tyre-only stop + the lap time
             difference), or
         (b) when there already is a stop, run the shortest stint on it (no
             extra stop, the whole stint at its lap time — only if it lasts). */
      t.mand = [];
      if (mandOn && t.race !== null) {
        mand.filter(x => x !== t.k).forEach(x => {
          const X = allTyres[x];
          if (!(X.lap > 0)) { t.mand.push({ label: X.label, missing: true }); return; }
          const optA = { cost: (X.lap - t.lap) + (pit.tyres || 0), stops: 1, text: `1 volta de ${X.label} + 1 paragem (pneus)`, pitMissing: pit.tyres === null };
          let best = optA;
          if (t.stops >= 1) {
            const stint = Math.floor(laps / (t.stops + 1));
            const xLife = X.life > 0 ? Math.min(X.life, Number.isFinite(maxStint) ? maxStint : X.life) : Infinity;
            if (stint >= 1 && xLife >= stint) {
              const optB = { cost: stint * (X.lap - t.lap), stops: 0, text: `um stint de ${stint} v em ${X.label} (sem paragem extra)` };
              if (optB.cost < optA.cost) best = optB;
            }
          }
          t.race += best.cost; t.stops += best.stops;
          if (best.stops) { t.tyresOnly += 1; t.pit += pit.tyres || 0; } // the extra stop shows in the breakdown
          if (best.pitMissing) t.pitMissing = true;
          t.mand.push({ x, label: X.label, text: best.text, cost: best.cost, opt: best.stops ? "lap" : "stint" });
        });
        if (t.mand.some(m => m.missing)) t.race = null;
      }
    });
    return { rows, allTyres, pit, mand, best: null };
  }

  /* Tyre table, after calc() has replaced every row's stops / pit time /
     race time with the result of the real stint plan for that compound. */
  function renderTyreTable(T, laps, maxStint) {
    const { rows, pit, mand, allTyres } = T;
    if (!rows.length) return;
    /* Timed race: the clock is fixed, so compounds are compared by laps done —
       the time lost in the pits (and on a mandatory tyre) comes off the clock. */
    const timed = mode === "time";
    if (timed) {
      const dur = num("fc-duration") * 60, extra = $("fc-extra").checked ? 1 : 0;
      rows.forEach(t => {
        t.done = t.race === null ? null : Math.ceil((dur - (t.race - laps * t.lap)) / t.lap - 1e-9) + extra;
      });
    }
    const score = t => (timed ? (t.done === null ? null : -t.done) : t.race); // lower is better
    const scores = rows.map(score).filter(v => v !== null);
    const best = scores.length ? Math.min(...scores) : null;
    const resultCell = t => {
      const s = score(t);
      if (s === null) return "—";
      const tag = scores.length > 1 ? (s > best ? (timed ? ` <small>${s - best} ${s - best === 1 ? "volta" : "voltas"} a menos</small>` : ` <small>+${(s - best).toFixed(1)} s</small>`) : ` <small>★ ${timed ? "mais voltas" : "mais rápido"}</small>`) : "";
      return (timed ? `${t.done} voltas` : fmtRace(t.race)) + tag;
    };
    $("fc-tyre-table").innerHTML = `
      <table class="fc-tyre-table">
        <thead><tr><th>Composto</th><th>Duração</th><th>Tempo/volta</th><th>Paragens</th><th>${timed ? `Voltas em ${num("fc-duration")} min` : "Tempo de corrida"}</th></tr></thead>
        <tbody>${rows.map(t => `
          <tr class="${score(t) !== null && score(t) === best && scores.length > 1 ? "is-best" : ""}">
            <td><span class="fc-tyre-name"><i class="fc-tyre-dot ${t.k}"></i>${t.label}</span></td>
            <td>${t.life > 0 ? (t.capped ? `${t.eff} v <small title="O pneu dura ${t.life} voltas, mas o combustível só dá ${maxStint} por stint">(${t.life} v · limitado pelo combustível)</small>` : `${t.life} v`) : "—"}</td>
            <td>${t.lap > 0 ? fmtLap(t.lap) : "—"}</td>
            <td>${t.stops === null ? "—" : t.stops === 0 ? "sem paragens" : `${t.stops} <small>${[
              t.both && `${t.both}× pneus + comb.`, t.tyresOnly && `${t.tyresOnly}× pneus`, t.stopOnly && `${t.stopOnly}× só paragem`
            ].filter(Boolean).join(" · ")} · ${t.pitMissing ? "falta o tempo de paragem" : `${t.pit.toFixed(1)} s`}</small>`}</td>
            <td>${resultCell(t)}</td>
          </tr>${t.mand && t.mand.length ? `
          <tr class="fc-tyre-mand-row"><td colspan="5">Obrigatório: ${t.mand.map(m => m.missing
            ? `falta o tempo por volta do ${m.label}`
            : `${m.text}${m.cost !== undefined ? ` (${m.cost >= 0 ? "+" : ""}${m.cost.toFixed(1)} s)` : ""}`).join(" · ")}</td></tr>` : ""}`).join("")}
        </tbody>
      </table>
      <p class="fc-plan-note">Cada linha é a estratégia automática com esse composto (as mesmas paragens e abastecimentos que aparecem na Estratégia ao escolhê-lo). Paragens com troca e abastecimento contam como pneus + combustível (${pit.both ?? "—"} s); só troca, como pneus (${pit.tyres ?? "—"} s); só abastecimento, como só paragem (${pit.stop ?? "—"} s).${rows.some(t => t.pitMissing) ? " Preenche os tempos de paragem em falta para o tempo de corrida ficar certo." : ""}${mand.length ? ` Pneus obrigatórios (${mand.map(k => allTyres[k].label).join(", ")}): basta calçá-los uma volta — a calculadora escolhe o mais barato entre 1 volta + paragem extra e um stint inteiro numa paragem que já existe.` : ""}</p>`;
    // best compound that can drive a strategy (needs a tyre life)
    const usable = rows.filter(t => t.life > 0 && score(t) !== null);
    T.best = usable.length ? usable.reduce((a, b) => (score(b) < score(a) ? b : a)) : (rows.find(t => t.life > 0) || null);
  }

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
      // average lap is optional: without it, the fastest tyre's lap time is used
      // (most laps = most fuel, the safe side)
      let lap = parseLapTime($("fc-laptime").value), from = "";
      if (!(lap > 0)) {
        const tyreLaps = TYRES.map(([k, label]) => ({ label, lap: parseLapTime($(`fc-tyre-${k}-time`).value) })).filter(t => t.lap > 0);
        if (tyreLaps.length) {
          const f = tyreLaps.reduce((a, b) => (b.lap < a.lap ? b : a));
          lap = f.lap; from = ` (${f.label})`;
        }
      }
      if (lap > 0) {
        laps = Math.ceil(dur / lap - 1e-9) + ($("fc-extra").checked ? 1 : 0);
        lapNote = `${num("fc-duration")} min ÷ ${fmtLap(lap)}${from}`;
      }
    }

    const valid = perLap > 0 && laps > 0;
    $("fc-results").classList.toggle("is-empty", !valid);
    if (!valid) {
      $("fc-load").textContent = "—";
      $("fc-load-sub").textContent = mode === "laps"
        ? "Indica o número de voltas e o consumo por volta."
        : "Indica a duração, o consumo e o tempo por volta (médio ou de um pneu).";
      ["fc-laps-out", "fc-race-fuel", "fc-range", "fc-refuel"].forEach(id => $(id).textContent = "—");
      $("fc-laps-note").textContent = ""; $("fc-distance").textContent = "";
      $("fc-timeline").innerHTML = ""; $("fc-total").hidden = true;
      $("fc-plan").innerHTML = "";
      renderTyres(0, 0);
      $("fc-strategy-tyre").hidden = true;
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
    // most laps one full tank allows (keeping the reserve) — also caps every tyre's life
    const maxStint = tank > 0 ? Math.floor(tank / perLap - reserve + 1e-9) : Infinity;
    const nFuel = !impossible && Number.isFinite(usable) ? Math.max(1, Math.ceil(laps * perLap / usable - 1e-9)) : 1;
    // tyre table + the compound that drives the strategy
    const T = impossible ? renderTyres(0, 0) : renderTyres(laps, Math.min(laps, Math.max(nFuel, mStops + 1)) - 1, maxStint);
    const effOf = k => {
      const t = k && T.allTyres[k];
      if (!t || !(t.life > 0)) return Infinity;
      return Number.isFinite(maxStint) && maxStint >= 1 ? Math.min(t.life, maxStint) : t.life;
    };
    const tyreLabel = k => (k && T.allTyres[k] ? T.allTyres[k].label : "");
    const lapOf = k => (k && T.allTyres[k] && T.allTyres[k].lap > 0 ? T.allTyres[k].lap : 0);
    const fullTank = tank > 0 ? tank : total;
    const reserveFuel = reserve * perLap;
    // estimates used for blank pit times (so the planner never treats a stop as free)
    const P = T.pit, firstOf = (...v) => v.find(x => x !== null && x !== undefined);
    const pitEst = {
      stop: firstOf(P.stop, P.tyres, P.both, 0),
      tyres: firstOf(P.tyres, P.stop, P.both, 0),
      both: firstOf(P.both, Math.max(firstOf(P.tyres, 0), firstOf(P.stop, 0)))
    };

    /* Automatic stints for a main compound: equal stints, enough for the
       fuel, the mandatory stops and the tyre life. A mandatory compound is
       either fitted for 1 lap at the start (then back to the main one) or run
       for a whole stint, whichever was cheaper. The start always has the most
       traffic, so slower compounds go first (start of the race) and only
       faster ones are left for the end. */
    /* Best automatic plan for a main compound. Tries every sensible number of
       stops (from the minimum the fuel, the tyre life and the rules need, up
       to 3 more) and, for each mandatory compound, both ways of using it (one
       lap + extra stop, or a whole stint). In each candidate the laps are
       shared out to be as fast as possible: every stint gets 1 lap, then the
       fastest compound's stints are filled up to their tyre life / fuel limit,
       then the next one. The slow sets go first (start = most traffic). The
       candidate with the lowest total time (track + pits) wins. Without lap
       times it falls back to equal stints. */
    function autoList(main) {
      const haveTimes = main && lapOf(main.k) > 0;
      const mandList = main && main.mand ? main.mand.filter(m => !m.missing) : [];
      if (!haveTimes || mandList.some(m => !(lapOf(m.x) > 0))) return equalList(main);
      const cap = k => Math.min(effOf(k), Number.isFinite(maxStint) && maxStint >= 1 ? maxStint : Infinity);
      // all lap / whole-stint choices for the mandatory compounds
      let combos = [{}];
      mandList.forEach(m => { combos = combos.flatMap(c => [{ ...c, [m.x]: "lap" }, { ...c, [m.x]: "stint" }]); });
      const nT = Math.ceil(laps / cap(main.k) - 1e-9);
      const nMin = Math.max(1, nFuel, nT);
      let best = null;
      combos.forEach(combo => {
        const oneLap = mandList.filter(m => combo[m.x] === "lap").sort((a, b) => lapOf(b.x) - lapOf(a.x));
        const whole = mandList.filter(m => combo[m.x] === "stint");
        for (let n = Math.max(1, nMin - oneLap.length - whole.length); n <= nMin + 3; n++) {
          // compound of every stint: 1-lap sets, slow whole sets, main sets, fast whole sets
          const mainLap = lapOf(main.k);
          const slow = whole.filter(m => lapOf(m.x) >= mainLap).sort((a, b) => lapOf(b.x) - lapOf(a.x));
          const fast = whole.filter(m => lapOf(m.x) < mainLap);
          if (n < 1) continue;
          const seq = [
            ...oneLap.map(m => ({ tyre: m.x, fixed: true })),
            ...slow.map(m => ({ tyre: m.x })),
            ...Array.from({ length: n }, () => ({ tyre: main.k })),
            ...fast.map(m => ({ tyre: m.x }))
          ];
          if (seq.length - 1 < mStops || seq.length > laps) continue;
          /* Share the laps: 1 each, then fill the fastest stints first up to
             their cap. The first stint's length is also tried at every value:
             a shorter (slow) first stint can let the next stop skip fuel —
             e.g. 4 laps on Hard + 7 on Soft from one tank = a tyres-only stop. */
          const free = seq.map((s, i) => i).filter(i => !seq[i].fixed);
          const first = free[0];
          const tries = [null];
          for (let L = 1; L <= Math.min(cap(seq[first].tyre), laps); L++) tries.push(L);
          tries.forEach(L => {
            const lens = seq.map(() => 1);
            let rest = laps - seq.length;
            if (L !== null) { const add = Math.min(rest, L - 1); lens[first] += add; rest -= add; }
            free.filter(i => L === null || i !== first)
              .sort((a, b) => lapOf(seq[a].tyre) - lapOf(seq[b].tyre))
              .forEach(i => { const add = Math.min(rest, cap(seq[i].tyre) - 1); lens[i] += add; rest -= add; });
            if (rest > 0) return; // not enough tyre / fuel range with this many stops
            const list = seq.map((s, i) => ({ laps: lens[i], tyre: s.tyre }));
            const sim = simulate(list);
            if (sim.stints.some(st => st.dry) || sim.trackTime === null) return;
            const score = sim.trackTime + sim.pitTotal;
            if (!best || score < best.score - 1e-6) best = { score, list };
          });
        }
      });
      return best ? best.list : equalList(main);
    }

    // fallback (no lap times): equal stints, mandatory sets as the table chose
    function equalList(main) {
      const mLap = main && main.mand ? main.mand.filter(m => m.opt === "lap") : [];
      const mStint = main && main.mand ? main.mand.filter(m => m.opt === "stint") : [];
      const base = laps - mLap.length;
      const nT = main ? Math.ceil(base / effOf(main.k) - 1e-9) : 1;
      const n = Math.max(1, Math.min(base, Math.max(nFuel, mStops + 1 - mLap.length, nT)));
      // 1-lap mandatory sets at the very start, slowest first
      const list = mLap.slice().sort((a, b) => lapOf(b.x) - lapOf(a.x)).map(m => ({ laps: 1, tyre: m.x }));
      for (let k = 0; k < n; k++) list.push({ laps: Math.round(base * (k + 1) / n) - Math.round(base * k / n), tyre: main ? main.k : undefined });
      if (list.length > 1) {
        const mainLap = main ? lapOf(main.k) : 0;
        const slower = mStint.filter(m => lapOf(m.x) >= mainLap).sort((a, b) => lapOf(b.x) - lapOf(a.x));
        const faster = mStint.filter(m => lapOf(m.x) < mainLap);
        // the slow set gets the shortest stints (fewest laps lost)
        if (slower.length) {
          const lens = list.slice(mLap.length).map(s => s.laps).sort((a, b) => a - b);
          list.slice(mLap.length).forEach((s, i) => { s.laps = lens[i]; });
        }
        // whole-stint mandatory sets: slower ones on the first main stints, faster ones on the last
        slower.forEach((m, i) => { const st = list[mLap.length + i]; if (st) st.tyre = m.x; });
        faster.forEach((m, i) => { const st = list[list.length - 1 - i]; if (st && st.tyre === (main && main.k)) st.tyre = m.x; });
      }
      return list;
    }

    /* Runs a plan: always start full; refuel only when the fuel left can't
       finish the next stint, and then put in everything that is still useful
       (up to a full tank) so later stops can skip fuel. A stop changes tyres
       when the compound changes or the set would go past its life, and is
       then "pneus + combustível", "pneus" or "só paragem". */
    function simulate(list) {
      const sts = []; let cum = 0;
      list.forEach(s => { sts.push({ from: cum, to: cum + s.laps, laps: s.laps, tyre: s.tyre }); cum += s.laps; });
      const warns = [];
      let left = fullTank - (sts[0].laps + formation) * perLap, refuel = 0;
      sts[0].dry = left < -1e-9;
      sts[0].short = !sts[0].dry && left < reserveFuel - 1e-9;
      for (let i = 1; i < sts.length; i++) {
        const need = (sts[i].laps + reserve) * perLap;
        let add = 0;
        if (left < need - 1e-9) {
          const rest = (sts.slice(i).reduce((a, s) => a + s.laps, 0) + reserve) * perLap;
          add = Math.min(ceilTo(rest - Math.max(left, 0), step), fullTank - Math.max(left, 0));
          add = Math.max(add, Math.min(ceilTo(need - left, step), fullTank - Math.max(left, 0)));
        }
        sts[i].add = add; refuel += add;
        left = Math.max(left, 0) + add - sts[i].laps * perLap;
        sts[i].dry = left < -1e-9;
        sts[i].short = !sts[i].dry && left < reserveFuel - 1e-9;
      }
      sts.forEach((st, i) => {
        if (st.dry) warns.push(`Stint ${i + 1}: ${st.laps} voltas não cabem num depósito — ficas sem combustível. Encurta este stint.`);
        else if (st.short) warns.push(`Stint ${i + 1}: chegas ao fim com menos do que a reserva de ${reserve} ${reserve === 1 ? "volta" : "voltas"}.`);
      });
      const withT = sts.some(st => st.tyre);
      let pitTotal = 0, pitMissing = false, wear = 0;
      const kinds = { both: 0, tyres: 0, stop: 0 };
      sts.forEach((st, i) => {
        if (!withT) return;
        const eff = effOf(st.tyre);
        if (i === 0) { st.change = true; wear = st.laps; }
        else {
          st.change = !!st.tyre && (st.tyre !== sts[i - 1].tyre || wear + st.laps > eff);
          wear = st.change ? st.laps : wear + st.laps;
          st.pitKind = st.change ? (st.add > 0 ? "both" : "tyres") : "stop";
          kinds[st.pitKind]++;
          st.pitSec = T.pit[st.pitKind];
          // a blank pit time is never "free": it counts with the nearest one filled in
          if (st.pitSec === null) { pitMissing = true; pitTotal += pitEst[st.pitKind]; } else pitTotal += st.pitSec;
        }
        if (st.tyre && wear > eff) {
          warns.push(`Stint ${i + 1}: o ${tyreLabel(st.tyre)} só aguenta ${eff} voltas e este jogo já vai em ${wear}. Troca de pneus ou encurta o stint.`);
          st.worn = true;
        }
      });
      const trackTime = withT && sts.every(st => lapOf(st.tyre) > 0) ? sts.reduce((a, st) => a + st.laps * lapOf(st.tyre), 0) : null;
      return { stints: sts, refuel, pitTotal, pitMissing, kinds, trackTime, withTyres: withT, warns };
    }

    // tyre table rows = the real automatic plan with each compound
    if (!impossible) {
      T.rows.forEach(t => {
        if (!(t.life > 0) || t.race === null && !(t.lap > 0)) return;
        const plan = autoList(t);
        const sim = simulate(plan);
        t.stops = sim.stints.length - 1;
        // describe how the chosen plan uses each mandatory compound
        (t.mand || []).forEach(m => {
          if (m.missing) return;
          const on = plan.filter(s => s.tyre === m.x);
          const lapsOn = on.reduce((a, s) => a + s.laps, 0);
          m.text = lapsOn === 1 ? `1 volta de ${m.label} no início + paragem` : `stint de ${lapsOn} v em ${m.label}${plan[0].tyre === m.x ? " no início" : ""}`;
          m.cost = undefined;
        });
        t.both = sim.kinds.both; t.tyresOnly = sim.kinds.tyres; t.stopOnly = sim.kinds.stop;
        t.pit = sim.pitTotal; t.pitMissing = sim.pitMissing;
        t.race = t.race === null || sim.trackTime === null ? null : sim.trackTime + sim.pitTotal;
      });
      renderTyreTable(T, laps, maxStint);
    }

    const pick = $("fc-strategy-tyre");
    const prevOpts = tyreOpts.join();
    tyreOpts = T.rows.filter(t => t.life > 0 || t.lap > 0).map(t => t.k);
    pick.hidden = !T.rows.some(t => t.life > 0);
    [...pick.options].forEach(o => { o.hidden = !["auto", "none"].includes(o.value) && !T.rows.some(t => t.k === o.value && t.life > 0); });
    const main = pick.hidden || pick.value === "none" ? null
      : pick.value === "auto" ? T.best : (T.rows.find(t => t.k === pick.value && t.life > 0) || T.best);
    mainTyre = main ? main.k : "";
    if (strategy === "custom" && customReady && prevOpts !== tyreOpts.join()) renderEditor();
    if (!impossible) autoList(main).forEach(s => stints.push(s));
    if (impossible) {
      $("fc-load").textContent = "—";
      $("fc-load-sub").textContent = "O depósito não chega para a reserva e a volta de formação.";
      $("fc-refuel").textContent = "—";
      $("fc-timeline").innerHTML = ""; $("fc-total").hidden = true;
      $("fc-plan").innerHTML = `<p class="fc-plan-warn">Aumenta a capacidade do depósito ou reduz a reserva.</p>`;
      return;
    }

    if (strategy === "custom") {
      if (!customReady) {
        customReady = true;
        custom = stints.length > 1 ? stints.slice(0, -1).map(st => st.laps) : [Math.max(1, Math.floor(laps / 2))];
        customTyres = stints.map(st => st.tyre || "");
        renderEditor();
      }
      const rawSum = custom.reduce((a, c) => a + c, 0);
      const fallback = main ? main.k : undefined;
      stints.length = 0;
      let cum = 0;
      custom.forEach((c, i) => {
        if (cum >= laps) return;
        const to = Math.min(laps, cum + c);
        stints.push({ from: cum, to, laps: to - cum, tyre: customTyres[i] || fallback });
        cum = to;
      });
      if (cum < laps) stints.push({ from: cum, to: laps, laps: laps - cum, tyre: customTyres[custom.length] || fallback });
      if (rawSum > laps) warn += (warn ? "<br>" : "") + `Os stints somam ${rawSum} voltas, mais do que as ${laps} da corrida — os últimos foram cortados.`;
      if (stints.length - 1 < mStops) {
        warn += (warn ? "<br>" : "") + `A estratégia tem ${stints.length - 1} ${stints.length - 1 === 1 ? "paragem" : "paragens"}, mas o regulamento obriga a ${mStops}. Adiciona paragens.`;
      }
      $("fc-custom-rest").textContent = Math.max(0, laps - rawSum);
    }

    // run the chosen plan (automatic or custom) — same rules as the tyre table
    const sim = simulate(stints.map(st => ({ laps: st.laps, tyre: st.tyre })));
    stints.length = 0; sim.stints.forEach(st => stints.push(st));
    sim.warns.forEach(w => { warn += (warn ? "<br>" : "") + w; });
    const refuelTotal = sim.refuel, pitTotal = sim.pitTotal, pitMissing = sim.pitMissing, withTyres = sim.withTyres;
    if (strategy === "custom") {
      customEl.querySelectorAll("[data-row]").forEach(row => {
        const st = stints[+row.dataset.row];
        row.classList.toggle("is-bad", !!(st && (st.dry || st.short || st.worn)));
      });
    }
    lastStints = stints.map(st => ({ laps: st.laps, tyre: st.tyre }));
    $("fc-drag-hint").hidden = stints.length < 2;
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
      return `<div class="fc-stint${st.dry || st.short || st.worn ? " is-bad" : ""}${st.tyre ? ` tyre-${st.tyre}` : ""}${stints.length > 1 ? " is-draggable" : ""}" data-stint="${i}" style="flex:${Math.max(st.laps, 0.5)}" title="${stints.length > 1 ? "Arrasta para mudar a ordem" : ""}">
                <span class="fc-stint-name">Stint ${i + 1}</span>
                <span class="fc-stint-laps">${st.laps} v</span>
                ${st.tyre ? `<span class="fc-stint-tyre"><i class="fc-tyre-dot ${st.tyre}"></i>${tyreLabel(st.tyre)}</span>` : ""}
              </div>${stop}`;
    }).join("") + `<span class="fc-tl-finish" title="Meta">&#127937;</span>`;

    let plan = "";
    if (warn) plan += `<p class="fc-plan-warn">${warn}</p>`;
    if (stops === 0 && stints[0].dry) {
      plan += `<p>Sem paragens precisas de ${out(total)}, mas o depósito só leva ${out(fullTank)}. Adiciona pelo menos uma paragem.</p>`;
    } else if (stops === 0) {
      const finishLeft = fullTank - (laps + formation) * perLap;
      plan += `<p class="fc-plan-ok">Um depósito cheio chega para a corrida toda — sem paragens${stints[0].tyre ? `, com ${tyreLabel(stints[0].tyre)} do início ao fim` : ""}.</p>
        <p>Acabas com cerca de <strong>${out(finishLeft)}</strong> no depósito (${(finishLeft / perLap).toFixed(1)} voltas de margem).</p>`;
    } else {
      // One clear row per stop: when (lap), tyres, fuel to add, time lost
      const tyreCell = (st, changed) => !st.tyre ? "—"
        : `<span class="fc-st-tyre${changed ? "" : " is-kept"}"><i class="fc-tyre-dot ${st.tyre}"></i>${changed ? tyreLabel(st.tyre) : `mantém ${tyreLabel(st.tyre)}`}</span>`;
      // compact rows: [when] [tyres] [fuel] [time] — then the stint that follows
      const row = (title, when, st, tyres, fuel, time) => `
        <div class="fc-stop${title === "Partida" ? " is-start" : ""}">
          <div class="fc-stop-when"><strong>${title}</strong><span>${when}</span></div>
          ${withTyres ? `<div class="fc-stop-tyre">${tyres}</div>` : ""}
          <div class="fc-stop-fuel">${fuel}</div>
          ${withTyres ? `<div class="fc-stop-time">${time}</div>` : ""}
          <div class="fc-stop-stint">stint de ${st.laps} ${st.laps === 1 ? "volta" : "voltas"}</div>
        </div>`;
      const rows = [row("Partida", "volta 0", stints[0], tyreCell(stints[0], true), `<span class="fc-st-none">depósito cheio</span>`, "")];
      for (let i = 1; i < stints.length; i++) {
        const st = stints[i], prev = stints[i - 1];
        rows.push(row(`Paragem ${i}`, `volta ${prev.to}`, st, tyreCell(st, st.change),
          st.add > 0 ? `<span class="fc-st-fuel">+${out(st.add)}</span><small>abastecer</small>` : `<span class="fc-st-none">sem abastecer</span>`,
          st.pitSec !== null && st.pitSec !== undefined ? `${st.pitSec} s` : `<span class="fc-st-none">— s</span>`));
      }
      plan += `
        <div class="fc-stops">${rows.join("")}</div>
        <p class="fc-stops-sum">${stops} ${stops === 1 ? "paragem" : "paragens"} · reserva de ${reserve} ${reserve === 1 ? "volta" : "voltas"}${withTyres ? ` · <strong>${pitMissing ? `≈ ${pitTotal.toFixed(1)} s` : `${pitTotal.toFixed(1)} s`}</strong> nas boxes${pitMissing ? " (há tempos de paragem por preencher — usei o mais parecido)" : ""}` : ""}</p>
        ${mStops > 0 && stops >= mStops ? `<p class="fc-plan-ok">Cumpre ${mStops === 1 ? "a paragem obrigatória" : `as ${mStops} paragens obrigatórias`}.</p>` : ""}`;
      plan += `<p class="fc-plan-note">Estimativa: ${withTyres ? "usa a duração e os tempos por volta dos pneus que escreveste" : "preenche os pneus para a estratégia incluir as trocas"}; o clima e o desgaste real podem mudar a melhor opção.</p>`;
    }
    $("fc-plan").innerHTML = plan;

    /* Total of the proposed strategy: time on track (laps × each stint's
       tyre lap time) + time in the pits. Timed races: laps done instead. */
    const totalEl = $("fc-total");
    const trackTime = withTyres && stints.every(st => lapOf(st.tyre) > 0)
      ? stints.reduce((a, st) => a + st.laps * lapOf(st.tyre), 0) : null;
    totalEl.hidden = trackTime === null;
    // timed race: laps done in the time (the race ends when the lap running at the bell is finished)
    const dur = num("fc-duration") * 60, extraLap = $("fc-extra").checked ? 1 : 0;
    const lapsDone = (track, pits) => Math.ceil((dur - pits) / (track / laps) - 1e-9) + extraLap;
    if (trackTime !== null) {
      const pitTxt = pitMissing ? `≈ ${pitTotal.toFixed(1)} s (tempo de paragem estimado)` : `${pitTotal.toFixed(1)} s`;
      // custom strategy: compare with the automatic one
      let cmp = "";
      if (strategy === "custom") {
        const a = simulate(autoList(main));
        if (a.trackTime !== null) {
          if (mode === "laps") {
            const d = (trackTime + pitTotal) - (a.trackTime + a.pitTotal);
            cmp = `Automática: ${fmtRace(a.trackTime + a.pitTotal)} · a tua: ${Math.abs(d) < 0.05 ? "igual" : `${d > 0 ? "+" : "−"}${Math.abs(d).toFixed(1)} s ${d > 0 ? "mais lenta" : "mais rápida"}`}`;
          } else {
            const d = lapsDone(trackTime, pitTotal) - lapsDone(a.trackTime, a.pitTotal);
            cmp = `Automática: ${lapsDone(a.trackTime, a.pitTotal)} voltas · a tua: ${d === 0 ? "igual" : `${d > 0 ? "+" : "−"}${Math.abs(d)} ${Math.abs(d) === 1 ? "volta" : "voltas"}`}`;
          }
        }
      }
      if (mode === "laps") {
        totalEl.innerHTML = `
          <span class="fc-result-label">Tempo total da estratégia</span>
          <span class="fc-total-value">${fmtRace(trackTime + pitTotal)}</span>
          <span class="fc-total-sub">Em pista ${fmtRace(trackTime)} · nas boxes ${pitTxt} · ${stops === 1 ? "1 paragem" : `${stops} paragens`}</span>
          ${cmp ? `<span class="fc-total-cmp">${cmp}</span>` : ""}`;
      } else {
        // in a timed race the laps decide the result, so they are the headline
        const avg = trackTime / laps;
        const done = lapsDone(trackTime, pitTotal);
        const total = done * avg + pitTotal;
        totalEl.innerHTML = `
          <span class="fc-result-label">Voltas em ${num("fc-duration")} min · corrida por tempo</span>
          <span class="fc-total-value">${done} voltas</span>
          <span class="fc-total-sub">Cortas a meta aos <strong>${fmtRace(total)}</strong> · em pista ${fmtRace(done * avg)} · nas boxes ${pitTxt} · ${stops === 1 ? "1 paragem" : `${stops} paragens`} · volta média ${fmtLap(avg)}</span>
          ${cmp ? `<span class="fc-total-cmp">${cmp}</span>` : ""}`;
      }
    }
  }

  form.addEventListener("input", calc);
  form.addEventListener("change", calc);
  form.addEventListener("submit", e => e.preventDefault());
  calc();
});
