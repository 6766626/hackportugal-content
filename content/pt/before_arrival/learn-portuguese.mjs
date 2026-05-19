export default {
  editorialVoice: 'hackportugal',
  id: 'learn-portuguese',
  categoryId: 'before_arrival',
  title: 'Como aprender português — escolas, aplicações, conselhos',
  tldr: 'O PT-PT (europeu) difere do BR-PT na pronúncia e parcialmente no vocabulário. Três caminhos: (1) cursos públicos gratuitos PLA para residentes (150 h, A2 em 6 meses); (2) cursos IEFP com subsídio para desempregados; (3) privados: Fast Forward, CIAL, CLIC — 350-900 € por curso. Aplicações: Practice Portuguese (especializada em PT-PT, a melhor opção), Portuguese With Carla (YouTube), Pimsleur (áudio).\n\nDuolingo — apenas variante brasileira, não é o melhor ponto de partida para PT-PT.',
  tags: ['português', 'língua', 'cursos', 'ciple'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'pt-vs-br',
      title: 'PT-PT vs PT-BR — o que aprender?',
      content: [
        { kind: 'paragraph', text: 'A língua portuguesa tem duas variantes principais: português europeu (PT-PT) e português do Brasil (PT-BR). Em Portugal fala-se PT-PT.' },
        { kind: 'checklist', items: [
          '🗣️ Pronúncia: PT-PT — vogais mais “fechadas”, sílabas que se engolem (“Lis-bo-a” → “Lʒbwa”). BR-PT — mais claro, mais aberto',
          '📝 Gramática: há pequenas diferenças (tu/você, construção com gerúndio, estar/ficar)',
          '📚 Vocabulário: autocarro = autocarro (PT) / ônibus (BR); comboio = comboio (PT) / trem (BR); você/vocês = você (BR frequentemente) / vocês (PT formalmente)',
          '🎬 Filmes: os filmes brasileiros são sempre apresentados com legendas em PT — notícias portuguesas em BR sem tradução não passam',
          '🎯 Conclusão: aprenda PT-PT se vier para Portugal. O BR é compreendido — mas para cidadania, no nível A2, é preciso PT-PT. Conteúdo BR (Duolingo, a maioria do YouTube) — serve para exposição de fundo, para exames — não'
        ]}
      ]
    },
    {
      id: 'free-courses',
      title: '🆓 Cursos gratuitos (públicos)',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'PLA — Português Língua de Acolhimento', content: [
            { kind: 'checklist', items: [
              'Programa público AIMA + educação',
              '150 horas para o nível A2 (o que é necessário para a cidadania)',
              '300 horas para B1/B2',
              'Gratuito para todos os estrangeiros com qualquer estatuto (incluindo refugiados e não residentes)',
              'Inscrição: Centro Qualifica da área de residência (qualifica.gov.pt) ou AIMA',
              'Formato: aulas à noite / ao fim de semana, 2-3 vezes por semana, 3 horas cada',
              'O certificado Certificado PLA é reconhecido pelo IRN para naturalização'
            ]}
          ]},
          { id: 'f2', title: 'IEFP — curso + bolsa', content: [
            { kind: 'checklist', items: [
              'Instituto do Emprego: cursos de português para desempregados registados',
              'Gratuito + bolsa de formação (parte do IAS), com cobertura de transporte e alimentação',
              'Inscrição no Centro de Emprego',
              'Ideal para quem acabou de chegar e ainda não trabalha',
              '4-6 meses em regime intensivo, 20+ horas por semana'
            ]}
          ]},
          { id: 'f3', title: 'Escolas públicas para adultos', content: [
            { kind: 'paragraph', text: 'As escolas secundárias públicas têm frequentemente cursos noturnos “Português para Estrangeiros” no âmbito do PLNM — por uma inscrição simbólica (10-25 €/semestre). Os professores são profissionais.' }
          ]},
          { id: 'f4', title: 'Junta de Freguesia', content: [
            { kind: 'paragraph', text: 'Muitas Junta de Freguesia organizam clubes de conversação gratuitos “Café Fala Português” — para praticar. Não dão certificados, mas a prática real é valiosa.' }
          ]}
        ]}
      ]
    },
    {
      id: 'paid-schools',
      title: '💼 Escolas de línguas privadas',
      content: [
        { kind: 'checklist', items: [
          'CIAL (Centro de Línguas) — Lisboa, Faro. Um clássico, 150-600 € por mês de intensivo',
          'CLIC (Centro Línguas Intercultural) — Lisboa, Porto. 300-800 € por 4-6 semanas',
          'Fast Forward Language Institute — Lisboa, boa opção para nómadas digitais, aulas de grupo 350 € / individuais 40-60 €/hora',
          'Inlingua — rede internacional, padrão de 400-800 €',
          'Kiros — online, 20-40 €/hora com falante nativo',
          'italki / Preply — plataformas online com professores, 15-35 €/hora (procure professores de PT-PT separadamente)',
          '🎓 Universidade de Lisboa e Universidade de Coimbra — cursos de verão para estrangeiros, 500-900 € por 3-4 semanas de intensivo, certificado universitário'
        ]}
      ]
    },
    {
      id: 'apps',
      title: '📱 Aplicações e autoaprendizagem',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '🏆 Practice Portuguese (practiceportuguese.com)', content: [
            { kind: 'paragraph', text: 'O melhor para PT-PT. Especializa-se em português europeu. Podcasts + gramática + exercícios. Assinatura ~10-15 €/mês. Abordagem com foco no áudio. Bom para todos os níveis.' }
          ]},
          { id: 'a2', title: '🎥 Portuguese With Carla (YouTube)', content: [
            { kind: 'paragraph', text: 'Vídeos gratuitos em PT-PT. A Carla vive em Portugal e explica nuances. Curso completo A1 → B2 em playlists do YouTube. Pode comprar o caderno de exercícios + subscrição fechada por cerca de 15 €/mês.' }
          ]},
          { id: 'a3', title: 'Pimsleur European Portuguese', content: [
            { kind: 'paragraph', text: 'Apenas áudio, 90 lições de 30 min. Excelente para pronúncia + prático para ouvir ao volante. Assinatura 14 €/mês, disponível no Apple Music + audiolivros.' }
          ]},
          { id: 'a4', title: 'Memrise (cursos PT-PT)', content: [
            { kind: 'paragraph', text: 'Flashcards com falantes nativos. A versão gratuita é suficiente para vocabulário A1-A2.' }
          ]},
          { id: 'a5', title: '❌ Duolingo', content: [
            { kind: 'paragraph', text: 'Apenas variante brasileira, não europeia. Serve para ganhar uma “sensação da língua” de fundo, mas não para o exame A2 PT-PT nem para prática de conversação em Lisboa.' }
          ]}
        ]}
      ]
    },
    {
      id: 'practice',
      title: '🗣️ Onde praticar conversação',
      content: [
        { kind: 'checklist', items: [
          'Tandem / HelloTalk — intercâmbio linguístico com portugueses, gratuito',
          'Meetup Lisboa / Porto — intercâmbios linguísticos semanais em cafés (encontros gratuitos)',
          'Portuguese Conversation Club (FB) — grupo no Porto e em Lisboa',
          'italki Community — correções gratuitas de textos no Notebook por portugueses',
          'Séries — TVI / SIC à noite, por exemplo “Quero é Viver”',
          'Publicidade no elevador / metro — textos curtos, bons para exposição passiva',
          'Futebol na rádio — discurso rápido com expressões idiomáticas',
          'Conversa com vizinhos do bairro — senhor/senhora no café, empregado na padaria',
          'Sem medo de falar — regra principal: os portugueses são simpáticos, toleram erros e ficam contentes com a prática'
        ]}
      ]
    },
    {
      id: 'timeline',
      title: '⏱️ Quanto tempo até A2 / B1',
      content: [
        { kind: 'checklist', items: [
          'A1 (bases): 60-80 horas de aulas. 2-3 meses a 4 h/semana',
          'A2 (para cidadania): 150-200 horas. 6-9 meses em regime intensivo',
          'B1 (conversa confortável): 300-400 horas. 1-1,5 anos',
          'B2 (profissional): 500-700 horas. 2-3 anos',
          'C1 (quase nível nativo): 1000+ horas, 4-6 anos',
          '💡 Mais rápido se: já vive em PT + prática diária. Mais lento se aprender a partir de Moscovo sem imersão',
          '📅 Experiência real: a maioria das pessoas que se muda chega a um A2-B1 seguro em 1-1,5 anos em PT, B2 — em 3-4 anos com prática ativa'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'PLA (cursos públicos)', amountEUR: 0 },
    { label: 'IEFP + bolsa', amountEUR: 0, note: 'ainda pagam' },
    { label: 'Escola pública (semestre)', amountEURMin: 10, amountEURMax: 25 },
    { label: 'Escola privada (curso de 1 mês)', amountEURMin: 150, amountEURMax: 600 },
    { label: 'Online com professor (hora)', amountEURMin: 15, amountEURMax: 60 },
    { label: 'Assinatura Practice Portuguese', amountEUR: 12, note: '€/mês' },
    { label: 'Exame CIPLE A2', amountEUR: 85 }
  ],
  sources: [
    { title: 'Centros Qualifica — pesquisa por morada', url: 'https://www.qualifica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — PLA', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Instituto Camões — certificação', url: 'https://www.instituto-camoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CAPLE — exames CIPLE', url: 'https://caple.letras.ulisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
