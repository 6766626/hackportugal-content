export default {
  editorialVoice: 'hackportugal',
  id: 'siga-app-ticket-trick',
  categoryId: 'digital_gov',
  title: 'SigaApp + ePortugal: how to take the right ticket at a Loja de Cidadão',
  tldr: 'SigaApp is the official way to take an electronic ticket for many Loja de Cidadão and Espaço Cidadão locations before you arrive, instead of standing at the machine. Practical 2026 trick: open ePortugal/Siga, check the queues across several nearby Lojas and take a senha about 20–30 minutes before arrival. A ticket is just a place in a live queue: if you are called and you are not there, it is lost. The only hard timing rule is that you must wait 30 minutes between taking two tickets on the same phone number or e-mail. Not all services are available without an appointment: AIMA, IRN, Finanças and Segurança Social often have separate rules.',
  tags: ['siga', 'eportugal', 'loja', 'ticket'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-solves',
      title: 'What SigaApp solves',
      content: [
        { kind: 'paragraph', text: 'A Loja de Cidadão is a shared hall with different services: IRN, Finanças, Segurança Social, Espaço Cidadão, sometimes IMT, IEFP, EDP, telecoms and municipal balcões. Their queues are different: a short queue to enter the building does not mean a short queue for the service you need.' },
        { kind: 'paragraph', text: 'SigaApp and the ePortugal portal show atendimento presencial, available serviços, current senhas and sometimes allow you to take a talão/senha remotely. The main benefit is not arriving blind: you can compare several Lojas in the city and choose the one where the real queue is shorter.' },
        { kind: 'warning', text: 'SigaApp does not replace an appointment if the specific service only accepts people by agendamento. Be especially careful with AIMA, IRN, Finanças and Segurança Social: some operations are by appointment, some are by walk-in queue, and the rules differ by balcão.' }
      ]
    },
    {
      id: 'install-and-setup',
      title: 'Preparation: app, language, geolocation',
      content: [
        { kind: 'checklist', items: [
          'Install SigaApp from the App Store / Google Play in advance, not at the Loja door.',
          'Enable geolocalização: the app looks for nearby pontos de atendimento.',
          'Check ePortugal.gov.pt: it has pages for Lojas de Cidadão, addresses, opening hours and available services.',
          'Keep your NIF, process number or document to hand — some services require details before issuing a ticket.',
          'If you have CMD or Cartão de Cidadão, they are useful for ePortugal, but they are often not required for an ordinary ticket in SigaApp.',
          'Find 2–3 alternative Loja de Cidadão locations within 20–40 minutes in advance: the queue can change sharply.',
          'Check the horário: many balcões stop issuing new tickets before the building’s official closing time.'
        ] }
      ]
    },
    {
      id: 'thirty-minute-trick',
      title: 'The 30-minute trick: take a ticket before you arrive',
      content: [
        { kind: 'paragraph', text: 'In practice: do not wait until you are at the machine. 20–30 minutes before arrival, open SigaApp, choose the Loja de Cidadão, the required service and the type of atendimento, then take a senha. This lets you “join the queue” while you are still on the way.' },
        { kind: 'paragraph', text: 'Bear in mind: a remote ticket does not give you a separate “travel window”. It is an ordinary place in a live queue — the queue moves at its own pace and does not wait for you to arrive. So taking a ticket 2 hours in advance is risky: the queue may move faster, you may be called, and the senha will be lost. The only hard timing rule is that you must wait 30 minutes between taking two tickets on the same phone number or e-mail.' },
        { kind: 'checklist', items: [
          'If the Loja is 5 minutes away — first check the queue speed; do not take a ticket too early.',
          'If the Loja is 20–30 minutes away — this is usually the ideal window for a pre-pull.',
          'If the queue is moving very quickly — it is better to take a ticket closer to the location.',
          'If the queue is not moving — you can take it earlier, but keep watching the screen in the app.',
          'Take a screenshot of the senha number in case of internet problems.',
          'After arriving, immediately find the chamada screens and the correct zone/serviço.',
          'If your number has already passed — go to the balcão only to ask politely; most often you will need to take a new ticket.'
        ] },
        { kind: 'warning', text: 'Do not take several tickets “just in case” for different services if you will not be able to physically get there in time. It spoils the queue for others and often ends with all senhas being lost.' }
      ]
    },
    {
      id: 'choose-by-live-queue',
      title: 'How to choose a Loja by the real queue',
      content: [
        { kind: 'paragraph', text: 'The official ePortugal pages provide addresses and a list of services, but it is better to make the decision using SigaApp: look at the current senhas, the approximate queue movement and the availability of a remote ticket.' },
        { kind: 'checklist', items: [
          'Choose the service first, not the building: for example, “Finanças”, “Segurança Social”, “Cartão de Cidadão”, “Espaço Cidadão”.',
          'Compare 2–3 Lojas: the nearest is not always the fastest.',
          'Look not only at the number waiting, but also at the chamada speed: if 1 number has been called in 10 minutes, the queue is heavy.',
          'Check whether there are separate queues: informação, entrega, levantamento, atendimento geral can move at different speeds.',
          'Morning is not always better: in large Lojas, the peak can be immediately after opening.',
          'Before lunch and 60–90 minutes before closing, the risk is higher: issuing talões may be limited.',
          'Smaller Espaço Cidadão locations have fewer services, but for simple operations the queue is often shorter.'
        ] }
      ]
    },
    {
      id: 'at-the-location',
      title: 'On site: what to do after arrival',
      content: [
        { kind: 'substeps', items: [
          { id: 'find-screen', title: '1. Find the call screen', content: [
            { kind: 'paragraph', text: 'In a Loja de Cidadão there are usually several screens and zones. Make sure you are looking at the screen for your service, not the neighbouring balcão.' }
          ] },
          { id: 'watch-number', title: '2. Watch your senha', content: [
            { kind: 'paragraph', text: 'The number in the app and the number on the screen must match. Sometimes the letter before the number is more important than the number itself: A123 and F123 are different queues.' }
          ] },
          { id: 'documents-ready', title: '3. Prepare documents before you are called', content: [
            { kind: 'checklist', items: [
              'Passport or Cartão de Cidadão / residence permit, if you have one.',
              'NIF, if the operation is related to Finanças, contracts, address or taxes.',
              'NISS, if you are going to Segurança Social.',
              'Comprovativo de morada: rental contract, bill, atestado de residência — depending on the situation.',
              'Appointment/agendamento number, if there was one.',
              'PDFs or printouts: not all balcões accept documents only “on the phone”.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'when-it-will-not-work',
      title: 'When SigaApp will not save you',
      content: [
        { kind: 'paragraph', text: 'SigaApp is a queue tool, not a guarantee of service. If your issue requires a prior appointment, a staff member is absent, the daily slots have run out or the specific service’s system is down, an electronic senha will not help.' },
        { kind: 'checklist', items: [
          'AIMA: most immigration processes depend on agendamento and AIMA notifications, not on the ordinary Loja queue.',
          'IRN: Cartão de Cidadão, passport, citizenship, registos and Conservatória can have different queues and limits.',
          'Finanças: many operations are faster via Portal das Finanças or e-balcão than by travelling to a Loja.',
          'Segurança Social: some issues are available through Segurança Social Direta; presencial may require a password/appointment.',
          'SNS/utente is usually handled at a Centro de Saúde, not at a Loja de Cidadão.',
          'If the app does not show a remote talão for the service you need, it means that for this balcão right now you need to take a senha on site or book separately.'
        ] },
        { kind: 'warning', text: 'Always check the specific Loja page on ePortugal on the day of your visit: opening hours, available serviços and restrictions change more often than the signs in the building.' }
      ]
    }
  ],
  sources: [
    {
      title: 'ePortugal: access to public services and atendimento nas Lojas de Cidadão',
      url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nas-lojas-de-cidadao',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal: official portal for public services',
      url: 'https://www.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
