export default {
  editorialVoice: 'hackportugal',
  id: 'apicultura-registo-iniciante',
  categoryId: 'food_leisure',
  title: 'Apicultura para principiantes — registo na DGAV (Direção-Geral de Alimentação e Veterinária)',
  tldr: 'Qualquer apiário em Portugal (mesmo uma única colmeia no jardim) tem de estar registado na DGAV (Direção-Geral de Alimentação e Veterinária — serviço público de segurança alimentar e veterinária)\.\n\nO registo é gratuito: entrega-se na Junta de Freguesia (órgão local da freguesia) ou através do ePortugal (portal de serviços públicos)\.\n\nApós o registo, recebe um número de apicultor e passa a ter a obrigação de manter um caderno sanitário (caderno sanitário)\.\n\nDistâncias mínimas: 200 m em zona urbana, 50 m em zona rural (pode ser menos com uma vedação alta). Mel para consumo próprio — sem HACCP. Para vender, é necessária uma sala de extração registada (sala de extração) e inspeção da ASAE (Autoridade de Segurança Alimentar e Económica — fiscalização da segurança alimentar). A FNAP (federação nacional dos apicultores) — é a principal associação. Cursos para principiantes: 150-300 €. Uma colmeia produz 15-30 kg de mel por ano; kit inicial (colmeia + enxame + proteção) 250-500 €.',
  tags: ['apicultura', 'abelha', 'mel', 'dgav', 'fnap'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-portugal',
      title: 'Porque Portugal é bom para a apicultura',
      content: [
        { kind: 'paragraph', text: 'Portugal é um dos líderes da UE na produção de mel (~10 000 toneladas por ano)\.\n\nO clima é ameno e há muitas plantas melíferas silvestres: eucalipto (eucalipto), rosmaninho, lavanda, erva-cidreira, mato (vegetação arbustiva silvestre), citrinos, castanheiro, sobreiro (sobreiro).\n\nA época é longa: de fevereiro a outubro.' },
        { kind: 'checklist', items: [
          'Mel de Eucalipto — o mel português mais reconhecível, escuro, com sabor intenso',
          'Mel de Rosmaninho — aromático, um clássico do Alentejo',
          'Mel de Castanha — com ligeiro amargor, adstringente',
          'Mel multifloral — mistura base',
          'Geleia real, própolis, pólen — produtos premium',
          'Cera — para velas e cosmética, um mercado separado'
        ] }
      ]
    },
    {
      id: 'registration',
      title: 'Registo — obrigatório para cada colónia',
      content: [
        { kind: 'paragraph', text: 'Desde 2014, o registo é obrigatório para todos os detentores de abelhas em Portugal. Decreto-Lei 203/2005 e alterações posteriores. Sem registo — coima de 100-500 € e risco de perda das abelhas em caso de fiscalização da DGAV.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Reúna os documentos',
            content: [
              { kind: 'checklist', items: [
                'NIF (número fiscal) e Cartão de Cidadão (cartão de cidadão) ou passaporte + atestado de residência (certidão de residência)',
                'Morada de instalação das colmeias (terreno próprio ou autorização escrita do proprietário)',
                'Número e tipo de colmeias: os modelos Lusitano e Langstroth são comuns',
                'Se houver vários locais (apiários) — cada um é indicado separadamente'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submeta o pedido',
            content: [
              { kind: 'checklist', items: [
                'Através do ePortugal (portal de serviços públicos): eportugal.gov.pt → Cidadão → Apicultura',
                'Ou presencialmente na Junta de Freguesia (órgão local da freguesia)',
                'Ou através da DRAP (Direção Regional de Agricultura e Pescas — direção regional de agricultura e pescas; 5 regiões)',
                'Após aprovação, é emitido o número de apicultor (formato AA-NN-NNNN)'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Marcação das colmeias',
            content: [
              { kind: 'paragraph', text: 'Em cada colmeia deve estar inscrito o seu número de apicultor e o número da colmeia. Tinta indelével em dois lados, altura dos caracteres — no mínimo 5 cm. Isto é crítico para as fiscalizações da DGAV.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'distance-rules',
      title: 'Distâncias mínimas — onde pode colocar colmeias',
      content: [
        { kind: 'paragraph', text: 'Esta é a causa mais frequente de conflitos com vizinhos. O Decreto-Lei 203/2005 e a Portaria 9/2021 estabelecem as distâncias mínimas:' },
        { kind: 'checklist', items: [
          '200 m de quaisquer edifícios onde estejam pessoas (habitação, escolas, hospitais) em zona urbana',
          '50 m em zona rural',
          '25 m, se existir uma barreira contínua com pelo menos 2 m de altura (sebe ou divisória de madeira)',
          'Pode ser mesmo junto, se houver uma barreira na linha de visão — muro alto ou vedação',
          '500 m de zonas de elevada concentração de apiários',
          '200 m de aterros de resíduos sólidos urbanos e locais de armazenamento/transfega de pesticidas',
          'Entre pontos vizinhos — pelo menos 50 m, para reduzir a competição entre enxames'
        ] },
        { kind: 'warning', text: 'Se os vizinhos apresentarem queixa e as distâncias não forem cumpridas, o município (Câmara Municipal — câmara municipal) pode obrigar à deslocação das colmeias. Isto acontece frequentemente após os primeiros casos de picadas em crianças dos vizinhos. Verifique as regras do seu município — podem ser mais rigorosas.' }
      ]
    },
    {
      id: 'starter-equipment',
      title: 'Kit inicial — o que comprar',
      content: [
        { kind: 'paragraph', text: 'Mínimo para uma colmeia:' },
        { kind: 'checklist', items: [
          'Colmeia (colmeia): tipo Lusitano 30-60 €, Langstroth 50-100 €',
          'Enxame (enxame): abelhas + rainha. Compra: 80-150 €',
          'Fato de apicultor (fato de apicultor): 50-150 €',
          'Luvas de apicultor: 10-30 €',
          'Fumigador: 30-60 €',
          'Formão/ferramentas para quadros: 10-20 €',
          'Alça para mel: 30-50 €',
          'Quadros e cera laminada: 20-40 € por colmeia',
          'Suportes para colmeia: 10-20 €',
          'Ferramentas: excluidor, faca, extrator de mel — manual básico a partir de 100 € (pode ser partilhado através de uma associação local)'
        ] },
        { kind: 'paragraph', text: 'Lojas: Apifix (Lisboa, Porto, Évora), Carlos Ferreira Apicultura (Évora), Apivar (Algarve). Online: apicultura.pt, abelhas.com.' },
        { kind: 'paragraph', text: 'A FNAP (federação nacional dos apicultores) dá descontos a membros, organiza cursos e publica catálogos de fornecedores.' }
      ]
    },
    {
      id: 'health-checks',
      title: 'Saúde da colónia e tratamentos obrigatórios',
      content: [
        { kind: 'paragraph', text: 'As colmeias em Portugal enfrentam as mesmas doenças que em qualquer outro lugar:' },
        { kind: 'checklist', items: [
          'Varroa destructor (ácaro): tratamento obrigatório no outono e na primavera. Produtos Apivar, Bayvarol ou métodos orgânicos (ácido oxálico)',
          'Aethina tumida (pequeno besouro das colmeias): em Portugal não é crítico, mas exige monitorização',
          'Loque americana: doença de notificação obrigatória; em caso de suspeita, comunique imediatamente à DGAV',
          'Vespa velutina (vespa asiática): principal ameaça no norte do país, são obrigatórias medidas de proteção',
          'Nosema: enfraquece as colónias no inverno',
          'Caderno sanitário (caderno sanitário): é obrigatório registar todos os tratamentos — a DGAV fiscaliza'
        ] },
        { kind: 'paragraph', text: 'A DGAV recomenda consulta veterinária pelo menos uma vez por ano. Uma visita veterinária custa normalmente 30-80 €.' }
      ]
    },
    {
      id: 'selling-honey',
      title: 'Venda de mel — outra história',
      content: [
        { kind: 'paragraph', text: 'Se quiser vender mel, há mais requisitos:' },
        { kind: 'checklist', items: [
          'O registo de apicultor já está feito',
          'Abra atividade nas Finanças (autoridade tributária) com o código CIRS 1311 — apicultura',
          'Registe a sala de extração (sala de extração) na DGAV — o local onde extrai o mel (requisitos HACCP)',
          'O espaço deve ser adequado à produção alimentar: superfícies laváveis, proteção contra insetos, controlo de temperatura',
          'Análises laboratoriais dos lotes de mel (humidade, HMF, diastase) pelo menos uma vez por época: 30-80 € por análise',
          'Rotulagem de acordo com os requisitos da UE: nome, NIF do apicultor, número do lote, país de origem, peso, prazo de validade',
          'Venda em mercados — autorização do município (Câmara Municipal)',
          'Venda online — IVA obrigatório se o volume de negócios > 14 500 € por ano (a partir de 2025 podem ocorrer alterações)',
          'IGP (Indicação Geográfica Protegida — indicação geográfica protegida): Mel da Serra de Aire, Mel do Alentejo, Mel de Trás-os-Montes — segmento premium, exige registo adicional'
        ] }
      ]
    },
    {
      id: 'training',
      title: 'Cursos e comunidade',
      content: [
        { kind: 'checklist', items: [
          'FNAP — cursos para principiantes em Lisboa, Évora, Porto, Algarve',
          'Cursos para principiantes: 16-30 horas, 100-300 €',
          'Temas avançados: extração, combate à Vespa velutina, criação de rainhas, produção de pólen',
          'CONFAGRI (união de cooperativas) organiza cursos regionais através de cooperativas',
          'Universidade do Algarve (Faro) — por vezes realiza cursos técnicos',
          'Associações locais: Associação dos Apicultores do Algarve (AAA), Associação dos Apicultores de Trás-os-Montes',
          'Grupos no Telegram/WhatsApp: chats regionais para principiantes',
          'YouTube: canais em português — Apicultura Portugal, Mel & Cera'
        ] }
      ]
    },
    {
      id: 'subsidies',
      title: 'Subsídios e apoios',
      content: [
        { kind: 'paragraph', text: 'A apicultura recebe apoio através do PNAA (programa nacional apícola) e do PEPAC (programa da PAC).' },
        { kind: 'checklist', items: [
          'Subsídio à transumância (transumância): cerca de 2-5 € por colmeia',
          'Apoio à recuperação de colónias após perdas causadas pela Vespa velutina',
          'Investimentos em equipamento de extração: cofinanciamento até 50%',
          'Cursos de formação com financiamento: reembolso até 70%',
          'Contratos de polinização: agricultores pagam ao apicultor pela colocação de colmeias durante o período de floração (5-50 € por colmeia por época)',
          'Submissão de candidaturas — através do IFAP (instituto de financiamento da agricultura e pescas)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Registo de apicultor', amountEUR: 0, note: 'Gratuito' },
    { label: 'Colmeia básica com enxame (início)', amountEURMin: 150, amountEURMax: 300, note: 'Por colmeia' },
    { label: 'Fato de proteção + luvas + fumigador', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Extrator de mel (manual)', amountEURMin: 80, amountEURMax: 200 },
    { label: 'Curso FNAP para principiantes', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Anual: tratamento contra varroa + análises', amountEURMin: 30, amountEURMax: 80, note: 'Por colmeia por ano' },
    { label: 'Visita veterinária/documento sanitário', amountEURMin: 30, amountEURMax: 80, note: 'por visita' },
    { label: 'Sala de extração (sala de extração) — investimento inicial', amountEURMin: 1000, amountEURMax: 5000, note: 'Se planeia vender' }
  ],
  sources: [
    { title: 'DGAV — Direção-Geral de Alimentação e Veterinária', url: 'https://www.dgav.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'DGAV — Apicultura: registo e legislação', url: 'https://www.dgav.pt/animais/conteudo/animais-de-producao/abelhas/identificacao-registo-e-movimentacao-animal/registo/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 203/2005 — registo de apicultores', url: 'https://dre.pt/dre/detalhe/decreto-lei/203-2005-243676', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 9/2021 — distâncias das colmeias', url: 'https://dre.pt/dre/detalhe/portaria/9-2021-153700104', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — apoio à apicultura', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
