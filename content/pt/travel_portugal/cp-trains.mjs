export default {
  editorialVoice: 'hackportugal',
  id: 'cp-trains',
  categoryId: 'travel_portugal',
  title: 'Comboios CP (Comboios de Portugal) — como utilizar',
  tldr: 'A CP é a operadora ferroviária pública.\n\nTipos de comboios: Alfa Pendular (rápidos Lisboa — Porto em 2,5 h), Intercidades (médios), Regional (lentos), Urbanos (suburbanos).\n\nCartões de desconto: Cartão Jovem, Cartão Amigo. Lisboa — Porto no Alfa Pendular: cerca de 25–40 €, Intercidades: cerca de 20–30 €. Reserve em cp.pt.',
  tags: ['comboio', 'cp', 'alfa pendular', 'intercidades'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: 'Tipos de comboios',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Alfa Pendular (AP)', content: [
            { kind: 'paragraph', text: 'O serviço de referência da CP. Comboios rápidos com inclinação da caixa. Lisboa — Porto em 2,5 h. Wi-Fi, tomadas, carruagem-bar. 2 classes: Conforto (classe económica), Primeira (primeira classe). Rotas: Lisboa — Coimbra — Porto — Braga, Lisboa — Algarve.' }
          ]},
          { id: 't2', title: 'Intercidades (IC)', content: [
            { kind: 'paragraph', text: 'Comboios de longa distância, 30–50 min mais lentos do que o AP e 20–30% mais baratos. As mesmas rotas principais, mais ramais. Confortáveis.' }
          ]},
          { id: 't3', title: 'Internacional', content: [
            { kind: 'paragraph', text: 'O Sud Expresso nocturno Lisboa — Madrid deixou de circular em 2020 — foi substituído por autocarro. Existe um comboio regional Porto — Vigo que atravessa a fronteira.' }
          ]},
          { id: 't4', title: 'Regional', content: [
            { kind: 'paragraph', text: 'Comboios lentos com paragens frequentes. Para localidades mais pequenas. Baratos.' }
          ]},
          { id: 't5', title: 'Urbanos', content: [
            { kind: 'paragraph', text: 'Comboios suburbanos de Lisboa (Cascais, Sintra, Tomar, Setúbal) e do Porto (Braga, Aveiro, Guimarães). Pagamento com Navegante/Andante ou bilhete normal.' }
          ]}
        ]}
      ]
    },
    {
      id: 'key-routes',
      title: 'Rotas principais (preços de 2026)',
      content: [
        { kind: 'checklist', items: [
          'Lisboa ↔ Porto AP: 2 h 45 min, 25–40 € (descontos até -65% ao comprar com 8+ dias de antecedência)',
          'Lisboa ↔ Porto IC: 3 h, 20–32 €',
          'Lisboa ↔ Coimbra AP: 1 h 40 min, 18–25 €',
          'Lisboa ↔ Faro (Alentejo — Algarve): 3 h AP / 3 h 40 min IC, 20–35 €',
          'Porto ↔ Braga: 1 h em Urbano, 4 €',
          'Porto ↔ Aveiro: 35 min, 4 €',
          'Lisboa ↔ Cascais Urbano: 40 min, 1,95 € (Navegante)',
          'Lisboa ↔ Sintra Urbano: 40 min, 2,45 €'
        ]}
      ]
    },
    {
      id: 'booking',
      title: 'Como reservar',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Site da CP ou aplicação', content: [
            { kind: 'paragraph', text: 'cp.pt ou a aplicação CP. Registo, NIF (recomendável), cartão de pagamento.' },
            { kind: 'link', text: 'cp.pt', url: 'https://www.cp.pt/' }
          ]},
          { id: 'b2', title: '2. Descontos — planeie com antecedência', content: [
            { kind: 'checklist', items: [
              'Com 8+ dias de antecedência: até -65% no AP e IC (Lisboa — Porto de 40 € para cerca de 14 €)',
              'Com 5–7 dias de antecedência: até -56%',
              'Cartão Jovem (dos 12 aos 30 anos): -25% em IC e Regional (não válido no AP)',
              'Cartão Amigo (cartão anual por 25 €): -20% em todas as viagens',
              'Desconto familiar: 4+ = -50% para crianças dos 4 aos 12 anos',
              'Estudantes com comprovativo — descontos adicionais'
            ]}
          ]},
          { id: 'b3', title: '3. Bilhete no telemóvel', content: [
            { kind: 'paragraph', text: 'PDF ou na aplicação. O revisor digitaliza o código QR. Se for Alfa Pendular, o lugar fica reservado.' }
          ]},
          { id: 'b4', title: '4. Reserva nos Urbanos', content: [
            { kind: 'paragraph', text: 'Não é necessária reserva. Pode comprar bilhete na estação, através da aplicação ou pagar com o cartão Navegante (Lisboa) / Andante (Porto).' }
          ]}
        ]}
      ]
    },
    {
      id: 'stations',
      title: 'Principais estações ferroviárias',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Lisboa', content: [
            { kind: 'checklist', items: [
              'Santa Apolónia — estação tradicional, para AP/IC para o Porto e para o norte',
              'Oriente — estação moderna, Parque das Nações, todos os AP/IC + Urbanos',
              'Gare do Oriente — o mesmo que Oriente; linha vermelha do metro',
              'Rossio — Urbanos para Sintra',
              'Cais do Sodré — Urbanos para Cascais',
              'Entrecampos — comboios de longa distância para sul'
            ]}
          ]},
          { id: 's2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              'Campanhã — estação principal, AP/IC',
              'São Bento — estação turística (azulejos), Urbanos',
              'Contumil — interface de Urbanos, ligações para norte e este'
            ]}
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'CP — Comboios de Portugal', url: 'https://www.cp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Infraestruturas de Portugal', url: 'https://www.infraestruturasdeportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
