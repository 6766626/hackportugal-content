export default {
  editorialVoice: 'hackportugal',
  id: 'corte-arvores-licenca',
  categoryId: 'housing_buy',
  title: 'Corte de árvores no seu terreno — o que é permitido e onde a coima passa dos 5 000 €',
  tldr: 'Nem todas as árvores no seu terreno podem ser simplesmente abatidas. Sobreiro e azinheira estão protegidos a nível nacional (Decreto-Lei 169/2001) — coima de 5 000-50 000 € por cada árvore sem autorização do ICNF (Instituto da Conservação da Natureza e das Florestas).\n\nOliveira com mais de 1951 também está protegida (DL 120/86).\n\nQuaisquer trabalhos em zonas REN/RAN (reservas ecológica/agrícola nacionais) ou em parques naturais exigem autorizações separadas. Em zona urbana, é quase sempre necessária autorização da Câmara Municipal.\n\nO pedido é feito online através do e-Balcão ICNF para sobreiro/azinheira ou através da Junta de Freguesia.\n\nO prazo de decisão é normalmente de 30–90 dias.',
  tags: ['árvores', 'corte', 'sobreiro', 'azinheira', 'icnf', 'câmara'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'protected-species',
      title: 'Espécies de árvores protegidas — o mais importante',
      content: [
        { kind: 'paragraph', text: 'Em Portugal há espécies protegidas a nível nacional. O abate ilegal mesmo de uma só árvore = responsabilidade contraordenacional grave e, em casos severos, também procedimento criminal.' },
        { kind: 'checklist', items: [
          '🛑 SOBREIRO (Quercus suber) — TODAS as árvores estão protegidas. Coima de 5 000-50 000 € por árvore',
          '🛑 AZINHEIRA (Quercus rotundifolia/ilex) — TODAS as árvores estão protegidas',
          '🛑 OLIVEIRA com mais de ~70 anos (referência: diâmetro do tronco > 60 cm) — protegida pelo DL 120/86',
          '🛑 CARVALHO (Quercus robur, faginea) — em certos locais tem protecção adicional em parques naturais',
          '🛑 CASTANHEIRO — protegido em zonas IGP (Trás-os-Montes)',
          '🛑 PINHEIRO MANSO — protegido na RNAP',
          '✅ Outras fruteiras (macieira, limoeiro, laranjeira, pessegueiro) — normalmente podem ser abatidas no seu terreno sem autorização',
          '✅ EUCALIPTO, acácia — invasoras; a remoção é frequentemente incentivada'
        ] },
        { kind: 'warning', text: 'Sobreiro e azinheira são símbolos do país e fonte de cortiça/bolotas para a suinicultura. A lei é rigorosa, as coimas são reais — todos os anos há processos mesmo por casos isolados. Se vir a casca característica de “cortiça”, com fendas profundas, e uma copa ampla, é quase certamente um sobreiro. Não corte sem autorização.' }
      ]
    },
    {
      id: 'how-identify',
      title: 'Como reconhecer sobreiro/azinheira/oliveira',
      content: [
        { kind: 'paragraph', text: 'Antes de qualquer trabalho, identifique com precisão o que cresce no terreno. O mais seguro é chamar um engenheiro florestal ou um especialista do ICNF para vistoria (normalmente 50-150 €).' },
        { kind: 'checklist', items: [
          'SOBREIRO: casca grossa de cortiça com fendas longitudinais, copa ampla e aberta, folhas elípticas dentadas; bolotas em cúpulas',
          'AZINHEIRA: visualmente lembra o azevinho — folhas pequenas verde‑escuras; nos rebentos jovens há pequenos espinhos; casca cinzenta',
          'OLIVEIRA: folhas estreitas prateadas, facilmente reconhecível; se a árvore for claramente mais antiga do que 70 anos, entra no regime de protecção, sendo melhor confirmar com um perito',
          'CARVALHO: folha “de carvalho” clássica, casca mais clara, amarelecimento no outono',
          'PINHEIRO MANSO: copa larga em forma de guarda-sol, agulhas compridas',
          'EUCALIPTO: tronco liso com casca a desprender-se, folhas aromáticas — não está protegido, pode ser abatido'
        ] },
        { kind: 'paragraph', text: 'Aplicações como iNaturalist ou Plant.id ajudam através de fotografia. Não têm 100% de precisão, mas são um ponto de partida conveniente.' }
      ]
    },
    {
      id: 'when-license-needed',
      title: 'Quando é necessária autorização — casos principais',
      content: [
        { kind: 'checklist', items: [
          '🛑 Sempre para sobreiro/azinheira e para oliveira protegida: é necessária autorização do ICNF, mesmo para uma só árvore',
          '🛑 Em áreas de conservação da natureza (PN, RN, ZPE, ZEC): é necessária autorização para quaisquer espécies',
          '🛑 Em REN (Reserva Ecológica Nacional) e RAN (Reserva Agrícola Nacional): é necessária autorização da CCDR (Comissão de Coordenação e Desenvolvimento Regional)',
          '🛑 Em zona urbana (zona urbana segundo o PDM — Plano Diretor Municipal): na maioria dos municípios é necessária autorização da Câmara Municipal',
          '🛑 Em terrenos do Estado/junto a estradas: apenas com autorização da Câmara Municipal ou da Infraestruturas de Portugal',
          '✅ Em zona rural, no seu terreno, espécies não protegidas: regra geral, não é necessária autorização',
          '✅ Árvore em situação de emergência (risco de queda sobre casa ou estrada): pode ser removida de imediato, mas é obrigatório notificar a Câmara Municipal/ICNF posteriormente, com fotografias e uma justificação breve',
          'Verifique o PDM do seu município: pode estabelecer protecção adicional para árvores e alamedas'
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
                'Fotografias de cada árvore a partir de vários ângulos',
                'Justificação: motivo (doença, risco, construção, reabilitação do terreno)',
                'Se for para construção — projecto aprovado pela Câmara Municipal'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submissão ao ICNF',
            content: [
              { kind: 'paragraph', text: 'icnf.pt → e-Balcão → Pedido de Corte ou Arranque de Sobreiros e Azinheiras. Acesso com Chave Móvel Digital (CMD).' },
              { kind: 'paragraph', text: 'Taxas: aproximadamente 50-200 € pelo pedido +, se necessário, deslocação de técnico ao local por 50-150 €.' }
            ]
          },
          {
            id: 's3',
            title: 'Vistoria técnica',
            content: [
              { kind: 'paragraph', text: 'O ICNF pode enviar um técnico para confirmar o estado. Para árvores saudáveis, quase sempre haverá indeferimento. São aceites fundamentos como: árvore morta/a secar, risco estrutural, ou projecto de compensação (plantação obrigatória de 5+ novas árvores por cada árvore abatida).' }
            ]
          },
          {
            id: 's4',
            title: 'Decisão',
            content: [
              { kind: 'paragraph', text: 'O prazo de decisão é de 30–90 dias. A autorização é frequentemente condicionada: com obrigação de compensação (normalmente 5 novas plantas por cada árvore abatida). Validade — 1 ano: os trabalhos devem ser executados dentro desse prazo.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'penalties',
      title: 'Coimas — é assunto sério',
      content: [
        { kind: 'checklist', items: [
          'Sobreiro/azinheira sem autorização: 5 000-50 000 € por cada árvore (para pessoas singulares)',
          'Sobreiro/azinheira sem autorização (para pessoas colectivas): até 250 000 € por árvore',
          'Oliveira antiga sem autorização: 1 000-10 000 €',
          'Em parque natural sem autorização: 5 000-50 000 € + obrigação de repor a vegetação',
          'Em REN/RAN sem autorização: 1 500-50 000 €',
          'Em zona urbana sem autorização da Câmara Municipal: 1 000-25 000 € (conforme as regras do município concreto)',
          'Pode haver procedimento criminal em caso de infracções sistemáticas ou dano ecológico significativo',
          'Compensação: plantação de 5-10 novas plantas por cada árvore abatida'
        ] },
        { kind: 'warning', text: 'A GNR (Guarda Nacional Republicana), através do SEPNA (patrulha ambiental), fiscaliza zonas rurais com drones e imagens de satélite. A verificação posterior pode acontecer até anos depois. Os vizinhos comunicam frequentemente cortes ilegais. Não arrisque.' }
      ]
    },
    {
      id: 'practical-cases',
      title: 'Situações frequentes',
      content: [
        { kind: 'checklist', items: [
          'Comprou uma quinta e há sobreiro no terreno — quer remover para construir casa → será necessária autorização do ICNF + projecto de arquitectura + plantação compensatória. É possível, mas prepare-se para um processo de 6–12 meses',
          'Um sobreiro caiu depois de uma tempestade e bloqueou a passagem → pode cortar e remover como medida urgente, depois notificar o ICNF com fotografias',
          'Planeia cortar uma oliveira com ~80 anos → quase certamente será necessária autorização da Câmara Municipal. Muitas vezes é recusada; é melhor ponderar poda ou transplante',
          'Um eucalipto cresceu demasiado e há risco de incêndio → pode ser abatido sem autorização; em certos locais isso é mesmo exigido para criar faixa de gestão de combustível',
          'Uma macieira velha atrapalha a horta → não é necessária autorização (espécie não protegida)',
          'Pinheiro manso em zona protegida → será necessária autorização da CCDR/ICNF',
          'Árvore seca de qualquer espécie → pode ser removida como medida de segurança, mas no caso de sobreiro/azinheira contacte primeiro o ICNF'
        ] }
      ]
    },
    {
      id: 'contractors',
      title: 'Prestadores e custo dos trabalhos',
      content: [
        { kind: 'paragraph', text: 'O abate de árvores grandes é trabalho para profissionais. Procure arboristas/podadores locais:' },
        { kind: 'checklist', items: [
          'Árvore pequena (4–8 m): 100-300 €',
          'Média (8–15 m): 300-800 €',
          'Grande (15–25 m): 800-2 000 €',
          'Sobreiro ou oliveira antiga (exige técnica especialmente cuidadosa): 1 500-5 000 €',
          'Destoca/remoção do cepo (stump removal): +100-500 €',
          'Transporte e eliminação: 50-200 €',
          'Seguro do prestador: verifique obrigatoriamente; caso contrário, a responsabilidade por incidentes recairá sobre si',
          'Onde procurar: jardineiros.pt, FNAP, grupos locais de Facebook sobre jardins e terrenos'
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
    { label: 'Compensação: plantas (5+ árvores)', amountEURMin: 50, amountEURMax: 500, note: 'Compra e plantação' },
    { label: 'Coima por sobreiro sem autorização', amountEURMin: 5000, amountEURMax: 50000, note: 'Por cada árvore' }
  ],
  sources: [
    { title: 'ICNF — Sobreiros e Azinheiras', url: 'https://www.icnf.pt/florestas/gfr/sa', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 169/2001 — protecção do sobreiro e da azinheira', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2001-34488075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 120/86 — protecção da oliveira', url: 'https://dre.pt/dre/detalhe/decreto-lei/120-1986-220815', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF e-Balcão — pedido de corte de sobreiros', url: 'https://eservicos.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'CCDR — autorizações REN', url: 'https://www.ccdr-lvt.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
