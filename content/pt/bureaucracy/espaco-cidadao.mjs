export default {
  editorialVoice: 'hackportugal',
  id: 'espaco-cidadao',
  categoryId: 'digital_gov',
  title: 'Espaço Cidadão — serviços públicos num balcão único',
  tldr: 'Espaço Cidadão — pontos de atendimento (existem em todo o país, mas não garantidamente em todos os municípios), onde se resolvem muitas questões relacionadas com serviços públicos: Chave Móvel Digital, alteração de morada, várias certidões e outros. O conjunto concreto de serviços depende do ponto de atendimento — NIF/NISS não estão disponíveis em todos os Espaço Cidadão. Nas grandes cidades existe a Loja de Cidadão (balcões separados de diferentes entidades — a composição varia consoante a cidade)\.\n\nA marcação através de ePortugal.gov.pt é recomendada, mas não é obrigatória em todo o lado — alguns serviços funcionam por ordem de chegada ou por senhas.',
  tags: ['espaço cidadão', 'loja de cidadão', 'serviços públicos'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'difference',
      title: 'Espaço Cidadão e Loja de Cidadão',
      content: [
        { kind: 'checklist', items: [
          'Loja de Cidadão — nas grandes cidades (Lisboa, Porto, Faro), balcões separados de diferentes entidades (normalmente Finanças, Segurança Social, IRN, IMT, entre outras). A composição das entidades varia em cada Loja de Cidadão concreta — AIMA/IMT não existem em todo o lado',
          'Espaço Cidadão — em qualquer município, mesmo pequeno, um operador universal resolve tarefas básicas, mas encaminha casos complexos para a Loja de Cidadão'
        ]}
      ]
    },
    {
      id: 'services',
      title: 'O que pode fazer',
      content: [
        { kind: 'checklist', items: [
          'Cartão de Cidadão (documento de identificação do cidadão português) — substituição, renovação do código PIN',
          'Chave Móvel Digital — activação',
          'NIF — obtenção (para UE/CPLP — sem representante)',
          'Alteração da morada fiscal',
          'NISS — emissão',
          'Certificados de registo criminal',
          'Registo automóvel (IMT) — casos simples',
          'Abono de família — pedido',
          'Registo de casamento, nascimento de criança — certidões básicas'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'Como ir',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Encontrar o Espaço Cidadão mais próximo', content: [
            { kind: 'link', text: 'Mapa dos Espaços Cidadão', url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao' }
          ]},
          { id: 'e2', title: '2. Fazer marcação online', content: [
            { kind: 'paragraph', text: 'Através de ePortugal.gov.pt → escolher o serviço → escolher o local → escolher a hora. Por norma o Espaço Cidadão atende sem marcação, mas para os serviços mais procurados convém marcar com antecedência.' }
          ]},
          { id: 'e3', title: '3. Levar os documentos e comparecer', content: [
            { kind: 'paragraph', text: 'Chegue 10 min antes. Cada serviço demora 15-30 min. O operador ajuda muitas vezes com questões relacionadas sem uma marcação separada.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos',
      content: [
        { kind: 'checklist', items: [
          'Nos pontos mais movimentados convém reservar uma vaga com antecedência: oficialmente o atendimento é sem marcação, mas a capacidade do dia esgota-se muitas vezes',
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
