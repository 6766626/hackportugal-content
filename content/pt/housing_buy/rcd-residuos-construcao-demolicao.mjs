export default {
  editorialVoice: 'hackportugal',
  id: 'rcd-residuos-construcao-demolicao',
  categoryId: 'housing_buy',
  title: 'RCD: resíduos de construção e demolição — como remover legalmente',
  tldr: 'RCD (resíduos de construção e demolição) são azulejos, betão, tijolo, gesso cartonado e loiças sanitárias depois de obras. Em Portugal, não podem ser colocados nos contentores normais nem deixados junto ao lixo: é necessário usar um Ecocentro para pequenos volumes de bricolage ou uma transportadora licenciada + aterro/operador RCD e e-GAR/Guia de Acompanhamento de Resíduos. Pequenos volumes num Ecocentro municipal são muitas vezes gratuitos, mas os limites variam; a remoção comercial em 2026 costuma ficar entre 80–200 € por m³, além de eventuais taxas do aterro.',
  tags: ['rcd', 'obras', 'ecocentro', 'gar'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-rcd',
      title: 'O que é considerado RCD e o que não é',
      content: [
        { kind: 'paragraph', text: 'RCD significa resíduos de construção e demolição: resíduos de construção, remodelação, demolição e pequenas obras. No contexto doméstico, são sobretudo sacos com azulejos, cimento, reboco, tijolo, betão, gesso cartonado, restos de tubos, portas, janelas e loiça sanitária.' },
        { kind: 'checklist', items: [
          'Ladrilhos, azulejos, cerâmica, tijolo, betão — são RCD.',
          'Reboco, cimento, areia, brita, pó de obra — são RCD.',
          'Gesso cartonado e isolamento — são RCD, mas podem exigir uma fração separada.',
          'Portas antigas, janelas, pavimento laminado, rodapés — são frequentemente aceites como RCD/volumosos, dependendo do município.',
          'Tinta, solventes, colas, vedantes — não são RCD comum; são resíduos perigosos, confirme no Ecocentro.',
          'Amianto — é uma categoria perigosa separada; uma transportadora RCD comum não serve.',
          'Lixo doméstico, cartão de compras, resíduos alimentares — não são RCD, seguem para os fluxos normais de reciclagem/indiferenciados.'
        ] },
        { kind: 'warning', text: 'Não se podem deixar sacos de obra junto aos contentores normais. Mesmo que “toda a gente faça assim”, isso é considerado deposição ilegal de resíduos e pode terminar numa coima da Câmara Municipal ou da polícia municipal.' }
      ]
    },
    {
      id: 'small-diy',
      title: 'Pequenas obras de bricolage: leve ao Ecocentro 🧱',
      content: [
        { kind: 'paragraph', text: 'Se substituiu algumas fiadas de azulejos, retirou uma sanita ou desmontou um armário, a opção mais barata costuma ser o Ecocentro municipal. Para residentes do município, a receção de pequenos volumes é muitas vezes gratuita, mas as regras e os limites são definidos pela Câmara Municipal ou pela empresa intermunicipal de resíduos.' },
        { kind: 'checklist', items: [
          'Procure “Ecocentro” no site da sua Câmara Municipal ou do operador de resíduos urbanos.',
          'Verifique o limite: em alguns municípios contam sacos, noutros litros, kg ou m³.',
          'Leve o NIF e um comprovativo de morada, se o Ecocentro aceitar apenas residentes.',
          'Separe os resíduos: entulho mineral, madeira, metais, vidro, plástico, cartão, equipamentos eléctricos.',
          'Não misture RCD com tintas, óleos, solventes, amianto.',
          'Transporte em sacos resistentes ou caixas; o pó de obra deve ir fechado.',
          'Fotografe a entrega ou guarde o talão do Ecocentro, se a obra for num condomínio e precisar de provar a remoção.'
        ] },
        { kind: 'paragraph', text: 'Em Lisboa, a Câmara Municipal orienta os residentes para ecocentros e canais municipais de recolha para fluxos específicos. Em termos práticos: não tente combinar com o funcionário da limpeza do prédio nem deixar os sacos à noite — para RCD, isso não é um esquema legal.' }
      ]
    },
    {
      id: 'large-renovation',
      title: 'Obras médias e grandes: transportadora licenciada + operador RCD',
      content: [
        { kind: 'paragraph', text: 'Se houver mais resíduos do que cabe na mala de um carro, ou se estiver a trabalhar um empreiteiro, trate da remoção através de uma transportadora de resíduos licenciada. Esta deve levar os RCD para um operador/aterro RCD autorizado: por exemplo, sistemas regionais e operadores como a Valnor, a Tratolixo ou outras instalações indicadas nas licenças APA/SILOGR.' },
        { kind: 'checklist', items: [
          'Peça ao empreiteiro que inclua antecipadamente a gestão de RCD no orçamento.',
          'Confirme quem é o produtor do resíduo: o proprietário, o empreiteiro ou ambos, conforme o contrato.',
          'Encomende um big-bag, contentor ou carrinha com uma transportadora licenciada.',
          'Confirme o código LER/EWC dos resíduos: para entulho comum usam-se frequentemente códigos de construção do grupo 17, mas o operador deve fazer a classificação.',
          'Peça a e-GAR/Guia de Acompanhamento de Resíduos antes ou no momento do transporte.',
          'Verifique o destino: aterro RCD, centro de triagem, operador licenciado, e não um “armazém de um conhecido”.',
          'Guarde a fatura, a e-GAR e o comprovativo de receção pelo menos até ao fim da obra; para obras licenciadas, isto pode ser necessário para a Câmara Municipal.'
        ] },
        { kind: 'warning', text: 'Se a transportadora propuser “mais barato sem documentos”, o risco continua do lado do produtor dos resíduos. Em caso de despejo ilegal, podem tentar identificar quem fez a obra através dos sacos, etiquetas com morada, câmaras do condomínio ou queixas dos vizinhos.' }
      ]
    },
    {
      id: 'egar-gar',
      title: 'GAR/e-GAR: o documento principal do transporte',
      content: [
        { kind: 'paragraph', text: 'A Guia de Acompanhamento de Resíduos é atualmente emitida, na prática, como e-GAR no sistema SILIAMB/APA. É uma guia eletrónica que liga o produtor dos resíduos, a transportadora e o operador recetor. Para uma pessoa particular, normalmente é a transportadora ou o empreiteiro que a emite, mas deve pedir uma cópia/número.' },
        { kind: 'checklist', items: [
          'Na e-GAR devem constar o produtor, o transportador e o destinatário.',
          'Deve estar indicado o tipo de resíduos e a quantidade aproximada.',
          'Deve constar a data do transporte e a identificação do veículo/transportadora.',
          'O destinatário deve confirmar a receção dos resíduos.',
          'Se o operador aceitou uma quantidade inferior ou outro tipo de resíduos, peça correção ou explicação.',
          'Para obras em condomínio, entregue uma cópia à administração do condomínio, se esta exigir relatório.',
          'Para obras com licenciamento/comunicação prévia, guarde os documentos juntamente com o processo da obra.'
        ] },
        { kind: 'paragraph', text: 'Para um ou dois sacos entregues por si pessoalmente no Ecocentro, a e-GAR normalmente não é exigida ao residente enquanto utilizador doméstico. Mas, no caso de remoção comercial de RCD, o documento deve fazer parte do serviço.' }
      ]
    },
    {
      id: 'prices-and-contract',
      title: 'Quanto custa e o que escrever no contrato 💶',
      content: [
        { kind: 'paragraph', text: 'O mercado varia muito conforme a cidade, o andar, o elevador, o estacionamento, o peso e o tipo de resíduos. Para um expatriado, o principal risco é comprar uma “obra chave na mão” em que a remoção não está incluída e depois receber uma conta separada pelo entulho.' },
        { kind: 'checklist', items: [
          'Remoção comercial de RCD na cidade: referência de 80–200 € por m³ em 2026, se incluir sacos/carga/transporte; betão pesado pode ser cobrado mais caro.',
          'Um big-bag à porta é mais barato, mas exige espaço, autorização do condomínio e, por vezes, licença de ocupação da via pública.',
          'Um contentor na rua pode exigir autorização da Câmara Municipal e pagamento pela ocupação do espaço público.',
          'O aterro/operador pode cobrar por tonelada; confirme se a gate fee está incluída no preço.',
          'Subida/descida sem elevador, escada estreita, centro histórico, zona de acesso limitado — são suplementos à parte.',
          'Resíduos perigosos, amianto, materiais contaminados — são um serviço separado e têm outro preço.',
          'No orçamento, escreva: “inclui remoção, transporte licenciado, destino final autorizado e emissão de e-GAR”.'
        ] },
        { kind: 'warning', text: 'Não pague toda a remoção em dinheiro sem recibo/fatura e sem e-GAR, se o volume não for “pequeno Ecocentro”. Uma remoção ilegal barata pode tornar-se uma coima cara e um problema na venda do apartamento ou numa disputa com o condomínio.' }
      ]
    },
    {
      id: 'condominium-and-street',
      title: 'Condomínio, rua e vizinhos: não se esqueça das autorizações',
      content: [
        { kind: 'paragraph', text: 'Mesmo que os resíduos sejam removidos legalmente, é possível infringir regras do prédio ou do município: ruído, elevador, armazenamento no átrio, ocupação da via pública. Em prédios antigos de Lisboa e do Porto, isto é uma causa frequente de conflitos.' },
        { kind: 'checklist', items: [
          'Comunique à administração do condomínio as datas das obras e da remoção.',
          'Confirme se é permitido usar o elevador para sacos de RCD e se é necessária proteção da cabina.',
          'Não guarde sacos nos corredores comuns, nas escadas nem à entrada: é um risco de incêndio e sanitário.',
          'Se precisar de um contentor na rua, confirme a licença/ocupação de via pública na Câmara Municipal.',
          'Combine os horários de ruído: o ruído de obras em edifícios habitacionais costuma estar limitado a dias úteis e ao período diurno pelas regras municipais.',
          'Peça ao empreiteiro que limpe diariamente o pó nas áreas comuns.',
          'Depois da remoção, guarde fotografias “antes/depois” e os documentos, para encerrar reclamações dos vizinhos.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Pequenos resíduos de bricolage no Ecocentro municipal', amountEUR: 0, note: 'Frequentemente gratuito para residentes do município; os limites e as frações aceites dependem da Câmara Municipal.' },
    { label: 'Remoção comercial de RCD por transportadora licenciada', amountEURMin: 80, amountEURMax: 200, note: 'Referência por m³ em 2026 para entulho comum; depende da cidade, peso, andar, carga e acesso.' },
    { label: 'Big-bag/contentor e colocação na rua', amountEURMin: 30, amountEURMax: 150, note: 'Pode acrescer à remoção; se ocupar a via pública, a Câmara Municipal pode exigir autorização e taxa.' }
  ],
  sources: [
    { title: 'APA — resíduos de construção e demolição e regras de gestão de resíduos', url: 'https://www.apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Lisboa — ecocentros, recolha e resíduos urbanos', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regime Geral de Gestão de Resíduos — Decreto-Lei 102-D/2020', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-d-2020-150908012', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portaria 145/2017 — Guia Eletrónica de Acompanhamento de Resíduos e-GAR', url: 'https://dre.pt/dre/detalhe/portaria/145-2017-106939482', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
