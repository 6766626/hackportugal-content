export default {
  editorialVoice: 'hackportugal',
  id: 'siga-app-ticket-trick',
  categoryId: 'digital_gov',
  title: 'SigaApp + ePortugal: how to take a ticket correctly at a Loja de Cidadão',
  tldr: 'SigaApp is the official way to take an electronic ticket for many Loja de Cidadão and Espaço Cidadão locations before you arrive, instead of standing at the machine. Practical 2026 trick: open ePortugal/Siga, check queues at several nearby Lojas and take a senha about 20–30 minutes before arrival. Remote tickets usually have a 30-minute window/delay, but if you are called and do not appear, the ticket is lost. Not all services are available without an appointment: AIMA, IRN, Finanças and Segurança Social often have separate rules.',
  tags: ['siga', 'eportugal', 'loja', 'ticket'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-solves',
      title: 'What SigaApp solves',
      content: [
        { kind: 'paragraph', text: 'A Loja de Cidadão is a shared hall with different services: IRN, Finanças, Segurança Social, Espaço Cidadão, sometimes IMT, IEFP, EDP, telecoms and municipal balcões. Their queues are different: a short queue to enter the building does not mean a short queue for the service you need.' },
        { kind: 'paragraph', text: 'SigaApp and the ePortugal portal show atendimento presencial, available serviços, current senhas and sometimes let you take a talão/senha remotely. The main benefit is not arriving blindly: you can compare several Lojas in the city and choose the one where the real queue is shorter.' },
        { kind: 'warning', text: 'SigaApp does not replace an appointment if the specific service only accepts people by agendamento. Be especially careful with AIMA, IRN, Finanças and Segurança Social: some procedures are by appointment, some are by walk-in queue, and the rules differ by balcão.' }
      ]
    },
    {
      id: 'install-and-setup',
      title: 'Preparation: app, language, geolocation',
      content: [
        { kind: 'checklist', items: [
          'Install SigaApp from the App Store / Google Play in advance, not at the Loja door.',
          'Enable geolocalização: the app looks for the nearest pontos de atendimento.',
          'Check ePortugal.gov.pt: it has pages for Lojas de Cidadão, addresses, opening hours and available services.',
          'Keep your NIF, process number or document to hand — some services require details before issuing a ticket.',
          'If you have CMD or Cartão de Cidadão, they are useful for ePortugal, but they are often not required for a normal ticket in SigaApp.',
          'Find 2–3 alternative Loja de Cidadão locations within a 20–40 minute radius in advance: the queue can change sharply.',
          'Check the horário: many balcões stop issuing new tickets before the building’s official closing time.'
        ] }
      ]
    },
    {
      id: 'thirty-minute-trick',
      title: 'The 30-minute trick: take a ticket before you arrive',
      content: [
        { kind: 'paragraph', text: 'In practice: do not wait until you are at the machine. 20–30 minutes before arrival, open SigaApp, choose the Loja de Cidadão, the service you need and the type of atendimento, then take a senha. This lets you “join the queue” while still on the way.' },
        { kind: 'paragraph', text: 'Remote talões often use a 30-minute logic: the system may take into account that a person needs time to get there, or show a window when you should go to the counter. So taking a ticket 2 hours in advance is risky: the queue may move faster, you may be called, and the senha will be lost.' },
        { kind: 'checklist', items: [
          'If you are 5 minutes from the Loja, first check the queue speed; do not take a ticket too early.',
          'If you are 20–30 minutes from the Loja, this is usually the ideal window for a pre-pull.',
          'If the queue is moving very quickly, it is better to take a ticket closer to the location.',
          'If the queue is not moving, you can take it earlier, but watch the screen in the app.',
          'Take a screenshot of the senha number in case of internet problems.',
          'After arrival, immediately find the chamada screens and the correct zone/serviço.',
          'If your number has already passed, go to the balcão only to ask politely; in most cases you need to take a new ticket.'
        ] },
        { kind: 'warning', text: 'Do not take several tickets “just in case” for different services if you cannot physically get to them in time. This makes the queue worse for others and often ends with all the senhas expiring.' }
      ]
    },
    {
      id: 'choose-by-live-queue',
      title: 'How to choose a Loja by the real queue',
      content: [
        { kind: 'paragraph', text: 'Official ePortugal pages give addresses and a list of services, but it is better to make the decision using SigaApp: check the current senhas, approximate queue movement and availability of a remote ticket.' },
        { kind: 'checklist', items: [
          'Choose the service first, not the building: for example, “Finanças”, “Segurança Social”, “Cartão de Cidadão”, “Espaço Cidadão”.',
          'Compare 2–3 Lojas: the nearest is not always the fastest.',
          'Look not only at the number of people waiting, but also at the speed of chamada: if 1 number was called in 10 minutes, the queue is heavy.',
          'Check whether there are separate queues: informação, entrega, levantamento, atendimento geral may move differently.',
          'Morning is not always better: in large Lojas the peak can be immediately after opening.',
          'Before lunch and 60–90 minutes before closing, the risk is higher: the issuing of talões may be limited.',
          'Small Espaço Cidadão locations offer fewer services, but for simple procedures the queue is often shorter.'
        ] }
      ]
    },
    {
      id: 'at-the-location',
      title: 'On site: what to do after you arrive',
      content: [
        { kind: 'substeps', items: [
          { id: 'find-screen', title: '1. Find the call screen', content: [
            { kind: 'paragraph', text: 'In a Loja de Cidadão there are usually several screens and zones. Make sure you are watching the screen for your service, not the neighbouring balcão.' }
          ] },
          { id: 'watch-number', title: '2. Watch the senha', content: [
            { kind: 'paragraph', text: 'The number in the app and the number on the screen must match. Sometimes the letter before the number is more important than the number itself: A123 and F123 are different queues.' }
          ] },
          { id: 'documents-ready', title: '3. Prepare documents before you are called', content: [
            { kind: 'checklist', items: [
              'Passport or Cartão de Cidadão / residence permit, if you have one.',
              'NIF, if the procedure is connected with Finanças, contracts, address or taxes.',
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
        { kind: 'paragraph', text: 'SigaApp is a queue tool, not a guarantee of service. If your matter requires a prior appointment, the staff member is absent, the daily slots have run out or the specific service’s system is down, an electronic senha will not help.' },
        { kind: 'checklist', items: [
          'AIMA: most immigration processes depend on agendamento and AIMA notifications, not on the normal Loja queue.',
          'IRN: Cartão de Cidadão, passport, nationality, registos and Conservatória may have different queues and limits.',
          'Finanças: many procedures are faster via Portal das Finanças or e-balcão than travelling to a Loja.',
          'Segurança Social: some matters are available through Segurança Social Direta; in-person attendance may require a password/appointment.',
          'SNS/utente is usually handled at a Centro de Saúde, not in a Loja de Cidadão.',
          'If the app does not show a remote talão for the service you need, it means that for this balcão you currently need to take a senha on site or book separately.'
        ] },
        { kind: 'warning', text: 'Always check the specific Loja page on ePortugal on the day of your visit: hours, available serviços and restrictions change more often than the signs in the building.' }
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
      title: 'ePortugal: official public services portal',
      url: 'https://eportugal.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
