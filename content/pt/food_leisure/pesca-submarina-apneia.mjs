export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-submarina-apneia',
  categoryId: 'food_leisure',
  title: 'Pesca submarina em apneia — licença e regras',
  tldr: 'A pesca submarina com arma de arpão em apneia é uma categoria própria da pesca lúdica, subcategoria Submarina. Idade mínima — 16 anos. Licença da DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos) (~15 € por ano) + atestado médico obrigatório de aptidão para apneia + seguro obrigatório. Garrafa e qualquer equipamento autónomo de respiração são proibidos. Apenas máscara, barbatanas, arpão e os seus próprios pulmões. Limite diário: 10 kg + 1 peixe. Proibição total nos parques naturais Berlengas, Arrábida (núcleo), parcialmente nos Açores.',
  tags: ['pesca', 'apneia', 'submarina', 'pesca submarina', 'dgrm'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'requirements',
      title: 'Requisitos estritos: o que é preciso reunir',
      content: [
        { kind: 'checklist', items: [
          'Idade 16+ (independentemente do nível de experiência)',
          'Atestado médico de aptidão para apneia — emitido por médico de medicina desportiva. Validade 1–2 anos conforme a idade',
          'Apólice de seguro para pesca submarina — seguro específico, ~30–80 € por ano. Seguros de viagem comuns não cobrem pesca submarina',
          'Licença de pesca lúdica submarina (Submarina) da DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos)',
          'NIF (número fiscal) e Cartão de Cidadão ou passaporte + comprovativo de morada',
          'Conhecimento das regras: tamanhos mínimos, defeso (proibição sazonal), espécies proibidas'
        ] },
        { kind: 'paragraph', text: 'É vivamente recomendável frequentar um curso de apneia numa escola da FPAS (Federação Portuguesa de Atividades Subaquáticas) ou PADI Freediver: sem técnica de equalização, respiração adequada e vigilância à superfície, é perigoso.' },
        { kind: 'warning', text: 'A perda de consciência na subida (shallow water blackout) tira vidas de pescadores submarinos todos os anos. Pratique sempre com um parceiro que vigia à superfície: um mergulha — o outro observa. Nunca vá sozinho, mesmo a 3 metros.' }
      ]
    },
    {
      id: 'license-process',
      title: 'Obter a licença',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Reúna os documentos',
            content: [
              { kind: 'checklist', items: [
                'Atestado médico por médico de medicina desportiva',
                'Apólice de seguro de pesca submarina válida',
                'NIF, Cartão de Cidadão ou passaporte',
                'E-mail para receber a licença'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submeta o pedido online',
            content: [
              { kind: 'paragraph', text: 'Através de portal.dgrm.mm.gov.pt → Licenciamento → Pesca Lúdica → Submarina. Carregue os PDFs do atestado médico e do seguro no formulário. Pague.' }
            ]
          },
          {
            id: 's3',
            title: 'Receba o PDF e imprima',
            content: [
              { kind: 'paragraph', text: 'A licença chega por e-mail e fica disponível na área reservada. Leve a impressão consigo — a Polícia Marítima na praia nem sempre tem internet rápida para verificar o código QR.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'gear-rules',
      title: 'Equipamento: o que é permitido e o que não é',
      content: [
        { kind: 'checklist', items: [
          '✅ Máscara, tubo, barbatanas — conjunto básico',
          '✅ Fato de neoprene 3–7 mm consoante a época: Atlântico ~14–19 °C',
          '✅ Cinto de lastro com largada rápida — crítico para a segurança',
          '✅ Arma de arpão (arbalete) — pneumática ou de elásticos. Comprimento e potência não são limitados por lei',
          '✅ Boia de sinalização com bandeira de mergulho — obrigatória: visibilidade para as embarcações',
          '✅ Faca de segurança (para eventual desenredamento em linhas/algas)',
          '✅ Luvas e botins',
          '❌ Garrafas, rebreathers e qualquer equipamento autónomo de respiração — proibidos',
          '❌ Pesca noturna com arpão — quase sempre proibida',
          '❌ Dispositivos elétricos, iscos químicos — proibidos',
          '❌ Transportar a arma carregada na praia e fora de água — proibido (qualifica como arma)'
        ] },
        { kind: 'paragraph', text: 'Onde comprar: Decathlon (base), Cressi PT (pro), Salvimar/Mares junto de distribuidores. Conjunto inicial completo — 400–800 €.' }
      ]
    },
    {
      id: 'where-allowed',
      title: 'Onde se pode e onde NÃO SE PODE mergulhar com arpão',
      content: [
        { kind: 'paragraph', text: 'Muitos locais bonitos estão protegidos e totalmente fechados à pesca submarina.' },
        { kind: 'checklist', items: [
          '❌ PROIBIDO NA TOTALIDADE: Reserva Natural das Berlengas (toda a zona)',
          '❌ Parque Marinho Luiz Saldanha (Arrábida) — núcleo no‑take, proibição parcial na zona tampão',
          '❌ Parque Natural do Sudoeste Alentejano e Costa Vicentina — existem zonas no‑take',
          '❌ A maioria das marinas, portos, aquiculturas — proibido',
          '❌ A menos de 100 m de praias com banhistas',
          '❌ A menos de 30 m de pescadores de costa',
          '✅ Trechos rochosos expostos da costa atlântica — Cascais, exterior de Sesimbra, Costa Vicentina fora da zona core',
          '✅ Açores — um dos top‑regiões do mundo para apneia, exceto zonas no‑take',
          '✅ Madeira — regras próprias; confirme no local num clube'
        ] },
        { kind: 'warning', text: 'Antes do mergulho, verifique os limites dos parques naturais no site do ICNF (Instituto da Conservação da Natureza e das Florestas) — icnf.pt. As patrulhas da GNR (guarda nacional), unidade SEPNA, atuam ativamente com drones no Algarve e na Costa Vicentina.' }
      ]
    },
    {
      id: 'species-targets',
      title: 'Quais as espécies-alvo em Portugal',
      content: [
        { kind: 'checklist', items: [
          'Robalo (sea bass) — principal alvo, mantém-se entre rochas e algas',
          'Sargo — peixe costeiro prateado, clássico para iniciantes',
          'Dourada — menos comum ao arpão, mais frequente à cana',
          'Choco (choco) — no outono junto a Setúbal',
          'Polvo (polvo) — exige prática de procura de tocas, muitas vezes com lanterna',
          'Mero (garoupa) — MUITO raro e protegido em Portugal — não disparar',
          'Cherne — raro; atenção: existem subespécies protegidas',
          'Pargo, garoupa — “assinatura” dos Açores e da Madeira'
        ] },
        { kind: 'warning', text: 'Não dispare se não tiver 100% de certeza da espécie. O mero (Epinephelus marginatus) está quase desaparecido na costa portuguesa: tamanho grande não significa que possa ser capturado. Só foto — sem extração.' }
      ]
    },
    {
      id: 'safety',
      title: 'Segurança — não é opcional',
      content: [
        { kind: 'checklist', items: [
          'Nunca mergulhe sozinho: trabalhe sempre em par; o parceiro vigia à superfície',
          'Boia com bandeira: embarcações e kayakistas devem vê-lo',
          'Não mergulhe mais fundo do que o seu nível de conforto — o blackout mata',
          'Não hiperventile antes do mergulho — é um mito perigoso',
          'Intervalo à superfície: pelo menos o dobro do tempo do mergulho',
          'Atlântico frio: risco de hipotermia em 30–40 minutos mesmo com luvas',
          'Computador/relógio de mergulho (por exemplo, Garmin Descent ou Suunto série D) ajuda a controlar o tempo e a profundidade do par',
          'Não mergulhe com temporal e forte rebentação — baixios e rochas tornam-se armadilhas',
          'Aprenda gestos e sinais de alarme (curso FPAS)'
        ] },
        { kind: 'paragraph', text: 'Clubes úteis: Náutica e Pesca Submarina (NPSA) Lisboa, Clube Naval Setúbal, Clube de Pesca Submarina do Algarve. Organizam saídas conjuntas e treinos com parceiros.' }
      ]
    }
  ],
  costs: [
    { label: 'Licença de pesca lúdica submarina (Submarina) — 1 ano', amountEUR: 15 },
    { label: 'Licença — 3 anos', amountEUR: 35 },
    { label: 'Atestado médico', amountEURMin: 30, amountEURMax: 80, note: 'A cada 1–2 anos, conforme a idade' },
    { label: 'Seguro de pesca submarina', amountEURMin: 30, amountEURMax: 80, note: 'Obrigatório, anual' },
    { label: 'Equipamento básico (inicial)', amountEURMin: 400, amountEURMax: 800, note: 'Máscara, fato 5 mm, barbatanas, arpão, boia, lastros' },
    { label: 'Curso FPAS «Apneia», nível 1', amountEURMin: 150, amountEURMax: 300, note: 'Fortemente recomendado antes da primeira saída' }
  ],
  sources: [
    { title: 'DGRM — Pesca Submarina', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — registo de federações desportivas (FPAS reconhecida)', url: 'https://ipdj.gov.pt/registo-de-praticantes-desportivos-em-federacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — Pesca Lúdica e Submarina', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF — Parques Marinhos e zonas restritas', url: 'https://www.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
