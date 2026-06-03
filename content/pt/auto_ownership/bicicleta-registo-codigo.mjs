export default {
  editorialVoice: 'hackportugal',
  id: 'bicicleta-registo-codigo',
  categoryId: 'auto_ownership',
  title: 'Bicicleta em Portugal — registo, carta e regras',
  tldr: 'As bicicletas comuns (sem motor) em Portugal NÃO exigem registo, carta ou seguro. Desde 2022 existe um registo voluntário de bicicletas através do MyBike (mybike.pt) — para protecção contra roubo. As bicicletas eléctricas (e-bike) até 250 W e 25 km/h — não exigem registo. Acima disso — são speed pedelec / e-moped e é necessário: registo no IMT, carta AM ou A1, capacete, seguro. Código da Estrada: circulação pelo lado direito da via, pode circular em ciclovias, passeio — apenas crianças até 10 anos. Numa bicicleta comum o capacete não é obrigatório por lei (recomendado para todos), mas é obrigatório num velocípede eléctrico com motor. Bicicleta nos comboios da CP — gratuita fora das horas de ponta, no Metro de Lisboa — sim na maioria das estações.',
  tags: ['bicicleta', 'bicicletas', 'mybike', 'e-bike', 'imt'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'no-license-needed',
      title: 'Quando o registo e a carta NÃO são necessários',
      content: [
        { kind: 'checklist', items: [
          '✅ Bicicleta comum sem motor (de qualquer tamanho, qualquer valor) — sem qualquer registo, sem carta, sem seguro',
          '✅ Bicicleta eléctrica até 250 W de potência e até 25 km/h de velocidade máxima com assistência à pedalada (assist), e não acelerador — as mesmas regras de uma bicicleta comum',
          '✅ Bicicleta de carga (cargo bike) — as mesmas regras, se for sem motor ou uma e-bike dentro dos limites',
          '✅ Hoverboards e skates eléctricos até 6 km/h — sem registo'
        ] },
        { kind: 'paragraph', text: 'Isto corresponde juridicamente à EU Directive 2002/24/EC. Uma pedelec até 250 W é uma «bicicleta» perante a lei, não um «motociclo».' }
      ]
    },
    {
      id: 'speed-pedelec-emoped',
      title: 'Quando são necessários registo e carta',
      content: [
        { kind: 'checklist', items: [
          '🛑 Speed pedelec (S-pedelec): potência >250 W OU velocidade >25 km/h com assistência à pedalada. Isto já é uma e-moped',
          '🛑 E-bike com throttle (acelerador sem pedalar) se exceder 25 km/h',
          '🛑 Trotinetes eléctricas acima de 25 km/h — guia separado',
          'O que é necessário para S-pedelec / e-moped até 50 cm³ ou 4 kW:',
          '  • Registo no IMT, obtenção de matrícula',
          '  • Carta de categoria AM (16+) ou A1',
          '  • Seguro obrigatório',
          '  • Capacete (obrigatório para todos)',
          '  • IUC (annual road tax)',
          '  • Inspecção IMT (vistoria) a cada 2 anos'
        ] }
      ]
    },
    {
      id: 'mybike-register',
      title: 'MyBike — registo voluntário para protecção contra roubo',
      content: [
        { kind: 'paragraph', text: 'Desde 2022, a Federação Portuguesa de Cicloturismo (FPCUB), em conjunto com a PSP, lançou o mybike.pt — o registo nacional voluntário de bicicletas. Gratuito. Valor: se a bicicleta for roubada, a polícia terá um identificador para a procurar.' },
        { kind: 'checklist', items: [
          'Regista: número do quadro (gravado no corpo), fotografia, cor, modelo, série',
          'Recebe um código QR, que cola na bicicleta',
          'Se a bicicleta for encontrada (sem proprietário) — a PSP lê o QR e vê o seu contacto',
          'Ajuda a DEVOLVER a bicicleta, se for encontrada',
          'Não ajuda com insurance: o seguro da bicicleta é separado',
          'Onde registar: mybike.pt → Cidadão → Registo Voluntário'
        ] },
        { kind: 'paragraph', text: 'Em alternativa — Bike Register (internacional) ou Velocheckpoint. Mas para Portugal, o MyBike está integrado com a PSP — é o mais fiável.' }
      ]
    },
    {
      id: 'rules-of-road',
      title: 'Regras de circulação',
      content: [
        { kind: 'paragraph', text: 'O Código da Estrada de Portugal diz:' },
        { kind: 'checklist', items: [
          '✅ O ciclista é um utente da via pública. Lado direito da via',
          '✅ Pode circular nas ciclovias (ciclovia)',
          '✅ Pode circular na berma em estradas sem ciclovia',
          '❌ PASSEIO: apenas crianças até 10 anos podem circular no passeio. Adultos — NÃO',
          '✅ Em zonas pedonais: pode levar a bicicleta à mão, mas não circular montado',
          '✅ Two abreast: pode circular a par se não dificultar o trânsito',
          '🚦 Semáforos: as mesmas regras que para os automóveis',
          '🚦 Passadeira: desça e leve a bicicleta à mão — atravesse como peão',
          '⚠️ Álcool: 0,5 g/l para ciclistas (como para automóveis), 0,2 g/l para condutores recém-encartados (primeiros 3 anos) e condutores profissionais',
          '⚠️ Telemóvel na mão: proibido como para os automobilistas',
          '🌃 À noite: é obrigatório ter luz à frente (branca) e atrás (vermelha) + reflector. Reflectores nos pedais. Sem isso — coima de 60-300 €'
        ] }
      ]
    },
    {
      id: 'helmet',
      title: 'Capacete — obrigatório ou não',
      content: [
        { kind: 'checklist', items: [
          'Bicicleta comum (sem motor): o capacete NÃO é obrigatório por lei nem para crianças nem para adultos — mas é fortemente RECOMENDADO para todos',
          'Velocípede eléctrico com motor (velocípede com motor): o capacete é OBRIGATÓRIO para o condutor e o passageiro segundo o Código da Estrada, independentemente da idade',
          'Cadeira de criança: permitida para crianças até 7 anos, deve ter apoios para os pés e cintos',
          'Bicicleta com carga / reboque: até 80 kg no total, o reboque deve ter luzes',
          'Ralis desportivos: capacete obrigatório para todos os participantes segundo as regras da FPC'
        ] }
      ]
    },
    {
      id: 'theft-insurance',
      title: 'Roubo e seguro',
      content: [
        { kind: 'paragraph', text: 'O roubo de bicicletas em Lisboa e no Porto é um problema real, especialmente as caras. O que fazer:' },
        { kind: 'checklist', items: [
          'Apresentar queixa imediatamente na PSP: «furto de bicicleta», são necessários o número do quadro, MyBike registration, fotografia',
          'As hipóteses de encontrar aumentam se houver MyBike + fotografia com o número do quadro',
          'Seguro de bicicleta: 50-200 €/ano na Tranquilidade, Fidelidade, Generali. Cobrem: roubo, danos, responsabilidade por lesões',
          'Bicicletas caras (>1500 €): seguro fortemente aconselhável (não é obrigatório por lei)',
          'Adicionalmente: pode adicionar a bicicleta ao seguro da casa (seguro multirriscos), muitas vezes mais barato',
          'Cadeado: U-lock no mínimo 60 €, não cabos baratos',
          'Localizador GPS: AirTag no quadro ou special bike trackers (Powunity, Vodafone V-Bike)'
        ] }
      ]
    },
    {
      id: 'public-transport',
      title: 'Bicicleta nos transportes públicos',
      content: [
        { kind: 'checklist', items: [
          'Comboios CP (Lisboa-Porto, Sintra, etc.): bicicleta GRATUITA, em carruagens especiais. Nas horas de ponta há restrições — verifique as conditions',
          'Metro de Lisboa: permitido na maioria das estações excepto nas horas de ponta. Gratuito',
          'Autocarro Carris em Lisboa: bicicleta dobrável em saco — sim; normal — não',
          'Metro do Porto: bicicleta — sim, fora das horas de ponta das estações',
          'Pontes de Lisboa (Vasco da Gama, 25 de Abril): de bicicleta NÃO PODE. Use ferry ou Metro',
          'Ferries do Tejo (Cacilhas, Barreiro, Trafaria): bicicleta — sim, geralmente gratuito',
          'Boleias: não há restrições especiais',
          'Avião: embalagem em bike box, depending da companhia: Ryanair 60 €, TAP 75-100 €'
        ] }
      ]
    },
    {
      id: 'cycling-routes',
      title: 'Infra-estrutura ciclável e percursos',
      content: [
        { kind: 'checklist', items: [
          'Lisboa: ciclovia ao longo do Tejo (Belém — Cais do Sodré — Parque das Nações), Avenida da Liberdade — contínua',
          'Porto: Marginal da Foz, ciclovia até Matosinhos e Vila do Conde',
          'Marginal de Cascais: 25 km junto ao mar Lisboa → Cascais',
          'EuroVelo 1 (Atlantic Coast Route): atravessa Portugal inteiro de norte a sul',
          'Ecopistas: antigas linhas ferroviárias transformadas em ciclovias. Dão (Beira), Lousã, Tâmega',
          'Via Algarviana: 300 km pelo Algarve, exige MTB',
          'Caminho Português a Santiago de bicicleta: Porto → Santiago em 5-7 dias',
          'GIRA em Lisboa, Bira no Porto, BicLisboa, U-Bike: sistemas de bicicletas partilhadas'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Registo no MyBike', amountEUR: 0, note: 'Gratuito' },
    { label: 'Bicicleta urbana nova', amountEURMin: 200, amountEURMax: 800 },
    { label: 'E-bike dentro dos limites (250 W, 25 km/h)', amountEURMin: 800, amountEURMax: 3500 },
    { label: 'Speed pedelec / e-moped (com registo)', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Registo de e-moped no IMT', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Seguro de bicicleta', amountEURMin: 50, amountEURMax: 200, note: 'Por ano' },
    { label: 'U-lock de qualidade', amountEURMin: 60, amountEURMax: 150 },
    { label: 'Localizador GPS', amountEURMin: 30, amountEURMax: 200, note: 'AirTag ou específico' },
    { label: 'Capacete de adulto', amountEURMin: 30, amountEURMax: 200 }
  ],
  sources: [
    { title: 'MyBike — registo de bicicletas', url: 'https://www.mybike.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IMT — Veículos motorizados de duas rodas', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 41/2007 — Código da Estrada', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34490175', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'PSP — segurança rodoviária para ciclistas', url: 'https://www.psp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
