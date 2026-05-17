export default {
  editorialVoice: 'hackportugal',
  id: 'social-rules-condominio',
  categoryId: 'housing_rent',
  title: 'Vida num prédio de apartamentos — vizinhos, ruído, queixas',
  tldr: 'Portugal é um país de protocolo quotidiano silencioso, mas há vizinhos de todos os tipos. Regras de ruído: Regulamento Geral do Ruído (DL 9/2007) — período nocturno **23:00-07:00**, diurno 07:00-20:00, entardecer 20:00-23:00 (definições-padrão; os municípios podem acrescentar regras locais). Onde apresentar queixa: GNR/PSP (infração pontual) → Câmara Municipal (infração permanente) → tribunal. Coimas por ruído: 200-2500 € para pessoa singular. No condomínio, a assembleia geral aprova as regras internas, a assembleia realiza-se pelo menos 1 vez por ano. O Fundo Comum de Reserva é obrigatório.',
  tags: ['vizinhos', 'ruído', 'condomínio', 'queixas'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'noise-law',
      title: '🔊 Lei do ruído — Regulamento Geral do Ruído',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: 'Horas de silêncio', content: [
            { kind: 'checklist', items: [
              '**Período nocturno**: 23:00-07:00 (segundo o DL 9/2007 / Regulamento Geral do Ruído)',
              '**Período diurno**: 07:00-20:00',
              '**Período entardecer**: 20:00-23:00 (limites reduzidos)',
              '⚠️ Os municípios (Câmara Municipal) podem estabelecer regras locais adicionais e horas de silêncio — consulte o regulamento municipal da sua cidade',
              '📏 **Limite**: L_den ≤ 55 dB em zonas residenciais, L_night ≤ 45 dB',
              '🎵 Música no apartamento das 8:00-20:00 — dentro do razoável. À noite — mais baixo. De madrugada — não pode ser audível através da parede'
            ]}
          ]},
          { id: 'n2', title: 'O que é considerado infração', content: [
            { kind: 'checklist', items: [
              'Música / TV em volume alto, audíveis nos apartamentos vizinhos durante o período nocturno (23:00-07:00)',
              'Festas com ruído durante o período nocturno',
              'Obras / reparações em horas proibidas (normalmente 9:00-19:00 seg-sex, 10:00-18:00 sáb, proibido dom e feriados)',
              'Gritos, discussões, choro de bebé (crianças — exceção razoável em tribunal)',
              'Cão a ladrar na varanda (o dono é responsável)',
              'Ruído da água no duche depois das 23:00 (mais raro, mas há reclamações em edifícios antigos)',
              'Alarme de automóvel sem reação do proprietário'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'complaints',
      title: '📋 Onde apresentar queixa',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Passo 1: Diálogo com o vizinho (recomendado)', content: [
            { kind: 'checklist', items: [
              'De forma simpática — em PT isto é valorizado',
              'Deixar uma nota na caixa do correio ou falar pessoalmente',
              'Explicar que o problema não é pessoal, mas sim sobre o bem-estar comum',
              'Dar 1-2 semanas para uma reação',
              '📝 80% dos casos resolve-se sem passos adicionais'
            ]}
          ]},
          { id: 'c2', title: 'Passo 2: Administrador do condomínio', content: [
            { kind: 'checklist', items: [
              'Se houver administrador — enviar uma comunicação oficial (email é suficiente)',
              'O administrador chamará o infrator à assembleia condomínio',
              'Solução: advertência por escrito → coima a partir do orçamento comum',
              'Se o administrador ignorar — passar ao passo seguinte'
            ]}
          ]},
          { id: 'c3', title: 'Passo 3: GNR / PSP — chamar a polícia', content: [
            { kind: 'checklist', items: [
              'Para um problema **pontual** (festa ruidosa agora) — GNR (regiões) ou PSP (cidades)',
              '**112** — apenas se não houver outro número / agressão',
              'Número local da PSP / GNR — procure no Google "posto territorial + nome da zona"',
              'A polícia virá, pedirá para reduzir o ruído — normalmente resolve no local',
              '📋 Obtenha o número da ocorrência — para passos posteriores'
            ]}
          ]},
          { id: 'c4', title: 'Passo 4: Câmara Municipal', content: [
            { kind: 'checklist', items: [
              'Para uma infração **permanente**',
              'Submissão: online no site do município ou presencialmente no atendimento',
              '**Medição de ruído**: um técnico municipal vem medir o nível sonoro',
              'Se houver excesso — a coima é aplicada ao infrator (200-2500 € para pessoa singular, até 25 000 para pessoa coletiva)',
              'Processo: 1-3 meses'
            ]}
          ]},
          { id: 'c5', title: 'Passo 5: Tribunal', content: [
            { kind: 'checklist', items: [
              'Se tudo o resto falhou e houver danos (não consegue dormir, saúde)',
              'Ação de indemnização por danos através do tribunal cível',
              'Testemunhas, gravações, atestados médicos',
              'Advogado — obrigatório',
              'Processo: 6-18 meses, custo 500-2000 €',
              'Raramente usado para ruído — mais comum para obras / casos graves'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'condominio',
      title: '🏢 Como funciona o condomínio',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, a Lei 8/2022 regula a propriedade horizontal — cada prédio de apartamentos é um condomínio.' },
        { kind: 'substeps', items: [
          { id: 'cd1', title: 'Estrutura', content: [
            { kind: 'checklist', items: [
              '**Assembleia de condóminos** — reunião de todos os proprietários, votam por quotas (fração)',
              '**Administrador** — gestor (proprietário eleito ou empresa contratada), obrigatório',
              '**Regulamento interno** — regras do prédio (animais de estimação, varandas, ruído, obras)',
              '**Fundo Comum de Reserva** — 10% da contribuição mensal vai para uma reserva para grandes reparações (telhado, elevador)'
            ]}
          ]},
          { id: 'cd2', title: 'Assembleia', content: [
            { kind: 'checklist', items: [
              '**Ordinária**: anualmente entre 1 de janeiro e 30 de junho — aprovação do orçamento, eleições',
              '**Extraordinária**: a pedido de 1/4 dos proprietários ou do administrador',
              'Votação: conforme a dimensão do apartamento (permilagens). 1 apartamento ≠ 1 voto',
              'As decisões são tomadas por maioria das permilagens; algumas (grandes reparações) — 2/3',
              'Os proprietários-senhorios votam; os arrendatários — não'
            ]}
          ]},
          { id: 'cd3', title: 'Contribuições mensais', content: [
            { kind: 'checklist', items: [
              'Condomínio típico: **15-80 €/mês** para apartamento de 70-100 m²',
              'Fatores: dimensão do edifício, existência de elevador, piscina, segurança, jardim',
              'Cobre: limpeza, luz das zonas comuns, manutenção de elevadores, seguro do edifício, administração, Fundo Reserva',
              'O proprietário é obrigado a pagar, o arrendatário — apenas se estiver indicado no contrato (mais frequentemente paga o proprietário)',
              'Dívida: dívida **administrativa** → tribunal para cobrança; não há hipoteca legal sobre o apartamento'
            ]}
          ]},
          { id: 'cd4', title: 'Infrações ao regulamento', content: [
            { kind: 'checklist', items: [
              '60 dias para impugnar uma decisão da assembleia',
              'Condições das coimas no regulamento: de 50-500 € por infração',
              'Grandes alterações no apartamento (derrubar paredes): aprovação pela assembleia',
              'Varanda: não se pode estender roupa para fora (em alguns condomínios), instalar ar condicionado (sem aprovação)',
              'Animais de estimação: se o regulamento proibir — não é permitido; se permitir — há regras (trela nas zonas comuns)',
              'Colunas, festas — na maioria dos casos proibidas depois das 22:00'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'rental-tenant',
      title: '🏠 Se é arrendatário — os seus direitos',
      content: [
        { kind: 'checklist', items: [
          '**Uso tranquilo**: Lei 6/2006 (NRAU) — o proprietário garante o uso tranquilo',
          'Se os vizinhos incomodam e o proprietário não ajuda → pode exigir uma redução da renda ou a saída do contrato sem penalização',
          '**Obras nos vizinhos**: o proprietário deve avisar com 8 dias de antecedência sobre obras programadas',
          '**Zonas comuns**: tem direito a usá-las em igualdade com os proprietários (jardim, piscina, etc.)',
          '**Assembleia**: não vota, mas pode estar presente e intervir',
          '⚠️ **Carregamento EV**: tem direito a instalar no seu lugar de estacionamento (Lei 39/2021) — o proprietário não pode recusar, apenas impor condições'
        ]}
      ]
    },
    {
      id: 'special-issues',
      title: '🆘 Situações especiais',
      content: [
        { kind: 'checklist', items: [
          '**O cão do vizinho ladra todo o dia** → Câmara Municipal + veterinário municipal (possível retirada por razões de bem-estar)',
          '**Os vizinhos fumam na varanda, o fumo entra no seu apartamento** → não é uma infração direta (fumar numa varanda privada é permitido); mas se o condomínio proibiu — coima',
          '**Há obras por baixo de si há mais de 3 meses** → verificação de licenças no município, muitas vezes é ilegal',
          '**Hostel vizinho / arrendamento de curta duração — ruído constante** → AL (Alojamento Local) tem regras especiais; queixa à Câmara + ASAE; em algumas zonas (Bairro Alto, Baixa Lisbon) o AL é limitado',
          '**Infiltração pelo teto**: notificação por escrito ao vizinho, depois condomínio, depois seguradora',
          '**Vizinho agressor**: PSP 112 em caso de ameaça física; Provedor de Justiça em caso de conflito recorrente'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Contribuição típica do condomínio', amountEURMin: 15, amountEURMax: 80, note: '€/mês por 70-100 m²' },
    { label: 'Fundo Comum de Reserva', amountEUR: 0, note: '10% da contribuição mensal' },
    { label: 'Coima por ruído (pessoa singular)', amountEURMin: 200, amountEURMax: 2500 },
    { label: 'Advogado para tribunal cível', amountEURMin: 500, amountEURMax: 2000 }
  ],
  sources: [
    { title: 'DL 9/2007 — Regulamento Geral do Ruído', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2007-34467475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 8/2022 — propriedade horizontal (condomínio)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/8-2022-180824432', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 6/2006 — NRAU (arrendamento urbano)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34454575', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
