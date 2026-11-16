/* Ferramentas RTP — acesso reservado aos pilotos da RTP.
   Cada piloto escolhe o seu perfil e entra com a palavra-passe.
   Palavra-passe inicial: o nome do piloto seguido de RTP (ex.: Pedro Venda → PedroVendaRTP);
   tem de ser escrita exatamente assim (maiúsculas, acentos e espaços contam).
   Para dar uma palavra-passe própria a um piloto, junta aqui o hash dela (rtpHash("novapasse")):
   NOTA: o site é estático (GitHub Pages) — isto evita o acesso casual, não é segurança de servidor. */
const TOOLS_PASSWORD_HASH = {
  // "Pedro Venda": "0000000000000",
};

(function () {
  const KEY = "rtp-tools-auth";
  const norm = s => String(s || "");
  // cyrb53: small synchronous string hash
  function rtpHash(str, seed = 27) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0; i < str.length; i++) { const ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
  }
  window.rtpHash = p => rtpHash(norm(p));
  const drivers = (typeof SITE_DATA !== "undefined" && SITE_DATA.drivers) || [];
  const expected = name => TOOLS_PASSWORD_HASH[name] || rtpHash(name.replace(/\s+/g, "") + "RTP");
  const html = document.documentElement;

  function session() {
    try { const s = JSON.parse(localStorage.getItem(KEY) || "null"); if (s && drivers.some(d => d.name === s.driver) && s.key === expected(s.driver)) return s; } catch (e) {}
    return null;
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const photo = d => (d && d.image) || "";

  function unlock(s) {
    html.classList.remove("rtp-locked");
    const g = document.getElementById("rtp-gate"); if (g) g.remove();
    window.RTP_TOOLS_USER = s.driver;
    // chip with the signed-in driver + "Sair"
    if (!document.getElementById("rtp-user-chip")) {
      const d = drivers.find(x => x.name === s.driver) || {};
      const chip = document.createElement("div");
      chip.id = "rtp-user-chip";
      chip.innerHTML = `${photo(d) ? `<img src="${encodeURI(photo(d))}" alt="">` : ""}<span>${esc(s.driver)}</span><button type="button">Sair</button>`;
      chip.querySelector("button").onclick = () => { try { localStorage.removeItem(KEY); } catch (e) {} location.reload(); };
      const host = document.querySelector(".page-hero .container") || document.body;
      host.insertBefore(chip, host.firstChild);
    }
    // tyre & fuel test: start with the signed-in driver if none chosen yet
    const sel = document.getElementById("cfg-driver");
    if (sel && !sel.value && [...sel.options].some(o => o.value === s.driver)) { sel.value = s.driver; sel.dispatchEvent(new Event("change", { bubbles: true })); }
  }

  function gate() {
    html.classList.add("rtp-locked");
    const g = document.createElement("section");
    g.id = "rtp-gate";
    g.innerHTML = `
      <form class="rtp-gate-card" autocomplete="on">
        <img src="images/RTP_LOGO.png" alt="RTP" class="rtp-gate-logo">
        <span class="rtp-gate-tag">Área reservada</span>
        <h1>Ferramentas <span class="text-yellow">RTP</span></h1>
        <p class="rtp-gate-sub">Disponível apenas para os pilotos da RTP Racing Team Project. Escolhe o teu perfil e entra.</p>
        <div class="rtp-gate-who">
          <img id="rtp-gate-photo" alt="">
          <label>Piloto
            <select id="rtp-gate-driver" name="username" required>
              <option value="">— escolhe o teu perfil —</option>
              ${drivers.slice().sort((a, b) => a.name.localeCompare(b.name, "pt")).map(d => `<option value="${esc(d.name)}">${esc(d.name)}${d.number ? " #" + esc(d.number) : ""}</option>`).join("")}
            </select>
          </label>
        </div>
        <label>Palavra-passe
          <span class="rtp-gate-pass"><input id="rtp-gate-pass" type="password" name="password" autocomplete="current-password" required>
          <button type="button" id="rtp-gate-eye" aria-label="Mostrar palavra-passe">👁</button></span>
        </label>
        <p class="rtp-gate-err" id="rtp-gate-err" role="alert"></p>
        <button type="submit" class="btn btn-primary rtp-gate-go">Entrar</button>
        <p class="rtp-gate-help">Esqueceste-te da palavra-passe? Fala com a direção da RTP.</p>
      </form>`;
    const header = document.getElementById("site-header");
    (header && header.nextSibling) ? header.parentNode.insertBefore(g, header.nextSibling) : document.body.prepend(g);
    const $ = id => document.getElementById(id);
    const setPhoto = () => { const d = drivers.find(x => x.name === $("rtp-gate-driver").value); const p = photo(d); $("rtp-gate-photo").src = p ? encodeURI(p) : "images/RTP_LOGO.png"; $("rtp-gate-photo").classList.toggle("is-logo", !p); };
    setPhoto();
    $("rtp-gate-driver").addEventListener("change", () => { setPhoto(); $("rtp-gate-err").textContent = ""; $("rtp-gate-pass").focus(); });
    $("rtp-gate-eye").onclick = () => { const i = $("rtp-gate-pass"); i.type = i.type === "password" ? "text" : "password"; };
    g.querySelector("form").addEventListener("submit", e => {
      e.preventDefault();
      const driver = $("rtp-gate-driver").value, pass = $("rtp-gate-pass").value;
      if (!driver) { $("rtp-gate-err").textContent = "Escolhe o teu perfil de piloto."; return; }
      if (rtpHash(norm(pass)) !== expected(driver)) { $("rtp-gate-err").textContent = "Palavra-passe errada."; $("rtp-gate-pass").select(); return; }
      const s = { driver, key: expected(driver), at: new Date().toISOString() };
      try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (err) {}
      unlock(s);
      window.scrollTo(0, 0);
    });
  }

  const s = session();
  if (s) unlock(s); else gate();
})();
