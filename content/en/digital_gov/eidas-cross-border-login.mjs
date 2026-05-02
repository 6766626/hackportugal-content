export default {
  editorialVoice: 'hackportugal',
  id: 'eidas-cross-border-login',
  categoryId: 'digital_gov',
  title: 'eIDAS: logging in to Portuguese public services with another EU country’s eID',
  tldr: 'Autenticação Europeia on autenticacao.gov.pt lets you log in to some Portuguese public services using the national eID of another EU/EEA country, if the eID scheme is officially connected to eIDAS. It is free and useful before you obtain a Cartão de Cidadão or Chave Móvel Digital. It does not work everywhere: the service must accept European authentication, and operations may still require a NIF, NISS, número de utente or Portuguese signature.',
  tags: ['eidas', 'cmd', 'government', 'eu'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Autenticação Europeia is',
      content: [
        { kind: 'paragraph', text: 'Autenticação Europeia is login through Portugal’s eIDAS node. Instead of a Cartão de Cidadão or Chave Móvel Digital, you choose the electronic identification of another EU/EEA country: for example, an eID card, banking eID or mobile eID, if that scheme has been officially notified under eIDAS and connected to cross-border login.' },
        { kind: 'paragraph', text: 'A practical expat scenario: you already have an eID from Estonia, Latvia, Lithuania, Germany, Belgium, Italy, Spain, the Netherlands or another connected country, but have not yet received a Portuguese Cartão de Cidadão/CMD. Through Autenticação Europeia you can log in to some Portuguese portals where access is handled through autenticacao.gov.pt.' },
        { kind: 'warning', text: 'This is not a “Portuguese account” and not an automatic replacement for CMD. eIDAS confirms your identity, but the Portuguese service may not find you in its database without a NIF, NISS, número de utente, AIMA process number or another local identifier.' }
      ]
    },
    {
      id: 'requirements',
      title: 'What to check in advance',
      content: [
        { kind: 'checklist', items: [
          'Your eID was issued by an EU/EEA country and can be used for online authentication.',
          'Your country’s eID scheme is officially connected to eIDAS; the list of countries and methods may change.',
          'You have a working login method: card + reader, mobile app, PIN codes, Smart-ID/Mobile-ID or equivalent — depending on the country.',
          'Your browser allows redirects and pop-up windows from the domains autenticacao.gov.pt and the national eID provider.',
          'Your first name, surname and date of birth in the eID match what you use in Portuguese documents.',
          'For the target service, you already have a Portuguese identifier if it is needed: NIF for Finanças, NISS for Segurança Social, número de utente for SNS.',
          'If a legally significant document signature is needed in Portugal, check in advance whether the service accepts a foreign eIDAS signature or requires CMD/Cartão de Cidadão.'
        ] }
      ]
    },
    {
      id: 'how-to-login',
      title: 'How to log in with another EU country’s eID',
      content: [
        { kind: 'substeps', items: [
          { id: 'open-service', title: '1. Open the Portuguese service you need', content: [
            { kind: 'paragraph', text: 'Start not from an abstract website, but from a specific portal: ePortugal, portal das Finanças, Segurança Social Direta, SNS 24 or another service. Click login and wait to be redirected to autenticacao.gov.pt.' }
          ] },
          { id: 'choose-european-auth', title: '2. Choose “Autenticação Europeia”', content: [
            { kind: 'paragraph', text: 'On the Autenticação.gov page, Cartão de Cidadão, Chave Móvel Digital and other methods are usually available. For a foreign eID, choose “Autenticação Europeia”. The interface may be in PT/EN; the wording is sometimes shown as “European Authentication”.' }
          ] },
          { id: 'select-country', title: '3. Select the country of your eID', content: [
            { kind: 'paragraph', text: 'Choose the country that issued the eID. You will then be redirected to that country’s national provider: this is where you enter a PIN, confirm in an app or use a card reader.' }
          ] },
          { id: 'confirm-data', title: '4. Confirm the transfer of attributes', content: [
            { kind: 'paragraph', text: 'Basic attributes are usually transferred: first name, surname, date of birth and a unique identifier. Without consent, the transfer will not be completed and the Portuguese service will not receive confirmation of identity.' }
          ] },
          { id: 'return-to-pt', title: '5. Return to the Portuguese portal', content: [
            { kind: 'paragraph', text: 'After successful authentication, you are returned to the original Portuguese service. If the portal additionally asks for a NIF/NISS/utente, this is a normal part of linking your identity to a local record.' }
          ] }
        ] }
      ]
    },
    {
      id: 'where-it-helps',
      title: 'Where this is genuinely useful',
      content: [
        { kind: 'paragraph', text: 'eIDAS is especially useful at the early stage of relocation: you can already confirm your identity at EU level, but you do not yet have Portuguese CMD. This reduces dependence on in-person visits if the specific service supports European login.' },
        { kind: 'checklist', items: [
          'Checking access to ePortugal services where login is handled through autenticacao.gov.pt.',
          'Preliminary work with some administrative forms before obtaining CMD.',
          'Access to portals that accept eIDAS as an authentication method, but then ask for a Portuguese record number.',
          'Using your home country’s eID for identification when you are not eligible for a Cartão de Cidadão.',
          'Situations where CMD has not yet been activated: for example, you have just arrived on a D1-D8 visa or are waiting for an AIMA residence permit.',
          'Confirming your identity without a Portuguese phone number, if your country’s national eID does not depend on one.'
        ] },
        { kind: 'warning', text: 'The key limitation: support depends on the specific service. If there is no “Autenticação Europeia” on the portal or a data-linking error appears after login, this is not a fault with your eID — the service may be configured only for CMD/Cartão de Cidadão or for Portuguese resident records.' }
      ]
    },
    {
      id: 'limits-and-troubleshooting',
      title: 'Limitations and common errors',
      content: [
        { kind: 'checklist', items: [
          '“Country not available” — your country or the specific eID scheme is not connected to eIDAS for this flow.',
          '“Authentication failed” — check your PIN, app, card reader, card certificates and the time on your device.',
          'Blank page after returning — try another browser, disable blockers, allow cookies and pop-ups.',
          'The service cannot see the NIF — eIDAS does not automatically transmit a Portuguese NIF; it must be entered or linked separately.',
          'Different surnames after marriage/transliteration — the Portuguese service may not match the record, and manual verification may be required.',
          'A PDF signature is needed — logging in through eIDAS is not always the same as an electronic signature; check the service requirements.',
          'Financial and tax operations may require separate Finanças access and confirmation through Portal das Finanças.',
          'AIMA processes and residence permit appointments are often tied to a process number, passport, email and local rules, not only to eIDAS.'
        ] },
        { kind: 'warning', text: 'Do not enter your eID PIN on pages that do not belong to your country’s official national provider or autenticacao.gov.pt. A normal eIDAS login always works through a redirect to an official domain, not through a third-party form.' }
      ]
    },
    {
      id: 'after-you-get-cmd',
      title: 'What to do after you obtain CMD or a Cartão de Cidadão',
      content: [
        { kind: 'paragraph', text: 'After obtaining a residence permit and the ability to activate Chave Móvel Digital, it is better to set up CMD: most Portuguese services are optimised for it. CMD is linked to Portuguese identifiers and is more convenient for signing, notifications and regular login.' },
        { kind: 'checklist', items: [
          'Activate CMD through a loja de cidadão, Espaço Cidadão, consulate or available online channels, if you meet the conditions.',
          'Link a Portuguese phone number and email that you actually control.',
          'Test login to ePortugal, Finanças, Segurança Social Direta, SNS 24.',
          'Keep your foreign eID as a backup method for EU services.',
          'For documents where a qualified signature is needed in Portugal, test CMD/Cartão de Cidadão in advance, not on the deadline day.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Login through Autenticação Europeia', amountEUR: 0, note: 'The Portuguese side does not charge for authentication; there may be costs in your country for the card, reader or eID reissue.' }
  ],
  sources: [
    {
      title: 'Autenticação.gov — Autenticação Europeia',
      url: 'https://www.autenticacao.gov.pt/outros-meios/autenticacao-europeia',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'European Commission — eIDAS and cross-border electronic identification',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/eidas-regulation',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regulation (EU) No 910/2014 — eIDAS',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0910',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'European Commission — notified eID schemes under eIDAS',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/eidas-notification',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
