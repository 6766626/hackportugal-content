export default {
  editorialVoice: 'hackportugal',
  id: 'portability-mnp',
  categoryId: 'telecom',
  title: 'Portabilidade de número (MNP) entre operadores',
  tldr: 'A portabilidade de número entre operadores portugueses (Lei das Comunicações Eletrónicas n.º 16/2022 + Regulamento da Portabilidade n.º 38/2025) é GRATUITA, demora no máximo 1 dia útil e é feita através de pedido junto do novo operador (é ele que comunica com o antigo)\.\n\nPara portar o número precisa do Código de Validação da Portabilidade (CVP) — um código de 12 dígitos. Nos números móveis pode obtê-lo por SMS com o texto «CVP» para o número curto do seu próprio operador (varia consoante o operador: MEO 16200, Vodafone 12815, NOS 1242); nos tarifários pós-pagos vem impresso na fatura\.\n\nA portabilidade NÃO anula a fidelização no operador antigo — se houver penalização, terá de ser paga.',
  tags: ['portabilidade de número', 'mnp', 'mudança de operador', 'código de portabilidade'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'how-it-works',
      title: '🔄 Como funciona a MNP',
      content: [
        { kind: 'paragraph', text: 'O direito de portar o número (MNP, Mobile Number Portability) ao mudar de operador é garantido por lei — a Lei das Comunicações Eletrónicas (Lei n.º 16/2022); o procedimento é detalhado no Regulamento da Portabilidade n.º 38/2025 (em vigor desde 10 de novembro de 2025). O serviço é gratuito. NÃO é necessário ir a uma loja do operador antigo.' },
        { kind: 'checklist', items: [
          '📅 Prazo da portabilidade: 1 dia útil (por lei — no máximo 1 dia útil após o consentimento)',
          '💰 Custo: 0 €',
          '⏰ Interrupção: até 3 horas no dia da portabilidade (normalmente 30–60 minutos)',
          '📲 O número mantém-se igual, o SIM é substituído por um novo (do novo operador)',
          '⚠️ IMPORTANTE: o serviço no operador antigo pode manter uma fidelização ativa — penalização, se existir'
        ]}
      ]
    },
    {
      id: 'step-by-step',
      title: '📋 Passo a passo',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Obter o código de portabilidade (CVP) junto do operador antigo', content: [
            { kind: 'checklist', items: [
              '📲 Nos móveis: SMS com o texto «CVP» a partir do SIM antigo para o número curto do SEU operador — não há um número único, varia consoante o operador: MEO — 16200, Vodafone — 12815, NOS — 1242 (NOWO — 928190785)',
              '🧾 Nos tarifários pós-pagos o CVP vem impresso na fatura mensal; nos pré-pagos o operador envia-o por SMS no prazo de 24 horas após a ativação',
              '🔢 O CVP é um código de 12 dígitos; tem de o indicar ao novo operador ao pedir a portabilidade',
              '💡 Alternativa: solicitar o CVP na área de cliente, pela linha de apoio ou numa loja do operador'
            ]}
          ]},
          { id: 'p2', title: '2. Apresentar o pedido junto do novo operador', content: [
            { kind: 'checklist', items: [
              '📍 Ir a uma loja do novo operador com Cartão de Cidadão ou passaporte + código de portabilidade',
              'Assinar o novo contrato (tarifário)',
              'Receber o novo SIM (ou eSIM)',
              'Não ativar o novo SIM antes de receber a confirmação da portabilidade!'
            ]}
          ]},
          { id: 'p3', title: '3. Dia da portabilidade', content: [
            { kind: 'checklist', items: [
              '⏰ A portabilidade ocorre normalmente durante a noite (00:00–03:00) ou de manhã',
              '📵 SIM antigo: «sem rede» — mudar para o novo',
              '📲 Inserir o novo SIM e reiniciar o telefone',
              '✅ O número é o mesmo, o operador é novo',
              '🔁 Se a portabilidade não ocorrer em 24 horas — ligue para o novo operador para escalamento'
            ]}
          ]},
          { id: 'p4', title: '4. Encerrar a conta antiga', content: [
            { kind: 'checklist', items: [
              '📝 O operador antigo encerra automaticamente a conta após a portabilidade',
              '💸 A fatura final chega pelos dias até à portabilidade (proporcionalmente)',
              '⚠️ Se havia fidelização no contrato antigo — a penalização virá na fatura final',
              '🧾 Guarde o último recibo para arquivo'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'pitfalls',
      title: '⚠️ Armadilhas',
      content: [
        { kind: 'checklist', items: [
          '🛑 A fidelização no operador antigo NÃO é anulada — se faltarem 6 meses × 20 € até ao fim do contrato — penalização de cerca de 60 € (50%)',
          '🛑 Se no operador antigo existia um pacote (fibra ótica + televisão + SIM) — é necessário um pedido separado para cada serviço',
          '🛑 A portabilidade ocorre no prazo de 1 dia útil — mas o operador pode «arrastar» o processo por 2–3 dias. Por lei, pode reclamar à ANACOM',
          '🛑 Se tinha pós-pago no operador antigo — a última fatura pelos dias «não encerrados» chega 2–3 semanas depois',
          '🛑 Por vezes, o novo operador pede para «pagar mais pelo SIM» (≈ 10 €) — formalmente isto é ilegal para clientes MNP',
          '✅ Guarde o SMS com o código de portabilidade (CVP) como prova para a ANACOM'
        ]}
      ]
    },
    {
      id: 'reverse',
      title: '↩️ Se algo correr mal',
      content: [
        { kind: 'paragraph', text: 'Tem 14 dias para desistir de um novo contrato celebrado à distância, ao abrigo do DL 24/2014. Voltar ao operador antigo é um procedimento de portabilidade separado (1 dia).' },
        { kind: 'checklist', items: [
          '📞 O número antigo não funciona há mais de 24 horas — ligar para o novo operador e para a ANACOM',
          '🛡️ ANACOM: anacom.pt → Reclamação online → escolher o operador → descrever o problema',
          '📑 Livro de Reclamações na loja do novo operador — canal obrigatório',
          '⏰ Tempo médio de resolução através da ANACOM: 2–3 semanas, eficaz'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Portabilidade de número (MNP)', amountEUR: 0 },
    { label: 'Obtenção do código de portabilidade', amountEUR: 0 },
    { label: 'Penalização por fidelização (se o contrato estiver ativo)', amountEURMin: 0, amountEURMax: 300, note: 'depende do prazo restante' }
  ],
  sources: [
    { title: 'ANACOM — Regulamento da Portabilidade n.º 38/2025 (em vigor desde 10.11.2025)', url: 'https://www.anacom.pt/render.jsp?contentId=1801193', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'ANACOM — Como saber o meu Código de Validação da Portabilidade (CVP)', url: 'https://www.anacom.pt/render.jsp?contentId=1471912', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'ANACOM — Portabilidade de números', url: 'https://www.anacom.pt/render.jsp?categoryId=324335', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
