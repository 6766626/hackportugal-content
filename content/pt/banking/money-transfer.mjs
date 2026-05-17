export default {
  editorialVoice: 'hackportugal',
  id: 'money-transfer',
  categoryId: 'banking',
  title: 'Transferência de dinheiro da CEI para Portugal — canais legais 2026',
  tldr: 'As sanções da UE (2022+) bloquearam o SWIFT para grandes bancos russos e restringiram as transferências. Continuam a existir canais legais: pequenos bancos russos sem sanções, bancos da CEI não sancionados (Cazaquistão, Arménia, Geórgia), neobancos da UE (através de intermediário), criptomoeda através de bolsas reguladas. O essencial é documentar a origem dos fundos (AML/KYC). Uma transferência anónima não é possível.',
  audience: { countryCodes: ['RU', 'BY', 'KZ', 'KG', 'UZ'] },
  tags: ['transferências', 'sanções', 'banco', 'aml'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'sanctions-context',
      title: 'Contexto regulamentar',
      content: [
        { kind: 'paragraph', text: 'Desde fevereiro de 2022, a UE introduziu uma série de pacotes de sanções contra o sector bancário da Federação Russa. Principais restrições:' },
        { kind: 'checklist', items: [
          'Desligamento do SWIFT (ver Article 5h e Annex XIV do Regulation 833/2014 na versão consolidada atual; a lista foi alterada por regulamentos posteriores, incluindo a adição posterior do Sberbank)',
          'Proibição de aceitar depósitos superiores a 100 000 € de cidadãos da Federação Russa e de pessoas residentes na Federação Russa (Regulation 833/2014 art. 5b). A exceção aplica-se a cidadãos/residentes da UE, do EEE ou da Suíça, incluindo titulares de autorização de residência em Portugal. O AML/KYC bancário continua a aplicar-se',
          'Documentação obrigatória da origem dos fundos (6.ª Diretiva AML, EU 2018/1673)',
          'Regulation 269/2014 — sanções pessoais contra pessoas incluídas na lista (verificar através do EU Sanctions Map)',
          'Para cidadãos da Bielorrússia — regime semelhante desde 2022 (Reg (EC) 765/2006 art. 1u), com exceções semelhantes para autorização de residência na UE/EEE/Suíça'
        ]},
        { kind: 'warning', text: 'Contornar sanções (através de testas-de-ferro, evitando limites, com documentos falsos) é punível criminalmente na UE. Podem aplicar-se até 5 anos de prisão + confisco.' }
      ]
    },
    {
      id: 'options',
      title: 'Canais legais de transferência',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'A. Bancos da Federação Russa não sancionados (disponível)', content: [
            { kind: 'paragraph', text: 'Alguns bancos da Federação Russa não estão sujeitos a sanções de bloqueio da UE/proibição SWIFT, mas a possibilidade efetiva de uma transferência em EUR/USD depende dos bancos correspondentes e do compliance do banco recetor; a transferência pode ser rejeitada sem explicação. As transferências em USD são especialmente difíceis devido ao compliance dos correspondent banks dos EUA:' },
            { kind: 'checklist', items: [
              'Raiffeisenbank (RU) — disponível, mas as comissões aumentaram',
              'OTP Bank RU — disponível, com limites',
              'UniCredit RU — disponível, com restrições',
              'De acordo com as regras do Banco da Rússia, aplicam-se limites temporários às transferências para o estrangeiro; o limite e o direito de transferir dependem do estatuto cambial do remetente/destinatário e mudam regularmente. Verifique a comunicação atual do Banco Central da Federação Russa antes da transferência'
            ]},
            { kind: 'warning', text: 'Verifique o estatuto atual do banco no EU Sanctions Map (sanctionsmap.eu). A lista muda.' }
          ]},
          { id: 'o2', title: 'B. Através de um país terceiro (KZ, AM, GE, AE)', content: [
            { kind: 'paragraph', text: 'Esquema legal comum: abrir conta no Cazaquistão / Arménia / Geórgia / EAU → transferir para lá a partir da Federação Russa → daí para a UE. Exige uma viagem para abrir a conta.' },
            { kind: 'checklist', items: [
              'Cazaquistão: Kaspi, Halyk, Jusan — populares. É necessária uma viagem ao KZ.',
              'Arménia: ACBA, Ameriabank — abrem contas para não residentes da Federação Russa',
              'Geórgia: TBC, BoG — endureceram as condições, mas trabalham com documentação',
              'EAU: Emirates NBD, ADCB — exigem visto de residência ou um depósito elevado'
            ]},
            { kind: 'paragraph', text: 'Depois, a partir destes bancos — SWIFT para o seu banco português. Prepare documentos de source-of-funds/source-of-wealth para quaisquer entradas atípicas ou elevadas; o banco pode solicitá-los mesmo abaixo de 10 000 €, especialmente em transferências de/através de high-risk jurisdictions.' }
          ]},
          { id: 'o3', title: 'C. Wise / Revolut (através de residência na UE)', content: [
            { kind: 'paragraph', text: 'Wise e Revolut funcionam como neobancos da UE. Para cidadãos da Federação Russa/Bielorrússia atualmente:' },
            { kind: 'checklist', items: [
              'Revolut com morada na Federação Russa — encerram / congelam contas',
              'Revolut com morada em Portugal (após obter a autorização de residência) — funciona. Mas o carregamento a partir de um banco russo pode ser bloqueado',
              'Wise/Revolut: verifique a política atual do prestador. Não só a morada em Portugal é crítica, mas também a autorização de residência/cartão de residente da UE/EEE; clientes com morada/residência fiscal na Federação Russa/Bielorrússia ou sem EU/EEA residence confirmada podem ser recusados',
              'Tática: abrir a conta já depois da mudança para Portugal (com morada portuguesa e autorização de residência), carregar através de banco português ou SEPA'
            ]}
          ]},
          { id: 'o4', title: 'D. Criptomoeda (através de bolsas reguladas)', content: [
            { kind: 'paragraph', text: 'O canal cripto só é possível cumprindo sanctions/KYC por ambas as partes e pelas bolsas. As exchanges da UE/EEE normalmente exigem confirmação de que o cidadão russo é residente da UE/EEE/Suíça; clientes Russia-resident podem ser recusados. Utilize apenas VASP/CASP licenciados/registados; verifique a disponibilidade de Kraken/Bitstamp/Coinbase; a Binance não é um EU-off-ramp fiável após a saída da Federação Russa.' },
            { kind: 'checklist', items: [
              'É necessário KYC completo de ambos os lados',
              'Em Portugal, os gains de crypto-assets detidos <365 dias são geralmente tributados a 28% ou por agregação; quando detidos ≥365 dias, muitos gains ficam excluídos, mas existem exceções. Mining/staking/remuneration/professional activity e operações através de blacklisted jurisdictions podem ser tributados de forma diferente',
              'O Banco de Portugal mantém o registo AML/CFT e a supervisão de VASP; bancos e bolsas monitorizam operações e podem solicitar documentos/comunicar transações suspeitas',
              'Quando uma quantia elevada entra, o banco pode solicitar documentos sobre a origem dos fundos',
              'NÃO utilize serviços de câmbio P2P/OTC sem KYC — risco de congelamento dos fundos'
            ]}
          ]},
          { id: 'o5', title: 'E. Numerário através da fronteira', content: [
            { kind: 'paragraph', text: 'Ao entrar/sair da UE, numerário e instrumentos equiparados no valor de 10 000 € ou mais estão sujeitos a declaração (Reg (EU) 2018/1672); para meios não acompanhados, pode existir obrigação de divulgação a pedido da alfândega. Sem declaração — multa e confisco.' },
            { kind: 'warning', text: 'Esta via é pouco prática para quantias elevadas — riscos de perda, roubo e problemas alfandegários.' }
          ]}
        ]}
      ]
    },
    {
      id: 'source-of-funds',
      title: 'Documentação da origem dos fundos',
      content: [
        { kind: 'paragraph', text: 'Um banco português pode solicitar source of funds/source of wealth em qualquer operação atípica; na prática, isto acontece com especial frequência em entradas elevadas, transfronteiriças, sensíveis a sanções, cash/crypto ou mal documentadas. Prepare antecipadamente:' },
        { kind: 'checklist', items: [
          'Declaração de IRS / declaração fiscal dos últimos 3 anos',
          'Extrato do banco remetente relativo ao período de acumulação',
          'Contrato de venda de imóvel no país de origem (se aplicável à situação)',
          'Contrato de trabalho e declaração de salário',
          'Herança — documentos de sucessão, apostila',
          'Investimentos — relatórios de corretora',
          'Venda de empresa — contrato de compra e venda, impostos',
          'Oferta — contrato de doação com apostila',
          'Transferência de fundos próprios — não é considerada uma «oferta», é justificada por toda a cadeia'
        ]},
        { kind: 'warning', text: 'Nem todos os documentos exigem apostila e tradução certificada; os bancos pedem mais frequentemente apostila para atos de estado civil, documentos notariais e judiciais. Em Portugal não existe um sistema único de «tradutores juramentados» — a certificação é feita por notário, advogado/solicitador, consulado ou câmara de comércio. O prazo de validade do documento depende do seu tipo.' }
      ]
    },
    {
      id: 'taxes-pt',
      title: 'Impostos em Portugal sobre fundos recebidos',
      content: [
        { kind: 'checklist', items: [
          '💰 Transferência de fundos PRÓPRIOS (poupanças) — NÃO é tributável em Portugal',
          '🎁 Oferta de familiar em 1.º grau em linha reta/cônjuge (pais/filhos/cônjuge) — NÃO é tributável (isenção do imposto do selo de 10%)',
          '🎁 Oferta de outras pessoas — 10% de imposto do selo se >500 €',
          '💼 Rendimento (dividendos, juros) — tributado no Anexo E do IRS',
          '🏠 Venda de imóvel no país de origem — pode haver imposto em Portugal (deduzindo o imposto pago lá)',
          '💎 Herança — 10% de imposto do selo, se não for 1.º grau em linha reta/cônjuge',
          '🔖 IFICI (novo regime em substituição do NHR encerrado em 2024) com estatuto — pode reduzir o imposto'
        ]}
      ]
    },
    {
      id: 'practical-tips',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          '📋 Planeie as transferências 3-6 meses ANTES da mudança. Depois de obter a autorização de residência — é mais fácil',
          '🏦 Não coloque tudo num só banco. Distribua por 2-3 bancos para liquidez',
          '💶 A primeira transação elevada para um banco português fica normalmente pendente em verificação de compliance durante 3-14 dias. É normal',
          '📞 Informe ANTECIPADAMENTE o banco sobre a futura entrada elevada e forneça documentos sobre a origem dos fundos',
          '⚖️ Para quantias elevadas (>100 000 €), consulte um advogado especializado em compliance',
          '🚫 NÃO utilize «intermediários» no Telegram/WhatsApp para transferências — risco elevado de perdas',
          '📊 Guarde TODOS os comprovativos de transferências para futuras declarações fiscais'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — AML e transferências internacionais', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU Sanctions Map — verificação do estatuto sancionatório', url: 'https://www.sanctionsmap.eu/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Regulation (EU) 833/2014 (sanções)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0833', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Directiva 2018/1673 — AML 6', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32018L1673', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (portal fiscal) — declaração de rendimentos estrangeiros', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
