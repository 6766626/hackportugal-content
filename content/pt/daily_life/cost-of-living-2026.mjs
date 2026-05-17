export default {
  editorialVoice: 'hackportugal',
  id: 'cost-of-living-2026',
  categoryId: 'daily_life',
  title: 'Custo de vida em Portugal em 2026 — análise completa',
  tldr: 'Para uma pessoa viver confortavelmente em Lisboa ou no Porto em 2026: 1800-2800 €/mês. Na província (Coimbra, Braga, Alentejo): 1100-1700 €. Família de 4 pessoas em Lisboa: 3500-5500 €. A principal despesa é a renda (40-60% do orçamento). Salário mínimo em Portugal a partir de 01.01.2026: 920 €/mês (×14 = 12 880 €/ano).',
  tags: ['custo', 'orçamento', 'salário'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'reference',
      title: 'Números de referência 2026',
      content: [
        { kind: 'checklist', items: [
          '💰 Salário mínimo em Portugal: 920 €/mês × 14 = 12 880 €/ano',
          '💰 Salário médio líquido: ~1300 €/mês (dados INE 2026)',
          '💰 Salário médio bruto: ~1800 €/mês',
          '💰 IAS (Indexante dos Apoios Sociais): 537,13 €/mês (Portaria 480-A/2025/1 de 30.12.2025, em vigor desde 01.01.2026; +2,8% face a 2025)',
          '💰 Limiar de pobreza: ~570 €/mês (60% da mediana segundo o INE 2026)',
          '💰 Mínimo para o visto D7: normalmente 1× SMN = 920 €/mês para o requerente, +50% SMN = 460 € para o segundo adulto, +30% SMN = 276 € por criança (Portaria 1563/2007). Os consulados frequentemente exigem prova de rendimento passivo regular e/ou fundos para 12 meses',
          '💰 Mínimo para o visto D8: 4× SMN = 3 680 €/mês (rendimento de trabalho remoto; SMN — salário mínimo de 920 €)'
        ]}
      ]
    },
    {
      id: 'housing',
      title: 'Habitação — a principal despesa',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Arrendamento T1 (1 quarto)', content: [
            { kind: 'checklist', items: [
              'Lisboa, centro: 1400-2500 €/mês',
              'Lisboa, periferia (Almada, Amadora): 800-1400 €',
              'Cascais/Oeiras: 1200-2000 €',
              'Porto, centro: 900-1400 €',
              'Porto, periferia (V.N.Gaia): 700-1100 €',
              'Coimbra: 550-850 €',
              'Braga: 500-800 €',
              'Faro/Algarve (no inverno): 700-1200 €',
              'Pequenas cidades do Alentejo: 350-600 €'
            ]}
          ]},
          { id: 'h2', title: 'Serviços públicos', content: [
            { kind: 'checklist', items: [
              'Eletricidade: 80-200 €/mês (depende muito da época; no inverno, com aquecedores, pode ser o dobro)',
              'Gás (natural / botijas): 30-70 €/mês',
              'Água + saneamento: 15-40 €/mês',
              'Internet (100-500 Mbit/s) + TV + telemóvel: 35-60 €/mês (tarifário em pacote)',
              'Condomínio: normalmente é pago pelo proprietário; o arrendatário só paga se estiver expressamente previsto no contrato de arrendamento. Tipicamente 20-80 €/mês, prédios com elevador/garagem/piscina são mais caros',
              'IMI (apenas para proprietários): 100-1000 €/ano. Taxa de 0,3-0,45% do VPT para urban property no mainland, definida anualmente pelo município (Lisboa frequentemente 0,3%; Porto normalmente low/mid; Madeira/Açores confirmar no município concreto). A taxa exacta está na deliberação da Câmara Municipal e no Portal das Finanças'
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
          '☕ Café num café: 0,70-1,20 €',
          '🥐 Pastel de nata: 1,20-2 €',
          '🍽️ Almoço «menu do dia» num café: 8-15 €',
          '🍽️ Restaurante de gama média: 15-30 €/pessoa',
          '🍽️ Restaurante caro: 40-80 €/pessoa',
          '🍷 Garrafa de bom vinho no supermercado: 4-8 €',
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
          '🏥 SNS: após obter o Número de Utente com residência legal, a maioria das consultas e cuidados programados é gratuita. Urgência sem referenciação pela SNS24/médico de família pode ter taxa moderadora (se não houver internamento/isenção ao abrigo do DL 52/2022)',
          '💊 Medicamentos sujeitos a receita através do SNS: desconto de 10-90% consoante a categoria de comparticipação',
          '🩺 Seguro de saúde privado: 25-80 €/mês por adulto',
          '🩺 Seguro de saúde privado familiar: 120-200 €/mês',
          '🩺 Consulta privada sem seguro: 50-100 €',
          '🦷 Dentista (não através do SNS): 30-150 € por consulta, mais para tratamentos complexos',
          '👓 Oftalmologista + óculos: 80-250 €'
        ]}
      ]
    },
    {
      id: 'education',
      title: 'Educação',
      content: [
        { kind: 'checklist', items: [
          '🧒 Creche pública (0-3 anos): com a Creche Feliz, muitas vagas na rede pública/social e em privadas aderentes são gratuitas para crianças elegíveis, mas faltam vagas; fora do programa — normalmente 0-400 €/mês consoante o rendimento',
          '🧒 Creches privadas: 400-1200 €/mês',
          '🏫 Jardim de Infância público (3-6 anos): gratuito',
          '🏫 Escola privada portuguesa: 3000-15 000 €/ano',
          '🌍 Escolas internacionais (British, French, German): 8 000-25 000 €/ano',
          '🎓 Universidade pública para portugueses/UE e estudantes equiparados: ~700-1300 €/ano',
          '🎓 Não UE ao abrigo do estatuto de estudante internacional: ~2000-7000 €/ano. Residentes legais podem ser equiparados a national/EU apenas se cumprirem as condições do DL 36/2014 (normalmente residência >2 anos em 1 de janeiro do ano de ingresso, com excepções)',
          '🎓 Universidades privadas: 3500-15 000 €/ano'
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
          { id: 'b1', title: 'Pessoa sozinha em Lisboa, económico', content: [
            { kind: 'checklist', items: [
              'Arrendamento T0/quarto: 700 €',
              'Serviços públicos + internet: 120 €',
              'Alimentação: 300 €',
              'Transportes: 40 €',
              'Tudo o resto: 200 €',
              'TOTAL: ~1360 €/mês'
            ]}
          ]},
          { id: 'b2', title: 'Pessoa sozinha em Lisboa, nível médio', content: [
            { kind: 'checklist', items: [
              'Arrendamento T1: 1300 €',
              'Serviços públicos + internet: 160 €',
              'Alimentação + restaurantes: 500 €',
              'Transportes + Uber: 80 €',
              'Ginásio, lazer: 200 €',
              'Seguro de saúde privado: 50 €',
              'Tudo o resto: 300 €',
              'TOTAL: ~2600 €/mês'
            ]}
          ]},
          { id: 'b3', title: 'Família: 2 adultos + 2 crianças, Lisboa', content: [
            { kind: 'checklist', items: [
              'Arrendamento T3: 2000 €',
              'Serviços públicos + internet + telecomunicações: 220 €',
              'Alimentação: 800 €',
              'Transportes (2 Navegante + Uber): 120 €',
              'Seguro de saúde privado familiar: 180 €',
              'Escola (se for pública): 100 €',
              'Lazer, roupa: 400 €',
              'Ginásio e actividades das crianças: 200 €',
              'TOTAL: ~4000 €/mês (sem escola internacional)'
            ]}
          ]},
          { id: 'b4', title: 'Reformado D7 em Cascais', content: [
            { kind: 'checklist', items: [
              'Arrendamento T1 em Cascais: 1500 €',
              'Serviços públicos: 180 €',
              'Alimentação + restaurantes: 500 €',
              'Transportes + pequenas despesas com automóvel: 150 €',
              'Seguro Médicis: 70 €',
              'Lazer, actividades: 300 €',
              'TOTAL: ~2700 €/mês'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'taxes',
      title: 'Impostos — quanto consomem',
      content: [
        { kind: 'paragraph', text: 'Bruto e líquido — em Portugal a diferença é significativa. Para um bruto de 2000 €/mês:' },
        { kind: 'checklist', items: [
          'IRS (imposto sobre o rendimento): ~11% em média (escala 11,97-48% em 9 escalões — Orçamento do Estado 2026)',
          'Segurança Social (contribuições sociais): 11%',
          'Líquido: ~1560 € (ou seja, o empregador paga 2000 € brutos e ainda paga 23,75% de TSU por cima — custo real ~2475 €)',
          'Estatuto IFICI (se aplicável): taxa fixa de 20% sobre rendimento qualificado',
          'Trabalhador independente (recibos verdes): no regime simplificado de IRS, normalmente é tributada uma parte do rendimento segundo coeficientes (frequentemente 75% para serviços, depende do CAE/CIRS art. 31). Segurança Social: 21,4% sobre o rendimento relevante (normalmente 70% dos serviços), declarações trimestrais; a primeira abertura de actividade normalmente dá isenção até 12 meses. IVA art. 53: isenção com volume de negócios até 15 000 €/ano',
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
