export default {
  editorialVoice: 'hackportugal',
  id: 'cheque-bebe-municipal',
  categoryId: 'education_children',
  title: 'Cheque-Bebé e apoios municipais para recém-nascidos',
  tldr: 'O Cheque-Bebé não é uma prestação nacional, mas sim um apoio municipal: um vale ou uma compensação de despesas com a criança. Em 2026, Cascais atribui 500 €, Oeiras — 350 €, e em pequenos municípios encontram-se valores de 250–1 000 €. Normalmente, o pedido é apresentado na Câmara Municipal no prazo de 6 meses após o nascimento ou a adoção. Condições-chave: a criança e pelo menos um dos progenitores com NIF e residência fiscal/morada efetiva no município, sem dívidas à Câmara e às Finanças.',
  tags: ['cheque-bebé', 'município', 'crianças', 'câmara'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o Cheque-Bebé',
      content: [
        { kind: 'paragraph', text: 'Cheque-Bebé, Incentivo à Natalidade, Apoio à Natalidade ou Bebé+ é um apoio local da Câmara Municipal. Não é uma prestação da Segurança Social e não depende diretamente do seu visto D1-D8, autorização de residência AIMA ou nacionalidade, salvo se as regras municipais introduzirem restrições específicas.' },
        { kind: 'paragraph', text: 'O formato depende do município: transferência bancária, cartão/vale para compras em comerciantes locais, reembolso mediante recibos/faturas ou um regime misto. Normalmente, o dinheiro pode ser gasto em artigos para bebé, farmácia, roupa, equipamento e, por vezes, serviços de saúde/educação.' },
        { kind: 'checklist', items: [
          'Cascais: Cheque-Bebé de 500 € por criança, no âmbito do programa municipal Cascais Baby.',
          'Oeiras: Apoio à Natalidade de 350 € por criança.',
          'Pequenos municípios: frequentemente 250–1 000 €, por vezes mais para o 2.º/3.º filho.',
          'O prazo de candidatura é, na maioria dos casos, de 6 meses após o nascimento ou a adoção.',
          'É uma medida separada: não substitui o abono de família, a licença parental nem as deduções fiscais em IRS.'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem costuma ter direito',
      content: [
        { kind: 'paragraph', text: 'As condições exatas constam do Regulamento Municipal da Câmara em causa. Para expatriados, o principal risco não é o valor, mas sim a prova da ligação ao município: morada, NIF, residência fiscal e inexistência de dívidas.' },
        { kind: 'checklist', items: [
          'A criança nasceu ou foi adotada, e existe assento de nascimento / certidão de nascimento.',
          'Pelo menos um progenitor ou representante legal reside no município.',
          'O progenitor tem NIF; muitas vezes é exigida residência fiscal neste município junto das Finanças.',
          'A criança também tem NIF ou este deve ser obtido antes do pagamento.',
          'A família está registada na morada: contrato de arrendamento, escritura, atestado de residência da Junta de Freguesia ou fatura de utilities.',
          'Não existem dívidas à Câmara Municipal, aos serviços municipais e, por vezes, à Autoridade Tributária.',
          'O pedido é apresentado dentro do prazo: normalmente até 6 meses após o nascimento, mas em alguns municípios o prazo é de 90 dias ou 12 meses.',
          'As compras, caso seja necessário reembolso, foram feitas após o nascimento da criança e emitidas em fatura com o NIF do requerente ou da criança.'
        ] },
        { kind: 'warning', text: 'Não conte com “vivo perto de Cascais/Oeiras”. O direito costuma estar ligado ao município específico, e não à área da Grande Lisboa. Se a sua morada for na Amadora, em Sintra ou em Lisboa, o programa de Cascais/Oeiras não se aplica.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos: o que preparar com antecedência',
      content: [
        { kind: 'paragraph', text: 'A lista varia um pouco, mas o conjunto de base é quase sempre igual. É melhor reuni-lo antes do nascimento: depois da maternidade, os prazos passam depressa, sobretudo se for necessário obter o NIF da criança e a certidão.' },
        { kind: 'checklist', items: [
          'Documento do progenitor: passaporte, Cartão de Cidadão, autorização de residência ou outro ID.',
          'NIF do progenitor requerente.',
          'NIF da criança: é obtido nas Finanças ou através de representante, se a criança ainda for bebé.',
          'Certidão de nascimento / assento de nascimento da criança.',
          'Comprovativo de morada: atestado de residência da Junta de Freguesia, contrato de arrendamento, escritura, fatura de água/luz/telecom.',
          'Comprovativo de residência fiscal do Portal das Finanças, se a Câmara o exigir.',
          'IBAN do requerente, se o pagamento for por transferência bancária.',
          'Declaração de não dívida à Autoridade Tributária e à Segurança Social — por vezes a Câmara pede-a diretamente, por vezes solicita que seja carregada.',
          'Faturas com NIF, se o programa funcionar como reembolso e não como cheque fixo.',
          'Formulário municipal, assinado manualmente ou através da Chave Móvel Digital (CMD), se a submissão for online.'
        ] }
      ]
    },
    {
      id: 'apply',
      title: 'Como apresentar o pedido na Câmara Municipal',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-regulation', title: '1. Encontre a página da sua Câmara', content: [
            { kind: 'paragraph', text: 'Procure no site da Câmara as expressões “Cheque Bebé”, “Apoio à Natalidade”, “Incentivo à Natalidade”, “Bebé+”, “Regulamento Municipal”. Verifique o ano e o PDF do regulamento: os valores e os prazos mudam anualmente através do orçamento municipal.' }
          ] },
          { id: 'confirm-deadline', title: '2. Confirme o prazo de candidatura', content: [
            { kind: 'paragraph', text: 'O prazo típico é de 6 meses a contar da data de nascimento ou adoção. Se a criança nasceu em 10 de abril de 2026, o prazo seguro é 10 de outubro de 2026, salvo se o regulamento do seu município indicar outro prazo.' }
          ] },
          { id: 'submit', title: '3. Submeta online ou presencialmente', content: [
            { kind: 'paragraph', text: 'As Câmaras maiores aceitam candidaturas através de balcão online/serviços online com CMD ou por email com PDF. Em pequenos municípios, muitas vezes é mais simples ir presencialmente ao Balcão Único/Atendimento Municipal.' }
          ] },
          { id: 'track', title: '4. Acompanhe os pedidos da Câmara', content: [
            { kind: 'paragraph', text: 'Se faltar algum documento, a Câmara costuma dar um prazo para correção. Verifique o email e a caixa postal. Não responder é uma causa frequente de indeferimento.' }
          ] }
        ] }
      ]
    },
    {
      id: 'examples-2026',
      title: 'Exemplos de valores em 2026',
      content: [
        { kind: 'paragraph', text: 'Os valores abaixo são referências de programas municipais em vigor em abril de 2026. Antes de apresentar o pedido, abra na mesma o site da sua Câmara: os apoios são aprovados localmente e podem depender do orçamento, do registo da família e da inexistência de dívidas.' },
        { kind: 'checklist', items: [
          'Cascais — 500 € pelo Cheque-Bebé/Cascais Baby: candidatura através da Câmara Municipal de Cascais, normalmente para residentes no concelho.',
          'Oeiras — 350 € pelo Apoio à Natalidade: candidatura através da Câmara Municipal de Oeiras, para residentes no concelho.',
          'Zonas do interior e pequenas cidades — frequentemente 500–1 000 €, por vezes com aumento para o 2.º/3.º filho.',
          'Alguns municípios não pagam em dinheiro, mas sim através de vale que só pode ser usado em aderentes locais.',
          'Alguns programas exigem que as compras sejam feitas no comércio local do município.'
        ] },
        { kind: 'warning', text: 'Não compre tudo antecipadamente sem verificar as regras. Se o programa reembolsar despesas apenas mediante faturas posteriores ao nascimento e apenas em lojas do concelho, recibos da Amazon, IKEA ou de outro município podem não ser aceites.' }
      ]
    },
    {
      id: 'combine-benefits',
      title: 'Com que apoios pode acumular',
      content: [
        { kind: 'paragraph', text: 'O Cheque-Bebé municipal pode normalmente ser recebido em paralelo com prestações nacionais. São níveis diferentes: Câmara Municipal, Segurança Social e IRS.' },
        { kind: 'checklist', items: [
          'Abono de família para crianças e jovens — prestação nacional da Segurança Social, dependente do rendimento do agregado familiar.',
          'Subsídio parental — pagamentos durante a licença parental, se existirem contribuições para a Segurança Social.',
          'Dedução à coleta IRS por dependente — dedução fiscal na declaração anual de IRS.',
          'Reembolso de Creche ou apoio Creche — se existirem programas locais da Câmara ou da Santa Casa.',
          'Cheque-dentista, vacinação e SNS — através do número de utente da criança.',
          'Descontos municipais em transportes, piscina, ATL, escola ou manuais — verifique separadamente no site da Câmara.'
        ] },
        { kind: 'warning', text: 'Se se mudou recentemente, comece por regularizar a morada: NIF com a residência fiscal correta nas Finanças, contrato/atestado e registo da criança. Muitas recusas não estão ligadas à nacionalidade, mas sim ao facto de a Câmara não o identificar como residente do município.' }
      ]
    }
  ],
  costs: [
    { label: 'Cascais — Cheque-Bebé', amountEUR: 500, note: 'Apoio municipal por criança; condições e forma de pagamento de acordo com as regras da Câmara Municipal de Cascais.' },
    { label: 'Oeiras — Apoio à Natalidade', amountEUR: 350, note: 'Apoio municipal por criança; candidatura na Câmara Municipal de Oeiras.' },
    { label: 'Intervalo típico noutros municípios', amountEURMin: 250, amountEURMax: 1000, note: 'Os valores variam muito; verifique o regulamento municipal e o orçamento para 2026.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Cascais — Cascais Baby / Cheque-Bebé', url: 'https://www.cm-cascais.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Oeiras — Apoio à Natalidade', url: 'https://www.cm-oeiras.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal ePortugal — registo de nascimento e documentos da criança', url: 'https://www.gov.pt/servicos/registar-nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Autoridade Tributária — NIF e certidões no Portal das Finanças', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
