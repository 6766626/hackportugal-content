export default {
  editorialVoice: 'hackportugal',
  id: 'sesaram-madeira-saude',
  categoryId: 'healthcare',
  title: 'Healthcare in Madeira and the Azores: SESARAM, SRS, and differences from the SNS',
  tldr: 'Madeira and the Azores are autonomous regions: instead of the mainland SNS, regional systems SESARAM (Madeira) and SRS-Açores operate in practice. To live on the islands, you need to register with the local Centro de Saúde/Unidade de Saúde with your NIF, residence document and address. The utente number may be linked to the national RNU, but routing, family doctor, referrals, tests, hospitals and medical transport are managed by the region. Emergency care is 112, but planned treatment from the mainland does not transfer automatically.',
  tags: ['sesaram', 'azores', 'sns', 'utente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-different',
      title: 'The key difference: this is not the mainland SNS',
      content: [
        { kind: 'paragraph', text: 'On mainland Portugal, healthcare is run by the SNS through ACES/ULS, hospitals and Centros de Saúde. In Madeira, the Serviço de Saúde da Região Autónoma da Madeira operates, effectively through SESARAM, E.P.E.R.A.M. In the Azores, it is the Serviço Regional de Saúde dos Açores, with the Unidade de Saúde de Ilha and regional hospitals.' },
        { kind: 'paragraph', text: 'For a patient, this means you have not just “moved within the SNS”. You need to sign up in the local system, attach to a Centro de Saúde/Unidade de Saúde, update your address, and gain access to the regional referrals network.' },
        { kind: 'checklist', items: [
          'Madeira: SESARAM integrates hospitals, Centros de Saúde and part of specialist care.',
          'Azores: SRS-Açores is organised by island; primary care is through the Unidade de Saúde de Ilha.',
          'Your utente number may remain a national identifier, but local registration is still required.',
          'A family doctor on the mainland does not automatically mean a family doctor in Madeira or the Azores.',
          'Referrals for tests, consultations and surgeries usually have to go through local primary care.',
          'Private clinics exist, but the choice is narrower than in Lisboa/Porto; on the smaller islands it is minimal.',
          'If a service is not available on the island, the region organises the referral and sometimes medical transport.'
        ] }
      ]
    },
    {
      id: 'register-as-resident',
      title: 'How to register after moving',
      content: [
        { kind: 'paragraph', text: 'After moving, do not wait until you are ill: go to your local Centro de Saúde in Madeira or Unidade de Saúde de Ilha in the Azores. The aim is to update your address, confirm your right of access to the regional system, and be placed on the list for a family doctor or primary care team.' },
        { kind: 'checklist', items: [
          'Passport or Cartão de Cidadão / residence permit / certificado de registo de cidadão da UE.',
          'NIF.',
          'Número de utente, if already issued on the mainland.',
          'Proof of address: tenancy agreement, utility bill or atestado de residência from the Junta de Freguesia.',
          'NISS, if you have it; usually helpful, but should not be a universal barrier to accessing the SNS/SRS.',
          'Contacts: Portuguese phone number and email.',
          'A list of chronic diagnoses, medications, and recent test results/reports from your previous clinic.',
          'For children — boletim de vacinas / vaccination record.'
        ] },
        { kind: 'warning', text: 'Do not assume that an old referral from the mainland will automatically work on the islands. Often a doctor in Madeira/the Azores must submit a new request in the regional system or confirm clinical need.' }
      ]
    },
    {
      id: 'madeira-sesaram',
      title: 'Madeira: how SESARAM works',
      content: [
        { kind: 'paragraph', text: 'SESARAM is the main public healthcare operator in Madeira. It covers primary care, hospital care, urgência, specialist consultations and some diagnostics. The central workload is in Funchal, so residents of other municipalities sometimes need to travel to the regional capital.' },
        { kind: 'checklist', items: [
          'For routine issues, go to your Centro de Saúde, not straight to urgência.',
          'In an emergency, call 112 or go to the serviço de urgência.',
          'Planned consultas de especialidade usually require a referral from your médico de família/primary care doctor.',
          'If you live in Câmara de Lobos, Machico, Ribeira Brava, Calheta, Santana or Porto Santo, check which Centro de Saúde covers your address.',
          'Porto Santo has a limited network: some specialties require travel to Madeira.',
          'It is best to carry prescriptions and test results with you in paper/PDF: data exchange with the mainland is not always seamless.',
          'For private healthcare in Madeira, the choice is better in Funchal; outside Funchal it is limited.'
        ] },
        { kind: 'paragraph', text: 'Practical hack: when registering, ask for a printout or confirmation of your número de utente/inscrição. It will be useful at the pharmacy, in a private clinic, when booking tests, and if you need to explain your status after a recent move.' }
      ]
    },
    {
      id: 'azores-srs',
      title: 'Azores: SRS-Açores and island logistics',
      content: [
        { kind: 'paragraph', text: 'In the Azores, healthcare is distributed across nine islands. The primary entry point is the Unidade de Saúde de Ilha. The hospital network is centred around three hospitals: Hospital do Divino Espírito Santo de Ponta Delgada on São Miguel, Hospital de Santo Espírito da Ilha Terceira and Hospital da Horta on Faial.' },
        { kind: 'checklist', items: [
          'On São Miguel and Terceira, access to specialists is broader than on the smaller islands.',
          'On Santa Maria, Graciosa, São Jorge, Pico, Flores and Corvo, some care requires an inter-island referral.',
          'Planned travel for consultations/surgeries is arranged through SRS-Açores, not directly via the mainland SNS.',
          'Weather delays are a real factor: keep a stock of medicines for at least 2–4 weeks.',
          'If you have a chronic condition, ask in advance where the nearest specialist is and how medical travel (deslocação) is arranged.',
          'For pregnancy, oncology, dialysis, cardiology and complex diagnostics, confirm the pathway before moving to a small island.',
          'Private insurance is useful but does not replace the SRS: on small islands a private doctor of the required specialty may simply not exist.'
        ] },
        { kind: 'warning', text: 'In the Azores, distance is measured not in kilometres but in flights and weather. If you are choosing an island to live with a serious diagnosis, first check the actual availability of the care you need, not just the presence of a beautiful rental.' }
      ]
    },
    {
      id: 'moving-from-mainland',
      title: 'If you are moving from the mainland or between islands',
      content: [
        { kind: 'paragraph', text: 'Before moving, compile a medical folder. Portuguese systems are increasingly digital, but exchange between the mainland, Madeira and the Azores may be incomplete. A doctor in your new location will decide more quickly if you have the documents on hand.' },
        { kind: 'checklist', items: [
          'Ask your previous médico de família for a clinical summary (resumo clínico).',
          'Download your latest lab results, imaging studies, discharge summaries and operative reports.',
          'Check your active receitas sem papel (paperless e-prescriptions) and their validity.',
          'Take a list of medications with dosages in Portuguese or English.',
          'If you are awaiting a consultation/surgery on the mainland, confirm whether your place in the queue will be maintained after changing region.',
          'After changing address, update your details with Finanças and at the Centro de Saúde/Unidade de Saúde.',
          'If you have private insurance, check the network of providers specifically in Madeira/the Azores, not “Portugal” as a whole.'
        ] },
        { kind: 'paragraph', text: 'For a tourist or short trip, emergency care is available via 112. But for resident life — family doctor, chronic prescriptions, referrals and paediatric follow-up — you need local registration.' }
      ]
    },
    {
      id: 'private-and-emergency',
      title: 'Private healthcare and emergencies',
      content: [
        { kind: 'paragraph', text: 'Private healthcare on the islands covers some quick consultations, dentistry, physiotherapy, dermatology, gynaecology and basic diagnostics. But it does not always cover complex hospital care, intensive care, high-risk deliveries or rare specialties.' },
        { kind: 'checklist', items: [
          'Emergency: 112.',
          'Telephone medical advice: SNS 24 — 808 24 24 24; an operator can direct you to urgência or to a doctor.',
          'For minor issues, call SNS 24 first or go to primary care: this reduces the risk of unnecessary waiting in urgência.',
          'In Madeira, the main public urgência is concentrated within SESARAM.',
          'In the Azores, the pathway depends on the island: Unidade de Saúde de Ilha, hospital or evacuation.',
          'Insurance Médis, Multicare, AdvanceCare, Allianz and others is useful, but check the specific clinics in Funchal/Ponta Delgada/Angra/Horta.',
          'If a doctor mentions a deslocação, ask for it in writing: referral, date, place, who pays for transport, and whether prior authorisation is needed.'
        ] },
        { kind: 'warning', text: 'Do not postpone registration until the first episode. You will be seen at urgência, but chronic prescriptions, a family doctor and referrals become a quest without local registration.' }
      ]
    }
  ],
  costs: [
    { label: 'Registration at a Centro de Saúde / Unidade de Saúde', amountEUR: 0, note: 'Public resident registration is usually free; you may be asked for documents for address and status.' },
    { label: 'Basic private insurance', amountEURMin: 25, amountEURMax: 80, note: 'Indicative per month for an adult; check the network in Madeira/the Azores before buying.' },
    { label: 'Private consultation without insurance', amountEURMin: 50, amountEURMax: 100, note: 'Typical price range; subspecialists and urgent appointments may be more expensive.' }
  ],
  sources: [
    {
      title: 'SESARAM Madeira — official portal of the regional health service',
      url: 'https://www.sesaram.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Government of the Azores — Regional Directorate of Health',
      url: 'https://portal.azores.gov.pt/web/drs',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    },
    {
      title: 'ERS — users’ rights and access to healthcare services',
      url: 'https://www.ers.pt/pt/utentes/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ITIJ — overview of the healthcare system of Portugal and Madeira',
      url: 'https://www.itij.com/latest/long-read/destination-spotlight-review-portugal-and-madeiras-healthcare-system',
      kind: 'news',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
