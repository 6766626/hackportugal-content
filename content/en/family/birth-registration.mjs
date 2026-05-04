export default {
  editorialVoice: 'hackportugal',
  id: 'birth-registration',
  categoryId: 'nationality',
  title: 'Registering a child’s birth in Portugal',
  tldr: 'A child born in Portugal: the birth must be registered at the Registo Civil **within 20 days** (Código do Registo Civil art. 96). Under Lei 37/81 art. 1 n.1 al. f), a child acquires Portuguese nationality by birth if at least one parent legally resides in Portugal (any title) OR has resided in Portugal for at least 1 year regardless of title — and is not in the service of a foreign state. Registration: free via ePortugal or at the maternity hospital (“Nascer Cidadão”). The child gets a Cartão de Cidadão, NIF, NISS, utente SNS — all at once.',
  tags: ['birth', 'child', 'registration', 'citizenship', 'jus soli', 'nascer cidadão'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'jus-soli',
      title: '🇵🇹 Nationality for a child by birth',
      content: [
        { kind: 'paragraph', text: 'Under Lei 37/81 art. 1 n.1 al. f), a child born in Portugal becomes a Portuguese citizen by birth if at least ONE parent meets one of the conditions and is not in the service of a foreign state:' },
        { kind: 'checklist', items: [
          '✅ Is a Portuguese citizen (then automatic)',
          '✅ **Legally resides in Portugal** at the time of birth (with a residence permit or other title — duration is not material)',
          '✅ **Has resided in Portugal ≥ 1 year regardless of title** (factual presence)',
          '✅ An EU citizen with a valid CRUE registration at the time of birth — usually considered to be residing legally',
          '⚠️ A short tourist visit without sustained presence — usually no; but if there is 1+ year of factual residence — there is a basis',
          '🌐 Portugal allows multiple citizenship — the child may also obtain a second one through the parents',
          '⚖️ **03.05.2026 President Seguro promulgated Decreto AR 48/XVII** (after passing through the TC renamed from 17/XVII). After publication in the Diário da República, to apply for a child’s citizenship by jus soli the parents must have ≥5 years of valid residence permits. Until publication in the DRE, the old rules apply. Seguro publicly asked for already submitted cases to be considered under the old rules'
        ]}
      ]
    },
    {
      id: 'nascer-cidadao',
      title: '🏥 “Nascer Cidadão” — registration at the maternity hospital',
      content: [
        { kind: 'paragraph', text: 'All public and many private maternity hospitals offer the “Nascer Cidadão” service — birth registration happens RIGHT at the maternity hospital, on the day of birth or immediately after.' },
        { kind: 'substeps', items: [
          { id: 'n1', title: 'What is included', content: [
            { kind: 'checklist', items: [
              '📜 Birth certificate (assento de nascimento)',
              '🪪 Application for Cartão de Cidadão',
              '🔢 NIF (tax number)',
              '🛡️ NISS (social security number)',
              '🩺 Application for utente SNS (médico de família)',
              '👶 Abono de família — child benefit (application)',
              '✅ All in one visit, free of charge'
            ]}
          ]},
          { id: 'n2', title: 'What is required from the parents', content: [
            { kind: 'checklist', items: [
              '🆔 Cartão de Cidadão of both parents (or residence permit + passport)',
              '💍 Marriage certificate (if married)',
              '👫 If not married, the father must be present to sign “reconhecimento de paternidade” (acknowledgement of paternity)',
              '📛 Decision on the child’s names — discuss with the maternity hospital in advance (there is a list of permitted names)',
              '💸 Parents’ address/contact for subsequent SNS billing',
              '🏦 IBAN for Abono de Família payment'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'alternative',
      title: '📍 Alternative — Conservatória / online',
      content: [
        { kind: 'paragraph', text: 'If it was not registered at the maternity hospital (home birth, private clinic without the service), you must declare the birth at the Conservatória do Registo Civil **within 20 days** (art. 96 Código do Registo Civil). After this period, registration is still possible, but with an additional procedure and a possible fine.' },
        { kind: 'checklist', items: [
          '🏛️ Any Conservatória — choose by address or convenience',
          '🌐 Alternative: ePortugal online via Chave Móvel Digital, you upload the documents',
          '📅 Free if within the 20-day deadline; after that — a fine and additional procedure may apply',
          '⏱️ Registration takes 30–60 min',
          '📄 “Cédula” is issued immediately — a temporary certificate',
          '📩 The child’s full Cartão de Cidadão arrives by post within 2–4 weeks'
        ]}
      ]
    },
    {
      id: 'naming',
      title: '📛 Naming rules',
      content: [
        { kind: 'paragraph', text: 'Portugal has an official list of approved names. Not all names are permitted.' },
        { kind: 'checklist', items: [
          '✅ IRN approved names database: irn.justica.gov.pt → “Vocábulos admitidos como nomes próprios”',
          '🚫 Prohibited: invented/derogatory/geographical names (e.g., “Lisboa”, “Brasil”)',
          '🚫 Under art. 103 Código do Registo Civil, a name is usually limited to a maximum of 2 given names (nomes próprios) and 4 surnames (apelidos)',
          '🇷🇺 Foreigners (including Russians): for a child with dual citizenship IRN usually accepts a name permitted in the other country of citizenship, in Latin transliteration',
          '⚠️ If the name is not in the IRN database — parents file a “pedido de admissibilidade” (1–2 weeks, free)',
          '👨‍👩‍👧 Surnames: the child may take surnames of either parent and ancestors; the order is flexible, not necessarily “mother+father”',
          '🌍 For foreign children with another country’s citizenship, IRN may allow a different order of names matching the foreign norm'
        ]}
      ]
    },
    {
      id: 'documents-after',
      title: '📋 After registration — what to obtain',
      content: [
        { kind: 'checklist', items: [
          '🪪 Child’s **Cartão de Cidadão** — arrives in 2–4 weeks',
          '🛡️ **NISS** — for benefits and health insurance',
          '🔢 **NIF** — needed if you open a deposit in the child’s name or rent housing for a family with a child',
          '🌍 **Portuguese passport** (if nationality is acquired): IRN, standard — about €65 in Portugal, urgent/express — more expensive; timing depends on the service type',
          '🩺 **Médico de família** — book with a paediatrician',
          '💉 **Vaccination schedule (PNV)**: first vaccine at 2 months, check-up at 7 days',
          '👶 **Abono de família**: calculated by escalão (household income / number of children with entitlement + 1) and the child’s age. Calculate the exact amount in Segurança Social Direta or via ISS; exact tables — on seg-social.pt',
          '🌐 **Registration at the parents’ country embassy**: for dual citizenship — apply via the consulate'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '📅 Apply for Abono de Família within 6 months after birth — to receive missed payments retroactively',
          '🛏️ At the maternity hospital ask for a private room “quarto particular” — private insurance sometimes covers it',
          '🇷🇺/🇧🇾/🇺🇦 Immediately after registration in Portugal — translate the birth certificate and register at your country’s embassy (for dual citizenship). Without this, the child has only Portuguese citizenship',
          '⚖️ If the parents are not married: the father acknowledges paternity in person at the Conservatória, presenting ID. A DNA test is NOT required by default, only if contested (through the court)',
          '👶 PNV vaccinations are free in the SNS',
          '🩺 Child insurance — some employers include a family plan (Generali, Médis)',
          '🎓 Nursery/kindergarten enrolment: submit the application right after birth (waiting list 6–12 months)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Birth registration within 20 days', amountEUR: 0 },
    { label: 'Late registration >20 days', amountEURMin: 50, amountEURMax: 200, note: 'possible fine + additional procedure' },
    { label: 'Child’s Cartão de Cidadão', amountEUR: 18, note: 'first free under Nascer Cidadão' },
    { label: 'Portuguese passport (standard, in Portugal)', amountEUR: 65, note: 'urgent/express — more expensive' },
    { label: 'Translation of the birth certificate', amountEURMin: 30, amountEURMax: 80 }
  ],
  sources: [
    { title: 'IRN — Birth registration', url: 'https://justica.gov.pt/Servicos/Registos-de-nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Civil — art. 96 (deadline) and art. 103 (names)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34488075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Nascer Cidadão', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/nascer-cidadao-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 37/81 — Nationality Law (art. 1 n.1 al. f)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34448275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
