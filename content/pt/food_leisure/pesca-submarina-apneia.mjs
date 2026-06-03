export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-submarina-apneia',
  categoryId: 'food_leisure',
  title: 'Pesca submarina em apneia — licença e regras',
  tldr: 'A pesca submarina com arma de arpão em apneia é uma categoria específica de pesca lúdica, subcategoria Submarina. Idade mínima: 16 anos. Licença da DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos) (~25 € por ano) + atestado médico obrigatório de aptidão para apneia + seguro obrigatório. Garrafa de mergulho e qualquer equipamento autónomo de respiração são proibidos. Apenas máscara, barbatanas, arpão e os seus próprios pulmões. Limite diário: 15 kg (o exemplar de maior peso não conta). Proibição total nos parques naturais das Berlengas, Arrábida (núcleo), parcialmente nos Açores.',
  tags: ['pesca', 'apneia', 'submarina', 'pesca-submarina', 'dgrm'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'requirements',
      title: 'Requisitos rigorosos: o que é necessário reunir',
      content: [
        { kind: 'checklist', items: [
          'Idade 16+ (independentemente do nível de preparação)',
          'Atestado médico de aptidão para apneia — emitido por um médico de medicina desportiva. Validade de 1–2 anos, consoante a idade',
          'Apólice de seguro de pesca submarina — seguro específico, ~30–80 € por ano. Os seguros de viagem comuns não cobrem pesca submarina',
          'Licença de pesca lúdica submarina (Submarina) da DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos)',
          'NIF (número fiscal) e Cartão de Cidadão ou passaporte + comprovativo de morada',
          'Conhecimento das regras: tamanho mínimo, defeso (período sazonal de proibição de captura), espécies proibidas'
        ] },
        { kind: 'paragraph', text: 'É altamente recomendável fazer um curso de apneia numa escola da FPAS (Federação Portuguesa de Atividades Subaquáticas) ou PADI Freediver: sem técnica de compensação, respiração adequada e apoio de segurança a partir de terra, é perigoso.' },
        { kind: 'warning', text: 'A perda de consciência à subida (shallow water blackout) tira todos os anos a vida a praticantes de pesca submarina. Pesque sempre com um companheiro que observe à superfície: um mergulha — o outro vigia. Nunca saia sozinho, nem mesmo a 3 metros.' }
      ]
    },
    {
      id: 'license-process',
      title: 'Obtenção da licença',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Reúna os documentos',
            content: [
              { kind: 'checklist', items: [
                'Atestado médico emitido por um médico de medicina desportiva',
                'Apólice de seguro de pesca submarina válida',
                'NIF, Cartão de Cidadão ou passaporte',
                'E-mail para receção da licença'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submeta o pedido online',
            content: [
              { kind: 'paragraph', text: 'Através de portal.dgrm.mm.gov.pt → Licenciamento → Pesca Lúdica → Submarina. Carregue os PDF do atestado médico e do seguro no formulário. Efetue o pagamento.' }
            ]
          },
          {
            id: 's3',
            title: 'Receba o PDF e imprima',
            content: [
              { kind: 'paragraph', text: 'A licença chega por e-mail e fica disponível na área pessoal. Leve uma cópia impressa consigo — a Polícia Marítima na praia nem sempre tem internet rápida para verificar o código QR.' }
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
          '✅ Fato de mergulho 3–7 mm conforme a época: Atlântico ~14–19 °C',
          '✅ Cinto de lastro com libertação rápida — crítico para a segurança',
          '✅ Arma de arpão (arbalete) — pneumática ou de elásticos. O comprimento e a potência não são limitados por lei',
          '✅ Boia de sinalização com bandeira de mergulho (boia de sinalização) — obrigatória: visibilidade para embarcações',
          '✅ Faca de segurança (em caso de emaranhamento em linhas/algas)',
          '✅ Luvas e botins',
          '❌ Garrafas de mergulho, rebreathers e qualquer equipamento autónomo de respiração — proibidos',
          '❌ Pesca noturna com arpão — proibida em quase todo o lado',
          '❌ Dispositivos de choque elétrico, iscos químicos — proibidos',
          '❌ Transporte de arpão carregado na praia e fora de água — proibido (qualifica-se como arma)'
        ] },
        { kind: 'paragraph', text: 'Onde comprar: Decathlon (base), Cressi PT (profissional), Salvimar/Mares em distribuidores. Kit inicial completo — 400–800 €.' }
      ]
    },
    {
      id: 'where-allowed',
      title: 'Onde se pode e onde NÃO se pode mergulhar com arpão',
      content: [
        { kind: 'paragraph', text: 'Muitos locais bonitos estão protegidos e completamente fechados à pesca submarina.' },
        { kind: 'checklist', items: [
          '❌ TOTALMENTE PROIBIDO: Reserva Natural das Berlengas (toda a zona)',
          '❌ Parque Marinho Luiz Saldanha (Arrábida) — núcleo no‑take, proibição parcial na zona tampão',
          '❌ Parque Natural do Sudoeste Alentejano e Costa Vicentina — existem zonas no‑take',
          '❌ Maioria das marinas, portos, aquiculturas — proibido',
          '❌ A menos de 100 m de praias com banhistas',
          '❌ A menos de 30 m de pescadores a partir de terra',
          '✅ Troços rochosos abertos da costa atlântica — Cascais, zona exterior de Sesimbra, Costa Vicentina fora da zona core',
          '✅ Açores — uma das melhores regiões do mundo para apneia, exceto zonas no‑take',
          '✅ Madeira — tem regras próprias; confirme localmente num clube da zona'
        ] },
        { kind: 'warning', text: 'Antes do mergulho, verifique os limites dos parques naturais no site do ICNF (Instituto da Conservação da Natureza e das Florestas) — icnf.pt. As patrulhas da GNR (Guarda Nacional Republicana), unidade SEPNA, atuam ativamente com drones no Algarve e na Costa Vicentina.' }
      ]
    },
    {
      id: 'species-targets',
      title: 'O que se pesca em Portugal',
      content: [
        { kind: 'checklist', items: [
          'Robalo (sea bass) — principal alvo, permanece entre rochas e algas',
          'Sargo — peixe costeiro prateado, clássico para principiantes',
          'Dourada — menos frequente com arpão, mais comum à linha',
          'Choco — no outono junto a Setúbal',
          'Polvo — requer prática para encontrar tocas, muitas vezes com lanterna',
          'Mero — MUITO raro e protegido em Portugal — não disparar',
          'Cherne — raro; atenção: existem subespécies protegidas',
          'Pargo, garoupa — alvos “de assinatura” dos Açores e da Madeira'
        ] },
        { kind: 'warning', text: 'Não dispare se não tiver 100% de certeza sobre a espécie. O mero (Epinephelus marginatus) quase desapareceu da costa portuguesa: o grande tamanho não significa que possa ser capturado. Apenas fotografia — sem retirada.' }
      ]
    },
    {
      id: 'safety',
      title: 'Segurança — não é opcional',
      content: [
        { kind: 'checklist', items: [
          'Nunca mergulhe sozinho: trabalhe sempre em dupla, com o companheiro a observar à superfície',
          'Boia com bandeira: barcos e caiaquistas têm de o ver',
          'Não mergulhe para além do seu nível de conforto — o blackout mata',
          'Não hiperventile antes do mergulho — é um mito perigoso',
          'Intervalo à superfície: pelo menos o dobro do tempo de mergulho',
          'Atlântico frio: risco de hipotermia em 30–40 minutos, mesmo com luvas',
          'Computador/relógio de mergulho (por exemplo, Garmin Descent ou Suunto D‑series) ajuda a controlar o tempo e a profundidade da dupla',
          'Não mergulhe com tempestade nem com forte rebentação — baixios e rochas tornam-se armadilhas',
          'Aprenda gestos e sinais de emergência (curso FPAS)'
        ] },
        { kind: 'paragraph', text: 'Clubes úteis: Náutica e Pesca Submarina (NPSA) Lisboa, Clube Naval Setúbal, Clube de Pesca Submarina do Algarve. Organizam saídas conjuntas e treinos com companheiros.' }
      ]
    }
  ],
  costs: [
    { label: 'Licença de pesca lúdica submarina (Submarina) — 1 ano', amountEUR: 25, note: 'Existem também opções diária (€3) e mensal (€10)' },
    { label: 'Atestado médico', amountEURMin: 30, amountEURMax: 80, note: 'Uma vez a cada 1–2 anos, consoante a idade' },
    { label: 'Seguro de pesca submarina', amountEURMin: 30, amountEURMax: 80, note: 'Obrigatório, anual' },
    { label: 'Equipamento básico (início)', amountEURMin: 400, amountEURMax: 800, note: 'Máscara, fato de mergulho 5 mm, barbatanas, arpão, boia, lastros' },
    { label: 'Curso FPAS “Apneia”, nível 1', amountEURMin: 150, amountEURMax: 300, note: 'Fortemente recomendado antes da primeira saída' }
  ],
  sources: [
    { title: 'DGRM — Pesca Submarina', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — registo de federações desportivas (FPAS reconhecida)', url: 'https://ipdj.gov.pt/clube-de-praticantes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — Pesca Lúdica e Submarina', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF — Parques Marinhos e zonas restritas', url: 'https://www.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
