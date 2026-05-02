export default {
  editorialVoice: 'hackportugal',
  id: 'ipma-meteo-app',
  categoryId: 'emergency_rights',
  title: 'IPMA: meteorologia, tempestades, mar, incêndios e sismos',
  tldr: 'O IPMA é a fonte oficial de meteorologia em Portugal: avisos amarelo/laranja/vermelho por distrito, previsões de chuva, vento, calor e frio, agitação marítima para a costa, risco de incêndio rural diário e registo de sismos. Em 2026, é o primeiro site/app que deve consultar antes de viagens, surf, pesca, caminhadas e em períodos de calor. Um aviso vermelho significa uma situação perigosa: cancele deslocações não essenciais e siga as indicações da ANEPC/Câmara.',
  tags: ['ipma', 'meteorologia', 'tempestades', 'incêndio', 'sismo'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-ipma-is',
      title: 'O que é o IPMA e porque deve confiar nele',
      content: [
        { kind: 'paragraph', text: 'O Instituto Português do Mar e da Atmosfera (IPMA) é o instituto público responsável pelas previsões meteorológicas oficiais, previsões marítimas, avisos de fenómenos adversos, risco diário de incêndio rural e monitorização sísmica para Portugal continental, Madeira e Açores.' },
        { kind: 'paragraph', text: 'Para uma pessoa expatriada, é uma ferramenta prática: perceber se pode viajar pela A1/A2 durante uma tempestade, ir à Serra da Estrela, deixar as crianças ir à praia, sair para o mar, planear uma mudança com carrinha ou queimar vegetação no terreno.' },
        { kind: 'checklist', items: [
          'Site: ipma.pt — fonte oficial sem registo',
          'Aplicação móvel: “IPMA” na App Store / Google Play',
          'O idioma da interface é sobretudo PT; algumas páginas estão disponíveis em EN',
          'Verifique o distrito: Lisboa, Porto, Faro, Setúbal, Coimbra, Braga, etc.',
          'Para as ilhas, consulte as zonas separadas da Madeira e dos Açores',
          'Em situações de emergência, confirme o IPMA com a ANEPC e as mensagens da Câmara Municipal'
        ] }
      ]
    },
    {
      id: 'weather-warnings',
      title: 'Avisos amarelo/laranja/vermelho: como ler os avisos',
      content: [
        { kind: 'paragraph', text: 'O IPMA publica avisos meteorológicos por distrito e por tipo de fenómeno: chuva, vento, trovoada, neve, frio, calor, nevoeiro, agitação marítima. A cor não é uma “previsão de disposição”, mas sim o nível de risco para pessoas, transportes, casas e infraestruturas.' },
        { kind: 'checklist', items: [
          'Amarelo — potencialmente perigoso: acompanhe a previsão, planeie tempo extra',
          'Laranja — perigoso: podem ocorrer perturbações nos transportes, queda de árvores, inundações, encerramento de estradas',
          'Vermelho — muito perigoso: evite viagens e trabalhos no exterior que não sejam essenciais',
          'Veja não só a cor, mas também o período de validade do aviso: por exemplo, 06:00–18:00',
          'Verifique o parâmetro concreto: 90 km/h de vento e 40 mm de chuva numa hora são riscos diferentes',
          'Um aviso pode estar em vigor apenas para um distrito, enquanto o distrito vizinho pode não ter aviso',
          'Na serra e junto ao oceano, o tempo real pode ser mais severo do que na cidade',
          'Depois de vermelho/laranja, verifique as comunicações da Proteção Civil, das escolas e dos transportadores'
        ] },
        { kind: 'warning', text: 'Não use aplicações meteorológicas comuns como única fonte. Apple Weather, Google Weather e Windy são úteis, mas o aviso oficial para Portugal é o do IPMA; em emergência, as instruções são dadas pela ANEPC/Câmara Municipal.' }
      ]
    },
    {
      id: 'sea-forecast',
      title: 'Previsões marítimas: surf, pesca, barcos',
      content: [
        { kind: 'paragraph', text: 'A secção “Mar” no IPMA mostra agitação marítima, vento, swell, altura das ondas, período, direção e previsão por zonas costeiras. Isto é importante não só para surfistas: no inverno, na costa oeste, as ondas e a rebentação podem ser mortalmente perigosas mesmo com sol.' },
        { kind: 'checklist', items: [
          'Consulte a “Previsão marítima” para a sua zona costeira, não apenas para a cidade',
          'Altura significativa da onda — altura média das ondas maiores; ondas isoladas podem ser mais altas',
          'Período da onda: quanto mais segundos, mais forte é a rebentação para a mesma altura',
          'Vento: offshore/onshore altera as condições para o surf e para pequenas embarcações',
          'Aviso amarelo/laranja/vermelho por agitação marítima — motivo para reconsiderar idas a falésias, pontões e praias',
          'Na praia, respeite a bandeira vermelha: a bandeira vermelha significa proibição de banho',
          'Para pesca nas rochas, tenha em conta marés, swell e rochas escorregadias; “uma onda grande” é uma causa frequente de acidentes',
          'Para navegação, confirme o IPMA com a Autoridade Marítima Nacional e os avisos locais'
        ] },
        { kind: 'warning', text: 'Nazaré, Costa Vicentina, Ericeira, Peniche, Cabo da Roca e a costa norte podem ser perigosos para passeios junto à água durante um aviso de agitação marítima. Não se aproxime da borda de falésias e molhes para tirar fotografias.' }
      ]
    },
    {
      id: 'fire-risk',
      title: 'Risco de incêndio rural e dias “red-flag” 🔥',
      content: [
        { kind: 'paragraph', text: 'O IPMA publica diariamente o perigo de incêndio rural por município. Na prática, isto corresponde ao “red-flag day” português: calor, tempo seco, vento, baixa humidade — um incêndio pode começar com uma faísca, um churrasco, uma ferramenta ou um carro em erva seca.' },
        { kind: 'checklist', items: [
          'Classes de risco: reduzido, moderado, elevado, muito elevado, máximo',
          'Verifique o seu concelho, não apenas o distrito: o risco pode variar drasticamente',
          'Com risco muito elevado/máximo, não use fogo ao ar livre',
          'Não queime resíduos de jardim sem autorização e sem verificar as restrições em vigor',
          'Não atire beatas pela janela do carro; as coimas e consequências criminais são reais',
          'Não estacione em erva seca: o escape quente pode incendiá-la',
          'Se vive numa zona rural, mantenha uma faixa limpa à volta da casa e acesso para os bombeiros',
          'Se vir fumo ou chamas, ligue 112; não escreva primeiro no chat dos vizinhos'
        ] },
        { kind: 'warning', text: 'O IPMA mostra o risco meteorológico, mas as proibições de queimadas/queimas, trabalhos florestais, acesso a zonas e medidas especiais podem ser introduzidas pelo Governo, ANEPC, ICNF ou Câmara Municipal. Antes de fazer qualquer fogo no terreno, verifique as regras locais.' }
      ]
    },
    {
      id: 'sismos',
      title: 'Sismos: onde consultar terramotos',
      content: [
        { kind: 'paragraph', text: 'Portugal está numa zona sismicamente ativa: o continente, a Madeira e especialmente os Açores registam tremores regularmente. O IPMA mantém a lista oficial dos últimos sismos, com magnitude, hora, profundidade e epicentro.' },
        { kind: 'checklist', items: [
          'Abra a secção “Sismologia” → “Últimos sismos”',
          'Veja magnitude, localização, profundidade e hora local',
          'Eventos pequenos podem ser sentidos localmente e não significam destruição',
          'Depois de um abalo forte, podem ocorrer réplicas — novos abalos',
          'Não use o elevador imediatamente depois de um sismo sentido',
          'Verifique gás, eletricidade, fissuras e contacto com a família',
          'Se houver danos no edifício, saia para um local aberto e ligue 112',
          'Para a avaliação oficial das consequências, acompanhe a ANEPC e a Câmara Municipal'
        ] },
        { kind: 'paragraph', text: 'Se sentiu um abalo, mas ele ainda não apareceu no mapa, aguarde alguns minutos: o registo automático e a confirmação do evento nem sempre são imediatos.' }
      ]
    },
    {
      id: 'daily-routine',
      title: 'Mini-rotina para todos os dias',
      content: [
        { kind: 'paragraph', text: 'Não é preciso viver agarrado às previsões. Basta uma verificação rápida do IPMA em dias de risco: antes de uma viagem, caminhada, surf, trabalho no terreno, mudança de casa, visita de estudo ou voo a partir das ilhas.' },
        { kind: 'checklist', items: [
          'De manhã: abrir o IPMA e escolher o seu distrito/concelho',
          'Verificar avisos para as próximas 24–48 horas',
          'Se vai ao oceano — abrir “Mar” e agitação marítima',
          'No verão e com vento — verificar o perigo de incêndio rural',
          'Com aviso laranja/vermelho — ter um plano B e carregar o telemóvel',
          'Guardar 112, contactos da escola, senhorio, condomínio e Câmara',
          'Para casa: retirar objetos da varanda antes de vento forte',
          'Para o carro: não atravessar túneis inundados e zonas baixas'
        ] },
        { kind: 'warning', text: 'Com aviso vermelho, não discuta com o tempo. Uma viagem cancelada é mais barata do que uma evacuação, um carro destruído ou uma coima por ignorar zonas encerradas.' }
      ]
    }
  ],
  sources: [
    {
      title: 'IPMA — portal oficial de meteorologia, mar, sismologia e avisos',
      url: 'https://www.ipma.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IPMA — avisos meteorológicos por distrito',
      url: 'https://www.ipma.pt/pt/otempo/prev-sam/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IPMA — perigo de incêndio rural',
      url: 'https://www.ipma.pt/pt/riscoincendio/rcm.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IPMA — sismologia e últimos sismos',
      url: 'https://www.ipma.pt/pt/geofisica/sismicidade/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
