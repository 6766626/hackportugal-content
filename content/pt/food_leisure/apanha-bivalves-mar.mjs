export default {
  editorialVoice: 'hackportugal',
  id: 'apanha-bivalves-mar',
  categoryId: 'food_leisure',
  title: 'Apanha de bivalves — licença e zonas sanitárias',
  tldr: 'A apanha de bivalves na praia e na zona costeira (ameijoa, berbigão, conquilha, longueirão) é uma categoria própria de Pesca Lúdica da DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos). Licença "Apanha Apeada": ~10 € por 3 dias, ~25 € por ano. Limite diário: 1 kg com concha por pessoa. Só se pode apanhar em zonas sanitariamente classificadas (zonas classificadas): o IPMA (Instituto do Mar e da Atmosfera) publica mensalmente a lista A/B/C. A apanha em zonas não classificadas é ilegal OU exige obrigatoriamente tratamento térmico (mesmo que a espécie seja permitida). Proibidos: pé-de-cabra, quaisquer ferramentas mecânicas, e apanhar conchas abaixo do tamanho mínimo (ameijoa 25 mm, berbigão 25 mm, longueirão 100 mm). A licença Pesca Lúdica à linha para cana de pesca NÃO cobre a apanha de bivalves — é necessária licença separada.',
  tags: ['bivalves', 'mariscagem', 'apanha', 'ameijoa', 'dgrm', 'ipma'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-apanha',
      title: 'O que é a apanha de bivalves e por que existe uma licença separada 🐚',
      content: [
        { kind: 'paragraph', text: 'A apanha de bivalves é a recolha recreativa de moluscos bivalves e outros organismos marinhos comestíveis na zona costeira: em praias de areia durante a vazante, em rochas, em estuários. Em Portugal, é uma vertente da Pesca Lúdica, juridicamente regulada pela DGRM, e o controlo sanitário é assegurado pelo IPMA (Instituto Português do Mar e da Atmosfera).' },
        { kind: 'checklist', items: [
          'Bivalves: ameijoa-boa (Ruditapes decussatus), ameijoa-japonesa (R. philippinarum), berbigão (Cerastoderma edule), longueirão (Ensis spp.), navalha (Solen spp.)',
          'Outros moluscos: pé-de-burrinho, lapa (patela), mexilhão nas rochas',
          'Crustáceos: caranguejo, camarão, percebes — parcialmente abrangidos',
          'Equinodermes: ouriço-do-mar — regulamentação específica',
          'NÃO inclui: pesca com cana (requer Pesca Lúdica à linha), tirar polvo à mão da toca (proibido desde 2017), lagostas (apenas captura profissional)'
        ] },
        { kind: 'warning', text: 'A licença Pesca Lúdica à linha (para cana) NÃO é válida para bivalves. E vice‑versa. Muitos pensam: «tenho licença», vão cavar ameijoa no Algarve e levam coima de 250–500 €.' }
      ]
    },
    {
      id: 'sanitary-zones',
      title: 'Zonas sanitárias — o mais importante',
      content: [
        { kind: 'paragraph', text: 'É uma questão de saúde pública. Os bivalves filtram a água e acumulam toxinas (biotoxinas de algas — “marés vermelhas”), bactérias (E. coli, Salmonella) e metais pesados. O IPMA publica mensalmente um mapa atualizado: que zonas estão autorizadas, para que espécies e em que condições podem ser consumidas.' },
        { kind: 'checklist', items: [
          'Classe A (apanhar e comer): raro; por exemplo, ameijoa da Ria Formosa em bons meses',
          'Classe B (pode apanhar, mas tratamento térmico obrigatório): a maioria das zonas em Portugal. Cozer no mínimo 5 minutos ou manter 2–3 dias em água salgada limpa',
          'Classe C (requer depuração industrial): não disponível para recreio',
          'PROIBIDO (proibido): apanha e consumo totalmente proibidos, geralmente devido a picos de biotoxinas',
          'Zona não classificada (zona não classificada): apanha e consumo proibidos — não há controlo sanitário'
        ] },
        { kind: 'paragraph', text: 'O IPMA atualiza o mapa todas as semanas em ipma.pt → Mar e Pesca → Bivalves. Existe também a app do IPMA para iOS e Android, onde pode verificar rapidamente a zona por coordenadas.' },
        { kind: 'warning', text: 'Apanhar em zona PROIBIDO mesmo em pequenas quantidades = coima até 1500 € + risco de intoxicação. As biotoxinas não se destroem com a cozedura! Picos — março–maio e setembro–outubro após as “florações” de primavera/outono.' }
      ]
    },
    {
      id: 'how-to-license',
      title: 'Obter a licença Apanha Apeada',
      content: [
        { kind: 'paragraph', text: 'Faça no portal.dgrm.mm.gov.pt → Licenciamento → Pesca Lúdica → Apanha Apeada. Acesso com Chave Móvel Digital (CMD; assinatura digital móvel) ou Cartão de Cidadão.' },
        { kind: 'checklist', items: [
          '3 dias: ~10 €',
          '1 mês: ~15 €',
          '1 ano: ~25 €',
          '3 anos: ~60 €',
          'A licença é nominal, não pode ser cedida'
        ] },
        { kind: 'paragraph', text: 'O combinado «à linha apeada + apanha» por vezes é mais vantajoso se também pesca e apanha moluscos.' }
      ]
    },
    {
      id: 'rules-tools',
      title: 'Regras: ferramentas, tamanhos, limites',
      content: [
        { kind: 'paragraph', text: 'Tamanhos mínimos — é crítico cumprir:' },
        { kind: 'checklist', items: [
          'Ameijoa-boa e ameijoa-japonesa: 25 mm de diâmetro da concha',
          'Berbigão: 25 mm',
          'Longueirão / navalha: 100 mm de comprimento',
          'Mexilhão: 50 mm',
          'Lapa (patela): 30 mm',
          'Ostra plana: 60 mm; portuguesa: 80 mm',
          'Polvo: 750 g (mas é proibido arrancá‑lo da toca com as mãos desde 2017)',
          'Percebes: 25 mm na base de fixação'
        ] },
        { kind: 'paragraph', text: 'Limite diário:' },
        { kind: 'checklist', items: [
          'Todos os bivalves no total: 1 kg com concha por pessoa por dia',
          'Percebes: 0,5 kg no total (espécie especialmente protegida!)',
          'Mexilhão: 1 kg',
          'Polvo: até 5 kg (difícil de alcançar, mas a regra existe)'
        ] },
        { kind: 'paragraph', text: 'Ferramentas permitidas e proibidas:' },
        { kind: 'checklist', items: [
          '✅ Apenas apanha manual (dedos, vareta fina)',
          '✅ Peneira/grade para medir tamanho e peneirar areia',
          '✅ Sacha (mini‑ancinho) com largura até 30 cm e dentes de no máximo 5 cm',
          '✅ Faca de madeira para percebes',
          '❌ Qualquer pá com cabo',
          '❌ Mantas/ras (tipos de redes)',
          '❌ Motobombas para retirar água ou areia',
          '❌ Hidroinjeção (proibida em todo o lado desde 2014)',
          '❌ Eletrochoques'
        ] }
      ]
    },
    {
      id: 'where-when',
      title: 'Onde e quando apanhar — melhores pontos',
      content: [
        { kind: 'paragraph', text: 'Regra principal: antes de sair, verifique o mapa do IPMA do mês atual. Os estatutos das zonas mudam.' },
        { kind: 'checklist', items: [
          'Ria Formosa (Algarve): a principal «fábrica» de ameijoa em Portugal. Olhão, Tavira, Faro. Muitas vezes classe A ou B.',
          'Ria de Aveiro: berbigão e ameijoa. Época — inverno e primavera.',
          'Ria de Alvor: bivalves mistos.',
          'Estuário do Sado (Setúbal): ameijoa e berbigão. Parte das zonas em Reserva Natural, com regras adicionais.',
          'Lagoa de Albufeira: ameijoa, às vezes classe A.',
          'Ribeira do Lavre, canais da Ria Formosa: longueirão — clássico.',
          'Costa Vicentina: percebes nas rochas (MUITO perigoso para iniciantes, há mortes todos os anos).',
          'Berlengas: TUDO PROIBIDO — Reserva Natural.'
        ] },
        { kind: 'paragraph', text: 'A melhor altura é a baixa-mar. Tabelas de marés (calendário de marés): ipma.pt ou a app Tides Near Me. 2 horas antes do pico de baixa-mar e 1 hora depois — ideal.' },
        { kind: 'warning', text: 'Não se demore para além da vazante. A enchente entra rapidamente na Ria Formosa e nos estuários — todos os anos há afogamentos de apanhadores perdidos. Nunca vá sozinho. Telemóvel com bateria — obrigatório.' }
      ]
    },
    {
      id: 'preparation-cooking',
      title: 'Como tratar o apanhado',
      content: [
        { kind: 'paragraph', text: 'Para a classe B (a maioria das zonas) é obrigatório o tratamento antes de comer.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Limpeza da areia',
            content: [
              { kind: 'checklist', items: [
                'Demolhe em água salgada (35 g de sal por 1 l) à “temperatura do mar” 12–18 °C',
                'No mínimo 3–4 horas, idealmente durante a noite',
                'Troque a água a cada 2–3 horas: a ameijoa “expulsa” a areia ativamente',
                'Adicione farinha de milho — os moluscos limpam‑se mais depressa'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Tratamento térmico',
            content: [
              { kind: 'checklist', items: [
                'Para a classe B é obrigatório: cozer no mínimo 5 minutos a ~90 °C ou fritar pelo menos 10 minutos',
                'Introduza em água já a ferver ou numa frigideira bem quente',
                'As conchas abriram — está pronto; não abriram — deite fora, não coma',
                'Clássico: Ameijoas à Bulhão Pato — vinho branco, alho, coentros',
                'Carne de porco com ameijoas — clássico do Alentejo'
              ] }
            ]
          }
        ] },
        { kind: 'warning', text: 'NUNCA coma cru se a zona não for de classe A. As biotoxinas (PSP, ASP, DSP) não se destroem com a cozedura; o tratamento térmico mata bactérias, mas não toxinas. Se houver pico de toxinas, mesmo os moluscos cozinhados podem ser perigosos. Confirme sempre no IPMA.' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Quem fiscaliza e quais as coimas',
      content: [
        { kind: 'checklist', items: [
          'Polícia Marítima — nas praias e nos estuários',
          'GNR-SEPNA — nos parques naturais',
          'Capitania — nos portos',
          'ASAE (Autoridade de Segurança Alimentar e Económica) verifica restaurantes e vendedores quanto à origem dos bivalves'
        ] },
        { kind: 'checklist', items: [
          'Sem licença: 100–500 € + apreensão do apanhado e do equipamento',
          'Apanha em zona PROIBIDO: 250–1500 €',
          'Tamanho abaixo do mínimo: 100–300 € por cada infração',
          'Exceder o limite diário: 100–500 €',
          'Ferramentas proibidas (bomba, pá): até 1500 €',
          'Tentativa de vender o apanhado: 500–3000 € + processo criminal em caso de reincidência',
          'Apanha de percebes sem licença: até 1500 € (particularmente rigoroso na Costa Vicentina)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Apanha Apeada — 3 dias', amountEUR: 10 },
    { label: 'Apanha Apeada — 1 mês', amountEUR: 15 },
    { label: 'Apanha Apeada — 1 ano', amountEUR: 25 },
    { label: 'Combo (à linha + apanha) — 1 ano', amountEURMin: 35, amountEURMax: 50, note: 'Verifique o preço final no portal da DGRM ao pedir' },
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
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
