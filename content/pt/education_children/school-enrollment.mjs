export default {
  editorialVoice: 'hackportugal',
  id: 'school-enrollment',
  categoryId: 'education_children',
  title: 'Inscrição de uma criança numa escola portuguesa',
  tldr: 'A escolaridade em Portugal é obrigatória dos 6 aos 18 anos (ou até à conclusão do secundário). As escolas públicas são gratuitas, e a matrícula é feita pela área de residência através do Portal das Matrículas. Existem também escolas privadas (3 000–15 000 €/ano) e internacionais (10 000–25 000 €/ano). As principais janelas de matrícula dependem do nível de ensino e do despacho anual; para o pré-escolar/1.º ano 2026/2027 — 22 de abril – 1 de junho de 2026 (Despacho 4472-A/2026). Em caso de mudança de residência/transferência, a escola pode aceitar o pedido ao longo do ano, se houver vaga.',
  tags: ['escola', 'educação', 'matrícula', 'crianças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Tipos de escolas',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Escolas públicas', content: [
            { kind: 'paragraph', text: 'Gratuitas para todos os residentes. A qualidade varia por região, e os rankings estão disponíveis publicamente. A língua de ensino é o português. Para crianças cuja língua materna não é o português, existe o programa PLNM — português língua não materna.' }
          ]},
          { id: 't2', title: 'Escolas privadas', content: [
            { kind: 'paragraph', text: '3 000–15 000 € por ano. Turmas mais pequenas, mais atividades extracurriculares. A língua de ensino é o português ou programas bilingues.' }
          ]},
          { id: 't3', title: 'Escolas internacionais', content: [
            { kind: 'paragraph', text: '10 000–25 000 € por ano. Programas IB, britânico, francês ou americano. Lisboa, Porto, Algarve. Escolas populares: St. Julian\'s, CAISL (Carlucci American International School of Lisbon), International Preparatory, German School, French Lycée.' }
          ]},
          { id: 't4', title: 'Ensino doméstico (ensino doméstico/individual)', content: [
            { kind: 'paragraph', text: 'É permitido, mas a criança deve estar matriculada numa escola; é apresentado um pedido com responsável educativo e plano individual; a avaliação segue as regras da escola/legislação. Antes de escolher esta opção, verifique os requisitos da Portaria n.º 69/2019 e as instruções atuais da DGEstE/DGE.' }
          ]}
        ]}
      ]
    },
    {
      id: 'levels',
      title: 'Estrutura do ensino',
      content: [
        { kind: 'checklist', items: [
          'Creche (0–3 anos) — não é obrigatória; o custo depende da instituição e das condições da família, mas para muitas crianças aplica-se o programa gratuito Creche Feliz',
          'Educação pré-escolar, Pré-escolar / Jardim de Infância (3–6 anos) — facultativa; o Estado assegura uma rede de lugares, mas a escolaridade obrigatória começa aos 6 anos',
          '1º Ciclo (1.º–4.º ano, 6–10 anos) — obrigatório',
          '2º Ciclo (5.º–6.º ano, 10–12 anos) — obrigatório',
          '3º Ciclo (7.º–9.º ano, 12–15 anos) — obrigatório',
          'Secundário (10.º–12.º ano, 15–18 anos) — obrigatório. Opções: cursos científico-humanísticos ou profissionais'
        ]}
      ]
    },
    {
      id: 'enrollment',
      title: 'Processo de matrícula',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Identificar o agrupamento de escolas da área de residência', content: [
            { kind: 'paragraph', text: 'Em portaldasmatriculas.edu.gov.pt, introduza o código postal → lista de escolas da sua zona. É dada prioridade às crianças dessa zona.' }
          ]},
          { id: 'e2', title: '2. Registo no portal', content: [
            { kind: 'paragraph', text: 'Pode iniciar sessão através de autenticação.gov.pt: Chave Móvel Digital, Cartão de Cidadão ou credenciais do Portal das Finanças (NIF+palavra-passe da AT). Se os pais não tiverem acesso a meios digitais — a matrícula pode ser feita com apoio da escola/agrupamento.' }
          ]},
          { id: 'e3', title: '3. Apresentar o pedido de matrícula', content: [
            { kind: 'paragraph', text: 'Janela da sessão principal para o ano letivo 2026–2027: 22 de abril – 1 de junho de 2026 (Portal das Matrículas, educação pré-escolar + 1.º ano do 1º Ciclo), nos termos do Despacho n.º 4472-A/2026. Para o 2º Ciclo, 3º Ciclo e Secundário — há prazos próprios; confirme o despacho de cada ano. Para transferência ou mudança de residência — em qualquer altura, mas idealmente até ao fim de julho.' }
          ]},
          { id: 'e4', title: '4. Documentos', content: [
            { kind: 'paragraph', text: 'Normalmente são pedidos: documento de identificação da criança e do progenitor, NIF, comprovativo de morada, boletim escolar/tradução juramentada, boletim de vacinas, fotografia. Se a criança não tiver NIF, número de utente, atestado de residência da Junta de Freguesia ou o conjunto completo de documentos estrangeiros — a escola NÃO deve bloquear o acesso à escolaridade obrigatória: é possível uma matrícula provisória e um procedimento paralelo de equivalência/posicionamento.' },
            { kind: 'checklist', items: [
              'Normalmente são pedidos: Cartão de Cidadão / passaporte da criança e do progenitor',
              'NIF da criança e dos pais (se existir)',
              'Comprovativo de morada (atestado de residência OU outros documentos)',
              'Boletim escolar da escola anterior (apostila + tradução juramentada para documentos estrangeiros)',
              'Boletim de vacinas',
              'Se existir: Número de Utente, fotografia 3×4'
            ]}
          ]},
          { id: 'e5', title: '5. Aguardar o resultado', content: [
            { kind: 'timeline', text: 'As datas de publicação das listas de colocação e turmas são indicadas anualmente no despacho/no Portal das Matrículas; para transferências, os prazos dependem da escola e da existência de vaga.' }
          ]}
        ]}
      ]
    },
    {
      id: 'plnm',
      title: 'PLNM — português língua não materna',
      content: [
        { kind: 'paragraph', text: 'O PLNM é atribuído após avaliação do nível de proficiência em português, normalmente a alunos com nível insuficiente da língua. Isto **não é automático** nem um direito/dever para todos os estrangeiros — a escola determina o nível e as medidas de apoio de acordo com as regras da DGE (Portaria 223-A/2018 e 226-A/2018). Uma criança estrangeira com bom português pode não ficar em PLNM, enquanto uma criança com nacionalidade portuguesa cuja língua materna não seja o português pode ficar.' }
      ]
    },
    {
      id: 'financial',
      title: 'Apoio financeiro',
      content: [
        { kind: 'checklist', items: [
          'Manuais escolares **gratuitos** através da MEGA/vouchers para alunos de escolas públicas e de algumas escolas com contrato de associação; cadernos de exercícios e materiais são frequentemente pagos à parte',
          'ASE (**Ação Social Escolar**) — apoio de acordo com o escalão do abono de família: alimentação, transporte, materiais e visitas de estudo podem ser gratuitos ou subsidiados',
          'Abono de Família — consulte o guia separado',
          'Dedução de IRS por educação — 30% das despesas elegíveis, normalmente até 800 € por **agregado familiar** (não por criança); o limite pode aumentar em alguns casos (por exemplo, renda de estudante deslocado)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Matrículas — oficial', url: 'https://portaldasmatriculas.edu.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGE — Direção-Geral da Educação', url: 'https://www.dge.mec.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Inscrever criança em escola', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/matricular-ou-renovar-a-matricula-no-ensino-obrigatorio', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
