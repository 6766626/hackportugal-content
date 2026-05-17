export default {
  editorialVoice: 'hackportugal',
  id: 'belarus-specific',
  categoryId: 'country_specific',
  title: 'Moving from Belarus — specifics',
  tldr: 'Belarusians in Portugal: there is no Portuguese consulate in Minsk. The nearest ones are Warsaw or Moscow. D visas are processed through these consulates. Apostille: Ministry of Justice of Belarus. Portuguese banks accept Belarusians without particular restrictions. Sanctions only concern politically exposed persons.',
  audience: { countryCodes: ['BY'] },
  tags: ['belarus', 'visas', 'apostille'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'visas',
      title: 'Obtaining a visa',
      content: [
        { kind: 'checklist', items: [
          'There is no Portuguese consulate in Minsk',
          'Options: Warsaw (main), Moscow, Vilnius, Riga',
          'Warsaw: Embaixada de Portugal em Varsóvia, ul. Atenska 37, 03-978 Warszawa (Saska Kępa district). Tel. +48 22 511 10 10. Book online via varsovia.embaixadaportugal.mne.gov.pt. Waiting time 1–3 months',
          'Vilnius is usually quicker due to lower demand',
          'All D-type visas are available to Belarusians: D2, D3, D4, D7, D8',
          'Schengen C visas — more difficult after 2022, but issued in humanitarian cases'
        ]}
      ]
    },
    {
      id: 'apostille',
      title: 'Document apostille',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Civil registry office — certificates', content: [
            { kind: 'paragraph', text: 'Obtain a duplicate certificate (birth, marriage, etc.) → have it apostilled at the Ministry of Justice of Belarus. Processing time 7-30 days, cost ~30 BYN per apostille.' }
          ]},
          { id: 'a2', title: '2. Ministry of Internal Affairs — criminal record certificate', content: [
            { kind: 'paragraph', text: 'Apply via mvd.gov.by or at an office. Processing time 14 days. Apostille — Ministry of Justice. Valid for 3-6 months in Portugal.' }
          ]},
          { id: 'a3', title: '3. Diploma', content: [
            { kind: 'paragraph', text: 'Ministry of Education of the Republic of Belarus → apostille at the Ministry of Justice. Not all private universities are accredited for apostille — check in advance.' }
          ]}
        ]},
        { kind: 'paragraph', text: 'Translation in Portugal — by a sworn translator or certified at a Conservatória (irn.justica.gov.pt).' }
      ]
    },
    {
      id: 'banking',
      title: 'Banks and money transfers',
      content: [
        { kind: 'checklist', items: [
          'Belarusbank / BPS-Sber / etc. — cards do not work in Portugal (since 2022)',
          'Belgazprombank — works partially',
          'Opening an account in Portugal: ActivoBank, Millennium — accept Belarusians',
          'Money transfers: Wise / Revolut / crypto via the CIS',
          'Cash across the border: up to €10,000 without declaration',
          'EU sanctions concern political figures and a list of companies — they do not affect ordinary citizens'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Belarusian community in Portugal',
      content: [
        { kind: 'checklist', items: [
          'Belarusian Diaspora Association in Lisbon',
          'Chats for Belarusian emigrants (Telegram)',
          'Belarusian religious communities — in Lisbon and Porto',
          'Consular section: the Belarusian embassy in Paris or Warsaw serves Portugal (the Madrid embassy was closed by the Belarusian side in 2023)',
          'Check news relevant to current consular options through the Ministry of Foreign Affairs of Belarus'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          'Book an appointment at the Portuguese consulate in Warsaw 3 months in advance',
          'Translate all documents in advance — not at the last moment',
          'If you have an EU passport (Poland, Lithuania) — use it instead of your Belarusian one',
          'Open an account in Portugal in the first week — it is difficult without one',
          'For children: Portuguese school + the PLNM programme for those whose native language is not Portuguese',
          'Do not use Wise/Revolut accounts as “proof of funds” for D7 — the consulate prefers a bank with a traditional licence (EU, Belarus, another country with banking supervision), not a neobank'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portuguese Embassy in Warsaw', url: 'https://varsovia.embaixadaportugal.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — application procedure', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — services for third-country nationals', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
