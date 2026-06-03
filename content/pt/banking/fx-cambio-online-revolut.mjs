export default {
  editorialVoice: 'hackportugal',
  id: 'fx-cambio-online-revolut',
  categoryId: 'banking',
  title: 'Câmbio de moeda em Portugal: Revolut, Wise e câmbio no centro de Lisboa',
  tldr: 'Para €→USD/GBP e o inverso em 2026, quase sempre compensa mais usar Revolut ou Wise: a taxa fica próxima do mid-market e a comissão é visível antes da confirmação. Os bancos em Portugal muitas vezes são piores em 3–5% devido ao spread e às comissões, sobretudo para numerário. Para trocar numerário, é melhor evitar o aeroporto e usar um câmbio licenciado no centro de Lisboa, por exemplo na zona da Baixa/Chiado, comparando a taxa de compra/venda. Nos Multibanco, escolha sempre o pagamento na moeda local sem DCC.',
  tags: ['fx', 'revolut', 'wise', 'câmbio', 'bancos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'best-default',
      title: 'Regra de base: online é melhor do que uma casa de câmbio em numerário',
      content: [
        { kind: 'paragraph', text: 'Se precisa de trocar euros por USD, GBP, CHF, PLN ou outra moeda principal, veja primeiro a Revolut e a Wise. Mostram a taxa e a comissão antes da operação, e o resultado costuma ficar mais próximo do mid-market interbancário do que num banco português ou num câmbio turístico.' },
        { kind: 'checklist', items: [
          'Para uma viagem de Portugal para os EUA/UK: converta €→USD/GBP na Revolut ou na Wise e pague com cartão.',
          'Para receber salário ou uma transferência do estrangeiro: a Wise é muitas vezes conveniente para dados bancários internacionais e uma comissão transparente.',
          'Para despesas diárias em Portugal, mantenha a moeda principal em €.',
          'Para montantes elevados, compare o valor final depois de todas as comissões, e não apenas a taxa.',
          'Para numerário, use câmbio apenas se precisar mesmo de notas.',
          'Não troque no aeroporto de Lisboa/Porto, excepto uma quantia de emergência para táxi/metro.',
          'Num ATM no estrangeiro, recuse a conversão pelo operador do ATM: escolha “charge in local currency”.'
        ] }
      ]
    },
    {
      id: 'revolut-wise',
      title: 'Revolut e Wise: como não pagar a mais',
      content: [
        { kind: 'paragraph', text: 'A Revolut é prática para câmbios rápidos dentro da aplicação e para usar o cartão em viagens. A Wise é forte em transferências internacionais e numa discriminação clara: taxa, comissão, montante para o beneficiário. Em ambos os casos, não confie na palavra “free”: veja o ecrã final antes de confirmar.' },
        { kind: 'checklist', items: [
          'Compare “you pay” e “recipient gets”, não a taxa publicitada.',
          'Verifique o limite de câmbio gratuito no seu plano Revolut: nos planos standard, depois do limite pode haver uma margem adicional.',
          'Tenha em conta fins de semana e horas de mercado sem funcionamento: alguns serviços acrescentam um markup para se protegerem de movimentos da taxa.',
          'Na Wise, a comissão depende do par de moedas, do método de pagamento e do montante; a transferência bancária é normalmente mais barata do que o pagamento com cartão.',
          'Para €→USD/GBP, a diferença entre Revolut/Wise e um banco comum é muitas vezes visível já nos 500–1 000 €.',
          'Não mantenha montantes elevados numa fintech sem necessidade: para guardar dinheiro a longo prazo, use um banco com uma estratégia de segurança completa.',
          'Active notificações push, limites de cartão e virtual cards descartáveis para compras online.'
        ] },
        { kind: 'warning', text: 'A Revolut e a Wise não são uma “agência bancária portuguesa” no sentido comum. Para IRS, arrendamento, salário e débito direto em Portugal, por vezes é mais conveniente ter um PT IBAN num banco local, mesmo que faça o câmbio através de uma fintech.' }
      ]
    },
    {
      id: 'cash-lisbon',
      title: 'Numerário em Lisboa: câmbio no centro, não no aeroporto',
      content: [
        { kind: 'paragraph', text: 'Se precisa de numerário em USD/GBP/BRL ou de vender notas estrangeiras por €, procure um balcão de câmbio licenciado no centro de Lisboa: Baixa, Rossio, Restauradores, Chiado, Avenida da Liberdade. “Exchange Comércio Lisboa” e casas de câmbio semelhantes no centro turístico podem ser uma opção normal, se a taxa estiver afixada de forma transparente e não houver comissão escondida.' },
        { kind: 'checklist', items: [
          'Fotografe ou anote a taxa “we buy” e “we sell” antes de trocar.',
          'Pergunte directamente: “Há comissão?” — se existe uma comissão separada.',
          'Compare pelo menos 2–3 pontos num raio de 10 minutos a pé.',
          'Verifique que a taxa no painel corresponde exactamente à sua moeda e ao seu montante.',
          'Não entregue o passaporte/autorização de residência por muito tempo; em operações de maior valor, a identificação é normal, mas o documento deve ser devolvido de imediato.',
          'Conte as notas ao balcão antes de sair.',
          'Guarde o recibo/comprovativo do câmbio.',
          'Não troque com pessoas na rua, mesmo que a taxa seja melhor.'
        ] },
        { kind: 'warning', text: 'As bureau de change de aeroporto são quase sempre uma má opção: spread amplo, margem turística, fraca posição de negociação. Se chegou sem euros, levante uma pequena quantia no Multibanco sem DCC ou troque o mínimo até chegar à cidade.' }
      ]
    },
    {
      id: 'banks-atm-dcc',
      title: 'Bancos e ATM: onde se perdem 3–5%',
      content: [
        { kind: 'paragraph', text: 'Os bancos tradicionais em Portugal são convenientes para salário, crédito habitação, IMI/IRS e Multibanco, mas não para FX. No câmbio de numerário e em operações com cartão noutra moeda, o banco pode ganhar no spread, na comissão por operação internacional e na taxa do sistema de pagamentos.' },
        { kind: 'checklist', items: [
          'Não troque montantes elevados numa agência bancária sem comparar com Wise/Revolut.',
          'Se pagar com um cartão português fora da zona euro, verifique a comissão de serviço internacional no preçário do banco.',
          'No ATM, escolha “sem conversão” ou “debit in local currency”.',
          'Recuse Dynamic Currency Conversion se o ecrã propuser debitar logo em € a uma “guaranteed rate”.',
          'Para cartões em USD/GBP, mantenha previamente saldo nessa moeda se o serviço o permitir.',
          'Verifique os limites de levantamento de numerário e a comissão do ATM separadamente da comissão do seu cartão.',
          'Para transferências de valor elevado para Portugal, faça primeiro um teste de 10–50 €.'
        ] },
        { kind: 'warning', text: 'O DCC parece conveniente porque mostra o montante em euros, mas a taxa é normalmente pior. O Banco de Portugal alerta regularmente: o consumidor deve ver a taxa, as comissões e o montante final, mas a vantagem continua a ter de ser verificada por si.' }
      ]
    },
    {
      id: 'large-amounts',
      title: 'Montantes elevados: arrendamento, caução, compra de automóvel',
      content: [
        { kind: 'paragraph', text: 'Para 5 000–50 000 €, uma diferença de 1% já representa 50–500 €. Não faça um câmbio de valor elevado “num clique” sem comparar. Peça uma cotação na Wise, na Revolut, no seu banco e, se necessário, a um fornecedor especializado de FX.' },
        { kind: 'checklist', items: [
          'Registe a data, a taxa e a comissão em PDF/captura de ecrã.',
          'Verifique o nome do beneficiário e o IBAN: a devolução de uma transferência internacional pode demorar semanas.',
          'Para a caução de arrendamento, transfira para a conta bancária do senhorio/agência, não em numerário.',
          'Para a compra de um automóvel ou de um imóvel, discuta antecipadamente limites de transferências e origem dos fundos.',
          'Não divida pagamentos artificialmente para contornar verificações AML: isso pode causar um bloqueio.',
          'Guarde os comprovativos para o banco, IRS e eventual verificação da origem dos fundos.',
          'Se o dinheiro vier de um país fora da UE, conte com 1–3 dias úteis para questões de compliance do banco.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Câmbio online Revolut / Wise', amountEURMin: 0, amountEURMax: 15, note: 'A comissão depende do montante, do par de moedas, do plano, do método de pagamento e da hora da operação; o valor exacto é mostrado na aplicação antes da confirmação.' },
    { label: 'Banco comum em Portugal', amountEURMin: 30, amountEURMax: 50, note: 'Perda típica de 3–5% por cada 1 000 € devido ao spread e às comissões; verifique o preçário do banco.' },
    { label: 'Câmbio em local turístico', amountEURMin: 20, amountEURMax: 80, note: 'A perda em 1 000 € pode variar muito conforme o ponto e a moeda; o aeroporto costuma ficar mais perto do pior extremo.' },
    { label: 'DCC em ATM ou terminal', amountEURMin: 30, amountEURMax: 70, note: 'Referência de 3–7% de perdas em 1 000 € face ao pagamento na moeda local; escolha sempre local currency.' }
  ],
  sources: [
    { title: 'Banco de Portugal: informação para clientes bancários e de pagamentos', url: 'https://www.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Revolut Portugal: comissões, câmbio de moeda e tarifas dos planos', url: 'https://www.revolut.com/pt-PT/legal/fees/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Wise: comissões e taxa de câmbio', url: 'https://wise.com/pt/pricing/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal: alertas sobre Dynamic Currency Conversion e serviços de pagamento', url: 'https://clientebancario.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
