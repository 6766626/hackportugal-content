export default {
  editorialVoice: 'hackportugal',
  id: 'buying-property',
  categoryId: 'housing_buy',
  title: 'Compra de imóveis em Portugal — passo a passo',
  tldr: 'Estrangeiros podem comprar imóveis sem restrições. Percurso: NIF → pesquisa → CPCV + sinal 10% → financiamento/verificação jurídica → escritura no notário → registo. Impostos: IMT — escala progressiva marginal com deduções (para habitação própria e permanente — 0% até determinado limiar, depois as taxas sobem por escalões até uma taxa máxima fixa); IS 0,8%. Despesas totais: 8-12% acima do preço. Importante: desde 7 de outubro de 2023 (Lei 56/2023), o Golden Visa através da compra de imóveis habitacionais foi eliminado — esta via de autorização de residência já não está disponível para novos pedidos.\n\nBenefício para jovens até 35 anos introduzido pelo Decreto-Lei 48-A/2024 (não pelo DL 44/2024).',
  tags: ['compra', 'imóveis', 'escritura', 'imt'],
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
          'Decidir: capitais próprios ou crédito habitação (ver guia separado)',
          'Escolher advogado — recomendado para não residentes, 500-2000 €'
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
          'Agentes imobiliários — a comissão é paga pelo vendedor (normalmente 5%)'
        ]},
        { kind: 'warning', text: 'Preços em 2026 em Lisboa: 4000-8000 €/m² no centro, 3000-5000 €/m² nos subúrbios. Algarve: 2500-6000 €/m². Norte (Braga, Coimbra): 1500-3000 €/m².' }
      ]
    },
    {
      id: 'due-diligence',
      title: 'Verificação jurídica (antes de assinar)',
      content: [
        { kind: 'checklist', items: [
          'Certidão Permanente Imóvel — estado da propriedade, ónus',
          'Caderneta Predial Urbana — ficha fiscal',
          'Licença de utilização — a prática após o Simplex Urbanístico mudou (a apresentação para a escritura já não é exigida nos mesmos termos), mas o comprador deve continuar a verificar o estatuto de utilização',
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
        { kind: 'paragraph', text: 'Acrescentar: «Para imóveis, o CPCV deve ser escrito; na prática, as assinaturas são feitas com reconhecimento presencial, e o advogado verifica os documentos necessários do imóvel antes da assinatura. Não assine um CPCV apenas por email/digitalização sem verificar a forma e os poderes do vendedor».' },
        { kind: 'checklist', items: [
          'Partes + NIF',
          'Descrição do imóvel + número matricial',
          'Preço + forma de pagamento',
          'Sinal 10-20% — entregue ao vendedor',
          'Prazo até à escritura (normalmente 30-90 dias)',
          'Penalizações por resolução: se o comprador desistir — perde o sinal; se o vendedor desistir — devolve o sinal × 2'
        ]}
      ]
    },
    {
      id: 'escritura',
      title: 'Escritura (ato notarial)',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Preparação dos documentos no notário', content: [
            { kind: 'paragraph', text: 'O notário reúne certidões atualizadas, verifica as partes e prepara a minuta.' }
          ]},
          { id: 'e2', title: '2. Pagamento dos impostos ANTES da escritura', content: [
            { kind: 'checklist', items: [
              'IMT — através do Portal das Finanças, comprovativo na escritura',
              'IS 0,8% — automaticamente',
              'Com crédito habitação — IS sobre o crédito habitação 0,6%'
            ]}
          ]},
          { id: 'e3', title: '3. Assinatura', content: [
            { kind: 'paragraph', text: 'No notário. Ambas as partes + tradutor, se necessário. Pagamento ao vendedor por cheque bancário / transferência. O banco disponibiliza os fundos do crédito habitação.' }
          ]},
          { id: 'e4', title: '4. Registo na Conservatória do Registo Predial', content: [
            { kind: 'paragraph', text: 'Normalmente é feito pelo notário por via eletrónica.\n\nO direito de propriedade transmite-se por título válido de compra e venda (escritura pública/documento particular autenticado); o registo predial é crucial para a oponibilidade perante terceiros — sem ele, não fica protegido contra negócios posteriores do vendedor. Registe sem demora.' }
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
          'Passar os serviços para o seu nome (EDP, Águas, gás)',
          'O seguro habitação é obrigatório se houver crédito habitação',
          'IMI (imposto municipal) — para urban residential 0,3–0,45% do VPT (0,8% — para a antiga taxa rural); a taxa é definida pela Câmara Municipal. O pagamento em prestações (1/2/3 vezes por ano) depende do montante',
          'Substituir por: «Para arrendamento de longa duração — contrato e registo nas Finanças. Para arrendamento turístico de curta duração, normalmente é necessário registo de Alojamento Local antes do início da atividade; verifique as restrições municipais, zonas de contenção/suspensão e regras do condomínio».'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IMT — para habitação própria e permanente (continente)', note: 'Acrescentar: «A base do IMT é o maior valor entre o preço declarado e o VPT (valor patrimonial tributário). Verifique o VPT na Caderneta Predial antes do CPCV».' },
    { label: 'IMT — para habitação secundária/outra habitação', note: 'os mesmos escalões, mas sem o primeiro limiar a 0%; começa em 1%' },
    { label: 'Benefício para jovens até 35 anos — habitação principal', amountEUR: 0, note: 'IMT+IS 0% ao abrigo do Decreto-Lei 48-A/2024 até determinado limiar de preço; condições (residência, ausência de propriedade anterior, habitação principal) — verificar no texto atualizado' },
    { label: 'IMT para compradores de jurisdições fiscais offshore', amountEUR: 0, note: 'taxa fixa de 10% independentemente do valor' },
    { label: 'IS (Imposto do Selo)', amountEUR: 0, note: 'Escrever: «IS 0,8% sobre a aquisição — normalmente sobre a mesma base que o IMT: o maior valor entre o preço declarado e o VPT».' },
    { label: 'Escritura + notário', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Registo', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Advogado', amountEURMin: 500, amountEURMax: 2000 },
    { label: 'Seguro habitação anual', amountEURMin: 150, amountEURMax: 500 },
    { label: 'IMI anual (urban residential)', amountEURMin: 100, amountEURMax: 3000, note: '0,3–0,45% do VPT; taxa definida pela Câmara Municipal. Pagamento 1/2/3 vezes por ano conforme o montante' }
  ],
  timelineDaysMin: 45,
  timelineDaysMax: 120,
  sources: [
    { title: 'Portal das Finanças — IMT', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Justiça.gov.pt — Pedir registo predial', url: 'https://justica.gov.pt/Servicos/Pedir-registo-predial', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'ePortugal — Comprar casa', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/comprar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ADENE — Certificado Energético', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
