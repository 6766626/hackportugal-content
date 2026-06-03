export default {
  editorialVoice: 'hackportugal',
  id: 'deposito-prazo-banco',
  categoryId: 'banking',
  title: 'Fixed-term deposit (Depósito a Prazo) in a Portuguese bank: rates, tax and €100,000 protection',
  tldr: 'Depósito a Prazo (DP) is a fixed-term deposit in a Portuguese bank: you lock in an amount for 1–12+ months and receive TANB/TANL. In April 2026, the best online promotions from Banco Best, ActivoBank, Banco BiG and similar banks may offer around 3% per year “in hand” after 28% IRS, but often only for new customers/new money. Compare on clientebancario.bportugal.pt, check automatic renewal and the Fundo de Garantia de Depósitos limit: €100,000 per depositor per bank.',
  tags: ['deposit', 'bank', 'fgd', 'interest'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-dp',
      title: 'What a Depósito a Prazo is',
      content: [
        { kind: 'paragraph', text: 'Depósito a Prazo is a fixed-term deposit: you place money with a bank for a fixed period, and the bank pays interest. Unlike a conta à ordem, the money is formally “locked” until the vencimento date, although many DP products allow early withdrawal with the loss of some or all interest.' },
        { kind: 'checklist', items: [
          'TANB — annual nominal rate before tax, for example 4.00%',
          'TANL — rate after 28% IRS withholding, for example 4.00% TANB ≈ 2.88% TANL',
          'Prazo — deposit term: often 3, 6, 12 months',
          'Montante mínimo — minimum amount, for example €500, €1,000 or €5,000',
          'Montante máximo — upper promotional limit, for example €50,000 or €100,000',
          'Mobilização antecipada — whether you can withdraw early and what you lose',
          'Renovação automática — whether the deposit renews automatically',
          'Capitalização — whether interest is added to the deposit amount or paid separately'
        ] },
        { kind: 'warning', text: 'Do not compare deposits only by the advertised TANB. Look at the TANL, term, amount limit, early withdrawal conditions and renewal conditions. A 4.00% deposit for 3 months is not “4% for 3 months”; it is an annual rate applied proportionally to the term.' }
      ]
    },
    {
      id: 'rates-2026',
      title: 'What rates are realistic in 2026',
      content: [
        { kind: 'paragraph', text: 'In April 2026, the normal picture is this: large banks often offer weak rates on standard DP products, while the best offers appear at online banks and in promotions for new customers or “new money”. Banco Best, ActivoBank, Banco BiG and other online players periodically offer deals which, after 28% tax, come close to 3% per year net, but conditions change quickly.' },
        { kind: 'checklist', items: [
          'A 3.00% TANB rate gives around 2.16% TANL after tax',
          'A 3.50% TANB rate gives around 2.52% TANL after tax',
          'A 4.00% TANB rate gives around 2.88% TANL after tax',
          'A 4.20% TANB rate gives around 3.02% TANL after tax',
          'For €10,000 at 4.00% TANB for 6 months: gross ≈ €200, tax 28% ≈ €56, net ≈ €144',
          'For €50,000 at 4.00% TANB for 12 months: gross ≈ €2,000, tax ≈ €560, net ≈ €1,440',
          'Promotional rates often require opening a conta à ordem and may apply only for the first term'
        ] },
        { kind: 'warning', text: 'A bank may show an attractive “até X%” rate, but the real rate depends on the amount, term, customer status and subscription date. Before transferring money, download the FIN/Ficha de Informação Normalizada or the product conditions in PDF.' }
      ]
    },
    {
      id: 'where-compare',
      title: 'Where to compare and how to choose a bank',
      content: [
        { kind: 'paragraph', text: 'The official comparison point is the Comparador de Depósitos a Prazo on the Banco de Portugal Portal do Cliente Bancário: clientebancario.bportugal.pt. This is better than advertising articles because you can filter by amount, term, TANB, early withdrawal option and rate type.' },
        { kind: 'substeps', items: [
          { id: 'filter', title: '1. Filter by your amount and term', content: [
            { kind: 'paragraph', text: 'Enter the amount, for example €10,000 or €50,000, and the term: 3, 6 or 12 months. This removes products where the minimum amount is higher than yours or the promotion does not match your term.' }
          ] },
          { id: 'check-bank', title: '2. Check the bank and guarantee coverage', content: [
            { kind: 'paragraph', text: 'If it is a Portuguese bank, the Fundo de Garantia de Depósitos usually applies. If it is a branch of a bank from another EU country, protection may be through the guarantee fund of the country of origin rather than Portugal’s FGD.' }
          ] },
          { id: 'read-fin', title: '3. Open the FIN before signing', content: [
            { kind: 'paragraph', text: 'In the FIN, look for: TANB, TANL, prazo, renovação, mobilização antecipada, penalização de juros, montante mínimo/máximo, the interest payment date and fees on the linked conta à ordem.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Banco Best — often strong in online promotions and investment products',
          'ActivoBank — convenient for expat day-to-day operations and mobile banking',
          'Banco BiG — often competes on deposits and brokerage',
          'Caixa Geral de Depósitos, Millennium bcp, Santander, Novobanco, BPI — convenient as a main bank, but DP rates are not always the best',
          'Check not only the DP but also the cost of the conta à ordem: card maintenance can eat up part of the return'
        ] }
      ]
    },
    {
      id: 'tax',
      title: 'Tax on interest: 28% IRS',
      content: [
        { kind: 'paragraph', text: 'For individuals, interest on bank deposits in Portugal is usually subject to 28% retenção na fonte. The bank withholds the tax automatically when paying the interest. Therefore, an expat usually sees the net amount already credited to the account.' },
        { kind: 'checklist', items: [
          'Portuguese resident: interest goes into IRS as rendimentos de capitais, usually with 28% withholding',
          'You can choose englobamento in the IRS return, but it is not always beneficial: with a high marginal rate it can become worse',
          'Non-resident: the bank may also withhold tax; the rate and application of a double taxation treaty depend on your tax residence and documents',
          'If your NIF has the wrong address or status, the bank may apply the wrong tax regime',
          'Interest on a DP is not salary, does not provide a NISS and does not create a right to a residence permit',
          'The yield in advertising is almost always gross/TANB, not net/TANL'
        ] },
        { kind: 'warning', text: 'If you have become a Portuguese tax resident, update your morada fiscal in Finanças and your bank details. A mismatch between address/NIF/tax status can create problems with CRS exchange and the IRS return.' }
      ]
    },
    {
      id: 'guarantee',
      title: 'Deposit protection: Fundo de Garantia de Depósitos',
      content: [
        { kind: 'paragraph', text: 'Fundo de Garantia de Depósitos (FGD) protects eligible deposits up to €100,000 per depositor per credit institution. This is the key limit: if you have €150,000 in one bank, as standard only €100,000 is protected. If you have a joint account for two people, the limit applies to each depositor — usually up to €200,000 for two people in one bank.' },
        { kind: 'checklist', items: [
          'Limit: €100,000 per depositor per bank',
          'Joint account: each person’s share is counted separately unless proven otherwise',
          'Several accounts in one bank are added together for the €100,000 limit',
          'Different brands may be the same bank — check the legal entity',
          'A branch of a foreign EU bank may be covered not by the FGD but by another country’s fund',
          'FGD covers deposits, not investments, shares, bonds, fundos de investimento or structured products',
          'Guarantee payout in the EU is designed to be within a short period; the FGD sets out the procedure on fgd.pt'
        ] },
        { kind: 'warning', text: 'Do not keep more than €100,000 per person in one bank if the aim is maximum protection. For €180,000, it is safer to split it between two independent banks at €90,000 each than to put everything into one DP.' }
      ]
    },
    {
      id: 'renewal-traps',
      title: 'Automatic renewal and early withdrawal traps',
      content: [
        { kind: 'paragraph', text: 'The main mistake is opening a good promotional DP for 3 or 6 months and forgetting the end date. After vencimento, the bank may automatically renew the deposit at the standard rate, for example replacing 4.00% TANB with 0.50–1.00% TANB. The money remains “tied up”, while the return falls.' },
        { kind: 'checklist', items: [
          'Put the vencimento date in your calendar 7–10 days before the end',
          'Turn off renovação automática if the bank allows it',
          'If automatic renewal cannot be turned off in advance, find out the cancellation window after renewal',
          'Check whether you lose all interest on mobilização antecipada',
          'Do not put your emergency fund into a DP without partial withdrawal',
          'Check whether there is a fee for the conta à ordem, card or transferring money to another bank',
          'Keep the PDF of the conditions and the subscription confirmation',
          'After the interest is paid, reconcile gross, retenção 28% and net'
        ] },
        { kind: 'warning', text: 'A DP is not a substitute for a liquid reserve. For rent, caução, IMT/IMI, medical expenses and relocation, keep part of your money in a conta à ordem or in a product with immediate access.' }
      ]
    }
  ],
  costs: [
    { label: 'IRS tax on interest', amountEURMin: 0, amountEURMax: 0, note: 'Not a fixed fee: usually 28% of the accrued interest is withheld on payment.' },
    { label: 'FGD guarantee', amountEUR: 100000, note: 'Deposit protection limit: €100,000 per depositor per bank, not a return and not a fee.' }
  ],
  sources: [
    {
      title: 'Banco de Portugal — Comparador de Depósitos a Prazo',
      url: 'https://clientebancario.bportugal.pt/pt-pt/aplicacoes-de-depositos-a-prazo',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal do Cliente Bancário — information on depósitos bancários',
      url: 'https://clientebancario.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Fundo de Garantia de Depósitos — deposit limits and coverage',
      url: 'https://www.fgd.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
