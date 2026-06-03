export default {
  editorialVoice: 'hackportugal',
  id: 'apicultura-registo-iniciante',
  categoryId: 'food_leisure',
  title: 'Apicultura para principiantes — registo na DGAV (Direção-Geral de Alimentação e Veterinária)',
  tldr: 'Qualquer apiário em Portugal (mesmo uma única colmeia no jardim) tem de estar registado na DGAV (Direção-Geral de Alimentação e Veterinária — serviço público de segurança alimentar e veterinária)\.\n\nO registo é gratuito: faz-se online na aplicação «Atividade Apícola» na Área Reservada do Portal do IFAP, ou na DSAVR (Direção de Serviços de Alimentação e Veterinária Regional), ou através de uma organização de apicultores reconhecida com protocolo com o IFAP\.\n\nA declaração de existências inicial tem de ser entregue no prazo de 10 dias úteis após o início da atividade; a declaração anual de existências é entregue de 1 a 30 de setembro\.\n\nApós o registo, recebe um número de apicultor e passa a ter a obrigação de manter um caderno sanitário\.\n\nDistâncias mínimas (Decreto-Lei 203/2005): a mais de 50 m da via pública e a mais de 100 m de qualquer edificação em utilização. Mel para consumo próprio — sem HACCP. Para vender, é necessária uma sala de extração registada (sala de extração) e inspeção da ASAE (Autoridade de Segurança Alimentar e Económica — fiscalização da segurança alimentar). A FNAP (federação nacional dos apicultores) — é a principal associação. Cursos para principiantes: 150-300 €. Uma colmeia produz 15-30 kg de mel por ano; kit inicial (colmeia + enxame + proteção) 250-500 €.',
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
                'Online na Área Reservada do Portal do IFAP — aplicação «Atividade Apícola»',
                'Ou na DSAVR (Direção de Serviços de Alimentação e Veterinária Regional)',
                'Ou através de uma organização de apicultores reconhecida com protocolo com o IFAP',
                'Entregue a declaração de existências inicial no prazo de 10 dias úteis após o início da atividade; a declaração anual de existências é entregue de 1 a 30 de setembro',
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
        { kind: 'paragraph', text: 'Esta é a causa mais frequente de conflitos com vizinhos. As distâncias mínimas são estabelecidas pelo artigo 5.º do Decreto-Lei 203/2005:' },
        { kind: 'checklist', items: [
          'A mais de 50 m da via pública',
          'A mais de 100 m de qualquer edificação em utilização (habitação, escolas, hospitais)',
          'Exceção: caminhos rurais e agrícolas, bem como edificações destinadas à atividade apícola do detentor do apiário',
          'Distância entre apiários vizinhos (Anexo I): pelo menos 400 m para 11-30 colmeias e pelo menos 800 m para 31-100 colmeias',
          'Máximo de 100 colónias por apiário'
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
          'Caderno sanitário: é obrigatório registar todos os tratamentos — a DGAV fiscaliza'
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
          'Abra atividade nas Finanças (autoridade tributária) com o código CAE 01491 — apicultura',
          'Registe a sala de extração (sala de extração) na DGAV — o local onde extrai o mel (requisitos HACCP)',
          'O espaço deve ser adequado à produção alimentar: superfícies laváveis, proteção contra insetos, controlo de temperatura',
          'Análises laboratoriais dos lotes de mel (humidade, HMF, diastase) pelo menos uma vez por época: 30-80 € por análise',
          'Rotulagem de acordo com os requisitos da UE: nome, NIF do apicultor, número do lote, país de origem, peso, prazo de validade',
          'Venda em mercados — autorização do município (Câmara Municipal)',
          'Venda online — IVA obrigatório se o volume de negócios > 15 000 € por ano (limiar do regime de isenção do artigo 53.º do CIVA, em vigor desde 1 de julho de 2025)',
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
    { title: 'gov.pt — Fazer o registo apícola e declarar existências de abelhas', url: 'https://www2.gov.pt/inicio/espaco-empresa/balcao-do-empreendedor/fazer-o-registo-apicola-e-declarar-existencias-de-abelhas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'IFAP — apoio à apicultura', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
