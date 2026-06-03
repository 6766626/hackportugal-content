export default {
  editorialVoice: 'hackportugal',
  id: 'atestado-domicilio-internacional',
  categoryId: 'documents_fiscal',
  title: 'Atestado de Transposição de Domicílio Fiscal Internacional: certificate of transfer of tax residence to Portugal',
  tldr: 'Atestado de Transposição de Domicílio Fiscal Internacional is a free Finanças certificate stating that your domicílio fiscal has been transferred to Portugal. It is often requested by foreign tax authorities, banks and employers when you need to prove that you have become a tax resident of PT and no longer declare yourself as a resident in the USA/UK/Russian Federation/another country. It is requested online via the Portal das Finanças → e-Balcão; you usually need a NIF, an updated address in PT and the year from which confirmation is required.',
  tags: ['finanças', 'nif', 'tax residence', 'taxes'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What this document is',
      content: [
        { kind: 'paragraph', text: 'Atestado de Transposição de Domicílio Fiscal Internacional is a confirmation from the Autoridade Tributária e Aduaneira that your tax address, domicílio fiscal, has been transferred to Portugal. In practice, the certificate is used as proof for a foreign party: a tax authority, bank, broker, employer, pension fund or consulate.' },
        { kind: 'paragraph', text: 'The document is requested via the Portal das Finanças, usually in e-Balcão. There are no fees: Finanças issues the certificate free of charge in electronic form if your Portuguese tax address is already reflected in the system.' },
        { kind: 'warning', text: 'This is not the same as a Certificado de Residência Fiscal para efeitos de Convenção para Evitar a Dupla Tributação. If a foreign tax authority is asking specifically for a tax residence certificate under a double taxation agreement, you need a separate Finanças document.' }
      ]
    },
    {
      id: 'when-needed',
      title: 'When it is needed',
      content: [
        { kind: 'checklist', items: [
          'A foreign tax authority asks you to prove that you have ceased to be its tax resident and have moved the centre of your tax interests to Portugal.',
          'A bank or broker abroad requests confirmation of the change of tax address and CRS/FATCA status.',
          'An employer, pension fund or insurance company in another country asks for a document about your new tax domicile.',
          'You are closing your tax residence in the country of departure and attaching confirmation from PT.',
          'You need to show the date/year from which Finanças considers your domicílio fiscal to be Portuguese.',
          'You are preparing an internal compliance package for a foreign bank together with your NIF, comprovativo de morada and IRS data.'
        ] },
        { kind: 'paragraph', text: 'For the USA the certificate by itself does not cancel citizenship-based taxation and FATCA. For the UK, the Russian Federation and other countries it also does not replace local rules on loss of tax residence. It is a Portuguese confirmation which the foreign party will assess under its own laws.' }
      ]
    },
    {
      id: 'before-request',
      title: 'Check that Finanças sees you as a resident',
      content: [
        { kind: 'paragraph', text: 'It makes sense to request the certificate after your domicílio fiscal is already set to Portugal in the Portal das Finanças. If your profile still shows a foreign address or your residence permit/address is not confirmed, e-Balcão may refuse or ask you to update your cadastro first.' },
        { kind: 'checklist', items: [
          'You have a NIF and access to the Portal das Finanças: senha de acesso or Chave Móvel Digital (CMD).',
          'In the Dados Cadastrais section an address in Portugal is shown, not the address of the country of departure.',
          'If you are not an EU/EEA citizen, Finanças will usually need a valid residence permit, visa or other document of lawful stay when this is requested for updating the address.',
          'You have proof of address: contrato de arrendamento, escritura, recibo de renda, a utility bill or an atestado de residência from the Junta de Freguesia.',
          'You understand the year from which the certificate is needed: for example, 2025 or 2026, not just "now".',
          'If a tax representative was appointed only because you were living outside the EU/EEA, check whether you need to update their status after moving the address to PT.'
        ] },
        { kind: 'warning', text: 'Tax residence under CIRS art. 16 usually arises if you have spent in Portugal more than 183 days in any 12 months beginning or ending in the relevant year, or if you had a dwelling here under conditions that imply an intention to make it your habitual residence. Having a NIF by itself does not make you a tax resident.' }
      ]
    },
    {
      id: 'request-online',
      title: 'How to request via e-Balcão',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to the Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Open portaldasfinancas.gov.pt and log in with NIF + senha de acesso or via CMD. Check that you are working in the personal account of the correct NIF, not that of a representative/spouse.' }
          ] },
          { id: 'open-ebalcao', title: '2. Create a ticket in e-Balcão', content: [
            { kind: 'paragraph', text: 'Go to e-Balcão → Atendimento e-balcão → Registar nova questão. Category names in the Finanças interface change from time to time; choose a topic related to cadastro, domicílio fiscal, residência fiscal or certidões.' }
          ] },
          { id: 'write-request', title: '3. Write a short request in Portuguese', content: [
            { kind: 'paragraph', text: 'In the text ask: “Solicito a emissão de Atestado de Transposição de Domicílio Fiscal Internacional, comprovativo da transferência do meu domicílio fiscal para Portugal, para efeitos de apresentação junto de autoridade/entidade estrangeira.” Indicate the year and the country for which the document is needed.' }
          ] },
          { id: 'attach', title: '4. Attach documents if they might be requested', content: [
            { kind: 'checklist', items: [
              'Passport or Cartão de Cidadão/residence permit, if Finanças may ask for identification.',
              'Comprovativo de morada in Portugal.',
              'A screenshot or PDF from the foreign tax authority/bank with the requirement, if the wording is non-standard.',
              'A power of attorney, if the request is being submitted by a contabilista or representative.',
              'A translation is not needed for Finanças, but may be required by the foreign party after issuance.'
            ] }
          ] },
          { id: 'download', title: '5. Receive the reply and download the PDF', content: [
            { kind: 'paragraph', text: 'The reply arrives in e-Balcão. If the document is ready, Finanças attaches a PDF or gives instructions on where to download it. If they refuse, the reason is usually an out-of-date address, lack of confirmation of residency or the request was not in the right category.' }
          ] }
        ] }
      ]
    },
    {
      id: 'wording-and-use',
      title: 'How to use it abroad',
      content: [
        { kind: 'paragraph', text: 'Before sending it to a foreign party, check that the certificate correctly shows your name, NIF, address, the date/year of transfer of the domicílio fiscal and wording about Portugal. If an apostille or a certified translation is needed, that is a requirement of the receiving authority, not of Finanças.' },
        { kind: 'checklist', items: [
          'For a bank, the PDF from Finanças + a translation into English is often sufficient.',
          'For a foreign tax authority a sworn/certified translation may be required.',
          'For Hague Convention countries an apostille is sometimes requested; check in advance, because electronic tax documents are not always apostilled directly.',
          'If they require specifically a treaty residence certificate, request a Certificado de Residência Fiscal, not an atestado de transposição.',
          'Keep the original PDF and the e-Balcão confirmation: this is useful in a dispute about the request date.',
          'If the country you left counts residence by days of presence, also attach your travel history, a tenancy agreement in PT, recibos de renda, an employment contract or evidence of the centre of vital interests.'
        ] },
        { kind: 'warning', text: 'Do not tell the foreign tax authority that the certificate automatically terminates your old residence. In 2026 each country applies its own tests: days, permanent home, centre of vital interests, citizenship, domicile, tie-breaker under the tax treaty.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Common problems and quick fixes',
      content: [
        { kind: 'checklist', items: [
          'Finanças still shows a foreign address — update your domicílio fiscal first, then repeat the request.',
          'No access to the Portal das Finanças — recover your senha de acesso or enable CMD; without access, e-Balcão is unavailable.',
          'The foreign party asks for a "tax residency certificate" — check whether they need a Certificado de Residência Fiscal rather than this atestado.',
          'The certificate does not show the required date — reply in the same e-Balcão thread and ask to correct/specify the period.',
          'The document is needed urgently — include the deadline and attach the letter from the foreign authority, but Finanças does not guarantee an acceleration.',
          'You need a certificate for the previous year — indicate the specific ano fiscal and be ready to prove that in that period you already met the residency criteria.',
          'You moved to PT but have not yet filed your first IRS return — this does not always block the certificate, but Finanças may request additional evidence of actual residence.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Issuance of the Finanças certificate via e-Balcão', amountEUR: 0, note: 'No fee is charged.' },
    { label: 'Certified translation for a foreign authority', amountEURMin: 25, amountEURMax: 80, note: 'Not required by Finanças; depends on the language, country and translator.' },
    { label: 'Apostille/notarial actions', amountEURMin: 0, amountEURMax: 60, note: 'Only if required by the receiving country; applicability to an electronic PDF must be checked separately.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — e-Balcão and the taxpayer portal',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — Domicílio fiscal and registration data',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 16: tax residence in Portuguese territory',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
