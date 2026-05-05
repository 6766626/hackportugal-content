export default {
  editorialVoice: 'hackportugal',
  id: 'alojamento-local-license',
  categoryId: 'housing_rent',
  title: 'Alojamento Local (AL): short-term rental licence',
  tldr: 'Alojamento Local is the registration of accommodation for short-term letting to tourists via the Câmara Municipal and the RNAL. In 2026 the regime is based on DL 128/2014, with Mais Habitação amendments and subsequent changes: municípios can create zonas de contenção and zonas de crescimento sustentável where new AL are restricted or suspended. Without an RNAL number you cannot legally list a property on Airbnb/Booking. Check the Câmara’s regulation before buying a flat for AL.',
  tags: ['al', 'rental', 'rnal', 'câmara'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-al',
      title: 'What qualifies as Alojamento Local',
      content: [
        { kind: 'paragraph', text: 'Alojamento Local (AL) is short-term paid accommodation, usually for tourists, when the property is not a hotel, tourist complex or empreendimento turístico. Registration gives you an RNAL number, which must be indicated in adverts, contracts, invoices and on platforms such as Airbnb, Booking and Vrbo.' },
        { kind: 'checklist', items: ['Moradia — detached house', 'Apartamento — flat or autonomous fraction', 'Estabelecimento de hospedagem — rooms/guesthouse; if dormitories predominate, it may be a hostel', 'Quartos — letting rooms in your main residence, typically a maximum of 3 rooms', 'AL does not replace the licença de utilização: the property must be suitable for housing or services', 'AL is not the same as long-term letting: IRS, IVA and obligations to guests are different'] },
        { kind: 'warning', text: 'If the flat is in a condominium, check the título constitutivo da propriedade horizontal and the actas da assembleia. For a hostel in a flat, prior authorisation from the condomínio is usually required. For a standard apartamento, registration is formally possible without general consent, but the condomínio may seek to stop the AL in case of proven breaches and following the legal procedure.' }
      ]
    },
    {
      id: 'check-municipality',
      title: 'Check the Câmara first and restriction zones',
      content: [
        { kind: 'paragraph', text: 'The main risk in 2026 is not technical filing but a local ban. After Mais Habitação and subsequent changes, municipalities gained a key role: they can adopt a regulamento municipal do alojamento local, zonas de contenção and zonas de crescimento sustentável. In such zones, new AL registrations may be limited, subject to quotas or temporarily suspended.' },
        { kind: 'checklist', items: ['Open the Câmara Municipal website for the property’s address', 'Look for “Alojamento Local”, “zonas de contenção”, “regulamento municipal”', 'Check whether new AL are allowed for the modalidade apartamento', 'Check whether there are quotas by freguesia, street or building (prédio)', 'Verify whether a suspensão de novos registos is in force', 'Compare the address with the RNAL map and the municipal zoning map', 'If the property is in Lisboa, Porto, Cascais, Albufeira, Lagos, Loulé or another tourist area, do not buy for AL without written confirmation from the Câmara', 'Ask the seller for the caderneta predial, certidão permanente predial and condomínio minutes (actas) before the CPCV'] },
        { kind: 'warning', text: 'An AL in the neighbouring flat does not guarantee that you will get a new number. Older RNAL may have been issued before a zona de contenção was created. In 2026, “I will buy a flat and then register Airbnb” is a high legal risk.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents and conditions before applying',
      content: [
        { kind: 'paragraph', text: 'AL registration is filed as a comunicação prévia com prazo via Balcão do Empreendedor/ePortugal or the municipal portal, after which the Câmara reviews the documents and may object. In practice, prepare the property as a business: fire safety, livro de reclamações, signage, insurance and tax activity.' },
        { kind: 'checklist', items: ['NIF of the owner or company', 'Access to the portal with Chave Móvel Digital, Cartão de Cidadão or a representative with a procuração', 'Caderneta predial urbana from Finanças', 'Certidão permanente predial or código de acesso', 'Licença de utilização/autorização de utilização or a document proving the property’s designated use', 'Lease agreement with authorisation for subarrendamento/AL if you are not the owner', 'Termo de responsabilidade confirming compliance with AL requirements', 'Seguro de responsabilidade civil for operating the AL', 'Livro de reclamações, both physical and electronic', 'Extintor, manta de incêndio, first-aid kit, safety instructions and 112 contacts', 'AL sign at the entrance as per the legal template', 'Declaração de início/alteração de atividade at Finanças with an appropriate CAE, usually 55201 or 55204 depending on the case'] },
        { kind: 'warning', text: 'A standard residential lease almost always prohibits commercial short-term letting. If you are a tenant and run AL without the landlord’s written permission, you risk termination of the lease, debts and a complaint to the Câmara.' }
      ]
    },
    {
      id: 'registration',
      title: 'Filing and obtaining the RNAL number',
      content: [
        { kind: 'substeps', items: [
          { id: 'submit', title: '1. Submit the comunicação prévia', content: [
            { kind: 'paragraph', text: 'Submission is done online via Balcão do Empreendedor/ePortugal or via your Câmara’s system. You choose the AL modalidade, indicate the address, capacity, operator (exploração) and attach documents. After submission the record enters the RNAL — Registo Nacional de Alojamento Local.' }
          ] },
          { id: 'wait', title: '2. Wait for the Câmara’s objection period', content: [
            { kind: 'paragraph', text: 'Under DL 128/2014 the Câmara may inspect and object if documents are incorrect, the property does not match its designated use, lies in a prohibited zone, or breaches the municipal regulation. Typically the objection period is shorter for the standard modalidades and longer for a hostel; in practice, follow your Câmara’s instructions and do not accept guests until you are certain the number is active.' }
          ] },
          { id: 'publish', title: '3. Use the RNAL number everywhere', content: [
            { kind: 'checklist', items: ['Include the RNAL number in your Airbnb/Booking listing', 'Display the AL sign at the entrance', 'Issue faturas-recibo via Finanças or a certified program', 'File the comunicação de hóspedes estrangeiros with the competent authorities’ system, where applicable', 'Maintain the electronic livro de reclamações', 'Keep the insurance policy and property documents available for inspection'] }
          ] }
        ] },
        { kind: 'warning', text: 'Platforms and the Câmara may cross-check listings with the RNAL. Advertising without a valid RNAL is a typical reason for a fine and removal of the listing.' }
      ]
    },
    {
      id: 'taxes-and-duties',
      title: 'Taxes, fees and operational duties',
      content: [
        { kind: 'paragraph', text: 'AL is not “just a rental”. For an individual, income is usually declared in IRS as category B if the activity is registered, or under another scheme depending on the structure. For a company, IRC applies. The tax model affects IVA, despesas, contabilidade organizada and social security.' },
        { kind: 'checklist', items: ['Open or amend the atividade at Finanças before your first guests', 'Check the IVA regime: the exemption under art. 53 CIVA is only possible if limits and conditions are met; otherwise the rate is usually 6%/13%/23% depending on the specific service and region and needs to be verified with a contabilista', 'Issue invoices for each booking, including platform commissions', 'Check the tourist tax: Lisboa, Porto and many municípios charge a nightly taxa turística', 'Account for IMI as an owner; AL by itself does not cancel IMI', 'Pay condominium charges and comply with the regulamento do condomínio', 'Report changes: capacity, owner of the exploração, contacts, cessation of activity', 'Observe local rules on noise, rubbish, check-in and occupancy limits'] },
        { kind: 'warning', text: 'Tax optimisation for AL depends on residency status, expenses, mortgage, IVA and the number of properties. Before you start, it is cheaper to pay a contabilista than to fix IRS/IVA and fines later.' }
      ]
    },
    {
      id: 'loss-of-license',
      title: 'When an AL can be suspended or cancelled',
      content: [
        { kind: 'paragraph', text: 'An RNAL number is not “permanent immunity”. The Câmara, ASAE, the condomínio and neighbours can initiate inspections. Municipal rules in 2026 are especially important: in zonas de contenção there may be additional conditions, restrictions on transferring the exploração and local suspension.' },
        { kind: 'checklist', items: ['The Câmara identified false information in the comunicação prévia', 'The property does not comply with the licença de utilização', 'Missing mandatory insurance or safety equipment', 'The AL operates in a zone where new registrations are prohibited or suspended', 'Systematic complaints about noise, rubbish, safety or breaches of condomínio rules', 'The condomínio adopted a resolution under the legal procedure against the AL operation where proven harm to residents’ tranquillity exists', 'The owner’s details or capacidade are not updated', 'Using someone else’s RNAL number or a number from another property'] },
        { kind: 'warning', text: 'Buying a property “with AL” requires separate due diligence. Verify whether the exploração is transferable, whether there is a municipal ban on new registrations, whether the RNAL is active, whether there are condomínio complaints and whether the property matches the documentation. Do not rely solely on a screenshot of an Airbnb listing.' }
      ]
    }
  ],
  costs: [
    { label: 'AL registration at the Câmara/RNAL', amountEURMin: 0, amountEURMax: 100, note: 'The government filing is often free or has a small municipal fee; depends on the Câmara.' },
    { label: 'Civil liability insurance', amountEURMin: 60, amountEURMax: 250, note: 'Annual ballpark for a small property; depends on cover, limits and the insurer.' },
    { label: 'Electronic livro de reclamações', amountEURMin: 0, amountEURMax: 25, note: 'Registration of the electronic livro is usually free, but the physical book/providers may cost extra.' },
    { label: 'Basic safety equipment', amountEURMin: 50, amountEURMax: 200, note: 'Fire extinguisher, manta de incêndio, first-aid kit, signage; the actual amount depends on the property.' },
    { label: 'Contabilista', amountEURMin: 40, amountEURMax: 150, note: 'Typical monthly range for a small AL; a company and IVA are usually more expensive.' }
  ],
  sources: [
    { title: 'RNAL — Search AL in the National Tourism Register', url: 'https://rnt.turismodeportugal.pt/RNT/Pesquisa_AL.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Turismo de Portugal — Alojamento Local establishments | Registration', url: 'https://business.turismodeportugal.pt/pt/Planear_Iniciar/Licenciamento_Registo_da_Atividade/Alojamento_Local/Paginas/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 128/2014 — legal regime for the operation of alojamento local establishments', url: 'https://dre.pt/dre/detalhe/decreto-lei/128-2014-25676943', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 56/2023 — Programa Mais Habitação and changes to the AL regime', url: 'https://dre.pt/dre/detalhe/lei/56-2023-222477692', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Alojamento Local: registration and prior notification', url: 'https://eportugal.gov.pt/servicos/registar-um-estabelecimento-de-alojamento-local', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
