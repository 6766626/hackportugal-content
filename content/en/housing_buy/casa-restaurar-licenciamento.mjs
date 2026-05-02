export default {
  editorialVoice: 'hackportugal',
  id: 'casa-restaurar-licenciamento',
  categoryId: 'housing_buy',
  title: 'Restoring an old flat: licenciamento da Câmara, ARU and IMI relief',
  tldr: 'In an old flat in Portugal, you cannot start a “restoration” as if it were ordinary refurbishment if you touch the façade, structure, common parts, windows, balconies, azulejos or if the building is in an ARU / património area. You need an architect, a Câmara Municipal check and sometimes DGPC. Municipal taxas for the processo are often €100–500, but the design project and fiscalização are charged separately. In an ARU, IMI benefits may be available: a 3-year exemption after reabilitação, then a further 5-year extension for HPP or rental, plus IRS at 30% of expenses up to €500.',
  tags: ['aru', 'imi', 'licensing', 'works'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'diagnostico',
      title: '1. First determine: refurbishment or obra sujeita a controlo',
      content: [
        { kind: 'paragraph', text: 'In 2026, the RJUE applies with the SIMPLEX urbanístico changes. Simple internal finishing works without changes to the structure, façade, service risers and common parts usually do not require a licença. But old flats almost always have “traps”: timber floors, load-bearing walls, façade windows, historic azulejos, ventilação, chaminés, condomínio and património protection areas.' },
        { kind: 'checklist', items: [
          'Painting, floors, a kitchen without moving risers — usually obra de conservação, often without licenciamento',
          'Demolishing walls, reinforcing beams, opening up new openings — an arquitecto / engenheiro and Câmara control are needed',
          'Replacing windows with a different material, colour or desenho — risk of refusal, especially in Lisboa / Porto / centros históricos',
          'Air conditioning on the façade, closing a varanda, changing guardas — almost always requires a Câmara check',
          'Works in common parts: telhado, fachada, escadas, colunas — condomínio approval and usually Câmara approval are needed',
          'A building being in an ARU does not mean automatic permission: an ARU gives tax benefits, but does not remove urbanismo rules',
          'A building in a zona de proteção or an imóvel classificado — a parecer from DGPC or the municipal património department may be required'
        ] },
        { kind: 'warning', text: 'Do not rely on the seller’s phrase “pode remodelar tudo”. Before buying, ask the Câmara Municipal for the histórico do processo, planta aprovada and check whether there are obras ilegais. After completion, fines and the obligation to carry out legalização effectively pass to the new owner.' }
      ]
    },
    {
      id: 'verificar-zona',
      title: '2. Check ARU, património and address restrictions',
      content: [
        { kind: 'paragraph', text: 'Before budgeting, you need to understand the building’s regime. In Lisbon, for example, Rua Garrett / Chiado, Baixa Pombalina, Alfama, Mouraria and Avenida da Liberdade often fall within areas with special rules on façades, caixilharia, signage, air conditioners, telhados and materials. In such places, the architect must read not only the RJUE, but also the PDM, regulamento municipal, cartas de património and ARU rules.' },
        { kind: 'checklist', items: [
          'Check the address on the Câmara Municipal website: PDM, condicionantes, ARU, loteamento, licença de utilização',
          'Check DGPC: imóvel classificado, monumento nacional, interesse público, zona especial de proteção',
          'Ask the seller for: caderneta predial, certidão permanente, licença de utilização, ficha técnica da habitação if applicable',
          'Ask for plantas aprovadas: the current layout must match what is registered with the Câmara',
          'If the building predates 1951, do not conclude that “no licence is needed”: there may be requirements on segurança, salubridade and património',
          'If the flat is in a prédio em propriedade horizontal, check the título constitutivo and regras do condomínio',
          'For an ARU, keep proof that the property is in the area: this will be needed for IMI / IMT / IVA / IRS benefits'
        ] },
        { kind: 'warning', text: 'In historic districts, “the same plastic windows as the neighbour’s” are not proof of legality. The Câmara may require you to restore the original caixilharia, colour, desenho or remove external AC units.' }
      ]
    },
    {
      id: 'licenciamento',
      title: '3. What to submit to the Câmara: comunicação prévia, licença or isenção',
      content: [
        { kind: 'paragraph', text: 'The form depends on the works and the municipality. In a typical scenario, the architect prepares a levantamento, projeto de arquitetura, peças desenhadas, memória descritiva, termo de responsabilidade and, where necessary, specialty projects: estabilidade, águas, esgotos, eletricidade, acústica, térmica, segurança contra incêndio.' },
        { kind: 'substeps', items: [
          { id: 'isencao', title: 'Obras isentas', content: [
            { kind: 'paragraph', text: 'Small internal works with no impact on the structure, façade, safety and common systems may be isentas de controlo prévio. But it is sensible to obtain written confirmation from the architect or informação da Câmara, especially before selling the flat in the future.' }
          ] },
          { id: 'comunicacao', title: 'Comunicação prévia', content: [
            { kind: 'paragraph', text: 'Often used for works that comply with established rules and do not require a full licence. After correct submission and payment of taxas, you may start within the time limits set by the RJUE and municipal procedures, but errors in the documents create a risk of embargo.' }
          ] },
          { id: 'licenca', title: 'Licença administrativa', content: [
            { kind: 'paragraph', text: 'Needed for more sensitive cases: changes to the façade, structure, volume, use, works in protected areas, substantial reabilitação. In Lisboa and Porto, timeframes depend on the district and the workload of the services; allow for months, not weeks.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Hire an architect who has already submitted processes specifically to this Câmara',
          'Carry out a levantamento of the existing condition before demolition',
          'Agree with the condomínio on noise, access, lift, entulho and the contractor’s insurance',
          'Obtain an orçamento with IVA shown separately: 6% may be possible only if the reabilitação / ARU conditions are met, otherwise it is usually 23%',
          'Submit the processo at the municipal balcão urbanístico or through the Câmara portal',
          'Pay the taxas municipais; for small processes these are often €100–500, but in large cities and complex projects they are higher',
          'Do not start works until the architect has confirmed in writing that starting is lawful',
          'After completion, obtain comprovativos, termo de responsabilidade and, if necessary, atualização da licença de utilização'
        ] }
      ]
    },
    {
      id: 'beneficios-fiscais',
      title: '4. IMI, IRS and IVA: how not to lose ARU benefits',
      content: [
        { kind: 'paragraph', text: 'The main benefit for restoration is the regime de reabilitação urbana. Under the Estatuto dos Benefícios Fiscais, for prédios urbanos objeto de reabilitação in an ARU or buildings over 30 years old, exemption from IMI may be available for 3 years from the year the works are completed. It may be extended for a further 5 years if the property is used as habitação própria e permanente or rented out under arrendamento para habitação permanente.' },
        { kind: 'checklist', items: [
          'Check that the property is in an ARU or meets the criterion of a building over 30 years old and that the reabilitação is recognised by the Câmara',
          'Before the works, arrange a vistoria / avaliação do estado de conservação if the Câmara requires it',
          'After the works, request a certidão / reconhecimento da reabilitação urbana from the Câmara',
          'Submit a pedido de isenção de IMI to Finanças with the municipal confirmation',
          'IMI exemption is not automatic: without the Câmara document, Finanças will usually not apply the benefit',
          'IRS: you can declare 30% of reabilitação expenses up to a limit of €500, provided the EBF conditions are met and there are faturas with NIF',
          'IVA at 6% on works may be possible for some empreitadas de reabilitação urbana, but not for every purchase of furniture, appliances or decoration',
          'Keep faturas-recibo, contratos de empreitada, comprovativos de pagamento and before/after photos for at least 4 years'
        ] },
        { kind: 'warning', text: 'Do not confuse “the flat is in an ARU” with “all works automatically have IVA at 6% and IMI for 5 years”. You need the correct type of works, Câmara confirmation and correct faturas. If the contractor applies 6% without grounds, the tax risk may also fall on the owner.' }
      ]
    },
    {
      id: 'contratos',
      title: '5. Contract with the architect and contractor: what to include',
      content: [
        { kind: 'paragraph', text: 'An old flat is not cosmetic refurbishment. Hidden problems often emerge in the estimate: beams, humidade, drains, electrics without terra, asbestos/fibrocimento, illegal mezzanines, poor acoustics. You need not only a designer, but an architect with licenciamento experience and an engineer.' },
        { kind: 'checklist', items: [
          'In the contract with the architect: levantamento, estudo prévio, projeto, submissão à Câmara, respostas a notificações, acompanhamento de obra',
          'State separately who obtains the DGPC / património parecer if the address is in a protected area',
          'In the contract with the empreiteiro: prazo, preço, IVA, materiais, garantias, seguro de acidentes de trabalho, remoção de entulho',
          'Include a 5–10% retention until defects are remedied and entrega dos documentos finais',
          'Ask for the empreiteiro’s alvará or registo in IMPIC for the relevant type of works',
          'For the condomínio: notice of dates, noise, lift, proteção das zonas comuns, liability for damage',
          'For a purchase for restoration: include in the CPCV a condition for checking licenciamento, ARU and the feasibility of the works',
          'For património areas: include cláusulas património — a ban on changing the façade, caixilharia, azulejos, cantarias without written permission'
        ] },
        { kind: 'warning', text: 'The most expensive mistake is to demolish everything before permits. If the Câmara imposes an embargo, you pay for the crew’s downtime, legalização, a fine and sometimes restoration of the original condition.' }
      ]
    },
    {
      id: 'practical-plan',
      title: '6. Practical plan before buying or starting obra',
      content: [
        { kind: 'paragraph', text: 'For an expat buyer, the safe order is: first due diligence, then the purchase, then the project, then Câmara, and only after that obra. If the flat is being bought for a flip or rental, calculate in advance not only the construction estimate, but also months of waiting, IMI, condomínio, loan juros and the inability to let the property during the works.' },
        { kind: 'checklist', items: [
          'Week 1: request documents from the seller and condomínio',
          'Week 1–2: the architect checks the Câmara, ARU, DGPC, plantas and illegal alterations',
          'Week 2–3: preliminary budget with a 15–25% reserve for hidden defects',
          'Before CPCV: include an exit condition if the Câmara / património do not allow the planned reabilitação',
          'After purchase: order the projeto and submit comunicação prévia / licença / pedido de informação',
          'During obra: keep a diário de obra, photos, faturas with NIF, records of hidden works',
          'After obra: request recognition of the reabilitação and submit the IMI exemption',
          'Before selling or renting: make sure the utilização, layout and documents match'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Taxas municipais for a small processo urbanístico', amountEURMin: 100, amountEURMax: 500, note: 'A guide for simple submissions; the Câmara, area and type of works may increase the amount.' },
    { label: 'Architect for levantamento + submissão', amountEURMin: 1500, amountEURMax: 6000, note: 'For a flat; complex património areas, specialty projects and fiscalização are charged separately.' },
    { label: 'IRS deduction for reabilitação', amountEUR: 500, note: 'Deduction limit: 30% of eligible expenses up to €500, provided the EBF conditions are met and there are faturas.' },
    { label: 'IMI exemption after reabilitação', amountEUR: 0, note: 'The benefit is not a cash amount, but an exemption: 3 years, with a possible further 5-year extension for HPP or long-term residential rental.' }
  ],
  sources: [
    {
      title: 'Câmara Municipal de Lisboa — Urbanismo, licenciamento and reabilitação urbana',
      url: 'https://www.cm-lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGPC — Património cultural, imóveis classificados and zonas de proteção',
      url: 'https://www.dgpc.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Decreto-Lei 555/99, RJUE, com alterações do SIMPLEX urbanístico',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34567875',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Estatuto dos Benefícios Fiscais, benefícios à reabilitação urbana',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1989-34554075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
