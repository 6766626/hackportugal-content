export default {
  editorialVoice: 'hackportugal',
  id: 'blablacar-rideshare-pt',
  categoryId: 'public_transport',
  title: 'BlaBlaCar em Portugal — boleias entre cidades',
  tldr: 'O BlaBlaCar em Portugal é útil para viagens interurbanas quando o comboio da CP é caro ou o horário é inconveniente: Lisboa—Porto costuma ficar em 15–25 € por lugar, contra cerca de 30–40 € num Alfa/Intercidades sem promoção. Reserve através de blablacar.pt ou da aplicação, veja a classificação, o número de viagens, a verificação de telefone/e-mail e as avaliações. O pagamento e as regras de cancelamento dependem da viagem concreta; se o condutor cancelar, normalmente há reembolso total. Em 2026, as máscaras COVID não são obrigatórias, mas o condutor pode pedir as suas próprias regras.',
  tags: ['blablacar', 'boleias', 'interurbano', 'transportes'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-use',
      title: 'Quando o BlaBlaCar compensa realmente',
      content: [
        { kind: 'paragraph', text: 'O BlaBlaCar é carpooling: o condutor segue o seu próprio trajecto e vende lugares livres, normalmente mais barato do que o comboio e por vezes mais rápido do que o autocarro com transbordos.\n\nEm Portugal funciona melhor nos corredores populares: Lisboa—Porto, Lisboa—Coimbra, Porto—Braga, Porto—Viseu, Lisboa—Algarve, Porto—Aveiro.' },
        { kind: 'checklist', items: [
          'Lisboa—Porto: frequentemente 15–25 € por lugar; o comboio Alfa/Intercidades sem promoção costuma rondar 30–40 €',
          'Lisboa—Coimbra: frequentemente 8–15 €',
          'Porto—Braga / Porto—Aveiro: frequentemente 4–8 €',
          'Lisboa—Faro / Algarve: frequentemente 15–25 €, mas no verão os lugares esgotam mais depressa',
          'Vantagem: pode sair de zonas fora das estações, por vezes o condutor recolhe passageiros junto ao metro ou a um centro comercial',
          'Desvantagem: não há garantia como na CP/Rede Expressos; o condutor pode cancelar, atrasar-se ou alterar o ponto de encontro',
          'Para aeroportos, use com margem: para um voo é melhor chegar 2–3 horas antes da partida, mais uma margem para o trânsito'
        ] }
      ]
    },
    {
      id: 'booking',
      title: 'Como reservar uma viagem',
      content: [
        { kind: 'substeps', items: [
          { id: 'search', title: '1. Encontre a rota', content: [
            { kind: 'paragraph', text: 'Abra blablacar.pt ou a aplicação BlaBlaCar. Introduza a cidade de partida, a cidade de destino, a data e o número de passageiros. Para cidades grandes, veja não só “Lisboa” ou “Porto”, mas também pontos concretos: Oriente, Sete Rios, Aeroporto, Campanhã, Casa da Música.' }
          ] },
          { id: 'compare', title: '2. Compare mais do que o preço', content: [
            { kind: 'checklist', items: [
              'Ponto de encontro: se é fácil lá chegar de metro/autocarro',
              'Ponto de saída: centro da cidade, estação ou periferia',
              'Tempo de viagem e paragens indicadas',
              'Tamanho da bagagem: uma mala cabin size é normalmente mais fácil de combinar; para uma mala grande, pergunte com antecedência',
              'Se é possível viajar com animal',
              'Nível de conversa do condutor: Bla, BlaBla, BlaBlaBla',
              'Número de lugares livres atrás: 2 pessoas no banco traseiro é mais confortável do que 3',
              'Avaliações e classificação do condutor'
            ] }
          ] },
          { id: 'reserve', title: '3. Reserve e escreva ao condutor', content: [
            { kind: 'paragraph', text: 'Depois de reservar, envie logo uma mensagem curta: “Olá, vou com uma mala pequena. O ponto de encontro é mesmo em Oriente?” Assim confirma que o condutor está activo e combina a bagagem com antecedência.' }
          ] }
        ] }
      ]
    },
    {
      id: 'ratings-safety',
      title: 'Classificação, segurança e bom senso',
      content: [
        { kind: 'paragraph', text: 'O BlaBlaCar assenta na reputação. Em Portugal há muitas viagens normais do dia-a-dia, mas continua a ser um automóvel particular, não um autocarro licenciado.' },
        { kind: 'checklist', items: [
          'Escolha condutores com fotografia, telefone/e-mail confirmado e várias avaliações',
          'Veja avaliações recentes dos últimos meses, não apenas a classificação geral',
          'Confirme se o nome do condutor, o carro e a matrícula coincidem com a aplicação',
          'Não aceite pagar muito fora da plataforma se a viagem tiver sido anunciada com reserva online',
          'Não entre no carro se o condutor parecer alcoolizado ou agressivo',
          'Envie a um amigo a ligação/captura de ecrã da viagem e a hora aproximada de chegada',
          'Use o cinto em qualquer lugar: as multas e o risco em Portugal são reais',
          'Para viagens nocturnas, escolha condutores com um grande número de avaliações',
          'Se não fala português, escreva antecipadamente em inglês; muitos condutores respondem, mas nem todos'
        ] },
        { kind: 'warning', text: 'O BlaBlaCar não substitui transporte oficial para prazos críticos: marcação AIMA, exame, voo internacional, operação no SNS. Nesses casos, preveja margem ou use CP/Rede Expressos com direitos de passageiro claros.' }
      ]
    },
    {
      id: 'payment-cancel',
      title: 'Pagamento e cancelamento',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o BlaBlaCar em Portugal pode apresentar modelos de pagamento diferentes consoante a viagem e as definições da plataforma: pagamento online no momento da reserva ou acordo com o condutor. Veja sempre o ecrã “Pagamento” antes de confirmar.' },
        { kind: 'checklist', items: [
          'Se o pagamento for online: guarde a confirmação da reserva e as regras de cancelamento da aplicação',
          'Se o pagamento for em dinheiro/MB WAY por acordo: confirme o montante antes da viagem',
          'Não transfira dinheiro antecipadamente directamente para um condutor desconhecido se a plataforma não o exigir',
          'Se o condutor cancelar a viagem, com pagamento online normalmente é devolvido o valor total segundo as regras do BlaBlaCar',
          'Se o passageiro cancelar com antecedência, o reembolso costuma ser melhor do que num cancelamento à última hora',
          'Em caso de cancelamento a menos de 24 horas, as condições podem ser piores: parte do valor pode ser retida',
          'Se o condutor não aparecer, registe isso na aplicação e contacte o apoio',
          'Para situações disputadas, são necessárias capturas de ecrã do chat, da reserva, da hora e do local de encontro'
        ] },
        { kind: 'warning', text: 'As percentagens exactas de reembolso dependem da versão das regras do BlaBlaCar, do país da conta e do método de pagamento. Antes de uma viagem cara, abra o Centro de Ajuda BlaBlaCar e verifique a secção cancelamento/reembolso especificamente para a sua reserva.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'Alternativas: CP, autocarros, Tabuna, Carzz',
      content: [
        { kind: 'paragraph', text: 'O BlaBlaCar não é a única opção. Em Portugal, o transporte interurbano depende muito do destino: nalguns casos o comboio é mais cómodo, noutros o autocarro é mais barato, e noutros as boleias cobrem “buracos” entre cidades.' },
        { kind: 'checklist', items: [
          'CP: a melhor opção se houver Alfa Pendular ou Intercidades directo e tiver comprado uma promoção com antecedência',
          'Rede Expressos / FlixBus: frequentemente mais barato do que o comboio, sobretudo Lisboa—Porto e Lisboa—Algarve',
          'BlaBlaCar: é bom quando precisa de um ponto de embarque flexível ou quando o bilhete da CP ficou caro',
          'Tabuna: aparece como alternativa mais local/antiga para procurar boleias; verifique a actividade na sua região',
          'Carzz: veja a disponibilidade de rotas e as avaliações; a cobertura pode ser mais fraca do que a do BlaBlaCar',
          'Grupos de Facebook/WhatsApp das cidades: funcionam para trajectos curtos, mas o risco é maior — não há uma classificação normal nem apoio',
          'Para deslocações regulares para o trabalho, verifique o passe intermodal/metropolitano: em Lisboa e no Porto, os passes mensais compensam frequentemente mais do que quaisquer boleias'
        ] },
        { kind: 'warning', text: 'Os serviços e grupos locais têm menos protecção: não há um padrão único de reembolsos, a moderação é mais fraca e é mais difícil provar o acordo. Para a primeira viagem no país, é mais seguro usar BlaBlaCar ou um operador oficial.' }
      ]
    },
    {
      id: 'covid-etiquette',
      title: 'Etiqueta COVID e uma viagem sem conflitos',
      content: [
        { kind: 'paragraph', text: 'Em 2026, em Portugal não existe uma obrigatoriedade geral de máscara para viagens particulares de BlaBlaCar. Mas o condutor tem o direito de pedir máscara, ventilação ou recusar um passageiro com sintomas evidentes — é uma viagem privada.' },
        { kind: 'checklist', items: [
          'Se estiver com tosse ou doente, avise o condutor antes do embarque',
          'É melhor levar uma máscara consigo: custa pouco e evita conflitos',
          'Não coma no carro sem autorização',
          'Não se atrase: 5–10 minutos podem estragar o percurso a todos os passageiros',
          'Pergunte antecipadamente sobre bagagem, animal, cadeira de criança',
          'Sente-se no lugar combinado, não ocupe toda a bagageira',
          'Depois da viagem, deixe uma avaliação honesta: pontualidade, estilo de condução, comunicação'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'BlaBlaCar Lisboa—Porto', amountEURMin: 15, amountEURMax: 25, note: 'Intervalo típico por lugar numa rota popular; depende da data, da procura e do condutor.' },
    { label: 'BlaBlaCar Lisboa—Coimbra', amountEURMin: 8, amountEURMax: 15, note: 'Referência para uma viagem interurbana de média distância.' },
    { label: 'Comboio CP Lisboa—Porto sem promoção', amountEURMin: 30, amountEURMax: 40, note: 'Ordem de grandeza habitual do preço para Alfa Pendular/Intercidades; as tarifas promocionais podem ser mais baixas com compra antecipada.' },
    { label: 'Comissão/taxa de serviço BlaBlaCar', amountEURMin: 0, amountEURMax: 5, note: 'Pode ser acrescentada na reserva online; o valor exacto é visível antes do pagamento.' }
  ],
  sources: [
    { title: 'BlaBlaCar Portugal — pesquisa e reserva de viagens', url: 'https://www.blablacar.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Centro de Ajuda BlaBlaCar — reserva, pagamento, cancelamento e reembolsos', url: 'https://support.blablacar.com/hc/pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CP — Comboios de Portugal, compra de bilhetes e tarifas', url: 'https://www.cp.pt/passageiros/pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Rede Expressos — autocarros interurbanos em Portugal', url: 'https://rede-expressos.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
