export default {
  editorialVoice: 'hackportugal',
  id: 'sns-foreigner-no-niss',
  categoryId: 'healthcare',
  title: 'SNS for foreigners without NISS — what to do',
  tldr: 'Without NISS / utente, emergency care in a public urgência IS PROVIDED TO EVERYONE regardless of status (Constituição art. 64; Lei de Bases da Saúde) — but this does NOT mean it is always free: non-residents and people without entitlement to SNS exemptions may be billed (at SNS tariffs). Fee exemptions are provided for certain groups: pregnant women/perinatal care, children under 18, serious life-threatening conditions, infectious diseases, victims of crime and participants in special programmes. For planned care, you need an utente with a residence permit or, if living in Portugal for more than 90 days without a residence permit, via Atestado de Residência. Refugees/TPD — automatic full access. Tourists — EHIC/CESD (EU) or private insurance.',
  tags: ['sns', 'utente', 'tourists', 'without niss'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'emergency-rights',
      title: '🚨 Emergency care — provided to everyone (but not always free)',
      content: [
        { kind: 'paragraph', text: '**Decreto-Lei 67/2014** + **Constituição art. 64** guarantee the universal right to emergency care regardless of documents.' },
        { kind: 'checklist', items: [
          '✅ **112 / 911 / SNS 24**: work for everyone',
          '✅ **Urgência in a public hospital**: everyone is accepted in the event of an immediate threat',
          '✅ **Childbirth and perinatal care**: for pregnant women without documents, this is guaranteed free of charge under special SNS rules and protocols (protection of the child’s rights)',
          '✅ **Trauma, accident**: free regardless of status',
          '✅ **Emergency psychiatric care**: crisis helplines',
          '⚠️ Non-emergency care without utente: you will have to pay as a private patient (tariff around €50–100/visit)',
          '✅ The requirement to provide the care recipient’s documents is waived in life-threatening cases'
        ]}
      ]
    },
    {
      id: 'utente-provisorio',
      title: '📋 Temporary utente — for residents without NISS',
      content: [
        { kind: 'paragraph', text: 'If you have received a residence permit but have not registered with Segurança Social, you can obtain a **temporary utente number** with limited rights.' },
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Conditions', content: [
            { kind: 'checklist', items: [
              'Valid residence permit or proof of residency',
              'Atestado de Residência from Junta de Freguesia',
              'Without NISS — you confirm your intention to obtain one (through Segurança Social within 30 days)',
              'Apply at your nearest Centro de Saúde'
            ]}
          ]},
          { id: 'u2', title: 'What is included', content: [
            { kind: 'checklist', items: [
              '✅ Family doctor appointment (free)',
              '✅ Emergency care and urgência',
              '✅ Vaccinations under the PNV',
              '✅ Paediatric consultations',
              '✅ Pregnancy monitoring until childbirth',
              '⚠️ Expensive specialist medicines — partial co-payment',
              '⚠️ Surgery: usually requires confirmation that the NIF / NISS application process has begun',
              '🕒 Valid for 6 months, then you need to update your NISS status'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tourist',
      title: '✈️ Tourists — without residency',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'EU/EEA/Switzerland', content: [
            { kind: 'checklist', items: [
              '✅ **EHIC / CESD** — gives access to public healthcare as if you were a resident of Portugal',
              '✅ Show the card + passport at the hospital — all services are covered',
              '⚠️ Not covered: private clinics, repatriation, planned procedures',
              '⚠️ If you do not have an EHIC — pay as a private patient (high cost), then claim reimbursement through insurance in your country'
            ]}
          ]},
          { id: 't2', title: 'Non-EU tourists', content: [
            { kind: 'checklist', items: [
              '⚠️ Must have **tourist medical insurance** ≥ €30,000 (for a Schengen visa)',
              '✅ Emergency care: provided immediately free of charge, then the bill will be issued to your insurer / to you personally',
              '💰 Without insurance: tariffs are close to private-patient rates — €100–300 per visit, €1000+ for surgery',
              '🏥 Private clinics: depend more heavily on insurance / cash payment',
              '🛂 **Ukrainian refugees** (TPD): full access to SNS immediately, without needing insurance'
            ]}
          ]},
          { id: 't3', title: 'Tourist insurance providers', content: [
            { kind: 'checklist', items: [
              'World Nomads, SafetyWing, IMG, Allianz Travel — international',
              'Local: Tranquilidade Travel, Fidelidade Travel, Generali Travel',
              'Prices: €1–5/day for basic cover; €5–10/day for full cover',
              'Long-term (>180 days): SafetyWing “Nomad Insurance” — popular with digital nomads, €40–60/month'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'undocumented',
      title: '⚠️ No residency, no insurance — what to do',
      content: [
        { kind: 'paragraph', text: 'Sometimes people are in a transition period: the visa is expiring, the residence permit is under review, and there is no legal status. Full access does not work, but there are options.' },
        { kind: 'checklist', items: [
          '🏥 **Emergency care**: provided to everyone — you will NOT be sent home even without legal status. But a bill may be issued (if there is no exemption under a special programme)',
          '👶 **Childbirth + perinatal care**: children’s rights — free',
          '👶 **Children under 16 without documents** — full access to SNS regardless of the parents’ status',
          '🤰 **Pregnant women**: full pregnancy monitoring + childbirth — even without any documents',
          '🏥 **Asylum seekers / people awaiting refugee status**: full rights from the moment of application',
          '🏥 **Victims of human trafficking**: emergency + further medical care, special programme',
          '🎯 **Charities**: Médicos do Mundo PT (medicosdomundo.pt) offers free clinics for people without documents, Lisboa and Porto',
          '🎯 **Cuidados de Saúde Primários — Programa para imigrantes**: in some municipalities there are mobile clinics'
        ]}
      ]
    },
    {
      id: 'process-niss',
      title: '🆔 To get full rights — obtain NISS',
      content: [
        { kind: 'checklist', items: [
          'NISS (social security number) — the key to full access to SNS',
          'Apply to Segurança Social with residence permit + Atestado de Residência + NIF',
          'Processing: 5–15 working days',
          'Afterwards — register at Centro de Saúde with NISS',
          'You get a family doctor (médico de família), if one is available in the system, or a waiting list',
          'Full access to all SNS services'
        ]}
      ]
    },
    {
      id: 'private-affordable',
      title: '💼 Affordable private healthcare — if SNS is slow',
      content: [
        { kind: 'checklist', items: [
          'Budget: **AdvanceCare basic plan** around €40/month — gives access to private healthcare with co-payment',
          '**Generali Saúde** — basic family plan €60–90/month',
          '**Médis Essencial** — entry-level tariff €30–50/month',
          '**One-off visits** to a clinic without insurance: €40–80 GP, €70–150 specialist',
          '**Clinics with reasonable tariffs**: Cruz Vermelha clinics, Misericórdia clinics — non-profit',
          '**Online consultation**: Knok, Doctorino — €30–50 per video visit, receipt',
          'Saúde 24 chat: free, does not replace a doctor, but gives a first opinion'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Emergency care in an SNS hospital', amountEUR: 0, note: 'for everyone' },
    { label: 'First visit with temporary utente', amountEUR: 0 },
    { label: 'Minimum tourist insurance for Schengen', amountEUR: 30000, note: 'cover' },
    { label: 'Private GP visit without insurance', amountEURMin: 40, amountEURMax: 80 },
    { label: 'Private specialist', amountEURMin: 70, amountEURMax: 150 }
  ],
  sources: [
    { title: 'DL 67/2014 — Right of access to SNS', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/67-2014-25344876', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SNS — for foreigners', url: 'https://www.sns.gov.pt/sns-em-numeros/imigrantes/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Médicos do Mundo Portugal', url: 'https://medicosdomundo.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}
