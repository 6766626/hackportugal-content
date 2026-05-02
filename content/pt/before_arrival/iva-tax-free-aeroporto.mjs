export default {
  editorialVoice: 'hackportugal',
  id: 'iva-tax-free-aeroporto',
  categoryId: 'before_arrival',
  title: 'Compras Tax-Free no aeroporto: reembolso do IVA a não residentes',
  tldr: 'Tax-Free em Portugal é o reembolso do IVA sobre bens comprados por um não residente da UE e transportados na bagagem pessoal para fora da UE. O mínimo é 50 € por um recibo/fatura. Nos aeroportos de Lisboa, Porto e Faro existe eTax-Free: primeiro valida a compra junto da Autoridade Tributária e depois recebe o dinheiro através do operador Tax Free. A taxa de IVA pode ir até 23%, mas o reembolso real é normalmente inferior: o IVA está incluído no preço, mais uma comissão de 5–10%. Residentes em Portugal não têm direito ao reembolso.',
  tags: ['iva', 'taxfree', 'aeroporto', 'finanças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-use',
      title: 'Quem tem direito ao Tax-Free',
      content: [
        { kind: 'paragraph', text: 'Tax-Free é um regime de reembolso do IVA para viajantes residentes em país terceiro: pessoas cujo endereço permanente se situa fora da UE. Um estrangeiro com autorização de residência em Portugal é considerado residente em Portugal para este procedimento e não tem direito ao reembolso.' },
        { kind: 'checklist', items: [
          'Vive fora da UE e consegue comprová-lo com passaporte/documento',
          'O bem foi comprado em Portugal numa loja que trabalha com Tax-Free/eTax-Free',
          'O valor de uma fatura/recibo é de pelo menos 50 € com IVA',
          'O bem é novo, não foi utilizado na UE e é transportado na bagagem pessoal',
          'Transporta o bem para fora da UE até ao fim do 3.º mês após o mês da compra',
          'Tem cartão de embarque e os bens estão disponíveis para verificação pela alfândega',
          'Não apresenta Cartão de Cidadão, título de residência ou outro documento que comprove residência em Portugal'
        ] },
        { kind: 'warning', text: 'Tax-Free não é uma forma de “recuperar 23% do talão”. Com uma taxa de IVA de 23%, a parte fiscal do preço é 23/123, ou seja, cerca de 18,7% do preço com IVA. Desse valor, o operador reterá uma comissão, muitas vezes 5–10% do montante do reembolso.' }
      ]
    },
    {
      id: 'in-shop',
      title: 'Na loja: peça a fatura Tax-Free',
      content: [
        { kind: 'paragraph', text: 'Diga na caixa: “Tax-Free, please”. A loja deve emitir uma declaração eletrónica eTax-Free ou um formulário de operador, como Global Blue, Planet, Innova Tax Free. Sem a fatura correta, o reembolso no aeroporto normalmente não é possível.' },
        { kind: 'checklist', items: [
          'Passaporte de não residente da UE',
          'Endereço de residência permanente fora da UE',
          'Fatura/recibo no valor mínimo de 50 €',
          'Tax-Free form ou número eletrónico eTax-Free',
          'Cartão bancário, se quiser receber o reembolso no cartão',
          'Embalagem original e etiquetas — é preferível não abrir antes da saída',
          'Mantenha os bens separados: a alfândega pode pedir para os ver fisicamente'
        ] },
        { kind: 'warning', text: 'Se vive em Portugal e simplesmente vai de férias para fora da UE, o Tax-Free não se aplica. O direito é determinado pela residência, não pela nacionalidade nem pelo destino do voo.' }
      ]
    },
    {
      id: 'airport-flow',
      title: 'No aeroporto LIS/OPO/FAO: ordem dos passos',
      content: [
        { kind: 'paragraph', text: 'Em Lisboa, Porto e Faro funciona o eTax-Free. A lógica geral é: primeiro validação junto da Autoridade Tributária/Customs, depois recebimento do dinheiro pelo operador Tax-Free. Chegue com antecedência: na época alta, a fila pode demorar 30–60 minutos.' },
        { kind: 'substeps', items: [
          {
            id: 'before-checkin',
            title: '1. Antes de entregar a bagagem',
            content: [
              { kind: 'paragraph', text: 'Se as compras estiverem na mala, vá primeiro à eTax-Free station/Customs, e não diretamente ao check-in. A alfândega tem o direito de pedir para ver os bens.' }
            ]
          },
          {
            id: 'validate',
            title: '2. Validação eTax-Free',
            content: [
              { kind: 'checklist', items: [
                'Digitalize o passaporte',
                'Digitalize o cartão de embarque',
                'Digitalize o código QR/número eTax-Free ou apresente o formulário',
                'Siga o sinal do sistema: “green” normalmente significa confirmação automática',
                'Se aparecer “red”, dirija-se a um funcionário customs/AT com os bens e documentos'
              ] }
            ]
          },
          {
            id: 'refund',
            title: '3. Receba o reembolso',
            content: [
              { kind: 'paragraph', text: 'Após a validação aduaneira, dirija-se ao balcão do operador Tax-Free. O reembolso para cartão costuma ser mais vantajoso e seguro, mas pode demorar vários dias ou semanas. O numerário é mais rápido, mas a comissão é muitas vezes mais alta.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'how-much',
      title: 'Quanto recebe realmente',
      content: [
        { kind: 'paragraph', text: 'Em Portugal continental, a taxa normal de IVA é 23%. Na Madeira e nos Açores as taxas são mais baixas, e alguns bens têm taxas reduzidas. Mas mesmo com 23%, o reembolso não é calculado como 23% do preço, porque o IVA já está incluído no talão.' },
        { kind: 'paragraph', text: 'Exemplo: compra de 123 €. Dentro do preço, o IVA é 23 €. O operador retém uma comissão. Se a comissão for 10%, recebe cerca de 20,70 €, e não 28,29 € nem 23% do valor total da compra.' },
        { kind: 'checklist', items: [
          'Preço com IVA: 123 €',
          'Base tributável: 100 €',
          'IVA 23%: 23 €',
          'A comissão do operador de 5–10% reduz o pagamento',
          'Quanto menor for o talão, mais visível é a comissão',
          'Para cartão é frequentemente mais vantajoso do que em numerário',
          'A loja pode não trabalhar com todos os operadores'
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes',
      content: [
        { kind: 'checklist', items: [
          'Despachar a mala com as compras antes da verificação aduaneira',
          'Compra de 49,99 €: o limite de 50 € não foi atingido',
          'Tentar fazer Tax-Free com vários talões pequenos em vez de um único recibo/fatura',
          'Usar o bem antes da saída: roupa sem etiquetas, equipamento em utilização ativa',
          'Não levar o passaporte para a loja',
          'Chegar ao aeroporto em cima da hora de embarque',
          'Pensar que a autorização de residência em Portugal não é visível: numa verificação, a residência pode ser fundamento para recusa',
          'Esperar o reembolso sem validação aduaneira — o operador não pagará o dinheiro'
        ] },
        { kind: 'warning', text: 'Se sair da UE não a partir de Portugal, mas, por exemplo, via Madrid, Paris ou Frankfurt, a validação aduaneira final normalmente é feita no último aeroporto da UE antes do voo para fora da União. A loja portuguesa deve, ainda assim, emitir o formulário Tax-Free correto.' }
      ]
    }
  ],
  costs: [
    { label: 'Valor mínimo de uma compra para Tax-Free', amountEUR: 50, note: 'Limite por um recibo/fatura com IVA; vários talões normalmente não são somados.' },
    { label: 'Comissão aproximada do operador', amountEURMin: 1, amountEURMax: 10, note: 'Depende do valor e do operador; na prática é retida do reembolso, muitas vezes cerca de 5–10% do montante do IVA, mas as tarifas podem ser progressivas.' }
  ],
  sources: [
    {
      title: 'Autoridade Tributária / Portal das Finanças: Tax Free para viajantes',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Aeroporto de Lisboa: serviços no aeroporto e Tax Free',
      url: 'https://www.aeroportolisboa.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei n.º 19/2017: regime e-Taxfree em Portugal',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/19-2017-106446139',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
