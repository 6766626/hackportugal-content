export default {
  editorialVoice: 'hackportugal',
  id: 'birth-registration',
  categoryId: 'nationality',
  title: 'Registo de nascimento de uma criança em Portugal',
  tldr: 'Criança nascida em Portugal: o nascimento deve ser registado no Registo Civil no prazo de 20 dias (Código do Registo Civil art. 96). Nos termos da Lei 37/81 art. 1 n.1 al. f), a criança adquire nacionalidade portuguesa por nascimento se pelo menos um dos progenitores residir legalmente em Portugal (qualquer título) OU residir em Portugal há pelo menos 1 ano independentemente do título — e não estiver ao serviço de um Estado estrangeiro. Registo: gratuito através do ePortugal ou na maternidade («Nascer Cidadão»). À criança são atribuídos Cartão de Cidadão, NIF, NISS, utente SNS — tudo de uma só vez.',
  tags: ['nascimento', 'criança', 'registo', 'nacionalidade', 'jus soli', 'nascer cidadão'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'jus-soli',
      title: '🇵🇹 Nacionalidade da criança por nascimento',
      content: [
        { kind: 'paragraph', text: 'Nos termos da Lei 37/81 art. 1 n.1 al. f), uma criança nascida em Portugal torna-se cidadã portuguesa por nascimento se pelo menos UM dos progenitores cumprir uma das condições e não estiver ao serviço de um Estado estrangeiro:' },
        { kind: 'checklist', items: [
          '✅ É cidadão português (nesse caso, automaticamente)',
          '✅ Reside legalmente em Portugal no momento do nascimento (com autorização de residência ou outro título — a duração não é relevante)',
          '✅ Reside em Portugal há ≥ 1 ano independentemente da existência de título (presença efetiva)',
          '✅ Cidadão da UE com registo CRUE válido no momento do nascimento — normalmente é considerado residente legal',
          '⚠️ Apenas uma curta visita turística sem presença prolongada — normalmente não; mas se houver 1+ ano de residência efetiva — existe fundamento',
          '🌐 Portugal admite múltipla nacionalidade — a criança também pode obter uma segunda nacionalidade através dos progenitores',
          '⚖️ 03.05.2026 o Presidente Seguro promulgou o Decreto AR 48/XVII (após passagem pelo TC, renumerado a partir de 17/XVII). Em 13.05.2026 a lei foi publicada em 18.05.2026 como Lei Orgânica n.º 1/2026 (10 dias). Após publicação no Diário da República, para pedir a nacionalidade da criança por jus soli, os progenitores devem ter ≥5 anos de autorização de residência válida. O texto da lei contém uma disposição transitória: aos processos em tramitação aplica-se a redação anterior da Lei 37/81 (1 ano). Até 19.05.2026 aplicam-se as regras antigas a todos'
        ]}
      ]
    },
    {
      id: 'nascer-cidadao',
      title: '🏥 «Nascer Cidadão» — registo na maternidade',
      content: [
        { kind: 'paragraph', text: 'Todas as maternidades públicas e muitas privadas disponibilizam o serviço «Nascer Cidadão» — o registo do nascimento é feito DIRETAMENTE na maternidade, no dia do nascimento ou logo a seguir.' },
        { kind: 'substeps', items: [
          { id: 'n1', title: 'O que está incluído', content: [
            { kind: 'checklist', items: [
              '📜 Certidão de nascimento (assento de nascimento)',
              '🪪 Pedido de Cartão de Cidadão',
              '🔢 NIF (número fiscal)',
              '🛡️ NISS (número da Segurança Social)',
              '🩺 Pedido de utente SNS (médico de família)',
              '👶 Abono de família — prestação para a criança (pedido)',
              '✅ Tudo numa única visita, gratuitamente'
            ]}
          ]},
          { id: 'n2', title: 'O que é necessário dos progenitores', content: [
            { kind: 'checklist', items: [
              '🆔 Cartão de Cidadão de ambos os progenitores (ou autorização de residência + passaporte)',
              '💍 Certidão de casamento (se forem casados)',
              '👫 Se não forem casados, o pai deve estar presente para assinar o «reconhecimento de paternidade»',
              '📛 Decisão sobre os nomes da criança — discutir previamente com a maternidade (existe uma lista de nomes permitidos)',
              '💸 Morada/contacto dos progenitores para pagamento posterior do SNS',
              '🏦 IBAN para crédito do Abono de Família'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'alternative',
      title: '📍 Alternativa — Conservatória / online',
      content: [
        { kind: 'paragraph', text: 'Se o registo não tiver sido feito na maternidade (parto em casa, clínica privada sem o serviço), é necessário declarar o nascimento numa Conservatória do Registo Civil no prazo de 20 dias (art. 96 Código do Registo Civil).\n\nDepois desse prazo, o registo continua a ser possível, mas com procedimento adicional e eventual coima.' },
        { kind: 'checklist', items: [
          '🏛️ Qualquer Conservatória — escolha por morada ou conveniência',
          '🌐 Alternativa: ePortugal online através da Chave Móvel Digital, carregando os documentos',
          '📅 Gratuito, se cumprir o prazo de 20 dias; depois — pode haver coima e procedimento adicional',
          '⏱️ O registo demora 30–60 min',
          '📄 É emitida de imediato a «Cédula» — certidão provisória',
          '📩 O Cartão de Cidadão completo da criança chega por correio em 2–4 semanas'
        ]}
      ]
    },
    {
      id: 'naming',
      title: '📛 Regras dos nomes',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existe uma lista oficial de nomes aprovados. Nem todos os nomes são admitidos.' },
        { kind: 'checklist', items: [
          '✅ Base de nomes aprovados do IRN: irn.justica.gov.pt → «Vocábulos admitidos como nomes próprios»',
          '🚫 São proibidos: nomes fictícios/depreciativos/geográficos (por exemplo, «Lisboa», «Brasil»)',
          '🚫 Nos termos do art. 103 Código do Registo Civil, o nome é normalmente limitado a um máximo de 2 nomes próprios e 4 apelidos',
          '🇷🇺 Estrangeiros (incluindo cidadãos da Federação Russa): para uma criança com dupla nacionalidade, o IRN normalmente aceita um nome permitido no país da segunda nacionalidade, em transliteração latina',
          '⚠️ Se o nome não estiver na base do IRN — os progenitores apresentam um «pedido de admissibilidade» (1–2 semanas, gratuito)',
          '👨‍👩‍👧 Apelidos: a criança pode receber apelidos de qualquer dos progenitores e ascendentes; a ordem é flexível, não tem de ser necessariamente «mãe+pai»',
          '🌍 Para crianças estrangeiras com nacionalidade de outro país, o IRN pode admitir outra ordem de nomes, conforme a norma estrangeira'
        ]}
      ]
    },
    {
      id: 'documents-after',
      title: '📋 Depois do registo — o que obter',
      content: [
        { kind: 'checklist', items: [
          '🪪 Cartão de Cidadão da criança — chega em 2–4 semanas',
          '🛡️ NISS — para prestações e seguro de saúde',
          '🔢 NIF — necessário se abrir um depósito para a criança ou arrendar uma habitação para a família com a criança',
          '🌍 Passaporte português (se houver nacionalidade): IRN, normal — cerca de 65 € em Portugal, urgente/expresso — mais caro; o prazo depende do tipo de serviço',
          '🩺 Médico de família — marcar consulta com pediatra',
          '💉 Plano Nacional de Vacinação (PNV): primeira vacina aos 2 meses, consulta de controlo — 7 dias',
          '👶 Abono de família: calculado por escalão (rendimento do agregado / número de crianças com direito + 1) e idade da criança. Calcule o valor exato na Segurança Social Direta ou através do ISS; tabelas exatas — em seg-social.pt',
          '🌐 Registo na embaixada do país dos progenitores: para dupla nacionalidade — pedido através do consulado'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '📅 Apresentar o pedido de Abono de Família no prazo de 6 meses após o nascimento — para receber retroativamente os pagamentos em falta',
          '🛏️ Na maternidade, peça um quarto separado «quarto particular» — o seguro privado por vezes cobre',
          '🇷🇺/🇧🇾/🇺🇦 Logo após o registo em Portugal — tradução da certidão de nascimento e registo na embaixada do seu país (para dupla nacionalidade). Sem isso, a criança tem apenas nacionalidade portuguesa',
          '⚖️ Se os progenitores não forem casados: o pai reconhece presencialmente a paternidade no registo na Conservatória, apresentando documento. O teste de ADN NÃO é exigido por defeito, mas apenas em caso de contestação (através do tribunal)',
          '👶 As vacinas do PNV são gratuitas no SNS',
          '🩺 Seguro da criança — alguns empregadores incluem plano familiar (Generali, Médis)',
          '🎓 Inscrição em Creche/Jardim de Infância: apresentar pedido logo após o nascimento (lista de espera de 6–12 meses)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Registo de nascimento no prazo de 20 dias', amountEUR: 0 },
    { label: 'Registo fora do prazo >20 dias', amountEURMin: 50, amountEURMax: 200, note: 'eventual coima + procedimento adicional' },
    { label: 'Cartão de Cidadão da criança', amountEUR: 18, note: 'primeiro gratuito com Nascer Cidadão' },
    { label: 'Passaporte português (normal, em Portugal)', amountEUR: 65, note: 'urgente/expresso — mais caro' },
    { label: 'Tradução da certidão de nascimento', amountEURMin: 30, amountEURMax: 80 }
  ],
  sources: [
    { title: 'IRN — Registo de nascimento', url: 'https://justica.gov.pt/Servicos/Registos-de-nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Civil — art. 96 (prazo) e art. 103 (nomes)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34488075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Nascer Cidadão', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/nascer-cidadao-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 37/81 — Lei da Nacionalidade (art. 1 n.1 al. f)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34448275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-13',
  verifyIntervalDays: 180
}
