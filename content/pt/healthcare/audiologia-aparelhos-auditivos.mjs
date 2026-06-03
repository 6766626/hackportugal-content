export default {
  editorialVoice: 'hackportugal',
  id: 'audiologia-aparelhos-auditivos',
  categoryId: 'healthcare',
  title: 'Audiologia e aparelhos auditivos: Widex, Oticon, Acustimedi',
  tldr: 'Em Portugal, normalmente compra-se um aparelho auditivo depois de uma consulta de ORL e de uma audiometria. A via privada é rápida: o teste é muitas vezes gratuito, um aparelho Widex/Oticon/Phonak/Signia custa cerca de 1 500–3 500 € por ouvido, e a afinação está incluída. Pelo SNS, o percurso é mais lento: médico de família → ORL → relatório/prescrição → pedido de produto de apoio; se a comparticipação for aprovada, o copagamento final desce muitas vezes para 500–1 500 €, mas depende do orçamento, da clínica e do modelo.',
  tags: ['audiologia', 'sns', 'audição', 'widex', 'oticon'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-check',
      title: 'Quando ir à audiologia e quando ir ao ORL',
      content: [
        { kind: 'paragraph', text: 'Se começou a ouvir pior a fala, aumenta o volume da televisão, pede para repetirem frases ou ouve zumbidos nos ouvidos, comece por fazer uma avaliação auditiva. Em Portugal, isto chama-se audiometria tonal/vocal; por vezes acrescenta-se impedanciometria.' },
        { kind: 'paragraph', text: 'Um ponto importante: um vendedor de aparelhos auditivos pode fazer um teste e adaptar um aparelho, mas o diagnóstico médico é feito pelo médico ORL — otorrinolaringologista. Para o SNS, comparticipação e sintomas graves, é mesmo necessário um ORL.' },
        { kind: 'checklist', items: [
          'Vá ao ORL com urgência se a perda auditiva tiver surgido subitamente em horas/dias',
          'Dor, corrimento do ouvido, febre — primeiro médico de família/ORL, não uma loja de aparelhos',
          'Perda auditiva unilateral ou ruído intenso num só ouvido exige diagnóstico médico',
          'Tonturas, perturbação do equilíbrio, sintomas neurológicos — não adie',
          'Se a perda auditiva for relacionada com a idade e gradual, pode em paralelo marcar um teste gratuito numa rede privada',
          'Nas crianças, o percurso é apenas através do pediatra/ORL; não compre um aparelho sem parecer médico'
        ] },
        { kind: 'warning', text: 'A perda auditiva neurossensorial súbita é uma urgência médica. Quanto mais cedo for o tratamento, maior é a probabilidade de recuperação. Não espere pelo “teste gratuito da próxima semana”.' }
      ]
    },
    {
      id: 'sns-route',
      title: 'Percurso pelo SNS e comparticipação',
      content: [
        { kind: 'paragraph', text: 'Pelo SNS, não se trata apenas de comprar o aparelho mais barato: é necessário passar por uma cadeia médica e obter um documento que confirme a necessidade de um produto de apoio.\n\nNa prática, demora mais tempo, mas pode reduzir o copagamento pessoal dos 1 500–3 500 € por ouvido no privado para cerca de 500–1 500 €, ou até menos, se o subsídio for aprovado e houver orçamento.' },
        { kind: 'substeps', items: [
          { id: 'gp', title: '1. Médico de família ou consulta aberta', content: [
            { kind: 'paragraph', text: 'Marque no Centro de Saúde. É necessário número de utente. O médico fará o encaminhamento para ORL, se houver fundamentos.' }
          ] },
          { id: 'orl', title: '2. Consulta de ORL', content: [
            { kind: 'paragraph', text: 'O ORL observa o ouvido, exclui rolhões de cerúmen, otite, perfuração, causas tumorais e neurológicas. Depois disso, prescreve audiometria e outros testes.' }
          ] },
          { id: 'tests', title: '3. Audiometria e relatório', content: [
            { kind: 'paragraph', text: 'O resultado deve mostrar o tipo e o grau de perda auditiva. Para o pedido de apoio, normalmente é necessário um relatório médico/prescrição que indique a necessidade de aparelho auditivo.' }
          ] },
          { id: 'support', title: '4. Pedido de produto de apoio', content: [
            { kind: 'paragraph', text: 'Os aparelhos auditivos integram o sistema de produtos de apoio. Os pedidos podem passar por entidades prescritoras/financiadoras, incluindo o SNS e a Segurança Social, consoante a situação. Na prática, pergunte ao ORL e ao serviço administrativo do hospital qual é exactamente o percurso em vigor no seu ACES/ULS.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Número de utente SNS',
          'NIF',
          'Documento: autorização de residência, Cartão de Cidadão, passaporte com visto ou outro documento de permanência legal',
          'Encaminhamento do médico de família ou marcação em ORL',
          'Relatório médico do ORL',
          'Audiometria tonal e vocal; por vezes impedanciometria',
          'Orçamento/quote do fornecedor de aparelhos auditivos',
          'IBAN e contactos, se for exigido reembolso',
          'Pode ser necessária prova de rendimentos para percursos sociais'
        ] },
        { kind: 'warning', text: 'Comparticipação não significa desconto automático na caixa. Muitas vezes é necessário um pedido prévio, orçamento e aguardar uma decisão. Não compre um aparelho por 3 000 € a contar que o SNS “depois devolve de certeza” o dinheiro enquanto não tiver confirmação escrita do percurso e das condições.' }
      ]
    },
    {
      id: 'private-route',
      title: 'Redes privadas: Acustimedi, Acoustimedi e outras',
      content: [
        { kind: 'paragraph', text: 'A via privada é conveniente se precisa de perceber rapidamente se necessita de aparelho e testar modelos.\n\nEm Portugal existem redes e gabinetes de audiologia: Acustimedi, Minisom, GAES/Amplifon, MultiOpticas Audiologia, bem como audiologistas locais. O nome Acoustimedi aparece em pesquisas e em algumas páginas, mas antes da visita confirme a designação legal, a morada e as avaliações: a marca mais reconhecida é Acustimedi.' },
        { kind: 'paragraph', text: 'Um teste gratuito numa loja não substitui o ORL, mas é um bom ponto de partida. A prática normal é: teste, período experimental, afinação, controlo após 2–4 semanas e depois reajustes regulares.' },
        { kind: 'checklist', items: [
          'Peça uma impressão do audiograma, e não apenas um “precisa de aparelho” verbal',
          'Pergunte se estão incluídos 2–5 anos de garantia e ajustes gratuitos',
          'Confirme a duração do período experimental: muitas vezes 15–30 dias, mas as condições variam',
          'Verifique se no orçamento o preço indicado é por um ouvido ou pelo par',
          'Compare pelo menos 2 redes: a diferença para o mesmo modelo pode ser de centenas de euros',
          'Pergunte sobre rechargeable battery: é cómodo, mas a substituição posterior da bateria tem custos',
          'Confirme a compatibilidade com iPhone/Android e com a aplicação do fabricante',
          'Não compre amplificadores de som em marketplaces em vez de um aparelho auditivo médico',
          'Se lhe propuserem “só hoje -50%”, leve o orçamento e vá comparar'
        ] }
      ]
    },
    {
      id: 'brands',
      title: 'Widex, Oticon: o que escolher na prática',
      content: [
        { kind: 'paragraph', text: 'Widex e Oticon são marcas premium sólidas, disponíveis em Portugal através de gabinetes parceiros. Ambas têm modelos RIC/BTE modernos, versões recarregáveis, Bluetooth, aplicações e redução de ruído. A diferença está muitas vezes não no logótipo, mas em quão bem o audiologista afina o aparelho para a sua audiometria e para situações reais: trabalho, rua, restaurantes, fala em português.' },
        { kind: 'checklist', items: [
          'RIC/RITE — corpo pequeno atrás da orelha, a opção mais frequente na perda auditiva relacionada com a idade',
          'BTE — mais potente e resistente, muitas vezes adequado para perdas auditivas mais fortes',
          'ITE/ITC — modelos intra-auriculares são menos visíveis, mas não servem para todos em termos de anatomia e potência',
          'Rechargeable — cómodo para pessoas idosas que têm dificuldade em trocar pilhas',
          'Bluetooth — útil para chamadas, mas confirme especificamente o seu modelo de telemóvel',
          'Programa de tinnitus — pode ajudar no zumbido, mas não trata a causa',
          'Redução de ruído e microfones direccionais são importantes para restaurantes e escritórios',
          'Protecção contra humidade não significa que possa nadar ou tomar duche com o aparelho'
        ] },
        { kind: 'paragraph', text: 'Para comparar, peça não “o melhor aparelho”, mas 2–3 orçamentos: básico, intermédio e premium. Para muitas pessoas, a gama intermédia oferece quase todo o efeito prático, se a afinação for bem feita.' }
      ]
    },
    {
      id: 'money',
      title: 'Quanto custa em 2026 e onde poupar',
      content: [
        { kind: 'paragraph', text: 'O mercado é pouco transparente: o mesmo modelo pode ser vendido com diferentes pacotes de assistência. Em 2026, o intervalo privado realista é de 1 500–3 500 € por ouvido; pares premium chegam aos 5 000–7 000 €. Após comparticipação do SNS/social, o copagamento pessoal fica muitas vezes em cerca de 500–1 500 €, mas isto não é uma tarifa garantida.' },
        { kind: 'checklist', items: [
          'Compare o preço do par e de um só ouvido separadamente',
          'Confirme se estão incluídos moldes auriculares, carregador, filtros, pilhas e limpeza',
          'Peça um orçamento escrito com o modelo, o nível da série e o prazo de garantia',
          'Verifique se é possível pagar em prestações sem juros',
          'Pergunte por campanha para reformados, veteranos, trabalhadores de empresas e seguradoras',
          'Se tiver ADSE, Médis, Multicare ou outro seguro, verifique o limite para próteses auditivas',
          'Para o IRS, guarde a fatura com NIF: as despesas de saúde podem contar para deduções à coleta segundo as regras gerais',
          'Não aceite crédito no local antes de comparar a opção pelo SNS e obter uma segunda opinião'
        ] },
        { kind: 'warning', text: 'O erro mais caro é comprar um só aparelho quando a perda auditiva é bilateral. O cérebro adapta-se pior, a localização do som fica pior, e a fala em ambientes ruidosos continua a ser um problema. A decisão “um ouvido ou dois” deve ser explicada pelo ORL/audiologista com base no audiograma.' }
      ]
    },
    {
      id: 'aftercare',
      title: 'Depois da compra: a afinação é mais importante do que a caixa',
      content: [
        { kind: 'paragraph', text: 'As primeiras semanas são quase sempre estranhas: ouvem-se o frigorífico, os passos, a loiça, o vento. Isto não significa que o aparelho seja mau. São necessários ajustes — normalmente o primeiro controlo após 2–4 semanas, e depois mais 1–2 afinações.' },
        { kind: 'checklist', items: [
          'Use o aparelho todos os dias, caso contrário o cérebro não se adapta',
          'Anote as situações em que ouve mal: restaurante, carro, Zoom, rua',
          'Leve essas notas ao ajuste, em vez de dizer apenas “ouço mal”',
          'Limpe filtros e moldes conforme as instruções',
          'Não seque o aparelho com secador; use uma dry box ou cápsula, se recomendada',
          'Retire antes do duche, piscina, sauna e coloração do cabelo',
          'Faça uma nova audiometria uma vez por ano, ou mais cedo se houver agravamento',
          'Se surgir dor, fricção, assobio ou inflamação — vá a uma reafinação/observação'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Audiometria privada sem promoção', amountEURMin: 30, amountEURMax: 80, note: 'Em muitas redes, o teste é gratuito durante a adaptação do aparelho; numa clínica de ORL pode ser pago.' },
    { label: 'Consulta de ORL em clínica privada', amountEURMin: 70, amountEURMax: 130, note: 'Depende da cidade, do médico e do seguro; pelo SNS paga-se segundo as regras do SNS e normalmente é mais barato, mas a espera é maior.' },
    { label: 'Aparelho auditivo de gama média/premium', amountEURMin: 1500, amountEURMax: 3500, note: 'Referência para um ouvido em venda privada com afinações; o par custa normalmente 3 000–7 000 €.' },
    { label: 'Copagamento após comparticipação', amountEURMin: 500, amountEURMax: 1500, note: 'Intervalo prático típico com apoio aprovado, mas o valor não é garantido e depende do orçamento, do modelo e do percurso do pedido.' },
    { label: 'Pilhas/consumíveis por ano', amountEURMin: 30, amountEURMax: 120, note: 'Mais baixo para rechargeable, mas mais tarde pode haver substituição paga da bateria.' }
  ],
  sources: [
    { title: 'SNS 24 — acesso a cuidados de saúde e encaminhamentos pelo SNS', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGS — informação de saúde auditiva e orientação clínica pública', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Instituto Nacional para a Reabilitação — produtos de apoio / SAPA', url: 'https://www.inr.pt/produtos-de-apoio', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Acustimedi — rede privada de audiologia e aparelhos auditivos', url: 'https://www.acustimedi.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
