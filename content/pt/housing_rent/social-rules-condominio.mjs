export default {
  editorialVoice: 'hackportugal',
  id: 'social-rules-condominio',
  categoryId: 'housing_rent',
  title: 'Vida num prédio de apartamentos — vizinhos, ruído, queixas',
  tldr: 'Portugal é um país de protocolo quotidiano silencioso, mas os vizinhos variam. Regras de ruído: Regulamento Geral do Ruído (DL 9/2007) — período nocturno 23:00-07:00, diurno 07:00-20:00, entardecer 20:00-23:00 (definições padrão; os municípios podem acrescentar regras locais).\n\nOnde reclamar: GNR/PSP (infração pontual) → Câmara Municipal (infração continuada) → tribunal. Substituir por: «As coimas dependem da configuração da infração: para pessoas singulares, ao abrigo do RGR/Lei-Quadro das Contraordenações Ambientais, normalmente começam nos 200 € para infrações leves, mas em infrações graves os montantes são substancialmente mais elevados. Verifique o art. 28 DL 9/2007 e a Lei 50/2006 na redação em vigor». No condomínio, a assembleia geral aprova as regras internas; a assembleia realiza-se pelo menos 1 vez por ano. O Fundo Comum de Reserva é obrigatório.',
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
              'Período nocturno: 23:00-07:00 (ao abrigo do DL 9/2007 / Regulamento Geral do Ruído)',
              'Período diurno: 07:00-20:00',
              'Período entardecer: 20:00-23:00 (limites reduzidos)',
              '⚠️ Os municípios (Câmara Municipal) podem estabelecer regras locais adicionais e horas de silêncio — verifique o regulamento municipal da sua cidade',
              'Escrever: «Lden/Lnight são usados para mapas de ruído e zonamento; para ruído doméstico vindo de vizinhos, é mais importante o regime de ruído de vizinhança e, em caso de medições, o critério de incomodidade. Não conte que a polícia vá verificar especificamente Lden 55/Lnight 45 dentro do apartamento».',
              '🎵 Música no apartamento das 8:00-20:00 — dentro do razoável. Ao fim da tarde/noite — mais baixo. De noite — não deve ser audível através da parede'
            ]}
          ]},
          { id: 'n2', title: 'O que é considerado infração', content: [
            { kind: 'checklist', items: [
              'Música / TV alta, audível nos apartamentos vizinhos durante o período nocturno (23:00-07:00)',
              'Festas com ruído durante o período nocturno',
              'Substituir por: «Obras/reparações ruidosas junto de habitações: regra geral — não realizar entre as 20:00-08:00, aos sábados, domingos e feriados sem licença especial de ruído. Obras dentro do edifício são normalmente admissíveis em dias úteis 08:00-20:00, com aviso aos moradores sobre a duração dos trabalhos. As regras municipais podem acrescentar detalhes».',
              'Gritos, discussões, choro de bebé (crianças — exceção razoável em tribunal)',
              'Ladrar de cão na varanda (o dono é responsável)',
              'Ruído da água no duche depois das 23:00 (mais raro, mas há queixas em edifícios antigos)',
              'Alarme de automóvel sem reação do proprietário'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'complaints',
      title: '📋 Onde reclamar',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Passo 1: Diálogo com o vizinho (recomendado)', content: [
            { kind: 'checklist', items: [
              'De forma cordial — em PT isto é valorizado',
              'Escrever uma nota na caixa do correio ou falar pessoalmente',
              'Explicar que o problema não é pessoal, mas diz respeito ao bem-estar comum',
              'Dar 1-2 semanas para reação',
              '📝 80% dos casos resolve-se sem passos adicionais'
            ]}
          ]},
          { id: 'c2', title: 'Passo 2: Administrador do condomínio', content: [
            { kind: 'checklist', items: [
              'Se houver administrador — enviar uma comunicação formal (email é suficiente)',
              'Escrever: «O administrador pode enviar uma advertência ao proprietário da fração e/ou levar o assunto à assembleia de condóminos. Se o infrator for arrendatário, normalmente atua-se através do proprietário-senhorio».',
              'Substituir por: «Solução: advertência escrita ao proprietário → existindo fundamento no regulamento/decisão da assembleia, pode haver uma sanção pecuniária, cobrável ao infrator; o montante das sanções por ano é limitado por lei».',
              'Se o administrador ignorar — passo seguinte'
            ]}
          ]},
          { id: 'c3', title: 'Passo 3: GNR / PSP — chamada da polícia', content: [
            { kind: 'checklist', items: [
              'Para um problema pontual (festa barulhenta agora) — GNR (regiões) ou PSP (cidades)',
              '112 — apenas se não houver outro número / agressão',
              'Número local da PSP / GNR — pesquise no Google "posto territorial + nome da zona"',
              'A polícia chega, pede para reduzir o ruído — normalmente resolve no local',
              '📋 Obter o número da ocorrência — para passos posteriores'
            ]}
          ]},
          { id: 'c4', title: 'Passo 4: Câmara Municipal', content: [
            { kind: 'checklist', items: [
              'Para uma infração continuada',
              'Entrega: online no site do município ou presencialmente no atendimento',
              'Medição de ruído: um técnico municipal desloca-se e mede o nível sonoro',
              'Substituir por: «Se a infração for confirmada, pode ser iniciado processo de contraordenação. O valor da coima depende da classificação da infração pelo RGR e pela Lei 50/2006; não está universalmente limitado a 2 500 €/25 000 €».',
              'Processo: 1-3 meses'
            ]}
          ]},
          { id: 'c5', title: 'Passo 5: Tribunal', content: [
            { kind: 'checklist', items: [
              'Se tudo o resto falhou e houver dano (não consegue dormir, saúde)',
              'Ação de indemnização através do tribunal civil',
              'Testemunhas, gravações, relatórios médicos',
              'Advogado — obrigatório',
              'Processo: 6-18 meses, custo 500-2 000 €',
              'Raramente usado para ruído — mais frequentemente para obras / casos graves'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'condominio',
      title: '🏢 Como funciona o condomínio',
      content: [
        { kind: 'paragraph', text: 'Substituir por: «O regime de condomínio/propriedade horizontal assenta sobretudo nos arts. 1414-1438-A do Código Civil e no DL 268/94; a Lei 8/2022 introduziu alterações importantes. O condomínio existe quando o edifício está constituído em propriedade horizontal com frações autónomas».' },
        { kind: 'substeps', items: [
          { id: 'cd1', title: 'Estrutura', content: [
            { kind: 'checklist', items: [
              'Assembleia de condóminos — reunião de todos os proprietários, votam por quotas (fração)',
              'Administrador — gestor (proprietário eleito ou empresa contratada), obrigatório',
              'Regulamento interno — regras da casa (animais de estimação, varandas, ruído, obras)',
              'Fundo Comum de Reserva — 10% da contribuição mensal vai para uma reserva para grandes reparações (telhado, elevador)'
            ]}
          ]},
          { id: 'cd2', title: 'Assembleia', content: [
            { kind: 'checklist', items: [
              'Substituir por: «Ordinária: anualmente, regra geral na primeira quinzena de janeiro, para aprovar as contas do ano anterior e o orçamento; o regulamento/assembleia podem prever a realização no primeiro trimestre».',
              'Extraordinária: a pedido de 1/4 dos proprietários ou do administrador',
              'Votação: de acordo com a dimensão do apartamento (permilagens). 1 apartamento ≠ 1 voto',
              'As decisões são tomadas por maioria das permilagens; algumas (grandes reparações) — 2/3',
              'Os proprietários-senhorios votam; os arrendatários — não'
            ]}
          ]},
          { id: 'cd3', title: 'Contribuições mensais', content: [
            { kind: 'checklist', items: [
              'Condomínio típico: 15-80 €/mês para um apartamento de 70-100 m²',
              'Fatores: dimensão do edifício, existência de elevador, piscina, segurança, jardim',
              'Cobre: limpeza, luz das zonas comuns, manutenção de elevadores, seguro do edifício, administração, Fundo Reserva',
              'O proprietário é obrigado a pagar, o arrendatário — apenas se estiver indicado no contrato (mais frequentemente paga o proprietário)',
              'Dívida: dívida administrativa → tribunal para cobrança; não há hipoteca legal sobre o apartamento'
            ]}
          ]},
          { id: 'cd4', title: 'Infrações ao regulamento', content: [
            { kind: 'checklist', items: [
              '60 dias para impugnar uma decisão da assembleia',
              'Substituir por: «Coimas/sanções pecuniárias são possíveis se previstas no regulamento ou por decisão da assembleia; o limite anual global das sanções é limitado pelo Código Civil art. 1434, pelo que não existe um intervalo fixo de 50-500 €».',
              'Grandes alterações no apartamento (demolir paredes): aprovação da assembleia',
              'Varanda: não se pode estender roupa para fora (em alguns condomínios), instalar ar condicionado (sem aprovação)',
              'Substituir por: «O regulamento pode estabelecer regras para zonas comuns, higiene, trelas, elevador e ruído. A proibição total de manter um animal de estimação dentro de uma fração privada é juridicamente discutível; aplicam-se separadamente limites quanto ao número de animais e regras das autoridades municipais/veterinárias».',
              'Colunas, festas — na maioria dos casos proibidas depois das 22:00'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'rental-tenant',
      title: '🏠 Se você é arrendatário — os seus direitos',
      content: [
        { kind: 'checklist', items: [
          'Gozo pacífico: Lei 6/2006 (NRAU) — o senhorio garante a utilização tranquila',
          'Escrever: «Se o ruído prejudicar substancialmente o uso da habitação, notifique o landlord por escrito e reúna provas. A possibilidade de redução da renda ou de resolução sem penalização não é automática; depende do contrato, do papel do landlord e da gravidade da infração, e muitas vezes exige legal advice».',
          'Substituir por: «Em caso de obras ruidosas dentro do edifício, a responsible party deve afixar um notice em local acessível aos moradores com a duração dos trabalhos. Se as obras forem realizadas pelo seu landlord dentro da habitação arrendada, aplicam-se regras próprias do contrato de arrendamento e do Código Civil».',
          'Zonas comuns: tem direito a utilizá-las em igualdade com os proprietários (jardim, piscina, etc.)',
          'Substituir por: «O arrendatário normalmente não vota nem tem direito automático de participação na assembleia; pode pedir ao landlord que apresente o assunto, emita uma procuração ou acorde a sua presença com o administrador/assembleia».',
          'Substituir por: «EV charging: o regime está definido pelo Decreto-Lei 39/2010 na redação em vigor. A instalação em parking space exige notificação prévia por escrito à administração do condomínio e cumprimento dos requisitos técnicos/de segurança; opposition só é possível por fundamentos legais. Para o arrendatário, são adicionalmente importantes os direitos previstos no contrato de arrendamento e o consentimento/participação do proprietário, se o lugar não estiver na sua disponibilidade».'
        ]}
      ]
    },
    {
      id: 'special-issues',
      title: '🆘 Situações especiais',
      content: [
        { kind: 'checklist', items: [
          'O cão do vizinho ladra todo o dia → Câmara Municipal + veterinário municipal (eventual remoção por condições de bem-estar)',
          'Vizinhos fumam na varanda, fumo entra no seu apartamento → não é uma infração direta (fumar numa varanda privada é permitido); mas se o condomínio proibiu — coima',
          'Obras por baixo de si duram há mais de 3 meses → verificação de licenças no município, frequentemente ilegal',
          'Hostel vizinho / arrendamento de curta duração — ruído constante → AL (Alojamento Local) tem regras próprias; queixa na Câmara + ASAE; em algumas zonas (Bairro Alto, Baixa Lisbon) o AL é limitado',
          'Infiltração vinda do teto: notificação escrita ao vizinho, depois condomínio, depois seguradora',
          'Substituir por: «Vizinho agressor: perante ameaça imediata — 112/PSP/GNR; apresente queixa-crime na PSP/GNR/Ministério Público. Para conflitos repetidos não criminais — Julgados de Paz ou mediação, se disponíveis».'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Contribuição típica de condomínio', amountEURMin: 15, amountEURMax: 80, note: '€/mês por 70-100 m²' },
    { label: 'Fundo Comum de Reserva', amountEUR: 0, note: '10% da contribuição mensal' },
    { label: 'Coima por ruído (pessoa singular)', amountEURMin: 200, amountEURMax: 2500 },
    { label: 'Advogado para tribunal civil', amountEURMin: 500, amountEURMax: 2000 }
  ],
  sources: [
    { title: 'DL 9/2007 — Regulamento Geral do Ruído', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2007-34467475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 8/2022 — propriedade horizontal (condomínio)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/8-2022-180824432', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 6/2006 — NRAU (arrendamento urbano)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34454575', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
