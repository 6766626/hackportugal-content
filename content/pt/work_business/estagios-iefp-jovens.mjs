export default {
  editorialVoice: 'hackportugal',
  id: 'estagios-iefp-jovens',
  categoryId: 'work_business',
  title: 'Estágios IEFP: estágios para jovens através do serviço de emprego',
  tldr: 'Os Estágios IEFP são estágios remunerados através do Centro de Emprego/IEFP para entrar no mercado de trabalho português.\n\nEm 2026, a duração típica dos programas para jovens é até 12 meses; normalmente, o candidato tem 18–29 anos, e pessoas com 30+ só são admitidas em grupos especiais, por exemplo beneficiários de RSI. O pagamento é feito pelo empregador, e o IEFP reembolsa-lhe uma parte dos custos. Uma referência frequente nas ofertas é cerca de 870 €/mês brutos: a bolsa efetiva depende do IAS 537,13 €, do nível de qualificação e do programa.',
  tags: ['iefp', 'estágio', 'trabalho', 'jovens'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é um Estágio IEFP e quem paga',
      content: [
        { kind: 'paragraph', text: 'Um Estágio IEFP não é um contrato de trabalho comum, mas sim um programa de estágio profissional aprovado pelo IEFP. O estagiário trabalha numa empresa de acordo com um plano de estágio, recebe uma bolsa de estágio, subsídio de alimentação e seguro de acidentes de trabalho. O dinheiro é pago mensalmente pelo empregador; depois, o IEFP reembolsa o empregador por uma parte dos custos, de acordo com as regras da medida concreta.' },
        { kind: 'paragraph', text: 'Para um expatriado, a principal vantagem é ter uma primeira experiência legal em Portugal, uma linha no CV e a possibilidade de obter um contrato de trabalho após o estágio. A principal desvantagem é que o estágio é temporário, normalmente até 12 meses, e não garante contratação.' },
        { kind: 'warning', text: 'Não confunda: o IEFP não lhe “paga um extra” diretamente. Se a oferta indicar 870 €/mês, normalmente trata-se da bolsa bruta paga pela empresa; a compensação do IEFP vai para o empregador.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Quem pode participar em 2026',
      content: [
        { kind: 'paragraph', text: 'O grupo-alvo de base dos estágios para jovens do IEFP são pessoas dos 18 aos 29 anos, inscritas no Centro de Emprego como desempregado ou à procura do 1.º emprego. Para pessoas com 30+, o acesso depende da medida e do estatuto concretos: por exemplo, beneficiários de Rendimento Social de Inserção (RSI), desempregados de longa duração ou outros grupos vulneráveis podem enquadrar-se em regimes específicos, incluindo Inserção+.' },
        { kind: 'checklist', items: [
          'Idade normalmente entre 18–29 anos para Estágios Profissionais / Estágios INICIAR para jovens',
          'Para 30+ — confirme a elegibilidade na candidatura concreta: RSI, desemprego, deficiência, desemprego de longa duração',
          'É necessária inscrição no IEFP como candidato a emprego',
          'É necessária permanência legal e direito a trabalhar em Portugal: autorização de residência, visto com direito a trabalho ou outro estatuto admissível',
          'É necessário NIF; o NISS será quase sempre necessário para pagamentos e Segurança Social',
          'É necessário um endereço em Portugal: contrato de arrendamento, atestado de residência ou outro comprovativo de morada',
          'Não é permitido fazer um estágio IEFP num empregador onde já trabalha efetivamente com um contrato de trabalho comum',
          'O empregador tem de ser aprovado pelo IEFP e apresentar candidatura no âmbito de um programa aberto'
        ] },
        { kind: 'warning', text: 'Se entrou como turista ou tem um visto sem direito a trabalho, um estágio IEFP não resolve o estatuto migratório. Primeiro confirme o direito a trabalhar e a prolongar a permanência através da AIMA.' }
      ]
    },
    {
      id: 'money',
      title: 'Quanto pagam: porque “870 €” não é universal',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o índice de referência IAS é 537,13 €. Muitas bolsas IEFP são calculadas como um múltiplo do IAS e dependem do nível de qualificação segundo o Quadro Nacional de Qualificações. Por isso, o valor anunciado pode variar: cerca de 859–870 €/mês brutos para uma categoria, mais para licenciatura/mestrado e menos para alguns níveis iniciais.' },
        { kind: 'checklist', items: [
          'Bolsa de estágio — valor bruto antes de impostos e Segurança Social',
          'Subsídio de alimentação é normalmente pago à parte pelos dias úteis',
          'Seguro de acidentes de trabalho deve ser assegurado pelo empregador',
          'O IEFP reembolsa o empregador por uma parte da bolsa, alimentação e seguro de acordo com as regras do programa',
          'O estagiário normalmente faz descontos para Segurança Social; confirme no recibo de vencimento',
          'Pode haver retenção de IRS se o rendimento e a situação pessoal se enquadrarem na retenção na fonte',
          'Um estágio não equivale ao SMN: o salário mínimo de 2026 é 920 €, mas a bolsa IEFP é calculada pelas suas próprias regras',
          'Se a empresa prometer “870 € líquidos”, peça um cálculo escrito bruto/líquido antes de assinar'
        ] },
        { kind: 'warning', text: 'Não aceite um esquema de “estágio oficial, mas trabalho a tempo inteiro não oficial sem pagamentos”. As queixas são apresentadas ao IEFP e à ACT, mas é melhor não começar com um acordo cinzento.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como candidatar-se através do Centro de Emprego',
      content: [
        { kind: 'substeps', items: [
          { id: 'register', title: '1. Inscreva-se no IEFP', content: [
            { kind: 'paragraph', text: 'Online através de iefponline.iefp.pt ou presencialmente no Centro de Emprego da sua área de residência. Na prática, a visita presencial é útil se tiver documentos estrangeiros, uma autorização de residência recente ou não tiver Chave Móvel Digital.' },
            { kind: 'checklist', items: [
              'Passaporte ou cartão de residência',
              'NIF',
              'NISS, se já tiver',
              'Comprovativo de morada',
              'CV em português ou inglês',
              'Diplomas, certificados, histórico escolar',
              'Documentos de reconhecimento do diploma, se a profissão for regulada',
              'IBAN de uma conta portuguesa ou SEPA'
            ] }
          ] },
          { id: 'profile', title: '2. Atualize o perfil profissional', content: [
            { kind: 'paragraph', text: 'Na área pessoal do IEFP, indique formação, línguas, experiência, funções pretendidas e concelhos onde aceita trabalhar. Quanto mais preciso for o perfil, maior a probabilidade de receber encaminhamentos relevantes do técnico do IEFP.' }
          ] },
          { id: 'search', title: '3. Procure ofertas com a indicação Estágio IEFP', content: [
            { kind: 'paragraph', text: 'Consulte o IEFP Online, LinkedIn, Net-Empregos e os sites das empresas. Na candidatura, escreva logo que está inscrito no IEFP e que é elegível para Estágio IEFP; para o empregador isto é importante, porque sem a sua inscrição a candidatura não avança.' }
          ] },
          { id: 'employer-submits', title: '4. O empregador apresenta a candidatura', content: [
            { kind: 'paragraph', text: 'A candidatura final ao IEFP é apresentada pela empresa: plano de estágio, tutor, duração, bolsa, local de trabalho. O IEFP verifica a elegibilidade do empregador e do candidato. Começar o estágio antes da aprovação formal é arriscado: as despesas podem não ser reconhecidas.' }
          ] }
        ] }
      ]
    },
    {
      id: 'program-types',
      title: 'Que programas existem',
      content: [
        { kind: 'paragraph', text: 'Os nomes das medidas do IEFP mudam consoante os anos e os avisos de abertura. Em abril de 2026, não se oriente por um nome antigo visto num blogue, mas pela página ativa do IEFP e pelo aviso da candidatura concreta.' },
        { kind: 'checklist', items: [
          'Estágios Profissionais / estágios para jovens — via típica para 18–29 anos após os estudos ou para uma primeira experiência',
          'Estágios INICIAR — formato para início de carreira profissional; as condições dependem do aviso IEFP aberto',
          'Estágios IPN ou estágios através de incubadoras/parceiros — muitas vezes formalizados através da empresa/organização, mas as regras de financiamento devem ser confirmadas na mesma com o IEFP',
          'Inserção+ — medidas de integração para pessoas em situação vulnerável; para 30+ é importante ter um estatuto como RSI ou desemprego de longa duração',
          'Estágios para pessoas com deficiência e incapacidade — regras próprias e apoio reforçado ao empregador',
          'Depois do estágio, o empregador pode receber um incentivo pela contratação sem termo ou por contrato a termo, se existir o apoio correspondente aberto'
        ] },
        { kind: 'warning', text: 'Se o recrutador disser “isto é IEFP, mas não é preciso inscrever-se”, peça o número da medida e o aviso. Num verdadeiro estágio IEFP, a inscrição do candidato e a aprovação do IEFP são elementos essenciais.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Prática para expatriados: como aumentar as hipóteses',
      content: [
        { kind: 'checklist', items: [
          'Faça um CV em formato europeu, mas curto: 1–2 páginas, sem uma biografia longa',
          'Acrescente o nível de português: A2/B1 muitas vezes conta mais do que um inglês perfeito',
          'Obtenha o NISS com antecedência, se já tiver direito: as empresas não gostam de atrasos no processo',
          'Pergunte ao técnico do IEFP em que medida se enquadra: 18–29, RSI, desempregado de longa duração, primeiro emprego',
          'Na entrevista, confirme a bolsa bruta, alimentação, horário, tutor e probabilidade de contratação após o estágio',
          'Não esconda o estatuto migratório: o empregador precisa de saber se é possível formalizar legalmente o estágio',
          'Se o diploma for estrangeiro, prepare tradução ou reconhecimento através da DGES, se a profissão o exigir',
          'Guarde todos os e-mails, plano de estágio e recibos de vencimento'
        ] },
        { kind: 'paragraph', text: 'Uma boa estratégia: primeiro inscrever-se no IEFP e depois escrever diretamente às empresas com a frase “estou inscrito no IEFP e elegível para estágio profissional”. Para pequenos negócios, isto reduz parte do receio burocrático.' }
      ]
    }
  ],
  costs: [
    { label: 'Inscrição do candidato no IEFP', amountEUR: 0, note: 'Gratuita online ou no Centro de Emprego' },
    { label: 'Referência de bolsa cerca de 1,6 IAS', amountEUR: 859.41, note: 'IAS 2026 = 537,13 €; o valor efetivo depende do programa e da qualificação' },
    { label: 'Referência frequente nas ofertas', amountEUR: 870, note: 'Bruto por mês; não é um valor IEFP garantido para todos os candidatos' }
  ],
  sources: [
    { title: 'IEFP — medidas de estágios e apoios ao emprego', url: 'https://www.iefp.pt/estagios', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IEFP Online — inscrição, ofertas de emprego e candidaturas', url: 'https://iefponline.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — inscrição no Centro de Emprego', url: 'https://www.gov.pt/pt/servicos/inscrever-se-no-centro-de-emprego', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — IEFP e políticas públicas de emprego', url: 'https://www.gov.pt/pt/entidades/instituto-do-emprego-e-formacao-profissional', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
