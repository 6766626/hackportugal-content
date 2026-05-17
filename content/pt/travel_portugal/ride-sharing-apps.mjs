export default {
  editorialVoice: 'hackportugal',
  id: 'ride-sharing-apps',
  categoryId: 'auto_trips',
  title: 'Uber / Bolt / FreeNow / BlaBlaCar em Portugal',
  tldr: 'Uber e Bolt são os líderes. Funcionam em todo o país. A Bolt é normalmente 10–20% mais barata. FreeNow — táxis oficiais através da aplicação. Táxi normal (carros pretos e verdes) — pagamento por taxímetro, mais caro no aeroporto. BlaBlaCar — viagens partilhadas entre cidades.',
  tags: ['uber', 'bolt', 'táxi', 'blablacar'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'apps',
      title: 'Principais aplicações',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Uber', content: [
            { kind: 'paragraph', text: 'Funciona em Lisboa, Porto, Algarve, Braga, Coimbra, Aveiro. UberX (normal), Uber Comfort, Uber Black. É frequentemente utilizada para viagens para o aeroporto.' },
          ]},
          { id: 'a2', title: 'Bolt', content: [
            { kind: 'paragraph', text: 'Empresa estónia. Normalmente é 10–20% mais barata do que a Uber. Há mais carros nas grandes cidades. Categorias Bolt: Económica / Standard / XL.' }
          ]},
          { id: 'a3', title: 'FreeNow (antiga mytaxi)', content: [
            { kind: 'paragraph', text: 'Táxis oficiais (pretos e verdes) através da aplicação. Preço por taxímetro. Muitas vezes tem um custo mais previsível na hora de ponta, quando a Uber/Bolt aplica tarifa dinâmica.' }
          ]},
          { id: 'a4', title: 'Táxi normal', content: [
            { kind: 'paragraph', text: 'Pode apanhá-lo na rua, encontrá-lo numa praça de táxis ou chamá-lo por telefone. Tarifa 1 (dia): valor inicial 3,25 € + 0,47 €/km. Tarifa 2 (noite, fins de semana): +20%. Aeroporto — preços fixos por destino.' }
          ]},
          { id: 'a5', title: 'BlaBlaCar', content: [
            { kind: 'paragraph', text: 'Viagens partilhadas entre cidades. Lisboa—Porto pode custar 15–25 € (mais barato do que o autocarro). Lisboa—Madrid é um percurso popular. Pagamento através da aplicação, sem dinheiro.' }
          ]}
        ]}
      ]
    },
    {
      id: 'price-comparison',
      title: 'Preço — referência (Lisboa)',
      content: [
        { kind: 'checklist', items: [
          'Aeroporto → Baixa (Lisboa): Uber/Bolt 10–15 €, táxi 15–20 €, FreeNow ~15 €',
          'Baixa → Belém: Uber/Bolt 7–10 €, táxi 10–14 €',
          'Lisboa → Cascais: Uber/Bolt 25–35 €, táxi 40–50 €',
          'Viagens curtas de 5–10 min: normalmente 4–6 €',
          'Hora de ponta / tarifa dinâmica: até x2'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Dicas',
      content: [
        { kind: 'checklist', items: [
          'Compare Uber e Bolt no mesmo momento — o preço muda a cada minuto',
          'Na Uber existe Uber Pool (viagens partilhadas) — mais barato, mas mais lento (actualmente não disponível em todo o lado)',
          'Evite táxis-armadilha em zonas turísticas — podem ligar o taxímetro antes de entrar ou escolher um percurso desnecessariamente longo',
          'Para viagens longas, BlaBlaCar é mais económico: Lisboa—Porto a partir de 15 € contra 20–40 € de comboio',
          'Gorjetas: 5–10% é habitual em Portugal para Uber/Bolt (pode deixar na aplicação)',
          'Pagamento: qualquer cartão internacional + MB WAY',
          'Se um táxi lhe cobrar a mais — anote o número e apresente queixa à Autoridade de Mobilidade e Transportes'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AMT — regulador dos transportes em Portugal', url: 'https://www.amt-autoridade.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — transporte individual', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 45/2018 — regulamentação TVDE (Uber/Bolt)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/45-2018', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
