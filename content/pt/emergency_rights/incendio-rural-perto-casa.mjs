export default {
  editorialVoice: 'hackportugal',
  id: 'incendio-rural-perto-casa',
  categoryId: 'emergency_rights',
  title: 'Incêndio rural perto de casa: evacuação, abrigo, fumo e o depois',
  tldr: 'Se vive junto a floresta ou mato, o plano para o caso de incêndio faz-se ANTES do incêndio. Verifique se a sua aldeia integra o programa «Aldeia Segura / Pessoas Seguras» (aldeiasseguras.pt): há um responsável local de segurança designado, pontos de abrigo/refúgio sinalizados e percursos de evacuação — em 2026 o programa abrange ~2 435 aldeias. O fogo aproxima-se: ligue 112, avise os vizinhos, molhe as paredes/o telhado e 10 m à volta da casa, feche todas as janelas/portas/persianas, afaste as botijas de gás e os materiais combustíveis das paredes. Ordem de evacuação da GNR/PSP — cumpra de imediato, leve o kit, os documentos e os animais, ajude os idosos. Já não é possível sair — abrigue-se numa casa de pedra, numa divisão do lado oposto ao fogo, e aguarde a passagem da frente de chamas. Incêndios ativos: mapa da ANEPC (prociv.gov.pt), sgifr.gov.pt, fogos.pt. Depois do incêndio: participação à seguradora (~8 dias, mas perder o prazo não retira, por si só, o direito à indemnização), fotografias dos danos; para quem perdeu a habitação — programa Porta de Entrada (IHRU através da câmara).',
  tags: ['incêndio rural', 'incêndio', 'evacuação', 'aldeia segura'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2026-07-09',
  changeSummary: 'Novo guia: o que fazer quando um incêndio rural se aproxima de casa — programa Aldeia Segura (pontos de abrigo/refúgio), checklist oficial da ANEPC, evacuar vs abrigar-se, fumo e saúde (DGS/QualAr), seguro e apoio Porta de Entrada depois do incêndio.',
  steps: [
    {
      id: 'prepare',
      title: 'Antes do incêndio: plano e preparação',
      content: [
        { kind: 'paragraph', text: 'Na zona de contacto entre o edificado e a floresta, o essencial decide-se com antecedência: terreno limpo, plano de evacuação e saber para onde ir. Para isso existe o programa estatal «Aldeia Segura / Pessoas Seguras» (ANEPC): em cada aldeia é designado um responsável local de segurança, definem-se abrigos (espaços fechados) e refúgios (espaços abertos) e realizam-se simulacros.' },
        { kind: 'checklist', items: [
          '🏘️ Verifique a sua aldeia na lista do programa em aldeiasseguras.pt (filtros por distrito/concelho/freguesia) — em 2026 participam ~2 435 localidades, com ~1 580 pontos de abrigo e refúgio.',
          'Não está no programa? Pergunte na câmara municipal ou na junta de freguesia (serviço municipal de proteção civil) onde fica o abrigo mais próximo e quem é o responsável.',
          '🎒 Prepare um kit de emergência (segundo a ANEPC): estojo de primeiros socorros e medicamentos, água e alimentos não perecíveis, lanterna, rádio, apito, dinheiro em numerário, roupa de muda, artigos de higiene, lista de contactos; à mão — documentos (passaporte, título de residência) e carregador do telemóvel.',
          '🌿 A limpeza anual de 50 m à volta da casa é uma obrigação legal (ver o guia «Limpeza do terreno / gestão de combustível»); acrescente uma faixa de 1–2 m sem vegetação encostada às paredes, e mantenha a lenha e os oleados longe da casa.',
          '📊 Acompanhe o nível diário de perigo (PIR) no seu município: ipma.pt/pt/riscoincendio — nos dias de «muito elevado»/«máximo» vigoram automaticamente proibições de fogo e de maquinaria.',
          'Combine com a família com antecedência: quem vai buscar quem, onde se encontram, quem ajuda os vizinhos idosos.'
        ] }
      ]
    },
    {
      id: 'alerts',
      title: 'Como saber de um incêndio perto de si',
      content: [
        { kind: 'checklist', items: [
          '📩 SMS de «AvisoPROCIV» — avisos oficiais geolocalizados da ANEPC, enviados a todos na zona de risco, incluindo cartões SIM estrangeiros (bilingue PT/EN). Não é preciso subscrever (mais detalhes num guia próprio).',
          '🗺️ Mapa de todas as ocorrências da ANEPC em tempo real: prociv.gov.pt → «Ocorrências».',
          '🔥 Portal estatal SGIFR: sgifr.gov.pt — secção «Fogos e Incêndios Rurais Ativos».',
          '📱 fogos.pt — agregador voluntário não oficial mas de referência (VOST Portugal), baseado em dados oficiais; o mais prático no telemóvel.',
          '👀 Se vir fumo/fogo — ligue 112 de imediato (há também uma linha específica para comunicar incêndios rurais — 117) e indique o local exato e pontos de referência.',
          '🚗 Não se aproxime do incêndio «para ver» nem bloqueie as estradas — os bombeiros precisam delas.'
        ] }
      ]
    },
    {
      id: 'fire-approaches',
      title: 'O fogo aproxima-se da casa: checklist da ANEPC',
      content: [
        { kind: 'paragraph', text: 'Se o incêndio avança na sua direção e a evacuação ainda não foi ordenada, o procedimento oficial (aldeiasseguras.pt / gov.pt) é:' },
        { kind: 'checklist', items: [
          '📞 112 — se ainda não ligou; avise os vizinhos, em primeiro lugar os idosos e as pessoas com mobilidade reduzida.',
          '💦 Molhe com água as paredes, o telhado e o terreno num raio de ~10 m à volta da casa.',
          '🚪 Feche TODAS as portas, janelas, persianas/estores; tape as frestas com toalhas molhadas.',
          '🛋️ Afaste cortinas, sofás e móveis das janelas; retire de junto da casa tudo o que arde (mobiliário, oleados, lenha).',
          '🧯 Botijas de gás — desligue-as e afaste-as bem da casa.',
          '🔥 Pequenos focos podem ser abafados com água, terra ou ramos verdes — SÓ se for seguro; nada de heroísmos.',
          '📻 Mantenha o telemóvel carregado e siga as indicações das autoridades.'
        ] }
      ]
    },
    {
      id: 'evacuate-or-shelter',
      title: 'Evacuar ou abrigar-se',
      content: [
        { kind: 'paragraph', text: 'Regra de ouro: as indicações da GNR/PSP/bombeiros cumprem-se de imediato e sem discussão — eles veem o quadro completo do incêndio, você não.' },
        { kind: 'checklist', items: [
          '🏃 Foi ordenada a evacuação: leve o kit, os documentos e os animais, feche portas e janelas, ajude crianças/idosos/pessoas com mobilidade reduzida e dirija-se ao ponto de encontro/abrigo mais próximo (nas aldeias do Aldeia Segura estão sinalizados). NÃO perca tempo a juntar pertences.',
          '🏠 Já NÃO é possível sair (fogo nos caminhos de saída): abrigue-se numa casa de pedra — numa divisão do lado oposto ao fogo, longe das janelas e das paredes exteriores, com todas as aberturas fechadas. A frente de chamas passa depressa; depois, verifique o telhado e o terreno à procura de focos ainda a arder.',
          '🚶 O fogo apanhou-o em campo aberto: procure um local plano com água ou vegetação escassa; respire junto ao chão através de um pano molhado; cubra a cabeça e o corpo.',
          '🚗 Ficou no carro no meio do fumo: faróis e quatro-piscas ligados, janelas fechadas, ventilação/ar condicionado desligados; não conduza às cegas para dentro de fumo denso; abandone o carro só em último recurso, cobrindo ao máximo a pele e as vias respiratórias.',
          '❌ Não regresse a casa enquanto as autoridades não autorizarem — os reacendimentos são frequentes.'
        ] },
        { kind: 'warning', text: 'A maioria das vítimas mortais dos incêndios em Portugal são pessoas que tentaram fugir no último momento através do fumo (tragédia de Pedrógão Grande, 2017 — 66 vítimas, muitas na estrada). A decisão de «ir de carro» só é segura ENQUANTO o fogo está longe. Se já é tarde — abrigar-se numa casa de pedra é mais seguro do que um carro na estrada.' }
      ]
    },
    {
      id: 'smoke',
      title: 'Fumo: saúde e qualidade do ar',
      content: [
        { kind: 'checklist', items: [
          '🏠 Segundo a DGS: permaneça dentro de casa, com janelas e portas fechadas; ar condicionado em modo de recirculação.',
          '🚭 Não acrescente fumo dentro de casa: nada de velas, de fogão a gás sem necessidade, nem de tabaco; não faça exercício ao ar livre.',
          '😷 Se for indispensável sair — máscara-respirador de classe N95/FFP2; a máscara cirúrgica comum quase não protege do fumo.',
          '💨 Pessoas vulneráveis (asma, DPOC, doenças cardíacas, crianças, grávidas, idosos) — «atenção redobrada»: manter a terapêutica habitual; se piorar — SNS 24: 808 24 24 24.',
          '🚨 Queimaduras na cara, dificuldade em respirar, confusão mental — 112 de imediato.',
          '📉 Qualidade do ar em tempo real: QualAr (qualar.apambiente.pt, também tem aplicação) — índice por estação, de «Muito Bom» a «Mau», com conselhos de proteção.'
        ] }
      ]
    },
    {
      id: 'after',
      title: 'Depois do incêndio: seguro e apoios do Estado',
      content: [
        { kind: 'checklist', items: [
          '📸 Antes de limpar, registe todos os danos: fotografias/vídeos, lista do que ficou danificado; não deite fora os bens danificados antes da vistoria do perito da seguradora.',
          '📝 Apresente a participação de sinistro à seguradora no prazo previsto no contrato — em regra, 8 dias a contar do momento em que teve conhecimento. Importante: segundo o entendimento da ASF e a jurisprudência, perder o prazo de 8 dias NÃO retira, por si só, o direito à indemnização — a seguradora tem de provar o prejuízo causado pelo atraso.',
          '🏠 O incêndio está coberto pela apólice multirriscos-habitação; nos apartamentos em condomínio, o seguro de incêndio é obrigatório por lei.',
          '🆘 Perdeu a habitação permanente: programa «Porta de Entrada» (DL 29/2018) — alojamento temporário + apoios a fundo perdido para arrendamento, reabilitação ou nova habitação. Candidatura através da câmara municipal; a decisão é aprovada pelo IHRU.',
          '🏛️ A câmara/junta é o primeiro ponto de contacto para ajuda prática (alojamento, água, limpeza); depois de grandes incêndios, o Estado abre frequentemente linhas de apoio adicionais — acompanhe os anúncios do município.',
          '🌲 Ardeu floresta/terreno — registe também os danos e a replantação; se suspeitar de fogo posto, apresente queixa na GNR/PSP (o incêndio provocado é um crime grave).'
        ] },
        { kind: 'paragraph', text: 'Guias relacionados: «Limpeza do terreno (gestão de combustível)», «AvisoPROCIV: avisos por SMS», «Fogo, grelhadores, fogo de artifício: quando é proibido», «Bombeiros voluntários» e «Calor e ondas de calor».' }
      ]
    }
  ],
  sources: [
    { title: 'ANEPC — programa Aldeia Segura / Pessoas Seguras (medidas de autoproteção)', url: 'https://aldeiasseguras.pt/medidas-de-autoprotecao/', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'ANEPC / prociv.gov.pt — Aldeia Segura: descrição do programa e estatísticas', url: 'https://prociv.gov.pt/pt/prevencao-e-preparacao/programas-e-projetos/aldeia-segura-pessoas-seguras/', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'gov.pt — Perigo de Incêndio Rural: saiba como se proteger', url: 'https://www.portugal.gov.pt/pt/gc23/comunicacao/noticia?i=perigo-de-incendio-rural-saiba-como-se-proteger', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'DGS — recomendações relativas à exposição ao fumo de incêndios', url: 'https://www.dgs.pt/em-destaque/recomendacoes-da-dgs-relativas-a-exposicao-ao-fumo-de-incendios.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'Portal da Habitação — Porta de Entrada: apoio ao alojamento urgente', url: 'https://www.portaldahabitacao.pt/web/guest/porta-de-entrada', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'ANEPC — aviso à população (SMS AvisoPROCIV)', url: 'https://prociv.gov.pt/pt/prevencao-e-preparacao/monitorizacao-alerta-e-aviso/aviso/', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' }
  ],
  lastVerified: '2026-07-10',
  verifyIntervalDays: 180
}
