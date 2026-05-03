export default {
  editorialVoice: 'hackportugal',
  id: 'fcmp-trail-running',
  categoryId: 'food_leisure',
  title: 'Trail running e corrida de montanha — cartão da federação FCMP / FPA',
  tldr: 'Portugal é o país de mil provas de trail: Madeira Island Ultra Trail (MIUT), Trail dos Fenómenos nos Açores, Templários Trail, Costa Vicentina Ultra, e centenas de provas locais. Para participar em provas de trail é necessário um atestado médico-desportivo (~30-50 €) e, muitas vezes, um cartão da federação: FCMP (Federação de Campismo e Montanhismo de Portugal) para trilhos/trail ou FPA (Federação Portuguesa de Atletismo) para provas de estrada. Provas locais gratuitas — sem cartão. Ultras sérias — exigem pontos ITRA e seguro. Cartão da federação ~30-60 €/ano, há curso online de segurança + emissão.',
  tags: ['trail', 'corrida', 'fcmp', 'fpa', 'maratona'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'overview',
      title: 'Quando é necessário e quando não é',
      content: [
        { kind: 'paragraph', text: 'Em Portugal há milhares de eventos de trail running. São regulados por duas federações:' },
        { kind: 'checklist', items: [
          'FCMP (Federação de Campismo e Montanhismo de Portugal): trail running, escalada, montanhismo, orientação. A maioria das provas de trail',
          'FPA (Federação Portuguesa de Atletismo): corridas de estrada, maratonas, meias, eventos IAAF',
          'FPC (Federação Portuguesa de Ciclismo): para eventos de BTT e ciclocrosse',
          'ITRA (internacional): ultratrails e provas qualificativas UTMB'
        ] },
        { kind: 'paragraph', text: 'Quando o cartão da federação é obrigatório:' },
        { kind: 'checklist', items: [
          'Cartão FCMP/FPA: para a maioria das provas oficiais de trail/estrada',
          'Provas locais gratuitas/solidárias — normalmente basta o atestado médico-desportivo',
          'Ultra trails (50K+): muitas vezes exigem pontos ITRA + seguro + cartão da federação',
          'Menores de 18 anos: o cartão é frequentemente gratuito ou com desconto mediante consentimento parental',
          'Turistas (cidadãos de países da UE): pode utilizar o seu cartão nacional em Portugal (FFA França, RFEA Espanha, FIDAL Itália, etc.)',
          'Países terceiros (Federação Russa, Ucrânia, Brasil): é necessário o cartão português ou uma «day license» (~5-15 €/prova), se o organizador oferecer'
        ] }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Obter o cartão FCMP — passo a passo',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Exame médico-desportivo',
            content: [
              { kind: 'checklist', items: [
                'Atestado médico-desportivo: documento de um médico do desporto sobre a aptidão para o esforço',
                'Pode ser feito com o médico de família ou num centro de medicina desportiva',
                'Custo: 30-50 €, fora do SNS — 60-100 €',
                'Validade: 1 ano até aos 35 anos, 6 meses para idades superiores',
                'Inclui: ECG, medição da pressão arterial, exame sumário, parecer de aptidão'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Inscrição num clube local',
            content: [
              { kind: 'paragraph', text: 'O cartão da federação é emitido através de um clube (a federação não trabalha diretamente com particulares). É necessário inscrever-se em qualquer clube FCMP — existem centenas.' },
              { kind: 'checklist', items: [
                'Clubes locais: procure "clube trail running + a sua cidade"',
                'Exemplos: Crónicas do Trail (Lisboa), Trail dos Fenómenos (Açores), Lousã Trail Sports',
                'Quota de sócio: 20-100 €/ano — quota do clube',
                'Em troca: treinos, descontos em inscrições, equipamento, comunidade'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Cartão da federação',
            content: [
              { kind: 'checklist', items: [
                'Cartão FCMP: 30-60 €/ano através do clube',
                'Inclui: seguro de responsabilidade civil + cobertura de acidentes',
                'Complementa o atestado médico (deverá tê-lo)',
                'Válido desde o pagamento até 31 de dezembro do ano corrente',
                'Recebe um cartão físico + perfil digital',
                'Pode adicionar o cartão ao Apple Wallet (alguns clubes fazem)'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'big-races',
      title: 'Provas conhecidas — o que reservar',
      content: [
        { kind: 'checklist', items: [
          'Madeira Island Ultra Trail (MIUT): percurso de 115 km através de toda a Madeira. Um dos melhores ultratrails do mundo. Inscrições em agosto para abril do ano seguinte. ~150 €',
          'Trans Portugal Race: 350 km por todo o país, 7 dias',
          'Trail dos Fenómenos (Açores): 80 km pela ilha de São Miguel',
          'Templários Trail (Tomar): 30/50/100 km em locais históricos',
          'Costa Vicentina Ultra: ao longo da costa oeste',
          'Maratona de Lisboa (sábado de Páscoa): IAAF road, 10 000 participantes',
          'Maratona do Porto: outubro, a segunda maior em Portugal',
          'Meia Maratona de Lisboa: março, começa na ponte 25 de Abril',
          'Serra da Estrela SkyRace: no ponto mais alto do continente'
        ] },
        { kind: 'paragraph', text: 'Plataformas de inscrição:' },
        { kind: 'checklist', items: [
          'PortugalCorrida (localmente), Trail-running.pt: calendário nacional',
          'My Sportify: aplicação iOS/Android',
          'ITRA: calendário internacional e ranking',
          'Site da FCMP: lista das suas próprias provas',
          'Câmara Municipal local: organiza corridas turísticas'
        ] }
      ]
    },
    {
      id: 'safety-itra',
      title: 'Segurança e pontos ITRA',
      content: [
        { kind: 'paragraph', text: 'O trail running sério não é apenas correr. A preparação é o mais importante.' },
        { kind: 'checklist', items: [
          'Pontos ITRA: sistema internacional de avaliação. Cada trail concluído atribui pontos consoante a distância e a dificuldade',
          'Para o UTMB: são necessários 4-15 pontos, consoante a distância (CCC, TDS, OCC)',
          'Para o UTLO (Ultra Trail Lake Onega): exigem ITRA + exame médico',
          'Equipamento de segurança (mandatory list) para ultras: manta térmica de alumínio, meias suplentes, telemóvel com bateria completa, comida, água 1,5 L+, GPS',
          'Drop bags: nas ultras longas — deixa roupa de troca nos postos de controlo',
          'Coach ou personal trainer: 50-100 €/hora, importante para a primeira ultra'
        ] },
        { kind: 'warning', text: 'Trail running em Portugal no verão — risco elevado de golpes de calor. As partidas em julho-agosto às 5:00-6:00 da manhã não são por acaso. Não tente correr uma ultra sozinho, sem apoio e sem conhecer o percurso.' }
      ]
    },
    {
      id: 'gear',
      title: 'Equipamento e onde comprar',
      content: [
        { kind: 'checklist', items: [
          'Ténis de trail: Salomon, Hoka, Altra, La Sportiva — 100-200 € o par',
          'Colete de hidratação 5L+: Salomon, UltrAspire, Decathlon — 50-150 €',
          'Bidões ou reservatório: 15-50 €',
          'Relógio GPS: Garmin Fenix / Suunto Vertical — 400-1000 €',
          'Lanterna frontal: Petzl, Black Diamond — 50-150 €',
          'Manta térmica: 5-15 €',
          'Lojas: Decathlon (orçamento), Sport Zone, Workplace Sports, Salomon Store Lisboa',
          'Online: Wiggle, BikeFit, Amazon UE'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Atestado médico-desportivo', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Quota de sócio no clube FCMP', amountEURMin: 20, amountEURMax: 100, note: 'Por ano' },
    { label: 'Cartão FCMP', amountEURMin: 30, amountEURMax: 60, note: 'Por ano' },
    { label: 'Prova trail pequena (10-20 km)', amountEURMin: 15, amountEURMax: 35 },
    { label: 'Inscrição em maratona', amountEURMin: 50, amountEURMax: 100 },
    { label: 'Ultra (50-100 km)', amountEURMin: 80, amountEURMax: 200 },
    { label: 'MIUT (115 km Madeira)', amountEUR: 160, note: 'Com taxa ITRA' },
    { label: 'Kit básico (calçado + colete)', amountEURMin: 200, amountEURMax: 400 },
    { label: 'Relógio GPS avançado', amountEURMin: 500, amountEURMax: 1000 }
  ],
  sources: [
    { title: 'IPDJ — federações desportivas oficiais (FCMP, FPA reconhecidas)', url: 'https://ipdj.gov.pt/federacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — registo praticantes desportivos', url: 'https://ipdj.gov.pt/registo-de-praticantes-desportivos-em-federacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 102/2018 — exames médicos desportivos', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-2018-117203174', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 248-A/2008 — regime jurídico dos contratos de seguro de federações desportivas', url: 'https://dre.pt/dre/detalhe/decreto-lei/248-a-2008-242876', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
