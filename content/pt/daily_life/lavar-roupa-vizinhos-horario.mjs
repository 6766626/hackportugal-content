export default {
  editorialVoice: 'hackportugal',
  id: 'lavar-roupa-vizinhos-horario',
  categoryId: 'daily_life',
  title: 'Lavar roupa e ruído no apartamento: regras e horários em Portugal',
  tldr: 'Em Portugal não existe uma lei específica sobre “quando se pode lavar roupa”, mas aplica-se o Regulamento Geral do Ruído — Decreto-Lei 9/2007. Para ruído de vizinhança, a polícia pode intervir sobretudo à noite: pela regra nacional, o período crítico é 23:00–07:00.\n\nNa prática, os prédios muitas vezes estabelecem 22:00–07:00 ou 22:00–08:00 no regulamento do condomínio. É mais seguro planear máquina de lavar, máquina de secar, aspirador e berbequim para 08:00–21:30; em prédios antigos, convém ser ainda mais prudente.',
  tags: ['ruído', 'lavagem', 'condomínio', 'vizinhos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'basic-rule',
      title: 'Regra básica: a lei é sobre ruído, não sobre a máquina de lavar',
      content: [
        { kind: 'paragraph', text: 'O Decreto-Lei 9/2007 português estabelece o Regulamento Geral do Ruído. Não enumera os eletrodomésticos por tipo, mas enquadra atividades domésticas ruidosas como ruído de vizinhança — ruído proveniente de vizinhos, animais, aparelhos, música, obras ou comportamento de pessoas.' },
        { kind: 'paragraph', text: 'A fronteira prática principal pela regra nacional é 23:00–07:00. Se nesse horário o ruído incomodar os vizinhos, a PSP/GNR ou a Polícia Municipal podem ordenar a cessação imediata do ruído ou a adoção de medidas. Durante o dia, as autoridades normalmente dão um prazo para resolver o problema, se o ruído for regular e comprovável.' },
        { kind: 'warning', text: 'A frase “até às 23:00 pode-se fazer tudo” está errada. Se a máquina de lavar vibrar muito, a máquina de secar fizer zumbido e o pavimento transmitir ruído de impacto para baixo, pode haver queixas também durante o dia — sobretudo se for repetido.' }
      ]
    },
    {
      id: 'safe-schedule',
      title: 'Horário prático para lavar roupa 🧺',
      content: [
        { kind: 'paragraph', text: 'O regime mais seguro para um apartamento em Portugal: usar a máquina de lavar e a máquina de secar durante o dia e ao início da noite, para que a centrifugação não caia no fim da noite.' },
        { kind: 'checklist', items: [
          'Ideal: 08:00–21:30 nos dias úteis.',
          'Ao domingo e em feriados, é melhor evitar o início da manhã: comece depois das 09:00–10:00.',
          'Não programe a centrifugação para 22:00–07:00, mesmo que o limite noturno nacional seja formalmente 23:00.',
          'Se o ciclo durar 2–3 horas, calcule a hora de fim, não a de início: a fase mais ruidosa é a centrifugação no fim.',
          'A máquina de secar muitas vezes ouve-se durante mais tempo do que a máquina de lavar: não a ligue durante a noite em prédios antigos.',
          'Aspirador, montagem de móveis, mudanças de móveis, passadeira de corrida — têm os mesmos riscos domésticos que lavar roupa.',
          'Se trabalha por turnos, escolha um programa curto sem centrifugação noturna ou uma lavandaria self-service.',
          'Para Airbnb/hóspedes, deixe uma regra por escrito: “máquina de lavar até 21:30”.'
        ] }
      ]
    },
    {
      id: 'condominium-rules',
      title: 'Verifique o regulamento do condomínio',
      content: [
        { kind: 'paragraph', text: 'Nos prédios de apartamentos existe quase sempre um regulamento do condomínio ou deliberações da assembleia de condóminos. Não anulam o Decreto-Lei 9/2007, mas podem introduzir regras internas sobre a utilização das partes comuns e o comportamento dos moradores.' },
        { kind: 'checklist', items: [
          'Peça ao senhorio, à administração do condomínio ou ao porteiro uma cópia do regulamento.',
          'Procure secções como: ruído, descanso, obras, máquinas, estendais, varandas, partes comuns.',
          'Silêncio interno típico: 22:00–07:00 ou 22:00–08:00.',
          'Para obras, há frequentemente janelas próprias: por exemplo, 08:00–20:00 nos dias úteis, sem domingos nem feriados.',
          'A proibição pode não incidir sobre a lavagem em si, mas sobre vibração, água a pingar, fachada ou roupa pendurada para fora das guardas.',
          'Se o apartamento for arrendado, a violação das regras do condomínio pode gerar conflito com o senhorio.',
          'É melhor pedir as deliberações do condomínio por escrito: email ou PDF, e não verbalmente no elevador.'
        ] },
        { kind: 'warning', text: 'O condomínio não pode inventar coimas como se fosse um órgão do Estado, mas pode registar infrações, exigir o cumprimento das regras, contactar o senhorio, a polícia ou recorrer a tribunal em caso de ruído sistemático.' }
      ]
    },
    {
      id: 'how-to-reduce-noise',
      title: 'Como lavar roupa em silêncio e evitar conflitos com os vizinhos',
      content: [
        { kind: 'paragraph', text: 'Em Portugal há muitos prédios com lajes finas, pavimentos de madeira e caixas técnicas onde o som da máquina de lavar se transmite por vários pisos. Mesmo uma máquina nova pode soar como obras se não estiver nivelada.' },
        { kind: 'checklist', items: [
          'Nivele a máquina: os quatro pés devem assentar firmemente no chão.',
          'Coloque um tapete antivibração ou apoios de borracha por baixo dos pés.',
          'Não sobrecarregue o tambor: a sobrecarga intensifica a centrifugação com impactos.',
          'Reduza a velocidade de centrifugação para 800–1000 rpm à noite.',
          'Não encoste a máquina à parede ou ao módulo da cozinha — a estrutura transmite vibração.',
          'Verifique os parafusos de transporte depois da mudança: se não tiverem sido retirados, a máquina vai “saltar”.',
          'Não bata com portas, nem arraste cestos e estendais sobre mosaico ao fim da noite.',
          'Se um vizinho se queixar, proponha um teste: ligar a centrifugação durante o dia e ouvir no apartamento dele.'
        ] }
      ]
    },
    {
      id: 'if-neighbours-complain',
      title: 'Se os vizinhos se queixarem ou se você sofrer com ruído',
      content: [
        { kind: 'paragraph', text: 'O estilo português para resolver conflitos domésticos é começar de forma calma e concreta. É melhor não discutir sobre “o meu direito a lavar roupa”, mas propor um horário e medidas técnicas.' },
        { kind: 'substeps', items: [
          { id: 'you-are-noisy', title: 'Se as queixas forem contra si', content: [
            { kind: 'checklist', items: [
              'Pergunte em que horas e em que fase se ouve o ruído.',
              'Mostre que alterou o horário: por exemplo, lavagem apenas até às 21:30.',
              'Verifique a máquina, os pés, o tapete e a velocidade de centrifugação.',
              'Se escreverem no WhatsApp do condomínio — responda de forma breve e educada, sem sarcasmo.',
              'Se a casa for arrendada, informe o senhorio sobre o problema técnico da máquina ou do pavimento.'
            ] }
          ] },
          { id: 'neighbour-is-noisy', title: 'Se forem os vizinhos a fazer ruído', content: [
            { kind: 'checklist', items: [
              'Registe datas, horas e tipo de ruído: por exemplo, “01:10–02:00, centrifugação da máquina de lavar”.',
              'Primeiro, escreva ao vizinho ou à administração do condomínio.',
              'Peça a aplicação do regulamento do condomínio, se existir.',
              'Em caso de ruído noturno, ligue para a PSP/GNR ou Polícia Municipal; em Lisboa, tenha também em conta os canais da Câmara Municipal.',
              'Não bata nos radiadores nem ponha música em resposta — isso também o tornará infrator.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'A polícia não é obrigada a medir decibéis em todas as situações domésticas. Para ruído de vizinhança, importam o facto de o ruído incomodar, a hora, a repetição e a possibilidade de cessar imediatamente a fonte.' }
      ]
    },
    {
      id: 'drying-balcony',
      title: 'Secar roupa, varanda e fachada',
      content: [
        { kind: 'paragraph', text: 'Secar roupa é outra causa frequente de conflitos. Não existe uma proibição nacional universal de “não se pode secar na varanda”, mas pode haver regras no condomínio, em normas municipais ou no contrato de arrendamento.' },
        { kind: 'checklist', items: [
          'Não pendure roupa de forma a que a água pingue para a varanda de baixo, para transeuntes ou para partes comuns.',
          'Não fixe um estendal à fachada sem autorização, se isso alterar o aspeto exterior do edifício.',
          'Em zonas históricas, as regras de fachada podem ser mais rigorosas.',
          'Um estendal dobrável dentro da varanda costuma gerar menos conflito do que roupa para fora das guardas.',
          'Verifique o contrato de arrendamento: por vezes, o senhorio proíbe expressamente fixações exteriores.',
          'Se existir uma zona comum para secar roupa, informe-se sobre o horário e as regras de acesso.'
        ] }
      ]
    }
  ],
  sources: [
    {
      title: 'Decreto-Lei 9/2007 — Regulamento Geral do Ruído',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/9-2007-538430',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Câmara Municipal de Lisboa — informação municipal sobre ruído',
      url: 'https://www.cm-lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
