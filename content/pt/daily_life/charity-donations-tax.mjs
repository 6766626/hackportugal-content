export default {
  editorialVoice: 'hackportugal',
  id: 'charity-donations-tax',
  categoryId: 'daily_life',
  title: 'Beneficência — onde ajudar e deduções fiscais',
  tldr: 'A «consignação» do IRS é a possibilidade de direcionar **0,5% do imposto IRS** para uma das ~5 000 organizações de beneficência registadas (sem custos para si, apenas assinalando uma opção na declaração). Adicionalmente: 25% de todos os donativos a IPSS (Instituições Particulares de Solidariedade Social) são deduzidos no IRS. Principais organizações de beneficência: Cáritas, Cruz Vermelha, Médicos do Mundo, Banco Alimentar, ACAPO (apoio a pessoas com deficiência), AMI (ajuda humanitária). A campanha do Banco Alimentar decorre 2 vezes por ano e mobiliza centenas de milhares de voluntários.',
  tags: ['beneficência', 'donativos', 'consignação', 'irs'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'consignacao',
      title: '✅ Consignação 0,5% IRS — sem custos',
      content: [
        { kind: 'paragraph', text: 'Cada residente em Portugal pode direcionar **0,5% do imposto IRS liquidado** para uma das organizações de beneficência registadas. Isto NÃO tem custos adicionais para si — o Estado simplesmente redireciona uma parte do seu imposto.' },
        { kind: 'checklist', items: [
          '📅 **Quando**: ao entregar o IRS (abril-junho)',
          '✅ No formulário do IRS — «consignação de quota da liquidação do imposto»',
          '🏢 Escolher uma organização (por NIF) da lista oficial da AT',
          'Lista: portaldasfinancas.gov.pt → IRS → Consignação',
          '💰 Em concreto: 0,5% do seu imposto final. Para 30 000 €/ano — cerca de 50-150 €',
          '🔁 Pode alterar a escolha todos os anos',
          '🇵🇹 Também: pode consignar benefício fiscal do IVA — transferir para uma organização de beneficência o montante da sua dedução de IVA de faturas elegíveis. Isto NÃO é gratuito: ao contrário dos 0,5% do IRS, perde essa dedução de IVA'
        ]}
      ]
    },
    {
      id: 'tax-deductions',
      title: '💰 Donativos diretos — dedução de 25%',
      content: [
        { kind: 'paragraph', text: 'Os donativos monetários diretos a IPSS (organizações de beneficência registadas) dão-lhe uma dedução pessoal no IRS.' },
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Condições', content: [
            { kind: 'checklist', items: [
              '✅ O beneficiário é uma **IPSS** registada ou uma entidade de **utilidade pública**',
              '✅ **Transferência sem numerário** (não em dinheiro): transferência bancária / MB WAY / portal de pagamento da organização de beneficência',
              '✅ Obter **fatura/recibo com NIF** da organização de beneficência',
              '✅ Verificar o montante e o NIF no e-Fatura',
              '⚠️ **Limite**: até 15% do imposto a pagar (a maioria das famílias não atinge o limite)',
              '✅ **Dedução**: normalmente 25% do montante elegível; para alguns donativos de mecenato social, o montante pode ser majorado (por exemplo, 130%), mas apenas se o beneficiário/donativo se qualificar nos termos dos arts. 61-66 do EBF'
            ]}
          ]},
          { id: 'd2', title: 'Exemplos', content: [
            { kind: 'checklist', items: [
              'Donativo de 200 € → crédito fiscal de cerca de 65 € (200 × 1,3 × 25%)',
              'Donativo de 1000 € → crédito fiscal de cerca de 325 €',
              'Donativo de 5000 € → crédito fiscal de cerca de 1625 € (o limite pode restringir se o seu IRS for inferior)',
              'Na prática: o custo do seu donativo = cerca de 67% do valor nominal graças ao crédito fiscal'
            ]}
          ]},
          { id: 'd3', title: 'Empresas (para negócios)', content: [
            { kind: 'checklist', items: [
              'Donativos a IPSS: 130-150% são dedutíveis como gasto (Código do IRC art. 62)',
              'Limite: 0,6% do volume de negócios',
              'Fins educativos / culturais: coeficientes especiais',
              'Clubes de ciclismo / desportivos: 130%'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'top-charities',
      title: '🏆 Melhores organizações para donativos / voluntariado',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Banco Alimentar — apoio alimentar', content: [
            { kind: 'checklist', items: [
              'Banco Alimentar Contra a Fome — a maior rede de redistribuição de alimentos',
              'Rede de 21 bancos regionais',
              '**2 campanhas por ano**: fim de maio + fim de novembro — recolha de conservas em supermercados',
              'Voluntariado: 4-8 horas, mobiliza cerca de 70 000 voluntários por campanha',
              'Donativos / tempo → 11 milhões de refeições por ano',
              'Banco Alimentar Lisboa, Porto e outros têm moradas postais + IBAN para transferências'
            ]}
          ]},
          { id: 'c2', title: 'Cáritas Portuguesa', content: [
            { kind: 'checklist', items: [
              'Organização de beneficência católica, mas os beneficiários do apoio não são apenas religiosos',
              'Apoio em crise, bancos alimentares, ajuda com habitação social',
              'caritas.pt → Doar Online'
            ]}
          ]},
          { id: 'c3', title: 'Cruz Vermelha (Cruz Vermelha Portuguesa)', content: [
            { kind: 'checklist', items: [
              'Resposta a emergências, campanhas de dádiva de sangue, apoio social',
              'cruzvermelha.pt → Donativos / Doar',
              'Programas de voluntariado em mais de 200 delegações',
              'IBAN para donativos diretos'
            ]}
          ]},
          { id: 'c4', title: 'Médicos do Mundo / Instituto de Apoio à Criança (SOS-Criança)', content: [
            { kind: 'paragraph', text: 'Médicos do Mundo — assistência médica em regiões em crise (medicosdomundo.pt). Instituto de Apoio à Criança / SOS-Criança — proteção de crianças (iacrianca.pt).' }
          ]},
          { id: 'c5', title: 'Proteção animal', content: [
            { kind: 'checklist', items: [
              '**Lisboa**: Bianca\'s Garden (gatos), União Zoófila',
              '**Porto**: Casa dos Animais',
              '**SPA — Sociedade Protetora dos Animais** — abrigo e assistência médica para animais abandonados',
              '**SOS Animal — organização nacional**'
            ]}
          ]},
          { id: 'c6', title: 'Tecnologia para o bem / educação', content: [
            { kind: 'checklist', items: [
              '**Junior Achievement Portugal**: educação, empreendedorismo para jovens',
              '**Programadores do Futuro**: competências digitais para pessoas em situação vulnerável',
              '**Code Club Portugal**: programação gratuita para crianças',
              '**Aprender é Fixe**: explicações para crianças em situação de risco'
            ]}
          ]},
          { id: 'c7', title: 'Natureza / ambiente', content: [
            { kind: 'checklist', items: [
              '**Quercus**: ONG ambiental, advocacia + recuperação de florestas',
              '**LPN — Liga para a Protecção da Natureza**: a ONG ambiental mais antiga de Portugal',
              '**SPEA — Sociedade Portuguesa para Estudo das Aves**: proteção de aves',
              '**Geota**: estudos ambientais'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'volunteer',
      title: '🤝 Tempo como donativo — programas de voluntariado',
      content: [
        { kind: 'checklist', items: [
          '🎯 **European Solidarity Corps** (em vez do antigo EVS): projetos de voluntariado em Portugal/UE, com viagem/apoio, alojamento/alimentação ou subsídio consoante o projeto',
          '🎯 **Campanhas do Banco Alimentar**: 2 vezes por ano, 4-8 horas, entrada muito simples',
          '🎯 **Voluntariado com crianças**: através de IPSS/associações acreditadas, com triagem/verificações de antecedentes. CPCJ — comissões oficiais de proteção de crianças; contacte-as para aconselhamento, não como voluntariado informal',
          '🎯 **Apoio a refugiados** (CPR, JRS): refugiados ucranianos e outros, acompanhamento linguístico, apoio à integração',
          '🎯 **Voluntários em hospitais** (Cruz Vermelha): em hospitais — acompanhamento / atividades para idosos',
          '🎯 **AMI** (Assistência Médica Internacional): estágios em Portugal ou envio para o estrangeiro em missões médicas',
          '🎯 **Habitat for Humanity**: construção / reparação de habitação social',
          '🎯 **Acompanhamento de idosos**: pessoas idosas isoladas, visitas semanais',
          '🎯 **TimeSwap (banco do tempo)** — troca de competências e tempo, nos municípios'
        ]}
      ]
    },
    {
      id: 'beware',
      title: '⚠️ Tenha cuidado',
      content: [
        { kind: 'checklist', items: [
          '🚫 **Peditórios de rua**: falsas organizações de beneficência junto a lojas / nas ruas. Verifique o estatuto de IPSS',
          '🚫 **E-mails fraudulentos**: phishing com «Médicos do Mundo Lisboa» — verifique o domínio',
          '🚫 **Chamadas não solicitadas**: organizações de beneficência legítimas raramente telefonam primeiro',
          '✅ **Transferência direta para um IBAN conhecido**: mais seguro do que através de plataformas de terceiros',
          '✅ **Recibo fiscal**: solicite com NIF após o donativo para obter a dedução',
          '✅ **Verificação do estatuto de IPSS**: a organização deve constar do registo em segsocial.pt'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Consignação IRS 0,5%', amountEUR: 0, note: 'sem custos para si' },
    { label: 'Dedução IRS por donativos', amountEUR: 0, note: '25% × 1,3 do donativo' },
    { label: 'Limite da dedução IRS', amountEUR: 0, note: '15% do imposto a pagar' }
  ],
  sources: [
    { title: 'AT — Consignação IRS', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco Alimentar Contra a Fome', url: 'https://www.bancoalimentar.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — registo de IPSS', url: 'https://www.seg-social.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Cáritas Portuguesa', url: 'https://www.caritas.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
