export default {
  editorialVoice: 'hackportugal',
  id: 'direito-preferencia-arrendatario',
  categoryId: 'housing_rent',
  title: 'Direito de Preferência: the tenant’s pre-emption right when a home is sold',
  tldr: 'If you have been renting a home in Portugal for more than 2 years, when that flat/house is sold you usually have Direito de Preferência: the right to buy the property on the same terms before a third-party buyer. The owner must inform you in writing of the price and transaction terms; the tenant has 30 days to reply. If it was sold without notice or on better terms for the buyer, the transaction can be challenged in court within 6 months after you became aware of the key sale terms.',
  tags: ['rent', 'pre-emption', 'housing', 'court'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Direito de Preferência gives you',
      content: [
        { kind: 'paragraph', text: 'Direito de Preferência is the tenant’s statutory right to be the first to buy the rented home if the owner has decided to sell it or transfer it by dação em cumprimento. The basis is Código Civil art. 1091 and the general preferência rules in art. 416–418 and art. 1410.' },
        { kind: 'paragraph', text: 'The idea is simple: the landlord is not obliged to sell to you more cheaply, but must offer you the same deal that they are prepared to conclude with a third-party buyer: the same property, price, payment method, deadlines, included parking/storage rooms and other material terms.' },
        { kind: 'checklist', items: [
          'The right usually arises if the tenancy agreement has been in force for more than 2 years.',
          'The period of actual tenancy under that agreement counts; keep the contract, recibos de renda and correspondence.',
          'The right relates to the property you rent: flat, house or autonomous unit.',
          'If an entire building without horizontal property is being sold, the right is more complex: a lawyer should check the facts and current practice.',
          'If a share, asset package, owner company is being sold, or there is a gift, automatic preferência may not work.',
          'The tenancy agreement may contain additional conditions, but waiving a statutory right in advance is often debatable and requires legal assessment.'
        ] }
      ]
    },
    {
      id: 'notice',
      title: 'How the landlord must notify the tenant',
      content: [
        { kind: 'paragraph', text: 'The notice must be such that the tenant can genuinely make a decision. In practice, the safe format for the landlord is carta registada com aviso de receção or a notarial/lawyer’s notice. WhatsApp without confirmation and without the transaction terms is weak evidence.' },
        { kind: 'checklist', items: [
          'Identification of the seller and property: morada, fração, descrição predial, artigo matricial.',
          'Sale price in € and exactly what is included in the price.',
          'Payment terms: deposit, sinal, mortgage, escritura date.',
          'Details of the potential buyer, if there is already a contrato-promessa de compra e venda.',
          'Material transaction terms: furniture, parking, arrecadação, vacancy deadlines, conditions precedent.',
          'A clear request: whether you want to exercer o direito de preferência.',
          'Reply deadline: 30 days from the moment the tenant receives the notice.',
          'Address/method for the reply, preferably with provable delivery.'
        ] },
        { kind: 'warning', text: 'Do not ignore the letter. Silence after a correct notice is usually treated as refusal of preferência on the proposed terms. If the terms are incomplete, reply in writing: request the missing data and record that the deadline cannot run without the material elements of the transaction.' }
      ]
    },
    {
      id: 'thirty-days',
      title: '30 days: how to reply correctly',
      content: [
        { kind: 'paragraph', text: 'Under art. 1091 Código Civil, the tenant has 30 days for exercício do direito de preferência.\n\nThe deadline is counted from receipt of a correct notice, not from the date of the letter. If the letter was received by a neighbour/concierge or was sitting at the post office, the dates may become an evidential dispute.' },
        { kind: 'substeps', items: [
          { id: 'accept', title: 'If you want to buy', content: [
            { kind: 'checklist', items: [
              'Reply in writing: “exerço o direito de preferência”.',
              'Specify the property and price from the notice.',
              'Confirm your readiness to buy on the same terms.',
              'Send it by carta registada com aviso de receção or through a lawyer/solicitador.',
              'Check the mortgage immediately: bank, avaliação, approval timeframe.',
              'Ask for the minuta do CPCV and property documents: caderneta predial, certidão permanente, licença de utilização or a replacement document.'
            ] }
          ] },
          { id: 'refuse', title: 'If you do not want to buy', content: [
            { kind: 'paragraph', text: 'You can refuse in writing or simply not reply within 30 days if the notice is complete. A written refusal speeds up the sale and reduces the risk of conflicts, but do not sign documents with wording broader than the specific transaction unless you are sure.' }
          ] },
          { id: 'unclear', title: 'If the letter is incomplete', content: [
            { kind: 'paragraph', text: 'Write that you cannot assess the preferência without the price, property, payment terms or a copy of the CPCV. Request the missing elements. This is important if later you have to prove that the 30-day period did not start correctly.' }
          ] }
        ] }
      ]
    },
    {
      id: 'sale-without-notice',
      title: 'If the flat was sold without you',
      content: [
        { kind: 'paragraph', text: 'If the landlord sold the property without proper notice, or the actual transaction turned out to be better for the buyer than what was offered to you, the tenant may file an ação de preferência. This is a claim through which the court replaces the buyer with the tenant if the statutory conditions are met.' },
        { kind: 'checklist', items: [
          'Deadline: 6 months from the moment you became aware of the material elements of the sale.',
          'Usually needed: tenancy agreement, proof of residence, recibos de renda, notices, certidão predial, copy of the escritura or dados da compra.',
          'You must be ready to buy on the real terms of the transaction, not merely cancel the sale.',
          'Under art. 1410 Código Civil, the price must be deposited within 15 days after filing the claim, unless the court applies procedural specifics of the particular case.',
          'The defendants are usually the seller and the buyer.',
          'The claim is filed in the Tribunal Judicial; in practice, you will hardly manage without a lawyer.',
          'If the property has already been resold, mortgaged or split, the dispute becomes more expensive and more complex, so act quickly.'
        ] },
        { kind: 'warning', text: '“I heard it from a neighbour” is a poor starting point if there is no evidence. Request a certidão permanente predial, save the date when you received the information and go straight to an advogado. Missing the 6 months usually kills the possibility of replacing the buyer.' }
      ]
    },
    {
      id: 'expat-practical',
      title: 'Practical points for expats: what to keep to hand',
      content: [
        { kind: 'paragraph', text: 'Foreigners must be especially careful not to lose evidence.\n\nIn Portugal, many things are decided by letters and registers, not by an agent’s verbal promises. If you may want to buy the home you rent, prepare the financial side in advance: NIF, tax address in Finanças, bank pre-approval, own funds for IMT, Imposto do Selo, notary and registration.' },
        { kind: 'checklist', items: [
          'Tenancy agreement with the start date and identificação da fração.',
          'Recibos de renda from Portal das Finanças or bank transfers.',
          'All letters from the landlord, agency and management company.',
          'Comprovativo de morada: atestado de residência, bills, contrato de arrendamento.',
          'Certidão permanente predial: shows the owner and transactions.',
          'Caderneta predial urbana: artigo matricial and tax information.',
          'Contact for an advogado or solicitador before the 30 days expire.',
          'Translator if you do not read legal Portuguese: mistakes in a prazo are expensive.'
        ] },
        { kind: 'warning', text: 'A tenant’s preferência does not freeze the sale forever. If you want to buy but cannot confirm financing, the landlord may move on after the 30 days correctly expire. A bank mortgage in Portugal often takes 4–8 weeks, so 30 days is a short period.' }
      ]
    }
  ],
  costs: [
    { label: 'Certidão permanente predial online', amountEUR: 15, note: 'Usually 6-month access to the entry in the Registo Predial; the price may vary by type of request.' },
    { label: 'Advogado consultation on preferência', amountEURMin: 100, amountEURMax: 250, note: 'Typical private-market range for an initial review of documents; complex disputes cost more.' },
    { label: 'Court dispute ação de preferência', amountEURMin: 1500, amountEURMax: 6000, note: 'Budget estimate: lawyer, taxas de justiça, registers, translations. Does not include the purchase price, which you must be ready to deposit.' }
  ],
  sources: [
    {
      title: 'Código Civil — art. 416–418, 1091 and 1410 on preferência and tenancy',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 64/2018 — changes to tenants’ preferência rights',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/64-2018-116068879',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CMS Portugal — Changes to tenants’ preferência rights',
      url: 'https://cms.law/pt/prt/publication/alteracoes-ao-direito-de-preferencia-dos-arrendatarios',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Casa Pronta — property purchase and sale and registration service',
      url: 'https://www.casapronta.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
