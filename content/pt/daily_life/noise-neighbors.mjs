export default {
  editorialVoice: 'hackportugal',
  id: 'noise-neighbors',
  categoryId: 'daily_life',
  title: 'Ruído e vizinhos — o que é legal, onde reclamar',
  tldr: 'Em Portugal, o período nocturno de repouso é 23:00–07:00 (Decreto-Lei 9/2007, Regulamento Geral do Ruído). Música, furos, ladrar de cães — tudo está regulamentado. Reclamações: primeiro de forma amigável, depois PSP/GNR, Câmara Municipal. As coimas dependem da categoria da infracção (Lei 50/2006 sobre contraordenações ambientais) e podem variar substancialmente para pessoas singulares e colectivas.',
  tags: ['ruído', 'vizinhos', 'silêncio', 'direitos', 'reclamação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'quiet-hours',
      title: 'Horas de silêncio segundo a lei',
      content: [
        { kind: 'checklist', items: [
          '🌙 Período de repouso (período de repouso): 23:00 – 07:00 em dias normais',
          '🌙 Fins-de-semana e feriados: nos regulamentos municipais é frequentemente prolongado até às 09:00',
          '☀️ Horário diurno: o ruído é permitido, mas não pode ser excessivo',
          '🔨 Obras: a norma nacional do RGR — dias úteis 08:00–20:00; aos fins-de-semana/feriados é normalmente limitado adicionalmente ou exige licenciamento especial. O regulamento municipal pode ser mais rigoroso',
          '📏 Lden 55 dB(A), Lnight 45 dB(A) — são indicadores de planeamento para «zonas sensíveis» (zonas classificadas), e não um limiar simples para ruído de vizinhança; para litígios entre vizinhos aplicam-se outros critérios do RGR'
        ]},
        { kind: 'warning', text: 'Os horários podem ser tornados mais restritivos por regulamento municipal. Verifique no site da Câmara Municipal da sua cidade, na secção «Ambiente» ou «Ruído».' }
      ]
    },
    {
      id: 'sources-of-noise',
      title: 'Fontes típicas e as suas regras',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Música dos vizinhos / festas', content: [
            { kind: 'paragraph', text: 'No período de repouso não é admissível. Mesmo durante o dia, as autoridades podem ordenar medidas/prazos se o ruído perturbar sistematicamente o uso normal da habitação — não é estritamente «tudo permitido enquanto < dB».' }
          ]},
          { id: 's2', title: 'Obras e furos', content: [
            { kind: 'paragraph', text: 'A norma nacional do RGR para trabalhos de conservação/renovação no interior de edifícios habitacionais/comerciais é dias úteis 08:00–20:00. Ao sábado e ao domingo é frequentemente limitado ou exige licenciamento, excepto em situações de emergência. O regulamento municipal pode ser mais rigoroso.' }
          ]},
          { id: 's3', title: 'Ladrar de cães', content: [
            { kind: 'paragraph', text: 'Ladrar constante durante a noite = infracção. O dono é obrigado a tomar medidas (correcção comportamental, cuidados com o cão). Caso contrário — coima e, em caso extremo, remoção coerciva do animal.' }
          ]},
          { id: 's4', title: 'Aparelhos de ar condicionado / bombas de calor', content: [
            { kind: 'paragraph', text: 'Devem cumprir os limites de dB indicados na ficha técnica do aparelho. A instalação é por vezes regulada pelo regulamento do condomínio.' }
          ]},
          { id: 's5', title: 'Restaurantes e bares', content: [
            { kind: 'paragraph', text: 'Têm uma licença especial para ruído. As reclamações são apresentadas à ASAE e à inspecção municipal. Reclamações em massa podem levar à revogação da licença.' }
          ]},
          { id: 's6', title: 'Sinos de igrejas e mesquitas', content: [
            { kind: 'paragraph', text: 'Estão isentos dos limites de nível de dB (actividade religiosa), mas não do período de repouso — tocam apenas durante o dia e em dias santos.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-complain',
      title: 'Onde reclamar e como',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. De forma amigável', content: [
            { kind: 'paragraph', text: 'Normalmente, a primeira tentativa resolve 70% dos casos. Bater à porta, explicar educadamente. Num condomínio — através do administrador.' }
          ]},
          { id: 'c2', title: '2. PSP/GNR', content: [
            { kind: 'checklist', items: [
              'Durante a ocorrência, se o ruído for excessivo',
              'A PSP/GNR normalmente desloca-se ao local, fala com o infractor e pode elaborar um auto de notícia, mas nem sempre há um sonómetro calibrado em chamadas comuns de vizinhança — para uma medição oficial é mais frequente ser necessária a inspecção municipal',
              'O agente competente na cidade — PSP, em zonas rurais/aldeias — GNR'
            ]}
          ]},
          { id: 'c3', title: '3. Câmara Municipal', content: [
            { kind: 'checklist', items: [
              'Para infracções crónicas (construção, restaurantes, indústria)',
              'Reclamação por escrito através do site do município ou presencialmente',
              'A inspecção municipal desloca-se ao local para efectuar medições',
              'O procedimento de coima é demorado (3–6 meses)'
            ]}
          ]},
          { id: 'c4', title: '4. Livro de Reclamações (livro de reclamações)', content: [
            { kind: 'paragraph', text: 'Para bares/restaurantes/lojas com licença. A cópia segue automaticamente para o regulador ASAE.' }
          ]},
          { id: 'c5', title: '5. Tribunal (para indemnização)', content: [
            { kind: 'paragraph', text: 'Se o ruído causou prejuízo (falta de sono, saúde, redução da renda) — Julgado de Paz (tribunal de pequenas causas) para pedidos até 15 000 €. Provas — gravações, medições, atestados médicos.' }
          ]}
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Coimas',
      content: [
        { kind: 'checklist', items: [
          'O valor das coimas depende da categoria da contraordenação ambiental ao abrigo da Lei 50/2006 (leve/grave/muito grave) e de se tratar de pessoa singular ou colectiva. Os intervalos variam substancialmente e são actualizados regularmente — é melhor verificar a taxa exacta na versão actual da lei',
          'Reincidência: pode haver duplicação e/ou encerramento',
          'Sem licença de ruído (bar): suspensão imediata da actividade',
          'Incumprimento de uma ordem do município: coima + qualificação como reincidência'
        ]}
      ]
    },
    {
      id: 'practical',
      title: 'Conselhos práticos',
      content: [
        { kind: 'checklist', items: [
          '📱 Descarregar uma aplicação para medir dB (não oficial, mas útil para registar)',
          '📹 Uma gravação de vídeo curta com indicação da hora é melhor do que «as palavras do meu vizinho»',
          '📋 Registar a data/hora de cada incidente — 5+ episódios são convincentes em tribunal',
          '🗣️ A reclamação deve ser sempre em português — em inglês/outro idioma atrasa o processo',
          '🏢 Num condomínio — sempre através do administrador; a acta da assembleia é uma prova sólida'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Reclamação à PSP/GNR', amountEUR: 0 },
    { label: 'Reclamação à Câmara Municipal', amountEUR: 0 },
    { label: 'Julgado de Paz', amountEUR: 70 },
    { label: 'Coima aplicada ao vizinho (pessoa singular)', amountEURMin: 0, amountEURMax: 0, note: 'o intervalo depende da categoria da infracção ao abrigo da Lei 50/2006; consulte a versão actual' }
  ],
  sources: [
    { title: 'Decreto-Lei n.º 9/2007 — Regulamento Geral do Ruído', url: 'https://dre.pt/dre/detalhe/decreto-lei/9-2007', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'APA — Agência Portuguesa do Ambiente (Ruído)', url: 'https://www.apambiente.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Queixa de ruído', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/apresentar-uma-queixa-por-ruido', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Livro de Reclamações — portal oficial', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
