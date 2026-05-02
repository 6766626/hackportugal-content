export default {
  editorialVoice: 'hackportugal',
  id: 'atl-actividades-tempos-livres',
  categoryId: 'education_children',
  title: 'ATL e CAF: prolongamento escolar para crianças dos 6 aos 10 anos em Portugal',
  tldr: 'Para o 1.º ciclo, do 1.º ao 4.º ano, depois das aulas existem normalmente AEC gratuitas e CAF/ATL pago ou comparticipado: supervisão de manhã, almoço, fim do dia e férias escolares. A inscrição abre muitas vezes juntamente com a matrícula/renovação em portal-matriculas.gov.pt na primavera-verão de 2026, mas as regras e os preços são definidos pelo município ou pela IPSS. Famílias com escalão A/B da Ação Social Escolar pagam normalmente menos ou 0 €; situações sociais e crianças com necessidades especiais têm prioridade.',
  tags: ['atl', 'caf', 'escola', 'almoco', 'ase'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-atl',
      title: 'O que são ATL, CAF e AEC',
      content: [
        { kind: 'paragraph', text: 'Na escola primária em Portugal, o dia da criança divide-se entre aulas obrigatórias e serviços complementares. Os pais chamam muitas vezes a tudo «ATL», mas, juridicamente e em termos de organização, podem ser coisas diferentes.' },
        { kind: 'checklist', items: [
          'AEC — Atividades de Enriquecimento Curricular: atividades gratuitas e facultativas depois das aulas no 1.º ciclo, por exemplo inglês, atividade física, música, artes.',
          'CAF — Componente de Apoio à Família: supervisão antes das aulas, depois das AEC, durante a pausa para almoço e, por vezes, nas férias escolares.',
          'ATL — Atividades de Tempos Livres: designação mais ampla para o prolongamento escolar; muitas vezes é gerido por uma IPSS, associação de pais, Santa Casa, Junta de Freguesia ou operador privado.',
          'Refeições escolares — almoço escolar; normalmente é tratado separadamente através do município/portal escolar, mas muitas vezes no mesmo pacote de pedidos.',
          'Transportes escolares — transporte escolar; as regras dependem da distância casa-escola, da idade e do município.',
          'Para crianças dos 6 aos 10 anos, o serviço essencial é a CAF/ATL, porque as aulas e as AEC costumam terminar antes do fim do dia de trabalho dos pais.'
        ] }
      ]
    },
    {
      id: 'where-to-enrol',
      title: 'Onde inscrever a criança 📝',
      content: [
        { kind: 'paragraph', text: 'O primeiro ponto de entrada é o Portal das Matrículas. Em 2026, este é o principal portal público para matrícula e renovação de matrícula. Ao submeter ou renovar a inscrição na escola, verifique as secções sobre Ação Social Escolar, refeições, transportes e atividades de apoio à família. No entanto, o pagamento e a confirmação final da vaga são muitas vezes feitos depois através do município, agrupamento de escolas ou IPSS.' },
        { kind: 'substeps', items: [
          { id: 'portal', title: '1. Portal das Matrículas', content: [
            { kind: 'checklist', items: [
              'Entre através de autenticação.gov.pt: Chave Móvel Digital, Cartão de Cidadão ou dados do representante.',
              'Escolha matrícula/renovação para o 1.º ciclo.',
              'Verifique se existem opções para Ação Social Escolar, refeições, transportes, AAAF/CAF ou atividades.',
              'Carregue os documentos, se o portal ou a escola os solicitar.',
              'Guarde o comprovativo da matrícula — pode ser pedido pelo município ou pela IPSS.'
            ] }
          ] },
          { id: 'municipio', title: '2. Município ou Agrupamento de Escolas', content: [
            { kind: 'paragraph', text: 'Depois de submeter o pedido no portal, aceda ao site da Câmara Municipal da área da escola. Muitos municípios têm um «Portal da Educação» separado para refeições, CAF/ATL, transporte e pagamentos.' }
          ] },
          { id: 'operator', title: '3. IPSS / associação / ATL', content: [
            { kind: 'paragraph', text: 'Se o prolongamento for gerido por uma IPSS ou associação de pais, pode haver formulário próprio, contrato, mensalidade e lista de documentos. Não espere uma inscrição automática apenas porque indicou interesse no Portal das Matrículas.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos e dados que normalmente são pedidos',
      content: [
        { kind: 'paragraph', text: 'Não existe uma lista nacional única: a escola e o município podem pedir documentos diferentes. Para expats, é importante reunir antecipadamente os identificadores portugueses da criança e dos pais.' },
        { kind: 'checklist', items: [
          'NIF da criança e do encarregado de educação.',
          'Documento de identificação da criança: passaporte, Cartão de Cidadão ou autorização de residência, se já existir.',
          'Dados dos pais/tutor: NIF, morada, telefone, email.',
          'Comprovativo de morada: contrato de arrendamento, fatura de serviços públicos ou atestado de residência da Junta de Freguesia.',
          'Comprovativo do agregado familiar das Finanças ou da Segurança Social, se for pedido para apoios.',
          'Escalão do abono de família: A, B ou outro — influencia a Ação Social Escolar.',
          'NISS da criança/pai ou mãe, se já existir; nem sempre é obrigatório, mas é frequentemente necessário para a Segurança Social e apoios.',
          'Declaração médica ou informação de saúde: alergias, medicamentos, restrições alimentares.',
          'IBAN ou autorização de débito direto, se o município cobrar automaticamente.',
          'Contactos das pessoas autorizadas a ir buscar a criança ao ATL/CAF.'
        ] },
        { kind: 'warning', text: 'Se a família acabou de chegar e ainda não tem escalão do abono de família, não adie a inscrição no ATL. Submeta o pedido com os documentos disponíveis e trate em paralelo do NISS/Segurança Social. Peça à escola ou ao município que avalie a situação socioeconómica — em alguns locais pode existir uma avaliação temporária pelos serviços sociais.' }
      ]
    },
    {
      id: 'priority-and-costs',
      title: 'Quem tem prioridade e quanto custa',
      content: [
        { kind: 'paragraph', text: 'As AEC nas escolas públicas são gratuitas. A CAF/ATL e as refeições podem ser gratuitas ou pagas — depende do município, do operador e do escalão da Ação Social Escolar. A lógica nacional é a seguinte: famílias com menor rendimento recebem mais apoio, mas a tabela de preços concreta é publicada pelo município.' },
        { kind: 'checklist', items: [
          'Normalmente, têm prioridade as crianças com escalão A/B da Ação Social Escolar.',
          'Situações sociais sinalizadas pela Comissão de Proteção de Crianças e Jovens, Segurança Social ou serviço social escolar são analisadas com prioridade.',
          'Crianças com deficiência, necessidades específicas ou restrições médicas podem ter prioridade adicional e adaptações.',
          'Crianças que já frequentam o mesmo agrupamento têm muitas vezes vantagem na renovação.',
          'Pais que trabalham podem ter prioridade na CAF, mas esta regra não é nacional — consulte o regulamento municipal.',
          'O almoço para escalão A é normalmente gratuito; para escalão B, muitas vezes paga-se 50%; sem apoio, paga-se o preço municipal completo.',
          'A CAF/ATL pode custar 0 € para escalão A, um valor comparticipado para escalão B e a mensalidade completa para os restantes.',
          'Férias escolares, manhãs/tardes extra e horário alargado podem ser cobrados separadamente.'
        ] },
        { kind: 'warning', text: 'Não confunda AEC com ATL. Se precisa de supervisão até às 18:30–19:00, as AEC gratuitas quase nunca são suficientes: cobrem apenas parte do dia. Confirme o horário de funcionamento da CAF/ATL antes de assinar o contrato.' }
      ]
    },
    {
      id: 'practical-timing',
      title: 'Calendário prático para 2026',
      content: [
        { kind: 'paragraph', text: 'As datas exatas de matrícula e renovação são publicadas anualmente pelo Ministério da Educação e pelo Portal das Matrículas. Na prática, para o 1.º ciclo, a inscrição e a renovação decorrem na primavera-verão; os pedidos municipais para refeições, transporte e CAF/ATL abrem muitas vezes logo após a matrícula escolar ou em junho-julho.' },
        { kind: 'checklist', items: [
          'Abril–maio: verifique os prazos de matrícula/renovação em portal-matriculas.gov.pt e no site do seu agrupamento.',
          'Maio–junho: submeta a matrícula ou renovação; guarde o comprovativo.',
          'Junho–julho: aceda ao site da Câmara Municipal e submeta os pedidos de refeições, transportes, CAF/ATL.',
          'Julho–agosto: assine o contrato com a IPSS/associação, se o prolongamento não for municipal.',
          'Antes do início de setembro: confirme o horário, o preço, o método de pagamento e a lista de pessoas autorizadas para pickup.',
          'Primeira semana de aulas: confirme com a professora titular e o coordenador do ATL onde a criança almoça e para onde vai depois das aulas.'
        ] },
        { kind: 'warning', text: 'As vagas em ATL perto de escolas populares esgotam rapidamente. Se se mudar para Portugal no verão, escreva em simultâneo ao agrupamento, à Câmara Municipal e às IPSS mais próximas — não espere pela autorização de residência, se a criança já tiver NIF, morada e matrícula escolar.' }
      ]
    },
    {
      id: 'questions-to-ask',
      title: 'O que perguntar antes de pagar',
      content: [
        { kind: 'paragraph', text: 'Antes de aceitar um ATL/CAF específico, faça perguntas por escrito. Isto é especialmente importante se a criança ainda não fala bem português.' },
        { kind: 'checklist', items: [
          'Até que horas a criança fica supervisionada: 17:30, 18:30 ou 19:00?',
          'O almoço está incluído no preço ou é pago separadamente através do município?',
          'Há lanche depois das aulas e quem o traz?',
          'O ATL funciona nas interrupções letivas: Natal, Carnaval, Páscoa, férias de verão?',
          'Qual é a mensalidade para o seu escalão ASE e existe taxa de inscrição?',
          'Como comunicar a ausência da criança para não pagar a refeição?',
          'Quem ajuda nos trabalhos de casa e existe apoio ao estudo?',
          'Há funcionários que falem inglês e como apoiam crianças imigrantes?',
          'Como é feita a autorização de saída e a lista de pessoas que podem ir buscar a criança?',
          'O que acontece em caso de greve da escola ou encerramento da cantina?'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'AEC em escola pública', amountEUR: 0, note: 'Atividades gratuitas e facultativas do 1.º ciclo; não substituem um ATL completo até ao fim do dia.' },
    { label: 'Almoço escolar, escalão A', amountEUR: 0, note: 'Normalmente gratuito no âmbito da Ação Social Escolar; confirmado pelo município/agrupamento.' },
    { label: 'Almoço escolar, escalão B', amountEURMin: 0.7, amountEURMax: 0.9, note: 'Frequentemente cerca de 50% do preço completo; o valor exato depende da tarifa municipal.' },
    { label: 'CAF/ATL municipal ou IPSS', amountEURMin: 0, amountEURMax: 80, note: 'Intervalo típico para programas comparticipados/municipais; ATL privados podem ser mais caros.' },
    { label: 'ATL privado sem apoios', amountEURMin: 100, amountEURMax: 250, note: 'Valor indicativo para grandes cidades; férias escolares e alimentação são muitas vezes pagos separadamente.' }
  ],
  sources: [
    { title: 'Direção-Geral da Educação — Atividades de Enriquecimento Curricular e 1.º ciclo', url: 'https://www.dge.mec.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal do Governo — Portal das Matrículas e serviços da educação', url: 'https://www.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Matrículas — matrícula e renovação online', url: 'https://portaldasmatriculas.edu.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
