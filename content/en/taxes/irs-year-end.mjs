export default {
  editorialVoice: 'hackportugal',
  id: 'irs-year-end',
  categoryId: 'taxes',
  title: 'IRS year-end checklist — what to prepare',
  tldr: 'Preparation for the IRS return starts in December: check the coverage of deduction categories (health, education, housing, restaurants) in Faturas.pt, activate deductions by 31 December, collect documents for foreign income. The return is filed from 1 April to 30 June of the following year. Late filing — fine from €150.',
  tags: ['irs', 'taxes', 'checklist', 'deductions'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'december-checklist',
      title: 'December — final steps of the year',
      content: [
        { kind: 'checklist', items: [
          '🧾 Check Faturas.pt — all your purchases with NIF accumulate here. Receipts not assigned to a category lose the deduction',
          '✅ Confirm unconfirmed receipts (which categories they belong to — health/education/etc.)',
          '💳 Make year‑end medical payments — deduction up to €1000 at 15% of annual medical expenses',
          '📚 Pay tuition/courses by 31.12 — deduction up to €800 per household (household), not per child',
          '🍽️ Meals in restaurants with NIF — deduction up to €250',
          '💡 Utilities with NIF (electricity, gas, water) — deduction up to €250',
          '🏠 Recibo for December rent — deduction up to €700–€800 (OE 2024/25, check the current limit)',
          '💰 Top up PPR (pension plan) — deduction up to €400 (young), €300 (40–50), €200 (>50)',
          '💳 Donations to NGOs with NIF — deduction 25% of the contribution, up to 15% of tax',
          '📊 IFICI entities: confirm status, documents on qualified activity'
        ]},
        { kind: 'warning', text: 'Receipts without NIF — NOT deductible. ALWAYS say “com NIF, por favor” or “factura com contribuinte” at purchase.' }
      ]
    },
    {
      id: 'january-february',
      title: 'January–February — prepare documents',
      content: [
        { kind: 'checklist', items: [
          '📄 Obtain Comprovativo de Rendimentos from the employer (must be issued by 15 February)',
          '📄 Bank statements for the whole year to calculate interest/dividends',
          '📄 Recibo Verde confirmations (for self‑employed) — automatically in Portal das Finanças (tax portal)',
          '📄 Declarations of foreign income — pension certificates, foreign bank statements',
          '📄 IMI confirmation (if you bought a property during the year)',
          '📄 IRS Jovem confirmations (if applicable — youth up to 35)',
          '📋 Certidões de não dívida (in case of IRS debts, worth checking)'
        ]}
      ]
    },
    {
      id: 'filing-window',
      title: 'March–June — filing',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'IRS Automático (simplified)', content: [
            { kind: 'paragraph', text: 'For categories A (salary) and H (pension) with one employer and no other sources. Portal das Finanças → IRS → IRS Automático. The return is already filled in — you only need to review and confirm.' }
          ]},
          { id: 'f2', title: 'Modelo 3 (full)', content: [
            { kind: 'paragraph', text: 'For everyone else. Portal das Finanças → IRS → Entregar. Choose the required Anexos.' }
          ]},
          { id: 'f3', title: 'Annexes — which to choose', content: [
            { kind: 'checklist', items: [
              'Anexo A — salary (Category A), pension (Category H)',
              'Anexo B — Recibo Verde/self‑employment (simplified regime)',
              'Anexo C — Recibo Verde/business (organised accounting)',
              'Anexo D — imputação de rendimentos (transparência fiscal, herança indivisa, special cases). NOT for ordinary dividends from SA/Lda',
              'Anexo E — rendimentos de capitais (Category E): interest, dividends from SA/Lda',
              'Anexo F — income from property rental (Category F)',
              'Anexo G — capital gains/mais-valias (Category G): sale of shares, real estate, typically — capital gains on cryptocurrencies',
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
          { id: 'd1', title: 'Medical expenses (15% up to €1000)', content: [
            { kind: 'checklist', items: [
              'Doctors (private and SNS taxa)',
              'Pharmacies (prescription and over‑the‑counter medicines with NIF)',
              'Dentistry',
              'Surgeries, hospitalisation (IVA 6%)',
              'Glasses, contact lenses — prescribed',
              'Health insurance',
              'NIF on the receipt is mandatory for inclusion'
            ]}
          ]},
          { id: 'd2', title: 'Education (30% up to €800 per household)', content: [
            { kind: 'checklist', items: [
              'School fees',
              'University propina',
              'Language courses',
              'Textbooks (IVA 6%)',
              'School uniform',
              'Transport to school',
              'After‑school care (ATL)'
            ]}
          ]},
          { id: 'd3', title: 'Housing', content: [
            { kind: 'checklist', items: [
              'Rent — 15% up to €700–€800 (after OE 2024/25)',
              'Mortgage interest (only mortgages before 2011) — 15% up to €296',
              'Utilities — 15% up to €250',
              'Paid IMI — sometimes deductible'
            ]}
          ]},
          { id: 'd4', title: 'General receipts (restaurants, workshops, hairdressers) — 15% up to €250', content: [
            { kind: 'paragraph', text: 'Category “despesas gerais familiares”. Collected automatically via Faturas.pt when scanning receipts with NIF.' }
          ]},
          { id: 'd5', title: 'Special receipts', content: [
            { kind: 'checklist', items: [
              'Restaurants and hairdressers — 15% up to €250 (separate category since 2019)',
              'Car repair services and public transport — 15% up to €250',
              'Veterinarian — 22.5% (if registered)'
            ]}
          ]},
          { id: 'd6', title: 'PPR (pension plan)', content: [
            { kind: 'checklist', items: [
              'Up to 35 years: 20% up to €400',
              '35–50: 20% up to €350',
              'Over 50: 20% up to €300',
              'Advantageous for long‑term retirement, but with withdrawal restrictions'
            ]}
          ]},
          { id: 'd7', title: 'Dependants', content: [
            { kind: 'checklist', items: [
              'Fixed deductions for dependentes: €600 (1st child), €726 (2nd if aged up to 6), €900 (3rd and onwards) — exact amounts depend on age and family composition',
              'Elderly parents with low income — deduction',
              'Disability: enhanced deductions',
              'Single parent: additional increase'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'ifici-nhr',
      title: 'IFICI / NHR taxpayers — special actions',
      content: [
        { kind: 'checklist', items: [
          '🎓 Confirmation of qualified activity — contract, academic certificates',
          '📊 Separate form for old NHR (before 2024) or IFICI (from 2024)',
          '💰 Foreign income — in Anexo J, considering tax treaties',
          '🧾 Certificates of tax residence — obtain in source countries to claim tax credit',
          '🎯 IFICI: 20% rate on qualified income, ordinary IRS on the rest'
        ]}
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes',
      content: [
        { kind: 'warning', text: 'Triple‑check the return — after submission, correction is via Modelo 3 Substituição, but may be limited.' },
        { kind: 'checklist', items: [
          '❌ Forgetting to include foreign income — EU automatic data exchange (DAC7, CRS) catches this. Better to declare and use the credit',
          '❌ Entering incorrect dependant data → overpayment',
          '❌ Not confirming receipts on Faturas.pt → loss of deductions',
          '❌ Submitting without checking the calculation — overpayment may not be refunded automatically',
          '❌ Not including Anexo J when there are foreign income sources',
          '❌ For NHR/IFICI — forgetting to indicate status in the relevant form field',
          '❌ Missing the deadline — fine €150–€3750 (progressive scale)'
        ]}
      ]
    },
    {
      id: 'after-submission',
      title: 'After submission',
      content: [
        { kind: 'checklist', items: [
          '⏰ Liquidação (assessment) — arrives within 1–2 months',
          '💰 Refund (reembolso) — by August–October to the indicated IBAN',
          '📋 Additional payment — deadline 31 August',
          '⚖️ Error in your favour — Finanças detected it, but the statute of limitations is 4 years',
          '⚖️ Error in favour of Finanças — correction via Modelo 3 Substituição up to 4 years',
          '🚨 AT inspection (fiscalização) — you may be selected at random, typically a request for documents by email'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — IRS 2026', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlirsweb2024', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRS Code (consolidated)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1988-34471975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Faturas.pt — electronic invoices portal', url: 'https://faturas.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — IRS submission', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/entregar-o-irs', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
