export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-desemprego-pedido',
  categoryId: 'work_business',
  title: 'Subsídio de Desemprego: subsídio de desemprego através do IEFP e da Segurança Social',
  tldr: 'O Subsídio de Desemprego é uma prestação de seguro para quem perdeu o trabalho involuntariamente. Em 2026, a condição base é: pelo menos 360 dias de trabalho com contrato de trabalho e contribuições para a Segurança Social nos 24 meses anteriores ao desemprego. É necessário inscrever-se como desempregado no IEFP e apresentar o pedido à Segurança Social no prazo de 90 dias consecutivos a contar da data de desemprego. O valor é, em regra, 65% da remuneração de referência, com limite máximo de 2,5 IAS = 1 342,83 €.',
  tags: ['desemprego', 'iefp', 'trabalho', 'segurança-social'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-can-claim',
      title: 'Quem tem direito ao subsídio',
      content: [
        { kind: 'paragraph', text: 'O Subsídio de Desemprego não é um apoio social “por situação de pobreza”, mas sim uma prestação de seguro da Segurança Social. Está disponível se tiverem sido pagas contribuições por si enquanto trabalhador por conta de outrem e se o desemprego tiver ocorrido involuntariamente.' },
        { kind: 'checklist', items: [
          'Você viveu e trabalhou em Portugal legalmente: autorização de residência, visto com direito a trabalhar, Cartão de Cidadão / estatuto EU — consoante a situação.',
          'Tinha um contrato de trabalho e o empregador pagava contribuições à Segurança Social.',
          'Tem pelo menos 360 dias de trabalho remunerado com contribuições nos 24 meses anteriores à data de desemprego.',
          'O despedimento foi involuntário: despedimento, caducidade do contrato, extinção do posto de trabalho, insolvência do empregador, etc.',
          'Está apto para trabalhar e disponível para procurar emprego.',
          'Inscreveu-se no IEFP como candidato a emprego.',
          'Não recebe pensão de velhice ou de invalidez incompatível com o subsídio.',
          'Não trabalha a tempo inteiro nem oculta rendimentos.'
        ] },
        { kind: 'warning', text: 'Se se demitiu por iniciativa própria sem justa causa reconhecida, normalmente não tem direito ao Subsídio de Desemprego padrão. Antes de assinar um acordo de revogação, confirme se o empregador vai enquadrar a situação como desemprego que dá direito ao subsídio.' }
      ]
    },
    {
      id: 'deadline',
      title: '90 dias: o prazo principal',
      content: [
        { kind: 'paragraph', text: 'O pedido deve ser apresentado no prazo de 90 dias consecutivos a contar da data de início do desemprego. O prazo conta-se em dias de calendário, não em dias úteis.' },
        { kind: 'paragraph', text: 'Na prática, o processo tem duas partes: inscrição no IEFP como desempregado e apresentação do pedido à Segurança Social. Sem inscrição no IEFP, o subsídio não será atribuído.' },
        { kind: 'checklist', items: [
          'Dia 1 — data do fim do contrato ou data do despedimento indicada pelo empregador.',
          'Peça imediatamente ao empregador a Declaração de Situação de Desemprego, se esta não tiver sido enviada eletronicamente.',
          'Inscreva-se no IEFP online ou presencialmente no Centro de Emprego da sua área de residência.',
          'Apresente o pedido através da Segurança Social Direta ou de um serviço da Segurança Social.',
          'Guarde o comprovativo de inscrição no IEFP e de apresentação do pedido.',
          'Se deixar passar os 90 dias, o subsídio não desaparece automaticamente, mas o período de pagamento é reduzido pelos dias de atraso.'
        ] },
        { kind: 'warning', text: 'Não espere pela última semana: erros no NISS, na morada, no IBAN bancário ou a falta da declaração eletrónica do empregador podem demorar dias a resolver. Para expatriados, esta é uma causa frequente de atrasos.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos e dados',
      content: [
        { kind: 'paragraph', text: 'A Segurança Social consegue ver diretamente grande parte dos dados: NISS, empregador, contribuições, datas do contrato. Mas, na prática, é melhor ter um dossiê completo, sobretudo se se mudou recentemente, alterou o estatuto da autorização de residência ou trabalhou para vários empregadores.' },
        { kind: 'checklist', items: [
          'NISS e acesso à Segurança Social Direta.',
          'NIF e morada atualizada nas Finanças / Segurança Social.',
          'Documento de identificação: autorização de residência, Cartão de Cidadão, passaporte + título/visto, CRUE para cidadãos EU.',
          'IBAN de uma conta portuguesa ou SEPA em seu nome.',
          'Declaração de Situação de Desemprego do empregador, se não tiver sido enviada diretamente.',
          'Contrato de trabalho e carta de despedimento / não renovação, se houver disputa ou se os dados não coincidirem.',
          'Últimos recibos de vencimento — úteis para verificar a base salarial.',
          'Acesso ao e-mail e telefone indicados no IEFP e na Segurança Social.',
          'Para trabalho noutro país EU/EEA/Switzerland — documentos sobre períodos de seguro, normalmente o formulário U1.'
        ] },
        { kind: 'paragraph', text: 'Se trabalhou noutro país EU/EEA/Switzerland, os períodos de seguro podem ser considerados ao abrigo das regras de coordenação da segurança social, mas este processo não é imediato. Preveja tempo para a confirmação dos períodos.' }
      ]
    },
    {
      id: 'amount-and-duration',
      title: 'Quanto se recebe e durante quanto tempo',
      content: [
        { kind: 'paragraph', text: 'Fórmula padrão: o subsídio corresponde a 65% da remuneração de referência. Esta base não é a última remuneração: é calculada com base nas remunerações com contribuições dos primeiros 12 dos 14 meses anteriores ao mês de desemprego, incluindo os subsídios de férias e de Natal, e dividida por 360. A Segurança Social faz o cálculo automaticamente.' },
        { kind: 'checklist', items: [
          'Limite máximo em 2026: 2,5 IAS = 1 342,83 € por mês, porque o IAS 2026 = 537,13 €.',
          'O mínimo está normalmente ligado ao IAS, mas se a sua remuneração de referência líquida for inferior ao IAS, o subsídio não pode exceder essa base líquida.',
          'O subsídio não deve ser superior a 75% da remuneração de referência líquida.',
          'Em algumas situações familiares, pode existir uma majoração de 10%: por exemplo, quando ambos os cônjuges/parceiros recebem subsídio de desemprego e existem dependentes, ou no caso de família monoparental com dependentes.',
          'A duração do pagamento depende da idade e da carreira contributiva na data de desemprego.',
          'Quanto mais velho for o trabalhador e quanto mais longos forem os períodos com contribuições, maior será a duração do pagamento.',
          'É melhor confirmar a duração exata na Segurança Social Direta após a apresentação do pedido: aí ficam visíveis os seus períodos de contribuições.'
        ] },
        { kind: 'paragraph', text: 'Referência sobre a duração: os pagamentos podem durar desde alguns meses até mais de um ano e, para trabalhadores mais velhos com uma carreira contributiva longa, ainda mais. Mas o direito ao subsídio em si começa com a condição base de 360 dias de trabalho com contribuições nos últimos 24 meses.' },
        { kind: 'warning', text: 'Não confunda o salário bruto no contrato com o valor do subsídio que entra na conta. A Segurança Social aplica a fórmula, limites máximos e restrições com base no valor líquido; o resultado pode ser significativamente inferior a 65% do seu rendimento “percebido”, especialmente se existiram bónus, componente variável ou trabalho a tempo parcial.' }
      ]
    },
    {
      id: 'after-approval',
      title: 'O que fazer após a aprovação',
      content: [
        { kind: 'paragraph', text: 'Depois da atribuição do subsídio, tem a obrigação de permanecer disponível para o mercado de trabalho. O IEFP pode convocá-lo para reuniões, propor formação profissional, verificar a procura de emprego e encaminhá-lo para ofertas.' },
        { kind: 'checklist', items: [
          'Verifique regularmente o e-mail, SMS e a área pessoal do IEFP.',
          'Compareça às convocatórias do IEFP no dia marcado.',
          'Não recuse, sem motivo justificativo, trabalho adequado ou formação.',
          'Comunique o início de trabalho, recibos verdes, baixa médica, saída do país ou alteração de morada.',
          'Guarde provas da procura de emprego: candidaturas, mensagens, entrevistas.',
          'Verifique os pagamentos na Segurança Social Direta.',
          'Se encontrou trabalho a tempo parcial ou com baixo rendimento, confirme o direito ao Subsídio de Desemprego Parcial.',
          'Se a decisão for negativa, apresente reclamação dentro do prazo indicado e junte os documentos do empregador.'
        ] },
        { kind: 'warning', text: 'Receber o subsídio e trabalhar efetivamente “por fora” implica risco de devolução de todas as quantias, coimas e problemas em futuros pedidos. Para estrangeiros, isso também pode ter um impacto negativo na renovação da autorização de residência, caso surjam dívidas ou infrações.' }
      ]
    },
    {
      id: 'special-cases',
      title: 'Casos frequentes entre expatriados',
      content: [
        { kind: 'substeps', items: [
          { id: 'recibos-verdes', title: 'Recibos verdes', content: [
            { kind: 'paragraph', text: 'O Subsídio de Desemprego normal destina-se a trabalhadores por conta de outrem. Trabalhadores independentes com recibos verdes normalmente não se enquadram neste subsídio. Para estes casos existem regimes próprios, por exemplo o subsídio por cessação de atividade, com outras condições e períodos contributivos.' }
          ] },
          { id: 'fixed-term-contract', title: 'Contrato a termo terminou', content: [
            { kind: 'paragraph', text: 'Se um contrato a termo terminou e o empregador não o renovou, isso é normalmente considerado desemprego involuntário. Confirme que o empregador registou corretamente a caducidade e enviou a Declaração de Situação de Desemprego.' }
          ] },
          { id: 'mutual-agreement', title: 'Acordo de revogação', content: [
            { kind: 'paragraph', text: 'A cessação por acordo entre as partes nem sempre dá direito ao subsídio. Em alguns casos, o direito mantém-se se forem cumpridas as condições legais e as quotas do empregador, mas isto deve ser verificado antes da assinatura.' }
          ] },
          { id: 'moving-abroad', title: 'Saída de Portugal', content: [
            { kind: 'paragraph', text: 'Se sair de Portugal, o direito ao pagamento pode ser suspenso ou exigir procedimentos especiais. Para procurar trabalho noutro país EU, pode ser possível exportar o subsídio ao abrigo das regras europeias, mas isso deve ser tratado antecipadamente junto da Segurança Social / IEFP.' }
          ] }
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Pedido de Subsídio de Desemprego', amountEUR: 0, note: 'A inscrição no IEFP e o pedido à Segurança Social são gratuitos.' },
    { label: 'IAS 2026', amountEUR: 537.13, note: 'Utilizado para os limites das prestações da Segurança Social.' },
    { label: 'Valor mensal máximo do subsídio', amountEUR: 1342.83, note: '2,5 × IAS em 2026; o valor efetivo depende da base salarial e dos limites aplicáveis.' }
  ],
  sources: [
    {
      title: 'IEFP: informação sobre o Subsídio de Desemprego',
      url: 'https://www.iefp.pt/en/subsidio-desemprego',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: pedido de Subsídio de Desemprego',
      url: 'https://www.seg-social.pt/ptss/pssd/menu/trabalho/desemprego/subsidio-desemprego',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: valores do Indexante dos Apoios Sociais',
      url: 'https://www.seg-social.pt/ias',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
