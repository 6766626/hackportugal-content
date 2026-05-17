export default {
  editorialVoice: 'hackportugal',
  id: 'blablacar-rideshare-pt',
  categoryId: 'public_transport',
  title: 'BlaBlaCar em Portugal — boleias entre cidades',
  tldr: 'O BlaBlaCar em Portugal é útil para viagens interurbanas quando o comboio da CP é caro ou os horários são inconvenientes: Lisboa—Porto costuma custar 15–25 € por lugar, contra cerca de 30–40 € no Alfa/Intercidades sem promoção. Reserve através de blablacar.pt ou da aplicação, verifique a classificação, o número de viagens, a verificação de telefone/e-mail e as avaliações. O pagamento e as regras de cancelamento dependem da viagem específica; se o condutor cancelar, normalmente há reembolso total. Em 2026, as máscaras COVID não são obrigatórias, mas o condutor pode pedir que sejam cumpridas as suas regras.',
  tags: ['blablacar', 'boleias', 'interurbano', 'transporte'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-use',
      title: 'Quando o BlaBlaCar compensa realmente',
      content: [
        { kind: 'paragraph', text: 'O BlaBlaCar é carpooling: o condutor faz o seu próprio percurso e vende lugares livres, normalmente mais barato do que o comboio e, por vezes, mais rápido do que um autocarro com transbordos. Em Portugal funciona melhor nos corredores populares: Lisboa—Porto, Lisboa—Coimbra, Porto—Braga, Porto—Viseu, Lisboa—Algarve, Porto—Aveiro.' },
        { kind: 'checklist', items: [
          'Lisboa—Porto: frequentemente 15–25 € por lugar; o comboio Alfa/Intercidades sem promoção custa normalmente cerca de 30–40 €',
          'Lisboa—Coimbra: frequentemente 8–15 €',
          'Porto—Braga / Porto—Aveiro: frequentemente 4–8 €',
          'Lisboa—Faro / Algarve: frequentemente 15–25 €, mas no verão os lugares esgotam mais depressa',
          'Vantagem: pode partir de zonas fora das estações, e por vezes o condutor recolhe passageiros junto ao metro ou a um centro comercial',
          'Desvantagem: não há a mesma garantia que na CP/Rede Expressos; o condutor pode cancelar, atrasar-se ou alterar o ponto de encontro',
          'Para aeroportos, use com margem: para um voo, é melhor chegar 2–3 horas antes da partida, mais uma folga para o trânsito'
        ] }
      ]
    },
    {
      id: 'booking',
      title: 'Como reservar uma viagem',
      content: [
        { kind: 'substeps', items: [
          { id: 'search', title: '1. Encontre o percurso', content: [
            { kind: 'paragraph', text: 'Abra blablacar.pt ou a aplicação BlaBlaCar. Introduza a cidade de partida, a cidade de destino, a data e o número de passageiros. Para cidades grandes, veja não só “Lisboa” ou “Porto”, mas também pontos concretos: Oriente, Sete Rios, Aeroporto, Campanhã, Casa da Música.' }
          ] },
          { id: 'compare', title: '2. Compare não só o preço', content: [
            { kind: 'checklist', items: [
              'Ponto de encontro: se é fácil lá chegar de metro/autocarro',
              'Ponto de chegada: centro da cidade, estação ou periferia',
              'Tempo de viagem e paragens indicadas',
              'Tamanho da bagagem: uma mala cabin size costuma ser mais fácil de combinar; para uma mala grande, pergunte com antecedência',
              'Se é possível viajar com um animal',
              'Nível de conversa do condutor: Bla, BlaBla, BlaBlaBla',
              'Número de lugares livres atrás: 2 pessoas no banco de trás é mais confortável do que 3',
              'Avaliações e classificação do condutor'
            ] }
          ] },
          { id: 'reserve', title: '3. Reserve e escreva ao condutor', content: [
            { kind: 'paragraph', text: 'Depois da reserva, envie logo uma mensagem curta: “Olá, vou com uma mala pequena. O ponto de encontro é mesmo em Oriente?” Assim confirma que o condutor está activo e combina a bagagem antecipadamente.' }
          ] }
        ] }
      ]
    },
    {
      id: 'ratings-safety',
      title: 'Classificações, segurança e bom senso',
      content: [
        { kind: 'paragraph', text: 'O BlaBlaCar assenta na reputação. Em Portugal há muitas viagens normais do dia-a-dia, mas continua a ser um automóvel particular, não um autocarro licenciado.' },
        { kind: 'checklist', items: [
          'Escolha condutores com fotografia, telefone/e-mail confirmado e várias avaliações',
          'Veja avaliações recentes dos últimos meses, não apenas a classificação geral',
          'Verifique se o nome do condutor, o carro e a matrícula correspondem ao que está na aplicação',
          'Não aceite pagar muito fora da plataforma se a viagem tiver sido anunciada com reserva online',
          'Não entre no carro se o condutor parecer alcoolizado ou agressivo',
          'Envie a um amigo a ligação/captura de ecrã da viagem e a hora aproximada de chegada',
          'Use o cinto em qualquer lugar: as multas e o risco em Portugal são reais',
          'Para viagens nocturnas, escolha condutores com muitas avaliações',
          'Se não fala português, escreva antecipadamente em inglês; muitos condutores respondem, mas nem todos'
        ] },
        { kind: 'warning', text: 'O BlaBlaCar não substitui o transporte oficial para prazos críticos: marcação na AIMA, exame, voo internacional, cirurgia no SNS. Nesses casos, preveja uma margem ou escolha CP/Rede Expressos com direitos de passageiro claros.' }
      ]
    },
    {
      id: 'payment-cancel',
      title: 'Pagamento e cancelamento',
      content: [
        { kind: 'paragraph', text: 'Em 2026, o BlaBlaCar em Portugal pode apresentar diferentes modelos de pagamento consoante a viagem e as definições da plataforma: pagamento online no momento da reserva ou acordo com o condutor. Veja sempre o ecrã “Pagamento” antes de confirmar.' },
        { kind: 'checklist', items: [
          'Se o pagamento for online: guarde a confirmação da reserva e as regras de cancelamento da aplicação',
          'Se o pagamento for em dinheiro/MB WAY por acordo: confirme o valor antes da viagem',
          'Não transfira dinheiro antecipadamente directamente para um condutor desconhecido, se a plataforma não o exigir',
          'Se o condutor cancelar a viagem, em caso de pagamento online normalmente é reembolsado o valor total segundo as regras do BlaBlaCar',
          'Se o passageiro cancelar com antecedência, o reembolso costuma ser melhor do que num cancelamento à última hora',
          'Em caso de cancelamento com menos de 24 horas, as condições podem ser piores: parte do valor pode ser retida',
          'Se o condutor não aparecer, registe isso na aplicação e contacte o apoio',
          'Para situações de litígio, são necessárias capturas de ecrã do chat, da reserva, da hora e do local de encontro'
        ] },
        { kind: 'warning', text: 'As percentagens exactas de reembolso dependem da versão das regras do BlaBlaCar, do país da conta e do método de pagamento. Antes de uma viagem cara, abra o Help Centre do BlaBlaCar e verifique a secção cancellation/refund especificamente para a sua reserva.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'Alternativas: CP, autocarros, Tabuna, Carzz',
      content: [
        { kind: 'paragraph', text: 'O BlaBlaCar não é a única opção. Em Portugal, o transporte interurbano depende muito do trajecto: em alguns casos o comboio é mais conveniente, noutros o autocarro é mais barato, e por vezes as boleias cobrem “falhas” entre cidades.' },
        { kind: 'checklist', items: [
          'CP: a melhor opção se houver Alfa Pendular ou Intercidades directo e tiver comprado uma promoção com antecedência',
          'Rede Expressos / FlixBus: frequentemente mais baratos do que o comboio, sobretudo Lisboa—Porto e Lisboa—Algarve',
          'BlaBlaCar: é bom quando precisa de um ponto de embarque flexível ou quando o bilhete da CP ficou caro',
          'Tabuna: aparece como uma alternativa mais local/etária para procurar boleias; verifique a actividade na sua região',
          'Carzz: veja a disponibilidade de percursos e as avaliações; a cobertura pode ser mais fraca do que a do BlaBlaCar',
          'Grupos de Facebook/WhatsApp das cidades: funcionam para trajectos curtos, mas o risco é maior — não há uma classificação normal nem apoio',
          'Para deslocações regulares para o trabalho, verifique o passe intermodal/metropolitano: em Lisboa e no Porto, os passes mensais são muitas vezes mais vantajosos do que quaisquer boleias'
        ] },
        { kind: 'warning', text: 'Os serviços e grupos locais oferecem menos protecção: não há um padrão único de reembolsos, a moderação é mais fraca e é mais difícil provar o acordo. Para a primeira viagem no país, é mais seguro usar o BlaBlaCar ou uma transportadora oficial.' }
      ]
    },
    {
      id: 'covid-etiquette',
      title: 'Etiqueta COVID e uma viagem sem conflitos',
      content: [
        { kind: 'paragraph', text: 'Em 2026, em Portugal não existe uma obrigação geral de uso de máscara para viagens particulares de BlaBlaCar. Mas o condutor pode pedir máscara, arejamento ou recusar levar um passageiro com sintomas evidentes — é uma viagem particular.' },
        { kind: 'checklist', items: [
          'Se estiver com tosse ou doente, avise o condutor antes do embarque',
          'É melhor ter uma máscara consigo: custa pouco e evita conflitos',
          'Não coma no carro sem autorização',
          'Não se atrase: 5–10 minutos podem estragar o percurso para todos os passageiros',
          'Pergunte antecipadamente sobre bagagem, animal, cadeira de criança',
          'Sente-se no lugar combinado, não ocupe a bagageira toda',
          'Depois da viagem, deixe uma avaliação honesta: pontualidade, estilo de condução, comunicação'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'BlaBlaCar Lisboa—Porto', amountEURMin: 15, amountEURMax: 25, note: 'Intervalo típico por lugar num percurso popular; depende da data, da procura e do condutor.' },
    { label: 'BlaBlaCar Lisboa—Coimbra', amountEURMin: 8, amountEURMax: 15, note: 'Referência para uma viagem interurbana de média distância.' },
    { label: 'Comboio CP Lisboa—Porto sem promoção', amountEURMin: 30, amountEURMax: 40, note: 'Ordem de preço habitual para Alfa Pendular/Intercidades; as tarifas promocionais podem ser mais baixas com compra antecipada.' },
    { label: 'Comissão/taxa de serviço BlaBlaCar', amountEURMin: 0, amountEURMax: 5, note: 'Pode ser acrescentada em reservas online; o valor exacto é visível antes do pagamento.' }
  ],
  sources: [
    { title: 'BlaBlaCar Portugal — pesquisa e reserva de viagens', url: 'https://www.blablacar.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'BlaBlaCar Help Centre — reserva, pagamento, cancelamento e reembolsos', url: 'https://support.blablacar.com/hc/pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CP — Comboios de Portugal, compra de bilhetes e tarifas', url: 'https://www.cp.pt/passageiros/pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Rede Expressos — autocarros interurbanos em Portugal', url: 'https://rede-expressos.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
