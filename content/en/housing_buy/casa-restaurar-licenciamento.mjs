export default {
  editorialVoice: 'hackportugal',
  id: 'casa-restaurar-licenciamento',
  categoryId: 'housing_buy',
  title: 'Restoring an old flat: Câmara Municipal licenciamento, ARU and IMI relief',
  tldr: 'In an old flat in Portugal, you cannot start a “restoration” as if it were ordinary refurbishment if you are touching the façade, structure, common parts, windows, balconies, azulejos or if the building is in an ARU / património area. You need an architect, a Câmara Municipal check and sometimes DGPC. Municipal taxas for the processo are often €100–500, but the design work and fiscalização are paid separately. In an ARU, IMI relief may be available: 3 years’ exemption after reabilitação, then a further 5-year extension for HPP or rental, plus IRS relief of 30% of expenses up to €500.',
  tags: ['aru', 'imi', 'licensing', 'works'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'diagnostico',
      title: '1. First establish: refurbishment or obra sujeita a controlo',
      content: [
        { kind: 'paragraph', text: 'In 2026, the RJUE applies with SIMPLEX urbanístico amendments. Simple internal finishing work without changes to the structure, façade, service risers or common parts usually does not require a licença. But old flats almost always have “traps”: timber floors, load-bearing walls, façade windows, historic azulejos, ventilação, chaminés, condomínio and património protection areas.' },
        { kind: 'checklist', items: [
          'Painting, floors, a kitchen without moving risers — usually obra de conservação, often without licenciamento',
          'Demolishing walls, strengthening beams, opening up new openings — you need an arquitecto / engenheiro and Câmara Municipal control',
          'Replacing windows with a different material, colour or desenho — risk of refusal, especially in Lisboa / Porto / centros históricos',
          'Air conditioning on the façade, enclosing a varanda, changing guardas — almost always requires a Câmara Municipal check',
          'Works in common parts: telhado, fachada, escadas, colunas — you need condomínio approval and usually Câmara Municipal approval',
          'A building being in an ARU does not mean automatic permission: ARU provides tax reliefs, but does not cancel urbanismo rules',
          'A building in a zona de proteção or an imóvel classificado — a DGPC parecer or a municipal património body may be required'
        ] },
        { kind: 'warning', text: 'Do not rely on the seller’s phrase “pode remodelar tudo”. Before purchase, request the histórico do processo and planta aprovada from the Câmara Municipal and check whether there are any obras ilegais. After completion, fines and the obligation to legalização effectively pass to the new owner.' }
      ]
    },
    {
      id: 'verificar-zona',
      title: '2. Check ARU, património and address restrictions',
      content: [
        { kind: 'paragraph', text: 'Before budgeting, you need to understand the building’s regime.\n\nIn Lisbon, for example, Rua Garrett / Chiado, Baixa Pombalina, Alfama, Mouraria and Avenida da Liberdade often fall within areas with special rules on façades, caixilharia, signs, air conditioning units, telhados and materials. In such places, the architect must read not only the RJUE, but also the PDM, regulamento municipal, cartas de património and ARU rules.' },
        { kind: 'checklist', items: [
          'Check the address on the Câmara Municipal website: PDM, condicionantes, ARU, loteamento, licença de utilização',
          'Check DGPC: imóvel classificado, monumento nacional, interesse público, zona especial de proteção',
          'Ask the seller for: caderneta predial, certidão permanente, licença de utilização, ficha técnica da habitação if applicable',
          'Ask for plantas aprovadas: the current layout must match what is registered with the Câmara Municipal',
          'If the building predates 1951, do not conclude that “no licence is needed”: there may be requirements for segurança, salubridade and património',
          'If the flat is in a prédio em propriedade horizontal, check the título constitutivo and regras do condomínio',
          'For an ARU, keep proof that the property is in the area: you will need this for IMI / IMT / IVA / IRS reliefs'
        ] },
        { kind: 'warning', text: 'In historic districts, “the same plastic windows as the neighbour’s” is not proof of legality. The Câmara Municipal may require the original caixilharia, colour or desenho to be restored, or external AC units to be removed.' }
      ]
    },
    {
      id: 'licenciamento',
      title: '3. What to submit to the Câmara Municipal: comunicação prévia, licença or isenção',
      content: [
        { kind: 'paragraph', text: 'The form depends on the works and the municipality. In a typical scenario, the architect prepares the levantamento, projeto de arquitetura, peças desenhadas, memória descritiva, termo de responsabilidade and, where necessary, specialty projects: estabilidade, águas, esgotos, eletricidade, acústica, térmica, segurança contra incêndio.' },
        { kind: 'substeps', items: [
          { id: 'isencao', title: 'Obras isentas', content: [
            { kind: 'paragraph', text: 'Small internal works with no impact on the structure, façade, safety or common systems may be isentas de controlo prévio. But it is sensible to obtain written confirmation from an architect or informação da Câmara Municipal, especially before selling the flat in the future.' }
          ] },
          { id: 'comunicacao', title: 'Comunicação prévia', content: [
            { kind: 'paragraph', text: 'Often used for works that comply with established rules and do not require a full licence. After correct submission and payment of taxas, works can start within the time limits set by the RJUE and municipal procedures, but mistakes in the documents create a risk of embargo.' }
          ] },
          { id: 'licenca', title: 'Licença administrativa', content: [
            { kind: 'paragraph', text: 'Needed for more sensitive cases: changes to the façade, structure, volume or use, works in protected areas, substantial reabilitação. In Lisboa and Porto, timings depend on the district and the workload of the services; allow for months, not weeks.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Hire an architect who has already submitted processos in this specific Câmara Municipal',
          'Carry out a levantamento of the existing condition before demolition',
          'Agree noise, access, lift, entulho and contractor insurance with the condomínio',
          'Obtain an orçamento with IVA stated separately: 6% may be possible only if reabilitação / ARU conditions are met, otherwise it is usually 23%',
          'Submit the processo at the balcão urbanístico municipal or through the Câmara Municipal portal',
          'Pay the taxas municipais; for small processos often €100–500, but more in large cities and complex projects',
          'Do not start works until the architect has confirmed in writing that starting is lawful',
          'After completion, obtain comprovativos, termo de responsabilidade and, where necessary, atualização da licença de utilização'
        ] }
      ]
    },
    {
      id: 'beneficios-fiscais',
      title: '4. IMI, IRS and IVA: how not to lose ARU reliefs',
      content: [
        { kind: 'paragraph', text: 'The main relief for restoration is the regime de reabilitação urbana. Under the Estatuto dos Benefícios Fiscais, for prédios urbanos objeto de reabilitação in an ARU, or buildings over 30 years old, an IMI exemption for 3 years from the year the works are completed may be available. It can be extended for a further 5 years if the property is used as habitação própria e permanente or let under arrendamento para habitação permanente.' },
        { kind: 'checklist', items: [
          'Check that the property is in an ARU or meets the criterion of a building over 30 years old and that the reabilitação is recognised by the Câmara Municipal',
          'Before the works, arrange a vistoria / avaliação do estado de conservação if the Câmara Municipal requires it',
          'After the works, request a certidão / reconhecimento da reabilitação urbana from the Câmara Municipal',
          'Submit the pedido de isenção de IMI to Finanças with the municipal confirmation',
          'IMI exemption is not automatic: without the Câmara Municipal document, Finanças will usually not apply the relief',
          'IRS: you can claim 30% of reabilitação expenses up to a limit of €500 if EBF conditions are met and you have faturas with NIF',
          'IVA at 6% on works may be possible for some empreitadas de reabilitação urbana, but not for any purchase of furniture, appliances or décor',
          'Keep faturas-recibo, contratos de empreitada, comprovativos de pagamento and before/after photographs for at least 4 years'
        ] },
        { kind: 'warning', text: 'Do not confuse “the flat is in an ARU” with “all works automatically have IVA at 6% and IMI for 5 years”. You need the correct type of works, Câmara Municipal confirmation and correct faturas. If the contractor applies 6% without grounds, the tax risk may also fall on the owner.' }
      ]
    },
    {
      id: 'contratos',
      title: '5. Contract with the architect and contractor: what to include',
      content: [
        { kind: 'paragraph', text: 'An old flat is not a cosmetic refurbishment. Hidden problems often emerge in the quote: beams, humidade, drainage, electricity without terra, asbestos/fibrocimento, illegal mezzanines, poor acoustics. You need not only a designer, but an architect with licenciamento experience and an engineer.' },
        { kind: 'checklist', items: [
          'In the contract with the architect: levantamento, estudo prévio, projeto, submissão à Câmara Municipal, responses to notifications, acompanhamento de obra',
          'State separately who obtains the DGPC / património parecer if the address is in a protected area',
          'In the contract with the empreiteiro: prazo, preço, IVA, materiais, garantias, seguro de acidentes de trabalho, remoção de entulho',
          'Include a 5–10% retention until defects are remedied and entrega dos documentos finais',
          'Request the empreiteiro’s alvará or registo in IMPIC for the relevant type of works',
          'For the condomínio: notification of timings, noise, lift use, proteção das zonas comuns, liability for damage',
          'For a purchase for restoration: include in the CPCV a condition for checking licenciamento, ARU and the feasibility of the works',
          'For património areas: include cláusulas património — a prohibition on changing the façade, caixilharia, azulejos, cantarias without written permission'
        ] },
        { kind: 'warning', text: 'The most expensive mistake is demolishing everything before permissions. If the Câmara Municipal imposes an embargo, you pay for the crew’s downtime, legalização, the fine and sometimes restoration of the original condition.' }
      ]
    },
    {
      id: 'practical-plan',
      title: '6. Practical plan before purchase or starting obra',
      content: [
        { kind: 'paragraph', text: 'For an expat buyer, the safe order is: first due diligence, then the transaction, then the project, then the Câmara Municipal, and only after that the obra. If the flat is being bought for a flip or rental, calculate in advance not only the construction budget, but also the months of waiting, IMI, condomínio, loan interest and the inability to let the property during the works.' },
        { kind: 'checklist', items: [
          'Week 1: request documents from the seller and condomínio',
          'Week 1–2: the architect checks Câmara Municipal, ARU, DGPC, plantas and illegal alterations',
          'Week 2–3: preliminary budget with a 15–25% reserve for hidden defects',
          'Before the CPCV: include an exit condition if Câmara Municipal / património do not allow the planned reabilitação',
          'After purchase: commission the projeto and submit comunicação prévia / licença / pedido de informação',
          'During the obra: keep a diário de obra, photos, faturas with NIF, records of hidden works',
          'After the obra: request recognition of the reabilitação and submit the IMI exemption',
          'Before sale or rental: make sure the utilização, layout and documents match'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Taxas municipais for a small processo urbanístico', amountEURMin: 100, amountEURMax: 500, note: 'Guide figure for simple submissions; Câmara Municipal, area and type of works may increase the amount.' },
    { label: 'Architect for levantamento + submissão', amountEURMin: 1500, amountEURMax: 6000, note: 'For a flat; complex património areas, specialty projects and fiscalização are paid separately.' },
    { label: 'IRS deduction for reabilitação', amountEUR: 500, note: 'Deduction limit: 30% of eligible expenses up to €500 if EBF conditions are met and faturas are available.' },
    { label: 'IMI exemption after reabilitação', amountEUR: 0, note: 'The relief is not an amount but an exemption: 3 years, with a possible further 5-year extension for HPP or long-term residential rental.' }
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
      title: 'DGPC — Cultural património, imóveis classificados and zonas de proteção',
      url: 'https://www.dgpc.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Decreto-Lei 555/99, RJUE, with SIMPLEX urbanístico amendments',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34567875',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Estatuto dos Benefícios Fiscais, benefits for reabilitação urbana',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1989-34554075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
