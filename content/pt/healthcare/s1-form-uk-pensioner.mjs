export default {
  editorialVoice: 'hackportugal',
  id: 's1-form-uk-pensioner',
  categoryId: 'healthcare',
  title: 'Formulário S1 para pensionistas britânicos: acesso ao SNS em Portugal',
  tldr: 'O S1 é o documento através do qual o UK paga os seus cuidados de saúde públicos em Portugal, se receber a UK State Pension ou alguns exportable benefits. Em 2026, é pedido à NHS Business Services Authority, depois registado na Segurança Social em Portugal e, por fim, deve dirigir-se ao Centro de Saúde para obter o número de utente SNS. O formulário é gratuito; o S1 não cobre clínicas privadas nem seguro.',
  tags: ['s1', 'sns', 'uk', 'pensão'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-use',
      title: 'A quem se aplica o S1',
      content: [
        { kind: 'paragraph', text: 'O S1 é necessário para pensionistas britânicos e alguns beneficiários de prestações britânicas que vivem em Portugal e querem utilizar o SNS nas mesmas condições que os residentes em Portugal. As despesas com cuidados de saúde públicos são pagas pelo UK, mas o atendimento é feito através do sistema português.' },
        { kind: 'checklist', items: [
          'Recebe a UK State Pension — o cenário mais comum.',
          'Ou recebe determinados exportable benefits do UK que dão direito ao S1.',
          'Está a mudar-se para viver em Portugal ou já é residente em Portugal.',
          'Não trabalha em Portugal como empregado/recibos verdes com contribuições normais para a Segurança Social.',
          'Tem uma base legal de residência: autorização de residência AIMA, residence card ao abrigo do Withdrawal Agreement ou outro estatuto válido.',
          'O S1 pode cobrir alguns dependants, mas isto é verificado individualmente pela NHS BSA.',
          'Se ainda não atingiu a UK State Pension age, o simples facto de ter uma “pensão privada” normalmente não é suficiente.'
        ] },
        { kind: 'warning', text: 'O S1 não é um visto, uma autorização de residência, um NIF nem um seguro privado. Apenas confirma quem paga os seus cuidados de saúde públicos depois do registo em Portugal.' }
      ]
    },
    {
      id: 'request-from-uk',
      title: '1. Peça o S1 à NHS BSA 🇬🇧',
      content: [
        { kind: 'paragraph', text: 'O formulário é emitido pela NHS Business Services Authority, departamento Overseas Healthcare Services. O S1 deve ser pedido ao UK, não ao SNS português. Normalmente, isto é feito depois de tomada a decisão de mudança ou já após a chegada, quando o endereço em Portugal é conhecido.' },
        { kind: 'checklist', items: [
          'Contacte os NHS Overseas Healthcare Services através dos contactos no GOV.UK.',
          'Prepare o National Insurance number.',
          'Indique a data da mudança ou a data de início da residência em Portugal.',
          'Indique o endereço português, se já o tiver.',
          'Comunique os dados do cônjuge/parceiro e dos dependants, se quiser verificar o direito deles à cobertura.',
          'Verifique se o nome no S1 coincide com o passaporte e com os documentos portugueses.',
          'Guarde o original do S1 e faça digitalizações: a Segurança Social frequentemente fica com cópias ou carimba-as.'
        ] },
        { kind: 'paragraph', text: 'Os prazos dependem da NHS BSA e dos correios. Na prática, conte com várias semanas, especialmente se for necessária verificação de dependants ou do endereço.' }
      ]
    },
    {
      id: 'register-social-security',
      title: '2. Registe o S1 na Segurança Social 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'Depois de receber o S1, deve registá-lo no Instituto da Segurança Social em Portugal. Sem este registo, o Centro de Saúde pode recusar a inscrição completa no SNS como S1-holder.' },
        { kind: 'checklist', items: [
          'Marque atendimento ou dirija-se ao serviço de atendimento da Segurança Social da sua área de residência.',
          'Leve o original do S1 e uma cópia.',
          'Passaporte UK.',
          'Documento de residência: autorização de residência AIMA, cartão de residência ao abrigo do Withdrawal Agreement ou outro documento válido.',
          'NIF.',
          'Comprovativo de morada: contrato de arrendamento, conta de serviços públicos ou atestado de residência da Junta de Freguesia.',
          'Se houver cônjuge/dependants — os documentos deles e S1 separados, se a NHS BSA os tiver emitido separadamente.',
          'Peça comprovativo do registo do S1 ou stamped copy para o Centro de Saúde.'
        ] },
        { kind: 'warning', text: 'Não confunda o registo do S1 com contribuições normais para a Segurança Social. Um pensionista com S1 normalmente não paga contribuições portuguesas para a segurança social apenas por ter acesso ao SNS. Mas, se começar a trabalhar em Portugal, as regras de cobertura podem mudar.' }
      ]
    },
    {
      id: 'get-utente',
      title: '3. Obtenha o número de utente no Centro de Saúde',
      content: [
        { kind: 'paragraph', text: 'Depois da Segurança Social, dirija-se ao Centro de Saúde da sua área de residência. Aí será registado no SNS e ser-lhe-á atribuído o número de utente — o número de paciente do SNS.' },
        { kind: 'checklist', items: [
          'Comprovativo do registo do S1 na Segurança Social.',
          'Passaporte.',
          'Autorização de residência/cartão de residente.',
          'NIF.',
          'Comprovativo de morada na área do Centro de Saúde.',
          'Contactos: telefone português e email.',
          'Lista de medicamentos atuais e diagnósticos — útil para a primeira consulta.',
          'Se tiver um NHS medical summary, leve uma impressão ou PDF em inglês.'
        ] },
        { kind: 'paragraph', text: 'Depois do registo, utiliza o SNS como um residente local: médico de família quando houver vagas, referenciações para especialistas, receitas, análises, internamento. As listas de espera e a disponibilidade dependem da zona; Lisboa, Cascais, Algarve e Porto estão frequentemente sobrecarregados.' }
      ]
    },
    {
      id: 'what-covered',
      title: 'O que o S1 cobre e não cobre',
      content: [
        { kind: 'checklist', items: [
          'Cobre cuidados no SNS: Centro de Saúde, hospitais públicos, referenciações, parte dos medicamentos sujeitos a receita médica.',
          'Dá acesso nas mesmas condições que os residentes em Portugal, não a “british private healthcare”.',
          'Não cobre clínicas privadas, se estas não trabalharem por acordo com o SNS para uma referenciação específica.',
          'Não substitui travel insurance para viagens, repatriamento, cancelamento de voos e medicina privada.',
          'Não significa atribuição automática de médico de família — em algumas zonas há lista de espera.',
          'Não cobre automaticamente cuidados em lar, apoio doméstico e long-term care.',
          'Para viagens fora de Portugal, verifique o direito a UK-issued GHIC/EHIC através da NHS BSA.',
          'Se se mudar de Portugal para outro país, deve voltar a verificar o S1 e o registo.'
        ] },
        { kind: 'paragraph', text: 'No SNS, a maioria das taxas moderadoras normais foi eliminada, mas, em alguns casos, por exemplo urgência sem referenciação do SNS 24/INEM/médico de família, podem aplicar-se taxas moderadoras. As comparticipações em medicamentos dependem do medicamento e do regime de comparticipação.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Problemas frequentes e como resolvê-los',
      content: [
        { kind: 'checklist', items: [
          'O Centro de Saúde pede “NISS”: explique que se está a registar como S1-holder e mostre o comprovativo da Segurança Social.',
          'O S1 ainda não chegou: use temporariamente seguro privado ou acesso pago; a assistência de emergência através do 112/SNS continua disponível.',
          'A morada mudou: atualize a morada nas Finanças, na Segurança Social e no Centro de Saúde.',
          'O cônjuge é mais novo do que a idade da reforma: não presuma cobertura automática — confirme com a NHS BSA.',
          'Começou a trabalhar em Portugal: informe a NHS BSA e a Segurança Social, porque o país responsável pela healthcare cover pode mudar.',
          'Não há médico de família no Centro de Saúde: peça inscrição sem médico de família e use o SNS 24 para triagem e referenciações.',
          'Documentos em inglês: normalmente o S1 é aceite sem tradução, mas localmente podem pedir cópias e comprovativo de morada em português.'
        ] },
        { kind: 'warning', text: 'Não adie o S1 até ter uma doença grave. O registo na Segurança Social e no SNS pode demorar, e a medicina privada em Portugal torna-se rapidamente cara em caso de internamento ou tratamento crónico.' }
      ]
    }
  ],
  costs: [
    { label: 'Emissão do formulário S1 pela NHS BSA', amountEUR: 0, note: 'Gratuito; podem existir apenas custos de chamadas/correio.' },
    { label: 'Registo do S1 na Segurança Social', amountEUR: 0, note: 'O registo público é gratuito.' },
    { label: 'Registo do número de utente no SNS', amountEUR: 0, note: 'Gratuito no Centro de Saúde.' },
    { label: 'Seguro privado durante o período de espera', amountEURMin: 30, amountEURMax: 150, note: 'Valor indicativo por mês para uma pessoa idosa, variando muito consoante a idade, franquia e exclusões.' }
  ],
  sources: [
    {
      title: 'GOV.UK: Cuidados de saúde em Portugal, incluindo a Madeira',
      url: 'https://www.gov.uk/guidance/healthcare-in-portugal-including-madeira',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'NHS Business Services Authority: Overseas Healthcare Services',
      url: 'https://www.nhsbsa.nhs.uk/contact-us/overseas-healthcare-services-contact-us',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: inscrição e acesso ao Serviço Nacional de Saúde',
      url: 'https://www.sns24.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Blevins Franks: O formulário S1 para cuidados de saúde em Portugal',
      url: 'https://www.blevinsfranks.com/the-s1-form/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
