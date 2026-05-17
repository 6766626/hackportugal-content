export default {
  editorialVoice: 'hackportugal',
  id: 'lisboa-wifi-gratis-municipal',
  categoryId: 'telecom',
  title: 'Free Wi-Fi in Lisbon and Porto: Lisboa WiFi Plus',
  tldr: 'Lisbon has the municipal Lisboa WiFi Plus network: 300+ points in CML public spaces — squares, jardins, libraries, markets, Estação Oriente and tourist areas. Porto has Porto WiFi: around 35 hotspots in the centre and municipal locations. Connection usually requires no registration: choose the network, open the captive portal, accept the terms. Sessions are often limited to 60 minutes, after which you can reconnect. For banking, Finanças, AIMA and work logins, use a VPN or mobile internet.',
  tags: ['wifi', 'lisbon', 'porto', 'telecom'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what-it-is',
      title: 'What these networks are',
      content: [
        { kind: 'paragraph', text: 'Lisboa WiFi Plus is the free municipal network of Câmara Municipal de Lisboa. It covers 300+ access points in CML public spaces: squares, jardins, libraries, municipal markets, cultural venues, areas with high tourist traffic and transport hubs such as Estação Oriente.' },
        { kind: 'paragraph', text: 'In Porto, the equivalent city network is called Porto WiFi. According to Câmara Municipal do Porto, around 35 hotspots are available in key public places around the city.' },
        { kind: 'checklist', items: [
          'Price: €0',
          'No SIM card needed',
          'A Portuguese phone number is usually not needed',
          'Account registration is usually not required',
          'Works through a captive portal — a browser login page',
          'A session often lasts up to 60 minutes; after disconnection you can connect again',
          'Speed depends on the location, time of day and number of people',
          'This is public Wi-Fi: do not use it as your main home internet'
        ] }
      ]
    },
    {
      id: 'connect-lisbon',
      title: 'How to connect in Lisbon 📶',
      content: [
        { kind: 'paragraph', text: 'In a coverage area, open the list of Wi-Fi networks on your phone or laptop and choose the Lisboa WiFi Plus network. The name may appear with small variations, but it should clearly refer to Lisboa WiFi.' },
        { kind: 'checklist', items: [
          'Turn on Wi-Fi and choose Lisboa WiFi Plus',
          'Wait for the captive portal to open automatically',
          'If the page does not open — go to any HTTP website, for example neverssl.com',
          'Accept the termos e condições / terms of use',
          'Do not enter your NIF, NISS, bank details or email password — this is not required for normal login',
          'After 60 minutes, if the connection drops, repeat the login through the portal',
          'If the network is “connected without internet”, turn off your VPN while logging in to the captive portal, then turn it back on'
        ] },
        { kind: 'warning', text: 'Do not confuse municipal Wi-Fi with similar networks in cafés, hotels and shopping centres. If the portal asks for payment, card number or app installation — it is not the standard Lisboa WiFi Plus.' }
      ]
    },
    {
      id: 'where-lisbon',
      title: 'Where to find Lisboa WiFi Plus',
      content: [
        { kind: 'paragraph', text: 'The network is best picked up in municipal and tourist locations. Inside old buildings with thick walls, the signal can drop sharply even 20–30 metres from the access point.' },
        { kind: 'checklist', items: [
          'Praças and largos in central Lisbon',
          'Jardins and miradouros with municipal infrastructure',
          'Bibliotecas de Lisboa',
          'Municipal markets and CML cultural spaces',
          'Estação Oriente and nearby public areas',
          'Tourist routes in Baixa, Chiado, Belém, Parque das Nações',
          'Stops and squares near Câmara Municipal de Lisboa facilities'
        ] },
        { kind: 'paragraph', text: 'To find the nearest point, use the Câmara Municipal de Lisboa website or simply check the list of networks on site: the municipal network is usually visible within the coverage radius without extra apps.' }
      ]
    },
    {
      id: 'porto-wifi',
      title: 'Porto WiFi: how it works in Porto',
      content: [
        { kind: 'paragraph', text: 'Porto WiFi is the free network of Câmara Municipal do Porto. It is smaller than Lisbon’s: as a guide, around 35 hotspots, mainly in central and municipal public places.' },
        { kind: 'checklist', items: [
          'Choose the Porto WiFi network',
          'Open the captive portal in your browser',
          'Accept the terms of use',
          'There is no need to buy a plan or enter bank card details',
          'If the portal does not open, turn off Private Relay / VPN / DNS blocker while logging in',
          'After the session ends, connect again',
          'For a stable video call, it is better to have a backup: eSIM, mobile plan or Wi-Fi in coworking'
        ] },
        { kind: 'paragraph', text: 'In Porto, the network is useful for maps, messengers, finding STCP/Metro do Porto routes and quick tasks. For remote work lasting several hours, it is better to use a library, coworking or home internet.' }
      ]
    },
    {
      id: 'safety',
      title: 'Security: what you can and cannot do',
      content: [
        { kind: 'paragraph', text: 'Municipal Wi-Fi is useful, but it is still a public network. Other users are in the same environment, and a captive portal does not make the connection private.' },
        { kind: 'checklist', items: [
          'For banking, MB WAY, Finanças, Segurança Social Direta, AIMA and ePortugal, it is better to use mobile internet',
          'If you need to log in to work email or a CRM — turn on your VPN after passing the captive portal',
          'Check that websites open over HTTPS',
          'Do not accept AirDrop / Nearby Share from unknown devices',
          'Turn off automatic connection to open networks',
          'Do not enter passwords on websites where the browser shows a certificate warning',
          'Do not download “Wi-Fi updates” or APK/configuration profiles',
          'After use, you can choose “Forget this network” if the device connects by itself at an inconvenient time'
        ] },
        { kind: 'warning', text: 'If you are submitting documents, paying taxes or working with clients’ personal data, free Wi-Fi should only be a backup. A connection error during payment or form submission can cost you time and a deadline.' }
      ]
    },
    {
      id: 'backup-options',
      title: 'Backup options for an expat',
      content: [
        { kind: 'paragraph', text: 'Free Wi-Fi covers “quickly check a map and send a WhatsApp message”, but it does not replace a proper connection. In 2026, a sensible minimum for relocation is an eSIM or prepaid SIM plus a list of places with free access.' },
        { kind: 'checklist', items: [
          'eSIM for the first 7–30 days before setting up a local plan',
          'Prepaid SIM from MEO, NOS, Vodafone or NOWO if you need a Portuguese number',
          'Biblioteca municipal: often quieter and more stable than a square or café',
          'Coworking for a day if you need video calls',
          'Wi-Fi in shopping centres as a fallback option',
          'Home internet by fibra if you are renting accommodation for several months or more'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Lisboa WiFi Plus', amountEUR: 0, note: 'Free; sessions are usually time-limited, often up to 60 minutes with the option to log in again' },
    { label: 'Porto WiFi', amountEUR: 0, note: 'Free; coverage is smaller, around 35 hotspots' },
    { label: 'Short-term backup eSIM', amountEURMin: 5, amountEURMax: 25, note: 'Guide price for tourist data packages; the price depends on the GB allowance and provider' }
  ],
  sources: [
    {
      title: 'Câmara Municipal de Lisboa — Lisboa WiFi Plus and the city’s digital services',
      url: 'https://www.cm-lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Câmara Municipal do Porto — Porto WiFi and municipal hotspots',
      url: 'https://www.cm-porto.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
