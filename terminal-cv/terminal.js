/* ============================================================
   Interactive CV Terminal — engine
   ============================================================ */

(() => {
  "use strict";

  const output   = document.getElementById("output");
  const input    = document.getElementById("cmd");
  const chipsEl  = document.getElementById("chips");
  const langBtn  = document.getElementById("lang-toggle");
  const clockEl  = document.getElementById("clock");
  const locEl    = document.getElementById("loc-label");
  const scrollEl = document.getElementById("scroll-area");

  let LANG = "en";
  const cmdHistory = [];
  let hIdx = -1;
  let bootCancelled = false;

  const t = () => DATA[LANG];
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  /* ---------- output helpers ---------- */

  function makeLine(cls) {
    const d = document.createElement("div");
    d.className = "line" + (cls ? " " + cls : "");
    const dir = LANG === "ar" ? "rtl" : "ltr";
    d.setAttribute("dir", dir);
    if (dir === "rtl") d.classList.add("ar");
    return d;
  }

  function print(html, cls) {
    const d = makeLine(cls);
    d.innerHTML = html || "&nbsp;";
    output.appendChild(d);
    scrollBottom();
    return d;
  }

  function printBlank() { print("&nbsp;"); }

  function sectionTitle(text) {
    const d = makeLine("t-title");
    d.innerHTML = `<span class="t-title-mark">──</span> ${text}`;
    output.appendChild(d);
    scrollBottom();
  }

  function field(name, valueHTML) {
    const d = makeLine("t-field");
    d.innerHTML = `<span class="t-key">${name}:</span> <span class="t-value">${valueHTML}</span>`;
    output.appendChild(d);
    scrollBottom();
  }

  function bullet(html) {
    const d = makeLine("t-bullet");
    d.innerHTML = `<span class="b-mark">▸</span> ${html}`;
    output.appendChild(d);
    scrollBottom();
  }

  function tagRow(items) {
    const d = makeLine("t-tags");
    d.innerHTML = items.map((s) => `<span class="tag">${s}</span>`).join(" ");
    output.appendChild(d);
    scrollBottom();
  }

  function card(inner) {
    const d = makeLine("card");
    d.innerHTML = inner;
    output.appendChild(d);
    scrollBottom();
  }

  function link(label, url) {
    return `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
  }

  function echoPrompt(cmd) {
    const d = makeLine("cmd-echo");
    d.setAttribute("dir", "ltr");
    d.innerHTML =
      `<span class="p-user">visitor</span><span class="p-at">@</span><span class="p-host">mohammednaji</span>` +
      `<span class="p-path">:~$</span> <span class="p-cmd"></span>`;
    d.querySelector(".p-cmd").textContent = cmd;
    output.appendChild(d);
    scrollBottom();
  }

  function scrollBottom() {
    scrollEl.scrollTop = scrollEl.scrollHeight;
  }

  /* ---------- commands ---------- */

  const handlers = {

    help() {
      const T = t();
      sectionTitle(LANG === "ar" ? "الأوامر المتاحة" : "Available commands");
      printBlank();
      Object.entries(T.commands).forEach(([cmd, desc]) => {
        const d = makeLine("t-help-row");
        d.innerHTML = `<span class="cmd-name">${cmd}</span><span class="cmd-desc">${desc}</span>`;
        output.appendChild(d);
      });
      printBlank();
      print(T.hiddenHint, "t-dim");
      printBlank();
    },

    whoami() {
      const W = t().whoami;
      card(`
        <div class="idcard">
          <div class="id-name">${W.name}</div>
          <div class="id-alias">aka. ${W.alias}</div>
          <div class="id-row"><span>${W.role}</span></div>
          <div class="id-row t-dim">📍 ${W.location}</div>
          <div class="id-status">● ${W.status}</div>
        </div>`);
    },

    about() {
      sectionTitle(LANG === "ar" ? "النبذة المهنية" : "Professional profile");
      printBlank();
      print(t().about);
      printBlank();
    },

    skills() {
      sectionTitle(LANG === "ar" ? "المهارات التقنية" : "Technical skills");
      printBlank();
      t().skills.forEach((s) => {
        const d = makeLine("t-skill-title");
        d.innerHTML = `<span class="t-green">[${s.title}]</span>`;
        output.appendChild(d);
        const it = makeLine("t-skill-items");
        it.innerHTML = s.items.map((x) => `<span class="t-dim">→</span> ${x}`).join("&nbsp;&nbsp;·&nbsp;&nbsp;");
        output.appendChild(it);
        printBlank();
      });
    },

    projects() {
      sectionTitle(LANG === "ar" ? "المشاريع المختارة" : "Selected projects");
      printBlank();
      t().projects.forEach((pr, i) => {
        const d = makeLine("t-project-row");
        d.innerHTML = `<span class="t-green">[${i + 1}]</span> <span class="t-bold">${pr.name}</span>`;
        output.appendChild(d);
        const hint = makeLine("t-dim t-project-hint");
        hint.innerHTML = LANG === "ar"
          ? `التفاصيل: <span class="t-amber">project ${i + 1}</span>`
          : `details: <span class="t-amber">project ${i + 1}</span>`;
        output.appendChild(hint);
        printBlank();
      });
    },

    project(arg) {
      const n = parseInt((arg || "").trim(), 10);
      const list = t().projects;
      if (!arg || isNaN(n)) { print(t().messages.projectUsage, "t-dim"); return; }
      if (n < 1 || n > list.length) { print(t().messages.projectNotFound, "t-red"); return; }
      const pr = list[n - 1];
      sectionTitle(pr.name);
      printBlank();
      print(pr.desc);
      printBlank();
      const st = makeLine("t-tags");
      st.innerHTML = `<span class="t-dim">${t().messages.stack}:</span> ` +
        pr.stack.map((s) => `<span class="tag">${s}</span>`).join(" ");
      output.appendChild(st);
      printBlank();
      const hd = makeLine("t-dim");
      hd.innerHTML = `<span class="t-green">▸▸</span> ${t().messages.details}:`;
      output.appendChild(hd);
      pr.bullets.forEach((b) => bullet(b));
      printBlank();
    },

    education() {
      const E = t().education;
      sectionTitle(LANG === "ar" ? "التعليم" : "Education");
      printBlank();
      field(LANG === "ar" ? "الدرجة" : "Degree", E.degree);
      field(LANG === "ar" ? "الجامعة" : "Institution", E.school);
      field(LANG === "ar" ? "الموقع" : "Location", E.place);
      printBlank();
    },

    languages() {
      sectionTitle(LANG === "ar" ? "اللغات" : "Languages");
      printBlank();
      t().languages.forEach((l) => {
        const d = makeLine("t-bullet");
        d.innerHTML = `<span class="b-mark">▸</span> <b>${l.name}</b> — ${l.level}`;
        output.appendChild(d);
      });
      printBlank();
    },

    interests() {
      sectionTitle(LANG === "ar" ? "الاهتمامات المهنية" : "Professional interests");
      printBlank();
      tagRow(t().interests);
      printBlank();
    },

    objective() {
      sectionTitle(LANG === "ar" ? "الهدف المهني" : "Career objective");
      printBlank();
      print(t().objective);
      printBlank();
    },

    contact() {
      const C = t().contact;
      sectionTitle(LANG === "ar" ? "تواصل معي" : "Contact me");
      printBlank();
      field(C.email, `<a href="mailto:${LINKS.email}">${LINKS.email}</a>`);
      field(C.location, C.locationValue);
      field("LinkedIn",  link(LINKS.linkedin, LINKS.linkedin));
      field("GitHub",    link(LINKS.github, LINKS.github));
      printBlank();
      print(C.note, "t-dim");
      printBlank();
    },

    links() {
      sectionTitle(LANG === "ar" ? "الروابط" : "Links");
      printBlank();
      t().links.forEach((l) => {
        field(l.label, link(l.url, l.url));
      });
      printBlank();
    },

    cv() {
      const T = t();
      sectionTitle(LANG === "ar" ? "السيرة الذاتية" : "CV");
      printBlank();
      print(T.cvIntro);
      print(`<a href="mailto:${LINKS.email}">${LINKS.email}</a>`);
      printBlank();
      print(T.cvAlso);
      T.links.forEach((l) => field(l.label, link(l.url, l.url)));
      printBlank();
    },

    banner() { bootBanner(); printBlank(); },

    date() {
      const now = new Date();
      print(now.toLocaleString(LANG === "ar" ? "ar-PS" : "en-GB", {
        dateStyle: "full", timeStyle: "medium"
      }), "t-dim");
      printBlank();
    },

    history() {
      if (!cmdHistory.length) { print(t().messages.emptyHistory, "t-dim"); return; }
      cmdHistory.forEach((c, i) => {
        const d = makeLine("t-dim");
        d.setAttribute("dir", "ltr");
        d.innerHTML = `<span class="t-green">${String(i + 1).padStart(3)}</span>  ${escapeHTML(c)}`;
        output.appendChild(d);
      });
      printBlank();
    },

    clear() { output.innerHTML = ""; },

    lang(arg) {
      const target = (arg || "").trim().toLowerCase();
      if (target === "ar" || target === "arabic" || target === "عربي") setLang("ar");
      else if (target === "en" || target === "english") setLang("en");
      else {
        const d = makeLine("t-dim");
        d.innerHTML = LANG === "ar"
          ? 'الاستخدام: <span class="t-amber">lang ar</span> أو <span class="t-amber">lang en</span>'
          : 'usage: <span class="t-amber">lang ar</span> or <span class="t-amber">lang en</span>';
        output.appendChild(d);
        printBlank();
      }
    },

    /* ---------- easter eggs ---------- */

    sudo(arg) {
      const T = t();
      if ((arg || "").toLowerCase().startsWith("hire")) {
        print(T.eggs.sudoHire, "t-green");
        setTimeout(() => handlers.contact(), 600);
      } else {
        print(T.eggs.sudo, "t-amber");
        printBlank();
      }
    },

    rm() { print(t().eggs.rm, "t-amber"); printBlank(); },

    hack() {
      (async () => {
        for (const l of t().eggs.hack) {
          print(l, l.endsWith("😄") || l.includes("skills") ? "t-green" : "t-dim");
          await sleep(450);
        }
        printBlank();
      })();
    },

    coffee() {
      t().eggs.coffee.forEach((l, i) => print(escapeHTML(l), i === t().eggs.coffee.length - 1 ? "t-amber" : "t-green"));
      printBlank();
    },

    exit() { print(t().eggs.exit, "t-dim"); printBlank(); },

    hello() { print(t().eggs.hello); printBlank(); },
    hi() { handlers.hello(); },
    "salam"() { handlers.hello(); }
  };

  /* ---------- command routing ---------- */

  function escapeHTML(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function run(raw) {
    const cmdline = raw.trim();
    echoPrompt(cmdline);
    if (!cmdline) return;
    cmdHistory.push(cmdline);
    hIdx = -1;

    const parts = cmdline.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(" ");

    if (cmd === "rm" || cmd.startsWith("rm ")) {
      handlers.rm();
    } else if (handlers[cmd]) {
      handlers[cmd](args);
    } else {
      print(t().messages.unknown.replace("{cmd}", escapeHTML(cmd)), "t-red");
      printBlank();
    }
  }

  function setLang(l) {
    LANG = l;
    document.documentElement.lang = l;
    langBtn.textContent = l === "ar" ? "EN" : "عربي";
    locEl.textContent = l === "ar" ? "غزة، فلسطين" : "Gaza, PS";
    print(t().messages.langSet, "t-green");
    printBlank();
  }

  /* ---------- banner / boot ---------- */

  function bootBanner() {
    const d = makeLine("banner");
    d.setAttribute("dir", "ltr");
    d.innerHTML = `<pre>
<span class="t-green">╔════════════════════════════════════════════════╗</span>
  <span class="t-bold">M O H A M M E D&nbsp;&nbsp;N A J I</span>
  <span class="t-dim">aka. Abu Ibrahim · Interactive CV Terminal</span>
  <span class="t-amber">IT · Front-End · Cybersecurity — Gaza, Palestine</span>
<span class="t-green">╚════════════════════════════════════════════════╝</span></pre>`;
    output.appendChild(d);
    scrollBottom();
  }

  async function boot() {
    const T = t();
    for (const l of T.boot) {
      if (!bootCancelled) await sleep(260);
      print(escapeHTML(l), "t-dim t-boot");
    }
    await wait(300);
    bootBanner();
    await wait(250);
    printBlank();
    print(T.welcome1, "t-welcome");
    print(T.welcome2);
    printBlank();
    print(T.hint, "t-dim");
    printBlank();
  }

  const wait = async (ms) => { if (!bootCancelled) await sleep(ms); };

  /* ---------- chips ---------- */

  const CHIPS = ["help", "whoami", "about", "skills", "projects", "contact", "cv"];

  function renderChips() {
    chipsEl.innerHTML = "";
    CHIPS.forEach((c) => {
      const b = document.createElement("button");
      b.className = "chip";
      b.type = "button";
      b.textContent = c;
      b.addEventListener("click", () => { run(c); input.focus(); });
      chipsEl.appendChild(b);
    });
  }

  /* ---------- input handling ---------- */

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const v = input.value;
      input.value = "";
      run(v);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!cmdHistory.length) return;
      hIdx = hIdx === -1 ? cmdHistory.length - 1 : Math.max(0, hIdx - 1);
      input.value = cmdHistory[hIdx];
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (hIdx === -1) return;
      hIdx++;
      if (hIdx >= cmdHistory.length) { hIdx = -1; input.value = ""; }
      else input.value = cmdHistory[hIdx];
    } else if (e.key === "Tab") {
      e.preventDefault();
      const v = input.value.trim().toLowerCase();
      if (!v) return;
      const matches = Object.keys(DATA.en.commands)
        .filter((c) => c.startsWith(v) || (c === "project" && v.startsWith("proj")));
      const unique = [...new Set(matches)];
      if (unique.length === 1) {
        input.value = unique[0] + " ";
      } else if (unique.length > 1) {
        echoPrompt(input.value);
        tagRow(unique);
      }
    }
  });

  /* cancel boot animation on first interaction */
  window.addEventListener("keydown", () => { bootCancelled = true; }, { once: true });
  document.querySelector(".terminal").addEventListener("click", () => {
    bootCancelled = true;
    if (window.getSelection().toString() === "") input.focus();
  });

  /* language toggle button */
  langBtn.addEventListener("click", () => {
    bootCancelled = true;
    const next = LANG === "ar" ? "en" : "ar";
    echoPrompt(`lang ${next}`);
    setLang(next);
    input.focus();
  });

  /* clock */
  function tick() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString("en-GB", { hour12: false });
  }
  setInterval(tick, 1000);
  tick();

  /* go */
  renderChips();
  input.focus();
  boot();
})();
