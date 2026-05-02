export default {
  editorialVoice: 'hackportugal',
  id: 'rcd-residuos-construcao-demolicao',
  categoryId: 'housing_buy',
  title: 'RCD: resíduos de construção e demolição — como removê-los legalmente',
  tldr: 'RCD (resíduos de construção e demolição) — azulejos, betão, tijolo, pladur, loiças sanitárias após obras. Em Portugal, não podem ser deitados nos contentores comuns nem deixados junto ao lixo: é necessário recorrer a um Ecocentro para pequenos volumes DIY ou a uma transportadora licenciada + aterro/operador RCD e e-GAR/Guia de Acompanhamento de Resíduos. Pequenos volumes num Ecocentro municipal são frequentemente gratuitos, mas os limites variam; a recolha comercial em 2026 costuma rondar 80–200 €/m³, mais eventuais taxas de aterro.',
  tags: ['rcd', 'obras', 'ecocentro', 'gar'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-rcd',
      title: 'O que conta como RCD e o que não conta',
      content: [
        { kind: 'paragraph', text: 'RCD significa resíduos de construção e demolição: resíduos provenientes de construção, remodelação, demolição e pequenas obras. No contexto doméstico, são sobretudo sacos com azulejos, cimento, reboco, tijolo, betão, pladur, restos de tubos, portas, janelas e loiças sanitárias.' },
        { kind: 'checklist', items: [
          'Azulejos, cerâmica, tijolo, betão — RCD.',
          'Reboco, cimento, areia, brita, pó de obra — RCD.',
          'Pladur e isolamento — RCD, mas podem exigir uma fração separada.',
          'Portas antigas, janelas, pavimento laminado, rodapés — muitas vezes são aceites como RCD/volumosos, dependendo do município.',
          'Tinta, solventes, colas, vedantes — não são RCD comum; são resíduos perigosos, confirme com o Ecocentro.',
          'Amianto — categoria perigosa separada; uma transportadora RCD comum não é adequada.',
          'Lixo doméstico, cartão de compras, resíduos alimentares — não são RCD, seguem para os fluxos normais de recycling/indiferenciados.'
        ] },
        { kind: 'warning', text: 'Não se podem deixar sacos de obra ao lado dos contentores comuns. Mesmo que “toda a gente faça isso”, é considerado deposição ilegal de resíduos e pode resultar numa coima da Câmara Municipal ou da polícia municipal.' }
      ]
    },
    {
      id: 'small-diy',
      title: 'Pequenas obras DIY: leve ao Ecocentro 🧱',
      content: [
        { kind: 'paragraph', text: 'Se você próprio substituiu algumas fiadas de azulejos, retirou uma sanita ou desmontou um armário — a opção mais barata costuma ser o Ecocentro municipal. Para residentes do município, a receção de pequenos volumes é frequentemente gratuita, mas as regras e os limites são definidos pela Câmara Municipal ou pela empresa intermunicipal de resíduos.' },
        { kind: 'checklist', items: [
          'Procure “Ecocentro” no site da sua Câmara Municipal ou do operador de resíduos urbanos.',
          'Verifique o limite: em alguns municípios contam sacos, noutros — litros, kg ou m³.',
          'Leve o NIF e comprovativo de morada, se o Ecocentro aceitar apenas residentes.',
          'Separe os resíduos: entulho mineral, madeira, metais, vidro, plástico, cartão, equipamentos eléctricos.',
          'Não misture RCD com tintas, óleos, solventes, amianto.',
          'Transporte em sacos resistentes ou caixas; o pó de obra deve estar fechado.',
          'Fotografe a entrega ou guarde o talão do Ecocentro, se a obra for num condomínio e precisar de comprovar a remoção.'
        ] },
        { kind: 'paragraph', text: 'Em Lisboa, a Câmara Municipal encaminha os residentes para ecocentros e canais municipais de recolha para fluxos específicos. O sentido prático: não tente combinar com o funcionário de limpeza do prédio nem deixar sacos à noite — para RCD isso não é um esquema legal.' }
      ]
    },
    {
      id: 'large-renovation',
      title: 'Obras médias e grandes: transportadora licenciada + operador RCD',
      content: [
        { kind: 'paragraph', text: 'Se houver mais resíduos do que cabe na bagageira, ou se estiver a trabalhar um empreiteiro, organize a remoção através de uma transportadora de resíduos licenciada. Esta deve levar os RCD para um operador/aterro RCD autorizado: por exemplo, sistemas regionais e operadores como Valnor, Tratolixo ou outras instalações indicadas nas licenças APA/SILOGR.' },
        { kind: 'checklist', items: [
          'Peça ao empreiteiro para incluir previamente a gestão de RCD no orçamento.',
          'Verifique quem é o produtor do resíduo: o proprietário, o contractor ou ambos por contrato.',
          'Encomende um big-bag, contentor ou carrinha com uma transportadora licenciada.',
          'Confirme o código LER/EWC dos resíduos: para entulho comum são frequentemente usados códigos de construção do grupo 17, mas o operador deve fazer a classificação.',
          'Peça a e-GAR/Guia de Acompanhamento de Resíduos antes ou no momento do transporte.',
          'Verifique o destino: aterro RCD, centro de triagem, operador licenciado, e não um “armazém de um conhecido”.',
          'Guarde a invoice, a e-GAR e o comprovativo de receção pelo menos até ao fim da obra; para obras licenciadas, isto pode ser necessário para a Câmara Municipal.'
        ] },
        { kind: 'warning', text: 'Se a transportadora propuser “mais barato sem documentos”, o risco continua a ser do produtor dos resíduos. Em caso de descarga ilegal, podem tentar identificar quem estava a fazer obras através dos sacos, etiquetas com morada, câmaras do condomínio ou queixas de vizinhos.' }
      ]
    },
    {
      id: 'egar-gar',
      title: 'GAR/e-GAR: o documento principal do transporte',
      content: [
        { kind: 'paragraph', text: 'A Guia de Acompanhamento de Resíduos é atualmente emitida, na prática, como e-GAR no sistema SILIAMB/APA. É uma guia eletrónica que liga o produtor dos resíduos, o transportador e o operador recetor. Para uma pessoa particular, normalmente é a transportadora ou o contractor que a emite, mas deve pedir uma cópia/número.' },
        { kind: 'checklist', items: [
          'Na e-GAR devem constar produtor, transportador e destinatário.',
          'Deve estar indicado o tipo de resíduos e a quantidade aproximada.',
          'Deve constar a data do transporte e a matrícula do veículo/registo do transportador.',
          'O destinatário deve confirmar a receção dos resíduos.',
          'Se o operador aceitar uma quantidade menor/outro tipo de resíduos, peça correção ou explicação.',
          'Para condominium works, entregue uma cópia à administração do condomínio, se esta exigir relatório.',
          'Para works com licenciamento/comunicação prévia, guarde os documentos juntamente com o processo da obra.'
        ] },
        { kind: 'paragraph', text: 'Para um ou dois sacos entregues pessoalmente por si no Ecocentro, normalmente não é exigida e-GAR ao residente enquanto utilizador doméstico. Mas, na remoção comercial de RCD, o documento deve fazer parte do serviço.' }
      ]
    },
    {
      id: 'prices-and-contract',
      title: 'Quanto custa e o que escrever no contrato 💶',
      content: [
        { kind: 'paragraph', text: 'O mercado varia muito consoante a cidade, o piso, o elevador, o estacionamento, o peso e o tipo de resíduos. Para um expat, o principal risco é comprar uma “obra chave na mão” em que a remoção não está incluída e depois receber uma fatura separada pelo entulho.' },
        { kind: 'checklist', items: [
          'Remoção comercial de RCD na cidade: referência de 80–200 €/m³ em 2026, se incluir sacos/carga/transporte; betão pesado pode ser cobrado mais caro.',
          'Um big-bag à porta é mais barato, mas precisa de espaço, autorização do condomínio e, por vezes, licença de ocupação da via pública.',
          'Um contentor na rua pode exigir autorização da Câmara Municipal e pagamento pela ocupação do espaço público.',
          'O aterro/operador pode cobrar por tonelada; confirme se a gate fee está incluída no preço.',
          'Subida/descida sem elevador, escada estreita, centro histórico, zona de acesso condicionado — suplemento separado.',
          'Resíduos perigosos, amianto, materiais contaminados — serviço separado e preço diferente.',
          'No orçamento escreva: “inclui remoção, transporte licenciado, destino final autorizado e emissão de e-GAR”.'
        ] },
        { kind: 'warning', text: 'Não pague toda a remoção em dinheiro sem recibo/fatura e sem e-GAR, se o volume não for “pequeno Ecocentro”. Uma remoção ilegal barata pode transformar-se numa coima cara e num problema na venda do apartamento ou num litígio com o condomínio.' }
      ]
    },
    {
      id: 'condominium-and-street',
      title: 'Condomínio, rua e vizinhos: não se esqueça das autorizações',
      content: [
        { kind: 'paragraph', text: 'Mesmo que os resíduos sejam removidos legalmente, pode infringir regras do prédio ou do município: ruído, elevador, armazenamento na entrada, ocupação da via pública. Em prédios antigos de Lisboa e do Porto, isto é uma causa frequente de conflitos.' },
        { kind: 'checklist', items: [
          'Informe a administração do condomínio sobre as datas das obras e da remoção.',
          'Confirme se é permitido usar o elevador para sacos de RCD e se é necessária proteção da cabina.',
          'Não guarde sacos em corredores comuns, nas escadas nem à entrada: é um risco de incêndio e sanitário.',
          'Se precisar de um contentor na rua, verifique a licença/ocupação de via pública na Câmara Municipal.',
          'Acorde os horários de ruído: o ruído de obras em prédios habitacionais é normalmente limitado a dias úteis e ao período diurno pelas regras municipais.',
          'Peça ao empreiteiro para limpar diariamente o pó nas common areas.',
          'Após a remoção, guarde fotografias “antes/depois” e os documentos, para encerrar reclamações de vizinhos.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Pequenos resíduos DIY no Ecocentro municipal', amountEUR: 0, note: 'Frequentemente gratuito para residentes do município; os limites e as frações aceites dependem da Câmara Municipal.' },
    { label: 'Remoção comercial de RCD por transportadora licenciada', amountEURMin: 80, amountEURMax: 200, note: 'Referência por m³ em 2026 para entulho comum; depende da cidade, peso, piso, carga e acesso.' },
    { label: 'Big-bag/contentor e colocação na rua', amountEURMin: 30, amountEURMax: 150, note: 'Pode acrescer à remoção; se ocupar a via pública, a Câmara Municipal pode exigir autorização e taxa.' }
  ],
  sources: [
    { title: 'APA — resíduos de construção e demolição e regras de gestão de resíduos', url: 'https://www.apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Lisboa — ecocentros, recolha e resíduos urbanos', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regime Geral de Gestão de Resíduos — Decreto-Lei 102-D/2020', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-d-2020-150908012', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portaria 145/2017 — Guia Eletrónica de Acompanhamento de Resíduos e-GAR', url: 'https://dre.pt/dre/detalhe/portaria/145-2017-106939482', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
