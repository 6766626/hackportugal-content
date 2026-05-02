export default {
  editorialVoice: 'hackportugal',
  id: 'lavar-roupa-vizinhos-horario',
  categoryId: 'daily_life',
  title: 'Lavar roupa e ruído no apartamento: normas portuguesas e horários',
  tldr: 'Em Portugal não existe uma lei específica sobre «a que horas se pode lavar roupa», mas aplica-se o Regulamento Geral do Ruído — Decreto-Lei 9/2007. Para ruído de vizinhança, a polícia pode intervir especialmente à noite: pela regra nacional, o período crítico é 23:00–07:00. Na prática, nos prédios é frequente constar 22:00–07:00 ou 22:00–08:00 no regulamento do condomínio. É mais seguro planear a máquina de lavar, a máquina de secar, o aspirador e os furos para 08:00–21:30; em prédios antigos, convém ter ainda mais cuidado.',
  tags: ['ruído', 'lavar roupa', 'condomínio', 'vizinhos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'basic-rule',
      title: 'Regra de base: a lei é sobre ruído, não sobre a máquina de lavar',
      content: [
        { kind: 'paragraph', text: 'O Decreto-Lei 9/2007 português estabelece o Regulamento Geral do Ruído. Não enumera os eletrodomésticos por tipo, mas enquadra a atividade doméstica ruidosa como ruído de vizinhança — ruído proveniente de vizinhos, animais, aparelhos, música, obras ou comportamento de pessoas.' },
        { kind: 'paragraph', text: 'A principal fronteira prática pela regra nacional é 23:00–07:00. Se, nesse período, o ruído incomodar os vizinhos, a PSP/GNR ou a Polícia Municipal podem ordenar a cessação imediata do ruído ou a adoção de medidas. Durante o dia, as autoridades normalmente dão um prazo para resolver o problema, se o ruído for regular e comprovável.' },
        { kind: 'warning', text: 'A frase «até às 23:00 pode fazer-se tudo» está errada. Se a máquina de lavar vibrar muito, a máquina de secar zumbir e o pavimento transmitir ruído de impacto para baixo, podem existir queixas também durante o dia — especialmente se a situação se repetir.' }
      ]
    },
    {
      id: 'safe-schedule',
      title: 'Horário prático para lavar roupa 🧺',
      content: [
        { kind: 'paragraph', text: 'O regime mais seguro para um apartamento em Portugal: pôr a máquina de lavar e a máquina de secar a funcionar durante o dia e ao início da noite, para que a centrifugação não calhe já tarde.' },
        { kind: 'checklist', items: [
          'Ideal: 08:00–21:30 nos dias úteis.',
          'Ao domingo e em feriados, é melhor evitar o início da manhã: comece depois das 09:00–10:00.',
          'Não programe a centrifugação para 22:00–07:00, mesmo que o limite noturno nacional seja formalmente 23:00.',
          'Se o ciclo durar 2–3 horas, calcule a hora de fim, não a de início: a fase mais ruidosa é a centrifugação no fim.',
          'A máquina de secar costuma ouvir-se durante mais tempo do que a máquina de lavar: não a ponha a funcionar durante a noite em prédios antigos.',
          'Aspirador, montagem de móveis, mudanças de disposição, passadeira de corrida — os riscos domésticos são os mesmos que na lavagem da roupa.',
          'Se trabalha por turnos, escolha um programa curto sem centrifugação noturna ou uma lavandaria self-service.',
          'Para Airbnb/hóspedes, deixe uma regra escrita: “máquina de lavar até 21:30”.'
        ] }
      ]
    },
    {
      id: 'condominium-rules',
      title: 'Verifique o regulamento do condomínio',
      content: [
        { kind: 'paragraph', text: 'Nos prédios de habitação coletiva existe quase sempre um regulamento do condomínio ou deliberações da assembleia de condóminos. Não anulam o Decreto-Lei 9/2007, mas podem introduzir regras internas de utilização das partes comuns e de comportamento dos moradores.' },
        { kind: 'checklist', items: [
          'Peça ao senhorio, à administração do condomínio ou ao porteiro uma cópia do regulamento.',
          'Procure secções como: ruído, descanso, obras, máquinas, estendais, varandas, partes comuns.',
          'Silêncio interno típico: 22:00–07:00 ou 22:00–08:00.',
          'Para obras, há muitas vezes janelas próprias: por exemplo 08:00–20:00 nos dias úteis, sem domingos nem feriados.',
          'A proibição pode não dizer respeito à lavagem em si, mas à vibração, água a pingar, fachada ou roupa para lá das grades.',
          'Se o apartamento for arrendado, violar as regras do condomínio pode gerar um conflito com o senhorio.',
          'É melhor pedir as deliberações do condomínio por escrito: email ou PDF, não oralmente no elevador.'
        ] },
        { kind: 'warning', text: 'O condomínio não pode inventar coimas como se fosse uma entidade pública, mas pode registar incumprimentos, exigir o cumprimento das regras, contactar o senhorio, a polícia ou recorrer ao tribunal em caso de ruído sistemático.' }
      ]
    },
    {
      id: 'how-to-reduce-noise',
      title: 'Como lavar roupa em silêncio e evitar conflitos com os vizinhos',
      content: [
        { kind: 'paragraph', text: 'Em Portugal há muitos prédios com lajes finas, pavimentos de madeira e condutas onde o som da máquina de lavar se transmite por vários pisos. Mesmo uma máquina nova pode soar como obras se não estiver nivelada.' },
        { kind: 'checklist', items: [
          'Nivele a máquina: os quatro pés devem assentar firmemente no chão.',
          'Coloque um tapete antivibração ou apoios de borracha debaixo dos pés.',
          'Não sobrecarregue o tambor: a sobrecarga aumenta a centrifugação com impacto.',
          'Reduza a velocidade de centrifugação para 800–1000 rpm à noite.',
          'Não encoste a máquina à parede ou ao módulo da cozinha — a estrutura transmite vibração.',
          'Verifique os parafusos de transporte depois de uma mudança: se não forem retirados, a máquina vai “saltar”.',
          'Não bata com portas, nem arraste cestos ou estendais sobre azulejo ao fim da noite.',
          'Se um vizinho se queixar, proponha um teste: pôr a centrifugação a funcionar durante o dia e ouvir no apartamento dele.'
        ] }
      ]
    },
    {
      id: 'if-neighbours-complain',
      title: 'Se os vizinhos se queixarem ou se você sofrer com o ruído',
      content: [
        { kind: 'paragraph', text: 'O estilo português de resolver conflitos domésticos é, primeiro, com calma e de forma concreta. É melhor não discutir sobre «o meu direito de lavar roupa», mas propor um horário e medidas técnicas.' },
        { kind: 'substeps', items: [
          { id: 'you-are-noisy', title: 'Se as queixas forem sobre si', content: [
            { kind: 'checklist', items: [
              'Pergunte em que horas e em que fase se ouve o ruído.',
              'Mostre que alterou o horário: por exemplo, lavagem apenas até às 21:30.',
              'Verifique a máquina, os pés, o tapete e as rotações da centrifugação.',
              'Se escreverem no WhatsApp do condomínio — responda de forma breve e educada, sem sarcasmo.',
              'Se a casa for arrendada, informe o senhorio sobre o problema técnico da máquina ou do pavimento.'
            ] }
          ] },
          { id: 'neighbour-is-noisy', title: 'Se forem os vizinhos a fazer ruído', content: [
            { kind: 'checklist', items: [
              'Registe datas, horas e tipo de ruído: por exemplo, “01:10–02:00, centrifugação da máquina de lavar”.',
              'Primeiro escreva ao vizinho ou à administração do condomínio.',
              'Peça a aplicação do regulamento do condomínio, se existir.',
              'Em caso de ruído noturno, ligue para a PSP/GNR ou para a Polícia Municipal; em Lisboa, oriente-se também pelos canais da Câmara Municipal.',
              'Não bata nos radiadores nem ponha música em resposta — isso também fará de si infrator.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'A polícia não é obrigada a medir decibéis em cada situação doméstica. Para ruído de vizinhança, são importantes o facto de existir ruído incomodativo, a hora, a repetição e a possibilidade de cessar imediatamente a fonte.' }
      ]
    },
    {
      id: 'drying-balcony',
      title: 'Secagem da roupa, varanda e fachada',
      content: [
        { kind: 'paragraph', text: 'Secar roupa é outra causa frequente de conflitos. Não existe uma proibição nacional universal do tipo «não se pode secar roupa na varanda», mas podem existir regras no condomínio, em normas municipais ou no contrato de arrendamento.' },
        { kind: 'checklist', items: [
          'Não estenda roupa de forma a que a água pingue para a varanda de baixo, para transeuntes ou para partes comuns.',
          'Não fixe um estendal à fachada sem autorização, se isso alterar o aspeto exterior do edifício.',
          'Em zonas históricas, as regras sobre fachadas podem ser mais rigorosas.',
          'Um estendal dobrável dentro da varanda costuma gerar menos conflito do que roupa para lá das grades.',
          'Verifique o contrato de arrendamento: por vezes o senhorio proíbe expressamente fixações exteriores.',
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
