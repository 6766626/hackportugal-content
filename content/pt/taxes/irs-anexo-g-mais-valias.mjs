export default {
  editorialVoice: 'hackportugal',
  id: 'irs-anexo-g-mais-valias',
  categoryId: 'taxes',
  title: 'IRS Anexo G — imposto sobre mais-valias: apartamento, acções, fundos, crypto',
  tldr: 'O Anexo G é entregue juntamente com a Modelo 3 IRS se, durante o ano, tiver havido mais-valias tributáveis **de fonte portuguesa**: venda de imóveis em Portugal, acções/ETF/participações através de um corretor PORTUGUÊS, crypto <365 dias.\n\n⚠️ **Mais-valias de fontes ESTRANGEIRAS** (venda de imóveis no estrangeiro, acções/ETF/fundos através de corretor estrangeiro, etc.) para um residente fiscal em Portugal são declaradas no **Anexo J** (e não no Anexo G) — com cálculo para eliminação da dupla tributação. Para residentes fiscais em Portugal, a mais-valia imobiliária é normalmente incluída no IRS apenas em 50% e tributada à taxa progressiva; acções/ETF/fundos são mais frequentemente tributados autonomamente a 28%, mas é possível optar pelo englobamento. A venda da primeira habitação pode ficar isenta em caso de reinvestimento numa nova HPP nos 24 meses anteriores ou 36 meses posteriores à venda.',
  tags: ['irs', 'anexog', 'maisvalias', 'impostos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-anexo-g',
      title: 'Quando é necessário o Anexo G',
      content: [
        { kind: 'paragraph', text: 'O Anexo G é um anexo à Modelo 3 IRS para mais-valias de **fonte portuguesa** que não estejam automaticamente isentas. Entre Abril e Junho de 2026, entrega o IRS relativo aos rendimentos de 2025; as operações de 2026 entrarão na declaração de 2027. **Mais-valias de fontes estrangeiras** entram no Anexo J.' },
        { kind: 'checklist', items: [
          'Anexo G: venda de imóveis em Portugal (ou de uma quota-parte dos mesmos).',
          'Anexo G: venda de acções/ETF/obrigações/unidades de participação/quotas/options portuguesas através de um corretor PORTUGUÊS.',
          'Anexo G: venda de crypto-assets por residente, se o período de detenção for < 365 dias ou se o activo não estiver abrangido pela isenção.',
          'Anexo G: compensação por cessão de direitos, opção, cessão onerosa e operações semelhantes nos termos do Código do IRS art. 10.',
          '⚠️ **Anexo J** (não G): venda de IMÓVEL NO ESTRANGEIRO por residente em Portugal.',
          '⚠️ **Anexo J** (não G): venda de acções/ETF/fundos através de corretor ESTRANGEIRO (Interactive Brokers, Schwab, Tinkoff, Trade Republic fora de PT, etc.).',
          '⚠️ **Anexo J** (não G): capital gain estrangeiro de qualquer tipo (dividendos e juros — também no Anexo J, mas noutras secções).',
          'É não residente, mas vendeu imóvel português ou activos portugueses: também Anexo G no IRS português.'
        ] },
        { kind: 'warning', text: 'O Anexo G/J não substitui a troca de informação CRS/DAC7. As Finanças vêem frequentemente contas de corretoras estrangeiras, entradas bancárias e vendas através de notários. “Corretor no estrangeiro” não significa “não declarar”. Fontes estrangeiras — isto é Anexo J com indicação do país da fonte e do imposto retido no estrangeiro, para eliminação da dupla tributação.' }
      ]
    },
    {
      id: 'real-estate',
      title: 'Imóveis: 50% da mais-valia em IRS',
      content: [
        { kind: 'paragraph', text: 'Para um residente fiscal em Portugal, a mais-valia tributável da venda de imóveis é normalmente calculada assim: preço de venda − valor de aquisição corrigido − despesas documentalmente comprovadas. Depois, 50% do resultado positivo é incluído no IRS. Essa metade é somada aos restantes rendimentos e tributada às taxas progressivas de IRS, e não a uma taxa fixa de 28%.' },
        { kind: 'checklist', items: [
          'Quadro 4 Anexo G: identificação do imóvel, data de compra, data de venda, valor de aquisição, valor de realização.',
          'Valor de aquisição — preço de compra constante da escritura, ou valor patrimonial tributário, se este tiver sido superior e usado para IMT/IS.',
          'Se o imóvel tiver sido detido durante mais de 24 meses, o preço de compra é indexado pelo coeficiente de desvalorização da moeda, publicado anualmente.',
          'As despesas incluem normalmente IMT, Imposto do Selo na compra, notário, registo predial, comissão da agência imobiliária na venda, certificado energético, obras de valorização comprovadas dos últimos 12 anos.',
          'IMI, condomínio, juros do crédito habitação e reparações correntes “para viver” normalmente não reduzem a mais-valia.',
          'Se o imóvel tiver sido herdado, a data e o custo de aquisição seguem as regras sucessórias: normalmente o valor patrimonial tributário à data da transmissão/Imposto do Selo.',
          'Se houver vários vendedores, cada um declara a sua quota-parte e os seus valores.'
        ] },
        { kind: 'warning', text: 'Guarde invoices com NIF, escritura, recibos, comprovativos de pagamento. Para obras de valorização sem factura com NIF, as Finanças frequentemente não aceitam a despesa.' }
      ]
    },
    {
      id: 'hpp-reinvestment',
      title: 'Isenção: primeira habitação e reinvestimento',
      content: [
        { kind: 'paragraph', text: 'A mais-valia da venda de habitação própria e permanente (HPP, residência principal permanente) pode ficar total ou parcialmente isenta se reinvestir o valor de realização na compra, construção ou melhoria de outra HPP em Portugal, na UE ou no EEE com troca de informação fiscal.' },
        { kind: 'checklist', items: [
          'O novo imóvel deve passar a ser a sua habitação própria e permanente, e não Airbnb, second home ou um imóvel de investimento.',
          'Prazo de reinvestimento: 24 meses antes da venda ou 36 meses depois da venda.',
          'No Anexo G Quadro 5 indica-se a intenção de reinvestir, os montantes já reinvestidos e o montante que pretende reinvestir.',
          'Se existia crédito habitação sobre a casa vendida, para o cálculo da isenção considera-se o valor de realização deduzido da amortização do empréstimo associado à HPP vendida.',
          'O reinvestimento parcial dá isenção parcial: nem toda a mais-valia desaparece.',
          'Se declarou a intenção, mas não reinvestiu dentro do prazo, terá de entregar uma declaração de substituição ou as Finanças liquidarão IRS adicional com juros compensatórios.',
          'Para pessoas com mais de 65 anos ou reformados existe um regime separado: reinvestimento num contrato de seguro, fundo de pensões ou PPR no prazo de 6 meses, cumpridas as condições do Código do IRS art. 10.'
        ] },
        { kind: 'warning', text: '“Primeira habitação” no sentido comum não equivale a um benefício automático. Para efeitos de IRS, o que importa é o estatuto de HPP: residência permanente efectiva, morada nas Finanças, provas de residência e cumprimento dos prazos de reinvestimento.' }
      ]
    },
    {
      id: 'shares-funds-crypto',
      title: 'Acções, ETF, fundos e crypto: normalmente 28%',
      content: [
        { kind: 'paragraph', text: 'A venda de acções, ETF, obrigações, fundos e participações é declarada no Anexo G, normalmente na secção de valores mobiliários. O saldo positivo do ano é frequentemente tributado à taxa autónoma de 28%. Pode optar pelo englobamento — nesse caso, o ganho é somado aos restantes rendimentos e tributado às taxas progressivas de IRS; isto só é vantajoso com rendimento global baixo ou para reportar perdas para anos futuros.' },
        { kind: 'checklist', items: [
          'Indique cada operação ou agregue de acordo com as regras permitidas pelas instruções da Modelo 3: data de compra, data de venda, ISIN/código, país, preço de compra, preço de venda, comissões.',
          'As comissões do corretor reduzem a mais-valia se estiverem relacionadas com a compra/venda e forem comprovadas por extracto.',
          'As perdas em securities podem ser deduzidas a mais-valias da mesma categoria; o reporte de perdas normalmente exige a opção pelo englobamento.',
          'Para activos detidos por menos de 365 dias, em contribuintes com rendimentos muito elevados pode aplicar-se o englobamento obrigatório nos termos do Código do IRS.',
          'ETF e fundos em corretores estrangeiros não se tornam “invisíveis”: um residente fiscal em Portugal declara o resultado mundial.',
          'Crypto-assets: a mais-valia da venda de crypto que não sejam valores mobiliários é normalmente tributada a 28% se o período de detenção for inferior a 365 dias; com detenção de 365+ dias, a crypto comum beneficia de isenção, salvo excepções legais.',
          'A troca crypto-to-crypto nas regras portuguesas nem sempre é tratada como uma taxable disposal final da mesma forma que a troca de crypto por fiat; verifique o tipo de operação e a informação declarativa da bolsa.'
        ] },
        { kind: 'warning', text: 'Não confunda dividend/interest com capital gains. Dividendos e juros normalmente não entram no Anexo G, mas sim no Anexo E ou no Anexo J, se a fonte for estrangeira.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Como entregar no Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'collect-documents', title: '1. Reúna os documentos', content: [
            { kind: 'checklist', items: [
              'Escritura/contrato de compra e venda do imóvel.',
              'Caderneta predial e certidão permanente, se existirem.',
              'Cálculo de IMT e Imposto do Selo na compra.',
              'Invoices com NIF do agente, notário, registo, obras de valorização.',
              'Declaração bancária de amortização do crédito na venda da HPP.',
              'Broker annual statement: trades, ISIN, datas, moedas, comissões.',
              'Taxas de câmbio para euros nas datas das operações, se o corretor estiver em USD/GBP/outra moeda.',
              'Dados do reinvestimento: CPCV, escritura da nova HPP, pagamentos, crédito habitação.'
            ] }
          ] },
          { id: 'fill-modelo3', title: '2. Preencha a Modelo 3 + Anexo G', content: [
            { kind: 'paragraph', text: 'No Portal das Finanças, abra IRS → Entregar Declaração Modelo 3. Adicione o Anexo G. Para rendimentos estrangeiros, por vezes também é necessário o Anexo J: por exemplo, se o corretor reteve imposto estrangeiro ou se o rendimento for classificado como rendimento financeiro estrangeiro.' }
          ] },
          { id: 'simulate', title: '3. Compare tributação autónoma e englobamento', content: [
            { kind: 'paragraph', text: 'Para valores mobiliários, o Portal permite simular a declaração. Verifique a opção sem englobamento e com englobamento. Com rendimento baixo, a taxa progressiva pode ser inferior a 28%; com rendimento médio e elevado, os 28% autónomos são frequentemente mais vantajosos.' }
          ] },
          { id: 'submit', title: '4. Entregue e guarde os comprovativos', content: [
            { kind: 'paragraph', text: 'A declaração de IRS relativa a 2025 é entregue de 1 de Abril a 30 de Junho de 2026. Depois de submeter, guarde o comprovativo, a liquidação e todos os documentos durante pelo menos 4 anos; para imóveis e reinvestimento, é melhor guardar durante mais tempo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes de expats',
      content: [
        { kind: 'checklist', items: [
          'Declaram apenas o dinheiro transferido para Portugal, e não o próprio facto da venda do activo. Para um residente, o que importa é a operação, não a transferência do dinheiro.',
          'Assumem que os imóveis são sempre tributados a 28%. Para um residente, normalmente 50% da mais-valia é tributada segundo a escala progressiva de IRS.',
          'Não declaram o reinvestimento da HPP no Quadro 5 no ano da venda e só se lembram 2 anos depois.',
          'Incluem como despesas móveis, electrodomésticos, condomínio e IMI — as Finanças podem desconsiderar esses montantes.',
          'Não convertem operações em USD/GBP para euros à taxa correcta.',
          'Misturam Anexo G, G1, E e J: ganhos isentos podem ir para o G1, dividendos para E/J, rendimentos financeiros estrangeiros frequentemente para J.',
          'Esquecem-se das perdas: se não forem declaradas, não ajudarão a reduzir o imposto.',
          'Entregam como “casado separado” sem verificar: para um casal, a declaração conjunta ou separada pode alterar muito o resultado em capital gains.'
        ] },
        { kind: 'warning', text: 'Se o montante da operação for elevado — imóveis, stock options, venda de uma carteira de ETF — faça o cálculo antes de entregar a declaração. Corrigir o IRS é possível, mas é mais barato prevenir juros e coimas do que discutir com a Autoridade Tributária.' }
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
