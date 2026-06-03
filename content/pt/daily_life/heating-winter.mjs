export default {
  editorialVoice: 'hackportugal',
  id: 'heating-winter',
  categoryId: 'daily_life',
  title: 'Como sobreviver ao inverno em Portugal — aquecimento e humidade',
  tldr: 'O inverno em Portugal é traiçoeiro. Muitas vezes, a casa está mais fria do que a rua — NÃO há aquecimento central na maioria das habitações. As paredes têm mau isolamento, a humidade ronda os 80%. Opções: caldeira a gás, ar condicionado com aquecimento, aquecedores eléctricos, salamandra a pellets. A factura da electricidade em Janeiro pode duplicar.',
  tags: ['inverno', 'aquecimento', 'humidade'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'reality',
      title: 'A realidade do inverno português',
      content: [
        { kind: 'paragraph', text: 'O Norte da Europa pensa «Portugal = calor todo o ano» — é um mito. Lisboa: +5-15°C, Porto: +2-12°C, norte: pode haver neve.' },
        { kind: 'paragraph', text: 'Mas o principal problema não é a temperatura, mas sim: 1) mau isolamento das casas (vidro simples, paredes finas), 2) ausência de aquecimento central, 3) humidade elevada → bolor.' }
      ]
    },
    {
      id: 'heating-options',
      title: 'Opções de aquecimento',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Caldeira a gás (caldeira) + radiadores', content: [
            { kind: 'paragraph', text: 'Para aquecimento por radiadores usa-se uma caldeira a gás (caldeira), não um esquentador (esquentador é um aquecedor instantâneo de água a gás apenas para água quente). É raro em edifícios antigos; em casas novas aparece com aquecimento por piso radiante/radiadores.' }
          ]},
          { id: 'h2', title: 'Ar condicionado com aquecimento / bomba de calor', content: [
            { kind: 'paragraph', text: 'Muito popular. Em termos de COP/eficiência energética, é normalmente mais eficiente do que o aquecimento eléctrico directo. Preço de instalação: 1 000-2 000 € por sistema split. É eficaz com frio moderado; com geadas fortes, a eficiência diminui.' }
          ]},
          { id: 'h3', title: 'Aquecedores eléctricos', content: [
            { kind: 'checklist', items: [
              'A óleo — 40-80 € no Continente/Leroy, seguros, mas lentos',
              'Convectores — rápidos, mas secam o ar',
              'Toalheiro eléctrico para a casa de banho — aquecimento localizado',
              'A principal desvantagem — a electricidade em Portugal é cara (~0,18 €/kWh), factura x2-3 no inverno'
            ]}
          ]},
          { id: 'h4', title: 'Salamandra a pellets', content: [
            { kind: 'paragraph', text: 'Salamandra a pellets de madeira. Popular em aldeias e casas de campo. Pellets: 4-7 € por saco de 15 kg.' }
          ]},
          { id: 'h5', title: 'Cobertor eléctrico (cobertor elétrico / manta elétrica)', content: [
            { kind: 'paragraph', text: 'Para a cama. 20-40 €. Económico. Em português: cobertor elétrico, manta elétrica ou aquece-camas (camareiro em Portugal significa empregado de mesa/funcionário de hotel).' }
          ]}
        ]}
      ]
    },
    {
      id: 'humidity',
      title: 'Combater a humidade',
      content: [
        { kind: 'checklist', items: [
          'Arejar os quartos de manhã durante 10-15 min, mesmo com frio intenso',
          'Desumidificador — um compressor normal de 10-20 l/dia custa geralmente 200-400 €; modelos baratos por 50-100 € são frequentemente pouco potentes',
          'Não secar roupa dentro de casa → bolor',
          'Verificar as janelas — condensação = bolor em um mês',
          'Produtos anti-bolor: Clorox Pulverizador, Fungishield',
          'Ventilação na casa de banho — mecânica ou natural — é crítica'
        ]}
      ]
    },
    {
      id: 'tariff',
      title: 'Electricidade — escolha da tarifa',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Fornecedores', content: [
            { kind: 'paragraph', text: 'EDP, Iberdrola, Galp, Endesa, Repsol — são os principais. Os preços são comparáveis em 2026.' }
          ]},
          { id: 'e2', title: 'Tarifas', content: [
            { kind: 'checklist', items: [
              'Simples — o mesmo preço 24/7',
              'Bi-horário — tarifas de dia e de noite (22:00-8:00)',
              'Tri-horário — 3 tarifas (ponta, cheias, vazio)',
              'Para aquecimento activo no inverno durante a noite — bi-horário compensa'
            ]}
          ]},
          { id: 'e3', title: 'Termo fixo', content: [
            { kind: 'paragraph', text: 'Potência contratada — potência contratual de 1.15 kVA, 3.45, 6.9, etc. Quanto maior a potência, mais alto o termo fixo. Para aquecedores, normalmente 3.45-6.9 é suficiente.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos para o primeiro ano',
      content: [
        { kind: 'checklist', items: [
          '🧥 Vista-se em casa de forma mais quente do que estava habituado no Distrito Federal Central/Rússia europeia/Bielorrússia',
          '🧊 Em Outubro já faz frio à noite — prepare o aquecedor com antecedência',
          '🏠 Ao arrendar — pergunte sobre as janelas: vidro duplo',
          '🧺 Uma máquina de secar roupa é recomendável (custa 300-700 €)',
          '💰 Preveja +100-200 €/mês para electricidade no inverno',
          '🌧️ Novembro-fevereiro — é a época mais chuvosa, prepare bom calçado',
          '☀️ Nos dias de inverno com sol — ABRA as cortinas, a casa aquece'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ERSE — Entidade Reguladora dos Serviços Energéticos', url: 'https://www.erse.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ADENE — Agência para a Energia', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGEG — Direção-Geral de Energia e Geologia', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
