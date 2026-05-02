export default {
  editorialVoice: 'hackportugal',
  id: 'ifu-reabilitacao-urbana',
  categoryId: 'housing_buy',
  title: 'IFRRU 2030: crédito e subsídio para reabilitação de habitação',
  tldr: 'O IFRRU 2030 é um programa do IHRU/Portugal 2030 para reabilitação urbana: crédito bancário bonificado através da CGD, Millennium bcp ou Santander e, para alguns projetos, apoio não reembolsável de fundos da UE. É necessário que o imóvel esteja numa zona elegível, frequentemente uma ARU, que exista um projeto de reabilitação e que o banco valide a capacidade de pagamento. Não é um grant rápido “para renovar a cozinha”: o dinheiro destina-se a obras de reabilitação, eficiência energética e recuperação do edifício, com documentação da Câmara Municipal e orçamentos.',
  tags: ['ifrru', 'aru', 'renovação', 'crédito'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o IFRRU 2030 e a quem pode ser útil',
      content: [
        { kind: 'paragraph', text: 'O IFRRU 2030 é o Instrumento Financeiro para a Reabilitação e Revitalização Urbanas. Não é um crédito pessoal normal para obras, mas sim um instrumento financeiro público do IHRU com fundos do Portugal 2030/UE e financiamento comercial através de bancos parceiros.' },
        { kind: 'paragraph', text: 'O objetivo é a recuperação do edificado urbano: prédios habitacionais, apartamentos, edifícios de uso misto e, por vezes, espaços comerciais, se o projeto se enquadrar nas regras do programa e no território definido pelo município.' },
        { kind: 'checklist', items: [
          'Adequa-se a proprietários de habitação, investidores, condomínio, empresas e proprietários públicos/privados de edifícios',
          'Uma pessoa estrangeira pode candidatar-se se for proprietária do imóvel ou tiver direito a executar o projeto; a nacionalidade, por si só, não é uma barreira',
          'O banco continua a verificar NIF, rendimentos, taxa de esforço, histórico de crédito e garantias',
          'O imóvel normalmente deve estar numa ARU — Área de Reabilitação Urbana — ou noutra zona/condição elegível do programa',
          'São financiadas obras de reabilitação, recuperação de fachada, cobertura, partes comuns, sistemas técnicos, acessibilidade e eficiência energética',
          'A componente não reembolsável nem sempre existe: depende do tipo de projeto, região, dotação da linha e regras do aviso específico',
          'O dinheiro é libertado contra despesas comprovadas: orçamento, faturas, autos de medição, licenças/comunicações'
        ] },
        { kind: 'warning', text: 'Não planeie o IFRRU como um “grant para comprar casa”. O programa financia reabilitação. A compra de imóveis, mobiliário, eletrodomésticos e obras meramente cosméticas sem projeto de reabilitação normalmente não são o objetivo elegível principal.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Verificação do imóvel: ARU, estado do edifício, Câmara Municipal',
      content: [
        { kind: 'paragraph', text: 'O primeiro filtro não é o banco, mas sim o imóvel. É necessário perceber se a morada está numa zona de reabilitação urbana e se os trabalhos são reconhecidos como reabilitação, e não como uma simples obra. Para isso, usam-se os mapas ARU no site da Câmara Municipal ou pede-se informação prévia/enquadramento ao município.' },
        { kind: 'checklist', items: [
          'Obtenha a certidão permanente do registo predial ou a caderneta predial urbana, para indicar corretamente o artigo matricial e a freguesia',
          'Verifique a morada na ARU no site da Câmara Municipal; em Lisboa, Porto e outras cidades, as ARU estão frequentemente divididas por quarteirões',
          'Peça à Câmara a confirmação de que o imóvel se encontra numa ARU ou noutra zona elegível para IFRRU',
          'Verifique se é necessária licença de obras, comunicação prévia ou projeto de arquitetura',
          'Se o edifício for antigo ou estiver em mau estado, informe-se sobre a avaliação do estado de conservação',
          'Para condominium, obtenha antecipadamente a ata da assembleia com a aprovação das obras e da repartição das despesas',
          'Verifique desde logo restrições de património/classificação, se a casa estiver num centro histórico',
          'Peça ao arquiteto para separar os trabalhos elegíveis para IFRRU das despesas não elegíveis: mobiliário, decoração, equipamentos, acabamentos puros'
        ] },
        { kind: 'warning', text: 'Estar em ARU não significa aprovação automática. O município confirma o enquadramento territorial e urbanístico, mas o crédito é aprovado pelo banco e as regras de despesas elegíveis são verificadas no âmbito do programa IFRRU 2030.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos antes de ir ao banco',
      content: [
        { kind: 'paragraph', text: 'O IFRRU exige mais documentação do que um crédito habitação normal. O banco analisa simultaneamente o imóvel, o projeto, o orçamento e a sua capacidade de suportar a dívida. Quanto melhor preparado estiver o dossier, menos idas e vindas haverá entre o banco, o arquiteto, a Câmara e o IHRU.' },
        { kind: 'checklist', items: [
          'Documento de identificação: autorização de residência, Cartão de Cidadão ou passaporte; para não residentes — passaporte e dados fiscais',
          'NIF e morada nas Finanças; se necessário — representante fiscal',
          'Comprovativo de rendimentos: declaração de IRS, recibos de vencimento, recibos verdes, contrato de trabalho, contas da empresa ou tax returns estrangeiras',
          'Documentos do imóvel: certidão permanente, caderneta predial, licença de utilização ou comprovativo do respetivo estado',
          'Comprovativo de titularidade ou contrato-promessa, se o banco admitir a candidatura antes da conclusão da compra',
          'Projeto de arquitetura/especialidades, memória descritiva, orçamento discriminado por rubricas',
          'Documentos da Câmara Municipal: localização em ARU, licença/comunicação prévia ou isenção de licenciamento',
          'Certificado energético antes das obras e cálculo das melhorias após as obras, se candidatar eficiência energética',
          'Orçamentos de empreiteiros com NIF, IVA, prazos, materiais e discriminação das despesas elegíveis',
          'Para condomínio: ata, regulamento, identificação da administração e mapa de quotas'
        ] },
        { kind: 'warning', text: 'Não comece a pagar obras de valor elevado antes de confirmar as regras da linha específica. Em muitos programas, as despesas feitas antes da candidatura ou da aprovação podem não ser consideradas eligible, mesmo que os trabalhos em si estejam corretos.' }
      ]
    },
    {
      id: 'banks',
      title: 'Candidatura através dos bancos parceiros: CGD, Millennium bcp, Santander',
      content: [
        { kind: 'paragraph', text: 'A candidatura não é feita diretamente “à UE”, mas através dos bancos indicados pelo IHRU/IFRRU. Na prática, o requerente entrega o dossier na Caixa Geral de Depósitos, Millennium bcp ou Santander; o banco faz a análise de crédito, verifica o projeto e associa a operação ao IFRRU 2030.' },
        { kind: 'substeps', items: [
          { id: 'simulation', title: '1. Simulação preliminar', content: [
            { kind: 'paragraph', text: 'Peça não um crédito pessoal normal, mas especificamente o produto IFRRU 2030 / reabilitação urbana. Confirme o prazo, spread, comissões, garantias, período de utilização dos fundos e requisitos de capitais próprios.' }
          ] },
          { id: 'credit-risk', title: '2. Risco bancário', content: [
            { kind: 'paragraph', text: 'O banco avalia LTV, rendimentos, taxa de esforço, estabilidade da autorização de residência/rendimentos e valor do imóvel antes e depois das obras. Para um expat sem histórico de crédito português, é frequente pedirem uma entrada maior ou garantias adicionais.' }
          ] },
          { id: 'program-validation', title: '3. Validação IFRRU', content: [
            { kind: 'paragraph', text: 'Em paralelo, é verificada a conformidade dos trabalhos com as regras do IFRRU 2030: território, tipo de edifício, despesas elegíveis, eficiência energética, documentos da Câmara e orçamento.' }
          ] },
          { id: 'contract', title: '4. Assinatura e drawdowns', content: [
            { kind: 'paragraph', text: 'Após a aprovação, é assinado o contrato de crédito. Os fundos são normalmente libertados em tranches à medida que as obras avançam e as despesas são comprovadas, e não como uma única quantia para uma conta pessoal.' }
          ] }
        ] },
        { kind: 'warning', text: 'Uma linha bonificada não elimina comissões bancárias, seguros, avaliação, hipoteca ou penhor. Compare o MTIC/TAEG completo e peça simulação escrita a 2–3 bancos.' }
      ]
    },
    {
      id: 'grant-and-tax',
      title: 'Componente não reembolsável e benefícios fiscais',
      content: [
        { kind: 'paragraph', text: 'No IFRRU 2030 pode existir uma componente não reembolsável — uma parte do apoio que não tem de ser devolvida. Mas não é uma percentagem fixa universal para todos. O valor e a existência dependem do aviso, da região, do tipo de beneficiário, da eficiência energética e da dotação da linha no momento da candidatura.' },
        { kind: 'paragraph', text: 'Separadamente do IFRRU, os incentivos municipais e fiscais à reabilitação urbana podem gerar poupança: IVA reduzido em determinados trabalhos, benefícios de IMI/IMT ou IRS se forem cumpridas as condições do Código do IVA, EBF e regras da Câmara Municipal. Têm de ser confirmados separadamente e não são incluídos automaticamente no crédito.' },
        { kind: 'checklist', items: [
          'Peça ao banco que indique por escrito se existe componente de grant na sua operação específica',
          'Verifique se é necessário concluir as obras e apresentar faturas antes do pagamento da componente não reembolsável',
          'Guarde todas as faturas com o NIF correto e descrição dos trabalhos',
          'Não misture despesas pessoais e despesas do projeto no mesmo orçamento',
          'Verifique a possibilidade de IVA reduzido 6% para empreitadas de reabilitação urbana, se o imóvel e os trabalhos forem elegíveis',
          'Confirme na Câmara se existe IMI exemption/reduction após a reabilitação',
          'Se arrendar a habitação, tenha em conta IRS/IRC e o limite de indexação anual das rendas: em 2026 aplica-se o coeficiente de 2,16%',
          'Para Alojamento Local, verifique as restrições locais: a reabilitação não garante uma licença AL'
        ] },
        { kind: 'warning', text: 'Não inclua no modelo financeiro a ideia de que “o subsídio vai cobrir X% com certeza”. Até haver aprovação escrita, trate o projeto como crédito com uma reserva própria de liquidez para derrapagens, atrasos da Câmara e IVA.' }
      ]
    },
    {
      id: 'execution',
      title: 'Como não perder o financiamento durante as obras',
      content: [
        { kind: 'paragraph', text: 'Após a aprovação, o principal risco é desviar-se do projeto ou perder documentos comprovativos. O IFRRU financia trabalhos específicos, pelo que alterações ao orçamento, ao empreiteiro ou à solução técnica devem ser acordadas antes do pagamento.' },
        { kind: 'checklist', items: [
          'Celebre um contrato de empreitada escrito com calendário, preço, IVA e responsabilidade por licenças',
          'Verifique se o empreiteiro tem atividade aberta e emite fatura-recibo/fatura com o seu NIF',
          'Fotografe o estado antes, durante e depois das obras',
          'Guarde autos de medição, comprovativos de pagamento e transferências bancárias',
          'Não pague grandes quantias em numerário: o banco pode não reconhecer a despesa',
          'Acorde alterações ao orçamento com o banco antes de executar os trabalhos',
          'Após a conclusão, obtenha certificado energético pós-obra, se este tiver feito parte da candidatura',
          'Obtenha licença/autorização de utilização ou atualização, se tiver sido exigida',
          'Verifique o fecho final da operação e as condições do período de carência/início do reembolso'
        ] },
        { kind: 'warning', text: 'Se o imóvel for vendido ou a utilização for alterada antes de serem cumpridas as condições do programa, o banco ou a entidade gestora pode exigir o reembolso antecipado ou a devolução do apoio. Leia as cláusulas de manutenção do investimento.' }
      ]
    }
  ],
  costs: [
    { label: 'Certidão/confirmação da Câmara Municipal sobre ARU ou estado do imóvel', amountEURMin: 0, amountEURMax: 100, note: 'Depende do município e do tipo de pedido; muitos mapas ARU estão disponíveis gratuitamente online.' },
    { label: 'Certificado energético de apartamento/casa', amountEURMin: 150, amountEURMax: 350, note: 'Valor indicativo para habitação típica; o preço depende da área, região e técnico.' },
    { label: 'Avaliação do imóvel pelo banco', amountEURMin: 200, amountEURMax: 400, note: 'Frequentemente cobrada pelo banco na análise de crédito; o valor exato consta do preçário do banco.' },
    { label: 'Projeto de arquitetura e especialidades', amountEURMin: 1500, amountEURMax: 8000, note: 'Varia muito consoante a escala dos trabalhos, o licenciamento e o estado do edifício.' },
    { label: 'Comissões bancárias de dossier/contrato', amountEURMin: 250, amountEURMax: 1000, note: 'Verifique FINE/TAEG/MTIC; uma linha bonificada não significa custos bancários nulos.' }
  ],
  sources: [
    {
      title: 'Site oficial do IFRRU 2030 — condições, bancos parceiros e candidaturas',
      url: 'https://www.ifrru.ihru.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal da Habitação / IHRU — programa de apoio IFRRU 2030',
      url: 'https://www.portaldahabitacao.pt/programas-de-apoio/ifrru-2030',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portugal 2030 — enquadramento dos fundos da UE para instrumentos financeiros',
      url: 'https://portugal2030.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
