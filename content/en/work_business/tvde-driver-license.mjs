export default {
  editorialVoice: 'hackportugal',
  id: 'tvde-driver-license',
  categoryId: 'work_business',
  title: 'TVDE: how to become an Uber/Bolt driver in Portugal',
  tldr: 'TVDE is driver work through Uber, Bolt and other plataformas eletrónicas. In 2026, a driver needs a certificado de motorista TVDE from IMT: a category B driving licence held for more than 3 years, a 50h formação inicial course, medical and psychological fitness, registo criminal and an application to IMT. The car must be registered for TVDE in the DUA/Certificado de Matrícula, have special insurance, inspeção and a dístico TVDE. You can work only through a licensed operador TVDE and registration on the platform.',
  tags: ['tvde', 'uber', 'bolt', 'imt', 'work'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-tvde-is',
      title: 'What TVDE is and who can actually drive',
      content: [
        { kind: 'paragraph', text: 'TVDE means Transporte Individual e Remunerado de Passageiros em Veículos Descaracterizados a partir de Plataforma Eletrónica. It is not a taxi: trips come through a platform, the price is calculated by the app, and the transport is legally provided by an operador TVDE registered with IMT.' },
        { kind: 'paragraph', text: 'The basic law is Lei 45/2018. In practice, in 2026 the structure is as follows: the driver obtains a certificado de motorista TVDE, the vehicle is registered as TVDE, the operator has a licença TVDE, and Uber/Bolt check the documents before activating the account.' },
        { kind: 'checklist', items: [
          'Driver: carta de condução category B held for more than 3 years',
          'Motorista TVDE course — 50 hours at an accredited school',
          'Certificado de motorista TVDE issued by IMT',
          'Clean or acceptable registo criminal for passenger transport',
          'Medical and psychological fitness to Grupo 2 standard, with the Grupo 2 averbamento on the licence',
          'Connection with a licensed operador TVDE: your own operator or working through someone else’s',
          'Vehicle with DUA/Certificado de Matrícula showing TVDE use',
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
              'Age is not the main filter, but you need a carta B held for more than 3 years',
              'Portuguese driving licence or a licence recognised in Portugal',
              'NIF',
              'Address in Portugal',
              'Recent registo criminal — usually they ask for a fresh one, not older than 3 months',
              'Atestado médico and avaliação psicológica to Grupo 2 standard are mandatory for the certificado de motorista TVDE',
              'Legal right to work in Portugal: residence permit, EU citizenship or another status with access to work'
            ] }
          ] },
          { id: 'course', title: '2. Complete the 50h curso TVDE', content: [
            { kind: 'paragraph', text: 'The course takes place at a training centre recognised by IMT. The programme is regulated by Portaria 293/2018 and includes safety, passenger service, TVDE rules, road behaviour, accessibility for passengers with limitations and use of platforms.' },
            { kind: 'warning', text: 'Do not buy a “ready-made certificado”. Platforms check the document against IMT, and a fake certificate can close access to Uber/Bolt and create criminal risks.' }
          ] },
          { id: 'imt-application', title: '3. Submit the application to IMT', content: [
            { kind: 'paragraph', text: 'After the course, the school usually issues a declaração/certificado de formação. With this, you submit an application for a certificado de motorista TVDE through IMT services or according to the school’s instructions. The timescale depends on IMT workload and whether the documents are complete.' },
            { kind: 'checklist', items: [
              'Documento de identificação: Cartão de Cidadão, residence permit or passport with proof of status',
              'Carta de condução',
              'Certificado/declaração for the 50h TVDE course',
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
      title: 'Choose the model: your own operador TVDE or working through an operator',
      content: [
        { kind: 'paragraph', text: 'A driver on their own does not provide the TVDE service to the platform. Under Lei 45/2018, the transport is provided by an operador TVDE registered with IMT. Therefore, you have two routes: be hired by/connect to an existing operador TVDE or create your own operator.' },
        { kind: 'checklist', items: [
          'Through someone else’s operator: faster start, but commission/rental/schedule depend on the contract',
          'Your own operator: more control, but you need atividade/company, IMT licence, accounting, insurance and vehicle documents',
          'If you open atividade as an ENI or company, discuss CAE, IVA, IRS/IRC and Segurança Social with a contabilista in advance',
          'The platform may contract only with an operator that has passed verification',
          'The contract with the operator should clearly state who pays for fuel, Via Verde, fines, maintenance, insurance and the platform commission',
          'Check who owns the Uber/Bolt account and where payouts are received'
        ] },
        { kind: 'warning', text: '“I will rent out my Uber/Bolt account” and working on someone else’s profile create a risk of blocking, insurance problems and liability in the event of an accident. The driver on the trip must match the driver registered on the platform.' }
      ]
    },
    {
      id: 'vehicle-documents',
      title: 'Prepare the vehicle: DUA, insurance, inspeção, dístico',
      content: [
        { kind: 'paragraph', text: 'An ordinary passenger car with private insurance is not enough. The vehicle must be linked to atividade TVDE and pass document checks with the platform. Uber/Bolt may introduce their own requirements for the car’s age, class, condition and environmental standard — these may be stricter or phrased differently from the law.' },
        { kind: 'checklist', items: [
          'DUA/Certificado de Matrícula showing use for TVDE or the relevant anotação',
          'Light passenger car with a capacity of no more than 9 seats, including the driver',
          'Matrícula portuguesa',
          'Vehicle age under 7 years from the date of first registration (Lei 45/2018; check the current version)',
          'Seguro automóvel for transporte remunerado/TVDE, not ordinary private insurance',
          'Inspeção under the TVDE regime: first one year after first registration, then annually — not the ordinary private-car schedule',
          'Dístico TVDE on the vehicle according to the rules of Lei 45/2018',
          'Owner’s document or rental/leasing contract if the car is not yours',
          'Photos of the vehicle and documents for Uber/Bolt',
          'Via Verde is practically essential, but it does not replace TVDE documents'
        ] },
        { kind: 'warning', text: 'If the DUA does not have the correct TVDE finalidade/afetação or the insurance does not cover paid passenger transport, the insurer may dispute payment after an accident. This is one of the most expensive TVDE risks.' }
      ]
    },
    {
      id: 'platform-registration',
      title: 'Register with Uber/Bolt and complete activation',
      content: [
        { kind: 'paragraph', text: 'After the IMT certificate and preparing the vehicle, the driver uploads documents to Uber Driver, Bolt Driver or the operator’s dashboard. Verification is not instant: the platform checks identity, certificate, driving licence, vehicle, insurance and connection with the operator.' },
        { kind: 'checklist', items: [
          'Driver profile with real name and photo',
          'Carta de condução',
          'Certificado de motorista TVDE from IMT',
          'Identity document and right to work',
          'Registo criminal, if the platform asks for an update',
          'Operador TVDE details and confirmation of the connection with it',
          'Vehicle DUA/Certificado de Matrícula',
          'Seguro TVDE',
          'Inspeção válida',
          'IBAN for payouts to the operator or driver — depends on the model'
        ] },
        { kind: 'paragraph', text: 'Before the first shift, check commission rates, cancellation rules, airport zones, penalties for complaints, child-seat rules, transport of animals and driving-time limits. Uber and Bolt update these rules more often than the law changes.' }
      ]
    },
    {
      id: 'tax-and-practical',
      title: 'Taxes, costs and day-to-day economics',
      content: [
        { kind: 'paragraph', text: 'TVDE may look like “get in and drive”, but the economics depend on the platform commission, operator commission, car rental, fuel, insurance and taxes. If you are self-employed or your own operador, set up recibos verdes/invoicing, Segurança Social and expense records in advance.' },
        { kind: 'checklist', items: [
          'NIF is mandatory for contracts, taxes and platforms',
          'NISS is needed for Segurança Social if you work as a trabalhador independente or employee',
          'Recibos verdes are not always suitable: the model depends on whether you are the driver, the operator or both at once',
          'Platform/operator commissions reduce your margin, but the tax base depends on the model (regime simplificado, contabilidade organizada, ENI or sociedade). Do not assume all commissions are deductible from IRS/IRC — set up faturação and IVA with a contabilista',
          'Costs: fuel/charging, car wash, tyres, maintenance, parking, portagens, Via Verde, insurance',
          'Keep faturas com NIF for expenses related to the activity',
          'If turnover grows, it is better to discuss the IVA regime and contabilidade organizada with a contabilista',
          'IMT/ANSR/platform fines for documents and behaviour can be higher than a day’s revenue'
        ] },
        { kind: 'warning', text: 'Do not treat the revenue shown in the app as “salary”. Commission, operator, vehicle, fuel, insurance, Segurança Social and IRS/IRC still come out of it. Before renting a car, ask the operator for a net calculation after all deductions.' }
      ]
    }
  ],
  costs: [
    { label: '50h motorista TVDE course', amountEURMin: 150, amountEURMax: 350, note: 'Market price charged by schools; depends on the city and format' },
    { label: 'IMT TVDE application/certificate', amountEURMin: 30, amountEURMax: 60, note: 'Check the current IMT taxa when applying' },
    { label: 'Online registo criminal', amountEUR: 5, note: 'Usually cheaper online; in person may differ' },
    { label: 'Atestado médico + avaliação psicológica', amountEURMin: 60, amountEURMax: 140, note: 'If required for Grupo 2/the school or IMT process' },
    { label: 'Seguro automóvel TVDE', amountEURMin: 700, amountEURMax: 1800, note: 'The annual range varies greatly depending on the car, driving experience and insurer' }
  ],
  sources: [
    { title: 'IMT: official TVDE page', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/TVDE/Paginas/TVDE.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 45/2018 — TVDE legal regime', url: 'https://dre.pt/dre/detalhe/lei/45-2018-115991688', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portaria 293/2018 — formação de motoristas TVDE', url: 'https://dre.pt/dre/detalhe/portaria/293-2018-116820880', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Uber Portugal: requirements for TVDE drivers', url: 'https://www.uber.com/pt/pt-pt/drive/requirements/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
