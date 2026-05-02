export default {
  editorialVoice: 'hackportugal',
  id: 'irs-year-end',
  categoryId: 'taxes',
  title: 'IRS year-end checklist — what to prepare',
  tldr: 'Preparation for the IRS return starts in December: check the coverage of deduction categories (health, education, housing, restaurants) in Faturas.pt, activate deductions by 31 December, and gather documents for foreign income. The return is filed from 1 April to 30 June of the following year. Late filing — fine from €150.',
  tags: ['irs', 'taxes', 'checklist', 'deductions'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'december-checklist',
      title: 'December — the final steps of the year',
      content: [
        { kind: 'checklist', items: [
          '🧾 Check Faturas.pt — all your purchases with NIF accumulate here. Receipts not assigned to a category lose the deduction',
          '✅ Confirm unconfirmed receipts (which categories they belong to — health/education/etc.)',
          '💳 Make pre-New Year medical purchases — deduction up to €1,000 on 15% of annual medical expenses',
          '📚 Pay for education / courses by 31.12 — deduction up to €800 / child',
          '🍽️ Restaurant meals with NIF — deduction up to €250',
          '💡 Utilities with NIF (electricity, gas, water) — deduction up to €250',
          '🏠 December rent recibo — deduction up to €502',
          '💰 Top up a PPR (pension plan) — deduction up to €400 (young people), €300 (40-50), €200 (>50)',
          '💳 Donations to non-profit organisations with NIF — deduction of 25% of the contribution, up to 15% of tax',
          '📊 IFICI subjects: confirm status, documents on qualified activity'
        ]},
        { kind: 'warning', text: 'Receipts without NIF are NOT deductible. ALWAYS say “com NIF, por favor” or “factura com contribuinte” when making a purchase.' }
      ]
    },
    {
      id: 'january-february',
      title: 'January-February — document preparation',
      content: [
        { kind: 'checklist', items: [
          '📄 Obtain a Comprovativo de Rendimentos from your employer (they must issue it by 15.02)',
          '📄 Bank statements for the whole year to calculate interest/dividends',
          '📄 Recibo Verde confirmations (for sole traders) — automatically in Portal das Finanças (tax portal)',
          '📄 Foreign income declarations — pension certificates, foreign bank statements',
          '📄 IMI confirmation (if you bought a property during the year)',
          '📄 IRS Jovem confirmations (if applicable — young people up to 35)',
          '📋 Certidões de não dívida (in case of IRS debts, worth checking)'
        ]}
      ]
    },
    {
      id: 'filing-window',
      title: 'March-June — filing',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'IRS Automático (simplified)', content: [
            { kind: 'paragraph', text: 'For categories A (salary) and H (pension) with one employer and no other sources. Portal das Finanças → IRS → IRS Automático. The return is already filled in — you only need to check and confirm it.' }
          ]},
          { id: 'f2', title: 'Modelo 3 (full)', content: [
            { kind: 'paragraph', text: 'For everyone else. Portal das Finanças → IRS → Entregar. Select the required Anexos.' }
          ]},
          { id: 'f3', title: 'Annexes — which to choose', content: [
            { kind: 'checklist', items: [
              'Anexo A — salary (category A), pension (category H)',
              'Anexo B — Recibo Verde / self-employment (simplified regime)',
              'Anexo C — Recibo Verde / business (organised accounting)',
              'Anexo D — imputação de rendimentos (transparência fiscal, herança indivisa, special cases). NOT for ordinary SA/Lda dividends',
              'Anexo E — rendimentos de capitais (category E): interest, dividends from SA/Lda',
              'Anexo F — rental income from property (category F)',
              'Anexo G — capital gains / mais-valias (category G): sale of shares, property, usually — capital gains on cryptocurrencies',
              'Anexo G1 — simplified annex for certain mais-valias',
              'Anexo H — benefícios fiscais and deductions (despesas dedutíveis)',
              'Anexo I — herança indivisa (specific situations)',
              'Anexo J — income from foreign sources (for all categories)',
              'Anexo L — regime residentes não habituais (NHR) and similar preferential regimes'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'deductions-max',
      title: 'Maximising deductions',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Medical expenses (15% up to €1,000)', content: [
            { kind: 'checklist', items: [
              'Doctors (private and SNS taxa)',
              'Pharmacies (prescription and over-the-counter medicines with NIF)',
              'Dentistry',
              'Operations, hospitalisation (IVA 6%)',
              'Glasses, contact lenses — prescribed',
              'Health insurance',
              'NIF on the receipt is mandatory for inclusion'
            ]}
          ]},
          { id: 'd2', title: 'Education (30% up to €800/child)', content: [
            { kind: 'checklist', items: [
              'School fees',
              'University propina',
              'Language courses',
              'Textbooks (IVA 6%)',
              'School uniform',
              'Transport to school',
              'After-school club (ATL)'
            ]}
          ]},
          { id: 'd3', title: 'Housing', content: [
            { kind: 'checklist', items: [
              'Rent — 15% up to €502',
              'Mortgage interest (only mortgages before 2011) — 15% up to €296',
              'Energy/utilities — 15% up to €250',
              'Paid IMI — sometimes deductible'
            ]}
          ]},
          { id: 'd4', title: 'General receipts (restaurants, workshops, hairdressers) — 15% up to €250', content: [
            { kind: 'paragraph', text: 'The “despesas gerais familiares” category. Collected automatically via Faturas.pt when receipts with NIF are scanned.' }
          ]},
          { id: 'd5', title: 'Special receipts', content: [
            { kind: 'checklist', items: [
              'Restaurants and hairdressers — 15% up to €250 (separate category since 2019)',
              'Car servicing and public transport — 15% up to €250',
              'Veterinary — 22.5% (if registered)'
            ]}
          ]},
          { id: 'd6', title: 'PPR (pension plan)', content: [
            { kind: 'checklist', items: [
              'Up to 35 years old: 20% up to €400',
              '35-50: 20% up to €350',
              'Over 50: 20% up to €300',
              'Beneficial for a long-term pension, but with restrictions on withdrawals'
            ]}
          ]},
          { id: 'd7', title: 'Dependants', content: [
            { kind: 'checklist', items: [
              'Fixed deductions: €600 per child, €900 for the 2nd, etc.',
              'Elderly parents with low income — deduction',
              'Disability: enhanced deductions',
              'Single parent: +increase'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'ifici-nhr',
      title: 'IFICI / NHR subjects — special actions',
      content: [
        { kind: 'checklist', items: [
          '🎓 Confirmation of qualified activity — contract, academic certificates',
          '📊 Separate form for old NHR (before 2024) or IFICI (from 2024)',
          '💰 Foreign income — in Anexo J, taking tax treaties into account',
          '🧾 Tax residence certificates — obtain in source countries to receive a tax credit',
          '🎯 IFICI: 20% rate on qualified income, ordinary IRS on the rest'
        ]}
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes',
      content: [
        { kind: 'warning', text: 'Check the return three times — after filing, correction is via Modelo 3 Substituição, but it may be subject to restrictions.' },
        { kind: 'checklist', items: [
          '❌ Forgetting to include foreign income — EU automatic data exchange (DAC7, CRS) catches this. It is better to declare it and use the credit',
          '❌ Entering incorrect dependant details → overpayment',
          '❌ Not confirming receipts on Faturas.pt → loss of deductions',
          '❌ Filing without checking the calculation — overpayment may not be refunded automatically',
          '❌ Not including Anexo J when there are foreign sources of income',
          '❌ For NHR/IFICI — forgetting to indicate the status in the field of the relevant form',
          '❌ Missing the deadline — fine €150-3,750 (progressive scale)'
        ]}
      ]
    },
    {
      id: 'after-submission',
      title: 'After filing',
      content: [
        { kind: 'checklist', items: [
          '⏰ Liquidação (calculation) — arrives after 1-2 months',
          '💰 Refund (reembolso) — by August-October to the specified IBAN',
          '📋 Additional payment — deadline 31 August',
          '⚖️ Error in your favour — Finanças has detected it, but the limitation period is 4 years',
          '⚖️ Error in favour of Finanças — correction via Modelo 3 Substituição up to 4 years',
          '🚨 AT audit (fiscalização) — you may be selected at random, usually a request for documents by email'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — IRS 2026', url: 'https://www.portaldasfinancas.gov.pt/at/html/irsweb2024', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do IRS (consolidated)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1988-34471975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Faturas.pt — electronic receipts portal', url: 'https://faturas.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — filing IRS', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/entregar-o-irs', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
