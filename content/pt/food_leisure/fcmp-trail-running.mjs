export default {
  editorialVoice: 'hackportugal',
  id: 'fcmp-trail-running',
  categoryId: 'food_leisure',
  title: 'Trail running e corrida de montanha — cartão federativo FCMP / FPA',
  tldr: 'Portugal é um país de mil provas de trail: Madeira Island Ultra Trail (MIUT), Trail dos Fenómenos nos Açores, Templários Trail, Costa Vicentina Ultra, e centenas de provas locais. Para participar em trail races é necessário um atestado médico-desportivo (~30-50 €) e, muitas vezes, um cartão federativo: FCMP (Federação de Campismo e Montanhismo de Portugal) para percursos de trail running ou FPA (Federação Portuguesa de Atletismo) para road races. Provas locais gratuitas — sem cartão. Ultras sérias — exigem pontos ITRA e seguro. Cartão federativo ~30-60 €/ano, existe curso online de safety + emissão.',
  tags: ['trilho', 'corrida', 'fcmp', 'fpa', 'maratona'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'overview',
      title: 'Quando é necessário e quando não é',
      content: [
        { kind: 'paragraph', text: 'Em Portugal há milhares de eventos de trail running. São regulados por duas federações:' },
        { kind: 'checklist', items: [
          'FCMP (Federação de Campismo e Montanhismo de Portugal): trail running, escalada, montanhismo, orientação. A maioria das trail races',
          'FPA (Federação Portuguesa de Atletismo): corridas de estrada, marathons, halfs, IAAF events',
          'FPC (Federação Portuguesa de Ciclismo): para eventos de MTB e cyclocross',
          'ITRA (internacional): ultratrails e qualificações UTMB'
        ] },
        { kind: 'paragraph', text: 'Quando o cartão federativo é obrigatório:' },
        { kind: 'checklist', items: [
          'Cartão FCMP/FPA: para a maioria das trail/road races oficiais',
          'Provas locais gratuitas / solidárias — normalmente basta o atestado médico',
          'Ultra trails (50K+): muitas vezes exigem ITRA points + insurance + cartão federativo',
          'Jovens com menos de 18 anos: o cartão é muitas vezes gratuito ou com desconto, mediante consentimento parental',
          'Turistas (estrangeiros da UE): podem usar o seu cartão nacional em Portugal (FFA França, RFEA Espanha, FIDAL Itália, etc.)',
          'Países terceiros (Rússia, Ucrânia, Brasil): é necessário um cartão português ou uma «day license» (~5-15 €/prova), se o organizador a disponibilizar'
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
            title: 'Exame médico desportivo',
            content: [
              { kind: 'checklist', items: [
                'Atestado médico-desportivo: documento emitido por um médico de medicina desportiva sobre a aptidão para esforço físico',
                'Pode ser feito com o médico de família ou num centro de medicina desportiva',
                'Custo: 30-50 €, sem SNS — 60-100 €',
                'Validade: 1 ano, renovado no mês do aniversário do titular',
                'Inclui: ECG, medição da tensão arterial, breve exame clínico, parecer de aptidão'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Inscrição num clube local',
            content: [
              { kind: 'paragraph', text: 'O cartão federativo é emitido através de um clube (a federação não trabalha directamente com pessoas individuais). É necessário aderir a qualquer clube FCMP — existem centenas.' },
              { kind: 'checklist', items: [
                'Clubes locais: procure "clube trail running + a sua cidade"',
                'Referências: Crónicas do Trail (Lisboa), Trail dos Fenómenos (Açores), Lousã Trail Sports',
                'Quota de clube: 20-100 €/ano — quota associativa',
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
                'Inclui: insurance liability + accident coverage',
                'É associado ao atestado médico (tem de o ter)',
                'Válido desde o momento do pagamento até 31 de Dezembro do ano em curso',
                'Recebe um cartão físico + profile digital',
                'Pode adicionar um skin-card ao Apple Wallet (alguns clubes fazem isso)'
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
          'Madeira Island Ultra Trail (MIUT): percurso de 115 km através de toda a Madeira. Um dos melhores ultratrails do mundo. Inscrição em Agosto para o Abril seguinte. ~150 €',
          'Trans Portugal Race: 350 km através de Portugal, 7 dias',
          'Trail dos Fenómenos (Açores): 80 km pela ilha de São Miguel',
          'Templários Trail (Tomar): 30/50/100 km em locais históricos',
          'Costa Vicentina Ultra: ao longo da costa ocidental',
          'Maratona de Lisboa (sábado de Páscoa): IAAF road, 10 000 participantes',
          'Maratona do Porto: Outubro, a segunda maior em Portugal',
          'Meia Maratona de Lisboa: Março, começa na ponte 25 de Abril',
          'Serra da Estrela SkyRace: no ponto mais alto de Portugal continental'
        ] },
        { kind: 'paragraph', text: 'Booking platforms:' },
        { kind: 'checklist', items: [
          'PortugalCorrida (local), Trail-running.pt: calendário nacional',
          'My Sportify: aplicação iOS/Android',
          'ITRA: calendário internacional e ranking',
          'Site da FCMP: lista de provas próprias',
          'Câmara Municipal local: organiza corridas turísticas'
        ] }
      ]
    },
    {
      id: 'safety-itra',
      title: 'Segurança e ITRA points',
      content: [
        { kind: 'paragraph', text: 'Trail running sério não é apenas correr. A preparação é o mais importante.' },
        { kind: 'checklist', items: [
          'ITRA points: sistema internacional de avaliação. Cada trail concluído dá points consoante a distância e a dificuldade',
          'Para UTMB: são necessários 4-15 points, consoante a distância (CCC, TDS, OCC)',
          'Para UTLO (Ultra Trail Lake Onega): exigem ITRA + medical',
          'Equipamento de segurança mandatory list para ultras: aluminum survival blanket, meias suplentes, telefone com full battery, food, water 1.5 L+, GPS',
          'Drop bags: nas grandes ultras — deixa roupa de substituição nos check points',
          'Coach ou personal trainer: 50-100 €/hora, importante para a primeira ultra'
        ] },
        { kind: 'warning', text: 'Trail running em Portugal no Verão — risco elevado de golpes de calor. As partidas em Julho-Agosto são deslocadas para as 5:00-6:00 da manhã por uma razão. Não tente correr uma ultra sozinho, sem support e sem conhecer o percurso.' }
      ]
    },
    {
      id: 'gear',
      title: 'Equipamento e onde comprar',
      content: [
        { kind: 'checklist', items: [
          'Sapatilhas de trail: Salomon, Hoka, Altra, La Sportiva — 100-200 € o par',
          'Hydration vest 5L+: Salomon, UltrAspire, Decathlon — 50-150 €',
          'Soft flasks ou reservatório: 15-50 €',
          'Relógio GPS: Garmin Fenix / Suunto Vertical — 400-1000 €',
          'Lanterna frontal: Petzl, Black Diamond — 50-150 €',
          'Survival blanket: 5-15 €',
          'Lojas: Decathlon (orçamento), Sport Zone, Workplace Sports, Salomon Store Lisboa',
          'Online: Wiggle, BikeFit, Amazon EU'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Atestado médico-desportivo', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Adesão a clube FCMP', amountEURMin: 20, amountEURMax: 100, note: 'Por ano' },
    { label: 'Cartão FCMP', amountEURMin: 30, amountEURMax: 60, note: 'Por ano' },
    { label: 'Pequena prova de trail (10-20 km)', amountEURMin: 15, amountEURMax: 35 },
    { label: 'Inscrição em marathon', amountEURMin: 50, amountEURMax: 100 },
    { label: 'Ultra (50-100 km)', amountEURMin: 80, amountEURMax: 200 },
    { label: 'MIUT (115 km Madeira)', amountEUR: 160, note: 'Com taxa ITRA' },
    { label: 'Kit básico (calçado + colete)', amountEURMin: 200, amountEURMax: 400 },
    { label: 'Relógio GPS avançado', amountEURMin: 500, amountEURMax: 1000 }
  ],
  sources: [
    { title: 'IPDJ — federações desportivas oficiais (FCMP, FPA reconhecidas)', url: 'https://ipdj.gov.pt/federacoes-desportivas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — registo de praticantes desportivos', url: 'https://ipdj.gov.pt/clube-de-praticantes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — exame de avaliação médico-desportiva (Decreto-Lei 345/99 + Lei 5/2007 + Despacho 9613/2020)', url: 'https://ipdj.gov.pt/exame-medico-desportivo', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'Decreto-Lei 10/2009 — regime jurídico do seguro desportivo obrigatório', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/10-2009-397323', kind: 'law', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'IPDJ — seguro desportivo obrigatório', url: 'https://ipdj.gov.pt/seguro-desportivo', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
