export default {
  editorialVoice: 'hackportugal',
  id: 'apple-pay-google-pay-pt',
  categoryId: 'banking',
  title: 'Apple Pay and Google Pay in Portugal — how to set them up',
  tldr: 'In Portugal, Apple Pay and Google Pay work wherever the terminal accepts contactless: supermarkets, metro, taxis, restaurants, online. As of April 2026, cards from many banks are supported, including CGD, Millennium bcp, Santander, ActivoBank, Banco Best and Revolut, but the specific card must be checked in the bank app/Wallet. Standard contactless without PIN is limited to €50, while Apple Pay/Google Pay with Face ID/Touch ID/fingerprint usually work above €50 too, because this is strong authentication. MB WAY remains the local alternative.',
  tags: ['applepay', 'googlepay', 'mbway', 'banks'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-works',
      title: 'Where it works in Portugal',
      content: [
        { kind: 'paragraph', text: 'Apple Pay and Google Pay in Portugal are standard contactless Visa/Mastercard card payments via a phone or watch. If the terminal has the contactless symbol, you can usually pay by phone.' },
        { kind: 'checklist', items: [
          'Supermarkets: Continente, Pingo Doce, Lidl, Aldi, Auchan, Mercadona',
          'Cafés, restaurants, pharmacies, petrol stations, hotels',
          'Taxis and TVDE services, if the driver has a contactless terminal',
          'Online shops and apps, if Apple Pay or Google Pay is available at checkout',
          'Transport ticket machines and some gates where bank cards are accepted',
          'New-type Multibanco terminals — if contactless is enabled by the specific acquirer'
        ] },
        { kind: 'warning', text: 'Do not confuse Apple Pay/Google Pay with Multibanco. In Portugal, many household payments — luz, água, telecomunicações, impostos — are made via entidade + referência in Multibanco/MB WAY. Apple Pay and Google Pay do not replace this system.' }
      ]
    },
    {
      id: 'supported-banks',
      title: 'Which banks and cards are supported',
      content: [
        { kind: 'paragraph', text: 'Support depends not only on the bank, but also on the card type: débito/crédito, Visa/Mastercard, personal/business, and sometimes even the country of issue. The most reliable test is to open Wallet/Google Wallet or the bank app and try to add the card.' },
        { kind: 'checklist', items: [
          'CGD / Caixa Geral de Depósitos — Caixa cards can usually be added to Apple Pay and Google Pay via CaixaDirecta or Wallet',
          'Millennium bcp — supports mobile wallets for many cards; check in the Millennium app',
          'Santander Portugal — Apple Pay and Google Pay are available for compatible Santander cards',
          'ActivoBank — often a convenient option for expats; cards usually work with Apple Pay/Google Pay',
          'Banco Best — support depends on the card; check in the Best Bank app and Wallet',
          'Revolut — one of the simplest options: a virtual/physical card can be added almost immediately after opening the account',
          'Wise, N26, Openbank and other EU fintech cards usually work too, if the card was issued in a supported country',
          'Cartão de refeição, corporate and prepaid cards may not be addable, even if the bank is on the list'
        ] },
        { kind: 'warning', text: 'Apple and Google lists are updated without separate notice. If a bank is on the list, this does not guarantee support for every card; if a bank is not listed, the card may sometimes still be added via an international issuer.' }
      ]
    },
    {
      id: 'apple-pay-setup',
      title: 'Setting up Apple Pay on iPhone and Apple Watch',
      content: [
        { kind: 'substeps', items: [
          { id: 'iphone', title: '1. Add a card on iPhone', content: [
            { kind: 'checklist', items: [
              'Open Wallet',
              'Tap “+”',
              'Select “Debit or Credit Card”',
              'Scan the card or enter the details manually',
              'Accept the bank’s terms',
              'Verify the card by SMS, call, email or the bank app',
              'Set the card as default if you want to pay with it first'
            ] }
          ] },
          { id: 'watch', title: '2. Add a card on Apple Watch', content: [
            { kind: 'paragraph', text: 'Open the Watch app on iPhone → Wallet & Apple Pay → Add Card. The card on the watch is tokenised separately: if it is on the iPhone, this does not always mean it is already on the Apple Watch.' }
          ] },
          { id: 'pay', title: '3. Payment', content: [
            { kind: 'paragraph', text: 'On an iPhone with Face ID, double-click the side button, confirm with Face ID and hold it near the terminal. On an iPhone with Touch ID, place your finger on Touch ID. On Apple Watch, double-click the side button.' }
          ] }
        ] },
        { kind: 'warning', text: 'The Apple ID region usually does not need to be Portugal to pay with a Portuguese card, but the device must have Face ID/Touch ID or a passcode. Without screen lock, Wallet will not allow normal card use.' }
      ]
    },
    {
      id: 'google-pay-setup',
      title: 'Setting up Google Pay / Google Wallet on Android',
      content: [
        { kind: 'paragraph', text: 'In 2026, Google Pay for the user is the Google Wallet app. In-store payment works via NFC. On some phones with Chinese firmware or without Google Services, contactless payment may not work.' },
        { kind: 'checklist', items: [
          'Install Google Wallet from Google Play',
          'Turn on NFC: Settings → Connected devices → NFC',
          'Make Google Wallet the default payment app',
          'Tap “Add to Wallet” → “Payment card”',
          'Scan the card or enter the details manually',
          'Verify the card through the bank: SMS, push, app, call',
          'Check that the phone has a screen lock: PIN, fingerprint, face or password',
          'To pay, unlock the phone and hold it near the terminal; you usually do not need to open the app'
        ] },
        { kind: 'warning', text: 'Root, an unlocked bootloader, old Android versions, disabled Google Play Services or corporate MDM restrictions may block payment. The bank may still say “card supported”, but Google Wallet will not allow payment.' }
      ]
    },
    {
      id: 'limits-and-pin',
      title: '€50 limits, PIN and biometrics',
      content: [
        { kind: 'paragraph', text: 'In Portugal, the standard limit for ordinary contactless payment with a physical card without PIN is €50 per transaction. After several small transactions in a row (the rules cap this at roughly €150 or five transactions), the terminal or bank may request a PIN due to SCA rules.' },
        { kind: 'checklist', items: [
          'A physical contactless card usually works without PIN up to €50',
          'A physical card above €50 almost always requires a PIN',
          'Apple Pay/Google Pay use Face ID, Touch ID, fingerprint, phone PIN or password',
          'Because of biometrics, such payments are considered authenticated and often work above €50 without the card PIN',
          'Some terminals may still ask for a PIN — this is normal, especially on older POS terminals',
          'The bank may decline an unusual transaction and ask you to repeat the payment with a card and PIN',
          'For car hire, hotel deposits and caução, a physical credit card is sometimes required, not Wallet'
        ] },
        { kind: 'warning', text: 'If the terminal asks for a PIN when paying by phone, enter the card PIN, not the phone unlock code. If the card is virtual and the PIN is unknown, check it in the bank app.' }
      ]
    },
    {
      id: 'mb-way-alternative',
      title: 'MB WAY as the Portuguese alternative',
      content: [
        { kind: 'paragraph', text: 'MB WAY is the local SIBS system, linked to a Portuguese phone number and bank card. For life in Portugal, it is often more useful than Apple Pay/Google Pay, because it covers everyday Multibanco scenarios.' },
        { kind: 'checklist', items: [
          'Instant transfers by phone number within Portugal',
          'Online payment via MB WAY without entering card details',
          'Creation of virtual MB NET cards for online purchases',
          'Cash withdrawals from Multibanco without a physical card',
          'Payment of Multibanco referências: bills, taxes, serviços',
          'Splitting a bill between friends',
          'QR payment in some shops and restaurants',
          'Convenient for OLX, rent, everyday transfers and small payments'
        ] },
        { kind: 'paragraph', text: 'The optimal setup for an expat: Apple Pay/Google Pay for terminals and online checkout, MB WAY for transfers, referências and everyday Portuguese infrastructure.' }
      ]
    }
  ],
  costs: [
    { label: 'Adding a card to Apple Pay / Google Pay', amountEUR: 0, note: 'Apple and Google do not charge the user a fee for adding and paying by card.' },
    { label: 'Payment in shops in Portugal', amountEUR: 0, note: 'Usually no fee for the buyer; your bank may charge fees on your card if the card is foreign or the transaction is in another currency.' }
  ],
  sources: [
    { title: 'Apple Support Portugal — Apple Pay, setup and use', url: 'https://support.apple.com/pt-pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Google Pay / Google Wallet — help and supported payment methods', url: 'https://pay.google.com', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — contactless payments and security rules', url: 'https://www.bportugal.pt/page/pagamentos-contactless', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'MB WAY — official SIBS service website', url: 'https://www.mbway.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
