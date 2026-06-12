# Atelier — Studio di architettura

Sito web responsive mobile-first per uno studio di architettura fittizio, sviluppato come progetto settimanale.

## Stack

- **HTML5** — struttura semantica con `<template>` nativi per l'iniezione dinamica dei componenti
- **Bootstrap 5.3.3** (CDN) — griglia responsive, componenti (navbar, card, modal, form), dark mode via `data-bs-theme`
- **Bootstrap Icons 1.11.3** (CDN)
- **SCSS** (Dart Sass) — architettura a partials con `@use`, variabili brand, mixin riutilizzabili
- **Vanilla JS** — nessuna dipendenza esterna

## Struttura SCSS

```
assets/scss/
  style.scss                  ← manifest (3 @use: variabili, mixin, components)
  partials/
    _variabili.scss           ← colori brand, shadow, radius
    _mixin.scss               ← dark-link(), card-hover()
    _components.scss          ← sub-manifest dei componenti
    components/
      _base.scss              ← body, .btn-primary override
      _navbar.scss            ← sticky navbar, hamburger, theme toggle
      _hero.scss              ← hero section
      _servizi.scss           ← cards servizi
      _lavori.scss            ← cards lavori + filtri
      _contatti.scss          ← form contatti
      _footer.scss            ← footer 3 colonne
```

## Funzionalità

- **Navbar** sticky con hamburger su mobile/tablet, menu espanso su desktop; toggle tema sempre visibile
- **Dark mode** — toggle chiaro/scuro via `data-bs-theme` su `<html>`, Bootstrap gestisce tutti i componenti automaticamente
- **Sezione Servizi** — 3 card iniettate via `<template>` + `cloneNode` + `forEach`; click apre modale Bootstrap con descrizione completa
- **Sezione Lavori** — 6 card con immagini reali (Unsplash CDN), stessa logica template/iniezione; filtro per categoria con event delegation e re-render senza `innerHTML`; click apre modale con immagine grande e descrizione
- **Form contatti** — validazione JS con `if` (nome obbligatorio, email con `@`, messaggio minimo 20 caratteri); feedback visivo con classi Bootstrap `is-invalid`
- **Footer** — 3 colonne (brand + indirizzo, link interni, contatti) con copyright
