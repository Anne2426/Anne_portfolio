/* ═══════════════════════════════════════════
   ANNE ANITA BEAULA P — Portfolio Script
═══════════════════════════════════════════ */

"use strict";

/* ─── DATA ─── */

const SKILLS = [
  {
    cat: "Programming Languages", icon: "💻",
    skills: ["Python", "SQL"]
  },
  {
    cat: "Data Analysis Libraries", icon: "📊",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"]
  },
  {
    cat: "Data Visualization", icon: "📈",
    skills: ["Power BI", "Tableau", "Microsoft Excel"]
  },
  {
    cat: "Databases", icon: "🗄️",
    skills: ["MySQL", "PostgreSQL"]
  },
  {
    cat: "Tools & Platforms", icon: "🔧",
    skills: ["Git", "GitHub", "Google Colab", "VS Code", "Jupyter Notebook", "PuTTY", "WinSCP"]
  },
  {
    cat: "Core Concepts", icon: "🧠",
    skills: ["Data Analytics", "Exploratory Data Analysis", "Data Cleaning", "Dashboard Development", "Machine Learning", "Business Reporting", "Statistical Analysis"]
  }
];

const EXPERIENCES = [
  {
    role: "Data Analytics Intern", company: "Skillfied Mentor",
    period: "Jun 2025 – Jul 2025", type: "Data Analytics",
    highlights: [
      "Performed data preprocessing and cleaning on large datasets",
      "Conducted exploratory data analysis to uncover key trends",
      "Developed interactive dashboards for business stakeholders",
      "Created KPI reports and actionable business insights",
      "Worked with Python and Excel for analysis pipelines"
    ]
  },
  {
    role: "Data Science Intern", company: "Vcodez",
    period: "Nov 2025 – Feb 2026", type: "Data Science",
    highlights: [
      "Conducted feature engineering for ML model improvements",
      "Performed data cleaning and in-depth analysis",
      "Identified meaningful trends and patterns in complex datasets",
      "Created analytical visualizations for stakeholder reporting"
    ]
  },
  {
    role: "Data Analytics Intern", company: "Zaalima Development",
    period: "Nov 2025 – Feb 2026", type: "Data Analytics",
    highlights: [
      "Analyzed complex business datasets to uncover insights",
      "Generated structured reports for management teams",
      "Created visual insights and dashboards for stakeholders"
    ]
  },
  {
    role: "Data Analytics Intern", company: "CodeAlpha",
    period: "Jan 2026 – Feb 2026", type: "Data Analytics",
    highlights: [
      "Developed SQL-based data analysis pipelines",
      "Built performance dashboards to track business KPIs",
      "Analyzed business metrics and identified growth opportunities",
      "Presented data-driven insights to stakeholders"
    ]
  },
  {
    role: "Data Analytics Intern", company: "Cognify Technology",
    period: "Jan 2026 – Feb 2026", type: "Data Analytics",
    highlights: [
      "Conducted thorough exploratory data analysis",
      "Built analytical reports for operations teams",
      "Supported operational decision-making with data"
    ]
  }
];

