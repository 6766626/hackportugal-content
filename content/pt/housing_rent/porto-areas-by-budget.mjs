export default {
  editorialVoice: 'hackportugal',
  id: 'porto-areas-by-budget',
  categoryId: 'housing_rent',
  title: 'Onde viver no Porto: zonas por orçamento e tipo de família',
  tldr: 'Para uma família no Porto Metro em 2026, a principal escolha é pagar pela localização ou pelos metros quadrados. Foz/Nevogilde e Boavista são convenientes, mas um T2 fica muitas vezes em 1 500–2 300 €/mês. Matosinhos Sul dá mar e metro por 1 200–1 900 €. Vila Nova de Gaia é mais barata com uma boa ligação ao centro: T2 950–1 500 €. Maia é o melhor compromisso para uma família com carro, escola e aeroporto: T2 850–1 250 €. Dentro do Porto, é mais barato procurar em Paranhos, Bonfim, Campanhã, mas verifique o ruído, o estacionamento e o estado do prédio.',
  tags: ['porto', 'arrendamento', 'zonas', 'família'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'budget-map',
      title: 'Mapa rápido do orçamento 🗺️',
      content: [
        { kind: 'paragraph', text: 'As referências abaixo não são estatísticas oficiais, mas sim intervalos práticos de anúncios e negócios para arrendamento de longa duração na primavera de 2026. O preço depende muito do elevador, garagem, eficiência energética, mobília, proximidade do metro e vista para o mar/rio.' },
        { kind: 'checklist', items: ['Foz do Douro / Nevogilde: premium junto ao oceano; T1 1 100–1 600 €, T2 1 600–2 500 €, T3 2 300–4 000 €', 'Boavista / Bessa / Pinheiro Manso: eixo empresarial, escolas, escritórios; T1 950–1 350 €, T2 1 400–2 100 €, T3 1 900–3 000 €', 'Cedofeita / Baixa / Bonfim: centro e vida sem carro; T1 850–1 300 €, T2 1 200–1 800 €, T3 1 600–2 400 €', 'Paranhos / Constituição / Asprela: universidades, São João, metro; T1 750–1 050 €, T2 1 000–1 450 €, T3 1 300–1 900 €', 'Campanhã: mais barato e em rápida transformação; T1 700–950 €, T2 900–1 300 €, T3 1 150–1 700 €', 'Matosinhos Sul / Leça / Senhora da Hora: mar, metro, comércio; T1 850–1 250 €, T2 1 200–1 900 €, T3 1 600–2 700 €', 'Vila Nova de Gaia: mais metros pelo mesmo dinheiro; T1 700–1 000 €, T2 950–1 500 €, T3 1 250–2 100 €', 'Maia: subúrbio familiar, aeroporto, parques empresariais; T1 650–900 €, T2 850–1 250 €, T3 1 100–1 700 €'] },
        { kind: 'warning', text: 'Se o senhorio propuser “contrato sem recibos” ou pedir 6–12 meses em numerário sem recibo de renda, é um risco: sem contrato oficial é mais difícil obter atestado de residência, escola, dedução fiscal no IRS e proteção contra despejo ilegal.' }
      ]
    },
    {
      id: 'by-family-type',
      title: 'Escolha por tipo de família',
      content: [
        { kind: 'substeps', items: [
          { id: 'solo-couple', title: 'Uma pessoa ou casal sem filhos', content: [
            { kind: 'paragraph', text: 'É melhor procurar em Cedofeita, Bonfim, Baixa, Boavista, Matosinhos Sul. Paga mais por um T0/T1, mas poupa tempo: cafés, coworking, metro, vida nocturna e táxis são mais baratos do que ter carro todos os dias.' },
            { kind: 'checklist', items: ['Se trabalha remotamente — verifique o ruído da rua e a qualidade das janelas', 'Se voa com frequência — Maia ou Senhora da Hora são mais rápidas para o aeroporto', 'Se o oceano é importante — Matosinhos Sul é mais prático do que a Foz em termos de preço', 'Se quer “cidade a pé” — Cedofeita e Bonfim são mais convenientes do que Gaia e Maia'] }
          ]},
          { id: 'family-kids', title: 'Família com crianças', content: [
            { kind: 'paragraph', text: 'As prioridades mudam: escola, quartos, elevador, estacionamento, parque, acesso ao Centro de Saúde. Muitas vezes faz mais sentido arrendar um T3 em Gaia ou na Maia do que um T2 apertado no centro do Porto.' },
            { kind: 'checklist', items: ['Para escolas internacionais: Foz/Boavista são convenientes para a Oporto British School, CLIP e Lycée Français International de Porto', 'Para a escola pública, a morada é importante: a atribuição depende da morada e das regras da escola/agrupamento concreto', 'Maia e Gaia dão mais frequentemente garagem e prédios novos por menos dinheiro', 'A Foz é boa para qualidade de vida, mas o orçamento para um T3 raramente fica abaixo de 2 300 €/mês', 'Paranhos é conveniente para o Hospital de São João e a zona universitária, mas veja a densidade de estudantes e o estacionamento'] }
          ]},
          { id: 'car-family', title: 'Família com carro', content: [
            { kind: 'paragraph', text: 'Com carro, o raio de procura aumenta drasticamente: Maia, Valongo, Gondomar, Gaia mais para o interior a partir do rio, Leça da Palmeira. Mas conte não só a renda: garagem, portagens, combustível, IUC, estacionamento junto ao trabalho e à escola.' },
            { kind: 'checklist', items: ['Procure garagem/box no anúncio, não “estacionamento fácil”', 'Verifique os acessos à A4, A28, VCI, A1 e o trânsito de manhã', 'No Porto antigo, a garagem pode custar separadamente 80–180 €/mês', 'Em Gaia, o acesso à Ponte da Arrábida e à Ponte Luís I pode ser um ponto de estrangulamento nas horas de ponta'] }
          ]}
        ]}
      ]
    },
    {
      id: 'areas-in-practice',
      title: 'Zonas: vantagens, desvantagens, para quem servem',
      content: [
        { kind: 'checklist', items: ['Foz do Douro / Nevogilde — máximo de qualidade de vida: oceano, marginal, escolas privadas, mais calma do que o centro. Desvantagens: rendas mais altas, vento/humidade, poucos T2/T3 baratos.', 'Boavista / Bessa / Pinheiro Manso — compromisso para família e escritório: Casa da Música, zona empresarial, acesso à Foz e a Matosinhos. Desvantagens: trânsito, ruído nas grandes avenidas, parque habitacional antigo sem bom isolamento térmico.', 'Matosinhos Sul — o melhor “oceano + metro”: praia, Mercado de Matosinhos, restaurantes, metro para o Porto. Desvantagens: preços já quase como no Porto, ruído turístico no verão, humidade.', 'Senhora da Hora / São Mamede de Infesta — prático e mais barato do que Matosinhos Sul: NorteShopping, metro, escolas, acesso rápido ao Porto. Desvantagens: menos “Portugal bonito”, mais subúrbio dormitório.', 'Vila Nova de Gaia — bom orçamento para T2/T3, especialmente Mafamude, Canidelo, Oliveira do Douro, Canelas. Desvantagens: pontes e trânsito, a diferença entre zonas é enorme — veja a rua, não apenas o município.', 'Maia — subúrbio familiar: metro, aeroporto, parques empresariais, prédios novos, estacionamento. Desvantagens: menos vida urbana, muitas vezes é preciso carro, fica mais longe do oceano.', 'Paranhos / Asprela — conveniente para estudantes, médicos, IT e famílias perto do São João. Desvantagens: muito arrendamento por quarto, nem todos os prédios são adequados para famílias.', 'Campanhã — entrada económica no Porto e grande nó de transportes. Desvantagens: zona heterogénea; é obrigatório ver o prédio e a rua à noite.'] },
        { kind: 'paragraph', text: 'Não avalie uma zona apenas pelo nome da freguesia. No Porto, a mesma freguesia pode incluir ruas muito diferentes: um quarteirão tranquilo, ruído turístico, um prédio antigo sem elevador e um condomínio novo a dois quarteirões.' }
      ]
    },
    {
      id: 'transport-and-daily-life',
      title: 'Transporte, escola, quotidiano: o que calcular antes do contrato',
      content: [
        { kind: 'paragraph', text: 'No Porto Metro, uma vida normal constrói-se muitas vezes em torno do metro, autocarros STCP/UNIR, comboio CP e automóvel. A diferença entre “15 minutos no mapa” e o trajecto real de manhã pode decidir toda a escolha da zona.' },
        { kind: 'checklist', items: ['Passe Andante Municipal — normalmente 30 €/mês dentro de um município; Andante Metropolitan — 40 €/mês na Área Metropolitana do Porto', 'Verifique o percurso real para o trabalho/escola às 08:00 e de volta às 18:00, não apenas ao domingo', 'Para crianças, veja escola pública, ATL, creche e escolas privadas antes de assinar o contrato', 'Verifique o Centro de Saúde: em zonas sobrecarregadas, pode esperar muito tempo por médico de família', 'Veja Pingo Doce/Continente/Lidl/Mercadona a pé: a logística diária é mais importante do que uma vista bonita', 'Se o prédio for antigo — peça o certificado energético, tipo de aquecimento, humidade, bolor, estado das janelas', 'Para trabalho remoto, verifique a fibra: MEO, NOS, Vodafone nem sempre têm a mesma cobertura no prédio concreto', 'Verifique o estacionamento à noite num dia útil; “há estacionamento na rua” no centro do Porto significa muitas vezes 20 minutos à procura'] },
        { kind: 'warning', text: 'O Porto é húmido. Um apartamento com más janelas e sem sol pode parecer barato, mas no inverno pagará em aquecimento, desumidificador, bolor e saúde. Veja a orientação, a ventilação e o cheiro nos armários.' }
      ]
    },
    {
      id: 'contract-check',
      title: 'Antes de assinar o arrendamento',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o cenário seguro padrão: contrato de arrendamento escrito, registo do contrato nas Finanças pelo senhorio, recibos de renda, caução e primeiro mês por transferência bancária. A actualização da renda em 2026 para contratos existentes orienta-se pelo coeficiente de 2,24%, se o contrato não estabelecer outra coisa dentro da lei.' },
        { kind: 'checklist', items: ['Peça a caderneta predial ou prova de que o senhorio tem direito a arrendar o imóvel', 'O contrato deve incluir morada, prazo, renda, caução, NIF das partes, condições de rescisão, mobília e despesas', 'Grave um vídeo do apartamento à entrada: paredes, electrodomésticos, janelas, contadores de água/electricidade/gás', 'Esclareça se o condomínio está incluído na renda — normalmente é pago pelo proprietário, mas os serviços públicos são pagos pelo arrendatário', 'Não transfira a caução antes de visitar o apartamento ou verificar a procuração do agente/proprietário', 'Se precisa de escola, SNS, morada para NIF, procedimentos AIMA — certifique-se de que o contrato serve como comprovativo de morada', 'Para animais, obtenha autorização por escrito no contrato ou por email, não um “sem problema” verbal', 'Se o contrato for de 1 ano, verifique as regras de renovação e os prazos de denúncia/oposição à renovação'] },
        { kind: 'warning', text: 'Um contrato curto de Alojamento Local ou “prestação de serviços” em vez de arrendamento pode não dar os mesmos direitos que um contrato de arrendamento habitacional. Para uma família e documentos, é melhor um contrato completo de arrendamento para habitação.' }
      ]
    }
  ],
  costs: [
    { label: 'Andante Municipal', amountEUR: 30, note: 'Passe mensal normalmente dentro de um município do Porto Metro' },
    { label: 'Andante Metropolitan', amountEUR: 40, note: 'Passe mensal na Área Metropolitana do Porto' },
    { label: 'T2 na Foz/Boavista', amountEURMin: 1400, amountEURMax: 2500, note: 'Referência de arrendamento de longa duração na primavera de 2026; depende do prédio, garagem e estado' },
    { label: 'T2 em Matosinhos/Gaia/Maia', amountEURMin: 850, amountEURMax: 1900, note: 'O limite inferior é mais frequentemente Maia/Gaia mais longe do metro; o superior — Matosinhos Sul e prédios novos' },
    { label: 'Garagem/lugar no centro do Porto', amountEURMin: 80, amountEURMax: 180, note: 'Se não estiver incluído no arrendamento; o preço depende da zona e do acesso' }
  ],
  sources: [
    { title: 'Câmara Municipal do Porto — portal oficial da cidade do Porto', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Matosinhos — portal oficial do município de Matosinhos', url: 'https://www.cm-matosinhos.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Andante — tarifas e passes da Área Metropolitana do Porto', url: 'https://andante.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Idealista Portugal — mercado de arrendamento no Porto e municípios à volta', url: 'https://www.idealista.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
