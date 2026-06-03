export default {
  editorialVoice: 'hackportugal',
  id: 'corte-arvores-licenca',
  categoryId: 'housing_buy',
  title: 'Abate de árvores no seu terreno — o que é permitido e onde há coimas de 5 000 €+',
  tldr: 'Nem todas as árvores no seu terreno podem simplesmente ser abatidas. Sobreiro e azinheira estão protegidos a nível nacional (Decreto-Lei 169/2001): o abate ou arranque ilegal constitui contraordenação ambiental. As coimas podem atingir dezenas de milhares de euros para pessoas singulares e ser substancialmente mais elevadas para empresas, além de medidas de reposição. O montante depende do tipo de infração e da culpa (Instituto da Conservação da Natureza e das Florestas, ICNF).\n\nA oliveira de idade avançada também está protegida (DL 120/86).\n\nQuaisquer trabalhos em zonas REN/RAN (reservas ecológica e agrícola nacionais) ou em parques naturais exigem autorizações próprias. Em zona urbana, quase sempre é necessária autorização da Câmara Municipal.\n\nPedidos relativos a sobreiro/azinheira — através do ICNF/e-Balcão. Relativos a oliveira — junto dos serviços agrícolas competentes ou da CCDR. Relativos a árvores municipais ou zona urbana — na Câmara Municipal. A Junta de Freguesia pode ajudar com informação local, mas normalmente não emite estas autorizações.\n\nO prazo de apreciação é normalmente de 30–90 dias.',
  tags: ['árvores', 'abate', 'sobreiro', 'azinheira', 'icnf', 'câmara'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'protected-species',
      title: 'Espécies de árvores protegidas — o mais importante',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existem espécies protegidas a nível nacional. O abate ilegal mesmo de uma só árvore = responsabilidade contraordenacional grave e, em casos graves, também procedimento criminal.' },
        { kind: 'checklist', items: [
          '🛑 SOBREIRO (Quercus suber) — TODAS as árvores estão protegidas. As coimas pelo abate ilegal são elevadas, até dezenas de milhares de euros para pessoas singulares',
          '🛑 AZINHEIRA (Quercus rotundifolia/ilex) — TODAS as árvores estão protegidas',
          '🛑 OLIVEIRA com mais de ~70 anos (referência: diâmetro do tronco > 60 cm) — protegida pelo DL 120/86',
          '🛑 CARVALHO (Quercus robur, faginea) — em alguns locais tem proteção adicional em parques naturais',
          'CASTANHEIRO (castanheiro) — não é uma espécie nacionalmente protegida como o sobreiro/azinheira; mas verifique regras fitossanitárias, áreas protegidas, REN/RAN, PDM e regulamentos municipais',
          'PINHEIRO MANSO — não tem a mesma proteção nacional que o sobreiro/azinheira; mas em áreas protegidas (RNAP), REN/RAN ou por PDM pode ser necessária autorização ou parecer',
          '✅ Outras fruteiras (macieira, limoeiro, laranjeira, pessegueiro) — normalmente podem ser abatidas no seu terreno sem autorização',
          '✅ EUCALIPTO, acácia — invasoras, a remoção é frequentemente incentivada'
        ] },
        { kind: 'warning', text: 'Sobreiro e azinheira são símbolos do país e fonte de cortiça/bolotas para suinicultura. A lei é rigorosa, as coimas são reais — todos os anos há processos mesmo por casos isolados. Se vir uma casca característica de “cortiça” com fendas profundas e uma copa larga — é quase certamente sobreiro. Não abata sem autorização.' }
      ]
    },
    {
      id: 'how-identify',
      title: 'Como reconhecer sobreiro/azinheira/oliveira',
      content: [
        { kind: 'paragraph', text: 'Antes de quaisquer trabalhos, identifique com precisão o que cresce no terreno. O mais seguro é chamar um engenheiro florestal ou um especialista do ICNF para inspeção (normalmente 50-150 €).' },
        { kind: 'checklist', items: [
          'SOBREIRO: casca de cortiça espessa com fendas longitudinais, copa ampla, folhas elípticas dentadas; bolotas em cúpulas',
          'AZINHEIRA: visualmente lembra o azevinho — folhas pequenas verde‑escuras, com pequenos espinhos nos rebentos jovens; casca cinzenta',
          'OLIVEIRA: folhas estreitas prateadas, facilmente reconhecível; se a árvore for claramente mais velha do que 70 anos — entra na categoria protegida, é melhor confirmar com um perito',
          'CARVALHO: folha clássica de “carvalho”, casca que clareia, amarelecimento no outono',
          'PINHEIRO MANSO: copa larga em forma de guarda-sol, agulhas compridas',
          'EUCALIPTO: tronco liso com casca que se desprende, folhas aromáticas — não protegido, pode ser abatido'
        ] },
        { kind: 'paragraph', text: 'As aplicações iNaturalist ou Plant.id ajudam por fotografia. Não é 100% preciso, mas é um ponto de partida cómodo.' }
      ]
    },
    {
      id: 'when-license-needed',
      title: 'Quando é necessária autorização — principais casos',
      content: [
        { kind: 'checklist', items: [
          '🛑 Sobreiro/azinheira: é necessária autorização do ICNF',
          '🛑 Oliveira: autorização dos serviços agrícolas competentes ou da CCDR ao abrigo do DL 120/86; além de regras municipais, se aplicável',
          '🛑 Em zonas RNAP/Natura 2000: verifique o plano de ordenamento ou regulamento da área protegida e solicite parecer/licença do ICNF se o abate puder afetar habitats, paisagem ou valores protegidos',
          '🛑 Em REN (Reserva Ecológica Nacional) e RAN (Reserva Agrícola Nacional): é necessária autorização da CCDR (Comissão de Coordenação e Desenvolvimento Regional)',
          '🛑 Em zona urbana (zona urbana pelo PDM — Plano Diretor Municipal): na maioria dos municípios é necessária autorização da Câmara Municipal',
          '🛑 Em terreno do Estado/junto a estradas: apenas com autorização da Câmara Municipal ou da Infraestruturas de Portugal',
          '✅ Em zona rural, no seu terreno, espécies não protegidas: regra geral, não é necessária autorização',
          'Em caso de perigo imediato, primeiro, se possível, telefone à Proteção Civil/Câmara/GNR/ICNF e documente o risco com fotografia, vídeo ou relatório. Remova apenas o mínimo necessário para a segurança; para sobreiro/azinheira/oliveira, formalize depois a comunicação ou o pedido com urgência. A comunicação posterior não garante a ausência de sanção',
          'Verifique o PDM do seu município: pode estabelecer proteção adicional de árvores e alamedas'
        ] }
      ]
    },
    {
      id: 'sobreiro-azinheira-process',
      title: 'Autorização para sobreiro/azinheira — como pedir',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Documentos',
            content: [
              { kind: 'checklist', items: [
                'Caderneta predial (das Finanças)',
                'Certidão de teor (da Conservatória do Registo Predial)',
                'Esquema/mapa com a localização exata de cada árvore (coordenadas GPS)',
                'Fotografias de cada árvore de vários ângulos',
                'Justificação: motivo (doença, risco, construção, reabilitação do terreno)',
                'Se for para construção — projeto aprovado pela Câmara Municipal'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submissão ao ICNF',
            content: [
              { kind: 'paragraph', text: 'icnf.pt → e-Balcão → Pedido de Corte ou Arranque de Sobreiros e Azinheiras. Entrada com Chave Móvel Digital (CMD).' },
              { kind: 'paragraph', text: 'Taxas: aproximadamente 50-200 € pela submissão +, se necessário, deslocação de especialista ao local 50-150 €.' }
            ]
          },
          {
            id: 's3',
            title: 'Inspeção técnica',
            content: [
              { kind: 'paragraph', text: 'O ICNF pode enviar um especialista para confirmar o estado da árvore. Para árvores saudáveis, quase sempre haverá indeferimento. O ICNF pode estabelecer medidas compensatórias ou de reposição — plantação, proteção da regeneração natural ou outras condições; o coeficiente concreto não é universal e é indicado na decisão.' }
            ]
          },
          {
            id: 's4',
            title: 'Decisão',
            content: [
              { kind: 'paragraph', text: 'Prazo de apreciação — 30–90 dias. A autorização pode conter condições e medidas de compensação ou reposição; deve cumprir exatamente as condições do ICNF, do município ou da CCDR constantes da decisão. Validade — 1 ano: os trabalhos devem ser realizados dentro desse prazo.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'penalties',
      title: 'Coimas — isto é sério',
      content: [
        { kind: 'checklist', items: [
          'Sobreiro/azinheira sem autorização: sanção contraordenacional ambiental elevada. Para pessoas singulares são possíveis coimas de dezenas de milhares de euros (ao abrigo do DL 169/2001, até cerca de 150 000 € em casos graves); adicionalmente podem existir medidas de reposição ou compensação',
          'Para pessoas coletivas, as coimas podem ser substancialmente mais elevadas — até centenas de milhares de euros nas infrações ambientais mais graves; o intervalo concreto depende da qualificação da infração',
          'Oliveira antiga sem autorização: 1 000-10 000 €',
          'Em parque natural sem autorização: 5 000-50 000 € + obrigação de repor as plantações',
          'Em REN/RAN sem autorização: 1 500-50 000 €',
          'Em zona urbana sem autorização da Câmara Municipal: 1 000-25 000 € (conforme as regras do município concreto)',
          'Pode haver procedimento criminal em caso de infrações sistemáticas ou dano ambiental significativo',
          'Compensação e reposição: apenas segundo as condições da autorização concreta ou da decisão da autoridade — pode incluir plantação, manutenção, proteção da regeneração natural ou outras medidas'
        ] },
        { kind: 'warning', text: 'A GNR, unidade SEPNA (patrulha ambiental), fiscaliza zonas rurais com drones e imagens de satélite. A fiscalização posterior é possível mesmo anos depois. Os vizinhos comunicam frequentemente abates ilegais. Não arrisque.' }
      ]
    },
    {
      id: 'practical-cases',
      title: 'Situações frequentes',
      content: [
        { kind: 'checklist', items: [
          'Comprou uma quinta, há um sobreiro no terreno — quer removê-lo para construir casa → será necessária autorização do ICNF + projeto de arquiteto + plantação compensatória. É possível, mas prepare-se para 6–12 meses de processo',
          'Um sobreiro caiu depois de uma tempestade e bloqueou a passagem → pode cortar e remover como medida urgente, depois notificar o ICNF com fotografias',
          'Uma oliveira antiga atrapalha no terreno → verifique a autorização ao abrigo do DL 120/86 junto dos serviços agrícolas regionais ou da CCDR e, separadamente, as regras municipais da Câmara, se o terreno estiver em zona urbana ou existir proteção municipal de árvores. Muitas vezes é indeferido; é melhor considerar poda ou transplante',
          'Um eucalipto cresceu demasiado, risco de incêndio → pode ser abatido sem autorização; em alguns locais isto é até uma exigência para formar uma faixa de gestão de combustível',
          'Uma macieira velha atrapalha a horta → não é necessária autorização (a espécie não é protegida)',
          'Pinheiro manso em área protegida → será necessária autorização CCDR/ICNF',
          'Árvore seca de qualquer espécie → pode ser removida como medida de segurança, mas no caso de sobreiro/azinheira contacte primeiro o ICNF'
        ] }
      ]
    },
    {
      id: 'contractors',
      title: 'Empreiteiros e custo dos trabalhos',
      content: [
        { kind: 'paragraph', text: 'O abate de árvores grandes é trabalho para profissionais. Procure arboristas/podadores locais:' },
        { kind: 'checklist', items: [
          'Árvore pequena (4–8 m): 100-300 €',
          'Média (8–15 m): 300-800 €',
          'Grande (15–25 m): 800-2 000 €',
          'Sobreiro ou oliveira antiga (exige técnica especialmente cuidadosa): 1 500-5 000 €',
          'Destroçamento/remoção de cepo (stump removal): +100-500 €',
          'Transporte e eliminação: 50-200 €',
          'Seguro do empreiteiro: verifique obrigatoriamente; caso contrário, a responsabilidade por incidentes recairá sobre si',
          'Onde procurar: jardineiros.pt, FNAP, grupos locais de Facebook sobre jardins e terrenos'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Autorização ICNF (sobreiro/azinheira)', amountEURMin: 50, amountEURMax: 200 },
    { label: 'Inspeção técnica ICNF', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Autorização Câmara Municipal (zona urbana)', amountEURMin: 30, amountEURMax: 200 },
    { label: 'Autorização CCDR (REN/RAN)', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Identificação da espécie por especialista', amountEURMin: 50, amountEURMax: 200, note: 'Se for necessário confirmar a espécie/idade' },
    { label: 'Abate de árvore grande', amountEURMin: 800, amountEURMax: 2000 },
    { label: 'Abate de sobreiro/oliveira antiga', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Compensação: plantas jovens (5+ árvores)', amountEURMin: 50, amountEURMax: 500, note: 'Compra e plantação' },
    { label: 'Coima por sobreiro/azinheira sem autorização', amountEURMin: 5000, amountEURMax: 150000, note: 'Para pessoas singulares; pode ser mais elevada para empresas. Depende da infração' }
  ],
  sources: [
    { title: 'ICNF — Sobreiros e Azinheiras', url: 'https://www.icnf.pt/florestas/gfr/sa', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 169/2001 — proteção do sobreiro e da azinheira', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2001-34488075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 120/86 — proteção da oliveira', url: 'https://dre.pt/dre/detalhe/decreto-lei/120-1986-220815', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF e-Balcão — pedido de corte de sobreiros', url: 'https://eservicos.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'CCDR — autorizações REN', url: 'https://www.ccdr-lvt.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
