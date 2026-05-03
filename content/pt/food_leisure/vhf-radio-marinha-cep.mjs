export default {
  editorialVoice: 'hackportugal',
  id: 'vhf-radio-marinha-cep',
  categoryId: 'food_leisure',
  title: 'Rádio marítima VHF — licença CEP e certificado de operador',
  tldr: 'Se tiver a bordo uma rádio VHF (ou planeia instalar), são necessários dois documentos: 1) Licença de Estação (CEP) da ANACOM (Autoridade Nacional de Comunicações — regulador nacional) para a própria estação — 30–80 € por ano; 2) Certificado de Operador (SRC/LRC) — habilitação pessoal para operar em rádio, basicamente a «carta» de operador. O SRC (Short Range Certificate) é para VHF costeira; exame 80–150 €. O LRC (Long Range Certificate) é para DSC e comunicações de longo curso/satélite. Sem estes documentos, operar em frequências marítimas é infração, com coimas até 2 000 €. O canal de emergência 16 deve ser monitorizado continuamente quando a VHF estiver ligada. Certificados estrangeiros RYA SRC, ICC VHF e UKHO são reconhecidos.',
  tags: ['vhf', 'rádio', 'anacom', 'src', 'navegação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando a VHF e as respetivas licenças são necessárias',
      content: [
        { kind: 'checklist', items: [
          'Classe de navegação Costeira («costeira») e superior: VHF obrigatória (Decreto-Lei 124/2004)',
          'Classe de navegação Local («local»): VHF não é obrigatória, mas é fortemente recomendada',
          'As marinas muitas vezes exigem manter escuta no canal 16 na entrada e saída',
          'Qualquer utilização de VHF exige dois documentos: licença da estação e certificado de operador',
          'Uma VHF portátil também é considerada estação de rádio — aplicam-se os mesmos requisitos de licenciamento',
          'Um recetor «só escuta» não requer licença, mas em Portugal há restrições à posse de recetores marítimos sem função de transmissão'
        ] }
      ]
    },
    {
      id: 'cep-station',
      title: 'CEP — Licença de Estação (para a própria estação)',
      content: [
        { kind: 'paragraph', text: 'O CEP é a licença para a instalação específica de VHF na sua embarcação. Está associada à embarcação, não à pessoa.' },
        { kind: 'checklist', items: [
          'Emitida pela ANACOM',
          'Pedido: em anacom.pt → formulários eletrónicos (e‑formulários) → Estações de barco',
          'Irá precisar de: registo da embarcação, dados da VHF (modelo, número de série, presença de DSC), MMSI',
          'MMSI (Maritime Mobile Service Identity) — identificador obrigatório de 9 dígitos para DSC',
          'O MMSI é atribuído pela ANACOM e é gratuito ao pedir o CEP',
          'Custo do CEP: 30–80 € por ano (depende da categoria da embarcação)',
          'Renovação: anual; pode pagar via Multibanco (pagamento em caixa/online) ou MB WAY (serviço de pagamento móvel)'
        ] },
        { kind: 'paragraph', text: 'Se mudar de embarcação, o CEP não é transferível — tem de o obter novamente.' }
      ]
    },
    {
      id: 'src-operator',
      title: 'SRC — certificado de operador (para si)',
      content: [
        { kind: 'paragraph', text: 'O SRC (Short Range Certificate) é o certificado pessoal de operador; sem ele não pode transmitir.' },
        { kind: 'checklist', items: [
          'Quem emite: ANACOM através de escolas náuticas acreditadas',
          'Idade mínima: 16 anos',
          'Curso: 8–16 horas de teoria mais prática de operação de rádio',
          'Conteúdos: regras de radiocomunicações, alfabeto fonético NATO, panorama de canais, operação com DSC, procedimentos de emergência, MAYDAY/PAN-PAN/SECURITE',
          'Custo do curso: 100–200 €',
          'Exame: teste + componente prática em VHF e DSC',
          'O certificado é vitalício',
          'Se já tiver RYA SRC ou ICC VHF — a ANACOM tem reconhecimento simplificado'
        ] },
        { kind: 'paragraph', text: 'O LRC (Long Range Certificate) é para comunicações de longo curso (MF/HF, satélite). Normalmente necessário para travessias oceânicas. Curso 30–50 horas, ~250–400 €.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Obter o SRC — passo a passo',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Encontre uma escola',
            content: [
              { kind: 'paragraph', text: 'Veja a lista de cursos acreditados pela ANACOM em anacom.pt → Radiocomunicações marítimas. Muitas escolas são as mesmas que preparam para as cartas de patrão. Muitas vezes há pacotes: Patrão Local + SRC num só curso ~700 €.' }
            ]
          },
          {
            id: 's2',
            title: 'Inscreva-se no curso',
            content: [
              { kind: 'paragraph', text: 'Os cursos decorrem 1–2 vezes por mês em Cascais, Lisboa, Setúbal, Vilamoura, Porto. Escolas populares: Sea Boat Academy, Náutica Escola, Cascais Marina (CMI). Normalmente são 2–3 dias completos ou 4–6 sessões ao final do dia.' }
            ]
          },
          {
            id: 's3',
            title: 'Faça o exame',
            content: [
              { kind: 'checklist', items: [
                'Teoria: ~30 perguntas, é necessário pelo menos 80% de respostas corretas',
                'Prática: emissão de MAYDAY/PAN-PAN, utilização de DSC',
                'Conhecimento do Regulamento de Radiocomunicações da ITU',
                'Canais: 16 (emergência/chamadas), 67 (comunicação com a Capitania — Capitania do Porto), 74 (operações portuárias), 70 (DSC)'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Obtenha o SRC',
            content: [
              { kind: 'paragraph', text: 'A escola submete os seus dados à ANACOM; em 2–4 semanas o certificado chega por correio ou por email. Pode ser eletrónico (com QR) ou em cartão plástico.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'foreign-conversion',
      title: 'Reconhecimento de certificados estrangeiros',
      content: [
        { kind: 'checklist', items: [
          'RYA SRC — é reconhecido pela ANACOM diretamente, é necessário registar-se',
          'ICC VHF endorsement — é reconhecido',
          'UK CAA SRC (após o Brexit) — é necessária reavaliação/exame em Portugal',
          'NRR/NDA da Alemanha e de França — reconhecidos no âmbito da UE',
          'US FCC GMDSS / Marine Operator — verificar a equivalência',
          'Certificado russo «Radiocomunicações marítimas» — geralmente não é reconhecido, é necessário curso completo',
          'Custo de registo/reconhecimento: 50–100 €'
        ] }
      ]
    },
    {
      id: 'usage-rules',
      title: 'Regras de utilização da VHF',
      content: [
        { kind: 'checklist', items: [
          'Canal 16 (156.800 MHz) — emergência e chamadas: quando a VHF estiver ligada deve manter escuta contínua',
          'Sequência de chamada: a sua embarcação ×3, estação chamada ×3, depois mudança para canal de trabalho',
          'Canal 70 — apenas para DSC de emergência/chamadas, não para voz',
          'Canal 67 — comunicação com a Capitania em Lisboa e Cascais',
          'Canal 74 — operações portuárias',
          'Canais 6, 8, 72, 77 — comunicações embarcação–embarcação',
          'Não saturar o canal nem manter conversas privadas em emissão',
          'Não utilizar em terra — a VHF marítima destina-se a operar na água',
          'MAYDAY — perigo para a vida, PAN-PAN — assistência urgente, SECURITE — perigo à navegação',
          'Após a emissão de um MAYDAY, todos mantêm silêncio no 16 até à resolução da situação'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Coimas',
      content: [
        { kind: 'checklist', items: [
          'Utilização de VHF sem CEP: 250–1 500 €',
          'Emissão sem SRC: 500–2 000 €',
          'MAYDAY falso: 1 000–5 000 € + procedimento criminal',
          'Operar fora das frequências marítimas: 250–1 000 €',
          'Interferências com radiocomunicações aeronáuticas/costeiras: procedimento criminal'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'CEP — licença da estação', amountEURMin: 30, amountEURMax: 80, note: 'Por ano' },
    { label: 'Atribuição de MMSI', amountEUR: 0, note: 'Gratuito com o CEP' },
    { label: 'Curso SRC', amountEURMin: 100, amountEURMax: 200 },
    { label: 'Exame SRC', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Curso LRC (para travessias de longo curso)', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Reconhecimento de certificado estrangeiro', amountEURMin: 50, amountEURMax: 150 },
    { label: 'VHF fixa (Standard Horizon, Icom)', amountEURMin: 200, amountEURMax: 700 },
    { label: 'VHF portátil', amountEURMin: 100, amountEURMax: 350 }
  ],
  sources: [
    { title: 'ANACOM — Radiocomunicações marítimas', url: 'https://www.anacom.pt/render.jsp?categoryId=320', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ANACOM — Certificados de Operador', url: 'https://www.anacom.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 53/2009 — radiocomunicações', url: 'https://dre.pt/dre/detalhe/decreto-lei/53-2009-606037', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Regulamentos de Rádio da ITU', url: 'https://www.itu.int/pub/R-REG-RR', kind: 'official', language: 'en', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
