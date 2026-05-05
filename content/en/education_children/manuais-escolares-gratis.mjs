export default {
  editorialVoice: 'hackportugal',
  id: 'manuais-escolares-gratis',
  categoryId: 'education_children',
  title: 'Free school textbooks for 1.º–9.º ano: Programa Manuais',
  tldr: 'In Portugal’s state schools, textbooks for 1.º–9.º ano are provided free under the Programa Manuais Escolares Gratuitos: the parent receives MEGA vouchers and redeems them for books at a bookshop or the school. The programme is universal, not income- or ASE-dependent. At the end of the year, most textbooks must be returned for reuse; workbooks and consumables are usually bought separately.',
  tags: ['school', 'manuais', 'mega', 'textbooks'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'What exactly is free',
      content: [
        { kind: 'paragraph', text: 'The Programa Manuais Escolares Gratuitos is a state scheme that provides school textbooks free of charge. For families, it works via electronic MEGA vouchers: each voucher corresponds to a specific textbook from the school’s list.' },
        { kind: 'checklist', items: [
          'It covers the core textbooks approved by the school for the specific ano and turma.',
          'For 1.º–9.º ano in public school, the programme applies regardless of household income.',
          'This is not an ASE benefit: entitlement to free manuais does not require low-income status.',
          'The child must be enrolled via the Portal das Matrículas / ePortugal or directly via the escola, if the institution requests it.',
          'New or used books are issued against a voucher — the family does not choose the format.',
          'Workbooks, cadernos de atividades, stationery, backpack, calculator and materials for Educação Visual are usually paid for separately.',
          'Pre‑school is not included: 1.º ano usually starts at age 6, not 4.',
          'In private schools without a contract with the state, free textbooks are usually not provided.'
        ] }
      ]
    },
    {
      id: 'get-access',
      title: 'How to get MEGA vouchers',
      content: [
        { kind: 'substeps', items: [
          { id: 'matricula', title: '1. Make sure the matrícula is accepted', content: [
            { kind: 'paragraph', text: 'First, the child must be enrolled for the school year. For transition years and first-time enrolment, use the Portal das Matrículas on ePortugal; in other cases renewal is often automatic, but the school may request data confirmation.' },
            { kind: 'checklist', items: [
              'The child’s NIF, if already available.',
              'The NIF of the encarregado de educação — the parent or guardian who handles school matters.',
              'The child’s Documento de identificação: passport, Cartão de Cidadão, residence permit or another document.',
              'Residential address in Portugal.',
              'Parent’s contacts: email and phone.',
              'Details of the previous school if the child is moving from another country or changing escola.'
            ] }
          ] },
          { id: 'mega-registration', title: '2. Register on the MEGA platform', content: [
            { kind: 'paragraph', text: 'After the school processes the matrícula and uploads the lists, the parent logs into the MEGA / Manuais Escolares platform and links the pupil to their NIF. Sign-in is usually via the NIF and the encarregado de educação’s details; the school must list the same responsible adult.' },
            { kind: 'warning', text: 'If MEGA says the pupil is not found, this is not always an error. Often the school has not yet finalised the turma, uploaded the textbook list, or a different encarregado de educação is recorded in the system.' }
          ] },
          { id: 'download-vouchers', title: '3. Download the vouchers', content: [
            { kind: 'paragraph', text: 'Vouchers usually appear in batches closer to the start of the academic year: first for some years, then for others. In practice, families check MEGA in August–September and sometimes receive part of the vouchers after classes have already started.' },
            { kind: 'checklist', items: [
              'Download the PDF or show the voucher on your phone.',
              'Check the pupil’s name, ano, escola and subject.',
              'There will be a separate code for each textbook.',
              'Do not buy books in advance unless the school has confirmed that no voucher will be issued.',
              'Keep the email and access to MEGA until the end of the school year.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'redeem',
      title: 'Where to redeem vouchers for books',
      content: [
        { kind: 'paragraph', text: 'Vouchers are used in participating bookshops, major chains, online stores or sometimes directly via the school. The specific method depends on the type of voucher and book availability.' },
        { kind: 'checklist', items: [
          'Open the list of aderentes on the MEGA platform or check with the escola.',
          'Show the voucher’s QR code/code and the parent’s ID if the shop requests verification.',
          'Check that you receive the exact textbook for the correct ano and subject.',
          'If the book is used, check for the absence of torn pages and serious markings.',
          'If the textbook is not in stock, the shop can order it; lead time depends on the publisher and the season.',
          'Do not hand over a voucher for another textbook or an “equivalent” without the school’s confirmation.',
          'Keep the receipt or collection confirmation until the end of September.'
        ] },
        { kind: 'warning', text: 'A voucher cannot really be “cashed in”: it is not money but the right to obtain a specific manual. If you bought a textbook with your own money before the voucher was issued, a refund is usually not guaranteed.' }
      ]
    },
    {
      id: 'return-books',
      title: 'Returning textbooks at the end of the year',
      content: [
        { kind: 'paragraph', text: 'The idea of the programme is reuse. Therefore, at the end of the school year the school collects most textbooks, checks their condition and returns them to circulation for the next pupils.' },
        { kind: 'checklist', items: [
          'The return deadline is set by the school, usually after classes end or after exams.',
          'Textbooks must be returned without major damage, torn pages or unusable markings.',
          'Write in pencil or use bookmarks if the school warns that the book will be returned.',
          'Do not glue pages down permanently and do not cut out tasks.',
          '1.º ciclo textbooks may have a special regime, because children often write directly in the book; check with the escola.',
          'Workbooks and consumables are usually not returned.',
          'If a book is lost or damaged, the school may require replacement or payment of the cost.'
        ] },
        { kind: 'warning', text: 'Do not ignore the return. If books are not returned or are damaged, the school may block the issue of new vouchers until the matter is resolved.' }
      ]
    },
    {
      id: 'expat-edge-cases',
      title: 'If you have just moved or your child does not speak Portuguese',
      content: [
        { kind: 'paragraph', text: 'Foreign families have the same rules for free textbooks if the child is enrolled in a Portuguese public school. Citizenship and having a Cartão de Cidadão are not prerequisites for manuais; what matters is the matrícula, the pupil’s data and the NIF of the responsible parent.' },
        { kind: 'checklist', items: [
          'If the child does not have a NIF, ask the school how they will enter the pupil in the system; the parent’s NIF is almost always required.',
          'If you arrived in August–September, first secure a place in the escola, then wait for the pupil to appear in MEGA.',
          'For children from another country, the school may determine equivalência and the year group after assessing documents.',
          'Ask for the list of manuais before buying additional materials: different schools use different publishers.',
          'For Português Língua Não Materna there may be separate materials; not all are included in the standard set.',
          'If MEGA shows outdated parent details, the school must update the encarregado de educação.',
          'In case of a dispute, email the school’s secretaria: a written trail helps to correct the matrícula or voucher more quickly.'
        ] }
      ]
    }
  ],
  costs: [
    { label: '1.º–9.º ano textbooks via MEGA vouchers', amountEUR: 0, note: 'For public school pupils; issued as new or used under the reutilização system.' },
    { label: 'Workbooks and stationery', amountEURMin: 30, amountEURMax: 150, note: 'Per child per year benchmark; depends on year group, school and teachers’ requirements.' }
  ],
  sources: [
    { title: 'DGE — Textbooks (evaluation, certification and reuse)', url: 'https://www.dge.mec.pt/manuais-escolares', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'IGeFE — MEGA, Free School Textbooks', url: 'https://www.igefe.mec.pt/Page/Index/199', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'ePortugal — School enrolments', url: 'https://eportugal.gov.pt/servicos/matricular-um-aluno-na-escola', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'MEGA Portal — Textbooks', url: 'https://manuaisescolares.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
