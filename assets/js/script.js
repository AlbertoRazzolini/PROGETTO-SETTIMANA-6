// Atelier — Week Project Settimana VI

// ============================================================
// SERVIZI
// ============================================================
const servizi = [
  {
    icona: '🏠',
    titolo: 'Progettazione residenziale',
    descrizione: 'Case private, ville e ristrutturazioni domestiche, dal sopralluogo alla consegna delle chiavi.'
  },
  {
    icona: '🪑',
    titolo: 'Interior design',
    descrizione: "Allestimenti d'interno per case e uffici, con materiali selezionati e arredo su misura."
  },
  {
    icona: '🧱',
    titolo: 'Ristrutturazioni',
    descrizione: 'Riqualificazione di spazi esistenti, gestione dei lavori e coordinamento con le imprese.'
  }
];

const template = document.getElementById('cardServizioTemplate');
const serviziContainer = document.getElementById('serviziContainer');

servizi.forEach(({ icona, titolo, descrizione }) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector('.servizio__icona').textContent = icona;
  clone.querySelector('.servizio__titolo').textContent = titolo;
  clone.querySelector('.servizio__descrizione').textContent = descrizione;
  serviziContainer.appendChild(clone);
});
