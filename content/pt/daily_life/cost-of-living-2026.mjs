export default {
  editorialVoice: 'hackportugal',
  id: 'cost-of-living-2026',
  categoryId: 'daily_life',
  title: 'Custo de vida em Portugal em 2026 — análise completa',
  tldr: 'Para uma pessoa viver confortavelmente em Lisboa ou no Porto em 2026: 1 800-2 800 €/mês. No interior (Coimbra, Braga, Alentejo): 1 100-1 700 €. Família de 4 pessoas em Lisboa: 3 500-5 500 €. A principal despesa é a renda (40-60% do orçamento).\n\nSalário mínimo em Portugal desde 01.01.2026: 920 €/mês (×14 = 12 880 €/ano).',
  tags: ['custo', 'orçamento', 'salário'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'reference',
      title: 'Valores de referência 2026',
      content: [
        { kind: 'checklist', items: [
          '💰 Salário mínimo em Portugal: 920 €/mês × 14 = 12 880 €/ano',
          '💰 Salário médio líquido: ~1 300 €/mês (dados INE 2026)',
          '💰 Salário médio bruto: ~1 800 €/mês',
          '💰 IAS (Indexante dos Apoios Sociais): 537,13 €/mês (Portaria 480-A/2025/1 de 30.12.2025, em vigor desde 01.01.2026; +2,8% face a 2025)',
          '💰 Limiar de pobreza: ~570 €/mês (60% da mediana segundo o INE 2026)',
          '💰 Mínimo para o visto D7: normalmente 1× SMN = 920 €/mês para o requerente, +50% SMN = 460 € para o segundo adulto, +30% SMN = 276 € por criança (Portaria 1563/2007). Os consulados exigem frequentemente prova de rendimento passivo regular e/ou fundos para 12 meses',
          '💰 Mínimo para o visto D8: 4× SMN = 3 680 €/mês (rendimento de trabalho remoto; SMN — salário mínimo 920 €)'
        ]}
      ]
    },
    {
      id: 'housing',
      title: 'Habitação — a principal despesa',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Renda T1 (1 quarto)', content: [
            { kind: 'checklist', items: [
              'Lisboa, centro: 1 400-2 500 €/mês',
              'Lisboa, subúrbios (Almada, Amadora): 800-1 400 €',
              'Cascais/Oeiras: 1 200-2 000 €',
              'Porto, centro: 900-1 400 €',
              'Porto, subúrbios (V.N.Gaia): 700-1 100 €',
              'Coimbra: 550-850 €',
              'Braga: 500-800 €',
              'Faro/Algarve (no inverno): 700-1 200 €',
              'Pequenas cidades do Alentejo: 350-600 €'
            ]}
          ]},
          { id: 'h2', title: 'Serviços públicos', content: [
            { kind: 'checklist', items: [
              'Eletricidade: 80-200 €/mês (depende muito da estação; no inverno, com aquecedores, pode ser 2 vezes mais)',
              'Gás (natural / botijas): 30-70 €/mês',
              'Água + saneamento: 15-40 €/mês',
              'Internet (100-500 Mbit) + TV + telemóvel: 35-60 €/mês (pacote)',
              'Condomínio: normalmente é pago pelo proprietário; o inquilino só paga se estiver expressamente indicado no contrato de arrendamento. Tipicamente 20-80 €/mês, mais caro em prédios com elevador/garagem/piscina',
              'IMI (apenas para proprietários): 100-1 000 €/ano. Taxa de 0,3-0,45% do VPT para urban property no mainland, definida anualmente pelo município (Lisboa frequentemente 0,3%; Porto normalmente low/mid; Madeira/Açores verificar no município específico). A taxa exacta consta da deliberação da Câmara Municipal e do Portal das Finanças'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'food',
      title: 'Alimentação',
      content: [
        { kind: 'checklist', items: [
          '🛒 Supermercado para 1 pessoa: 180-300 €/mês',
          '🛒 Para uma família de 4 pessoas: 450-800 €/mês',
          '☕ Café numa pastelaria/café: 0,70-1,20 €',
          '🥐 Pastel de nata: 1,20-2 €',
          '🍽️ Almoço «menu do dia» num café: 8-15 €',
          '🍽️ Restaurante de gama média: 15-30 €/pessoa',
          '🍽️ Restaurante caro: 40-80 €/pessoa',
          '🍷 Garrafa de bom no supermercado: 4-8 €',
          '🍺 Cerveja num bar: 1,50-3 €'
        ]}
      ]
    },
    {
      id: 'transport',
      title: 'Transportes',
      content: [
        { kind: 'checklist', items: [
          '🚇 Lisboa Navegante (metro + autocarro + comboios): 40 €/mês',
          '🚇 Porto Andante: 30 €/mês municipal, 40 €/mês metropolitan',
          '🎫 Viagem simples de metro: 1,65-1,85 €',
          '🚕 Uber/Bolt, viagem curta: 4-8 €',
          '🚕 Uber/Bolt, aeroporto-centro: 10-20 €',
          '🚆 Lisboa-Porto Alfa Pendular: 25-40 €',
          '🚌 Lisboa-Porto FlixBus: 5-25 €',
          '⛽ Gasolina: 1,70-1,90 €/l',
          '🚗 Seguro automóvel: 300-700 €/ano',
          '🚗 IUC (imposto automóvel): 30-500 €/ano',
          '🅿️ Estacionamento no centro: 2-5 €/hora, 80-150 €/mês para residentes'
        ]}
      ]
    },
    {
      id: 'healthcare',
      title: 'Saúde',
      content: [
        { kind: 'checklist', items: [
          '🏥 SNS: depois de obter o Número de Utente, com residência legal, a maioria das consultas e dos cuidados programados é gratuita. Urgência sem referenciação do SNS24/médico de família pode ter taxa moderadora (se não houver internamento/excepção ao abrigo do DL 52/2022)',
          '💊 Medicamentos sujeitos a receita através do SNS: comparticipação de 10-90%, consoante a categoria de reembolso',
          '🩺 Seguro de saúde privado: 25-80 €/mês por adulto',
          '🩺 Seguro de saúde privado familiar: 120-200 €/mês',
          '🩺 Consulta privada sem seguro: 50-100 €',
          '🦷 Dentista (fora do SNS): 30-150 € por consulta, mais em tratamentos complexos',
          '👓 Oftalmologista + óculos: 80-250 €'
        ]}
      ]
    },
    {
      id: 'education',
      title: 'Educação',
      content: [
        { kind: 'checklist', items: [
          '🧒 Creche pública (0-3 anos): com a Creche Feliz, muitos lugares na rede pública/social e em privadas aderentes são gratuitos para crianças eligible, mas faltam vagas; fora do programa — normalmente 0-400 €/mês consoante o rendimento',
          '🧒 Creches privadas: 400-1 200 €/mês',
          '🏫 Jardim de Infância público (3-6 anos): gratuito',
          '🏫 Escola privada portuguesa: 3 000-15 000 €/ano',
          '🌍 Escolas internacionais (British, French, German): 8 000-25 000 €/ano',
          '🎓 Universidade pública para portugueses/EU e estudantes equiparados: ~700-1 300 €/ano',
          '🎓 Non-EU ao abrigo do estatuto de estudante internacional: ~2 000-7 000 €/ano. Residentes legais podem ser equiparados a national/EU apenas se cumprirem as condições do DL 36/2014 (normalmente residência >2 anos em 1 de janeiro do ano de ingresso, com excepções)',
          '🎓 Universidades privadas: 3 500-15 000 €/ano'
        ]}
      ]
    },
    {
      id: 'leisure',
      title: 'Lazer',
      content: [
        { kind: 'checklist', items: [
          '🎬 Cinema: 6-10 € por bilhete de adulto',
          '🎭 Teatro: 15-35 €',
          '🎵 Concerto: 25-80 €',
          '🏋️ Ginásio (económico): 20-30 €/mês',
          '🏋️ Ginásio premium: 60-100 €/mês',
          '🏊 Piscina municipal: 25-40 €/mês',
          '🎾 Campo de padel: 10-15 €/hora',
          '📺 Serviços de streaming (Netflix+Spotify+etc.): 25-45 €/mês'
        ]}
      ]
    },
    {
      id: 'budgets',
      title: 'Orçamentos típicos',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Pessoa só em Lisboa, económico', content: [
            { kind: 'checklist', items: [
              'Renda T0/quarto: 700 €',
              'Serviços públicos + internet: 120 €',
              'Alimentação: 300 €',
              'Transportes: 40 €',
              'Tudo o resto: 200 €',
              'TOTAL: ~1 360 €/mês'
            ]}
          ]},
          { id: 'b2', title: 'Pessoa só em Lisboa, nível médio', content: [
            { kind: 'checklist', items: [
              'Renda T1: 1 300 €',
              'Serviços públicos + internet: 160 €',
              'Alimentação + restaurantes: 500 €',
              'Transportes + Uber: 80 €',
              'Ginásio, lazer: 200 €',
              'Seguro privado: 50 €',
              'Tudo o resto: 300 €',
              'TOTAL: ~2 600 €/mês'
            ]}
          ]},
          { id: 'b3', title: 'Família: 2 adultos + 2 crianças, Lisboa', content: [
            { kind: 'checklist', items: [
              'Renda T3: 2 000 €',
              'Serviços públicos + internet + comunicações: 220 €',
              'Alimentação: 800 €',
              'Transportes (2 Navegante + Uber): 120 €',
              'Seguro privado familiar: 180 €',
              'Escola (se for pública): 100 €',
              'Lazer, roupa: 400 €',
              'Ginásio e actividades das crianças: 200 €',
              'TOTAL: ~4 000 €/mês (sem escola internacional)'
            ]}
          ]},
          { id: 'b4', title: 'Reformado D7 em Cascais', content: [
            { kind: 'checklist', items: [
              'Renda T1 em Cascais: 1 500 €',
              'Serviços públicos: 180 €',
              'Alimentação + restaurantes: 500 €',
              'Transportes + pequenas despesas com automóvel: 150 €',
              'Seguro Médicis: 70 €',
              'Lazer, actividades: 300 €',
              'TOTAL: ~2 700 €/mês'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'taxes',
      title: 'Impostos — quanto consomem',
      content: [
        { kind: 'paragraph', text: 'Bruto e líquido — em Portugal a diferença é significativa. Para um bruto de 2 000 €/mês:' },
        { kind: 'checklist', items: [
          'IRS (imposto sobre o rendimento): ~11% em média (escalões de 11,97-48% em 9 intervalos — Orçamento do Estado 2026)',
          'Segurança Social (contribuições sociais): 11%',
          'Líquido: ~1 560 € (ou seja, o empregador paga 2 000 € brutos e ainda paga 23,75% de TSU por cima — custo real ~2 475 €)',
          'Estatuto IFICI (se for aplicável): taxa fixa de 20% sobre rendimento qualificado',
          'Trabalhador independente (recibos verdes): no regime simplificado de IRS, normalmente é tributada parte do rendimento através de coeficientes (frequentemente 75% para serviços, depende do CAE/CIRS art. 31). Segurança Social: 21,4% sobre o rendimento relevante (normalmente 70% dos serviços), declarações trimestrais; a primeira abertura de actividade normalmente dá isenção até 12 meses. IVA art. 53: isenção para volume de negócios até 15 000 €/ano',
          'IVA mainland: 23% standard, 13% intermediate, 6% reduced. Madeira/Açores — taxas regionais reduzidas. Nos restaurantes, parte da comida é 13%, mas álcool e muitas bebidas são normalmente 23%'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'INE — Instituto Nacional de Estatística', url: 'https://www.ine.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — estatísticas de preços', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (portal fiscal) — taxas de IRS 2026', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — taxas 2026', url: 'https://www.seg-social.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
