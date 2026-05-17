export default {
  editorialVoice: 'hackportugal',
  id: 'corte-arvores-licenca',
  categoryId: 'housing_buy',
  title: 'Abate de árvores no seu terreno — o que é permitido e onde a multa pode passar de 5 000 €',
  tldr: 'Nem todas as árvores no seu terreno podem simplesmente ser abatidas. Sobreiro e azinheira estão protegidos a nível nacional (Decreto-Lei 169/2001) — multa de 5 000-50 000 € por cada árvore sem autorização do ICNF (Instituto da Conservação da Natureza e das Florestas). Oliveira anterior a 1951 — também está protegida (DL 120/86). Quaisquer trabalhos em zonas REN/RAN (reservas nacionais ecológica/agrícola) ou parques naturais exigem autorizações separadas. Em zona urbana, quase sempre é necessária autorização da Câmara Municipal. O pedido é feito online através do e-Balcão ICNF para sobreiro/azinheira ou através da Junta de Freguesia. O prazo de apreciação é normalmente de 30–90 dias.',
  tags: ['árvores', 'abate', 'sobreiro', 'azinheira', 'icnf', 'câmara'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'protected-species',
      title: 'Espécies de árvores protegidas — o essencial',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existem espécies protegidas a nível nacional. O abate ilegal de uma única árvore = responsabilidade contraordenacional grave e, em casos graves, também procedimento criminal.' },
        { kind: 'checklist', items: [
          '🛑 SOBREIRO (Quercus suber) — TODAS as árvores estão protegidas. Multa de 5 000-50 000 € por árvore',
          '🛑 AZINHEIRA (Quercus rotundifolia/ilex) — TODAS as árvores estão protegidas',
          '🛑 OLIVEIRA com mais de ~70 anos (referência: diâmetro do tronco > 60 cm) — protegida pelo DL 120/86',
          '🛑 CARVALHO (Quercus robur, faginea) — em alguns locais tem protecção adicional em parques naturais',
          '🛑 CASTANHEIRO — protegido em zonas IGP (Trás-os-Montes)',
          '🛑 PINHEIRO MANSO — protegido na RNAP',
          '✅ Outras árvores de fruto (macieira, limoeiro, laranjeira, pessegueiro) — normalmente podem ser abatidas no seu terreno sem autorização',
          '✅ EUCALIPTO, acácia — espécies invasoras; a remoção é frequentemente incentivada'
        ] },
        { kind: 'warning', text: 'Sobreiro e azinheira — símbolos do país e fonte de cortiça/bolotas para a suinicultura. A lei é rigorosa, as multas são reais — todos os anos há processos mesmo por casos isolados. Se vir uma casca característica de “cortiça” com fendas profundas e uma copa larga, é quase certamente um sobreiro. Não abata sem autorização.' }
      ]
    },
    {
      id: 'how-identify',
      title: 'Como reconhecer sobreiro/azinheira/oliveira',
      content: [
        { kind: 'paragraph', text: 'Antes de qualquer trabalho, identifique com exactidão o que cresce no terreno. O mais seguro é chamar um engenheiro florestal ou um especialista do ICNF para vistoria (normalmente 50-150 €).' },
        { kind: 'checklist', items: [
          'SOBREIRO: casca grossa de cortiça com fendas longitudinais, copa ampla e espalhada, folhas elípticas serrilhadas; bolotas em cúpulas',
          'AZINHEIRA: visualmente lembra o azevinho — folhas pequenas verde-escuras, com pequenos espinhos nos rebentos jovens; casca cinzenta',
          'OLIVEIRA: folhas estreitas prateadas, facilmente reconhecível; se a árvore for claramente mais antiga do que 70 anos — entra no regime de protecção, é melhor confirmar com um especialista',
          'CARVALHO: lâmina foliar “clássica” de carvalho, casca que clareia, amarelecimento no Outono',
          'PINHEIRO MANSO: copa larga em forma de guarda-sol, agulhas longas',
          'EUCALIPTO: tronco liso com casca a descamar, folhas aromáticas — não está protegido, pode ser abatido'
        ] },
        { kind: 'paragraph', text: 'As aplicações iNaturalist ou Plant.id ajudam a partir de uma fotografia. Não têm 100% de precisão, mas são um ponto de partida prático.' }
      ]
    },
    {
      id: 'when-license-needed',
      title: 'Quando é necessária autorização — casos principais',
      content: [
        { kind: 'checklist', items: [
          '🛑 Sempre para sobreiro/azinheira e para oliveira protegida: é necessária autorização do ICNF, mesmo para uma única árvore',
          '🛑 Em áreas protegidas (PN, RN, ZPE, ZEC): é necessária autorização para qualquer espécie',
          '🛑 Em REN (Reserva Ecológica Nacional) e RAN (Reserva Agrícola Nacional): é necessária autorização da CCDR (Comissão de Coordenação e Desenvolvimento Regional)',
          '🛑 Em zona urbana (zona urbana segundo o PDM — Plano Diretor Municipal): na maioria dos municípios é necessária autorização da Câmara Municipal',
          '🛑 Em terreno do Estado/junto a estradas: apenas com autorização da Câmara Municipal ou da Infraestruturas de Portugal',
          '✅ Em zona rural, no seu próprio terreno, espécies não protegidas: em regra, não é necessária autorização',
          '✅ Árvore em situação de emergência (risco de queda sobre casa ou estrada): pode ser removida de imediato, mas é obrigatório notificar a Câmara Municipal/ICNF a posteriori com fotografias e uma justificação breve',
          'Verifique o PDM do seu município: pode estabelecer protecção adicional de árvores e alamedas'
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
                'Esquema/mapa com a localização exacta de cada árvore (coordenadas GPS)',
                'Fotografias de cada árvore de vários ângulos',
                'Justificação: motivo (doença, risco, construção, reabilitação do terreno)',
                'Se for para construção — projecto aprovado pela Câmara Municipal'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Pedido ao ICNF',
            content: [
              { kind: 'paragraph', text: 'icnf.pt → e-Balcão → Pedido de Corte ou Arranque de Sobreiros e Azinheiras. Acesso com Chave Móvel Digital (CMD).' },
              { kind: 'paragraph', text: 'Taxas: indicativamente 50-200 € pelo pedido +, se necessário, deslocação de especialista ao local 50-150 €.' }
            ]
          },
          {
            id: 's3',
            title: 'Vistoria técnica',
            content: [
              { kind: 'paragraph', text: 'O ICNF pode enviar um especialista para confirmar o estado da árvore. Para árvores saudáveis, a decisão será quase sempre de indeferimento. São aceites fundamentos como: árvore morta/a secar, risco estrutural, ou projecto de compensação (plantação obrigatória de 5+ novas árvores por cada árvore abatida).' }
            ]
          },
          {
            id: 's4',
            title: 'Decisão',
            content: [
              { kind: 'paragraph', text: 'O prazo de apreciação é de 30–90 dias. A autorização é frequentemente condicionada: com obrigação de compensação (normalmente 5 novas árvores por cada árvore abatida). Validade — 1 ano: os trabalhos têm de ser executados dentro desse prazo.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'penalties',
      title: 'Multas — isto é sério',
      content: [
        { kind: 'checklist', items: [
          'Sobreiro/azinheira sem autorização: 5 000-50 000 € por cada árvore (para pessoas singulares)',
          'Sobreiro/azinheira sem autorização (para pessoas colectivas): até 250 000 € por árvore',
          'Oliveira antiga sem autorização: 1 000-10 000 €',
          'Em parque natural sem autorização: 5 000-50 000 € + obrigação de repor a vegetação',
          'Em REN/RAN sem autorização: 1 500-50 000 €',
          'Em zona urbana sem autorização da Câmara Municipal: 1 000-25 000 € (segundo as regras do município concreto)',
          'Pode haver procedimento criminal em caso de infracções sistemáticas ou dano ecológico substancial',
          'Compensação: plantação de 5-10 novas árvores por cada árvore abatida'
        ] },
        { kind: 'warning', text: 'A GNR, através do SEPNA (patrulha ambiental), fiscaliza zonas rurais com drones e imagens de satélite. A verificação a posteriori é possível mesmo anos depois. Os vizinhos comunicam frequentemente abates ilegais. Não arrisque.' }
      ]
    },
    {
      id: 'practical-cases',
      title: 'Situações frequentes',
      content: [
        { kind: 'checklist', items: [
          'Comprou uma quinta, há um sobreiro no terreno — quer removê-lo para construir uma casa → será necessária autorização do ICNF + projecto de arquitecto + plantação compensatória. É possível, mas prepare-se para um processo de 6–12 meses',
          'Um sobreiro caiu depois de uma tempestade e bloqueou a passagem → pode serrar e remover como medida urgente, notificando depois o ICNF com fotografias',
          'Planeia abater uma oliveira com ~80 anos → quase certamente será necessária autorização da Câmara Municipal. Muitas vezes é recusada; é melhor ponderar poda ou transplante',
          'Um eucalipto cresceu demasiado e há risco de incêndio → pode ser abatido sem autorização; em alguns locais isto é até uma exigência para criar faixa de gestão de combustível',
          'Uma macieira antiga atrapalha a horta → não é necessária autorização (a espécie não está protegida)',
          'Pinheiro manso em zona protegida → será necessária autorização da CCDR/ICNF',
          'Árvore seca de qualquer espécie → pode ser removida como medida de segurança, mas se for sobreiro/azinheira contacte primeiro o ICNF'
        ] }
      ]
    },
    {
      id: 'contractors',
      title: 'Prestadores e custo dos trabalhos',
      content: [
        { kind: 'paragraph', text: 'O abate de árvores de grande porte é trabalho para profissionais. Procure arboristas/podadores locais:' },
        { kind: 'checklist', items: [
          'Árvore pequena (4–8 m): 100-300 €',
          'Média (8–15 m): 300-800 €',
          'Grande (15–25 m): 800-2 000 €',
          'Sobreiro ou oliveira antiga (exige técnica especialmente cuidadosa): 1 500-5 000 €',
          'Destoca/remoção do cepo (stump removal): +100-500 €',
          'Transporte e eliminação: 50-200 €',
          'Seguro do prestador: confirme obrigatoriamente; caso contrário, a responsabilidade por incidentes recairá sobre si',
          'Onde procurar: jardineiros.pt, FNAP, grupos locais de Facebook sobre jardinagem e terrenos'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Autorização ICNF (sobreiro/azinheira)', amountEURMin: 50, amountEURMax: 200 },
    { label: 'Vistoria técnica ICNF', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Autorização Câmara Municipal (zona urbana)', amountEURMin: 30, amountEURMax: 200 },
    { label: 'Autorização CCDR (REN/RAN)', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Identificação da espécie por especialista', amountEURMin: 50, amountEURMax: 200, note: 'Se for necessário confirmar a espécie/idade' },
    { label: 'Abate de árvore grande', amountEURMin: 800, amountEURMax: 2000 },
    { label: 'Abate de sobreiro/oliveira antiga', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Compensação: mudas (5+ árvores)', amountEURMin: 50, amountEURMax: 500, note: 'Compra e plantação' },
    { label: 'Multa por sobreiro sem autorização', amountEURMin: 5000, amountEURMax: 50000, note: 'Por cada árvore' }
  ],
  sources: [
    { title: 'ICNF — Sobreiros e Azinheiras', url: 'https://www.icnf.pt/florestas/gfr/sa', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 169/2001 — protecção do sobreiro e da azinheira', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2001-34488075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 120/86 — protecção da oliveira', url: 'https://dre.pt/dre/detalhe/decreto-lei/120-1986-220815', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF e-Balcão — pedido de corte de sobreiros', url: 'https://eservicos.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'CCDR — autorizações REN', url: 'https://www.ccdr-lvt.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
