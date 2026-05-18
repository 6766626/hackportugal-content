export default {
  editorialVoice: 'hackportugal',
  id: 'exotic-pets-cats',
  categoryId: 'animals',
  title: 'Gatos e animais de companhia exóticos — regras',
  tldr: 'Gatos: o microchip SIAC é obrigatório desde 2022 (DL 82/2019). O período transitório para gatos e furões já existentes terminou em **25 de outubro de 2022**; para gatos recém-nascidos, o chip é colocado no prazo de 120 dias. **A licença anual da Junta de Freguesia é um requisito nacional APENAS para cães**, para gatos NÃO existe; alguns municípios podem introduzir registos locais, mas isso é uma exceção. Animais exóticos (répteis, aves, roedores): para espécies CITES e espécies protegidas é necessário microchip e registo na DGAV. Proibição: animais selvagens perigosos — grandes primatas, grandes felinos, algumas cobras venenosas. Importação de fora da EU: AHC, vacinas, microchip, por vezes autorização CITES. Custo do veterinário: gato — 25–40 € por consulta; animal raro — 50–80 €.',
  tags: ['gatos', 'exóticos', 'siac', 'cites'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'cats',
      title: '🐈 Gatos — registo obrigatório',
      content: [
        { kind: 'paragraph', text: 'O DL 82/2019 introduziu a identificação obrigatória por chip para gatos e furões. O prazo transitório para animais já existentes terminou em **25 de outubro de 2022**. Para os nascidos depois desta data, o chip é colocado nos primeiros **120 dias** de vida.' },
        { kind: 'checklist', items: [
          '🆔 **Microchip SIAC** — obrigatório (para gatos recém-nascidos — nos primeiros 120 dias)',
          '💉 **Raiva**: recomendada, mas não obrigatória pela lei nacional se o gato não for importado nem exportado',
          '⚠️ **Licença da Junta de Freguesia para gatos — NÃO existe como requisito nacional**. A licença anual foi introduzida apenas para cães (DL 313/2003 + posteriores). Alguns municípios podem introduzir registo local de gatos ou cadastro pago, mas isso é uma exceção, não a regra. Confirme na sua Junta',
          '🔍 **Identificação**: o número do chip SIAC é o identificador principal; coleira com chapa — ao critério do proprietário',
          '🚪 **Gatos de rua/de colónias** — os programas CER (captura–esterilização–devolução) são geridos pelos municípios em conjunto com associações; o chip é registado em nome da associação/município'
        ]}
      ]
    },
    {
      id: 'cat-import',
      title: '✈️ Entrada de um gato',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: 'Da EU sem alfândega', content: [
            { kind: 'checklist', items: [
              '✅ Passaporte de animal de companhia da EU (Pet Passport), emitido por um veterinário na EU',
              '✅ Microchip (ISO 11784/11785)',
              '✅ Vacina contra a raiva pelo menos 21 dias antes da entrada',
              '✅ O animal não esteve doente nos 30 dias anteriores',
              'Para deslocações dentro da EU, não é necessário teste de titulação de anticorpos contra a raiva'
            ]}
          ]},
          { id: 'i2', title: 'De países fora da EU (RU, UA, US, BR)', content: [
            { kind: 'checklist', items: [
              '🇷🇺 RU = país de alto risco — **teste de titulação de anticorpos contra a raiva** (análise ao sangue) obrigatório',
              'Resultado da análise: ≥ 0.5 IU/ml',
              'Espera de 3 meses após o teste',
              '**AHC (Animal Health Certificate)** emitido pelo veterinário oficial do país de origem',
              'Apostille + tradução para PT/EN',
              'Na fronteira: controlo no ponto de entrada — frequentemente o aeroporto de Lisboa ou do Porto',
              'É possível tratar antecipadamente da autorização de importação da DGAV, especialmente para raças raras'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'rabbits-rodents',
      title: '🐰 Coelhos e roedores',
      content: [
        { kind: 'checklist', items: [
          'Hamsters, porquinhos-da-índia, coelhos anões — sem regras especiais',
          'Chip e registo não são exigidos',
          'Compra: lojas de animais, criadores, online — há muitos anúncios no OLX',
          'Veterinário de animais exóticos: existem médicos especializados em todas as grandes cidades',
          'Entrada a partir de países fora da EU: AHC + certificado veterinário; a vacina contra a raiva não é necessária para roedores',
          'Furões: tratados como gatos — chip + Pet Passport obrigatórios'
        ]}
      ]
    },
    {
      id: 'birds',
      title: '🦜 Aves',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Aves domésticas comuns: canários, agapórnis, periquitos', content: [
            { kind: 'checklist', items: [
              'Sem registo especial',
              'Compra livre',
              'Viveiros e gaiolas grandes: requisitos de bem-estar de acordo com a Lei 92/95'
            ]}
          ]},
          { id: 'b2', title: 'Papagaios', content: [
            { kind: 'checklist', items: [
              '**Autorização CITES** obrigatória para a maioria das espécies:',
              '  - Cinzento-africano, catatuas, araras, amazonas — Annex II',
              '  - Documento do criador confirma a origem legal ao abrigo da CITES',
              'Entrada a partir de países fora da EU é complexa — são necessárias autorizações CITES de exportação e importação',
              'ICNF (icnf.pt) — autoridade nacional para a CITES',
              'Aves com peso até 180 g, por exemplo pequenos papagaios de cauda comprida, estão isentas das regras de anilhagem'
            ]}
          ]},
          { id: 'b3', title: 'Aves selvagens: aves de rapina, corujas, etc.', content: [
            { kind: 'paragraph', text: 'É proibido comprar ou manter como animal de companhia sem autorização do ICNF. A falcoaria exige licença. Se encontrar uma ave ferida — contacte o Centro de Recuperação RIAS / LPN.' }
          ]}
        ]}
      ]
    },
    {
      id: 'reptiles',
      title: '🦎 Répteis',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Permitidos sem licença', content: [
            { kind: 'checklist', items: [
              'Dragões-barbudos, osgas-leopardo, cobras-do-milho, pequenas pítons-reais, tartarugas — balcânicas e da Ásia Central — são frequentemente vendidas em lojas de animais',
              'Tartarugas aquáticas, por exemplo tartarugas-de-orelhas-vermelhas: desde 2016 são proibidas para novos proprietários enquanto espécie invasora',
              'Iguanas, osgas comuns: permitidas'
            ]}
          ]},
          { id: 'r2', title: 'Restritos ou proibidos', content: [
            { kind: 'checklist', items: [
              '🚫 **Cobras venenosas** — cobras-capelo, mambas, etc.: a posse é proibida',
              '🚫 **Grandes jiboias e pítons** (>3 m): é necessária licença do ICNF devido a requisitos de segurança pública no manuseamento',
              '🚫 **Crocodilos e aligátores**: apenas centros de vida selvagem registados',
              '🚫 **Alguns varanos** — de Komodo e grandes varanos-da-savana: CITES + licença especial',
              '⚠️ **Tartarugas**: muitas espécies são protegidas na EU — não podem ser capturadas na natureza, apenas criadas em cativeiro com documentos CITES'
            ]}
          ]},
          { id: 'r3', title: 'Viveiros', content: [
            { kind: 'checklist', items: [
              'Equipamento de loja de animais: 100–500 € por kit completo',
              'Aquecimento, UV e humidade — consoante a espécie',
              'Veterinário de animais exóticos: 50–80 € por consulta; existem clínicas especializadas em Lisboa e no Porto',
              'Problemas de saúde frequentes: doença óssea metabólica devido a UV incorreto, parasitas, podridão das escamas'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'fish',
      title: '🐠 Peixes e aquário',
      content: [
        { kind: 'checklist', items: [
          'Sem registo, sem licença',
          'Lojas de animais: tropicalfish.pt, Petline, Fauna&Flora, aquariofilistas especializados',
          'Espécies CITES — alguns corais, cavalos-marinhos: é necessária autorização para importação',
          'Proibidos: piranhas, alguns ciclídeos invasores em massas de água do Algarve',
          'Serviços de aquário: empresas oferecem instalação e manutenção por subscrição por 30–100 €/mês',
          'Clubes de aquariofilia: Aquariofilia.pt, grupos de Facebook para trocas e conselhos'
        ]}
      ]
    },
    {
      id: 'banned-species',
      title: '🚫 Espécies proibidas',
      content: [
        { kind: 'paragraph', text: 'EU Invasive Alien Species (Regulation 1143/2014) + complementos nacionais portugueses proíbem muitas espécies como animais de companhia.' },
        { kind: 'checklist', items: [
          '🐢 Trachemys scripta (tartaruga-de-orelhas-vermelhas), Pseudemys (FL slider) — deve ser corretamente entregue ou encaminhada para um centro de resgate autorizado',
          '🐦 Mainá-indiano, periquito-de-colar — proibição em meio selvagem',
          '🐍 Píton-birmanesa, anaconda — risco para a vida selvagem',
          '🐀 Esquilos selvagens (Sciurus carolinensis) — proibidos',
          '🐠 Grandes peixes-gato plecostomus: a libertação em águas abertas é ilegal',
          '🦗 Insetos e aranhas tropicais — restritos',
          'Lista completa: ec.europa.eu/environment/invasive-species'
        ]}
      ]
    },
    {
      id: 'vet-exotic',
      title: '👨‍⚕️ Veterinários para animais exóticos',
      content: [
        { kind: 'checklist', items: [
          '**Centro Veterinário Berna** (Lisboa) — especialista em animais exóticos',
          '**Hospital Veterinário do Porto** — grande clínica para animais exóticos',
          '**Clínica Veterinária do Lis** (Leiria) — répteis, aves',
          '**Hospital Vet ULP** — Porto, clínica universitária',
          'Preços: consulta 50–80 €, cirurgia 200–1000 €, análises ao sangue 30–60 €',
          'Alimentos especializados: apenas em lojas de animais especializadas ou online, por exemplo Zooplus',
          'Seguro para animais de companhia exóticos: limitado, normalmente não cobre répteis e aves'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Chip SIAC para gato (veterinário + registo)', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Autorização CITES para papagaio', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Consulta de veterinário de animais exóticos', amountEURMin: 50, amountEURMax: 80 },
    { label: 'Autorização de importação da DGAV', amountEURMin: 30, amountEURMax: 80 }
  ],
  sources: [
    { title: 'DGAV — animais de companhia', url: 'https://www.dgav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ICNF — CITES Portugal', url: 'https://www.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 82/2019 — registo de animais', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/82-2019-122722988', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulamento EU 1143/2014 — espécies invasoras', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R1143', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
