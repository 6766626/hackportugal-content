export default {
  editorialVoice: 'hackportugal',
  id: 'child-adoption-process',
  categoryId: 'education_children',
  title: 'Adoção de uma criança em Portugal — 9 etapas',
  tldr: 'A adoção em Portugal decorre através da Segurança Social ou da Santa Casa da Misericórdia de Lisboa: candidatura, formação obrigatória, avaliação psicossocial até 6 meses, inclusão na lista nacional, matching com a criança, período de transição, pré-adoção até 6 meses e decisão do Tribunal de Família e Menores. O processo é gratuito na componente pública, mas, para estrangeiros, são críticos a residência legal, traduções, apostila e condições estáveis.',
  tags: ['adoção', 'crianças', 'segurança-social', 'tribunal'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-can-adopt',
      title: 'Quem pode adotar em Portugal',
      content: [
        { kind: 'paragraph', text: 'Adotar uma criança é o estabelecimento judicial da parentalidade. Após a decisão do tribunal, a criança passa a ser sua filha, com os mesmos direitos de uma criança biológica: apelido, herança, responsabilidades parentais, registo na Conservatória.' },
        { kind: 'checklist', items: [
          'Um candidato deve normalmente ter mais de 30 anos; a partir dos 25 anos — se for adotada a criança do cônjuge/parceiro.',
          'Um casal pode adotar conjuntamente se ambos tiverem mais de 25 anos e estiverem casados ou em união de facto há mais de 4 anos.',
          'Casais do mesmo sexo têm direito à adoção conjunta nos termos gerais.',
          'Na data em que a criança é confiada ao candidato, este normalmente não deve ter mais de 60 anos.',
          'A diferença de idade entre o candidato e a criança normalmente não deve exceder 50 anos; são possíveis exceções se tal corresponder ao interesse da criança.',
          'São necessários saúde física e mental, condições habitacionais, rendimento, ausência de antecedentes criminais e capacidade para assegurar à criança um ambiente estável.',
          'Um estrangeiro não precisa de ter nacionalidade portuguesa, mas precisa de residência habitual em Portugal e de documentos que comprovem o estatuto legal e o estado civil.',
          'Se você não vive em Portugal, aplica-se o procedimento internacional através da autoridade central do país de residência habitual, e não a candidatura normal no Centro Distrital.'
        ] },
        { kind: 'warning', text: 'A adoção não é uma forma de “obter uma criança mais depressa”. O sistema parte do interesse de uma criança concreta, e não de uma fila de adultos. Quanto mais restritos forem os seus critérios quanto à idade, saúde e história da criança, mais longa será a espera.' }
      ]
    },
    {
      id: 'documents-and-application',
      title: 'Etapas 1–3: candidatura, documentos, formação',
      content: [
        { kind: 'substeps', items: [
          { id: 'stage-1-info', title: '1. Informação e consulta inicial', content: [
            { kind: 'paragraph', text: 'Comece pela página da Segurança Social “Como adotar” ou pelo serviço gov.pt “Adotar uma criança”. Aí é indicado onde se deve dirigir consoante o local de residência: Centro Distrital do Instituto da Segurança Social ou, na zona de Lisboa, Santa Casa da Misericórdia de Lisboa.' }
          ] },
          { id: 'stage-2-candidatura', title: '2. Apresentação da candidatura', content: [
            { kind: 'paragraph', text: 'A candidatura é apresentada ao organismo de adoção da área de residência. Normalmente é marcada uma reunião e são entregues os formulários. No caso de um casal, a declaração é assinada por ambos os candidatos.' },
            { kind: 'checklist', items: [
              'Documento de identificação: autorização de residência / Cartão de Cidadão / passaporte + comprovativo de permanência legal.',
              'NIF e dados de contacto.',
              'Certidão de nascimento de cada candidato.',
              'Certidão de casamento ou prova de união de facto, se a candidatura for apresentada por um casal.',
              'Certificado do registo criminal de Portugal; aos estrangeiros podem ser pedidos certificados dos países de residência anterior.',
              'Atestado médico ou declaração médica sobre o estado de saúde.',
              'IRS / declaração de rendimentos / contrato de trabalho / recibos verdes — prova de rendimento.',
              'Comprovativo de morada: contrato de arrendamento, escritura, fatura de serviços públicos ou atestado de residência.',
              'Para documentos estrangeiros: apostila ou legalização consular e tradução para português, se o documento não estiver em PT.'
            ] }
          ] },
          { id: 'stage-3-formacao', title: '3. Formação para adoção', content: [
            { kind: 'paragraph', text: 'Após a aceitação da candidatura, os candidatos frequentam uma preparação obrigatória. Não é uma formalidade: são discutidos trauma, vinculação, história da criança, revelação do facto da adoção, contactos com a família biológica, adaptação escolar e limitações reais do sistema.' }
          ] }
        ] }
      ]
    },
    {
      id: 'assessment-and-approval',
      title: 'Etapas 4–5: avaliação até 6 meses e decisão',
      content: [
        { kind: 'substeps', items: [
          { id: 'stage-4-assessment', title: '4. Avaliação psicossocial — até 6 meses', content: [
            { kind: 'paragraph', text: 'Após a candidatura e a formação, a equipa da Segurança Social / Santa Casa realiza a avaliação psicossocial. O objetivo legal é perceber se você consegue assegurar a uma criança concreta segurança, estabilidade e cuidado a longo prazo.' },
            { kind: 'checklist', items: [
              'Entrevistas individuais com cada candidato.',
              'Entrevista com o casal, se a candidatura for conjunta.',
              'Visita domiciliária e avaliação das condições de habitação.',
              'Análise dos rendimentos, horário de trabalho, apoio da família e rede de amigos.',
              'Discussão da motivação: porquê a adoção, que criança, quais os limites.',
              'Verificação da disponibilidade para uma criança mais velha, irmãos/irmãs, atrasos de desenvolvimento, trauma, deficiência.',
              'Conferência de documentos e certificados.',
              'Parecer técnico final sobre a idoneidade ou não idoneidade.'
            ] }
          ] },
          { id: 'stage-5-decision', title: '5. Decisão sobre a idoneidade e inclusão na lista nacional', content: [
            { kind: 'paragraph', text: 'No final da avaliação, a candidatura pode ser aprovada, recusada ou podem ser solicitados esclarecimentos. Em caso de decisão positiva, os candidatos recebem o estatuto de selecionados / candidatos aptos e são incluídos no sistema nacional de matching.' },
            { kind: 'warning', text: 'Uma avaliação positiva não significa que uma criança seja proposta rapidamente. A espera depende do perfil que você está disposto a aceitar. Há poucos bebés sem historial grave no sistema; há mais crianças mais velhas, sibling groups e crianças com necessidades médicas/de desenvolvimento.' }
          ] }
        ] }
      ]
    },
    {
      id: 'matching-transition-pre-adoption',
      title: 'Etapas 6–8: matching, conhecimento, pré-adoção',
      content: [
        { kind: 'substeps', items: [
          { id: 'stage-6-matching', title: '6. Matching de uma criança da lista nacional', content: [
            { kind: 'paragraph', text: 'As equipas de adoção não procuram o “candidato seguinte”, mas sim uma família adequada a uma criança concreta. São considerados idade, irmãos/irmãs, saúde, histórico de neglect/abuse, escola, língua, local de residência, disponibilidade dos candidatos para contactos e terapia.' }
          ] },
          { id: 'stage-7-proposal', title: '7. Proposta e conhecimento gradual', content: [
            { kind: 'paragraph', text: 'Se o perfil corresponder, é-lhe apresentada informação sobre a criança. Com o seu acordo, começa um plano de conhecimento: primeiro através de técnicos, depois encontros presenciais, visitas curtas e estadias mais longas. O ritmo depende da idade e do estado da criança.' }
          ] },
          { id: 'stage-8-pre-adocao', title: '8. Pré-adoção — normalmente até 6 meses', content: [
            { kind: 'paragraph', text: 'Quando a criança se muda para junto dos candidatos, começa o período de pré-adoção. Normalmente dura até 6 meses. A equipa continua o acompanhamento: visita a casa, fala com a criança, a escola, os médicos e os candidatos, e regista a adaptação.' },
            { kind: 'checklist', items: [
              'Trate do número de utente da criança no SNS ou atualize os dados, se o número já existir.',
              'Informe a escola ou a Creche sobre a nova situação familiar apenas na medida necessária para a segurança da criança.',
              'Não altere abruptamente o nome, a língua, a escola e o ambiente sem recomendação dos técnicos.',
              'Mantenha os contactos da equipa de adoção e responda rapidamente aos pedidos.',
              'Registe consultas médicas, terapia, comportamento, sono, alimentação, adaptação escolar.',
              'Não publique fotografias nem a história da criança nas redes sociais antes da decisão judicial e sem avaliação de riscos.',
              'Planeie férias/horário flexível: os primeiros meses exigem mais presença dos adultos.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'court-and-after',
      title: 'Etapa 9: tribunal e vida após a decisão',
      content: [
        { kind: 'paragraph', text: 'Se a pré-adoção for bem-sucedida, o organismo de adoção prepara o relatório e o processo segue para o Tribunal de Família e Menores. O tribunal verifica se a adoção corresponde ao interesse da criança e profere a sentença de adoção. Depois de a decisão transitar em julgado, o registo da criança é atualizado na Conservatória.' },
        { kind: 'checklist', items: [
          'Obtenha uma cópia da sentença e acompanhe o registo na Conservatória / IRN.',
          'Atualize os documentos da criança: assento de nascimento, Cartão de Cidadão ou documentos de criança estrangeira, se aplicável.',
          'Atualize o agregado familiar nas Finanças e na Segurança Social.',
          'Verifique o direito a abono de família e a outras prestações familiares, se os rendimentos forem elegíveis.',
          'Solicite apoio psicológico, terapia da fala, pediatria de desenvolvimento ou pedopsiquiatria, se tal for recomendado.',
          'Guarde todos os relatórios e documentos médicos: serão necessários para a escola, o SNS e os especialistas.',
          'Continue a falar com a criança sobre a adoção de forma honesta e adequada à idade; ocultar normalmente prejudica a confiança.'
        ] },
        { kind: 'warning', text: 'Até à decisão judicial, a criança ainda se encontra numa situação jurídica transitória. Não planeie viagens internacionais, mudança de país de residência ou atos jurídicos importantes sem acordo escrito da equipa de adoção e, se necessário, do tribunal.' }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação da candidatura, formação e avaliação na Segurança Social / Santa Casa', amountEUR: 0, note: 'O procedimento público de adoção não cobra taxas aos candidatos.' },
    { label: 'Tradução de documento estrangeiro', amountEURMin: 20, amountEURMax: 60, note: 'Valor indicativo por página; depende da língua, urgência e certificação.' },
    { label: 'Apostila / legalização de documento estrangeiro', amountEURMin: 10, amountEURMax: 50, note: 'Depende do país de emissão; as autoridades portuguesas podem exigir certificados recentes.' },
    { label: 'Advogado', amountEURMin: 0, amountEURMax: 1500, note: 'Nem sempre é necessário no procedimento nacional padrão, mas é útil em questões internacionais, migratórias ou litigiosas.' }
  ],
  sources: [
    { title: 'Segurança Social: Como adotar', url: 'https://www.seg-social.pt/como-adotar', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt: Adotar uma criança', url: 'https://www.gov.pt/servicos/adotar-uma-crianca', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regime Jurídico do Processo de Adoção — Lei 143/2015', url: 'https://diariodarepublica.pt/dr/detalhe/lei/143-2015-70215246', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil português: adoção, art. 1973.º e seguintes', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
