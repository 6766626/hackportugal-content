export default {
  editorialVoice: 'hackportugal',
  id: 'passe-municipal-national',
  categoryId: 'public_transport',
  title: 'Passes mensais em Portugal: Navegante, Andante, passe municipal/metropolitano e o passe ferroviário nacional da CP',
  tldr: 'Não existe um bilhete universal único para tudo em Portugal. O preço depende do território e do operador. Nas áreas metropolitanas há apoio do Estado ao abrigo do programa PART: passe municipal (um concelho) de cerca de 30 €/mês e passe metropolitano (toda a área metropolitana) de cerca de 40 €/mês — por exemplo Navegante em Lisboa e Andante no Porto. À parte, existem passes ferroviários nacionais da CP: o Passe Ferroviário Verde a 20 € por 30 dias (comboios regionais/inter-regionais + Intercidades em 2.ª classe, ao abrigo do Decreto-Lei 73/2024) e o Passe Ferroviário Nacional a 49 €/mês para todos os comboios regionais. Em 2026, compre através do cartão local: Navegante, Andante ou Cartão CP.',
  tags: ['passe', 'transporte', 'metro', 'cp'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Como funcionam os passes: não há “um bilhete para todo o país”',
      content: [
        { kind: 'paragraph', text: 'Os passes mensais em Portugal são subsidiados pelo Estado através do programa PART (Programa de Apoio à Redução Tarifária), mas não existe um bilhete único que cubra todo o transporte do país.\n\nNa prática, isto funciona através de sistemas locais: Área Metropolitana de Lisboa, Área Metropolitana do Porto, CIM, municípios e operadores como CP, Carris, Metro Lisboa, STCP, Fertagus, Transtejo/Soflusa.' },
        { kind: 'paragraph', text: 'O essencial a perceber em 2026: o preço e a cobertura dependem do território. Nas áreas metropolitanas há dois níveis básicos — passe municipal num só concelho (cerca de 30 €/mês) e passe metropolitano para toda a área metropolitana (cerca de 40 €/mês). Os passes ferroviários nacionais da CP funcionam à parte destes. O nome e o preço exato variam consoante a região.' },
        { kind: 'warning', text: 'Não confunda o passe metropolitano de 40 € com os passes ferroviários nacionais da CP. O Passe Ferroviário Verde (20 € por 30 dias) e o Passe Ferroviário Nacional (49 €/mês) cobrem comboios regionais da CP, mas não dão acesso automático ao Alfa Pendular, à totalidade do serviço Intercidades ou ao transporte urbano metropolitano. Um único passe de 40 € significa uma área metropolitana, não o país inteiro.' }
      ]
    },
    {
      id: 'choose-region',
      title: '1. Identifique a sua zona de transporte',
      content: [
        { kind: 'paragraph', text: 'Comece por olhar não para a lei, mas para o mapa das deslocações: onde vive, onde trabalha/estuda e que operadores usa realmente. Em Portugal, o passe está ligado ao território e ao sistema tarifário.' },
        { kind: 'checklist', items: [
          'Lisboa e arredores: normalmente cartão Navegante, zona Área Metropolitana de Lisboa',
          'Porto e arredores: normalmente Andante, zona Área Metropolitana do Porto',
          'Entre cidades dentro da região: consulte a CIM ou Comunidade Intermunicipal',
          'CP Urbanos Lisboa/Porto/Coimbra: muitas vezes incluídos no passe local, mas confirme as estações',
          'Autocarros regionais: as regras dependem do concessionário e do município',
          'Barcos do Tejo: Transtejo/Soflusa podem estar incluídos no Navegante na zona necessária',
          'Se vive num concelho e trabalha noutro, o passe municipal pode não ser suficiente',
          'Se viaja entre regiões, procure uma opção nacional/inter-regional no passe.pt ou junto da CP'
        ] }
      ]
    },
    {
      id: 'buy-card',
      title: '2. Faça o cartão e compre o passe mensal',
      content: [
        { kind: 'paragraph', text: 'Normalmente é necessário um suporte físico ou digital: Navegante, Andante, cartão CP ou cartão municipal. Para um expat adulto sem desconto, a autorização de residência muitas vezes não é necessária: basta um documento de identificação e, por vezes, NIF/morada. Para descontos — estudante, jovens, pensionista, tarifa social — são exigidos mais documentos.' },
        { kind: 'checklist', items: [
          'Passaporte, Cartão de Cidadão ou autorização de residência',
          'NIF, se o sistema pedir associação a um perfil de cliente',
          'Morada em Portugal, se estiver a pedir um desconto municipal/metropolitano',
          'Fotografia para cartão personalizado, se o processo não for digital',
          'Comprovativo do estatuto de estudante para 4_18/sub23/estudante',
          'Comprovativo de rendimento ou situação social para Passe Social+',
          'Pagamento por Multibanco, MB WAY, cartão bancário ou em numerário num ponto de venda',
          'Verificação do prazo de validade: o passe mensal normalmente é válido por mês civil, não por 30 dias a partir da compra'
        ] },
        { kind: 'warning', text: 'A compra nos dias 28–31 pode ser para o mês civil seguinte ou para o mês atual — depende do terminal. Antes de pagar, confirme no ecrã do Multibanco/máquina o mês de ativação.' }
      ]
    },
    {
      id: 'where-to-check',
      title: '3. Compare os passes municipal, metropolitano e nacional',
      content: [
        { kind: 'paragraph', text: 'Confirme as condições nos sites dos operadores: navegante.pt para Lisboa, linhandante.com para o Porto, cp.pt para os passes ferroviários. Aí vê o tipo de passe, a região, as zonas e o preço. Em 2026, esta é a forma mais segura de não pagar a mais por cobertura desnecessária e de não comprar um passe demasiado estreito.' },
        { kind: 'checklist', items: [
          'Abra o site do operador relevante e escolha a região ou o tipo de passe',
          'Compare o passe municipal (um concelho, cerca de 30 €) e o passe metropolitano (toda a área metropolitana, cerca de 40 €)',
          'Confirme se as suas estações CP ou linhas de autocarro estão incluídas no passe escolhido',
          'Se viaja entre regiões de comboio, compare o Passe Ferroviário Verde (20 €/30 dias) e o Passe Ferroviário Nacional (49 €/mês)',
          'Veja as exceções: expressos, longa distância, bilhetes turísticos, shuttle de aeroporto',
          'Guarde o PDF/captura de ecrã com as condições para o caso de haver disputa na bilheteira',
          'Se o operador recusar, peça a ligação para a tabela tarifária de 2026',
          'Ao mudar-se para outro concelho, faça um novo passe — o antigo pode deixar de ser a opção ideal'
        ] }
      ]
    },
    {
      id: 'common-cases',
      title: 'Cenários típicos para expats',
      content: [
        { kind: 'substeps', items: [
          { id: 'lisbon', title: 'Lisboa: Cascais/Sintra/Almada/Setúbal ↔ Lisboa', content: [
            { kind: 'paragraph', text: 'Quase sempre comece pelo Navegante. Se as viagens forem dentro da Área Metropolitana de Lisboa, o passe metropolitano costuma compensar mais do que um conjunto separado de CP + metro + autocarro. Confirme a inclusão da Fertagus ou do barco, se atravessar o Tejo.' }
          ] },
          { id: 'porto', title: 'Porto: Gaia/Matosinhos/Maia/Gondomar ↔ Porto', content: [
            { kind: 'paragraph', text: 'Consulte o Andante e as zonas necessárias. O erro de principiante é comprar uma zona demasiado pequena e receber multa ao atravessar a fronteira da zona. Para deslocações diárias, a opção metropolitana é geralmente mais simples do que o mínimo zonal.' }
          ] },
          { id: 'small-city', title: 'Cidade pequena ou mudança para o interior', content: [
            { kind: 'paragraph', text: 'Confirme o passe municipal, a CIM e a CP regional. Em cidades pequenas, o desconto pode ser tratado não numa máquina do metro, mas na Câmara Municipal, Loja do Cidadão, junto do operador de autocarros ou através do serviço escolar/social.' }
          ] }
        ] }
      ]
    },
    {
      id: 'fines-and-proof',
      title: 'Multas, validação e prova de pagamento',
      content: [
        { kind: 'paragraph', text: 'O passe deve ser validado à entrada, mesmo que seja mensal. O fiscal verifica não só o pagamento, mas também a zona correta, a personalização do cartão e o estatuto de desconto.' },
        { kind: 'checklist', items: [
          'Valide sempre o cartão no metro, autocarro, elétrico, comboio e barco',
          'Leve um documento de identificação se o cartão for personalizado',
          'Para tarifa de estudante/social, mantenha o comprovativo do estatuto no telemóvel',
          'Se o validador não funcionar, fotografe-o e procure outro validador',
          'Não entregue um passe personalizado a outra pessoa',
          'Confirme que o passe mensal foi carregado no cartão, e não apenas pago',
          'Depois de carregar através de Multibanco, por vezes é necessária ativação num validador/terminal',
          'Em caso de multa, peça o auto de notícia e as instruções para reclamação'
        ] },
        { kind: 'warning', text: 'Os fiscais normalmente não aceitam o argumento “pensei que o meu passe cobria tudo”. A cobertura é determinada pelo passe concreto e pelas zonas: um passe metropolitano não é válido em comboios nacionais fora das suas zonas, e um passe ferroviário não cobre o transporte urbano metropolitano.' }
      ]
    }
  ],
  costs: [
    { label: 'Passe municipal (um concelho) — por exemplo Navegante Municipal', amountEUR: 30, note: 'Referência ao abrigo do programa PART para as áreas metropolitanas; em Lisboa o Navegante Municipal é 30 €/mês. O preço e o nome exatos dependem da região.' },
    { label: 'Passe metropolitano (toda a área metropolitana) — por exemplo Navegante Metropolitano', amountEUR: 40, note: 'Referência ao abrigo do programa PART; em Lisboa o Navegante Metropolitano é 40 €/mês, com equivalente Andante no Porto. É uma área metropolitana, não o país inteiro.' },
    { label: 'Passe Ferroviário Verde (CP, 30 dias)', amountEUR: 20, note: 'Comboios regionais/inter-regionais + Intercidades em 2.ª classe, ao abrigo do Decreto-Lei 73/2024; requer Cartão CP.' },
    { label: 'Passe Ferroviário Nacional (CP, mês)', amountEUR: 49, note: 'Todos os comboios regionais da CP no país; não é válido no Alfa Pendular, Intercidades ou transporte urbano metropolitano.' },
    { label: 'Emissão de cartão personalizado', amountEURMin: 3, amountEURMax: 12, note: 'Depende do sistema: Navegante, Andante, CP ou cartão municipal; o Cartão CP custa 6 € (3 € para estudantes).' }
  ],
  sources: [
    { title: 'Decreto-Lei n.º 73/2024 — Passe Ferroviário Verde', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/73-2024-891541243', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'CP — Passe Ferroviário Nacional', url: 'https://www.cp.pt/passageiros/pt/descontos-vantagens/descontos/ferroviario-nacional', kind: 'company', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Navegante — tarifas e cartões da Área Metropolitana de Lisboa', url: 'https://www.navegante.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Andante — tarifas e zonas da Área Metropolitana do Porto', url: 'https://www.linhandante.com', kind: 'company', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
