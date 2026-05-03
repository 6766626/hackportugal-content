export default {
  editorialVoice: 'hackportugal',
  id: 'birth-registration',
  categoryId: 'nationality',
  title: 'Registering a child’s birth in Portugal',
  tldr: 'A child born in Portugal: the birth must be registered with the Registo Civil **within 20 days** (Código do Registo Civil art. 96). Under Lei 37/81 art. 1 n.1 al. f), a child acquires Portuguese nationality by birth if at least one parent is legally resident in Portugal (any title) OR has lived in Portugal for at least 1 year regardless of title — and is not in the service of a foreign state. Registration: free via ePortugal or at the maternity unit (“Nascer Cidadão”). The child gets a Cartão de Cidadão, NIF, NISS, utente SNS — all at once.',
  tags: ['birth', 'child', 'registration', 'citizenship', 'jus soli', 'nascer cidadão'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'jus-soli',
      title: '🇵🇹 Child’s citizenship by birth',
      content: [
        { kind: 'paragraph', text: 'Under Lei 37/81 art. 1 n.1 al. f), a child born in Portugal becomes a Portuguese citizen by birth if at least ONE parent meets one of the following conditions and is not in the service of a foreign state:' },
        { kind: 'checklist', items: [
          '✅ Is a Portuguese citizen (then automatic)',
          '✅ **Legally resides in Portugal** at the time of birth (with a residence permit or other title — duration is not material)',
          '✅ **Has lived in Portugal for ≥ 1 year regardless of title** (factual presence)',
          '✅ An EU citizen with a valid CRUE registration at the time of birth — usually considered to be legally resident',
          '⚠️ A short tourist visit without extended presence — usually no; but if there is 1+ year of factual residence — there is a basis',
          '🌐 Portugal allows multiple nationality — the child may also acquire the parents’ other nationality',
          '⚖️ New law AR 17/XVII (approved by Parliament on 01.04.2026) will change the period to 5 years — as of 03.05.2026 it has NOT yet been promulgated, the old rules apply'
        ]}
      ]
    },
    {
      id: 'nascer-cidadao',
      title: '🏥 “Nascer Cidadão” — registration at the maternity unit',
      content: [
        { kind: 'paragraph', text: 'All public and many private maternity units offer the “Nascer Cidadão” service — birth registration takes place DIRECTLY at the maternity unit, on the day of birth or immediately afterwards.' },
        { kind: 'substeps', items: [
          { id: 'n1', title: 'What’s included', content: [
            { kind: 'checklist', items: [
              '📜 Birth certificate (assento de nascimento)',
              '🪪 Application for the Cartão de Cidadão',
              '🔢 NIF (tax number)',
              '🛡️ NISS (social security number)',
              '🩺 Application for utente SNS (médico de família)',
              '👶 Abono de família — child benefit (application)',
              '✅ All in one visit, free of charge'
            ]}
          ]},
          { id: 'n2', title: 'What parents need to provide', content: [
            { kind: 'checklist', items: [
              '🆔 Both parents’ Cartão de Cidadão (or residence permit + passport)',
              '💍 Marriage certificate (if married)',
              '👫 If not married, the father must be present to sign the “reconhecimento de paternidade” (acknowledgement of paternity)',
              '📛 Decision on the child’s names — discuss with the maternity unit in advance (there is a list of permitted names)',
              '💸 Parents’ address/contact for subsequent SNS billing',
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
        { kind: 'paragraph', text: 'If the birth was not registered at the maternity unit (home birth, private clinic without the service), you must declare the birth at the Conservatória do Registo Civil **within 20 days** (Código do Registo Civil art. 96). After this period registration is still possible, but with additional procedure and a possible fine.' },
        { kind: 'checklist', items: [
          '🏛️ Any Conservatória — choose by address or convenience',
          '🌐 Alternative: ePortugal online via Chave Móvel Digital, you upload the documents',
          '📅 Free if within the 20-day deadline; afterwards — a fine and additional procedure may apply',
          '⏱️ Registration takes 30–60 min',
          '📄 A “Cédula” — temporary certificate — is issued immediately',
          '📩 The child’s full Cartão de Cidadão arrives by post in 2–4 weeks'
        ]}
      ]
    },
    {
      id: 'naming',
      title: '📛 Naming rules',
      content: [
        { kind: 'paragraph', text: 'Portugal has an official list of approved given names. Not all names are allowed.' },
        { kind: 'checklist', items: [
          '✅ **IRN database of approved names**: irn.justica.gov.pt → “Vocábulos admitidos como nomes próprios”',
          '🚫 Prohibited: invented/derogatory/geographical names (e.g., “Lisboa”, “Brasil”)',
          '🚫 Under Código do Registo Civil art. 103, a name is usually limited to a maximum of 2 given names (nomes próprios) and 4 surnames (apelidos)',
          '🇷🇺 **Foreigners (including Russians)**: for a child with dual nationality the IRN will usually accept a name that is permitted in the country of the second nationality, in Latin transliteration',
          '⚠️ If a name is not in the IRN database — parents submit a “pedido de admissibilidade” (1–2 weeks, free)',
          '👨‍👩‍👧 **Surnames**: a child may take surnames from either parent and ancestors; the order is flexible, it does not have to be “mother+father”',
          '🌍 For foreign children with another nationality the IRN may allow a different name order consistent with the foreign rule'
        ]}
      ]
    },
    {
      id: 'documents-after',
      title: '📋 After registration — what to obtain',
      content: [
        { kind: 'checklist', items: [
          '🪪 The child’s **Cartão de Cidadão** — arrives in 2–4 weeks',
          '🛡️ **NISS** — for benefits and health insurance',
          '🔢 **NIF** — needed if you open a deposit account for the child or rent housing for a family with a child',
          '🌍 **Portuguese passport** (if nationality is acquired): IRN, standard — around €65 in Portugal, urgent/express — more expensive; timing depends on the service type',
          '🩺 **Médico de família** — register with a paediatrician',
          '💉 **Vaccination schedule (PNV)**: first vaccine at 2 months, check-up — day 7',
          '👶 **Abono de família**: calculated by escalão (household income / number of eligible children + 1) and the child’s age. Calculate the exact amount in Segurança Social Direta or via the ISS; exact tables — at seg-social.pt',
          '🌐 **Registration with the parents’ country embassy**: for dual nationality — apply via the consulate'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '📅 Apply for Abono de Família within 6 months after birth — to receive missed payments retroactively',
          '🛏️ At the maternity unit ask for a private room “quarto particular” — private insurance sometimes covers it',
          '🇷🇺/🇧🇾/🇺🇦 Immediately after registration in Portugal — translate the birth certificate and register at your country’s embassy (for dual nationality). Without this the child will only have Portuguese nationality',
          '⚖️ If the parents are not married: the father personally acknowledges paternity at registration in the Conservatória, presenting ID. A DNA test is NOT required by default, only if contested (through court)',
          '👶 PNV vaccinations are free in the SNS',
          '🩺 Child’s health insurance — some employers include a family plan (Generali, Médis)',
          '🎓 Nursery/kindergarten enrolment: apply immediately after birth (waiting list 6–12 months)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Birth registration within 20 days', amountEUR: 0 },
    { label: 'Late registration >20 days', amountEURMin: 50, amountEURMax: 200, note: 'possible fine + additional procedure' },
    { label: 'Child’s Cartão de Cidadão', amountEUR: 18, note: 'first free under Nascer Cidadão' },
    { label: 'Portuguese passport (standard, in Portugal)', amountEUR: 65, note: 'urgent/express — more expensive' },
    { label: 'Translation of birth certificate', amountEURMin: 30, amountEURMax: 80 }
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