const PROJECTS = [
  {
    id: 1, title: "Banking Data Analysis", cat: "Finance",
    desc: "Analyzed customer transaction data to identify financial trends, deposit behavior, and loan performance across customer segments.",
    features: ["Customer Segmentation", "Loan Performance", "Deposit Trends", "KPI Dashboard"],
    tools: ["Python", "Power BI", "Excel", "SQL"]
  },
  {
    id: 2, title: "Term Deposit Subscription", cat: "Marketing Analytics",
    desc: "Analyzed demographic and marketing campaign data to determine key factors influencing client term deposit subscriptions.",
    features: ["Customer Behavior", "Campaign Evaluation", "Subscription Trends"],
    tools: ["Python", "Pandas", "Power BI"]
  },
  {
    id: 3, title: "E-Commerce Funnel Analysis", cat: "E-Commerce",
    desc: "Analyzed user journeys across e-commerce funnels, identifying drop-off points and optimizing conversion paths.",
    features: ["Funnel Analysis", "Drop-off Detection", "Conversion Optimization", "User Behavior"],
    tools: ["Python", "Tableau", "SQL"]
  },
  {
    id: 4, title: "Optistock – Supply Chain", cat: "Supply Chain",
    desc: "Evaluated inventory turnover and supply chain performance metrics for logistics optimization and demand forecasting.",
    features: ["Demand Forecasting", "Inventory Optimization", "KPI Monitoring"],
    tools: ["Power BI", "Excel", "Python"]
  },
  {
    id: 5, title: "Talentview – HR Dashboard", cat: "HR Analytics",
    desc: "Analyzed employee data to identify attrition patterns and workforce trends enabling proactive retention strategies.",
    features: ["Attrition Analysis", "Workforce Planning", "Retention Metrics", "HR Dashboard"],
    tools: ["Power BI", "Excel", "SQL"]
  },
  {
    id: 6, title: "Sentiment Analysis", cat: "Machine Learning",
    desc: "Performed sentiment classification on customer reviews and social media data using NLP pipelines and ML classifiers.",
    features: ["Text Preprocessing", "Sentiment Classification", "NLP Analytics", "Trend Visualization"],
    tools: ["Python", "Pandas", "Scikit-Learn"]
  },
  {
    id: 7, title: "Restaurant Data Analysis", cat: "Business Intelligence",
    desc: "Analyzed restaurant business data to uncover sales trends and customer preferences with performance dashboards.",
    features: ["Revenue Analysis", "Customer Preferences", "Performance Tracking", "Dashboard Reporting"],
    tools: ["Power BI", "Excel", "Python"]
  }
];

const PROJECT_CATS = ["All", "Finance", "Marketing Analytics", "E-Commerce", "Supply Chain", "HR Analytics", "Machine Learning", "Business Intelligence"];

const CERTS = [
  { name: "Career Essentials in Data Analysis",  issuer: "Microsoft & LinkedIn", abbr: "MS", bg: "rgba(0,120,212,.15)",  bc: "rgba(0,120,212,.3)",  tc: "#60a5fa" },
  { name: "Secure Data Access in Power BI",       issuer: "Microsoft",           abbr: "MS", bg: "rgba(0,120,212,.15)",  bc: "rgba(0,120,212,.3)",  tc: "#60a5fa" },
  { name: "Data Visualization",                   issuer: "TATA",                abbr: "TA", bg: "rgba(37,99,235,.15)",  bc: "rgba(37,99,235,.35)", tc: "#93c5fd" },
  { name: "Gen AI Powered Data Analytics",        issuer: "TATA",                abbr: "TA", bg: "rgba(37,99,235,.15)",  bc: "rgba(37,99,235,.35)", tc: "#93c5fd" },
  { name: "Google Analytics",                     issuer: "Google",              abbr: "G",  bg: "rgba(66,133,244,.15)", bc: "rgba(66,133,244,.35)",tc: "#93c5fd" },
  { name: "Microsoft Excel for Data Analysis",    issuer: "Coursera",            abbr: "CR", bg: "rgba(0,86,211,.15)",   bc: "rgba(0,86,211,.35)",  tc: "#60a5fa" },
  { name: "AWS Cloud Technical Essentials",       issuer: "Coursera / AWS",      abbr: "AW", bg: "rgba(255,153,0,.12)", bc: "rgba(255,153,0,.3)",  tc: "#fbbf24" }
];

