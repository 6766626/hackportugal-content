export default {
  editorialVoice: 'hackportugal',
  id: 'software-faturacao-at',
  categoryId: 'work_business',
  title: 'AT-certified invoicing software: QR + ATCUD',
  tldr: 'In Portugal, invoices/recibos must be issued through AT-certified software, Portal das Finanças or manual pre-printed forms from authorised printers — the choice depends on turnover, bookkeeping and how you work. The QR code has been mandatory on fiscal documents since 2022, and ATCUD since 01.01.2023. Document series must be reported to AT in advance, otherwise the software will not receive a validation code. For a business, it is important not only to issue an invoice to the client, but also to report it to e-Fatura, usually by the 5th day of the following month.',
  tags: ['invoicing', 'atcud', 'qr', 'efatura'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What AT-certified invoicing software is',
      content: [
        { kind: 'paragraph', text: 'AT-certified software is a programme for issuing invoices, faturas-recibo, notas de crédito, notas de débito and other fiscal documents, certified by the Autoridade Tributária e Aduaneira. AT publishes the official list of such software on Portal das Finanças.' },
        { kind: 'paragraph', text: 'Certification does not mean “convenient bookkeeping”, but compliance with tax requirements: immutable numbering, SAF-T PT, QR code, ATCUD, audit trail, correct tax fields, export and/or submission of data to AT.' },
        { kind: 'checklist', items: [
          'Check the software in the official AT list, not only from advertising on the provider’s website',
          'Confirm whether it supports Portuguese VAT/IVA, exemptions and reverse charge',
          'Check SAF-T PT generation and automatic comunicação de faturas',
          'Check ATCUD: the software must be able to report series to AT or import the validation code',
          'For recibos verdes, Portal das Finanças is often enough if your activity is simple',
          'For shops, e-commerce, restaurants and services with a high document flow, commercial software is usually needed',
          'An invoice PDF made in Word/Canva/Excel is not a valid fiscal document'
        ] }
      ]
    },
    {
      id: 'mandatory-or-optional',
      title: 'When software is mandatory, and when you can do without it',
      content: [
        { kind: 'paragraph', text: 'In 2026, the key question is how you issue documents and which regime you are under. If you use a computer programme for faturação, it must be AT-certified. You cannot replace it with an ordinary spreadsheet, a PDF template or a foreign invoicing app without AT certification.' },
        { kind: 'checklist', items: [
          'AT-certified software is mandatory if you use software to issue invoices in Portugal',
          'It is mandatory with organised accounting or business processes where documents are issued through a system',
          'It is practically mandatory for Lda companies, shops, restaurants, online sales, inventory management and POS',
          'Separate software may not be needed if you are self-employed and issue faturas-recibo directly in Portal das Finanças',
          'Manual pre-printed forms from authorised print shops may be used, but this is inconvenient and does not suit most digital businesses',
          'If turnover is growing and there are many documents, it is better to move to software before numbering and SAF-T become chaotic',
          'Foreign Stripe/PayPal/Shopify receipts do not replace a Portuguese invoice if the transaction must be documented under PT rules'
        ] },
        { kind: 'warning', text: 'Do not confuse an “invoice for the client” with a “document for AT”. A commercial invoice from a foreign system may be useful for the client, but Portuguese tax accounting requires a document issued by an acceptable method: AT-certified software, Portal das Finanças or permitted manual invoices.' }
      ]
    },
    {
      id: 'qr-atcud',
      title: 'QR code and ATCUD: what must be on the document',
      content: [
        { kind: 'paragraph', text: 'The QR code has been mandatory on invoices and other fiscally relevant documents since 2022. It contains structured document data: issuer NIF, document type, number, date, base taxable amounts, IVA, totals and other fields according to the AT specification.' },
        { kind: 'paragraph', text: 'ATCUD has been mandatory since 01.01.2023. It is a unique document code that looks like a combination of the series validation code and the sequential number: for example, ATCUD: XY7K9P-000123. It is printed/shown on the document next to the QR code.' },
        { kind: 'checklist', items: [
          'Before using a new document series, it must be reported to AT',
          'AT issues a validation code for that series',
          'The software combines validation code + sequential number and generates ATCUD',
          'ATCUD must be on the fatura, fatura-recibo, nota de crédito, nota de débito and other relevant documents',
          'The QR code must be readable in PDF and on paper',
          'You cannot manually “invent” an ATCUD without registering the series with AT',
          'When changing software, year, shop, POS or document type, check whether a new series is needed',
          'Cancellation or a credit note must not break the numbering sequence'
        ] },
        { kind: 'warning', text: 'The most common mistake among migrant entrepreneurs is starting to issue documents in new software without activating the series in AT. Visually, the invoice may look fine, but without a correct ATCUD this is a tax risk.' }
      ]
    },
    {
      id: 'efatura-issuer-side',
      title: 'e-Fatura from the seller’s side: issuing an invoice is not enough',
      content: [
        { kind: 'paragraph', text: 'After invoices are issued, the data must reach AT/e-Fatura. This is an issuer-side obligation: the seller, self-employed person or company. The client may see the document in their e-Fatura, but this does not replace your obligation to report the document correctly.' },
        { kind: 'checklist', items: [
          'The standard prazo for comunicação de faturas is by the 5th day of the month following the month in which the document was issued',
          'For example, documents for April 2026 usually must be reported by 05.05.2026',
          'Submission is possible through the software webservice, SAF-T PT upload or manual entry on Portal das Finanças',
          'Good software submits the data automatically or reminds you of the deadline',
          'After submission, check the status: rejected files and warnings must be corrected',
          'Credit notes must also be reported, not just sent to the client',
          'If you work with an accountant, agree in writing who exactly submits the SAF-T and by which date',
          'Do not wait for the IRS/IRC period: e-Fatura is a monthly operational obligation'
        ] },
        { kind: 'warning', text: 'Fines usually arise not because there is no attractive PDF, but because documents were not reported, were reported late or were technically incorrect. For a small business this is especially painful: errors accumulate every month.' }
      ]
    },
    {
      id: 'how-to-choose',
      title: 'How to choose software in 2026',
      content: [
        { kind: 'paragraph', text: 'The choice depends on the business model. For one freelancer with 5 invoices a month, Portal das Finanças or a basic programme is enough. For a shop, restaurant, marketplace or B2B services with retenção na fonte, exemptions and foreign clients, you need a system your contabilista understands.' },
        { kind: 'checklist', items: [
          'Find the software in the official list of AT-certified software',
          'Check support for QR + ATCUD + comunicação de séries',
          'Confirm whether there is SAF-T PT export and automatic submission to AT',
          'Check Portuguese tax scenarios: IVA 23%/13%/6%, isenções, reverse charge, intra-EU, exports',
          'Check support for a foreign client’s NIF and a client without NIF',
          'Ask the accountant whether they can import data from this system',
          'Check user roles: owner, accountant, cashier, sales',
          'Check document archiving for at least the period required by tax accounting',
          'For e-commerce, check integrations with Shopify, WooCommerce, Stripe, POS and inventory',
          'Do not choose only by price: migrating series and correcting incorrect invoices cost more'
        ] }
      ]
    },
    {
      id: 'practical-setup',
      title: 'Mini launch checklist',
      content: [
        { kind: 'paragraph', text: 'Before the first invoice, set up the system together with the accountant. Mistakes in the first month are difficult to fix later, especially if SAF-T has already been submitted or the client has used the invoice in their own accounts.' },
        { kind: 'checklist', items: [
          'Check NIF, legal name, morada fiscal and CAE/CIRS activity',
          'Set up the IVA regime: normal, exemption under art. 53 CIVA or another applicable regime',
          'Create separate series for document types and points of sale, if needed',
          'Report the series to AT and obtain the validation code',
          'Create a test document and check QR + ATCUD',
          'Set up email templates, but do not manually change fiscal fields after issue',
          'Set up monthly comunicação de faturas by the 5th day',
          'Give the accountant access or agree on SAF-T export',
          'Keep copies of documents and confirmations of submission to AT',
          'When changing software, plan in advance the closure of old series and the launch of new ones'
        ] },
        { kind: 'warning', text: 'If you are on recibos verdes and use Portal das Finanças, separate software may not be needed. But if you start accepting mass payments, selling goods or issuing many documents, discuss switching to certified software before sales begin.' }
      ]
    }
  ],
  costs: [
    { label: 'Portal das Finanças for recibos verdes', amountEUR: 0, note: 'Suitable for simple self-employed invoices/receipts, but does not replace a full POS/e-commerce system.' },
    { label: 'Basic AT-certified software', amountEURMin: 5, amountEURMax: 25, note: 'Usually a monthly price for a freelancer/small business; check ATCUD, SAF-T and e-Fatura features separately.' },
    { label: 'POS/e-commerce/retail package', amountEURMin: 20, amountEURMax: 80, note: 'The price depends on tills, users, inventory, integrations and accountant support.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: certified invoicing software',
      url: 'https://www.gov.pt/servicos/consultar-o-programa-de-faturacao-certificado',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: QR code and ATCUD',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Negocios/Faturacao/Regras_mecanismos_comunicacao/Comunicacao_de_series_ATCUD/Comunicacao_Series_a_AT_e_ATCUD/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: taxpayer support — invoicing',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Negocios/Faturacao/Regras_de_faturacao/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 90
}
