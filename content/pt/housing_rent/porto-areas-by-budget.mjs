export default {
  editorialVoice: 'hackportugal',
  id: 'porto-areas-by-budget',
  categoryId: 'housing_rent',
  title: 'Onde viver no Porto: zonas por orçamento e tipo de família',
  tldr: 'Para uma família no Porto Metro em 2026, a principal escolha é pagar pela localização ou pelos metros quadrados. Foz/Nevogilde e Boavista são convenientes, mas um T2 fica muitas vezes entre 1 500–2 300 €/mês. Matosinhos Sul oferece mar e metro por 1 200–1 900 €. Vila Nova de Gaia é mais barata com boa ligação ao centro: T2 950–1 500 €. Maia é o melhor compromisso para uma família com carro, escola e aeroporto: T2 850–1 250 €. Dentro do Porto, é mais barato procurar em Paranhos, Bonfim, Campanhã, mas verifique o ruído, o estacionamento e o estado do prédio.',
  tags: ['porto', 'arrendamento', 'zonas', 'família'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'budget-map',
      title: 'Mapa rápido do orçamento 🗺️',
      content: [
        { kind: 'paragraph', text: 'As referências abaixo não são estatísticas oficiais, mas sim intervalos práticos de anúncios e negócios para arrendamento de longa duração na primavera de 2026. O preço depende muito de elevador, garagem, eficiência energética, mobília, proximidade do metro e vista para o mar/rio.' },
        { kind: 'checklist', items: ['Foz do Douro / Nevogilde: segmento premium junto ao oceano; T1 1 100–1 600 €, T2 1 600–2 500 €, T3 2 300–4 000 €', 'Boavista / Bessa / Pinheiro Manso: eixo empresarial, escolas, escritórios; T1 950–1 350 €, T2 1 400–2 100 €, T3 1 900–3 000 €', 'Cedofeita / Baixa / Bonfim: centro e vida sem carro; T1 850–1 300 €, T2 1 200–1 800 €, T3 1 600–2 400 €', 'Paranhos / Constituição / Asprela: universidades, São João, metro; T1 750–1 050 €, T2 1 000–1 450 €, T3 1 300–1 900 €', 'Campanhã: mais barata e em rápida transformação; T1 700–950 €, T2 900–1 300 €, T3 1 150–1 700 €', 'Matosinhos Sul / Leça / Senhora da Hora: mar, metro, comércio; T1 850–1 250 €, T2 1 200–1 900 €, T3 1 600–2 700 €', 'Vila Nova de Gaia: mais metros pelo mesmo dinheiro; T1 700–1 000 €, T2 950–1 500 €, T3 1 250–2 100 €', 'Maia: subúrbio familiar, aeroporto, parques empresariais; T1 650–900 €, T2 850–1 250 €, T3 1 100–1 700 €'] },
        { kind: 'warning', text: 'Se o proprietário propuser “contrato sem recibos” ou pedir 6–12 meses em numerário sem recibo de renda, é um risco: sem contrato oficial é mais difícil obter atestado de residência, escola, dedução fiscal em IRS e protecção contra despejo ilegal.' }
      ]
    },
    {
      id: 'by-family-type',
      title: 'Escolha por tipo de família',
      content: [
        { kind: 'substeps', items: [
          { id: 'solo-couple', title: 'Uma pessoa ou casal sem filhos', content: [
            { kind: 'paragraph', text: 'É melhor procurar em Cedofeita, Bonfim, Baixa, Boavista, Matosinhos Sul. Você paga mais por um T0/T1, mas poupa tempo: cafés, coworking, metro, vida nocturna e táxis ficam mais baratos do que usar carro todos os dias.' },
            { kind: 'checklist', items: ['Se trabalha remotamente — verifique o ruído da rua e a qualidade das janelas', 'Se viaja frequentemente de avião — Maia ou Senhora da Hora dão acesso mais rápido ao aeroporto', 'Se o oceano é importante — Matosinhos Sul é mais prático do que a Foz em termos de preço', 'Se quer “cidade a pé” — Cedofeita e Bonfim são mais convenientes do que Gaia e Maia'] }
          ]},
          { id: 'family-kids', title: 'Família com crianças', content: [
            { kind: 'paragraph', text: 'As prioridades mudam: escola, quartos, elevador, estacionamento, parque, acesso ao Centro de Saúde. Muitas vezes é mais sensato arrendar um T3 em Gaia ou na Maia do que um T2 apertado no centro do Porto.' },
            { kind: 'checklist', items: ['Para escolas internacionais: Foz/Boavista são convenientes para a Oporto British School, CLIP e Lycée Français International de Porto', 'Para a escola pública, a morada é importante: a colocação depende da morada e das regras da escola/agrupamento específico', 'Maia e Gaia oferecem mais frequentemente garagem e prédios novos por menos dinheiro', 'A Foz é boa para qualidade de vida, mas o orçamento para um T3 raramente fica abaixo de 2 300 €/mês', 'Paranhos é conveniente para o Hospital de São João e a zona universitária, mas veja a densidade de estudantes e o estacionamento'] }
          ]},
          { id: 'car-family', title: 'Família com carro', content: [
            { kind: 'paragraph', text: 'Com carro, o raio de procura aumenta muito: Maia, Valongo, Gondomar, Gaia mais afastada do rio, Leça da Palmeira. Mas não conte apenas a renda: garagem, portagens, combustível, IUC, estacionamento no trabalho e na escola.' },
            { kind: 'checklist', items: ['Procure garagem/box no anúncio, não “estacionamento fácil”', 'Verifique os acessos à A4, A28, VCI, A1 e o trânsito de manhã', 'No Porto antigo, a garagem pode custar à parte 80–180 €/mês', 'Em Gaia, o acesso à Ponte da Arrábida e à Ponte Luís I pode ser um ponto de estrangulamento nas horas de ponta'] }
          ]}
        ]}
      ]
    },
    {
      id: 'areas-in-practice',
      title: 'Zonas: vantagens, desvantagens e para quem servem',
      content: [
        { kind: 'checklist', items: ['Foz do Douro / Nevogilde — máxima qualidade de vida: oceano, passeio marítimo, escolas privadas, mais calma do que o centro. Desvantagens: arrendamento mais caro, vento/humidade, poucos T2/T3 baratos.', 'Boavista / Bessa / Pinheiro Manso — compromisso para família e escritório: Casa da Música, zona empresarial, acesso à Foz e a Matosinhos. Desvantagens: trânsito, ruído nas grandes avenidas, parque habitacional antigo sem bom isolamento térmico.', 'Matosinhos Sul — o melhor “oceano + metro”: praia, Mercado de Matosinhos, restaurantes, metro para o Porto. Desvantagens: preços já quase como no Porto, ruído turístico no verão, humidade.', 'Senhora da Hora / São Mamede de Infesta — prático e mais barato do que Matosinhos Sul: NorteShopping, metro, escolas, acesso rápido ao Porto. Desvantagens: menos “Portugal bonito”, mais subúrbio-dormitório.', 'Vila Nova de Gaia — bom orçamento para T2/T3, especialmente Mafamude, Canidelo, Oliveira do Douro, Canelas. Desvantagens: pontes e trânsito, enorme diferença entre zonas — veja a rua, não apenas o município.', 'Maia — subúrbio familiar: metro, aeroporto, parques empresariais, casas novas, estacionamento. Desvantagens: menos vida urbana, muitas vezes é preciso carro, mais longe do oceano.', 'Paranhos / Asprela — conveniente para estudantes, médicos, IT e famílias perto de São João. Desvantagens: muito arrendamento por quartos, nem todos os prédios são adequados para famílias.', 'Campanhã — entrada económica no Porto e grande nó de transportes. Desvantagens: zona heterogénea; é obrigatório ver o prédio e a rua à noite.'] },
        { kind: 'paragraph', text: 'Não avalie a zona apenas pelo nome da freguesia. No Porto, a mesma freguesia pode incluir ruas muito diferentes: um quarteirão tranquilo, ruído turístico, um prédio antigo sem elevador e um condomínio novo dois quarteirões mais à frente.' }
      ]
    },
    {
      id: 'transport-and-daily-life',
      title: 'Transportes, escola, dia a dia: o que calcular antes do contrato',
      content: [
        { kind: 'paragraph', text: 'No Porto Metro, uma vida normal organiza-se muitas vezes em torno do metro, dos autocarros STCP/UNIR, do comboio CP e do carro. A diferença entre “15 minutos no mapa” e o trajecto real de manhã pode decidir toda a escolha da zona.' },
        { kind: 'checklist', items: ['Passe Andante Municipal — normalmente 30 €/mês dentro de um município; Andante Metropolitan — 40 €/mês na Área Metropolitana do Porto', 'Verifique o percurso real até ao trabalho/escola às 08:00 e de volta às 18:00, não apenas ao domingo', 'Para crianças, veja escola pública, ATL, Creche e escolas privadas antes de assinar o contrato', 'Verifique o Centro de Saúde: em zonas sobrecarregadas, pode esperar muito tempo por médico de família', 'Veja Pingo Doce/Continente/Lidl/Mercadona a pé: a logística diária é mais importante do que uma vista bonita', 'Se o prédio for antigo — peça certificado energético, tipo de aquecimento, humidade, bolor, estado das janelas', 'Para trabalho remoto, verifique a fibra: MEO, NOS, Vodafone nem sempre têm a mesma cobertura num prédio específico', 'Verifique o estacionamento à noite num dia útil; “há estacionamento na rua” no centro do Porto significa muitas vezes 20 minutos à procura'] },
        { kind: 'warning', text: 'O Porto é húmido. Um apartamento com janelas más e sem sol pode parecer barato, mas no inverno você pagará em aquecimento, desumidificador, bolor e saúde. Veja a orientação solar, a ventilação e o cheiro nos armários.' }
      ]
    },
    {
      id: 'contract-check',
      title: 'Antes de assinar o arrendamento',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o cenário seguro padrão é: contrato de arrendamento por escrito, registo do contrato nas Finanças pelo proprietário, recibos de renda, caução e primeiro mês por transferência bancária. O aumento da renda em 2026 para contratos antigos orienta-se pelo coeficiente de 2,16%, se o contrato não estabelecer outra coisa dentro da lei.' },
        { kind: 'checklist', items: ['Peça a caderneta predial ou prova de que o senhorio tem direito a arrendar a habitação', 'O contrato deve incluir morada, prazo, renda, caução, NIF das partes, condições de rescisão, mobília e despesas', 'Faça um vídeo do apartamento à entrada: paredes, equipamentos, janelas, contadores de água/electricidade/gás', 'Confirme se o condomínio está incluído na rent — normalmente é pago pelo proprietário, mas os serviços são pagos pelo arrendatário', 'Não transfira a caução antes de visitar o apartamento ou verificar a procuração do agente/proprietário', 'Se precisar de escola, SNS, morada para NIF, procedimentos AIMA — garanta que o contrato serve como comprovativo de morada', 'Para animais, obtenha autorização escrita no contrato ou por email, não um “sem problema” verbal', 'Se o contrato for de 1 ano, verifique as regras de renovação e os prazos de denúncia/oposição à renovação'] },
        { kind: 'warning', text: 'Um contrato curto de alojamento local ou de “prestação de serviços” em vez de arrendamento pode não dar os mesmos direitos que um contrato de arrendamento habitacional. Para família e documentos, é melhor um contrato completo de arrendamento habitacional.' }
      ]
    }
  ],
  costs: [
    { label: 'Andante Municipal', amountEUR: 30, note: 'Passe mensal normalmente dentro de um município do Porto Metro' },
    { label: 'Andante Metropolitan', amountEUR: 40, note: 'Passe mensal na Área Metropolitana do Porto' },
    { label: 'T2 na Foz/Boavista', amountEURMin: 1400, amountEURMax: 2500, note: 'Referência de arrendamento de longa duração na primavera de 2026; depende do prédio, da garagem e do estado' },
    { label: 'T2 em Matosinhos/Gaia/Maia', amountEURMin: 850, amountEURMax: 1900, note: 'O limite inferior é mais frequente na Maia/Gaia mais longe do metro; o superior — Matosinhos Sul e prédios novos' },
    { label: 'Garagem/lugar no centro do Porto', amountEURMin: 80, amountEURMax: 180, note: 'Se não estiver incluído no arrendamento; o preço depende da zona e do acesso' }
  ],
  sources: [
    { title: 'Câmara Municipal do Porto — portal oficial da cidade do Porto', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Matosinhos — portal oficial do município de Matosinhos', url: 'https://www.cm-matosinhos.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Andante — tarifas e passes da Área Metropolitana do Porto', url: 'https://andante.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Idealista Portugal — mercado de arrendamento no Porto e municípios em redor', url: 'https://www.idealista.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
