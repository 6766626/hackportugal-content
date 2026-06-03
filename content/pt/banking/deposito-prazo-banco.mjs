export default {
  editorialVoice: 'hackportugal',
  id: 'deposito-prazo-banco',
  categoryId: 'banking',
  title: 'Depósito a Prazo num banco português: taxas, impostos e protecção de 100 000 €',
  tldr: 'Depósito a Prazo (DP) — depósito a prazo num banco português: fixa um montante por 1–12+ meses e recebe TANB/TANL. Em abril de 2026, as melhores campanhas online no Banco Best, ActivoBank, Banco BiG e bancos semelhantes podem dar cerca de 3% ao ano “líquidos” após 28% de IRS, mas muitas vezes apenas para novos clientes/novo dinheiro. Compare em clientebancario.bportugal.pt, verifique a renovação automática e o limite do Fundo de Garantia de Depósitos: 100 000 € por depositante por banco.',
  tags: ['depósito', 'banco', 'fgd', 'juros'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-dp',
      title: 'O que é um Depósito a Prazo',
      content: [
        { kind: 'paragraph', text: 'Depósito a Prazo — depósito a prazo: você coloca dinheiro no banco por um período fixo, e o banco paga juros. Ao contrário da conta à ordem, o dinheiro fica formalmente “bloqueado” até à data de vencimento, embora muitos DP permitam mobilização antecipada com perda de parte ou da totalidade dos juros.' },
        { kind: 'checklist', items: [
          'TANB — taxa anual nominal bruta antes de imposto, por exemplo 4,00%',
          'TANL — taxa após retenção de IRS de 28%, por exemplo 4,00% TANB ≈ 2,88% TANL',
          'Prazo — duração do depósito: frequentemente 3, 6, 12 meses',
          'Montante mínimo — valor mínimo, por exemplo 500 €, 1 000 € ou 5 000 €',
          'Montante máximo — limite superior da campanha, por exemplo 50 000 € ou 100 000 €',
          'Mobilização antecipada — se é possível levantar antes do prazo e o que perde',
          'Renovação automática — se o depósito é renovado automaticamente',
          'Capitalização — se os juros são acrescentados ao montante do depósito ou pagos separadamente'
        ] },
        { kind: 'warning', text: 'Não compare depósitos apenas pela TANB publicitária. Veja a TANL, o prazo, o limite do montante, as condições de mobilização antecipada e de renovação. Um depósito a 4,00% por 3 meses não é “4% em 3 meses”, mas sim uma taxa anual aplicada proporcionalmente ao prazo.' }
      ]
    },
    {
      id: 'rates-2026',
      title: 'Que taxas são realistas em 2026',
      content: [
        { kind: 'paragraph', text: 'Em abril de 2026, o cenário normal é este: os grandes bancos costumam oferecer taxas fracas nos DP padrão, enquanto as melhores ofertas aparecem em bancos online e em promoções para novos clientes ou “novo dinheiro”. Banco Best, ActivoBank, Banco BiG e outros operadores online dão periodicamente ofertas que, depois de 28% de imposto, se aproximam de 3% ao ano líquidos, mas as condições mudam rapidamente.' },
        { kind: 'checklist', items: [
          'Uma taxa de 3,00% TANB depois de imposto dá cerca de 2,16% TANL',
          'Uma taxa de 3,50% TANB depois de imposto dá cerca de 2,52% TANL',
          'Uma taxa de 4,00% TANB depois de imposto dá cerca de 2,88% TANL',
          'Uma taxa de 4,20% TANB depois de imposto dá cerca de 3,02% TANL',
          'Para 10 000 € a 4,00% TANB durante 6 meses: bruto ≈ 200 €, imposto 28% ≈ 56 €, líquido ≈ 144 €',
          'Para 50 000 € a 4,00% TANB durante 12 meses: bruto ≈ 2 000 €, imposto ≈ 560 €, líquido ≈ 1 440 €',
          'As taxas promocionais exigem frequentemente a abertura de conta à ordem e podem aplicar-se apenas ao primeiro prazo'
        ] },
        { kind: 'warning', text: 'O banco pode mostrar uma taxa bonita “até X%”, mas a taxa real depende do montante, do prazo, do estatuto do cliente e da data de subscrição. Antes de transferir dinheiro, descarregue a FIN/Ficha de Informação Normalizada ou as condições do produto em PDF.' }
      ]
    },
    {
      id: 'where-compare',
      title: 'Onde comparar e como escolher um banco',
      content: [
        { kind: 'paragraph', text: 'O ponto oficial de comparação é o Comparador de Depósitos a Prazo no Portal do Cliente Bancário Banco de Portugal: clientebancario.bportugal.pt. É melhor do que artigos publicitários, porque permite filtrar por montante, prazo, TANB, possibilidade de mobilização antecipada e tipo de taxa.' },
        { kind: 'substeps', items: [
          { id: 'filter', title: '1. Filtre pelo seu montante e prazo', content: [
            { kind: 'paragraph', text: 'Introduza o montante, por exemplo 10 000 € ou 50 000 €, e o prazo: 3, 6 ou 12 meses. Assim elimina produtos em que o montante mínimo é superior ao seu ou em que a campanha não serve para o prazo pretendido.' }
          ] },
          { id: 'check-bank', title: '2. Verifique o banco e a cobertura da garantia', content: [
            { kind: 'paragraph', text: 'Se for um banco português, normalmente aplica-se o Fundo de Garantia de Depósitos. Se for uma sucursal de um banco de outro país da UE, a protecção pode vir do fundo de garantia do país de origem, e não do FGD de Portugal.' }
          ] },
          { id: 'read-fin', title: '3. Abra a FIN antes de subscrever', content: [
            { kind: 'paragraph', text: 'Na FIN, procure: TANB, TANL, prazo, renovação, mobilização antecipada, penalização de juros, montante mínimo/máximo, data de pagamento dos juros e comissões da conta à ordem associada.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Banco Best — muitas vezes forte em promoções online e produtos de investimento',
          'ActivoBank — cómodo para operações quotidianas de expat e banca móvel',
          'Banco BiG — muitas vezes compete em depósitos e brokerage',
          'Caixa Geral de Depósitos, Millennium bcp, Santander, Novobanco, BPI — cómodos como banco principal, mas as taxas dos DP nem sempre são as melhores',
          'Verifique não só o DP, mas também o custo da conta à ordem: a manutenção do cartão pode consumir parte da rentabilidade'
        ] }
      ]
    },
    {
      id: 'tax',
      title: 'Imposto sobre juros: 28% de IRS',
      content: [
        { kind: 'paragraph', text: 'Para pessoas singulares, os juros de depósitos bancários em Portugal estão normalmente sujeitos a retenção na fonte de 28%. O banco retém o imposto automaticamente no momento do pagamento dos juros. Por isso, um expat normalmente vê na conta já o montante líquido.' },
        { kind: 'checklist', items: [
          'Residente em Portugal: os juros entram no IRS como rendimentos de capitais, normalmente com retenção de 28%',
          'Pode optar pelo englobamento na declaração de IRS, mas nem sempre compensa: com uma taxa marginal elevada, pode ficar pior',
          'Não residente: o banco também pode reter imposto; a taxa e a aplicação de uma convenção para evitar a dupla tributação dependem da sua residência fiscal e dos documentos',
          'Se tiver um NIF com morada ou estatuto incorretos, o banco pode aplicar o regime fiscal errado',
          'Os juros de DP não são salário, não dão NISS e não criam direito a autorização de residência',
          'A rentabilidade na publicidade é quase sempre bruta/TANB, e não líquida/TANL'
        ] },
        { kind: 'warning', text: 'Se passou a ser residente fiscal em Portugal, actualize a morada fiscal nas Finanças e os dados no banco. Divergências entre morada/NIF/estatuto fiscal podem criar problemas com a troca CRS e com a declaração de IRS.' }
      ]
    },
    {
      id: 'guarantee',
      title: 'Protecção dos depósitos: Fundo de Garantia de Depósitos',
      content: [
        { kind: 'paragraph', text: 'O Fundo de Garantia de Depósitos (FGD) protege os depósitos elegíveis até 100 000 € por depositante por instituição de crédito. Este é o limite essencial: se tiver 150 000 € num banco, por regra ficam protegidos apenas 100 000 €. Se tiver uma conta conjunta de duas pessoas, o limite aplica-se a cada depositante — normalmente até 200 000 € para duas pessoas no mesmo banco.' },
        { kind: 'checklist', items: [
          'Limite: 100 000 € por depositante por banco',
          'Conta conjunta: a quota de cada pessoa é contabilizada separadamente, salvo prova em contrário',
          'Várias contas no mesmo banco são somadas para o limite de 100 000 €',
          'Marcas diferentes podem ser o mesmo banco — verifique a entidade jurídica',
          'Uma sucursal de um banco estrangeiro da UE pode estar coberta não pelo FGD, mas pelo fundo de outro país',
          'O FGD cobre depósitos, não investimentos, acções, obrigações, fundos de investimento ou produtos estruturados',
          'O pagamento da garantia na UE está orientado para um prazo curto; o FGD indica o procedimento em fgd.pt'
        ] },
        { kind: 'warning', text: 'Não mantenha mais de 100 000 € por pessoa num único banco se o objectivo for protecção máxima. Para 180 000 €, é mais seguro dividir entre dois bancos independentes, 90 000 € em cada, do que colocar tudo num só DP.' }
      ]
    },
    {
      id: 'renewal-traps',
      title: 'Armadilhas da renovação automática e da mobilização antecipada',
      content: [
        { kind: 'paragraph', text: 'O erro principal é abrir um bom DP promocional por 3 ou 6 meses e esquecer a data de fim. Após o vencimento, o banco pode renovar automaticamente o depósito já à taxa padrão, por exemplo em vez de 4,00% TANB colocar 0,50–1,00% TANB. O dinheiro continua “ocupado”, e a rentabilidade cai.' },
        { kind: 'checklist', items: [
          'Registe a data de vencimento no calendário 7–10 dias antes do fim',
          'Desactive a renovação automática, se o banco permitir',
          'Se a renovação automática não puder ser desactivada antecipadamente, informe-se sobre a janela para cancelar após a renovação',
          'Verifique se perde todos os juros em caso de mobilização antecipada',
          'Não coloque o fundo de emergência num DP sem mobilização parcial',
          'Verifique se existe comissão pela conta à ordem, cartão ou transferência de dinheiro para outro banco',
          'Guarde o PDF das condições e a confirmação da subscrição',
          'Após o pagamento dos juros, confira bruto, retenção 28% e líquido'
        ] },
        { kind: 'warning', text: 'Um DP não substitui uma reserva líquida. Para renda, caução, IMT/IMI, despesas médicas e mudança, mantenha parte do dinheiro numa conta à ordem ou num produto com acesso imediato.' }
      ]
    }
  ],
  costs: [
    { label: 'Imposto IRS sobre juros', amountEURMin: 0, amountEURMax: 0, note: 'Não é uma comissão fixa: normalmente são retidos 28% dos juros vencidos no momento do pagamento.' },
    { label: 'Garantia FGD', amountEUR: 100000, note: 'Limite de protecção dos depósitos: 100 000 € por depositante por banco, não é rentabilidade nem comissão.' }
  ],
  sources: [
    {
      title: 'Banco de Portugal — Comparador de Depósitos a Prazo',
      url: 'https://clientebancario.bportugal.pt/pt-pt/aplicacoes-de-depositos-a-prazo',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal do Cliente Bancário — informação sobre depósitos bancários',
      url: 'https://clientebancario.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Fundo de Garantia de Depósitos — limites e cobertura dos depósitos',
      url: 'https://www.fgd.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
