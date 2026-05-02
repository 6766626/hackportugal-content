export default {
  editorialVoice: 'hackportugal',
  id: 'pharmacies',
  categoryId: 'healthcare',
  title: 'Pharmacies in Portugal — Farmácia and Parafarmácia',
  tldr: 'Farmácia (green cross) sells prescription and over-the-counter medicines, with pharmacist advice available. Parafarmácia sells only over-the-counter products and skincare/cosmetics. With a NIF — an SNS discount of 37–90% on prescription medicines. Farmácia de serviço is the night-duty pharmacy, open 24/7 in the area.',
  tags: ['pharmacy', 'farmácia', 'prescription', 'sns'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'types',
      title: 'Farmácia vs Parafarmácia',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Farmácia (full pharmacy)', content: [
            { kind: 'paragraph', text: 'Green cross on the sign. INFARMED licence. Prescription medicines are sold only here. The pharmacist gives advice free of charge. Usually open 9:00–19:30 + Saturday until 13:00.' }
          ]},
          { id: 't2', title: 'Parafarmácia (parapharmacy)', content: [
            { kind: 'paragraph', text: 'In supermarkets or standalone. Only over-the-counter products: vitamins, skincare/cosmetics, some non-prescription medicines (ibuprofen, cough syrup). Prices are 10–20% lower than in a Farmácia. Auchan Bem-Estar, Celeiro and Wells are very popular.' }
          ]}
        ]}
      ]
    },
    {
      id: 'prescription',
      title: 'Prescription (receita médica)',
      content: [
        { kind: 'paragraph', text: 'You get a prescription from a doctor (SNS or private). Electronic — an SMS arrives with a code and password. Paper — if issued by a private doctor without connection to the SNS.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'At the pharmacy', content: [
            { kind: 'paragraph', text: 'Show the prescription code (SMS) + passport/Cartão de Cidadão. The pharmacist sees the prescription in the system. Payment with an SNS discount (10–90% depending on the medicine).' }
          ]},
          { id: 'p2', title: 'SNS discounts', content: [
            { kind: 'checklist', items: [
              'Escalão A (life-saving) — 90% discount',
              'Escalão B (necessary) — 69% discount',
              'Escalão C (important) — 37% discount',
              'Escalão D (supplementary) — 15% discount',
              'Pensioners on low incomes receive an additional discount',
              'Children under 12 — additional discounts'
            ]}
          ]},
          { id: 'p3', title: 'Without a prescription', content: [
            { kind: 'paragraph', text: 'Many medicines are sold freely without a prescription. But antibiotics, sleeping pills and strong painkillers are prescription-only, unlike in some countries.' }
          ]}
        ]}
      ]
    },
    {
      id: 'night',
      title: 'Night / duty pharmacy',
      content: [
        { kind: 'paragraph', text: 'Farmácia de Serviço — every night in each area, one pharmacy is on duty 24/7. The list is on the door of any Farmácia or on the INFARMED website.' },
        { kind: 'checklist', items: [
          '📍 farmacias.pt — website with a list of duty pharmacies by postcode',
          '📞 112 in an emergency — they will tell you the nearest one',
          '💊 After 22:00, call via the video intercom — the pharmacist hands items out through the hatch',
          '💰 At night there is a surcharge of about €2.50 on top'
        ]}
      ]
    },
    {
      id: 'common-meds',
      title: 'Where to buy what',
      content: [
        { kind: 'substeps', items: [
          { id: 'm1', title: 'Headache/runny nose/cold', content: [
            { kind: 'paragraph', text: 'Parafarmácia or Farmácia: Ibuprofeno, Paracetamol (Ben-U-Ron), Bisolvon, Cegripe.' }
          ]},
          { id: 'm2', title: 'Allergy', content: [
            { kind: 'paragraph', text: 'Loratadina, Aerius, Cetirizina — without a prescription in a Farmácia.' }
          ]},
          { id: 'm3', title: 'Antibiotics', content: [
            { kind: 'paragraph', text: 'Prescription-only. Amoxicilina, Azitromicina.' }
          ]},
          { id: 'm4', title: 'Cream/ointment', content: [
            { kind: 'paragraph', text: 'Sun protection and skincare/cosmetics — any Parafarmácia. Avène, La Roche-Posay, Uriage and Nuxe are popular.' }
          ]},
          { id: 'm5', title: 'Contraceptives', content: [
            { kind: 'paragraph', text: 'Condoms — everywhere. Contraceptive pills — prescription-only, but inexpensive with an SNS discount.' }
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'INFARMED — pharmacy regulator', url: 'https://www.infarmed.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Farmácias de Portugal — duty pharmacies', url: 'https://www.farmacias.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Ordem dos Farmacêuticos', url: 'https://www.ordemfarmaceuticos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
