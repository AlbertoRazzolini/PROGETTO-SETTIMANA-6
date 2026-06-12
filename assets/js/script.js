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
// VALIDAZIONE FORM
// ============================================================
const contattiForm = document.querySelector('#contatti form');

contattiForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const tipoProgetto = document.getElementById('tipoProgetto');
  const messaggio = document.getElementById('messaggio');
  let valido = true;

  if (nome.value.trim() === '') {
    nome.classList.add('is-invalid');
    valido = false;
  } else {
    nome.classList.remove('is-invalid');
  }

  if (!email.value.includes('@') || email.value.trim() === '') {
    email.classList.add('is-invalid');
    valido = false;
  } else {
    email.classList.remove('is-invalid');
  }

  if (tipoProgetto.value === '') {
    tipoProgetto.classList.add('is-invalid');
    valido = false;
  } else {
    tipoProgetto.classList.remove('is-invalid');
  }

  if (messaggio.value.trim().length < 20) {
    messaggio.classList.add('is-invalid');
    valido = false;
  } else {
    messaggio.classList.remove('is-invalid');
  }

  if (valido) {
    contattiForm.reset();
  }
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
    immagine: "https://images.unsplash.com/photo-1682502524896-6d78b9e8413a?w=600&h=400&fit=crop&auto=format&q=80",
    titolo: "Villa Monti",
    anno: 2024,
    categoria: "Residenziale",
    descrizione: "Villa unifamiliare a due piani con ampio giardino e piscina privata. Progettazione integrata degli interni e supervisione cantiere dalla fondazione alla consegna delle chiavi.",
  },
  {
    immagine: "https://images.unsplash.com/photo-1741880893442-66f56ad8f3a4?w=600&h=400&fit=crop&auto=format&q=80",
    titolo: "Studio Legale Ferretti",
    anno: 2024,
    categoria: "Interior design",
    descrizione: "Redesign completo degli spazi di lavoro: reception, uffici privati e sala riunioni. Materiali selezionati, illuminazione su misura e arredi in coordinamento con l'identità dello studio.",
  },
  {
    immagine: "https://images.unsplash.com/photo-1760485275913-158eb385d5b6?w=600&h=400&fit=crop&auto=format&q=80",
    titolo: "Paperopoli",
    anno: 1944,
    categoria: "Ristrutturazione",
    descrizione: "Recupero e valorizzazione di un edificio storico con adeguamento impiantistico completo e restauro conservativo delle finiture originali nel rispetto dei vincoli culturali.",
  },
  {
    immagine: "https://images.unsplash.com/photo-1775059956734-78ffd2075cec?w=600&h=400&fit=crop&auto=format&q=80",
    titolo: "Casa sul Lago",
    anno: 2023,
    categoria: "Residenziale",
    descrizione: "Residenza immersa nel verde con vista lago. Concept open space, grandi vetrate a tutta altezza e materiali naturali per un dialogo continuo tra interno ed esterno.",
  },
  {
    immagine: "https://images.unsplash.com/photo-1758448500688-3ababa93fd67?w=600&h=400&fit=crop&auto=format&q=80",
    titolo: "Showroom Tessuti",
    anno: 2022,
    categoria: "Interior design",
    descrizione: "Allestimento showroom per brand tessile di fascia alta: percorso esperienziale, illuminazione scenografica a led e arredi disegnati su misura per valorizzare le collezioni.",
  },
  {
    immagine: "https://images.unsplash.com/photo-1759300631898-c07422768bb5?w=600&h=400&fit=crop&auto=format&q=80",
    titolo: "Palazzo Storico",
    anno: 2022,
    categoria: "Ristrutturazione",
    descrizione: "Ristrutturazione di palazzo ottocentesco nel centro storico: consolidamento strutturale, nuove partizioni interne e ripristino delle finiture d'epoca con tecniche tradizionali.",
  },
];

const templateLavoro = document.getElementById("cardLavoroTemplate");
const lavoriContainer = document.getElementById("lavoriContainer");
const lavoriFilter = document.getElementById("lavoriFilter");

function renderLavori(filtro) {
  const filtrati =
    filtro === "tutti" ? lavori : lavori.filter((l) => l.categoria === filtro);

  lavoriContainer.replaceChildren();

  filtrati.forEach(({ immagine, titolo, anno, categoria, descrizione }) => {
    const clone = templateLavoro.content.cloneNode(true);
    const img = clone.querySelector(".lavoro__immagine");
    img.src = immagine;
    img.alt = titolo;
    clone.querySelector(".lavoro__titolo").textContent = titolo;
    clone.querySelector(".lavoro__anno").textContent = anno;
    clone.querySelector(".lavoro__categoria").textContent = categoria;
    const card = clone.querySelector(".card");
    card.dataset.immagine = immagine;
    card.dataset.titolo = titolo;
    card.dataset.anno = anno;
    card.dataset.categoria = categoria;
    card.dataset.descrizione = descrizione;
    lavoriContainer.appendChild(clone);
  });
}

const lavoroModal = new bootstrap.Modal(document.getElementById("lavoroModal"));
const lavoroModalTitolo = document.getElementById("lavoroModalTitolo");
const lavoroModalImg = document.getElementById("lavoroModalImg");
const lavoroModalMeta = document.getElementById("lavoroModalMeta");
const lavoroModalDescrizione = document.getElementById("lavoroModalDescrizione");

lavoriContainer.addEventListener("click", (e) => {
  const card = e.target.closest(".card[data-titolo]");
  if (!card) return;

  lavoroModalTitolo.textContent = card.dataset.titolo;
  lavoroModalImg.src = card.dataset.immagine;
  lavoroModalImg.alt = card.dataset.titolo;
  lavoroModalMeta.textContent = `${card.dataset.anno} — ${card.dataset.categoria}`;
  lavoroModalDescrizione.textContent = card.dataset.descrizione;

  lavoroModal.show();
});

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
  const card = clone.querySelector(".card");
  card.dataset.icona = icona;
  card.dataset.titolo = titolo;
  card.dataset.descrizione = descrizione;
  serviziContainer.appendChild(clone);
});

const servizioModal = new bootstrap.Modal(document.getElementById("servizioModal"));
const servizioModalTitolo = document.getElementById("servizioModalTitolo");
const servizioModalIcona = document.getElementById("servizioModalIcona");
const servizioModalDescrizione = document.getElementById("servizioModalDescrizione");

serviziContainer.addEventListener("click", (e) => {
  const card = e.target.closest(".card[data-titolo]");
  if (!card) return;

  servizioModalTitolo.textContent = card.dataset.titolo;
  servizioModalIcona.textContent = card.dataset.icona;
  servizioModalDescrizione.textContent = card.dataset.descrizione;

  servizioModal.show();
});
