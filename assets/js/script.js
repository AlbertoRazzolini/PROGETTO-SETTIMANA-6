// Atelier — Week Project Settimana VI

// ============================================================
// TEMA CHIARO / SCURO
// ============================================================
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");
const htmlEl = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "light";
htmlEl.setAttribute("data-bs-theme", savedTheme);
themeIcon.className = savedTheme === "dark" ? "bi bi-sun" : "bi bi-moon";

themeToggle.addEventListener("click", () => {
  const next =
    htmlEl.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  htmlEl.setAttribute("data-bs-theme", next);
  themeIcon.className = next === "dark" ? "bi bi-sun" : "bi bi-moon";
  localStorage.setItem("theme", next);
});

// ============================================================
// SERVIZI
// ============================================================
const servizi = [
  {
    icona: "🏠",
    titolo: "Progettazione residenziale",
    descrizione:
      "Case private, ville e ristrutturazioni domestiche, dal sopralluogo alla consegna delle chiavi.",
  },
  {
    icona: "🪑",
    titolo: "Interior design",
    descrizione:
      "Allestimenti d'interno per case e uffici, con materiali selezionati e arredo su misura.",
  },
  {
    icona: "🧱",
    titolo: "Ristrutturazioni",
    descrizione:
      "Riqualificazione di spazi esistenti, gestione dei lavori e coordinamento con le imprese.",
  },
];

// ============================================================
// LAVORI
// ============================================================
const lavori = [
  {
    immagine:
      "https://images.unsplash.com/photo-1682502524896-6d78b9e8413a?w=600&h=400&fit=crop&auto=format&q=80",
    titolo: "Villa Monti",
    anno: 2024,
    categoria: "Residenziale",
  },
  {
    immagine:
      "https://images.unsplash.com/photo-1741880893442-66f56ad8f3a4?w=600&h=400&fit=crop&auto=format&q=80",
    titolo: "Studio Legale Ferretti",
    anno: 2024,
    categoria: "Interior design",
  },
  {
    immagine:
      "https://images.unsplash.com/photo-1760485275913-158eb385d5b6?w=600&h=400&fit=crop&auto=format&q=80",
    titolo: "Paperopoli",
    anno: 1944,
    categoria: "Ristrutturazione",
  },
  {
    immagine:
      "https://images.unsplash.com/photo-1775059956734-78ffd2075cec?w=600&h=400&fit=crop&auto=format&q=80",
    titolo: "Casa sul Lago",
    anno: 2023,
    categoria: "Residenziale",
  },
  {
    immagine:
      "https://images.unsplash.com/photo-1758448500688-3ababa93fd67?w=600&h=400&fit=crop&auto=format&q=80",
    titolo: "Showroom Tessuti",
    anno: 2022,
    categoria: "Interior design",
  },
  {
    immagine:
      "https://images.unsplash.com/photo-1759300631898-c07422768bb5?w=600&h=400&fit=crop&auto=format&q=80",
    titolo: "Palazzo Storico",
    anno: 2022,
    categoria: "Ristrutturazione",
  },
];

const templateLavoro = document.getElementById("cardLavoroTemplate");
const lavoriContainer = document.getElementById("lavoriContainer");
const lavoriFilter = document.getElementById("lavoriFilter");

function renderLavori(filtro) {
  const filtrati =
    filtro === "tutti" ? lavori : lavori.filter((l) => l.categoria === filtro);

  lavoriContainer.replaceChildren();

  filtrati.forEach(({ immagine, titolo, anno, categoria }) => {
    const clone = templateLavoro.content.cloneNode(true);
    const img = clone.querySelector(".lavoro__immagine");
    img.src = immagine;
    img.alt = titolo;
    clone.querySelector(".lavoro__titolo").textContent = titolo;
    clone.querySelector(".lavoro__anno").textContent = anno;
    clone.querySelector(".lavoro__categoria").textContent = categoria;
    lavoriContainer.appendChild(clone);
  });
}

lavoriFilter.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-categoria]");
  if (!btn) return;

  lavoriFilter.querySelectorAll("button").forEach((b) => {
    b.classList.replace("btn-primary", "btn-outline-secondary");
  });
  btn.classList.replace("btn-outline-secondary", "btn-primary");

  renderLavori(btn.dataset.categoria);
});

renderLavori("tutti");

// ============================================================
// SERVIZI
// ============================================================
const template = document.getElementById("cardServizioTemplate");
const serviziContainer = document.getElementById("serviziContainer");

servizi.forEach(({ icona, titolo, descrizione }) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector(".servizio__icona").textContent = icona;
  clone.querySelector(".servizio__titolo").textContent = titolo;
  clone.querySelector(".servizio__descrizione").textContent = descrizione;
  serviziContainer.appendChild(clone);
});
