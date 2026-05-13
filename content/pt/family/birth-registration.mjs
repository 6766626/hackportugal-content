export default {
  editorialVoice: 'hackportugal',
  id: 'birth-registration',
  categoryId: 'nationality',
  title: 'Registo do nascimento de uma criança em Portugal',
  tldr: 'Criança nascida em Portugal: o nascimento deve ser registado no Registo Civil **no prazo de 20 dias** (Código do Registo Civil art. 96). Ao abrigo da Lei 37/81 art. 1 n.º 1 al. f), a criança adquire a nacionalidade portuguesa por nascimento se pelo menos um dos progenitores residir legalmente em Portugal (qualquer título) OU residir em Portugal há pelo menos 1 ano, independentemente do título — e não estiver ao serviço de um Estado estrangeiro. Registo: gratuito via ePortugal ou na maternidade («Nascer Cidadão»). A criança obtém Cartão de Cidadão, NIF, NISS, utente SNS — tudo de imediato.',
  tags: ['nascimento', 'criança', 'registo', 'nacionalidade', 'direito do solo', 'nascer cidadão'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'jus-soli',
      title: '🇵🇹 Nacionalidade da criança por nascimento',
      content: [
        { kind: 'paragraph', text: 'Nos termos da Lei 37/81 art. 1 n.º 1 al. f), uma criança nascida em Portugal torna‑se cidadã portuguesa por nascimento se pelo menos UM dos progenitores cumprir uma das condições e não estiver ao serviço de um Estado estrangeiro:' },
        { kind: 'checklist', items: [
          '✅ É cidadão português (nesse caso, automaticamente)',
          '✅ **Reside legalmente em Portugal** no momento do nascimento (com autorização de residência ou outro título — a duração não é relevante)',
          '✅ **Reside em Portugal há ≥ 1 ano, independentemente da existência de título** (presença de facto)',
          '✅ Cidadão da UE com registo CRUE válido no momento do nascimento — em regra é considerado residente legal',
          '⚠️ Uma visita turística curta sem presença prolongada — normalmente não; mas se houver 1+ ano de residência de facto — há fundamento',
          '🌐 Portugal permite múltiplas nacionalidades — a criança pode obter também a dos progenitores',
          '⚖️ **03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII** (após passagem pelo TC, renumerado de 17/XVII). Em 13.05.2026 a lei AINDA NÃO foi publicada no DRE (10 dias). Após publicação no Diário da República, para requerer a nacionalidade da criança por jus soli, os pais terão de ter ≥5 anos de autorização de residência válida. O texto da lei contém disposição transitória: aos processos pendentes aplica-se a redação anterior da Lei 37/81 (1 ano). Até à publicação no DRE aplicam-se as regras antigas para todos'
        ]}
      ]
    },
    {
      id: 'nascer-cidadao',
      title: '🏥 «Nascer Cidadão» — registo na maternidade',
      content: [
        { kind: 'paragraph', text: 'Todas as maternidades públicas e muitas privadas oferecem o serviço «Nascer Cidadão» — o registo do nascimento é feito DIRETAMENTE na maternidade, no próprio dia ou imediatamente após.' },
        { kind: 'substeps', items: [
          { id: 'n1', title: 'O que está incluído', content: [
            { kind: 'checklist', items: [
              '📜 Certidão de nascimento (assento de nascimento)',
              '🪪 Pedido do Cartão de Cidadão',
              '🔢 NIF (número fiscal)',
              '🛡️ NISS (número de segurança social)',
              '🩺 Pedido de utente SNS (médico de família)',
              '👶 Abono de família — subsídio para a criança (pedido)',
              '✅ Tudo numa única deslocação, gratuito'
            ]}
          ]},
          { id: 'n2', title: 'O que é necessário dos progenitores', content: [
            { kind: 'checklist', items: [
              '🆔 Cartão de Cidadão de ambos os progenitores (ou autorização de residência + passaporte)',
              '💍 Certidão de casamento (se forem casados)',
              '👫 Se não forem casados, o pai deve estar presente para assinar o «reconhecimento de paternidade» (reconhecimento da paternidade)',
              '📛 Decisão sobre os nomes da criança — combinar previamente com a maternidade (há uma lista de nomes permitidos)',
              '💸 Morada/contacto dos progenitores para posterior faturação do SNS',
              '🏦 IBAN para pagamento do Abono de Família'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'alternative',
      title: '📍 Alternativa — Conservatória / online',
      content: [
        { kind: 'paragraph', text: 'Se o registo não tiver sido feito na maternidade (parto em casa, clínica privada sem o serviço), deve declarar o nascimento na Conservatória do Registo Civil **no prazo de 20 dias** (art. 96 do Código do Registo Civil). Após esse prazo, o registo continua a ser possível, mas com procedimento adicional e eventual coima.' },
        { kind: 'checklist', items: [
          '🏛️ Qualquer Conservatória — escolha pela morada ou conveniência',
          '🌐 Alternativa: ePortugal online através da Chave Móvel Digital, com carregamento de documentos',
          '📅 Gratuito, se dentro do prazo de 20 dias; depois — pode haver coima e procedimento adicional',
          '⏱️ O registo demora 30–60 min',
          '📄 É emitida de imediato a «Cédula» — certidão provisória',
          '📩 O Cartão de Cidadão completo da criança chega pelo correio em 2–4 semanas'
        ]}
      ]
    },
    {
      id: 'naming',
      title: '📛 Regras dos nomes',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existe uma lista oficial de nomes aprovados. Nem todos os nomes são admitidos.' },
        { kind: 'checklist', items: [
          '✅ **Base de nomes aprovados do IRN**: irn.justica.gov.pt → «Vocábulos admitidos como nomes próprios»',
          '🚫 Proibidos: nomes fictícios/pejorativos/geográficos (por exemplo, «Lisboa», «Brasil»)',
          '🚫 Pelo art. 103 do Código do Registo Civil, o nome está normalmente limitado a no máximo 2 nomes próprios e 4 apelidos',
          '🇷🇺 **Estrangeiros (incluindo russos)**: para uma criança com dupla nacionalidade, o IRN costuma aceitar o nome permitido no país da outra nacionalidade, em transliteração latina',
          '⚠️ Se o nome não constar na base do IRN — os progenitores apresentam um «pedido de admissibilidade» (1–2 semanas, gratuito)',
          '👨‍👩‍👧 **Apelidos**: a criança pode receber apelidos de qualquer dos progenitores e antepassados; a ordem é flexível, não tem de ser «mãe+pai»',
          '🌍 Para crianças estrangeiras com nacionalidade de outro país, o IRN pode admitir uma ordem de nomes diferente, conforme a norma estrangeira'
        ]}
      ]
    },
    {
      id: 'documents-after',
      title: '📋 Após o registo — o que obter',
      content: [
        { kind: 'checklist', items: [
          '🪪 **Cartão de Cidadão** da criança — chega em 2–4 semanas',
          '🛡️ **NISS** — para prestações e seguros de saúde',
          '🔢 **NIF** — necessário se abrir uma conta a prazo para a criança ou arrendar casa para a família com criança',
          '🌍 **Passaporte português** (se houver nacionalidade): no IRN, normal — cerca de 65 € em Portugal; urgente/expresso — mais caro; o prazo depende do tipo de serviço',
          '🩺 **Médico de família** — atribuir a um pediatra',
          '💉 **Plano de vacinação (PNV)**: a primeira vacina é aos 2 meses; consulta de vigilância — aos 7 dias',
          '👶 **Abono de família**: calculado por escalão (rendimento do agregado / número de crianças com direito + 1) e pela idade da criança. Calcule o valor na Segurança Social Direta ou através do ISS; tabelas em seg-social.pt',
          '🌐 **Registo na embaixada do país dos progenitores**: para dupla nacionalidade — pedido através do consulado'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Dicas',
      content: [
        { kind: 'checklist', items: [
          '📅 Apresente o pedido de Abono de Família até 6 meses após o nascimento — para receber os pagamentos em atraso retroativamente',
          '🛏️ Na maternidade, peça um «quarto particular» — o seguro privado por vezes cobre',
          '🇷🇺/🇧🇾/🇺🇦 Logo após o registo em Portugal — traduza a certidão de nascimento e faça o registo na embaixada do seu país (para dupla nacionalidade). Sem isto, a criança terá apenas a nacionalidade portuguesa',
          '⚖️ Se os progenitores não forem casados: o pai reconhece pessoalmente a paternidade no ato de registo na Conservatória, apresentando documento. O teste de ADN NÃO é exigido por defeito, apenas em caso de impugnação (via tribunal)',
          '👶 As vacinas do PNV são gratuitas no SNS',
          '🩺 Seguro da criança — alguns empregadores incluem plano familiar (Generali, Médis)',
          '🎓 Inscrição em Creche/Jardim de Infância: faça o pedido logo após o nascimento (lista de espera 6–12 meses)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Registo de nascimento no prazo de 20 dias', amountEUR: 0 },
    { label: 'Registo fora de prazo >20 dias', amountEURMin: 50, amountEURMax: 200, note: 'eventual coima + procedimento adicional' },
    { label: 'Cartão de Cidadão da criança', amountEUR: 18, note: 'o primeiro é gratuito no Nascer Cidadão' },
    { label: 'Passaporte português (normal, em Portugal)', amountEUR: 65, note: 'urgente/expresso — mais caro' },
    { label: 'Tradução da certidão de nascimento', amountEURMin: 30, amountEURMax: 80 }
  ],
  sources: [
    { title: 'IRN — Registo de nascimento', url: 'https://justica.gov.pt/Servicos/Registos-de-nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Civil — art. 96 (prazo) e art. 103 (nomes)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34488075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Nascer Cidadão', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/nascer-cidadao-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 37/81 — Lei da Nacionalidade (art. 1 n.º 1 al. f))', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34448275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-13',
  verifyIntervalDays: 180
}
