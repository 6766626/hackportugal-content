export default {
  editorialVoice: 'hackportugal',
  id: 'taxis-tarifa-pt',
  categoryId: 'public_transport',
  title: 'Táxis em Portugal: Tarifário 1/2/3, suplementos nocturnos e pedidos',
  tldr: 'Os táxis em Portugal não são TVDE/Uber: o preço é calculado pelo taxímetro e regulado por tarifas. Na cidade, normalmente é aplicada a Tarifa 1: bandeirada de 3,25 € em dias úteis das 06:00 às 21:00; Tarifa 2: bandeirada de 3,90 € à noite, das 21:00 às 06:00, aos fins-de-semana e feriados. A Tarifa 3 aplica-se fora da localidade: o km é mais caro porque inclui o regresso da viatura. Suplementos: chamada por telefone/app cerca de 0,80 €, bagagem/animal 1,60 €, portagens — pagas pelo passageiro.',
  tags: ['táxi', 'tarifa', 'lisboa', 'aeroporto'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'taxi-vs-tvde',
      title: 'Táxi ≠ TVDE: como não confundir',
      content: [
        { kind: 'paragraph', text: 'Um táxi comum em Portugal é uma viatura licenciada com letreiro TAXI, taxímetro, número de licença e autocolante oficial de tarifas. A cor é, na maioria das vezes, bege; as viaturas antigas podem ser pretas e verdes.' },
        { kind: 'paragraph', text: 'TVDE é Uber, Bolt, FREENOW Ride, Cabify e outros transportes privados com preço definido pela app. Os TVDE não têm taxímetro nem Tarifário 1/2/3. Este guia é especificamente sobre táxis legais.' },
        { kind: 'checklist', items: [
          'No táxi, o preço é calculado pelo taxímetro, não pelo preço previamente apresentado na app.',
          'O motorista é obrigado a ligar o taxímetro no início da viagem.',
          'A licença e o Livro de Reclamações devem estar visíveis no habitáculo.',
          'Você tem direito a pedir recibo/fatura com NIF ou sem NIF.',
          'O pagamento com cartão nem sempre está disponível: confirme antes de entrar — “Aceita cartão?”',
          'MB WAY existe em alguns táxis, mas não é uma forma de pagamento garantida.',
          'TVDE pode ser mais barato dentro da cidade, mas em aeroportos/à noite o surge pricing às vezes torna o táxi mais vantajoso.'
        ] }
      ]
    },
    {
      id: 'tarifas-1-2-3',
      title: 'Tarifário 1/2/3: o que significa o número no taxímetro',
      content: [
        { kind: 'paragraph', text: 'No taxímetro é apresentado o número da tarifa. O essencial: Tarifa 1 e 2 são viagens urbanas dentro da localidade; Tarifa 3 é para viagens fora da localidade/zona municipal, em que o preço inclui, na prática, o percurso de regresso da viatura.' },
        { kind: 'checklist', items: [
          'Tarifa 1 — tarifa urbana diurna: dias úteis, aproximadamente 06:00–21:00. Referência em Portugal: bandeirada de 3,25 €, km cerca de 0,47 €.',
          'Tarifa 2 — tarifa urbana nocturna/fim-de-semana/feriado: aproximadamente 21:00–06:00, sábado, domingo e feriados. Referência: bandeirada de 3,90 €, km cerca de 0,56 €.',
          'Tarifa 3 — viagem diurna fora da cidade: aplica-se após a saída da zona onde vigora a tarifa urbana. Referência: cerca de 0,94 €/km, porque considera o regresso do táxi.',
          'Para uma viagem fora da cidade à noite/fim-de-semana pode ser aplicada a tarifa seguinte, mais elevada, frequentemente indicada como Tarifa 4; a lógica é a mesma, mas mais cara.',
          'A espera no trânsito ou numa paragem solicitada pelo passageiro é cobrada por tempo: referência de cerca de 14,80 €/hora em regime urbano diurno e mais à noite.',
          'O preço mínimo da viagem normalmente corresponde à bandeirada; uma viagem curta de 500 m não vai custar 0,50 €.'
        ] },
        { kind: 'warning', text: 'Os valores exactos dependem da convenção de preços em vigor e das regras locais. Se os números no autocolante da viatura forem diferentes das referências acima, consulte a tabela oficial no habitáculo e o talão do taxímetro.' }
      ]
    },
    {
      id: 'surcharges',
      title: 'Nocturno, fins-de-semana e outros suplementos',
      content: [
        { kind: 'paragraph', text: 'O suplemento nocturno e de feriado normalmente não aparece como linha separada: o motorista simplesmente activa a Tarifa 2 em vez da Tarifa 1. Por isso, à noite vê no taxímetro uma bandeirada mais cara e “saltos” de tarifa mais caros.' },
        { kind: 'checklist', items: [
          'Noite: aproximadamente das 21:00 às 06:00 — Tarifa 2.',
          'Fins-de-semana: sábado e domingo — Tarifa 2 mesmo durante o dia.',
          'Feriados nacionais — Tarifa 2.',
          'Chamar um táxi por telefone, central de rádio ou através de app pode acrescentar cerca de 0,80 €.',
          'Bagagem na bagageira: normalmente 1,60 €; bagagem de mão no habitáculo, sem usar a bagageira, normalmente não deve contar como suplemento de bagagem.',
          'Transporte de animal doméstico: normalmente 1,60 €; cão de assistência não deve ser tarifado como um animal comum.',
          'Estradas com portagem, pontes e portagens são pagas pelo passageiro para além da tarifa.',
          'Aeroporto de Lisboa: na praça oficial pode surgir um pequeno supplemento, tipicamente 1,60 €, muitas vezes associado ao aeroporto/bagagem; isto não é uma “taxa de aeroporto” de 5–10 €.',
          'A cadeira de criança normalmente não é responsabilidade do táxi: se for essencial, peça com antecedência e confirme com a central.'
        ] },
        { kind: 'warning', text: 'Se o motorista pedir um preço fixo “sem taxímetro” dentro da cidade, especialmente a partir do aeroporto de Lisboa ou numa estação, é um sinal de alerta. Peça para ligar o taxímetro: “Pode ligar o taxímetro, por favor?”' }
      ]
    },
    {
      id: 'how-to-book',
      title: 'Como pedir: praça, telefone, FREE NOW',
      content: [
        { kind: 'paragraph', text: 'Nas grandes cidades, o mais simples é: apanhar um táxi livre na rua, entrar numa praça de táxis junto à estação/aeroporto/hospital ou pedir através de app. Em cidades pequenas, é mais fiável telefonar para a central local.' },
        { kind: 'substeps', items: [
          { id: 'rank', title: '1. Praça de táxis', content: [
            { kind: 'paragraph', text: 'Dirija-se à primeira viatura da fila, mas se precisar de pagar com cartão, transportar bagagem grande ou levar um animal — confirme antes de entrar. No aeroporto de Lisboa, use a fila oficial junto à saída e não aceite propostas de pessoas no terminal.' }
          ] },
          { id: 'phone', title: '2. Telefone', content: [
            { kind: 'paragraph', text: 'Para Lisboa funciona o número +351 218 119 000. Indique a morada, um ponto de referência, o número de passageiros, a bagagem e se precisa de pagamento com cartão.' },
            { kind: 'paragraph', text: 'Frase útil: “Queria pedir um táxi para [morada]. Somos duas pessoas, com uma mala. Aceita cartão?”' }
          ] },
          { id: 'app', title: '3. FREE NOW', content: [
            { kind: 'paragraph', text: 'Na FREE NOW pode pedir especificamente Taxi, e não uma viagem TVDE. Em algumas cidades, a app mostra um intervalo aproximado, mas o preço final do táxi continua a ser calculado pelo taxímetro mais os supplementos legais.' }
          ] }
        ] }
      ]
    },
    {
      id: 'airport-and-long-distance',
      title: 'Aeroporto de Lisboa e viagens entre cidades',
      content: [
        { kind: 'paragraph', text: 'Do aeroporto de Lisboa até ao centro, a viagem costuma ser curta: Marquês de Pombal, Baixa, Saldanha muitas vezes ficam aproximadamente nos 10–18 € durante o dia, sem grande trânsito; à noite/fins-de-semana é mais caro. Para Cascais, Sintra, Setúbal ou outro município, o taxímetro pode passar para tarifa fora da cidade.' },
        { kind: 'checklist', items: [
          'Antes de entrar, confirme que é um táxi oficial com roof sign TAXI.',
          'Certifique-se de que o taxímetro está a zero e foi ligado após o início da viagem.',
          'Se vai para longe, peça uma estimativa: “Quanto pode custar aproximadamente?”',
          'Para viagens interurbanas, o motorista pode propor preço combinado; aceite apenas se o preço estiver claro antes da partida.',
          'As pontes com portagem 25 de Abril/Vasco da Gama, auto-estradas e SCUT são pagas à parte.',
          'Se precisar de recibo para a empresa ou IRS, peça logo “fatura com NIF”.',
          'Se a bagagem for grande, confirme o supplemento; 1,60 € é uma ordem de grandeza normal, 10 € “por mala” não é.'
        ] },
        { kind: 'warning', text: 'Para viagens longas, o táxi é frequentemente mais caro do que comboio, Rede Expressos, FlixBus ou transfer reservado com antecedência. Mas à noite, com crianças, animais ou muita bagagem, o táxi pode ser a opção mais prática.' }
      ]
    },
    {
      id: 'complaints',
      title: 'Se o preço parecer incorrecto',
      content: [
        { kind: 'paragraph', text: 'Não discuta na estrada. Primeiro peça o recibo e fotografe o número do táxi/licença. O recibo deve incluir data, hora, valor, dados do operador e, se tiver pedido, o seu NIF.' },
        { kind: 'checklist', items: [
          'Peça recibo/fatura: “Pode dar recibo, por favor?”',
          'Fotografe o número da licença do táxi e o autocolante de tarifas no habitáculo.',
          'Verifique se a Tarifa 2 foi activada legalmente: noite, fim-de-semana ou feriado.',
          'Verifique se a viagem saiu da localidade: nesse caso, a Tarifa 3 pode ser normal.',
          'Se o motorista se recusar a dar recibo, isso é motivo para reclamação.',
          'Peça o Livro de Reclamações no local ou apresente reclamação online.',
          'Para infracções sistemáticas, pode reclamar junto do IMT/serviços municipais e através do Livro de Reclamações Eletrónico.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Bandeirada Tarifa 1, cidade, dias úteis 06:00–21:00', amountEUR: 3.25, note: 'Referência segundo as tarifas oficiais em vigor; consulte a tabela no habitáculo' },
    { label: 'Bandeirada Tarifa 2, noite/fins-de-semana/feriados', amountEUR: 3.90, note: 'Normalmente aplica-se 21:00–06:00, sábados, domingos e feriados' },
    { label: 'Km urbano Tarifa 1', amountEUR: 0.47, note: 'O taxímetro calcula por impulsos, não numa linha única “por km”' },
    { label: 'Km urbano Tarifa 2', amountEUR: 0.56, note: 'Regime urbano nocturno/fim-de-semana' },
    { label: 'Km fora da cidade Tarifa 3', amountEUR: 0.94, note: 'Referência diurna; mais caro devido ao pagamento do regresso do táxi' },
    { label: 'Chamada por telefone/app', amountEUR: 0.80, note: 'Pode ser acrescentado como supplemento' },
    { label: 'Bagagem ou animal', amountEUR: 1.60, note: 'Suplemento legal habitual; assistance dogs não como animais comuns' },
    { label: 'Aeroporto de Lisboa/supplemento de bagagem', amountEUR: 1.60, note: 'Pequeno supplemento na praça oficial; não confundir com uma “airport fee” arbitrária' }
  ],
  sources: [
    { title: 'IMT: táxis e transporte em táxi', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE: Decreto-Lei consolidado sobre transporte em táxi', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1989-34540275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Aeroporto de Lisboa: táxis a partir do aeroporto', url: 'https://www.aeroportolisboa.pt/en/lis/access-parking/getting-to-and-from-the-airport/taxi', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'FREE NOW Portugal: pedir Taxi através da aplicação', url: 'https://www.free-now.com/pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
