export default {
  editorialVoice: 'hackportugal',
  id: 'veterinario-24h-emergencia',
  categoryId: 'animals',
  title: 'Clínicas veterinárias 24 horas em Lisboa e no Porto',
  tldr: 'Em Portugal, o atendimento veterinário de emergência chama-se urgência veterinária. Em Lisboa, usam-se frequentemente o Hospital Veterinário do Restelo, o Hospital Veterinário São Bento e a VetGarcia; no Porto — o Centro Hospitalar Veterinário Porto. Taxa típica de urgência em 2026: 50–120 € apenas pela entrada/consulta, sendo mais caro à noite e em feriados. Análises, raio-X, ecografia, internamento e cirurgia são pagos à parte. Antes de se deslocar, telefone: o funcionamento 24h e os especialistas de serviço mudam.',
  tags: ['veterinário', 'urgência', 'lisboa', 'porto'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-emergency',
      title: 'Quando ir imediatamente à urgência',
      content: [
        { kind: 'paragraph', text: 'A medicina veterinária de emergência em Portugal funciona por triagem: primeiro avalia-se o risco de vida, depois calculam-se os diagnósticos e o tratamento. Se o animal estiver estável, podem pedir-lhe que espere, mesmo à noite.' },
        { kind: 'checklist', items: [
          'Dificuldade em respirar, língua azul/cinzenta, asfixia',
          'Convulsões, perda de consciência, fraqueza intensa, paralisia',
          'Hemorragia, trauma após queda/acidente rodoviário, ferida aberta',
          'Suspeita de intoxicação: medicamentos, chocolate, veneno para ratos, plantas, químicos',
          'Vómitos ou diarreia com sangue, vómitos repetidos, sinais de desidratação',
          'Abdómen dilatado no cão, inquietação, tentativas de vomitar sem resultado',
          'Gato que não consegue urinar ou que vai frequentemente à caixa sem urina',
          'Parto com complicações, recém-nascidos fracos, dor intensa',
          'Febre, golpe de calor, tremores prolongados após calor',
          'Brinquedo, osso, fio ou anzol engolido'
        ] },
        { kind: 'warning', text: 'Não dê analgésicos humanos sem prescrição. O paracetamol é perigoso para gatos; o ibuprofeno e muitos NSAID podem causar intoxicação grave em cães e gatos.' }
      ]
    },
    {
      id: 'where-lisbon',
      title: 'Lisboa: para onde telefonar 24/7',
      content: [
        { kind: 'paragraph', text: 'Em Lisboa e na área metropolitana próxima existem vários hospitais veterinários de grande dimensão com urgência. Guarde os números com antecedência: à noite, o Google Maps por vezes mostra “open”, mas a equipa de serviço pode estar limitada.' },
        { kind: 'checklist', items: [
          'Hospital Veterinário do Restelo — hospital grande na zona do Restelo/Belém, frequentemente usado para diagnósticos complexos, internamento e cirurgia',
          'Hospital Veterinário São Bento — Lisboa central, conveniente para Santos, Rato, Estrela, Príncipe Real',
          'VetGarcia — ponto frequente para urgência em Lisboa; antes de sair, confirme por telefone a presença de médico e as condições do atendimento noturno',
          'Se vive em Cascais, Oeiras, Almada ou Loures, verifique o hospital veterinário 24h mais próximo: à noite, atravessar Lisboa pode demorar mais do que chegar a um hospital local',
          'Em caso de suspeita de intoxicação, diga logo ao telefone exatamente o que o animal ingeriu, a quantidade aproximada e o peso do animal',
          'Se for necessário um especialista específico — neurologia, oftalmologia, ortopedia, cardiologia — confirme se está on-call nesse dia'
        ] },
        { kind: 'paragraph', text: 'Frase para telefonar: “Boa noite, tenho uma emergência com o meu cão/gato. Estão abertos 24 horas? Posso ir agora? Qual é o valor da consulta de urgência?”' }
      ]
    },
    {
      id: 'where-porto',
      title: 'Porto: principal referência',
      content: [
        { kind: 'paragraph', text: 'No Porto, o ponto de emergência mais conhecido é o Centro Hospitalar Veterinário Porto. É um hospital grande com urgência, diagnóstico, internamento e várias especialidades.' },
        { kind: 'checklist', items: [
          'Telefone antes de sair e descreva os sintomas: a triagem por telefone ajuda a perceber a urgência',
          'Confirme o endereço exato da unidade do Porto, se estiver a procurar em mapas: o grupo pode ter diferentes unidades',
          'Pergunte o preço da “consulta de urgência” e o suplemento por noturno/fim de semana/feriado',
          'Se o animal estiver agressivo por dor, avise com antecedência: podem preparar um açaime, uma transportadora ou uma entrada separada',
          'Se estiver em Gaia, Matosinhos, Maia ou Gondomar, compare o tempo de viagem até ao CHV e até à urgência veterinária mais próxima'
        ] },
        { kind: 'warning', text: 'No Porto e em Lisboa, o trânsito e o estacionamento podem ser críticos. Em estado grave, é melhor chamar Bolt/Uber com transportadora ou ir de carro com uma pessoa que consiga segurar o animal em segurança.' }
      ]
    },
    {
      id: 'costs-and-payment',
      title: 'Quanto custa a urgência em 2026',
      content: [
        { kind: 'paragraph', text: 'A taxa de atendimento de urgência é apenas a entrada e a primeira avaliação. Tudo o que for feito a seguir é calculado à parte: injeções, análises, radiografias, ecografia, oxigénio, internamento, cirurgia, medicamentos para casa.' },
        { kind: 'checklist', items: [
          'Consulta de urgência normal: cerca de 50–120 €',
          'Noite, domingo e feriado costumam ser mais caros do que o atendimento diurno',
          'Análises de sangue básicas acrescentam frequentemente 40–120 €',
          'O raio-X é normalmente cobrado por série de imagens; referência: 50–150 €',
          'Ecografia, TAC, endoscopia, cirurgia e internamento podem rapidamente elevar a conta para centenas ou milhares de euros',
          'Antes do procedimento, peça um orçamento — estimativa escrita ou verbal',
          'O pagamento é normalmente por cartão, Multibanco ou numerário; MB WAY depende da clínica',
          'O seguro para animais raramente paga diretamente: na maioria dos casos, paga à clínica e apresenta um claim à seguradora'
        ] },
        { kind: 'warning', text: 'Se o orçamento for limitado, diga-o diretamente: “Tenho um orçamento limitado. Pode indicar as opções essenciais primeiro?” Os médicos normalmente conseguem dividir o plano entre urgente, desejável e observação em casa.' }
      ]
    },
    {
      id: 'what-to-bring',
      title: 'O que levar consigo',
      content: [
        { kind: 'paragraph', text: 'Quanto mais dados levar, mais rápida será a triagem e menor o risco de repetir análises. Em Portugal, os animais de companhia devem estar identificados com microchip e registados no SIAC; para cães, a vacinação contra a raiva também é importante.' },
        { kind: 'checklist', items: [
          'Boletim sanitário ou EU Pet Passport com vacinas',
          'Número do microchip / SIAC, se existir',
          'Lista de medicamentos, dosagens e hora da última toma',
          'Fotografia ou embalagem da substância que o animal possa ter ingerido',
          'Vídeo da crise, claudicação, tosse ou comportamento estranho',
          'Análises anteriores, relatórios, resultados de ecografia/raio-X',
          'Transportadora para gato ou cão pequeno; trela e açaime para cão',
          'Resguardo, toalha, saco para amostra de vómito/fezes, se for seguro',
          'NIF do tutor, se precisar de recibo/fatura para o seguro ou para registo de despesas'
        ] },
        { kind: 'paragraph', text: 'Se o animal foi importado recentemente, informe o país de origem e a data de entrada. Para os médicos, são importantes os riscos parasitários, a vacinação, o stress do voo e possíveis doenças raras em Portugal.' }
      ]
    },
    {
      id: 'aftercare',
      title: 'Depois da consulta: documentos e controlo',
      content: [
        { kind: 'paragraph', text: 'Após a urgência, peça um relatório clínico. Será necessário para o seu veterinário habitual, para o seguro e em caso de nova visita a outro hospital.' },
        { kind: 'checklist', items: [
          'Obtenha o diagnóstico ou uma conclusão preliminar em português',
          'Peça os resultados das análises em PDF ou por email',
          'Confirme o esquema de medicação: dose, frequência, durante quantos dias, com ou sem comida',
          'Anote os red flags: com que sintomas deve regressar imediatamente',
          'Pergunte se é necessário controlo dentro de 24–72 horas',
          'Guarde a fatura-recibo e o orçamento para a seguradora',
          'Se o animal ficar internado, confirme o custo por dia, as regras para telefonemas e o horário das atualizações'
        ] },
        { kind: 'warning', text: 'Se o estado piorar após a alta — não espere pela manhã. Telefone para o hospital onde foi atendido e indique o número da ficha/processo, se lhe tiver sido dado.' }
      ]
    }
  ],
  costs: [
    { label: 'Consulta de urgência', amountEURMin: 50, amountEURMax: 120, note: 'Intervalo típico para uma avaliação de urgência em 2026; noite, domingo e feriados podem ser mais caros' },
    { label: 'Análises de sangue básicas', amountEURMin: 40, amountEURMax: 120, note: 'Referência; depende do painel e da urgência do laboratório' },
    { label: 'Raio-X/diagnóstico', amountEURMin: 50, amountEURMax: 150, note: 'Por série de imagens ou diagnóstico visual básico; exames complexos são mais caros' },
    { label: 'Internamento/cirurgia', amountEURMin: 150, amountEURMax: 2000, note: 'Depende muito do diagnóstico, oxigénio, cirurgia, anestesia e duração da hospitalização' }
  ],
  sources: [
    { title: 'Ordem dos Médicos Veterinários — regulação profissional dos veterinários', url: 'https://www.omv.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGAV — animais de companhia, identificação, regras sanitárias', url: 'https://www.dgav.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Hospital Veterinário do Restelo — urgência e serviços hospitalares', url: 'https://www.hospitalveterinariodorestelo.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Centro Hospitalar Veterinário — Porto', url: 'https://www.chv.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