const ACHIEVEMENTS = [
  {
    medal: "🥇", rank: "1st Prize", color: "#f59e0b",
    event: "Ideathon", proj: "Digital Health Solution",
    desc: "Created an innovative digital health platform recognized as the best solution for healthcare accessibility challenges."
  },
  {
    medal: "🥈", rank: "2nd Prize", color: "#94a3b8",
    event: "Paper Presentation", proj: "Baby Health Passport",
    desc: "Presented a comprehensive baby health monitoring and digital passport system for pediatric care data management."
  },
  {
    medal: "🥉", rank: "3rd Prize", color: "#cd7f32",
    event: "National Hackathon", proj: "Smart Waste Management",
    desc: "Developed an intelligent waste management solution leveraging IoT and data analytics for smart city optimization."
  }
];

/* ─── CHART SVG ─── */
function chartSVG() {
  return `<svg width="160" height="70" viewBox="0 0 160 70" fill="none">
    <polyline points="10,58 40,40 70,44 100,26 130,33 150,16"
      stroke="rgba(96,165,250,.65)" stroke-width="2" fill="none"
      stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="18" y="46" width="12" height="20" rx="2" fill="rgba(37,99,235,.4)"/>
    <rect x="45" y="36" width="12" height="30" rx="2" fill="rgba(59,130,246,.3)"/>
    <rect x="72" y="40" width="12" height="26" rx="2" fill="rgba(37,99,235,.4)"/>
    <rect x="99" y="26" width="12" height="40" rx="2" fill="rgba(96,165,250,.3)"/>
    <rect x="126" y="32" width="12" height="34" rx="2" fill="rgba(37,99,235,.4)"/>
  </svg>`;
}

/* ─── RENDER SKILLS ─── */
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  grid.innerHTML = "";
  SKILLS.forEach(s => {
    const card = document.createElement("div");
    card.className = "card skill-card";
    card.innerHTML = `
      <div class="skill-card-header">
        <div class="icon-box">${s.icon}</div>
        <div class="skill-card-title">${s.cat}</div>
      </div>
      <div class="skill-chips">
        ${s.skills.map(sk => `<span class="chip">${sk}</span>`).join("")}
      </div>`;
    grid.appendChild(card);
  });
}

/* ─── RENDER TIMELINE ─── */
function renderTimeline() {
  const wrap = document.getElementById("timeline");
  if (!wrap) return;
  wrap.innerHTML = `<div class="timeline-rail"></div>`;
  EXPERIENCES.forEach(e => {
    const item = document.createElement("div");
    item.className = "exp-item";
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="card card-accent" style="padding:1.4rem 1.65rem">
        <div class="exp-head">
          <div>
            <div class="exp-title">${e.role}</div>
            <div class="exp-company">${e.company}</div>
          </div>
          <div class="exp-meta">
            <span class="period-pill">${e.period}</span>
            <span class="type-pill">${e.type}</span>
          </div>
        </div>
        <ul class="exp-list">
          ${e.highlights.map(h => `<li><span class="exp-dot"></span>${h}</li>`).join("")}
        </ul>
      </div>`;
    wrap.appendChild(item);
  });
}

/* ─── RENDER PROJECTS ─── */
let activeCat = "All";

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const list = activeCat === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === activeCat);
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "proj-card";
    card.innerHTML = `
      <div class="proj-visual">${chartSVG()}</div>
      <div class="proj-body">
        <div class="proj-cat">${p.cat}</div>
        <div class="proj-name">${p.title}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="feat-chips">
          ${p.features.map(f => `<span class="feat-chip">${f}</span>`).join("")}
        </div>
        <div class="proj-tools">
          ${p.tools.map(t => `<span class="chip">${t}</span>`).join("")}
        </div>
        <div class="proj-btns">
          <a href="https://github.com/Anne2426" target="_blank" rel="noopener"
             class="btn btn-g btn-sm" style="flex:1;justify-content:center">
            GitHub
          </a>
          <button class="btn btn-p btn-sm" style="flex:1;justify-content:center">
            Case Study
          </button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function renderFilterBar() {
  const bar = document.getElementById("filter-bar");
  if (!bar) return;
  bar.innerHTML = "";
  PROJECT_CATS.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === "All" ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activeCat = cat;
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects();
    });
    bar.appendChild(btn);
  });
}

