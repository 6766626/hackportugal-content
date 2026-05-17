export default {
  editorialVoice: 'hackportugal',
  id: 'csi-complemento-idosos',
  categoryId: 'healthcare',
  title: 'CSI — Complemento Solidário para Idosos: suplemento para idosos com baixos rendimentos',
  tldr: 'O Complemento Solidário para Idosos (CSI) é um complemento mensal da Segurança Social para pessoas a partir dos 66 anos e 9 meses em 2026, se viverem em Portugal há pelo menos 6 anos consecutivos e tiverem rendimentos muito baixos. Máximo — cerca de 600 €/mês; na prática, é paga a diferença entre o seu rendimento considerado e o limite do CSI. Além disso: cobertura de 100% de parte dos medicamentos sujeitos a receita no âmbito do SNS e benefícios dentários. Não está imediatamente disponível para novos pensionistas D7/D8: é necessário cumprir o período de residência.',
  tags: ['csi', 'pensão', 'idosos', 'sns'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-csi',
      title: 'O que é o CSI e para quem é realmente necessário',
      content: [
        { kind: 'paragraph', text: 'O CSI não é uma pensão, mas sim um complemento social ao rendimento de uma pessoa idosa. É pago pela Segurança Social se os rendimentos forem inferiores ao valor anual de referência estabelecido. Se a pessoa quase não tiver rendimentos, a prestação pode chegar a cerca de 600 €/mês; se houver pensão, rendas, juros ou uma pensão estrangeira, o CSI é reduzido.' },
        { kind: 'paragraph', text: 'Para expatriados, isto é importante em duas situações: vive em Portugal há muito tempo e a sua pensão é baixa; ou muda-se para junto de um familiar idoso e está a planear a sua proteção social. Mas o CSI não funciona como apoio logo após a mudança: a condição essencial é ter 6 anos consecutivos de residência legal em Portugal.' },
        { kind: 'checklist', items: [
          'Idade em 2026: pelo menos 66 anos e 9 meses — idade normal de acesso à pensão de velhice.',
          'Residência: pelo menos 6 anos consecutivos em Portugal à data do pedido.',
          'Rendimentos: abaixo do limite do CSI; para um requerente isolado, a referência é cerca de 7 200 €/ano.',
          'Para um casal, são considerados os rendimentos do cônjuge/parceiro; o limiar prático do casal é cerca de 12 600 €/ano.',
          'Pensões estrangeiras, rendas, juros, rendimentos de investimento e rendimentos imobiliários são declarados.',
          'É necessário ter NISS e estar registado na Segurança Social.',
          'É necessário já receber ou ter direito a pedir a pensão correspondente, se esta for devida.',
          'O CSI não substitui a autorização de residência, o visto D7/D8, a declaração de IRS ou o seguro de saúde.'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Condições de acesso em 2026',
      content: [
        { kind: 'paragraph', text: 'As condições principais são: idade, residência, baixos recursos e ausência de ativos financeiros significativos. A Segurança Social analisa não só a pensão portuguesa, mas também prestações recebidas do estrangeiro. Para cidadãos russos, ucranianos, britânicos, americanos e outros nacionais de fora da UE, isto normalmente significa: é necessário comprovar a residência legal e declarar pensões e contas estrangeiras.' },
        { kind: 'checklist', items: [
          'Idade: 66 anos e 9 meses ou mais em 2026.',
          'Residência: viver em Portugal durante 6 anos consecutivos imediatamente antes do pedido.',
          'Para cidadãos de países terceiros: autorização de residência válida ou outro estatuto legal de residência.',
          'Rendimento do requerente abaixo do valor anual valor de referência CSI — cerca de 7 200 €/ano.',
          'Se existir cônjuge, união de facto ou economia comum, o rendimento dele/dela também é considerado.',
          'Ativos mobiliários — saldos bancários, depósitos, títulos — não devem exceder 240 IAS. Com IAS de 537,13 € em 2026, isto corresponde a 128 911,20 €.',
          'Desde 2024, os rendimentos dos filhos maiores de idade, regra geral, já não bloqueiam o CSI como antes; o foco está nos recursos do requerente e do casal.',
          'Se tiver direito a pensão de velhice, de sobrevivência ou a outra prestação aplicável, a Segurança Social pode exigir que a peça primeiro.'
        ] },
        { kind: 'warning', text: 'Erro que leva frequentemente à recusa para expatriados: “tenho uma pensão portuguesa pequena”. Isso não basta. A Segurança Social considera os rendimentos mundiais: pensão estrangeira, arrendamento de um imóvel no estrangeiro, juros de depósitos, dividendos, investimentos e parte dos recursos patrimoniais.' }
      ]
    },
    {
      id: 'how-much',
      title: 'Quanto é pago: não são 600 € fixos, mas um complemento até ao limite',
      content: [
        { kind: 'paragraph', text: 'O CSI é calculado como a diferença entre o valor anual de referência estabelecido e os seus rendimentos considerados. Por isso, duas pessoas da mesma idade podem receber montantes diferentes: uma — quase o máximo, outra — 40–100 €/mês, uma terceira — 0 €.' },
        { kind: 'paragraph', text: 'Exemplo simplificado: se o limite do CSI for cerca de 7 200 €/ano e a sua pensão considerada e outros rendimentos forem 4 800 €/ano, o complemento anual pode ser cerca de 2 400 €, ou seja, aproximadamente 200 €/mês. Se os rendimentos forem zero, o máximo é cerca de 600 €/mês.' },
        { kind: 'checklist', items: [
          'A pensão portuguesa de velhice é considerada.',
          'Uma pensão estrangeira pública ou privada é considerada.',
          'O rendimento de arrendamento de imóveis em Portugal ou no estrangeiro é considerado.',
          'Juros, dividendos e rendimentos de investimento são considerados.',
          'Imóveis e ativos financeiros podem influenciar a avaliação dos recursos.',
          'Se o rendimento mudou, deve comunicá-lo à Segurança Social.',
          'O pagamento é normalmente feito mensalmente, juntamente com outras prestações sociais ou para o IBAN indicado.'
        ] },
        { kind: 'warning', text: 'Não planeie o orçamento como “vou receber certamente 600 €”. Este é o complemento máximo para recursos mínimos. O valor real só é conhecido após o cálculo da Segurança Social.' }
      ]
    },
    {
      id: 'health-benefits',
      title: 'Bónus do CSI: medicamentos, dentes, óculos',
      content: [
        { kind: 'paragraph', text: 'O CSI é valioso não só pela prestação mensal. Os beneficiários têm direito a benefícios adicionais de saúde. Na prática, isto reduz as despesas da pessoa idosa com medicamentos sujeitos a receita, estomatologia e alguns dispositivos médicos.' },
        { kind: 'checklist', items: [
          'Medicamentos: para beneficiários do CSI, aplica-se a cobertura de 100% de parte do custo dos medicamentos sujeitos a receita, prescritos no sistema SNS e abrangidos pelas regras de comparticipação correspondentes.',
          'Estomatologia: acesso a cheque-dentista / benefícios dentários através do SNS, normalmente através do médico de família ou do Centro de Saúde.',
          'Óculos e lentes: pode haver compensação de parte das despesas no âmbito dos benefícios adicionais de saúde.',
          'Próteses dentárias: pode haver compensação de parte das despesas dentro dos limites estabelecidos.',
          'Para usar os benefícios, é necessário número de utente SNS e registo atualizado no Centro de Saúde.',
          'As receitas devem ser emitidas por um médico e passar pelo sistema habitual SNS/farmácia.',
          'Uma clínica privada sem referenciação do SNS pode não dar direito a compensação.'
        ] },
        { kind: 'warning', text: '“100% medicamentos” não significa quaisquer medicamentos de qualquer clínica privada. Verifique se o medicamento foi prescrito por receita, passa pelo sistema SNS e está incluído nas regras de reembolso para beneficiários do CSI.' }
      ]
    },
    {
      id: 'apply',
      title: 'Como apresentar o pedido',
      content: [
        { kind: 'paragraph', text: 'Pode apresentar o pedido online através da Segurança Social Direta / gov.pt ou presencialmente num balcão da Segurança Social. Para requerentes idosos, muitas vezes é mais simples ir pessoalmente ou através de um representante com procuração, porque é necessário conferir documentos, rendimentos estrangeiros e dados bancários.' },
        { kind: 'checklist', items: [
          'NISS do requerente.',
          'NIF do requerente.',
          'Documento de identificação: Cartão de Cidadão, autorização de residência, passaporte com comprovativo do estatuto.',
          'Prova de residência em Portugal durante 6 anos consecutivos: autorização de residência, certificados, atestado de residência, documentos da Câmara Municipal/Junta de Freguesia, registos fiscais e sociais.',
          'IBAN de conta portuguesa ou SEPA para os pagamentos.',
          'Documentos sobre a pensão portuguesa, se existir.',
          'Declarações sobre pensões estrangeiras e prestações sociais.',
          'Documentos sobre rendimentos de arrendamento, juros bancários, investimentos.',
          'Informação sobre o cônjuge/parceiro e os rendimentos dele/dela, se aplicável.',
          'Contactos: morada, telefone, e-mail, para que a Segurança Social possa pedir documentos em falta.'
        ] },
        { kind: 'paragraph', text: 'Após a submissão, a Segurança Social verifica os rendimentos e o direito à prestação. Se for aprovado, o pagamento é atribuído tendo em conta a data do pedido, de acordo com as regras da Segurança Social. Em caso de alteração de rendimentos, situação familiar, morada ou ativos bancários, deve comunicar a alteração; caso contrário, poderá ser exigida a devolução de pagamentos indevidos.' }
      ]
    },
    {
      id: 'expat-pitfalls',
      title: 'Erros típicos dos expatriados',
      content: [
        { kind: 'checklist', items: [
          'Apresentar o pedido logo após a mudança com D7: normalmente haverá recusa, porque não existem 6 anos de residência.',
          'Não declarar uma pensão estrangeira: a Segurança Social pode pedir comprovativos, e os pagamentos indevidos são recuperados.',
          'Confundir o CSI com a pensão social de velhice: são regimes diferentes.',
          'Pensar que os filhos são obrigados a sustentar o requerente e que, por isso, o CSI é impossível: após as reformas, os rendimentos dos filhos, regra geral, já não são a barreira automática anterior.',
          'Não ter número de utente SNS: será mais difícil utilizar os benefícios de saúde do CSI.',
          'Manter depósitos elevados acima de 240 IAS: em 2026, o limite de ativos é 128 911,20 €.',
          'Não atualizar a morada nas Finanças e na Segurança Social: pode perder cartas com pedidos de documentos.',
          'Ignorar o IRS: mesmo com baixos rendimentos, as pensões estrangeiras e a residência fiscal devem ser analisadas separadamente.'
        ] },
        { kind: 'warning', text: 'Se estiver a ajudar um familiar idoso, não transfira grandes montantes para a conta dele antes do pedido “por conveniência”. Os saldos bancários e ativos podem influenciar o direito ao CSI.' }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação do pedido de CSI', amountEUR: 0, note: 'O serviço público da Segurança Social é gratuito.' },
    { label: 'Complemento mensal máximo', amountEURMax: 600, note: 'Referência para 2026: máximo em caso de rendimentos considerados quase nulos; o valor efetivo é calculado individualmente.' },
    { label: 'Limite de ativos mobiliários', amountEURMax: 128911.2, note: '240 IAS com IAS de 537,13 € em 2026; inclui saldos bancários, depósitos e outros ativos financeiros.' }
  ],
  sources: [
    {
      title: 'Segurança Social — Complemento Solidário para Idosos',
      url: 'https://seg-social.pt/complemento-solidario-para-idosos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt — Pedir o Complemento Solidário para Idosos',
      url: 'https://www.gov.pt/servicos/pedir-o-complemento-solidario-para-idosos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
