export default {
  editorialVoice: 'hackportugal',
  id: 'irs-auto-prefill',
  categoryId: 'taxes',
  title: 'IRS Automático — declaração pré-preenchida para casos simples',
  tldr: 'O IRS Automático é um rascunho da declaração Modelo 3 que as Finanças pré-preenchem com base em salários, pensões e e-Fatura. Na campanha de IRS 2026 relativa aos rendimentos de 2025, as declarações são entregues de 1 de abril a 30 de junho de 2026. Se estiver abrangido pelo regime e não fizer nada, a declaração NÃO é entregue a 1 de abril: a declaração provisória só se torna definitiva após o fim do prazo. Não serve para todos os expats: recibos verdes, arrendamento, rendimentos estrangeiros, crypto/ações normalmente exigem a Modelo 3 normal.',
  tags: ['irs', 'finanças', 'impostos', 'e-fatura'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o IRS Automático',
      content: [
        { kind: 'paragraph', text: 'O IRS Automático é uma declaração de IRS automática e pré-preenchida no Portal das Finanças. A Autoridade Tributária importa automaticamente o salário ou a pensão, o imposto retido, a Segurança Social, o agregado familiar e as despesas confirmadas no e-Fatura.' },
        { kind: 'paragraph', text: 'Na campanha de 2026 são declarados os rendimentos de 2025. O prazo de entrega é o habitual: de 1 de abril a 30 de junho de 2026. Durante este período, pode verificar a declaração automática, simular o cálculo, confirmá-la ou recusá-la e entregar uma Modelo 3 normal.' },
        { kind: 'warning', text: 'Erro comum: o IRS Automático não é “entregue a 1 de abril”. A 1 de abril fica disponível. Se o contribuinte não confirmar nem entregar outra declaração até 30 de junho, a declaração provisória é normalmente considerada entregue automaticamente depois do fim do prazo, nos termos do art. 58-A CIRS.' }
      ]
    },
    {
      id: 'who-can-use',
      title: 'Para quem é adequado ✅',
      content: [
        { kind: 'paragraph', text: 'O IRS Automático foi pensado para situações fiscais simples. Para um expat, isto normalmente funciona se durante todo o ano de 2025 você foi residente fiscal em Portugal e recebeu apenas salário português por contrato de trabalho ou pensão, sem trabalho independente e sem rendimentos estrangeiros.' },
        { kind: 'checklist', items: [
          'Você é residente fiscal em Portugal no ano em causa',
          'Rendimentos apenas da categoria A: salário, trabalho por contrato de trabalho',
          'Ou rendimentos apenas da categoria H: pensões',
          'Os rendimentos foram pagos por entidades portuguesas e já constam nas Finanças',
          'Não há recibos verdes, ato isolado ou outra atividade aberta',
          'Não há rendimentos de arrendamento, Airbnb/AL, royalties, mais-valias, venda de ações/ETF/crypto',
          'Não há salário estrangeiro, dividendos estrangeiros, juros, pensão ou contas bancárias com rendimento no estrangeiro',
          'A situação familiar é simples e coincide com os dados nas Finanças',
          'As despesas no e-Fatura foram verificadas antes dos prazos da campanha'
        ] },
        { kind: 'paragraph', text: 'Se você for casado/unido de facto, o Portal das Finanças normalmente mostra opções: entrega separada e entrega conjunta. Não escolha automaticamente a primeira opção — compare as simulações.' }
      ]
    },
    {
      id: 'who-should-not-use',
      title: 'Quando é melhor NÃO confirmar automaticamente',
      content: [
        { kind: 'paragraph', text: 'Os expats muitas vezes não se enquadram no IRS Automático por causa de rendimentos estrangeiros, trabalho remoto, investimentos ou estatuto de trabalhador independente. Nestes casos, é mais seguro abrir a Modelo 3 normal e acrescentar os anexos necessários.' },
        { kind: 'checklist', items: [
          'Você abriu atividade e emitiu recibos verdes — é necessário o Anexo B',
          'Há rendimentos de arrendamento em Portugal — normalmente Anexo F',
          'Há venda de imóveis, ações, ETF, obrigações ou crypto com evento declarável — Anexo G / G1 / J, conforme a situação',
          'Há salário, pensão, juros, dividendos ou mais-valias do estrangeiro — normalmente Anexo J',
          'Você chegou ou saiu durante o ano e não foi residente durante o ano inteiro',
          'Tem IFICI, antigo NHR/RNH ou outro regime especial que afete a tributação',
          'Há pensão de alimentos, incapacidade, guarda complexa, dependentes em guarda conjunta ou deduções não standard',
          'Os dados do e-Fatura estão incompletos: despesas médicas, de educação, rendas ou despesas de mortgage elevadas não foram importadas',
          'A simulação mostra um imposto a pagar estranho, embora tenha havido retenção de IRS sobre o salário durante todo o ano'
        ] },
        { kind: 'warning', text: 'Se na declaração automática faltar rendimento estrangeiro, isso não significa que possa não o declarar. A Autoridade Tributária pode receber mais tarde dados CRS/DAC de bancos e corretoras, e corrigir depois de uma verificação será mais caro e mais stressante.' }
      ]
    },
    {
      id: 'how-to-check',
      title: 'Como verificar no Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar nas Finanças', content: [
            { kind: 'paragraph', text: 'Entre no Portal das Finanças com NIF + senha de acesso, Chave Móvel Digital (CMD) ou Cartão de Cidadão. Procure a secção IRS → IRS Automático ou Entregar declaração → IRS Automático.' }
          ] },
          { id: 'validate-family', title: '2. Verificar família e morada', content: [
            { kind: 'checklist', items: [
              'NIF do contribuinte e do cônjuge/parceiro',
              'Estado civil em 31 de dezembro de 2025',
              'Dependentes e respetivo NIF',
              'Guarda conjunta, se houver filhos em guarda partilhada',
              'Morada de residência fiscal',
              'IBAN para reembolso de IRS'
            ] }
          ] },
          { id: 'compare-simulations', title: '3. Comparar simulações', content: [
            { kind: 'paragraph', text: 'Clique em Simular. Se for casado ou estiver em união de facto, compare tributação separada e tributação conjunta. O Portal mostrará o reembolso ou o montante a pagar em cada opção.' }
          ] },
          { id: 'confirm-or-reject', title: '4. Confirmar ou recusar', content: [
            { kind: 'paragraph', text: 'Se estiver tudo correto, confirme a declaração e guarde o comprovativo. Se houver erro ou faltar rendimento/dedução, não confirme o IRS Automático — entregue uma declaração Modelo 3 normal com os anexos necessários.' }
          ] }
        ] }
      ]
    },
    {
      id: 'refund-payment',
      title: 'Reembolso ou pagamento de IRS',
      content: [
        { kind: 'paragraph', text: 'Depois da confirmação ou da transformação automática da declaração provisória em definitiva, as Finanças emitem a liquidação. Se foi retido IRS a mais, receberá um reembolso no IBAN. Se foi retido a menos, aparecerá uma nota de cobrança para pagamento.' },
        { kind: 'checklist', items: [
          'Verifique antecipadamente o IBAN no Portal das Finanças',
          'Descarregue o comprovativo da declaração depois da confirmação',
          'Verifique o estado: Rececionada → Certa → Liquidação processada → Reembolso emitido ou Nota de cobrança',
          'O pagamento é feito através de Referência Multibanco, MB WAY, homebanking ou no Portal das Finanças',
          'Se a declaração foi entregue com erro, entregue uma declaração de substituição o mais cedo possível',
          'Se o montante a pagar for incomportável, pode pedir pagamento em prestações, se cumprir as condições da AT'
        ] },
        { kind: 'warning', text: 'O cálculo automático não elimina a responsabilidade. Juridicamente, a declaração é considerada sua: se os dados estiverem incompletos, será você a corrigir e a pagar a diferença, mesmo que o erro venha do pré-preenchimento.' }
      ]
    },
    {
      id: 'practical-expat-check',
      title: 'Mini-checklist para expat antes de confirmar',
      content: [
        { kind: 'checklist', items: [
          'Tenho a certeza de que fui residente fiscal em Portugal em 2025 ou compreendo como declarar um split-year',
          'Não tive atividade aberta, recibos verdes ou ato isolado',
          'Não tive salário estrangeiro, pensão estrangeira, dividendos, juros, cupões ou capital gains',
          'Verifiquei o e-Fatura e vejo despesas médicas, de educação, rendas e despesas gerais familiares',
          'Comparei a entrega conjunta e separada, se houver cônjuge/parceiro',
          'O IBAN nas Finanças está atualizado',
          'Guardei o PDF da declaração e o comprovativo',
          'Se houver dúvida — entrego uma Modelo 3 normal ou pergunto a um contabilista'
        ] },
        { kind: 'paragraph', text: 'Regra prática: o IRS Automático é bom para “um salário português + despesas normais”. Tudo o que envolva mudança de país, vários países, investimentos, arrendamento ou trabalho independente quase sempre exige verificação manual.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS Automático e informação sobre entrega do IRS',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 58-A, declaração automática de rendimentos',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — Portal das Finanças, entrega da declaração Modelo 3 IRS',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
