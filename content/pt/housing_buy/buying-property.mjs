export default {
  editorialVoice: 'hackportugal',
  id: 'buying-property',
  categoryId: 'housing_buy',
  title: 'Compra de imóvel em Portugal — passo a passo',
  tldr: 'Estrangeiros podem comprar imóveis sem restrições. Percurso: NIF → pesquisa → CPCV + sinal 10% → financiamento/verificação jurídica → escritura no notário → registo. Impostos: **IMT** — escala marginal progressiva com abatimentos (para habitação própria e permanente — 0% até determinado limiar, depois as taxas aumentam por escalões até uma taxa fixa superior); **IS 0,8%**. Custos totais 8-12% além do preço. Importante: desde 7 de outubro de 2023 (Lei 56/2023), o Golden Visa através da compra de imóveis residenciais **foi abolido** — esta via para autorização de residência já não está disponível para novos pedidos.\n\n**Benefício para jovens até 35 anos** foi introduzido pelo **Decreto-Lei 48-A/2024** (não pelo DL 44/2024).',
  tags: ['compra', 'imóvel', 'escritura', 'imt'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'preparation',
      title: 'Preparação',
      content: [
        { kind: 'checklist', items: [
          'Obter NIF',
          'Abrir conta num banco português (ActivoBank, Millennium, Caixa)',
          'Definir o orçamento (preço + ~10% de despesas)',
          'Decidir: pagamento a pronto ou crédito habitação (ver guia separado)',
          'Escolher um advogado — recomendado para não residentes, 500-2000 €'
        ]}
      ]
    },
    {
      id: 'search',
      title: 'Pesquisa',
      content: [
        { kind: 'checklist', items: [
          'Idealista.pt — principal agregador',
          'Imovirtual.com',
          'Casa Sapo, Supercasa, ERA, Century 21',
          'OLX Imóveis — muitas vezes de proprietários',
          'Mediadores imobiliários — a comissão é paga pelo vendedor (normalmente 5%)'
        ]},
        { kind: 'warning', text: 'Preços em 2026 em Lisboa: 4 000-8 000 €/m² no centro, 3 000-5 000 €/m² nos subúrbios. Algarve: 2 500-6 000 €/m². Norte (Braga, Coimbra): 1 500-3 000 €/m².' }
      ]
    },
    {
      id: 'due-diligence',
      title: 'Verificação jurídica (antes de assinar)',
      content: [
        { kind: 'checklist', items: [
          'Certidão Permanente Imóvel — situação da propriedade, ónus',
          'Caderneta Predial Urbana — ficha fiscal',
          'Licença de utilização — a prática após o Simplex Urbanístico mudou (a apresentação para a escritura já não é exigida nos moldes anteriores), mas o estado de utilização continua a dever ser verificado pelo comprador',
          'Ficha Técnica da Habitação — para construções posteriores a 2004; a apresentação para a escritura também foi simplificada, mas o conteúdo é útil para o comprador',
          'Certificado Energético (CE) — certificado energético (obrigatório)',
          'Ausência de dívidas ao condomínio',
          'Ausência de dívidas de IMI'
        ]},
        { kind: 'paragraph', text: 'Tudo isto é verificado pelo advogado — cerca de 1-2 semanas.' }
      ]
    },
    {
      id: 'cpcv',
      title: 'CPCV (Contrato Promessa de Compra e Venda)',
      content: [
        { kind: 'paragraph', text: 'Contrato preliminar. Mais forte do que uma simples proposta. Vincula ambas as partes.' },
        { kind: 'checklist', items: [
          'Partes + NIF',
          'Descrição do imóvel + número matricial',
          'Preço + forma de pagamento',
          'Sinal 10-20% — entregue ao vendedor',
          'Prazo até à escritura (normalmente 30-90 dias)',
          'Penalizações por rescisão: se o comprador desistir — perde o sinal; se o vendedor desistir — devolve o sinal × 2'
        ]}
      ]
    },
    {
      id: 'escritura',
      title: 'Escritura (ato notarial)',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Preparação dos documentos no notário', content: [
            { kind: 'paragraph', text: 'O notário recolhe certidões atualizadas, verifica as partes e prepara a minuta.' }
          ]},
          { id: 'e2', title: '2. Pagamento dos impostos ANTES da escritura', content: [
            { kind: 'checklist', items: [
              'IMT — através do Portal das Finanças, comprovativo na escritura',
              'IS 0,8% — automaticamente',
              'Em caso de crédito habitação — IS sobre o crédito 0,6%'
            ]}
          ]},
          { id: 'e3', title: '3. Assinatura', content: [
            { kind: 'paragraph', text: 'No notário. Ambas as partes + intérprete, se necessário. Pagamento ao vendedor por cheque bancário / transferência. O banco disponibiliza os fundos do crédito habitação.' }
          ]},
          { id: 'e4', title: '4. Registo na Conservatória do Registo Predial', content: [
            { kind: 'paragraph', text: 'Normalmente é feito pelo notário por via eletrónica.\n\n**O direito de propriedade é transmitido** por título válido de compra e venda (escritura pública/documento particular autenticado); o registo predial é criticamente importante para a oponibilidade perante terceiros — sem ele, você não está protegido contra negócios posteriores do vendedor. Registe de imediato.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'Depois da compra',
      content: [
        { kind: 'checklist', items: [
          'Informar as Finanças da alteração de morada (se for a habitação principal)',
          'Passar os serviços de utilidade pública para o seu nome (EDP, Águas, gás)',
          'O seguro da habitação é obrigatório se houver crédito habitação',
          'IMI (imposto municipal) — para urban residential **0,3–0,45% do VPT** (0,8% — para a antiga taxa rural); a taxa é definida pela Câmara Municipal. O pagamento em prestações (1/2/3 vezes por ano) depende do montante',
          'Se planeia arrendar — registo nas Finanças + possivelmente licença AL para arrendamento de curta duração'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IMT — para habitação própria e permanente (continente)', note: 'escala marginal progressiva com abatimentos até determinado limiar (limiar de base a 0%), depois taxas crescentes; acima do limiar superior — taxa fixa. Valores exatos para 2026 — ver AT/CIMT' },
    { label: 'IMT — para habitação secundária/outra residential', note: 'os mesmos escalões, mas sem o primeiro limiar de 0%; começa em 1%' },
    { label: 'Benefício para jovens até 35 anos — habitação principal', amountEUR: 0, note: 'IMT+IS 0% ao abrigo do **Decreto-Lei 48-A/2024** até determinado limiar de preço; condições (residência, ausência de propriedade anterior, habitação principal) — verificar no texto atualizado' },
    { label: 'IMT para compradores de paraísos fiscais', amountEUR: 0, note: 'taxa fixa de 10% independentemente do valor' },
    { label: 'IS (Imposto do Selo)', amountEUR: 0, note: '0,8% do valor (para jovens até 35 anos dentro do benefício = 0%)' },
    { label: 'Escritura + notário', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Registo', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Advogado', amountEURMin: 500, amountEURMax: 2000 },
    { label: 'Seguro da habitação anual', amountEURMin: 150, amountEURMax: 500 },
    { label: 'IMI anual (urban residential)', amountEURMin: 100, amountEURMax: 3000, note: '0,3–0,45% VPT; taxa da Câmara Municipal. Pagamento 1/2/3 vezes por ano consoante o montante' }
  ],
  timelineDaysMin: 45,
  timelineDaysMax: 120,
  sources: [
    { title: 'Portal das Finanças — IMT', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Justiça.gov.pt — Pedir registo predial', url: 'https://justica.gov.pt/Servicos/Pedir-registo-predial', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'ePortugal — Comprar casa', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/comprar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ADENE — Certificado Energético', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
