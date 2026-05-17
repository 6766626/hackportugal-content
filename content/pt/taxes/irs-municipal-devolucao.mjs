export default {
  editorialVoice: 'hackportugal',
  id: 'irs-municipal-devolucao',
  categoryId: 'taxes',
  title: 'IRS Municipal: devolução de até 5% do imposto sobre o rendimento pelo município',
  tldr: 'O IRS Municipal não é um benefício separado nem um pedido: o município pode devolver ao residente até 5% de parte do IRS através do cálculo das Finanças. Na declaração de IRS de 2025, entregue em 2026, a devolução é aplicada automaticamente se a sua morada associada ao NIF em 31.12.2025 estiver num município com devolução. Exemplos de 2026: Lisboa — 2,5%, Porto — 3%, Cascais — 5%. Verifique a morada nas Finanças antes do fim do ano: domicílio fiscal incorrecto = o dinheiro vai para o município errado ou não haverá benefício.',
  tags: ['irs', 'municipal', 'impostos', 'finanças'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o IRS Municipal',
      content: [
        { kind: 'paragraph', text: 'Cada município tem direito a uma participação de até 5% no IRS dos residentes com morada fiscal no seu território. Isto está previsto na Lei 73/2013, art. 26 — Regime Financeiro das Autarquias Locais.' },
        { kind: 'paragraph', text: 'Se o município decidir não ficar com toda a participação, a diferença é devolvida ao contribuinte como devolução / benefício municipal no cálculo do IRS. O máximo é 5%.' },
        { kind: 'paragraph', text: 'Isto não significa que lhe devolvam 5% do salário ou de todo o imposto retido. O cálculo é feito dentro da liquidação IRS segundo a fórmula da AT, a partir da sua collecta líquida depois das deduções aplicáveis.' },
        { kind: 'warning', text: 'O IRS Municipal funciona apenas para residentes fiscais em Portugal que entregam o IRS Modelo 3. Para não residentes com rendimentos portugueses, esta devolução municipal normalmente não se aplica.' }
      ]
    },
    {
      id: 'examples-2026',
      title: 'Exemplos de taxas em 2026',
      content: [
        { kind: 'paragraph', text: 'Para o IRS de 2025, que é entregue de 1 de Abril a 30 de Junho de 2026, os municípios já comunicaram as suas decisões à Autoridade Tributária. As taxas devem ser verificadas pelo ano do rendimento, e não pela data de entrega da declaração.' },
        { kind: 'checklist', items: [
          'Lisboa — devolução 2,5%',
          'Porto — devolução 3%',
          'Cascais — devolução 5%',
          'Se o município atribuir 0% de devolução, o residente não recebe devolução municipal',
          'Se o município atribuir 5%, essa é a devolução municipal máxima',
          'As taxas podem mudar em cada ano fiscal por decisão da Assembleia Municipal',
          'A verificação é feita no Portal das Finanças, na secção Taxas do Município'
        ] },
        { kind: 'paragraph', text: 'Na prática, a diferença pode ser pequena para pessoas com collecta IRS baixa e mais visível para famílias com rendimento tributável elevado. A devolução aparece na liquidação IRS final; não é necessário apresentar um pedido separado.' }
      ]
    },
    {
      id: 'address-rule',
      title: 'Condição principal: morada do NIF no município correcto',
      content: [
        { kind: 'paragraph', text: 'As Finanças verificam o seu domicílio fiscal — a morada fiscal associada ao NIF. Normalmente, a morada relevante é a de 31 de Dezembro do ano do rendimento. Para a declaração de IRS 2025, entregue em 2026, a situação crítica é a de 31.12.2025.' },
        { kind: 'checklist', items: [
          'Verifique a morada no Portal das Finanças: Dados Pessoais → Morada Fiscal',
          'Se mudou de casa, actualize a morada fiscal o quanto antes',
          'Com Cartão de Cidadão, a morada é alterada através do ePortugal / CMD e depois confirmada por código',
          'Estrangeiros sem Cartão de Cidadão normalmente alteram a morada através do Portal das Finanças ou de um serviço de Finanças',
          'A morada no contrato de arrendamento, por si só, não altera o domicílio fiscal',
          'A morada na AIMA, no banco, no SNS ou junto da entidade empregadora não substitui a morada nas Finanças',
          'Se os cônjuges entregarem declaração conjunta, verifique as moradas de ambos os NIF'
        ] },
        { kind: 'warning', text: 'Erro frequente de expatriados: viver em Cascais ou Oeiras, mas deixar a morada do NIF em Lisboa, no representante fiscal ou num Airbnb antigo. Nesse caso, o IRS Municipal é calculado pelo município antigo, mesmo que, na prática, tenha vivido noutro local.' }
      ]
    },
    {
      id: 'how-to-check',
      title: 'Como verificar e ver a devolução',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-rate', title: '1. Verificar a taxa do município', content: [
            { kind: 'paragraph', text: 'Abra a tabela Taxas do Município no Portal das Finanças ou o resumo da ANMP. Procure o ano do rendimento e o nome do município. É importante distinguir «participação no IRS» de «devolução»: o benefício para o residente é a parte que o município não retém.' }
          ] },
          { id: 'submit-irs', title: '2. Entregar o IRS como habitualmente', content: [
            { kind: 'paragraph', text: 'O prazo de entrega do IRS de 2025 é de 1 de Abril a 30 de Junho de 2026. Use o IRS Automático, se estiver disponível, ou o Modelo 3 manualmente. Normalmente não é necessário preencher um campo separado para pedir o IRS Municipal.' }
          ] },
          { id: 'see-settlement', title: '3. Verificar a demonstração de liquidação', content: [
            { kind: 'paragraph', text: 'Depois de a declaração ser processada, descarregue a Nota de Liquidação / Demonstração de Liquidação no Portal das Finanças. A devolução municipal aparece no cálculo como benefício ou redução, influenciando o resultado final: reembolso maior ou imposto a pagar menor.' }
          ] }
        ] }
      ]
    },
    {
      id: 'practical-cases',
      title: 'Cenários práticos para expatriados',
      content: [
        { kind: 'checklist', items: [
          'Mudou-se para Portugal em 2025 e tornou-se residente fiscal: verifique se a morada do NIF foi actualizada até 31.12.2025',
          'Viveu parte do ano em Lisboa e depois mudou-se para Cascais: normalmente conta o endereço fiscal no fim do ano',
          'A entidade empregadora reteve IRS pelo local do escritório no Porto, mas você vive em Braga: o município é determinado não pelo escritório, mas pela morada do seu NIF',
          'É trabalhador independente com recibos verdes: a regra é a mesma, o município é determinado pelo domicílio fiscal',
          'Não tem imposto a pagar depois das deduções: a devolução municipal pode ser nula ou muito pequena',
          'Recebe reembolso IRS: a devolução aumenta o reembolso, mas não chega por transferência separada',
          'Tem IRS a pagar: a devolução reduz o montante a pagar'
        ] },
        { kind: 'paragraph', text: 'Para planeamento fiscal, isto é um pormenor em comparação com a residência fiscal, o regime IFICI, as taxas de IRS e as deduções, mas corrigir a morada do NIF é fácil. Se o município devolver 5%, não perca este bónus automático.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Taxas do Município / Participação variável no IRS',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/pages/faqs-00073.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANMP — informação municipal sobre participação no IRS',
      url: 'https://anmp.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 73/2013, art. 26 — participação variável dos municípios no IRS',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2013-50002386',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
