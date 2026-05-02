export default {
  editorialVoice: 'hackportugal',
  id: 'imt-stamp-duty-buy',
  categoryId: 'housing_buy',
  title: 'IMT e Imposto do Selo na compra de imóveis',
  tldr: 'Ao comprar um imóvel em Portugal, o comprador paga IMT e Imposto do Selo antes da escritura. A base é o maior valor entre o preço da transacção e o VPT da caderneta predial. Para habitação própria e permanente no Continente, em 2026 aplica-se uma tabela progressiva de IMT: 0% até 104 261 €, depois 2–8%, com taxas autónomas de 6% e 7,5% para imóveis de valor elevado. O Imposto do Selo sobre a compra é 0,8%. Para jovens até 35 anos na primeira compra de habitação permanente, existe isenção até 324 058 € e benefício parcial até 648 022 €.',
  tags: ['imt', 'selo', 'escritura', 'imóveis'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-pay',
      title: 'O que o comprador paga exactamente',
      content: [
        { kind: 'paragraph', text: 'IMT — Imposto Municipal sobre as Transmissões Onerosas de Imóveis, imposto sobre a transmissão de imóveis. Imposto do Selo — imposto de selo. Ambos são normalmente pagos antes da assinatura da escritura ou documento particular autenticado; caso contrário, o notário/solicitador não conclui a transacção.' },
        { kind: 'checklist', items: [
          'O IMT é pago pelo comprador, não pelo vendedor.',
          'O Imposto do Selo sobre a compra é 0,8% da base tributável.',
          'A base tributável é o maior de dois valores: o preço no contrato ou o VPT da caderneta predial.',
          'Para crédito habitação existe um Imposto do Selo separado: normalmente 0,6% do montante do crédito quando o prazo é de 5+ anos.',
          'As comissões bancárias do crédito estão ainda sujeitas a Imposto do Selo de 4%.',
          'O pagamento é feito por guia/DUC, normalmente através de Multibanco, homebanking ou no Portal das Finanças.',
          'O comprovativo de pagamento deve ser levado para a escritura.',
          'Se a transacção falhar depois do pagamento, o reembolso é possível, mas é um procedimento separado junto das Finanças.'
        ] },
        { kind: 'warning', text: 'Não calcule o imposto apenas sobre o preço no CPCV. Se o VPT for superior ao preço da transacção, as Finanças cobram IMT e Selo sobre o VPT. Isto surge frequentemente em vendas intrafamiliares por preço baixo ou em imóveis antigos com reavaliação.' }
      ]
    },
    {
      id: 'imt-rates-mainland',
      title: 'Taxas de IMT para habitação no Continente',
      content: [
        { kind: 'paragraph', text: 'Para habitação urbana, as taxas dependem da finalidade: habitação própria e permanente — residência principal do comprador; habitação secundária ou arrendamento — segunda habitação, investimento ou arrendamento. Na Madeira e nos Açores aplicam-se tabelas regionais.' },
        { kind: 'paragraph', text: 'Para habitação própria e permanente no Continente, a tabela actual das Finanças utiliza estes escalões: até 104 261 € — 0%; 104 261–142 618 € — 2% menos parcela a abater de 2 085,22 €; 142 618–194 458 € — 5% menos 6 363,76 €; 194 458–324 058 € — 7% menos 10 252,92 €; 324 058–648 022 € — 8% menos 13 493,50 €; 648 022–1 128 287 € — taxa única de 6%; acima de 1 128 287 € — taxa única de 7,5%.' },
        { kind: 'checklist', items: [
          'Habitação própria e permanente até 104 261 € no Continente: IMT = 0 €, mas o Selo de 0,8% mantém-se, salvo benefício específico.',
          'Habitação própria e permanente de 250 000 €: IMT = 250 000 × 7% − 10 252,92 € = 7 247,08 €.',
          'Habitação própria e permanente de 350 000 €: IMT = 350 000 × 8% − 13 493,50 € = 14 506,50 €.',
          'Segunda habitação/investimento é normalmente tributado desde o primeiro euro: não existe zona de taxa zero como para habitação própria e permanente.',
          'Prédio rústico: taxa de IMT de 5%.',
          'Outros urban properties não destinados a habitação: taxa de IMT de 6,5%.',
          'Um comprador ligado a uma jurisdição da lista de paraísos fiscais pode ficar sujeito a uma taxa de IMT de 10%.',
          'Se comprar uma quota-parte, o imposto é calculado segundo as regras da transacção e o valor da quota transmitida, mas o notário continua a verificar o VPT.'
        ] }
      ]
    },
    {
      id: 'jovem-exemption',
      title: 'Benefício para jovens compradores até 35 anos',
      content: [
        { kind: 'paragraph', text: 'Desde 2024 vigora um regime para jovens até 35 anos na primeira compra de habitação própria e permanente. Em 2026, o limiar prático de isenção total está ligado ao 4.º escalão de IMT: até 324 058 €. O benefício abrange o IMT e o Imposto do Selo sobre a compra.' },
        { kind: 'checklist', items: [
          'O comprador não pode ter mais de 35 anos à data da escritura.',
          'O imóvel deve destinar-se a habitação própria e permanente, não a arrendamento nem a segunda habitação.',
          'O comprador não deve ser proprietário de imóvel habitacional à data da transacção nem nos 3 anos anteriores.',
          'Até 324 058 €: IMT = 0 € e Selo sobre a compra = 0 €.',
          'De 324 058 € a 648 022 €: o benefício é parcial; o imposto é pago apenas sobre a parte não protegida, segundo a mecânica das Finanças.',
          'Acima de 648 022 €: o benefício não se aplica.',
          'Se comprarem duas pessoas e apenas uma cumprir as condições, o benefício aplica-se apenas à respectiva quota.',
          'Após a compra, a habitação deve ser usada como residência principal; a alteração da finalidade pode levar à perda do benefício e ao pagamento adicional de imposto.'
        ] },
        { kind: 'paragraph', text: 'Exemplo: apartamento para habitação própria e permanente por 350 000 €. O IMT normal é 14 506,50 € e o Selo é 2 800 €. Para um comprador até 35 anos na primeira compra, o valor a pagar fica, a título indicativo, em cerca de 2 075,36 € de IMT e cerca de 207,54 € de Selo, porque o benefício cobre a parte até 324 058 €.' },
        { kind: 'warning', text: 'Antes do CPCV, confirme o benefício com um solicitador/advogado e nas Finanças. Um erro no estatuto de “primeira habitação” é normalmente detectado mesmo antes da escritura, quando já não há tempo para reestruturar a transacção.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'Como é feito o pagamento antes da escritura',
      content: [
        { kind: 'paragraph', text: 'Na prática, o cálculo é feito pelo notário, advogado, solicitador, Casa Pronta ou banco. Mas a responsabilidade pela correcção e pelo pagamento cabe ao comprador. Sem comprovativo de pagamento, a transacção não avança.' },
        { kind: 'substeps', items: [
          { id: 'collect-data', title: '1. Reúna os dados do imóvel', content: [
            { kind: 'checklist', items: [
              'Caderneta predial com VPT.',
              'Certidão permanente do registo predial.',
              'Preço de compra do CPCV ou do projecto da escritura.',
              'Finalidade: própria e permanente ou secundária/investimento.',
              'Quotas dos compradores, se comprarem várias pessoas.',
              'Idade e condições para o benefício jovem, se aplicável.'
            ] }
          ] },
          { id: 'issue-guides', title: '2. Emita as guias de pagamento', content: [
            { kind: 'paragraph', text: 'As guias de IMT e Imposto do Selo podem ser emitidas através do Portal das Finanças ou por intermédio do profissional que acompanha a transacção. A guia terá a referência para pagamento e o prazo.' }
          ] },
          { id: 'pay-before-deed', title: '3. Pague antes da assinatura', content: [
            { kind: 'checklist', items: [
              'Pague o IMT e o Selo antes da escritura, não depois.',
              'Guarde os comprovativos em PDF.',
              'Verifique se o NIF do comprador está correcto.',
              'Verifique se a matriz/VPT do imóvel coincidem com os documentos.',
              'Entregue os comprovativos ao notário ou solicitador.',
              'Se houver crédito habitação, confirme separadamente o Selo sobre o crédito e as comissões do banco.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'budgeting',
      title: 'Como prever o orçamento da transacção',
      content: [
        { kind: 'paragraph', text: 'IMT e Selo não são os únicos custos. Para um orçamento seguro, inclua impostos, despesas notariais, registo, comissões bancárias e avaliação do imóvel. Com crédito habitação, o banco cobra muitas vezes parte das despesas ainda antes da escritura.' },
        { kind: 'checklist', items: [
          'Para habitação própria e permanente de 200 000 €: IMT cerca de 3 747,08 €, Selo 1 600 €.',
          'Para habitação própria e permanente de 300 000 €: IMT cerca de 10 747,08 €, Selo 2 400 €.',
          'Para habitação própria e permanente de 500 000 €: IMT cerca de 26 506,50 €, Selo 4 000 €.',
          'Se o preço for inferior ao VPT, recalcule todos os exemplos a partir do VPT.',
          'Com crédito habitação, acrescente o Selo sobre o crédito: 0,6% quando o prazo é de 5+ anos.',
          'Acrescente registo/escritura: frequentemente algumas centenas de euros; pela Casa Pronta é normalmente mais barato do que uma transacção notarial complexa.',
          'Acrescente advogado/solicitador, se precisar de verificação de due diligence: normalmente de centenas a alguns milhares de euros, conforme a complexidade.',
          'Não gaste todo o deposit no CPCV: os impostos têm de estar disponíveis em dinheiro à data da escritura.'
        ] },
        { kind: 'warning', text: 'O banco financia o preço de compra, mas normalmente não financia IMT, Imposto do Selo e despesas notariais. Esse dinheiro deve estar disponível separadamente pelo comprador.' }
      ]
    }
  ],
  costs: [
    { label: 'Imposto do Selo sobre a compra', amountEURMin: 0, amountEURMax: 0, note: 'Taxa de 0,8% sobre o preço ou o VPT, consoante o que for mais alto; o montante depende do imóvel. Com o benefício jovem, pode ser 0 € até 324 058 €.' },
    { label: 'IMT para habitação própria e permanente no Continente', amountEURMin: 0, amountEURMax: 0, note: 'Progressivo: 0% até 104 261 €, depois 2–8%; para imóveis de valor elevado, taxas autónomas de 6% ou 7,5%.' },
    { label: 'Imposto do Selo sobre crédito habitação', amountEURMin: 0, amountEURMax: 0, note: 'Normalmente 0,6% do montante do crédito quando o prazo é de 5+ anos; 0,5% para prazo de 1 a 5 anos; as comissões bancárias estão sujeitas a Selo de 4%.' },
    { label: 'Registo/escritura', amountEURMin: 375, amountEURMax: 1000, note: 'Referência para uma transacção standard; actos notariais complexos, procurações e traduções aumentam o custo.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: folheto informativo IMT',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/IMT.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IMT — Decreto-Lei 287/2003, versão consolidada',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2003-34573375',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do Imposto do Selo — versão consolidada',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34486675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: benefícios fiscais para jovens na compra da primeira habitação',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/Pages/faqs-00644.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
