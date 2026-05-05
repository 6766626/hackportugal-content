export default {
  editorialVoice: 'hackportugal',
  id: 'drones-portugal',
  categoryId: 'digital_gov',
  title: 'Drones em Portugal — registo, regras, onde é permitido',
  tldr: 'Em Portugal aplicam-se as regras europeias EU 2019/947: registo do operador na ANAC (gratuito) para drones ≥ 250 g ou com câmara + formação teórica. Pode voar até 120 m de altura na Categoria Aberta (Open). Proibido — sobre pessoas, num raio de 5 km de aeroportos, sobre parques nacionais sem autorização. Coimas até 2 000 € por infrações.',
  tags: ['drone', 'drones', 'anac', 'regulamento federação russa/ue'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'registration',
      title: 'Registo do operador',
      content: [
        { kind: 'paragraph', text: 'Portugal aplica o Regulamento (UE) 2019/947 através da agência nacional ANAC (Autoridade Nacional da Aviação Civil). O registo é obrigatório para:' },
        { kind: 'checklist', items: [
          'Qualquer drone com câmara/sensores (mesmo < 250 g)',
          'Qualquer drone ≥ 250 g (com ou sem câmara)',
          'Drone com marcação C0–C4 (classe da UE)',
          'NÃO é necessário registo para: brinquedos < 250 g sem câmara (DJI Neo tal como vem — sim, precisa, porque tem câmara)'
        ]},
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Criar conta no portal da ANAC para drones', content: [
            { kind: 'paragraph', text: 'voanouceu.anac.pt → Registar operador → Chave Móvel Digital / Cartão de Cidadão / NIF + palavra‑passe. Introduza o nome completo, morada, NIF, contacto.' }
          ]},
          { id: 'r2', title: '2. Obter o identificador de operador', content: [
            { kind: 'paragraph', text: 'O sistema atribui um UAS Operator ID no formato PRT-RP-XXXXXXXX. Este número deve ser colocado no drone (autocolante ou gravação).' }
          ]},
          { id: 'r3', title: '3. Realizar o exame online (para Open A1/A3)', content: [
            { kind: 'paragraph', text: 'No mesmo portal — 40 perguntas, gratuito, pode repetir. No final — certificado A1/A3 (Categoria Aberta/Open), válido por 5 anos. Para A2 (mais perto de pessoas) — exame adicional presencial por 90 €.' }
          ]},
          { id: 'r4', title: '4. Seguro', content: [
            { kind: 'paragraph', text: 'Obrigatório para operadores comerciais e drones ≥ 20 kg. Para uso doméstico/recreativo — recomendado. Seguradoras: Fidelidade, Generali, AXA — responsabilidade civil até 750 000 €, 50–150 €/ano.' }
          ]}
        ]}
      ]
    },
    {
      id: 'where',
      title: 'Onde é permitido e proibido voar',
      content: [
        { kind: 'substeps', items: [
          { id: 'w1', title: '✅ Pode na Categoria Aberta (Open)', content: [
            { kind: 'checklist', items: [
              'A1 (C0 < 250 g): sobre pessoas, mas não sobre aglomerações',
              'A2 (C2 < 4 kg): a 30 m de pessoas; 5 m em modo de baixa velocidade',
              'A3 (C3/C4 < 25 kg): a 150 m de zonas residenciais/comerciais, apenas sobre locais desabitados',
              'Até 120 m de altura AGL (acima do nível do solo)',
              'Apenas de dia e dentro da linha de vista direta (VLOS)'
            ]}
          ]},
          { id: 'w2', title: '❌ Proibido', content: [
            { kind: 'checklist', items: [
              'Num raio de 5 km de qualquer aeroporto/aeródromo (Lisboa, Porto, Faro, Cascais, Tires, etc.)',
              'Em zonas NOTAM/geo-zonas — ver o mapa em voanouceu.anac.pt/geozonas',
              'Sobre parques nacionais e reservas naturais (Gerês, Serra da Estrela, Sintra) sem autorização por escrito do ICNF',
              'Sobre palácios, castelos, igrejas, zonas históricas da UNESCO',
              'Sobre instalações militares',
              'Nas praias em época balnear (junho–setembro) — proibição do ICNF + municípios',
              'Sobre aglomerações de pessoas (concertos, futebol, mercados, manifestações)',
              'À noite (sem autorização especial)',
              'Em condições meteorológicas: vento > 12 m/s, chuva, visibilidade < 500 m'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'specific',
      title: 'Casos especiais',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Captação de foto/vídeo comercial — é necessário registo como operador comercial + declaração fiscal (recibos verdes ou pessoa coletiva)',
          '🌊 Praias: fora da época (outubro–maio) — pode; na época (junho–setembro) — proibido entre as 8:00 e as 20:00',
          '🏝️ Madeira, Açores — as mesmas regras + restrições adicionais em áreas naturais',
          '🎥 Filmagem de casamentos, eventos — permitido em A1/A2, mas recomenda-se notificar a ANAC com 48 horas de antecedência',
          '🛫 Voo fora da linha de vista (BVLOS) ou acima de 120 m — apenas na Categoria Específica (Specific) com autorização específica da ANAC'
        ]}
      ]
    },
    {
      id: 'import',
      title: 'Importação do drone',
      content: [
        { kind: 'checklist', items: [
          'Da UE: sem direitos, entrada livre',
          'De países terceiros (Federação Russa, EUA, China): através da alfândega quando o valor > 150 € — IVA 23% + eventual direito aduaneiro',
          'Baterias: LiPo > 100 Wh — proibidas na bagagem de mão do avião, apenas na mala de porão',
          'DJI dos EUA — recomenda-se atualizar o firmware para a versão da UE (remove as restrições de geozonamento dos EUA)'
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Coimas',
      content: [
        { kind: 'checklist', items: [
          'Voo sem registo: 500–1500 €',
          'Violação de geo-zona (aeroporto): 1 000–2 000 €',
          'Voo sobre pessoas em A3: 500–1000 €',
          'Voo em parque natural sem autorização: 250–750 € + possível apreensão',
          'Voo noturno sem autorização: 500 €',
          'Consultar coima: GNR / PSP no momento do voo ou através da ANAC'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Registo na ANAC', amountEUR: 0 },
    { label: 'Exame A1/A3 (online)', amountEUR: 0 },
    { label: 'Exame A2 (presencial)', amountEUR: 90 },
    { label: 'Seguro de responsabilidade civil', amountEURMin: 50, amountEURMax: 150, note: '/ano' }
  ],
  sources: [
    { title: 'ANAC — Categoria Aberta (regras de operação de UAS/drones)', url: 'https://www.anac.pt/vPT/Generico/drones/categoria_aberta/Paginas/CategoriaAberta.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'ANAC — Registo de Operador de Aeronaves Não Tripuladas', url: 'https://www.anac.pt/vPT/Generico/drones/registo_uas/Paginas/OperadoresdeUAS.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Portal de drones de Portugal (registo + geo-zonas)', url: 'https://voanouceu.anac.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulamento (UE) 2019/947', url: 'https://eur-lex.europa.eu/eli/reg_impl/2019/947/oj', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'ICNF — parques naturais', url: 'https://www.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
