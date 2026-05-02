export default {
  editorialVoice: 'hackportugal',
  id: 'gift-tax-imposto-selo',
  categoryId: 'taxes',
  title: 'Imposto sobre donativos: Imposto do Selo 10% e isenções para a família',
  tldr: 'Em Portugal, não existe um “imposto sobre doações” como imposto separado: os donativos estão sujeitos a Imposto do Selo. A taxa base é de 10% para transmissões gratuitas e, no caso de doação de imóveis, aplica-se normalmente mais 0,8%. Há isenção total dos 10% para cônjuge/unido de facto, ascendants e descendants. Irmãos, amigos, parceiros sem união de facto — não estão isentos. Donativos em dinheiro a familiares próximos acima de 5 000 € têm, ainda assim, de ser declarados através da Modelo 1 IS.',
  tags: ['imposto', 'selo', 'donativos', 'finanças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-taxed',
      title: 'O que conta como donativo para efeitos de Imposto do Selo',
      content: [
        { kind: 'paragraph', text: 'O Imposto do Selo aplica-se a transmissões gratuitas — transferências gratuitas de bens: dinheiro, imóveis, quotas, valores mobiliários, automóveis, direitos de crédito e outros activos. O imposto é pago por quem recebe o donativo, não por quem o faz.' },
        { kind: 'paragraph', text: 'Importante: não se trata apenas de uma “prenda de aniversário”. Se um progenitor transferir 50 000 € para um filho adulto para a entrada de um crédito habitação, isso também é uma doação. Se um amigo lhe entregar 20 000 € “sem devolução”, isso é uma doação sujeita a imposto de 10%, se a operação estiver abrangida pela jurisdição portuguesa.' },
        { kind: 'checklist', items: [
          'Uma transferência em dinheiro para uma conta portuguesa pode ser gift/donativo para efeitos de Imposto do Selo.',
          'A doação de imóveis em Portugal exige quase sempre escritura/documento particular autenticado e registo.',
          'A transferência de um automóvel sem pagamento também pode ser uma transmissão gratuita.',
          'O perdão de dívida entre pessoas singulares pode ser considerado uma vantagem gratuita.',
          'As prendas sociais habituais de pequeno valor normalmente não constituem um problema fiscal prático, mas é melhor documentar montantes elevados.',
          'Normalmente não se paga IRS sobre um donativo: não é salário nem rendimento empresarial, mas o Imposto do Selo é um imposto separado.'
        ] }
      ]
    },
    {
      id: 'rates',
      title: 'Taxas: 10% e quando aparece 0,8%',
      content: [
        { kind: 'paragraph', text: 'A taxa base para transmissões gratuitas é de 10% nos termos da verba 1.2 da Tabela Geral do Imposto do Selo. A matéria colectável corresponde normalmente ao valor do activo doado.' },
        { kind: 'paragraph', text: 'Se for doado um imóvel em Portugal, aplica-se separadamente 0,8% nos termos da verba 1.1 sobre a transmissão do direito de propriedade. Por isso, para um beneficiário não isento, a doação de um imóvel gera normalmente uma carga total de 10,8%: 10% + 0,8%.' },
        { kind: 'checklist', items: [
          'Donativo de 30 000 € de um amigo: referência — 3 000 € de Imposto do Selo.',
          'Donativo de 30 000 € de um progenitor para um filho: não se paga 10%, mas pode existir obrigação declarativa.',
          'Apartamento de 300 000 € de um irmão: referência — 30 000 € pelos 10% + 2 400 € pelos 0,8%.',
          'Apartamento de 300 000 € de um progenitor para um filho: os 10% estão isentos, mas os 0,8% normalmente mantêm-se — 2 400 €.',
          'Para imóveis, a base pode depender do VPT — valor patrimonial tributário — e do preço/valor indicado no acto; o notário e as Finanças verificam o cálculo.',
          'O pagamento do imposto é normalmente necessário antes do registo/formalização do acto, se a doação for feita perante notário, solicitador ou advogado.'
        ] },
        { kind: 'warning', text: 'Não confunda Imposto do Selo com IMT. Numa compra normal de imóvel paga-se IMT + 0,8% de IS. Numa doação, em vez de IMT aplica-se normalmente o regime de transmissão gratuita: 10% de IS, mantendo-se os 0,8% de IS para imóveis.' }
      ]
    },
    {
      id: 'family-exemptions',
      title: 'Quem está isento: família em linha directa',
      content: [
        { kind: 'paragraph', text: 'A principal excepção: isenção dos 10% para cônjuge ou unido de facto, descendants e ascendants. Trata-se da linha familiar directa: pais, avós, filhos, netos. O cônjuge e a união de facto oficialmente reconhecida também estão incluídos.' },
        { kind: 'checklist', items: [
          'Estão isentos dos 10%: marido/mulher — cônjuge.',
          'Está isento o unido de facto, se a união de facto puder ser comprovada segundo as regras portuguesas.',
          'Estão isentos os ascendants: pais, avós.',
          'Estão isentos os descendants: filhos, netos.',
          'Não estão isentos: irmão, irmã, tio, tia, sobrinho, primo.',
          'Não está isento o parceiro com quem “apenas se vive junto”, se não houver estatuto de união de facto.',
          'Não estão isentos amigos e terceiros.',
          'A isenção diz respeito aos 10% da verba 1.2, mas nem sempre elimina os 0,8% no caso de imóveis.'
        ] },
        { kind: 'warning', text: 'Para expats, as provas de parentesco são críticas: certidões de nascimento/casamento, apostille/legalização, tradução se necessário. As Finanças e o notário não são obrigados a aceitar uma “explicação por carta” se a cadeia de parentesco não estiver documentalmente comprovada.' }
      ]
    },
    {
      id: 'declaration-modelo-1',
      title: 'Modelo 1 IS: quando e como declarar',
      content: [
        { kind: 'paragraph', text: 'A declaração chama-se Modelo 1 do Imposto do Selo — Participação de Transmissões Gratuitas. O prazo geral de entrega é até ao fim do 3.º mês após o mês em que ocorreu a doação ou nasceu a obrigação fiscal. Por exemplo, donativo recebido em 10 de Abril de 2026: prazo de referência — até 31 de Julho de 2026.' },
        { kind: 'paragraph', text: 'Para familiares próximos existe um limite prático importante: donativos em dinheiro de cônjuge/unido de facto, ascendants ou descendants acima de 5 000 € estão isentos dos 10%, mas têm de ser declarados. Abaixo de 5 000 €, a obrigação declarativa para estes donativos em dinheiro normalmente não se aplica.' },
        { kind: 'checklist', items: [
          'Entre no Portal das Finanças com NIF e palavra-passe ou Chave Móvel Digital (CMD).',
          'Procure a secção Imposto do Selo / Transmissões Gratuitas / Modelo 1.',
          'Indique o beneficiário do donativo — beneficiário/donatário.',
          'Indique o doador — doador — e o grau de parentesco.',
          'Descreva o activo: dinheiro, imóvel, quotas, veículo, etc.',
          'Anexe documentos: comprovativo da transferência, escritura, contrato, declaração de doação, certidões de nascimento/casamento.',
          'Se existir isenção, assinale o fundamento: cônjuge/unido de facto, ascendente ou descendente.',
          'Guarde o comprovativo de entrega e eventual nota de liquidação.'
        ] },
        { kind: 'warning', text: 'Se a entrega online não funcionar por causa de um documento estrangeiro, de um campo em falta ou de um activo complexo, dirija-se ao Serviço de Finanças da área da morada fiscal. Não espere pelo fim do prazo: a coima por falta de declaração pode ficar mais cara do que a deslocação.' }
      ]
    },
    {
      id: 'cross-border',
      title: 'Transferências internacionais: o que é importante para um expat',
      content: [
        { kind: 'paragraph', text: 'O Imposto do Selo português está ligado à jurisdição fiscal portuguesa: local do activo, formalização do negócio, contas/direitos portugueses e outras ligações a Portugal. Se os pais de outro país transferirem dinheiro para a sua conta em Portugal, o banco pode pedir a origem dos fundos, e as Finanças podem interessar-se pela natureza do recebimento.' },
        { kind: 'checklist', items: [
          'Para uma transferência elevada, prepare antecipadamente uma gift letter/declaração de doação.',
          'Indique que a transferência é gratuita e que não é exigida devolução.',
          'Guarde os extractos bancários do remetente e do beneficiário.',
          'No caso de pais/filhos, anexe certidões de nascimento com apostille e tradução, se necessário.',
          'Não chame ao donativo “loan” se não existir empréstimo: mais tarde, o banco ou as Finanças podem pedir o contrato e o plano de reembolso.',
          'Se o dinheiro for destinado à compra de imóvel, o notário e o banco quase certamente pedirão a origem dos fundos.',
          'Verifique as consequências fiscais no país do doador: Portugal pode isentar, mas outro país pode não o fazer.'
        ] },
        { kind: 'warning', text: '“É uma prenda da minha mãe vinda do estrangeiro, por isso não é preciso fazer nada em Portugal” — é uma simplificação perigosa. Para familiares próximos, muitas vezes não há 10%, mas a declaração para montantes acima de 5 000 € e os documentos sobre a origem dos fundos continuam a ser importantes.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Erros frequentes e esquema seguro',
      content: [
        { kind: 'checklist', items: [
          'Erro: um irmão oferece dinheiro e o beneficiário considera-o “close family” para efeitos de isenção. Para o Imposto do Selo, um irmão não faz parte da linha directa isenta.',
          'Erro: formalizar um donativo elevado como “empréstimo privado”, mas sem contrato, juros e reembolso.',
          'Erro: não declarar um donativo dos pais acima de 5 000 €, porque o imposto é 0 €.',
          'Erro: esquecer os 0,8% na doação de imóveis, mesmo dentro da família em linha directa.',
          'Erro: fazer várias transferências fraccionadas para parecer ficar abaixo do limiar. Isso pode parecer pior do que uma operação única e transparente.',
          'Erro: não traduzir nem legalizar documentos estrangeiros sobre o parentesco antes do negócio.',
          'Erro: misturar um donativo com pagamento de serviços. Se for remuneração por trabalho, passa a haver risco de IRS/IVA/NISS, e não um donativo familiar.'
        ] },
        { kind: 'paragraph', text: 'Esquema seguro para um donativo familiar elevado em 2026: declaração de doação curta, transferência bancária com descrição clara, documentos de parentesco, verificação da obrigação de Modelo 1 IS, conservação dos comprovativos durante pelo menos alguns anos. Para imóveis — notário/advogado antes da assinatura, cálculo dos 0,8% e registo na Conservatória.' }
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
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/selo/Pages/imposto-do-selo-tabela-geral.aspx',
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
