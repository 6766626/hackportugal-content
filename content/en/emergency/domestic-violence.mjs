export default {
  editorialVoice: 'hackportugal',
  id: 'domestic-violence',
  categoryId: 'emergency_rights',
  title: 'Support for victims of domestic violence',
  tldr: 'SOS line: 800 202 148 (free, 24/7, anonymous, in several languages). APAV (Associação Portuguesa de Apoio à Vítima): 116 006. Lei 112/2009 recognises domestic violence as a criminal offence — prosecution is possible even without the victim’s consent (procedimento público). You have the right to: emergency shelter (casa-abrigo, free), legal support, a medical examination, protective measures (medidas de coação) against the offender, immigration status if your residence permit depended on your partner. Support is available in 4+ languages.',
  tags: ['violence', 'domestic', 'victims', 'apav'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'immediate',
      title: '🆘 Emergency actions',
      content: [
        { kind: 'checklist', items: [
          '☎️ 112 — if there is an immediate threat. The police will come and remove the offender (medida de coação)',
          '☎️ 800 202 148 — Serviço de Informação às Vítimas de Violência Doméstica (CIG, free, 24/7, anonymous, multilingual support). This is a specialist line for victims of domestic violence, not to be confused with the general social emergency line 144',
          '☎️ 144 — Linha Nacional de Emergência Social (Segurança Social, free, 24/7) — for general social emergencies',
          '☎️ APAV: 116 006 — national victim support',
          '☎️ GNR / PSP — local crime report (contacting the police)',
          '🏥 Hospital urgência department — medical examination + forensic medical report (essential for a criminal case). Say that you want to file a report; they will call a social worker',
          '💊 Hospital de São José, Júlio de Matos in Lisbon / Hospital de São João in Porto have GAV (Gabinete de Apoio à Vítima)'
        ]}
      ]
    },
    {
      id: 'legal-rights',
      title: '⚖️ Your legal rights',
      content: [
        { kind: 'paragraph', text: 'Lei 112/2009 (domestic violence law) and Código Penal art. 152.' },
        { kind: 'checklist', items: [
          '🏛️ Procedimento público: the police / public prosecutor can start a case without the victim’s consent if they become aware of violence. This means that even if you later “withdraw” your report, the case continues',
          '🛡️ Medidas de coação: restraining order, removal from the shared home, weapons ban, electronic tag monitoring',
          '🏠 Casa-abrigo: shelter with a secret address, free, for up to 1 year. Includes food, a lawyer, a psychologist. Transport is provided by APAV / Cruz Vermelha',
          '👨‍👩‍👧 Children: remain with the victim parent; temporary custody is decided in court. The school is notified but does not disclose the address',
          '💰 Adiantamento de indemnização: the state pays compensation before the court decision (Lei 104/2009)',
          '🛂 Immigration protection: if your residence permit depended on the abusive partner (Reagrupamento Familiar) — you receive an autonomous residence permit independently of them (art. 107 Lei 23/2007)'
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
              '👜 A bag with essentials ready in a hidden place: documents, a change of clothes, medication, money',
              '🔑 Spare set of keys with a trusted person',
              '💻 Safe email account + new Apple/Google ID — old ones may be monitored',
              '🤐 Do not discuss planning through questionable channels (shared iCloud, shared Email)',
              '👥 Code word with a friend / family: “everything is fine” = not fine, need help',
              '🏥 Keep medical reports after hospital visits — evidence of the history'
            ]}
          ]},
          { id: 's2', title: 'When leaving', content: [
            { kind: 'checklist', items: [
              'Do not disclose the destination — even to close people (they may reveal it under pressure)',
              'The Casa-abrigo address is SECRET — do not share it with anyone except APAV',
              'Change your phone number (NOS / MEO / Vodafone — within 1 day)',
              'Change passwords for all accounts; enable 2FA',
              'Block credit cards if there was shared financial life — the bank helps',
              'Inform only the children’s school (with a request for confidentiality)',
              'If work knew the old address — update it only with human resources (HR) with a note'
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
              '116 006 — national line (free)',
              'Offices in every region: Lisboa, Porto, Coimbra, Faro, Évora, Beja, Bragança',
              'Legal support: free for victims',
              'Psychological support: 6-12 sessions free',
              'Support in court (acompanhamento processual)',
              'Services in different languages: PT/EN/FR/ES/RU/UK in major centres'
            ]}
          ]},
          { id: 'sup2', title: 'UMAR / Casa Abrigo network', content: [
            { kind: 'checklist', items: [
              'UMAR (União de Mulheres Alternativa e Resposta) — feminist organisation',
              '40+ casa-abrigo across Portugal',
              'Contact via 800 202 148',
              'Stay of 6-12 months; during this time, support with work / documents / children',
              'From the shelter — transition into social housing with priority'
            ]}
          ]},
          { id: 'sup3', title: 'Healthcare and legal support', content: [
            { kind: 'checklist', items: [
              'SNS 24 → option 4: psychological support in a crisis',
              'Apoio judiciário (free legal aid): free if income < 1.5 IAS — through Segurança Social',
              'Ordem dos Advogados — pro bono lawyer for victims',
              'Comissão de Cidadania para a Igualdade (CIG): state commission, coordinates support'
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
          '🇬🇧 EN: 800 202 148, APAV 116 006 — English-speaking specialists are available everywhere',
          '🇷🇺 RU: APAV in Lisbon has a Russian-speaking specialist; SOS Voz Amiga 213 544 545 — sometimes',
          '🇺🇦 UK: since 2022, services have been expanded for Ukrainian women fleeing the war',
          '🇧🇷 PT-BR: any Portuguese-language line is suitable',
          '🇫🇷 FR: APAV — sometimes, via the crisis line',
          'If the language you need is not available — the line will provide an interpreting service'
        ]}
      ]
    },
    {
      id: 'children-specific',
      title: '👶 If children are affected',
      content: [
        { kind: 'checklist', items: [
          'CPCJ (Comissão de Protecção de Crianças e Jovens): local child protection commission — in every município. Can temporarily remove / protect a child',
          'SOS Crianças line: 116 111 (for children themselves)',
          'The school is notified — it does not pass on the address',
          'Family court — determination of temporary custody, child maintenance',
          'A psychologist for the child is critically important, free through the paediatrician / SNS',
          'APAV-Kids programme: specialist group for child victims'
        ]}
      ]
    },
    {
      id: 'aggressor-help',
      title: '🚹 For the offender — BENEFIT for everyone',
      content: [
        { kind: 'paragraph', text: 'Portugal has programmes for perpetrators — early intervention reduces the risk of repeated violence. If you notice aggressive impulses in yourself:' },
        { kind: 'checklist', items: [
          '⚠️ IMPORTANT: the number 808 24 24 24 is SNS24 (the Ministry of Health’s general medical line), and not “SOS Agressor”. Portugal does not have a universal public 24/7 line for perpetrators — most programmes operate through the courts / DGRSP / specialised NGOs',
          'Programa para Agressores de Violência Doméstica (PAVD) — DGRSP programme, usually by court order; self-referral is possible through social services',
          'APAV (116 006) and CIG can also refer a perpetrator to a suitable programme — even if you contact them yourself',
          'Casa Abrigo Homem Vítima: for male victims of domestic violence (they exist too — example: ProMundo)',
          'Group therapy for perpetrators (a mandatory part of a court order or by self-referral)',
          'Early contact → fewer consequences, a chance to preserve the relationship through real change'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Helplines (all)', amountEUR: 0 },
    { label: 'Casa-abrigo', amountEUR: 0 },
    { label: 'APAV legal/psychological support', amountEUR: 0 },
    { label: 'State compensation (advance)', amountEUR: 0, note: 'up to 6 IAS' }
  ],
  sources: [
    { title: 'APAV — Portuguese Association for Victim Support', url: 'https://apav.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CIG — Commission for Citizenship and Equality', url: 'https://www.cig.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 112/2009 — Domestic Violence', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34466375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UMAR', url: 'https://umarfeminismos.org/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
