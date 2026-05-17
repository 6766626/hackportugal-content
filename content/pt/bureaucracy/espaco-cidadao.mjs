export default {
  editorialVoice: 'hackportugal',
  id: 'espaco-cidadao',
  categoryId: 'digital_gov',
  title: 'Espaço Cidadão — serviços públicos num único balcão',
  tldr: 'Espaço Cidadão — pontos de atendimento (existem por todo o país, mas não garantidamente em todos os municípios), onde se resolvem muitas questões de serviços públicos: Chave Móvel Digital, alteração de morada, várias certidões e outros. O conjunto concreto de serviços depende do ponto de atendimento — NIF/NISS não existem em todos os Espaço Cidadão. Nas grandes cidades existe a Loja de Cidadão (balcões separados de diferentes entidades — a composição varia consoante a cidade). A marcação através de ePortugal.gov.pt é **recomendada**, mas não é obrigatória em todos os locais — alguns serviços funcionam por ordem de chegada ou com senhas.',
  tags: ['espaço cidadão', 'loja de cidadão', 'serviços públicos'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'difference',
      title: 'Espaço Cidadão e Loja de Cidadão',
      content: [
        { kind: 'checklist', items: [
          'Loja de Cidadão — em grandes cidades (Lisboa, Porto, Faro), balcões separados de diferentes entidades (normalmente Finanças, Segurança Social, IRN, IMT, entre outras). A composição das entidades varia em cada Loja de Cidadão concreta — AIMA/IMT não existem em todos os locais',
          'Espaço Cidadão — em qualquer município, mesmo pequeno, um operador universal resolve tarefas básicas, mas encaminha os casos complexos para a Loja de Cidadão'
        ]}
      ]
    },
    {
      id: 'services',
      title: 'O que pode fazer',
      content: [
        { kind: 'checklist', items: [
          'Cartão de Cidadão (documento de identificação do cidadão português) — substituição, atualização do código PIN',
          'Chave Móvel Digital — ativação',
          'NIF — obtenção (para UE/CPLP — sem representante)',
          'Alteração da morada fiscal',
          'NISS — emissão',
          'Certificados de registo criminal',
          'Registo automóvel (IMT) — casos simples',
          'Abono de família — pedido',
          'Registo de casamento, nascimento de uma criança — certidões básicas'
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
          { id: 'e2', title: '2. Fazer marcação online', content: [
            { kind: 'paragraph', text: 'Através de ePortugal.gov.pt → escolher o serviço → escolher o local → escolher a hora. A marcação é obrigatória.' }
          ]},
          { id: 'e3', title: '3. Levar os documentos e comparecer', content: [
            { kind: 'paragraph', text: 'Chegue 10 min antes. Cada serviço demora 15-30 min. O operador ajuda frequentemente com questões relacionadas sem uma marcação separada.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos',
      content: [
        { kind: 'checklist', items: [
          'Reserve sempre uma vaga com antecedência — muitas vezes não atendem por ordem de chegada',
          'Leve o original e uma cópia de cada documento',
          'Se o operador recusar — peça educadamente para chamar um funcionário sénior',
          'Em Lisboa/Porto compensa ir a um Espaço Cidadão menos sobrecarregado nos arredores — há mais vagas disponíveis',
          'Nem sempre compreendem inglês — prepare antecipadamente o pedido em português'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ePortugal — Espaços Cidadão', url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Loja de Cidadão — site oficial', url: 'https://www.ama.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
