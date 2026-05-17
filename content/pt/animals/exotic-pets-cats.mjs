export default {
  editorialVoice: 'hackportugal',
  id: 'exotic-pets-cats',
  categoryId: 'animals',
  title: 'Gatos e animais de estimação exóticos — regras',
  tldr: 'Gatos: o chip SIAC é obrigatório desde 2022 para todos os gatos com mais de 4 meses. Licença da Junta de Freguesia — 5–15 €/ano na maioria dos municípios. Animais exóticos (répteis, aves, roedores): para espécies CITES e espécies protegidas, é necessário microchip e registo na DGAV. Proibição: animais selvagens perigosos — grandes primatas, grandes felinos, algumas serpentes venenosas. Importação de fora da EU: AHC, vacinas, microchip, por vezes autorização CITES. Custo do veterinário: gato — 25–40 € por consulta; animal raro — 50–80 €.',
  tags: ['gatos', 'exóticos', 'siac', 'cites'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'cats',
      title: '🐈 Gatos — registo obrigatório',
      content: [
        { kind: 'paragraph', text: 'Para gatos, o regime obrigatório de colocação de chip está em vigor desde **22 de dezembro de 2022** (DL 82/2019, implementação faseada). Tal como para os cães.' },
        { kind: 'checklist', items: [
          '🆔 **Microchip SIAC** — obrigatório a partir dos 4 meses',
          '💉 **Raiva**: recomendado, mas não obrigatório, se o gato não for importado nem exportado',
          '📋 **Licença da Junta de Freguesia**: cerca de 5–15 €/ano; não é exigida em todos os locais — municípios pequenos podem não fiscalizar o cumprimento',
          '🔍 **Identificação**: número do chip + chapa da licença da Junta de Freguesia — opcional na coleira',
          '🚪 **Gatos de exterior** — o chip é obrigatório; alguns municípios impõem a esterilização como condição para a licença de gato de exterior'
        ]}
      ]
    },
    {
      id: 'cat-import',
      title: '✈️ Importação de gato',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: 'Da EU sem alfândega', content: [
            { kind: 'checklist', items: [
              '✅ Passaporte de animal de companhia da EU (Pet Passport), emitido por um veterinário na EU',
              '✅ Microchip (ISO 11784/11785)',
              '✅ Vacina contra a raiva pelo menos 21 dias antes da entrada',
              '✅ O animal não esteve doente durante 30 dias',
              'Para deslocações dentro da EU, não é necessário teste de título de anticorpos contra a raiva'
            ]}
          ]},
          { id: 'i2', title: 'De países fora da EU (RU, UA, US, BR)', content: [
            { kind: 'checklist', items: [
              '🇷🇺 RU = país de alto risco — **teste de título de anticorpos contra a raiva** (análise ao sangue) obrigatório',
              'Resultado da análise: ≥ 0.5 IU/ml',
              'Espera de 3 meses após o teste',
              '**AHC (Animal Health Certificate)** emitido por veterinário oficial do país de origem',
              'Apostille + tradução para PT/EN',
              'Na fronteira: controlo no ponto de entrada — frequentemente o aeroporto de Lisboa ou do Porto',
              'Pode obter antecipadamente uma autorização de importação da DGAV, sobretudo para raças raras'
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
          'Hamsters, porquinhos-da-índia, coelhos-anões — sem regras especiais',
          'Não é exigido chip nem registo',
          'Compra: lojas de animais, criadores, online — há muitos anúncios no OLX',
          'Veterinário de animais exóticos: há médicos especializados em cada grande cidade',
          'Importação de países fora da EU: AHC + certificado veterinário; a vacina contra a raiva não é necessária para roedores',
          'Furões: são tratados como gatos — chip + Pet Passport obrigatórios'
        ]}
      ]
    },
    {
      id: 'birds',
      title: '🦜 Aves',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Aves domésticas comuns: canários, inseparáveis, periquitos', content: [
            { kind: 'checklist', items: [
              'Sem registo especial',
              'Compra livre',
              'Aviários e gaiolas grandes: requisitos de conforto de acordo com a Lei 92/95'
            ]}
          ]},
          { id: 'b2', title: 'Papagaios', content: [
            { kind: 'checklist', items: [
              '**Autorização CITES** obrigatória para a maioria das espécies:',
              '  - Papagaio-cinzento, catatua, arara, amazonas — Annex II',
              '  - Documento do criador confirma a origem legal ao abrigo da CITES',
              'A importação de países fora da EU é complexa — são necessárias autorizações CITES de exportação e importação',
              'ICNF (icnf.pt) — autoridade nacional para a CITES',
              'Aves com peso até 180 g, por exemplo pequenos papagaios de cauda comprida, estão dispensadas das regras de anilhagem'
            ]}
          ]},
          { id: 'b3', title: 'Aves selvagens: aves de rapina, corujas, etc.', content: [
            { kind: 'paragraph', text: 'É proibido comprar ou manter como animal de estimação sem autorização do ICNF. A falcoaria exige licença. Se encontrar uma ave ferida — contacte o Centro de Recuperação RIAS / LPN.' }
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
              'Agamas-barbudos, osgas-leopardo, cobras-do-milho, pequenas pitões-reais, tartarugas — balcânicas e da Ásia Central — são frequentemente vendidas em lojas de animais',
              'Tartarugas aquáticas, por exemplo tartarugas-de-orelhas-vermelhas: desde 2016 são proibidas para novos proprietários por serem uma espécie invasora',
              'Iguanas, osgas comuns: permitidas'
            ]}
          ]},
          { id: 'r2', title: 'Restritos ou proibidos', content: [
            { kind: 'checklist', items: [
              '🚫 **Serpentes venenosas** — cobras, mambas, etc.: a posse é proibida',
              '🚫 **Grandes boas e pitões** (>3 m): é necessária licença do ICNF devido a requisitos de segurança pública no manuseamento',
              '🚫 **Crocodilos e aligátores**: apenas centros de vida selvagem registados',
              '🚫 **Alguns varanos** — de Komodo e grandes varanos-da-savana: CITES + licença especial',
              '⚠️ **Tartarugas**: muitas espécies são protegidas na EU — não podem ser capturadas na natureza, apenas criadas em cativeiro com documentos CITES'
            ]}
          ]},
          { id: 'r3', title: 'Viveiros', content: [
            { kind: 'checklist', items: [
              'Equipamento de loja de animais: 100–500 € por conjunto completo',
              'Aquecimento, UV e humidade — consoante a espécie',
              'Veterinário de animais exóticos: 50–80 € por consulta; existem clínicas especializadas em Lisboa e no Porto',
              'Problemas de saúde frequentes: doença metabólica óssea por UV incorreto, parasitas, podridão das escamas'
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
        { kind: 'paragraph', text: 'EU Invasive Alien Species (Regulation 1143/2014) + complementos nacionais portugueses proíbem muitas espécies como animais de estimação.' },
        { kind: 'checklist', items: [
          '🐢 Trachemys scripta (tartaruga-de-orelhas-vermelhas), Pseudemys (FL slider) — deve ser transferida corretamente ou entregue a um centro de resgate autorizado',
          '🐦 Mainá-indiano, periquito-de-colar — proibição em meio selvagem',
          '🐍 Pitão-birmanesa, anaconda — risco para a vida selvagem',
          '🐀 Esquilos selvagens (Sciurus carolinensis) — proibidos',
          '🐠 Grandes peixes-gato plecostomus: a libertação em massas de água abertas é ilegal',
          '🦗 Insetos tropicais e aranhas — restritos',
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
          '**Hospital Veterinário do Porto** — clínica de grande dimensão para animais exóticos',
          '**Clínica Veterinária do Lis** (Leiria) — répteis, aves',
          '**Hospital Vet ULP** — Porto, clínica universitária',
          'Preços: consulta 50–80 €, cirurgia 200–1000 €, análises ao sangue 30–60 €',
          'Alimentos especializados: apenas em lojas de animais especializadas ou online, por exemplo Zooplus',
          'Seguro para animais de estimação exóticos: limitado, geralmente não cobre répteis e aves'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Chip SIAC para gato', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Licença da Junta de Freguesia para gato', amountEURMin: 5, amountEURMax: 15, note: '€/ano' },
    { label: 'Autorização CITES para papagaio', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Consulta de veterinário de animais exóticos', amountEURMin: 50, amountEURMax: 80 },
    { label: 'Autorização de importação da DGAV', amountEURMin: 30, amountEURMax: 80 }
  ],
  sources: [
    { title: 'DGAV — animais de companhia', url: 'https://www.dgav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ICNF — CITES Portugal', url: 'https://www.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 82/2019 — registo de animais', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/82-2019-122722988', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulation EU 1143/2014 — espécies invasoras', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R1143', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
