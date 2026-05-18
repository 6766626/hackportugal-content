export default {
  editorialVoice: 'hackportugal',
  id: 'overstay-fines',
  categoryId: 'residence_permit',
  title: 'Coimas por ultrapassar o período de permanência em Portugal',
  tldr: 'Ultrapassar o período de permanência é uma infração grave. Nos termos da Lei 23/2007 art. 192, as coimas dividem-se em **quatro** intervalos: até 30 dias, 30–90, 90–180 e > 180 dias; confirme os montantes exatos e os máximos na versão atual da Lei 23/2007 (art. 192) e na jurisprudência aplicável. **A coima por si só NÃO equivale a um alerta SIS**: o registo no Sistema de Informação Schengen (SIS) é feito por decisão separada (normalmente em caso de proibição de entrada / expulsão, não por cada coima). No entanto, ultrapassar o período de permanência aumenta drasticamente o risco de recusa na renovação e em vistos futuros. O pior cenário é a permanência irregular acumulada: quanto mais tempo estiver sem estatuto, menor é a probabilidade de voltar a regularizar-se.',
  tags: ['permanência irregular', 'coima', 'aima'],
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
              'Ultrapassou por 1 dia = permanência irregular'
            ]}
          ]},
          { id: 'c2', title: 'Visto D caducado', content: [
            { kind: 'paragraph', text: 'O visto D dá 4 meses para entrar e comparecer na AIMA. Se perdeu a marcação na AIMA e o prazo do visto expirou — está em permanência irregular, mesmo que esteja em Portugal.' }
          ]},
          { id: 'c3', title: 'Autorização de residência caducada sem comprovativo', content: [
            { kind: 'checklist', items: [
              'A autorização de residência expirou, a renovação não foi submetida — permanência irregular',
              'A autorização de residência expirou, mas existe comprovativo de submissão da renovação antes do fim do prazo — o estatuto legal mantém-se',
              'Comprovativo de MdI (até 03.06.2024) — protegia contra permanência irregular no período transitório',
              'Importante: o comprovativo é apresentado na fronteira ao regressar a Portugal'
            ]}
          ]},
          { id: 'c4', title: 'Permanência irregular no âmbito da proteção temporária (Ucrânia)', content: [
            { kind: 'paragraph', text: 'A TPD foi prorrogada até 04.03.2027. Depois disso, sem transição para um visto D / estatuto nacional — permanência irregular. Enquanto a TPD estiver em vigor — não há permanência irregular.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Coimas e consequências',
      content: [
        { kind: 'paragraph', text: 'Nos termos da Lei 23/2007 art. 192, a lei divide a permanência irregular em **quatro** períodos. As referências abaixo servem para compreender a ordem de grandeza; confirme os mínimos/máximos exatos na versão atual da Lei 23/2007 art. 192 e da Lei 61/2025 (se aplicável), bem como na prática da AIMA:' },
        { kind: 'checklist', items: [
          'Permanência irregular **até 30 dias**: coima indicativamente a partir de 80 €; limite superior — algumas centenas de euros',
          'Permanência irregular **30–90 dias**: coima mais elevada; o limite superior pode atingir centenas de euros',
          'Permanência irregular **90–180 dias**: coima ainda mais elevada — várias centenas/cerca de mil euros',
          'Permanência irregular **mais de 180 dias**: montantes máximos; risco elevado de expulsão (afastamento)',
          'Controlo na fronteira com permanência irregular — a coima é registada; pagamento no local, na PSP ou através do Portal AT por reference Multibanco',
          'Inclusão no SIS (alerta de proibição de entrada no espaço Schengen) — **procedimento separado**, normalmente em caso de expulsão formal ou proibição de entrada, e não automaticamente pelo simples facto de haver uma coima',
          'Crianças com menos de 16 anos não recebem coima, mas a permanência irregular fica registada',
          'Disponibilidade para sair voluntariamente e pagar a coima — circunstância atenuante'
        ]},
        { kind: 'warning', text: 'A permanência irregular bloqueia: novos vistos D (a AIMA/MNE verifica o histórico), pedido de autorização de residência a partir do território nacional. Depois da Lei 61/2025 (22.10.2025), a opção de Manifestação de Interesse como via massificada ficou totalmente encerrada. Há três saídas da permanência irregular: (1) saída voluntária + pagamento da coima + novo visto através do consulado; (2) pedido de estatuto do tipo CPLP/estatuto de refugiado/humanitário; (3) risco: expulsão por decisão judicial.' }
      ]
    },
    {
      id: 'escape-routes',
      title: 'Como regularizar-se a partir de uma situação de permanência irregular',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Opção A — sair e apresentar o pedido a partir do estrangeiro (recomendado)', content: [
            { kind: 'checklist', items: [
              'Passar pelo controlo à saída — a coima será registada; pagar no aeroporto ou mais tarde através do Portal AT',
              'A partir do país de origem, apresentar o pedido de visto D através do consulado',
              'O cônsul vê a permanência irregular no seu histórico — pode fazer perguntas / recusar; uma justificação convincente (trabalho, família, contrato) é obrigatória',
              'Se a permanência irregular for ≤30 dias e não houver outras infrações — as probabilidades são elevadas; 90+ dias — riscos significativos'
            ]}
          ]},
          { id: 'e2', title: 'Opção B — mecanismo CPLP (se for cidadão de um país CPLP)', content: [
            { kind: 'paragraph', text: 'Brasileiros, angolanos, moçambicanos, etc. podem apresentar pedido de autorização de residência CPLP estando em Portugal, mesmo em permanência irregular. A AIMA prefere conceder estatuto em vez de deportar, se houver contrato / meios de subsistência.' }
          ]},
          { id: 'e3', title: 'Opção C — casamento / parceria com cidadão português ou da UE', content: [
            { kind: 'paragraph', text: 'Um casamento válido / união de facto registada dá direito a Reagrupamento Familiar ou a autorização de residência de familiar de cidadão da UE. A permanência irregular não bloqueia, mas a AIMA pode exigir primeiro o pagamento da coima.' }
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
          '🏛️ AIMA — ligar para o número indicado na página de contactos atual aima.gov.pt; antes de ligar, confirme junto do operador a tarifa dos números 808',
          '📧 Marcar atendimento na AIMA para questões de estatuto',
          '⚖️ Em casos duvidosos — advogado (Ordem dos Advogados, portal.oa.pt), consulta 50-150 €'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos — como NÃO entrar em permanência irregular',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Coloque no calendário a data de caducidade do visto/autorização de residência + menos 90 dias (é o tempo que a AIMA leva a processar a renovação)',
          '📝 Renovação da autorização de residência — submeta através de portal-renovacoes.aima.gov.pt o mais cedo possível',
          '📋 Guarde TODOS os comprovativos em PDF — sem eles, a fronteira não percebe que o seu processo está em curso',
          '✈️ Não saia do espaço Schengen com a autorização de residência caducada e sem comprovativo — podem não o deixar regressar',
          '⚠️ 90 dias no espaço Schengen como turista + pedido de autorização de residência = má ideia: se a AIMA não aprovar em 90 dias, ficará em permanência irregular',
          '🔔 Em caso de mudança de morada, perda de documentos — informe a AIMA no prazo de 60 dias',
          '📞 Se tiver dúvidas sobre o estatuto — ligue à AIMA / consulte um jurista; a permanência irregular é pior do que a prevenção'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Coima por permanência irregular até 30 dias (Lei 23/2007 art. 192 #1)', amountEURMin: 80, amountEURMax: 400, note: 'Referência; o montante exato no caso concreto é determinado pela AIMA / tribunal nos termos do art. 192 da versão atual' },
    { label: 'Coima por permanência irregular 30-90 dias', amountEURMin: 160, amountEURMax: 700 },
    { label: 'Coima por permanência irregular 90-180 dias', amountEURMin: 400, amountEURMax: 1200 },
    { label: 'Coima por permanência irregular >180 dias', amountEURMin: 800, amountEURMax: 1600 },
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
