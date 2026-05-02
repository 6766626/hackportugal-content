export default {
  editorialVoice: 'hackportugal',
  id: 'atestado-domicilio-internacional',
  categoryId: 'documents_fiscal',
  title: 'Atestado de Transposição de Domicílio Fiscal Internacional: certificate confirming transfer of tax residency to Portugal',
  tldr: 'Atestado de Transposição de Domicílio Fiscal Internacional is a free Finanças certificate stating that your domicílio fiscal has been transferred to Portugal. It is often requested by tax authorities, banks and employers abroad when you need to prove that you have become a PT tax resident and no longer declare yourself as resident in the USA/UK/Russian Federation/another country. It is requested online via Portal das Finanças → e-Balcão; you usually need a NIF, an updated address in PT and the year from which confirmation is required.',
  tags: ['finanças', 'nif', 'residency', 'taxes'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What this document is',
      content: [
        { kind: 'paragraph', text: 'Atestado de Transposição de Domicílio Fiscal Internacional is confirmation from the Autoridade Tributária e Aduaneira that your tax address, domicílio fiscal, has been transferred to Portugal. In practice, the certificate is used as evidence for a foreign party: a tax authority, bank, broker, employer, pension fund or consulate.' },
        { kind: 'paragraph', text: 'The document is requested through Portal das Finanças, usually in e-Balcão. There is no state fee: Finanças issues the certificate free of charge in electronic form if your Portuguese tax address is already reflected in the system.' },
        { kind: 'warning', text: 'This is not the same as a Certificado de Residência Fiscal para efeitos de Convenção para Evitar a Dupla Tributação. If a foreign tax authority specifically requests a tax residence certificate under a double taxation treaty, you need a separate Finanças document.' }
      ]
    },
    {
      id: 'when-needed',
      title: 'When it is needed',
      content: [
        { kind: 'checklist', items: [
          'A foreign tax authority asks you to prove that you have ceased to be its tax resident and have moved your centre of tax interests to Portugal.',
          'A bank or broker abroad requests confirmation of a change of tax address and CRS/FATCA status.',
          'An employer, pension fund or insurance company in another country asks for a document showing your new tax domicile.',
          'You are closing tax residency in the country of departure and attach confirmation from PT.',
          'You need to show the date/year from which Finanças considers your domicílio fiscal to be Portuguese.',
          'You are preparing an internal compliance package for a foreign bank together with your NIF, comprovativo de morada and IRS data.'
        ] },
        { kind: 'paragraph', text: 'For the USA, the certificate on its own does not remove obligations relating to citizenship-based taxation and FATCA. For the UK, Russian Federation and other countries, it also does not replace local rules on loss of tax residency. It is Portuguese confirmation, which the foreign party assesses under its own laws.' }
      ]
    },
    {
      id: 'before-request',
      title: 'Check that Finanças sees you as resident',
      content: [
        { kind: 'paragraph', text: 'It makes sense to request the certificate after your domicílio fiscal is already shown in Portugal in Portal das Finanças. If your profile still has a foreign address or your residence permit/address has not been confirmed, e-Balcão may refuse or ask you to update your cadastro first.' },
        { kind: 'checklist', items: [
          'You have a NIF and access to Portal das Finanças: senha de acesso or Chave Móvel Digital (CMD).',
          'In the Dados Cadastrais section, an address in Portugal is shown, not the address of the country of departure.',
          'If you are not an EU/EEA citizen, Finanças usually needs to have a valid residence permit, visa or other lawful-stay document when this is requested for updating the address.',
          'You have proof of address: contrato de arrendamento, escritura, recibo de renda, a utilities bill or atestado de residência from the Junta de Freguesia.',
          'You understand the year from which the certificate is needed: for example, 2025 or 2026, not simply “now”.',
          'If a tax representative was appointed only because you lived outside the EU/EEA, check whether their status needs to be updated after transferring the address to PT.'
        ] },
        { kind: 'warning', text: 'Tax residency under CIRS art. 16 usually arises if you spent more than 183 days in Portugal in any 12 months beginning or ending in the relevant year, or had housing here in circumstances suggesting an intention to make it your habitual residence. Having a NIF by itself does not make you a tax resident.' }
      ]
    },
    {
      id: 'request-online',
      title: 'How to request it via e-Balcão',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Open portaldasfinancas.gov.pt and log in with NIF + senha de acesso or via CMD. Check that you are working in the personal account of the correct NIF, not that of a representative/spouse.' }
          ] },
          { id: 'open-ebalcao', title: '2. Create a request in e-Balcão', content: [
            { kind: 'paragraph', text: 'Go to e-Balcão → Atendimento e-balcão → Registar nova questão. The category names in the Finanças interface change from time to time; choose a subject related to cadastro, domicílio fiscal, residência fiscal or certidões.' }
          ] },
          { id: 'write-request', title: '3. Write a short request in Portuguese', content: [
            { kind: 'paragraph', text: 'In the text, ask: “Solicito a emissão de Atestado de Transposição de Domicílio Fiscal Internacional, comprovativo da transferência do meu domicílio fiscal para Portugal, para efeitos de apresentação junto de autoridade/entidade estrangeira.” Specify the year and the country for which the document is needed.' }
          ] },
          { id: 'attach', title: '4. Attach documents if there is a risk of a follow-up request', content: [
            { kind: 'checklist', items: [
              'Passport or Cartão de Cidadão/residence permit, if Finanças may request identification.',
              'Comprovativo de morada in Portugal.',
              'A screenshot or PDF from the foreign tax authority/bank requesting the certificate, if the wording is non-standard.',
              'Power of attorney, if the request is submitted by a contabilista or representative.',
              'A translation is not needed for Finanças, but may be needed by the foreign party after issue.'
            ] }
          ] },
          { id: 'download', title: '5. Receive the reply and download the PDF', content: [
            { kind: 'paragraph', text: 'The reply arrives in e-Balcão. If the document is ready, Finanças attaches the PDF or gives instructions on where to download it. If they refuse, the usual reason is an out-of-date address, lack of confirmation of residency or a request submitted in the wrong category.' }
          ] }
        ] }
      ]
    },
    {
      id: 'wording-and-use',
      title: 'How to use it abroad',
      content: [
        { kind: 'paragraph', text: 'Before sending it to the foreign party, check that the certificate correctly states your name, NIF, address, date/year of transfer of domicílio fiscal and the wording about Portugal. If an apostille or certified translation is needed, that is a requirement of the receiving authority, not of Finanças.' },
        { kind: 'checklist', items: [
          'For a bank, the PDF from Finanças + an English translation is often sufficient.',
          'For a tax authority abroad, a sworn/certified translation may be needed.',
          'For Hague Convention countries, an apostila is sometimes requested; check in advance, because electronic tax documents cannot always be apostilled directly.',
          'If they specifically require a treaty residence certificate, request a Certificado de Residência Fiscal, not an atestado de transposição.',
          'Keep the original PDF and the e-Balcão confirmation: this is useful in a dispute about the request date.',
          'If the country of departure determines residency by days of presence, also attach travel history, a rental contract in PT, recibos de renda, an employment contract or evidence of the centre of vital interests.'
        ] },
        { kind: 'warning', text: 'Do not tell a foreign tax authority that the certificate automatically terminates your old residency. In 2026, each country applies its own tests: days, permanent home, centre of vital interests, citizenship, domicile, treaty tie-breaker.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Common problems and quick solutions',
      content: [
        { kind: 'checklist', items: [
          'Finanças still has a foreign address — first update your domicílio fiscal, then repeat the request.',
          'No access to Portal das Finanças — recover your senha de acesso or activate CMD; without access, e-Balcão is unavailable.',
          'The foreign party asks for a “tax residency certificate” — clarify whether a Certificado de Residência Fiscal is needed, rather than this atestado.',
          'The certificate does not contain the required date — reply in the same e-Balcão thread and ask them to correct/clarify the period.',
          'The document is needed urgently — state the deadline and attach the letter from the foreign authority, but Finanças does not guarantee acceleration.',
          'You need a certificate for a previous year — specify the exact ano fiscal and be ready to confirm that during that period you already met the residency criteria.',
          'You moved to PT but have not yet filed your first IRS return — this does not always block the certificate, but Finanças may request additional evidence of actual residence.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Issue of the Finanças certificate via e-Balcão', amountEUR: 0, note: 'No state fee is charged.' },
    { label: 'Certified translation for a foreign authority', amountEURMin: 25, amountEURMax: 80, note: 'Not required by Finanças; depends on the language, country and translator.' },
    { label: 'Apostille/notarial actions', amountEURMin: 0, amountEURMax: 60, note: 'Only if required by the receiving country; applicability to an electronic PDF must be checked separately.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — e-Balcão and taxpayer personal account',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — Domicílio fiscal and dados cadastrais',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 16: residência fiscal em território português',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
