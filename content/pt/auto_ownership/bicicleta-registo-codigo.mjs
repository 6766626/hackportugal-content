export default {
  editorialVoice: 'hackportugal',
  id: 'bicicleta-registo-codigo',
  categoryId: 'auto_ownership',
  title: 'Bicicleta em Portugal — registo, carta e regras',
  tldr: 'Bicicletas normais (sem motor) em Portugal NÃO exigem registo, carta nem seguro. Desde 2022 existe um registo voluntário de bicicletas via MyBike (mybike.pt) — para proteção contra roubo. E-bikes até 250 W e 25 km/h — não requerem registo. Acima disso — é speed pedelec / e-moped e precisa de: registo no IMT, carta AM ou A1, capacete, seguro. Código da Estrada: circular do lado direito, pode usar ciclovias, passeio — só crianças até 10 anos. Capacete obrigatório para menores de 16, recomendado para todos. Bicicleta nos comboios CP — grátis fora das horas de ponta; no Metro de Lisboa — sim na maioria das estações.',
  tags: ['bicicleta', 'velocípede', 'mybike', 'e-bike', 'imt'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'no-license-needed',
      title: 'Quando o registo e a carta NÃO são necessários',
      content: [
        { kind: 'checklist', items: [
          '✅ Bicicleta normal sem motor (de qualquer tamanho, de qualquer preço) — sem qualquer registo, sem carta, sem seguro',
          '✅ E-bike até 250 W de potência e até 25 km/h de velocidade máxima com assistência ao pedalar (assist), e não por acelerador — as mesmas regras que a bicicleta normal',
          '✅ Bicicleta de carga (cargo bike) — as mesmas regras, se for sem motor ou e-bike dentro dos limites',
          '✅ Hoverboards e e-skates até 6 km/h — sem registo'
        ] },
        { kind: 'paragraph', text: 'Isto está em conformidade com a Diretiva 2002/24/CE da UE. Um pedelec até 250 W é uma «bicicleta» por lei, não um «motociclo».' }
      ]
    },
    {
      id: 'speed-pedelec-emoped',
      title: 'Quando é necessário registo e carta',
      content: [
        { kind: 'checklist', items: [
          '🛑 Speed pedelec (S-pedelec): potência >250 W OU velocidade >25 km/h com assistência ao pedalar. Isto já é e-moped',
          '🛑 E-bike com throttle (acelerador sem pedalar) se acima de 25 km/h',
          '🛑 Trotinetes elétricas acima de 25 km/h — guia à parte',
          'O que é necessário para S-pedelec / e-moped até 50 cm³ ou 4 kW:',
          '  • Registo no IMT, obtenção de matrícula',
          '  • Carta de condução categoria AM (16+) ou A1',
          '  • Seguro obrigatório',
          '  • Capacete (obrigatório para todos)',
          '  • IUC (imposto anual de circulação)',
          '  • Inspeção do IMT (vistoria) a cada 2 anos'
        ] }
      ]
    },
    {
      id: 'mybike-register',
      title: 'MyBike — registo voluntário para proteção contra roubo',
      content: [
        { kind: 'paragraph', text: 'Desde 2022 a Federação Portuguesa de Cicloturismo (FPCUB) em conjunto com a PSP lançou o mybike.pt — registo nacional voluntário de bicicletas. Gratuito. Vantagem: se a bicicleta for roubada, a polícia terá um identificador para a recuperar.' },
        { kind: 'checklist', items: [
          'Regista: número de quadro (gravado no quadro), fotos, cor, modelo, série',
          'Recebe um código QR, que cola na bicicleta',
          'Se a bicicleta for encontrada (sem proprietário) — a PSP lê o QR e vê o contacto registado',
          'Ajuda a DEVOLVER a bicicleta, se for encontrada',
          'Não substitui o seguro: o seguro da bicicleta é separado',
          'Onde registar: mybike.pt → Cidadão → Registo Voluntário'
        ] },
        { kind: 'paragraph', text: 'Em alternativa — Bike Register (internacional) ou Velocheckpoint. Mas em Portugal o MyBike está integrado com a PSP — o mais fiável.' }
      ]
    },
    {
      id: 'rules-of-road',
      title: 'Regras de circulação',
      content: [
        { kind: 'paragraph', text: 'O Código da Estrada de Portugal (Código da Estrada) diz:' },
        { kind: 'checklist', items: [
          '✅ O ciclista é utilizador da via. Lado direito da estrada',
          '✅ Pode circular nas ciclovias (ciclovia)',
          '✅ Pode circular na berma em vias sem ciclovia',
          '❌ PASSEIO: só crianças até 10 anos podem circular no passeio. Adultos — NÃO',
          '✅ Em zonas pedonais: pode conduzir a bicicleta à mão, mas não circular montado',
          '✅ A par (two abreast): pode circular a par se não prejudicar o trânsito',
          '🚦 Semáforos: as mesmas regras que para os carros',
          '🚦 Passadeira: desmonte e empurre a bicicleta — atravesse como peão',
          '⚠️ Álcool: 0,5 g/l para ciclistas (como para carros), 0,2 para jovens até 25 ou recém-encartados',
          '⚠️ Telefone na mão: proibido como para automobilistas',
          '🌃 À noite: obrigatório farol dianteiro (branco) e traseiro (vermelho) + refletor. Refletores nos pedais. Sem — coima 60-300 €'
        ] }
      ]
    },
    {
      id: 'helmet',
      title: 'Capacete — obrigatório/não',
      content: [
        { kind: 'checklist', items: [
          'Crianças até 16 anos: CAPACETE OBRIGATÓRIO (Decreto-Lei 41/2007)',
          'Adultos: RECOMENDADO, mas não obrigatório',
          'Cadeira infantil: permitida para crianças até 7 anos, deve ter apoios para os pés e cintos',
          'Bicicleta com carga / atrelado: até 80 kg no total, o atrelado deve ter luzes',
          'Provas desportivas: capacete obrigatório para todos os participantes segundo as regras da FPC',
          'Pedelec / e-moped: capacete obrigatório independentemente da idade'
        ] }
      ]
    },
    {
      id: 'theft-insurance',
      title: 'Roubo e seguro',
      content: [
        { kind: 'paragraph', text: 'O roubo de bicicletas em Lisboa e Porto é um problema real, sobretudo das mais caras. O que fazer:' },
        { kind: 'checklist', items: [
          'Participar imediatamente à PSP: «furto de bicicleta», são necessários o número de quadro, registo MyBike, fotos',
          'A probabilidade de recuperar aumenta se houver MyBike + foto com o número de quadro',
          'Seguro de bicicleta: 50-200 € por ano (Tranquilidade, Fidelidade, Generali). Cobre: roubo, danos, responsabilidade civil por lesões',
          'Bicicletas caras (>1500 €): o seguro é obrigatório',
          'Adicionalmente: pode incluir a bicicleta no seguro da casa (seguro multirriscos), muitas vezes mais barato',
          'Cadeado: U-lock no mínimo 60 €, não os de cabo baratos',
          'Localizador GPS: AirTag no quadro ou trackers específicos para bicicletas (Powunity, Vodafone V-Bike)'
        ] }
      ]
    },
    {
      id: 'public-transport',
      title: 'Bicicleta nos transportes públicos',
      content: [
        { kind: 'checklist', items: [
          'Comboios CP (Lisboa-Porto, Sintra, etc.): bicicleta GRÁTIS, em carruagens específicas. Em horas de ponta há restrições — ver condições',
          'Metro de Lisboa: permitido na maioria das estações, exceto em horas de ponta. Gratuito',
          'Autocarros Carris (Lisboa): bicicleta dobrável em mala — sim; normal — não',
          'Metro do Porto: bicicleta — sim, fora das horas de ponta',
          'Pontes de Lisboa (Vasco da Gama, 25 de Abril): de bicicleta NÃO PODE. Use ferry ou Metro',
          'Ferries no Tejo (Cacilhas, Barreiro, Trafaria): bicicleta — sim, normalmente grátis',
          'Boleias: sem restrições específicas',
          'Avião: embalar em bike box, dependendo da companhia: Ryanair 60 €, TAP 75-100 €'
        ] }
      ]
    },
    {
      id: 'cycling-routes',
      title: 'Infraestrutura ciclável e rotas',
      content: [
        { kind: 'checklist', items: [
          'Lisboa: ciclovia ao longo do Tejo (Belém — Cais do Sodré — Parque das Nações), Avenida da Liberdade — contínua',
          'Porto: Marginal da Foz, ciclovia até Matosinhos e Vila do Conde',
          'Marginal de Cascais: 25 km junto ao mar Lisboa → Cascais',
          'EuroVelo 1 (Atlantic Coast Route): atravessa Portugal de norte a sul',
          'Ecopistas: antigas linhas ferroviárias transformadas em ciclovias. Dão (Beira), Lousã, Tâmega',
          'Via Algarviana: 300 km pelo Algarve, requer BTT',
          'Caminho Português de Santiago de bicicleta: Porto → Santiago em 5-7 dias',
          'GIRA em Lisboa, Bira no Porto, BicLisboa, U-Bike: sistemas de bicicletas partilhadas'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Registo no MyBike', amountEUR: 0, note: 'Gratuito' },
    { label: 'Bicicleta citadina nova', amountEURMin: 200, amountEURMax: 800 },
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
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
