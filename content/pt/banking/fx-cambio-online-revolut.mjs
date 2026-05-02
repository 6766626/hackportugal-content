export default {
  editorialVoice: 'hackportugal',
  id: 'fx-cambio-online-revolut',
  categoryId: 'banking',
  title: 'Câmbio de moeda em Portugal: Revolut, Wise e câmbio no centro de Lisboa',
  tldr: 'Para €→USD/GBP e o inverso, em 2026 quase sempre compensa mais usar Revolut ou Wise: a taxa aproxima-se do mid-market e a comissão é visível antes da confirmação. Os bancos em Portugal costumam ser 3–5% piores devido ao spread e às comissões, sobretudo para numerário. Para trocar numerário, é melhor evitar o aeroporto e usar um câmbio licenciado no centro de Lisboa, por exemplo na zona da Baixa/Chiado, comparando a taxa de compra/venda. Nos ATM, escolha sempre pagar na moeda local, sem DCC.',
  tags: ['câmbio', 'revolut', 'wise', 'câmbio', 'bancos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'best-default',
      title: 'Regra de base: online é melhor do que trocar numerário',
      content: [
        { kind: 'paragraph', text: 'Se precisa de trocar euros por USD, GBP, CHF, PLN ou outra moeda principal, veja primeiro a Revolut e a Wise. Mostram a taxa e a comissão antes da operação, e o resultado costuma ficar mais próximo do mid-market interbancário do que num banco português ou num câmbio turístico.' },
        { kind: 'checklist', items: [
          'Para uma viagem de Portugal para os EUA/UK: converta €→USD/GBP na Revolut ou Wise e pague com cartão.',
          'Para receber salário ou uma transferência do estrangeiro: a Wise é frequentemente prática para dados bancários internacionais e comissão transparente.',
          'Para despesas diárias em Portugal, mantenha a moeda principal em €.',
          'Para montantes elevados, compare o valor final depois de todas as comissões, não apenas a taxa de câmbio.',
          'Para numerário, use um câmbio apenas se precisar mesmo de notas.',
          'Não troque no aeroporto de Lisboa/Porto, excepto uma quantia de emergência para táxi/metro.',
          'Num ATM no estrangeiro, recuse a conversão pelo operador do ATM: escolha “charge in local currency”.'
        ] }
      ]
    },
    {
      id: 'revolut-wise',
      title: 'Revolut e Wise: como não pagar a mais',
      content: [
        { kind: 'paragraph', text: 'A Revolut é prática para câmbios rápidos dentro da aplicação e para pagar com cartão em viagens. A Wise destaca-se nas transferências internacionais e na decomposição clara: taxa, comissão, montante para o destinatário. Em ambos os casos, não confie na palavra “free”: veja o ecrã final antes de confirmar.' },
        { kind: 'checklist', items: [
          'Compare “you pay” e “recipient gets”, não a taxa promocional.',
          'Verifique o limite de câmbio gratuito no seu plano Revolut: nos planos standard, depois do limite pode existir uma margem adicional.',
          'Tenha em conta fins de semana e horas em que o mercado está fechado: alguns serviços acrescentam um markup para se protegerem de movimentos cambiais.',
          'Na Wise, a comissão depende do par de moedas, do método de pagamento e do montante; a transferência bancária costuma ser mais barata do que o pagamento por cartão.',
          'Para €→USD/GBP, a diferença entre Revolut/Wise e um banco tradicional muitas vezes já é visível em 500–1 000 €.',
          'Não mantenha grandes montantes numa fintech sem necessidade: para guardar dinheiro a longo prazo, use um banco com uma estratégia de segurança completa.',
          'Active notificações push, limites dos cartões e virtual cards descartáveis para compras online.'
        ] },
        { kind: 'warning', text: 'A Revolut e a Wise não são uma “agência bancária portuguesa” no sentido quotidiano. Para IRS, arrendamento, salário e débito directo em Portugal, por vezes é mais conveniente ter um PT IBAN num banco local, mesmo que faça o câmbio através de fintech.' }
      ]
    },
    {
      id: 'cash-lisbon',
      title: 'Numerário em Lisboa: câmbio no centro, não no aeroporto',
      content: [
        { kind: 'paragraph', text: 'Se precisa de numerário em USD/GBP/BRL ou de vender notas estrangeiras por €, procure um balcão de câmbio licenciado no centro de Lisboa: Baixa, Rossio, Restauradores, Chiado, Avenida da Liberdade. “Exchange Comércio Lisboa” e casas de câmbio semelhantes no centro turístico podem ser uma opção aceitável se a taxa estiver exposta de forma transparente e não houver comissão escondida.' },
        { kind: 'checklist', items: [
          'Fotografe ou anote a taxa “we buy” e “we sell” antes da troca.',
          'Pergunte directamente: “Há comissão?” — se existe uma comissão separada.',
          'Compare pelo menos 2–3 locais num raio de 10 minutos a pé.',
          'Verifique que a taxa no painel corresponde exactamente à sua moeda e ao seu montante.',
          'Não entregue o passaporte/autorização de residência por muito tempo; em operações grandes, a identificação é normal, mas o documento deve ser devolvido de imediato.',
          'Conte as notas ao balcão antes de sair.',
          'Guarde o recibo/comprovativo da troca.',
          'Não troque com pessoas na rua, mesmo que a taxa seja melhor.'
        ] },
        { kind: 'warning', text: 'Os bureau de change nos aeroportos são quase sempre uma má opção: spread largo, margem turística, fraca posição negocial. Se chegou sem euros, levante uma pequena quantia num Multibanco sem DCC ou troque apenas o mínimo até chegar à cidade.' }
      ]
    },
    {
      id: 'banks-atm-dcc',
      title: 'Bancos e ATM: onde se perdem 3–5%',
      content: [
        { kind: 'paragraph', text: 'Os bancos tradicionais em Portugal são convenientes para salário, crédito habitação, IMI/IRS e Multibanco, mas não para FX. No câmbio de numerário e nas operações com cartão em moeda estrangeira, o banco pode ganhar com o spread, a comissão por operação internacional e a taxa do sistema de pagamentos.' },
        { kind: 'checklist', items: [
          'Não troque montantes elevados numa agência bancária sem comparar com Wise/Revolut.',
          'Se pagar com um cartão português fora da zona euro, verifique a comissão de serviço internacional no preçário do banco.',
          'Num ATM, escolha “sem conversão” ou “debit in local currency”.',
          'Recuse Dynamic Currency Conversion se o ecrã propuser debitar logo em € a uma “guaranteed rate”.',
          'Para cartões em USD/GBP, mantenha previamente saldo nessa moeda, se o serviço o permitir.',
          'Verifique os limites de levantamento de numerário e a comissão do ATM separadamente da comissão do seu cartão.',
          'Para transferências grandes para Portugal, faça primeiro um teste de 10–50 €.'
        ] },
        { kind: 'warning', text: 'O DCC parece conveniente porque mostra o montante em euros, mas a taxa costuma ser pior. O Banco de Portugal alerta regularmente: o consumidor deve ver a taxa, as comissões e o montante final, mas a vantagem continua a ter de ser verificada por si.' }
      ]
    },
    {
      id: 'large-amounts',
      title: 'Montantes elevados: arrendamento, depósito, compra de carro',
      content: [
        { kind: 'paragraph', text: 'Para 5 000–50 000 €, uma diferença de 1% já representa 50–500 €. Não faça um câmbio grande “num clique” sem comparar. Obtenha uma cotação na Wise, Revolut, no seu banco e, se necessário, junto de um fornecedor especializado em FX.' },
        { kind: 'checklist', items: [
          'Registe a data, a taxa e a comissão em PDF/captura de ecrã.',
          'Verifique o nome do destinatário e o IBAN: a devolução de uma transferência internacional pode demorar semanas.',
          'Para o depósito de arrendamento, transfira para a conta bancária do senhorio/agência, não em numerário.',
          'Para a compra de automóvel ou imóvel, discuta antecipadamente os limites de transferência e a origem dos fundos.',
          'Não divida pagamentos artificialmente para contornar verificações AML: isso pode provocar um bloqueio.',
          'Guarde comprovativos para o banco, IRS e eventual verificação da origem dos fundos.',
          'Se o dinheiro vier de um país fora da UE, conte com 1–3 dias úteis para questões de compliance do banco.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Câmbio online Revolut / Wise', amountEURMin: 0, amountEURMax: 15, note: 'A comissão depende do montante, do par de moedas, do plano, do método de pagamento e da hora da operação; o valor exacto é mostrado na aplicação antes da confirmação.' },
    { label: 'Banco tradicional em Portugal', amountEURMin: 30, amountEURMax: 50, note: 'Perda típica de 3–5% por cada 1 000 € devido a spread e comissões; verifique o preçário do banco.' },
    { label: 'Câmbio em zona turística', amountEURMin: 20, amountEURMax: 80, note: 'A perda em 1 000 € pode variar muito consoante o local e a moeda; o aeroporto costuma ficar mais perto do pior extremo.' },
    { label: 'DCC em ATM ou terminal', amountEURMin: 30, amountEURMax: 70, note: 'Referência de 3–7% de perdas em 1 000 € em comparação com pagar na moeda local; escolha sempre local currency.' }
  ],
  sources: [
    { title: 'Banco de Portugal: informação para clientes bancários e pagamentos', url: 'https://www.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Revolut Portugal: comissões, câmbio de moeda e preçários dos planos', url: 'https://www.revolut.com/pt-PT/legal/fees/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Wise: comissões e taxa de câmbio', url: 'https://wise.com/pt/pricing/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal: alertas sobre Dynamic Currency Conversion e serviços de pagamento', url: 'https://clientebancario.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
