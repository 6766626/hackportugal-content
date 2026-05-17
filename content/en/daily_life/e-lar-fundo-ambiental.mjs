export default {
  editorialVoice: 'hackportugal',
  id: 'e-lar-fundo-ambiental',
  categoryId: 'daily_life',
  title: 'E-LAR / Vale E-Lar: voucher up to €1,683 to replace gas with electric',
  tldr: 'E-LAR is a Fundo Ambiental programme: from 11/12/2025 the 2nd wave is running with a budget of around €60.8 million. The voucher covers replacement of a gas cooker/hob/oven/water heater with class A+ or higher electric appliances. Groups I/II — up to €1,683 with installation, group III — up to €1,100, plus up to €50 for capping the gas pipe. Applications are through fundoambiental.pt with CMD/Cartão de Cidadão, NIF, CPE and selection of a supplier from the list.',
  tags: ['elar', 'fundoambiental', 'energy', 'voucher'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-e-lar',
      title: 'What E-LAR pays for',
      content: [
        { kind: 'paragraph', text: 'E-LAR, also Vale E-Lar, is a government Fundo Ambiental voucher for decarbonising homes: removing gas household appliances and installing highly energy-efficient electric ones.' },
        { kind: 'checklist', items: ['Replacing a gas cooker or fogão with an electric cooker/oven', 'Replacing a gas hob with an induction or ceramic hob', 'Replacing a gas esquentador/caldeira for hot water with an electric termoacumulador or another eligible electric water heater', 'Purchase only from suppliers that have joined the programme', 'New appliances must meet the aviso requirements, usually class A+ or higher where an energy label applies', 'The voucher is applied as a discount/payment at an approved supplier, not as a free cash transfer to your account'] },
        { kind: 'warning', text: 'Do not buy appliances in advance from any shop. Costs outside the E-LAR procedure and outside the fornecedores aderentes list may not be reimbursed.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Who can apply in 2026',
      content: [
        { kind: 'paragraph', text: 'In the 2nd wave, open from 11/12/2025, the programme divides applicants into 3 groups. What matters is not citizenship, but having housing/an electricity contract in Portugal and meeting the aviso conditions.' },
        { kind: 'checklist', items: ['Group I: households with Tarifa Social de Energia Elétrica — increased limit up to €1,683', 'Group II: residents of Bairros + Sustentáveis areas/neighbourhoods — increased limit up to €1,683', 'Group III: all other electricity customers — limit up to €1,100', 'Additionally, up to €50 can be obtained for safely closing/capping the gas pipe', 'You need a CPE — Código de Ponto de Entrega from the electricity bill', 'You need the applicant’s NIF', 'To log in to the portal you need a Cartão de Cidadão with reader/PIN or Chave Móvel Digital', 'Tenants usually need the owner’s consent if fixed equipment or the gas installation is being changed'] },
        { kind: 'warning', text: 'If the electricity is in the landlord’s, a relative’s or a previous tenant’s name, the application may get stuck: the CPE, address and applicant details must logically match the programme conditions. Before applying, check the contrato de eletricidade.' }
      ]
    },
    {
      id: 'documents',
      title: 'What to prepare before applying',
      content: [
        { kind: 'paragraph', text: 'The Fundo Ambiental portal usually checks some data automatically, but it is better to gather scans and photos in advance. This saves weeks of correspondence.' },
        { kind: 'checklist', items: ['Access via CMD or Cartão de Cidadão', 'NIF and up-to-date contact details', 'Electricity bill with the CPE and property address', 'Proof of the right to use the property: tenancy agreement, caderneta predial/owner’s document or other confirmation, if requested', 'Photos of the old gas appliance before removal', 'Brand, model and type of the old appliance: placa, fogão, forno, esquentador or caldeira', 'Details on the existence of gas: botija, rede de gás natural or GPL canalizado, if applicable', 'If you are on Tarifa Social — check that it already appears on the electricity bill', 'If you are applying as Bairros + Sustentáveis — check that the address is within the eligible territory/initiative', 'Consent from the senhorio to replace equipment, if the property is rented'] }
      ]
    },
    {
      id: 'application',
      title: 'How to apply on fundoambiental.pt',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to the Área Reservada', content: [
            { kind: 'paragraph', text: 'Open fundoambiental.pt, choose the E-LAR / Vale E-Lar aviso and log in via CMD or Cartão de Cidadão. If you do not yet have CMD, activate it through ePortugal, Espaço Cidadão or with Cartão de Cidadão.' }
          ] },
          { id: 'fill-data', title: '2. Fill in the housing details and CPE', content: [
            { kind: 'paragraph', text: 'Enter the NIF, address, CPE, type of old gas appliance and the group under which you are applying. An error in the CPE is a common reason for refusal, because it is the identifier of the electricity supply point.' }
          ] },
          { id: 'upload', title: '3. Upload supporting evidence', content: [
            { kind: 'paragraph', text: 'Attach the photos/documents according to the portal list. It is better to use clear file names: cpe-fatura.pdf, foto-esquentador.jpg, contrato-arrendamento.pdf.' }
          ] },
          { id: 'voucher', title: '4. Receive the digital voucher', content: [
            { kind: 'paragraph', text: 'After approval, the portal issues a vale digital. It is used at a fornecedor aderente from the official list. Do not confuse the voucher application with the final purchase: the appliance must go through a programme supplier.' }
          ] }
        ] }
      ]
    },
    {
      id: 'supplier-installation',
      title: 'Purchase, installation and gas closure',
      content: [
        { kind: 'paragraph', text: 'After the voucher is issued, choose a supplier from the Fundo Ambiental list. Check not only the appliance price, but also whether delivery, removal of the old appliance, installation, electrical work and disposal are included.' },
        { kind: 'checklist', items: ['Ask for an orçamento before confirming the order', 'Check that the model meets the E-LAR and energy-efficiency requirements', 'For an induction hob, check the power of the quadro elétrico and disjuntor — older flats often require the line to be upgraded', 'For a termoacumulador, check the capacity, installation location and load on the electrical network', 'Keep the fatura, auto de instalação and supplier documents', 'If a gas appliance is being disconnected, ask for proper capping/selagem da ligação de gás', 'There may be separate support of up to €50 for selagem', 'Do not dismantle the gas pipe yourself — this is a matter of safety and home insurance'] },
        { kind: 'warning', text: 'E-LAR covers the programme limit, but does not guarantee that all the work will be free. If the chosen appliance, electrics or installation costs more than the limit, the applicant pays the difference.' }
      ]
    },
    {
      id: 'practical-notes',
      title: 'Practical details for expats',
      content: [
        { kind: 'paragraph', text: 'The programme is useful even for those who have only just moved: it is linked to Portuguese housing and the electricity CPE, not to length of residence. But without CMD/CC, NIF and a clear status at the address, applying is difficult.' },
        { kind: 'checklist', items: ['If you only have a passport and NIF, but no CMD, first set up access to government services', 'If you rent your home, agree this with the senhorio in writing: an e-mail is sufficiently better than a verbal agreement', 'If you use bottled gas, photograph the connection and the appliance itself before replacement', 'If you have mains gas, do not close the contrato de gás before consulting an instalador', 'If the building has weak electrical wiring, budget for a separate line/circuit breaker — this may not be included in the voucher', 'Check the application status in the Área Reservada; e-mails from Fundo Ambiental may go to spam', 'Since the 2nd wave budget is around €60.8 million, applications effectively operate according to the funding limit: do not delay if your documents are ready'] }
      ]
    }
  ],
  costs: [
    { label: 'E-LAR voucher for groups I/II', amountEURMax: 1683, note: 'For Tarifa Social de Energia Elétrica or Bairros + Sustentáveis; the limit includes eligible appliances and installation under the aviso conditions.' },
    { label: 'E-LAR voucher for group III', amountEURMax: 1100, note: 'For all other electricity customers, if the programme conditions are met.' },
    { label: 'Top-up for closing the gas pipe', amountEURMax: 50, note: 'Additional support for selagem/closure of the gas connection, where applicable.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — official programme portal and Área Reservada', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fundo Ambiental — 2025 Avisos, Bairros + Sustentáveis and E-LAR', url: 'https://www.fundoambiental.pt/apoios-prr/c13-eficiencia-energetica-em-edificios/11c13-i012025-programa-e-lar-2-fase.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Chave Móvel Digital', url: 'https://eportugal.gov.pt/servicos/ativar-a-chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
