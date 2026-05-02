export default {
  editorialVoice: 'hackportugal',
  id: 'ancv-cheque-acolhimento',
  categoryId: 'daily_life',
  title: 'Cheque Acolhimento: vouchers turísticos atribuídos pelo empregador',
  tldr: 'O Cheque Acolhimento é um voucher turístico corporativo para férias em Portugal: hotéis, alojamento local, restaurantes, Quintas, serviços turísticos junto dos parceiros do programa. O empregador pode atribuir ao trabalhador até 500 € por ano como benefício extrassalarial; para a empresa, isto é declarado como despesa fiscalmente aceite. Para o trabalhador, não é dinheiro: o voucher não pode ser levantado em numerário, normalmente não dá troco, e o prazo de validade e a rede de aceitação devem ser verificados antes da reserva.',
  tags: ['turismo', 'voucher', 'trabalho', 'benefícios'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o Cheque Acolhimento',
      content: [
        { kind: 'paragraph', text: 'O Cheque Acolhimento não é um apoio público pago a particulares, mas sim um instrumento corporativo: a empresa compra vouchers turísticos e entrega-os aos trabalhadores como benefício social/motivacional. Pela sua lógica, é semelhante aos Chèques Vacances franceses: o dinheiro fica previamente “bloqueado” para turismo e hotelaria dentro de uma rede de parceiros.' },
        { kind: 'paragraph', text: 'A utilização é normalmente limitada a Portugal e aos parceiros do programa: hotéis, alojamento local, turismo rural, Quintas, restaurantes, experiências turísticas. Antes de pagar, deve verificar se o estabelecimento específico aceita Cheque Acolhimento, porque não é um cartão bancário nem um voucher universal.' },
        { kind: 'checklist', items: [
          'É atribuído pelo empregador, não pela AIMA, Câmara Municipal ou Segurança Social',
          'O valor nominal é escolhido pela empresa; a referência do programa é até 500 € por ano por trabalhador',
          'Pode ser utilizado para alojamento, refeições e serviços turísticos junto dos parceiros',
          'O voucher não é dinheiro e normalmente não pode ser convertido em numerário',
          'O troco em pagamentos com voucher normalmente não é devolvido',
          'O prazo de validade e as regras de pagamento parcial dependem do emissor e do formato',
          'Pode não funcionar para reservas através da Booking/Airbnb/OTA — confirme a possibilidade de pagamento direto junto do alojamento',
          'Para um trabalhador expatriado, o NIF e dados corretos no payroll são importantes, mas não é necessário qualquer procedimento de imigração separado'
        ] }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Como obter através do empregador',
      content: [
        { kind: 'paragraph', text: 'O trabalhador não “se candidata” por iniciativa própria ao Cheque Acolhimento junto do Turismo de Portugal. O caminho prático é perguntar aos RH/Payroll se a empresa tem uma política de benefícios flexíveis ou um orçamento social para turismo. Se não tiver, pode sugerir ao empregador aderir ao programa como alternativa a um bónus em dinheiro.' },
        { kind: 'checklist', items: [
          'Escreva aos RH: “A empresa oferece Cheque Acolhimento ou outro benefício de turismo?”',
          'Confirme o limite anual: o montante total de uma só vez ou em parcelas',
          'Peça as regras: prazo de validade, lista de parceiros, possibilidade de split payment',
          'Verifique se o benefit será refletido no recibo de vencimento',
          'Se for remote worker numa PT-entity, o direito depende normalmente da política da empresa, não da nacionalidade',
          'Se for contractor com recibos verdes, isto não é um employee benefit padrão — é necessário um acordo separado com o cliente',
          'Se o empregador for estrangeiro e não tiver PT payroll, o Cheque Acolhimento português normalmente não se aplica automaticamente'
        ] },
        { kind: 'warning', text: 'Não aceite um esquema do tipo “damos-lhe o voucher em vez de parte do salário” se isso reduzir o base salary, o subsídio de férias, o subsídio de Natal ou a base para a Segurança Social sem um acordo escrito claro. O benefit deve ser adicional ou um elemento de compensação corretamente formalizado.' }
      ]
    },
    {
      id: 'tax-and-payroll',
      title: 'Impostos e contabilidade: o que importa ao trabalhador',
      content: [
        { kind: 'paragraph', text: 'O principal argumento para as empresas é que até 500 € por ano por trabalhador podem ser considerados despesa associada ao programa de acolhimento/benefícios turísticos. Na prática, o tratamento fiscal depende da formalização: invoice em nome da empresa, lista de beneficiários, regulamento interno de benefícios e correta indicação no payroll.' },
        { kind: 'paragraph', text: 'Para o trabalhador, o essencial é não considerar o voucher como “dinheiro líquido”. Mesmo que a empresa diga “são 500 €”, só os pode utilizar de acordo com as regras da rede. Se o benefit aparecer no recibo de vencimento, confirme se houve retenção de IRS/Segurança Social e se o salário pago em dinheiro não diminuiu.' },
        { kind: 'checklist', items: [
          'Peça aos RH as condições escritas do benefit antes de o receber',
          'Verifique o recibo de vencimento do mês de atribuição',
          'Compare o salário base: não deve diminuir inesperadamente',
          'Confirme se o voucher não substituiu o subsídio de alimentação, caso isso não tenha sido acordado',
          'Guarde o email/a política da empresa — pode ser útil em caso de litígio',
          'Se for residente fiscal em PT, quaisquer employer benefits podem potencialmente ter impacto em IRS',
          'Se o montante for superior a 500 € por ano, peça aos RH que expliquem o tratamento fiscal do excedente',
          'Para a empresa, a vantagem fiscal não significa neutralidade fiscal automática para todos os trabalhadores'
        ] },
        { kind: 'warning', text: 'Em Portugal, em 2026, o IRS e a Segurança Social sobre employee benefits dependem da qualificação concreta do pagamento. Se os RH prometerem “isento de tudo”, peça uma referência ao parecer interno de um contabilista certificado ou fiscalista.' }
      ]
    },
    {
      id: 'where-to-use',
      title: 'Onde e como utilizar sem surpresas',
      content: [
        { kind: 'paragraph', text: 'O melhor cenário é escolher antecipadamente um parceiro da rede, escrever diretamente e obter confirmação por escrito: se aceitam Cheque Acolhimento, se a reserva pode ser paga total ou parcialmente, se o pagamento tem de ser feito no local e se existem blackout dates.' },
        { kind: 'checklist', items: [
          'Verifique o parceiro antes da reserva, não no balcão de receção',
          'Pergunte: “Aceitam Cheque Acolhimento? Em formato digital ou papel?”',
          'Confirme se pode combinar o voucher com cartão bancário',
          'Verifique se o montante é devolvido em caso de cancelamento da reserva',
          'Veja o prazo de validade: um voucher expirado normalmente não é prorrogado automaticamente',
          'Não conte com a utilização através de agregadores internacionais',
          'Num restaurante, confirme se o voucher é aceite em todo o menu ou apenas em refeições',
          'Para Quintas e turismo rural, confirme o número mínimo de noites',
          'Guarde a confirmação de pagamento até ao check-out e ao fecho da conta'
        ] },
        { kind: 'paragraph', text: 'Se estiver a planear férias em época alta — julho, agosto, Semana Santa, Natal/Ano Novo — reserve mais cedo. Ter um voucher não garante disponibilidade nem fixa o preço do alojamento.' }
      ]
    },
    {
      id: 'expat-cases',
      title: 'Casos típicos para expatriados',
      content: [
        { kind: 'substeps', items: [
          { id: 'employee-portuguese-company', title: 'É trabalhador de uma empresa portuguesa', content: [
            { kind: 'paragraph', text: 'É o caso mais simples. Peça aos RH para o incluírem no programa nas mesmas condições que os restantes trabalhadores. São necessários os dados normais de payroll: NIF, morada, dados bancários/de contacto e, por vezes, NISS.' }
          ] },
          { id: 'remote-for-foreign-company', title: 'Vive em PT, mas o empregador está no estrangeiro', content: [
            { kind: 'paragraph', text: 'Uma empresa estrangeira sem payroll português normalmente não atribui Cheque Acolhimento através do regime local. Pode existir um travel benefit semelhante, mas o seu tratamento fiscal em PT será uma questão separada.' }
          ] },
          { id: 'freelancer-recibos-verdes', title: 'Está em recibos verdes', content: [
            { kind: 'paragraph', text: 'O Cheque Acolhimento enquanto employee benefit normalmente não se aplica. O cliente pode pagar-lhe serviços ou reembolsar despesas nos termos do contrato, mas isso não é o mesmo que um voucher atribuído a um trabalhador.' }
          ] },
          { id: 'company-owner', title: 'É proprietário de uma Lda.', content: [
            { kind: 'paragraph', text: 'Pode discutir com o contabilista a compra de vouchers para trabalhadores, incluindo a gerência, se existir remuneração formalizada. São necessárias regras, limites e uma abordagem uniforme, para que a despesa pareça empresarial e não pessoal.' }
          ] }
        ] }
      ]
    },
    {
      id: 'red-flags',
      title: 'Sinais de alerta antes de aceitar',
      content: [
        { kind: 'checklist', items: [
          'O empregador propõe substituir parte do salário base por um voucher',
          'Não existem regras escritas nem prazo de validade',
          'Não é possível ver antecipadamente a lista de parceiros',
          'Os RH não explicam como o benefit aparece no recibo de vencimento',
          'O voucher só é aceite “em parceiros conhecidos”, sem rede pública',
          'O montante é prometido como “até 500 €”, mas na prática depende da performance sem critérios',
          'O voucher não pode ser utilizado na sua região ou nas datas de que precisa',
          'O cancelamento da reserva implica a perda total do valor nominal',
          'Propõem-lhe comprar o voucher por conta própria “com desconto” através de uma ligação não verificada'
        ] },
        { kind: 'warning', text: 'O Cheque Acolhimento é um benefit útil se viajar realmente por Portugal. Se a liquidez for mais importante para si, compare-o com um bónus em dinheiro: 500 € em voucher ≠ 500 € na conta bancária.' }
      ]
    }
  ],
  costs: [
    { label: 'Custo habitual para o trabalhador', amountEUR: 0, note: 'Se o voucher for atribuído pelo empregador como benefit, o trabalhador normalmente não paga pela emissão.' },
    { label: 'Limite anual típico do benefit', amountEURMax: 500, note: 'Referência do programa para a empresa por trabalhador por ano; o montante efetivo depende da política do empregador.' }
  ],
  sources: [
    { title: 'Turismo de Portugal — programas e iniciativas de apoio ao turismo', url: 'https://www.turismodeportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — IRC e despesas das empresas', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRC — regime de reconhecimento de despesas e documentação fiscal', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
