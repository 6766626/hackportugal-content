export default {
  editorialVoice: 'hackportugal',
  id: 'apicultura-registo-iniciante',
  categoryId: 'food_leisure',
  title: 'Apicultura para principiantes — registo na DGAV (Direção-Geral de Alimentação e Veterinária)',
  tldr: 'Qualquer apiário em Portugal (mesmo uma única colmeia no jardim) tem de estar registado na DGAV (Direção-Geral de Alimentação e Veterinária — autoridade pública de segurança alimentar e veterinária). O registo é gratuito: entrega-se na Junta de Freguesia ou via ePortugal (portal de serviços públicos). Após o registo obtém-se o número de apicultor e a obrigação de manter o caderno sanitário (caderno sanitário). Distâncias mínimas: 200 m em zona urbana, 50 m em zona rural (pode ser menos com vedação alta). Mel para consumo próprio — sem HACCP. Para vender é necessária uma sala de extração registada (sala de extração) e inspeção da ASAE (Autoridade de Segurança Alimentar e Económica — fiscalização da segurança alimentar). A FNAP (federação nacional de apicultores) é a principal associação. Cursos para principiantes: 150-300 €. Uma colmeia dá 15-30 kg de mel por ano; kit inicial (colmeia + enxame + proteção) 250-500 €.',
  tags: ['apicultura', 'abelha', 'mel', 'dgav', 'fnap'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-portugal',
      title: 'Porque Portugal é bom para a apicultura',
      content: [
        { kind: 'paragraph', text: 'Portugal é um dos líderes da UE na produção de mel (~10 000 toneladas por ano). O clima é ameno e há muitos melíferos silvestres: eucalipto, rosmaninho, lavanda, erva-cidreira, mato (arbusto espontâneo), citrinos, castanheiro, sobreiro. A época é longa: de fevereiro a outubro.' },
        { kind: 'checklist', items: [
          'Mel de Eucalipto — o mais reconhecível português, escuro, de sabor intenso',
          'Mel de Rosmaninho — aromático, clássico do Alentejo',
          'Mel de Castanha — com ligeiro amargor, adstringente',
          'Mel multifloral — mistura base',
          'Geleia real, própolis, pólen — produtos premium',
          'Cera — para velas e cosmética, mercado próprio'
        ] }
      ]
    },
    {
      id: 'registration',
      title: 'Registo — obrigatório para cada colónia',
      content: [
        { kind: 'paragraph', text: 'Desde 2014 o registo é obrigatório para todos os detentores de abelhas em Portugal. Decreto-Lei 203/2005 e alterações subsequentes. Sem registo — coima de 100-500 € e risco de perda das abelhas numa fiscalização da DGAV.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Reúna os documentos',
            content: [
              { kind: 'checklist', items: [
                'NIF (número de contribuinte) e Cartão de Cidadão ou passaporte + atestado de residência',
                'Endereço de colocação das colmeias (terreno próprio ou autorização escrita do proprietário)',
                'Quantidade e tipo de colmeias: são comuns os modelos Lusitano e Langstroth',
                'Se houver vários locais (apiários) — cada um é indicado separadamente'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Apresentação do pedido',
            content: [
              { kind: 'checklist', items: [
                'Através do ePortugal (portal de serviços públicos): eportugal.gov.pt → Cidadão → Apicultura',
                'Ou presencialmente na Junta de Freguesia',
                'Ou através da DRAP (Direção Regional de Agricultura e Pescas — direção regional de agricultura e pescas; 5 regiões)',
                'Após aprovação é atribuído o número de apicultor (formato AA-NN-NNNN)'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Marcação das colmeias',
            content: [
              { kind: 'paragraph', text: 'Em cada colmeia deve constar o número de apicultor e o número da colmeia. Tinta indelével em ambos os lados, altura dos caracteres — no mínimo 5 cm. Isto é crítico para as fiscalizações da DGAV.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'distance-rules',
      title: 'Distâncias mínimas — onde pode colocar colmeias',
      content: [
        { kind: 'paragraph', text: 'Esta é a razão mais comum de conflitos com vizinhos. O Decreto-Lei 203/2005 e a Portaria 9/2021 estabelecem as distâncias mínimas:' },
        { kind: 'checklist', items: [
          '200 m de quaisquer edifícios onde se encontrem pessoas (habitação, escolas, hospitais) em zona urbana',
          '50 m em zona rural',
          '25 m, se existir barreira contínua com altura mínima de 2 m (sebe densa ou divisória de madeira)',
          'Pode ser encostado quando houver barreira à linha de visão — parede ou vedação alta',
          '500 m de zonas de elevada concentração de apiários',
          '200 m de aterros de resíduos e locais de armazenamento/manuseamento de pesticidas',
          'Entre pontos vizinhos — pelo menos 50 m, para reduzir a competição de enxames'
        ] },
        { kind: 'warning', text: 'Se os vizinhos apresentarem queixa e as distâncias não forem cumpridas, o município (Câmara Municipal) pode obrigar a deslocar as colmeias. Isto acontece frequentemente após as primeiras picadas em crianças vizinhas. Verifique as regras do seu município — podem ser mais estritas.' }
      ]
    },
    {
      id: 'starter-equipment',
      title: 'Conjunto inicial — o que comprar',
      content: [
        { kind: 'paragraph', text: 'Mínimo para uma colmeia:' },
        { kind: 'checklist', items: [
          'Colmeia: tipo Lusitano 30-60 €, Langstroth 50-100 €',
          'Enxame: abelhas + rainha. Compra: 80-150 €',
          'Fato de apicultor (proteção): 50-150 €',
          'Luvas de apicultor: 10-30 €',
          'Fumigador: 30-60 €',
          'Formão/ferramentas para quadros: 10-20 €',
          'Melgueira (alça) para mel: 30-50 €',
          'Quadros e cera alveolada: 20-40 € por colmeia',
          'Suportes para colmeia: 10-20 €',
          'Ferramentas: separador, faca, extractor de mel — manual básico desde 100 € (pode ser partilhado através da associação local)'
        ] },
        { kind: 'paragraph', text: 'Lojas: Apifix (Lisboa, Porto, Évora), Carlos Ferreira Apicultura (Évora), Apivar (Algarve). Online: apicultura.pt, abelhas.com.' },
        { kind: 'paragraph', text: 'A FNAP (federação nacional de apicultores) dá descontos a associados, realiza cursos e publica catálogos de fornecedores.' }
      ]
    },
    {
      id: 'health-checks',
      title: 'Saúde da colónia e tratamentos obrigatórios',
      content: [
        { kind: 'paragraph', text: 'As colmeias em Portugal enfrentam as mesmas doenças que noutros locais:' },
        { kind: 'checklist', items: [
          'Varroa destructor (ácaro): tratamento obrigatório no outono e na primavera. Preparados Apivar, Bayvarol ou métodos orgânicos (ácido oxálico)',
          'Aethina tumida (pequeno escaravelho da colmeia): em Portugal não é crítico, mas requer monitorização',
          'Loque americana: doença de declaração obrigatória; em caso de suspeita, comunique de imediato à DGAV',
          'Vespa velutina (vespa asiática): principal ameaça no norte do país, medidas de proteção obrigatórias',
          'Nosema: enfraquece as colónias no inverno',
          'Caderno sanitário: é obrigatório registar todos os tratamentos — a DGAV verifica'
        ] },
        { kind: 'paragraph', text: 'A DGAV recomenda a consulta de um médico veterinário pelo menos uma vez por ano. A visita costuma custar 30-80 €.' }
      ]
    },
    {
      id: 'selling-honey',
      title: 'Venda de mel — outra história',
      content: [
        { kind: 'paragraph', text: 'Se quiser vender mel, os requisitos são maiores:' },
        { kind: 'checklist', items: [
          'Registo de apicultor concluído',
          'Abrir atividade nas Finanças (autoridade tributária) com o código CIRS 1311 — apicultura',
          'Registar a sala de extração na DGAV — local onde extrai o mel (requisitos HACCP)',
          'O espaço deve ser adequado à produção alimentar: superfícies laváveis, proteção contra insetos, controlo de temperatura',
          'Análises laboratoriais aos lotes de mel (humidade, HMF, diástase) pelo menos uma vez por época: 30-80 € por análise',
          'Rotulagem conforme requisitos da UE: nome, NIF do apicultor, número do lote, país de origem, massa, prazo de validade',
          'Venda em mercados — autorização do município (Câmara Municipal)',
          'Venda online — o IVA é obrigatório se o volume de negócios > 14 500 € por ano (a partir de 2025 podem ocorrer alterações)',
          'IGP (Indicação Geográfica Protegida): Mel da Serra de Aire, Mel do Alentejo, Mel de Trás-os-Montes — segmento premium, requer registo adicional'
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
          'Tópicos avançados: extração, combate à Vespa velutina, criação de rainhas, produção de pólen',
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
      title: 'Subvenções e apoio',
      content: [
        { kind: 'paragraph', text: 'A apicultura recebe apoio através do PNAA (programa nacional de apicultura) e do PEPAC (programa da PAC).' },
        { kind: 'checklist', items: [
          'Subvenção para transumância (transumância): cerca de 2-5 € por colmeia',
          'Apoio à reposição de colónias após perdas por Vespa velutina',
          'Investimentos em equipamento para extração: cofinanciamento até 50%',
          'Cursos de formação com financiamento: reembolso até 70%',
          'Contratos de polinização: agricultores pagam ao apicultor pela colocação de colmeias no período de floração (5-50 € por colmeia por época)',
          'Apresentação de candidaturas — através do IFAP (instituto financiador da agricultura e pescas)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Registo de apicultor', amountEUR: 0, note: 'Gratuito' },
    { label: 'Colmeia básica com enxame (início)', amountEURMin: 150, amountEURMax: 300, note: 'Por colmeia' },
    { label: 'Fato de proteção + luvas + fumigador', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Extractor de mel (manual)', amountEURMin: 80, amountEURMax: 200 },
    { label: 'Curso para principiantes FNAP', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Anualmente: tratamento contra varroa + análises', amountEURMin: 30, amountEURMax: 80, note: 'Por colmeia por ano' },
    { label: 'Visita de médico veterinário/documento sanitário', amountEURMin: 30, amountEURMax: 80, note: 'por visita' },
    { label: 'Sala de extração — investimento inicial', amountEURMin: 1000, amountEURMax: 5000, note: 'Se planeia vender' }
  ],
  sources: [
    { title: 'DGAV — Direção-Geral de Alimentação e Veterinária', url: 'https://www.dgav.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'DGAV — Apicultura: registo e legislação', url: 'https://www.dgav.pt/animais/conteudo/animais-de-producao/apicultura/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 203/2005 — registo de apicultores', url: 'https://dre.pt/dre/detalhe/decreto-lei/203-2005-243676', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 9/2021 — distâncias das colmeias', url: 'https://dre.pt/dre/detalhe/portaria/9-2021-153700104', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — apoio à apicultura', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
