export default {
  editorialVoice: 'hackportugal',
  id: 'chave-movel-digital',
  categoryId: 'digital_gov',
  title: 'Chave Móvel Digital (assinatura eletrónica do Estado) — ativação',
  tldr: 'A CMD é a assinatura digital do Estado português. Sem ela, não são possíveis: renovações no portal da AIMA, Segurança Social Direta (portal online da Segurança Social), Finanças, assinatura de documentos online. É ativada gratuitamente numa Loja de Cidadão ou através do Cartão de Cidadão.',
  tags: ['chave', 'cmd', 'assinatura digital'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what',
      title: 'O que é e para que serve',
      content: [
        { kind: 'paragraph', text: 'A Chave Móvel Digital (CMD) é um login do Estado + assinatura digital. É semelhante a serviços públicos online ou BankID. É utilizada para entrar na AIMA, SNS, Finanças, IRN, tribunal, ePortugal.' },
        { kind: 'paragraph', text: 'Funciona como uma combinação de PIN + SMS (ou push na app Autenticação.gov).' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requisitos',
      content: [
        { kind: 'checklist', items: [
          'Cartão de Cidadão (CC) ou passaporte com autorização de residência',
          'NIF',
          'Número de telefone português (obrigatório para SMS 2FA)',
          'Email'
        ]},
        { kind: 'warning', text: 'Um número de telefone estrangeiro não serve para a ativação — é necessário um SIM com número PT.' }
      ]
    },
    {
      id: 'activate',
      title: 'Como ativar',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Opção A — online através do CC + leitor', content: [
            { kind: 'paragraph', text: 'Se tiver Cartão de Cidadão com PIN e leitor USB (ou NFC móvel), pode ativar em autenticacao.gov.pt sem deslocação.' }
          ]},
          { id: 'c2', title: '1. Opção B — presencialmente numa Loja de Cidadão / Espaço Cidadão', content: [
            { kind: 'paragraph', text: 'Agendamento em eportugal.gov.pt ou fila sem marcação. O operador verifica os documentos e ativa a CMD no seu número PT.' }
          ]},
          { id: 'c3', title: '2. Definir a palavra-passe (PIN)', content: [
            { kind: 'paragraph', text: 'PIN numérico de 4-8 dígitos. É utilizado em cada autenticação juntamente com o código por SMS.' }
          ]},
          { id: 'c4', title: '3. Instalar a aplicação Autenticação.gov', content: [
            { kind: 'paragraph', text: 'App para iOS / Android. Evita os códigos por SMS — usa push em vez disso. Recomendado.' }
          ]},
          { id: 'c5', title: '4. Ativar a assinatura digital (opcional)', content: [
            { kind: 'paragraph', text: 'Opção separada no perfil. Permite assinar PDF sem deslocação ao notário (para muitos fins).' }
          ]}
        ]}
      ]
    },
    {
      id: 'use',
      title: 'Onde utilizar',
      content: [
        { kind: 'checklist', items: [
          'portal-renovacoes.aima.gov.pt — renovação da autorização de residência',
          'Segurança Social Direta — NISS, prestações',
          'Portal das Finanças (portal fiscal) — IRS, NIF',
          'SNS — cartão de utente e receitas',
          'ePortugal — certidões, comprovativos',
          'Assinatura de contratos de arrendamento/compra sem presença física'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'CC ou passaporte + autorização de residência' },
    { title: 'NIF' },
    { title: 'Número de telefone PT' }
  ],
  costs: [{ label: 'Ativação', amountEUR: 0 }],
  timelineDaysMin: 1,
  timelineDaysMax: 14,
  sources: [
    { title: 'Autenticação.gov — oficial', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Chave Móvel Digital', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
