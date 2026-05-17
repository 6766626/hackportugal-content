export default {
  editorialVoice: 'hackportugal',
  id: 'bairros-sustentaveis-fa',
  categoryId: 'daily_life',
  title: 'Bairros + Sustentáveis: which neighbourhoods are included and what benefits they provide',
  tldr: 'Bairros + Sustentáveis is the official list of priority neighbourhoods for energy efficiency and housing improvement. If your address falls within such a bairro, for Fundo Ambiental applications, including E-LAR, you usually do not need to prove Tarifa Social de Energia: the address itself gives the right to increased priority/eligibility. You need to check not the “area people talk about”, but the specific street/porta in the Fundo Ambiental or Portal da Habitação list; examples: Cova da Moura, Quinta da Fonte, Porto Seixo.',
  tags: ['housing', 'energy', 'neighbourhood', 'fundoambiental'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Bairros + Sustentáveis is',
      content: [
        { kind: 'paragraph', text: 'Bairros + Sustentáveis is not a separate “discount card”, but a territorial status. The state identifies neighbourhoods with vulnerable housing stock, energy poverty and a need for renovation/decarbonisation. Residents at those addresses then receive simplified access to some Fundo Ambiental programmes and housing measures.' },
        { kind: 'paragraph', text: 'For an expat, the practical point is simple: if you rent or have bought a home in such a bairro, the address may replace the Tarifa Social de Energia Elétrica requirement in certain Fundo Ambiental calls, for example in E-LAR. In other words, the right arises from the location of the home, not from your income.' },
        { kind: 'warning', text: 'The status applies to a specific area/addresses, not to the whole município or freguesia. “I live near Cova da Moura” or “this is social housing” is not enough: the system checks the official list/geographical perimeter.' }
      ]
    },
    {
      id: 'included-neighbourhoods',
      title: 'Which bairros are included',
      content: [
        { kind: 'paragraph', text: 'The full list is published in Fundo Ambiental and Portal da Habitação materials. In 2026, it must be checked against the official list, because for applications what matters is not the marketing name of the area, but the exact address: município, freguesia, rua, número de polícia, sometimes bloco/lote.' },
        { kind: 'checklist', items: [
          'Cova da Moura / Alto da Cova da Moura — Amadora',
          'Quinta da Fonte — Loures',
          'Porto Seixo / Bairro do Porto Seixo — an area appearing in lists of priority bairros',
          'Other bairros municipais or social housing areas included in the official Fundo Ambiental anexo/lista',
          'Neighbourhoods selected through reabilitação urbana, energia and habitação programmes, if they are expressly listed',
          'Addresses within the bairro perimeter, even if the rental contract is with a private owner',
          'Not automatically included: the whole freguesia, the whole concelho, the city’s “old centre” or any zona ARU without express mention',
          'Not automatically included: housing near the bairro but outside the official perímetro'
        ] },
        { kind: 'paragraph', text: 'If you see the name of your area in the news, still check the official PDF/table. For an E-LAR application or another Fundo Ambiental measure, the operator will verify the address, not the spoken name of the bairro.' }
      ]
    },
    {
      id: 'benefits',
      title: 'What benefits this gives ⚡',
      content: [
        { kind: 'paragraph', text: 'The main benefit is access to household energy-efficiency measures without needing to be a Tarifa Social beneficiary. In 2026 this is especially important for foreigners: many expats do not qualify for the social tariff because of income, the status of the electricity contract or a recent move, but may live in a priority bairro.' },
        { kind: 'checklist', items: [
          'E-LAR: possibility to apply as a residente em Bairro + Sustentável, without Tarifa Social de Energia Elétrica, if the programme aviso allows this',
          'Priority or a separate category in Fundo Ambiental calls for replacing inefficient equipment',
          'Support for household electrification: switching from gas equipment to electric where provided for in the aviso',
          'Measures against energy poverty: heating, hot water, household appliances, housing energy efficiency — depending on the open call',
          'Possibility for a tenant to participate, if the aviso allows it and there are documents proving residence at the address',
          'Not an automatic payment: you must submit a candidatura, attach documents and wait for approval',
          'Does not cancel requirements for invoice, NIF, IBAN, comprovativo de morada and the programme’s technical conditions'
        ] },
        { kind: 'warning', text: 'Bairros + Sustentáveis does not provide a universal discount on rent, IMI, IRS, water or electricity. It is specifically an access/priority criterion for particular Fundo Ambiental avisos and related housing-energy programmes.' }
      ]
    },
    {
      id: 'how-to-check-address',
      title: 'How to check your address',
      content: [
        { kind: 'substeps', items: [
          { id: 'find-official-list', title: '1. Find the official list', content: [
            { kind: 'paragraph', text: 'Open the Fundo Ambiental website and the section for the specific programme, for example E-LAR. Look for anexos, lista de Bairros + Sustentáveis, FAQ or the “Bairro + Sustentável” field in the candidatura form.' }
          ] },
          { id: 'compare-address', title: '2. Compare the address word for word', content: [
            { kind: 'checklist', items: [
              'Município',
              'Freguesia',
              'Name of the bairro',
              'Rua / avenida / praça',
              'Número de polícia',
              'Lote, bloco, cave, esquerdo/direito — if stated',
              'Código postal',
              'The owner’s name or contrato de arrendamento does not replace the address check'
            ] }
          ] },
          { id: 'ask-municipality', title: '3. If the address is on the boundary — ask the município', content: [
            { kind: 'paragraph', text: 'Write to the Câmara Municipal or Junta de Freguesia and ask for confirmation that the address falls within the perímetro do Bairro + Sustentável. This is useful if the street is split between included and non-included zones.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for the application',
      content: [
        { kind: 'paragraph', text: 'The document set depends on the specific Fundo Ambiental aviso. For E-LAR and similar measures, you should usually prepare proof of identity, address and the right to use the home. For foreigners, the issue is most often not the NIF, but the fact that the energy or rental contract is in someone else’s name.' },
        { kind: 'checklist', items: [
          'Applicant’s NIF',
          'Documento de identificação: Cartão de Cidadão, residence permit or passport',
          'Comprovativo de morada: contrato de arrendamento, atestado de residência, utility bill or certificate from the Câmara/Junta',
          'Proof of residence specifically at the address in the Bairro + Sustentável',
          'IBAN in the applicant’s name for payment, if the programme pays reimbursement',
          'Fatura-recibo or orçamento from the supplier/installer, if required',
          'Declaração do senhorio/autorização, if the works affect the landlord’s property',
          'Electricity bill, if the measure is linked to replacing equipment or electrification',
          'Photos of the old equipment/installation site — if this is stated in the aviso',
          'Declaração de não dívida às Finanças e Segurança Social, if the aviso requires it'
        ] },
        { kind: 'warning', text: 'If you live without a written rental contract, applying becomes more difficult. Atestado de residência helps confirm the address, but does not always replace the right to carry out works in the home.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes',
      content: [
        { kind: 'checklist', items: [
          'Assuming that all of Lisbon/Porto/Amadora/Loures is included — no, only specific bairros',
          'Applying based on the area name without checking the street and house number',
          'Thinking that Tarifa Social is still mandatory — for residents of a Bairro + Sustentável, in a number of avisos it is an alternative criterion',
          'Buying equipment before the call opens/approval is granted, even though the aviso may require a date after submission or after the decision',
          'Issuing the factura to another person: the NIF on the invoice must match the applicant, unless the aviso allows exceptions',
          'Ignoring landlord consent: for a tenant, this is critical when works are carried out in the flat',
          'Confusing Bairros + Sustentáveis with ARU, Porta 65, 1.º Direito or Bairro Saudável — these are different instruments',
          'Not keeping PDFs, faturas, comprovativos and e-mails: Fundo Ambiental may request them during a check'
        ] },
        { kind: 'paragraph', text: 'The safest sequence: first check the address in the official list, then read the aviso for the specific programme, then obtain an orçamento/fatura with the correct NIF, and only then pay.' }
      ]
    }
  ],
  costs: [
    { label: 'Checking the address in official lists', amountEUR: 0, note: 'The Fundo Ambiental and Portal da Habitação websites are free' },
    { label: 'Atestado de residência at the Junta de Freguesia', amountEURMin: 0, amountEURMax: 15, note: 'The cost depends on the freguesia; sometimes it is free for simple address confirmation' },
    { label: 'Submitting a candidatura to Fundo Ambiental', amountEUR: 0, note: 'There is usually no state fee; costs arise for documents, equipment or installation' }
  ],
  sources: [
    {
      title: 'Fundo Ambiental — avisos, candidaturas and energy-efficiency support measures',
      url: 'https://www.fundoambiental.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal da Habitação — habitação, bairros and reabilitação programmes',
      url: 'https://www.portaldahabitacao.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Plano de Recuperação e Resiliência — investment in habitação and eficiência energética',
      url: 'https://recuperarportugal.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
