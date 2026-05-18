export default {
  editorialVoice: 'hackportugal',
  id: 'higher-education-foreigners',
  categoryId: 'education_children',
  title: 'Ensino superior em Portugal — para estudantes estrangeiros',
  tldr: 'Licenciatura — 3 anos, mestrado — 2 anos, PhD (doutoramento) — 3–4 anos. A candidatura faz-se através do Concurso Nacional de Acesso (para residentes em Portugal) ou do Concurso Especial para Estudantes Internacionais (apenas para cidadãos de fora da UE).\n\nCustos: residentes da UE pagam como os portugueses — 700–1400 € / ano em instituições públicas, não-UE — 2000–7000 € / ano em instituições públicas, 3500–15000 € / ano em privadas. Universidades de topo: Universidade de Lisboa, Universidade do Porto, Universidade Nova de Lisboa, Universidade de Coimbra (5 no top 500 mundial).\n\nErasmus+ — acesso completo. Visto de Estudante D4 para cidadãos não-UE.',
  tags: ['ensino superior', 'licenciatura', 'universidade', 'erasmus'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'levels',
      title: '🎓 Níveis e duração',
      content: [
        { kind: 'checklist', items: [
          '**Licenciatura**: 3 anos, 180 ECTS — primeiro ciclo principal',
          '**Mestrado**: 1,5–2 anos, 90–120 ECTS — segundo ciclo',
          '**Mestrado Integrado**: para algumas profissões regulamentadas. **Medicina** — normalmente 6 anos / 360 ECTS; **Arquitetura** — frequentemente 5 anos / 300 ECTS; em Engenharia, muitos antigos mestrados integrados foram reorganizados em licenciatura + mestrado (confirme cada curso na DGES)',
          '**Doutoramento** (PhD): 3–4 anos — terceiro ciclo',
          '**CTeSP** (Curso Técnico Superior Profissional): 2 anos, 120 ECTS — ensino profissional, sem grau académico',
          '**Pós-graduação**: cursos curtos de especialização (6–12 meses)'
        ]}
      ]
    },
    {
      id: 'admission',
      title: '📝 Formas de acesso',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Cidadãos PT/UE/EEE/Suíça e alguns residentes non-EU (CNA)', content: [
            { kind: 'checklist', items: [
              '**Concurso Nacional de Acesso (CNA)**: concurso geral — aplica-se se você NÃO for considerado Estudante Internacional',
              'O CNA also applies to non-EU residents com residência legal em Portugal **>2 anos consecutivos até 1 de janeiro do ano de candidatura** (não contando o tempo apenas com student permit) ou com estatuto de igualdade',
              'Exames de acesso (Exames Nacionais) no 12.º ano — obrigatórios para o concurso',
              'Seriação por notas: nota do secundário + provas de ingresso (ponderações por curso na DGES)',
              'PT/EU em licenciatura pública: propina **até ~697 € / ano no máximo**',
              'Se tiver um diploma escolar estrangeiro — é necessário obter equivalência + fazer local exam'
            ]}
          ]},
          { id: 'a2', title: 'Cidadãos não-UE', content: [
            { kind: 'checklist', items: [
              '**Concurso Especial para Estudantes Internacionais** (CEIE)',
              'Processo separado do CNA — cada universidade decide de forma autónoma',
              'Requisitos: diploma do ensino secundário, adequado ao acesso ao ensino superior no país de origem + certificado de equivalência (1–3 meses para obter através da DGES)',
              'Frequentemente — exames próprios de acesso da universidade / portefólio / entrevista',
              'Prazos de candidatura: normalmente fevereiro–abril (para início em setembro)',
              'Pagamento como não-UE: 2000–7000 € / ano em instituições públicas, 3500–15000 € em privadas',
              '⚠️ Algumas faculdades de medicina e veterinária têm quotas apenas para cidadãos de Portugal/UE — cidadãos não-UE não podem entrar'
            ]}
          ]},
          { id: 'a3', title: 'Maiores de 23 (para adultos)', content: [
            { kind: 'paragraph', text: 'Concurso separado para pessoas com mais de 23 anos sem diploma padrão. Provas próprias na universidade. Funciona para estrangeiros com experiência pré-universitária.' }
          ]},
          { id: 'a4', title: 'Transferência de outra universidade', content: [
            { kind: 'checklist', items: [
              'Se já estudou numa instituição de ensino superior estrangeira — a transferência é possível',
              'Os créditos ECTS são transferidos (se a instituição estiver acreditada)',
              'Processo: regresso ao ensino superior',
              'É melhor transferir-se para o 2.º ou 3.º ano numa instituição portuguesa'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'top-universities',
      title: '🏛️ Universidades de topo',
      content: [
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Lisboa', content: [
            { kind: 'checklist', items: [
              '**Universidade de Lisboa (ULisboa)** — a maior, top-300 QS. Medicina, direito, engenharia, artes',
              '**Universidade Nova de Lisboa** — moderna, top-300 QS. Economia (NovaSBE — uma das melhores da Europa), engenharia, saúde',
              '**Universidade Católica Portuguesa (UCP)** — privada, prestigiada (católica) — direito, gestão',
              '**Iscte** (Instituto Universitário de Lisboa) — ciências sociais, negócios',
              '**ISCSP** — ciência política, relações internacionais'
            ]}
          ]},
          { id: 'u2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              '**Universidade do Porto (UP)** — a 2.ª maior, top-300 QS. Engenharia, medicina, arquitetura',
              '**Universidade Católica Portuguesa (Porto)** — privada, negócios, saúde',
              '**Escola Superior Artística do Porto** — artes'
            ]}
          ]},
          { id: 'u3', title: 'Regiões', content: [
            { kind: 'checklist', items: [
              '**Universidade de Coimbra** — uma das mais antigas da Europa (desde 1290). UNESCO. Medicina, filosofia, engenharia',
              '**Universidade de Aveiro** — ciência dos materiais, engenharia',
              '**Universidade do Minho** (Braga/Guimarães) — informática',
              '**Universidade do Algarve** — ciências marinhas, turismo',
              '**Universidade da Madeira, Açores** — regionais'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'cost',
      title: '💰 Custos',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Universidades públicas', content: [
            { kind: 'checklist', items: [
              '**UE/residentes considerados national/EU**: licenciatura — **até ~697 € / ano no máximo** (DGES propina cap); mestrado e PhD — tabelas próprias',
              '**Não-UE (CEEI, Estudante Internacional)**: as international propinas são definidas por cada universidade/curso — consulte o edital do curso específico',
              'Algumas faculdades de medicina / engenharia — na parte superior deste intervalo'
            ]}
          ]},
          { id: 'c2', title: 'Universidades privadas', content: [
            { kind: 'checklist', items: [
              '3500–15000 € / ano — depende do programa',
              '**NovaSBE MBA**: 30000–50000 € / ano',
              '**UCP Law**: 5000–8000 € / ano',
              '**ISG Business School**: 4000–7000 €',
              'Reconhecimento: funciona na UE; para empregadores nos EUA — são reconhecidas sobretudo as marcas de topo'
            ]}
          ]},
          { id: 'c3', title: 'Despesas adicionais', content: [
            { kind: 'checklist', items: [
              '📚 Manuais: 100–300 € / semestre (é possível comprar em segunda mão em grupos de Facebook)',
              '🏠 Residência universitária: 150–300 € / mês',
              '🍽️ Cantina universitária: 2,65 € / refeição (cantina social)',
              '🚇 Passe de estudante: 30 € / mês (Lisboa/Porto)',
              'Seguro de saúde (para estudantes não-UE): ~25 € / mês',
              '💳 Cartão Acedo (estudante): descontos em transportes, comida, bilhetes'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bolsa',
      title: '💼 Bolsas e financiamento',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'DGES — bolsas nacionais', content: [
            { kind: 'checklist', items: [
              'Para residentes em Portugal: o montante depende do rendimento e da tabela DGES — confirme os valores atualizados em dges.gov.pt e nos Serviços de Ação Social da sua instituição',
              'Candidatura: anualmente, segundo o calendário da DGES, após a admissão',
              'Através dos Serviços de Ação Social de cada universidade',
              'A condição de carência é calculada através do rendimento per capita do agregado — confirme a fórmula em dges.gov.pt'
            ]}
          ]},
          { id: 'b2', title: 'Bolsas internacionais', content: [
            { kind: 'checklist', items: [
              '**Erasmus+**: para residentes / intercâmbio de curta duração, 800–1000 € / mês',
              '**Camões Institute bolsas**: para cidadãos PALOP, Timor-Leste, Brasil',
              '**FCT (Fundação para a Ciência e Tecnologia)**: bolsa de PhD — o montante é atualizado periodicamente; consulte a tabela de bolsas FCT atual (subsídio + propinas conforme o regulamento)',
              '**EU Marie Skłodowska-Curie**: para PhD/post-doc — 3000 €+ / mês',
              '**University-specific**: todas as instituições de topo têm programas de bolsas por mérito (descontos de 50–100% na tuition)',
              'Concorrência: medicina — a mais difícil; ciências e engenharia — melhores hipóteses'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'language',
      title: '🗣️ Língua de ensino',
      content: [
        { kind: 'checklist', items: [
          '**Licenciatura**: a maioria dos programas é em português; alguns programas de licenciatura são em inglês (Nova, IST, ISEG)',
          '**Mestrado**: 30–50% em inglês nas instituições de topo',
          '**PhD**: frequentemente em inglês, língua da tese à escolha',
          'Requisito de português: A2–B1 para licenciatura (se o ensino for em português), CIPLE ou certificado escolar',
          'Requisito de inglês: IELTS 6.0+ / TOEFL 80+ para programas em inglês',
          'Cursos de português para estrangeiros são gratuitos na maioria das universidades'
        ]}
      ]
    },
    {
      id: 'd4-visa',
      title: '🛂 Visto de Estudante D4',
      content: [
        { kind: 'checklist', items: [
          'Para estudantes não-UE que frequentem presencialmente um programa numa instituição de ensino superior portuguesa',
          'Documentos: acceptance letter, proof of funds (referência mínima **12×SMN por ano para o requerente principal — em 2026 isto é 11 040 €**; o consulado/VFS pode aceitar bolsa, saldo bancário, patrocínio e/ou prepaid accommodation), seguro de saúde, alojamento',
          'Pedido no consulado do país de residência',
          'Prazo: 1–3 meses',
          'Visto → entrada → AIMA para autorização de residência D4 (mais taxa AIMA separada — tabela em vigor desde 01.03.2026)',
          '**Após a conclusão**: pode pedir **autorização de residência para procura de trabalho ou criação de empresa** — normalmente até 12 meses (Lei 23/2007 art. 122). Isto **não** é o mesmo procedimento que o visto para procura de trabalho externo de 120+60 dias',
          'Ou transição para D3 / D8 / D2 após obter contrato / abrir negócio',
          'Para a nacionalidade: segundo a lei em vigor não existe coeficiente 0.5 — os anos com título de residência de estudante válido normalmente contam como residência legal comum (Lei 37/81 art. 6). ⚠️ **Decreto AR 48/XVII promulgado pelo Presidente Seguro em 03.05.2026** — publicado em 18.05.2026 como **Lei Orgânica n.º 1/2026**, em vigor desde **19.05.2026**; regras de naturalização após esta data — 7 anos CPLP+EU / 10 anos para os restantes, a norma transitória protege processos apresentados ANTES de 19.05.2026'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Licenciatura em instituição pública (national/EU)', amountEURMax: 697, note: '€ / ano — DGES propina cap' },
    { label: 'Licenciatura em instituição pública (Estudante Internacional / CEEI)', note: 'definido por cada instituição/curso — consulte o edital' },
    { label: 'Licenciatura em instituição privada', amountEURMin: 3500, amountEURMax: 15000, note: '€ / ano' },
    { label: 'Residência universitária', amountEURMin: 150, amountEURMax: 300, note: '€ / mês' },
    { label: 'Bolsa FCT PhD', note: 'consulte a tabela de bolsas FCT atual' }
  ],
  sources: [
    { title: 'DGES — Direção-Geral do Ensino Superior', url: 'https://www.dges.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 36/2014 — Estatuto do Estudante Internacional', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/36-2014', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 66/2018 — Reconhecimento de graus e diplomas estrangeiros', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei 23/2007 (art. 122 — residência após estudos)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'CNA — Concurso Nacional de Acesso', url: 'https://www.dges.gov.pt/guias/indest.asp', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'FCT — Fundação para a Ciência e Tecnologia', url: 'https://www.fct.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Study in Portugal', url: 'https://www.studyinportugal.pt/', kind: 'official', language: 'en', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
