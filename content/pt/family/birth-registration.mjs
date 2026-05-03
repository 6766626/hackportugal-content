export default {
  editorialVoice: 'hackportugal',
  id: 'birth-registration',
  categoryId: 'nationality',
  title: 'Registo do nascimento de uma criança em Portugal',
  tldr: 'Criança nascida em Portugal: o nascimento deve ser registado no Registo Civil **no prazo de 20 dias** (Código do Registo Civil art. 96). Nos termos da Lei 37/81 art. 1 n.º 1 al. f), a criança adquire a nacionalidade portuguesa por nascimento se pelo menos um dos progenitores residir legalmente em Portugal (qualquer título) OU residir em Portugal há pelo menos 1 ano, independentemente do título — e não estiver ao serviço de Estado estrangeiro. Registo: gratuito via ePortugal ou na maternidade («Nascer Cidadão»). À criança são emitidos Cartão de Cidadão, NIF, NISS, utente SNS — tudo de imediato.',
  tags: ['nascimento', 'criança', 'registo', 'nacionalidade', 'direito de solo', 'nascer cidadão'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'jus-soli',
      title: '🇵🇹 Nacionalidade da criança por nascimento',
      content: [
        { kind: 'paragraph', text: 'Ao abrigo da Lei 37/81 art. 1 n.º 1 al. f), uma criança nascida em Portugal torna-se cidadã portuguesa por nascimento se pelo menos UM dos progenitores cumprir uma das condições e não estiver ao serviço de Estado estrangeiro:' },
        { kind: 'checklist', items: [
          '✅ É cidadão português (nesse caso, automaticamente)',
          '✅ **Reside legalmente em Portugal** no momento do nascimento (com autorização de residência ou outro título — a duração não é relevante)',
          '✅ **Reside em Portugal há ≥ 1 ano, independentemente de título** (presença de facto)',
          '✅ Cidadão da UE com registo CRUE válido no momento do nascimento — normalmente é considerado como residir legalmente',
          '⚠️ Apenas uma visita turística curta sem presença prolongada — em regra, não; mas se houver 1+ ano de residência de facto — há fundamento',
          '🌐 Portugal permite plurinacionalidade — a criança pode obter também a outra nacionalidade pelos pais',
          '⚖️ Nova lei AR 17/XVII (aprovada pelo parlamento em 01.04.2026) alterará o prazo para 5 anos — em 03.05.2026 ainda NÃO promulgada, mantêm-se as regras antigas'
        ]}
      ]
    },
    {
      id: 'nascer-cidadao',
      title: '🏥 «Nascer Cidadão» — registo na maternidade',
      content: [
        { kind: 'paragraph', text: 'Todas as maternidades públicas e muitas privadas oferecem o serviço «Nascer Cidadão» — o registo do nascimento faz-se DIRETAMENTE na maternidade, no dia do parto ou logo depois.' },
        { kind: 'substeps', items: [
          { id: 'n1', title: 'O que está incluído', content: [
            { kind: 'checklist', items: [
              '📜 Certidão de nascimento (assento de nascimento)',
              '🪪 Pedido de Cartão de Cidadão',
              '🔢 NIF (número fiscal)',
              '🛡️ NISS (número de Segurança Social)',
              '🩺 Pedido de utente SNS (médico de família)',
              '👶 Abono de Família — subsídio para a criança (pedido)',
              '✅ Tudo numa só visita, gratuito'
            ]}
          ]},
          { id: 'n2', title: 'O que é necessário dos pais', content: [
            { kind: 'checklist', items: [
              '🆔 Cartão de Cidadão de ambos os pais (ou autorização de residência + passaporte)',
              '💍 Certidão de casamento (se forem casados)',
              '👫 Se não forem casados, o pai deve estar presente para assinar o «reconhecimento de paternidade»',
              '📛 Decisão sobre os nomes da criança — acertar previamente com a maternidade (existe lista de nomes permitidos)',
              '💸 Morada/contacto dos pais para faturação posterior do SNS',
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
        { kind: 'paragraph', text: 'Se o registo não for feito na maternidade (parto em casa, clínica privada sem o serviço), deve declarar o nascimento na Conservatória do Registo Civil **no prazo de 20 dias** (art. 96 do Código do Registo Civil). Ultrapassado esse prazo, o registo continua possível, mas com procedimento adicional e eventual coima.' },
        { kind: 'checklist', items: [
          '🏛️ Qualquer Conservatória — escolha pela morada ou conveniência',
          '🌐 Alternativa: ePortugal online com Chave Móvel Digital, carregando os documentos',
          '📅 Gratuito se dentro do prazo de 20 dias; após — pode haver coima e procedimento adicional',
          '⏱️ O registo leva 30–60 min',
          '📄 É emitida de imediato a «Cédula» — comprovativo temporário',
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
          '🚫 Pelo art. 103 do Código do Registo Civil, o nome é em regra limitado a no máximo 2 nomes próprios e 4 apelidos',
          '🇷🇺 **Estrangeiros (incluindo russos)**: para uma criança com dupla nacionalidade, o IRN costuma aceitar um nome permitido no país da outra nacionalidade, em transliteração latina',
          '⚠️ Se o nome não constar na base do IRN — os pais apresentam um «pedido de admissibilidade» (1–2 semanas, gratuito)',
          '👨‍👩‍👧 **Apelidos**: a criança pode receber os apelidos de qualquer dos pais e antepassados; a ordem é flexível, não tem de ser «mãe+pai»',
          '🌍 Para crianças estrangeiras com outra nacionalidade, o IRN pode admitir uma ordem de nomes diferente, conforme a norma estrangeira'
        ]}
      ]
    },
    {
      id: 'documents-after',
      title: '📋 Após o registo — o que obter',
      content: [
        { kind: 'checklist', items: [
          '🪪 **Cartão de Cidadão** da criança — chega em 2–4 semanas',
          '🛡️ **NISS** — para prestações e seguro de saúde',
          '🔢 **NIF** — necessário se abrir uma poupança em nome da criança ou arrendar habitação para a família com criança',
          '🌍 **Passaporte português** (se houver nacionalidade): IRN, normal — cerca de 65 € em Portugal, urgente/expresso — mais caro; o prazo depende do tipo de serviço',
          '🩺 **Médico de família** — inscrever junto do pediatra',
          '💉 **Plano de vacinação (PNV)**: primeira vacina aos 2 meses, consulta de vigilância — aos 7 dias',
          '👶 **Abono de Família**: calculado por escalão (rendimento do agregado / número de crianças com direito + 1) e pela idade da criança. Calcule o valor na Segurança Social Direta ou através do ISS; tabelas em seg-social.pt',
          '🌐 **Registo na embaixada do país dos pais**: para dupla nacionalidade — pedido via consulado'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Dicas',
      content: [
        { kind: 'checklist', items: [
          '📅 Apresentar o pedido de Abono de Família no prazo de 6 meses após o nascimento — para receber retroativos dos meses em falta',
          '🛏️ Na maternidade, peça um «quarto particular» — o seguro privado por vezes cobre',
          '🇷🇺/🇧🇾/🇺🇦 Logo após o registo em Portugal — tradução da certidão de nascimento e registo na embaixada do seu país (para dupla nacionalidade). Sem isso, a criança terá apenas a nacionalidade portuguesa',
          '⚖️ Se os pais não forem casados: o pai reconhece pessoalmente a paternidade no registo na Conservatória, apresentando o documento. O teste de ADN NÃO é exigido por defeito, apenas em caso de impugnação (via tribunal)',
          '👶 As vacinas do PNV são gratuitas no SNS',
          '🩺 Seguro da criança — alguns empregadores incluem plano familiar (Generali, Médis)',
          '🎓 Inscrição em Creche/Jardim de Infância: submeter candidatura logo após o nascimento (lista de espera de 6–12 meses)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Registo do nascimento no prazo de 20 dias', amountEUR: 0 },
    { label: 'Atraso do registo >20 dias', amountEURMin: 50, amountEURMax: 200, note: 'coima possível + procedimento adicional' },
    { label: 'Cartão de Cidadão da criança', amountEUR: 18, note: 'o primeiro é gratuito no Nascer Cidadão' },
    { label: 'Passaporte português (normal, em Portugal)', amountEUR: 65, note: 'urgente/expresso — mais caro' },
    { label: 'Tradução da certidão de nascimento', amountEURMin: 30, amountEURMax: 80 }
  ],
  sources: [
    { title: 'IRN — Registo de nascimento', url: 'https://justica.gov.pt/Servicos/Registos-de-nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Civil — art. 96 (prazo) e art. 103 (nomes)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34488075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Nascer Cidadão', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/nascer-cidadao-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 37/81 — Lei da Nacionalidade (art. 1 n.º 1 al. f)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34448275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
