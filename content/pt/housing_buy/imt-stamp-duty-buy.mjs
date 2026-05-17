export default {
  editorialVoice: 'hackportugal',
  id: 'imt-stamp-duty-buy',
  categoryId: 'housing_buy',
  title: 'IMT e Imposto do Selo na compra de imóveis',
  tldr: 'Ao comprar um imóvel em Portugal, o comprador paga IMT e Imposto do Selo antes da escritura. A base é o maior valor entre o preço da transação e o VPT da caderneta predial. Para habitação própria e permanente no Continente, em 2026 aplica-se uma tabela progressiva de IMT: 0% até 106 346 €, depois 2–8%, com taxas autónomas de 6% e 7,5% para imóveis de valor elevado (escalões atualizados pelo OE 2026 +2%). O Imposto do Selo sobre a compra é 0,8%. Para jovens até 35 anos na primeira compra de habitação permanente, existe isenção até 330 539 € e benefício parcial até 661 078 €.',
  tags: ['imt', 'selo', 'escritura', 'imobiliário'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-pay',
      title: 'O que é que o comprador paga exatamente',
      content: [
        { kind: 'paragraph', text: 'IMT — Imposto Municipal sobre as Transmissões Onerosas de Imóveis, imposto sobre a transmissão de imóveis. Imposto do Selo — imposto de selo. Ambos são normalmente pagos antes da assinatura da escritura ou do documento particular autenticado; caso contrário, o notário/solicitador não concluirá a transação.' },
        { kind: 'checklist', items: [
          'O IMT é pago pelo comprador, não pelo vendedor.',
          'O Imposto do Selo sobre a compra é 0,8% da base tributável.',
          'A base tributável é o maior de dois valores: o preço no contrato ou o VPT da caderneta predial.',
          'Para crédito hipotecário existe um Imposto do Selo separado: normalmente 0,6% do montante do crédito quando o prazo é de 5+ anos.',
          'As comissões bancárias do crédito estão adicionalmente sujeitas a Imposto do Selo de 4%.',
          'O pagamento é feito por guia/DUC, normalmente através de Multibanco, homebanking ou no Portal das Finanças.',
          'É necessário levar o comprovativo de pagamento para a escritura.',
          'Se a transação falhar depois do pagamento, o reembolso é possível, mas trata-se de um procedimento separado junto das Finanças.'
        ] },
        { kind: 'warning', text: 'Não calcule o imposto apenas com base no preço do CPCV. Se o VPT for superior ao preço da transação, as Finanças cobrarão IMT e Selo sobre o VPT. Isto surge frequentemente em vendas intrafamiliares baratas ou em imóveis antigos com reavaliação.' }
      ]
    },
    {
      id: 'imt-rates-mainland',
      title: 'Taxas de IMT para habitação no Continente',
      content: [
        { kind: 'paragraph', text: 'Para habitação urbana, as taxas dependem da finalidade: habitação própria e permanente — residência principal do comprador; habitação secundária ou arrendamento — segunda habitação, investimento ou arrendamento. Na Madeira e nos Açores aplicam-se tabelas regionais.' },
        { kind: 'paragraph', text: 'Para habitação própria e permanente no Continente, na tabela de 2026 (OE 2026, escalões aumentados em 2%) utilizam-se estes limiares: até 106 346 € — 0%; 106 346–145 471 € — 2% menos parcela a abater de 2 126,92 €; 145 471–198 347 € — 5% menos 6 491,03 €; 198 347–330 539 € — 7% menos 10 457,98 €; 330 539–661 078 € — 8% menos 13 763,38 €; 661 078–1 150 853 € — taxa única de 6%; acima de 1 150 853 € — taxa única de 7,5%.' },
        { kind: 'checklist', items: [
          'Habitação própria e permanente até 106 346 € no Continente: IMT = 0 €, mas o Selo de 0,8% mantém-se, se não existir benefício separado.',
          'Habitação própria e permanente de 250 000 €: IMT = 250 000 × 7% − 10 252,92 € = 7 247,08 €.',
          'Habitação própria e permanente de 350 000 €: IMT = 350 000 × 8% − 13 493,50 € = 14 506,50 €.',
          'Segunda habitação/investimento é normalmente tributado desde o primeiro euro: não existe uma zona isenta como para habitação própria e permanente.',
          'Prédio rústico: taxa de IMT de 5%.',
          'Outras urban properties que não sejam para habitação: taxa de IMT de 6,5%.',
          'Um comprador ligado a uma jurisdição da lista de paraísos fiscais pode ficar sujeito a uma taxa de IMT de 10%.',
          'Se comprar uma quota-parte, o imposto é calculado de acordo com as regras da transação e o valor da quota transmitida, mas o notário verificará na mesma o VPT.'
        ] }
      ]
    },
    {
      id: 'jovem-exemption',
      title: 'Benefício para jovens compradores até 35 anos',
      content: [
        { kind: 'paragraph', text: 'Desde 2024 está em vigor um regime para jovens até 35 anos na primeira compra de habitação própria e permanente (DL 44/2024). Em 2026, o limiar prático da isenção total está ligado ao 4.º escalão de IMT: até 330 539 €. O benefício abrange o IMT e o Imposto do Selo sobre a compra.' },
        { kind: 'checklist', items: [
          'O comprador não pode ter mais de 35 anos à data da escritura.',
          'O imóvel deve destinar-se a habitação própria e permanente, não a arrendamento nem a segunda habitação.',
          'O comprador não deve ser proprietário de imóvel habitacional à data da transação nem nos 3 anos anteriores.',
          'Até 330 539 €: IMT = 0 € e Selo sobre a compra = 0 €.',
          'De 330 539 € até 661 078 €: o benefício é parcial; o imposto é pago apenas sobre a parte não protegida, segundo a mecânica das Finanças.',
          'Acima de 661 078 €: o benefício não se aplica.',
          'Se comprarem duas pessoas e apenas uma cumprir as condições, o benefício aplica-se apenas à respetiva quota-parte.',
          'Após a compra, a habitação deve ser utilizada como residência principal; a alteração da finalidade pode levar à perda do benefício e ao pagamento adicional de imposto.'
        ] },
        { kind: 'paragraph', text: 'Exemplo: apartamento para habitação própria e permanente por 350 000 €. Pela tabela de 2026, o IMT normal é 14 236,62 €, o Selo é 2 800 €. Para um comprador até 35 anos na primeira compra (DL 44/2024), o benefício cobre a parte até 330 539 €, ficando por pagar apenas a quota proporcional acima de 330 539 €.' },
        { kind: 'warning', text: 'Antes do CPCV, confirme o benefício com um solicitador/advogado e junto das Finanças. Um erro no estatuto de “primeira habitação” é normalmente detetado mesmo antes da escritura, quando já não há tempo para reestruturar a transação.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'Como é feito o pagamento antes da escritura',
      content: [
        { kind: 'paragraph', text: 'Na prática, o cálculo é feito pelo notário, advogado, solicitador, Casa Pronta ou banco. Mas a responsabilidade pela correção e pelo pagamento cabe ao comprador. Sem comprovativo de pagamento, a transação não avança.' },
        { kind: 'substeps', items: [
          { id: 'collect-data', title: '1. Reúna os dados do imóvel', content: [
            { kind: 'checklist', items: [
              'Caderneta predial com VPT.',
              'Certidão permanente do registo predial.',
              'Preço de compra do CPCV ou da minuta da escritura.',
              'Finalidade: própria e permanente ou secundária/investimento.',
              'Quota-partes dos compradores, se comprarem várias pessoas.',
              'Idade e condições para o benefício jovem, se aplicável.'
            ] }
          ] },
          { id: 'issue-guides', title: '2. Emita as guias de pagamento', content: [
            { kind: 'paragraph', text: 'As guias de IMT e Imposto do Selo podem ser emitidas através do Portal das Finanças ou pelo especialista que acompanha a transação. A guia terá a referência para pagamento e o prazo.' }
          ] },
          { id: 'pay-before-deed', title: '3. Pague antes da assinatura', content: [
            { kind: 'checklist', items: [
              'Pague o IMT e o Selo antes da escritura, não depois.',
              'Guarde os comprovativos em PDF.',
              'Verifique se o NIF do comprador está indicado corretamente.',
              'Verifique se a matriz/VPT do imóvel coincidem com os documentos.',
              'Entregue os comprovativos ao notário ou ao solicitador.',
              'Se houver hipoteca, confirme separadamente o Selo sobre o crédito e as comissões do banco.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'budgeting',
      title: 'Como orçamentar a transação',
      content: [
        { kind: 'paragraph', text: 'IMT e Selo não são as únicas despesas. Para um orçamento seguro, inclua impostos, despesas notariais, registo, comissões bancárias e avaliação do imóvel. Com hipoteca, o banco cobra frequentemente parte das despesas ainda antes da escritura.' },
        { kind: 'checklist', items: [
          'Para habitação própria e permanente de 200 000 €: IMT cerca de 3 747,08 €, Selo 1 600 €.',
          'Para habitação própria e permanente de 300 000 €: IMT cerca de 10 747,08 €, Selo 2 400 €.',
          'Para habitação própria e permanente de 500 000 €: IMT cerca de 26 506,50 €, Selo 4 000 €.',
          'Se o preço for inferior ao VPT, recalcule todos os exemplos a partir do VPT.',
          'Com hipoteca, acrescente o Selo sobre o crédito: 0,6% quando o prazo é de 5+ anos.',
          'Acrescente registo/escritura: muitas vezes algumas centenas de euros; pela Casa Pronta é geralmente mais barato do que uma transação notarial complexa.',
          'Acrescente advogado/solicitador, se precisar de verificação de due diligence: normalmente de centenas a alguns milhares de euros, consoante a complexidade.',
          'Não gaste todo o deposit no CPCV: os impostos são necessários em liquidez até à data da escritura.'
        ] },
        { kind: 'warning', text: 'O banco financia o preço de compra, mas normalmente não financia IMT, Imposto do Selo nem despesas notariais. Esse dinheiro deve estar disponível separadamente para o comprador.' }
      ]
    }
  ],
  costs: [
    { label: 'Imposto do Selo sobre a compra', amountEURMin: 0, amountEURMax: 0, note: 'Taxa de 0,8% sobre o preço ou o VPT, consoante o que for mais elevado; o montante depende do imóvel. Com o benefício jovem, pode ser 0 € até 330 539 €.' },
    { label: 'IMT para habitação própria e permanente no Continente', amountEURMin: 0, amountEURMax: 0, note: 'Progressivo segundo a tabela de 2026 (OE 2026 +2%): 0% até 106 346 €, depois 2–8%; para imóveis de valor elevado, taxas únicas de 6% (a partir de 661 078 €) ou 7,5% (a partir de 1 150 853 €).' },
    { label: 'Imposto do Selo sobre a hipoteca', amountEURMin: 0, amountEURMax: 0, note: 'Normalmente 0,6% do montante do crédito quando o prazo é de 5+ anos; 0,5% quando o prazo é de 1 a 5 anos; as comissões bancárias estão sujeitas a Selo de 4%.' },
    { label: 'Registo/escritura', amountEURMin: 375, amountEURMax: 1000, note: 'Referência para uma transação padrão; atos notariais complexos, procurações e traduções aumentam o custo.' }
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
