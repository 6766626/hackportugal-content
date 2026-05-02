export default {
  editorialVoice: 'hackportugal',
  id: 'boating-license-pt',
  categoryId: 'auto_trips',
  title: 'Licença para iate/barco em Portugal: Marinheiro, Patrão Local, Patrão de Costa',
  tldr: 'Para um barco de recreio ou iate em Portugal é necessária a Carta de navegador de recreio através da DGRM: escola, atestado médico, exame e emissão do cartão. A categoria básica Marinheiro é normalmente suficiente para pequenas embarcações durante o dia junto à costa; Patrão Local — para saídas locais até 5 milhas da costa; Patrão de Costa — para navegação mais exigente até 25 milhas. As licenças da UE/EEE são reconhecidas automaticamente em Portugal dentro dos respetivos direitos, mas as do Reino Unido/outros países terceiros devem ser verificadas previamente junto da DGRM ou da Capitania.',
  tags: ['dgrm', 'iate', 'barco', 'amn'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-license',
      title: 'Que licença é necessária 🚤',
      content: [
        { kind: 'paragraph', text: 'A licença portuguesa chama-se Carta de navegador de recreio. É administrada pela DGRM e, na água, a fiscalização é feita pela AMN, Capitania do Porto e Polícia Marítima. Para um cenário habitual de expatriado — barco em Cascais, Oeiras, Setúbal, Lagos, Vilamoura, Albufeira — normalmente escolhe-se Marinheiro ou Patrão Local; Patrão de Costa é necessário se você for realmente navegar mais longe da costa.' },
        { kind: 'checklist', items: [
          'Marinheiro — categoria inicial: pequenas embarcações de recreio, navegação diurna, saídas curtas junto à costa.',
          'Patrão Local — mínimo prático para a maioria dos proprietários de barcos: navegação local até 5 milhas náuticas da costa e até 10 milhas de um porto de abrigo.',
          'Patrão de Costa — para navegação costeira até 25 milhas náuticas da costa.',
          'Patrão de Alto Mar — categoria oceânica sem o limite costeiro habitual; neste guia não é analisada em detalhe.',
          'Motonauta — categoria separada para mota de água / jet ski, se não existir uma licença superior adequada.',
          'Idade mínima: normalmente 16 anos para Marinheiro/Motonauta e 18 anos para Patrão Local, Patrão de Costa e superiores.',
          'Os limites dependem não só da licença, mas também da classe/zona de certificação da própria embarcação, do seu equipamento e das condições meteorológicas.'
        ] },
        { kind: 'warning', text: 'Não confunda “sei conduzir um barco” com “tenho direito a ser skipper”. Em Portugal, a ausência de uma Carta de navegador de recreio adequada numa fiscalização da AMN/Polícia Marítima pode levar a coima e à proibição de continuar a saída.' }
      ]
    },
    {
      id: 'eu-recognition',
      title: 'Se já tem uma licença da UE/EEE',
      content: [
        { kind: 'paragraph', text: 'Portugal reconhece documentos para condução de embarcações de recreio emitidos por Estados da UE/EEE, sem troca obrigatória por um cartão português. Pode navegar dentro dos direitos conferidos pela licença de origem: comprimento da embarcação, afastamento da costa, dia/noite, motor/vela, jet ski.' },
        { kind: 'checklist', items: [
          'Mantenha a bordo o original da licença ou um documento digital oficial, se for reconhecido pelo país emissor.',
          'Leve passaporte/Cartão de Cidadão/autorização de residência, para que o nome corresponda ao da licença.',
          'Se a licença não estiver em PT/EN, é útil ter uma tradução ou um International Certificate of Competence, se o seu país o emitir.',
          'Para empresas de aluguer no Algarve e em Cascais, muitas vezes importam não só a lei, mas também as regras do seguro: podem exigir ICC ou uma categoria específica.',
          'As licenças do Reino Unido após o Brexit não são “automaticamente UE”; confirme previamente junto da DGRM, da Capitania ou da empresa de charter.',
          'Não considere automaticamente válidos documentos russos, ucranianos, israelitas, turcos e outros não pertencentes à UE: é necessária uma verificação separada do reconhecimento.'
        ] },
        { kind: 'warning', text: 'O reconhecimento automático de uma licença da UE não significa direito automático a conduzir qualquer embarcação portuguesa. Se a sua licença alemã/francesa/polaca permite apenas inland waters ou baixa potência, em Portugal continua sujeito a esses limites.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Como obter a Carta de navegador de recreio portuguesa',
      content: [
        { kind: 'substeps', items: [
          { id: 'choose-school', title: '1. Escolher uma escola certificada pela DGRM', content: [
            { kind: 'paragraph', text: 'Procure uma entidade formadora de navegadores de recreio registada na DGRM. Nas marinas de Cascais, Oeiras, Setúbal, Lagos, Vilamoura e Porto há normalmente escolas com cursos em PT e por vezes em EN.' }
          ] },
          { id: 'medical', title: '2. Obter um atestado médico', content: [
            { kind: 'paragraph', text: 'Para a admissão é necessário um atestado médico de aptidão física e psíquica, incluindo visão e audição. Normalmente é feito pelo médico de família, numa clínica privada ou por um médico com quem a escola trabalhe.' },
            { kind: 'checklist', items: [
              'Passaporte ou autorização de residência.',
              'NIF para a fatura e inscrição na escola.',
              'Óculos/lentes, se os usar.',
              'Informação sobre doenças crónicas e medicamentos.',
              'O atestado deve estar atualizado à data da submissão; a escola normalmente verifica o formato antes do exame.'
            ] }
          ] },
          { id: 'course', title: '3. Fazer a teoria e a prática', content: [
            { kind: 'paragraph', text: 'O curso cobre regras de governo e manobra entre embarcações, sinais, luzes, rádio VHF, cartas, marés, meteorologia, segurança, man overboard, entrada/saída da marina, amarração e mecânica básica. Para Patrão de Costa acrescentam-se exercícios de navegação, marcação de rumo e trabalho com carta náutica.' }
          ] },
          { id: 'exam-card', title: '4. Fazer o exame e aguardar o cartão', content: [
            { kind: 'paragraph', text: 'O exame decorre através de um sistema ligado à DGRM: teoria e, para as categorias em que é exigida, parte prática. Depois da aprovação, é emitida a Carta de navegador de recreio. O prazo de emissão depende da escola e da carga de trabalho da DGRM; na prática, conte com algumas semanas.' }
          ] }
        ] }
      ]
    },
    {
      id: 'choose-category',
      title: 'O que escolher: Marinheiro, Local ou Costa',
      content: [
        { kind: 'paragraph', text: 'A escolha não depende do “prestígio”, mas da rota real. Para alugar um pequeno barco a motor numa lagoa e fazer saídas curtas, Marinheiro pode ser suficiente. Para um barco próprio em Cascais/Algarve, é normalmente mais sensato ir logo para Patrão Local: dá mais liberdade e é melhor visto por marinas e seguradoras. Patrão de Costa faz sentido se planear travessias mais longas ao longo da costa.' },
        { kind: 'checklist', items: [
          'Leva um pequeno barco apenas durante o dia e perto da costa — veja Marinheiro.',
          'Quer fazer Cascais–Sesimbra, Lagos–Portimão, Vilamoura–Tavira dentro da zona local — normalmente é necessário Patrão Local, mas verifique as distâncias e o porto de abrigo.',
          'Planeia passagens Porto–Figueira da Foz, Lisboa–Sines, Sines–Lagos com margem de distância — veja Patrão de Costa.',
          'Um iate à vela não elimina a licença: o skipper deve ter a categoria adequada.',
          'Se a bordo houver VHF, EPIRB, jangada salva-vidas e outro equipamento, este deve corresponder à zona de navegação da embarcação, e não apenas à sua licença.',
          'Para transporte comercial, paid skipper, passeios turísticos e charter with crew, uma carta de recreio amadora não é suficiente — aplicam-se outros requisitos.'
        ] },
        { kind: 'warning', text: 'O erro mais comum de um proprietário expatriado: comprar uma embarcação olhando para a potência do motor e esquecer a zona de certificação da embarcação, o seguro, o mandatory safety equipment e os limites da licença. Numa fiscalização, a AMN olha para o conjunto completo.' }
      ]
    },
    {
      id: 'on-board-documents',
      title: 'O que manter a bordo e o que a AMN verifica',
      content: [
        { kind: 'paragraph', text: 'Mesmo com a Carta de navegador de recreio correta, deve ter os documentos da embarcação e o equipamento obrigatório. As fiscalizações são especialmente prováveis no verão em Cascais, Troia, Algarve, nas entradas das marinas e em zonas com jet ski.' },
        { kind: 'checklist', items: [
          'Carta de navegador de recreio ou licença estrangeira reconhecida do skipper.',
          'Documento de identificação do skipper.',
          'Documentos de registo da embarcação / título de registo, se aplicável.',
          'Seguro de responsabilidade civil para embarcação de recreio, quando obrigatório pelo tipo de embarcação.',
          'Lista do safety equipment obrigatório para a zona de navegação: coletes salva-vidas, extintor, pirotecnia/sinais, âncora, vertedouro/bomba, luzes.',
          'Documentos de rádio e direito de usar VHF, se a estação de rádio estiver instalada e for utilizada.',
          'Documentos de aluguer/charter, se a embarcação não for sua.',
          'Verificação da meteorologia e dos avisos à navegação antes da saída.',
          'Cumprimento das zonas balneares, limites de velocidade, regras de entrada nas marinas e instruções da Polícia Marítima.'
        ] },
        { kind: 'warning', text: 'Álcool na água é uma má ideia, juridicamente e na prática. A AMN pode mandar parar a embarcação, e a seguradora pode contestar o pagamento em caso de acidente se o skipper não estivesse em condições de conduzir em segurança.' }
      ]
    },
    {
      id: 'renewal-practical',
      title: 'Validade, renovação e conselhos práticos',
      content: [
        { kind: 'paragraph', text: 'A Carta de navegador de recreio portuguesa exige renovação periódica, especialmente após determinados escalões etários. Segundo as regras do RNR, a validade está ligada à idade do titular: normalmente até aos 50 anos, depois renovação a cada 10 anos até aos 70 e a cada 5 anos após os 70. Na renovação, pode voltar a ser exigida aptidão médica.' },
        { kind: 'checklist', items: [
          'Não espere pelo fim da validade: comece a renovação com 1–2 meses de antecedência.',
          'Se mudou de morada, atualize os contactos para não perder notificações da DGRM/escola.',
          'Guarde uma cópia digital da licença, seguro e registo da embarcação no telemóvel, mas é melhor ter os originais a bordo.',
          'Depois de obter Marinheiro, pode subir de categoria através de um novo curso e exame.',
          'Se não fala bem português, procure uma escola com apoio em inglês; os termos oficiais continuarão a ser em PT.',
          'Antes de comprar uma embarcação, peça à marina ou ao broker que mostre que licença é realmente necessária para esse modelo e zona de navegação.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Curso Marinheiro', amountEURMin: 250, amountEURMax: 400, note: 'Referência de escolas privadas em 2026; depende da cidade, da língua do curso e de o exame estar incluído.' },
    { label: 'Curso Patrão Local', amountEURMin: 350, amountEURMax: 650, note: 'Escolha típica para o proprietário de um pequeno barco em Cascais/Algarve.' },
    { label: 'Curso Patrão de Costa', amountEURMin: 600, amountEURMax: 1000, note: 'Mais caro devido à navegação, cartas e programa alargado.' },
    { label: 'Atestado médico', amountEURMin: 25, amountEURMax: 70, note: 'Clínica privada ou médico da escola; no SNS pode ser mais barato, mas mais lento.' }
  ],
  sources: [
    { title: 'DGRM: Recreational Boater / Navegador de recreio', url: 'https://www.dgrm.pt/en/web/guest/am-nr-navegador-recreio', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Autoridade Marítima Nacional: segurança e fiscalização no mar', url: 'https://www.amn.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei n.º 93/2018: Regulamento da Náutica de Recreio', url: 'https://dre.pt/dre/detalhe/decreto-lei/93-2018-116956361', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
