export default {
  editorialVoice: 'hackportugal',
  id: 'glovo-uber-bolt-driver',
  categoryId: 'work_business',
  title: 'Glovo / Uber Eats / Bolt Food: how to become a courier in Portugal',
  tldr: 'A delivery courier in Portugal usually works as a trabalhador independente through recibos verdes: you open atividade with Finanças, register with Segurança Social, complete onboarding with Glovo / Uber Eats / Bolt Food, and pay your own taxes, insurance, fuel and repairs. Real income in 2026 is roughly €5–12/hour before expenses; an e-bike is often cheaper, while a car is more expensive because of IUC, insurance and fuel. Tourist status does not give you the right to work.',
  tags: ['glovo', 'recibosverdes', 'courier', 'impostos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-status',
      title: '1. Check your right to work',
      content: [
        { kind: 'paragraph', text: 'Glovo, Uber Eats and Bolt Food in Portugal usually onboard couriers as independent contractors, not as employees. This means you are responsible for your own legal status, taxes, Segurança Social, insurance and work equipment: bicycle, e-bike, scooter or car.' },
        { kind: 'checklist', items: [
          'EU citizen: you need a NIF, an address and usually a Certificado de Registo de Cidadão da União Europeia after 3 months of residence.',
          'Non-EU: you need a residence permit or a visa that allows work in Portugal; tourist entry is not suitable.',
          'NIF is mandatory: without it you cannot open atividade and receive payments as a trabalhador independente.',
          'NISS is needed for Segurança Social contributions; if you do not have one, obtain it before or immediately after starting work.',
          'A bank account with an IBAN in the SEPA area is needed for payments from platforms.',
          'The minimum age is usually 18+; platforms may require a smartphone, vehicle documents and profile verification.',
          'For a scooter/motorcycle/car, you need a valid driving licence in the relevant category, seguro automóvel/moto and vehicle documents.'
        ] },
        { kind: 'warning', text: 'Do not start deliveries on tourist status or without an open atividade: platform payments are visible to the bank and Finanças, and during an inspection the police may classify this as illegal work.' }
      ]
    },
    {
      id: 'open-atividade',
      title: '2. Open atividade with Finanças as recibos verdes',
      content: [
        { kind: 'paragraph', text: 'Before your first payment, open atividade in Portal das Finanças. This is free. In practice, couriers use recibos verdes: you issue a recibo/fatura for services provided and declare income as Categoria B IRS.' },
        { kind: 'checklist', items: [
          'Go to Portal das Finanças → Todos os Serviços → Início de Atividade.',
          'Choose the Categoria B — trabalhador independente regime.',
          'Discuss the activity code with a contabilista: CAE 53200, other courier/postal activities, or a CIRS code for other services are often considered; the IRS coefficient may depend on the code.',
          'If expected turnover is up to €15,000 per year, you can usually use the IVA exemption under art. 53 CIVA.',
          'If you exceed the IVA threshold or choose the standard regime, you will have to charge IVA and submit periodic returns.',
          'With low turnover, there is usually no retenção na fonte, but this depends on the regime and the client.',
          'Save the comprovativo de início de atividade: platforms or an accountant may request it.',
          'After registration, issue recibos verdes in Portal das Finanças or through compatible software.'
        ] },
        { kind: 'warning', text: 'Do not choose an activity code at random. For a courier, the difference between codes can change the tax base under the simplified regime. One hour with a contabilista is often cheaper than correcting an incorrectly opened atividade.' }
      ]
    },
    {
      id: 'platform-onboarding',
      title: '3. Join Glovo, Uber Eats and Bolt Food',
      content: [
        { kind: 'paragraph', text: 'The logic is similar: online registration, document upload, profile check, choice of city and transport, obtaining an insulated delivery bag and access to the app. Availability of onboarding depends on the city: Lisboa, Porto, Braga, Coimbra, Faro and tourist areas are usually more active, but platforms may temporarily close onboarding.' },
        { kind: 'substeps', items: [
          { id: 'glovo', title: 'Glovo', content: [
            { kind: 'paragraph', text: 'Start on the Glovo website for couriers. You usually need an ID/passport or residence permit, NIF, IBAN, phone number, email, proof of the right to work and transport details. Glovo may offer an information session and rules for working with the app.' }
          ] },
          { id: 'uber-eats', title: 'Uber Eats', content: [
            { kind: 'paragraph', text: 'Registration is done through an Uber account. For a car/scooter, they usually request a driving licence, vehicle documents and insurance. For a bicycle, the list is simpler, but the right to work and tax registration are still required.' }
          ] },
          { id: 'bolt-food', title: 'Bolt Food', content: [
            { kind: 'paragraph', text: 'Bolt Food onboards couriers through the Bolt courier form. Requirements depend on the city and type of transport. After approval, you receive access to the slot/online mode, order acceptance rules and payments.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Compare commissions, bonuses and order cancellation rules on each platform.',
          'Check who issues the documents: you yourself through recibos verdes or the platform through self-billing.',
          'Clarify the payment schedule: weekly, fortnightly or according to the platform’s internal cycle.',
          'Do not use someone else’s account: this risks blocking, insurance problems and tax issues.',
          'Keep all payment reports, tips, bonuses and deductions.'
        ] }
      ]
    },
    {
      id: 'vehicle-costs',
      title: '4. Choose your transport: an e-bike is often more profitable than a car',
      content: [
        { kind: 'paragraph', text: 'Courier income depends not only on orders, but also on expenses. In 2026, realistic gross revenue is roughly €5–12/hour before taxes, fuel, repairs and depreciation. In the rain, in the evening and at weekends it may be higher; during quiet hours it may be less than the minimum wage converted to an hourly rate.' },
        { kind: 'checklist', items: [
          'Standard bicycle: minimal costs, but lower speed and higher physical effort.',
          'E-bike: a good balance for Lisboa/Porto; you need a lock, battery, brake and tyre maintenance.',
          'Scooter/motorcycle: faster and more convenient over distances, but you need a licence, capacete, seguro, fuel and repairs.',
          'Car: comfortable in the rain, but parking, traffic jams, combustível, seguro, IUC and wear often eat up income.',
          'IUC is paid annually for a car/motorcycle and depends on the year, engine size, CO₂ and fuel type.',
          'Third-party liability insurance is mandatory for motor vehicles; check whether it covers commercial use.',
          'For an e-bike, check the limits: a standard pedelec up to 25 km/h and 250 W is not the same as a moped; more powerful models may require a different legal category.',
          'Buy an insulated delivery bag, waterproof jacket, power bank, phone holder and good lights — these are not luxuries, but work expenses.'
        ] },
        { kind: 'warning', text: 'If you are involved in an accident during a delivery, ordinary personal insurance may refuse cover if the policy excludes professional use. Before starting work, confirm the cover in writing with the seguradora.' }
      ]
    },
    {
      id: 'tax-social-security',
      title: '5. Taxes, Segurança Social and the real net amount',
      content: [
        { kind: 'paragraph', text: 'Recibos verdes are not “cash in hand”. From the gross amount, you need to set aside money for IRS, Segurança Social, IVA if necessary, repairs, communications, equipment and downtime. If you have just opened atividade for the first time, there is usually an exemption from Segurança Social contributions for the first 12 months, but after that contributions become regular.' },
        { kind: 'checklist', items: [
          'IRS: Categoria B income is declared annually in Modelo 3, usually from 1 April to 30 June for the previous year.',
          'Progressive IRS rates apply to the taxable base; the first bracket in 2026 is 11.97%.',
          'Under the simplified regime, Finanças does not count all revenue, but a portion according to a coefficient; the coefficient depends on the type of activity.',
          'Segurança Social: after the exemption, an independent worker submits quarterly declarações trimestrais.',
          'The standard rate for a trabalhador independente is 21.4% of relevant income; for services, relevant income is usually calculated from part of the revenue.',
          'IVA: with turnover up to €15,000 per year, art. 53 CIVA often applies; above the threshold, standard IVA rules apply.',
          'Keep expense records: repairs, bag, phone, communications, fuel, insurance, parking. Even if you are under the simplified regime, documents help during inspections and when changing regime.',
          'If you also work under a contrato de trabalho, check the rules on combining activities and possible Segurança Social exemptions.'
        ] },
        { kind: 'paragraph', text: 'Example: if the platform shows €800 for the month, this is not yet net income. Deduct transport costs of €80–250, communications/equipment, future Segurança Social contributions and IRS. For couriers using a car, the net margin is often noticeably lower than with an e-bike.' }
      ]
    },
    {
      id: 'worker-rights-risks',
      title: '6. Risks of platform work',
      content: [
        { kind: 'paragraph', text: 'Portugal has a presumption of an employment contract for digital platforms where there are signs of dependence and control, introduced into the Código do Trabalho through Lei 13/2023. In practice, however, most couriers are still onboarded as independent contractors, so social protection is weaker than for an employee under a contrato.' },
        { kind: 'checklist', items: [
          'There is no paid holiday, subsídio de Natal or subsídio de férias if you are not an employee.',
          'Illness and injury are covered only with correct contributions and insurance status.',
          'Your account may be temporarily blocked for complaints, cancellations, suspected multi-accounting or breach of platform rules.',
          'Tips and bonuses are also income and must be included in the accounts.',
          'Do not take “account rental” from another courier: the taxable income will not go to you, while the liability and risk of blocking remain.',
          'If income becomes regular and high, speak to a contabilista about VAT, deductions, regime simplificado vs contabilidade organizada.',
          'IEFP may be useful if you are looking for more stable work, Portuguese language training or retraining instead of platform employment.'
        ] },
        { kind: 'warning', text: 'Platform delivery is suitable as a quick start, but it does not replace a proper employment contract: for residence permit renewal, renting housing and credit history, recibos verdes with unstable income often look weaker than a contrato sem termo.' }
      ]
    }
  ],
  costs: [
    { label: 'Opening atividade with Finanças', amountEUR: 0, note: 'Free through Portal das Finanças; a contabilista is not mandatory, but useful.' },
    { label: 'Contabilista for setup and consultations', amountEURMin: 25, amountEURMax: 60, note: 'Typical monthly range for a simple trabalhador independente; a one-off consultation may cost separately.' },
    { label: 'Insulated delivery bag, waterproof jacket, phone holder, power bank', amountEURMin: 40, amountEURMax: 150, note: 'Some platforms sell or rent out the bag; conditions vary by city.' },
    { label: 'Second-hand e-bike or work bicycle', amountEURMin: 300, amountEURMax: 1200, note: 'Depends on the battery, condition and anti-theft protection.' },
    { label: 'Monthly car/scooter expenses', amountEURMin: 120, amountEURMax: 400, note: 'Fuel, maintenance, insurance, parking; IUC is paid separately each year and depends on the vehicle.' }
  ],
  sources: [
    { title: 'Glovo Portugal — courier registration and platform information', url: 'https://glovoapp.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IEFP — employment, training and worker support in Portugal', url: 'https://www.iefp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — início de atividade, recibos verdes, IVA and IRS', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — trabalhadores independentes and contribuições', url: 'https://www.seg-social.pt/trabalhadores-independentes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
