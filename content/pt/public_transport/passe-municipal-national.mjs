export default {
  editorialVoice: 'hackportugal',
  id: 'passe-municipal-national',
  categoryId: 'public_transport',
  title: 'Passe Metropolitano e desconto nacional de 40 €/mês',
  tldr: 'Desde 2024 está em vigor o enquadramento nacional do Decreto-Lei 1-A/2024: os passes mensais de transporte público são financiados pelo Estado através do sistema passes.pt, com limite/apoio nacional até 40 €/mês e passes metropolitanos separados de cerca de 20 €/mês nas zonas aplicáveis. Não é um bilhete universal único para tudo: as regras dependem da AML, AMP, CIM/município, operador e tipo de viagens. Em 2026, compre através do cartão local: Navegante, Andante, passe CP/municipal.',
  tags: ['passe', 'transporte', 'metro', 'cp'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que mudou: o limite não é “um bilhete para todo o país”',
      content: [
        { kind: 'paragraph', text: 'O Decreto-Lei 1-A/2024 fixou o financiamento nacional dos passes mensais e dos descontos no transporte público.\n\nNa prática, isto funciona através de sistemas locais: Área Metropolitana de Lisboa, Área Metropolitana do Porto, CIM, municípios e operadores como CP, Carris, Metro Lisboa, STCP, Fertagus, Transtejo/Soflusa.' },
        { kind: 'paragraph', text: 'A ideia principal para o utilizador em 2026: o passe mensal deve enquadrar-se no apoio nacional — até 20 €/mês para o formato metropolitano/municipal aplicável e até 40 €/mês para uma combinação nacional/inter-regional mais ampla, se estiver disponível na sua zona. Mas o nome, a cobertura e a forma de compra diferem consoante a região.' },
        { kind: 'warning', text: 'Não confunda com bilhetes ocasionais, cartões turísticos e comboios CP Alfa Pendular/Intercidades. O apoio nacional ao abrigo do DL 1-A/2024 não significa que qualquer comboio ou autocarro do país esteja automaticamente incluído num único passe de 40 €.' }
      ]
    },
    {
      id: 'choose-region',
      title: '1. Identifique a sua zona de transporte',
      content: [
        { kind: 'paragraph', text: 'Comece por olhar não para a lei, mas para o mapa das deslocações: onde vive, onde trabalha/estuda e que operadores usa realmente. Em Portugal, o passe está ligado ao território e ao sistema tarifário.' },
        { kind: 'checklist', items: [
          'Lisboa e arredores: normalmente cartão Navegante, zona Área Metropolitana de Lisboa',
          'Porto e arredores: normalmente Andante, zona Área Metropolitana do Porto',
          'Entre cidades dentro da região: consulte a CIM ou Comunidade Intermunicipal',
          'CP Urbanos Lisboa/Porto/Coimbra: muitas vezes incluídos no passe local, mas confirme as estações',
          'Autocarros regionais: as regras dependem do concessionário e do município',
          'Barcos do Tejo: Transtejo/Soflusa podem estar incluídos no Navegante na zona necessária',
          'Se vive num concelho e trabalha noutro, o passe municipal pode não ser suficiente',
          'Se viaja entre regiões, procure uma opção nacional/inter-regional no passe.pt ou junto da CP'
        ] }
      ]
    },
    {
      id: 'buy-card',
      title: '2. Faça o cartão e compre o passe mensal',
      content: [
        { kind: 'paragraph', text: 'Normalmente é necessário um suporte físico ou digital: Navegante, Andante, cartão CP ou cartão municipal. Para um expat adulto sem desconto, a autorização de residência muitas vezes não é necessária: basta um documento de identificação e, por vezes, NIF/morada. Para descontos — estudante, jovens, pensionista, tarifa social — são exigidos mais documentos.' },
        { kind: 'checklist', items: [
          'Passaporte, Cartão de Cidadão ou autorização de residência',
          'NIF, se o sistema pedir associação a um perfil de cliente',
          'Morada em Portugal, se estiver a pedir um desconto municipal/metropolitano',
          'Fotografia para cartão personalizado, se o processo não for digital',
          'Comprovativo do estatuto de estudante para 4_18/sub23/estudante',
          'Comprovativo de rendimento ou situação social para Passe Social+',
          'Pagamento por Multibanco, MB WAY, cartão bancário ou em numerário num ponto de venda',
          'Verificação do prazo de validade: o passe mensal normalmente é válido por mês civil, não por 30 dias a partir da compra'
        ] },
        { kind: 'warning', text: 'A compra nos dias 28–31 pode ser para o mês civil seguinte ou para o mês atual — depende do terminal. Antes de pagar, confirme no ecrã do Multibanco/máquina o mês de ativação.' }
      ]
    },
    {
      id: 'where-to-check',
      title: '3. Confirme o direito aos 20 €/40 € através do passe.pt',
      content: [
        { kind: 'paragraph', text: 'O passe.pt é o ponto nacional de entrada para informação sobre passes apoiados. Aí confirmam-se o tipo de passe, a região, o operador e o desconto aplicável. Em 2026, esta é a forma mais segura de não pagar a mais por uma opção local quando existe uma opção metropolitana ou nacional.' },
        { kind: 'checklist', items: [
          'Abra o passe.pt e escolha a região ou o tipo de passe',
          'Compare as opções municipal, metropolitana e intermunicipal',
          'Confirme se as suas estações CP ou linhas de autocarro estão incluídas',
          'Confirme se o limite de 20 €/mês ou 40 €/mês se aplica especificamente ao seu perfil',
          'Veja as exceções: expressos, longa distância, turísticos, shuttle de aeroporto',
          'Guarde o PDF/captura de ecrã com as condições para o caso de haver disputa na bilheteira',
          'Se o operador recusar, peça a ligação para a tabela tarifária de 2026',
          'Ao mudar-se para outro concelho, faça um novo passe — o antigo pode deixar de ser a opção ideal'
        ] }
      ]
    },
    {
      id: 'common-cases',
      title: 'Cenários típicos para expats',
      content: [
        { kind: 'substeps', items: [
          { id: 'lisbon', title: 'Lisboa: Cascais/Sintra/Almada/Setúbal ↔ Lisboa', content: [
            { kind: 'paragraph', text: 'Quase sempre comece pelo Navegante. Se as viagens forem dentro da Área Metropolitana de Lisboa, o passe metropolitano costuma compensar mais do que um conjunto separado de CP + metro + autocarro. Confirme a inclusão da Fertagus ou do barco, se atravessar o Tejo.' }
          ] },
          { id: 'porto', title: 'Porto: Gaia/Matosinhos/Maia/Gondomar ↔ Porto', content: [
            { kind: 'paragraph', text: 'Consulte o Andante e as zonas necessárias. O erro de principiante é comprar uma zona demasiado pequena e receber multa ao atravessar a fronteira da zona. Para deslocações diárias, a opção metropolitana é geralmente mais simples do que o mínimo zonal.' }
          ] },
          { id: 'small-city', title: 'Cidade pequena ou mudança para o interior', content: [
            { kind: 'paragraph', text: 'Confirme o passe municipal, a CIM e a CP regional. Em cidades pequenas, o desconto pode ser tratado não numa máquina do metro, mas na Câmara Municipal, Loja do Cidadão, junto do operador de autocarros ou através do serviço escolar/social.' }
          ] }
        ] }
      ]
    },
    {
      id: 'fines-and-proof',
      title: 'Multas, validação e prova de pagamento',
      content: [
        { kind: 'paragraph', text: 'O passe deve ser validado à entrada, mesmo que seja mensal. O fiscal verifica não só o pagamento, mas também a zona correta, a personalização do cartão e o estatuto de desconto.' },
        { kind: 'checklist', items: [
          'Valide sempre o cartão no metro, autocarro, elétrico, comboio e barco',
          'Leve um documento de identificação se o cartão for personalizado',
          'Para tarifa de estudante/social, mantenha o comprovativo do estatuto no telemóvel',
          'Se o validador não funcionar, fotografe-o e procure outro validador',
          'Não entregue um passe personalizado a outra pessoa',
          'Confirme que o passe mensal foi carregado no cartão, e não apenas pago',
          'Depois de carregar através de Multibanco, por vezes é necessária ativação num validador/terminal',
          'Em caso de multa, peça o auto de notícia e as instruções para reclamação'
        ] },
        { kind: 'warning', text: 'Os fiscais normalmente não aceitam o argumento “pensei que o limite nacional de 40 € cobria tudo”. A cobertura é determinada pelo passe concreto e pelas zonas, não pelo valor geral do apoio previsto na lei.' }
      ]
    }
  ],
  costs: [
    { label: 'Passe metropolitano/municipal com apoio nacional aplicável', amountEUR: 20, note: 'Referência ao abrigo do DL 1-A/2024 para zonas aplicáveis; o nome e a cobertura reais dependem da região.' },
    { label: 'Limite/apoio mensal nacional/inter-regional', amountEUR: 40, note: 'Enquadramento nacional de apoio; não garante acesso a todos os comboios de longo curso ou autocarros expresso privados.' },
    { label: 'Emissão de cartão personalizado', amountEURMin: 3, amountEURMax: 12, note: 'Depende do sistema: Navegante, Andante, CP ou cartão municipal; a emissão urgente costuma ser mais cara.' }
  ],
  sources: [
    { title: 'Decreto-Lei 1-A/2024 — base jurídica nacional de apoio aos passes', url: 'https://dre.pt/dre/detalhe/decreto-lei/1-a-2024', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'passe.pt — portal nacional de passes e descontos', url: 'https://www.passe.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Navegante — tarifas e cartões da Área Metropolitana de Lisboa', url: 'https://www.navegante.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Andante — tarifas e zonas da Área Metropolitana do Porto', url: 'https://www.linhandante.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
