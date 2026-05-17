export default {
  editorialVoice: 'hackportugal',
  id: 'alojamento-local-license',
  categoryId: 'housing_rent',
  title: 'Alojamento Local (AL): licence for short-term rental',
  tldr: 'Alojamento Local is the registration of accommodation for short-term rental to tourists through the Câmara Municipal and RNAL. In 2026, the regime is based on DL 128/2014, with Mais Habitação changes and subsequent amendments: municípios may create zonas de contenção and zonas de crescimento sustentável, where new AL registrations are restricted or suspended. Without an RNAL number, you cannot legally list a property on Airbnb/Booking. Check the Câmara regulations before buying a flat for AL.',
  tags: ['al', 'rent', 'rnal', 'câmara'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-al',
      title: 'What counts as Alojamento Local',
      content: [
        { kind: 'paragraph', text: 'Alojamento Local (AL) is short-term paid accommodation, usually for tourists, where the property is not a hotel, tourist complex or empreendimento turístico. Registration gives an RNAL number, which must be shown in adverts, contracts, invoices and on platforms such as Airbnb, Booking and Vrbo.' },
        { kind: 'checklist', items: ['Moradia — detached house', 'Apartamento — flat or autonomous unit', 'Estabelecimento de hospedagem — rooms/guest house; if dormitories predominate, it may be a hostel', 'Quartos — renting rooms in your main home, usually a maximum of 3 rooms', 'AL does not replace the licença de utilização: the property must be suitable for housing or services', 'AL is not the same as long-term rental: IRS, IVA and duties towards hóspedes are different'] },
        { kind: 'warning', text: 'If the flat is in a condominium, check the título constitutivo da propriedade horizontal and actas da assembleia. For a hostel in a flat, prior autorização from the condomínio is usually needed. For an ordinary apartamento, registration is formally possible without general permission, but the condomínio may seek to stop the AL where breaches are proven and under the legal procedure.' }
      ]
    },
    {
      id: 'check-municipality',
      title: 'Check the Câmara and restriction zones first',
      content: [
        { kind: 'paragraph', text: 'The main risk in 2026 is not the technical filing, but a local ban. After Mais Habitação and subsequent changes, municipalities gained a key role: they may approve a regulamento municipal do alojamento local, zonas de contenção and zonas de crescimento sustentável. In these zones, new AL registrations may be restricted, depend on quotas or be temporarily suspended.' },
        { kind: 'checklist', items: ['Open the Câmara Municipal website for the property address', 'Search for “Alojamento Local”, “zonas de contenção”, “regulamento municipal”', 'Check whether new AL registrations are allowed for modalidade apartamento', 'Confirm whether there are quotas by freguesia, street or prédio', 'Check whether a suspensão de novos registos is in force', 'Compare the address with the RNAL map and the municipal zone map', 'If the property is in Lisboa, Porto, Cascais, Albufeira, Lagos, Loulé or another tourist area — do not buy for AL without written confirmation from the Câmara', 'Ask the seller for the caderneta predial, certidão permanente predial and actas condomínio before the CPCV'] },
        { kind: 'warning', text: 'An AL in a neighbouring flat does not guarantee that you will get a new number. Older RNAL numbers may have been issued before a zona de contenção was created. In 2026, “I will buy a flat and then set it up for Airbnb” is a high legal risk.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents and conditions before filing',
      content: [
        { kind: 'paragraph', text: 'AL registration is filed as a comunicação prévia com prazo through Balcão do Empreendedor/ePortugal or the municipal portal, after which the Câmara checks the documents and may object. In practical terms, prepare the property as a business: fire safety, livro de reclamações, sign, insurance and tax activity.' },
        { kind: 'checklist', items: ['NIF of the owner or company', 'Access to the portal with Chave Móvel Digital, Cartão de Cidadão or a representative with procuração', 'Caderneta predial urbana from Finanças', 'Certidão permanente predial or código de acesso', 'Licença de utilização / autorização de utilização or a document proving the property use', 'Rental contract allowing subarrendamento/AL if you are not the owner', 'Termo de responsabilidade confirming compliance with AL requirements', 'Seguro de responsabilidade civil for operating the AL', 'Physical and electronic livro de reclamações', 'Extintor, manta de incêndio, first-aid kit, safety instructions and 112 contacts', 'AL sign at the entrance in the legal format', 'Declaração de início/alteração de atividade in Finanças with the appropriate CAE, usually 55201 or 55204 depending on the situation'] },
        { kind: 'warning', text: 'A standard residential rental contract almost always prohibits commercial short-term letting. If you are a tenant and launch AL without written permission from the senhorio, you risk termination of the contract, debts and a complaint to the Câmara.' }
      ]
    },
    {
      id: 'registration',
      title: 'Filing and obtaining the RNAL number',
      content: [
        { kind: 'substeps', items: [
          { id: 'submit', title: '1. File the comunicação prévia', content: [
            { kind: 'paragraph', text: 'Filing is done online through Balcão do Empreendedor/ePortugal or through your Câmara system. You choose the AL modalidade, enter the address, capacity, holder of the exploração and attach the documents. After submission, the record goes into the RNAL — Registo Nacional de Alojamento Local.' }
          ] },
          { id: 'wait', title: '2. Wait for the Câmara objection period', content: [
            { kind: 'paragraph', text: 'Under DL 128/2014, the Câmara may carry out an inspection and object if the documents are incorrect, the property does not match its authorised use, it is in a prohibited zone, or it breaches municipal regulation. In the standard regime, the objection period is shorter for ordinary modalidades and longer for a hostel; in practice, follow your Câmara instructions and do not accept guests until you are sure the number is active.' }
          ] },
          { id: 'publish', title: '3. Use the RNAL number everywhere', content: [
            { kind: 'checklist', items: ['Show the RNAL number in the Airbnb/Booking listing', 'Place the AL sign at the entrance', 'Issue faturas-recibo through Finanças or certified software', 'Submit comunicação de hóspedes estrangeiros to the competent authorities’ system, where applicable', 'Maintain the electronic livro de reclamações', 'Keep insurance and property documents available for inspection'] }
          ] }
        ] },
        { kind: 'warning', text: 'Platforms and the Câmara may cross-check listings against RNAL. Advertising without a valid RNAL is a typical reason for a fine and removal of the listing.' }
      ]
    },
    {
      id: 'taxes-and-duties',
      title: 'Taxes, charges and operational duties',
      content: [
        { kind: 'paragraph', text: 'AL is not “just rent”. For an individual, income is usually declared in IRS as category B if the activity is registered, or under another scheme depending on the structure. For a company, it is IRC. The tax model affects IVA, despesas, contabilidade organizada and social security.' },
        { kind: 'checklist', items: ['Open or amend your atividade in Finanças before the first guests', 'Check the IVA regime: exemption under art. 53 CIVA is possible only if the limits and conditions are met; otherwise the rate is usually 6%/13%/23% depending on the specific service and region, which requires checking with a contabilista', 'Issue invoices for every booking, including platform commissions', 'Check tourist tax: Lisboa, Porto and many municípios charge taxa turística per night', 'Take IMI into account as the owner; AL in itself does not cancel IMI', 'Pay condominium charges and comply with the regulamento do condomínio', 'Report changes: capacity, holder of the exploração, contacts, cessation of activity', 'Follow local rules on noise, rubbish, check-in and occupancy limits'] },
        { kind: 'warning', text: 'Tax optimisation for AL depends on residence status, expenses, mortgage, IVA and number of properties. Before starting, it is cheaper to pay a contabilista than to correct IRS/IVA and fines later.' }
      ]
    },
    {
      id: 'loss-of-license',
      title: 'When AL can be stopped or cancelled',
      content: [
        { kind: 'paragraph', text: 'An RNAL number is not “permanent immunity”. The Câmara, ASAE, condomínio and neighbours may trigger inspections. Municipal rules in 2026 are especially important: in zonas de contenção there may be additional conditions, restrictions on transferring operation and local suspension.' },
        { kind: 'checklist', items: ['The Câmara identified false information in the comunicação prévia', 'The property does not comply with the licença de utilização', 'Mandatory insurance or safety equipment is missing', 'The AL operates in a zone where new registrations are prohibited or suspended', 'Systematic complaints about noise, rubbish, safety or breach of condomínio rules', 'The condomínio adopted a decision under the legal procedure against AL operation where harm to residents’ peace and quiet is proven', 'Owner or capacidade details have not been updated', 'Someone else’s RNAL number or the number of another property is being used'] },
        { kind: 'warning', text: 'Buying property “with AL” requires separate due diligence. Check whether operation can be transferred, whether there is a municipal ban on new registrations, whether the RNAL is active, whether there are condomínio complaints and whether the property matches the documents. Do not rely only on an Airbnb listing screenshot.' }
      ]
    }
  ],
  costs: [
    { label: 'AL registration with Câmara/RNAL', amountEURMin: 0, amountEURMax: 100, note: 'Government filing is often free or subject to a small municipal fee; it depends on the Câmara.' },
    { label: 'Seguro de responsabilidade civil', amountEURMin: 60, amountEURMax: 250, note: 'Indicative annual range for a small property; depends on cover, limits and insurer.' },
    { label: 'Electronic livro de reclamações', amountEURMin: 0, amountEURMax: 25, note: 'Registration of the electronic livro is usually free, but the physical book/providers may cost extra.' },
    { label: 'Basic safety equipment', amountEURMin: 50, amountEURMax: 200, note: 'Fire extinguisher, manta de incêndio, first-aid kit, signage; the actual amount depends on the property.' },
    { label: 'Contabilista', amountEURMin: 40, amountEURMax: 150, note: 'Typical monthly range for a small AL; a company and IVA usually cost more.' }
  ],
  sources: [
    { title: 'RNAL — AL search in the Registo Nacional de Turismo', url: 'https://rnt.turismodeportugal.pt/RNT/Pesquisa_AL.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Turismo de Portugal — Alojamento Local establishments | Registration', url: 'https://business.turismodeportugal.pt/pt/Planear_Iniciar/Licenciamento_Registo_da_Atividade/Alojamento_Local/Paginas/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 128/2014 — legal regime for operating alojamento local establishments', url: 'https://dre.pt/dre/detalhe/decreto-lei/128-2014-25676943', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 56/2023 — Mais Habitação Programme and changes to the AL regime', url: 'https://dre.pt/dre/detalhe/lei/56-2023-222477692', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Alojamento Local: registration and comunicação prévia', url: 'https://eportugal.gov.pt/servicos/registar-um-estabelecimento-de-alojamento-local', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
