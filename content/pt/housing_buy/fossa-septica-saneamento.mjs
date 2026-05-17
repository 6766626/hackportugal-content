export default {
  editorialVoice: 'hackportugal',
  id: 'fossa-septica-saneamento',
  categoryId: 'housing_buy',
  title: 'Fossa séptica — normas, distâncias, licenças',
  tldr: 'Se a casa não estiver ligada à rede pública de saneamento, é necessário tratamento autónomo de águas residuais. Em Portugal, pode ser uma fossa séptica clássica com poço absorvente, ou uma ETAR compacta moderna de tratamento biológico. Volume: ~3 m³ para 4–5 residentes. Distâncias mínimas: ≥30 m de um furo/poço, ≥10 m de casas vizinhas, ≥5 m do limite do terreno. A instalação exige projecto de um engenheiro, licença na Câmara Municipal, vistoria técnica após a montagem e licença de utilização. Preço: fossa séptica clássica 1 500-4 000 €, ETAR 5 000-15 000 €. Limpeza por empresa limpa-fossas a cada 1–3 anos (80-200 €).',
  tags: ['fossa', 'septica', 'saneamento', 'etar', 'aguas-residuais'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando é necessária uma fossa séptica — cenários',
      content: [
        { kind: 'checklist', items: [
          '🏠 Casa fora da cidade sem ligação ao saneamento: é necessária uma fossa séptica ou ETAR',
          '🏠 Casa antiga com fossa séptica não legalizada: é necessária a legalização',
          '🏠 Ampliação da casa (adição de casas de banho): recálculo do volume da fossa séptica',
          '🏠 Conversão de anexo em casa de hóspedes ou Alojamento Local (arrendamento turístico): normalmente é exigida uma ETAR',
          '🏠 Construção nova: fossa séptica ou ETAR — parte obrigatória do projecto',
          '✅ Apartamento na cidade: não é necessário nada — saneamento urbano',
          '✅ Casa ligada ao colector: apenas pagamento mensal de saneamento 5-15 €/mês'
        ] }
      ]
    },
    {
      id: 'fossa-vs-etar',
      title: 'Fossa séptica clássica vs ETAR — o que escolher',
      content: [
        { kind: 'paragraph', text: 'Dois tipos principais de tratamento autónomo:' },
        { kind: 'checklist', items: [
          'FOSSA SÉPTICA CLÁSSICA (fossa séptica): reservatório de 2–3 câmaras + poço absorvente. Barata. Exige muito espaço (~30–50 m² para o campo de infiltração). Limpeza a cada 1–3 anos.',
          'ETAR (Estação de Tratamento de Águas Residuais) — miniestação de tratamento biológico. Compacta (~2–4 m²). Biotratamento activo. A água tratada tem melhor qualidade e pode ser encaminhada para drenagem ou para o solo.',
          'FOSSA SÉPTICA COMPACTA PRÉ-FABRICADA: alternativa moderna — plástico moldado com estrutura interna. Mais simples de instalar. Preço 3 000-5 000 € contra 1 500-3 000 € de uma clássica.'
        ] },
        { kind: 'paragraph', text: 'O que escolher:' },
        { kind: 'checklist', items: [
          'Casa pequena (2–4 pessoas), terreno grande, solo arenoso: a fossa séptica clássica serve',
          'Casa grande (>5 pessoas) ou construção densa: a ETAR é preferível',
          'Negócio (Alojamento Local, restaurante): ETAR + contrato de manutenção',
          'Solo argiloso: é melhor ETAR (o poço absorvente funciona mal em argila)',
          'Perto de massas de água (rios, mar): ETAR moderna com esterilização UV',
          'Se pretende candidatar-se a subsídio: a ETAR tem prioridade'
        ] }
      ]
    },
    {
      id: 'distances',
      title: 'Distâncias mínimas',
      content: [
        { kind: 'paragraph', text: 'A principal norma é o Decreto Regulamentar 23/95 (Regulamento de Distribuição de Água). A Câmara Municipal pode tornar os requisitos mais rigorosos.' },
        { kind: 'checklist', items: [
          'Do furo/poço: ≥ 30 m (frequentemente 50 m em zonas de captação pública de água)',
          'Das fundações das casas vizinhas: ≥ 10 m',
          'Do limite do terreno: ≥ 5 m',
          'De jardins e hortas com produtos alimentares: ≥ 10 m',
          'De rios e ribeiras: ≥ 30 m (zona de protecção)',
          'De lagoa ou lago: ≥ 50 m',
          'Em encosta — tenha em conta a direcção do escoamento das águas subterrâneas',
          'Debaixo de entrada de veículos ou estacionamento: profundidade > 1 m com tampa reforçada'
        ] },
        { kind: 'warning', text: 'Se a fossa séptica ou o poço absorvente estiverem demasiado perto de um furo/poço, a água potável pode ficar contaminada. É um risco grave: pode haver fiscalização pela GNR (patrulha ambiental SEPNA) e pela APA (agência do ambiente), coimas, encerramento do furo/poço e custos de remediação de 5 000-30 000 €.' }
      ]
    },
    {
      id: 'process',
      title: 'Processo de instalação — passo a passo',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Projecto (para construção nova ou reabilitação significativa)',
            content: [
              { kind: 'checklist', items: [
                'Engenheiro civil: projecto de saneamento — parte do projecto geral de arquitectura',
                'Estudo geotécnico: que solo existe — permeável? argila ou areia?',
                'Dimensionamento: tipo, dimensão, distâncias, campo de infiltração',
                'Custo da parte de projecto: 500-1 500 €'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Obtenção de licença na Câmara Municipal',
            content: [
              { kind: 'paragraph', text: 'Através do portal online PEDU ou presencialmente na Câmara Municipal. São submetidos:' },
              { kind: 'checklist', items: [
                'Caderneta predial (certidão/descrição do imóvel)',
                'Projecto de saneamento + memória descritiva (memorial descritivo)',
                'Estudo geotécnico',
                'Planta de implantação no terreno',
                'Taxa: 100-500 € (varia muito consoante o município)'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Instalação',
            content: [
              { kind: 'checklist', items: [
                'Encontre um empreiteiro certificado para saneamento',
                'Movimentos de terras: aluguer de escavadora + trabalho = 50-100 €/hora',
                'Entrega da fossa séptica ou ETAR no terreno: tenha em conta a largura do acesso',
                'Ligação ao saneamento doméstico',
                'Aterro e arranjo do terreno',
                'Custo total dos trabalhos: 1 500-15 000 €'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Vistoria técnica e licença de utilização',
            content: [
              { kind: 'paragraph', text: 'Após a instalação, a Câmara Municipal pode enviar um inspector para verificar a conformidade com o projecto. Com base no resultado, é emitida a licença de utilização. Sem ela, a casa juridicamente não é considerada concluída: não pode ser vendida, não pode obter Alojamento Local, e o banco também a exigirá para crédito à habitação.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'maintenance',
      title: 'Manutenção — custos regulares',
      content: [
        { kind: 'paragraph', text: 'A fossa séptica deve ser limpa periodicamente. Caso contrário — transbordo, cheiro, contaminação do solo.' },
        { kind: 'checklist', items: [
          'Fossa séptica clássica: limpeza a cada 1–3 anos, dependendo da carga',
          'Preço da limpeza: 80-200 € (vem uma empresa limpa-fossas, bombeia, transporta para uma estação municipal de tratamento)',
          'Empresas locais: procure "limpeza de fossa séptica" + nome da cidade — há muitos pequenos operadores',
          'ETAR: verificação visual dos indicadores a cada seis meses',
          'Contrato de manutenção da ETAR: 100-300 €/ano com empresa especializada',
          'Substituição de bioactivadores (bactérias para lamas activadas): 30-50 € a cada 1–2 anos',
          'Electricidade para o arejador da ETAR: 30-100 €/ano'
        ] },
        { kind: 'paragraph', text: 'Sinais de transbordo: cheiro a sulfureto de hidrogénio no quintal, escoamento lento em lavatórios e sanitas, relva molhada por cima do poço absorvente.' }
      ]
    },
    {
      id: 'al-business',
      title: 'Alojamento Local — requisitos especiais',
      content: [
        { kind: 'paragraph', text: 'Para Alojamento Local (arrendamento turístico legal), os requisitos de saneamento são mais rigorosos:' },
        { kind: 'checklist', items: [
          'ETAR obrigatória (a fossa séptica clássica não é suficiente)',
          'Cálculo do volume para o número máximo de hóspedes — normalmente com margem de 1,5x',
          'Contrato de manutenção obrigatório',
          'Inspecção anual pelo município ou pela DGS (autoridade de saúde)',
          'Em caso de problemas — a licença de AL é suspensa até à correcção',
          'Em zonas vulneráveis (costa do Algarve, parte do Alentejo) — esterilização UV obrigatória antes da descarga'
        ] }
      ]
    },
    {
      id: 'subsidies',
      title: 'Subsídios e apoios',
      content: [
        { kind: 'checklist', items: [
          'Subsídios municipais para substituir a fossa séptica clássica por ETAR — informe-se junto do seu município, especialmente no Algarve e no Alentejo',
          'Dedução fiscal em IRS (imposto sobre o rendimento) por obras na habitação própria e permanente: 30% até 1 500 €/ano',
          'Programa Saneamento Rural — programa público para zonas remotas',
          'Subsídio da APA para transição para tratamento biológico em zonas vulneráveis',
          'Comunidade de Energia Renovável (CER): o pacote com painéis solares inclui frequentemente a modernização do saneamento'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Coimas por infracções',
      content: [
        { kind: 'checklist', items: [
          'Fossa séptica sem licença: 250-2 500 €',
          'Fossa séptica com violação das distâncias (por exemplo, perto de um furo/poço): 1 000-10 000 € + custos de remediação',
          'Descarga directa para rio ou mar: 5 000-37 500 € + procedimento criminal',
          'Alojamento Local sem saneamento adequado: 1 500-7 500 € + suspensão da licença',
          'Fossa séptica abandonada, contaminação das águas subterrâneas: 1 000-37 500 € + custos de limpeza (podem atingir 30 000 €+)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Fossa séptica clássica', amountEURMin: 1500, amountEURMax: 4000, note: 'Reservatório + campo de infiltração + instalação' },
    { label: 'ETAR compacta', amountEURMin: 5000, amountEURMax: 15000, note: 'Com instalação' },
    { label: 'Projecto de engenheiro', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Estudo geotécnico', amountEURMin: 300, amountEURMax: 800 },
    { label: 'Licença municipal', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Limpeza da fossa séptica', amountEURMin: 80, amountEURMax: 200, note: 'A cada 1-3 anos' },
    { label: 'Contrato de manutenção da ETAR', amountEURMin: 100, amountEURMax: 300, note: 'Por ano' },
    { label: 'Electricidade para a ETAR', amountEURMin: 30, amountEURMax: 100, note: 'Por ano' }
  ],
  sources: [
    { title: 'APA — Águas Residuais Urbanas', url: 'https://apambiente.pt/agua/aguas-residuais-urbanas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto Regulamentar 23/95 — Distribuição de Água e Drenagem', url: 'https://dre.pt/dre/detalhe/decreto-regulamentar/23-1995-431007', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 152/97 — tratamento de águas residuais urbanas', url: 'https://dre.pt/dre/detalhe/decreto-lei/152-1997-217470', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ERSAR — Entidade Reguladora dos Serviços de Águas e Resíduos', url: 'https://www.ersar.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
