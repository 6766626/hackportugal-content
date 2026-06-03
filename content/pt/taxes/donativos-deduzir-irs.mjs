export default {
  editorialVoice: 'hackportugal',
  id: 'donativos-deduzir-irs',
  categoryId: 'taxes',
  title: 'Donativos IRS: benefícios fiscais por donativos ao abrigo da Lei do Mecenato',
  tldr: 'Os donativos em Portugal podem reduzir o IRS se a entidade beneficiária tiver direito a receber donativos fiscalmente relevantes e o pagamento estiver emitido com o seu NIF. Regra base para pessoas singulares: 25% do valor do donativo é deduzido à coleta de IRS; para muitas IPSS, entidades religiosas, culturais e científicas aplica-se um limite até 15% da coleta. Na declaração de IRS 2025, entregue de 01/04 a 30/06/2026, isto verifica-se no Anexo H, Quadro 6, campo 6B. A consignação de IRS de 0,5% não é uma despesa e não é a mesma coisa.',
  tags: ['irs', 'donativos', 'mecenato', 'anexo-h'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts',
      title: 'O que conta como donativo para efeitos de IRS',
      content: [
        { kind: 'paragraph', text: 'Um donativo é uma doação gratuita em dinheiro ou em bens a uma organização reconhecida para efeitos de benefícios fiscais: IPSS, Misericórdias, algumas associações, fundações, Igreja e outras organizações religiosas, entidades culturais, científicas, educativas e sociais.' },
        { kind: 'paragraph', text: 'Para uma pessoa singular residente, o efeito fiscal é normalmente este: 25% do valor do donativo é deduzido à coleta de IRS — o imposto calculado antes das deduções pessoais. Não é um reembolso automático de 25% para o cartão, mas sim uma redução do IRS final a pagar ou um aumento do reembolso, se tiver havido retenção na fonte.' },
        { kind: 'checklist', items: [
          'O donativo foi feito a uma organização com direito a benefício fiscal ao abrigo do EBF / regime do mecenato',
          'O seu NIF consta da fatura, recibo ou recibo de donativo',
          'O pagamento pode ser comprovado: transferência bancária, MB WAY, Multibanco, cartão, cheque',
          'A entidade beneficiária comunicou correctamente o donativo à AT ou você pode inseri-lo manualmente no IRS',
          'O donativo não foi o pagamento de um serviço, bilhete ou quota de associado com contrapartida',
          'Você é residente fiscal em Portugal no ano correspondente',
          'O donativo diz respeito ao ano da declaração: donativos de 2025 são declarados no IRS 2025, com entrega em 2026'
        ] }
      ]
    },
    {
      id: 'deduction-rules',
      title: 'Quanto pode deduzir: 25% e limite da coleta',
      content: [
        { kind: 'paragraph', text: 'A regra standard para pessoas singulares ao abrigo do Estatuto dos Benefícios Fiscais: 25% do valor dos donativos é deduzido à coleta de IRS. Para a maioria dos donativos a IPSS privadas e a entidades religiosas, culturais, científicas e sociais aplica-se um tecto: a dedução não pode exceder 15% da sua coleta.' },
        { kind: 'paragraph', text: 'Exemplo: coleta de IRS = 3 000 €. Você fez um donativo de 1 000 € a uma IPSS com direito a benefício fiscal. Cálculo: 1 000 € × 25% = 250 €. Limite de 15% da coleta = 450 €. Assim, pode utilizar a dedução total de 250 €.' },
        { kind: 'paragraph', text: 'Se, com a mesma coleta de 3 000 €, tiver feito um donativo de 3 000 €, a dedução calculada = 750 €, mas o limite de 15% da coleta = 450 €. No IRS, será aceite no máximo 450 €.' },
        { kind: 'warning', text: 'Na internet confundem-se frequentemente três coisas diferentes: donativos com dedução de 25%, consignação de IRS de 0,5% e regras de mecenato aplicáveis a empresas. Para pessoas singulares no IRS, não aplique “5%” como taxa universal de dedução. Se a organização falar de um regime especial de mecenato cultural/científico, peça-lhe o recibo fiscal e confirme o código do benefício no Anexo H.' }
      ]
    },
    {
      id: 'documents',
      title: 'Que documentos deve guardar',
      content: [
        { kind: 'paragraph', text: 'A AT pode aceitar parte dos dados automaticamente, mas a obrigação de provar a dedução continua a ser do contribuinte. Guarde os documentos durante pelo menos 4 anos após a entrega da declaração, tal como outros comprovativos de IRS.' },
        { kind: 'checklist', items: [
          'Recibo de donativo emitido pela organização',
          'Nome e NIPC/NIF da organização beneficiária',
          'O seu NIF como doador',
          'Data do donativo',
          'Valor em €',
          'Formulação indicando que se trata de um donativo sem contrapartida',
          'Indicação do enquadramento fiscal: EBF / Lei do Mecenato / entidade elegível',
          'Comprovativo de pagamento do banco, MB WAY ou Multibanco',
          'Email ou carta da organização, se o recibo tiver chegado separadamente',
          'Para donativo em espécie — avaliação do valor e documento de entrega'
        ] },
        { kind: 'warning', text: 'A compra de um bilhete para um jantar de beneficência, merchandising, rifas ou adesão a um clube normalmente não constitui um donativo pelo valor total, se recebeu um bem ou serviço. A dedução fiscal só é possível sobre a parte gratuita, se esta estiver documentalmente separada.' }
      ]
    },
    {
      id: 'declare-anexo-h',
      title: 'Como declarar no IRS: Anexo H, Quadro 6',
      content: [
        { kind: 'paragraph', text: 'A declaração de IRS relativa a 2025 é entregue no Portal das Finanças de 01/04/2026 a 30/06/2026. Os donativos são verificados no Modelo 3 → Anexo H → Quadro 6, campo 6B. Se o valor já estiver pré-preenchido, confirme o NIF da entidade beneficiária, o código do benefício e o montante.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar no Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Use NIF + senha ou Chave Móvel Digital. Abra IRS → Entregar declaração → IRS Automático ou Modelo 3. Se tiver rendimentos complexos, recibos verdes, rendimentos estrangeiros ou alterações de residência fiscal, é mais frequente precisar do Modelo 3 preenchido manualmente.' }
          ] },
          { id: 'check-h', title: '2. Abrir o Anexo H', content: [
            { kind: 'paragraph', text: 'No Anexo H encontram-se as deduções à coleta e os benefícios fiscais. Os donativos aparecem no Quadro 6. Se usar o IRS Automático, abra ainda assim a simulação preliminar e confirme se os donativos foram considerados.' }
          ] },
          { id: 'validate', title: '3. Conferir os valores', content: [
            { kind: 'checklist', items: [
              'O valor coincide com o recibo',
              'O ano do donativo está correcto',
              'O NIF/NIPC da organização está correcto',
              'O código do benefício corresponde ao tipo de entidade',
              'Não há duplicação do mesmo valor',
              'A dedução não excede o limite de coleta aplicável',
              'Após a simulação de IRS, é visível a redução do imposto ou o aumento do reembolso'
            ] }
          ] },
          { id: 'manual', title: '4. Se o donativo não aparecer', content: [
            { kind: 'paragraph', text: 'Pode inserir os dados manualmente no Anexo H, se tiver um documento da organização. Depois da alteração manual, guarde o recibo e o comprovativo de pagamento: a AT pode pedir provas através do e-Balcão ou durante a verificação da declaração.' }
          ] }
        ] }
      ]
    },
    {
      id: 'consignacao',
      title: 'Não confunda com a consignação de IRS de 0,5%',
      content: [
        { kind: 'paragraph', text: 'A consignação de IRS é um mecanismo separado: você escolhe uma entidade à qual o Estado entrega 0,5% do seu IRS liquidado. Isto não aumenta o seu imposto nem reduz o seu reembolso. É apenas a afectação de uma parte do IRS já calculado à organização escolhida.' },
        { kind: 'paragraph', text: 'Um donativo é dinheiro seu, efectivamente transferido para a organização durante o ano. Pode dar direito a uma dedução de 25% dentro dos limites. A consignação de 0,5% pode ser feita mesmo sem donativo, e o donativo pode ser declarado independentemente da consignação.' },
        { kind: 'checklist', items: [
          'Donativo: você paga directamente à organização',
          'Donativo: é necessário recibo com o seu NIF',
          'Donativo: é declarado como benefício fiscal no Anexo H',
          'Donativo: normalmente dá uma dedução de 25% do valor',
          'Consignação: não sai dinheiro do seu bolso',
          'Consignação: o Estado entrega 0,5% do IRS à entidade escolhida',
          'Consignação: não substitui a dedução fiscal pelo donativo'
        ] }
      ]
    },
    {
      id: 'expat-pitfalls',
      title: 'Erros típicos de expatriados',
      content: [
        { kind: 'warning', text: 'Se não foi residente fiscal em Portugal no ano do donativo ou entrega IRS como não residente apenas por rendimentos portugueses, as deduções pessoais à coleta podem não funcionar da mesma forma que para um residente. Verifique o estatuto de residência fiscal relativo ao ano, e não à data de entrega da declaração.' },
        { kind: 'checklist', items: [
          'O donativo foi feito com um cartão estrangeiro, mas o recibo não tem NIF — a dedução pode perder-se',
          'O donativo foi feito a uma organização de solidariedade estrangeira sem estatuto fiscal português — normalmente não há dedução automática no IRS',
          'A organização é “sem fins lucrativos”, mas não tem direito a benefício fiscal — a palavra associação, por si só, não basta',
          'Inseriu o donativo como despesa geral familiar — é a categoria errada',
          'Declarou o valor no ano de pagamento errado face ao ano fiscal',
          'Confundem coleta com retenção no salário: o limite de 15% é calculado sobre a coleta, não sobre o seu salário bruto',
          'Apagou o Anexo H porque “o IRS Automático calculou tudo” — os donativos podem ter ficado fora do cálculo'
        ] },
        { kind: 'paragraph', text: 'Teste prático antes de um donativo elevado: peça à organização a frase “emite recibo de donativo para efeitos fiscais em IRS?” e confirme o NIPC, o regime e o código/descrição para o Anexo H. Se a resposta for vaga, não conte com a dedução.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças: informação e formulários de IRS / Anexo H',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: modelos e formulários de IRS',
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
