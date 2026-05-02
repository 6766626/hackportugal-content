export default {
  editorialVoice: 'hackportugal',
  id: 'domestic-violence',
  categoryId: 'emergency_rights',
  title: 'Help for victims of domestic violence',
  tldr: 'SOS line: **800 202 148** (free, 24/7, anonymous, in several languages). APAV (Associação Portuguesa de Apoio à Vítima): 116 006. Lei 112/2009 recognises domestic violence as a criminal offence — prosecution is possible even without the victim’s consent (procedimento público). You have the right to: emergency shelter (casa-abrigo, free), legal assistance, medical examination, protective measures (medidas de coação) against the perpetrator, immigration status if your residence permit depended on your partner. Help is available in 4+ languages.',
  tags: ['violence', 'domestic', 'victims', 'apav'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'immediate',
      title: '🆘 Emergency actions',
      content: [
        { kind: 'checklist', items: [
          '☎️ **112** — if there is an immediate threat. Police will come and remove the perpetrator (medida de coação)',
          '☎️ **800 202 148** — Linha Nacional de Emergência Social (free, 24/7, anonymous, EN/RU/UK sometimes)',
          '☎️ **APAV: 116 006** — national victim support',
          '☎️ **GNR / PSP** — local crime report (contacting the police)',
          '🏥 **Hospital urgência department** — medical examination + forensic medical report (essential for a criminal case). Say that you want to file a report; they will call a social worker',
          '💊 **Hospital de São José, Júlio de Matos** in Lisbon / **Hospital de São João** in Porto have GAV (Gabinete de Apoio à Vítima)'
        ]}
      ]
    },
    {
      id: 'legal-rights',
      title: '⚖️ Your rights under the law',
      content: [
        { kind: 'paragraph', text: 'Lei 112/2009 (domestic violence law) and Código Penal art. 152.' },
        { kind: 'checklist', items: [
          '🏛️ **Procedimento público**: the police / Public Prosecutor’s Office can start a case **without the victim’s consent** if they become aware of violence. This means that even if you later “withdraw” your report, the case continues',
          '🛡️ **Medidas de coação**: restraining order, removal from the shared home, ban on weapons, electronic tag monitoring',
          '🏠 **Casa-abrigo**: shelter with a secret address, free, for up to 1 year. Includes food, a lawyer and a psychologist. Transport is provided by APAV / Cruz Vermelha',
          '👨‍👩‍👧 **Children**: remain with the victim parent; temporary custody is decided in court. The school is notified but does not disclose the address',
          '💰 **Adiantamento de indemnização**: the state pays compensation before the court decision (Lei 104/2009)',
          '🛂 **Immigration protection**: if your residence permit depended on the perpetrating partner (Reagrupamento Familiar) — you receive an **autonomous residence permit** independently of them (art. 107 Lei 23/2007)'
        ]}
      ]
    },
    {
      id: 'safety-plan',
      title: '📋 Safety plan',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'If you are still in a dangerous situation', content: [
            { kind: 'checklist', items: [
              '📱 Phone with emergency contacts (112, 800 202 148) on speed dial',
              '👜 Emergency bag ready in a hidden place: documents, change of clothes, medicines, money',
              '🔑 Spare set of keys with a trusted person',
              '💻 Secure email account + new Apple/Google ID — old ones may be monitored',
              '🤐 Do not discuss planning over questionable channels (shared iCloud, shared email)',
              '👥 Code word with a friend / family: “everything is fine” = not fine, need help',
              '🏥 Keep medical reports after hospital visits — evidence of the history'
            ]}
          ]},
          { id: 's2', title: 'When leaving', content: [
            { kind: 'checklist', items: [
              'Do not disclose your destination — even to people close to you (they may tell under pressure)',
              'The Casa-abrigo address is SECRET — do not share it with anyone except APAV',
              'Change your phone number (NOS / MEO / Vodafone — within 1 day)',
              'Change passwords for all accounts; enable 2FA',
              'Block credit cards if you had shared financial arrangements — the bank helps',
              'Inform only the children’s school (with a request for confidentiality)',
              'If work knew the old address — update it only with the human resources (HR) department, with a note'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'support',
      title: '🤝 Long-term support',
      content: [
        { kind: 'substeps', items: [
          { id: 'sup1', title: 'APAV — the main resource', content: [
            { kind: 'checklist', items: [
              '**116 006** — national line (free)',
              'Offices in every region: Lisboa, Porto, Coimbra, Faro, Évora, Beja, Bragança',
              'Legal assistance: free for victims',
              'Psychological support: 6-12 sessions free',
              'Support in court (acompanhamento processual)',
              'Services in different languages: PT/EN/FR/ES/RU/UK in major centres'
            ]}
          ]},
          { id: 'sup2', title: 'UMAR / Casa Abrigo network', content: [
            { kind: 'checklist', items: [
              '**UMAR** (União de Mulheres Alternativa e Resposta) — feminist organisation',
              '40+ casa-abrigo across Portugal',
              'Contact via 800 202 148',
              'Stay of 6-12 months, during which there is help with work / documents / children',
              'From shelter — transition to social housing with priority'
            ]}
          ]},
          { id: 'sup3', title: 'Healthcare and legal assistance', content: [
            { kind: 'checklist', items: [
              '**SNS 24 → option 4**: psychological support in a crisis',
              '**Apoio judiciário** (free legal aid): free if income < 1.5 IAS — via Segurança Social',
              '**Ordem dos Advogados** — pro bono lawyer for victims',
              '**Comissão de Cidadania para a Igualdade** (CIG): state commission, coordinates support'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'language-help',
      title: '🌍 In foreign languages',
      content: [
        { kind: 'checklist', items: [
          '🇬🇧 **EN**: 800 202 148, APAV 116 006 — English-speaking specialists are available everywhere',
          '🇷🇺 **RU**: APAV in Lisbon has a Russian-speaking specialist; SOS Voz Amiga 213 544 545 — sometimes',
          '🇺🇦 **UK**: since 2022, services have been expanded for Ukrainian women escaping the war',
          '🇧🇷 **PT-BR**: any Portuguese-language line is suitable',
          '🇫🇷 **FR**: APAV — sometimes, through the crisis line',
          'If the language you need is not available — the line will provide you with an interpreting service'
        ]}
      ]
    },
    {
      id: 'children-specific',
      title: '👶 If children are affected',
      content: [
        { kind: 'checklist', items: [
          '**CPCJ** (Comissão de Protecção de Crianças e Jovens): local child protection commission — in every município. Can temporarily remove / protect a child',
          'SOS Crianças line: **116 111** (for children themselves)',
          'The school is notified — it does not pass on the address',
          'To the family court — determination of temporary custody and child maintenance',
          'A psychologist for the child is critically important, free via the paediatrician / SNS',
          '**APAV-Kids programme**: specialised group for child victims'
        ]}
      ]
    },
    {
      id: 'aggressor-help',
      title: '🚹 For the perpetrator — BENEFICIAL for everyone',
      content: [
        { kind: 'paragraph', text: 'Portugal has programmes for perpetrators — early intervention reduces the risk of repeated violence. If you notice aggressive impulses in yourself:' },
        { kind: 'checklist', items: [
          '**Linha SOS Agressor: 808 24 24 24**',
          '**Plataforma Pares — para agressores**: ngogether.pt',
          '**Casa Abrigo Homem Vítima**: for male victims (they exist too)',
          'Group therapy for perpetrators (a mandatory part of a court order or self-referral)',
          'Early contact → fewer consequences, a chance to preserve the relationship through real changes'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Helplines (all)', amountEUR: 0 },
    { label: 'Casa-abrigo', amountEUR: 0 },
    { label: 'APAV legal/psychological assistance', amountEUR: 0 },
    { label: 'State compensation (advance)', amountEUR: 0, note: 'up to 6 IAS' }
  ],
  sources: [
    { title: 'APAV — Associação Portuguesa de Apoio à Vítima', url: 'https://apav.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CIG — Comissão para a Cidadania e Igualdade', url: 'https://www.cig.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 112/2009 — Domestic Violence', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34466375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UMAR', url: 'https://umarfeminismos.org/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
