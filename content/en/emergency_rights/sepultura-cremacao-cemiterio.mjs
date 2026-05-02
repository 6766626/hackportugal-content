export default {
  editorialVoice: 'hackportugal',
  id: 'sepultura-cremacao-cemiterio',
  categoryId: 'emergency_rights',
  title: 'Cemeteries and cremation in Portugal — rights, prices, choices',
  tldr: 'In Portugal, cemeteries are mostly municipal and secular: you can choose a sepultura, jazigo/mausoléu, cremation and a religious ceremony. 2026 budget: cremation with basic services €600–€1,200, a municipal sepultura/concession usually €600–€1,500 for 15–50 years where available; sepultura perpétua from €3,500, mausoléu/jazigo often from €5,000. In Lisbon and large cities, spaces are limited: everything is handled through an agência funerária and the Câmara Municipal.',
  tags: ['cemetery', 'cremation', 'funeral', 'sepultura'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'first-48-hours',
      title: 'The first 24–48 hours: what to do',
      content: [
        { kind: 'paragraph', text: 'In Portugal, funerals are usually organised by an agência funerária. It contacts the hospital, médico, Conservatória/IRN, Câmara Municipal and cemitério. Relatives do not need to run around all the authorities themselves, but they do need to choose the format quickly: cremation, sepultura temporária, family sepultura, jazigo/mausoléu or repatriation.' },
        { kind: 'checklist', items: [
          'Obtain medical confirmation of death: in hospital this is done by a doctor through SICO; at home, call 112, a médico or INEM/GNR/PSP depending on the situation',
          'Contact an agência funerária in your concelho or near the hospital',
          'Provide the deceased person’s passport/Cartão de Cidadão/residence permit, NIF and the details of the closest relative',
          'Check whether the deceased left wishes about cremation, a will, a contract with a funeral company or a family sepultura',
          'Choose a cemitério municipal, crematorium or repatriation of the body/ashes',
          'Ask for an orçamento por escrito: coffin, transport, taxas municipais, cremation/burial, urn, storage, documents',
          'Order a certidão de óbito — it is needed for the bank, insurance, inheritance, consulate and Segurança Social'
        ] },
        { kind: 'warning', text: 'Burial and cremation are usually possible only after the death has been registered and permission has been granted. In the case of a violent, sudden or unclear death, the Ministério Público/medicina legal becomes involved; timelines may shift.' }
      ]
    },
    {
      id: 'burial-options',
      title: 'Burial options: sepultura, jazigo, mausoléu',
      content: [
        { kind: 'paragraph', text: 'In Portugal, cemetery land is usually not “bought” as real estate. More often it is a right of use or a concession, with conditions set by the Câmara Municipal or a private cemitério. Rules, durations and prices vary greatly between Lisboa, Porto, Algarve, Madeira and small municípios.' },
        { kind: 'checklist', items: [
          'Sepultura temporária — a standard temporary burial; often used for several years until exumação, if the remains are then moved to an ossário or family plot',
          'Sepultura concessionada — a longer-term right of use; in 2026 the guide price is €600–€1,500 for 15–50 years where this model exists',
          'Sepultura perpétua — a permanent/long-term concession; guide price from €3,500, but availability is limited in large cities',
          'Jazigo or mausoléu — a family vault/chapel; often from €5,000 just for the right/structure, excluding funeral services',
          'Ossário — a niche for remains after exumação; usually cheaper than a full sepultura',
          'Columbário/cendrário — a place for an urn with ashes after cremation',
          'Trasladação — transfer of a body, remains or urn between cemeteries; requires permits and payment'
        ] },
        { kind: 'warning', text: 'Do not rely only on “prices from the internet”. Each município has its own Tabela de Taxas. In Lisbon, cemeteries are managed by the Câmara Municipal de Lisboa, and the availability of spaces depends on the specific Cemitério: Alto de São João, Prazeres, Benfica, Ajuda, Olivais, Lumiar and others.' }
      ]
    },
    {
      id: 'cremation',
      title: 'Cremation: when it is cheaper and what to do with the urn',
      content: [
        { kind: 'paragraph', text: 'Cremation is legal and common in Portugal, especially in Lisboa, Porto and tourist regions. In 2026, the real budget with a basic agência funerária is usually €600–€1,200. The total rises because of the coffin, ceremony, storage, transport between municípios, urn, flowers and publication of an anúncio fúnebre.' },
        { kind: 'checklist', items: [
          'Check whether the deceased left a written wish for cremation; if not, the closest family decides according to the agency’s rules and the law',
          'Ask for the municipal cremation fee and the agency’s services to be shown separately',
          'Check the date: in large cities the queue for cremation may be 1–5 working days, and longer during holiday periods',
          'Choose the urn: a basic urn is not always included in the package; decorative ones cost extra',
          'Decide where the ashes will be kept: columbário, family sepultura/jazigo, ossário/cendrário or a place authorised by the Câmara/cemetery',
          'If you want to take the urn abroad, ask the consulate of the destination country in advance about translation of the certidão de óbito, apostila and airline requirements'
        ] },
        { kind: 'warning', text: 'Do not scatter ashes on a beach, in a park, river or the ocean “quietly”. Sanitary, environmental and municipal rules apply to cinzas; the safe route is written permission from the Câmara Municipal/cemetery management or taking the urn out of the country according to the rules of the destination country.' }
      ]
    },
    {
      id: 'religion-and-non-catholic',
      title: 'Religion and non-religious funerals',
      content: [
        { kind: 'paragraph', text: 'Municipal cemeteries in Portugal are a public service, not only a Catholic space. A Catholic priest, Orthodox priest, rabbi, imam, pastor or secular celebrante may conduct the ceremony, provided the cemetery rules, sanitary standards and timetable are respected.' },
        { kind: 'checklist', items: [
          'Tell the agência funerária immediately if an Orthodox, Jewish, Islamic, Protestant or fully secular ceremony is needed',
          'For an Islamic burial, check in advance whether orientação para Meca, timing without embalming and the availability of a talhão muçulmano are possible',
          'For a Jewish burial, check contact with the Comunidade Israelita and whether there is a cemitério/talhão israelita in the region',
          'If your município has no separate religious section, an ordinary municipal sepultura with a religious ritual at the grave may be possible',
          'Private and historic cemitérios may have separate rules on membership, access and prices',
          'If the family considers refusal of a post-mortem important for religious reasons, say so immediately, but in a forensic case the state makes the decision'
        ] },
        { kind: 'warning', text: 'Portugal allows religious ceremonies, but not all traditions can be followed literally: deadlines, transport of the body, coffin, sanitary preparation, exhumation and cremation are regulated by Decreto-Lei 411/98 and municipal regulations.' }
      ]
    },
    {
      id: 'pricing-and-contract',
      title: 'How not to overpay: quote and contract',
      content: [
        { kind: 'paragraph', text: 'The funeral market in Portugal is private, while cemetery fees are municipal. Good prática: get at least two orçamento and ask for “taxas oficiais” and “serviços funerários” to be separated. In a stressful situation it is easy to agree to a €2,500–€4,000 package, even though a basic cremation or simple burial may cost noticeably less.' },
        { kind: 'checklist', items: [
          'Ask for an orçamento discriminado por escrito before signing',
          'Check whether IVA, municipal fees, coffin, urn, transportes, preparação do corpo and sala de velório are included',
          'Check whether the certidão de óbito is included and how many copies are needed',
          'Ask whether there is a taxa de abertura/fecho de sepultura, licença de inumação or cremação',
          'Check the concession/renovação term: 15, 25, 30, 50 years or outra duração',
          'Clarify future costs: exumação, ossário, manutenção, limpeza, renovação da concessão',
          'If the deceased was insured, check seguro de vida, seguro funeral, cartão bancário and employer benefits',
          'If there is no money, ask Segurança Social about subsídio por morte, reembolso de despesas de funeral or apoio social; entitlement depends on contributions and status'
        ] },
        { kind: 'warning', text: '“Perpétua” does not always mean absolute eternal ownership. It may be an administrative concession with a maintenance obligation and a risk of caducidade if the family does not pay fees or does not respond to the Câmara Municipal.' }
      ]
    },
    {
      id: 'expat-specific',
      title: 'For foreigners: consulate, repatriation, documents',
      content: [
        { kind: 'paragraph', text: 'If the deceased was a foreigner, the Portuguese certidão de óbito is still the core document. For inheritance, closing bank accounts, insurance and registering the death in another country, a tradução certificada and Apostila de Haia may be required.' },
        { kind: 'checklist', items: [
          'Notify the consulate of the country of citizenship, especially if repatriation of the body is needed',
          'Transporting a body requires a special coffin, sanitary documents and airline approval; this often costs €3,000–€8,000+',
          'Transporting an urn is usually cheaper, but the airline and destination country may require a certidão de cremação and translation',
          'Ask for several copies of the certidão de óbito: bank, insurer, employer, landlord, Finanças, Segurança Social',
          'If the deceased rented a home, do not clear it without an inventory of belongings and an understanding of the heirs',
          'If there is a car, IMI/IRS/bank accounts or debts, inheritance advice from a solicitador/notário/advogado is needed'
        ] },
        { kind: 'warning', text: 'Do not sign up for repatriation of the body until you have compared it with the option of cremation in Portugal and transporting the urn. The difference is often thousands of euros.' }
      ]
    }
  ],
  costs: [
    { label: 'Cremation with basic agência funerária services', amountEURMin: 600, amountEURMax: 1200, note: '2026 guide price; depends on city, coffin, urn, velório and transport' },
    { label: 'Municipal sepultura / long-term concessão', amountEURMin: 600, amountEURMax: 1500, note: 'Typical guide price for 15–50 years where available; the Tabela de Taxas is set by the Câmara Municipal' },
    { label: 'Sepultura perpétua', amountEURMin: 3500, amountEURMax: 7000, note: 'Spaces are scarce in large cities; this is a right of use/concession, not an ordinary land purchase' },
    { label: 'Jazigo or mausoléu', amountEURMin: 5000, amountEURMax: 20000, note: 'The price depends heavily on the cemetery, condition, construction and transfer/concession fees' },
    { label: 'Repatriation of a body abroad', amountEURMin: 3000, amountEURMax: 8000, note: 'Flight, sanitary documents, special coffin, consular requirements; may be more expensive' }
  ],
  sources: [
    {
      title: 'Câmara Municipal de Lisboa — municipal cemeteries and funeral services',
      url: 'https://www.cm-lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 411/98 — removal, transport, burial, exhumation, transfer and cremation',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/411-1998-233476',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal — official guide: what to do when someone dies',
      url: 'https://eportugal.gov.pt/guias/o-que-fazer-quando-alguem-morre',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRN — death registration and certidão de óbito',
      url: 'https://irn.justica.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
