export default {
  editorialVoice: 'hackportugal',
  id: 'imt-stamp-duty-buy',
  categoryId: 'housing_buy',
  title: 'IMT e Imposto do Selo na compra de imóveis',
  tldr: 'Na compra de um imóvel em Portugal, o comprador paga IMT e Imposto do Selo antes da escritura. A base é o maior valor entre o preço da transacção e o VPT da caderneta predial. Para habitação própria e permanente no Continente, em 2026 aplica-se a tabela progressiva de IMT: 0% até 106 346 €, depois 2–8%, com taxas autónomas de 6% e 7,5% para imóveis de valor elevado (escalões actualizados pelo OE 2026 +2%)\.\n\nO Imposto do Selo sobre a compra é 0,8%. Para jovens até 35 anos na primeira compra de habitação permanente, há isenção até 330 539 € e benefício parcial até 661 078 €.',
  tags: ['imt', 'selo', 'escritura', 'imobiliário'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-pay',
      title: 'O que é exactamente pago pelo comprador',
      content: [
        { kind: 'paragraph', text: 'IMT — Imposto Municipal sobre as Transmissões Onerosas de Imóveis, imposto sobre a transmissão de imóveis. Imposto do Selo — imposto de selo. Ambos são normalmente pagos antes da assinatura da escritura ou documento particular autenticado; caso contrário, o notário/solicitador não conclui a transacção.' },
        { kind: 'checklist', items: [
          'O IMT é pago pelo comprador, não pelo vendedor.',
          'O Imposto do Selo sobre a compra é 0,8% da base tributável.',
          'A base tributável é o maior de dois valores: o preço no contrato ou o VPT da caderneta predial.',
          'Para crédito à habitação existe um Imposto do Selo separado: normalmente 0,6% do montante do crédito quando o prazo é de 5+ anos.',
          'As comissões bancárias do crédito são adicionalmente sujeitas a Imposto do Selo de 4%.',
          'O pagamento é feito por guia/DUC, normalmente através de Multibanco, homebanking ou no Portal das Finanças.',
          'É necessário levar o comprovativo de pagamento para a escritura.',
          'Se a transacção falhar depois do pagamento, o reembolso é possível, mas é um procedimento separado junto das Finanças.'
        ] },
        { kind: 'warning', text: 'Não calcule o imposto apenas sobre o preço do CPCV. Se o VPT for superior ao preço da transacção, as Finanças cobram IMT e Selo sobre o VPT. Isto surge frequentemente em vendas intrafamiliares baratas ou em imóveis antigos com reavaliação.' }
      ]
    },
    {
      id: 'imt-rates-mainland',
      title: 'Taxas de IMT para habitação no Continente',
      content: [
        { kind: 'paragraph', text: 'Para habitação urbana, as taxas dependem da finalidade: habitação própria e permanente — residência principal do comprador; habitação secundária ou arrendamento — segunda habitação, investimento ou arrendamento. Na Madeira e nos Açores aplicam-se tabelas regionais.' },
        { kind: 'paragraph', text: 'Para habitação própria e permanente no Continente, a tabela de 2026 (OE 2026, escalões aumentados em 2%) usa os seguintes limiares: até 106 346 € — 0%; 106 346–145 471 € — 2% menos parcela a abater de 2 126,92 €; 145 471–198 347 € — 5% menos 6 491,03 €; 198 347–330 539 € — 7% menos 10 457,98 €; 330 539–661 078 € — 8% menos 13 763,38 €; 661 078–1 150 853 € — taxa única de 6%; acima de 1 150 853 € — taxa única de 7,5%.' },
        { kind: 'checklist', items: [
          'Habitação principal até 106 346 € no Continente: IMT = 0 €, mas o Selo de 0,8% mantém-se, se não houver benefício separado.',
          'Habitação principal de 250 000 €: IMT = 250 000 × 7% − 10 457,98 € = 7 042,02 €.',
          'Habitação principal de 350 000 €: IMT = 350 000 × 8% − 13 763,38 € = 14 236,62 €.',
          'Segunda habitação/investimento é normalmente tributado desde o primeiro euro: não há zona de isenção como para a habitação principal.',
          'Prédio rústico: taxa de IMT de 5%.',
          'Outras urban properties que não sejam para habitação: taxa de IMT de 6,5%.',
          'Um comprador associado a uma jurisdição da lista de paraísos fiscais pode ficar sujeito a uma taxa de IMT de 10%.',
          'Se comprar uma quota-parte, o imposto é calculado de acordo com as regras da transacção e o valor da quota-parte transmitida, mas o notário continua a verificar o VPT.'
        ] }
      ]
    },
    {
      id: 'jovem-exemption',
      title: 'Benefício para jovens compradores até 35 anos',
      content: [
        { kind: 'paragraph', text: 'Desde 2024 vigora um regime para jovens até 35 anos na primeira compra de habitação própria e permanente (DL 44/2024). Em 2026, o limiar prático da isenção total está ligado ao 4.º escalão de IMT: até 330 539 €. O benefício aplica-se ao IMT e ao Imposto do Selo sobre a compra.' },
        { kind: 'checklist', items: [
          'O comprador não pode ter mais de 35 anos à data da escritura.',
          'O imóvel deve destinar-se a habitação própria e permanente, não a arrendamento nem a segunda habitação.',
          'O comprador não deve ser proprietário de imóvel habitacional à data da transacção nem nos 3 anos anteriores.',
          'Até 330 539 €: IMT = 0 € e Selo sobre a compra = 0 €.',
          'De 330 539 € a 661 078 €: o benefício é parcial; o imposto é pago apenas sobre a parte acima do montante protegido, segundo a mecânica das Finanças.',
          'Acima de 661 078 €: o benefício não se aplica.',
          'Se comprarem duas pessoas e só uma cumprir as condições, o benefício aplica-se apenas à sua quota-parte.',
          'Após a compra, a habitação deve ser usada como residência principal; a alteração da finalidade pode levar à perda do benefício e ao pagamento adicional de imposto.'
        ] },
        { kind: 'paragraph', text: 'Exemplo: apartamento para habitação principal por 350 000 €. Pela tabela de 2026, o IMT normal é 14 236,62 €, o Selo é 2 800 €. Para um comprador até 35 anos na primeira compra (DL 44/2024), o benefício cobre a parte até 330 539 €, ficando por pagar a quota proporcional apenas acima de 330 539 €.' },
        { kind: 'warning', text: 'Antes do CPCV, confirme o benefício com um solicitador/advogado e nas Finanças. Um erro no estatuto de “primeira habitação” é normalmente detectado mesmo antes da escritura, quando já não há tempo para reestruturar a transacção.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'Como decorre o pagamento antes da escritura',
      content: [
        { kind: 'paragraph', text: 'Na prática, o cálculo é feito pelo notário, advogado, solicitador, Casa Pronta ou banco. Mas a responsabilidade pela correcção e pelo pagamento cabe ao comprador. Sem comprovativo de pagamento, a transacção não é realizada.' },
        { kind: 'substeps', items: [
          { id: 'collect-data', title: '1. Reúna os dados do imóvel', content: [
            { kind: 'checklist', items: [
              'Caderneta predial com VPT.',
              'Certidão permanente do registo predial.',
              'Preço de compra do CPCV ou do projecto da escritura.',
              'Finalidade: própria e permanente ou secundária/investimento.',
              'Quotas-partes dos compradores, se comprarem várias pessoas.',
              'Idade e condições para o benefício jovem, se aplicável.'
            ] }
          ] },
          { id: 'issue-guides', title: '2. Emita as guias de pagamento', content: [
            { kind: 'paragraph', text: 'As guias de IMT e Imposto do Selo podem ser emitidas através do Portal das Finanças ou por intermédio do especialista que acompanha a transacção. A guia terá a referência para pagamento e o prazo.' }
          ] },
          { id: 'pay-before-deed', title: '3. Pague antes da assinatura', content: [
            { kind: 'checklist', items: [
              'Pague o IMT e o Selo antes da escritura, não depois.',
              'Guarde os comprovativos em PDF.',
              'Verifique se o NIF do comprador está correctamente indicado.',
              'Verifique se a matriz/VPT do imóvel coincide com os documentos.',
              'Entregue as confirmações ao notário ou solicitador.',
              'Se houver crédito à habitação, verifique separadamente o Selo sobre o crédito e as comissões do banco.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'budgeting',
      title: 'Como orçamentar a transacção',
      content: [
        { kind: 'paragraph', text: 'IMT e Selo não são os únicos custos. Para um orçamento seguro, conte com impostos, despesas notariais, registo, comissões bancárias e avaliação do imóvel. Com crédito à habitação, o banco cobra frequentemente parte das despesas ainda antes da escritura.' },
        { kind: 'checklist', items: [
          'Para habitação principal de 200 000 €: IMT cerca de 3 747,08 €, Selo 1 600 €.',
          'Para habitação principal de 300 000 €: IMT cerca de 10 747,08 €, Selo 2 400 €.',
          'Para habitação principal de 500 000 €: IMT cerca de 26 506,50 €, Selo 4 000 €.',
          'Se o preço for inferior ao VPT, refaça todos os exemplos com base no VPT.',
          'Com crédito à habitação, acrescente o Selo sobre o crédito: 0,6% para prazo de 5+ anos.',
          'Acrescente registo/escritura: frequentemente algumas centenas de euros; pela Casa Pronta é normalmente mais barato do que uma escritura notarial complexa.',
          'Acrescente advogado/solicitador, se for necessária verificação de due diligence: normalmente de algumas centenas a alguns milhares de euros, consoante a complexidade.',
          'Não gaste todo o deposit no CPCV: os impostos são necessários em dinheiro até à data da escritura.'
        ] },
        { kind: 'warning', text: 'O banco financia o preço de compra, mas normalmente não financia IMT, Imposto do Selo e despesas notariais. Esse dinheiro deve estar disponível separadamente pelo comprador.' }
      ]
    }
  ],
  costs: [
    { label: 'Imposto do Selo sobre a compra', amountEURMin: 0, amountEURMax: 0, note: 'Taxa de 0,8% sobre o preço ou o VPT, consoante o que for mais alto; o montante depende do imóvel. Com o benefício jovem, pode ser 0 € até 330 539 €.' },
    { label: 'IMT para habitação principal no Continente', amountEURMin: 0, amountEURMax: 0, note: 'Progressivo segundo a tabela de 2026 (OE 2026 +2%): 0% até 106 346 €, depois 2–8%; para imóveis de valor elevado, taxas autónomas de 6% (a partir de 661 078 €) ou 7,5% (a partir de 1 150 853 €).' },
    { label: 'Imposto do Selo sobre o crédito à habitação', amountEURMin: 0, amountEURMax: 0, note: 'Normalmente 0,6% do montante do crédito para prazo de 5+ anos; 0,5% para prazo de 1 a 5 anos; as comissões bancárias são sujeitas a Selo de 4%.' },
    { label: 'Registo/escritura', amountEURMin: 375, amountEURMax: 1000, note: 'Referência para uma transacção padrão; actos notariais complexos, procurações e traduções aumentam o custo.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Código do IMT (CIMT), índice',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cimt/Pages/codigo-do-imt-indice.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-05'
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
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
