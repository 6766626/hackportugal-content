export default {
  editorialVoice: 'hackportugal',
  id: 'belarus-specific',
  categoryId: 'country_specific',
  title: 'Mudança da Bielorrússia — especificidades',
  tldr: 'Bielorrussos em Portugal: não existe consulado de Portugal em Minsk. Os mais próximos são Varsóvia ou Moscovo. Os vistos D são tratados através destes consulados. Apostila: Ministério da Justiça da Bielorrússia. Os bancos portugueses aceitam bielorrussos sem restrições especiais. As sanções dizem respeito apenas a pessoas politicamente expostas.',
  audience: { countryCodes: ['BY'] },
  tags: ['bielorrússia', 'vistos', 'apostila'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'visas',
      title: 'Obtenção de visto',
      content: [
        { kind: 'checklist', items: [
          'Não existe consulado de Portugal em Minsk',
          'Opções: Varsóvia (principal), Moscovo, Vilnius, Riga',
          'Varsóvia: Embaixada de Portugal em Varsóvia, ul. Atenska 37, 03-978 Warszawa (zona de Saska Kępa). Tel. +48 22 511 10 10. Marcação online através de varsovia.embaixadaportugal.mne.gov.pt. Lista de espera de 1–3 meses',
          'Vilnius costuma ser mais rápida devido ao menor fluxo',
          'Para bielorrussos estão disponíveis todos os vistos do tipo D: D2, D3, D4, D7, D8',
          'Vistos Schengen C — com dificuldades após 2022, mas são emitidos em casos humanitários'
        ]}
      ]
    },
    {
      id: 'apostille',
      title: 'Apostila de documentos',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Registo civil — certidões', content: [
            { kind: 'paragraph', text: 'Obter uma segunda via da certidão (nascimento, casamento, etc.) → apostilar no Ministério da Justiça da Bielorrússia. Prazo de 7-30 dias, custo de ~30 BYN por apostila.' }
          ]},
          { id: 'a2', title: '2. Ministério do Interior — certificado de registo criminal', content: [
            { kind: 'paragraph', text: 'Pedido através de mvd.gov.by ou numa repartição. Prazo de 14 dias. Apostila — Ministério da Justiça. Válido durante 3-6 meses em Portugal.' }
          ]},
          { id: 'a3', title: '3. Diploma', content: [
            { kind: 'paragraph', text: 'Ministério da Educação da Bielorrússia → apostila no Ministério da Justiça. Nem todas as universidades privadas estão acreditadas para apostila — confirme.' }
          ]}
        ]},
        { kind: 'paragraph', text: 'Tradução em Portugal — por tradutor ajuramentado ou certificada na Conservatória (irn.justica.gov.pt).' }
      ]
    },
    {
      id: 'banking',
      title: 'Bancos e transferências de dinheiro',
      content: [
        { kind: 'checklist', items: [
          'Belarusbank / BPS-Sber / etc. — os cartões não funcionam em Portugal (desde 2022)',
          'Belgazprombank — os cartões Visa/Mastercard deixaram de funcionar na UE (desde 2026)',
          'Abrir conta em Portugal: ActivoBank, Millennium — aceitam bielorrussos',
          'Transferência de dinheiro: Wise / Revolut / cripto através da CEI',
          'Dinheiro em numerário na fronteira: até 10 000 € sem declaração',
          'As sanções da UE dizem respeito a figuras políticas e a uma lista de empresas — não afectam cidadãos comuns'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Comunidade bielorrussa em Portugal',
      content: [
        { kind: 'checklist', items: [
          'Belarusian Diaspora Association em Lisboa',
          'Chats de emigrantes bielorrussos (Telegram)',
          'Comunidades religiosas bielorrussas — em Lisboa e no Porto',
          'A Bielorrússia não tem postos consulares em Portugal; os serviços consulares para residentes em Portugal são prestados pela embaixada da Bielorrússia em Madrid (Espanha)',
          'A área consular pode mudar — confirme a situação atual no site do Ministério dos Negócios Estrangeiros da Bielorrússia antes de qualquer pedido'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos',
      content: [
        { kind: 'checklist', items: [
          'Faça a marcação no consulado de Portugal em Varsóvia com 3 meses de antecedência',
          'Traduza todos os documentos com antecedência — não deixe para o último momento',
          'Se tiver passaporte da UE (Polónia, Lituânia) — use-o em vez do bielorrusso',
          'Abra uma conta em Portugal na primeira semana — sem ela é difícil',
          'Para crianças: escola portuguesa + programa PLNM para quem não tem o português como língua materna',
          'Não utilize contas Wise/Revolut como «prova de meios» para o D7 — o consulado prefere um banco com licença clássica (UE, Bielorrússia, outro país com supervisão bancária), não um neobanco'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Embaixada de Portugal em Varsóvia', url: 'https://varsovia.embaixadaportugal.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — procedimento de pedido', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — serviços para cidadãos de países terceiros', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
