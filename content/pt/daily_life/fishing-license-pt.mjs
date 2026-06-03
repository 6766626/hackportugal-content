export default {
  editorialVoice: 'hackportugal',
  id: 'fishing-license-pt',
  categoryId: 'daily_life',
  title: 'Licença de pesca: marítima DGRM e águas interiores ICNF',
  tldr: 'Em Portugal, a pesca lúdica divide-se em marítima — DGRM através do BMar — e em águas interiores — ICNF. A licença não é intercambiável: oceano, praias e barco ≠ rios, lagos e albufeiras. O formato mínimo para visitantes é a licença diária a partir de 2 €. Regra geral, a licença é necessária a partir dos 16 anos; em águas interiores, as pessoas com mais de 65 anos estão frequentemente isentas, mas as regras das zonas e as autorizações especiais continuam a aplicar-se. A venda do pescado é proibida; existem limites, épocas, tamanhos mínimos e zonas interditas.',
  tags: ['pesca', 'dgrm', 'icnf', 'licença'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'choose-water',
      title: '1. Primeiro determine: mar ou águas interiores',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existem dois sistemas diferentes. A pesca lúdica marítima é regulada pela DGRM e tratada através do Balcão Eletrónico do Mar — BMar. A pesca em águas interiores é regulada pelo ICNF.' },
        { kind: 'checklist', items: [
          'Oceano, praia, rochas, cais, foz de rio com água salgada — normalmente licença marítima DGRM.',
          'Rio, lago, barragem, albufeira, lagoa interior — normalmente licença ICNF.',
          'Pesca a partir da costa marítima — licença de pesca lúdica apeada.',
          'Pesca a partir de barco no mar — licença embarcada.',
          'Caça submarina — licença submarina e restrições de segurança específicas.',
          'Em águas interiores podem existir zonas livres, concessionadas, reservadas: por vezes é necessária não só a licença ICNF, mas também a autorização da entidade gestora da zona.',
          'Uma licença não cobre tudo: a licença marítima DGRM não dá direito a pescar em águas interiores, e a ICNF não cobre o oceano.'
        ] },
        { kind: 'warning', text: 'Se o local parecer um “rio junto ao oceano”, verifique o regime da zona. Em estuários e parques naturais, as regras podem variar consoante as margens, espécies de peixe, artes de pesca e épocas.' }
      ]
    },
    {
      id: 'sea-dgrm-bmar',
      title: '2. Licença marítima DGRM através do BMar 🌊',
      content: [
        { kind: 'paragraph', text: 'Para a pesca lúdica marítima em Portugal continental, utilize o BMar — o serviço eletrónico oficial da DGRM. A licença pode ser emitida online; para alguns serviços está disponível pagamento por cartão/referência, e para residentes também são comuns os canais Multibanco.' },
        { kind: 'checklist', items: [
          'Escolha o tipo: apeada — a partir da costa, embarcada — a partir de barco, submarina — caça submarina.',
          'Escolha o prazo: diária, mensal ou anual, se disponível para o tipo escolhido.',
          'Prepare o passaporte ou documento de identificação; se tiver NIF, indique-o.',
          'Verifique a área de validade: a lógica nacional/regional depende do produto no BMar.',
          'Pague a taxa e guarde o PDF/recibo no telemóvel.',
          'Durante a pesca, tenha consigo o documento de identificação e a licença — o fiscal precisa de uma confirmação legível, não de uma “captura de ecrã de mensagens”.',
          'Se for pescar de barco, a licença do pescador não substitui os documentos da embarcação nem os requisitos de segurança.'
        ] },
        { kind: 'paragraph', text: 'Referência para a licença marítima em Portugal continental: a licença apeada diária começa aproximadamente a partir de 2 €, a submarina — cerca de 3 €, a embarcada — cerca de 5 €; as opções anuais são mais caras e dependem do tipo. Veja sempre o valor final no BMar antes do pagamento.' },
        { kind: 'warning', text: 'A caça submarina não é “apenas máscara e arpão”. São necessários licença submarina, boia, cumprimento das distâncias, proibição de caça nocturna e proibição em zonas protegidas/portuárias/balneares, se tal estiver estabelecido nas regras do local.' }
      ]
    },
    {
      id: 'freshwater-icnf',
      title: '3. Licença para águas interiores ICNF 🐟',
      content: [
        { kind: 'paragraph', text: 'Para rios, lagos, albufeiras e outras águas interiores, é necessária uma licença de pesca lúdica ICNF. Para um estrangeiro, isto é normalmente tratado online através dos serviços do ICNF: escolhe a licença para não residentes ou a opção padrão, introduz o documento de identificação, o prazo e paga a taxa.' },
        { kind: 'checklist', items: [
          'Verifique se o local corresponde a águas interiores ICNF, e não a uma zona marítima DGRM.',
          'Escolha o prazo: a licença diária para visitantes começa a partir de 2 €; também existem opções semanais, mensais e anuais.',
          'Indique o passaporte/ID; o NIF é útil, mas nem sempre obrigatório para não residentes.',
          'Descarregue a confirmação da licença e mantenha-a disponível offline.',
          'Verifique se a zona é concessionada ou reservada: aí pode ser exigida uma autorização adicional.',
          'Consulte o edital/tabela do ICNF por espécie de peixe: épocas, tamanhos mínimos, limites e proibições variam por bacia.',
          'Não utilize artes proibidas, isco vivo ou métodos de captura que não estejam autorizados para essa água específica.'
        ] },
        { kind: 'paragraph', text: 'O ICNF publica regularmente regras sobre espécies aquícolas, épocas de pesca, dimensões mínimas e zonas de pesca. Isto não é uma formalidade: pode haver coima mesmo com licença paga, se a época estiver encerrada ou a espécie for proibida de capturar.' }
      ]
    },
    {
      id: 'age-and-documents',
      title: '4. Idade, documentos e quem pode pescar sem licença',
      content: [
        { kind: 'paragraph', text: 'Regra prática de base para 2026: a partir dos 16 anos, a licença é normalmente necessária. Para crianças com menos de 16 anos, existe frequentemente isenção, especialmente se pescarem acompanhadas por um adulto com licença. No sistema de águas interiores ICNF, as pessoas com mais de 65 anos estão geralmente isentas da própria licença, mas não das regras da zona, épocas e limites.' },
        { kind: 'checklist', items: [
          'Expatriado adulto: obtenha a licença — é mais barato do que uma coima e discussões no local.',
          'Criança com menos de 16 anos: confirme a condição de acompanhamento por adulto e as restrições da zona específica.',
          'Idade 65+: para águas interiores, verifique a isenção ICNF; para o mar, não confie em boatos, confirme no BMar/DGRM.',
          'Leve sempre passaporte, Cartão de Cidadão, autorização de residência ou outro documento de identificação.',
          'Guarde o PDF da licença offline: na praia ou junto a uma barragem, a rede é frequentemente fraca.',
          'Se pescar com guia ou num barco turístico, pergunte antecipadamente se a licença do cliente está incluída. Muitas vezes não está.'
        ] },
        { kind: 'warning', text: 'A isenção de licença não significa liberdade para pescar em qualquer lado. Zonas interditas, tamanhos mínimos, limites diários, épocas de defeso e proibição de venda do pescado aplicam-se a todos.' }
      ]
    },
    {
      id: 'restrictions',
      title: '5. Principais restrições: o que é violado com mais frequência',
      content: [
        { kind: 'paragraph', text: 'A pesca lúdica em Portugal destina-se apenas ao consumo pessoal e lazer. É proibida a venda, a troca “por donativo” ou a entrega do pescado a um restaurante como produto comercial.' },
        { kind: 'checklist', items: [
          'Não venda o pescado — a pesca lúdica não confere direito comercial.',
          'Respeite o limite diário de peso e quantidade; para a pesca marítima aplica-se frequentemente um limite na ordem dos 10 kg por pescador por dia mais um exemplar de grande porte, mas confirme as regras DGRM actualizadas.',
          'Respeite os tamanhos mínimos de peixes e moluscos.',
          'Não capture durante a época de defeso da espécie em causa.',
          'Não pesque em zonas portuárias, marinas, zonas balneares, reservas naturais e áreas protegidas sem verificar as regras.',
          'Não utilize redes, armadilhas, electricidade, químicos e outros métodos proibidos.',
          'Para moluscos, polvo, ouriços-do-mar e algumas espécies podem existir limites e proibições específicos.',
          'Em águas interiores, verifique as espécies invasoras e as espécies autóctones: algumas espécies não podem ser devolvidas, outras não podem ser levadas — depende das regras ICNF.',
          'Respeite a propriedade privada: a licença não dá direito a entrar em terreno fechado ou num pontão privado.'
        ] },
        { kind: 'warning', text: 'O algoritmo mais seguro antes de uma deslocação: abrir o BMar ou o ICNF, verificar o tipo de água, comprar a licença correcta e depois confirmar os avisos/editais locais para o local e a espécie de peixe em concreto.' }
      ]
    }
  ],
  costs: [
    { label: 'Licença marítima DGRM apeada, 1 dia', amountEUR: 2, note: 'Referência para pesca a partir da costa; o preço final é apresentado no BMar antes do pagamento.' },
    { label: 'Licença marítima DGRM embarcada, 1 dia', amountEUR: 5, note: 'Referência para pesca a partir de barco em Portugal continental.' },
    { label: 'Licença marítima DGRM submarina, 1 dia', amountEUR: 3, note: 'Referência para caça submarina; aplicam-se restrições de segurança específicas.' },
    { label: 'Licença de águas interiores ICNF para visitante, 1 dia', amountEUR: 2, note: 'Opção online mínima para águas interiores; o preço depende do prazo e da categoria.' },
    { label: 'Coima por pescar sem a licença correcta', amountEURMin: 50, amountEURMax: 500, note: 'O risco prático depende da infracção: falta de licença, zona interdita, época encerrada, excesso de limite ou artes proibidas.' }
  ],
  sources: [
    { title: 'BMar — Balcão Eletrónico do Mar: licenças DGRM para pesca lúdica marítima', url: 'https://www.bmar.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ICNF — pesca lúdica em águas interiores: licenças, zonas e regras', url: 'https://www.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ICNF — informação sobre espécies, épocas de pesca e zonas de pesca', url: 'https://www.icnf.pt/pesca/pescaludica', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
