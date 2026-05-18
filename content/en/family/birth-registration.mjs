export default {
  editorialVoice: 'hackportugal',
  id: 'birth-registration',
  categoryId: 'nationality',
  title: 'Registering the birth of a child in Portugal',
  tldr: 'A child born in Portugal: the birth must be registered with the Registo Civil **within 20 days** (Código do Registo Civil art. 96). Under Lei 37/81 art. 1 n.1 al. f), the child acquires Portuguese nationality by birth if at least one parent is legally resident in Portugal (any title) OR has been living in Portugal for at least 1 year regardless of title — and is not in the service of a foreign state. Registration: free via ePortugal or at the maternity hospital (“Nascer Cidadão”). The child is issued with Cartão de Cidadão, NIF, NISS, utente SNS — all at once.',
  tags: ['birth', 'child', 'registration', 'nationality', 'jus soli', 'Nascer Cidadão'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'jus-soli',
      title: '🇵🇹 Child nationality by birth',
      content: [
        { kind: 'paragraph', text: 'Under Lei 37/81 art. 1 n.1 al. f), a child born in Portugal becomes a Portuguese national by birth if at least ONE parent meets one of the conditions and is not in the service of a foreign state:' },
        { kind: 'checklist', items: [
          '✅ Is a Portuguese citizen (then automatically)',
          '✅ **Is legally resident in Portugal** at the time of birth (with a residence permit or another title — duration is not material)',
          '✅ **Has been living in Portugal for ≥ 1 year regardless of having a title** (actual presence)',
          '✅ EU citizen with valid CRUE registration at the time of birth — usually considered legally resident',
          '⚠️ A short tourist visit only, without long-term presence — usually no; but if there is 1+ year of actual residence, there is a basis',
          '🌐 Portugal allows multiple nationality — the child may also acquire a second one through the parents',
          '⚖️ **03.05.2026 President Seguro promulgated Decreto AR 48/XVII** (renamed from 17/XVII after passing through the TC). As at 13.05.2026, the law was published on 18.05.2026 as **Lei Orgânica n.º 1/2026** (10 days). After publication in Diário da República, for a child’s jus soli nationality application the parents must have ≥5 years of valid residence permit. The text of the law contains a transitional provision: cases being processed are subject to the previous version of Lei 37/81 (1 year). Until 19.05.2026, the old rules apply to everyone'
        ]}
      ]
    },
    {
      id: 'nascer-cidadao',
      title: '🏥 “Nascer Cidadão” — registration at the maternity hospital',
      content: [
        { kind: 'paragraph', text: 'All public and many private maternity hospitals offer the “Nascer Cidadão” service — the birth is registered DIRECTLY at the maternity hospital, on the day of birth or immediately afterwards.' },
        { kind: 'substeps', items: [
          { id: 'n1', title: 'What is included', content: [
            { kind: 'checklist', items: [
              '📜 Birth certificate (assento de nascimento)',
              '🪪 Application for Cartão de Cidadão',
              '🔢 NIF (tax number)',
              '🛡️ NISS (social security number)',
              '🩺 Application for utente SNS (médico de família)',
              '👶 Abono de família — child benefit (application)',
              '✅ Everything in 1 visit, free of charge'
            ]}
          ]},
          { id: 'n2', title: 'What is needed from the parents', content: [
            { kind: 'checklist', items: [
              '🆔 Cartão de Cidadão of both parents (or residence permit + passport)',
              '💍 Marriage certificate (if married)',
              '👫 If not married, the father must be present to sign the “reconhecimento de paternidade” (acknowledgement of paternity)',
              '📛 Decision on the child’s names — discuss with the maternity hospital in advance (there is a list of permitted names)',
              '💸 Parents’ address/contact for subsequent SNS payment',
              '🏦 IBAN for Abono de Família payments'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'alternative',
      title: '📍 Alternative — Conservatória / online',
      content: [
        { kind: 'paragraph', text: 'If the child was not registered at the maternity hospital (home birth, private clinic without the service), the birth must be declared at the Conservatória do Registo Civil **within 20 days** (art. 96 Código do Registo Civil).\n\nAfter this deadline, registration is still possible, but with an additional procedure and a possible fine.' },
        { kind: 'checklist', items: [
          '🏛️ Any Conservatória — choose by address or convenience',
          '🌐 Alternative: ePortugal online via Chave Móvel Digital, you upload the documents',
          '📅 Free of charge if completed within the 20-day deadline; afterwards — a fine and an additional procedure are possible',
          '⏱️ Registration takes 30–60 min',
          '📄 They issue a “Cédula” immediately — a temporary certificate',
          '📩 The child’s full Cartão de Cidadão arrives by post in 2–4 weeks'
        ]}
      ]
    },
    {
      id: 'naming',
      title: '📛 Name rules',
      content: [
        { kind: 'paragraph', text: 'Portugal has an official list of approved names. Not all names are allowed.' },
        { kind: 'checklist', items: [
          '✅ **IRN approved names database**: irn.justica.gov.pt → “Vocábulos admitidos como nomes próprios”',
          '🚫 Prohibited: fictional/derogatory/geographical names (for example, “Lisboa”, “Brasil”)',
          '🚫 Under art. 103 Código do Registo Civil, a name is usually limited to a maximum of 2 given names (nomes próprios) and 4 surnames (apelidos)',
          '🇷🇺 **Foreigners (including Russians)**: for a child with dual nationality, IRN will usually accept a name permitted in the country of the second nationality, in Latin transliteration',
          '⚠️ If the name is not in the IRN database — the parents submit a “pedido de admissibilidade” (1–2 weeks, free of charge)',
          '👨‍👩‍👧 **Surnames**: the child may take surnames from either parent and ancestors; the order is flexible, it does not have to be “mother+father”',
          '🌍 For foreign children with the nationality of another country, IRN may allow a different order of names that complies with the foreign rule'
        ]}
      ]
    },
    {
      id: 'documents-after',
      title: '📋 After registration — what to obtain',
      content: [
        { kind: 'checklist', items: [
          '🪪 **Cartão de Cidadão** for the child — arrives in 2–4 weeks',
          '🛡️ **NISS** — for benefits and health insurance',
          '🔢 **NIF** — needed if you open a deposit account for the child or rent housing for a family with a child',
          '🌍 **Portuguese passport** (if there is nationality): IRN, standard — around €65 in Portugal, urgent/express — more expensive; the timeframe depends on the type of service',
          '🩺 **Médico de família** — register with a paediatrician',
          '💉 **Vaccination plan (PNV)**: first vaccine at 2 months, check-up — 7 days',
          '👶 **Abono de família**: calculated by escalão (family income / number of eligible children + 1) and the child’s age. Calculate the exact amount in Segurança Social Direta or via ISS; exact tables are on seg-social.pt',
          '🌐 **Registration at the embassy of the parents’ country**: for dual nationality — application through the consulate'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '📅 Apply for Abono de Família within 6 months after birth — to receive missed payments retroactively',
          '🛏️ At the maternity hospital, ask for a separate room “quarto particular” — private insurance sometimes covers it',
          '🇷🇺/🇧🇾/🇺🇦 Immediately after registration in Portugal — translate the birth certificate and register at your country’s embassy (for dual nationality). Without this, the child has only Portuguese nationality',
          '⚖️ If the parents are not married: the father personally acknowledges paternity at registration in the Conservatória, presenting a document. A DNA test is NOT required by default, only if disputed (through court)',
          '👶 PNV vaccinations are free in the SNS',
          '🩺 Child insurance — some employers include a family plan (Generali, Médis)',
          '🎓 Enrolment in Creche/Jardim de Infância: apply immediately after birth (waiting list 6–12 months)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Birth registration within 20 days', amountEUR: 0 },
    { label: 'Late registration >20 days', amountEURMin: 50, amountEURMax: 200, note: 'possible fine + additional procedure' },
    { label: 'Child’s Cartão de Cidadão', amountEUR: 18, note: 'first one free with Nascer Cidadão' },
    { label: 'Portuguese passport (standard, in Portugal)', amountEUR: 65, note: 'urgent/express — more expensive' },
    { label: 'Translation of birth certificate', amountEURMin: 30, amountEURMax: 80 }
  ],
  sources: [
    { title: 'IRN — Birth registration', url: 'https://justica.gov.pt/Servicos/Registos-de-nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Civil — art. 96 (deadline) and art. 103 (names)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34488075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Nascer Cidadão', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/nascer-cidadao-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 37/81 — Lei da Nacionalidade (art. 1 n.1 al. f)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34448275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-13',
  verifyIntervalDays: 180
}
