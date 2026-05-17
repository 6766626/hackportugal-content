export default {
  editorialVoice: 'hackportugal',
  id: 'drones-portugal',
  categoryId: 'digital_gov',
  title: 'Drones em Portugal — registo, regras, onde é permitido',
  tldr: 'Em Portugal aplicam-se as regras europeias EU 2019/947: registo do operador na ANAC (gratuito) para drones ≥250 g ou com câmara + formação teórica. É permitido voar até 120 m de altura na categoria Open. Não é permitido — sobre pessoas, num raio de 5 km de aeroportos, sobre parques nacionais sem autorização. Coimas até 2 000 € por infracções.',
  tags: ['drone', 'drones', 'anac', 'regulamento federação russa/ue'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'registration',
      title: 'Registo do operador',
      content: [
        { kind: 'paragraph', text: 'Portugal aplica o regulamento da UE 2019/947 através da agência nacional ANAC (Autoridade Nacional da Aviação Civil). O registo é obrigatório para:' },
        { kind: 'checklist', items: [
          'Qualquer drone com câmara / sensores (mesmo <250 g)',
          'Qualquer drone ≥ 250 g (com ou sem câmara)',
          'Drone com marcação C0-C4 (classe UE)',
          'NÃO é necessário registo para: brinquedos <250 g sem câmara (DJI Neo de base — sim, é necessário, porque tem câmara)'
        ]},
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Criar uma conta no portal da ANAC para drones', content: [
            { kind: 'paragraph', text: 'voanouceu.anac.pt → Registar operador → Chave Móvel Digital / Cartão de Cidadão / NIF + palavra-passe. Introduza nome completo, morada, NIF, contacto.' }
          ]},
          { id: 'r2', title: '2. Obter o identificador de operador', content: [
            { kind: 'paragraph', text: 'O sistema emite um UAS Operator ID no formato PRT-RP-XXXXXXXX. Este número deve ser colocado no drone (autocolante ou gravação).' }
          ]},
          { id: 'r3', title: '3. Fazer o exame online (para Open A1/A3)', content: [
            { kind: 'paragraph', text: 'No mesmo portal — 40 perguntas, gratuito, pode repetir. No final — certificado A1/A3 (categoria Open), válido por 5 anos. Para A2 (mais perto de pessoas) — exame presencial adicional por 90 €.' }
          ]},
          { id: 'r4', title: '4. Seguro', content: [
            { kind: 'paragraph', text: 'Obrigatório para operadores comerciais e drones ≥ 20 kg. Para uso particular — recomendado. Seguradoras: Fidelidade, Generali, AXA — responsabilidade civil até 750 000 €, 50-150 €/ano.' }
          ]}
        ]}
      ]
    },
    {
      id: 'where',
      title: 'Onde é permitido e proibido voar',
      content: [
        { kind: 'substeps', items: [
          { id: 'w1', title: '✅ Permitido na categoria Open', content: [
            { kind: 'checklist', items: [
              'A1 (C0 <250 g): sobre pessoas, mas não sobre ajuntamentos',
              'A2 (C2 <4 kg): a 30 m de pessoas; 5 m em modo de baixa velocidade',
              'A3 (C3/C4 <25 kg): a 150 m de zonas residenciais/comerciais, apenas sobre locais sem pessoas',
              'Até 120 m de altura em AGL (acima do nível do solo)',
              'Apenas de dia e dentro do alcance visual directo (VLOS)'
            ]}
          ]},
          { id: 'w2', title: '❌ Proibido', content: [
            { kind: 'checklist', items: [
              'A 5 km de qualquer aeroporto / aeródromo (Lisboa, Porto, Faro, Cascais, Tires, etc.)',
              'Em zonas NOTAM / geozonas — ver mapa em voanouceu.anac.pt/geozonas',
              'Sobre parques nacionais e reservas naturais (Gerês, Serra da Estrela, Sintra) sem autorização escrita do ICNF',
              'Sobre palácios, castelos, igrejas, zonas históricas UNESCO',
              'Sobre instalações militares',
              'Nas praias durante a época balnear (junho-setembro) — proibição do ICNF + municípios',
              'Sobre ajuntamentos (concertos, futebol, mercados, manifestações)',
              'À noite (sem autorização especial)',
              'Em condições meteorológicas: vento >12 m/s, chuva, visibilidade <500 m'
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
          '🏛️ Captação de fotografias/vídeos comerciais — é necessário registo como operador comercial + declaração fiscal (recibos verdes ou pessoa colectiva)',
          '🌊 Praias: fora da época balnear (outubro-maio) — permitido; na época balnear (junho-setembro) — proibido entre as 8:00-20:00',
          '🏝️ Madeira, Açores — as mesmas regras + restrições adicionais em zonas naturais',
          '🎥 Filmagem de casamentos, eventos — admissível em A1/A2, mas recomenda-se avisar a ANAC com 48 horas de antecedência',
          '🛫 Voo fora de VLOS (BVLOS) ou acima de 120 m — apenas na categoria Specific com autorização separada da ANAC'
        ]}
      ]
    },
    {
      id: 'import',
      title: 'Importação de drone',
      content: [
        { kind: 'checklist', items: [
          'Da UE: sem direitos aduaneiros, importação livre',
          'De países terceiros (Federação Russa, EUA, China): através da alfândega se o valor for >150 € — IVA 23% + eventual direito aduaneiro',
          'Baterias: LiPo >100Wh — proibidas na bagagem de mão no avião, apenas na mala de porão',
          'DJI dos EUA — recomenda-se actualizar o firmware para a versão UE (remove as restrições de geofencing dos EUA)'
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Coimas',
      content: [
        { kind: 'checklist', items: [
          'Voo sem registo: 500–1 500 €',
          'Violação de geozona (aeroporto): 1 000–2 000 €',
          'Voo sobre pessoas em A3: 500–1 000 €',
          'Voo em parque natural sem autorização: 250–750 € + possível apreensão',
          'Voo nocturno sem autorização: 500 €',
          'Verificação da coima: GNR / PSP no momento do voo ou através da ANAC'
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
    { title: 'ANAC — Categoria Aberta (regras de operação UAS/drones)', url: 'https://www.anac.pt/vPT/Generico/drones/categoria_aberta/Paginas/CategoriaAberta.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'ANAC — Registo de Operador de Aeronaves Não Tripuladas', url: 'https://www.anac.pt/vPT/Generico/drones/registo_uas/Paginas/OperadoresdeUAS.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Portal de drones de Portugal (registo + geozonas)', url: 'https://voanouceu.anac.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulamento (EU) 2019/947', url: 'https://eur-lex.europa.eu/eli/reg_impl/2019/947/oj', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'ICNF — parques naturais', url: 'https://www.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
