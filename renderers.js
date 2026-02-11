import { $, el } from "./dom.js";

export function mountText(SITE) {
  $("#brandName").textContent = SITE.name;
  $("#kicker").textContent = SITE.roleKicker;
  $("#headline").textContent = SITE.headline;
  $("#bio").textContent = SITE.bio;

  $("#resumeBtn").href = SITE.links.resume.url;
  $("#githubBtn").href = SITE.links.github.url;
  $("#itchBtn").href = SITE.links.itch.url;
  $("#linkedinBtn").href = SITE.links.linkedin.url;

  const year = new Date().getFullYear();
  $("#year").textContent = year;
  // keeps your "© YEAR Name" clean
  $("#footerLeft").textContent = `© ${year} ${SITE.name}`;

  $("#emailLine").innerHTML = `<a class="link" href="mailto:${SITE.contact.email}">${SITE.contact.email}</a>`;
  $("#availabilityLine").textContent = SITE.contact.availability;
}

export function mountNav(SITE) {
  const nav = $("#navLinks");
  nav.innerHTML = "";
  SITE.nav.forEach(n => nav.appendChild(el("a", { href: n.href }, n.label)));
  $("#ctaBtn").href = "#contact";
}

export function mountPills(SITE) {
  const qp = $("#quickPills");
  qp.innerHTML = "";
  SITE.quickPills.forEach(p => qp.appendChild(el("span", { class: "pill" }, p)));
}

export function mountHighlights(SITE) {
  const h = $("#highlights");
  h.innerHTML = "";
  SITE.highlights.forEach(line => {
    h.appendChild(el("div", { class: "item" }, [
      el("b", {}, line.split("—")[0] || "Highlight"),
      el("div", { class: "muted" }, line)
    ]));
  });
}

export function mountAbout(SITE) {
  $("#aboutText").textContent = SITE.about.text;
  $("#aboutBullets").innerHTML = SITE.about.bullets.map(b => `• ${b}`).join("<br/>");
}

export function mountSkills(SITE) {
  const sg = $("#skillGrid");
  sg.innerHTML = "";
  SITE.skills.forEach(s => {
    sg.appendChild(el("div", { class: "item col-6" }, [
      el("b", {}, s.group),
      el("div", { class: "muted" }, s.items.join(" • "))
    ]));
  });
}

function searchableText(p) {
  return [
    p.title, p.blurb, p.role, p.time,
    ...(p.tags || []),
    ...((p.links || []).map(x => x.label))
  ].filter(Boolean).join(" ").toLowerCase();
}

function projectCard(p) {
  const tags = el("div", { class: "tags" }, (p.tags || []).map(t => el("span", { class: "tag" }, t)));
  const actions = el("div", { class: "proj-actions" },
    (p.links || []).map(l => el("a", { class: "link", href: l.url, target: "_blank", rel: "noopener" }, l.label))
  );

  return el("article", { class: "card proj col-6", "data-search": searchableText(p) }, [
    el("div", { class: "thumb" }, p.thumbnailText || "Add thumbnail"),
    el("div", {}, [
      el("h3", {}, p.title),
      el("div", { class: "meta" }, [
        p.role ? `Role: ${p.role}` : "",
        p.time ? `• ${p.time}` : ""
      ].filter(Boolean).join(" ")),
      el("p", { class: "muted", style: "margin:8px 0 0" }, p.blurb || ""),
      el("div", { style: "height:8px" }),
      tags,
      actions
    ])
  ]);
}

export function mountProjects(SITE) {
  const grid = $("#projectGrid");
  grid.innerHTML = "";
  SITE.projects.forEach(p => grid.appendChild(projectCard(p)));
  updateResultCount();
}

export function mountExperience(SITE) {
  const x = $("#xpList");
  x.innerHTML = "";
  SITE.experience.forEach(e => {
    x.appendChild(el("div", { class: "item" }, [
      el("b", {}, e.title),
      el("div", { class: "muted small" }, e.date || ""),
      el("div", { class: "muted", style: "margin-top:6px" }, e.details || "")
    ]));
  });
}

export function mountContactLinks(SITE) {
  const c = $("#contactLinks");
  c.innerHTML = "";
  const links = [
    SITE.links.github,
    SITE.links.linkedin,
    SITE.links.itch,
    ...(SITE.contact.extraLinks || [])
  ].filter(Boolean);

  links.forEach(l => c.appendChild(
    el("a", { class: "link", href: l.url, target: "_blank", rel: "noopener" }, l.label)
  ));
}

// --- search ---
export function setupSearch() {
  const input = $("#projectSearch");

  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== input) {
      e.preventDefault();
      input.focus();
    }
    if (e.key === "Escape" && document.activeElement === input) {
      input.value = "";
      input.blur();
      filterProjects("");
    }
  });

  input.addEventListener("input", (e) => filterProjects(e.target.value));
}

function filterProjects(q) {
  const query = (q || "").trim().toLowerCase();
  const cards = [...document.querySelectorAll("#projectGrid article")];
  let shown = 0;

  cards.forEach(card => {
    const hay = card.getAttribute("data-search") || "";
    const ok = !query || hay.includes(query);
    card.style.display = ok ? "" : "none";
    if (ok) shown++;
  });

  updateResultCount(shown, cards.length);
}

function updateResultCount(shown, total) {
  const cards = [...document.querySelectorAll("#projectGrid article")];
  const t = total ?? cards.length;
  const s = shown ?? cards.filter(c => c.style.display !== "none").length;
  $("#resultCount").textContent = `${s}/${t}`;
}
