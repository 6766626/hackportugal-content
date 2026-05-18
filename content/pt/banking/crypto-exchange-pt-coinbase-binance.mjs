export default {
  editorialVoice: 'hackportugal',
  id: 'crypto-exchange-pt-coinbase-binance',
  categoryId: 'banking',
  title: 'Bolsas de criptomoedas em Portugal: Coinbase, Binance, Kraken com NIF',
  tldr: 'Em 2026, uma bolsa de criptomoedas em Portugal não é uma “carteira anónima”, mas sim KYC com NIF: passaporte/autorização de residência ou Cartão de Cidadão, selfie, morada e, por vezes, comprovativo de morada. Verifique a Coinbase nas listas da CMVM/CASP; a Binance e a Kraken operam através de estruturas internacionais/UE, e a Criptoloja é PT-native. O carregamento por cartão custa normalmente 1–4%; SEPA é mais barato.\n\nImpostos: a venda de crypto <365 dias está normalmente sujeita a IRS de 28% através do Anexo G/J; ≥365 dias está muitas vezes isenta, mas deve guardar o histórico das operações.',
  tags: ['cripto', 'nif', 'irs', 'bolsas'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-exchange',
      title: '1. Escolha a bolsa adequada ao seu objectivo',
      content: [
        { kind: 'paragraph', text: 'Para um residente em Portugal, não contam apenas as comissões, mas também qual a entidade jurídica que presta serviço à conta, onde é guardada a documentação e que documentos poderão depois ser exportados para o IRS. Em 2026, após o MiCA, os serviços de criptoativos na UE devem operar através de um CASP autorizado ou de um regime transitório; verifique o estatuto na CMVM e na página legal/terms da própria bolsa.' },
        { kind: 'checklist', items: [
          'Coinbase — conveniente para principiantes, bom KYC, relatórios; verifique o estatuto actual nas listas da CMVM/CASP e que entity está indicada nos Terms.',
          'Binance — muitos pares, P2P e cartões; para Portugal, é importante ver que entity da UE/EEE presta serviço à conta e se SEPA está disponível.',
          'Kraken — forte reputação e relatórios, mas historicamente um grupo dos EUA; verifique a entity europeia, os dados SEPA e a exportação fiscal.',
          'Criptoloja — plataforma crypto portuguesa, mais fácil para explicar a origem dos fundos ao banco, mas normalmente com menos liquidez e oferta.',
          'Para brasileiros: não misture contas em BRL, histórico de CPF e residência em Portugal; depois da mudança, a declaração fiscal em Portugal é organizada pelo NIF e pela residência fiscal.',
          'Se o objectivo for apenas comprar BTC/ETH a longo prazo, escolha uma bolsa com SEPA claro, 2FA e exportação CSV, e não a que tiver o maior número de tokens.'
        ] },
        { kind: 'warning', text: 'Não se guie por conselhos no Telegram do tipo “a bolsa funciona em Portugal”. Para o banco e as Finanças, importa saber se consegue apresentar KYC, fonte dos fundos, histórico de transacções e um relatório oficial da bolsa.' }
      ]
    },
    {
      id: 'kyc-nif',
      title: '2. Faça o KYC: NIF, documento, morada, selfie',
      content: [
        { kind: 'paragraph', text: 'Quase todas as grandes bolsas em 2026 exigem identificação completa. O NIF nem sempre é pedido no primeiro ecrã, mas convém adicioná-lo logo: reduz o risco de revisão manual ao levantar para um banco português e ajuda no histórico fiscal.' },
        { kind: 'checklist', items: [
          'NIF — número fiscal português; indique o mesmo que usa no banco e no Portal das Finanças.',
          'Documento: Cartão de Cidadão para cidadãos PT; para expat — passaporte + título de residência / autorização de residência, por vezes EU ID.',
          'Morada em Portugal: contrato de arrendamento, fatura de água/luz/internet, declaração da Junta de Freguesia ou extracto bancário.',
          'Selfie / liveness-check — câmara do telemóvel, sem óculos nem filtros; o nome no documento deve corresponder ao da conta.',
          'Telefone: um número português é mais conveniente para SMS/bancos, mas é melhor activar 2FA por app em vez de depender de SMS.',
          'Conta bancária: o nome do titular do IBAN deve corresponder ao nome na bolsa.',
          'Se você for residente fiscal dos EUA ou tiver US indicia, conte com formulários FATCA/W adicionais.'
        ] },
        { kind: 'warning', text: 'Não use a conta de um familiar, um “cartão empresarial de um amigo” ou um IBAN de terceiros. Ao levantar €, um banco português pode congelar a transferência recebida até ser explicada a origem dos fundos.' }
      ]
    },
    {
      id: 'funding',
      title: '3. Carregamentos e levantamentos: cartão, SEPA, banco em Portugal',
      content: [
        { kind: 'paragraph', text: 'O caminho mais barato e mais limpo é uma transferência SEPA do seu IBAN português para a bolsa e de volta. O cartão é cómodo para a primeira compra, mas é mais caro e provoca limites com mais frequência. MB WAY raramente é suportado directamente; normalmente funciona apenas como forma de carregar o cartão/conta no banco, e não a bolsa.' },
        { kind: 'checklist', items: [
          'Transferência SEPA: normalmente 0–1 € do lado do banco, crédito desde alguns minutos até 1 dia útil, mas depende da bolsa e do instant SEPA.',
          'Cartão de débito: cómodo, mas a comissão é frequentemente 1–4% mais spread; o banco pode recusar o crypto-merchant.',
          'Cartão de crédito: desaconselhável — maior risco de bloqueio, cash-advance fee e perguntas do banco.',
          'Levantamento para IBAN PT: levante apenas para uma conta em seu nome; guarde a confirmação da operação em PDF/CSV.',
          'Montantes elevados: prepare antecipadamente comprovativo de rendimentos, recibos de vencimento, declarações de IRS, contrato de venda de activos ou histórico de compra de crypto.',
          'Não divida 20 000 € em 20 transferências de 1 000 € “para o banco não reparar”: isso parece pior do que uma transferência única explicável.',
          'Para comprar USDT/USDC, tenha em conta o risco do emitente e que uma “stablecoin” não equivale a um depósito bancário.'
        ] },
        { kind: 'warning', text: 'Os bancos portugueses não são obrigados a aceitar automaticamente fundos com origem em crypto. Revolut/ActivoBank/Millennium/Novobanco podem pedir documentos ou limitar operações; a política muda mais depressa do que a lei fiscal.' }
      ]
    },
    {
      id: 'tax-irs',
      title: '4. Impostos IRS: Anexo G/J e a regra dos 365 dias',
      content: [
        { kind: 'paragraph', text: 'Desde 2023, Portugal introduziu regras específicas para criptoativos no IRS. Para um investidor particular, o essencial é: a mais-valia da venda de crypto detida por menos de 365 dias é normalmente tributada como mais-valias à taxa de 28% ou pode ser incluída no englobamento. Se o activo tiver sido detido durante 365 dias ou mais, a mais-valia em crypto-activos comuns está muitas vezes isenta, mas podem existir excepções para tokens qualificados como valores mobiliários e para operações em regime profissional.' },
        { kind: 'checklist', items: [
          'Venda de crypto por EUR/USD/fiat — evento fiscal.',
          'Troca crypto-to-crypto normalmente não é tributada de imediato; o custo é transferido até à saída para fiat/outra operação tributável.',
          'Rendimentos de mining, staking, liquidity provision, airdrops, referrals podem não entrar no mesmo regime de uma simples venda de BTC.',
          'Se a bolsa ou a carteira estiver fora de Portugal, a declaração faz-se muitas vezes através do Anexo J; para intermediário PT, pode usar-se o Anexo G.',
          'Guarde a data e o preço de compra, a data e o preço de venda, comissões, txid, CSV da bolsa, extractos bancários.',
          'O IRS relativo aos rendimentos de 2025 é entregue em 2026 através do Portal das Finanças, normalmente de 1 de Abril a 30 de Junho.',
          'O NIF na bolsa deve coincidir com o NIF na declaração de IRS.',
          'Se se tornou residente em Portugal a meio do ano, separe as operações antes e depois da data de residência fiscal.'
        ] },
        { kind: 'warning', text: 'A regra “detive mais de um ano — imposto 0%” não é uma indulgência universal. Não substitui a comprovação da origem dos fundos e nem sempre se aplica a actividade profissional, valores mobiliários tokenizados, derivados ou rendimentos de staking.' }
      ]
    },
    {
      id: 'records-security',
      title: '5. O que guardar e como não perder o acesso 🔐',
      content: [
        { kind: 'paragraph', text: 'O principal erro dos expats é comprar crypto, mudar de país, telefone e banco, e 2 anos depois não ter nem CSV, nem acesso ao 2FA, nem prova da compra. Em Portugal, isto é um problema não só de segurança, mas também de impostos/banco.' },
        { kind: 'checklist', items: [
          'Descarregue o histórico em CSV/PDF pelo menos uma vez por trimestre e antes de fechar a conta.',
          'Guarde os extractos bancários com transferências para a bolsa e a partir da bolsa.',
          'Guarde as confirmações de KYC: não uma captura do documento, mas a data de verificação, a entity da bolsa, notificações por email.',
          'Active 2FA através de Authenticator/YubiKey; imprima os backup codes e guarde-os separadamente.',
          'Não mantenha toda a carteira na bolsa; para armazenamento a longo prazo, use uma hardware wallet, mas registe os endereços de levantamento.',
          'Para self-custody, anote a seed phrase offline; não a guarde no iCloud/Google Drive/WhatsApp.',
          'Se usar DeFi, mantenha um registo separado de operações: bridge, swap, LP, staking, comissões gas.',
          'Antes de um cash-out elevado, fale com um contabilista que tenha realmente visto Anexo G/J de crypto, e não apenas alguém que “faz IRS em geral”.'
        ] },
        { kind: 'warning', text: 'As Finanças podem pedir esclarecimentos mais tarde do que a bolsa mantém relatórios convenientes. Não confie que “Coinbase/Binance/Kraken vão mostrar sempre tudo”. Exporte você mesmo.' }
      ]
    }
  ],
  costs: [
    { label: 'Carregamento SEPA', amountEURMin: 0, amountEURMax: 1, note: 'Típico do lado do banco; a bolsa pode cobrar uma comissão separada ou spread.' },
    { label: 'Compra com cartão de débito', amountEURMin: 1, amountEURMax: 4, note: 'Normalmente 1–4% do montante mais spread; a comissão exacta é visível antes da confirmação.' },
    { label: 'Imposto IRS sobre mais-valia <365 dias', amountEURMin: 0, amountEURMax: 28, note: 'Normalmente 28% da mais-valia, não do valor total da venda; é possível englobamento pela escala progressiva de IRS.' },
    { label: 'Contabilista para declaração com crypto', amountEURMin: 80, amountEURMax: 250, note: 'Referência para IRS com Anexo G/J e exportações de bolsas; DeFi complexo pode custar mais.' }
  ],
  sources: [
    { title: 'CMVM — verificação de entidades autorizadas e informação sobre criptoativos', url: 'https://www.cmvm.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — IRS, declaração Modelo 3 e Anexos G/J', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei n.º 24-D/2022 — Orçamento do Estado 2023, regime fiscal dos criptoativos', url: 'https://dre.pt/dre/detalhe/lei/24-d-2022-205557192', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regulamento (UE) 2023/1114 — MiCA, regime dos crypto-asset service providers na UE', url: 'https://eur-lex.europa.eu/eli/reg/2023/1114/oj', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
