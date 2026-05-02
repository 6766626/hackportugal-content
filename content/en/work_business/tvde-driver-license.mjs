export default {
  editorialVoice: 'hackportugal',
  id: 'tvde-driver-license',
  categoryId: 'work_business',
  title: 'TVDE: how to become an Uber/Bolt driver in Portugal',
  tldr: 'TVDE is legal driver work through Uber, Bolt and other electronic platforms. In 2026, a driver needs a certificado de motorista TVDE from IMT: category B driving licence for more than 3 years, formação inicial 50h course, medical and psychological fitness, registo criminal and an application to IMT. The car must be registered for TVDE in the DUA/Certificado de Matrícula, have special insurance, inspeção and a dístico TVDE. You can work only through a licensed operador TVDE and registration on the platform.',
  tags: ['tvde', 'uber', 'bolt', 'imt', 'work'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-tvde-is',
      title: 'What TVDE is and who can actually drive',
      content: [
        { kind: 'paragraph', text: 'TVDE means Transporte Individual e Remunerado de Passageiros em Veículos Descaracterizados a partir de Plataforma Eletrónica. It is not a taxi: bookings come through a platform, the price is calculated by the app, and the transport is legally carried out by an operador TVDE registered with IMT.' },
        { kind: 'paragraph', text: 'The basic law is Lei 45/2018. In practice, in 2026 the set-up is as follows: the driver obtains a certificado de motorista TVDE, the vehicle is registered as TVDE, the operator has a licença TVDE, and Uber/Bolt check the documents before activating the account.' },
        { kind: 'checklist', items: [
          'Driver: category B carta de condução for more than 3 years',
          'Motorista TVDE course — 50 hours at an accredited school',
          'Certificado de motorista TVDE issued by IMT',
          'Clean or admissible registo criminal for passenger transport',
          'Medical and psychological fitness, usually under Grupo 2',
          'Link to a licensed operador TVDE: your own operator or working through someone else’s',
          'Vehicle with DUA/Certificado de Matrícula stating TVDE use',
          'Insurance for atividade TVDE, not ordinary private third-party motor insurance',
          'Registration of the driver and vehicle with Uber/Bolt'
        ] }
      ]
    },
    {
      id: 'driver-certificate',
      title: 'Obtain a certificado de motorista TVDE from IMT',
      content: [
        { kind: 'paragraph', text: 'Without a certificado de motorista TVDE, the platform will not activate the driver. The certificate is issued by IMT after the course and verification of the requirements. It is usually valid for 5 years; renewal is done before expiry through formação contínua/renovação and a new application.' },
        { kind: 'substeps', items: [
          { id: 'requirements', title: '1. Check the personal requirements', content: [
            { kind: 'checklist', items: [
              'Age is not the main filter, but you need a category B carta for more than 3 years',
              'Portuguese driving licence or a licence recognised in Portugal',
              'NIF',
              'Address in Portugal',
              'Recent registo criminal — they usually ask for a fresh one, no older than 3 months',
              'Medical certificate and avaliação psicológica, if the school/IMT requires it for Grupo 2',
              'Legal right to work in Portugal: residence permit, EU citizenship or another status with access to work'
            ] }
          ] },
          { id: 'course', title: '2. Complete the curso TVDE 50h', content: [
            { kind: 'paragraph', text: 'The course takes place at a training centre recognised by IMT. The programme is regulated by Portaria 293/2018 and includes safety, passenger service, TVDE rules, road behaviour, accessibility for passengers with limitations and use of platforms.' },
            { kind: 'warning', text: 'Do not buy a “ready-made certificado”. Platforms cross-check the document with IMT, and a fake certificate can block access to Uber/Bolt and create criminal-law risks.' }
          ] },
          { id: 'imt-application', title: '3. Submit an application to IMT', content: [
            { kind: 'paragraph', text: 'After the course, the school usually issues a declaração/certificado de formação. With it, you apply for the certificado de motorista TVDE through IMT services or according to the school’s instructions. The timeframe depends on IMT’s workload and whether the documents are complete.' },
            { kind: 'checklist', items: [
              'Documento de identificação: Cartão de Cidadão, residence permit or passport with proof of status',
              'Carta de condução',
              'Certificado/declaração for the TVDE 50h course',
              'Registo criminal',
              'Atestado médico and avaliação psicológica, if applicable',
              'NIF and contact details',
              'IMT payment receipt'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'operator-model',
      title: 'Choose a model: your own operador TVDE or work through an operator',
      content: [
        { kind: 'paragraph', text: 'A driver on their own does not provide the TVDE service to the platform. Under Lei 45/2018, the transport is carried out by an operador TVDE registered with IMT. You therefore have two routes: join/connect to an existing operador TVDE or create your own operator.' },
        { kind: 'checklist', items: [
          'Through someone else’s operator: faster start, but commission/rental/schedule depend on the contract',
          'Your own operator: more control, but you need atividade/empresa, an IMT licence, accounting, insurance and vehicle documents',
          'If you open atividade as an ENI or a company, discuss CAE, IVA, IRS/IRC and Segurança Social with a contabilista in advance',
          'The platform may contract only with an operator that has passed verification',
          'The contract with the operator should clearly state who pays for fuel, Via Verde, fines, maintenance, insurance and the platform commission',
          'Check who owns the account in Uber/Bolt and where payouts are sent'
        ] },
        { kind: 'warning', text: '“Renting out an Uber/Bolt account” and working on someone else’s profile risks blocking, insurance problems and liability in the event of an accident. The driver on the trip must match the driver registered on the platform.' }
      ]
    },
    {
      id: 'vehicle-documents',
      title: 'Prepare the vehicle: DUA, insurance, inspeção, dístico',
      content: [
        { kind: 'paragraph', text: 'An ordinary passenger car with private insurance is not enough. The vehicle must be linked to atividade TVDE and pass document checks with the platform. Uber/Bolt may introduce their own requirements for the age, class, condition and environmental standard of the car — these may be stricter or worded differently from the law.' },
        { kind: 'checklist', items: [
          'DUA/Certificado de Matrícula stating use for TVDE or the relevant anotação',
          'Passenger car for passenger transport, usually up to 9 seats including the driver',
          'Matrícula portuguesa',
          'Seguro automóvel for transporte remunerado/TVDE, not ordinary private insurance',
          'Valid inspeção periódica; for TVDE, platforms usually require an up-to-date inspeção sheet',
          'Dístico TVDE on the vehicle according to Lei 45/2018 rules',
          'Owner’s document or rental/leasing contract if the car is not yours',
          'Photos of the vehicle and documents for Uber/Bolt',
          'Via Verde is practically essential, but it does not replace TVDE documents'
        ] },
        { kind: 'warning', text: 'If the DUA does not have the correct finalidade/afetação TVDE or the insurance does not cover paid passenger transport, the insurer may dispute payment after an accident. This is one of the most expensive TVDE risks.' }
      ]
    },
    {
      id: 'platform-registration',
      title: 'Register with Uber/Bolt and complete activation',
      content: [
        { kind: 'paragraph', text: 'After the IMT certificate and vehicle preparation, the driver uploads documents in Uber Driver, Bolt Driver or the operator’s dashboard. Verification is not instant: the platform checks identity, certificate, licence, vehicle, insurance and the link with the operator.' },
        { kind: 'checklist', items: [
          'Driver profile with real name and photograph',
          'Carta de condução',
          'Certificado de motorista TVDE from IMT',
          'Identity document and right to work',
          'Registo criminal, if the platform asks for an update',
          'Operador TVDE details and proof of the link with it',
          'Vehicle DUA/Certificado de Matrícula',
          'Seguro TVDE',
          'Valid inspeção',
          'IBAN for payouts to the operator or driver — depending on the model'
        ] },
        { kind: 'paragraph', text: 'Before the first shift, check the commission rates, cancellation rules, airport zones, penalties for complaints, child-seat rules, pet transport and driving-time limits. Uber and Bolt update these rules more often than the law changes.' }
      ]
    },
    {
      id: 'tax-and-practical',
      title: 'Taxes, expenses and day-to-day economics',
      content: [
        { kind: 'paragraph', text: 'TVDE looks like “get in and drive”, but the economics depend on the platform commission, operator commission, vehicle rental, fuel, insurance and taxes. If you are self-employed or have your own operador, set up recibos verdes/invoicing, Segurança Social and expense tracking in advance.' },
        { kind: 'checklist', items: [
          'NIF is mandatory for contracts, taxes and platforms',
          'NISS is needed for Segurança Social if you work as a trabalhador independente or employee',
          'Recibos verdes are not always suitable: the model depends on whether you are the driver, the operator or both at once',
          'The platform commission and operator commission reduce turnover before taxable income',
          'Expenses: fuel/charging, washing, tyres, maintenance, parking, portagens, Via Verde, insurance',
          'Keep faturas com NIF for expenses linked to the activity',
          'If turnover grows, it is better to discuss the IVA regime and contabilidade organizada with a contabilista',
          'IMT/ANSR/platform fines for documents and conduct may be higher than a day’s revenue'
        ] },
        { kind: 'warning', text: 'Do not treat the revenue shown in the app as “salary”. Commission, the operator, vehicle, fuel, insurance, Segurança Social and IRS/IRC still come out of it. Before renting a car, ask the operator for a net calculation after all deductions.' }
      ]
    }
  ],
  costs: [
    { label: 'Motorista TVDE 50h course', amountEURMin: 150, amountEURMax: 350, note: 'Market price from schools; depends on the city and format' },
    { label: 'IMT TVDE application/certificate', amountEURMin: 30, amountEURMax: 60, note: 'Check the current IMT taxa when applying' },
    { label: 'Online registo criminal', amountEUR: 5, note: 'Usually cheaper online; in person may differ' },
    { label: 'Atestado médico + avaliação psicológica', amountEURMin: 60, amountEURMax: 140, note: 'If required for Grupo 2/the school or IMT process' },
    { label: 'Seguro automóvel TVDE', amountEURMin: 700, amountEURMax: 1800, note: 'The annual range varies greatly depending on the car, driving history and insurer' }
  ],
  sources: [
    { title: 'IMT: official TVDE page', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/TVDE/Paginas/TVDE.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 45/2018 — TVDE legal regime', url: 'https://dre.pt/dre/detalhe/lei/45-2018-115991688', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portaria 293/2018 — formação de motoristas TVDE', url: 'https://dre.pt/dre/detalhe/portaria/293-2018-116820880', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Uber Portugal: requirements for TVDE drivers', url: 'https://www.uber.com/pt/pt-pt/drive/requirements/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
