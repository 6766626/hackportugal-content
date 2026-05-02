export default {
  editorialVoice: 'hackportugal',
  id: 'veterinario-24h-emergencia',
  categoryId: 'animals',
  title: 'Clínicas veterinárias 24 horas em Lisboa e no Porto',
  tldr: 'Em Portugal, a consulta veterinária de emergência chama-se urgência veterinária. Em Lisboa, usam-se frequentemente o Hospital Veterinário do Restelo, o Hospital Veterinário São Bento e a VetGarcia; no Porto — o Centro Hospitalar Veterinário Porto. Taxa típica de urgência em 2026: 50–120 € apenas pela entrada/consulta, sendo mais caro à noite e em feriados. Análises, raio-X, ecografia, internamento e cirurgia são pagos à parte. Ligue antes de sair: o funcionamento 24h e os especialistas de serviço mudam.',
  tags: ['veterinário', 'urgência', 'lisboa', 'porto'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-emergency',
      title: 'Quando ir imediatamente a uma urgência',
      content: [
        { kind: 'paragraph', text: 'A medicina veterinária de emergência em Portugal funciona como triagem: primeiro avalia-se o risco de vida, depois calculam-se o diagnóstico e o tratamento. Se o animal estiver estável, podem pedir-lhe que aguarde, mesmo durante a noite.' },
        { kind: 'checklist', items: [
          'Dificuldade em respirar, língua azul/cinzenta, asfixia',
          'Convulsões, perda de consciência, fraqueza intensa, paralisia',
          'Hemorragia, trauma após queda/acidente rodoviário, ferida aberta',
          'Suspeita de intoxicação: medicamentos, chocolate, veneno para ratos, plantas, produtos químicos',
          'Vómitos ou diarreia com sangue, vómitos repetidos, sinais de desidratação',
          'Barriga inchada no cão, inquietação, tentativas de vomitar sem resultado',
          'Gato que não consegue urinar ou que vai muitas vezes à caixa de areia sem urinar',
          'Parto com complicações, recém-nascidos fracos, dor intensa',
          'Febre, golpe de calor, tremores prolongados após calor',
          'Brinquedo, osso, fio ou anzol engolido'
        ] },
        { kind: 'warning', text: 'Não dê analgésicos humanos sem prescrição. O paracetamol é perigoso para gatos; o ibuprofeno e muitos NSAID podem causar intoxicação grave em cães e gatos.' }
      ]
    },
    {
      id: 'where-lisbon',
      title: 'Lisboa: para onde ligar 24/7',
      content: [
        { kind: 'paragraph', text: 'Em Lisboa e na área metropolitana próxima existem vários hospitais veterinários de grande dimensão com urgência. Guarde os telefones com antecedência: à noite, o Google Maps por vezes mostra “open”, mas a equipa de serviço pode ser limitada.' },
        { kind: 'checklist', items: [
          'Hospital Veterinário do Restelo — hospital de grande dimensão na zona do Restelo/Belém, frequentemente usado para diagnóstico complexo, internamento e cirurgia',
          'Hospital Veterinário São Bento — Lisboa centro, conveniente para Santos, Rato, Estrela, Príncipe Real',
          'VetGarcia — ponto frequente para urgência em Lisboa; antes de sair, confirme por telefone a presença de médico e as condições da consulta nocturna',
          'Se vive em Cascais, Oeiras, Almada ou Loures, verifique o hospital veterinário 24h mais próximo: à noite, atravessar Lisboa pode demorar mais do que chegar a um hospital local',
          'Em caso de suspeita de intoxicação, diga logo ao telefone exactamente o que o animal comeu, a quantidade aproximada e o peso do animal',
          'Se for necessário um especialista específico — neurologia, oftalmologia, ortopedia, cardiologia — confirme se está on-call precisamente hoje'
        ] },
        { kind: 'paragraph', text: 'Frase para a chamada: “Boa noite, tenho uma emergência com o meu cão/gato. Estão abertos 24 horas? Posso ir agora? Qual é o valor da consulta de urgência?”' }
      ]
    },
    {
      id: 'where-porto',
      title: 'Porto: principal referência',
      content: [
        { kind: 'paragraph', text: 'No Porto, o ponto de emergência mais conhecido é o Centro Hospitalar Veterinário Porto. É um hospital de grande dimensão com urgência, diagnóstico, internamento e várias especialidades.' },
        { kind: 'checklist', items: [
          'Ligue antes de sair e descreva os sintomas: a triagem por telefone ajuda a perceber a urgência',
          'Confirme a morada exacta da unidade do Porto, se estiver a procurar nos mapas: o grupo pode ter diferentes unidades',
          'Pergunte o preço da “consulta de urgência” e o suplemento por nocturno/fim de semana/feriado',
          'Se o animal estiver agressivo devido à dor, avise com antecedência: podem preparar um açaime, transportadora ou uma entrada separada',
          'Se estiver em Gaia, Matosinhos, Maia ou Gondomar, compare o tempo de viagem até ao CHV e até à urgência veterinária mais próxima'
        ] },
        { kind: 'warning', text: 'No Porto e em Lisboa, o trânsito e o estacionamento podem ser críticos. Em caso de estado grave, é melhor chamar Bolt/Uber com transportadora ou ir de carro com uma pessoa que consiga segurar o animal em segurança.' }
      ]
    },
    {
      id: 'costs-and-payment',
      title: 'Quanto custa uma urgência em 2026',
      content: [
        { kind: 'paragraph', text: 'A taxa da consulta de urgência cobre apenas a entrada e a primeira avaliação. Tudo o que for feito a seguir é calculado à parte: injecções, análises, radiografias, ecografia, oxigénio, internamento, cirurgia, medicamentos para levar para casa.' },
        { kind: 'checklist', items: [
          'Consulta de urgência normal: cerca de 50–120 €',
          'Noite, domingo e feriado costumam ser mais caros do que a consulta diurna',
          'Análises sanguíneas básicas acrescentam frequentemente 40–120 €',
          'O raio-X é normalmente cobrado por série de imagens; referência de 50–150 €',
          'Ecografia, TAC, endoscopia, cirurgia e internamento podem fazer a conta subir rapidamente para centenas ou milhares de euros',
          'Antes de um procedimento, peça um orçamento — uma estimativa escrita ou verbal',
          'O pagamento é geralmente por cartão, Multibanco ou dinheiro; MB WAY depende da clínica',
          'O seguro para animais raramente paga directamente: mais frequentemente, paga à clínica e apresenta o claim à seguradora'
        ] },
        { kind: 'warning', text: 'Se o orçamento for limitado, diga-o directamente: “Tenho um orçamento limitado. Pode indicar as opções essenciais primeiro?” Os médicos conseguem normalmente dividir o plano em urgente, recomendável e vigilância em casa.' }
      ]
    },
    {
      id: 'what-to-bring',
      title: 'O que levar consigo',
      content: [
        { kind: 'paragraph', text: 'Quanto mais informação levar, mais rápida será a triagem e menor o risco de repetir análises. Em Portugal, os animais de companhia devem estar identificados com microchip e registados no SIAC; para cães, a vacinação contra a raiva também é importante.' },
        { kind: 'checklist', items: [
          'Boletim sanitário ou EU Pet Passport com as vacinas',
          'Número do microchip / SIAC, se existir',
          'Lista de medicamentos, dosagens e hora da última toma',
          'Fotografia ou embalagem da substância que o animal possa ter ingerido',
          'Vídeo da crise, claudicação, tosse ou comportamento estranho',
          'Análises anteriores, relatórios, resultados de ecografia/raio-X',
          'Transportadora para gato ou cão pequeno; trela e açaime para cão',
          'Resguardo, toalha, saco para amostra de vómito/fezes, se for seguro',
          'NIF do dono, se for necessário recibo/fatura para o seguro ou para registo de despesas'
        ] },
        { kind: 'paragraph', text: 'Se o animal foi importado recentemente, informe o país de origem e a data de entrada. Para os médicos, são importantes os riscos parasitários, a vacinação, o stress do voo e possíveis doenças raras em Portugal.' }
      ]
    },
    {
      id: 'aftercare',
      title: 'Depois da consulta: documentos e controlo',
      content: [
        { kind: 'paragraph', text: 'Depois da urgência, peça um relatório clínico. Será necessário para o seu veterinário habitual, para o seguro e em caso de nova visita a outro hospital.' },
        { kind: 'checklist', items: [
          'Obtenha o diagnóstico ou a conclusão preliminar em português',
          'Peça os resultados das análises em PDF ou por email',
          'Confirme o esquema de medicação: dose, frequência, quantos dias, com ou sem comida',
          'Anote os red flags: com que sintomas deve regressar imediatamente',
          'Pergunte se é necessário controlo dentro de 24–72 horas',
          'Guarde a fatura-recibo e o orçamento para a seguradora',
          'Se o animal ficar internado, confirme o custo por dia, as regras das chamadas e a hora das actualizações'
        ] },
        { kind: 'warning', text: 'Se o estado piorar depois da alta — não espere pela manhã. Ligue para o hospital onde foi atendido e indique o número da ficha/processo, se lhe tiver sido dado.' }
      ]
    }
  ],
  costs: [
    { label: 'Consulta de urgência', amountEURMin: 50, amountEURMax: 120, note: 'Intervalo típico para uma avaliação de urgência em 2026; noite, domingo e feriados podem ser mais caros' },
    { label: 'Análises sanguíneas básicas', amountEURMin: 40, amountEURMax: 120, note: 'Referência; depende do painel e da urgência do laboratório' },
    { label: 'Raio-X/diagnóstico', amountEURMin: 50, amountEURMax: 150, note: 'Por série de imagens ou diagnóstico visual básico; exames complexos são mais caros' },
    { label: 'Internamento/cirurgia', amountEURMin: 150, amountEURMax: 2000, note: 'Varia muito conforme o diagnóstico, oxigénio, cirurgia, anestesia e duração do internamento' }
  ],
  sources: [
    { title: 'Ordem dos Médicos Veterinários — regulação profissional dos veterinários', url: 'https://www.omv.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGAV — animais de companhia, identificação, regras sanitárias', url: 'https://www.dgav.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Hospital Veterinário do Restelo — urgência e serviços hospitalares', url: 'https://www.hospitalveterinariodorestelo.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Centro Hospitalar Veterinário — Porto', url: 'https://www.chv.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
