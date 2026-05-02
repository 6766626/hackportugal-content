export default {
  editorialVoice: 'hackportugal',
  id: 'lojas-imprimir-fotocopiar',
  categoryId: 'daily_life',
  title: 'Where to print, scan and laminate documents',
  tldr: 'For AIMA, Finanças, SNS and school, the fastest option is usually not a large shop, but the nearest papelaria / reprografia / centro de cópias: A4 printing is usually €0.10–€0.30 per page, scanning €0.20–€1, A4 lamination €1–€3. For larger chains, check Worten Resolve, FNAC and Loja CTT, but services depend on the specific branch. For urgent printing of AIMA documents, take the PDF on a USB stick and in email, and ask for “imprimir frente e verso” and “digitalizar para PDF”.',
  tags: ['printing', 'ctt', 'aima', 'documents'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'where-to-go',
      title: 'Where to go first',
      content: [
        { kind: 'paragraph', text: 'In Portugal, everyday printing is called impressão, a copy is fotocópia, a scan is digitalização, and lamination is plastificação. The most reliable option is not a shopping centre, but a local papelaria, reprografia or centro de cópias near a metro station, university, Câmara Municipal, Tribunal, Conservatória or Loja de Cidadão.' },
        { kind: 'checklist', items: [
          'Papelaria / reprografia — the best option for an AIMA pack, passport copies, contrato de arrendamento, IRS, recibos verdes',
          'Centro de cópias near universities — cheap and fast, often with self-service printing',
          'Loja CTT — some branches offer copies/printing/scanning, but the range of services depends on the branch',
          'Worten Resolve — the Worten service area; some shops can help with printing/scanning, but this is not guaranteed at every location',
          'FNAC — larger shops sometimes offer photo printing and digital services; check in advance for standard A4 printing',
          'University libraries and municipal bibliotecas — often have printing, but you may need a library card or student access',
          'Hotels and coworking spaces — suitable for 1–3 urgent pages, but usually more expensive',
          'Junta de Freguesia sometimes makes copies for its own procedures, but do not count on it as a full copy centre'
        ] }
      ]
    },
    {
      id: 'aima-documents-fast',
      title: 'How to print documents for AIMA quickly',
      content: [
        { kind: 'paragraph', text: 'Before visiting AIMA, do not look for the “perfect” shop. Search Google Maps for: “reprografia”, “fotocópias”, “papelaria”, “centro de cópias” + neighbourhood. They usually open earlier than shopping centres and better understand what “documentos para AIMA” means.' },
        { kind: 'checklist', items: [
          'Save all PDFs in one folder: passport, visto, comprovativo de morada, contrato, NIF, NISS, seguro, meios de subsistência',
          'Send the documents to yourself by email and duplicate them on a USB stick',
          'Ask: “Preciso imprimir estes documentos para AIMA”',
          'If the document is double-sided, ask for: “frente e verso”',
          'For passports and cartões, ask for a copy “a cores” — a colour copy is more expensive, but often easier to read',
          'Ask for the scan “num único PDF” — one PDF file is more convenient for sending to AIMA, Finanças or a lawyer',
          'Check that all edges of the passport, visa, carimbo de entrada and QR codes are visible on the copy',
          'Make 1 extra set of copies: AIMA sometimes asks to keep a copy and return the originals'
        ] },
        { kind: 'warning', text: 'Do not laminate original residence permits, passports, certidões, Cartão de Cidadão, títulos de residência or documents with a stamp/QR code. Lamination can make a document unsuitable for verification or scanning.' }
      ]
    },
    {
      id: 'prices',
      title: 'Price guide for 2026',
      content: [
        { kind: 'paragraph', text: 'Prices are not regulated by the state and depend on the city, neighbourhood, urgency and colour. Lisbon, Porto and areas near tourist zones are more expensive; places near universities are usually cheaper.' },
        { kind: 'checklist', items: [
          'Black-and-white A4 printing: usually €0.10–€0.30 per page',
          'Colour A4 printing: usually €0.30–€1 per page',
          'Black-and-white A4 photocopy: usually €0.05–€0.20 per page for larger volumes',
          'Scanning 1 page: usually €0.20–€1',
          'Scanning a pack into one PDF: often €2–€5 for a small set',
          'A4 lamination: usually €1–€3',
          'Printing from email/USB: usually no extra charge, but some lojas charge €0.50–€1 to open a file',
          'Urgent large-volume printing or binding: price by orçamento'
        ] },
        { kind: 'warning', text: 'At Loja CTT, Worten and FNAC, do not expect one nationwide price. Check the specific balcão or loja: the service may be unavailable, the machine may not be working, and the queue at CTT is often related to postal and banking services.' }
      ]
    },
    {
      id: 'what-to-say',
      title: 'Portuguese phrases',
      content: [
        { kind: 'paragraph', text: 'Simple phrases are enough in copy centres. If the document is important, print one page first and check the scale.' },
        { kind: 'checklist', items: [
          '“Queria imprimir estes documentos, por favor.” — I would like to print these documents',
          '“Pode imprimir em preto e branco?” — Can you print in black and white?',
          '“Preciso a cores.” — I need it in colour',
          '“Frente e verso, por favor.” — Double-sided printing',
          '“Uma cópia de cada documento.” — One copy of each document',
          '“Duas vias, por favor.” — Two copies',
          '“Pode digitalizar para PDF?” — Can you scan it to PDF?',
          '“Tudo num único ficheiro PDF.” — Everything in one PDF file',
          '“Pode enviar para este email?” — Can you send it to this email?',
          '“Preciso plastificar esta folha.” — I need to laminate this sheet'
        ] }
      ]
    },
    {
      id: 'privacy-and-files',
      title: 'Security: passport, NIF, bank statements',
      content: [
        { kind: 'paragraph', text: 'Copy centres often open files on a shared computer. For AIMA documents this is normal, but do not leave access to your email, Google Drive, banking app or Finanças personal account.' },
        { kind: 'checklist', items: [
          'It is better to bring PDFs on a USB stick rather than log in to your email on someone else’s computer',
          'If you send an email to the loja, you do not need to delete the message from “sent” — but ask the employee to close the attachments after printing',
          'Do not send passwords, códigos de acesso or bank details in plain text',
          'For bank statements, download the PDF from the bank app in advance',
          'Check that the current version is being printed: date, name, NIF, morada',
          'Do not leave extra copies on the counter or in the bin',
          'If you scanned a passport, ask them to send you the file and delete the local copy: “Pode apagar o ficheiro deste computador?”',
          'For AIMA, it is better to have a paper set + a digital copy on your phone'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Black-and-white A4 printing', amountEURMin: 0.10, amountEURMax: 0.30, note: 'Typical range per page in a papelaria/reprografia; CTT and chain shops may differ' },
    { label: 'Colour A4 printing', amountEURMin: 0.30, amountEURMax: 1, note: 'Depends on colour coverage and paper type' },
    { label: 'Scanning', amountEURMin: 0.20, amountEURMax: 1, note: 'Per page; a document pack in one PDF is often priced separately' },
    { label: 'A4 lamination', amountEURMin: 1, amountEURMax: 3, note: 'Do not use for original official documents' }
  ],
  sources: [
    { title: 'Worten — shop chain and Worten Resolve service', url: 'https://www.worten.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CTT — branches and Loja CTT services', url: 'https://www.ctt.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'FNAC Portugal — shops and services', url: 'https://www.fnac.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
