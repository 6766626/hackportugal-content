export default {
  editorialVoice: 'hackportugal',
  id: 'relocation-shipping',
  categoryId: 'before_arrival',
  title: 'Transporte de bens para Portugal — contentor, empresas, bagagem',
  tldr: 'Opções: (1) contentor marítimo 20\' (33 m³) — 3 000-5 000 € a partir de Moscovo/Kyiv, 4-8 semanas. 40\' — 4 500-7 500 €, 2 contentores por família; (2) carga consolidada (LCL) desde 600 € por 5 m³; (3) porta-automóveis / carrinha de mobiliário pela Europa — 2 000-4 000 € a partir da Polónia/Alemanha; (4) mudança dentro da UE — transportadoras especializadas 800-2 500 €; (5) bagagem no avião — desde 50 €/mala adicional. Alfândega: bens pessoais sem direitos aduaneiros em caso de mudança (Isenção por transferência de residência), é necessário certificado de transferência de residência (do consulado de Portugal) + factura.',
  tags: ['mudança', 'contentor', 'transporte', 'alfândega'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'options',
      title: 'Todas as opções de transporte',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '🚢 Contentor marítimo (a partir de fora da UE)', content: [
            { kind: 'checklist', items: [
              '20\' (33 m³): aproximadamente para um apartamento T2 — 3 000-5 000 € até Lisboa, 4-8 semanas',
              '40\' (67 m³): apartamento T3-T4 com automóvel — 4 500-7 500 €',
              'Porto de chegada: Porto de Lisboa ou Porto de Leixões (Porto)',
              'Transitários grandes: FlyDove Cargo, Allied Pickfords, AGS Movers, Santa Fe Relocation',
              'Inclui: carga/descarga, frete marítimo, seguro, desalfandegamento',
              'NÃO inclui: direitos aduaneiros e impostos (para bens pessoais — gratuito com Isenção)',
              'Melhor: pacote “porta a porta” (“chave na mão”), eles próprios embalam/desmontam'
            ]}
          ]},
          { id: 'o2', title: '📦 Carga consolidada (LCL)', content: [
            { kind: 'checklist', items: [
              'Se tiver ≤ 5-10 m³ de bens — a sua carga é colocada num contentor partilhado com outras',
              'Desde 600 € por 5 m³ (Moscovo-Lisboa), 900 € por 10 m³',
              'Prazo mais longo — 6-10 semanas',
              'Risco de danos mais elevado',
              'Prestadores de serviços: Gebrüder Weiss, Schenker, AGS Seven Seas Worldwide'
            ]}
          ]},
          { id: 'o3', title: '🚚 Carrinha / porta-automóveis pela UE', content: [
            { kind: 'checklist', items: [
              'A partir da Polónia, Alemanha, Países Baixos: 2 000-4 000 € (depende do volume)',
              'Mais rápido do que o contentor — 1-2 semanas',
              'Sem alfândega (UE ↔ UE)',
              'Empresas: KAM Transport (RU-PT), especializadas na Polónia',
              'Para automóvel: porta-automóveis Berniaga, Voitures Occasion — 1 500-2 500 €'
            ]}
          ]},
          { id: 'o4', title: '🏠 Mudança UE-UE (cara, cómoda)', content: [
            { kind: 'checklist', items: [
              'Mudanças Viegas, Grupo Mudabem, Martin Transportes',
              '800-2 500 € por uma mudança completa (embalamento, transporte, desembalamento)',
              'A partir de 2-5 dias',
              'Adequado se se mudar de Espanha / França / Alemanha'
            ]}
          ]},
          { id: 'o5', title: '✈️ Bagagem aérea', content: [
            { kind: 'checklist', items: [
              '2-3 malas (50+50+50 kg = 150 kg) — bagagem adicional 50-120 €/mala',
              'Para uma mudança mínima de 1-2 passageiros',
              'Melhor: TAP / Ryanair / WizzAir + comprar bagagem adicional através do site (mais barato)',
              'Mobiliário grande / electrodomésticos — não transportar',
              'Restrições: baterias de lítio apenas na bagagem de mão, líquidos ≤ 100 ml'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'customs',
      title: '🛃 Alfândega — Isenção por Transferência de Residência',
      content: [
        { kind: 'paragraph', text: 'Ao mudar-se para Portugal, você NÃO paga direitos de importação nem IVA sobre bens pessoais se cumprir as condições do Regulamento 1186/2009 EU.' },
        { kind: 'checklist', items: [
          '✅ Você muda realmente de residência (confirmado por autorização de residência / certificado consular / MNE)',
          '✅ Os bens são seus, pessoais, usados há ≥ 6 meses antes da mudança',
          '✅ São importados no prazo de 12 meses após se tornar residente',
          '✅ Não serão vendidos nos primeiros 12 meses após a importação',
          '❌ Não se aplica a: álcool, tabaco, mercadorias comerciais, armas, medicamentos em grandes quantidades',
          '💼 O certificado de mudança de residência é obtido no consulado de Portugal no país de saída ANTES da mudança ou na AT PT à chegada'
        ]}
      ]
    },
    {
      id: 'documents-customs',
      title: '📋 Documentos para a alfândega',
      content: [
        { kind: 'checklist', items: [
          'Inventário completo: lista detalhada dos bens com estimativa de valor + fotografias',
          'Lista de embalagem (anexada ao inventário)',
          'Factura do transporte (da transportadora)',
          'Certificado de transferência de residência (do consulado de Portugal / MNE)',
          'Passaporte + autorização de residência',
          'Comprovativo de morada em PT (atestado de residência / contrato)',
          'Bill of lading (conhecimento de embarque marítimo) ou CMR (rodoviário)',
          'Se necessário — licenças CITES para objectos exóticos, regras para antiguidades'
        ]}
      ]
    },
    {
      id: 'car',
      title: '🚗 Transporte de automóvel',
      content: [
        { kind: 'checklist', items: [
          'Automóvel = categoria separada ("ISV" = Imposto sobre Veículos)',
          'Importação com benefício na mudança (Isenção ISV): o automóvel deve ser seu há ≥ 6 meses antes da mudança, comprado no país de saída',
          'Transporte: porta-automóveis (1 500-2 500 € UE-UE) ou RoRo por mar (1 200-2 000 € fora da UE → PT)',
          'Matrícula no IMT: 270 € + verificação da reserva + IPO',
          'Seguro temporário por 30 dias — 80-150 €',
          'Alternativa: importação sem Isenção = ISV completo (desde 2 000 € para um carro pequeno até 10 000+ para BMW)',
          '⚠️ Veículos eléctricos: 0% ISV na mudança, mais IUC reduzido',
          '📄 Guia separado: “car-import” na categoria automóvel'
        ]}
      ]
    },
    {
      id: 'timeline',
      title: '📅 Cronograma',
      content: [
        { kind: 'checklist', items: [
          'T-3 meses: inventário, comparação de orçamentos (mínimo 3 empresas), reserva do contentor',
          'T-2 meses: embalamento, documentos para a alfândega',
          'T-1 mês: carregamento no local de origem, expedição',
          'T-0: mudança da própria pessoa (avião), obtenção da autorização de residência PT',
          'T+1–2 meses: chegada da carga a Leixões/Lisboa, desalfandegamento',
          'T+2–3 meses: entrega, desembalamento'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos',
      content: [
        { kind: 'checklist', items: [
          '📊 3+ orçamentos de empresas diferentes — diferença de 30-50%',
          '🔍 Verificar avaliações: Google Reviews, Trustpilot, grupos de Facebook russia-pt',
          '💰 Seguro de carga (“contra todos os riscos”, All Risks) — 1-3% do valor dos bens. Obrigatório para contentor',
          '📸 Fotografar tudo antes do carregamento — os danos são contestados junto do seguro',
          '🔌 Equipamentos 220 V: tomadas em PT — Europlug + Schuko. Adaptadores para equipamentos UK/US',
          '📏 Volume — calcule com precisão. Subestimativa → terá de pagar mais 300-500 €/m³',
          '🧳 Bagagem aérea: leve consigo os objectos de valor (documentos, computador portátil, jóias) — o contentor pode perder-se / ficar retido',
          '🐕 Animais separadamente: não são transportados com mobiliário. Ver guia “pet-import”',
          '🏢 Armazenamento em PT: se a autorização de residência se atrasar — armazém de armazenamento temporário em Lisboa 50-100 €/m³/mês'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Contentor 20\' RU/UA → PT', amountEURMin: 3000, amountEURMax: 5000 },
    { label: 'Contentor 40\'', amountEURMin: 4500, amountEURMax: 7500 },
    { label: 'LCL 5 m³', amountEUR: 600 },
    { label: 'Mudança UE-UE', amountEURMin: 800, amountEURMax: 2500 },
    { label: 'Porta-automóveis para automóvel', amountEURMin: 1500, amountEURMax: 2500 },
    { label: 'Seguro de carga', amountEUR: 0, note: '1-3% do valor' },
    { label: 'Bagagem adicional no avião', amountEURMin: 50, amountEURMax: 120, note: 'por mala' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 90,
  sources: [
    { title: 'Autoridade Tributária — Isenção por transferência', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulamento (CE) 1186/2009 — franquias aduaneiras', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32009R1186', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — Importação de veículos', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
