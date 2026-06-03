export default {
  editorialVoice: 'hackportugal',
  id: 'niss',
  categoryId: 'documents_fiscal',
  title: 'Como obter o NISS (número da Segurança Social)',
  tldr: 'NISS (Número de Identificação de Segurança Social) — número de 11 dígitos da Segurança Social. Gratuito. Obtém-se através do empregador, através do formulário online «Pedido de NISS para cidadão estrangeiro» em seg-social.pt ou presencialmente numa Loja da Segurança Social. A Segurança Social Direta (SSD) é a área pessoal APÓS obter o NISS, não é um canal para o primeiro pedido. A exigência de NISS para pedir autorização de residência na AIMA depende da categoria do visto — NÃO é universal para todos os tipos de autorização de residência.',
  tags: ['niss', 'segurança social', 'aima'],
  estimatedReadMinutes: 4,
  recentlyChangedAt: '2025-04-01',
  changeSummary: 'A AIMA alargou a exigência de NISS a mais categorias de autorização de residência; a lista exacta depende do tipo de visto. Não existe uma regra universal de que «o NISS é obrigatório para qualquer pedido na AIMA» — verifique a categoria concreta.',
  steps: [
    {
      id: 'what',
      title: 'O que é o NISS',
      content: [
        { kind: 'paragraph', text: 'NISS = número único no sistema de segurança social. É necessário para contrato de trabalho, contribuições Segurança Social, trabalho independente (recibos verdes), prestações sociais e alguns procedimentos de autorização de residência. Para o SNS é necessário um Número de Utente separado — não é o mesmo número.' },
        { kind: 'warning', text: 'Não confundir com o NIF (número fiscal, Finanças) e o Número de Utente (SNS, registo separado no centro de saúde).' }
      ]
    },
    {
      id: 'variant-employer',
      title: 'Opção A. Através do empregador',
      content: [
        { kind: 'paragraph', text: 'Se tiver um empregador — ele apresenta o pedido no momento da formalização do contrato de trabalho. O NISS é atribuído automaticamente; o número chegará por correio ou poderá ser consultado na Segurança Social.' },
        { kind: 'timeline', text: 'Normalmente 5–15 dias úteis.' }
      ]
    },
    {
      id: 'variant-online',
      title: 'Opção B. Online através do formulário «Pedido de NISS para cidadão estrangeiro»',
      content: [
        { kind: 'paragraph', text: 'De forma autónoma, sem empregador — através do formulário online em seg-social.pt na secção para estrangeiros. É um formulário público; não é necessário entrar na Segurança Social Direta (SSD), porque ainda não tem NISS para activar a SSD. A SSD é utilizada APÓS obter o NISS — para gerir contribuições, declarações e pedidos.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Encontrar o formulário em seg-social.pt', content: [
            { kind: 'link', text: 'Segurança Social — Pedido de NISS para cidadão estrangeiro', url: 'https://www.seg-social.pt/' }
          ]},
          { id: 's2', title: '2. Preencher o formulário', content: [
            { kind: 'paragraph', text: 'NIF, dados do passaporte, morada em Portugal.' }
          ]},
          { id: 's3', title: '3. Carregar digitalizações dos documentos', content: [
            { kind: 'checklist', items: ['Passaporte/documento de identificação civil (páginas com dados pessoais e, se necessário, páginas com visto/carimbo válido)', 'NIF (na prática, normalmente é necessário)', 'Autorização de residência / visto / documento da UE', 'Morada em Portugal; comprovativo de morada pode ser pedido adicionalmente'] }
          ]},
          { id: 's4', title: '4. Receber o NISS por correio electrónico ou carta', content: [
            { kind: 'timeline', text: '5–30 dias. Normalmente a resposta chega ao email/contacto indicado no pedido; para cidadãos estrangeiros é frequente ser também enviada uma carta registada a convidar a levantar o NISS numa Loja da Segurança Social. A SSD fica plenamente disponível após a atribuição do NISS e a configuração do acesso.' }
          ]}
        ]}
      ]
    },
    {
      id: 'variant-in-person',
      title: 'Opção C. Presencialmente numa Loja da Segurança Social',
      content: [
        { kind: 'paragraph', text: 'Se não conseguiu online — tente marcar através da Linha Segurança Social 300 502 502 ou através dos canais disponíveis da Segurança Social. A fila sem marcação não está disponível em todo o lado nem sempre. Leve passaporte, NIF e comprovativo de morada.' }
      ]
    }
  ],
  documents: [
    { title: 'Passaporte', note: 'original e cópia' },
    { title: 'NIF', note: 'normalmente é necessário na prática e é frequentemente pedido pelo formulário' },
    { title: 'Autorização de residência ou visto', note: 'para cidadãos de países fora da UE' },
    { title: 'Comprovativo de morada', note: 'se for pedido: recente, normalmente até 3 meses' }
  ],
  costs: [
    { label: 'Taxa administrativa', amountEUR: 0 }
  ],
  timelineDaysMin: 5,
  timelineDaysMax: 30,
  sources: [
    { title: 'Segurança Social — Pedido de NISS para cidadão estrangeiro', url: 'https://www.seg-social.pt/pedido-de-niss-para-cidadao-estrangeiro', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Obter NISS', url: 'https://www.gov.pt/servicos/obter-numero-de-identificacao-da-seguranca-social-niss', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AIMA — lista de verificação por tipos de autorização de residência', url: 'https://aima.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
