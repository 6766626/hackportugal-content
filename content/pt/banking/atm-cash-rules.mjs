export default {
  editorialVoice: 'hackportugal',
  id: 'atm-cash-rules',
  categoryId: 'banking',
  title: 'Caixas Multibanco, numerário e limites em Portugal',
  tldr: 'A principal rede de caixas automáticas é o Multibanco (MB), com cerca de 12 000 equipamentos. Aceitam a maioria dos cartões internacionais, mas a decisão de aceitar um cartão concreto depende do banco emissor. O Multibanco normalmente não cobra uma comissão adicional, mas o banco emissor estrangeiro pode cobrar a sua própria comissão. O limite de levantamento é de 200–400 €/dia. O pagamento em numerário entre particulares é proibido para montantes **≥ 3 000 €** (art. 63-E LGT); para IRC/IRS com contabilidade organizada — **≥ 1 000 €** por facturas. Depósitos em numerário acima de 10 000 € exigem justificação da origem dos fundos ao abrigo das regras AML — os bancos podem solicitar documentos mesmo para montantes inferiores, em função da análise por nível de risco.',
  tags: ['atm', 'multibanco', 'numerário', 'limites', 'nota'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'multibanco',
      title: 'Multibanco — rede de caixas automáticas',
      content: [
        { kind: 'paragraph', text: 'O operador é a SIBS. As caixas automáticas encontram-se junto de todos os bancos, em postos de abastecimento, centros comerciais e aeroportos. Normalmente aceitam a maioria dos cartões Visa/Mastercard/Maestro e cartões portugueses, mas a aceitação de um cartão estrangeiro concreto depende do emissor, da rede, de restrições sancionatórias e das configurações da caixa automática.' },
        { kind: 'checklist', items: [
          '💰 Levantamento de numerário — 0 € para cartões do próprio banco',
          '💳 Para cartões de outros bancos em Portugal — 0 € (levantamentos nacionais no Multibanco — Aviso Banco de Portugal 8/2009 / Lei 53/2020)',
          '🌍 No Multibanco normalmente não há surcharge por parte da caixa automática; a comissão e a taxa de câmbio são definidas pelo banco emissor do cartão. Evite DCC («charge in your home currency») e escolha o débito em EUR. Em ATM independentes, as comissões podem ser mais elevadas',
          '📅 Limite típico no Multibanco — até 400 €/dia, muitas vezes máximo de 200 € por operação; o banco emissor pode definir o seu próprio limite',
          '🔐 PIN + frequentemente SMS-OTP ao trocar de cartão'
        ]}
      ]
    },
    {
      id: 'mb-services',
      title: 'O que mais faz o Multibanco',
      content: [
        { kind: 'checklist', items: [
          '💸 Transferências por IBAN — os limites dependem do banco e das configurações do cartão/conta; o banco normalmente define um máximo diário',
          '📄 Pagamento de serviços (Finanças, Segurança Social, IMI, IRS, IUC) por entidade + referência',
          '📱 Carregamento de telemóvel',
          '🎟️ Compra de bilhetes de transporte / eventos culturais',
          '🅿️ Pagamento de estacionamento',
          '🔒 MB NET / cartões virtuais através de MB WAY ou do banco — cartões virtuais temporários/de utilização única para compras online',
          '💼 Consulta de saldo, movimentos e extractos',
          '🎲 Pagamento de jogos (Jackpot, Euromillions)'
        ]}
      ]
    },
    {
      id: 'cash-limits',
      title: 'Limites para pagamentos em numerário',
      content: [
        { kind: 'paragraph', text: 'art. 63-E LGT (Lei Geral Tributária) — restrições aos pagamentos em numerário. As proibições aplicam-se a operações iguais ou superiores ao limiar:' },
        { kind: 'checklist', items: [
          '🧑‍🤝‍🧑 Entre particulares comuns: proibição de pagamentos em numerário **≥ 3 000 €** por transacção',
          '🏢 Sujeitos passivos de IRC/IRS com contabilidade organizada: proibição de pagamentos em numerário de facturas/documentos **≥ 1 000 €**',
          '✈️ Turistas não residentes (pessoas singulares sem obrigação de contabilidade organizada em Portugal): o limiar é normalmente **≥ 10 000 €** para operações em numerário sem procedimentos AML especiais',
          '⚖️ As coimas ao abrigo do RGIT por infracção podem ser significativas; a fiscalização é feita pela AT',
          '📋 Operações a partir de 3 000 € (ou 1 000 € para empresas) — transferência bancária/cheque/pagamento electrónico',
          '🛒 IMPORTANTE: dividir uma única operação em vários pagamentos para contornar o limiar é uma infracção autónoma'
        ]}
      ]
    },
    {
      id: 'damaged',
      title: 'Nota rasgada ou danificada',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Parcialmente rasgada / suja', content: [
            { kind: 'paragraph', text: 'Uma nota de euro danificada pode ser apresentada num banco ou no Banco de Portugal. Normalmente há reembolso se se conservar mais de 50 % da nota, ou se for demonstrada a destruição da parte em falta. Em caso de suspeita de dano intencional/tinta antifurto, pode haver perícia e recusa.' }
          ]},
          { id: 'd2', title: 'Muito danificada', content: [
            { kind: 'paragraph', text: 'Dirija-se ao Banco de Portugal ou através de um banco; verifique os endereços e horários no site do Banco de Portugal. O prazo da perícia depende do caso.' }
          ]},
          { id: 'd3', title: 'Falsa', content: [
            { kind: 'paragraph', text: 'Apreensão sem reembolso. Comunicar à PSP + Banco de Portugal.' }
          ]}
        ]}
      ]
    },
    {
      id: 'deposit-limits',
      title: 'Limites para depósitos em numerário',
      content: [
        { kind: 'checklist', items: [
          '💰 Mesmo para montantes < 10 000 €, o banco pode solicitar a origem dos fundos se a operação for atípica, frequente, incompatível com o perfil do cliente ou suscitar risco AML',
          '📋 O banco aplica verificações AML de acordo com o perfil de risco; a origem dos fundos pode ser solicitada para qualquer montante, especialmente em depósitos em numerário elevados, frequentes ou atípicos',
          '📄 Para operações elevadas ou atípicas, o banco pode exigir documentos sobre a origem dos fundos; em operações perto de/acima de 15 000 €, a due diligence AML é especialmente provável, mas os requisitos concretos dependem do banco e do perfil do cliente',
          '🌍 Ao entrar na UE ou sair da UE com numerário ≥ 10 000 €, é exigida declaração aduaneira; em deslocações dentro da UE, as autoridades também podem exigir a divulgação de informação (Reg (EU) 2018/1672)',
          '🇷🇺 Reg (EU) 833/2014 art. 5b: regra geral, os bancos da UE estão proibidos de aceitar depósitos de cidadãos/residentes russos e de pessoas colectivas russas se o volume total de depósitos do cliente nesse banco exceder 100 000 €. Excepções para cidadãos da UE/EEE/Suíça e pessoas com autorização de residência temporária/permanente na UE/EEE/Suíça',
          '🇧🇾 Restrição sancionatória análoga para cidadãos/residentes bielorrussos e pessoas colectivas bielorrussas (Reg (EC) 765/2006); excepções semelhantes para pessoas com autorização de residência na UE/EEE/Suíça'
        ]},
        { kind: 'warning', text: 'Depósitos frequentes ligeiramente abaixo dos limiares podem ser considerados estruturação. Se a operação parecer suspeita, o banco é obrigado a apresentar uma suspicious transaction report à UIF/Polícia Judiciária e pode solicitar documentos, atrasar a operação ou restringir a conta ao abrigo dos seus procedimentos AML.' }
      ]
    }
  ],
  costs: [
    { label: 'Levantamento de numerário MB', amountEUR: 0 },
    { label: 'Levantamento com cartão estrangeiro', amountEUR: 0, note: 'Normalmente não há surcharge no Multibanco; a comissão é definida pelo banco emissor. Em ATM independentes podem existir comissões próprias' },
    { label: 'Coima por violação do limite de numerário', amountEURMin: 180, amountEURMax: 4500 }
  ],
  sources: [
    { title: 'Lei Geral Tributária — art. 63-E (limite de pagamentos em numerário)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1998-34541975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei n.º 92/2017 — alteração da LGT', url: 'https://dre.pt/dre/detalhe/lei/92-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — troca de notas e moedas danificadas', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SIBS — Multibanco', url: 'https://www.sibs.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
