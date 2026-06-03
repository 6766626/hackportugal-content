export default {
  editorialVoice: 'hackportugal',
  id: 'w8ben-eua-clientes',
  categoryId: 'taxes',
  title: 'W-8BEN: como reduzir a retenção dos EUA de 30% para a taxa do tratado para Stripe, Amazon e IBKR',
  tldr: 'W-8BEN é um formulário do IRS para pessoas singulares não residentes nos EUA. Se você é residente fiscal em Portugal, confirma o foreign status e permite aplicar o Portugal–US tax treaty: normalmente 0% para serviços/rendimentos empresariais sem estabelecimento estável nos EUA, 10% para parte dos royalties da Amazon KDP e 15% para dividendos dos EUA num corretor como a IBKR. O formulário é válido até 31 de dezembro do terceiro ano seguinte: se assinou em abril de 2026, deve renovar até 31.12.2029.',
  tags: ['w8ben', 'irs', 'tratado', 'impostos', 'ibkr'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-does',
      title: 'O que faz o W-8BEN',
      content: [
        { kind: 'paragraph', text: 'Por defeito, os EUA podem reter 30% sobre alguns pagamentos a estrangeiros: dividends, royalties, certain platform payments. O W-8BEN informa o agente pagador de que você não é uma US person e dá fundamento para aplicar a treaty rate em vez de 30%.' },
        { kind: 'paragraph', text: 'Para um residente de Portugal, aplica-se a Convention Between the United States of America and the Portuguese Republic for the Avoidance of Double Taxation. Na prática, não é uma taxa única, mas sim uma taxa por tipo de rendimento.' },
        { kind: 'checklist', items: [
          'serviços de freelancer prestados a partir de Portugal: normalmente 0% nos EUA, se não houver permanent establishment / fixed base nos EUA',
          'business profits: Article 7, normalmente 0% nos EUA sem permanent establishment',
          'independent personal services: Article 15, normalmente 0% sem fixed base nos EUA e na ausência de presença física prolongada nos EUA',
          'royalties, incluindo parte dos pagamentos da Amazon KDP: Article 13, para o Portugal–US treaty normalmente até 10%, e não 0%',
          'dividendos de ações dos EUA na IBKR: Article 10, normalmente 15% para um investidor de carteira',
          'capital gains em ações comuns dos EUA: normalmente 0% de withholding nos EUA, mas são declarados em Portugal',
          'o formulário não elimina o IRS português: um residente de Portugal declara worldwide income'
        ] },
        { kind: 'warning', text: 'O W-8BEN é apenas para pessoas singulares. Se o beneficiário do pagamento for uma Lda portuguesa, US LLC, UK LTD ou outra empresa, normalmente é necessário o W-8BEN-E ou outro formulário. US citizens, green card holders e pessoas com US tax residency não usam o W-8BEN.' }
      ]
    },
    {
      id: 'when-platforms-ask',
      title: 'Onde é pedido: Stripe, Amazon, IBKR',
      content: [
        { kind: 'paragraph', text: 'O formulário raramente é enviado diretamente ao IRS. Normalmente, você preenche uma tax interview dentro da plataforma, e a plataforma conserva o W-8BEN como withholding agent.' },
        { kind: 'checklist', items: [
          'Amazon KDP: pede uma tax interview antes dos pagamentos de royalties; sem tratado, pode reter 30%',
          'Amazon Associates / affiliate: a qualificação do rendimento pode diferir dos KDP royalties; verifique o wording na tax interview',
          'IBKR, Schwab, corretores dos EUA: o W-8BEN é necessário para reduced withholding sobre dividendos dos EUA — normalmente 15% em vez de 30%',
          'Stripe / Stripe Atlas / marketplaces: o formulário pode ser exigido para confirmar o foreign status e a retenção zero em serviços',
          'cliente dos EUA através de uma plataforma: se for pagamento de serviços executados a partir de Portugal, usa-se frequentemente 0% ao abrigo do Article 7 ou 15',
          'US LLC: se você for proprietário de uma foreign-owned disregarded LLC, o formulário depende da estrutura e do tipo de pagamento; não preencha o W-8BEN de forma mecânica',
          'se a plataforma não permitir escolher o Portugal treaty, verifique se o país de residência fiscal está indicado como Portugal, e não o país do passaporte'
        ] }
      ]
    },
    {
      id: 'how-to-fill',
      title: 'Como preencher os campos principais',
      content: [
        { kind: 'paragraph', text: 'Os nomes dos campos podem diferir numa entrevista online, mas a lógica é a mesma do IRS Form W-8BEN.' },
        { kind: 'checklist', items: [
          'Line 1 / Name: nome e apelido como no passaporte ou na autorização de residência',
          'Line 2 / Country of citizenship: cidadania, por exemplo Russian Federation, Brazil, Ukraine; não tem de ser necessariamente Portugal',
          'Line 3 / Permanent residence address: morada real de residência em Portugal; não use PO Box nem morada de intermediário',
          'Line 4 / Mailing address: preencha apenas se a morada postal for diferente',
          'Line 5 / U.S. TIN: normalmente fica em branco, se não tiver SSN/ITIN; algumas situações exigem ITIN, mas para a maioria dos corretores e plataformas basta o foreign TIN',
          'Line 6a / Foreign tax identifying number: o seu NIF português',
          'Line 8 / Date of birth: data de nascimento no formato da plataforma; no formulário em papel do IRS é normalmente MM-DD-YYYY',
          'Line 9 / Treaty country: Portugal, se você for residente fiscal em Portugal',
          'Line 10 / Special rates and conditions: é preenchida quando a plataforma exige uma treaty article e uma taxa específicas',
          'Signature: assina o próprio beneficial owner; agente/contabilista — apenas com poderes'
        ] },
        { kind: 'warning', text: 'O NIF no W-8BEN não é o “equivalente português do SSN”, mas sim o foreign TIN para o treaty claim. Se acabou de se mudar e ainda não se tornou residente fiscal em Portugal, não pode reivindicar automaticamente os Portugal treaty benefits.' }
      ]
    },
    {
      id: 'line-10-examples',
      title: 'Exemplos da Line 10 para a treaty rate',
      content: [
        { kind: 'paragraph', text: 'A Line 10 nem sempre é necessária. Os corretores aplicam frequentemente o Article 10 automaticamente depois de escolher Portugal. A Amazon e algumas plataformas podem pedir que indique article, rate e explanation.' },
        { kind: 'substeps', items: [
          {
            id: 'services',
            title: 'Serviços / freelancing a partir de Portugal — 0%',
            content: [
              { kind: 'paragraph', text: 'Para serviços executados fisicamente a partir de Portugal, normalmente usa-se Article 7 Business Profits ou Article 15 Independent Personal Services. O sentido é: o rendimento é tributado em Portugal, se não tiver permanent establishment / fixed base nos EUA.' },
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
              { kind: 'paragraph', text: 'A KDP classifica mais frequentemente os pagamentos a autores como royalties. Para o Portugal–US treaty, verifique o Article 13: a taxa sobre royalties é normalmente limitada a 10% do gross amount. Isto é melhor do que 30%, mas não é 0%.' },
              { kind: 'checklist', items: [
                'Article: 13',
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
              { kind: 'paragraph', text: 'Em ações dos EUA, o corretor retém imposto na fonte sobre dividends. Para um residente fiscal em Portugal, a treaty rate é normalmente 15% ao abrigo do Article 10, em vez dos 30% padrão.' },
              { kind: 'checklist', items: [
                'Article: 10',
                'Rate of withholding: 15%',
                'Type of income: dividends',
                'A Line 10 muitas vezes não é preenchida manualmente: a IBKR aplica a taxa após um W-8BEN válido',
                'o imposto retido nos EUA é depois considerado no IRS de Portugal como foreign tax credit dentro dos limites das regras portuguesas'
              ] }
            ]
          }
        ] },
        { kind: 'warning', text: 'Não copie da Internet a taxa de outra pessoa. A treaty rate depende do tipo de rendimento. Para um residente de Portugal, royalties da Amazon KDP não são o mesmo que serviços de freelancer ou dividendos num corretor.' }
      ]
    },
    {
      id: 'validity-and-renewal',
      title: 'Validade e quando renovar',
      content: [
        { kind: 'paragraph', text: 'O W-8BEN é válido desde a data de assinatura até ao último dia do terceiro ano civil seguinte. Se assinou em 15.04.2026, o formulário é válido até 31.12.2029. A plataforma normalmente pedirá renewal com antecedência.' },
        { kind: 'checklist', items: [
          'renove o formulário quando mudar o país de residência fiscal',
          'renove quando mudar de nome, morada ou NIF',
          'renove se obtiver US green card, SSN/ITIN ou se se tornar US tax resident',
          'renove se o rendimento passar a ser pago a uma empresa, e não a si pessoalmente',
          'guarde o PDF/captura de ecrã da tax interview e a data de envio',
          'confira a retenção efetiva no annual tax statement: 1042-S, broker activity statement, Amazon tax report',
          'se retiverem 30% por o formulário estar expirado, a plataforma nem sempre faz refund; por vezes é necessário US tax filing, o que é caro e demorado'
        ] }
      ]
    },
    {
      id: 'portugal-tax',
      title: 'O que declarar depois em Portugal',
      content: [
        { kind: 'paragraph', text: 'O W-8BEN não é uma declaração fiscal portuguesa. Se você é residente fiscal em Portugal, o IRS de Portugal tributa worldwide income: os rendimentos dos EUA devem ser incluídos no Modelo 3 IRS na categoria correta.' },
        { kind: 'checklist', items: [
          'dividendos dos EUA: normalmente Categoria E; pode haver foreign tax credit pelos 15% de withholding nos EUA',
          'capital gains em ações/ETF: normalmente Categoria G; os EUA geralmente não retêm imposto, mas Portugal tributa segundo as suas próprias regras',
          'Amazon KDP royalties: a qualificação depende dos factos — royalties, rendimentos de autor ou self-employment; confirme com um contabilista',
          'serviços de freelancer: frequentemente Categoria B / recibos verdes, se a atividade for exercida como trabalhador independente',
          'US withholding não substitui IVA, Segurança Social e IRS português',
          'se aplicar o IFICI ou outro regime, o W-8BEN continua a ser preenchido separadamente para os EUA',
          'guarde os relatórios das plataformas durante pelo menos 4 anos, idealmente 10 anos para arquivo pessoal'
        ] },
        { kind: 'warning', text: 'Se tiver NHR legacy, IFICI, empresa, US LLC, partnership income, stock options ou royalties elevados, não confie na tax interview da plataforma como aconselhamento fiscal. Um erro no W-8BEN pode levar a sub-retenção nos EUA ou a uma declaração incorreta em Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Submissão do W-8BEN através da plataforma', amountEUR: 0, note: 'Não há taxa do IRS; o formulário é normalmente preenchido online junto do withholding agent' },
    { label: 'Obtenção de ITIN, se for realmente necessário', amountEUR: 0, note: 'O IRS não cobra taxa, mas um Certified Acceptance Agent ou o envio de documentos podem ter custos adicionais' },
    { label: 'Consulta com contabilista / tax adviser', amountEURMin: 80, amountEURMax: 250, note: 'Análise pontual típica do tratado, declarações IRS/Portugal e classificação do rendimento' }
  ],
  sources: [
    {
      title: 'IRS: sobre o Formulário W-8BEN',
      url: 'https://www.irs.gov/forms-pubs/about-form-w-8-ben',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRS: instruções para o Formulário W-8BEN',
      url: 'https://www.irs.gov/instructions/iw8ben',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'U.S. Treasury: tratados fiscais',
      url: 'https://home.treasury.gov/policy-issues/tax-policy/treaties',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRS: PDF do tratado de imposto sobre o rendimento de Portugal',
      url: 'https://www.irs.gov/pub/irs-trty/portugal.pdf',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
