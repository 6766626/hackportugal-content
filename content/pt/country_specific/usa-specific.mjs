export default {
  editorialVoice: 'hackportugal',
  id: 'usa-specific',
  categoryId: 'country_specific',
  title: 'Americanos em Portugal — FATCA e dupla tributação',
  tldr: 'Os EUA e Portugal têm uma convenção para evitar a dupla tributação. Mas os EUA tributam os cidadãos em todo o mundo com base no princípio da tributação por cidadania — a FATCA obriga os bancos portugueses a comunicar informação. As declarações ao IRS dos EUA e em Portugal têm de ser entregues a ambos os países. O FBAR (>$10k em contas estrangeiras) é obrigatório.',
  audience: { countryCodes: ['US'] },
  tags: ['eua', 'fatca', 'impostos', 'dupla'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'tax-basics',
      title: 'Noções básicas de tributação',
      content: [
        { kind: 'paragraph', text: 'Os EUA são um dos poucos países que tributam os cidadãos em todo o mundo, independentemente da residência. A convenção fiscal entre Portugal e os EUA de 1994 ajuda a evitar a dupla tributação, mas não dispensa a declaração.' },
        { kind: 'checklist', items: [
          'Se você for residente fiscal em Portugal (>183 dias) — Portugal tributa todo o rendimento mundial',
          'Enquanto cidadão dos EUA — o IRS dos EUA também exige declarações (Form 1040 + Schedule B)',
          'Exclusão de rendimento auferido no estrangeiro (Foreign Earned Income Exclusion, FEIE) — $132 900 para 2026 (2025: $130 000). O montante é indexado anualmente; o valor actualizado está em irs.gov',
          'Crédito de imposto estrangeiro (Foreign Tax Credit, FTC) — crédito pelo imposto pago em Portugal contra o imposto dos EUA',
          'FBAR (FinCEN Form 114) — se todas as contas estrangeiras somadas forem > $10 000 em qualquer dia do ano (entregue separadamente do 1040)',
          'Form 8938 (declaração individual FATCA) — se os activos estrangeiros forem > $200 000 no fim do ano (ou $300 000 em qualquer dia) para residentes no estrangeiro que entreguem declaração como single; $400 000 / $600 000 para married filing jointly. Não substitui o FBAR — é necessário entregar ambos os formulários'
        ]}
      ]
    },
    {
      id: 'fatca',
      title: 'FATCA — comunicação bancária',
      content: [
        { kind: 'paragraph', text: 'A FATCA obriga todos os bancos portugueses a comunicar ao IRS dos EUA informações sobre contas de cidadãos norte-americanos. A maioria dos bancos portugueses aceita cidadãos dos EUA, mas podem ocorrer recusas devido ao ónus de cumprimento.' },
        { kind: 'checklist', items: [
          'Bancos que aceitam americanos: ActivoBank, Millennium, Caixa, Novobanco',
          'Alguns bancos (Santander, BPI) podem recusar',
          'O formulário W-9 tem obrigatoriamente de ser preenchido ao abrir uma conta',
          'O relatório anual do banco para o IRS dos EUA é enviado automaticamente',
          'Para contas de corretagem (investimento), a escolha é limitada; Interactive Brokers é adequado'
        ]}
      ]
    },
    {
      id: 'nhr-ifici',
      title: 'NHR / IFICI para americanos',
      content: [
        { kind: 'paragraph', text: 'O antigo NHR (até 2024) era muito vantajoso: 10% sobre pensões dos EUA + 20% sobre trabalho qualificado + 0% sobre dividendos dos EUA. Quem conseguiu aderir antes de 2024 mantém o regime durante 10 anos.' },
        { kind: 'paragraph', text: 'IFICI (2024+): taxa fixa de 20%, mas a lista de profissões qualificadas já é mais restrita. Para o trabalhador remoto tradicional, é mais difícil enquadrar-se. FEIE + FTC — a principal protecção.' }
      ]
    },
    {
      id: 'visas',
      title: 'Vistos a partir dos EUA',
      content: [
        { kind: 'checklist', items: [
          'Passaporte dos EUA: Schengen sem visto por 90 dias',
          'Para se mudar: D7 (reformados), D8 (trabalhadores remotos) são populares',
          'Golden Visa — disponível, processo standard',
          'Consulado de Portugal: NYC, Washington DC, Miami, Chicago, Boston, Providence, San Francisco, Los Angeles, Newark, Houston',
          'O processo de obtenção de visto demora 60-90 dias. Os documentos americanos são facilmente apostilados através do Secretary of State'
        ]}
      ]
    },
    {
      id: 'investments',
      title: 'Investimentos — dificuldades',
      content: [
        { kind: 'checklist', items: [
          'PFIC (Passive Foreign Investment Company) — fundos da UE são frequentemente considerados PFIC, com declaração complexa ao IRS dos EUA',
          'Vanguard / Fidelity / Charles Schwab — geralmente são mais fáceis para residentes dos EUA',
          'US-ETF — melhores do que fundos portugueses/europeus para americanos',
          'Roth IRA — Portugal não reconhece a sua isenção fiscal: para um residente fiscal em Portugal, os levantamentos são, em regra, tributáveis em Portugal (a valorização é tributada como rendimento de pensão) e a convenção não os protege. Um erro frequente — aconselhe-se com um especialista fiscal',
          '401(k) — os pagamentos de pensões são tributados em Portugal',
          'Fundo de pensões português (PPR) — os EUA consideram-no PFIC, má escolha para um cidadão dos EUA'
        ]}
      ]
    },
    {
      id: 'healthcare',
      title: 'Cuidados de saúde',
      content: [
        { kind: 'checklist', items: [
          'SNS — após obter a autorização de residência, o acesso é gratuito',
          'Seguro privado — Médis, Multicare ~50-100 €/mês para 1 pessoa',
          'Medicare (EUA) — não funciona em Portugal',
          'Seguro internacional (Cigna, Allianz) — para viagens'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Comunidade americana',
      content: [
        { kind: 'checklist', items: [
          'Embaixada dos EUA em Lisboa: Av. Das Forças Armadas',
          'American Club of Portugal (ACP) — clube social',
          'AMCHAM Portugal (American Chamber of Commerce) — networking empresarial',
          'International Christian Fellowship',
          'Grandes comunidades de expatriados — Cascais, Algarve, Lisboa',
          'IRS International: +1 267-941-1000 (para questões sobre FBAR / FATCA / FEIE)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Embaixada dos EUA em Lisboa', url: 'https://pt.usembassy.gov/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'IRS International — FEIE / FBAR', url: 'https://www.irs.gov/individuals/international-taxpayers', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Convenção fiscal EUA-Portugal (IRS)', url: 'https://www.irs.gov/businesses/international-businesses/portugal-tax-treaty-documents', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (portal fiscal) — residência', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
