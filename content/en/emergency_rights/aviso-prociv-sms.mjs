export default {
  editorialVoice: 'hackportugal',
  id: 'aviso-prociv-sms',
  categoryId: 'emergency_rights',
  title: 'AvisoPROCIV: ANEPC SMS alerts for fires and heat',
  tldr: 'AvisoPROCIV is free SMS from ANEPC/Proteção Civil in the event of a real threat: risco extremo de incêndio, an incêndio rural nearby, vaga de calor, floods, storm. No subscription is needed: the message is sent via mobile operators through antennas in the risk area, and usually also reaches foreign SIM cards in roaming. The SMS states the area, the risk and what to do. In a fire, prepare for evacuation and call 112; in heat — water, shade, SNS 24: 808 24 24 24.',
  tags: ['prociv', 'sms', 'fires', 'heat'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What AvisoPROCIV is',
      content: [
        { kind: 'paragraph', text: 'AvisoPROCIV is the official warning channel of the Autoridade Nacional de Emergência e Proteção Civil (ANEPC). It is not a marketing mailing list or an app: when there is a threat, ANEPC sends a short SMS through mobile operators to people located in the affected geographical area.' },
        { kind: 'paragraph', text: 'Typical topics: risco de incêndio rural, active incêndio near a settlement, vaga de calor, heavy rain, wind, floods, rough seas, need for confinement or evacuation. The message usually starts with AVISO PROCIV / AvisoPROCIV and contains a short instruction in Portuguese.' },
        { kind: 'checklist', items: [
          'You do not need to register: ANEPC does not ask for NIF, NISS, e-mail or address.',
          'You do not need to pay: the SMS is free for the recipient.',
          'The message arrives based on the geolocation of the mobile network, not on your registered address or address in Finanças.',
          'If you are a tourist or have recently moved, but your phone is connected to the Portuguese network, you may receive a warning.',
          'If the phone is switched off, in airplane mode or without network coverage, the warning may not arrive in time.',
          'If you have a foreign SIM in roaming, delivery is usually possible through the local operator, but do not rely on it as your only source of information.'
        ] }
      ]
    },
    {
      id: 'how-to-read',
      title: 'How to read the SMS: levels and meaning',
      content: [
        { kind: 'paragraph', text: 'In Portugal, two different risk vocabularies often appear in public warnings. IPMA uses weather warnings amarelo / laranja / vermelho. For rural fires, perigo de incêndio rural is used: reduzido, moderado, elevado, muito elevado, máximo. In everyday news and SMS you will also see wording such as risco elevado, muito elevado or extremo.' },
        { kind: 'checklist', items: [
          'Amarelo — be alert: the weather may disrupt plans, but usually without widespread restrictions.',
          'Laranja — a dangerous situation: avoid unnecessary journeys, follow PROCIV, Câmara Municipal and IPMA.',
          'Vermelho — exceptional danger: traffic restrictions, evacuations, closure of forest areas, power and communications outages are possible.',
          'Risco elevado de incêndio — do not use fire outdoors, check your route and keep your phone charged.',
          'Risco muito elevado / máximo / extremo — assume that a spark can become a fire; cancel hikes, barbecues, agricultural work with sparks.',
          'Vaga de calor — several days of abnormal heat; especially dangerous for children, older people, pregnant people, and people with cardiovascular and respiratory conditions.',
          'Evacuar / evacuação — leave by the indicated route, do not go back for belongings.',
          'Confinar-se — stay inside the building, close windows/doors, turn off ventilation if there is smoke outside.'
        ] },
        { kind: 'warning', text: 'Do not wait for a second message. AvisoPROCIV is a short warning, not a support chat. If you see smoke, fire, people in danger or heatstroke — call 112.' }
      ]
    },
    {
      id: 'fire-actions',
      title: 'During risco extremo de incêndio or a nearby fire 🔥',
      content: [
        { kind: 'paragraph', text: 'In summer and during dry periods, municipalities may close forest areas, miradouros, trails and prohibit work that creates sparks. Even if you do not know the local rules, the basic logic is simple: do not create fire, do not drive into the forest unless necessary, keep an escape route.' },
        { kind: 'checklist', items: [
          'Do not light campfires, do not have a churrasco in nature, do not use foguetes or pyrotechnics.',
          'Do not throw cigarette ends from a car or onto the ground; in hot weather this is a real fire source.',
          'Do not use an angle grinder, welding equipment, a brushcutter with a metal blade or other tools that create sparks in dry vegetation.',
          'If you live in a house near a forest: clear dry grass, leaves, firewood and gas cylinders away from walls and the terrace.',
          'Keep documents, medicines, water, a charger, power bank, keys and a pet carrier in one place.',
          'Park the car facing the exit, windows closed, fuel tank not empty.',
          'If smoke is approaching: close windows, doors, shutters; remove flammable items from the balcony.',
          'If the authorities say evacuar — leave immediately. Do not film the fire from the road and do not block Bombeiros.',
          'If you are in a car in smoke: turn on the headlights, close the windows, set ventilation to recirculação, move slowly towards an open area, do not stop under trees.',
          'Report a fire on 112: location, landmarks, direction of smoke/fire, whether there are houses or people nearby.'
        ] },
        { kind: 'warning', text: 'On days of perigo máximo / risco extremo, many fires spread faster than a person can assess the situation. If you are in a rural area and are unsure whether to leave or not, choose an early departure.' }
      ]
    },
    {
      id: 'heat-actions',
      title: 'During vaga de calor and heat warnings 🌡️',
      content: [
        { kind: 'paragraph', text: 'SNS and Direção-Geral da Saúde recommend reducing heat stress, drinking water before you feel thirsty and protecting vulnerable people when temperatures rise. In Portugal, heat is often more dangerous in the evening and at night: flats without air conditioning do not have time to cool down.' },
        { kind: 'checklist', items: [
          'Drink water regularly; do not replace it with alcohol, sugary drinks or large amounts of coffee.',
          'Avoid sun and physical exertion during the hottest hours, especially roughly from 11:00 to 17:00.',
          'Wear light loose clothing, a hat/Panama hat and sunglasses.',
          'Use SPF 30+ cream and reapply it, especially by the sea and pool.',
          'Keep the home cool: close shutters and curtains during the day, ventilate at night and in the morning.',
          'Do not leave children, older people or animals in the car even for a few minutes.',
          'Check on older neighbours and relatives, especially if they live alone.',
          'Watch for symptoms: severe weakness, confusion, body temperature, dry hot skin, dizziness, vomiting.',
          'If in doubt about health, call SNS 24: 808 24 24 24; in case of loss of consciousness, seizures, severe shortness of breath — 112.'
        ] },
        { kind: 'warning', text: 'Heatstroke is an emergency. Move the person into shade/coolness, cool them with water and wet cloths, do not give alcohol, call 112.' }
      ]
    },
    {
      id: 'setup-and-backup',
      title: 'How not to miss a warning',
      content: [
        { kind: 'paragraph', text: 'AvisoPROCIV does not require installation, but the phone must be ready to receive SMS. For an expat this is especially important when travelling in inland areas, where fire risk is higher and English-language infrastructure is weaker.' },
        { kind: 'checklist', items: [
          'Keep SMS and the mobile network switched on; do not completely block unknown senders.',
          'Keep your phone charged in summer and when travelling; a power bank is cheap insurance.',
          'If you live in a forest area, also subscribe to notifications from Câmara Municipal, Junta de Freguesia, IPMA and ANEPC on social media.',
          'Save the numbers: 112 — emergency, SNS 24 — 808 24 24 24, local GNR/PSP — for non-emergency situations.',
          'Check the map and warnings on prociv.gov.pt and ipma.pt before hikes, trips to the interior and on hot days.',
          'If the SMS in Portuguese is not clear, translate it immediately, but first follow the obvious commands: evacuar, evitar deslocações, confinar-se, ligar 112.',
          'Do not forward unverified screenshots to chats as fact; check against ANEPC, Município or IPMA.'
        ] },
        { kind: 'warning', text: 'Fraudsters may imitate government messages. A genuine PROCIV warning does not ask for payment, bank details, an MB WAY code, NIF password or login via a Finanças link.' }
      ]
    }
  ],
  sources: [
    {
      title: 'ANEPC: Aviso à população and the AvisoPROCIV warning system',
      url: 'https://prociv.gov.pt/pt/prevencao-e-preparacao/monitorizacao-alerta-e-aviso/aviso/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS: recommendations during rising temperatures and heat',
      url: 'https://www.sns.min-saude.pt/comunicado-conjunto-aumento-da-temperatura-recomendacoes-contra-o-calor/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANEPC: Proteção Civil portal for warnings and up-to-date information',
      url: 'https://prociv.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: contact line 808 24 24 24',
      url: 'https://www.sns24.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
