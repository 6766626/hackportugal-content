export default {
  editorialVoice: 'hackportugal',
  id: 'crypto-exchange-pt-coinbase-binance',
  categoryId: 'banking',
  title: 'Criptobolsas em Portugal: Coinbase, Binance, Kraken com NIF',
  tldr: 'Em 2026, uma criptobolsa em Portugal não é uma “carteira anónima”, mas sim KYC com NIF: passaporte/autorização de residência ou Cartão de Cidadão, selfie, morada e, por vezes, comprovativo de morada. Verifique a Coinbase nas listas da CMVM/CASP; a Binance e a Kraken operam através de estruturas internacionais/UE, e a Criptoloja é PT-native. O carregamento por cartão costuma custar 1–4%; SEPA é mais barato. Impostos: a venda de crypto <365 dias normalmente é IRS 28% via Anexo G/J; ≥365 dias está muitas vezes isenta, mas é necessário guardar o histórico das operações.',
  tags: ['cripto', 'nif', 'irs', 'bolsas'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-exchange',
      title: '1. Escolha a bolsa para o seu objectivo',
      content: [
        { kind: 'paragraph', text: 'Para um residente em Portugal, não contam apenas as comissões, mas também qual é a entidade jurídica que presta serviço à conta, onde fica guardada a documentação e que documentos poderá depois descarregar para o IRS. Em 2026, após o MiCA, os serviços de criptoactivos na UE devem operar através de um CASP autorizado ou de um regime transitório; verifique o estatuto na CMVM e na página legal/terms da própria bolsa.' },
        { kind: 'checklist', items: [
          'Coinbase — prática para principiantes, bom KYC, relatórios; verifique o estatuto actualizado nas listas da CMVM/CASP e que entity está indicada nos Terms.',
          'Binance — muitas pares, P2P e cartões; para Portugal é importante ver que EU/EEA entity serve a conta e se SEPA está disponível.',
          'Kraken — forte reputação e relatórios, mas historicamente um grupo dos EUA; verifique a entity europeia, os dados SEPA e o export fiscal.',
          'Criptoloja — plataforma crypto portuguesa, mais fácil de explicar ao banco a origem dos fundos, mas normalmente com menos liquidez e oferta.',
          'Para brasileiros: não misture contas em BRL, histórico de CPF e residência PT; depois da mudança, a declaração fiscal em Portugal organiza-se pelo NIF e pela residência fiscal.',
          'Se o objectivo for apenas comprar BTC/ETH a longo prazo, escolha uma bolsa com SEPA claro, 2FA e exportação CSV, e não com o número máximo de tokens.'
        ] },
        { kind: 'warning', text: 'Não se guie por conselhos no Telegram do tipo “a bolsa funciona em Portugal”. Para o banco e para as Finanças importa se consegue mostrar KYC, origem dos fundos, histórico de transacções e um relatório oficial da bolsa.' }
      ]
    },
    {
      id: 'kyc-nif',
      title: '2. Faça o KYC: NIF, documento, morada, selfie',
      content: [
        { kind: 'paragraph', text: 'Quase todas as grandes bolsas em 2026 exigem identificação completa. O NIF nem sempre é pedido no primeiro ecrã, mas vale a pena adicioná-lo logo: reduz o risco de verificação manual ao levantar para um banco português e ajuda com o histórico fiscal.' },
        { kind: 'checklist', items: [
          'NIF — número fiscal português; indique o mesmo que usa no banco e no Portal das Finanças.',
          'Documento: Cartão de Cidadão para cidadãos PT; para expat — passaporte + título de residência / autorização de residência, por vezes EU ID.',
          'Morada em Portugal: contrato de arrendamento, fatura de água/luz/internet, declaração da Junta de Freguesia ou extracto bancário.',
          'Selfie / liveness-check — câmara do telemóvel, sem óculos nem filtros; o nome no documento deve coincidir com a conta.',
          'Telefone: um número português é mais prático para SMS/bancos, mas é melhor activar 2FA baseada em app do que depender de SMS.',
          'Conta bancária: o nome do titular do IBAN deve coincidir com o nome na bolsa.',
          'Se for residente fiscal dos EUA ou tiver US indicia, conte com formulários FATCA/W adicionais.'
        ] },
        { kind: 'warning', text: 'Não use a conta de um familiar, o “cartão corporativo de um amigo” ou um IBAN de outra pessoa. Ao levantar €, o banco português pode congelar a transferência recebida até ser explicada a origem dos fundos.' }
      ]
    },
    {
      id: 'funding',
      title: '3. Carregamentos e levantamentos: cartão, SEPA, banco em Portugal',
      content: [
        { kind: 'paragraph', text: 'O caminho mais barato e limpo é uma transferência SEPA do seu IBAN português para a bolsa e de volta. O cartão é prático para a primeira compra, mas é mais caro e activa limites com mais frequência. MB WAY raramente é suportado directamente; normalmente funciona apenas como forma de carregar o cartão/conta no banco, não a bolsa.' },
        { kind: 'checklist', items: [
          'Transferência SEPA: normalmente 0–1 € do lado do banco, crédito de alguns minutos a 1 dia útil, mas depende da bolsa e do instant SEPA.',
          'Cartão de débito: prático, mas a comissão é frequentemente 1–4% mais spread; o banco pode recusar o crypto-merchant.',
          'Cartão de crédito: desaconselhável — maior risco de bloqueio, cash-advance fee e perguntas do banco.',
          'Levantamento para IBAN PT: levante apenas para uma conta em seu nome; guarde a confirmação PDF/CSV da operação.',
          'Montantes elevados: prepare com antecedência comprovativo de rendimentos, payslips, declarações IRS, contrato de venda de activos ou histórico de compra de crypto.',
          'Não divida 20 000 € em 20 transferências de 1 000 € “para o banco não reparar”: isso parece pior do que uma única transferência explicável.',
          'Para comprar USDT/USDC, tenha em conta o risco do emitente e que uma “stablecoin” não é igual a um depósito bancário.'
        ] },
        { kind: 'warning', text: 'Os bancos portugueses não são obrigados a aceitar automaticamente a origem crypto dos fundos. Revolut/ActivoBank/Millennium/Novobanco podem pedir documentos ou limitar operações; a política muda mais depressa do que a lei fiscal.' }
      ]
    },
    {
      id: 'tax-irs',
      title: '4. Impostos IRS: Anexo G/J e a regra dos 365 dias',
      content: [
        { kind: 'paragraph', text: 'Desde 2023, Portugal introduziu regras especiais para criptoativos em IRS. Para um investidor particular, o essencial é: a mais-valia da venda de crypto detida por menos de 365 dias é normalmente tributada como mais-valias à taxa de 28% ou pode ser incluída em englobamento. Se o activo foi detido por 365 dias ou mais, a mais-valia em crypto-activos comuns está muitas vezes isenta, mas podem existir excepções para tokens qualificados como valores mobiliários e para operações em regime profissional.' },
        { kind: 'checklist', items: [
          'Venda de crypto por EUR/USD/fiat — evento fiscal.',
          'Troca crypto-to-crypto normalmente não é tributada de imediato; o valor é transferido até à saída para fiat/outra operação tributável.',
          'Rendimentos de mining, staking, liquidity provision, airdrops, referrals podem não cair no mesmo regime que uma simples venda de BTC.',
          'Se a bolsa ou carteira estiver fora de Portugal, a declaração costuma passar pelo Anexo J; para intermediário PT pode usar-se o Anexo G.',
          'Guarde a data e o preço de compra, a data e o preço de venda, comissões, txid, CSV da bolsa, extractos bancários.',
          'O IRS relativo a rendimentos de 2025 é entregue em 2026 através do Portal das Finanças, normalmente de 1 de Abril a 30 de Junho.',
          'O NIF na bolsa deve coincidir com o NIF na declaração de IRS.',
          'Se se tornou residente em Portugal a meio do ano, separe as operações anteriores e posteriores à data de residência fiscal.'
        ] },
        { kind: 'warning', text: 'A regra “mantive mais de um ano — imposto 0%” não é uma absolvição universal. Não substitui a comprovação da origem dos fundos e nem sempre se aplica a actividade profissional, valores mobiliários tokenizados, derivados ou rendimentos de staking.' }
      ]
    },
    {
      id: 'records-security',
      title: '5. O que guardar e como não perder o acesso 🔐',
      content: [
        { kind: 'paragraph', text: 'O principal erro dos expats é comprar crypto, mudar de país, telefone e banco, e 2 anos depois não ter CSV, acesso ao 2FA nem prova de compra. Em Portugal, isto é um problema não só de segurança, mas também de impostos/banco.' },
        { kind: 'checklist', items: [
          'Descarregue o histórico CSV/PDF pelo menos uma vez por trimestre e antes de fechar a conta.',
          'Guarde extractos bancários com transferências para a bolsa e da bolsa.',
          'Guarde confirmações de KYC: não uma captura do documento, mas a data de verificação, entity da bolsa, notificações por email.',
          'Active 2FA através de Authenticator/YubiKey; imprima os backup codes e guarde-os separadamente.',
          'Não mantenha toda a carteira na bolsa; para armazenamento a longo prazo use hardware wallet, mas registe os endereços de levantamento.',
          'Para self-custody, anote a seed phrase offline; não a guarde no iCloud/Google Drive/WhatsApp.',
          'Se usar DeFi, mantenha um registo separado das operações: bridge, swap, LP, staking, comissões gas.',
          'Antes de um cash-out elevado, fale com um contabilista que tenha realmente visto Anexo G/J de crypto, e não apenas alguém que “faz IRS no geral”.'
        ] },
        { kind: 'warning', text: 'As Finanças podem pedir esclarecimentos mais tarde do que a bolsa mantém relatórios cómodos. Não conte com a ideia de que “Coinbase/Binance/Kraken mostram sempre tudo”. Exporte por sua conta.' }
      ]
    }
  ],
  costs: [
    { label: 'Carregamento SEPA', amountEURMin: 0, amountEURMax: 1, note: 'Tipicamente do lado do banco; a bolsa pode cobrar uma comissão separada ou spread.' },
    { label: 'Compra com cartão de débito', amountEURMin: 1, amountEURMax: 4, note: 'Normalmente 1–4% do montante mais spread; a comissão exacta aparece antes da confirmação.' },
    { label: 'Imposto IRS sobre mais-valia <365 dias', amountEURMin: 0, amountEURMax: 28, note: 'Normalmente 28% da mais-valia, não do valor total da venda; é possível englobamento pela escala progressiva do IRS.' },
    { label: 'Contabilista para declaração com crypto', amountEURMin: 80, amountEURMax: 250, note: 'Referência para IRS com Anexo G/J e exports das bolsas; DeFi complexo pode custar mais.' }
  ],
  sources: [
    { title: 'CMVM — verificação de entidades autorizadas e informação sobre criptoativos', url: 'https://www.cmvm.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — IRS, declaração Modelo 3 e Anexos G/J', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei n.º 24-D/2022 — Orçamento do Estado 2023, regime fiscal dos criptoativos', url: 'https://dre.pt/dre/detalhe/lei/24-d-2022-205557192', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regulamento (UE) 2023/1114 — MiCA, regime de crypto-asset service providers na UE', url: 'https://eur-lex.europa.eu/eli/reg/2023/1114/oj', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
