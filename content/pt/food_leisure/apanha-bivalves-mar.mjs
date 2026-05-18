export default {
  editorialVoice: 'hackportugal',
  id: 'apanha-bivalves-mar',
  categoryId: 'food_leisure',
  title: 'Apanha de bivalves — licença e zonas sanitárias',
  tldr: 'A apanha de bivalves na praia e na zona costeira (amêijoa, berbigão, conquilha, longueirão) é uma categoria separada de Pesca Lúdica da DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos).\n\nA licença "Apanha Apeada": ~10 € por 3 dias, ~25 € por ano. Limite diário: 1 kg com concha por pessoa. Só se pode apanhar em zonas sanitariamente classificadas (zonas classificadas): o IPMA (Instituto Português do Mar e da Atmosfera) publica todos os meses a lista A/B/C. A apanha em zonas não classificadas é ilegal OU exige tratamento térmico obrigatório (mesmo que a espécie seja permitida).\n\nSão proibidos: pé-de-cabra, quaisquer instrumentos mecânicos, bem como a apanha de conchas abaixo do tamanho mínimo (amêijoa 25 mm, berbigão 25 mm, longueirão 100 mm).\n\nA licença de Pesca Lúdica à linha para cana NÃO cobre a apanha de bivalves — é necessária uma licença separada.',
  tags: ['bivalves', 'mariscagem', 'apanha', 'amêijoa', 'dgrm', 'ipma'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-apanha',
      title: 'O que é a apanha de bivalves e porque exige uma licença separada 🐚',
      content: [
        { kind: 'paragraph', text: 'Apanha de bivalves é a recolha recreativa de moluscos bivalves e de outros organismos marinhos comestíveis na zona costeira: em praias arenosas durante a maré baixa, em rochas, em estuários.\n\nEm Portugal é uma forma de Pesca Lúdica, regulada juridicamente pela DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos), enquanto o controlo sanitário é assegurado pelo IPMA (Instituto Português do Mar e da Atmosfera).' },
        { kind: 'checklist', items: [
          'Bivalves: ameijoa-boa (Ruditapes decussatus), ameijoa-japonesa (R. philippinarum), berbigão (Cerastoderma edule), longueirão (Ensis spp.), navalha (Solen spp.)',
          'Outros moluscos: pé-de-burrinho, lapa, mexilhão nas rochas',
          'Crustáceos: caranguejo, camarão, percebes — em parte enquadram-se aqui',
          'Equinodermes: ouriço-do-mar — especialmente regulado',
          'NÃO inclui: pesca à cana (é necessária Pesca Lúdica à linha), retirar polvo à mão da toca (proibido desde 2017), lagostas (apenas captura profissional)'
        ] },
        { kind: 'warning', text: 'A licença de Pesca Lúdica à linha (para cana) NÃO é válida para bivalves. E vice-versa. Muitas pessoas pensam: “tenho licença”, vão apanhar ameijoa no Algarve e recebem uma coima de 250-500 €.' }
      ]
    },
    {
      id: 'sanitary-zones',
      title: 'Zonas sanitárias — o mais importante',
      content: [
        { kind: 'paragraph', text: 'É uma questão de saúde. Os moluscos bivalves filtram a água e acumulam toxinas (biotoxinas de algas — “marés vermelhas”), bactérias (E. coli, Salmonella), metais pesados. O IPMA publica todos os meses um mapa atualizado: que zonas estão autorizadas, para que espécies e de que forma podem ser consumidas.' },
        { kind: 'checklist', items: [
          'Classe A (apanhou e comeu): raro; por exemplo, ameijoa da Ria Formosa em meses favoráveis',
          'Classe B (pode apanhar, mas o tratamento térmico é obrigatório): a maioria das zonas em Portugal. Cozer no mínimo 5 minutos ou manter 2–3 dias em água salgada limpa',
          'Classe C (exige depuração industrial): inacessível para amadores',
          'PROIBIDO (proibido): a apanha e o consumo são totalmente proibidos, normalmente devido a picos de biotoxinas',
          'Zona não classificada (zona não classificada): a apanha e o consumo são proibidos — não há controlo sanitário'
        ] },
        { kind: 'paragraph', text: 'O IPMA atualiza o mapa todas as semanas em ipma.pt → Mar e Pesca → Bivalves. Existe também a aplicação IPMA para iOS e Android, onde pode verificar rapidamente a zona por coordenadas.' },
        { kind: 'warning', text: 'Apanhar numa zona PROIBIDO, mesmo em pequenas quantidades = até 1500 € de coima + risco de intoxicação. As biotoxinas não são destruídas pela cozedura! Os picos ocorrem em março–maio e setembro–outubro, após as “florações” de algas da primavera/outono.' }
      ]
    },
    {
      id: 'how-to-license',
      title: 'Obter a licença Apanha Apeada',
      content: [
        { kind: 'paragraph', text: 'Faça o pedido em portal.dgrm.mm.gov.pt → Licenciamento → Pesca Lúdica → Apanha Apeada. A autenticação faz-se com Chave Móvel Digital (CMD; assinatura digital móvel) ou Cartão de Cidadão.' },
        { kind: 'checklist', items: [
          '3 dias: ~10 €',
          '1 mês: ~15 €',
          '1 ano: ~25 €',
          '3 anos: ~60 €',
          'A licença é nominal, não pode ser transmitida'
        ] },
        { kind: 'paragraph', text: 'O combo «à linha apeada + apanha» por vezes compensa se você também pesca e apanha moluscos.' }
      ]
    },
    {
      id: 'rules-tools',
      title: 'Regras: instrumentos, tamanhos, limites',
      content: [
        { kind: 'paragraph', text: 'É essencial cumprir os tamanhos mínimos:' },
        { kind: 'checklist', items: [
          'Ameijoa-boa e ameijoa-japonesa: 25 mm de diâmetro da concha',
          'Berbigão: 25 mm',
          'Longueirão / navalha: 100 mm de comprimento',
          'Mexilhão: 50 mm',
          'Lapa: 30 mm',
          'Ostra plana: 60 mm; portuguesa: 80 mm',
          'Polvo: 750 g (mas retirá-lo à mão da toca é proibido desde 2017)',
          'Percebes: 25 mm na base de fixação'
        ] },
        { kind: 'paragraph', text: 'Limite diário:' },
        { kind: 'checklist', items: [
          'Todos os bivalves no total: 1 kg com concha por pessoa por dia',
          'Percebes: 0,5 kg no total (espécie especialmente protegida!)',
          'Mexilhão: 1 kg',
          'Polvo: até 5 kg (é difícil atingir, mas a regra existe)'
        ] },
        { kind: 'paragraph', text: 'Instrumentos permitidos e proibidos:' },
        { kind: 'checklist', items: [
          '✅ Apenas apanha manual (dedos, pau fino)',
          '✅ Crivo/peneiro para medir o tamanho e peneirar a areia',
          '✅ Sacha (mini-ancinho) com largura até 30 cm e dentes no máximo de 5 cm',
          '✅ Faca de madeira para percebes',
          '❌ Qualquer pá com cabo',
          '❌ Mantas/ras (tipos de redes)',
          '❌ Motobombas para retirar água ou areia',
          '❌ Hidroinjeção (proibida em todo o território desde 2014)',
          '❌ Eletrochoques'
        ] }
      ]
    },
    {
      id: 'where-when',
      title: 'Onde e quando apanhar — melhores locais',
      content: [
        { kind: 'paragraph', text: 'Regra principal: antes de sair, verifique o mapa IPMA atualizado do mês em curso. Os estatutos das zonas mudam.' },
        { kind: 'checklist', items: [
          'Ria Formosa (Algarve): a principal “fábrica” de ameijoa em Portugal. Olhão, Tavira, Faro. Frequentemente classe A ou B.',
          'Ria de Aveiro: berbigão e ameijoa. Época — inverno e primavera.',
          'Ria de Alvor: bivalves mistos.',
          'Estuário do Sado (Setúbal): ameijoa e berbigão. Parte das zonas fica em reserva natural (Reserva Natural) com regras adicionais.',
          'Lagoa de Albufeira: ameijoa, por vezes classe A.',
          'Ribeira do Lavre, canais da Ria Formosa: longueirão — um clássico.',
          'Costa Vicentina: percebes nas rochas (MUITO perigoso para principiantes; há mortes todos os anos).',
          'Berlengas: TUDO PROIBIDO — Reserva Natural.'
        ] },
        { kind: 'paragraph', text: 'A melhor altura é a maré baixa. Tabelas de marés (calendário de marés): ipma.pt ou a aplicação Tides Near Me. 2 horas antes do pico da maré baixa e 1 hora depois — é o ideal.' },
        { kind: 'warning', text: 'Não fique para além da maré baixa. A maré sobe rapidamente na Ria Formosa e nos estuários — todos os anos há afogamentos de apanhadores desorientados. Nunca vá sozinho. Um telemóvel com bateria é obrigatório.' }
      ]
    },
    {
      id: 'preparation-cooking',
      title: 'Como tratar o que apanhou',
      content: [
        { kind: 'paragraph', text: 'Para a classe B (a maioria das zonas), o tratamento antes do consumo é obrigatório.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Limpeza da areia',
            content: [
              { kind: 'checklist', items: [
                'Demolhe em água salgada (35 g de sal por 1 l) a uma temperatura “marinha” de 12–18 °C',
                'No mínimo 3–4 horas, idealmente durante a noite',
                'Troque a água a cada 2–3 horas: a ameijoa “cospe” ativamente a areia',
                'Adicione farinha de milho — os moluscos limpam-se mais depressa'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Tratamento térmico',
            content: [
              { kind: 'checklist', items: [
                'Para a classe B é obrigatório: cozer no mínimo 5 minutos a ~90 °C ou fritar pelo menos 10 minutos',
                'Coloque em água já a ferver ou numa frigideira bem aquecida',
                'As conchas abriram — está pronto; as que não abriram — deite fora, não coma',
                'Clássico: Ameijoas à Bulhão Pato — vinho branco, alho, coentros',
                'Carne de porco com ameijoas — clássico do Alentejo'
              ] }
            ]
          }
        ] },
        { kind: 'warning', text: 'NUNCA coma crus se a zona não for classe A. As biotoxinas (PSP, ASP, DSP) não são destruídas pela cozedura; o tratamento térmico mata bactérias, mas não toxinas. Se houver neste momento um pico de toxinas, mesmo os moluscos cozinhados podem ser perigosos. Consulte sempre o IPMA.' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Quem fiscaliza e quais são as coimas',
      content: [
        { kind: 'checklist', items: [
          'Polícia Marítima — nas praias e nos estuários',
          'GNR-SEPNA (Guarda Nacional Republicana, serviço de proteção da natureza) — em parques naturais',
          'Capitania — nos portos',
          'ASAE (Autoridade de Segurança Alimentar e Económica) verifica restaurantes e vendedores quanto à origem dos bivalves'
        ] },
        { kind: 'checklist', items: [
          'Sem licença: 100–500 € + apreensão da captura e do instrumento',
          'Apanha em zona PROIBIDO: 250–1500 €',
          'Tamanho abaixo do mínimo: 100–300 € por cada infração',
          'Excesso do limite diário: 100–500 €',
          'Instrumentos proibidos (bomba, pá): até 1500 €',
          'Tentativa de venda do que foi apanhado: 500–3000 € + procedimento criminal em caso de reincidência',
          'Apanha de percebes sem licença: até 1500 € (especialmente rigoroso na Costa Vicentina)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Apanha Apeada — 3 dias', amountEUR: 10 },
    { label: 'Apanha Apeada — 1 mês', amountEUR: 15 },
    { label: 'Apanha Apeada — 1 ano', amountEUR: 25 },
    { label: 'Combo (à linha + apanha) — ano', amountEURMin: 35, amountEURMax: 50, note: 'Verifique o preço final no portal da DGRM ao fazer o pedido' },
    { label: 'Sacha (ancinho) para bivalves', amountEURMin: 15, amountEURMax: 35, note: 'Na Decathlon e em lojas de pesca' },
    { label: 'Coima sem licença', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Coima em zona PROIBIDO', amountEURMin: 250, amountEURMax: 1500 }
  ],
  sources: [
    { title: 'DGRM — Pesca Lúdica e Apanha', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPMA — Bivalves: zonas e classificação sanitária', url: 'https://www.ipma.pt/pt/bivalves/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPMA Bivalves App — mapa de zonas em tempo real (iOS/Android)', url: 'https://www.ipma.pt/pt/bivalves/avisos/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — Pesca Lúdica e Apanha', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 27/2001 — tamanho mínimo por espécie', url: 'https://dre.pt/dre/detalhe/portaria/27-2001-411720', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
