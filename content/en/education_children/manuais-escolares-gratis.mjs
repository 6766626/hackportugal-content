export default {
  editorialVoice: 'hackportugal',
  id: 'manuais-escolares-gratis',
  categoryId: 'education_children',
  title: 'Free school textbooks from Year 1 to Year 12: Programa Manuais',
  tldr: 'In Portuguese state schools, textbooks for all of compulsory education (1.º-12.º ano) are provided free of charge through Programa Manuais Escolares Gratuitos: the parent receives MEGA vouchers and exchanges them for books at a bookshop or school. The programme is universal, and does not depend on income or ASE. At the end of the year, most textbooks must be returned for reuse; workbooks and consumables are usually bought separately.',
  tags: ['school', 'manuais', 'mega', 'textbooks'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'What exactly is free',
      content: [
        { kind: 'paragraph', text: 'Programa Manuais Escolares Gratuitos is the state scheme for providing school textbooks free of charge. For families, it works through electronic MEGA vouchers: each voucher corresponds to a specific textbook from the school’s list.' },
        { kind: 'checklist', items: [
          'The main textbooks approved by the school for the specific ano and turma are covered.',
          'For all of compulsory education (1.º-12.º ano) in a state school, the programme applies regardless of family income.',
          'This is not an ASE benefit: eligibility for free manuais does not require low-income family status.',
          'The child must be enrolled in school through Portal das Matrículas / ePortugal or directly through the escola, if the educational establishment requests this.',
          'New or used books are issued with the voucher — the family does not choose the format.',
          'Workbooks, cadernos de atividades, stationery, a school bag, calculator and materials for Educação Visual are usually paid for separately.',
          'Pre-school education is not included: 1.º ano usually starts at age 6, not 4.',
          'In private schools without an agreement with the state, free textbooks are usually not available.'
        ] }
      ]
    },
    {
      id: 'get-access',
      title: 'How to get MEGA vouchers',
      content: [
        { kind: 'substeps', items: [
          { id: 'matricula', title: '1. Make sure the matrícula has been accepted', content: [
            { kind: 'paragraph', text: 'First, the child must be enrolled for the school year. For transition years and first-time enrolment, Portal das Matrículas on ePortugal is used; in other cases, renewal often happens automatically, but the school may ask for data to be confirmed.' },
            { kind: 'checklist', items: [
              'The child’s NIF, if they already have one.',
              'The NIF of the encarregado de educação — the parent or guardian who handles school matters.',
              'The child’s documento de identificação: passport, Cartão de Cidadão, residence permit or another document.',
              'Residential address in Portugal.',
              'Parent’s contact details: email and phone number.',
              'Details of the previous school, if the child is moving from another country or changing escola.'
            ] }
          ] },
          { id: 'mega-registration', title: '2. Register on the MEGA platform', content: [
            { kind: 'paragraph', text: 'After the school processes the matrícula and uploads the lists, the parent logs in to the MEGA / Manuais Escolares platform and links the pupil to their NIF. Authentication is usually through the NIF and the encarregado de educação details; the school must see the same responsible adult.' },
            { kind: 'warning', text: 'If MEGA says the pupil cannot be found, this is not always an error. Often the school has not yet closed the turma, uploaded the textbook list, or the system shows a different encarregado de educação.' }
          ] },
          { id: 'download-vouchers', title: '3. Download the vouchers', content: [
            { kind: 'paragraph', text: 'Vouchers usually appear in batches closer to the start of the school year: first for some year groups, then for others. In practice, families check MEGA in August-September and sometimes receive some vouchers only after classes have already started.' },
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
      title: 'Where to exchange vouchers for books',
      content: [
        { kind: 'paragraph', text: 'Vouchers are used at participating bookshops, large chains, online shops or sometimes directly through the school. The specific method depends on the type of voucher and book availability.' },
        { kind: 'checklist', items: [
          'Open the list of aderentes on the MEGA platform or check with the escola.',
          'Show the QR code / voucher code and the parent’s document if the shop asks to verify it.',
          'Check that you have been given exactly the textbook for the correct ano and subject.',
          'If the book is second-hand, check that there are no torn-out pages or serious annotations.',
          'If the textbook is not in stock, the shop may order it; the timeframe depends on the publisher and the season.',
          'Do not hand over the voucher for another textbook or an “equivalent” without confirmation from the school.',
          'Keep the receipt or confirmation of issue until the end of September.'
        ] },
        { kind: 'warning', text: 'A voucher cannot really be “cashed in”: it is not money, but the right to receive a specific manual. If you bought the textbook with your own money before the voucher was issued, reimbursement is usually not guaranteed.' }
      ]
    },
    {
      id: 'return-books',
      title: 'Returning textbooks at the end of the year',
      content: [
        { kind: 'paragraph', text: 'The idea of the programme is reuse. Therefore, at the end of the school year, the school collects most textbooks, checks their condition and puts them back into circulation for the next pupils.' },
        { kind: 'checklist', items: [
          'The school sets the return deadline, usually after classes finish or after exams.',
          'Textbooks must be returned without major damage, torn-out pages or unusable annotations.',
          'Write in pencil or use bookmarks if the school warns that the books must be returned.',
          'Do not permanently stick pages together or cut out exercises.',
          'Textbooks for 1.º ciclo may have a special arrangement, because children often write directly in the book; check with the escola.',
          'Workbooks and consumable materials are usually not returned.',
          'If a book is lost or damaged, the school may require you to replace it or pay the cost.'
        ] },
        { kind: 'warning', text: 'Do not ignore the return. If books are not returned or are damaged, the school may block the issue of new vouchers until the situation is resolved.' }
      ]
    },
    {
      id: 'expat-edge-cases',
      title: 'If you have just moved or your child does not speak Portuguese',
      content: [
        { kind: 'paragraph', text: 'Foreign families follow the same rules for free textbooks if the child is enrolled in a Portuguese state school. Citizenship and having a Cartão de Cidadão are not conditions for manuais; the key things are the matrícula, the pupil’s details and the NIF of the responsible parent.' },
        { kind: 'checklist', items: [
          'If the child does not have a NIF, ask the school how it will enter the pupil in the system; the parent’s NIF is almost always needed.',
          'If you arrive in August-September, first secure a place at an escola, then wait for the pupil to appear in MEGA.',
          'For children from another country, the school may determine equivalência and the school year after analysing the documents.',
          'Ask for the manuais list before buying additional materials: different schools use different publishers.',
          'For Português Língua Não Materna there may be separate materials; not all of them are included in the standard set.',
          'If MEGA has old parent details, the school must update the encarregado de educação.',
          'In a dispute, write an email to the school secretaria: a written trail helps correct the matrícula or voucher faster.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Textbooks for 1.º-12.º ano with MEGA vouchers', amountEUR: 0, note: 'For state school pupils; issued as new or second-hand through the reutilização system.' },
    { label: 'Workbooks and stationery', amountEURMin: 30, amountEURMax: 150, note: 'Indicative amount per child per year; depends on the year group, school and teachers’ requirements.' }
  ],
  sources: [
    { title: 'DGE — Manuais Escolares (assessment, certification and reuse)', url: 'https://www.dge.mec.pt/manuais-escolares', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'IGeFE — MEGA, Manuais Escolares Gratuitos', url: 'https://www.igefe.mec.pt/Page/Index/199', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'ePortugal — School enrolments', url: 'https://www.gov.pt/servicos/matricular-um-aluno-na-escola', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal MEGA — Manuais Escolares', url: 'https://manuaisescolares.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
