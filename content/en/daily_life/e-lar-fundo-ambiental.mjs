export default {
  editorialVoice: 'hackportugal',
  id: 'e-lar-fundo-ambiental',
  categoryId: 'daily_life',
  title: 'E-LAR / Vale E-Lar: voucher up to €1,683 to switch from gas to electric',
  tldr: 'E-LAR is a Fundo Ambiental programme: from 11.12.2025 the 2nd wave runs with a budget of about €60.8 million. The voucher covers replacing a gas cooker/hob/oven/water heater with electric appliances rated A+ or above. Groups I/II — up to €1,683 including installation, Group III — up to €1,100, plus up to €50 for capping the gas pipe. Apply via fundoambiental.pt with CMD/Cartão de Cidadão, NIF, CPE and choose a supplier from the list.',
  tags: ['elar', 'fundoambiental', 'energy', 'voucher'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-e-lar',
      title: 'What E-LAR pays for',
      content: [
        { kind: 'paragraph', text: 'E-LAR, also Vale E-Lar, is a state voucher from Fundo Ambiental for home decarbonisation: remove gas household appliances and install electric ones with high energy efficiency.' },
        { kind: 'checklist', items: ['Replacing a gas cooker or fogão with an electric cooker/oven', 'Replacing a gas hob with an induction or vitroceramic hob', 'Replacing a gas esquentador/caldeira for hot water with an electric termoacumulador or other eligible electric water heater', 'Purchase only from suppliers that have joined the programme', 'New appliances must comply with the aviso requirements, typically A+ or above where an energy label applies', 'The voucher is applied as a discount/payment with an approved supplier, not as a free transfer of money to your account'] },
        { kind: 'warning', text: 'Do not buy appliances in advance in just any shop. Expenses outside the E-LAR procedure and outside the list of fornecedores aderentes may not be reimbursed.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Who can apply in 2026',
      content: [
        { kind: 'paragraph', text: 'In the 2nd wave, opened on 11.12.2025, the programme divides applicants into 3 groups. What matters is not nationality but having housing/an electricity contract in Portugal and meeting the aviso conditions.' },
        { kind: 'checklist', items: ['Group I: households with Tarifa Social de Energia Elétrica — higher cap up to €1,683', 'Group II: residents of Bairros + Sustentáveis areas/neighbourhoods — higher cap up to €1,683', 'Group III: other electricity customers — cap up to €1,100', 'Additionally you can receive up to €50 for safely sealing/capping the gas pipe', 'You need the CPE — Código de Ponto de Entrega from the electricity bill', 'Applicant\'s NIF required', 'To log in to the portal you need a Cartão de Cidadão with reader/PIN or Chave Móvel Digital', 'Tenants usually must have the owner\'s consent if fixed equipment or the gas installation is being changed'] },
        { kind: 'warning', text: 'If the electricity contract is in the landlord’s, a relative’s or a former occupant’s name, the application may stall: the CPE, address and applicant data must logically match the programme’s conditions. Check the contrato de eletricidade before applying.' }
      ]
    },
    {
      id: 'documents',
      title: 'What to prepare before applying',
      content: [
        { kind: 'paragraph', text: 'The Fundo Ambiental portal usually checks part of the data automatically, but it is better to gather scans and photos in advance. This saves weeks of back-and-forth.' },
        { kind: 'checklist', items: ['Access via CMD or Cartão de Cidadão', 'NIF and up-to-date contact details', 'Electricity bill with the CPE and the property’s address', 'Proof of the right to use the dwelling: tenancy agreement, caderneta predial/owner’s document or other proof if requested', 'Photos of the old gas appliance before removal', 'Make, model and type of the old appliance: placa, fogão, forno, esquentador or caldeira', 'Information on the gas supply: botija, rede de gás natural or GPL canalizado, if applicable', 'If you are on the Tarifa Social — check that it already appears on the electricity bill', 'If you apply under Bairros + Sustentáveis — check that the address is within the eligible area/initiative', 'Landlord’s (senhorio) consent to replace equipment, if the property is rented'] }
      ]
    },
    {
      id: 'application',
      title: 'How to apply on fundoambiental.pt',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Sign in to Área Reservada', content: [
            { kind: 'paragraph', text: 'Open fundoambiental.pt, select the E-LAR / Vale E-Lar aviso and sign in via CMD or Cartão de Cidadão. If you do not have CMD yet, activate it via ePortugal, an Espaço Cidadão or with your Cartão de Cidadão.' }
          ] },
          { id: 'fill-data', title: '2. Fill in the dwelling data and CPE', content: [
            { kind: 'paragraph', text: 'Enter the NIF, address, CPE, type of old gas appliance and the group under which you are applying. A mistake in the CPE is a common reason for refusal, because it is the identifier of the electricity supply point.' }
          ] },
          { id: 'upload', title: '3. Upload supporting documents', content: [
            { kind: 'paragraph', text: 'Attach the photos/documents per the portal’s checklist. It helps to give files clear names: cpe-fatura.pdf, foto-esquentador.jpg, contrato-arrendamento.pdf.' }
          ] },
          { id: 'voucher', title: '4. Receive the digital voucher', content: [
            { kind: 'paragraph', text: 'After approval the portal issues a vale digital. It is used with a fornecedor aderente from the official list. Do not confuse the voucher application with the final purchase: the equipment must go through a programme supplier.' }
          ] }
        ] }
      ]
    },
    {
      id: 'supplier-installation',
      title: 'Purchase, installation and gas shut-off',
      content: [
        { kind: 'paragraph', text: 'After the voucher is issued, choose a supplier from the Fundo Ambiental list. Ask not only about the price of the equipment, but also whether delivery, removal of the old appliance, installation, electrical work and disposal are included.' },
        { kind: 'checklist', items: ['Ask for an orçamento (quote) before confirming the order', 'Check that the model meets E-LAR and energy efficiency requirements', 'For an induction hob check the capacity of the quadro elétrico and the disjuntor — older flats often need a line upgrade', 'For a termoacumulador check the capacity, installation location and load on the electrical network', 'Keep the fatura, auto de instalação and supplier documents', 'If a gas appliance is being removed, ask for proper capping/selagem da ligação de gás', 'There may be separate support of up to €50 for the selagem', 'Do not dismantle the gas pipe yourself — this is a matter of safety and home insurance'] },
        { kind: 'warning', text: 'E-LAR covers up to the programme cap but does not guarantee that all work will be free. If the chosen equipment, electrical works or installation cost more than the cap, the applicant pays the difference.' }
      ]
    },
    {
      id: 'practical-notes',
      title: 'Practical notes for expats',
      content: [
        { kind: 'paragraph', text: 'The programme is useful even for those who have just moved: it is tied to the Portuguese dwelling and the electricity CPE, not to length of residence. But without CMD/CC, NIF and a clear status at the address it is hard to apply.' },
        { kind: 'checklist', items: ['If you only have a passport and NIF, but no CMD, first set up access to state services', 'If you are renting, agree with the senhorio in writing: an e-mail is sufficient and better than a verbal arrangement', 'If the gas is in cylinders, photograph the connection and the appliance itself before replacement', 'If you are on mains gas, do not terminate the contrato de gás before consulting an instalador', 'If the home has weak wiring, budget for a separate line/breaker — this may not be covered by the voucher', 'Check the application status in Área Reservada, e-mails from Fundo Ambiental can land in spam', 'As the 2nd wave budget is about €60.8 million, applications effectively run against a funding cap: do not delay if your documents are ready'] }
      ]
    }
  ],
  costs: [
    { label: 'E-LAR voucher for Groups I/II', amountEURMax: 1683, note: 'For Tarifa Social de Energia Elétrica or Bairros + Sustentáveis; the cap includes eligible appliances and installation under the aviso conditions.' },
    { label: 'E-LAR voucher for Group III', amountEURMax: 1100, note: 'For other electricity customers, if programme conditions are met.' },
    { label: 'Top-up for sealing the gas pipe', amountEURMax: 50, note: 'Additional support for selagem/sealing the gas connection, where applicable.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — official programme portal and Área Reservada', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fundo Ambiental — 2025 Avisos, Bairros + Sustentáveis and E-LAR', url: 'https://www.fundoambiental.pt/apoios-prr/c13-eficiencia-energetica-em-edificios/11c13-i012025-programa-e-lar-2-fase.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Chave Móvel Digital', url: 'https://eportugal.gov.pt/servicos/ativar-a-chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
