export default {
  editorialVoice: 'hackportugal',
  id: 'fossa-septica-saneamento',
  categoryId: 'housing_buy',
  title: 'Fossa séptica (fossa séptica) — normas, distâncias, licenças',
  tldr: 'Se a casa não estiver ligada à rede pública de saneamento, é necessária uma solução autónoma para as águas residuais. Em Portugal, isto é ou a fossa séptica clássica (fossa séptica) com poço de infiltração, ou uma mini‑ETAR compacta de tratamento biológico. Volume: ~3 m³ para 4–5 ocupantes. Distâncias mínimas: ≥30 m do furo, ≥10 m de casas vizinhas, ≥5 m do limite do terreno. A instalação requer projeto por engenheiro, licença na Câmara Municipal (município), vistoria após a montagem e licença de utilização. Preço: fossa séptica clássica 1 500-4 000 €, ETAR 5 000-15 000 €. Limpeza por camião limpa‑fossas a cada 1–3 anos (80-200 €).',
  tags: ['fossa', 'septica', 'saneamento', 'etar', 'aguas-residuais'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando é necessária a fossa séptica — cenários',
      content: [
        { kind: 'checklist', items: [
          '🏠 Casa fora da cidade sem ligação ao saneamento: precisa de fossa séptica ou ETAR',
          '🏠 Casa antiga com fossa não legalizada: é necessária legalização',
          '🏠 Ampliação da casa (mais casas de banho): recálculo do volume da fossa',
          '🏠 Conversão de anexo em casa de hóspedes ou Alojamento Local (arrendamento turístico): normalmente exige ETAR',
          '🏠 Construção nova: fossa séptica ou ETAR — parte obrigatória do projeto',
          '✅ Apartamento na cidade: nada a fazer — saneamento municipal',
          '✅ Casa ligada ao coletor: apenas pagamento mensal de saneamento 5–15 €/mês'
        ] }
      ]
    },
    {
      id: 'fossa-vs-etar',
      title: 'Fossa séptica clássica vs ETAR — o que escolher',
      content: [
        { kind: 'paragraph', text: 'Dois tipos principais de saneamento autónomo:' },
        { kind: 'checklist', items: [
          'FOSSA SÉPTICA CLÁSSICA (fossa séptica): depósito de 2–3 câmaras + poço de infiltração. Barata. Requer muito espaço (~30–50 m² para o campo de filtração). Limpeza a cada 1–3 anos.',
          'ETAR (Estação de Tratamento de Águas Residuais) — miniestação de tratamento biológico. Compacta (~2–4 m²). Bio‑tratamento ativo. A água tratada tem melhor qualidade; pode ser conduzida para dreno ou para o solo.',
          'FOSSA SÉPTICA COMPACTA PRÉ‑FABRICADA: alternativa moderna — plástico moldado com estrutura interna. Mais simples de instalar. Preço 3 000-5 000 € versus 1 500-3 000 € da clássica.'
        ] },
        { kind: 'paragraph', text: 'Como escolher:' },
        { kind: 'checklist', items: [
          'Casa pequena (2–4 pessoas), terreno amplo, solo arenoso: fossa clássica serve',
          'Casa grande (>5 pessoas) ou edificação densa: ETAR é preferível',
          'Negócio (Alojamento Local, restaurante): ETAR + contrato de manutenção',
          'Solo argiloso: melhor ETAR (o poço de infiltração funciona mal em argila)',
          'Perto de massas de água (rios, mar): ETAR moderna com esterilização UV',
          'Se procura subsídio: a ETAR tem prioridade'
        ] }
      ]
    },
    {
      id: 'distances',
      title: 'Distâncias mínimas',
      content: [
        { kind: 'paragraph', text: 'A principal norma é o Decreto Regulamentar 23/95 (Regulamento de Distribuição de Água). A Câmara Municipal pode impor requisitos mais estritos.' },
        { kind: 'checklist', items: [
          'Do furo: ≥ 30 m (muitas vezes 50 m em zonas de captação pública)',
          'Das fundações de casas vizinhas: ≥ 10 m',
          'Do limite do terreno: ≥ 5 m',
          'De pomares e hortas com alimentos: ≥ 10 m',
          'De rios e ribeiros: ≥ 30 m (zona de proteção)',
          'De lagoa ou lago: ≥ 50 m',
          'Em declive — considerar o sentido do escoamento das águas subterrâneas',
          'Sob entrada de viaturas ou estacionamento: profundidade > 1 m com tampa reforçada'
        ] },
        { kind: 'warning', text: 'Se a fossa ou o poço de infiltração estiver demasiado perto do furo, a água potável pode contaminar‑se. É um risco sério: pode haver fiscalização da GNR (patrulha ambiental SEPNA) e da APA (agência do ambiente), coimas, selagem do furo e custos de remediação de 5 000-30 000 €.' }
      ]
    },
    {
      id: 'process',
      title: 'Processo de instalação — passo a passo',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Projeto (para construção nova ou reabilitação relevante)',
            content: [
              { kind: 'checklist', items: [
                'Engenheiro civil: o projeto de saneamento integra o projeto arquitetónico',
                'Estudo geotécnico: que tipo de solo — permeável? argila ou areia?',
                'Dimensionamento: tipo, capacidade, distâncias, campo de filtração',
                'Custo da componente de projeto: 500-1 500 €'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Obtenção de licença na Câmara Municipal',
            content: [
              { kind: 'paragraph', text: 'Através do portal online PEDU ou presencialmente na Câmara Municipal. Apresentar:' },
              { kind: 'checklist', items: [
                'Caderneta predial (registo matricial do imóvel)',
                'Projeto de saneamento + memória descritiva (memorial descritivo)',
                'Estudo geotécnico',
                'Implantação no terreno',
                'Taxa: 100-500 € (varia muito consoante o município)'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Instalação',
            content: [
              { kind: 'checklist', items: [
                'Encontre empreiteiro certificado de saneamento',
                'Movimentos de terras: aluguer de escavadora + mão de obra = 50-100 €/hora',
                'Transporte da fossa ou ETAR para o terreno: tenha em conta a largura do acesso',
                'Ligação ao sistema de drenagem da casa',
                'Aterro e arranjos exteriores',
                'Custo total dos trabalhos: 1 500-15 000 €'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Vistoria e licença de utilização',
            content: [
              { kind: 'paragraph', text: 'Após a instalação, a Câmara Municipal pode enviar um inspetor para verificar a conformidade com o projeto. Em caso favorável, é emitida a licença de utilização. Sem ela, a casa não é juridicamente considerada concluída: não pode ser vendida, nem obter Alojamento Local, e o banco exigirá essa licença para a hipoteca.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'maintenance',
      title: 'Manutenção — custos regulares',
      content: [
        { kind: 'paragraph', text: 'A fossa deve ser limpa periodicamente. Caso contrário — sobrecarga, odores, contaminação do solo.' },
        { kind: 'checklist', items: [
          'Fossa clássica: limpeza a cada 1–3 anos, depende da carga',
          'Preço da limpeza: 80-200 € (camião limpa‑fossas recolhe e entrega na estação municipal de tratamento)',
          'Empresas locais: procure “limpeza de fossa séptica” + nome da cidade — muitos pequenos operadores',
          'ETAR: verificação visual dos indicadores a cada seis meses',
          'Contrato de manutenção da ETAR: 100-300 €/ano com empresa especializada',
          'Substituição de bio‑starters (bactérias para lamas ativas): 30-50 € a cada 1–2 anos',
          'Eletricidade para arejador da ETAR: 30-100 €/ano'
        ] },
        { kind: 'paragraph', text: 'Sinais de sobrecarga: odor a sulfureto no quintal, escoamento lento em lavatórios e sanitas, relva húmida sobre o poço de infiltração.' }
      ]
    },
    {
      id: 'al-business',
      title: 'Alojamento Local — requisitos específicos',
      content: [
        { kind: 'paragraph', text: 'Para Alojamento Local (arrendamento turístico legal), os requisitos de saneamento são mais exigentes:' },
        { kind: 'checklist', items: [
          'ETAR obrigatória (a fossa clássica não é suficiente)',
          'Dimensionamento para a ocupação máxima de hóspedes — normalmente com margem de 1,5x',
          'Contrato de manutenção obrigatório',
          'Inspeção anual pelo município ou DGS (autoridade de saúde)',
          'Em caso de problemas — a licença de AL é suspensa até resolução',
          'Em zonas sensíveis (litoral do Algarve, parte do Alentejo) — esterilização UV obrigatória antes da descarga'
        ] }
      ]
    },
    {
      id: 'subsidies',
      title: 'Subsídios e apoios',
      content: [
        { kind: 'checklist', items: [
          'Subsídios municipais para substituir fossas clássicas por ETAR — informe‑se na sua autarquia, sobretudo no Algarve e Alentejo',
          'Dedução no IRS por obras na habitação própria permanente: 30% até 1 500 €/ano',
          'Programa Saneamento Rural — programa estatal para zonas remotas',
          'Apoio da APA para transição para tratamento biológico em zonas sensíveis',
          'Comunidade de Energia Renovável (CER): pacotes com painéis solares frequentemente incluem modernização do saneamento'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Coimas por infrações',
      content: [
        { kind: 'checklist', items: [
          'Fossa sem licença: 250-2 500 €',
          'Fossa com incumprimento das distâncias (por exemplo, junto ao furo): 1 000-10 000 € + custos de remediação',
          'Descarga direta em rio ou mar: 5 000-37 500 € + procedimento criminal',
          'Alojamento Local sem saneamento adequado: 1 500-7 500 € + suspensão da licença',
          'Fossa abandonada, contaminação de águas subterrâneas: 1 000-37 500 € + custos de limpeza (podem atingir 30 000 €+)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Fossa séptica clássica', amountEURMin: 1500, amountEURMax: 4000, note: 'Depósito + campo de filtração + montagem' },
    { label: 'ETAR compacta', amountEURMin: 5000, amountEURMax: 15000, note: 'Com instalação' },
    { label: 'Projeto de engenharia', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Estudo geotécnico', amountEURMin: 300, amountEURMax: 800 },
    { label: 'Licença municipal', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Limpeza da fossa', amountEURMin: 80, amountEURMax: 200, note: 'A cada 1–3 anos' },
    { label: 'Contrato de manutenção da ETAR', amountEURMin: 100, amountEURMax: 300, note: 'Por ano' },
    { label: 'Eletricidade para ETAR', amountEURMin: 30, amountEURMax: 100, note: 'Por ano' }
  ],
  sources: [
    { title: 'APA — Saneamento de águas residuais', url: 'https://apambiente.pt/agua/saneamento-de-aguas-residuais', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto Regulamentar 23/95 — Distribuição de Água e Drenagem', url: 'https://dre.pt/dre/detalhe/decreto-regulamentar/23-1995-431007', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 152/97 — tratamento de águas residuais urbanas', url: 'https://dre.pt/dre/detalhe/decreto-lei/152-1997-217470', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ERSAR — Entidade Reguladora dos Serviços de Águas e Resíduos', url: 'https://www.ersar.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
