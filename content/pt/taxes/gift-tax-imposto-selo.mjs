export default {
  editorialVoice: 'hackportugal',
  id: 'gift-tax-imposto-selo',
  categoryId: 'taxes',
  title: 'Imposto sobre presentes: Imposto do Selo de 10% e exceções para a família',
  tldr: 'Em Portugal não existe um “imposto sobre doações” como imposto separado: os presentes são tributados em Imposto do Selo. A taxa-base é de 10% para transmissões gratuitas e, na doação de imóveis, normalmente aplica-se ainda 0,8%. Há isenção total dos 10% para cônjuge/unido de facto, ascendants e descendants. Irmãos, amigos, parceiros sem união de facto — não estão isentos. Presentes em dinheiro a familiares próximos superiores a 5 000 € continuam a ter de ser declarados através do Modelo 1 IS.',
  tags: ['imposto', 'selo', 'presentes', 'finanças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-taxed',
      title: 'O que conta como presente para efeitos de Imposto do Selo',
      content: [
        { kind: 'paragraph', text: 'O Imposto do Selo aplica-se a transmissões gratuitas — transferências gratuitas de património: dinheiro, imóveis, participações, valores mobiliários, automóveis, direitos de crédito e outros ativos. O imposto é pago por quem recebe o presente, não por quem o dá.' },
        { kind: 'paragraph', text: 'Importante: não se trata apenas de um “presente de aniversário”. Se um progenitor transfere 50 000 € para um filho adulto para a entrada de um crédito habitação, isso também é uma doação. Se um amigo lhe entrega 20 000 € “sem devolução”, isso é uma doação sujeita a imposto de 10%, se a operação estiver abrangida pela jurisdição portuguesa.' },
        { kind: 'checklist', items: [
          'Uma transferência de dinheiro para uma conta portuguesa pode ser gift/donativo para efeitos de Imposto do Selo.',
          'A doação de imóveis em Portugal exige quase sempre escritura/documento particular autenticado e registo.',
          'A transmissão de um automóvel sem pagamento também pode ser uma transmissão gratuita.',
          'O perdão de dívida entre pessoas singulares pode ser considerado uma vantagem gratuita.',
          'Presentes sociais habituais de baixo valor normalmente não são um problema fiscal prático, mas é melhor documentar montantes elevados.',
          'Normalmente não se paga IRS sobre um presente: não é salário nem rendimento empresarial, mas o Imposto do Selo é um imposto separado.'
        ] }
      ]
    },
    {
      id: 'rates',
      title: 'Taxas: 10% e quando surge 0,8%',
      content: [
        { kind: 'paragraph', text: 'A taxa-base para transmissões gratuitas é de 10% pela verba 1.2 da Tabela Geral do Imposto do Selo. A matéria coletável é normalmente igual ao valor do ativo doado.' },
        { kind: 'paragraph', text: 'Se for doado um imóvel em Portugal, aplica-se separadamente 0,8% pela verba 1.1 sobre a transmissão do direito de propriedade. Por isso, para um beneficiário não isento, a doação de um imóvel implica normalmente uma carga total de 10,8%: 10% + 0,8%.' },
        { kind: 'checklist', items: [
          'Presente de 30 000 € de um amigo: referência — 3 000 € de Imposto do Selo.',
          'Presente de 30 000 € de um progenitor a um filho: não se pagam os 10%, mas pode existir obrigação declarativa.',
          'Apartamento de 300 000 € de um irmão: referência — 30 000 € pelos 10% + 2 400 € pelos 0,8%.',
          'Apartamento de 300 000 € de um progenitor a um filho: os 10% estão isentos, mas os 0,8% normalmente mantêm-se — 2 400 €.',
          'Para imóveis, a base pode depender do VPT — valor patrimonial tributário — e do preço/valor indicado no ato; o notário e as Finanças verificam o cálculo.',
          'O pagamento do imposto é normalmente necessário antes do registo/celebração do ato, se a doação for formalizada perante notário, solicitador ou advogado.'
        ] },
        { kind: 'warning', text: 'Não confunda Imposto do Selo com IMT. Numa compra normal de imóvel paga-se IMT + 0,8% IS. Numa doação, em vez de IMT, normalmente aplica-se o regime de transmissão gratuita: 10% IS, mantendo-se os 0,8% IS para imóveis.' }
      ]
    },
    {
      id: 'family-exemptions',
      title: 'Quem está isento: família em linha direta',
      content: [
        { kind: 'paragraph', text: 'A principal exceção: isenção dos 10% para cônjuge ou unido de facto, descendants e ascendants. Trata-se da linha familiar direta: pais, avós, filhos, netos. O cônjuge e a união de facto oficialmente reconhecida também estão incluídos.' },
        { kind: 'checklist', items: [
          'Estão isentos dos 10%: marido/mulher — cônjuge.',
          'Está isento o unido de facto, se a união de facto puder ser comprovada segundo as regras portuguesas.',
          'Estão isentos ascendants: pais, avós.',
          'Estão isentos descendants: filhos, netos.',
          'Não estão isentos: irmão, irmã, tio, tia, sobrinho, primo.',
          'Não está isento o parceiro com quem “apenas se vive junto”, se não existir estatuto de união de facto.',
          'Não estão isentos amigos e terceiros.',
          'A isenção diz respeito aos 10% da verba 1.2, mas nem sempre elimina os 0,8% nos imóveis.'
        ] },
        { kind: 'warning', text: 'Para expats, a prova de parentesco é crítica: certidões de nascimento/casamento, apostille/legalização, tradução se necessário. As Finanças e o notário não são obrigados a aceitar uma “explicação por carta” se a cadeia de parentesco não estiver documentalmente comprovada.' }
      ]
    },
    {
      id: 'declaration-modelo-1',
      title: 'Modelo 1 IS: quando e como declarar',
      content: [
        { kind: 'paragraph', text: 'A declaração chama-se Modelo 1 do Imposto do Selo — Participação de Transmissões Gratuitas. O prazo geral de entrega é até ao fim do 3.º mês seguinte ao mês em que ocorreu a doação ou nasceu a obrigação tributária. Por exemplo, presente recebido em 10 de abril de 2026: prazo indicativo — até 31 de julho de 2026.' },
        { kind: 'paragraph', text: 'Para familiares próximos existe um limite prático importante: presentes em dinheiro de cônjuge/unido de facto, ascendants ou descendants superiores a 5 000 € estão isentos dos 10%, mas têm de ser declarados. Abaixo de 5 000 €, a obrigação declarativa para esses presentes em dinheiro normalmente não se aplica.' },
        { kind: 'checklist', items: [
          'Entre no Portal das Finanças com NIF e palavra-passe ou Chave Móvel Digital (CMD).',
          'Procure a secção Imposto do Selo / Transmissões Gratuitas / Modelo 1.',
          'Indique quem recebe o presente — beneficiário/donatário.',
          'Indique o doador — doador — e o grau de parentesco.',
          'Descreva o ativo: dinheiro, imóvel, quotas, veículo, etc.',
          'Anexe documentos: comprovativo da transferência, escritura, contrato, declaração de doação, certidões de nascimento/casamento.',
          'Se existir isenção, assinale o fundamento: cônjuge/unido de facto, ascendente ou descendente.',
          'Guarde o comprovativo de entrega e a eventual nota de liquidação.'
        ] },
        { kind: 'warning', text: 'Se a entrega online não avançar por causa de um documento estrangeiro, de um campo em falta ou de um ativo complexo, dirija-se ao Serviço de Finanças da sua morada fiscal. Não espere pelo fim do prazo: a coima por falta de declaração pode sair mais cara do que a visita.' }
      ]
    },
    {
      id: 'cross-border',
      title: 'Transferências internacionais: o que é importante para um expat',
      content: [
        { kind: 'paragraph', text: 'O Imposto do Selo português está ligado à jurisdição fiscal portuguesa: localização do ativo, formalização da operação, contas/direitos portugueses e outras ligações a Portugal. Se pais de outro país transferirem dinheiro para a sua conta em Portugal, o banco pode pedir a origem dos fundos e as Finanças podem interessar-se pela natureza da entrada.' },
        { kind: 'checklist', items: [
          'Para uma transferência de valor elevado, prepare antecipadamente uma gift letter/declaração de doação.',
          'Indique que a transferência é gratuita e não exige devolução.',
          'Guarde extratos bancários de quem envia e de quem recebe.',
          'Para pais/filhos, anexe certidões de nascimento com apostilha e tradução, se necessário.',
          'Não chame “loan” a um presente, se não existir empréstimo: mais tarde o banco ou as Finanças podem pedir o contrato e o plano de reembolso.',
          'Se o dinheiro for usado para comprar imóvel, o notário e o banco quase de certeza pedirão a origem dos fundos.',
          'Verifique as consequências fiscais no país do doador: Portugal pode isentar, mas outro país pode não o fazer.'
        ] },
        { kind: 'warning', text: '“É um presente da minha mãe do estrangeiro, portanto em Portugal não é preciso nada” — é uma simplificação perigosa. Para familiares próximos, muitas vezes não há os 10%, mas a declaração para valores superiores a 5 000 € e os documentos sobre a origem dos fundos continuam a ser importantes.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes e esquema seguro',
      content: [
        { kind: 'checklist', items: [
          'Erro: um irmão oferece dinheiro e o beneficiário considera-o “close family” para efeitos de isenção. Para Imposto do Selo, um irmão não faz parte da linha direta isenta.',
          'Erro: formalizar um presente elevado como “empréstimo privado”, mas sem contrato, juros e reembolso.',
          'Erro: não declarar um presente dos pais superior a 5 000 €, porque o imposto é 0 €.',
          'Erro: esquecer os 0,8% na doação de imóveis, mesmo dentro da família em linha direta.',
          'Erro: fazer várias transferências fracionadas para parecer ficar abaixo do limite. Isto pode parecer pior do que uma única operação transparente.',
          'Erro: não traduzir e não legalizar documentos estrangeiros de parentesco antes da operação.',
          'Erro: misturar um presente com pagamento de serviços. Se for remuneração por trabalho, já é um risco de IRS/IVA/NISS, não um presente familiar.'
        ] },
        { kind: 'paragraph', text: 'Esquema seguro para um grande presente familiar em 2026: uma declaração de doação curta, transferência bancária com descritivo claro, documentos de parentesco, verificação da obrigação de Modelo 1 IS, conservação dos comprovativos durante pelo menos vários anos. Para imóveis — notário/advogado antes da assinatura, cálculo dos 0,8% e registo na Conservatória.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Imposto do Selo e Transmissões Gratuitas',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do Imposto do Selo — versão consolidada no Diário da República',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Tabela Geral do Imposto do Selo — verbas 1.1 e 1.2',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/selo/Pages/ccod-selo-tabgiselo.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — Modelo 1 do Imposto do Selo / Transmissões gratuitas',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/imposto_selo/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
