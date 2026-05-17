export default {
  editorialVoice: 'hackportugal',
  id: 'garagem-mecanica-bairro',
  categoryId: 'auto_ownership',
  title: 'Garagens e oficinas no bairro: como escolher um mecânico local',
  tldr: 'Em Portugal, uma oficina independente é muitas vezes mais barata do que o concessionário e mais prática para carros antigos: uma revisão costuma custar 60–150 €, a substituição de pastilhas/discos 150–400 €, e o diagnóstico 25–60 €. Procure no Google Maps, Habitissimo, recomendações de vizinhos e redes como Bosch Car Service, Norauto, Midas, Feu Vert, ACP. Peça sempre um orçamento antes dos trabalhos, uma fatura com NIF após o pagamento e a lista das peças. Em caso de trabalhos impostos, recusa de emissão de fatura ou “reparação sem resultado”, a reclamação é feita através do Livro de Reclamações e da ASAE.',
  tags: ['oficina', 'auto', 'mecânico', 'asae'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'where-to-search',
      title: 'Onde procurar uma oficina perto de si',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, “garagem” no uso comum significa muitas vezes uma pequena oficina independente, enquanto oficialmente se escreve mais frequentemente oficina auto, oficina mecânica, reparação automóvel. Para uma revisão normal, travões, pneus, bateria e diagnóstico, não é obrigatório ir ao concessionário: a oficina local costuma ser mais rápida e mais barata.' },
        { kind: 'checklist', items: [
          'Google Maps: procure “oficina auto”, “mecânico”, “revisão auto”, “pneus”, “travões” + o seu bairro',
          'Habitissimo: prático para pedir vários orçamentos, sobretudo para trabalhos de chapa e pintura',
          'Grupos do bairro no Facebook/WhatsApp/Telegram: pergunte por uma “oficina honesta no bairro”',
          'Junta de Freguesia e vizinhos: em localidades pequenas, as recomendações são muitas vezes mais fiáveis do que a publicidade',
          'Redes: Bosch Car Service, Norauto, Midas, Feu Vert — mais caras do que uma pequena oficina, mas mais padronizadas',
          'ACP: útil para sócios do clube, reboque, verificações e aconselhamento automóvel',
          'Concessionário da marca: melhor para garantia, campanhas de recolha, eletrónica complexa e carros recentes'
        ] }
      ]
    },
    {
      id: 'first-filter',
      title: 'Primeiro filtro: como perceber se a oficina é fiável',
      content: [
        { kind: 'paragraph', text: 'Uma boa oficina não tem necessariamente de parecer um showroom. O mais importante é a transparência: o mecânico recebe o carro, regista os sintomas, indica antecipadamente uma faixa de preço e telefona antes de instalar peças caras.' },
        { kind: 'checklist', items: [
          'Classificação no Google não inferior a 4,2 e não apenas 5 avaliações de amigos',
          'As avaliações têm detalhes concretos: “revisão”, “travões”, “embreagem”, “diagnóstico”, e não apenas “muito bom”',
          'O mecânico pergunta logo pela matrícula, VIN ou modelo/ano/motor',
          'Antes dos trabalhos, dão um orçamento ou pelo menos uma estimativa escrita por WhatsApp/SMS',
          'Confirmam as marcas das peças: original, OEM ou aftermarket',
          'Estão disponíveis para mostrar as peças antigas substituídas, se for pedido',
          'Emitem fatura/recibo com NIF, e não apenas “pague em dinheiro sem IVA”',
          'Há Livro de Reclamações físico ou acesso ao Livro de Reclamações eletrónico',
          'Não pressionam com frases como “é perigoso conduzir, tem de mudar tudo hoje”, se o problema não for crítico'
        ] },
        { kind: 'warning', text: 'Sinal de alerta: a oficina recusa indicar o preço antes de começar, pede para deixar o carro “uns dias para vermos”, não regista a quilometragem nem as queixas, propõe pagamento apenas em numerário sem fatura. Nem sempre é fraude, mas o risco de litígio aumenta muito.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'Preços típicos em 2026',
      content: [
        { kind: 'paragraph', text: 'Os preços dependem da região, marca, motor, qualidade das peças e acesso ao componente. Lisboa, Cascais, Porto e Algarve são geralmente mais caros do que as zonas do interior. Para modelos europeus populares dos segmentos B/C, as referências são as seguintes:' },
        { kind: 'checklist', items: [
          'Revisão simples: óleo + filtro de óleo + verificação básica — 60–150 €',
          'Revisão completa: óleo, filtros, níveis, diagnóstico — 120–250 €',
          'Diagnóstico informático OBD — 25–60 €, por vezes gratuito se avançar com a reparação',
          'Substituição das pastilhas dianteiras — 80–180 €',
          'Pastilhas + discos num eixo — 150–400 €',
          'Bateria com instalação — 80–220 €',
          'Substituição de pneus: montagem/equilibragem normalmente 10–20 € por roda, sem o custo dos pneus',
          'Carregamento do ar condicionado — 50–100 €, se não houver fuga',
          'Mão de obra à hora numa oficina independente — frequentemente 30–60 €/hora; o concessionário pode ser bastante mais caro'
        ] },
        { kind: 'warning', text: 'Uma revisão muito barata por 30–40 € muitas vezes não inclui óleo de qualidade, filtros ou IVA. Pergunte que óleo será usado: a viscosidade, a norma do fabricante e a marca devem ser adequadas ao seu motor.' }
      ]
    },
    {
      id: 'booking-and-paperwork',
      title: 'Como marcar e o que dizer em português',
      content: [
        { kind: 'paragraph', text: 'Nas pequenas oficinas, a marcação é muitas vezes feita por WhatsApp. Escreva de forma breve: modelo, ano, motor, matrícula, quilometragem, sintomas, o que já foi substituído. Uma fotografia do erro no painel e um vídeo do ruído ajudam mais do que uma descrição longa.' },
        { kind: 'checklist', items: [
          '“Preciso de uma revisão. Pode dar orçamento?” — precisa de uma revisão, podem dar uma estimativa?',
          '“Qual é o preço com IVA e mão de obra incluída?” — preço com IVA e mão de obra?',
          '“Que marca de óleo e filtros vai usar?” — que óleo e filtros serão utilizados?',
          '“Antes de trocar peças caras, ligue-me por favor.” — antes de substituir peças caras, telefone-me',
          '“Pode enviar orçamento por WhatsApp?” — pode enviar o orçamento por WhatsApp?',
          '“Quero fatura com NIF.” — precisa de fatura com NIF',
          '“Pode guardar as peças antigas para eu ver?” — pode guardar as peças antigas para as ver?',
          '“Quando fica pronto?” — quando estará pronto?'
        ] },
        { kind: 'paragraph', text: 'Conjunto mínimo de documentos ao entregar o carro: Documento Único Automóvel ou dados do veículo, o seu contacto, NIF para a fatura, descrição do problema. Não deixe no carro documentos, dinheiro, Via Verde, objetos de valor nem chaves extra.' }
      ]
    },
    {
      id: 'inspection-and-safety',
      title: 'IPO, IMT e segurança: onde está a fronteira entre reparação e obrigações',
      content: [
        { kind: 'paragraph', text: 'Uma oficina normal repara o carro, mas não substitui a inspeção periódica obrigatória (IPO). O prazo da IPO depende do tipo e da idade do veículo; confirme no Documento Único Automóvel e nas regras do IMT. Se o carro chumbar na IPO, a oficina pode corrigir os defeitos, mas a reinspeção é feita num centro de inspeção.' },
        { kind: 'checklist', items: [
          'Antes de comprar um carro usado, peça uma pré-inspeção ou diagnóstico numa oficina independente',
          'Após reparação de travões, direção, suspensão e pneus, exija um teste de estrada e a confirmação dos trabalhos na fatura',
          'Se a luz de check engine, airbag, ABS ou ESP estiver acesa — não se limite a “apagar o erro”',
          'Em caso de acidente e reparação de chapa, confirme se airbags, sensores, estrutura e alinhamento foram afetados',
          'Para híbridos e EV, escolha uma oficina com experiência em high voltage, e não uma garagem qualquer',
          'Para carros em garantia, confirme se a manutenção fora do concessionário pode afetar as condições da garantia',
          'Após a substituição da correia de distribuição, peça que a fatura indique a quilometragem e o conjunto de peças'
        ] },
        { kind: 'warning', text: 'Não aceite “passar a IPO por conhecimentos”. A inspeção legal é realizada apenas em centros de inspeção autorizados. Manipulações da quilometragem, emissões ou DPF/EGR podem criar problemas na IPO, na venda e em caso de sinistro.' }
      ]
    },
    {
      id: 'complaints',
      title: 'Se foi enganado: fatura, Livro de Reclamações, ASAE',
      content: [
        { kind: 'paragraph', text: 'É mais fácil ganhar um litígio se tiver um rasto documental: orçamento, mensagens, fotografias/vídeos antes da reparação, fatura, lista de peças e data de entrega do carro. Um acordo verbal “fazemos barato” é quase inútil.' },
        { kind: 'checklist', items: [
          'Comece por pedir calmamente uma explicação escrita: o que foi feito, que peças foram instaladas, porque aumentou o preço',
          'Peça uma cópia da fatura e um recibo detalhado: peças, mão de obra, IVA',
          'Se o preço aumentou sem aprovação — indique que o orçamento não foi aprovado',
          'Se a avaria não foi resolvida — peça novo diagnóstico sem novo pagamento',
          'Guarde WhatsApp, chamadas, fotografias das peças, leitura do odómetro e erro no painel',
          'Preencha o Livro de Reclamações físico no local ou o Livro de Reclamações eletrónico',
          'Em caso de recusa de entrega do Livro de Reclamações ou de fatura, apresente queixa à ASAE',
          'Em caso de dano significativo, recorra a advogado, Centro de Arbitragem de Conflitos de Consumo ou proteção jurídica do seguro'
        ] },
        { kind: 'warning', text: 'Não levante o carro “sem papéis” se o litígio já começou. O pagamento em numerário sem fatura retira-lhe provas e normalmente significa que o IVA não foi declarado.' }
      ]
    }
  ],
  costs: [
    { label: 'Revisão simples', amountEURMin: 60, amountEURMax: 150, note: 'Óleo, filtro de óleo e verificação básica; depende do óleo e do motor.' },
    { label: 'Revisão completa', amountEURMin: 120, amountEURMax: 250, note: 'Óleo, vários filtros, níveis, diagnóstico; no concessionário pode ser mais caro.' },
    { label: 'Diagnóstico OBD', amountEURMin: 25, amountEURMax: 60, note: 'Por vezes é descontado no custo da reparação, se deixar o carro.' },
    { label: 'Substituição de pastilhas/discos de travão', amountEURMin: 150, amountEURMax: 400, note: 'Um eixo: discos + pastilhas + mão de obra; peças premium são mais caras.' },
    { label: 'Montagem e equilibragem de pneus', amountEURMin: 10, amountEURMax: 20, note: 'Normalmente por roda, sem o custo do próprio pneu.' }
  ],
  sources: [
    { title: 'IMT — Instituto da Mobilidade e dos Transportes: regras de transporte e inspeção', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACP — Automóvel Club de Portugal: serviços automóveis, assistência e informação ao consumidor', url: 'https://www.acp.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ASAE — Autoridade de Segurança Alimentar e Económica: fiscalização económica e reclamações', url: 'https://www.asae.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Livro de Reclamações Eletrónico — portal oficial de reclamações dos consumidores', url: 'https://www.livroreclamacoes.pt/Inicio/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
