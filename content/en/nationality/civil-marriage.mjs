export default {
  editorialVoice: 'hackportugal',
  id: 'civil-marriage',
  categoryId: 'nationality',
  title: 'Civil marriage registration in Portugal — how to register a marriage',
  tldr: 'Civil marriage registration takes place at the Conservatória do Registo Civil. It is available to residents and non-residents. Timing: depends on the workload of the Conservatória and the completeness of the documents; there is no fixed “30-day notice period”. After the preliminary procedure (processo preliminar) is opened, the registrar checks for marriage impediments (impedimentos matrimoniais); after a favourable decision (despacho favorável), the marriage must be concluded within 6 months. Casamento urgente is NOT a tourist fast-track procedure, but an exceptional procedure for perigo iminente de morte or parto iminente. Requirements: passport, birth certificate (with apostille + translation for foreigners), certificado de capacidade matrimonial from your country (if you are not a Portuguese citizen). Same-sex marriage has been permitted since 2010 (Lei 9/2010). Religious marriage — with civil-law effects through the Concordata (Catholic) or Lei 16/2001 (other faiths).',
  tags: ['marriage', 'civil marriage', 'wedding', 'casamento'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'requirements',
      title: '📋 Who can get married',
      content: [
        { kind: 'checklist', items: [
          '👫 Any couple, regardless of sex — same-sex marriage has been permitted since 2010 (Lei 9/2010)',
          '🎂 ≥ 18 years old; 16-17 — with parental authorisation',
          '✅ Not be in an existing marriage (in any country)',
          '✅ Legal capacity (no legal restrictions preventing marriage)',
          '⚠️ Bigamy is a criminal offence in Portugal, punishable by up to 2 years’ imprisonment',
          '🌍 A marriage concluded in Portugal is recognised in most countries after apostille',
          '⚠️ Some countries (UAE, Saudi Arabia, etc.) do NOT recognise same-sex marriages — take this into account',
          '👨‍👩‍👧 Children: legal protection across all parental rights and responsibilities (joint custody, inheritance, insurance)'
        ]}
      ]
    },
    {
      id: 'process-residents',
      title: '🏛️ Process — for residents of Portugal',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Step 1: Filing the preliminary procedure (processo preliminar)', content: [
            { kind: 'checklist', items: [
              'At a Conservatória do Registo Civil (anywhere in Portugal)',
              'Documents:',
              '  - Cartão de Cidadão / residence permit / passport of both future spouses',
              '  - Divorce or death certificates (if there was a previous marriage)',
              '  - For foreigners — certificado de capacidade matrimonial + birth certificate (apostille + translation)',
              'Witnesses (testemunhas) are usually NOT mandatory when filing the processo preliminar; they may be required in certain cases/types of ceremonies. Check with the chosen Conservatória',
              '**Cost: €120** (non-urgent)'
            ]}
          ]},
          { id: 'r2', title: 'Step 2: Check for marriage impediments (impedimentos matrimoniais)', content: [
            { kind: 'paragraph', text: 'The Conservadora opens the processo preliminar and checks the impedimentos matrimoniais (absolute and relative impediments: age, legal capacity, kinship, existing marriage, etc.). This is NOT a fixed 30-day public notice period — the timing depends on the workload of the Conservatória and the completeness of the documents. At the end of the review — despacho favorável. The marriage must be concluded within 6 months after the despacho.' },
            { kind: 'paragraph', text: 'If there is an impediment — the Conservatória notifies you; an impediment dispensável can be removed by application, while an impediment dirimente prevents the marriage.' }
          ]},
          { id: 'r3', title: 'Step 3: Civil ceremony', content: [
            { kind: 'checklist', items: [
              'Conservatória or certified venue (hotel, wine bar — for an additional fee)',
              'The Conservadora conducts the registration — 15-20 minutes',
              'Signing the register, exchanging rings (optional), kiss (optional 😄)',
              'Certidão de Casamento is issued immediately',
              'Cost of the ceremony at the Conservatória: included; off-site ceremony: +€50-150'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'foreigners',
      title: '🌍 For foreigners — additional documents',
      content: [
        { kind: 'paragraph', text: 'If you or your partner is a foreigner without residency in Portugal, more documents will be required.' },
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Certificado de Capacidade Matrimonial', content: [
            { kind: 'checklist', items: [
              'Certificate of no impediment to marriage from your country',
              'Confirms: you are not married + you have legal capacity to marry',
              'Obtain it from the civil registry authority of your home country / consulate',
              'Portuguese consulates do not issue it to Portuguese citizens travelling abroad to marry',
              'Valid for 6 months',
              'Apostille + sworn translation into Portuguese'
            ]}
          ]},
          { id: 'f2', title: 'Birth certificate', content: [
            { kind: 'checklist', items: [
              'Extract ≤ 6 months old',
              'Apostille (Hague) or consular legalisation',
              'Sworn translation into Portuguese',
              'From Brazil: cartório civil → apostille at MINRE'
            ]}
          ]},
          { id: 'f3', title: 'Divorce / death certificate', content: [
            { kind: 'paragraph', text: 'Apostille + translation to confirm there is no existing marriage. Validity ≤ 6 months.' }
          ]},
          { id: 'f4', title: 'No residency? Marriage for tourists', content: [
            { kind: 'checklist', items: [
              'Possible — a foreign tourist can get married in Portugal',
              'Additional documents: proof of address (even at a hotel), copies of entry stamps',
              'Brazilian applicants: language is not a barrier; Estatuto de Igualdade status is a separate procedure and does not directly simplify marriage registration',
              'Portugal does not provide a fast-track procedure for wedding tourism like Las Vegas',
              '⚠️ Some consulates require a residence permit for the process — check locally'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'urgent',
      title: '⚡ Casamento urgente — exceptional procedure',
      content: [
        { kind: 'warning', text: 'Casamento urgente is NOT a tourist fast-track procedure and NOT an option to choose an “urgent” mode. It is an **exceptional** marriage procedure without the usual processo preliminar in legally defined situations.' },
        { kind: 'checklist', items: [
          '🩺 **Perigo iminente de morte** of one of the people getting married',
          '👶 **Parto iminente** (imminent childbirth)',
          '⚖️ Regulated by art. 1622 Código Civil',
          'It may be performed by any person in the presence of 4 witnesses and is then registered at the Conservatória',
          '⚠️ Not for “weekend” weddings, beach weddings, or speeding up the procedure. To speed up the ordinary procedure — discuss the completeness of the documents with the specific Conservatória',
          'For beach/off-site weddings — ordinary procedure + off-site ceremony for an additional Conservatória fee'
        ]}
      ]
    },
    {
      id: 'religious',
      title: '⛪ Religious marriage with civil-law effects',
      content: [
        { kind: 'checklist', items: [
          'Catholic: Concordata Santa Sé-Portugal (1940, revised 2004) — automatic civil recognition',
          'Evangelical / Protestant / other: a registered minister can conduct a ceremony with civil-law effects (Lei 16/2001)',
          'Muslim, Jewish, Hindu, and Buddhist religions are also recognised',
          'Precondition: the same Processo Preliminar at the Conservatória (30 days + document checks)',
          'After the religious ceremony: the minister sends the signed register back to the Conservatória → registration in the civil register',
          'Same-sex religious ceremonies — only in denominations that conduct them (some Methodists, Quakers, secular humanists)'
        ]}
      ]
    },
    {
      id: 'after',
      title: '✅ After the wedding',
      content: [
        { kind: 'checklist', items: [
          '📄 Obtain the Certidão de Casamento immediately after registration',
          '🆔 Update Cartão de Cidadão / residence permit — surname change (optional in Portugal, common among women, but not mandatory)',
          '📑 Update details with Finanças (if you want joint IRS filing)',
          '🏥 Update Segurança Social / SNS (dependent partner)',
          '🏠 Update bank details — joint accounts, beneficiaries',
          '📧 Update insurance, employer, utilities',
          '🌍 If the wedding is international: register the marriage in both countries (for recognition in the other country)',
          '👶 Children — automatic legal recognition if born ≥ 180 days after the wedding',
          '💰 IRS: married couples can choose “opção pelo englobamento” (joint filing) — it may or may not be more advantageous depending on income'
        ]}
      ]
    },
    {
      id: 'divorce-prevention',
      title: '💔 Prenuptial agreement',
      content: [
        { kind: 'paragraph', text: 'Convenção Antenupcial — prenuptial agreement. Defines the property regime.' },
        { kind: 'checklist', items: [
          '**By default (without a prenuptial agreement)**: comunhão de adquiridos — property acquired after marriage is joint; property acquired before marriage is separate',
          '**Comunhão geral**: everything is joint, even property acquired before marriage',
          '**Separação total**: nothing is joint, each person owns their own property',
          'The prenuptial agreement must be **signed BEFORE the marriage** at a notary / in a Conservatória',
          'Cost: €100-300',
          'Recommended: separação total if there is a significant difference in assets or if the spouses have a business',
          '⚠️ After marriage, the property regime usually does NOT change (princípio da imutabilidade convenção antenupcial). Changes are possible only in strictly limited cases provided by law. Choose the regime BEFORE the wedding'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Standard processo preliminar', amountEUR: 120 },
    { label: 'Urgent procedure', amountEUR: 200 },
    { label: 'Off-site ceremony surcharge', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Apostille + document translation (per person)', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Prenuptial agreement', amountEURMin: 100, amountEURMax: 300 }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 60,
  sources: [
    { title: 'IRN — Civil Marriage', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código Civil — Marriage (Book IV)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 9/2010 — Marriage between people of the same sex', url: 'https://diariodarepublica.pt/dr/detalhe/lei/9-2010-616040', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}
