export default {
  editorialVoice: 'hackportugal',
  id: 'irs-anexo-g-mais-valias',
  categoryId: 'taxes',
  title: 'IRS Anexo G — imposto sobre mais-valias: apartamento, ações, fundos, crypto',
  tldr: 'O Anexo G é entregue juntamente com a Modelo 3 IRS se, durante o ano, tiver havido mais-valias tributáveis **de fonte portuguesa**: venda de imóveis em Portugal, ações/ETF/quotas através de um corretor PORTUGUÊS, crypto <365 dias. ⚠️ **Mais-valias de fontes ESTRANGEIRAS** (venda de imóveis no estrangeiro, ações/ETF/fundos através de corretor estrangeiro, etc.) para um residente fiscal em Portugal são declaradas no **Anexo J** (e não no Anexo G) — com cálculo para eliminação da dupla tributação. Para residentes fiscais em Portugal, a mais-valia imobiliária normalmente é incluída no IRS apenas em 50% e tributada à taxa progressiva; ações/ETF/fundos são mais frequentemente tributados autonomamente a 28%, mas pode escolher o englobamento. A venda da primeira habitação pode ficar isenta em caso de reinvestimento numa nova HPP nos 24 meses antes ou 36 meses depois da venda.',
  tags: ['irs', 'anexog', 'maisvalias', 'impostos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-anexo-g',
      title: 'Quando é necessário o Anexo G',
      content: [
        { kind: 'paragraph', text: 'O Anexo G é um anexo à Modelo 3 IRS para mais-valias de **fontes portuguesas** que não estejam automaticamente isentas. Entre abril e junho de 2026 entrega o IRS relativo aos rendimentos de 2025; as operações de 2026 entrarão na declaração de 2027. **Mais-valias de fontes estrangeiras** vão para o Anexo J.' },
        { kind: 'checklist', items: [
          'Anexo G: venda de imóveis em Portugal (ou de uma quota-parte deles).',
          'Anexo G: venda de ações/ETF/obrigações/unidades de participação/quotas/options portugueses através de um corretor PORTUGUÊS.',
          'Anexo G: venda de crypto-assets por residente, se o período de detenção for < 365 dias ou se o ativo não estiver abrangido por isenção.',
          'Anexo G: compensação por cessão de direitos, opção, cessão onerosa e operações semelhantes ao abrigo do Código do IRS art. 10.',
          '⚠️ **Anexo J** (não G): venda de IMÓVEIS NO ESTRANGEIRO por residente em Portugal.',
          '⚠️ **Anexo J** (não G): venda de ações/ETF/fundos através de corretor ESTRANGEIRO (Interactive Brokers, Schwab, Tinkoff, Trade Republic fora de PT, etc.).',
          '⚠️ **Anexo J** (não G): capital gain estrangeiro de qualquer tipo (dividendos e juros — também no Anexo J, mas noutras secções).',
          'Se é não residente, mas vendeu imóveis portugueses ou ativos portugueses: também Anexo G no IRS português.'
        ] },
        { kind: 'warning', text: 'O Anexo G/J não substitui a troca CRS/DAC7. As Finanças muitas vezes veem contas de corretoras estrangeiras, entradas bancárias e vendas através de notários. “Corretor no estrangeiro” não significa “não declarar”. Fontes estrangeiras — isto é Anexo J, com indicação do país da fonte e do imposto retido no estrangeiro, para eliminação da dupla tributação.' }
      ]
    },
    {
      id: 'real-estate',
      title: 'Imóveis: 50% da mais-valia no IRS',
      content: [
        { kind: 'paragraph', text: 'Para um residente fiscal em Portugal, a mais-valia tributável da venda de imóveis é normalmente calculada assim: preço de venda − valor de aquisição corrigido − despesas documentalmente comprovadas. Depois, 50% do resultado positivo é incluído no IRS. Esta metade soma-se aos restantes rendimentos e é tributada às taxas progressivas de IRS, e não a uma taxa fixa de 28%.' },
        { kind: 'checklist', items: [
          'Quadro 4 Anexo G: identificação do imóvel, data de compra, data de venda, valor de aquisição, valor de realização.',
          'Valor de aquisição — preço de compra constante da escritura, ou valor patrimonial tributário, se tiver sido superior e usado para IMT/IS.',
          'Se o imóvel tiver sido detido durante mais de 24 meses, o preço de compra é indexado pelo coeficiente de desvalorização da moeda, publicado anualmente.',
          'As despesas normalmente incluem IMT, Imposto do Selo na compra, notário, registo predial, comissão da agência na venda, certificado energético, obras de valorização comprovadas dos últimos 12 anos.',
          'IMI, condomínio, juros do crédito habitação e reparações correntes “para viver” normalmente não reduzem a mais-valia.',
          'Se o imóvel foi herdado, a data e o valor de aquisição seguem as regras sucessórias: normalmente o valor patrimonial tributário à data da transmissão/imposto do selo.',
          'Se houver vários vendedores, cada um declara a sua quota-parte e os seus montantes.'
        ] },
        { kind: 'warning', text: 'Guarde invoices com NIF, escritura, recibos, comprovativos de pagamento. Para obras de valorização sem factura com NIF, as Finanças muitas vezes não aceitam a despesa.' }
      ]
    },
    {
      id: 'hpp-reinvestment',
      title: 'Isenção: primeira habitação e reinvestimento',
      content: [
        { kind: 'paragraph', text: 'A mais-valia da venda de habitação própria e permanente (HPP, residência principal permanente) pode ficar total ou parcialmente isenta se reinvestir o valor de realização na compra, construção ou melhoria de outra HPP em Portugal, na UE ou no EEE com troca de informação fiscal.' },
        { kind: 'checklist', items: [
          'O novo imóvel deve tornar-se a sua habitação própria e permanente, e não Airbnb, second home ou imóvel de investimento.',
          'Prazo de reinvestimento: 24 meses antes da venda ou 36 meses depois da venda.',
          'No Anexo G Quadro 5 indica-se a intenção de reinvestir, os montantes já reinvestidos e o montante que pretende reinvestir.',
          'Se existia crédito habitação sobre a casa vendida, para o cálculo da isenção considera-se o valor de realização deduzido da amortização do empréstimo associado à HPP vendida.',
          'O reinvestimento parcial dá uma isenção parcial: nem toda a mais-valia desaparece.',
          'Se declarou a intenção, mas não reinvestiu dentro do prazo, terá de entregar uma declaração de substituição ou as Finanças liquidarão IRS adicional com juros compensatórios.',
          'Para pessoas com mais de 65 anos ou pensionistas existe um regime separado: reinvestimento num contrato de seguro, fundo de pensões ou PPR no prazo de 6 meses, cumprindo as condições do Código do IRS art. 10.'
        ] },
        { kind: 'warning', text: '“Primeira habitação” no sentido comum não equivale a uma isenção automática. Para o IRS, o que importa é o estatuto de HPP: residência permanente efetiva, morada nas Finanças, provas de residência e cumprimento dos prazos de reinvestimento.' }
      ]
    },
    {
      id: 'shares-funds-crypto',
      title: 'Ações, ETF, fundos e crypto: normalmente 28%',
      content: [
        { kind: 'paragraph', text: 'A venda de ações, ETF, obrigações, fundos e quotas é declarada no Anexo G, normalmente na secção de valores mobiliários. O saldo positivo do ano é frequentemente tributado à taxa autónoma de 28%. Pode escolher o englobamento — nesse caso, o ganho soma-se aos restantes rendimentos e é tributado às taxas progressivas de IRS; isto só é vantajoso com rendimento total baixo ou para deduzir perdas em anos futuros.' },
        { kind: 'checklist', items: [
          'Indique cada operação ou agregue segundo as regras permitidas pelas instruções da Modelo 3: data de compra, data de venda, ISIN/código, país, preço de compra, preço de venda, comissões.',
          'As comissões do corretor reduzem a mais-valia se estiverem relacionadas com a compra/venda e forem comprovadas por relatório.',
          'As perdas em securities podem ser compensadas contra mais-valias da mesma categoria; o reporte de perdas normalmente exige a escolha pelo englobamento.',
          'Para ativos detidos por menos de 365 dias, em contribuintes com rendimentos muito elevados pode aplicar-se englobamento obrigatório segundo as regras do Código do IRS.',
          'ETF e fundos em corretores estrangeiros não se tornam “invisíveis”: um residente fiscal em Portugal declara o resultado mundial.',
          'Crypto-assets: a mais-valia da venda de crypto que não sejam valores mobiliários é normalmente tributada a 28% se o período de detenção for inferior a 365 dias; com detenção de 365+ dias, as crypto comuns beneficiam de isenção, salvo exceções previstas na lei.',
          'A troca crypto-to-crypto nas regras portuguesas nem sempre é tratada como uma taxable disposal final da mesma forma que a troca de crypto por fiat; verifique o tipo de operação e o reporte da exchange.'
        ] },
        { kind: 'warning', text: 'Não confunda dividend/interest com capital gains. Dividendos e juros normalmente não vão para o Anexo G, mas sim para o Anexo E ou Anexo J, se a fonte for estrangeira.' }
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
              'Cálculo de IMT e Imposto do Selo na compra.',
              'Invoices com NIF do agente, notário, registo, obras de valorização.',
              'Declaração bancária de amortização do empréstimo na venda da HPP.',
              'Broker annual statement: trades, ISIN, datas, moedas, comissões.',
              'Taxas de câmbio para euro nas datas das operações, se o corretor estiver em USD/GBP/outra moeda.',
              'Dados de reinvestimento: CPCV, escritura da nova HPP, pagamentos, crédito habitação.'
            ] }
          ] },
          { id: 'fill-modelo3', title: '2. Preencha a Modelo 3 + Anexo G', content: [
            { kind: 'paragraph', text: 'No Portal das Finanças, abra IRS → Entregar Declaração Modelo 3. Adicione o Anexo G. Para rendimentos estrangeiros, por vezes também é necessário o Anexo J: por exemplo, se o corretor reteve imposto estrangeiro ou se o rendimento for classificado como rendimento financeiro estrangeiro.' }
          ] },
          { id: 'simulate', title: '3. Compare tributação autónoma e englobamento', content: [
            { kind: 'paragraph', text: 'Para valores mobiliários, o Portal permite simular a declaração. Verifique a opção sem englobamento e com englobamento. Com rendimento baixo, a taxa progressiva pode ser inferior a 28%; com rendimento médio e elevado, os 28% autónomos são muitas vezes mais vantajosos.' }
          ] },
          { id: 'submit', title: '4. Entregue e guarde os comprovativos', content: [
            { kind: 'paragraph', text: 'A declaração de IRS de 2025 é entregue de 1 de abril a 30 de junho de 2026. Depois do envio, guarde o comprovativo, a liquidação e todos os documentos durante pelo menos 4 anos; no caso de imóveis e reinvestimento, é melhor guardar durante mais tempo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes dos expats',
      content: [
        { kind: 'checklist', items: [
          'Declaram apenas o dinheiro transferido para Portugal, e não o próprio facto da venda do ativo. Para um residente, o que importa é a operação, não a transferência do dinheiro.',
          'Acham que os imóveis são sempre tributados a 28%. Para um residente, normalmente é tributado 50% da mais-valia segundo as taxas progressivas de IRS.',
          'Não declaram o reinvestimento da HPP no Quadro 5 no ano da venda e só se lembram 2 anos depois.',
          'Incluem nas despesas mobiliário, eletrodomésticos, condomínio e IMI — as Finanças podem excluir esses montantes.',
          'Não convertem operações em USD/GBP para euros à taxa correta.',
          'Misturam Anexo G, G1, E e J: ganhos isentos podem ir para o G1, dividendos — E/J, rendimentos financeiros estrangeiros — frequentemente J.',
          'Esquecem-se das perdas: se não forem declaradas, não ajudam a reduzir o imposto.',
          'Entregam como “casado separado” sem verificar: para um casal, a declaração conjunta ou separada pode alterar bastante o resultado final em capital gains.'
        ] },
        { kind: 'warning', text: 'Se o montante da operação for elevado — imóveis, stock options, venda de uma carteira de ETF — faça o cálculo antes de entregar a declaração. É possível corrigir o IRS, mas é mais barato prevenir juros e coimas do que discutir com a Autoridade Tributária.' }
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
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs10.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 43, Mais-valias: regras de determinação',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs43.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 72, taxas especiais e autónomas',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/ra/Pages/irs72ra_201901.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
