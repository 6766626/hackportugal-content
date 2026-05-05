export default {
  editorialVoice: 'hackportugal',
  id: 'imovel-devoluto-imi-tripla',
  categoryId: 'housing_buy',
  title: 'Imóvel devoluto: triple IMI for vacant housing under Mais Habitação',
  tldr: 'Since 2023, Mais Habitação has strengthened the tax on vacant urban housing: if the Câmara Municipal recognises a property as devoluto — usually the dwelling has been vacant for >12 months and there is no normal water/electricity consumption — the IMI rate increases ×3. In zonas de pressão urbanística the município may apply an even harsher increase. In 2026 this is a real risk for flats bought “just in case”. Protection: prove residence, letting, a lawful reason for downtime or a renovação confirmed by the Câmara.',
  tags: ['imi', 'devoluto', 'housing', 'mais-habitação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-devoluto',
      title: 'What is considered an imóvel devoluto',
      content: [
        { kind: 'paragraph', text: 'An imóvel devoluto is an urban property or autonomous fraction that the município considers to be effectively vacant for more than 1 year. The basis is Decreto-Lei 159/2006 and the Código do IMI, amended by Lei 56/2023 in the Mais Habitação package.' },
        { kind: 'paragraph', text: 'The mere fact that you rarely visit does not always mean devoluto. The Câmara Municipal must adopt an administrative decision and notify the owner. But low or zero consumption of utilities is the main trigger for verification.' },
        { kind: 'checklist', items: [
          'The dwelling has been vacant for more than 12 months',
          'There are no active água, eletricidade, gás or telecomunicações contracts',
          'Contracts exist, but consumption is abnormally low',
          'No registered resident or tenant',
          'Neighbours, the condomínio or fiscalização confirm lack of use',
          'Post is not collected; the property looks abandoned',
          'The flat was purchased but neither occupied nor rented out',
          'The building is in poor condition and not in use'
        ] }
      ]
    },
    {
      id: 'tax-effect',
      title: 'How much a mistake costs: IMI ×3 and local surcharges',
      content: [
        { kind: 'paragraph', text: 'The normal IMI rate for urban housing in 2026 is set by each município within the range 0.3–0.45% of the VPT — valor patrimonial tributário. If a property is classified as devoluto, the rate is tripled.' },
        { kind: 'paragraph', text: 'Example: a flat with a VPT of €200,000 in a município with a 0.3% rate pays a normal IMI of €600 per year. After devoluto status — €1,800. At a 0.45% rate, normal IMI is €900, and triple — €2,700.' },
        { kind: 'warning', text: 'In zonas de pressão urbanística and in some cases provided for in the Código do IMI after Mais Habitação, the município may apply a harsher agravamento than a simple ×3. Check the annual decision of your Câmara Municipal: rates and zones differ even between neighbouring municípios.' },
        { kind: 'paragraph', text: 'IMI is assessed based on the status of the property on 31 December of the tax year and is paid the following year: typically in May, and for amounts above established thresholds — in instalments in May, August and November. AIMI is a separate tax and does not replace IMI.' }
      ]
    },
    {
      id: 'exceptions',
      title: 'When an empty flat should not be treated as devoluto',
      content: [
        { kind: 'paragraph', text: 'The law provides for situations where a property may be empty but should not be qualified as devoluto. These must be proven with documents, not merely verbal explanations.' },
        { kind: 'checklist', items: [
          'The dwelling is used as a casa de férias or a second home for seasonal stays',
          'The property is empty due to obras de construção, reconstrução, ampliação or renovação, confirmed by the Câmara Municipal',
          'There is a licença, comunicação prévia or another municipal document regarding the works',
          'The property was recently built or has only just become fit for use',
          'There is a court dispute or administrative procedure that objectively prevents use',
          'The dwelling is intended for short-stay tourism in a legally permitted situation',
          'The owner is temporarily abroad for professional or public functions, where applicable',
          'There is a valid tenancy agreement, comodato or other lawful use',
          'Low consumption is documented: renovation, incident, absence of a meter, disconnection due to works'
        ] },
        { kind: 'warning', text: 'For expat owners the most common risk is “bought a flat before moving, but did nothing for a year”. The intention to move later by itself is usually a weak argument. Evidence is needed: renovation, a rental listing, actual visits, bills, insurance, condomínio, correspondence with contractors.' }
      ]
    },
    {
      id: 'renovation-defense',
      title: 'Renovação: how to protect a property under renovation',
      content: [
        { kind: 'paragraph', text: 'If the dwelling is empty due to renovation, do not wait for a letter from the Câmara. Compile a dossier in advance and, if the works are substantial, process them through the municipal procedure: licença, comunicação prévia or at least written confirmation of the applicable regime.' },
        { kind: 'checklist', items: [
          'A document from the Câmara Municipal on licenciamento, comunicação prévia or dispensa de controlo prévio',
          'Project, memória descritiva, termo de responsabilidade técnico, where applicable',
          'Contracts with the empreiteiro, architect, engenheiro, fiscal de obra',
          'Faturas-recibo and bank payments for materials and works',
          'Dated “before/during/after” photographs',
          'Livro de obra, autos de vistoria, e-mails with the Câmara or contractors',
          'Evidence of water/electricity being disconnected specifically due to the works',
          'Obra insurance or seguro multirriscos, if any',
          'A request to the Câmara asking not to qualify the property as devoluto due to renovação'
        ] },
        { kind: 'paragraph', text: 'If the renovation lasts for more than 12 months, the dossier must show that the works are real and ongoing rather than a fictitious pretext. This is especially important in Lisboa, Porto, Cascais, Oeiras and other markets under housing pressure.' }
      ]
    },
    {
      id: 'how-to-contest',
      title: 'How to contest the Câmara’s decision and the tax',
      content: [
        { kind: 'paragraph', text: 'The process usually starts not with Finanças, but with the Câmara Municipal. The municipality identifies the property, notifies the owner and grants an audiência prévia — to present your position and documents before the final decision.' },
        { kind: 'checklist', items: [
          'Do not ignore a letter from the Câmara: the response period is usually short, often 10 working days under administrative procedure rules',
          'Check who received the notice: the owner, cabeça de casal, manager, lawyer, tax representative',
          'Request a copy of the grounds: fiscalização report, data from utility providers, photographs, information from the condomínio',
          'Submit the resposta à audiência prévia with evidence of residence, tenancy, renovation or a lawful reason for vacancy',
          'Request a vistoria or a reinspection if the property is already in use',
          'If the decision has become final, file an administrative appeal/recurso or an ação administrativa depending on the stage',
          'When the IMI with the increase arrives, separately file a reclamação graciosa with Finanças within the deadline, because the tax act already stands on its own',
          'Keep proof of sending via balcão, email certificado, CTT registado or the município portal'
        ] },
        { kind: 'warning', text: 'You cannot wait only for the IMI nota de cobrança. If the municipal act of devoluto has already taken effect, it is harder to dispute later: Finanças will usually apply the information received from the Câmara.' }
      ]
    },
    {
      id: 'practical-prevention',
      title: 'Prevention for an expat owner',
      content: [
        { kind: 'paragraph', text: 'If you bought housing in Portugal and do not live in it permanently, make the property “explainable” to the Câmara. The goal is that the documents show this is not an abandoned dwelling but a property that is used, being renovated or lawfully awaiting occupancy.' },
        { kind: 'checklist', items: [
          'Connect água and eletricidade in your name or in the tenant’s name',
          'Keep bills showing real, even if small, consumption',
          'Draw up a tenancy agreement and register it on the Portal das Finanças if you let the property',
          'If you use it as a second home — keep tickets, expenses, bills, insurance, condomínio',
          'Provide the condomínio manager with a current contact',
          'Do not leave the property looking abandoned: post, shutters, leaks, façade',
          'For renovation, arrange municipal documents in advance',
          'Check post at the property address and in ViaCTT/Portal das Finanças',
          'Before buying a vacant property, ask the seller about devoluto status and IMI debts',
          'Once a year check the deliberação de taxas IMI of your Câmara Municipal'
        ] },
        { kind: 'paragraph', text: 'For a buyer it is important: triple IMI is linked to the property and its status in the specific tax year. In the escritura ask for the certidão predial, caderneta predial, a statement of no debts and written assurances from the seller that the property has not been recognised as devoluto.' }
      ]
    }
  ],
  costs: [
    { label: 'Standard IMI for VPT €200,000 at a 0.3% rate', amountEUR: 600, note: 'Example: €200,000 × 0.3%.' },
    { label: 'IMI ×3 for the same property', amountEUR: 1800, note: 'Example after recognition as an imóvel devoluto.' },
    { label: 'Standard IMI for VPT €200,000 at a 0.45% rate', amountEUR: 900, note: 'Maximum standard municipal rate for urban housing.' },
    { label: 'IMI ×3 at a 0.45% rate', amountEUR: 2700, note: 'Not including any possible additional agravamentos in special zones.' }
  ],
  sources: [
    {
      title: 'Lei 56/2023 — Mais Habitação, changes to the housing and IMI regime',
      url: 'https://dre.pt/dre/detalhe/lei/56-2023-218862887',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IMI — IMI rates and agravamento for prédios devolutos',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2003-34562575',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 159/2006 — concept of prédio devoluto',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/159-2006-540847',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — IMI: information for the taxpayer',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cimi/Pages/cimi112.aspxindex.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
