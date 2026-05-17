export default {
  editorialVoice: 'hackportugal',
  id: 'vhf-radio-marinha-cep',
  categoryId: 'food_leisure',
  title: 'Rádio marítimo VHF — licença CEP e certificado de operador',
  tldr: 'Se tiver uma estação de rádio VHF a bordo (ou se estiver a planear instalar uma), são necessários dois documentos: 1) Licença de Estação (CEP) da ANACOM (Autoridade Nacional de Comunicações — regulador nacional das comunicações) para a própria estação de rádio — 30–80 € por ano; 2) Certificado de Operador (SRC/LRC) — autorização pessoal para operar no ar, na prática a “carta” de operador. SRC (Short Range Certificate) — para VHF junto à costa, exame 80–150 €. LRC (Long Range Certificate) — para DSC e comunicações por satélite/de longo alcance. Sem estes documentos, operar em frequências marítimas é uma infracção, com coimas até 2 000 €. O canal de emergência 16 deve ser mantido em escuta permanente quando o VHF está ligado. Certificados estrangeiros RYA SRC, ICC VHF e UKHO são reconhecidos.',
  tags: ['vhf', 'radio', 'anacom', 'src', 'navegacao'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando o VHF e as suas licenças são necessários',
      content: [
        { kind: 'checklist', items: [
          'Classe de navegação Costeira e superior: VHF obrigatório (Decreto-Lei 124/2004)',
          'Classe de navegação Local: VHF não é obrigatório, mas é fortemente recomendado',
          'As marinas exigem frequentemente manter contacto no canal 16 à entrada e à saída',
          'Qualquer utilização de VHF exige dois documentos: licença da estação e certificado de operador',
          'Um VHF portátil também é considerado uma estação de rádio — aplicam-se os mesmos requisitos de licenciamento',
          'Um receptor “apenas escuta” não exige licença, mas em Portugal há restrições à posse de receptores marítimos sem função de transmissão'
        ] }
      ]
    },
    {
      id: 'cep-station',
      title: 'CEP — Licença de Estação (para a própria estação)',
      content: [
        { kind: 'paragraph', text: 'A CEP é a licença para uma instalação VHF específica no seu barco. Está associada à embarcação, não à pessoa.' },
        { kind: 'checklist', items: [
          'Emitida pela ANACOM',
          'Pedido: em anacom.pt → formulários electrónicos (e‑formulários) → Estações de barco',
          'Será necessário: registo do barco, dados do VHF (modelo, número de série, existência de DSC), MMSI',
          'MMSI (Maritime Mobile Service Identity) — identificador obrigatório de 9 dígitos para DSC',
          'O MMSI é tratado através da ANACOM e é gratuito ao pedir a CEP',
          'Custo da CEP: 30–80 € por ano (depende da categoria da embarcação)',
          'Renovação: anual; o pagamento pode ser feito por Multibanco (pagamento por caixa automático/online) ou MB WAY (serviço de pagamento móvel)'
        ] },
        { kind: 'paragraph', text: 'Se mudar de barco, a CEP não é transferível — deve pedir uma nova.' }
      ]
    },
    {
      id: 'src-operator',
      title: 'SRC — certificado de operador (para si)',
      content: [
        { kind: 'paragraph', text: 'SRC (Short Range Certificate) — certificado pessoal de operador; sem ele não pode transmitir no ar.' },
        { kind: 'checklist', items: [
          'Quem emite: ANACOM através de escolas náuticas acreditadas',
          'Idade mínima: 16 anos',
          'Curso: 8–16 horas de teoria mais prática de operação de rádio',
          'Conteúdo: regras de radiocomunicação, alfabeto fonético NATO, visão geral dos canais, utilização de DSC, procedimentos de emergência, MAYDAY/PAN-PAN/SECURITE',
          'Custo do curso: 100–200 €',
          'Exame: teste + componente prática em VHF e DSC',
          'Certificado sem prazo de validade',
          'Se já tiver RYA SRC ou ICC VHF — a ANACOM tem reconhecimento simplificado'
        ] },
        { kind: 'paragraph', text: 'LRC (Long Range Certificate) — para comunicações de longo alcance (MF/HF, satélite). Normalmente é necessário para travessias oceânicas. Curso de 30–50 horas, ~250–400 €.' }
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
              { kind: 'paragraph', text: 'Consulte a lista de cursos acreditados pela ANACOM em anacom.pt → Radiocomunicações marítimas. Muitas escolas são as mesmas que preparam para cartas de navegador de recreio. Há frequentemente pacotes: Patrão Local + SRC num único curso por ~700 €.' }
            ]
          },
          {
            id: 's2',
            title: 'Inscreva-se no curso',
            content: [
              { kind: 'paragraph', text: 'Os cursos decorrem 1–2 vezes por mês em Cascais, Lisboa, Setúbal, Vilamoura, Porto. Escolas populares: Sea Boat Academy, Náutica Escola, Cascais Marina (CMI). Normalmente são 2–3 dias completos ou 4–6 aulas ao fim do dia.' }
            ]
          },
          {
            id: 's3',
            title: 'Faça o exame',
            content: [
              { kind: 'checklist', items: [
                'Teoria: ~30 perguntas, é necessário pelo menos 80% de respostas correctas',
                'Prática: transmissão de MAYDAY/PAN-PAN, utilização de DSC',
                'Conhecimento do Regulamento das Radiocomunicações da ITU',
                'Canais: 16 (emergência/chamada), 67 (comunicação com a Capitania — autoridade portuária), 74 (operações portuárias), 70 (DSC)'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Receba o SRC',
            content: [
              { kind: 'paragraph', text: 'A escola envia os seus dados à ANACOM; em 2–4 semanas o certificado chega por correio ou por email. Pode ser electrónico (com QR) ou em cartão plástico.' }
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
          'RYA SRC — reconhecido directamente pela ANACOM, é necessário registar-se',
          'Endosso ICC VHF — reconhecido',
          'UK CAA SRC (após o Brexit) — exige novo exame em Portugal',
          'NRR/NDA da Alemanha e França — reconhecidos no âmbito da UE',
          'US FCC GMDSS / Marine Operator — é necessário verificar a equivalência',
          'Certificado russo “Radiocomunicação marítima” — normalmente não é reconhecido, é necessário fazer o curso completo',
          'Custo de registo/reconhecimento: 50–100 €'
        ] }
      ]
    },
    {
      id: 'usage-rules',
      title: 'Regras de utilização do VHF',
      content: [
        { kind: 'checklist', items: [
          'Canal 16 (156.800 MHz) — emergência e chamada: quando o VHF está ligado, deve ser mantido em escuta permanente',
          'Sequência de chamada: a sua embarcação ×3, a estação chamada ×3, depois passagem para o canal de trabalho',
          'Canal 70 — apenas para emergências/chamadas DSC, não para comunicação por voz',
          'Canal 67 — comunicação com a Capitania em Lisboa e Cascais',
          'Canal 74 — operações portuárias',
          'Canais 6, 8, 72, 77 — comunicação “embarcação–embarcação”',
          'Não saturar o canal nem manter conversas privadas no ar',
          'Não utilizar em terra — o VHF marítimo destina-se a operar na água',
          'MAYDAY — ameaça à vida, PAN-PAN — assistência urgente, SECURITE — perigo para a navegação',
          'Após uma transmissão MAYDAY, todos mantêm silêncio no canal 16 até a situação estar resolvida'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Coimas',
      content: [
        { kind: 'checklist', items: [
          'Utilização de VHF sem CEP: 250–1 500 €',
          'Operar no ar sem SRC: 500–2 000 €',
          'MAYDAY falso: 1 000–5 000 € + procedimento criminal',
          'Operar numa frequência não marítima: 250–1 000 €',
          'Interferência em radiocomunicações aeronáuticas/costeiras: procedimento criminal'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'CEP — licença da estação', amountEURMin: 30, amountEURMax: 80, note: 'Por ano' },
    { label: 'Atribuição de MMSI', amountEUR: 0, note: 'Gratuito com a CEP' },
    { label: 'Curso SRC', amountEURMin: 100, amountEURMax: 200 },
    { label: 'Exame SRC', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Curso LRC (para viagens de longo alcance)', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Reconhecimento de certificado estrangeiro', amountEURMin: 50, amountEURMax: 150 },
    { label: 'VHF fixo (Standard Horizon, Icom)', amountEURMin: 200, amountEURMax: 700 },
    { label: 'VHF portátil', amountEURMin: 100, amountEURMax: 350 }
  ],
  sources: [
    { title: 'ANACOM — Radiocomunicações marítimas', url: 'https://www.anacom.pt/render.jsp?categoryId=320', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ANACOM — Certificados de Operador', url: 'https://www.anacom.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 53/2009 — radiocomunicações', url: 'https://dre.pt/dre/detalhe/decreto-lei/53-2009-606037', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Regulamento das Radiocomunicações da ITU', url: 'https://www.itu.int/pub/R-REG-RR', kind: 'official', language: 'en', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
