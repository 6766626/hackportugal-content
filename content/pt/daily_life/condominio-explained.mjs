export default {
  editorialVoice: 'hackportugal',
  id: 'condominio-explained',
  categoryId: 'daily_life',
  title: 'Condomínio — como funcionam as quotas, as assembleias e os direitos do morador',
  tldr: 'O condomínio é a organização obrigatória de todos os proprietários num edifício dividido em propriedade horizontal (a Lei 8/2022 actualizou o regime). Normalmente tem NIPC e administrador, mas não é uma pessoa colectiva comum. A quota cobre limpeza, elevador, seguro e fundo de reserva. É paga mensal ou trimestralmente. A assembleia anual ordinária realiza-se na primeira quinzena de Janeiro. Sem pagamento, o administrador é obrigado a iniciar cobrança judicial.',
  tags: ['condomínio', 'habitação', 'quotas', 'assembleia', 'direitos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-basis',
      title: 'Base legal',
      content: [
        { kind: 'paragraph', text: 'O regime da propriedade horizontal é regulado pelo Código Civil (arts. 1414–1438-A) e pela Lei 8/2022 (entrou em vigor em 10.04.2022). A lei actualizou as regras das assembleias, participação/comunicações à distância, poderes do administrador e cobrança de dívidas. As penalizações por atraso dependem do regulamento/das decisões da assembleia e da lei.' }
      ]
    },
    {
      id: 'whats-included',
      title: 'O que está incluído no condomínio',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Despesas obrigatórias', content: [
            { kind: 'checklist', items: [
              'Limpeza das entradas e das partes comuns',
              'Manutenção dos elevadores (contrato com uma empresa)',
              'Iluminação das partes comuns',
              'Rega do jardim, canalizador, electricista (emergências)',
              'Seguro obrigatório contra incêndio (Código Civil art. 1429); muitas vezes o condomínio contrata um seguro multirriscos colectivo para uma cobertura alargada',
              'Despesas administrativas (contabilista)',
              'Fundo Comum de Reserva — mínimo de 10% da quota-parte de cada proprietário nas restantes despesas do condomínio (DL 268/94 art. 4)'
            ]}
          ]},
          { id: 'c2', title: 'Despesas opcionais (por decisão da assembleia)', content: [
            { kind: 'checklist', items: [
              'Porteiro / empresa de gestão',
              'Videovigilância',
              'Manutenção do jardim / piscina',
              'Pintura da fachada, reparação do telhado (obras de maior dimensão)',
              'Dispensador de água, Wi-Fi para o átrio'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-much',
      title: 'Quanto custa',
      content: [
        { kind: 'checklist', items: [
          'Preço médio em Lisboa/Porto para um apartamento de 70 m² — 30–80 €/mês',
          'Com porteiro e piscina — 150–300 €/mês',
          'Prédios antigos sem elevador — 10–25 €/mês',
          'Condomínios de luxo (Quinta do Lago, Vale do Lobo) — 300–1000 €/mês',
          'A quota é proporcional à permilagem (milésimos) da fracção, registada na escritura'
        ]},
        { kind: 'paragraph', text: 'A quota NÃO é renda, mas sim uma obrigação própria do proprietário. Mesmo que a fracção esteja vazia ou arrendada — paga o proprietário. No contrato de arrendamento, é possível transferir o pagamento para o arrendatário, mas perante o condomínio responde apenas o proprietário.' }
      ]
    },
    {
      id: 'meetings',
      title: 'Assembleia geral',
      content: [
        { kind: 'checklist', items: [
          '📅 A assembleia anual ordinária realiza-se nos primeiros 15 dias de Janeiro; pode ser adiada para o 1.º trimestre, se tal estiver previsto no regulamento ou por decisão da assembleia (Código Civil art. 1431)',
          '📬 Convocatória — notificação escrita com 10 dias de antecedência e ordem de trabalhos',
          '🧑‍💼 O administrador é normalmente eleito por um ano; pode ser proprietário ou uma empresa profissional, remunerado ou gratuito — conforme a assembleia decidir',
          '✅ Na 1.ª convocatória, normalmente é necessária maioria simples do valor total do prédio; na 2.ª convocatória, as decisões são tomadas por maioria dos presentes, desde que representem pelo menos 1/4 do valor do prédio (excepto matérias com maioria especial)',
          '🗳️ Orçamento e despesas ordinárias — maioria simples; reparações necessárias das partes comuns têm regras próprias e nem sempre exigem 2/3; innovations/alterações normalmente exigem 2/3 do valor total; alteração do título constitutivo — normalmente unanimidade',
          '📱 A assembleia pode realizar-se por videoconferência, se for organizada pelo administrador ou solicitada pela maioria dos proprietários e existirem condições técnicas (Lei 8/2022)',
          '📝 A ata é redigida e assinada; as decisões devem ser comunicadas aos proprietários ausentes, com referência de 30 dias'
        ]},
        { kind: 'warning', text: 'Para decisões impugnáveis, normalmente há 60 dias para a ação de anulação (Código Civil art. 1433), mas o prazo conta-se de forma diferente para presentes e ausentes, e para decisões nulas/ineficazes aplicam-se outras regras. Em caso de litígio, consulte rapidamente um advogado.' }
      ]
    },
    {
      id: 'rights-duties',
      title: 'Os seus direitos e deveres',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Direitos', content: [
            { kind: 'checklist', items: [
              'O direito de voto é proporcional à permilagem',
              'Direito de ver TODAS as contas do condomínio (pedido ao administrador)',
              'Direito de obter o título constitutivo (na compra — junto do notário)',
              'Direito de substituir o administrador por votação',
              'Direito de instalar ar condicionado, janelas, antena — se isso não violar a aparência exterior (frequentemente regulado pelo regulamento interno)',
              'Direito de instalar carregamento para veículo eléctrico cumprindo o procedimento de notificação ao condomínio (DL 39/2010 com alterações da Lei 98/2021); o condomínio só pode opor-se por fundamentos limitados (segurança, infra-estrutura comum já existente, etc.)'
            ]}
          ]},
          { id: 'r2', title: 'Deveres', content: [
            { kind: 'checklist', items: [
              'Pagar a quota dentro do prazo (caso contrário — acção judicial)',
              'Respeitar as horas de silêncio (normalmente 23:00–07:00)',
              'Não bloquear saídas de evacuação e zonas comuns',
              'Avisar sobre obras que afectem os vizinhos',
              'Não alterar a fachada, varandas, cor das janelas — sem aprovação'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Litígios e devedores',
      content: [
        { kind: 'checklist', items: [
          '💰 Se a dívida não for liquidada, o administrador deve iniciar cobrança judicial no prazo de 90 dias após o primeiro incumprimento, se a assembleia não decidir de outro modo e o valor não for demasiado baixo (DL 268/94 art. 6). Julgado de Paz — apenas onde seja competente; caso contrário, através do tribunal comum',
          '⚖️ A ata/decisão da assembleia em que sejam aprovados os montantes, prazos e dívida pode constituir título executivo para cobrança coerciva (DL 268/94 art. 6 com alterações da Lei 8/2022)',
          '🔒 O proprietário com dívidas pode ser limitado no voto sobre matérias relacionadas com despesas do condomínio (Lei 8/2022), mas isso não implica a perda total de todos os direitos de voto',
          '🏠 Devedor crónico — pode chegar à penhora de bens através de execução',
          '🤝 Conflito com um vizinho — primeiro negociação, administrador, livro de ocorrências ou mediação, se disponível; em regra geral, não existe uma etapa obrigatória na Junta de Freguesia antes do tribunal'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Condomínio normal de 70 m²', amountEURMin: 30, amountEURMax: 80, note: '€/mês' },
    { label: 'Com porteiro e serviços comuns', amountEURMin: 150, amountEURMax: 300 },
    { label: 'Seguro multirriscos incluído', amountEURMin: 5, amountEURMax: 15 },
    { label: 'Julgado de Paz (se competente)', amountEUR: 70, note: 'taxa de justiça; execução através de tribunal/agente de execução tem custos diferentes' }
  ],
  sources: [
    { title: 'Lei n.º 8/2022 — Propriedade horizontal', url: 'https://dre.pt/dre/detalhe/lei/8-2022', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código Civil — artigos 1414–1438-A', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Condomínio', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/gestao-de-condominio', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IHRU — Instituto da Habitação e Reabilitação Urbana', url: 'https://www.ihru.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
