export default {
  editorialVoice: 'hackportugal',
  id: 'manutencao-carro-revisao',
  categoryId: 'auto_ownership',
  title: 'Manutenção / revisão do automóvel: concessionário, Norauto ou oficina Bosch',
  tldr: 'A revisão em Portugal é a manutenção programada por quilometragem ou por prazo, normalmente a cada 12 meses ou 10 000–30 000 km conforme o manual do fabricante. Em 2026, a escolha é esta: o concessionário é mais caro, mas melhor para garantia, recall e eletrónica complexa; Norauto/Feu Vert/Midas são mais rápidos e baratos para óleo, pneus, travões e bateria; Bosch Car Service são oficinas independentes certificadas para diagnóstico e reparação. Exija sempre orçamento, fatura com NIF e registo no livro de revisões.',
  tags: ['revisão', 'oficina', 'automóvel', 'garantia'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-revisao',
      title: 'O que é uma revisão e o que ela não é',
      content: [
        { kind: 'paragraph', text: 'Manutenção ou revisão é a assistência programada do automóvel: óleo, filtros, verificação dos travões, suspensão, pneus, fluidos, bateria e eletrónica. O intervalo é definido pelo fabricante: em muitos carros é 1 ano ou 10 000–30 000 km, consoante o que ocorrer primeiro.' },
        { kind: 'paragraph', text: 'A revisão não substitui a inspeção periódica obrigatória (IPO). A IPO é a inspeção técnica oficial segundo as regras do IMT; a revisão é um serviço comercial numa oficina. O carro pode fazer a revisão e, ainda assim, reprovar na IPO por causa dos faróis, pneus, emissões ou folgas.' },
        { kind: 'checklist', items: [
          'Consulte o manual do fabricante: nele estão indicados os intervalos, as especificações do óleo e a lista de trabalhos.',
          'Para carros em garantia, guarde todas as faturas e comprovativos de que foram usadas peças e fluidos adequados.',
          'Para diesel com DPF, não ignore o óleo com a especificação correta: o óleo errado pode acelerar problemas no filtro de partículas.',
          'Para híbridos e EV, confirme se a oficina sabe trabalhar com alta tensão; nem todas as redes fazem manutenção da bateria de tração.',
          'Se houver um aviso motor aceso no painel, é primeiro necessário diagnóstico, não “apenas troca de óleo”.',
          'Se o carro for importado, verifique o histórico de manutenção pelo VIN no concessionário e a existência de campanhas/recalls.'
        ] }
      ]
    },
    {
      id: 'dealer',
      title: 'Concessionário / oficina autorizada: caro, mas seguro para a garantia',
      content: [
        { kind: 'paragraph', text: 'Concessionário é o representante oficial ou autorizada marca: BMW, Mercedes, Toyota, Renault, Peugeot, etc. É a opção mais cara, mas é importante para carros novos, casos de garantia, recall, atualização de software, eletrónica complexa e histórico de manutenção da marca.' },
        { kind: 'checklist', items: [
          'Melhor escolha para um automóvel com menos de 3 anos ou com extensão de garantia.',
          'Normalmente usam peças originais ou peças aprovadas pela marca.',
          'Têm acesso a campanhas técnicas, recall e boletins de fábrica.',
          'A marcação pode ter 1–4 semanas de espera, sobretudo em Lisboa, Porto e Algarve.',
          'O custo da revisão é muitas vezes superior ao das oficinas em rede: referência de 180–500 € para uma manutenção normal; marcas premium e serviços maiores ficam acima disso.',
          'Após os trabalhos, peça fatura com NIF, discriminação de peças/mão de obra e registo no livro de revisões digital ou no plano de manutenção em papel.',
          'Se encontrarem uma reparação adicional, exija orçamento antes do início dos trabalhos.'
        ] },
        { kind: 'warning', text: 'A garantia legal de um bem de consumo novo em Portugal é regulada pelo DL 84/2021 e, normalmente, é de 3 anos, mas o fabricante pode contestar uma reparação em garantia se a manutenção tiver sido feita sem cumprir as especificações. Por isso, num carro em garantia, não poupe na documentação: fatura, especificação do óleo, referências das peças, data e quilometragem são obrigatórias.' }
      ]
    },
    {
      id: 'chains',
      title: 'Norauto, Feu Vert, Midas: rápido para trabalhos standard',
      content: [
        { kind: 'paragraph', text: 'As oficinas em rede são convenientes para um expatriado: sites com preços, marcação online, pacotes de revisão claros e muitos pontos junto a centros comerciais. É uma boa opção para óleo, filtros, pneus, travões, bateria, escovas, ar condicionado e check pré-IPO.' },
        { kind: 'checklist', items: [
          'A Norauto é forte em pneus, baterias, revisão, pequenas reparações e acessórios.',
          'A Feu Vert tem um formato semelhante: revisão, pneus, travões, ar condicionado e diagnóstico.',
          'A Midas é uma rede de oficinas rápidas para manutenção, travões, escape, amortecedores e diagnóstico.',
          'Normalmente são mais baratas do que o concessionário: uma revisão básica custa frequentemente 80–250 €, mas o valor final depende do óleo, dos filtros e do modelo.',
          'Adequado para modelos europeus e japoneses populares sem avaria complexa.',
          'Confirme se o preço inclui filtro de habitáculo, filtro de combustível, reposição do service indicator e IVA 23% no mainland.',
          'Para modelos raros, eletrónica complexa, caixas automáticas, calibração ADAS e EV, é melhor perguntar previamente se existe equipamento.'
        ] },
        { kind: 'warning', text: 'O pacote “revisão desde 79 €” quase sempre significa preço base. Óleo totalmente sintético com a especificação correta, grande volume de óleo, filtro de combustível, velas, fluido dos travões e diagnóstico são pagos à parte.' }
      ]
    },
    {
      id: 'bosch-independent',
      title: 'Bosch Car Service e oficinas independentes',
      content: [
        { kind: 'paragraph', text: 'Bosch Car Service é uma rede de oficinas independentes certificadas. É um compromisso entre o concessionário e as redes fast-fit: normalmente mais barato do que o concessionário, mas mais forte em diagnóstico, eletrónica, sistemas diesel, ABS/ESP, sensores e reparações que não se limitam a “óleo + pneus”.' },
        { kind: 'checklist', items: [
          'Boa escolha para um carro fora da garantia, quando é necessário diagnóstico e não apenas manutenção.',
          'Muitas vezes sabem trabalhar com multimarcas e têm equipamento profissional de diagnóstico.',
          'O preço de uma revisão típica é frequentemente 120–350 €; diagnóstico complexo e reparação são cobrados à parte.',
          'A qualidade depende da oficina concreta: a rede dá padrões, mas a oficina continua a ser local.',
          'Verifique Google reviews, recomendações do ACP, prazo de espera e disponibilidade para emitir orçamento escrito.',
          'Peça a devolução das peças antigas se forem substituídos componentes caros: alternador, compressor A/C, sensores, injetores.',
          'Para caixa automática, corrente de distribuição, embraiagem, turbo e DPF, confirme a experiência especificamente com o seu modelo.'
        ] },
        { kind: 'paragraph', text: 'As oficinas independentes de bairro podem ser ainda mais baratas, mas o risco é maior: menos processos formais, nem sempre emitem fatura detalhada e, por vezes, montam peças “marca branca” sem explicação. Isto pode ser aceitável para um carro antigo, mas não para garantia ou reparação cara.' }
      ]
    },
    {
      id: 'booking-and-documents',
      title: 'Como marcar e não pagar a mais 🧾',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, é prática normal pedir orçamento antes da reparação. Para a revisão, indique matrícula, VIN, quilometragem, ano, motor e foto do último service plan. Peça preço com IVA e separação entre peças/mão de obra.' },
        { kind: 'checklist', items: [
          'Diga: “Quero orçamento para revisão anual conforme plano do fabricante, com IVA incluído.”',
          'Confirme o óleo: especificação, viscosidade, marca e volume em litros.',
          'Peça a lista de filtros: óleo, ar, habitáculo, combustível.',
          'Pergunte se estão incluídos diagnóstico eletrónico e reset do indicador de manutenção.',
          'Não aceite trabalhos adicionais por telefone sem preço: peça foto/vídeo e orçamento.',
          'Depois da reparação, verifique a fatura: NIF, matrícula, quilometragem, referências das peças, mão de obra, IVA.',
          'Guarde a fatura em PDF: será útil na venda, em garantia e em caso de litígio com a oficina.',
          'Se a reparação for cara, compare no mínimo 2 propostas: concessionário + Bosch/independente ou rede + Bosch.'
        ] },
        { kind: 'warning', text: 'Não deixe o carro com a formulação “faça o que for preciso”. Isto abre caminho a uma conta de centenas de euros sem o seu controlo. Limite o orçamento por escrito: “Não executar trabalhos adicionais sem autorização por escrito”.' }
      ]
    },
    {
      id: 'which-one-to-choose',
      title: 'Escolha rápida conforme a situação',
      content: [
        { kind: 'checklist', items: [
          'Carro novo em garantia: concessionário ou oficina que documente o cumprimento do plano do fabricante.',
          'Recall, software update, erro ADAS, chaves, multimédia: concessionário.',
          'Óleo, filtros, pneus, bateria, travões sem diagnóstico complexo: Norauto / Feu Vert / Midas.',
          'Check antes da IPO: rede ou Bosch, se for necessário um pré-inspeção rápido.',
          'Check antes da compra de um carro usado: Bosch, inspeção ACP ou oficina independente com diagnóstico.',
          'Problemas com diesel, DPF, injetores, sensores, ABS/ESP: Bosch Car Service ou oficina especializada.',
          'Carro antigo e económico: uma oficina de bairro independente pode compensar, se houver recomendações e fatura.',
          'Premium, híbrido, EV, caixa automática: não escolha apenas pelo preço; verifique equipamento e experiência.'
        ] },
        { kind: 'paragraph', text: 'Estratégia prática para 2026: enquanto a garantia estiver ativa, mantenha o histórico no concessionário ou documente muito cuidadosamente a manutenção independente. Depois da garantia, faça a revisão na Bosch/boa oficina independente, e pneus, bateria e trabalhos simples podem ser feitos na Norauto/Feu Vert/Midas.' }
      ]
    }
  ],
  costs: [
    { label: 'Revisão básica em oficina em rede', amountEURMin: 80, amountEURMax: 250, note: 'Referência para óleo e filtros básicos; depende do motor, da especificação do óleo e dos trabalhos incluídos.' },
    { label: 'Revisão na Bosch Car Service / boa oficina independente', amountEURMin: 120, amountEURMax: 350, note: 'Média de mercado para manutenção normal; diagnóstico e reparação são pagos à parte.' },
    { label: 'Revisão no concessionário', amountEURMin: 180, amountEURMax: 500, note: 'Manutenção programada normal; marcas premium, grandes serviços intervalares, velas, fluido dos travões e caixa automática podem custar substancialmente mais.' },
    { label: 'Diagnóstico eletrónico', amountEURMin: 30, amountEURMax: 90, note: 'Muitas vezes gratuito apenas se a reparação for feita no mesmo local; confirme previamente.' },
    { label: 'Troca de pneus, mão de obra para 4 rodas', amountEURMin: 40, amountEURMax: 90, note: 'Sem o custo dos pneus; equilibragem e válvulas podem ser cobradas à parte.' }
  ],
  sources: [
    { title: 'IMT — inspeções, veículos e informação oficial sobre transporte rodoviário', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACP — manutenção automóvel, inspeção e recomendações práticas para condutores', url: 'https://www.acp.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 84/2021 — direitos do consumidor na compra e garantia de bens', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/84-2021-172938301', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Bosch Car Service Portugal — rede de oficinas multimarcas', url: 'https://www.boschcarservice.com/pt/pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
