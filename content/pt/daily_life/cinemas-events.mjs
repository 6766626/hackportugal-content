export default {
  editorialVoice: 'hackportugal',
  id: 'cinemas-events',
  categoryId: 'daily_life',
  title: 'Cinema, concertos, eventos — onde comprar bilhetes e que descontos existem',
  tldr: 'Cinemas: 6-10 € bilhete normal; muitas cadeias têm promoções em dias úteis/terça-feira, mas confirme as condições no site do cinema específico — os descontos nem sempre se aplicam a IMAX/3D/estreias. Concertos e espectáculos: Ticketline, Blueticket, BOL — os principais agregadores. Teatro em Lisboa 15-40 €, concerto 20-80 €, futebol Benfica / Sporting / Porto 15-60 €. Descontos para estudantes, Cartão Jovem e seniores são frequentes, mas dependem do organizador e exigem documento.',
  tags: ['cinema', 'concertos', 'eventos', 'bilhetes'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'cinemas',
      title: '🎬 Cinemas',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Principais cadeias', content: [
            { kind: 'checklist', items: [
              '**NOS Cinemas** — a maior, 35+ no país. Bilhete normal 7,50-10 €, IMAX 12-15 €, 3D +2 €',
              '**Cinemas UCI** — El Corte Inglés Lisboa, UBBO Amadora, ArrábidaShopping (Vila Nova de Gaia); confirme a lista actualizada em uci.pt. Salas premium, preços comparáveis',
              '**Medeia Filmes** — cinema de autor, Cinema Ideal, Nimas (Lisboa), Trindade (Porto). Cinema independente, cinema mundial',
              '**FNAC** — vende bilhetes para eventos e por vezes organiza eventos gratuitos/promocionais nas lojas, mas não é uma cadeia de cinemas',
              '**Cinema São Jorge** (Avenida) — espaço histórico para festivais'
            ]}
          ]},
          { id: 'c2', title: 'Descontos', content: [
            { kind: 'checklist', items: [
              '⭐ **Promoções de terça-feira/dias úteis** — frequentemente bilhetes por cerca de 5-7 €, mas as condições e excepções dependem da cadeia e da sessão (podem não se aplicar a IMAX/3D/estreias)',
              '🎓 **Estudantes** (com Cartão Jovem ou cartão de estudante): 4,50-5,50 € nos dias úteis',
              '👵 **Reformados 65+**: 4,50-5,50 €',
              '🎬 **Cartão NOS** normalmente dá promoções do tipo 2 bilhetes pelo preço de 1 para clientes NOS; subscrições e condições mudam — confirme na NOS Cinemas. A UCI tem UCI Unlimited (confirme o preço actual)',
              '🍿 **Menu combo (pipocas+bebida)** — +6-8 €',
              '🎫 **Cartão Continente** — acumulação de pontos por bilhetes de cinema (ao pagar com o cartão associado)'
            ]}
          ]},
          { id: 'c3', title: 'Versões originais (VO)', content: [
            { kind: 'checklist', items: [
              'Em Portugal, quase todos os filmes são **no original com legendas em português** (excepto animações infantis — dobradas)',
              'Para falantes de inglês — ideal: filmes em inglês no original',
              'Para falantes de russo: alguns filmes da Federação Russa são exibidos em festivais de cinema',
              'Verificação: na programação, «VO» = versão original, «VP» = dobrado em português',
              'Oriente-se não pela hora, mas pela marcação VO/VOST/VP na programação'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'concerts-theater',
      title: '🎭 Concertos, teatro, espectáculos',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Onde comprar bilhetes', content: [
            { kind: 'checklist', items: [
              '**Ticketline** (ticketline.pt) — maior vendedor de bilhetes',
              '**Blueticket** — muitos eventos desportivos / festivais',
              '**BOL — Bilheteira Online** — clássica, ópera',
              '**Fnac.pt** — vendedor de bilhetes, incluindo online',
              '**Bilheteira do espaço** — directamente na sala, muitas vezes a opção mais barata (sem taxa de serviço)',
              '**MEO Blueticket** — plataforma de bilhetes para concertos, desporto e festivais; por vezes há promoções da MEO'
            ]}
          ]},
          { id: 't2', title: 'Principais espaços', content: [
            { kind: 'checklist', items: [
              '**MEO Arena** (antiga Altice Arena, Lisboa, Parque das Nações) — principal sala de concertos, Coldplay, Taylor Swift, festivais',
              '**Coliseu dos Recreios** (Lisboa) — sala histórica, 4000 lugares',
              '**Super Bock Arena** (Porto) — 8000 lugares',
              '**Teatro Nacional D. Maria II** (Lisboa) — teatro clássico. Atenção: o edifício principal no Rossio está fechado para obras, os espectáculos decorrem no âmbito da programação em trânsito noutros espaços — confirme o endereço específico no bilhete',
              '**Teatro Nacional de São Carlos** (Lisboa) — ópera',
              '**Casa da Música** (Porto) — concertos de clássica a jazz'
            ]}
          ]},
          { id: 't3', title: 'Preços típicos em 2026', content: [
            { kind: 'checklist', items: [
              '🎭 Teatro Nacional / teatro municipal: cerca de 10-30 €, os preços dependem do espectáculo e do lugar',
              '🎼 Música clássica / ópera: 20-70 €',
              '🎤 Concerto de nível médio (artistas portugueses): 20-40 €',
              '🎸 Digressões internacionais em estádio (Coldplay, etc.): 60-200+ €',
              '🎷 Clubes de jazz (Hot Clube de Portugal): 10-20 €',
              '🎪 Circo / espectáculos familiares: 15-30 €',
              '🎁 **Descontos**: Cartão Jovem, reformados, pacotes familiares (3+) — 20-40%'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'sports',
      title: '⚽ Futebol e desporto',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Jogos de futebol', content: [
            { kind: 'checklist', items: [
              '**SL Benfica** (Estádio da Luz, Lisboa): 15-60 € ronda em dia útil, 40-150 € Champions League',
              '**Sporting CP** (Estádio José Alvalade, Lisboa): 15-50 €',
              '**FC Porto** (Estádio do Dragão): 15-55 €',
              '**Clubes mais pequenos** (Boavista, Vitória SC, Gil Vicente): 10-25 €',
              'Selecção nacional (Estádio Nacional / Luz): 25-100 €'
            ]}
          ]},
          { id: 's2', title: 'Outros', content: [
            { kind: 'checklist', items: [
              '**Futsal** — popular em Portugal, jogos 3-10 €',
              '**Padel** — aulas individuais (ver o guia separado gyms-fitness)',
              '**MMA / boxe** — raro, 30-100 €',
              '**Desporto motorizado** — autódromo do Estoril, MotoGP Portimão',
              '**Ténis** — Oeiras Open / eventos ATP Challenger (o antigo Millennium Estoril Open ATP 250 saiu do calendário depois de 2024); o estado e as datas mudam — confirme no calendário ATP e na Federação Portuguesa de Ténis'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'festivals',
      title: '🎉 Grandes festivais',
      content: [
        { kind: 'checklist', items: [
          '**NOS Alive** (Algés/Lisboa, Julho) — rock / indie, normalmente 3 dias; preços de bilhete diário/passe mudam anualmente, confirme no site oficial',
          '**Rock in Rio Lisboa** (Junho, de 2 em 2 anos) — pop / rock, 100+ € por dia',
          '**Primavera Sound Porto** (Junho) — indie, 150+ €',
          '**MEO Sudoeste** (Zambujeira, Agosto) — música electrónica, 130-180 €',
          '**EDP Cool Jazz** (Cascais, Julho) — jazz, 40-100 € por noite',
          '**Festas de São João do Porto** (23-24 de Junho) — cultura tradicional, eventos municipais gratuitos',
          '**Festas de Lisboa / Lisboa na Rua** (Junho) — programas municipais gratuitos da EGEAC, ver agenda',
          '**Festa de Santo António** (Lisboa, 12-13 de Junho) — grande festival da cidade, gratuito',
          '**São João do Porto** (23-24 de Junho) — festival do Porto'
        ]}
      ]
    },
    {
      id: 'outdoor-free',
      title: '🆓 Eventos gratuitos ao ar livre e eventos municipais',
      content: [
        { kind: 'checklist', items: [
          '**Cinema ao Ar Livre** no Verão — há sessões municipais gratuitas ao ar livre e projectos comerciais pagos; confirme Lisboa na Rua/EGEAC, Agenda Cultural de Lisboa, agenda municipal do Porto e o organizador específico',
          '**Concertos em praças**: no Verão há frequentemente concertos gratuitos no âmbito de programas municipais (Festas de Lisboa/Lisboa na Rua), mas a programação muda todos os anos',
          '**Noite Branca** — especialmente conhecida em Braga; noutras cidades, programas culturais nocturnos semelhantes acontecem de forma irregular, confirme a agenda municipal',
          '**Festival Elétrico** — festival pago de música electrónica na zona do Porto; preços e localização mudam, confirme no site oficial',
          '**Eventos comunitários** — procure no Meetup, Eventbrite e nas agendas culturais locais',
          '**Viva Brasil** (Lisboa, Julho) — festival brasileiro, gratuito',
          '**Feiras do livro**: Feira do Livro de Lisboa (Maio-Junho no Parque Eduardo VII), Porto (Setembro) — entrada gratuita'
        ]}
      ]
    },
    {
      id: 'discovery',
      title: '🔍 Como encontrar eventos',
      content: [
        { kind: 'checklist', items: [
          '**Timeout Lisboa / Porto** — selecção semanal',
          '**Agenda Cultural de Lisboa** — Câmara Municipal, versão impressa gratuita / online',
          '**Meetup.com** — intercâmbio linguístico, caminhadas, tecnologia',
          '**Eventbrite PT** — workshops, seminários, festas',
          '**Eventos do Facebook** — funciona melhor para comunidades de expats',
          '**@timeoutportugal** Instagram',
          '**App Ticketline** — selecção semanal',
          '**Bandas Portuguesas** (playlists Spotify / Apple Music) — música local',
          'Para eventos gratuitos, muitas vezes é necessária inscrição/reserva prévia ou levantamento de bilhete; os lugares são limitados'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Cinema, bilhete normal', amountEURMin: 7.50, amountEURMax: 10 },
    { label: 'Cinema à terça-feira (desconto)', amountEURMin: 5, amountEURMax: 7 },
    { label: 'Futebol, jogo em dia útil', amountEURMin: 15, amountEURMax: 60 },
    { label: 'Teatro Nacional', amountEURMin: 10, amountEURMax: 30 },
    { label: 'Concerto internacional (arena)', amountEURMin: 60, amountEURMax: 200 },
    { label: 'Passe de festival / vários dias', amountEURMin: 130, amountEURMax: 250 }
  ],
  sources: [
    { title: 'Ticketline', url: 'https://ticketline.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Blueticket (MEO)', url: 'https://www.blueticket.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Agenda Cultural de Lisboa', url: 'https://www.agendalx.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Porto — Eventos', url: 'https://www.visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
