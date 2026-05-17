export default {
  editorialVoice: 'hackportugal',
  id: 'university-admission',
  categoryId: 'education_children',
  title: 'Entrada numa universidade portuguesa — para estrangeiros',
  tldr: 'Para entrar numa universidade portuguesa (licenciatura): através da DGES / Concurso Nacional de Acesso ao Ensino Superior (o CNAES regula as regras de acesso) — para diplomados portugueses/UE; ou através do **Concurso Especial para Estudantes Internacionais (CEEI)** ao abrigo do DL 36/2014 — para candidatos com estatuto de Estudante Internacional (normalmente non-EU, NÃO residentes em PT há > 2 anos a 1 de janeiro do ano de ingresso, não familiares de cidadãos EU e não pessoas com estatuto de igualdade). É necessário: equivalência/reconhecimento do certificado escolar (através de escola pública/agrupamento segundo as regras da DGE), português B1-B2 (CAPLE: DEPLE=B1, DIPLE=B2) ou IELTS 6.0+ para cursos lecionados em inglês, carta de motivação. Custo: até ~697 €/ano para PT/EU em licenciatura pública; para CEEI, as propinas internacionais são definidas separadamente por cada universidade (normalmente mais elevadas).',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['universidade', 'admissão', 'diploma', 'reconhecimento', 'dges', 'cnes'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'options',
      title: '🎓 Vias de entrada',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Concurso Nacional (nacional)', content: [
            { kind: 'checklist', items: [
              '👥 Para: diplomados portugueses/EU do ensino secundário (12.º ano em Portugal)',
              '📊 As ponderações (nota do secundário + provas de ingresso) são publicadas pela DGES para cada par instituição/curso — a fórmula depende da universidade/curso; não considere 65/35 uma regra universal',
              '⏰ Candidatura: julho-agosto',
              '🔢 Exames: matemática, história, física, química — conforme exigido pela faculdade',
              '✅ Resultado: universidade/curso recomendado através da DGES',
              '⚠️ Não se aplica a estrangeiros com diploma escolar de um país fora da EU'
            ]}
          ]},
          { id: 'o2', title: 'CEEI — Estudante Internacional (ao abrigo do DL 36/2014)', content: [
            { kind: 'checklist', items: [
              '👥 Para: candidatos com estatuto de Estudante Internacional — normalmente non-EU, **MAS NÃO** EU/EEA, não familiares de cidadãos EU, **não residentes em PT há mais de 2 anos a 1 de janeiro do ano de ingresso** e não pessoas com estatuto de igualdade aplicável. Verifique o estatuto ANTES de escolher o CEEI',
              '📊 Cada universidade admite segundo os seus próprios critérios; as vagas são definidas anualmente por cada universidade/curso — consulte o edital do CEEI específico',
              '📑 Candidatura diretamente à universidade através do respetivo portal CEEI/International Student ou dos Serviços Académicos/International Office; o nome da plataforma depende da universidade',
              '⏰ Prazos: janeiro-junho (depende da universidade)',
              '💰 Preço: as propinas internacionais são definidas por cada universidade — normalmente mais elevadas do que as nacionais',
              '🌐 Mais detalhes: ulisboa.pt/internacional, up.pt/international, e o edital de cada curso específico'
            ]}
          ]},
          { id: 'o3', title: 'CPLP / lusófonos', content: [
            { kind: 'checklist', items: [
              '🌐 Cidadãos CPLP (Brasil, Cabo Verde, Angola, etc.) podem candidatar-se ao CEEI',
              '🆓 Algumas universidades dão a brasileiros/CPLP o mesmo preço que aos portugueses — Universidade do Minho, Lusíada, IPS Setúbal',
              '📋 Reconhecimento do ENEM (exame nacional brasileiro) — válido na ULisboa, UPorto e outras'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'document-equivalence',
      title: '📄 Equivalência do diploma',
      content: [
        { kind: 'paragraph', text: 'Para entrar, é necessária a equivalência do seu certificado escolar ao «Ensino Secundário» português (12 anos). É feita através da DGE (Direção-Geral da Educação).' },
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Documentos', content: [
            { kind: 'checklist', items: [
              '🎓 Certificado escolar com apostila (ou legalizado pela embaixada de Portugal)',
              '📊 Histórico de notas dos últimos 2-3 anos (com apostila)',
              '🌐 Tradução certificada para português',
              '🆔 Passaporte + autorização de residência (se existir)',
              '📃 Pedido de equivalência'
            ]}
          ]},
          { id: 'e2', title: 'Processo', content: [
            { kind: 'checklist', items: [
              '🏛️ A equivalência do ensino secundário estrangeiro é tratada através de **escola pública / agrupamento de escolas** segundo as regras da DGE (DL 227/2005, Portaria 224/2006); a escola concreta recebe o pedido e os documentos',
              '⏱️ Processamento: 1-3 meses (mais rápido em cidades pequenas)',
              '💰 Preço: depende da escola/município; normalmente uma pequena taxa administrativa ou gratuito — confirme na escola',
              '📜 Recebe o «Certificado de Equivalência» — o diploma escolar é reconhecido em Portugal'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'language',
      title: '🗣️ Língua de ensino',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Português (maioria dos cursos)', content: [
            { kind: 'checklist', items: [
              '📜 Nível: normalmente B1-B2 no mínimo; para medicina e direito — B2-C1',
              '🎓 **CAPLE**: CIPLE = A2, DEPLE = B1, **DIPLE = B2**, DAPLE = C1, DUPLE = C2 (caple.letras.ulisboa.pt). Se a universidade exigir B2 — é necessário **DIPLE** ou equivalente',
              '💰 O custo depende do nível e do centro CAPLE; consulte a tabela de preços CAPLE',
              '📅 Sessões — segundo o calendário CAPLE em centros acreditados; as datas e os níveis dependem do centro, sendo necessário inscrever-se com antecedência',
              '🌐 A universidade pode aceitar CAPLE DIPLE B2 ou outro certificado reconhecido de português, se tal estiver indicado no edital (DELE é um certificado **espanhol** do Instituto Cervantes, não português)',
              '⚠️ Para candidatos com formação em língua portuguesa, muitas universidades dispensam o certificado, mas isso depende do edital; **CPLP citizenship by itself is not a universal exemption**'
            ]}
          ]},
          { id: 'l2', title: 'Inglês (programas para estrangeiros)', content: [
            { kind: 'checklist', items: [
              '📜 IELTS 6.0+ ou TOEFL 80+',
              '🎓 Há **menos** licenciaturas em inglês em PT do que mestrados (no master\'s level o inglês é mais frequente). Verifique a language of instruction no site do curso específico; medicina nas universidades públicas é normalmente em português',
              '💰 Programas em inglês são normalmente mais caros (5 000-10 000 €/ano)',
              '🌐 Lista de programas em inglês: studyinportugal.pt'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'top-universities',
      title: '🏆 Melhores universidades',
      content: [
        { kind: 'checklist', items: [
          '🏛️ **Universidade de Lisboa (ULisboa)** — a maior, todas as faculdades, ranking #1 em Portugal',
          '🏛️ **Universidade do Porto (UPorto)** — engenharia e medicina fortes, #2',
          '🏛️ **Universidade de Coimbra (UCoimbra)** — a mais antiga (1290), direito e ciências humanas fortes',
          '🏛️ **NOVA Lisboa** — moderna, programas em inglês, MBA NOVA SBE prestigiado',
          '🏛️ **Universidade de Aveiro** — tecnologia, TI, engenharia',
          '🏛️ **Universidade do Minho** (Braga) — TI, biomedicina',
          '🎨 **Instituto Superior Técnico (IST)** — escola da Universidade de Lisboa, referência em engineering/technology',
          '🏥 **Faculdade de Medicina de Lisboa** — faculdade de medicina de topo',
          '💼 **Católica Lisbon SBE** — privada, forte em negócios/MBA',
          '📚 Ranking completo: U-Multirank.eu ou QS World University Rankings'
        ]}
      ]
    },
    {
      id: 'finance',
      title: '💰 Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Custos', content: [
            { kind: 'checklist', items: [
              '🟢 PT/EU em licenciatura pública: até aproximadamente **697 €/ano no máximo** (limite de propina DGES para national/EU students em licenciatura/mestrado integrado abrangido público)',
              '🟡 Estrangeiros (CEEI): as propinas internacionais são definidas por cada universidade — normalmente mais elevadas; consulte o edital do curso específico',
              '🔴 Universidades privadas: 5 000-15 000 €/ano',
              '💵 Alojamento: quarto ~350-650 €+ em Lisbon/Porto (private market), menos — em residences e em cidades pequenas; studio em Lisbon frequentemente 750-1 100 €+',
              '🍔 Alimentação: 200-300 €/mês',
              '📚 Manuais: 100-300 €/semestre'
            ]}
          ]},
          { id: 'f2', title: 'Bolsas e apoios', content: [
            { kind: 'checklist', items: [
              '💰 **Bolsa de Acção Social (DGES)** — para estudantes portugueses/EU com baixos rendimentos, 100-500 €/mês',
              '💰 **Erasmus+** — para semestre de intercâmbio',
              '🇵🇹 **Bolsa Camões** — para estrangeiros que estudam cultura/língua portuguesa',
              '🌍 **Fulbright** (para os EUA), **DAAD** (para a Alemanha) — programas conjuntos com Portugal',
              '💼 **Programas internos das universidades**: ULisboa → Bolsa de Excelência, NOVA → Merit Scholarships',
              '📋 As candidaturas a bolsas são normalmente feitas 6 meses antes do início do semestre'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'visa',
      title: '🛂 Visto D4 (estudo)',
      content: [
        { kind: 'checklist', items: [
          '📜 Depois da carta de aceitação da universidade — pedido de D4 no consulado de Portugal no país da sua residência',
          '📋 Documentos: passaporte, carta de aceitação, comprovativo de meios financeiros (referência 12×IAS = **6 445,56 €** em 2026; IAS 2026 = 537,13 € — o posto consular concreto pode exigir comprovativos adicionais/uma margem maior), seguro, comprovativo de alojamento',
          '⏱️ Processamento: 30-60 dias',
          '🎫 Validade: 4 meses para entrada, depois autorização de residência na AIMA (mais uma taxa AIMA separada — confirme a actual fee table em vigor desde 01.03.2026)',
          '💼 Com autorização de residência para estudo, o estudante do ensino superior pode trabalhar com contrato de trabalho ou como independent worker, notificando a AIMA e cumprindo as regras da Segurança Social/impostos (não existe um limite universal de 20 h/semana)',
          '🎓 Após concluir higher education, pode pedir prorrogação/AR para procura de trabalho ou criação de empresa por até 1 ano, cumpridas as condições (Lei 23/2007 art. 122) — isto **não** é o visto consular job-seeker'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '⏰ Começar o processo com 1 ano de antecedência — reconhecimento do diploma + língua + candidatura',
          '🇵🇹 Aprender português ANTES da entrada — a maioria dos cursos é em português, até os «percursos internacionais» têm uma componente portuguesa',
          '🤝 International Office / Serviços Académicos de cada universidade — o melhor contacto; envie-lhes perguntas',
          '🏠 O alojamento em residências de estudantes (residências) é mais barato, mas há concurso — candidate-se com antecedência',
          '📚 Erasmus+ durante os estudos abre muitas oportunidades',
          '🌍 Depois da licenciatura — mestrado 1-2 anos, doutoramento 3-4 anos',
          '💼 Reconhecimento de higher-education degree estrangeiro: através da **DGES reconhecimento platform** (DL 66/2018) — automatic/level/specific recognition. A Competent Portuguese HEI e o custo dependem do tipo e do nível do degree (normalmente algumas centenas de euros, prazos variáveis)',
          '⚠️ Para profissionais de saúde: o reconhecimento é MUITO complexo, normalmente exige completar 1-2 anos adicionais + internato'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Equivalência do certificado escolar (através de escola/agrupamento)', note: 'normalmente uma pequena taxa administrativa ou gratuito — confirme na escola concreta' },
    { label: 'Exame CAPLE', note: 'depende do nível e do centro — consulte a tabela de preços CAPLE' },
    { label: 'PT/EU licenciatura pública — propina (máximo segundo a DGES)', amountEURMax: 697, note: '€/ano para national/EU students' },
    { label: 'Estrangeiro (CEEI) — propina', note: 'definida por cada universidade/curso — consulte o edital' },
    { label: 'Universidade privada', amountEURMin: 5000, amountEURMax: 15000, note: '€/ano' },
    { label: 'Visto D4 (taxa consular)', amountEUR: 90 },
    { label: 'AIMA residence permit/card após a chegada', note: 'confirme a actual fee table em vigor desde 01.03.2026' },
    { label: 'Vida de estudante em Lisboa', amountEURMin: 700, amountEURMax: 1300, note: '€/mês (quarto + alimentação + transporte + livros)' }
  ],
  sources: [
    { title: 'DGES — Direção-Geral do Ensino Superior', url: 'https://www.dges.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 36/2014 — Estatuto do Estudante Internacional', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/36-2014', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 66/2018 — Reconhecimento de graus e diplomas estrangeiros', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DGE — Equivalências de habilitações estrangeiras', url: 'https://www.dge.mec.pt/equivalencias-de-habilitacoes-estrangeiras', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Study in Portugal', url: 'https://www.studyinportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'CAPLE — português língua estrangeira', url: 'https://caple.letras.ulisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
