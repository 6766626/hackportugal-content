export default {
  editorialVoice: 'hackportugal',
  id: 'rental-sites-compared',
  categoryId: 'housing_rent',
  title: 'Onde procurar arrendamento de casa — sites e estratégia',
  tldr: 'Quatro canais principais: agregadores (Idealista, Imovirtual, Supercasa), arrendamento de média duração (Flatio, Uniplaces), directamente com proprietários (OLX Imóveis, grupos de Facebook), agentes (Century 21, ERA, RE/MAX). Para arrendamento de longa duração, comece pelo Idealista + OLX. Para se mudar antes de obter o NIF — Flatio / Uniplaces (aceitam apenas passaporte).\n\nPrazo médio de procura em Lisboa/Porto — 3–8 semanas.',
  tags: ['arrendamento', 'idealista', 'imovirtual', 'olx', 'flatio'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'aggregators',
      title: 'Agregadores — arrendamento de longa duração',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Idealista (idealista.pt)', content: [
            { kind: 'checklist', items: [
              'O maior agregador em Portugal e Espanha',
              'Filtros: preço, número de quartos, área, animais, terraço, garagem, certificado energético',
              'Notificações de novos anúncios por email / na aplicação',
              '70% dos anúncios são de agentes, 30% de proprietários',
              'Aplicação em inglês/espanhol, não em russo'
            ]}
          ]},
          { id: 'a2', title: 'Imovirtual (imovirtual.com)', content: [
            { kind: 'paragraph', text: 'O segundo maior. Mais anúncios regionais (cidades pequenas). As comissões dos agentes são as mesmas.' }
          ]},
          { id: 'a3', title: 'Supercasa (supercasa.pt)', content: [
            { kind: 'paragraph', text: 'Menos imóveis premium, mas muitos de orçamento médio. Mapas e filtros práticos.' }
          ]},
          { id: 'a4', title: 'Casa Sapo (casa.sapo.pt)', content: [
            { kind: 'paragraph', text: 'O agregador mais antigo. Muitas vezes duplica o Idealista/Imovirtual, mas há exclusivos de pequenas agências.' }
          ]}
        ]}
      ]
    },
    {
      id: 'medium-term',
      title: 'Arrendamento de média duração e casa mobilada — para recém-chegados',
      content: [
        { kind: 'substeps', items: [
          { id: 'm1', title: 'Flatio (flatio.com)', content: [
            { kind: 'checklist', items: [
              'Plataforma checa, forte em Portugal',
              'Tudo mobilado e com serviços incluídos',
              'Contrato de 1 mês a mais de 12 meses',
              'Aceitam passaporte + reserva sem NIF',
              'A plataforma cobra 10–15 % ao senhorio, sem pagamento adicional pelo cliente',
              'Mais caro do que o Idealista em 20–40 %, mas mais simples para recém-chegados'
            ]}
          ]},
          { id: 'm2', title: 'Uniplaces (uniplaces.com)', content: [
            { kind: 'paragraph', text: 'Para estudantes. Apartamentos e quartos, muitas vezes perto de universidades. Caução online através da plataforma. Aceitam sem NIF.' }
          ]},
          { id: 'm3', title: 'Spotahome, Nestpick, HousingAnywhere', content: [
            { kind: 'paragraph', text: 'Plataformas internacionais. Menos anúncios em Portugal, mas uma opção para quem procura antes da mudança.' }
          ]},
          { id: 'm4', title: 'Airbnb (estadias de longa duração)', content: [
            { kind: 'paragraph', text: 'Desde 2024, o arrendamento de curta duração (AL) em Portugal está limitado. Anúncios de longa duração através de «Monthly stays» — 28+ dias, descontos até 40 %. Sem contrato português, mas caro.' }
          ]}
        ]}
      ]
    },
    {
      id: 'direct',
      title: 'Directamente com o proprietário',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'OLX Imóveis (olx.pt)', content: [
            { kind: 'checklist', items: [
              'A maior plataforma de anúncios em Portugal',
              '60 % de particulares (sem agente = sem comissão)',
              'As respostas chegam mais depressa do que no Idealista',
              'Mais riscos de fraude (veja sempre pessoalmente)',
              'Nunca pague adiantamentos antes da visita'
            ]}
          ]},
          { id: 'd2', title: 'Grupos de Facebook', content: [
            { kind: 'paragraph', text: 'Grupos por cidade: «Arrendamento Lisboa», «Casas para Alugar Porto», «Expats in PT — Housing». A moderação é fraca, mas é possível fechar negócios rapidamente. Verifique o perfil do senhorio.' }
          ]},
          { id: 'd3', title: 'Boca a boca / anúncios no quadro', content: [
            { kind: 'paragraph', text: 'Nas cidades pequenas ainda funciona. Pergunte na Junta de Freguesia (administração local), em cafés, pastelarias. Muitas vezes sem comissão.' }
          ]}
        ]}
      ]
    },
    {
      id: 'agents',
      title: 'Agentes (através de escritórios)',
      content: [
        { kind: 'substeps', items: [
          { id: 'ag1', title: 'Quando contactar', content: [
            { kind: 'paragraph', text: 'Se não tiver tempo para procurar por si ou precisar de aconselhamento. Comissão: normalmente 1 renda mensal + IVA (a cargo do senhorio, mas reflecte-se no preço).' }
          ]},
          { id: 'ag2', title: 'Grandes redes', content: [
            { kind: 'checklist', items: [
              'Century 21 — mais de 150 escritórios',
              'ERA Imobiliária — a maior em Portugal',
              'RE/MAX — americana, forte em Lisboa/Porto',
              'Coldwell Banker — premium',
              'Engel & Völkers — premium'
            ]}
          ]},
          { id: 'ag3', title: 'O que o agente exige', content: [
            { kind: 'checklist', items: [
              'Cartão de Cidadão / autorização de residência / passaporte',
              'NIF',
              'Comprovativo de rendimentos (contrato dos últimos 3 meses / extracto)',
              'Fiador ou seguro de renda',
              'Primeiro mês + caução (normalmente 2–3 meses)',
              'Garantia da empresa — se trabalhar'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'strategy',
      title: 'Estratégia de procura',
      content: [
        { kind: 'checklist', items: [
          '📅 Comece a procurar 4–6 semanas ANTES da entrada',
          '🔔 Configure notificações no Idealista + OLX — os novos anúncios desaparecem rapidamente',
          '📲 Responda no prazo de uma hora; aos fins-de-semana, esteja atento',
          '💬 Mensagem ao senhorio: nome, data de chegada, trabalho/estudo, rendimento estável',
          '🏠 Visite sempre pessoalmente ou por videochamada',
          '💶 Não pague adiantamentos por Revolut sem contrato assinado',
          '🤝 Negocie — o preço está muitas vezes inflacionado em 5–15 %',
          '📄 Cada contrato na autoridade tributária através do Portal das Finanças — é a lei'
        ]},
        { kind: 'warning', text: 'Esquemas de fraude típicos: pedido de adiantamento por Western Union, «reserva» sem visita, «o senhorio vive noutro país». Encontre-se sempre pessoalmente ou use uma plataforma verificada.' }
      ]
    }
  ],
  sources: [
    { title: 'Instituto da Habitação e Reabilitação Urbana (IHRU)', url: 'https://www.ihru.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças — Contratos de Arrendamento', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMI — Associação dos Mediadores Imobiliários', url: 'https://www.ami.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Arrendar casa', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
