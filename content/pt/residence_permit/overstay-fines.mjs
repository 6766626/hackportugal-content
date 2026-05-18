export default {
  editorialVoice: 'hackportugal',
  id: 'overstay-fines',
  categoryId: 'residence_permit',
  title: 'Multas por ultrapassar o período de permanência em Portugal',
  tldr: 'Ultrapassar o período de permanência é uma infração grave. Segundo a Lei 23/2007 art. 192, as multas dividem-se em **quatro** intervalos: até 30 dias, 30–90, 90–180 e > 180 dias; confirme os valores exatos e os máximos na versão atual da Lei 23/2007 (art. 192) e na jurisprudência aplicável.\n\n**A multa por si só NÃO equivale a um alerta SIS**: a inscrição no Sistema de Informação Schengen (SIS) é feita por decisão separada (normalmente em caso de proibição de entrada / expulsão, não por cada multa). No entanto, ultrapassar o período de permanência aumenta drasticamente o risco de recusa na renovação e em vistos futuros. O pior caso é a permanência irregular acumulada: quanto mais tempo estiver sem estatuto, menor a probabilidade de voltar a legalizar-se.',
  tags: ['permanência irregular', 'multa', 'aima'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'categories',
      title: 'O que conta como ultrapassar o período de permanência',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Schengen de 90 dias', content: [
            { kind: 'checklist', items: [
              'Turistas com isenção de visto (BR, US, UK, CA, …) — 90 dias em quaisquer 180 dias no espaço Schengen',
              'Contagem dos dias: calculadora ec.europa.eu/home-affairs/what-we-do/policies/borders-and-visas/border-crossing/90-day-calculator',
              'Sair por 1 dia NÃO reinicia a contagem — a janela de 180 dias é móvel',
              'Excedeu por 1 dia = ultrapassou o período de permanência'
            ]}
          ]},
          { id: 'c2', title: 'Visto D caducado', content: [
            { kind: 'paragraph', text: 'O visto D dá 4 meses para entrar e comparecer na AIMA. Se perdeu a marcação na AIMA e o prazo do visto caducou — ultrapassou o período de permanência, mesmo que esteja em Portugal.' }
          ]},
          { id: 'c3', title: 'Autorização de residência caducada sem comprovativo', content: [
            { kind: 'checklist', items: [
              'A autorização de residência caducou e a renovação não foi submetida — ultrapassou o período de permanência',
              'A autorização de residência caducou, mas existe comprovativo de pedido de renovação antes do fim do prazo — o estatuto legal mantém-se',
              'Comprovativo de MdI (até 03.06.2024) — protegia contra a permanência irregular durante o período transitório',
              'Importante: o comprovativo deve ser apresentado na fronteira ao regressar a Portugal'
            ]}
          ]},
          { id: 'c4', title: 'Ultrapassar o período no âmbito da proteção temporária (Ucrânia)', content: [
            { kind: 'paragraph', text: 'A TPD foi prorrogada até 04.03.2027. Depois disso, sem transição para visto D / estatuto nacional — passa a haver permanência irregular. Enquanto a TPD estiver em vigor — não é possível haver permanência irregular.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Multas e consequências',
      content: [
        { kind: 'paragraph', text: 'Segundo a Lei 23/2007 art. 192, a lei divide a permanência irregular em **quatro** períodos. As referências abaixo servem para compreender a ordem de grandeza; confirme os mínimos/máximos exatos na versão atual da Lei 23/2007 art. 192 e da Lei 61/2025 (se aplicável), bem como na prática da AIMA:' },
        { kind: 'checklist', items: [
          'Permanência irregular **até 30 dias**: multa indicativa a partir de 80 €; limite superior — algumas centenas de euros',
          'Permanência irregular **30–90 dias**: multa mais elevada; o limite superior pode chegar a centenas de euros',
          'Permanência irregular **90–180 dias**: multa ainda mais elevada — várias centenas/cerca de mil euros',
          'Permanência irregular **superior a 180 dias**: valores máximos; risco elevado de expulsão',
          'Controlo na fronteira com permanência irregular — a multa é registada; pagamento no local, na PSP ou através do Portal AT por referência Multibanco',
          'Inclusão no SIS (alerta de proibição de entrada no espaço Schengen) — **procedimento separado**, normalmente em caso de expulsão formal ou proibição de entrada, e não automaticamente pelo simples facto de existir uma multa',
          'Crianças com menos de 16 anos não são multadas, mas a permanência irregular é registada',
          'Disponibilidade para sair voluntariamente e pagar a multa — circunstância atenuante'
        ]},
        { kind: 'warning', text: 'A permanência irregular bloqueia: novos vistos D (a AIMA/MNE verifica o histórico), pedido de autorização de residência a partir de dentro do país. Após a Lei 61/2025 (22.10.2025), a opção de Manifestação de Interesse como via massificada fica totalmente encerrada. A permanência irregular tem três saídas: (1) saída voluntária + pagamento da multa + novo visto através do consulado; (2) pedido de estatuto do tipo CPLP/estatuto de refugiado/humanitário; (3) risco: expulsão por decisão judicial.' }
      ]
    },
    {
      id: 'escape-routes',
      title: 'Como legalizar-se a partir de uma situação de permanência irregular',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Opção A — sair e submeter documentos a partir do estrangeiro (recomendado)', content: [
            { kind: 'checklist', items: [
              'Passar pelo controlo à saída — a multa será registada; pagar no aeroporto ou mais tarde através do Portal AT',
              'A partir do país de origem, submeter documentos para visto D através do consulado',
              'O cônsul vê a permanência irregular no seu histórico — pode fazer perguntas / recusar; é obrigatória uma justificação convincente (trabalho, família, contrato)',
              'Se a permanência irregular for ≤30 dias e não houver outras infrações — as hipóteses são elevadas; 90+ dias — riscos significativos'
            ]}
          ]},
          { id: 'e2', title: 'Opção B — mecanismo CPLP (se for cidadão de um país CPLP)', content: [
            { kind: 'paragraph', text: 'Brasileiros, angolanos, moçambicanos, etc. podem pedir autorização de residência CPLP estando em Portugal, mesmo em permanência irregular. A AIMA prefere conceder estatuto em vez de deportar, se existir contrato / meios de subsistência.' }
          ]},
          { id: 'e3', title: 'Opção C — casamento / união com cidadão português ou da UE', content: [
            { kind: 'paragraph', text: 'Um casamento válido / união de facto registada dá direito a Reagrupamento Familiar ou autorização de residência de familiar de cidadão da UE. A permanência irregular não bloqueia, mas a AIMA pode exigir primeiro o pagamento da multa.' }
          ]},
          { id: 'e4', title: 'Opção D — pedido por motivos humanitários (raro)', content: [
            { kind: 'paragraph', text: 'Tratamento médico, gravidez, asilo, circunstâncias familiares. Através de advogado → AIMA / tribunal. Demorado, complexo, exige fundamentação.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-check',
      title: 'Como verificar o seu estatuto',
      content: [
        { kind: 'checklist', items: [
          '🛂 Carimbos no passaporte — datas de entrada/saída do espaço Schengen',
          '📅 Calculadora 90/180: ec.europa.eu/assets/home/visa-calculator/calculator.htm',
          '🏛️ AIMA — telefonar para o número indicado na página de contactos atual aima.gov.pt; antes de ligar, confirme com o operador o tarifário dos números 808',
          '📧 Marcar atendimento na AIMA para questões de estatuto',
          '⚖️ Em casos litigiosos — advogado (Ordem dos Advogados, portal.oa.pt), consulta 50-150 €'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos — como NÃO entrar em permanência irregular',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Coloque no calendário a data de caducidade do visto/autorização de residência menos 90 dias (é o tempo que a AIMA demora a processar a renovação)',
          '📝 Renovação da autorização de residência — submeta através de portal-renovacoes.aima.gov.pt o mais cedo possível',
          '📋 Guarde TODOS os comprovativos em PDF — sem eles, a fronteira não percebe que você está com um processo em curso',
          '✈️ Não saia do espaço Schengen com uma autorização de residência caducada e sem comprovativo — pode não ser autorizado a regressar',
          '⚠️ 90 dias no espaço Schengen como turista + pedido de autorização de residência = má ideia: se a AIMA não aprovar em 90 dias, ficará em permanência irregular',
          '🔔 Em caso de mudança de morada ou perda de documentos — informe a AIMA no prazo de 60 dias',
          '📞 Se tiver dúvidas sobre o estatuto — ligue para a AIMA / consulte um jurista; a permanência irregular é pior do que a prevenção'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Multa por permanência irregular até 30 dias (Lei 23/2007 art. 192 #1)', amountEURMin: 80, amountEURMax: 400, note: 'Referência indicativa; o valor exato no caso concreto é determinado pela AIMA / tribunal nos termos do art. 192 da versão atual' },
    { label: 'Multa por permanência irregular de 30-90 dias', amountEURMin: 160, amountEURMax: 700 },
    { label: 'Multa por permanência irregular de 90-180 dias', amountEURMin: 400, amountEURMax: 1200 },
    { label: 'Multa por permanência irregular >180 dias', amountEURMin: 800, amountEURMax: 1600 },
    { label: 'Consulta de advogado', amountEURMin: 50, amountEURMax: 150 }
  ],
  sources: [
    { title: 'AIMA — Situação irregular e regularização', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — art. 192-193 (regime sancionatório)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Calculadora UE 90/180', url: 'https://ec.europa.eu/assets/home/visa-calculator/calculator.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 37-A/2024', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/37-a-2024-864229054', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
