export default {
  editorialVoice: 'hackportugal',
  id: 'fishing-license-pt',
  categoryId: 'daily_life',
  title: 'Licença de pesca: marítima DGRM e águas interiores ICNF',
  tldr: 'Em Portugal, a pesca lúdica divide-se em marítima — DGRM através do BMar — e em águas interiores — ICNF. A licença não é intercambiável: oceano, praias e barco ≠ rios, lagos e albufeiras. O formato mínimo para visitantes é a licença diária a partir de 2 €. Normalmente, a licença é necessária a partir dos 16 anos; em águas interiores, as pessoas com mais de 65 anos estão frequentemente isentas, mas as regras das zonas e as autorizações especiais continuam a aplicar-se. A venda do pescado é proibida, e existem limites, épocas, tamanhos mínimos e zonas interditas.',
  tags: ['pesca', 'dgrm', 'icnf', 'licença'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'choose-water',
      title: '1. Primeiro determine: mar ou água interior',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existem dois sistemas diferentes. A pesca marítima lúdica é regulada pela DGRM e é tratada através do Balcão Eletrónico do Mar — BMar. A pesca em águas interiores é regulada pelo ICNF.' },
        { kind: 'checklist', items: [
          'Oceano, praia, rochas, pontão, foz de rio com água salgada — normalmente licença marítima DGRM.',
          'Rio, lago, barragem, albufeira, lagoa interior — normalmente licença ICNF.',
          'Pesca a partir da costa marítima — licença de pesca lúdica apeada.',
          'Pesca a partir de barco no mar — licença embarcada.',
          'Caça submarina — licença submarina e restrições de segurança específicas.',
          'Em águas interiores podem existir zonas livres, concessionadas, reservadas: por vezes é necessária não só a licença ICNF, mas também uma autorização da entidade gestora da zona.',
          'Uma licença não cobre tudo: a marítima DGRM não dá direito a pescar em águas interiores, e a ICNF não cobre o oceano.'
        ] },
        { kind: 'warning', text: 'Se o local parecer um “rio junto ao oceano”, verifique o regime da zona. Em estuários e parques naturais, as regras podem diferir por margem, espécies de peixe, artes de pesca e épocas.' }
      ]
    },
    {
      id: 'sea-dgrm-bmar',
      title: '2. Licença marítima DGRM através do BMar 🌊',
      content: [
        { kind: 'paragraph', text: 'Para a pesca marítima lúdica em Portugal continental, use o BMar — o serviço eletrónico oficial da DGRM. A licença pode ser obtida online; para alguns serviços está disponível o pagamento por cartão/referência, e para residentes também são comuns os canais Multibanco.' },
        { kind: 'checklist', items: [
          'Escolha o tipo: apeada — a partir da costa, embarcada — a partir de barco, submarina — caça submarina.',
          'Escolha a duração: diária, mensal ou anual, se disponível para o tipo seleccionado.',
          'Prepare o passaporte ou documento de identificação; se tiver NIF, indique-o.',
          'Verifique o território de validade: a lógica nacional/regional depende do produto no BMar.',
          'Pague a taxa e guarde o PDF/recibo no telemóvel.',
          'Durante a pesca, tenha consigo o documento de identificação e a licença — o inspector precisa de uma confirmação legível, não de uma “captura de ecrã de uma conversa”.',
          'Se for pescar de barco, a licença do pescador não substitui os documentos da embarcação nem os requisitos de segurança.'
        ] },
        { kind: 'paragraph', text: 'Referência para a licença marítima em Portugal continental: a licença diária apeada começa aproximadamente nos 2 €, a embarcada — cerca de 3 €, a submarina — cerca de 5 €; as opções anuais são mais caras e dependem do tipo. Veja sempre o valor final no BMar antes de pagar.' },
        { kind: 'warning', text: 'A caça submarina não é “só máscara e espingarda”. São necessários licença submarina, bóia, cumprimento de distâncias, proibição de caça nocturna e proibição em zonas protegidas/portuárias/balneares, se tal estiver definido pelas regras do local.' }
      ]
    },
    {
      id: 'freshwater-icnf',
      title: '3. Licença de águas interiores ICNF 🐟',
      content: [
        { kind: 'paragraph', text: 'Para rios, lagos, albufeiras e outras águas interiores é necessária a licença de pesca lúdica ICNF. Para uma pessoa estrangeira, isto é normalmente tratado online através dos serviços do ICNF: escolhe a licença para não residentes ou a opção standard, introduz o documento de identificação, a duração e paga a taxa.' },
        { kind: 'checklist', items: [
          'Verifique se o local é águas interiores ICNF, e não uma zona marítima DGRM.',
          'Escolha a duração: a licença diária para visitantes começa nos 2 €; também existem opções semanais, mensais e anuais.',
          'Indique o passaporte/ID; o NIF é útil, mas nem sempre é obrigatório para não residentes.',
          'Descarregue a confirmação da licença e mantenha-a offline.',
          'Verifique se a zona é concessionada ou reservada: aí pode ser necessária uma autorização adicional.',
          'Verifique o edital/tabela do ICNF por espécie de peixe: épocas, tamanhos mínimos, limites e proibições mudam consoante as bacias.',
          'Não use artes proibidas, isco vivo ou métodos de captura se não forem permitidos para aquela água específica.'
        ] },
        { kind: 'paragraph', text: 'O ICNF publica regularmente regras sobre espécies aquícolas, épocas de pesca, dimensões mínimas e zonas de pesca. Isto não é uma formalidade: pode haver coima mesmo com a licença paga, se a época estiver fechada ou se a espécie for proibida à captura.' }
      ]
    },
    {
      id: 'age-and-documents',
      title: '4. Idade, documentos e quem pode pescar sem licença',
      content: [
        { kind: 'paragraph', text: 'Regra prática de base para 2026: a partir dos 16 anos, a licença é normalmente necessária. Para crianças com menos de 16 anos, existe frequentemente isenção, sobretudo se pescarem acompanhadas por um adulto com licença. No sistema de águas interiores do ICNF, as pessoas com mais de 65 anos estão normalmente isentas da licença em si, mas não das regras da zona, épocas e limites.' },
        { kind: 'checklist', items: [
          'Expatriado adulto: obtenha a licença — é mais barato do que uma coima e discussões no local.',
          'Criança com menos de 16 anos: verifique a condição de acompanhamento por adulto e as restrições da zona específica.',
          'Idade 65+: para águas interiores, verifique a isenção ICNF; para o mar, não confie em rumores, verifique no BMar/DGRM.',
          'Leve sempre passaporte, Cartão de Cidadão, autorização de residência ou outro documento de identificação.',
          'Guarde o PDF da licença offline: na praia ou junto à barragem, a rede é muitas vezes fraca.',
          'Se pescar com guia ou num barco turístico, pergunte antecipadamente se a licença do cliente está incluída. Muitas vezes não está.'
        ] },
        { kind: 'warning', text: 'A isenção de licença não significa liberdade para pescar onde quiser. Zonas interditas, tamanhos mínimos, limites diários, épocas fechadas e proibição de venda do pescado aplicam-se a todos.' }
      ]
    },
    {
      id: 'restrictions',
      title: '5. Principais restrições: o que é infringido com mais frequência',
      content: [
        { kind: 'paragraph', text: 'A pesca lúdica em Portugal destina-se apenas ao consumo pessoal e ao lazer. A venda, troca “por donativo” ou entrega do pescado a um restaurante como produto comercial é proibida.' },
        { kind: 'checklist', items: [
          'Não venda o pescado — a pesca recreativa não confere direito comercial.',
          'Respeite o limite diário de peso e quantidade; na pesca marítima aplica-se frequentemente um limite na ordem dos 10 kg por pescador por dia mais um exemplar de grande porte, mas verifique as regras DGRM actualizadas.',
          'Respeite os tamanhos mínimos de peixes e moluscos.',
          'Não capture uma espécie durante a sua época de defeso.',
          'Não pesque em zonas portuárias, marinas, zonas balneares, reservas naturais e áreas protegidas sem verificar as regras.',
          'Não use redes, armadilhas, electricidade, químicos e outros métodos proibidos.',
          'Para moluscos, polvo, ouriços-do-mar e algumas espécies podem existir limites e proibições próprios.',
          'Em águas interiores, verifique invasive species e native species: algumas espécies não podem ser devolvidas, outras não podem ser levadas — depende das regras do ICNF.',
          'Respeite a propriedade privada: a licença não dá direito a entrar em terreno fechado ou num pontão privado.'
        ] },
        { kind: 'warning', text: 'O algoritmo mais seguro antes de uma saída: abrir o BMar ou o ICNF, verificar o tipo de água, comprar a licença correcta e, depois, verificar os avisos/editais locais para o local e espécie de peixe específicos.' }
      ]
    }
  ],
  costs: [
    { label: 'Licença marítima DGRM apeada, 1 dia', amountEUR: 2, note: 'Referência para pesca a partir da costa; o preço final é apresentado no BMar antes do pagamento.' },
    { label: 'Licença marítima DGRM embarcada, 1 dia', amountEUR: 3, note: 'Referência para pesca a partir de barco em Portugal continental.' },
    { label: 'Licença marítima DGRM submarina, 1 dia', amountEUR: 5, note: 'Referência para caça submarina; aplicam-se restrições de segurança específicas.' },
    { label: 'Licença de águas interiores ICNF para visitante, 1 dia', amountEUR: 2, note: 'Opção online mínima para águas interiores; o preço depende da duração e da categoria.' },
    { label: 'Coima por pescar sem a licença correcta', amountEURMin: 50, amountEURMax: 500, note: 'O risco prático depende da infracção: falta de licença, zona interdita, época fechada, excesso de limite ou artes proibidas.' }
  ],
  sources: [
    { title: 'BMar — Balcão Eletrónico do Mar: licenças DGRM para pesca marítima lúdica', url: 'https://www.bmar.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ICNF — pesca lúdica em águas interiores: licenças, zonas e regras', url: 'https://www.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ICNF — informação sobre espécies, épocas de pesca e zonas de pesca', url: 'https://www.icnf.pt/pesca/pescaludica', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
