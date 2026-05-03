export default {
  editorialVoice: 'hackportugal',
  id: 'corte-arvores-licenca',
  categoryId: 'housing_buy',
  title: 'Abate de árvores no seu terreno — o que é permitido e onde há coima de 5 000 €+',
  tldr: 'Nem toda a árvore no seu terreno pode ser simplesmente cortada. Sobreiro e azinheira estão protegidos a nível nacional (Decreto-Lei 169/2001) — coima de 5 000-50 000 € por cada árvore sem autorização do ICNF (Instituto da Conservação da Natureza e das Florestas). Oliveira anterior a 1951 também está protegida (DL 120/86). Quaisquer trabalhos em zonas REN/RAN (reservas ecológica/agrícola nacionais) ou em parques naturais exigem autorizações específicas. Em zona urbana quase sempre é necessária autorização da Câmara Municipal. Submissão — online via e-Balcão do ICNF para sobreiro/azinheira ou através da Junta de Freguesia. Prazo de decisão habitual: 30–90 dias.',
  tags: ['árvores', 'abate', 'sobreiro', 'azinheira', 'icnf', 'câmara'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'protected-species',
      title: 'Espécies de árvores protegidas — o mais importante',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existem espécies protegidas a nível nacional. O abate ilegal mesmo de uma única árvore implica responsabilidade administrativa séria e, em casos graves, processo criminal.' },
        { kind: 'checklist', items: [
          '🛑 SOBREIRO (Quercus suber) — TODAS as árvores estão protegidas. Coima de 5 000-50 000 € por árvore',
          '🛑 AZINHEIRA (Quercus rotundifolia/ilex) — TODAS as árvores estão protegidas',
          '🛑 OLIVEIRA com mais de ~70 anos (referência: diâmetro do tronco > 60 cm) — protegida pelo DL 120/86',
          '🛑 CARVALHO (Quercus robur, faginea) — em alguns locais protegida adicionalmente em parques naturais',
          '🛑 CASTANHEIRO — protegida em zonas IGP (Trás-os-Montes)',
          '🛑 PINHEIRO MANSO — protegido na RNAP',
          '✅ Restantes frutíferas (macieira, limoeiro, laranjeira, pessegueiro) — geralmente pode abater no seu terreno sem licença',
          '✅ EUCALIPTO e acácias — invasoras; a remoção é frequentemente incentivada'
        ] },
        { kind: 'warning', text: 'Sobreiro e azinheira são símbolos do país e fonte de cortiça/bolotas para a suinicultura. A lei é rígida, as coimas são reais — todos os anos há processos mesmo por casos isolados. Se vir a cortiça característica com fendas profundas e copa larga — é quase de certeza sobreiro. Não corte sem autorização.' }
      ]
    },
    {
      id: 'how-identify',
      title: 'Como identificar sobreiro/azinheira/oliveira',
      content: [
        { kind: 'paragraph', text: 'Antes de quaisquer trabalhos, identifique com precisão o que cresce no terreno. O mais fiável é chamar um engenheiro florestal ou um especialista do ICNF para vistoria (normalmente 50-150 €).' },
        { kind: 'checklist', items: [
          'SOBREIRO: casca de cortiça espessa com fendas longitudinais, copa ampla, folhas elípticas serradas; bolotas em cúpulas',
          'AZINHEIRA: lembra visualmente o azevinho — folhas pequenas verde‑escuras, com espinhos nos rebentos jovens; casca cinzenta',
          'OLIVEIRA: folhas estreitas prateadas, facilmente reconhecível; se a árvore tiver claramente mais de 70 anos — é considerada protegida, confirme com perito',
          'CARVALHO: lâmina foliar “clássica” de carvalho, casca a clarear, amarelecimento outonal',
          'PINHEIRO MANSO: copa larga em “guarda‑sol”, agulhas longas',
          'EUCALIPTO: tronco liso com casca a descamar, folhas aromáticas — não protegido, pode ser abatido'
        ] },
        { kind: 'paragraph', text: 'As aplicações iNaturalist ou Plant.id ajudam por fotografia. Não é 100% preciso, mas é um ponto de partida prático.' }
      ]
    },
    {
      id: 'when-license-needed',
      title: 'Quando é necessária licença — casos principais',
      content: [
        { kind: 'checklist', items: [
          '🛑 Sempre para sobreiro/azinheira e para oliveira protegida: é necessária autorização do ICNF, mesmo para uma única árvore',
          '🛑 Em áreas protegidas (PN, RN, ZPE, ZEC): é necessária autorização para quaisquer espécies',
          '🛑 Na REN (Reserva Ecológica Nacional) e na RAN (Reserva Agrícola Nacional): é necessária autorização da CCDR (Comissão de Coordenação e Desenvolvimento Regional)',
          '🛑 Em zona urbana (zona urbana no PDM — Plano Diretor Municipal): na maioria dos municípios é necessária autorização da Câmara Municipal',
          '🛑 Em terreno do Estado/junto a estradas: apenas com autorização da Câmara Municipal ou Infraestruturas de Portugal (agência rodoviária)',
          '✅ Em zona rural, no seu terreno, espécies não protegidas: em regra não é necessária autorização',
          '✅ Árvore em situação de emergência (risco de queda sobre casa ou via): pode remover de imediato, mas deve notificar posteriormente a Câmara Municipal/ICNF com fotos e breve justificação',
          'Verifique o PDM do seu município: pode estabelecer proteção adicional de árvores e alinhamentos'
        ] }
      ]
    },
    {
      id: 'sobreiro-azinheira-process',
      title: 'Autorização para sobreiro/azinheira — como requerer',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Documentos',
            content: [
              { kind: 'checklist', items: [
                'Caderneta predial (das Finanças — autoridade tributária)',
                'Certidão de teor (da Conservatória do Registo Predial — registo predial)',
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
              { kind: 'paragraph', text: 'icnf.pt → e-Balcão → Pedido de Corte ou Arranque de Sobreiros e Azinheiras. Acesso com Chave Móvel Digital (CMD — assinatura digital móvel).' },
              { kind: 'paragraph', text: 'Taxas: aproximadamente 50-200 € pela submissão + se necessário deslocação de técnico ao local 50-150 €.' }
            ]
          },
          {
            id: 's3',
            title: 'Vistoria técnica',
            content: [
              { kind: 'paragraph', text: 'O ICNF pode enviar um técnico para confirmar o estado. Para árvores saudáveis haverá quase sempre indeferimento. São aceites fundamentos: árvore morta/em declínio, risco estrutural, ou projeto de compensação (plantação obrigatória de 5+ novas árvores por cada abatida).' }
            ]
          },
          {
            id: 's4',
            title: 'Decisão',
            content: [
              { kind: 'paragraph', text: 'Prazo de decisão 30–90 dias. A autorização é frequentemente condicionada: com obrigação de compensação (normalmente 5 novas árvores por cada abatida). Validade — 1 ano: os trabalhos devem ser executados dentro desse prazo.' }
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
          'Sobreiro/azinheira sem autorização: 5 000-50 000 € por cada árvore (particulares)',
          'Sobreiro/azinheira sem autorização (pessoas coletivas): até 250 000 € por árvore',
          'Oliveira de idade avançada sem autorização: 1 000-10 000 €',
          'Em parque natural sem autorização: 5 000-50 000 € + obrigação de reposição das árvores',
          'Na REN/RAN sem autorização: 1 500-50 000 €',
          'Em zona urbana sem autorização da Câmara Municipal: 1 000-25 000 € (segundo as regras do município em causa)',
          'Responsabilidade criminal é possível em caso de infrações sistemáticas ou dano ambiental significativo',
          'Compensação: plantação de 5-10 novas árvores por cada árvore abatida'
        ] },
        { kind: 'warning', text: 'A GNR (Guarda Nacional Republicana), unidade SEPNA (patrulha ambiental), fiscaliza zonas rurais com drones e imagens de satélite. A verificação a posteriori é possível mesmo anos depois. Os vizinhos reportam frequentemente abates ilegais. Não arrisque.' }
      ]
    },
    {
      id: 'practical-cases',
      title: 'Situações frequentes',
      content: [
        { kind: 'checklist', items: [
          'Comprou uma quinta, no terreno há um sobreiro — quer remover para construir casa → precisará de autorização do ICNF + projeto de arquitetura + plantação compensatória. É viável, mas conte com 6–12 meses de processo',
          'Um sobreiro caiu após temporal e bloqueou a passagem → pode cortar e remover como medida urgente, depois notifique o ICNF com fotos',
          'Pretende abater uma oliveira com ~80 anos → quase de certeza exigirá autorização da Câmara Municipal. Há recusas frequentes; considere antes poda ou transplante',
          'Eucalipto cresceu demasiado, risco de incêndio → pode abater sem licença; nalguns locais é até obrigatório para criar faixa de gestão de combustível',
          'Macieira antiga atrapalha a horta → não é necessária licença (espécie não protegida)',
          'Pinheiro manso em área protegida → será necessária autorização da CCDR/ICNF',
          'Árvore seca de qualquer espécie → pode remover como medida de segurança, mas para sobreiro/azinheira contacte primeiro o ICNF'
        ] }
      ]
    },
    {
      id: 'contractors',
      title: 'Empreiteiros e custos dos trabalhos',
      content: [
        { kind: 'paragraph', text: 'Abater árvores de grande porte é trabalho para profissionais. Procure arboristas/podadores locais:' },
        { kind: 'checklist', items: [
          'Árvore pequena (4–8 m): 100-300 €',
          'Média (8–15 m): 300-800 €',
          'Grande (15–25 m): 800-2 000 €',
          'Sobreiro ou oliveira antiga (exige técnica especialmente cuidadosa): 1 500-5 000 €',
          'Arranque de cepo (stump removal): +100-500 €',
          'Remoção e destino final: 50-200 €',
          'Seguro do empreiteiro: verifique obrigatoriamente; caso contrário, a responsabilidade por incidentes recai sobre si',
          'Onde procurar: jardineiros.pt, FNAP, grupos locais de Facebook de jardinagem e terrenos'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Autorização do ICNF (sobreiro/azinheira)', amountEURMin: 50, amountEURMax: 200 },
    { label: 'Vistoria técnica do ICNF', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Autorização da Câmara Municipal (zona urbana)', amountEURMin: 30, amountEURMax: 200 },
    { label: 'Autorização da CCDR (REN/RAN)', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Identificação da espécie por especialista', amountEURMin: 50, amountEURMax: 200, note: 'Se for necessário confirmar espécie/idade' },
    { label: 'Abate de árvore grande', amountEURMin: 800, amountEURMax: 2000 },
    { label: 'Abate de sobreiro/oliveira de idade avançada', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Compensação: plantação de árvores (5+)', amountEURMin: 50, amountEURMax: 500, note: 'Compra e plantação' },
    { label: 'Coima por sobreiro sem autorização', amountEURMin: 5000, amountEURMax: 50000, note: 'Por cada árvore' }
  ],
  sources: [
    { title: 'ICNF — Sobreiros e Azinheiras', url: 'https://www.icnf.pt/florestas/gfr/sa', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 169/2001 — proteção do sobreiro e da azinheira', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2001-34488075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 120/86 — proteção da oliveira', url: 'https://dre.pt/dre/detalhe/decreto-lei/120-1986-220815', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF e-Balcão — pedido de corte de sobreiros', url: 'https://eservicos.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'CCDR — autorizações REN', url: 'https://www.ccdr-lvt.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
