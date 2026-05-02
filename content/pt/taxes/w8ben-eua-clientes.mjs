export default {
  editorialVoice: 'hackportugal',
  id: 'w8ben-eua-clientes',
  categoryId: 'taxes',
  title: 'W-8BEN: como reduzir a retenção dos EUA de 30% para a taxa do tratado para Stripe, Amazon e IBKR',
  tldr: 'O W-8BEN é um formulário do IRS para pessoas singulares não residentes nos EUA. Se você for residente fiscal em Portugal, confirma o foreign status e permite aplicar o Portugal–US tax treaty: normalmente 0% para serviços/rendimentos empresariais sem estabelecimento estável nos EUA, 10% para parte dos royalties da Amazon KDP e 15% para dividendos dos EUA num broker como a IBKR. O formulário é válido até 31 de dezembro do terceiro ano seguinte: assinado em abril de 2026 — renovar até 31.12.2029.',
  tags: ['w8ben', 'irs', 'tratado', 'impostos', 'ibkr'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-does',
      title: 'O que faz o W-8BEN',
      content: [
        { kind: 'paragraph', text: 'Por defeito, os EUA podem reter 30% sobre certos pagamentos a estrangeiros: dividends, royalties, certain platform payments. O W-8BEN informa o agente pagador de que você não é uma US person e dá fundamento para aplicar a treaty rate em vez de 30%.' },
        { kind: 'paragraph', text: 'Para um residente de Portugal, aplica-se a Convention Between the United States of America and the Portuguese Republic for the Avoidance of Double Taxation. Na prática, não é uma taxa única, mas uma taxa por tipo de rendimento.' },
        { kind: 'checklist', items: [
          'serviços de freelancer prestados a partir de Portugal: normalmente 0% nos EUA, se não houver permanent establishment / fixed base nos EUA',
          'business profits: Article 7, normalmente 0% nos EUA sem permanent establishment',
          'independent personal services: Article 15, normalmente 0% sem fixed base nos EUA e na ausência de presença física prolongada nos EUA',
          'royalties, incluindo parte dos pagamentos da Amazon KDP: Article 12, para o Portugal–US treaty normalmente até 10%, e não 0%',
          'dividendos de ações dos EUA na IBKR: Article 10, normalmente 15% para um investidor de carteira',
          'capital gains sobre ações comuns dos EUA: normalmente 0% de withholding nos EUA, mas são declaradas em Portugal',
          'o formulário não elimina o IRS português: um residente de Portugal declara worldwide income'
        ] },
        { kind: 'warning', text: 'O W-8BEN é apenas para pessoas singulares. Se o beneficiário do pagamento for uma Lda portuguesa, US LLC, UK LTD ou outra empresa, normalmente é necessário o W-8BEN-E ou outro formulário. US citizens, green card holders e pessoas com US tax residency não usam o W-8BEN.' }
      ]
    },
    {
      id: 'when-platforms-ask',
      title: 'Onde o pedem: Stripe, Amazon, IBKR',
      content: [
        { kind: 'paragraph', text: 'O formulário raramente é enviado diretamente ao IRS. Normalmente, você preenche o tax interview dentro da plataforma, e a plataforma conserva o W-8BEN enquanto withholding agent.' },
        { kind: 'checklist', items: [
          'Amazon KDP: pede o tax interview antes dos pagamentos de royalties; sem tratado pode reter 30%',
          'Amazon Associates / affiliate: a qualificação do rendimento pode diferir dos royalties da KDP; verifique o wording no tax interview',
          'IBKR, Schwab, brokers dos EUA: o W-8BEN é necessário para reduced withholding sobre dividendos dos EUA — normalmente 15% em vez de 30%',
          'Stripe / Stripe Atlas / marketplaces: o formulário pode ser exigido para confirmar o foreign status e withholding zero sobre serviços',
          'cliente dos EUA através de plataforma: se for pagamento de serviços executados a partir de Portugal, usa-se frequentemente 0% ao abrigo do Article 7 ou 15',
          'US LLC: se você for proprietário de uma foreign-owned disregarded LLC, o formulário depende da estrutura e do tipo de pagamento; não preencha o W-8BEN de forma automática',
          'se a plataforma não permitir escolher o Portugal treaty, verifique se o país de residência fiscal está indicado como Portugal, e não o país do passaporte'
        ] }
      ]
    },
    {
      id: 'how-to-fill',
      title: 'Como preencher os campos principais',
      content: [
        { kind: 'paragraph', text: 'Os nomes dos campos podem variar no questionário online, mas a lógica é a mesma do IRS Form W-8BEN.' },
        { kind: 'checklist', items: [
          'Line 1 / Name: nome e apelido como no passaporte ou na autorização de residência',
          'Line 2 / Country of citizenship: nacionalidade, por exemplo Russian Federation, Brazil, Ukraine; não tem de ser necessariamente Portugal',
          'Line 3 / Permanent residence address: morada real de residência em Portugal; não use PO Box nem a morada de um intermediário',
          'Line 4 / Mailing address: preencha apenas se a morada postal for diferente',
          'Line 5 / U.S. TIN: normalmente fica em branco, se você não tiver SSN/ITIN; algumas situações exigem ITIN, mas para a maioria dos brokers e plataformas o foreign TIN é suficiente',
          'Line 6a / Foreign tax identifying number: o seu NIF português',
          'Line 8 / Date of birth: data de nascimento no formato da plataforma; no formulário em papel do IRS, normalmente MM-DD-YYYY',
          'Line 9 / Treaty country: Portugal, se você for residente fiscal em Portugal',
          'Line 10 / Special rates and conditions: é preenchida quando a plataforma exige o treaty article e a taxa concretos',
          'Signature: assina o próprio beneficial owner; agente/contabilista — apenas com poderes para tal'
        ] },
        { kind: 'warning', text: 'O NIF no W-8BEN não é um “equivalente português do SSN”, mas sim o foreign TIN para a treaty claim. Se você acabou de se mudar e ainda não se tornou residente fiscal em Portugal, não pode reivindicar automaticamente os Portugal treaty benefits.' }
      ]
    },
    {
      id: 'line-10-examples',
      title: 'Exemplos de Line 10 para a treaty rate',
      content: [
        { kind: 'paragraph', text: 'A Line 10 nem sempre é necessária. Os brokers aplicam frequentemente o Article 10 automaticamente após a escolha de Portugal. A Amazon e algumas plataformas podem pedir que indique article, rate e explanation.' },
        { kind: 'substeps', items: [
          {
            id: 'services',
            title: 'Serviços / freelance a partir de Portugal — 0%',
            content: [
              { kind: 'paragraph', text: 'Para serviços executados fisicamente a partir de Portugal, usam-se normalmente o Article 7 Business Profits ou o Article 15 Independent Personal Services. A ideia: o rendimento é tributado em Portugal se você não tiver permanent establishment / fixed base nos EUA.' },
              { kind: 'checklist', items: [
                'Article: 7 ou 15 — depende da formulação da plataforma',
                'Rate of withholding: 0%',
                'Type of income: services / business profits / independent personal services',
                'Explanation: resident of Portugal, no permanent establishment or fixed base in the United States, services performed outside the United States'
              ] }
            ]
          },
          {
            id: 'amazon-kdp',
            title: 'Amazon KDP royalties — normalmente 10%',
            content: [
              { kind: 'paragraph', text: 'A KDP classifica com mais frequência os pagamentos a autores como royalties. Para o Portugal–US treaty, verifique o Article 12: a taxa sobre royalties é normalmente limitada a 10% gross amount. Isto é melhor do que 30%, mas não é 0%.' },
              { kind: 'checklist', items: [
                'Article: 12',
                'Rate of withholding: 10%',
                'Type of income: royalties / copyright royalties',
                'Explanation: beneficial owner is a resident of Portugal under the Portugal–US income tax treaty'
              ] }
            ]
          },
          {
            id: 'ibkr-dividends',
            title: 'IBKR e dividendos dos EUA — normalmente 15%',
            content: [
              { kind: 'paragraph', text: 'Sobre ações dos EUA, o broker retém imposto na fonte sobre dividends. Para um residente fiscal em Portugal, a treaty rate é normalmente 15% ao abrigo do Article 10, em vez dos 30% padrão.' },
              { kind: 'checklist', items: [
                'Article: 10',
                'Rate of withholding: 15%',
                'Type of income: dividends',
                'A Line 10 muitas vezes não é preenchida manualmente: a IBKR aplica a taxa após um W-8BEN válido',
                'o imposto retido nos EUA é depois tido em conta no IRS de Portugal como foreign tax credit dentro dos limites das regras portuguesas'
              ] }
            ]
          }
        ] },
        { kind: 'warning', text: 'Não copie da Internet a taxa de outra pessoa. A treaty rate depende do tipo de rendimento. Para um residente de Portugal, royalties da Amazon KDP não são a mesma coisa que serviços de freelancer ou dividendos num broker.' }
      ]
    },
    {
      id: 'validity-and-renewal',
      title: 'Prazo de validade e quando renovar',
      content: [
        { kind: 'paragraph', text: 'O W-8BEN é válido desde a data de assinatura até ao último dia do terceiro ano civil seguinte. Se foi assinado em 15.04.2026, o formulário é válido até 31.12.2029. A plataforma normalmente pedirá a renewal com antecedência.' },
        { kind: 'checklist', items: [
          'renove o formulário quando mudar de país de residência fiscal',
          'renove em caso de alteração de nome, morada ou NIF',
          'renove se obtiver um US green card, SSN/ITIN ou se se tornar US tax resident',
          'renove se o rendimento passar a ser pago a uma empresa, e não a si pessoalmente',
          'guarde o PDF/captura de ecrã do tax interview e a data de envio',
          'confira a retenção efetiva no annual tax statement: 1042-S, broker activity statement, Amazon tax report',
          'se foram retidos 30% devido a formulário caducado, a plataforma nem sempre faz refund; por vezes é necessário US tax filing, o que é caro e demorado'
        ] }
      ]
    },
    {
      id: 'portugal-tax',
      title: 'O que declarar depois em Portugal',
      content: [
        { kind: 'paragraph', text: 'O W-8BEN não é uma declaração fiscal portuguesa. Se você for residente fiscal em Portugal, o IRS de Portugal tributa o worldwide income: rendimentos dos EUA devem ser incluídos na Modelo 3 IRS na categoria correta.' },
        { kind: 'checklist', items: [
          'dividendos dos EUA: normalmente Categoria E; pode haver foreign tax credit pelos 15% de withholding nos EUA',
          'capital gains sobre ações/ETF: normalmente Categoria G; os EUA, na maioria dos casos, não retêm imposto, mas Portugal tributa segundo as suas próprias regras',
          'Amazon KDP royalties: a qualificação depende dos factos — royalties, rendimentos de autor ou self-employment; confirme com um contabilista',
          'serviços freelance: muitas vezes Categoria B / recibos verdes, se a atividade for exercida como trabalhador independente',
          'US withholding não substitui IVA, Segurança Social e IRS português',
          'se você aplicar IFICI ou outro regime, o W-8BEN continua a ser preenchido separadamente para os EUA',
          'guarde relatórios das plataformas durante pelo menos 4 anos, idealmente 10 anos para arquivo pessoal'
        ] },
        { kind: 'warning', text: 'Se tiver NHR legacy, IFICI, empresa, US LLC, partnership income, stock options ou royalties elevados, não encare o tax interview da plataforma como aconselhamento fiscal. Um erro no W-8BEN pode levar a retenção insuficiente nos EUA ou a uma declaração incorreta em Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Submissão do W-8BEN através da plataforma', amountEUR: 0, note: 'Não há IRS fee; o formulário é normalmente preenchido online junto do withholding agent' },
    { label: 'Obtenção de ITIN, se for realmente necessário', amountEUR: 0, note: 'O IRS não cobra taxa, mas um Certified Acceptance Agent ou o envio de documentos pode ter custos adicionais' },
    { label: 'Consulta com contabilista / tax adviser', amountEURMin: 80, amountEURMax: 250, note: 'Análise pontual típica do tratado, declarações IRS/Portugal e classificação do rendimento' }
  ],
  sources: [
    {
      title: 'IRS: Sobre o Formulário W-8BEN',
      url: 'https://www.irs.gov/forms-pubs/about-form-w-8-ben',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRS: Instruções para o Formulário W-8BEN',
      url: 'https://www.irs.gov/instructions/iw8ben',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'U.S. Treasury: Tratados fiscais',
      url: 'https://home.treasury.gov/policy-issues/tax-policy/treaties',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRS: PDF do tratado de imposto sobre o rendimento com Portugal',
      url: 'https://www.irs.gov/pub/irs-trty/portugal.pdf',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
