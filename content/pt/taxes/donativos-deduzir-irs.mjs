export default {
  editorialVoice: 'hackportugal',
  id: 'donativos-deduzir-irs',
  categoryId: 'taxes',
  title: 'Donativos IRS: benefícios fiscais por donativos ao abrigo da Lei do Mecenato',
  tldr: 'Os donativos em Portugal podem reduzir o IRS, se a entidade beneficiária tiver direito a receber donativos fiscalmente relevantes e o pagamento estiver emitido com o seu NIF. Regra base para pessoas singulares: 25% do valor do donativo é deduzido à collecta de IRS; para muitas IPSS, entidades religiosas, culturais e científicas aplica-se um limite até 15% da collecta. Na declaração IRS 2025, entregue de 01.04 a 30.06.2026, isto é verificado no Anexo H, Quadro 6. A consignação de IRS de 0,5% não é uma despesa e não é a mesma coisa.',
  tags: ['irs', 'donativos', 'mecenato', 'anexo-h'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts',
      title: 'O que conta como donativo para IRS',
      content: [
        { kind: 'paragraph', text: 'Donativo é uma doação gratuita de dinheiro ou bens a uma organização reconhecida para efeitos de benefícios fiscais: IPSS, Misericórdias, algumas associações, fundações, Igreja e outras organizações religiosas, entidades culturais, científicas, educativas e sociais.' },
        { kind: 'paragraph', text: 'Para uma pessoa singular residente, o efeito fiscal é normalmente este: 25% do valor do donativo é deduzido à collecta de IRS — o imposto calculado antes das deduções pessoais. Não é um reembolso automático de 25% para o cartão, mas sim uma redução do IRS final a pagar ou um aumento do reembolso, se tiver havido retenção na fonte.' },
        { kind: 'checklist', items: [
          'O donativo foi feito a uma organização com direito a benefício fiscal ao abrigo do EBF / regime do mecenato',
          'A fatura, recibo ou recibo indica o seu NIF',
          'O pagamento pode ser comprovado: transferência bancária, MB WAY, Multibanco, cartão, cheque',
          'A entidade beneficiária comunicou corretamente o donativo à AT ou você pode introduzi-lo manualmente no IRS',
          'O donativo não foi o pagamento de um serviço, bilhete ou quota com contrapartida',
          'Você é residente fiscal em Portugal no ano em causa',
          'O donativo diz respeito ao ano da declaração: donativos de 2025 são declarados no IRS 2025, entregue em 2026'
        ] }
      ]
    },
    {
      id: 'deduction-rules',
      title: 'Quanto pode deduzir: 25% e limite da collecta',
      content: [
        { kind: 'paragraph', text: 'A regra normal para pessoas singulares no Estatuto dos Benefícios Fiscais: 25% do valor dos donativos é deduzido à collecta de IRS. Para a maioria dos donativos a IPSS privadas e entidades religiosas, culturais, científicas e sociais, aplica-se um teto: a dedução não pode exceder 15% da sua collecta.' },
        { kind: 'paragraph', text: 'Exemplo: collecta de IRS = 3 000 €. Fez um donativo de 1 000 € a uma IPSS com direito a benefício fiscal. Cálculo: 1 000 € × 25% = 250 €. Limite de 15% da collecta = 450 €. Portanto, pode utilizar a dedução total de 250 €.' },
        { kind: 'paragraph', text: 'Se, com a mesma collecta de 3 000 €, tiver feito um donativo de 3 000 €, a dedução calculada = 750 €, mas o limite de 15% da collecta = 450 €. No IRS, será aceite no máximo 450 €.' },
        { kind: 'warning', text: 'Na internet confundem-se frequentemente três coisas diferentes: donativos com dedução de 25%, consignação de IRS de 0,5% e regras empresariais de mecenato para empresas. Para pessoas singulares no IRS, não aplique “5%” como taxa universal de dedução. Se a organização falar de um regime especial de mecenato cultural/científico, peça-lhe o recibo fiscal e confirme o código do benefício no Anexo H.' }
      ]
    },
    {
      id: 'documents',
      title: 'Que documentos deve guardar',
      content: [
        { kind: 'paragraph', text: 'A AT pode aceitar parte dos dados automaticamente, mas a obrigação de provar a dedução continua a ser do contribuinte. Guarde os documentos durante pelo menos 4 anos após a entrega da declaração, tal como outros comprovativos de IRS.' },
        { kind: 'checklist', items: [
          'Recibo de donativo da organização',
          'Nome e NIPC/NIF da organização beneficiária',
          'O seu NIF como doador',
          'Data do donativo',
          'Valor em €',
          'Formulação que indique que se trata de um donativo sem contrapartida',
          'Indicação do enquadramento fiscal: EBF / Lei do Mecenato / entidade elegível',
          'Comprovativo de pagamento do banco, MB WAY ou Multibanco',
          'Email ou carta da organização, se o recibo tiver chegado separadamente',
          'Para donativo in kind — avaliação do valor e documento de entrega'
        ] },
        { kind: 'warning', text: 'A compra de um bilhete para um jantar solidário, merchandising, rifas ou a adesão a um clube normalmente não é um donativo pela totalidade do valor, se tiver recebido um bem ou serviço. A dedução fiscal só é possível sobre a parte gratuita, se esta estiver discriminada documentalmente.' }
      ]
    },
    {
      id: 'declare-anexo-h',
      title: 'Como declarar no IRS: Anexo H, Quadro 6',
      content: [
        { kind: 'paragraph', text: 'A declaração IRS referente a 2025 é entregue no Portal das Finanças de 01.04.2026 a 30.06.2026. Os donativos são verificados em Modelo 3 → Anexo H → Quadro 6. Se o valor já estiver pré-preenchido, confirme o NIF da entidade beneficiária, o código do benefício e o valor.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar no Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Use NIF + senha ou Chave Móvel Digital. Abra IRS → Entregar declaração → IRS Automático ou Modelo 3. Se tiver rendimentos complexos, recibos verdes, rendimentos estrangeiros ou alterações de residência, é mais frequente precisar do Modelo 3 manualmente.' }
          ] },
          { id: 'check-h', title: '2. Abrir o Anexo H', content: [
            { kind: 'paragraph', text: 'No Anexo H encontram-se as deduções à coleta e benefícios fiscais. Os donativos são refletidos no Quadro 6. Se usar IRS Automático, ainda assim abra a simulação preliminar e confirme se os donativos foram considerados.' }
          ] },
          { id: 'validate', title: '3. Conferir os valores', content: [
            { kind: 'checklist', items: [
              'O valor coincide com o recibo',
              'O ano do donativo está correto',
              'O NIF/NIPC da organização está correto',
              'O código do benefício corresponde ao tipo de entidade',
              'Não há duplicação do mesmo valor',
              'A dedução não excede o limite aplicável da collecta',
              'Após a simulação de IRS vê-se uma redução do imposto ou um aumento do reembolso'
            ] }
          ] },
          { id: 'manual', title: '4. Se o donativo não aparecer', content: [
            { kind: 'paragraph', text: 'Pode introduzir os dados manualmente no Anexo H, se tiver um documento da organização. Depois da alteração manual, guarde o recibo e o comprovativo de pagamento: a AT pode pedir provas através do e-Balcão ou durante a verificação da declaração.' }
          ] }
        ] }
      ]
    },
    {
      id: 'consignacao',
      title: 'Não confunda com a consignação de IRS de 0,5%',
      content: [
        { kind: 'paragraph', text: 'A consignação de IRS é um mecanismo separado: você escolhe a entidade à qual o Estado transferirá 0,5% do seu IRS liquidado. Isto não aumenta o seu imposto nem reduz o seu reembolso. É simplesmente a afetação de parte do IRS já calculado à organização escolhida.' },
        { kind: 'paragraph', text: 'Um donativo é dinheiro real seu, transferido para uma organização durante o ano. Pode dar uma dedução de 25% dentro dos limites. A consignação de 0,5% pode ser feita mesmo sem donativo, e o donativo pode ser declarado independentemente da consignação.' },
        { kind: 'checklist', items: [
          'Donativo: você paga diretamente à organização',
          'Donativo: é necessário recibo com o seu NIF',
          'Donativo: é declarado como benefício fiscal no Anexo H',
          'Donativo: normalmente dá uma dedução de 25% do valor',
          'Consignação: não sai dinheiro do seu bolso',
          'Consignação: o Estado transfere 0,5% do IRS para a entidade escolhida',
          'Consignação: não substitui a dedução fiscal pelo donativo'
        ] }
      ]
    },
    {
      id: 'expat-pitfalls',
      title: 'Erros típicos de expats',
      content: [
        { kind: 'warning', text: 'Se não foi residente fiscal em Portugal no ano do donativo ou entrega IRS como não residente apenas por rendimentos portugueses, as deduções pessoais à coleta podem não funcionar da mesma forma que para um residente. Verifique o estatuto de residência referente ao ano, e não a data de entrega da declaração.' },
        { kind: 'checklist', items: [
          'O donativo foi feito com um cartão estrangeiro, mas o recibo não tem NIF — a dedução pode perder-se',
          'O donativo foi feito a uma charity estrangeira sem estatuto fiscal português — normalmente não há dedução automática no IRS',
          'A organização é “sem fins lucrativos”, mas não tem direito a benefício fiscal — a palavra associação, por si só, não basta',
          'Introduziu o donativo como despesa geral familiar — é a categoria errada',
          'Declarou o valor no ano de pagamento errado para o ano fiscal em causa',
          'Confunde-se collecta com retenção no salário: o limite de 15% é calculado sobre a collecta, não sobre o seu salário bruto',
          'Eliminou o Anexo H porque “o IRS Automático calculou tudo” — os donativos podem ter ficado fora do cálculo'
        ] },
        { kind: 'paragraph', text: 'Teste prático antes de um donativo grande: peça à organização a frase “emite recibo de donativo para efeitos fiscais em IRS?” e confirme o NIPC, o regime e o código/descrição para o Anexo H. Se a resposta for vaga, não conte com a dedução.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças: informação e formulários IRS / Anexo H',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: modelos e formulários IRS',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/irs/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE: Estatuto dos Benefícios Fiscais, regime dos donativos e mecenato',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2002-148011287',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
