export default {
  editorialVoice: 'hackportugal',
  id: 'imi-property-tax',
  categoryId: 'housing_buy',
  title: 'IMI — imposto municipal sobre imóveis',
  tldr: 'O IMI é pago por todos os proprietários de imóveis em Portugal: o imposto é calculado sobre o Valor Patrimonial Tributário (VPT), e não sobre o preço de compra. Em 2026, as taxas são: 0,3–0,45% para prédios urbanos, 0,8% para prédios rústicos, 7,5% para proprietários de jurisdições offshore. A nota aparece nas Finanças na primavera: pagamento em maio, ou maio/novembro, ou maio/agosto/novembro. Para primeira habitação pode haver isenção até 3 anos com VPT ≤ 125 000 € e rendimento ≤ 153 300 €; o “IMI jovem” depende do município.',
  tags: ['imi', 'imobiliário', 'finanças', 'vpt'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-imi',
      title: 'O que é o IMI e quem paga',
      content: [
        { kind: 'paragraph', text: 'IMI — Imposto Municipal sobre Imóveis, imposto municipal anual sobre a propriedade de imóveis. É pago por quem era proprietário, usufrutuário ou superficiário do imóvel em 31 de dezembro do ano anterior.' },
        { kind: 'paragraph', text: 'Se comprou um apartamento em julho de 2025, o IMI relativo a 2025 normalmente chegar-lhe-á em 2026, porque em 31.12.2025 o proprietário era você. Se vendeu o imóvel antes de 31 de dezembro, o IMI seguinte normalmente já é pago pelo comprador.' },
        { kind: 'checklist', items: ['Pagam os proprietários de apartamentos, casas, terrenos, garagens, arrecadações e quotas em imóveis', 'O imposto é administrado pela Autoridade Tributária e Aduaneira através do Portal das Finanças', 'O dinheiro vai para o orçamento do município, por isso a taxa depende da Câmara Municipal', 'O IMI não substitui o condomínio: é um imposto separado, não despesas de serviços', 'O IMI não é o mesmo que o IMT: o IMT é pago na compra, o IMI — todos os anos', 'Os não residentes também pagam IMI se possuírem imóveis em Portugal'] }
      ]
    },
    {
      id: 'calculation',
      title: 'Como se calcula o valor: VPT × taxa',
      content: [
        { kind: 'paragraph', text: 'A fórmula é simples: IMI = Valor Patrimonial Tributário × taxa do município. O VPT é o valor fiscal do imóvel na Caderneta Predial, calculado pelas Finanças. Muitas vezes é inferior ao preço de mercado, mas nem sempre.' },
        { kind: 'checklist', items: ['Imóveis urbanos — prédios urbanos: taxa de 0,3–0,45%', 'Imóveis rústicos — prédios rústicos: taxa de 0,8%', 'Imóveis detidos por proprietários de jurisdições com regime fiscal favorável: 7,5%', 'O município aprova anualmente a taxa e comunica-a às Finanças', 'O mesmo imóvel em Lisboa, Cascais, Porto ou Albufeira pode ter um IMI diferente devido à taxa do município', 'O valor a pagar aparece no Portal das Finanças na secção Pagamentos ou IMI', 'Exemplo: VPT 200 000 € × 0,35% = 700 € de IMI por ano'] },
        { kind: 'warning', text: 'O IMI é calculado sobre o VPT, e não sobre o preço na escritura. Se comprou um apartamento por 450 000 €, mas o VPT é 180 000 €, o imposto é calculado sobre 180 000 €. Se o VPT estiver sobreavaliado devido a coeficientes antigos, pode pedir uma reavaliação, mas por vezes o recálculo aumenta o imposto — verifique primeiro o simulador.' }
      ]
    },
    {
      id: 'payment-calendar',
      title: 'Quando e como pagar em 2026',
      content: [
        { kind: 'paragraph', text: 'As Finanças emitem a nota de cobrança na primavera, relativa ao ano fiscal anterior. A notificação normalmente fica visível no Portal das Finanças; a carta em papel pode não chegar a tempo, especialmente se a morada estiver desatualizada.' },
        { kind: 'checklist', items: ['Até 100 € inclusive — um pagamento em maio', 'Mais de 100 € e até 500 € inclusive — dois pagamentos: maio e novembro', 'Mais de 500 € — três pagamentos: maio, agosto e novembro', 'Pode pagar o valor total logo em maio, mesmo que as Finanças o tenham dividido em prestações', 'O pagamento está disponível através de Multibanco, homebanking, MB WAY, débito direto ou balcão dos CTT', 'Para pagar, use a referência de pagamento da nota de cobrança', 'Verifique o e-Balcão e o Portal das Finanças se a nota de cobrança não aparecer até maio'] },
        { kind: 'warning', text: 'O atraso gera juros de mora e pode passar para cobrança coerciva. Para expats, a causa frequente é uma morada fiscal antiga ou a falta de acesso ao Portal das Finanças. Atualize a morada fiscal e ative as notificações.' }
      ]
    },
    {
      id: 'exemptions',
      title: 'Isenções: primeira habitação, baixos rendimentos, dependentes, IMI jovem',
      content: [
        { kind: 'paragraph', text: 'A principal isenção nacional é a isenção temporária de IMI para habitação própria e permanente. Em 2026, as condições de base do Estatuto dos Benefícios Fiscais são: o imóvel é usado como habitação própria permanente, o VPT do imóvel não excede 125 000 €, o rendimento conjunto do agregado para IRS não excede 153 300 €. Normalmente, a isenção vigora até 3 anos.' },
        { kind: 'checklist', items: ['A morada nas Finanças deve ser alterada para a morada da habitação comprada', 'O imóvel deve estar afetado a habitação própria e permanente', 'Verifique a Caderneta Predial: tipo de imóvel, VPT, proprietários, quotas', 'O pedido de isenção é apresentado através do Portal das Finanças ou do e-Balcão, se não tiver sido aplicado automaticamente', 'Agregados de baixos rendimentos podem ter uma isenção permanente separada, se cumprirem os limites de rendimento e VPT', 'IMI familiar: o município pode atribuir uma dedução por dependentes — normalmente 30 € por 1, 70 € por 2, 140 € por 3 ou mais', '“IMI jovem” não é uma isenção nacional única: é uma medida municipal, e as condições de idade, rendimento, prazo e percentagem de desconto são definidas pela Câmara Municipal', 'A compra de primeira habitação por jovens até 35 anos tem benefícios separados em IMT e Imposto do Selo; não os confunda com o IMI'] },
        { kind: 'warning', text: 'Não conte com a isenção apenas por ser o primeiro apartamento. Para o IMI, importam o VPT, o rendimento, o estatuto de habitação própria e permanente e a decisão do município. Antes de comprar, verifique a taxa e os benefícios da Câmara Municipal concreta.' }
      ]
    },
    {
      id: 'practical-checks',
      title: 'O que verificar após a compra',
      content: [
        { kind: 'checklist', items: ['Obtenha a Caderneta Predial Urbana no Portal das Finanças', 'Verifique o VPT, artigo matricial, fração, área e afetação do imóvel', 'Altere a morada fiscal para a nova morada, se for habitação permanente', 'Verifique se a comunicação do contrato/escritura foi apresentada pelo notário ou solicitador às Finanças', 'Consulte a taxa de IMI do seu município para o ano de pagamento', 'Verifique o direito à isenção de IMI e ao IMI familiar', 'Adicione débito direto se não quiser falhar o pagamento', 'Se o imóvel for arrendado, inclua o IMI no cálculo da rentabilidade, juntamente com IRS, condomínio, seguro e reparações'] },
        { kind: 'paragraph', text: 'Para investidores, é importante calcular não só o IMI. Se o VPT total dos prédios urbanos de uma pessoa singular exceder 600 000 €, pode surgir AIMI — Adicional ao IMI. Para cônjuges/união de facto com declaração conjunta, o limiar é normalmente 1 200 000 €. O AIMI é um imposto separado, não faz parte do IMI normal.' }
      ]
    }
  ],
  costs: [
    { label: 'IMI para prédios urbanos', amountEURMin: 0, amountEURMax: 0, note: 'Taxa de 0,3–0,45% do VPT por ano; o valor depende do município e do VPT.' },
    { label: 'IMI para prédios rústicos', amountEURMin: 0, amountEURMax: 0, note: 'Taxa de 0,8% do VPT por ano.' },
    { label: 'IMI familiar', amountEURMin: 30, amountEURMax: 140, note: 'Dedução municipal possível: 30 € por 1 dependente, 70 € por 2, 140 € por 3 ou mais; aplica-se apenas se o município tiver aprovado a medida.' },
    { label: 'Isenção temporária para habitação própria e permanente', amountEUR: 0, note: 'Até 3 anos se cumpridas as condições: VPT ≤ 125 000 € e rendimento do agregado ≤ 153 300 €.' }
  ],
  sources: [
    { title: 'Finanças — Código do IMI (CIMI), índice', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cimi/Pages/cimi1.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Código do IMI — Decreto-Lei 287/2003, versão consolidada', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2003-148011287', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças: IMI e pagamento de impostos', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal: compra de habitação e impostos sobre imóveis', url: 'https://www.gov.pt/cidadaos/comprar-arrendar-ou-vender-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
