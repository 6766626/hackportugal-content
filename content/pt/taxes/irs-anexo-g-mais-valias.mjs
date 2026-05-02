export default {
  editorialVoice: 'hackportugal',
  id: 'irs-anexo-g-mais-valias',
  categoryId: 'taxes',
  title: 'IRS Anexo G — imposto sobre mais-valias: apartamento, ações, fundos, crypto',
  tldr: 'O Anexo G é entregue juntamente com a Modelo 3 IRS se, durante o ano, tiver havido mais-valias tributáveis: venda de imóveis, ações, ETF, participações, crypto <365 dias. Para residentes fiscais em Portugal, a mais-valia imobiliária é normalmente incluída no IRS apenas em 50% e tributada às taxas progressivas; ações/ETF/fundos são mais frequentemente tributados autonomamente a 28%, mas pode optar pelo englobamento. A venda da primeira habitação pode ficar isenta se houver reinvestimento numa nova HPP nos 24 meses antes ou 36 meses depois da venda.',
  tags: ['irs', 'anexog', 'mais-valias', 'impostos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-anexo-g',
      title: 'Quando é necessário o Anexo G',
      content: [
        { kind: 'paragraph', text: 'O Anexo G é um anexo da declaração Modelo 3 IRS para mais-valias que não estão automaticamente isentas. Em abril–junho de 2026 entrega o IRS relativo aos rendimentos de 2025; as operações de 2026 entram na declaração de 2027.' },
        { kind: 'checklist', items: [
          'Vendeu um apartamento, casa, terreno ou quota-parte de um imóvel em Portugal ou no estrangeiro.',
          'Vendeu ações, ETF, obrigações, unidades de participação de fundos, participações em sociedades, options/futures ou outros valores mobiliários.',
          'Vendeu crypto-assets, se o período de detenção tiver sido inferior a 365 dias ou se o ativo não estiver abrangido pela isenção.',
          'Recebeu uma compensação por cedência de direitos, opção, cessão onerosa ou operação semelhante indicada no Código do IRS art. 10.',
          'É residente fiscal em Portugal: declara-se o rendimento mundial, incluindo operações através de corretor estrangeiro.',
          'É não residente, mas vendeu imóveis portugueses ou ativos portugueses: também pode ter de entregar declaração de IRS em Portugal.'
        ] },
        { kind: 'warning', text: 'O Anexo G não substitui a troca de informação CRS/DAC7. As Finanças veem frequentemente contas de corretagem estrangeiras, entradas bancárias e vendas através de notários. “Corretor no estrangeiro” não significa “não declarar”.' }
      ]
    },
    {
      id: 'real-estate',
      title: 'Imóveis: 50% da mais-valia no IRS',
      content: [
        { kind: 'paragraph', text: 'Para um residente fiscal em Portugal, a mais-valia tributável da venda de imóveis é normalmente calculada assim: preço de venda − valor de aquisição corrigido − despesas documentadas. Depois, 50% do resultado positivo é incluído no IRS. Essa metade é somada aos restantes rendimentos e tributada às taxas progressivas de IRS, e não a uma taxa fixa de 28%.' },
        { kind: 'checklist', items: [
          'Quadro 4 Anexo G: identificação do imóvel, data de compra, data de venda, valor de aquisição, valor de realização.',
          'Valor de aquisição — preço de compra constante da escritura, ou o valor patrimonial tributário, se este tiver sido superior e usado para IMT/IS.',
          'Se o imóvel tiver sido detido por mais de 24 meses, o preço de compra é indexado pelo coeficiente de desvalorização da moeda, publicado anualmente.',
          'As despesas incluem normalmente IMT, Imposto do Selo na compra, notário, registo predial, comissão da imobiliária na venda, certificado energético, obras de valorização comprovadas dos últimos 12 anos.',
          'IMI, condomínio, juros do crédito habitação e reparações correntes “para viver” normalmente não reduzem a mais-valia.',
          'Se o imóvel foi herdado, a data e o valor de aquisição seguem as regras da herança: normalmente o valor patrimonial tributário à data da transmissão/imposto do selo.',
          'Se houver vários vendedores, cada um declara a sua quota-parte e os seus montantes.'
        ] },
        { kind: 'warning', text: 'Guarde invoices com NIF, escritura, recibos, comprovativos de pagamento. Para obras de valorização sem factura com NIF, as Finanças frequentemente não aceitam a despesa.' }
      ]
    },
    {
      id: 'hpp-reinvestment',
      title: 'Isenção: primeira habitação e reinvestimento',
      content: [
        { kind: 'paragraph', text: 'A mais-valia da venda de habitação própria e permanente (HPP, habitação principal permanente) pode ficar total ou parcialmente isenta se reinvestir o produto da venda na compra, construção ou melhoramento de outra HPP em Portugal, na EU ou no EEE com troca de informação fiscal.' },
        { kind: 'checklist', items: [
          'O novo imóvel deve tornar-se a sua habitação própria e permanente, e não Airbnb, second home ou imóvel de investimento.',
          'Prazo de reinvestimento: 24 meses antes da venda ou 36 meses depois da venda.',
          'No Anexo G Quadro 5 indica-se a intenção de reinvestir, os montantes já reinvestidos e o montante que pretende reinvestir.',
          'Se existia crédito habitação sobre a casa vendida, para o cálculo da isenção considera-se o valor de realização deduzido da amortização do empréstimo associado à HPP vendida.',
          'O reinvestimento parcial dá direito a isenção parcial: nem toda a mais-valia desaparece.',
          'Se declarou a intenção, mas não reinvestiu dentro do prazo, terá de entregar uma declaração de substituição ou as Finanças liquidarão IRS adicional com juros compensatórios.',
          'Para pessoas com mais de 65 anos ou pensionistas existe um regime separado: reinvestimento num contrato de seguro, fundo de pensões ou PPR no prazo de 6 meses, cumprindo as condições do Código do IRS art. 10.'
        ] },
        { kind: 'warning', text: '“Primeira habitação” no sentido comum não equivale a benefício automático. Para IRS, o que importa é o estatuto de HPP: residência permanente efetiva, morada nas Finanças, provas de residência e cumprimento dos prazos de reinvestimento.' }
      ]
    },
    {
      id: 'shares-funds-crypto',
      title: 'Ações, ETF, fundos e crypto: normalmente 28%',
      content: [
        { kind: 'paragraph', text: 'A venda de ações, ETF, obrigações, fundos e participações é declarada no Anexo G, normalmente na secção de valores mobiliários. O saldo positivo do ano é frequentemente tributado à taxa autónoma de 28%. Pode optar pelo englobamento — nesse caso, o lucro é somado aos restantes rendimentos e tributado às taxas progressivas de IRS; isto só compensa com rendimento global baixo ou para deduzir perdas em anos futuros.' },
        { kind: 'checklist', items: [
          'Indique cada operação ou agregue de acordo com as regras permitidas pelas instruções da Modelo 3: data de compra, data de venda, ISIN/código, país, preço de compra, preço de venda, comissões.',
          'As comissões do corretor reduzem a mais-valia, se estiverem relacionadas com a compra/venda e forem comprovadas por relatório.',
          'As perdas em securities podem ser deduzidas contra mais-valias da mesma categoria; o reporte de perdas normalmente exige a opção pelo englobamento.',
          'Para ativos detidos por menos de 365 dias, pode aplicar-se englobamento obrigatório a contribuintes com rendimentos muito elevados, segundo as regras do Código do IRS.',
          'ETF e fundos junto de corretores estrangeiros não se tornam “invisíveis”: um residente fiscal em Portugal declara o resultado mundial.',
          'Crypto-assets: a mais-valia da venda de crypto que não sejam valores mobiliários é normalmente tributada a 28%, se o período de detenção for inferior a 365 dias; com detenção de 365+ dias, aplica-se isenção às crypto comuns, salvo exceções previstas na lei.',
          'A troca crypto-to-crypto nas regras portuguesas nem sempre é tratada como uma taxable disposal final da mesma forma que a troca de crypto por fiat; verifique o tipo de operação e o reporte da exchange.'
        ] },
        { kind: 'warning', text: 'Não confunda dividend/interest com capital gains. Dividendos e juros normalmente não entram no Anexo G, mas sim no Anexo E ou Anexo J, se a fonte for estrangeira.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Como entregar no Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'collect-documents', title: '1. Reúna os documentos', content: [
            { kind: 'checklist', items: [
              'Escritura/contrato de compra e venda de imóveis.',
              'Caderneta predial e certidão permanente, se existirem.',
              'Cálculo do IMT e do Imposto do Selo na compra.',
              'Invoices com NIF relativas a agente imobiliário, notário, registo, obras de valorização.',
              'Declaração bancária de amortização do crédito na venda da HPP.',
              'Broker annual statement: trades, ISIN, datas, moedas, comissões.',
              'Taxas de câmbio para euro nas datas das operações, se o corretor estiver em USD/GBP/outra moeda.',
              'Dados sobre o reinvestimento: CPCV, escritura da nova HPP, pagamentos, crédito habitação.'
            ] }
          ] },
          { id: 'fill-modelo3', title: '2. Preencha a Modelo 3 + Anexo G', content: [
            { kind: 'paragraph', text: 'No Portal das Finanças abra IRS → Entregar Declaração Modelo 3. Adicione o Anexo G. Para rendimentos estrangeiros, por vezes também é necessário o Anexo J: por exemplo, se o corretor reteve imposto estrangeiro ou se o rendimento for classificado como rendimento financeiro estrangeiro.' }
          ] },
          { id: 'simulate', title: '3. Compare tributação autónoma e englobamento', content: [
            { kind: 'paragraph', text: 'Para valores mobiliários, o Portal permite simular a declaração. Verifique a opção sem englobamento e com englobamento. Com rendimento baixo, a taxa progressiva pode ser inferior a 28%; com rendimento médio e elevado, a taxa autónoma de 28% é frequentemente mais vantajosa.' }
          ] },
          { id: 'submit', title: '4. Entregue e guarde os comprovativos', content: [
            { kind: 'paragraph', text: 'A declaração de IRS de 2025 é entregue de 1 de abril a 30 de junho de 2026. Depois de submeter, guarde o comprovativo, a liquidação e todos os documentos durante pelo menos 4 anos; no caso de imóveis e reinvestimento, é melhor guardar por mais tempo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes dos expatriados',
      content: [
        { kind: 'checklist', items: [
          'Declaram apenas o dinheiro transferido para Portugal, e não o facto de terem vendido o ativo. Para um residente, o que importa é a operação, não a transferência do dinheiro.',
          'Assumem que os imóveis são sempre tributados a 28%. Para um residente, normalmente 50% da mais-valia é tributada pela tabela progressiva de IRS.',
          'Não declaram o reinvestimento da HPP no Quadro 5 no ano da venda e só se lembram 2 anos depois.',
          'Incluem como despesas mobiliário, eletrodomésticos, condomínio e IMI — as Finanças podem desconsiderar esses montantes.',
          'Não convertem operações em USD/GBP para euro à taxa correta.',
          'Misturam Anexo G, G1, E e J: gains isentos podem ir para o G1, dividendos — E/J, rendimentos financeiros estrangeiros — frequentemente J.',
          'Esquecem-se das perdas: se não forem declaradas, não ajudarão a reduzir o imposto.',
          'Entregam como “casado separado” sem verificar: para um casal, a declaração conjunta ou separada pode alterar muito o resultado relativo a capital gains.'
        ] },
        { kind: 'warning', text: 'Se o montante da operação for elevado — imóvel, stock options, venda de carteira de ETF — faça o cálculo antes de entregar a declaração. É possível corrigir o IRS, mas é mais barato prevenir juros e coimas do que discutir com a Autoridade Tributária.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, modelos e instruções da declaração Modelo 3',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/irs/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 10, Mais-valias',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs/Pages/irs10.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 43, Mais-valias: regras de determinação',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs/Pages/irs43.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 72, taxas especiais e autónomas',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs/Pages/irs72.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