/* ─── RENDER CERTIFICATIONS ─── */
function renderCerts() {
  const grid = document.getElementById("cert-grid");
  if (!grid) return;
  grid.innerHTML = "";
  CERTS.forEach(c => {
    const card = document.createElement("div");
    card.className = "card cert-card";
    card.innerHTML = `
      <div class="cert-logo" style="background:${c.bg};border:1px solid ${c.bc};color:${c.tc}">${c.abbr}</div>
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-name">${c.name}</div>
      <button class="btn btn-g btn-sm" style="align-self:flex-start">Verify ↗</button>`;
    grid.appendChild(card);
  });
}

/* ─── RENDER ACHIEVEMENTS ─── */
function renderAchievements() {
  const grid = document.getElementById("ach-grid");
  if (!grid) return;
  grid.innerHTML = "";
  ACHIEVEMENTS.forEach(a => {
    const card = document.createElement("div");
    card.className = "ach-card";
    card.style.borderTop = `3px solid ${a.color}`;
    card.innerHTML = `
      <span class="ach-medal">${a.medal}</span>
      <div class="ach-rank" style="background:${a.color}20;border:1px solid ${a.color}44;color:${a.color}">${a.rank}</div>
      <div class="ach-event">${a.event}</div>
      <div class="ach-proj">${a.proj}</div>
      <div class="ach-desc">${a.desc}</div>`;
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = `0 12px 36px ${a.color}25`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "";
    });
    grid.appendChild(card);
  });
}

/* ─── SCROLL PROGRESS + NAV ACTIVE ─── */
function initScroll() {
  const bar  = document.getElementById("scroll-bar");
  const nav  = document.getElementById("nav");
  const ids  = ["hero","about","skills","experience","projects","certifications","achievements","contact"];

  window.addEventListener("scroll", () => {
    /* progress bar */
    const total = document.body.scrollHeight - window.innerHeight;
    if (bar && total > 0) bar.style.width = ((window.scrollY / total) * 100) + "%";

    /* nav shadow */
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);

    /* active nav link */
    let current = "hero";
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 130) current = id;
    });
    document.querySelectorAll(".nav-link").forEach(link => {
      const fn = link.getAttribute("onclick") || "";
      link.classList.toggle("active", fn.includes("'" + current + "'"));
    });
  }, { passive: true });
}

/* ─── SMOOTH SCROLL ─── */
function scrollTo2(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

/* ─── MOBILE MENU ─── */
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const btn  = document.getElementById("hamburger");
  if (!menu || !btn) return;
  menu.classList.toggle("open");
  btn.classList.toggle("open");
}

function closeMenu() {
  const menu = document.getElementById("mobile-menu");
  const btn  = document.getElementById("hamburger");
  if (menu) menu.classList.remove("open");
  if (btn)  btn.classList.remove("open");
}

/* ─── CONTACT FORM ─── */
function submitForm() {
  const name    = document.getElementById("f-name").value.trim();
  const email   = document.getElementById("f-email").value.trim();
  const success = document.getElementById("success-msg");

  if (!name || !email) {
    alert("Please fill in your name and email address.");
    return;
  }

  ["f-name", "f-email", "f-subj", "f-msg"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  if (success) {
    success.style.display = "block";
    setTimeout(() => { success.style.display = "none"; }, 4500);
  }
}

/* ─── INTERSECTION OBSERVER (fade-in cards) ─── */
function initObserver() {
  const options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll(".card, .proj-card, .ach-card, .stat-card").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease";
    observer.observe(el);
  });
}

/* ─── INIT ─── */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderTimeline();
  renderFilterBar();
  renderProjects();
  renderCerts();
  renderAchievements();
  initScroll();
  initObserver();
});
