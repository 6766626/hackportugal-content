export default {
  editorialVoice: 'hackportugal',
  id: 'consular-appointment-booking',
  categoryId: 'before_arrival',
  title: 'Booking an appointment at a Portuguese consulate — how to catch a slot',
  tldr: 'Queues at Portuguese consulates (Moscow, Kyiv, Minsk, Almaty, Istanbul) mean 2–6 months of waiting. Slots open irregularly, often at night. Strategies: check every few hours (slots appear because of cancellations); monitoring bots (Telegram bots notify you about new slots); travel to a neighbouring jurisdiction (Yerevan, Tbilisi, Vilnius — often less busy); private consultant (VFS Global, agencies) — €50–200, but a guaranteed slot. Alternative: travel to Portugal without a visa (visa-free Schengen entry for 90 days for a number of countries) and arrange a D visa there.',
  tags: ['consulate', 'appointment', 'd visa', 'slots'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'where',
      title: '🌍 Consular jurisdictions',
      content: [
        { kind: 'paragraph', text: 'A Portuguese consulate accepts only residents of the country of accreditation. But you can submit documents through the consulate of a country where you are temporarily staying (tourism, business trip). This is a legal workaround.' },
        { kind: 'substeps', items: [
          { id: 'w1', title: 'Main CIS / Russian Federation jurisdictions', content: [
            { kind: 'checklist', items: [
              '🇷🇺 Moscow (embassy and consulates-general): serves the Russian Federation',
              '🇺🇦 Kyiv (closed because of the war since 2022)',
              '🇧🇾 Warsaw (for Belarus + Poland)',
              '🇰🇿 Almaty (for Kazakhstan, Kyrgyzstan, Tajikistan)',
              '🇹🇷 Istanbul (for citizens who have travelled there)',
              '🇦🇲 Yerevan — often less busy than others (for those who relocated via Armenia)',
              '🇬🇪 Tbilisi — a popular alternative for Russian applicants',
              '🇱🇹 Vilnius — for Belarusians',
              '🇮🇱 Tel Aviv — for residents of Israel'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'stalking',
      title: '🎯 Hunting for slots',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Direct portal monitoring', content: [
            { kind: 'checklist', items: [
              'Official portal: vistos.mne.gov.pt → select country → appointment',
              'Slots appear because of cancellations — usually 1–3 per day, at random',
              'Check every 2–4 hours — especially at 9:00, 14:00, 22:00 (when staff process requests)',
              'Less often at weekends, but it does happen',
              'For booking — prepare your NIF and passport in advance, complete it in 3 minutes'
            ]}
          ]},
          { id: 's2', title: 'Telegram bots for monitoring', content: [
            { kind: 'checklist', items: [
              '⚠️ Community-run, not official — check reviews, do not pay suspicious operators',
              'Popular ones: @portugalvisabot, @ptvisastatus, @consulate_monitor_bot',
              'They notify you by push notification when a slot opens',
              'Usually free for basic functionality, paid version for instant alerts — €3–10/month',
              '⚠️ No guarantees — a bot may miss a slot or send a false notification',
              'Chat @aimairn — well informed about the consulate situation'
            ]}
          ]},
          { id: 's3', title: 'Intermediary agencies', content: [
            { kind: 'checklist', items: [
              'VFS Global Portugal (vfsglobal.com): official consular operator in some countries. Price +€50–100 on top of the consular fee',
              'Unitel, Nexus Portugal: private agencies with advance appointments for +€100–300',
              'Advantage: a guaranteed slot within an agreed period (2–4 weeks)',
              'Disadvantage: prepayments, contracts, fraud risk (check legal status)',
              '⚠️ There is NO official “fast-track procedure” — anyone offering “a slot tomorrow for €500” is a scammer'
            ]}
          ]},
          { id: 's4', title: 'Travelling to an alternative jurisdiction', content: [
            { kind: 'checklist', items: [
              '1. Check: Yerevan / Tbilisi / Istanbul — whether a visa is needed to enter from the Russian Federation (usually not)',
              '2. Fly in, confirm accommodation (hotel, Airbnb)',
              '3. On the portal — select the relevant consulate',
              '4. An appointment is often available within 2–4 weeks',
              '5. Attend with a full set of documents from home',
              '6. Collect the passport after 60–90 days (by post / courier)',
              '💡 Total costs: flights ~€300–500 + hotel ~€200 + living costs = cheaper than waiting 6 months in Moscow'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bypass',
      title: '🛫 Entering Portugal without a D visa',
      content: [
        { kind: 'paragraph', text: 'For citizens of visa-free countries (Brazil, US, UK, UA after 2022, many others), you can enter Schengen as a tourist and then apply for a residence permit from inside the country.' },
        { kind: 'checklist', items: [
          '✅ Brazilians (CPLP): visa-free entry, then AIMA',
          '✅ Ukrainians: under Proteção Temporária',
          '✅ US, UK, CA citizens: tourism for 90 days, BUT you cannot apply for a residence permit from inside after the cancellation of MdI (03.06.2024); a D visa is needed in advance',
          '❌ Russian Federation, BY, KZ: Schengen visa regime, D visa mandatory BEFORE entry',
          'Exception: TPD Ukraine until 04.03.2027, CPLP Brazilians always'
        ]}
      ]
    },
    {
      id: 'prep',
      title: '📋 Preparing for the appointment',
      content: [
        { kind: 'paragraph', text: 'By the time a slot appears, everything must be ready, otherwise you will miss it.' },
        { kind: 'checklist', items: [
          '✅ NIF (possible online through a representative, €70–150)',
          '✅ International passport — valid for ≥ 6 months + blank pages',
          '✅ Photo 35×45 mm (Schengen format)',
          '✅ Documents for the D visa (see the relevant guide by type)',
          '✅ Insurance ≥ €30,000 for the full period',
          '✅ Proof of accommodation (rental contract / booking > 4 months)',
          '✅ Proof of funds (bank statement for 3–6 months)',
          '✅ Criminal record certificate with apostille (< 3 months)',
          '✅ Motivation letter in Portuguese / English',
          '⏰ When a slot opens — confirm within 15 minutes, otherwise the system will return it to the general pool'
        ]}
      ]
    },
    {
      id: 'alternative',
      title: '🔄 If you still did not manage it',
      content: [
        { kind: 'checklist', items: [
          '💼 Startup visa: application via IAPMEI through a certified incubator, timeframe 30–60 days, consulate slot after approval — faster',
          '🎓 Student visa D4: enrol at a university / language school, visa processing time is shorter',
          '💻 Digital nomad visa (D8): separate category since 2022, often a faster slot',
          '👨‍👩‍👧 Reagrupamento Familiar: if there is already a resident relative in Portugal, apply to AIMA (not needed from inside), the visa is issued later by notification',
          '🇪🇺 EU passport (if you have one): does not require a D visa at all',
          '⏰ Wait: a new “batch” of slots usually opens once every 2–3 months in Moscow'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Consular fee (standard)', amountEUR: 110 },
    { label: 'Agency for a slot', amountEURMin: 50, amountEURMax: 300 },
    { label: 'Trip to Yerevan/Tbilisi (flight+hotel+visa)', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Telegram monitoring bot (paid version)', amountEURMin: 3, amountEURMax: 10, note: '€/month' }
  ],
  sources: [
    { title: 'Vistos MNE — consulate appointment booking', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'VFS Global Portugal', url: 'https://visa.vfsglobal.com/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Consulate of Portugal in Moscow', url: 'https://moscovo.embaixadaportugal.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
