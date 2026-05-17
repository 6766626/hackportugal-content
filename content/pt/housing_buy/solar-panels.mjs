export default {
  editorialVoice: 'hackportugal',
  id: 'solar-panels',
  categoryId: 'housing_buy',
  title: 'Painéis solares — instalação, autorizações, poupança',
  tldr: 'Portugal está no top 3 dos países da UE em potencial solar. Sistemas UPAC (Unidade de Produção para Autoconsumo) — limiares pelo DL 15/2022 / SERUP: sistemas muito pequenos (até ~700 W sem injecção na rede) podem estar isentos de prior control; >700 W e ≤30 kW — normalmente mera comunicação prévia através da DGEG/SERUP; >30 kW — prior control mais exigente. Custo chave na mão: 4 000-12 000 € para um apartamento/casa típico. Retorno do investimento em 5-9 anos. Para receber dinheiro pelo excedente é necessário um **bidirectional smart meter** e um contrato de venda com um comercializador/agregador (net metering 1:1 em PT NÃO existe). O Fundo Ambiental não garante financiamento anual — confirme o Aviso actual em fundoambiental.pt.',
  tags: ['painéis solares', 'energia solar', 'autoconsumo', 'fundo ambiental'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-solar',
      title: '☀️ Porque PT é um excelente local',
      content: [
        { kind: 'checklist', items: [
          '🌞 **Radiação solar**: 1500-1700 kWh/m²/ano — top 3 na UE (depois de Chipre e Malta)',
          '☀️ Dia médio: 5-7 horas de pico de actividade solar',
          '⚡ **Preços da electricidade**: 0,16-0,25 €/kWh (entre os mais elevados da UE) → retorno mais rápido',
          '📏 **Sistema doméstico de 5 kW** gera 7 000-9 000 kWh/ano — cobre as necessidades da maioria dos agregados familiares',
          '💰 **Poupança**: 800-1 500 €/ano para uma família média com sistema de 5 kW',
          '🌍 **Redução de emissões de CO2**: ~3 toneladas/ano com um sistema de 5 kW',
          '📈 **Valor do imóvel**: acrescenta 5-10% ao valor do imóvel'
        ]}
      ]
    },
    {
      id: 'system-types',
      title: '🔌 Tipos de sistemas',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'UPAC residencial ≤30 kW (casas/apartamentos típicos)', content: [
            { kind: 'checklist', items: [
              'A maioria dos sistemas domésticos funciona por **mera comunicação prévia** através da DGEG/SERUP (não é uma licença)',
              'Sistemas muito pequenos (~até 700 W sem injecção na rede) podem estar isentos de prior control',
              'A opção mais popular para apartamentos / casas',
              'Inversor + painéis no telhado / varanda / anexo',
              'Autoconsumo + injecção na rede (se houver excedentes e estiver equipado com bidirectional meter)',
              'Custo: 4 000-12 000 € chave na mão',
              'Prazo de instalação: 1-3 dias'
            ]}
          ]},
          { id: 's2', title: 'UPAC > 30 kW', content: [
            { kind: 'checklist', items: [
              'Exige registo/certificação mais exigente',
              'Para casas grandes / instalações comerciais',
              'Custo: 10 000-30 000+ €',
              'Pode ser mais vantajoso para empresas (deduções em IRC)',
              '>1 MW — licenciamento'
            ]}
          ]},
          { id: 's3', title: 'Venda pura de energia à rede', content: [
            { kind: 'checklist', items: [
              'Pure production/sale to grid — projecto separado de produção eléctrica ao abrigo das regras actuais do SEN',
              'Isto não é uma UPAC residencial normal',
              'Requisitos da DGEG/ERSE e existência de grid capacity',
              'Menos comum para habitação — o autoconsumo é normalmente mais vantajoso'
            ]}
          ]},
          { id: 's4', title: 'Sistema híbrido com bateria', content: [
            { kind: 'checklist', items: [
              'Sistema solar + bateria de lítio (Tesla Powerwall, BYD, LG Chem)',
              'Custo: +5 000-12 000 € em relação ao sistema base',
              'Benefício: utilizar energia solar à noite, alimentação de reserva em caso de cortes',
              'Retorno do investimento mais longo, mas maior independência da rede',
              'Adequado para zonas rurais / cortes frequentes'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'cost',
      title: '💰 Detalhe dos custos',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Padrão 2026 chave na mão', content: [
            { kind: 'checklist', items: [
              '**3 kW (apartamento)**: 3 500-5 500 € (8-10 painéis, inversor, montagem)',
              '**5 kW (casa pequena)**: 5 500-8 500 € (12-15 painéis)',
              '**6.9 kW (máximo sem licença)**: 7 500-11 000 €',
              '**+ bateria 10 kWh**: +5 000-8 000 €',
              '**+ integração com casa inteligente**: +500-1 500 €'
            ]}
          ]},
          { id: 'c2', title: 'O que está incluído', content: [
            { kind: 'checklist', items: [
              'Painéis solares (260-450 W cada)',
              'Inversor (string ou microinversores)',
              'Equipamento de fixação',
              'Cabos, interruptores, fusíveis',
              'Contador inteligente / sistema de monitorização',
              'Trabalhos de instalação',
              'Registo na DGEG (frequentemente tratado pelo instalador)',
              'Taxa reduzida de IVA 6% (desde 2024) para habitação'
            ]}
          ]},
          { id: 'c3', title: 'Subsídios — Fundo Ambiental', content: [
            { kind: 'checklist', items: [
              '**Fundo Ambiental** não garante financiamento anual — verifique o actual open Aviso em fundoambiental.pt',
              'Calls residenciais de eficiência anteriores tinham caps e reimbursement rates específicos, mas os montantes de 2026 dependem do programa activo',
              'Calls open irregularly com os seus próprios deadlines, budgets e eligibility rules — acompanhe o Fundo Ambiental e o Diário da República',
              'Não inclua o subsídio no orçamento do projecto antes da aprovação da sua candidatura',
              '**MAE** — programa dos municípios (algumas cidades complementam)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'process',
      title: '📋 Processo de instalação',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Orçamentos', content: [
            { kind: 'checklist', items: [
              'Obter 3+ orçamentos de instaladores',
              'Principais instaladores: Galp Solar, EDP Solar, Dynegy, Solposto, EnergyON, SunEnergy',
              'Os independentes são frequentemente mais baratos; verifique as avaliações',
              'Pedir: marca dos painéis (LG, JA Solar, Trina), marca do inversor (Huawei, Fronius, SolarEdge), garantia, prazos de instalação'
            ]}
          ]},
          { id: 'p2', title: '2. Avaliação estrutural', content: [
            { kind: 'checklist', items: [
              'Inspecção do telhado — orientação (sul é o melhor), inclinação, resistência da estrutura',
              'Resultado: 90%+ das casas em PT são adequadas',
              'Condomínio: consentimento da assembleia geral, se o telhado for comum',
              'Apartamento sem telhado individual: painéis na varanda / janela — sistemas de 100-500 W',
              'Se os painéis utilizarem common parts — é necessária aprovação da assembleia condomínio de acordo com as regras do condomínio. Em caso de recusa — aconselhamento jurídico; não existe um direito estatutário automático de instalação num telhado comum'
            ]}
          ]},
          { id: 'p3', title: '3. Documentos', content: [
            { kind: 'checklist', items: [
              'Caderneta predial (comprovativo de propriedade ou consentimento escrito do senhorio)',
              'NIF, CC',
              'Electricity bill com CPE, NIF/ID',
              'Dados técnicos dos painéis/inversor, declarações do instalador',
              'Factura de electricidade dos últimos 12 meses — para calcular a dimensão ideal do sistema',
              'Se estiver em condomínio e forem utilizadas common parts: acta de aprovação da assembleia'
            ]}
          ]},
          { id: 'p4', title: '4. Instalação', content: [
            { kind: 'checklist', items: [
              '1-3 dias de montagem',
              'Ligação ao seu quadro eléctrico',
              'Instalação/configuração do **bidirectional smart meter** — feita pelo distribution network operator (normalmente **E-REDES** em PT continental). O comercializador (fornecedor) é uma entidade separada',
              'Teste + activação',
              'Registo no portal da DGEG (frequentemente tratado pelo instalador)'
            ]}
          ]},
          { id: 'p5', title: '5. Compensação por excedentes', content: [
            { kind: 'checklist', items: [
              'A energia solar excedente pode ser injectada na rede → compensação do seu comercializador (EDP, Galp, Endesa, Iberdrola, etc.) se existir bidirectional smart meter e contrato de venda',
              '⚠️ Net metering no sentido de compensação 1:1 em Portugal **NÃO existe** — sem contrato de venda, o surplus pode ir para a rede sem pagamento',
              'Tarifa: normalmente inferior ao preço de retalho da electricidade',
              'Para UPAC de maior dimensão — contrato separado com comercializador/agregador'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tax',
      title: '💼 Aspecto fiscal',
      content: [
        { kind: 'checklist', items: [
          '**IVA reduzido** pode aplicar-se ao fornecimento/instalação de painéis fotovoltaicos conforme a versão actual da VAT List I — confirme o treatment na invoice com o instalador',
          '**Dedução em IRS** directamente para sistemas solares domésticos não está prevista (é um investimento, não uma despesa)',
          '**Imposto Municipal sobre Imóveis (IMI)**: alguns municípios oferecem redução para casas com sistemas solares (desconto de 5-15%)',
          '**Excedente sale**: para particulares, o rendimento da venda de surplus de small UPAC pode estar excluído de IRS até ao statutory annual limit; acima disso — ou para business activity — aplicam-se regras tax/VAT. Confirme com um contabilista/comercializador',
          '**Sistemas solares para empresas (UPAC comerciais)**: dedução integral em IRC ao longo de 8-10 anos, reembolso de IVA, pode acelerar o retorno do investimento'
        ]}
      ]
    },
    {
      id: 'rental',
      title: '🏠 Se arrenda',
      content: [
        { kind: 'checklist', items: [
          'Qualquer instalação fixa exige **consentimento escrito do proprietário**; para sistemas removable balcony plug-in, verifique também o contrato de arrendamento, o regulamento condomínio e a segurança eléctrica',
          '**Leasing de sistemas solares** (Iberdrola, Galp solar leasing): o fornecedor instala, você paga uma prestação mensal — a poupança é menor, mas sem investimento inicial',
          '**Cooperativas** (Sociedade Cooperativa de Energia): energia solar comunitária — você participa num sistema maior',
          '**Propriedade dos painéis** e possibilidade de os levar consigo ao sair devem ser **acordadas por escrito** com o proprietário ANTES da instalação'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Sistema de 3 kW (apartamento)', amountEURMin: 3500, amountEURMax: 5500 },
    { label: 'Sistema de 5 kW (casa pequena)', amountEURMin: 5500, amountEURMax: 8500 },
    { label: 'Sistema de 6.9 kW', amountEURMin: 7500, amountEURMax: 11000 },
    { label: 'Bateria adicional de 10 kWh', amountEURMin: 5000, amountEURMax: 8000 },
    { label: 'Subsídio Fundo Ambiental', note: 'montantes/condições dependem do Aviso activo — não inclua antes da aprovação da candidatura' },
    { label: 'Poupança anual 5 kW', amountEURMin: 800, amountEURMax: 1500, note: '€/ano' }
  ],
  sources: [
    { title: 'DGEG — Direção-Geral de Energia e Geologia', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Fundo Ambiental', url: 'https://www.fundoambiental.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 15/2022 — Sistema Elétrico Nacional / autoconsumo', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/15-2022', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SERUP — Sistema Eletrónico de Registo de Unidades de Produção', url: 'https://serup.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'APREN — Energias Renováveis Portugal', url: 'https://www.apren.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
