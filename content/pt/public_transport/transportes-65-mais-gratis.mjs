export default {
  editorialVoice: 'hackportugal',
  id: 'transportes-65-mais-gratis',
  categoryId: 'public_transport',
  title: 'Transportes públicos gratuitos para pensionistas 65+',
  tldr: 'Em Portugal não existe um passe gratuito nacional único para todas as pessoas 65+: o benefício é pago pela Câmara Municipal concreta. Em 2026, em Lisboa, os residentes 65+ podem obter o passe navegante metropolitano gratuito; no Porto — Andante gratuito para residentes 65+; em Cascais — transporte municipal gratuito para residentes a partir dos 60 anos através do Viver Cascais. São necessários NIF, documento de identificação, morada no município e cartão de transporte.',
  tags: ['transportes', '65+', 'navegante', 'andante', 'câmara'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-free',
      title: 'O que é exatamente gratuito em 2026',
      content: [
        { kind: 'paragraph', text: 'O transporte gratuito para pessoas idosas em Portugal não é uma pensão nacional nem um benefício automático por ter autorização de residência. Normalmente é um programa municipal: a Câmara Municipal paga o passe mensal aos residentes do seu concelho.' },
        { kind: 'checklist', items: [
          'Lisboa: para residentes da Câmara Municipal de Lisboa 65+ — passe navegante metropolitano gratuito, se forem cumpridas as condições do programa da CML.',
          'Porto: para residentes do Município do Porto 65+ — Andante gratuito, tratado através dos canais municipais / Cartão Porto e do sistema Andante.',
          'Cascais: o programa MobiCascais / Viver Cascais dá acesso gratuito ou bonificado ao transporte municipal; para pessoas idosas, o limiar é geralmente 60+, não 65+.',
          'Outros municípios: as regras variam. Em Oeiras, Almada, Sintra, Loures, Braga, Coimbra, etc., é necessário consultar o site da sua Câmara Municipal.',
          'O benefício está quase sempre ligado ao local de residência, e não à nacionalidade: estrangeiros com residência legal e morada no município normalmente podem candidatar-se.',
          'A gratuitidade significa, na maioria dos casos, um passe mensal carregado num cartão, e não uma viagem avulsa gratuita sem cartão.'
        ] }
      ]
    },
    {
      id: 'lisboa',
      title: 'Lisboa: navegante 65+ gratuito',
      content: [
        { kind: 'paragraph', text: 'Em Lisboa, o benefício é gerido pela Câmara Municipal de Lisboa. Para pessoas 65+, a condição principal é ser residente em Lisboa. Em 2026, o programa cobre o passe navegante metropolitano para 65+, ou seja, viagens na rede da Área Metropolitana de Lisboa segundo as regras do navegante.' },
        { kind: 'checklist', items: [
          'Idade: 65 anos ou mais.',
          'Morada: residente em Lisboa, normalmente comprovada pela morada fiscal nas Finanças ou por outro documento aceite pela CML.',
          'Documento: Cartão de Cidadão, autorização de residência ou passaporte com comprovativo de residência legal.',
          'O NIF é quase sempre obrigatório.',
          'É necessário um cartão navegante personalizado com fotografia.',
          'Se não tiver cartão: primeiro peça o cartão navegante num ponto Carris/Metro/CP/Fertagus/AML ou através dos canais online disponíveis.',
          'Depois de aprovado o benefício, o passe mensal é carregado no cartão através de Multibanco, terminal do operador ou aplicação/ponto de venda, se o canal estiver disponível.',
          'Verifique a validade do perfil: o benefício pode exigir a atualização periódica do estatuto de residente.'
        ] },
        { kind: 'warning', text: 'Não confunda a cidade de Lisboa com a Área Metropolitana de Lisboa. Viver na Amadora, Oeiras, Loures ou Almada não é ser residente em Lisboa para o programa da CML, mesmo que se desloque diariamente para Lisboa. A candidatura é feita na Câmara do município onde tem morada.' }
      ]
    },
    {
      id: 'porto-cascais',
      title: 'Porto e Cascais: lógica semelhante, cartões diferentes',
      content: [
        { kind: 'substeps', items: [
          { id: 'porto', title: 'Porto: Andante 65+', content: [
            { kind: 'paragraph', text: 'No Porto, o transporte gratuito para 65+ está ligado ao Município do Porto e ao sistema Andante. Normalmente é necessário ser residente no Porto e ter um cartão Andante personalizado ou o Cartão Porto municipal, se o programa for tratado através dele.' },
            { kind: 'checklist', items: [
              'Consulte no site da Câmara Municipal do Porto o nome atual do programa para 65+.',
              'Prepare o NIF, documento de identificação, comprovativo de morada no Porto e fotografia, se for necessário um novo cartão.',
              'Se já tiver Andante personalizado, confirme se é possível associar o benefício ao cartão existente.',
              'Se a morada for em Vila Nova de Gaia, Matosinhos, Maia ou Gondomar — é outro município; o benefício do Porto pode não se aplicar.'
            ] }
          ] },
          { id: 'cascais', title: 'Cascais: Viver Cascais / MobiCascais 60+', content: [
            { kind: 'paragraph', text: 'Cascais é um exemplo separado: aí os benefícios para transporte municipal começam frequentemente nos 60+, e não nos 65+. O acesso é tratado através do ecossistema Viver Cascais / MobiCascais e está associado à residência, trabalho ou estudo em Cascais — a categoria concreta influencia a tarifa.' },
            { kind: 'checklist', items: [
              'Crie ou atualize o perfil Viver Cascais.',
              'Comprove a morada no concelho de Cascais.',
              'Verifique se a gratuitidade se aplica aos autocarros MobiCascais e quais os percursos incluídos.',
              'Se vive em Lisboa, mas se desloca para Cascais, o benefício de Cascais para residentes normalmente não se aplica.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para a candidatura',
      content: [
        { kind: 'paragraph', text: 'A lista exata depende da Câmara Municipal, mas a um estrangeiro normalmente é pedido um conjunto padrão. É melhor ter PDFs em papel e originais: nos balcões municipais é muitas vezes mais simples mostrar tudo de uma vez do que discutir o formato.' },
        { kind: 'checklist', items: [
          'Documento de identificação: autorização de residência, Cartão de Cidadão de cidadão da UE, passaporte + estatuto de permanência válido.',
          'NIF.',
          'Comprovativo de idade: normalmente visível no documento de identificação.',
          'Comprovativo de morada no município necessário: certidão de domicílio fiscal do Portal das Finanças, atestado de residência da Junta de Freguesia, contrato de arrendamento ou fatura de serviços — conforme o que a Câmara concreta aceitar.',
          'Número do cartão de transporte: navegante personalizada em Lisboa, Andante no Porto, Viver Cascais/MobiCascais em Cascais.',
          'Fotografia, se for emitido um novo cartão personalizado.',
          'Email e telefone para notificações.',
          'CMD ou acesso ao Portal das Finanças são úteis se a candidatura for submetida online.'
        ] },
        { kind: 'warning', text: 'O atestado de residência da Junta de Freguesia nem sempre substitui a morada fiscal. Alguns programas verificam especificamente o domicílio fiscal nas Finanças. Se mudou de casa, atualize primeiro a morada nas Finanças; caso contrário, a Câmara pode recusar.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como candidatar-se sem voltas desnecessárias',
      content: [
        { kind: 'checklist', items: [
          '1. Identifique o seu município pela morada de residência, e não pela estação de metro mais próxima.',
          '2. Abra o site da Câmara Municipal e procure a secção Mobilidade, Transportes, Passe gratuito, 65+ ou Apoio à mobilidade.',
          '3. Verifique se é necessário ter primeiro o cartão de transporte. Em Lisboa, sem navegante personalizada, normalmente não há onde carregar o benefício.',
          '4. Reúna os documentos e faça PDFs/fotografias em boa qualidade.',
          '5. Submeta online, se existir formulário; caso contrário, marque atendimento ou dirija-se ao balcão da Câmara / Espaço Cidadão / Loja do Munícipe.',
          '6. Aguarde a confirmação. Não compre antecipadamente um passe mensal caro se o prazo de resposta for curto, mas tenha em conta que a aprovação nem sempre é imediata.',
          '7. Depois da aprovação, ative ou carregue o passe no cartão no canal do operador: terminal, bilheteira, Multibanco ou aplicação, se suportado.',
          '8. Todos os meses, confirme que o passe gratuito está realmente carregado: o validador deve aceitar o cartão sem erro.'
        ] },
        { kind: 'paragraph', text: 'Se o funcionário da bilheteira do Metro/Carris/Andante disser “isto não é connosco”, pode ter razão: o operador de transporte gere o cartão, mas o direito à gratuitidade é confirmado pela Câmara Municipal. Em caso de dúvida, peça uma indicação por escrito de onde exatamente deve tratar o benefício municipal.' }
      ]
    },
    {
      id: 'edge-cases',
      title: 'Armadilhas frequentes para expatriados',
      content: [
        { kind: 'checklist', items: [
          'Acabou de se mudar e ainda não atualizou a morada nas Finanças — primeiro altere o domicílio fiscal.',
          'Vive nos arredores de Lisboa, mas quer o benefício da CML — precisa do programa do seu município, não de Lisboa.',
          'Tem um visto temporário D7/D8/D1, mas ainda não tem autorização de residência — algumas Câmaras aceitam residência legal e morada, outras exigem um documento mais estável; confirme antecipadamente.',
          'Tem um cartão anónimo normal — para benefícios, quase sempre é necessário um cartão personalizado com nome e fotografia.',
          'É pensionista por idade noutro país, mas tem 64 anos — em Lisboa/Porto o limiar etário é 65+; o estatuto de pensão estrangeira por si só não ajuda.',
          'Em Cascais, a lógica de idade pode ser mais flexível — 60+, mas apenas segundo as regras de Cascais e para as categorias aplicáveis.',
          'O benefício pode não cobrir comboios de longo curso da CP, Alfa Pendular, Intercidades, táxis, Bolt/Uber e percursos turísticos.',
          'Os programas municipais alteram as condições orçamentais todos os anos; antes da renovação, consulte o site da Câmara.'
        ] },
        { kind: 'warning', text: 'Não entregue o cartão a outra pessoa. Os cartões personalizados navegante/Andante/MobiCascais são verificados pelos revisores; usar o cartão bonificado de outra pessoa pode resultar em coima e no bloqueio do benefício.' }
      ]
    }
  ],
  costs: [
    { label: 'Emissão do cartão personalizado navegante / Lisboa Viva', amountEURMin: 7, amountEURMax: 12, note: 'Normalmente paga-se uma vez pela emissão do cartão; a emissão urgente é mais cara. O passe em si para 65+ Lisboa aprovados — 0 €.' },
    { label: 'Cartão Andante personalizado', amountEURMin: 6, amountEURMax: 12, note: 'O preço depende do tipo e da urgência da emissão; a gratuitidade diz respeito ao passe mensal depois da aprovação pelo Município do Porto.' },
    { label: 'Benefício municipal 65+ / 60+', amountEUR: 0, note: 'Se a Câmara aprovou a candidatura, o passe mensal na rede incluída é pago pelo município.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — mobilidade e passes gratuitos', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metropolitano de Lisboa — cartões, passes e rede navegante', url: 'https://www.metrolisboa.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — transportes e apoio à mobilidade', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Cascais — MobiCascais e Viver Cascais', url: 'https://www.cascais.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
