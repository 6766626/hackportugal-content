export default {
  editorialVoice: 'hackportugal',
  id: 'overstay-fines',
  categoryId: 'residence_permit',
  title: 'Multas por excesso de permanência em Portugal',
  tldr: 'O excesso de permanência é uma infração grave. Ultrapassar os 90 dias no espaço Schengen / o prazo do visto / o prazo da autorização de residência implica multas de 80–700 €, registo no Sistema de Informação Schengen (SIS II), risco de recusa na renovação e em futuros vistos durante 1-5 anos e, em casos graves, proibição de entrada no espaço Schengen. O pior é o excesso de permanência acumulado: quanto mais tempo estiver sem estatuto, menor é a probabilidade de voltar a legalizar-se.',
  tags: ['excesso de permanência', 'multa', 'aima'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'categories',
      title: 'O que conta como excesso de permanência',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Schengen de 90 dias', content: [
            { kind: 'checklist', items: [
              'Turistas com isenção de visto (BR, US, UK, CA, …) — 90 dias em qualquer período de 180 dias no espaço Schengen',
              'Contagem dos dias: calculadora ec.europa.eu/home-affairs/what-we-do/policies/borders-and-visas/border-crossing/90-day-calculator',
              'Sair durante 1 dia NÃO reinicia o contador — a janela de 180 dias é móvel',
              'Ultrapassou por 1 dia = excesso de permanência'
            ]}
          ]},
          { id: 'c2', title: 'Visto D caducado', content: [
            { kind: 'paragraph', text: 'O visto D dá 4 meses para entrar e comparecer na AIMA. Se perdeu a marcação na AIMA e o visto caducou — está em excesso de permanência, mesmo que se encontre em Portugal.' }
          ]},
          { id: 'c3', title: 'Autorização de residência caducada sem comprovativo', content: [
            { kind: 'checklist', items: [
              'A autorização de residência caducou e a renovação não foi submetida — excesso de permanência',
              'A autorização de residência caducou, mas existe comprovativo de submissão da renovação antes do fim do prazo — o estatuto legal mantém-se',
              'Comprovativo de MdI (até 03.06.2024) — protegia contra excesso de permanência durante o período transitório',
              'Importante: o comprovativo deve ser apresentado na fronteira ao regressar a Portugal'
            ]}
          ]},
          { id: 'c4', title: 'Excesso de permanência ao abrigo da proteção temporária (Ucrânia)', content: [
            { kind: 'paragraph', text: 'A TPD foi prorrogada até 04.03.2027. Depois disso, sem transição para visto D / estatuto nacional — há excesso de permanência. Enquanto a TPD estiver em vigor — não há excesso de permanência.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Multas e consequências',
      content: [
        { kind: 'paragraph', text: 'Ao abrigo da Lei 23/2007 arts. 192–193 e do Decreto-Lei 37-A/2024:' },
        { kind: 'checklist', items: [
          'Excesso de permanência até 30 dias: multa de 80–160 €',
          'Excesso de permanência de 30–90 dias: multa de 160–300 €',
          'Excesso de permanência de 90+ dias: multa de 300–700 € + possível proibição de entrada',
          'Controlo na fronteira com excesso de permanência — a multa é paga no local (ou mais tarde na PSP); registo no SIS II',
          'Com duas + situações de excesso de permanência registadas — possível inclusão numa proibição de entrada em todo o espaço Schengen (1-5 anos)',
          'Não são aplicadas multas a crianças com menos de 16 anos, mas o excesso de permanência fica registado',
          'Disponibilidade para sair voluntariamente e pagar a multa — circunstância atenuante'
        ]},
        { kind: 'warning', text: 'O excesso de permanência bloqueia: novos vistos D (a AIMA/MNE verifica o histórico), pedido de autorização de residência a partir do território nacional (nos termos dos art. 88/89 era exigida entrada legal — após o Decreto-Lei 37-A/2024, a opção 88.2 ficou encerrada, 89.2 — apenas ao abrigo do regime transitório). Do excesso de permanência há três saídas: (1) saída voluntária + pagamento da multa + novo visto através do consulado; (2) pedido de estatuto do tipo CPLP/estatuto de refugiado/humanitário; (3) risco: deportação por decisão judicial.' }
      ]
    },
    {
      id: 'escape-routes',
      title: 'Como legalizar-se a partir de uma situação de excesso de permanência',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Opção A — sair e submeter os documentos a partir do estrangeiro (recomendado)', content: [
            { kind: 'checklist', items: [
              'Passar pelo controlo à saída — a multa ficará registada; pagar no aeroporto ou mais tarde através do Portal AT',
              'A partir do país de origem, submeter os documentos para um visto D através do consulado',
              'O cônsul vê o excesso de permanência no seu histórico — pode fazer perguntas / recusar; uma justificação convincente (trabalho, família, contrato) é obrigatória',
              'Se o excesso de permanência for ≤30 dias e não houver outras infrações — as probabilidades são elevadas; 90+ dias — os riscos são significativos'
            ]}
          ]},
          { id: 'e2', title: 'Opção B — mecanismo CPLP (se for cidadão de um país CPLP)', content: [
            { kind: 'paragraph', text: 'Brasileiros, angolanos, moçambicanos, etc. podem submeter documentos para uma autorização de residência CPLP estando em Portugal, mesmo com excesso de permanência. A AIMA prefere conceder o estatuto em vez de deportar, se houver contrato / meios.' }
          ]},
          { id: 'e3', title: 'Opção C — casamento / união com cidadão português ou da União Europeia', content: [
            { kind: 'paragraph', text: 'Um casamento válido / união de facto registada dá direito ao Reagrupamento Familiar ou à autorização de residência de familiar de cidadão da União Europeia. O excesso de permanência não bloqueia, mas a AIMA pode exigir que a multa seja paga primeiro.' }
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
          '🏛️ AIMA — ligar para o número indicado na página de contactos atualizada em aima.gov.pt; antes de ligar, confirme junto do operador a tarifa dos números 808',
          '📧 Marcar atendimento na AIMA sobre questões de estatuto',
          '⚖️ Em casos controversos — advogado (Ordem dos Advogados, portal.oa.pt), consulta 50-150 €'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos — como NÃO entrar em excesso de permanência',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Coloque no calendário a data de caducidade do visto/autorização de residência + menos 90 dias (é o tempo que a AIMA demora a processar a renovação)',
          '📝 Renovação da autorização de residência — submeta através de portal-renovacoes.aima.gov.pt o mais cedo possível',
          '📋 Guarde TODOS os comprovativos em PDF — sem eles, a fronteira não percebe que está com um processo em curso',
          '✈️ Não saia do espaço Schengen com a autorização de residência caducada e sem comprovativo — podem não o deixar voltar a entrar',
          '⚠️ 90 dias no espaço Schengen como turista + pedido de autorização de residência = má ideia: se a AIMA não aprovar em 90 dias, ficará em excesso de permanência',
          '🔔 Em caso de alteração de morada ou perda de documentos — informe a AIMA no prazo de 60 dias',
          '📞 Se tiver dúvidas sobre o estatuto — ligue para a AIMA / consulte um jurista; o excesso de permanência é pior do que a prevenção'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Multa por excesso de permanência até 30 dias', amountEURMin: 80, amountEURMax: 160 },
    { label: 'Multa por excesso de permanência de 30-90 dias', amountEURMin: 160, amountEURMax: 300 },
    { label: 'Multa por excesso de permanência de 90+ dias', amountEURMin: 300, amountEURMax: 700 },
    { label: 'Consulta de advogado', amountEURMin: 50, amountEURMax: 150 }
  ],
  sources: [
    { title: 'AIMA — Situação irregular e regularização', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — art. 192-193 (regime sancionatório)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Calculadora UE 90/180', url: 'https://ec.europa.eu/assets/home/visa-calculator/calculator.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 37-A/2024', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/37-a-2024-864229054', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
