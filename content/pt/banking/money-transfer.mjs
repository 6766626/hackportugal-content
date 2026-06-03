export default {
  editorialVoice: 'hackportugal',
  id: 'money-transfer',
  categoryId: 'banking',
  title: 'Transferência de dinheiro da CEI para Portugal — canais legais 2026',
  tldr: 'As sanções da UE (2022+) bloquearam o SWIFT para grandes bancos russos e limitaram as transferências. Os canais legais continuam a existir: pequenos bancos russos não sancionados, bancos não sancionados da CEI (Cazaquistão, Arménia, Geórgia), neobancos da UE (através de intermediário), criptomoeda através de bolsas reguladas. O ponto-chave é documentar a origem dos fundos (AML/KYC).\n\nUma transferência anónima é impossível.',
  audience: { countryCodes: ['RU', 'BY', 'KZ', 'KG', 'UZ'] },
  tags: ['transferências', 'sanções', 'banco', 'aml'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'sanctions-context',
      title: 'Contexto regulamentar',
      content: [
        { kind: 'paragraph', text: 'Desde fevereiro de 2022, a UE introduziu uma série de pacotes de sanções contra o setor bancário da Federação Russa. Principais restrições:' },
        { kind: 'checklist', items: [
          'Desligação do SWIFT (ver Article 5h e Annex XIV do Regulation 833/2014 na versão consolidada atual; a lista foi alterada por regulamentos subsequentes, incluindo a adição posterior do Sberbank)',
          'Proibição de aceitar depósitos superiores a 100 000 € de cidadãos da Federação Russa e de pessoas residentes na Federação Russa (Regulation 833/2014 art. 5b). A exceção aplica-se a cidadãos/residentes da UE, EEE ou Suíça, incluindo titulares de autorização de residência em Portugal. O AML/KYC bancário continua a aplicar-se',
          'Documentação obrigatória da origem dos fundos (6.ª diretiva AML, EU 2018/1673)',
          'Regulation 269/2014 — sanções pessoais contra pessoas incluídas na lista (verificar através do EU Sanctions Map)',
          'Para cidadãos da Belarus — regime semelhante desde 2022 (Reg (EC) 765/2006 art. 1u), com exceções semelhantes para autorização de residência na UE/EEE/Suíça'
        ]},
        { kind: 'warning', text: 'Contornar sanções (através de testas-de-ferro, contornando limites, com documentos falsificados) é crime na UE. Pode implicar até 5 anos de prisão + confiscação.' }
      ]
    },
    {
      id: 'options',
      title: 'Canais legais de transferência',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'A. Bancos da Federação Russa não sancionados (disponível)', content: [
            { kind: 'paragraph', text: 'Alguns bancos da Federação Russa não estão sujeitos a sanções de bloqueio da UE/proibição SWIFT, mas a possibilidade efetiva de uma transferência em EUR/USD depende dos bancos correspondentes e do compliance do banco recetor; a transferência pode ser recusada sem explicação. As transferências em USD são especialmente difíceis devido ao compliance dos bancos correspondentes dos EUA:' },
            { kind: 'checklist', items: [
              'Raiffeisenbank (RU) — disponível, mas as comissões aumentaram',
              'OTP Bank RU — disponível, com limites',
              'UniCredit RU — disponível, com restrições',
              'Segundo as regras do Banco da Rússia, aplicam-se limites temporários a transferências para o estrangeiro; o limite e o direito de transferência dependem do estatuto cambial do remetente/destinatário e mudam regularmente. Verifique a comunicação atual do Banco Central da Federação Russa antes da transferência'
            ]},
            { kind: 'warning', text: 'Verifique o estatuto atual do banco no EU Sanctions Map (sanctionsmap.eu). A lista muda.' }
          ]},
          { id: 'o2', title: 'B. Através de um país terceiro (KZ, AM, GE, AE)', content: [
            { kind: 'paragraph', text: 'Esquema legal comum: abrir conta no Cazaquistão / Arménia / Geórgia / EAU → transferir para lá a partir da Federação Russa → daí para a UE. Exige uma viagem para abrir a conta.' },
            { kind: 'checklist', items: [
              'Cazaquistão: Kaspi, Halyk, Jusan — populares. É necessária uma viagem ao KZ.',
              'Arménia: ACBA, Ameriabank — abrem contas a não residentes da Federação Russa',
              'Geórgia: TBC, BoG — apertaram as condições, mas trabalham com documentação',
              'EAU: Emirates NBD, ADCB — exigem visto de residente ou um depósito elevado'
            ]},
            { kind: 'paragraph', text: 'Depois, a partir destes bancos — SWIFT para o seu banco português. Prepare documentos de source-of-funds/source-of-wealth para quaisquer entradas atípicas ou elevadas; o banco pode pedi-los mesmo abaixo de 10 000 €, sobretudo em transferências de/através de high-risk jurisdictions.' }
          ]},
          { id: 'o3', title: 'C. Wise / Revolut (através de residência na UE)', content: [
            { kind: 'paragraph', text: 'Wise e Revolut funcionam como neobancos da UE. Para cidadãos da Federação Russa/Belarus atualmente:' },
            { kind: 'checklist', items: [
              'Revolut com morada na Federação Russa — fecham / congelam contas',
              'Revolut com morada em Portugal (após obter autorização de residência) — funciona. Mas carregamentos a partir de um banco russo podem ser bloqueados',
              'Wise/Revolut: verifique a política atual do fornecedor. Não é apenas a morada em Portugal que é crítica, mas também a autorização de residência/cartão de residente da UE/EEE; clientes com morada/residência fiscal na Federação Russa/Belarus ou sem residência UE/EEE confirmada podem ser recusados',
              'Tática: abrir a conta já depois da mudança para Portugal (com morada portuguesa e autorização de residência), carregar através de banco português ou SEPA'
            ]}
          ]},
          { id: 'o4', title: 'D. Criptomoeda (através de bolsas reguladas)', content: [
            { kind: 'paragraph', text: 'O canal cripto só é possível cumprindo sanctions/KYC por ambas as partes e pelas bolsas. As exchanges UE/EEE normalmente exigem prova de que o cidadão russo é residente da UE/EEE/Suíça; clientes residentes na Rússia podem ser recusados. Use apenas VASP/CASP licenciados/registados; verifique a disponibilidade de Kraken/Bitstamp/Coinbase; a Binance não é uma EU-off-ramp fiável após a saída da Federação Russa.' },
            { kind: 'checklist', items: [
              'É necessário KYC completo de ambos os lados',
              'Em Portugal, os gains de crypto-assets detidos <365 dias são normalmente tributados a 28% ou por agregação; quando detidos ≥365 dias, muitos gains são excluídos, mas há exceções. Mining/staking/remuneration/professional activity e operações através de blacklisted jurisdictions podem ser tributados de forma diferente',
              'O Banco de Portugal mantém registo e supervisão AML/CFT de VASP; bancos e bolsas monitorizam operações e podem pedir documentos/comunicar transações suspeitas',
              'Quando entra uma quantia elevada, o banco pode pedir documentos sobre a origem dos fundos',
              'NÃO use casas de câmbio P2P/OTC sem KYC — risco de congelamento dos fundos'
            ]}
          ]},
          { id: 'o5', title: 'E. Dinheiro em numerário através da fronteira', content: [
            { kind: 'paragraph', text: 'Ao entrar/sair da UE, numerário e instrumentos equiparados no valor de 10 000 € ou mais estão sujeitos a declaração (Reg (EU) 2018/1672); para fundos não acompanhados, pode existir obrigação de divulgação a pedido da alfândega. Sem declaração — coima e confiscação.' },
            { kind: 'warning', text: 'Este caminho é pouco prático para montantes elevados — riscos de perda, roubo e problemas alfandegários.' }
          ]}
        ]}
      ]
    },
    {
      id: 'source-of-funds',
      title: 'Documentação da origem dos fundos',
      content: [
        { kind: 'paragraph', text: 'Um banco português pode pedir source of funds/source of wealth em qualquer operação atípica; na prática, isto acontece com especial frequência em entradas elevadas, transfronteiriças, sensíveis a sanções, em cash/crypto ou mal documentadas. Prepare com antecedência:' },
        { kind: 'checklist', items: [
          'Declaração IRS / declaração fiscal dos últimos 3 anos',
          'Extrato do banco remetente relativo ao período de acumulação',
          'Contrato de venda de imóvel no país de origem (se aplicável à situação)',
          'Contrato de trabalho e comprovativo de salário',
          'Herança — documentos de sucessão, apostila',
          'Investimentos — relatórios de corretora',
          'Venda de empresa — contrato de compra e venda, impostos',
          'Doação — contrato de doação com apostila',
          'Transferência de fundos próprios — não é considerada uma “doação”, justifica-se com toda a cadeia'
        ]},
        { kind: 'warning', text: 'Nem todos os documentos exigem apostila e tradução certificada; os bancos pedem mais frequentemente apostila para atos de registo civil, documentos notariais e judiciais.\n\nEm Portugal não existe um sistema único de “tradutores juramentados” — a certificação é feita por notário, advogado/solicitador, consulado ou câmara de comércio.\n\nO prazo de validade de um documento depende do seu tipo.' }
      ]
    },
    {
      id: 'taxes-pt',
      title: 'Impostos em Portugal sobre fundos recebidos',
      content: [
        { kind: 'checklist', items: [
          '💰 Transferência de fundos PRÓPRIOS (poupanças) — NÃO é tributável em Portugal',
          '🎁 Doação de familiar em linha reta de 1.º grau (pais/filhos/cônjuge) — NÃO é tributável (isenção de imposto do selo de 10%)',
          '🎁 Doação de outras pessoas — 10% de imposto do selo se >500 €',
          '💼 Rendimentos (dividendos, juros) — tributados no Anexo E do IRS',
          '🏠 Venda de imóvel no país de origem — pode haver imposto em Portugal (deduzindo o já pago lá)',
          '💎 Herança — 10% de imposto do selo, se não for linha reta de 1.º grau',
          '🔖 IFICI (novo regime em vez do NHR encerrado em 2024), se tiver o estatuto — pode reduzir o imposto'
        ]}
      ]
    },
    {
      id: 'practical-tips',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          '📋 Planeie as transferências 3-6 meses ANTES da mudança. Depois de obter autorização de residência — é mais fácil',
          '🏦 Não ponha tudo num só banco. Distribua por 2-3 bancos para liquidez',
          '💶 A primeira transação elevada para um banco português fica normalmente retida em verificação de compliance durante 3-14 dias. É normal',
          '📞 Avise o banco ANTECIPADAMENTE sobre a futura entrada elevada e forneça documentos sobre a origem dos fundos',
          '⚖️ Para montantes elevados (>100 000 €), consulte um advogado especializado em compliance',
          '🚫 NÃO use “intermediários” no Telegram/WhatsApp para transferências — risco elevado de perdas',
          '📊 Guarde TODOS os recibos de transferências para futuras declarações fiscais'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — AML e transferências internacionais', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU Sanctions Map — verificação do estatuto sancionatório', url: 'https://www.sanctionsmap.eu/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Regulation (EU) 833/2014 (sanções)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0833', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Diretiva 2018/1673 — AML 6', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32018L1673', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (portal fiscal) — declaração de rendimentos estrangeiros', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
