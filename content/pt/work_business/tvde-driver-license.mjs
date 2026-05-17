export default {
  editorialVoice: 'hackportugal',
  id: 'tvde-driver-license',
  categoryId: 'work_business',
  title: 'TVDE: como tornar-se motorista da Uber/Bolt em Portugal',
  tldr: 'TVDE é trabalho legal como motorista através da Uber, Bolt e outras plataformas eletrónicas. Em 2026, o motorista precisa de um certificado de motorista TVDE do IMT: carta B há mais de 3 anos, curso de formação inicial 50h, aptidão médica e psicológica, registo criminal e pedido ao IMT. O veículo deve estar registado para TVDE no DUA/Certificado de Matrícula, ter seguro especial, inspeção e dístico TVDE. Só é possível trabalhar através de um operador TVDE licenciado e com registo na plataforma.',
  tags: ['tvde', 'uber', 'bolt', 'imt', 'trabalho'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-tvde-is',
      title: 'O que é TVDE e quem pode conduzir na prática',
      content: [
        { kind: 'paragraph', text: 'TVDE significa Transporte Individual e Remunerado de Passageiros em Veículos Descaracterizados a partir de Plataforma Eletrónica. Não é táxi: os pedidos chegam através da plataforma, o preço é calculado pela aplicação e o transporte é juridicamente realizado por um operador TVDE registado no IMT.' },
        { kind: 'paragraph', text: 'A lei de base é a Lei 45/2018. Na prática, em 2026 o esquema é este: o motorista obtém o certificado de motorista TVDE, o automóvel é registado como TVDE, o operador tem licença TVDE e a Uber/Bolt verificam os documentos antes de ativar a conta.' },
        { kind: 'checklist', items: [
          'Motorista: carta de condução da categoria B há mais de 3 anos',
          'Curso de motorista TVDE — 50 horas numa escola acreditada',
          'Certificado de motorista TVDE emitido pelo IMT',
          'Registo criminal limpo ou admissível para transporte de passageiros',
          'Aptidão médica e psicológica, normalmente segundo o Grupo 2',
          'Ligação a um operador TVDE licenciado: operador próprio ou trabalho através de outro operador',
          'Automóvel com DUA/Certificado de Matrícula onde conste a utilização TVDE',
          'Seguro para atividade TVDE, não um seguro automóvel particular comum',
          'Registo do motorista e do veículo na Uber/Bolt'
        ] }
      ]
    },
    {
      id: 'driver-certificate',
      title: 'Obter o certificado de motorista TVDE no IMT',
      content: [
        { kind: 'paragraph', text: 'Sem certificado de motorista TVDE, a plataforma não ativa o motorista. O certificado é emitido pelo IMT após o curso e a verificação dos requisitos. Normalmente é válido por 5 anos; a renovação é feita antes do termo do prazo através de formação contínua/renovação e novo pedido.' },
        { kind: 'substeps', items: [
          { id: 'requirements', title: '1. Verificar os requisitos pessoais', content: [
            { kind: 'checklist', items: [
              'A idade não é o principal filtro, mas é necessária carta B há mais de 3 anos',
              'Carta de condução portuguesa ou reconhecida em Portugal',
              'NIF',
              'Morada em Portugal',
              'Registo criminal recente — normalmente pedem um documento recente, com menos de 3 meses',
              'Atestado médico e avaliação psicológica, se a escola/IMT exigir para o Grupo 2',
              'Direito legal a trabalhar em Portugal: autorização de residência, cidadania da UE ou outro estatuto com acesso ao trabalho'
            ] }
          ] },
          { id: 'course', title: '2. Fazer o curso TVDE 50h', content: [
            { kind: 'paragraph', text: 'O curso decorre num centro de formação reconhecido pelo IMT. O programa é regulado pela Portaria 293/2018 e inclui segurança, atendimento de passageiros, regras TVDE, comportamento rodoviário, acessibilidade para passageiros com limitações e utilização de plataformas.' },
            { kind: 'warning', text: 'Não compre um “certificado pronto”. As plataformas cruzam o documento com o IMT, e um certificado falso pode fechar o acesso à Uber/Bolt e criar riscos criminais.' }
          ] },
          { id: 'imt-application', title: '3. Submeter o pedido ao IMT', content: [
            { kind: 'paragraph', text: 'Após o curso, a escola normalmente emite uma declaração/certificado de formação. Com esse documento, submete-se o pedido de certificado de motorista TVDE através dos serviços do IMT ou seguindo as instruções da escola. O prazo depende da carga de trabalho do IMT e da completude dos documentos.' },
            { kind: 'checklist', items: [
              'Documento de identificação: Cartão de Cidadão, autorização de residência ou passaporte com comprovativo de estatuto',
              'Carta de condução',
              'Certificado/declaração do curso TVDE 50h',
              'Registo criminal',
              'Atestado médico e avaliação psicológica, se aplicável',
              'NIF e contactos',
              'Comprovativo de pagamento ao IMT'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'operator-model',
      title: 'Escolher o modelo: operador TVDE próprio ou trabalho através de operador',
      content: [
        { kind: 'paragraph', text: 'O motorista, por si só, não presta o serviço TVDE à plataforma. Segundo a Lei 45/2018, o transporte é realizado por um operador TVDE registado no IMT. Por isso, existem dois caminhos: entrar/ligar-se a um operador TVDE existente ou criar o seu próprio operador.' },
        { kind: 'checklist', items: [
          'Através de operador de terceiros: início mais rápido, mas a comissão/arrendamento/horário dependem do contrato',
          'Operador próprio: mais controlo, mas são necessários atividade/empresa, licença IMT, contabilidade, seguro e documentos do veículo',
          'Se abrir atividade como ENI ou empresa, discuta antecipadamente o CAE, IVA, IRS/IRC e Segurança Social com um contabilista',
          'A plataforma só pode celebrar contrato com um operador que tenha passado a verificação',
          'O contrato com o operador deve indicar claramente quem paga combustível, Via Verde, coimas, manutenção, seguro e comissão da plataforma',
          'Verifique quem é o titular da conta na Uber/Bolt e para onde são feitos os pagamentos'
        ] },
        { kind: 'warning', text: '“Alugo conta Uber/Bolt” e trabalhar no perfil de outra pessoa — risco de bloqueio, problemas com o seguro e responsabilidade em caso de acidente. O motorista na viagem deve corresponder ao motorista registado na plataforma.' }
      ]
    },
    {
      id: 'vehicle-documents',
      title: 'Preparar o automóvel: DUA, seguro, inspeção, dístico',
      content: [
        { kind: 'paragraph', text: 'Um automóvel ligeiro comum com seguro particular não é suficiente. O automóvel deve estar associado à atividade TVDE e passar a verificação documental da plataforma. A Uber/Bolt podem impor os seus próprios requisitos de idade, classe, estado e sustentabilidade ambiental do veículo — por vezes mais rigorosos ou formulados de forma diferente da lei.' },
        { kind: 'checklist', items: [
          'DUA/Certificado de Matrícula com indicação de utilização para TVDE ou anotação correspondente',
          'Automóvel ligeiro para transporte de passageiros, normalmente até 9 lugares incluindo o motorista',
          'Matrícula portuguesa',
          'Seguro automóvel para transporte remunerado/TVDE, e não seguro particular comum',
          'Inspeção periódica válida; para TVDE, as plataformas normalmente exigem a ficha de inspeção atualizada',
          'Dístico TVDE no automóvel segundo as regras da Lei 45/2018',
          'Documento do proprietário ou contrato de aluguer/leasing, se o veículo não for seu',
          'Fotografias do automóvel e dos documentos para a Uber/Bolt',
          'Via Verde é útil e praticamente indispensável, mas não substitui os documentos TVDE'
        ] },
        { kind: 'warning', text: 'Se no DUA não constar a finalidade/afetação TVDE correta ou se o seguro não cobrir transporte remunerado de passageiros, em caso de acidente a seguradora pode contestar o pagamento. Este é um dos riscos mais caros do TVDE.' }
      ]
    },
    {
      id: 'platform-registration',
      title: 'Registar-se na Uber/Bolt e concluir a ativação',
      content: [
        { kind: 'paragraph', text: 'Após o certificado do IMT e a preparação do automóvel, o motorista carrega os documentos na Uber Driver, Bolt Driver ou na área do operador. A verificação não é imediata: a plataforma confirma a identidade, o certificado, a carta, o automóvel, o seguro e a ligação ao operador.' },
        { kind: 'checklist', items: [
          'Perfil de motorista com nome real e fotografia',
          'Carta de condução',
          'Certificado de motorista TVDE do IMT',
          'Documento de identificação e direito ao trabalho',
          'Registo criminal, se a plataforma pedir atualização',
          'Dados do operador TVDE e comprovativo da ligação com ele',
          'DUA/Certificado de Matrícula do automóvel',
          'Seguro TVDE',
          'Inspeção válida',
          'IBAN para pagamentos ao operador ou ao motorista — depende do modelo'
        ] },
        { kind: 'paragraph', text: 'Antes do primeiro turno, verifique as tarifas de comissão, regras de cancelamento, zonas aeroportuárias, penalizações por reclamações, regras sobre cadeiras de criança, transporte de animais e limites de tempo ao volante. Na Uber e na Bolt, estas regras são atualizadas com mais frequência do que a lei.' }
      ]
    },
    {
      id: 'tax-and-practical',
      title: 'Impostos, despesas e economia diária',
      content: [
        { kind: 'paragraph', text: 'O TVDE parece “sentar-se e arrancar”, mas a economia depende da comissão da plataforma, da comissão do operador, do aluguer do veículo, do combustível, do seguro e dos impostos. Se for trabalhador independente ou tiver operador próprio, prepare antecipadamente os recibos verdes/faturação, a Segurança Social e o registo das despesas.' },
        { kind: 'checklist', items: [
          'NIF é obrigatório para contratos, impostos e plataformas',
          'NISS é necessário para a Segurança Social se trabalhar como trabalhador independente ou empregado',
          'Recibos verdes nem sempre são adequados: o modelo depende de ser motorista, operador ou ambos ao mesmo tempo',
          'A comissão da plataforma e a comissão do operador reduzem o volume de negócios antes do rendimento tributável',
          'Despesas: combustível/carregamento, lavagem, pneus, manutenção, estacionamento, portagens, Via Verde, seguro',
          'Guarde faturas com NIF relativas a despesas ligadas à atividade',
          'Se o volume de negócios crescer, é melhor discutir o regime de IVA e a contabilidade organizada com um contabilista',
          'Coimas do IMT/ANSR/plataforma por documentos e comportamento podem ser superiores à receita diária'
        ] },
        { kind: 'warning', text: 'Não considere a receita na aplicação como “salário”. Dela ainda saem comissão, operador, automóvel, combustível, seguro, Segurança Social e IRS/IRC. Antes de alugar um veículo, peça ao operador um cálculo líquido após todas as deduções.' }
      ]
    }
  ],
  costs: [
    { label: 'Curso de motorista TVDE 50h', amountEURMin: 150, amountEURMax: 350, note: 'Preço de mercado das escolas; depende da cidade e do formato' },
    { label: 'Pedido/certificado IMT TVDE', amountEURMin: 30, amountEURMax: 60, note: 'Verifique a taxa IMT atual no momento da submissão' },
    { label: 'Registo criminal online', amountEUR: 5, note: 'Normalmente é mais barato online; presencialmente pode ser diferente' },
    { label: 'Atestado médico + avaliação psicológica', amountEURMin: 60, amountEURMax: 140, note: 'Se for exigido para o Grupo 2/processo da escola ou do IMT' },
    { label: 'Seguro automóvel TVDE', amountEURMin: 700, amountEURMax: 1800, note: 'Intervalo anual varia muito consoante o veículo, experiência e seguradora' }
  ],
  sources: [
    { title: 'IMT: página oficial TVDE', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/TVDE/Paginas/TVDE.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 45/2018 — regime jurídico TVDE', url: 'https://dre.pt/dre/detalhe/lei/45-2018-115991688', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portaria 293/2018 — formação de motoristas TVDE', url: 'https://dre.pt/dre/detalhe/portaria/293-2018-116820880', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Uber Portugal: requisitos para motoristas TVDE', url: 'https://www.uber.com/pt/pt-pt/drive/requirements/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
