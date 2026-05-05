export default {
  editorialVoice: 'hackportugal',
  id: 'rental-contract',
  categoryId: 'housing_rent',
  title: 'Arrendamento de longa duração em Portugal — enquadramento legal e processo',
  tldr: 'O arrendamento de longa duração (arrendamento habitacional) é regulado pelo NRAU (Lei 6/2006 com alterações). Se **o prazo está indicado** no contrato — mínimo 1 ano para habitação (com exceções para fins temporários). Se **o prazo NÃO está indicado** — pelo Código Civil o contrato considera‑se celebrado por **5 anos**. Nos termos do art. 1076 do Código Civil (após a Mais Habitação 2023) limite legal: caução até **2 rendas mensais** + adiantamento até **2 meses**. Pedidos de adiantamento de 3–12 meses são comuns no mercado para estrangeiros sem fiador, mas são juridicamente vulneráveis — discuta com um advogado a estrutura (seguro de fiança, garantia autónoma). O contrato é registado nas Finanças pelo proprietário (que emite os recibos de renda) até ao fim do mês seguinte ao início do contrato.',
  tags: ['arrendamento', 'nrau', 'contrato', 'caução', 'fiador'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'legal-framework',
      title: 'Enquadramento legal',
      content: [
        { kind: 'paragraph', text: 'Documentos principais: Código Civil (artigos sobre arrendamento), Lei 6/2006 (NRAU — Novo Regime do Arrendamento Urbano), numerosas leis e decretos‑lei com alterações. Importante para 2024–2026: a Lei 56/2023 «Mais Habitação» FOI PARCIALMENTE REVOGADA no âmbito do programa «Construir Portugal»: o Decreto‑Lei 43/2024 (julho de 2024) revogou o arrendamento coercivo de imóveis devolutos (art. 108-C CAE), o Decreto‑Lei 76/2024 (23 de outubro de 2024) levantou a moratória sobre novas licenças de AL em apartamentos e eliminou a caducidade automática de 5 anos do AL.' },
        { kind: 'paragraph', text: 'Princípios‑chave: proteção do arrendatário (despejo apenas por via judicial), obras estruturais — obrigação do senhorio, indexação da renda — não mais do que 1 vez por ano e não acima do coeficiente oficial do INE (em 2026: **2,24%**, coeficiente 1,0224, publicado no Aviso n.º 23174/2025/2 de 19.09.2025).' },
        { kind: 'paragraph', text: 'Caução e adiantamento (art. 1076 do Código Civil após a Lei 56/2023 «Mais Habitação»): no máximo 2 rendas mensais como caução + no máximo 2 rendas mensais como adiantamento. Exigências superiores devem ser estruturadas numa figura jurídica separada (seguro de fiança, outra garantia), caso contrário a cláusula pode ser impugnada como ilegal.' }
      ]
    },
    {
      id: 'terms',
      title: 'Termos‑chave',
      content: [
        { kind: 'checklist', items: [
          'Arrendatário / inquilino — quem arrenda (o locatário)',
          'Senhorio — proprietário (locador)',
          'Contrato de arrendamento habitacional — contrato de arrendamento para habitação',
          'Renda — prestação mensal de arrendamento',
          'Caução — depósito de garantia; nos termos do art. 1076 do Código Civil (após a Mais Habitação) máximo de 2 rendas mensais; é devolvida à saída. Pode ainda ser acordado um adiantamento de rendas até 2 meses',
          'Fiador — pessoa garante: pessoa singular residente em Portugal com rendimento estável, que responde com o seu património pelas obrigações do arrendatário',
          'Seguro de fiança — a seguradora substitui o fiador, cerca de 5–7% da renda anual',
          'IMI — imposto municipal sobre imóveis, por lei pago pelo proprietário',
          'Condomínio — quota para manutenção das zonas comuns do edifício (normalmente não incluída na renda)',
          'Recibo de renda — recibo mensal do senhorio com os NIF das partes, base para a declaração fiscal'
        ]}
      ]
    },
    {
      id: 'pricing',
      title: 'Referências de mercado (2026)',
      content: [
        { kind: 'paragraph', text: 'Os preços aumentaram significativamente em 2022–2025. Segundo o INE e estatísticas do Banco de Portugal:' },
        { kind: 'checklist', items: [
          'Lisboa centro: T1 (1 quarto) 1 400–2 500 €/mês',
          'Lisboa periferia (Oeiras, Almada): T1 900–1 500 €',
          'Porto centro: T1 900–1 400 €',
          'Porto periferia: T1 650–1 000 €',
          'Coimbra: T1 550–850 €',
          'Braga: T1 500–800 €',
          'Algarve sazonal: T1 700–1 500 € (inverno), até x2 no verão',
          'Alentejo cidades pequenas: T1 350–600 €'
        ]},
        { kind: 'paragraph', text: 'Convenções: T0 = estúdio, T1 = 1 quarto + sala, T2 = 2 quartos + sala, etc.' }
      ]
    },
    {
      id: 'search-channels',
      title: 'Canais de procura',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existem várias categorias de canais para procurar casa:' },
        { kind: 'checklist', items: [
          'Portais online agregadores (maiores: Idealista, Imovirtual, Casa Sapo, Supercasa) — canal principal, centenas de milhares de anúncios',
          'OLX Imóveis — muitos anúncios diretamente de proprietários (menos comissões)',
          'Agências imobiliárias (imobiliárias) — maiores redes: RE/MAX, Century 21, ERA, Engel & Völkers. Comissão de 1 mês de renda, muitas vezes paga pelo proprietário',
          'Grupos locais no Facebook (por cidades e bairros)',
          'Arrendamento de média duração (6–12 meses) para estrangeiros: plataformas sem fiador, mas 20–40% mais caro',
          'Junta de Freguesia — por vezes tem programas de habitação social'
        ]},
        { kind: 'warning', text: 'Esquema típico de burla: anúncio com fotos de um bom apartamento, o «proprietário» está no estrangeiro e pede um adiantamento para «reserva» sem visita. NUNCA pague por uma casa que não viu pessoalmente ou através de um representante de confiança.' }
      ]
    },
    {
      id: 'process',
      title: 'Processo de arrendamento — passo a passo',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Preparação prévia', content: [
            { kind: 'checklist', items: [
              'Obter NIF',
              'Abrir conta bancária em Portugal (recomendável)',
              'Preparar comprovativos de rendimento: contrato de trabalho, recibos de vencimento dos últimos 3 meses, extrato bancário ou declaração de IRS',
              'Encontrar fiador (se possível) — o seu Cartão de Cidadão (CC) + comprovativos de rendimento',
              'Na ausência de fiador: prever orçamento para adiantamento de 3–12 meses ou para seguro de fiança'
            ]}
          ]},
          { id: 'p2', title: '2. Procura e visitas', content: [
            { kind: 'paragraph', text: 'Elabore uma lista de opções. Na primeira visita verifique: humidade nas paredes e janelas (marca branca nos cantos = bolor), aquecimento (no inverno é crítico — Portugal é dos piores da UE em isolamento térmico das habitações), água quente (esquentador a gás ou termoacumulador), ruído da rua e dos vizinhos, pressão da água.' }
          ]},
          { id: 'p3', title: '3. Proposta e negociação', content: [
            { kind: 'paragraph', text: 'Pontos a discutir: prazo (12/24/36 meses), montante da caução, quem paga IMI e condomínio, mobiliário (mobilado (com mobília) / mobilado parcialmente (parcialmente mobilado) / sem mobília), restrições a animais de estimação, indexação da renda, compromisso prévio do senhorio para corrigir defeitos identificados antes da entrada.' }
          ]},
          { id: 'p4', title: '4. Assinatura do contrato', content: [
            { kind: 'paragraph', text: 'Pelo menos em 2 exemplares. Elementos obrigatórios segundo a Lei 6/2006: nomes e NIF das partes, morada completa do imóvel, número matricial (artigo matricial) e freguesia, prazo, valor da renda e forma de indexação, montante da caução, data de início.' }
          ]},
          { id: 'p5', title: '5. Entrega das chaves', content: [
            { kind: 'paragraph', text: 'Faça um relatório de estado (inventário) — lista do mobiliário existente, estado das paredes, pavimento e sanitários. Fotografe tudo. Isto protege‑o na devolução da caução.' }
          ]},
          { id: 'p6', title: '6. Registo nas Finanças', content: [
            { kind: 'paragraph', text: 'No prazo de 30 dias o senhorio deve registar o contrato no Portal das Finanças. Obtém um comprovativo e fornece‑lhe uma cópia. Sem registo: não pode usar o contrato para o atestado de residência, para a AIMA, nem para a dedução da renda no IRS.' },
            { kind: 'warning', text: 'Se o senhorio se recusar a registar — é um sinal de alerta sério (possível evasão fiscal). Insista ou escolha outra casa.' }
          ]}
        ]}
      ]
    },
    {
      id: 'without-fiador',
      title: 'Se não houver fiador',
      content: [
        { kind: 'paragraph', text: 'Para estrangeiros recém‑chegados, o fiador é frequentemente indisponível. Opções:' },
        { kind: 'checklist', items: [
          '⚠️ Adiantamento de 3–12 meses — prática de mercado comum para estrangeiros sem fiador, mas, como «adiantamento de rendas», é juridicamente vulnerável: o art. 1076 do CC limita‑o a 2 meses. Deve ser estruturado como seguro de fiança, depósito de garantia ou outra garantia — discuta com um advogado',
          '⚠️ «Caução aumentada» de 3–6 meses — também contraria o art. 1076 do CC (máx. 2 meses). Se o senhorio insistir, peça para estruturar o excesso através de seguro de fiança',
          'Seguro de fiança — a seguradora garante as obrigações, custa 5–7% da renda anual (via legal para contornar os limites do art. 1076)',
          'Arrendamento de média duração (6–12 meses) através de intermediários — normalmente sem fiador, mas 20–40% mais caro',
          'Habitação social (para alguns perfis) — via município',
          'Arrendamento de quarto em habitação partilhada — processo frequentemente simplificado'
        ]}
      ]
    },
    {
      id: 'rights-and-duties',
      title: 'Direitos e deveres',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Direitos do arrendatário', content: [
            { kind: 'checklist', items: [
              'Gozo pacífico da casa durante o prazo do contrato',
              'Proteção contra aumentos arbitrários da renda — apenas 1 vez por ano e não acima do coeficiente do INE',
              'Proteção contra despejo — apenas por decisão judicial, salvo falta de pagamento de 2+ meses ou infrações graves',
              'Obras estruturais — a cargo do senhorio (telhado, instalação elétrica, defeitos estruturais)',
              'Devolução da caução no prazo de 30 dias após o fim do contrato (com dedução de danos documentados)',
              'Deduções no IRS pela renda — 15% até 700–800 €/ano (teto aumentado no OE 2024/25; confirme o valor exato em portaldasfinancas.gov.pt)'
            ]}
          ]},
          { id: 'r2', title: 'Deveres do arrendatário', content: [
            { kind: 'checklist', items: [
              'Pagamento pontual da renda (normalmente até ao dia 8 de cada mês)',
              'Pagamento de utilidades (electricidade, gás, água — as faturas vêm diretamente para si como arrendatário)',
              'Pequenas reparações correntes (cosmética, substituição de lâmpadas, pequenas avarias)',
              'Conservação da casa — manutenção da limpeza, evitar danos',
              'Avisar o senhorio com 120 dias de antecedência se pretender rescindir o contrato (o prazo varia consoante o tipo)',
              'Cumprir o regulamento do condomínio'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Situações de litígio',
      content: [
        { kind: 'checklist', items: [
          'Não devolução da caução — reclamação escrita ao senhorio, depois no Balcão Nacional do Arrendamento (BNA) ou nos Julgados de Paz',
          'Problemas com o estado técnico — exigência escrita por correio registado com aviso de receção, fotos e prazos para resolução',
          'Ruído e vizinhos — queixa na Junta de Freguesia, polícia (112 para ruído noturno elevado)',
          'Aumento indevido da renda — impugnar no BNA; coeficiente acima do INE é ilegal',
          'Despejo antecipado — apoio jurídico gratuito através da Ordem dos Advogados (se baixos rendimentos) ou advogado particular',
          'DECO Proteste — defesa do consumidor, dá aconselhamento sobre contratos de arrendamento'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Passaporte / Cartão de Cidadão (CC)', note: 'ambas as partes' },
    { title: 'NIF', note: 'de ambas as partes — obrigatório no contrato' },
    { title: 'Comprovativo de rendimentos', note: 'recibos de vencimento / extratos / contrato' },
    { title: 'Fiador (se existir)', note: 'o seu Cartão de Cidadão (CC), NIF, comprovativo de rendimentos' },
    { title: 'IBAN', note: 'para débito automático da renda' }
  ],
  costs: [
    { label: 'Caução (depósito)', amountEURMin: 500, amountEURMax: 3000, note: 'máx. 2 meses de renda pelo art. 1076 CC' },
    { label: 'Adiantamento de rendas (máx.)', amountEURMin: 500, amountEURMax: 3000, note: 'máx. 2 meses pelo art. 1076 CC; acima disso — estruturar via seguro de fiança' },
    { label: 'Seguro de fiança', amountEURMin: 300, amountEURMax: 1500, note: '5–7% da renda anual' },
    { label: 'Comissão da agência', amountEURMin: 0, amountEURMax: 2000, note: 'frequentemente paga pelo proprietário' }
  ],
  sources: [
    { title: 'Lei 6/2006 — NRAU (Novo Regime do Arrendamento Urbano)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34498475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — art. 1076 (caução e antecipação de rendas)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 56/2023 — Mais Habitação', url: 'https://diariodarepublica.pt/dr/detalhe/lei/56-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 76/2024 — Alojamento Local após Mais Habitação (Construir Portugal)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/76-2024-892301177', kind: 'law', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 43/2024 — revoga arrendamento coercivo (CAE) de imóveis devolutos', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/43-2024-862870533', kind: 'law', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Portal das Finanças — Registo de Contrato de Arrendamento', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Arrendar casa', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/arrendar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
