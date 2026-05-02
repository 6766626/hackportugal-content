export default {
  editorialVoice: 'hackportugal',
  id: 'fundo-garantia-deposito',
  categoryId: 'banking',
  title: 'Fundo de Garantia de Depósitos: protection for bank deposits up to €100,000',
  tldr: 'Fundo de Garantia de Depósitos protects bank deposits in Portugal up to €100,000 per depositor in one bank. A joint account for two people usually gives up to €200,000. Protection is free and automatic: you do not need to apply for anything. depósitos à ordem and depósitos a prazo are covered, but shares, bonds, ETFs, funds, crypto and investment accounts are not — there is a separate SII scheme for them with different limits.',
  tags: ['fgd', 'banks', 'deposits', 'savings'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'What exactly FGD protects',
      content: [
        { kind: 'paragraph', text: 'Fundo de Garantia de Depósitos, or FGD, is the Portuguese bank deposit guarantee scheme. If a participating bank cannot return money to clients, FGD compensates the depositor up to €100,000.' },
        { kind: 'checklist', items: [
          'Current accounts: depósitos à ordem',
          'Term deposits: depósitos a prazo',
          'Savings bank deposits, if they are specifically a depósito',
          'Account balance plus accrued interest — within the overall limit of €100,000',
          'Accounts of individuals, companies, associations and most legal entities',
          'Accounts of residents and non-residents: citizenship and a residence permit are not conditions for protection',
          'Accounts in euros and other currencies — compensation is paid in euros'
        ] },
        { kind: 'warning', text: 'The €100,000 limit is calculated not for each account, but per depositor in one bank. If you have 3 accounts in one bank with €40,000, €50,000 and €30,000, only €100,000 is covered, and €20,000 is at risk.' }
      ]
    },
    {
      id: 'limit-per-bank',
      title: 'How the €100,000 limit works in practice',
      content: [
        { kind: 'paragraph', text: 'The key formula: one depositor + one bank = a maximum of €100,000. If money is held in different banks with different banking licences, the limit applies separately to each bank.' },
        { kind: 'checklist', items: [
          'Individual account in your name: cover up to €100,000',
          'Joint account for two people: each person’s share is calculated separately, usually up to €100,000 per person, meaning up to €200,000 per account',
          'If the shares in a joint account are not specified, equal shares are usually assumed',
          'Several accounts in one bank are added together',
          'An account in another bank with a separate licence receives a separate €100,000 limit',
          'Different brands within one banking group may have one licence — check with Banco de Portugal',
          'Deposits in a branch of a Portuguese bank outside Portugal usually fall under the Portuguese scheme if the bank is a member of FGD'
        ] },
        { kind: 'warning', text: 'Do not rely only on the commercial name of the app or bank. To distribute amounts above €100,000, check the legal entity and participation in FGD in the Banco de Portugal register or on fgd.pt.' }
      ]
    },
    {
      id: 'eu-branches',
      title: 'Portuguese bank, EU branch or fintech: where the guarantee is',
      content: [
        { kind: 'paragraph', text: 'FGD covers deposits in credit institutions participating in the Portuguese scheme. These are usually banks registered and authorised in Portugal. Branches of banks from other EU countries operating in Portugal are generally covered by the guarantee scheme of the head bank’s country, not by Portuguese FGD. In the EU, the standard limit is also €100,000 per depositor per bank.' },
        { kind: 'checklist', items: [
          'Portuguese bank with a Banco de Portugal licence: usually FGD',
          'Branch of a Spanish, German, French or other EU bank in Portugal: usually the scheme of the head bank’s country',
          'Electronic money and payment institutions are not the same as a bank deposit',
          'IBAN PT50 does not by itself prove participation in FGD',
          'Money with a broker or investment platform does not become a bank deposit just because it is displayed as a cash balance',
          'Before a large transfer, check the bank’s page, ficha de informação do depositante and the Banco de Portugal register'
        ] },
        { kind: 'warning', text: 'Fintech services may use different models: bank, payment institution, electronic money, broker. The level of protection depends on the legal model, not on the app interface.' }
      ]
    },
    {
      id: 'not-covered',
      title: 'What is NOT covered by FGD',
      content: [
        { kind: 'paragraph', text: 'FGD is protection for bank deposits, not for all financial assets. If a product promises a return and is structured as an investment, bond or fund, that is a different risk.' },
        { kind: 'checklist', items: [
          'Shares, ETFs and investment funds',
          'Bonds, including bank bonds',
          'Structured products and notes, if they are not a deposit',
          'Crypto-assets and stablecoins',
          'Investment portfolios with a broker',
          'Insurance products and seguros de capitalização',
          'PPR in the form of a fund or insurance product',
          'Losses from a fall in the market price of assets',
          'Fraudulent transfers, phishing and transactions that the bank considers authorised'
        ] },
        { kind: 'paragraph', text: 'For investment instruments in Portugal there is the Sistema de Indemnização aos Investidores, or SII, but this is a separate scheme with different rules and limits. It does not turn investments into a guaranteed deposit.' }
      ]
    },
    {
      id: 'if-bank-fails',
      title: 'If the bank collapses: what happens',
      content: [
        { kind: 'paragraph', text: 'FGD protection is automatic. The client does not need to buy insurance in advance, pay a contribution or submit a separate registration. Participating banks fund the system themselves.' },
        { kind: 'checklist', items: [
          'Banco de Portugal determines that the bank is unable to return deposits',
          'FGD receives depositor data from the bank',
          'Compensation is calculated for each depositor and bank',
          'The standard payout period in the EU is up to 7 working days after deposits are determined to be unavailable',
          'Payment is made in euros',
          'Identity documents and up-to-date contact details at the bank must be correct',
          'If your address, email, phone number or tax residence has changed, update your details in advance',
          'For joint accounts, the bank takes the owners’ shares into account'
        ] },
        { kind: 'warning', text: 'FGD does not insure amounts above the limit. If you hold significant liquidity, the practical protection is to spread money across several banks with different licences and not confuse a deposit with an investment product.' }
      ]
    }
  ],
  costs: [
    { label: 'Depositor participation in FGD', amountEUR: 0, note: 'Protection is automatic and free for the bank client.' },
    { label: 'Maximum guarantee per depositor in one bank', amountEUR: 100000, note: 'All deposits of one depositor in one bank are added together, including accrued interest.' },
    { label: 'Usual maximum for a joint account for two people', amountEUR: 200000, note: '€100,000 for each co-owner, if the shares do not change the calculation.' }
  ],
  sources: [
    { title: 'Fundo de Garantia de Depósitos — official website and cover rules', url: 'https://www.fgd.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — information on deposit guarantees and banks', url: 'https://www.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — register of authorised institutions', url: 'https://www.bportugal.pt/entidades-autorizadas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
