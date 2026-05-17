export default {
  editorialVoice: 'hackportugal',
  id: 'cantina-escolar-precos',
  categoryId: 'education_children',
  title: 'Alimentação escolar na Cantina: preços e escalão social',
  tldr: 'A Cantina escolar é a cantina/refeitório da escola pública. No ano letivo de 2025/2026, o preço depende do ciclo escolar, do município e da ASE: no 2.º/3.º ciclo, normalmente o escalão A é gratuito, o B custa 0,73 €, e sem ASE fica cerca de 1,85 €; no 1.º ciclo, a alimentação é frequentemente administrada pela Câmara Municipal, e a tarifa pode ir de 1,46 € para escalão social até 4,05 € sem apoio. A ASE é solicitada através do Portal das Matrículas ou na secretaria da escola; a decisão está ligada ao escalão do abono de família.',
  tags: ['cantina', 'ase', 'escola', 'crianças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-cantina',
      title: 'O que é a Cantina escolar',
      content: [
        { kind: 'paragraph', text: 'A Cantina escolar é a cantina/refeitório da escola. Nas escolas públicas, o almoço inclui normalmente sopa, prato principal, pão, fruta ou sobremesa e água. A ementa é publicada pela escola, pelo agrupamento de escolas ou pela Câmara Municipal.' },
        { kind: 'paragraph', text: 'Em Portugal, a alimentação nem sempre está automaticamente «incluída na escola». Normalmente, o encarregado de educação tem de inscrever a criança nas refeições, carregar a conta escolar e marcar antecipadamente os dias de refeição no sistema da escola, do município ou através do cartão aluno.' },
        { kind: 'warning', text: 'Os preços para o 1.º ciclo e pré-escolar são frequentemente definidos pela Câmara Municipal, enquanto para o 2.º/3.º ciclo e secundário são definidos pelo agrupamento/escola segundo as regras da ASE. Por isso, duas escolas em concelhos vizinhos podem ter interfaces de pagamento diferentes e prazos de reserva diferentes.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'Preços em 2026: normal, escalão A e B',
      content: [
        { kind: 'paragraph', text: 'A lógica de base é a seguinte: se a família tiver ASE aprovada, a criança paga menos ou não paga. A ASE está ligada ao rendimento da família e normalmente baseia-se no escalão do abono de família atribuído pela Segurança Social.' },
        { kind: 'checklist', items: [
          '2.º e 3.º ciclo: escalão A — normalmente gratuito.',
          '2.º e 3.º ciclo: escalão B — normalmente 0,73 € por almoço.',
          '2.º e 3.º ciclo: sem ASE — cerca de 1,85 € por almoço na tarifa escolar normal.',
          'Secundário: a tarifa pode ser mais elevada, especialmente se a escola aplicar um preço separado para o ensino secundário ou para reservas tardias.',
          '1.º ciclo: a alimentação é mais frequentemente administrada pela Câmara Municipal; existem tarifas de cerca de 1,46 € para escalão social e cerca de 4,05 € sem apoio.',
          'Pré-escolar: as regras são quase sempre municipais; consulte a tabela de preços da Câmara Municipal.',
          'Uma reserva tardia ou compra «no próprio dia» pode custar mais do que a reserva normal.',
          'O cancelamento do almoço após o prazo definido normalmente não dá direito a reembolso.'
        ] },
        { kind: 'warning', text: 'Não confunda o escalão A/B da ASE com os escalões de rendimento municipais internos. No 1.º ciclo, alguns municípios usam uma tabela própria, na qual a designação do escalão pode ser diferente da ASE escolar.' }
      ]
    },
    {
      id: 'how-to-get-ase',
      title: 'Como obter ASE através do Portal das Matrículas',
      content: [
        { kind: 'paragraph', text: 'ASE significa Ação Social Escolar. É o apoio social escolar: alimentação, manuais escolares, por vezes material escolar e transportes escolares. Para uma família estrangeira, o mecanismo é o mesmo: é necessário o NIF da criança/dos pais, acesso ao Portal das Matrículas e comprovativo do escalão familiar.' },
        { kind: 'checklist', items: [
          'Entre no Portal das Matrículas através de autenticação.gov.pt, Chave Móvel Digital (CMD) ou Cartão de Cidadão.',
          'Escolha a matrícula ou renovação de matrícula para o ano letivo pretendido.',
          'No bloco Ação Social Escolar, assinale o pedido de ASE.',
          'Anexe a declaração de escalão do abono de família da Segurança Social Direta, se o portal ou a escola pedir o ficheiro.',
          'Se o abono de família ainda não tiver sido atribuído, faça o pedido na Segurança Social o mais cedo possível.',
          'Verifique o e-mail e as mensagens do agrupamento: a escola pode pedir documentos em falta.',
          'Após a decisão, confirme na secretaria se o escalão foi ativado no sistema da cantina.',
          'Se mudou para outro concelho ou escola, confirme se a ASE foi transferida automaticamente — muitas vezes é necessário voltar a apresentar comprovativo.'
        ] },
        { kind: 'paragraph', text: 'Normalmente, o direito à ASE é confirmado antes do início do ano letivo, mas é possível apresentar o pedido mais tarde se a família se tiver mudado, se a criança entrar pela primeira vez numa escola portuguesa ou se os rendimentos tiverem mudado.' }
      ]
    },
    {
      id: 'payment-and-booking',
      title: 'Pagamento e reserva dos almoços',
      content: [
        { kind: 'paragraph', text: 'Cada escola tem o seu próprio sistema: SIGA, GIAE, Inovar, Unicard, Município online, referência Multibanco, MB WAY ou cartão aluno da escola. Os dados são fornecidos pela secretaria da escola ou pela Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Obtenha o acesso de encarregado de educação no sistema da escola ou do município.',
          'Confirme que a criança está associada à turma e escola corretas.',
          'Carregue o saldo através de Multibanco, MB WAY, transferência ou presencialmente, se a escola o permitir.',
          'Reserve as refeições para a semana ou para o mês — muitas escolas exigem que isto seja feito com antecedência.',
          'Verifique o prazo: muitas vezes, a reserva para o dia seguinte fecha na manhã ou na tarde do dia anterior.',
          'Cancele o almoço antecipadamente se a criança estiver doente ou for a uma visita de estudo.',
          'Guarde os comprovativos de pagamento pelo menos até ao fim do ano letivo.',
          'Se o saldo ficar negativo, o acesso à reserva de refeições pode ser temporariamente bloqueado.'
        ] },
        { kind: 'warning', text: 'Se a criança começar a escola no primeiro dia sem acesso ativo ao sistema da cantina, escreva previamente à secretaria. Nas primeiras semanas de setembro há muitas filas, e sem reserva a criança pode não receber almoço.' }
      ]
    },
    {
      id: 'special-diets-and-problems',
      title: 'Alergias, religião, menu vegetariano e reclamações',
      content: [
        { kind: 'paragraph', text: 'As escolas normalmente publicam a ementa mensal e informação sobre alergénios. É possível haver menu alternativo, mas deve ser combinado antecipadamente: na maioria dos casos através da secretaria, da direção do agrupamento ou do serviço de refeições da Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Para alergias ou dieta médica, apresente uma declaração médica em português ou inglês.',
          'Para menu vegetariano, confirme o formulário de pedido: alguns municípios exigem um formulário separado.',
          'Para restrições religiosas, escreva um pedido à direção da escola.',
          'Confirme se o menu especial está disponível todos os dias ou apenas mediante reserva prévia.',
          'Se for servido à criança o prato errado, registe a data, escola, turma e uma fotografia da ementa.',
          'Contacte primeiro a secretaria ou a coordenação da escola.',
          'Se o problema se repetir, escreva à direção do agrupamento e à Câmara Municipal.',
          'Em questões de qualidade da alimentação, pode pedir o livro de reclamações ou usar o Livro de Reclamações Eletrónico.'
        ] },
        { kind: 'paragraph', text: 'Para crianças pequenas, é útil perguntar ao professor nas primeiras semanas se a criança comeu na cantina. O sistema pode mostrar «almoço debitado», mas isso não garante que a criança tenha efetivamente comido.' }
      ]
    }
  ],
  costs: [
    { label: '2.º/3.º ciclo, ASE escalão A', amountEUR: 0, note: 'Normalmente gratuito com Ação Social Escolar aprovada.' },
    { label: '2.º/3.º ciclo, ASE escalão B', amountEUR: 0.73, note: 'Normalmente 50% da tarifa escolar bonificada.' },
    { label: '2.º/3.º ciclo, sem ASE', amountEUR: 1.85, note: 'Tarifa normal típica; a escola pode aplicar um preço separado para reservas tardias.' },
    { label: '1.º ciclo, tarifa social do município', amountEUR: 1.46, note: 'Tabela municipal; depende da Câmara Municipal e da situação da família.' },
    { label: '1.º ciclo, sem apoio social', amountEUR: 4.05, note: 'Tarifa normal municipal encontrada em alguns casos; consulte a tabela de preços do seu concelho.' }
  ],
  sources: [
    {
      title: 'DGE — Ação Social Escolar e alimentação escolar',
      url: 'https://www.dge.mec.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Gov.pt — Pedidos de matrícula e renovação (pré-escolar, básico, secundário)',
      url: 'https://www.gov.pt/servicos/fazer-pedidos-de-matricula-e-renovacao-de-matricula-nos-ensinos-pre-escolar-basico-e-secundario',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    },
    {
      title: 'Portal das Matrículas — portal de utilização para encarregados de educação',
      url: 'https://www.portaldasmatriculas.edu.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
