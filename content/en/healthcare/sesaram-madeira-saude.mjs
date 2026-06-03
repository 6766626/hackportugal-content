export default {
  editorialVoice: 'hackportugal',
  id: 'sesaram-madeira-saude',
  categoryId: 'healthcare',
  title: 'Healthcare in Madeira and the Azores: SESARAM, SRS and differences from the SNS',
  tldr: 'Madeira and Açores are autonomous regions: instead of the mainland SNS, in practice the regional systems SESARAM (Madeira) and SRS-Açores operate. To live on the islands, you need to register with the local Centro de Saúde/Unidade de Saúde using your NIF, residence document and address. The utente number may be linked to the national RNU, but routing, family doctor, referrals, tests, hospitals and medical transport are managed by the region. Emergency help is 112, but planned treatment from the mainland does not transfer automatically.',
  tags: ['sesaram', 'açores', 'sns', 'utente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-different',
      title: 'The main difference: this is not the mainland SNS',
      content: [
        { kind: 'paragraph', text: 'In mainland Portugal, healthcare is run by the SNS through ACES/ULS, hospitais and Centros de Saúde. In Madeira, the Serviço de Saúde da Região Autónoma da Madeira operates, in practice through SESARAM, EPERAM. In Açores, it is the Serviço Regional de Saúde dos Açores, with Unidade de Saúde de Ilha and regional hospitals.' },
        { kind: 'paragraph', text: 'For the patient, it looks like this: you have not simply “moved within the SNS”. You need to register with the local system, be attached to a Centro de Saúde/Unidade de Saúde, update your address and gain access to the regional referral network.' },
        { kind: 'checklist', items: [
          'Madeira: SESARAM brings together hospitals, Centros de Saúde and part of specialist care.',
          'Açores: SRS-Açores works island by island; primary care is through Unidade de Saúde de Ilha.',
          'The utente number may remain the national identifier, but local registration is still needed.',
          'Having a family doctor on the mainland does not mean an automatic family doctor in Madeira or Açores.',
          'Referrals for tests, consultations and surgery usually have to go through local primary care.',
          'Private clinics exist, but the choice is narrower than in Lisboa/Porto; on small islands it is minimal.',
          'If a service is not available on the island, the region organises the referral and sometimes medical transport.'
        ] }
      ]
    },
    {
      id: 'register-as-resident',
      title: 'How to register after moving',
      content: [
        { kind: 'paragraph', text: 'After moving, do not wait until you are ill: go to the local Centro de Saúde in Madeira or Unidade de Saúde de Ilha in Açores. The aim is to update your address, confirm your right of access to the regional system and get onto the list for a family doctor or primary care team.' },
        { kind: 'checklist', items: [
          'Passport or Cartão de Cidadão / residence permit / certificado de registo de cidadão da UE.',
          'NIF.',
          'Número de utente, if one has already been issued on the mainland.',
          'Proof of address: rental contract, utility bill or atestado de residência from the Junta de Freguesia.',
          'NISS, if you have one; it is usually useful, but should not be a universal barrier to access to the SNS/SRS.',
          'Contacts: Portuguese phone number and e-mail.',
          'List of chronic diagnoses, medicines and recent exames/relatórios from your previous clinic.',
          'For children — boletim de vacinas / vaccination record.'
        ] },
        { kind: 'warning', text: 'Do not assume that an old referral from the mainland will automatically work on the islands. Often a doctor in Madeira/Açores has to enter the pedido again in the regional system or confirm the clinical need.' }
      ]
    },
    {
      id: 'madeira-sesaram',
      title: 'Madeira: how SESARAM works',
      content: [
        { kind: 'paragraph', text: 'SESARAM is the main operator of public healthcare in Madeira. It covers primary care, hospital care, urgência, specialist consultations and part of diagnostics. The central workload is in Funchal, so residents of other municipalities sometimes have to travel to the regional capital.' },
        { kind: 'checklist', items: [
          'For routine matters, go to your Centro de Saúde rather than straight to urgência.',
          'In an emergency, call 112 or go to the serviço de urgência.',
          'Planned consultas de especialidade usually require a referral from a médico de família/primary care doctor.',
          'If you live in Câmara de Lobos, Machico, Ribeira Brava, Calheta, Santana or Porto Santo, check which Centro de Saúde is responsible for your address.',
          'Porto Santo has a limited network: some specialities require travel to Madeira.',
          'It is better to carry prescriptions and exames with you on paper/PDF: data exchange with the mainland is not always seamless.',
          'For private healthcare in Madeira, the choice is better in Funchal; outside Funchal it is limited.'
        ] },
        { kind: 'paragraph', text: 'Practical hack: when registering, ask for a printout or confirmation of your número de utente/inscrição. It will be useful at the pharmacy, at a private clinic, when booking exames and if you need to explain your status after a recent move.' }
      ]
    },
    {
      id: 'azores-srs',
      title: 'Açores: SRS-Açores and island logistics',
      content: [
        { kind: 'paragraph', text: 'In Açores, healthcare is spread across 9 islands. The primary entry point is Unidade de Saúde de Ilha. The hospital network is concentrated around three hospitals: Hospital do Divino Espírito Santo de Ponta Delgada on São Miguel, Hospital de Santo Espírito da Ilha Terceira and Hospital da Horta on Faial.' },
        { kind: 'checklist', items: [
          'On São Miguel and Terceira, access to specialists is broader than on the smaller islands.',
          'On Santa Maria, Graciosa, São Jorge, Pico, Flores and Corvo, part of the care requires an inter-island referral.',
          'Planned trips for consultations/surgery are arranged through SRS-Açores, not directly through the mainland SNS.',
          'Weather delays are a real factor: keep a medicine reserve for at least 2–4 weeks.',
          'If you have a chronic condition, ask in advance where the nearest specialist is and how deslocação is arranged.',
          'For pregnancy, oncology, dialysis, cardiology and complex diagnostics, clarify the route before moving to a small island.',
          'Private insurance is useful, but it does not replace SRS: on smaller islands, there may simply be no private doctor in the required speciality.'
        ] },
        { kind: 'warning', text: 'In Açores, distance is measured not in kilometres but in flights and weather. If you are choosing an island to live on with a serious diagnosis, first check the actual availability of the care you need, not just the presence of attractive rentals.' }
      ]
    },
    {
      id: 'moving-from-mainland',
      title: 'If you are moving from the mainland or between islands',
      content: [
        { kind: 'paragraph', text: 'Before moving, put together a medical folder. Portuguese systems are increasingly digital, but exchange between the mainland, Madeira and Açores may be incomplete. A doctor in the new location will make a decision faster if you have the documents in hand.' },
        { kind: 'checklist', items: [
          'Ask your old médico de família for a resumo clínico.',
          'Download recent blood tests, exames de imagem, discharge summaries and surgical reports.',
          'Check active receitas sem papel and their expiry dates.',
          'Take a list of medicines with dosages in Portuguese or English.',
          'If you are waiting for a consultation/surgery on the mainland, check whether your place in the queue will be kept after changing region.',
          'After changing address, update your details in Finanças and at the Centro de Saúde/Unidade de Saúde.',
          'If you have private insurance, check the provider network specifically in Madeira/Açores, not “Portugal” as a whole.'
        ] },
        { kind: 'paragraph', text: 'For a tourist or short trip, emergency help is available via 112. But for resident life — family doctor, chronic prescriptions, referrals and child follow-up — local registration is needed.' }
      ]
    },
    {
      id: 'private-and-emergency',
      title: 'Private healthcare and emergencies',
      content: [
        { kind: 'paragraph', text: 'Private healthcare on the islands covers some fast consultations, dentistry, physiotherapy, dermatologia, ginecologia and basic diagnostics. But it does not always cover complex hospital care, intensive care, high-risk births or rare specialities.' },
        { kind: 'checklist', items: [
          'Emergency: 112.',
          'Medical consultation by phone: SNS 24 — 808 24 24 24; the operator may direct you to urgência or to a doctor.',
          'For mild cases, first call SNS 24 or go to primary care: this reduces the risk of unnecessary waiting in urgência.',
          'In Madeira, the main public urgência is concentrated in SESARAM.',
          'In Açores, the route depends on the island: Unidade de Saúde de Ilha, hospital or evacuação.',
          'Insurance from Médis, Multicare, AdvanceCare, Allianz and others is useful, but check specific clinics in Funchal/Ponta Delgada/Angra/Horta.',
          'If the doctor talks about deslocação, ask for it in writing: referral, date, place, who pays for transport and whether autorização prévia is needed.'
        ] },
        { kind: 'warning', text: 'Do not postpone registration until the first attack. You will be seen in urgência, but chronic prescriptions, a family doctor and referrals without local inscrição become a quest.' }
      ]
    }
  ],
  costs: [
    { label: 'Registration at Centro de Saúde / Unidade de Saúde', amountEUR: 0, note: 'Public resident registration is usually free; you may be asked for address and status documents.' },
    { label: 'Basic private insurance', amountEURMin: 25, amountEURMax: 80, note: 'Monthly guide price for an adult; check the network in Madeira/Açores before buying.' },
    { label: 'Private consultation without insurance', amountEURMin: 50, amountEURMax: 100, note: 'Typical price range; narrow specialists and urgent appointments may cost more.' }
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
      title: 'Government of Açores — Direção Regional da Saúde',
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
      title: 'ITIJ — overview of the healthcare system in Portugal and Madeira',
      url: 'https://www.itij.com/latest/long-read/destination-spotlight-review-portugal-and-madeiras-healthcare-system',
      kind: 'news',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
