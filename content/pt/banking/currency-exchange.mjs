export default {
  editorialVoice: 'hackportugal',
  id: 'currency-exchange',
  categoryId: 'banking',
  title: 'Câmbio de moeda — onde é mais vantajoso trocar RUB / USD / GBP por EUR',
  tldr: 'O melhor é converter através da Wise, Revolut ou N26 (taxa de câmbio ≈ média de mercado + 0,4-0,5%).\n\nOs bancos portugueses cobram um spread de 1,5-3% (evite).\n\nAs casas de câmbio no aeroporto/centro das cidades podem chegar a 5% de spread. Nos ATM em Portugal, recuse sempre o DCC e escolha a cobrança em EUR — assim, a taxa é definida pelo banco emissor/rede do cartão. Para montantes elevados (>10 000 €) — transferência bancária através de um broker (CurrencyFair, OFX). Para russos, após as sanções, as rotas são limitadas; canais cripto exigem compliance VASP/CASP e não devem ser usados para contornar sanções.',
  tags: ['moeda', 'câmbio', 'wise', 'revolut', 'rub', 'usd', 'taxa de câmbio'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'best-options',
      title: '💱 Melhores formas de câmbio',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Wise (antiga TransferWise)', content: [
            { kind: 'checklist', items: [
              '🟢 Taxa: média de mercado + 0,4-0,5% (a mais barata entre as opções legais)',
              '💳 Cartão Wise: pode gastar EUR a partir de uma conta multimoeda; os dados bancários em EUR normalmente não são um PT IBAN, e a Wise não é um banco português',
              '🚀 Transferência EUR-EUR: ≤ 1 hora, gratuita',
              '🚀 USD/GBP → EUR: 1-2 dias',
              '🇷🇺 RUB → EUR: NÃO disponível (desde 2022, sanções)',
              '💰 Limites: até 1 000 000 €/ano para utilizadores verificados',
              '🌐 wise.com ou aplicação'
            ]}
          ]},
          { id: 'b2', title: 'Revolut', content: [
            { kind: 'checklist', items: [
              '🟢 Taxa: em dias úteis — próxima da interbancária dentro dos limites do plano; no Standard, após o limite existe uma fair-use fee; ao fim de semana há normalmente uma margem adicional',
              '💳 Para clientes Revolut migrados para a sucursal portuguesa, pode estar disponível um PT IBAN; confirme na aplicação. Não residentes/contas antigas podem ter um IBAN LT ou outro',
              '🚀 Conta multimoeda — mantenha USD/GBP',
              '⚡ Conversão imediata',
              '🇷🇺 RUB → EUR: na prática indisponível após as sanções',
              '⚠️ Ao fim de semana a taxa é pior: spread +1%',
              '💰 Os limites dependem do plano e do país de registo; no Standard há um limite mensal de fair-use, no Premium/Metal é mais alto ou sem weekday fair-use fee'
            ]}
          ]},
          { id: 'b3', title: 'N26', content: [
            { kind: 'checklist', items: [
              '🟢 Banco online alemão, IBAN DE',
              '💱 N26 — conta em EUR com DE IBAN; boa para pagamentos com cartão no estrangeiro à Mastercard rate, mas não substitui Wise/Revolut para guardar e converter USD/GBP',
              '⚖️ Para conversão USD/GBP, é melhor Wise/Revolut/broker FX',
              '💰 Plano gratuito — funcionalidades básicas'
            ]}
          ]},
          { id: 'b4', title: 'Brokers para montantes elevados', content: [
            { kind: 'checklist', items: [
              '💼 CurrencyFair: para 10 000+ €, spread 0,3-0,5%',
              '💼 OFX: spread 0,4-0,7%, sem comissão',
              '💼 Xe Money Transfer (antiga HiFX): para residentes no Reino Unido e não só',
              '⏱️ Transferência 1-3 dias, a taxa pode ser melhor do que na Wise para montantes elevados (depende da quote)',
              '🆔 KYC obrigatório — passaporte + comprovativo da origem dos fundos'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'avoid',
      title: '🚫 Evitar',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Casas de Câmbio', content: [
            { kind: 'checklist', items: [
              '⚠️ Aeroporto LIS: spread 5-7%, taxa péssima',
              '⚠️ Zonas turísticas (Baixa Lisboa, Centro Porto): spread 4-6%',
              '⚠️ No hotel / na receção: spread 6-10%',
              '✅ Usar APENAS para pequenos montantes em numerário em caso de emergência',
              '🛑 NÃO trocar > 100 € em numerário — perde 5+ €'
            ]}
          ]},
          { id: 'a2', title: 'Bancos portugueses (para câmbio de moeda)', content: [
            { kind: 'checklist', items: [
              '⚠️ Conversão no Millennium / Santander / CGD: spread 1,5-3%',
              '⚠️ ATM com cartão de não residente: usa a taxa do banco emissor (muitas vezes má)',
              '⚠️ Transferência internacional SWIFT: 25-50 € + 1% na taxa',
              '✅ Para montantes elevados há opções melhores'
            ]}
          ]},
          { id: 'a3', title: 'Western Union / MoneyGram', content: [
            { kind: 'checklist', items: [
              '⚠️ Spread 5-12%',
              '⚠️ Usar apenas se o destinatário não tiver conta bancária ou acesso online',
              '✅ Para envio urgente de numerário para países em desenvolvimento'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'rubles',
      title: '🇷🇺 Particularidades RUB → EUR (2026)',
      content: [
        { kind: 'paragraph', text: 'Após as sanções de 2022, os fluxos cambiais Federação Russa—UE ficaram fortemente limitados. O SWIFT está fechado para a maioria dos bancos da Federação Russa, e as operações em rublos na UE passam por vias complexas.' },
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Através de um país terceiro', content: [
            { kind: 'checklist', items: [
              '🇹🇷 Turquia: abrir conta no Türkiye İş Bankası, transferir RUB → TRY → USD → EUR',
              '🇷🇸 Sérvia: Banka Intesa, a regulação do NBS é mais liberal',
              '🇬🇪 Geórgia: TBC Bank — opção funcional',
              '🇰🇿 Cazaquistão: Halyk Bank — transferências da Federação Russa ainda funcionam',
              '⏱️ 3-7 dias + 0,5-2% de perdas na taxa',
              '⚠️ As regras da Federação Russa para transferências cambiais e exportação de numerário mudam frequentemente; verifique separadamente os limites do Banco Central da Federação Russa/alfândega na data da operação. Não confundir transferências bancárias, transferências para contas estrangeiras próprias e exportação de numerário'
            ]}
          ]},
          { id: 'r2', title: 'Através de criptomoeda', content: [
            { kind: 'checklist', items: [
              '💵 USDT (Tether) — a mais líquida para conversão',
              '💱 Cripto P2P para RUB é fortemente limitada e depende da bolsa/jurisdição; a Binance saiu da Federação Russa e não é uma rota RUB-P2P fiável. Qualquer cash-out crypto-to-bank na UE exige source of funds documental e não deve ser usado para contornar sanções',
              '⚠️ Em Portugal, operações cripto podem entrar no IRS: gains com detenção <365 dias são normalmente tributados a 28% (se não forem agregados); ≥365 dias — para ativos qualificáveis, podem ser exempt. Mining/staking/profit de professional activity — regras separadas. A declaração depende do tipo de rendimento, não do volume total',
              '⚠️ As verificações AML podem ser rigorosas nos bancos da UE quando a origem é criptomoeda',
              '📋 Guardar todo o histórico de transações para a AT'
            ]}
          ]},
          { id: 'r3', title: 'Transferência direta (poucos bancos)', content: [
            { kind: 'checklist', items: [
              '🏦 O estatuto sancionatório dos bancos da Federação Russa varia entre UE/US/UK e muda frequentemente. Gazprombank e Rosselkhozbank têm restrições em diferentes jurisdições; não afirme que um banco «não está sob sanções» sem verificar as listas atuais',
              '⚠️ A maioria dos grandes bancos da Federação Russa (Sber, VTB, Alfa) — bloqueados para SWIFT (Reg 833/2014 art. 5h)',
              '🌐 UniCredit / Raiffeisen Rússia — formalmente funcionam para operações específicas, mas o banco correspondente e o banco recetor da UE podem recusar por motivos de compliance',
              '⏱️ Prazos 5-15 dias (se não ficar bloqueada)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '📅 Acompanhamento da taxa: configurar um alerta na Wise/Revolut, trocar quando a taxa for favorável',
          '💸 Média de preço: dividir um montante grande em 3-5 parcelas, trocar ao longo de 2-4 semanas',
          '🏦 Guarde os comprovativos de câmbio — para a AT, se necessário',
          '🛡️ Proteção contra sanções: não manter montantes elevados num só banco/numa só moeda',
          '⚖️ Declaração à AT: as contas bancárias estrangeiras de um residente em Portugal são declaradas na Modelo 3 IRS, Anexo J, Quadro 11 anual (IBAN + país), e NÃO na Modelo 38. A Modelo 38 é uma comunicação separada para instituições financeiras portuguesas sobre transferências de residentes para países fora da UE, não para pessoas singulares. Não existe qualquer «limiar de 50 000 €» para pessoas singulares residentes — o Anexo J Quadro 11 é obrigatório independentemente do saldo',
          '📊 IRS português: a diferença cambial em operações de moeda — é tributada como «mais-valias» (28%)',
          '⚠️ Residente fiscal: se se tornou residente em Portugal e vendeu ativos no estrangeiro — IRS sobre a diferença',
          '🌐 Regulador CMVM: o broker deve estar licenciado na UE; verificar em cmvm.pt',
          '💰 Fluxo de caixa: ter uma reserva em EUR para 3-6 meses de vida, sem depender de movimentos cambiais'
        ]}
      ]
    },
    {
      id: 'compare',
      title: '📊 Comparação de comissões 1000 USD → EUR',
      content: [
        { kind: 'paragraph', text: 'Cálculo da poupança aproximada em 1000 USD → EUR (taxa média de mercado ≈ 0,93):' },
        { kind: 'checklist', items: [
          '🟢 Wise: recebe ≈ 925 €, perda ≈ 5 € (0,5%)',
          '🟢 Revolut Premium: ≈ 928 €, perda ≈ 2 €',
          '🟡 N26: ≈ 925 €, perda ≈ 5 €',
          '🟠 Banco português: ≈ 905 €, perda ≈ 25 € (2,7%)',
          '🔴 Casa de câmbio no aeroporto: ≈ 880 €, perda ≈ 50 € (5,4%)',
          '🔴 Western Union: ≈ 870 €, perda ≈ 60 €'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Transferência Wise EUR-EUR', amountEUR: 0 },
    { label: 'Wise USD → EUR (1000)', amountEUR: 5, note: 'spread ≈ 0,5%' },
    { label: 'Revolut Premium', amountEUR: 8, note: '€/mês' },
    { label: 'Spread cambial de banco português em 1000 €', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Casa de câmbio no aeroporto 1000 €', amountEURMin: 50, amountEURMax: 70 },
    { label: 'CurrencyFair para montante elevado (>10k)', amountEURMin: 30, amountEURMax: 50 }
  ],
  sources: [
    { title: 'Banco de Portugal — Comparador de comissões', url: 'https://comparador.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CMVM — brokers regulados', url: 'https://www.cmvm.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Tributária — IRS Anexo J (rendimentos e contas estrangeiras)', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-18' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
