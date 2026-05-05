export default {
  editorialVoice: 'hackportugal',
  id: 'software-faturacao-at',
  categoryId: 'work_business',
  title: 'AT-certified invoicing software: QR + ATCUD',
  tldr: 'In Portugal, invoices/recibos must be issued via AT-certified software, the Portal das Finanças or manual pre-printed forms — the choice depends on turnover, accounting and how you operate. The QR code has been mandatory on fiscal documents since 2022, and ATCUD since 01/01/2023. Document series must be pre-communicated to the AT, otherwise the software will not receive a validation code. For business it is crucial not only to give the client an invoice, but also to transmit it to e-Fatura, usually by the 5th day of the following month.',
  tags: ['invoicing', 'atcud', 'qr', 'e-fatura'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What AT-certified invoicing software is',
      content: [
        { kind: 'paragraph', text: 'AT-certified software is software for issuing invoices, faturas-recibo, notas de crédito, notas de débito and other fiscal documents, certified by the Autoridade Tributária e Aduaneira. The AT publishes an official list of such software on the Portal das Finanças.' },
        { kind: 'paragraph', text: 'Certification does not mean convenient bookkeeping; it means compliance with fiscal requirements: immutable numbering, SAF-T PT, QR code, ATCUD, audit trail, correct tax fields, and export and/or transmission of data to the AT.' },
        { kind: 'checklist', items: [
          'Verify the software in the official AT list, not just the vendor website',
          'Confirm it supports Portuguese VAT/IVA, exemptions and reverse charge',
          'Check SAF-T PT generation and automatic comunicação de faturas',
          'Check ATCUD: the software must be able to communicate series to the AT or import a validation code',
          'For recibos verdes, the Portal das Finanças is often sufficient if your activity is simple',
          'For shops, e-commerce, restaurants and services with a high volume of documents a commercial application is usually needed',
          'A PDF invoice made in Word/Canva/Excel is not a valid fiscal document'
        ] }
      ]
    },
    {
      id: 'mandatory-or-optional',
      title: 'When software is mandatory and when you can do without it',
      content: [
        { kind: 'paragraph', text: 'In 2026 the key question is how you issue documents and what regime you are under. If you use computer software for faturação, it must be AT-certified. You cannot replace it with a simple spreadsheet, a PDF template or a foreign invoicing app without AT certification.' },
        { kind: 'checklist', items: [
          'AT-certified software is mandatory if you use software to issue invoices in Portugal',
          'It is mandatory with organised accounting or business processes where documents are issued through a system',
          'It is practically mandatory for Lda, shops, restaurants, online sales, inventory control and POS',
          'Separate software may not be required if you are self-employed and issue faturas-recibo directly in the Portal das Finanças',
          'Manual pre-printed forms from authorised print shops may be used, but this is inconvenient and unsuitable for most digital businesses',
          'If turnover is growing and there are many documents, it is better to switch to software before numbering and SAF-T descend into chaos',
          'Foreign Stripe/PayPal/Shopify receipts do not replace a Portuguese invoice when the transaction must be documented under PT rules'
        ] },
        { kind: 'warning', text: 'Do not confuse a client invoice and a document for the AT. A commercial invoice from a foreign system may be useful to the client, but for Portuguese tax accounting you need a document issued by an acceptable method: AT-certified software, the Portal das Finanças or permitted manual invoices.' }
      ]
    },
    {
      id: 'qr-atcud',
      title: 'QR code and ATCUD: what must be on the document',
      content: [
        { kind: 'paragraph', text: 'The QR code has been mandatory on invoices and other fiscally relevant documents since 2022. It contains structured document data: issuer NIF, document type, number, date, base taxable amounts, IVA, totals and other fields per the AT specification.' },
        { kind: 'paragraph', text: 'ATCUD has been mandatory since 01/01/2023. It is a unique document code that looks like a combination of the series validation code and a sequential number: for example, ATCUD: XY7K9P-000123. It is printed/shown on the document next to the QR code.' },
        { kind: 'checklist', items: [
          'Before using a new document series, it must be communicated to the AT',
          'The AT issues a validation code for that series',
          'The software combines the validation code + sequential number and forms the ATCUD',
          'ATCUD must be on the fatura, fatura-recibo, nota de crédito, nota de débito and other relevant documents',
          'The QR code must be readable in PDF and on paper',
          'You cannot manually invent an ATCUD without registering the series with the AT',
          'When changing software, year, shop, POS or document type, check whether a new series is required',
          'Cancellation or a credit note must not break the numbering sequence'
        ] },
        { kind: 'warning', text: 'The most common mistake of migrant entrepreneurs is to start issuing documents in new software without activating the series in the AT. Visually the invoice may look fine, but without a correct ATCUD this is a fiscal risk.' }
      ]
    },
    {
      id: 'efatura-issuer-side',
      title: 'e-Fatura from the seller side: issuing an invoice is not enough',
      content: [
        { kind: 'paragraph', text: 'After invoices are issued, the data must reach the AT/e-Fatura. This is an issuer-side obligation: the seller, self-employed person or company. The client may see the document in their e-Fatura, but this does not replace your obligation to communicate the document correctly.' },
        { kind: 'checklist', items: [
          'The standard deadline for comunicação de faturas is by the 5th day of the month following the month of issue',
          'For example, documents for April 2026 usually must be communicated by 05/05/2026',
          'Transmission is possible via the software webservice, SAF-T PT upload or manual entry on the Portal das Finanças',
          'A good application sends data automatically or reminds you of the deadline',
          'After sending, check the status: rejected files and warnings must be corrected',
          'Credit notes must also be communicated, not only sent to the client',
          'If you work with an accountant, agree in writing who exactly sends the SAF-T and by what date',
          'Do not wait for the IRS/IRC season: e-Fatura is a monthly operational obligation'
        ] },
        { kind: 'warning', text: 'Fines usually arise not because of a missing pretty PDF, but because of uncommunicated, late or technically incorrect documents. For small businesses this is especially painful: mistakes accumulate every month.' }
      ]
    },
    {
      id: 'how-to-choose',
      title: 'How to choose software in 2026',
      content: [
        { kind: 'paragraph', text: 'The choice depends on your business model. For a single freelancer with 5 invoices a month, the Portal das Finanças or a basic application is enough. For a shop, restaurant, marketplace or B2B services with withholding at source (retenção na fonte), exemptions and foreign clients, you need a system your accountant understands.' },
        { kind: 'checklist', items: [
          'Find the software in the official list of AT-certified software',
          'Check support for QR + ATCUD + comunicação de séries',
          'Confirm there is SAF-T PT export and automatic submission to the AT',
          'Check Portuguese tax scenarios: IVA 23%/13%/6%, isenções, reverse charge, intra-EU, export',
          'Check support for a foreign client NIF and a client without a NIF',
          'Ask your accountant whether they can import data from this system',
          'Check user roles: owner, accountant, cashier, sales',
          'Check document archiving at least for the period required by tax accounting',
          'For e-commerce check integrations with Shopify, WooCommerce, Stripe, POS and inventory',
          'Do not choose only by price: migrating series and fixing wrong invoices cost more'
        ] }
      ]
    },
    {
      id: 'practical-setup',
      title: 'Mini go-live checklist',
      content: [
        { kind: 'paragraph', text: 'Before the first invoice, configure the system together with your accountant. Mistakes in the first month are hard to fix later, especially if a SAF-T has already been sent or the client has used the invoice in their accounts.' },
        { kind: 'checklist', items: [
          'Verify NIF, legal name, morada fiscal and CAE/CIRS activity',
          'Configure the IVA regime: normal, exemption under art. 53 CIVA or another applicable regime',
          'Create separate series for document types and points of sale if needed',
          'Communicate the series to the AT and obtain the validation code',
          'Create a test document and verify QR + ATCUD',
          'Configure email templates, but do not change fiscal fields manually after issue',
          'Set up monthly comunicação de faturas by the 5th day',
          'Give the accountant access or agree on SAF-T export',
          'Store copies of documents and AT submission confirmations',
          'When changing software, plan the closure of old series and the start of new ones in advance'
        ] },
        { kind: 'warning', text: 'If you are on recibos verdes and use the Portal das Finanças, separate software may not be needed. But if you start taking mass payments, selling goods or issuing many documents, discuss moving to certified software before sales go live.' }
      ]
    }
  ],
  costs: [
    { label: 'Portal das Finanças for recibos verdes', amountEUR: 0, note: 'Suitable for simple self-employed invoices/receipts, but does not replace a full POS/e-commerce system.' },
    { label: 'Basic AT-certified software', amountEURMin: 5, amountEURMax: 25, note: 'Usually the monthly price for a freelancer/small business; check ATCUD, SAF-T and e-Fatura features separately.' },
    { label: 'POS/e-commerce/retail package', amountEURMin: 20, amountEURMax: 80, note: 'The price depends on tills, users, inventory, integrations and accountant support.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: certified invoicing software',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Faturacao/Paginas/certificacao-de-software.aspx',
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
