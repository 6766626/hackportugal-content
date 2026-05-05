export default {
  editorialVoice: 'hackportugal',
  id: 'espaco-cidadao',
  categoryId: 'digital_gov',
  title: 'Espaço Cidadão — serviços públicos num só balcão',
  tldr: 'Espaço Cidadão — pontos de atendimento (existem por todo o país, mas não é garantido em cada município), onde se tratam muitos assuntos de serviços públicos: Chave Móvel Digital, alteração de morada, várias certidões e outros. O conjunto concreto de serviços depende do posto — NIF/NISS não existem em todos os Espaços Cidadão. Nas cidades grandes existe a Loja de Cidadão (balcões separados de diferentes organismos — a composição difere consoante a cidade). O agendamento via ePortugal.gov.pt é **recomendado**, mas nem sempre obrigatório — alguns serviços funcionam por ordem de chegada ou por senha.',
  tags: ['espaço cidadão', 'loja de cidadão', 'serviços públicos'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'difference',
      title: 'Espaço Cidadão e Loja de Cidadão',
      content: [
        { kind: 'checklist', items: [
          'Loja de Cidadão — nas grandes cidades (Lisboa, Porto, Faro), balcões separados de vários organismos (normalmente Finanças, Segurança Social, IRN, IMT, entre outros). A composição dos organismos difere em cada Loja de Cidadão — AIMA/IMT não existem em todo o lado',
          'Espaço Cidadão — em qualquer município, mesmo pequeno; um operador universal resolve tarefas básicas, mas em casos complexos encaminha para a Loja de Cidadão'
        ]}
      ]
    },
    {
      id: 'services',
      title: 'O que pode tratar',
      content: [
        { kind: 'checklist', items: [
          'Cartão de Cidadão (documento de identificação de cidadão português) — substituição, atualização do PIN',
          'Chave Móvel Digital — ativação',
          'NIF — obtenção (para UE/CPLP — sem representante)',
          'Alteração da morada fiscal',
          'NISS — atribuição',
          'Certidões de registo criminal',
          'Registo de veículo (IMT) — casos simples',
          'Abono de família — pedido',
          'Registos e certidões básicas de casamento e de nascimento'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'Como aceder',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Encontrar o Espaço Cidadão mais próximo', content: [
            { kind: 'link', text: 'Mapa dos Espaços Cidadão', url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao' }
          ]},
          { id: 'e2', title: '2. Marcar online', content: [
            { kind: 'paragraph', text: 'Em ePortugal.gov.pt → escolher o serviço → escolher o local → escolher a hora. O agendamento é obrigatório.' }
          ]},
          { id: 'e3', title: '3. Levar os documentos e comparecer', content: [
            { kind: 'paragraph', text: 'Chegue 10 min mais cedo. Cada serviço leva 15–30 min. O operador muitas vezes ajuda com assuntos relacionados sem marcação separada.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos',
      content: [
        { kind: 'checklist', items: [
          'Agende sempre com antecedência — muitas vezes não atendem por ordem de chegada',
          'Leve o original e uma cópia de cada documento',
          'Se o operador recusar, peça educadamente para chamar um superior',
          'Em Lisboa/Porto pode ser melhor ir a um Espaço Cidadão menos concorrido nos arredores — há mais vagas',
          'Nem sempre compreendem inglês — prepare previamente o pedido em português'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ePortugal — Espaços Cidadão', url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Loja de Cidadão — site oficial', url: 'https://www.ama.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}
