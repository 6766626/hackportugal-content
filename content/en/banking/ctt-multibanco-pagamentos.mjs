export default {
  editorialVoice: 'hackportugal',
  id: 'ctt-multibanco-pagamentos',
  categoryId: 'banking',
  title: 'Multibanco: paying utilities, fines, taxes and topping up mobile phones',
  tldr: 'Multibanco is not just an ATM for cash. In 2026 it is commonly used to pay for water, electricity, internet, condomínio, fines, IMI/IUC/IRS/IVA, to top up mobile phones, make transferências, deposit cheques and pay for purchases by entidade + referência. For most payments, a NIF is needed only on the bill/notice, not at the ATM. The fee for the payer is usually €0, but transfers and cheque operations depend on the bank’s tariff.',
  tags: ['multibanco', 'payments', 'taxes', 'mbway'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-multibanco',
      title: 'What Multibanco can do in 2026',
      content: [
        { kind: 'paragraph', text: 'Multibanco is the Portuguese network of ATMs and payment services run by SIBS. In the ATM menu you can not only withdraw cash, but also pay bills by referência, taxes, fines, state services, top up a SIM card, make a bank transfer, request saldo/movimentos and sometimes deposit a cheque.' },
        { kind: 'checklist', items: [
          'Paying utilities: water, electricity, gas, internet, condomínio — usually via Pagamento de Serviços/Compras',
          'Paying taxes: IMI, IUC, IRS, IVA, Segurança Social — using the details from Portal das Finanças or the notice',
          'Paying fines: trânsito, parking, police, portagens — if the notice includes entidade/referência/valor',
          'Mobile top-ups: MEO, NOS, Vodafone, Lycamobile and others — via Carregamentos/Telemóveis',
          'Transferências: transfer to an IBAN or via the bank’s internal menu; limits depend on the bank',
          'Depósito de cheques: only at ATMs with deposit functionality, often those of your own bank',
          'Pagamentos ao Estado: a separate menu item for some payments to the state',
          'MB WAY: a separate SIBS app, but card linking is often confirmed through Multibanco'
        ] },
        { kind: 'warning', text: 'Multibanco does not cancel payment deadlines. If a referência has expired, the ATM may reject the payment or accept it as overdue only in special cases. For taxes and fines, always check the prazo limite on the document.' }
      ]
    },
    {
      id: 'pay-reference',
      title: 'Paying by entidade + referência + valor',
      content: [
        { kind: 'paragraph', text: 'The most common format for Portuguese bills is three fields: Entidade, Referência, Montante/Valor. They are printed on a PDF bill, letter, email, SMS or in the provider’s customer area. This works for utilities, internet providers, schools, insurance, condomínio, online shops and many state payments.' },
        { kind: 'substeps', items: [
          { id: 'insert-card', title: '1. Insert the card and choose a language', content: [
            { kind: 'paragraph', text: 'Most ATMs have português and English. Russian is usually not available. Enter your PIN and choose Pagamentos e Outros Serviços or Pagamentos.' }
          ] },
          { id: 'choose-payment', title: '2. Choose Pagamento de Serviços/Compras', content: [
            { kind: 'paragraph', text: 'The name may vary slightly by bank, but look for Serviços/Compras. For taxes, it is sometimes better to use Pagamentos ao Estado if that option is available.' }
          ] },
          { id: 'enter-codes', title: '3. Enter the entidade, referência and amount', content: [
            { kind: 'checklist', items: [
              'Entidade — usually 5 digits',
              'Referência — usually 9 digits, but the format depends on the issuer',
              'Montante/Valor — the amount in euros and cents',
              'Do not round: if the bill is for €47.38, enter €47.38',
              'Check the recipient on the screen before confirming',
              'Keep the talão/comprovativo or photograph the confirmation screen'
            ] }
          ] },
          { id: 'keep-proof', title: '4. Keep the comprovativo', content: [
            { kind: 'paragraph', text: 'For disputed payments — especially fines, taxes, condomínio and rent — keep the comprovativo at least until the issue is closed. For taxes, it is sensible to keep the PDF/photo together with the notice from Finanças.' }
          ] }
        ] },
        { kind: 'warning', text: 'If the amount is already filled in on the bill, do not change it without a reason. For some referências, the amount is part of the control logic: an incorrect valor will lead to a rejection or to a payment that the provider cannot match automatically.' }
      ]
    },
    {
      id: 'taxes-and-fines',
      title: 'Taxes, IMI/IUC and fines',
      content: [
        { kind: 'paragraph', text: 'For taxes, you do not need to know the tax authority’s IBAN. In Portal das Finanças, a documento de cobrança is generated with the referência de pagamento, amount and deadline. This is used to pay IMI, IUC, IRS, IVA, coimas and other amounts. At the ATM, use Pagamentos ao Estado if available, or Pagamento de Serviços/Compras — follow the format of the document.' },
        { kind: 'checklist', items: [
          'IMI: the notice appears in Portal das Finanças; payment in instalments depends on the tax amount',
          'IUC: paid annually by the end of the vehicle registration month; the referência is obtained in Finanças',
          'IRS: additional tax due after the annual return is paid using the nota de cobrança',
          'IVA/recibos verdes: self-employed workers pay using the documento cobrança if there is an amount to pay',
          'Coimas Finanças: tax authority fines are paid using the details in the notice',
          'Trânsito fines: use the details from the ANSR/PSP/GNR letter or the notice issued on the spot',
          'Parking/EMEL/municipal fines: the method depends on the municipality; there is often a Multibanco reference',
          'Portagens/SCUT: if there is a referência, pay it as serviços; sometimes it is simpler via CTT/Payshop/online service'
        ] },
        { kind: 'warning', text: 'For trânsito fines, payment may mean depósito or pagamento voluntário, but it does not always close the right to defence/appeal. Read the letter: the deadlines, payment details and legal effect of payment are stated there, not in the Multibanco menu.' },
        { kind: 'warning', text: 'Tax deadlines in 2026 remain strict: late payment can result in juros de mora and a coima. If the referência does not work, check in Portal das Finanças whether the prazo has expired or whether a new documento de cobrança has been created.' }
      ]
    },
    {
      id: 'mobile-and-utilities',
      title: 'Mobile phones and utility bills',
      content: [
        { kind: 'paragraph', text: 'Mobile top-ups are done through Carregamentos or Telemóveis. You choose the operator, enter the number and the amount. For prepaid SIMs, the money usually arrives quickly, but with virtual operators and international SIMs there may be a delay or a separate menu.' },
        { kind: 'checklist', items: [
          'MEO/NOS/Vodafone: usually available in the Carregamentos menu',
          'The minimum top-up amount depends on the operator and tariff; €5, €7.50, €10 and higher are common',
          'Check the number twice: the bank usually does not automatically refund an accidental top-up of someone else’s number',
          'For home internet and TV, usually use the entidade/referência from the bill rather than the mobile top-up menu',
          'E-REDES, EDP, Galp, Endesa, Iberdrola, Águas municipais bills are usually paid as serviços',
          'Condomínio may send a Multibanco referência or ask for a bank transfer to an IBAN',
          'Rent is usually paid by bank transfer, not via a Multibanco reference, unless the landlord has provided a referência'
        ] },
        { kind: 'paragraph', text: 'If you have débito direto set up, the bill is debited automatically. Multibanco is then needed for a one-off payment if the direct debit failed, you changed bank or the provider sent a separate cobrança.' },
        { kind: 'warning', text: 'Do not pay again if the bill still appears as unpaid in the provider’s app after payment. Status updates can take 1–3 working days. First check your account movements and the comprovativo.' }
      ]
    },
    {
      id: 'transfers-cheques-mbway',
      title: 'Transfers, cheques and MB WAY',
      content: [
        { kind: 'paragraph', text: 'You can make transferências through Multibanco, but the available types and limits are set by your bank. Sometimes the ATM offers transfers only between accounts at the same bank or by IBAN; sometimes it is more convenient to make the transfer in the bank’s app.' },
        { kind: 'checklist', items: [
          'Transferência normal: may arrive on a working day/the next working day, depending on the bank and scheme',
          'Transferência imediata: widely available in Portugal, but availability and fees depend on the bank and channel',
          'Amount limits: check the bank’s contrato/precário; limits are often lower for new customers',
          'Fee: Multibanco operations for consumers are often free, but transfers may be charged by the bank',
          'Depósito de cheques: look for an ATM with depósito functionality; usually an envelope/scanning and the recipient account are needed',
          'Cheque crediting is not instant: the bank may show saldo contabilístico and saldo disponível differently',
          'MB WAY is linked to a phone number and card; confirmation may require an ATM or the bank app',
          'Pagamentos MB WAY and pedidos de dinheiro are not the same as a Multibanco reference'
        ] },
        { kind: 'warning', text: 'Cheques are still encountered in Portugal in 2026, but they are not instant money. Do not hand over goods/keys just because someone has “deposited a cheque”: wait for the available balance or use transferência imediata.' }
      ]
    },
    {
      id: 'safety-and-errors',
      title: 'Safety and common mistakes',
      content: [
        { kind: 'paragraph', text: 'The main rule: the ATM carries out what you confirm. If there is an error in the referência, amount or phone number, the refund is not done through “cancelling at the ATM”, but through the bank, the service provider or the recipient.' },
        { kind: 'checklist', items: [
          'Cover your PIN with your hand; in tourist areas, check for overlays on the card slot',
          'Do not accept help from strangers at the ATM, especially if the card appears to be “stuck”',
          'Keep the comprovativo for taxes, fines, rent, condomínio and large bills',
          'Check the entidade and referência against the original PDF/letter, not a forwarded screenshot',
          'If you suspect phishing, call the bank using the number on the card/website, not via SMS',
          'If the ATM did not dispense cash but debited the money, immediately record the ATM number, location, time and amount',
          'If the card is retained, block it in the bank app or via the hotline without moving far from the ATM',
          'For payments to the state, check the status in Portal das Finanças after 1–3 working days'
        ] },
        { kind: 'warning', text: 'Entidade/referência in a phishing email may look “Portuguese”. If it concerns taxes, a fine, CTT, portagens or a bank — go to the official account manually, not via a link from SMS/email.' }
      ]
    }
  ],
  costs: [
    { label: 'Payment of serviços/compras by Multibanco reference', amountEUR: 0, note: 'Usually free for the payer; the fee is paid by the recipient/merchant, but rare exceptions depend on the bank and service.' },
    { label: 'Mobile top-up through Multibanco', amountEUR: 0, note: 'The ATM fee is usually €0; the minimum top-up amount depends on the operator and tariff.' },
    { label: 'Bank transfer through Multibanco', amountEURMin: 0, amountEURMax: 2, note: 'Indicative for private customers; the exact fee and limits are stated in your bank’s precário.' },
    { label: 'Depósito de cheque', amountEURMin: 0, amountEURMax: 5, note: 'May be free or charged by the bank; crediting is not instant.' }
  ],
  sources: [
    { title: 'SIBS — Multibanco network and payment services', url: 'https://www.sibs.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — bank payments and user rights', url: 'https://www.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — pagamentos ao Estado and documentos de cobrança', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ANSR — road traffic fines and pagamento voluntário', url: 'https://www.ansr.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
