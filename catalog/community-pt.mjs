// Recursos da comunidade externa para utilizadores de língua portuguesa (PT-PT e BR).
// IMPORTANTE: Só @portugalpages está marcado isVerified=true (canal editorial do HackPortugal — em russo).
// Todos os outros recursos são de terceiros e não passam por verificação editorial.

export default {
  disclaimer: 'Abaixo estão canais e grupos comunitários externos. Apenas o «Spravochnaya Portugalii» (@portugalpages) é verificado pela equipa editorial do HackPortugal — os restantes recursos são de terceiros e não são verificados editorialmente. Confirme sempre a informação prática nas fontes oficiais citadas nos guias da aplicação.',
  telegramChannels: [
    {
      id: 'tg-brasileiros-portugal',
      rank: 1,
      name: 'Brasileiros em Portugal',
      handle: '@brasileirosemportugal',
      url: 'https://t.me/brasileirosemportugal',
      description: 'Maior canal de brasileiros em Portugal — burocracia AIMA, Estatuto de Igualdade, vida quotidiana, dúvidas práticas.',
      isVerified: false,
      topics: ['brasileiros', 'aima', 'cplp'],
      languages: ['pt-BR']
    },
    {
      id: 'tg-aima-cidadania',
      rank: 2,
      name: 'AIMA / Cidadania Portuguesa',
      handle: '@aimacidadania',
      url: 'https://t.me/aimacidadania',
      description: 'Comunidade focada em pedidos AIMA, autorização de residência, processos de nacionalidade. Discussão de prazos e casos reais.',
      isVerified: false,
      topics: ['aima', 'nacionalidade', 'residência'],
      languages: ['pt-PT', 'pt-BR']
    },
    {
      id: 'tg-emprego-portugal',
      rank: 3,
      name: 'Emprego em Portugal',
      handle: '@empregoportugal',
      url: 'https://t.me/empregoportugal',
      description: 'Vagas de emprego e oportunidades para falantes de português.',
      isVerified: false,
      topics: ['trabalho', 'vagas'],
      languages: ['pt-PT', 'pt-BR']
    },
    {
      id: 'tg-housing-portugal',
      rank: 4,
      name: 'Arrendamento Portugal',
      handle: '@arrendamentoportugal',
      url: 'https://t.me/arrendamentoportugal',
      description: 'Anúncios de arrendamento e venda de imóveis em todo o país.',
      isVerified: false,
      topics: ['habitação', 'arrendamento'],
      languages: ['pt-PT', 'pt-BR']
    },
    {
      id: 'tg-portugalpages',
      rank: 5,
      name: 'Spravochnaya Portugalii (canal russo)',
      handle: '@portugalpages',
      url: 'https://t.me/portugalpages',
      description: 'Canal editorial do HackPortugal — guias verificados sobre burocracia e vida quotidiana. Em russo; pode ser útil para referência cruzada.',
      isVerified: true,
      verifiedNote: 'Verificado pela equipa editorial HackPortugal',
      topics: ['todos'],
      languages: ['ru']
    }
  ],
  facebookGroups: [
    {
      id: 'fb-brasileiros-em-portugal',
      rank: 1,
      name: 'Brasileiros em Portugal — comunidade',
      handle: null,
      url: 'https://www.facebook.com/groups/brasileirosemportugal/',
      description: 'Uma das maiores comunidades de brasileiros em Portugal no Facebook — Q&A sobre AIMA, CPLP, Estatuto de Igualdade, vida em Portugal.',
      isVerified: false,
      topics: ['brasileiros', 'cplp'],
      languages: ['pt-BR']
    },
    {
      id: 'fb-portugueses-no-mundo',
      rank: 2,
      name: 'Portugueses regressados / emigrantes',
      handle: null,
      url: 'https://www.facebook.com/groups/portuguesesnomundo/',
      description: 'Portugueses que regressam ao país, emigração, recuperação de NIF/SS.',
      isVerified: false,
      topics: ['emigração', 'regresso'],
      languages: ['pt-PT']
    },
    {
      id: 'fb-imigrantes-em-portugal',
      rank: 3,
      name: 'Imigrantes em Portugal',
      handle: null,
      url: 'https://www.facebook.com/groups/imigrantesemportugal/',
      description: 'Comunidade multilingue de imigrantes em Portugal — burocracia, integração, ajuda mútua.',
      isVerified: false,
      topics: ['imigração', 'aima'],
      languages: ['pt-PT', 'pt-BR']
    },
    {
      id: 'fb-mulheres-portugal',
      rank: 4,
      name: 'Mulheres em Portugal',
      handle: null,
      url: 'https://www.facebook.com/groups/mulheresemportugal/',
      description: 'Comunidade de mulheres em Portugal — apoio, eventos, dicas para famílias.',
      isVerified: false,
      topics: ['mulheres', 'família'],
      languages: ['pt-PT', 'pt-BR']
    },
    {
      id: 'fb-empreendedores-portugal',
      rank: 5,
      name: 'Empreendedores em Portugal',
      handle: null,
      url: 'https://www.facebook.com/groups/empreendedoresportugal/',
      description: 'Empreendedores e freelancers — abertura de actividade, recibos verdes, fiscalidade.',
      isVerified: false,
      topics: ['empreendedorismo', 'recibos verdes'],
      languages: ['pt-PT']
    },
    {
      id: 'fb-cplp-portugal',
      rank: 6,
      name: 'CPLP em Portugal — Angola, Moçambique, Cabo Verde',
      handle: null,
      url: 'https://www.facebook.com/groups/cplpemportugal/',
      description: 'Comunidade dos países da CPLP em Portugal — mobilidade, AIMA, integração.',
      isVerified: false,
      topics: ['cplp', 'aima'],
      languages: ['pt-PT']
    }
  ]
}
