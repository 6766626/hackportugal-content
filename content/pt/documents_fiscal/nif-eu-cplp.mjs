export default {
  editorialVoice: 'hackportugal',
  id: 'nif-eu-cplp',
  categoryId: 'documents_fiscal',
  title: 'Como obter o NIF — cidadãos da UE/EEE/Suíça e CPLP',
  tldr: 'A necessidade de representante fiscal não é determinada pela nacionalidade, mas sim pela residência fiscal / morada e pela existência de obrigações fiscais em Portugal. Para uma morada na UE/EEE, normalmente não é necessário representante fiscal (princípios das diretivas de assistência mútua). Para uma morada na CPLP fora da UE, aplicam-se as regras gerais: é necessário representante quando existe uma ligação fiscal a Portugal. Após o Ofício Circulado 90054/2022, muitas vezes é possível obter um NIF simples sem obrigações fiscais em Portugal sem representante. O pedido nas Finanças é gratuito e feito no próprio dia.',
  audience: { citizenships: ['euEeaSwiss', 'cplp'] },
  tags: ['nif', 'documentos', 'cplp', 'ue'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'why-easier',
      title: 'Porque é mais simples',
      content: [
        { kind: 'paragraph', text: 'Se a sua morada fiscal estiver na UE/EEE, normalmente não é necessário representante. Se a morada estiver fora da UE/EEE, incluindo países da CPLP, as Finanças podem emitir o NIF, mas, em caso de obrigações fiscais posteriores, verifique a exigência de representante fiscal ou a adesão às notificações eletrónicas. A regra depende da morada fiscal, não do passaporte.' }
      ]
    },
    {
      id: 'how',
      title: 'Como obter',
      content: [
        { kind: 'checklist', items: [
          'Passaporte (original)',
          'Documento recente com morada — por exemplo, fatura de serviços públicos, extrato bancário ou outro documento aceite pelo serviço das Finanças específico; de preferência emitido nos últimos 3 meses',
          'O NIF é emitido através das Finanças/AT. A existência de um processo na AIMA, por si só, não garante a emissão do NIF na mesma visita; confirme se existe uma marcação/balcão separado das Finanças'
        ]},
        { kind: 'paragraph', text: 'Se ainda não tiver NIF, a marcação online através do Portal das Finanças pode não estar disponível (muitas funcionalidades exigem NIF/palavra-passe). Verifique o Atendimento por Marcação/contactos da AT, a chamada para o Centro de Atendimento Telefónico ou a possibilidade de atendimento presencial num serviço das Finanças/Loja do Cidadão.' },
        { kind: 'timeline', text: 'O NIF é normalmente emitido no dia do atendimento bem-sucedido; o prazo não inclui a espera por marcação — nas grandes cidades, a fila pode demorar mais tempo.' }
      ]
    },
    {
      id: 'cplp-note',
      title: 'Cidadãos da CPLP — importante',
      audience: { citizenships: ['cplp'] },
      content: [
        { kind: 'paragraph', text: 'Se estiver em Portugal ao abrigo do Acordo de Mobilidade da CPLP, pode obter o NIF imediatamente após a entrada. Para brasileiros — é especialmente conveniente, uma vez que não é necessário visto até 90 dias e é possível pedir uma autorização de residência a partir do território nacional.' },
        { kind: 'warning', text: 'Lei 61/2025 (entrou em vigor em 23.10.2025) tornou mais rigorosas as regras de entrada para cidadãos da CPLP, exceto Brasil: agora é exigido um visto CPLP no consulado antes da entrada. A exceção aplica-se apenas a brasileiros (entrada sem visto por 90 dias). Confirme os requisitos atuais em vistos.mne.gov.pt.' }
      ]
    }
  ],
  documents: [
    { title: 'Passaporte', note: 'original' },
    { title: 'Comprovativo da morada efetiva', note: 'em Portugal, na UE/EEE ou fora da UE/EEE; se a morada estiver fora da UE/EEE — verifique as regras sobre representante fiscal quando surgirem obrigações fiscais' }
  ],
  costs: [
    { label: 'Taxa das Finanças', amountEUR: 0 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 1,
  sources: [
    { title: 'ePortugal — Obter NIF', url: 'https://eportugal.gov.pt/servicos/pedir-o-numero-de-identificacao-fiscal-nif-para-pessoa-singular', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AT — Ofício Circulado 90054/2022 (representante fiscal)', url: 'https://info.portaldasfinancas.gov.pt/pt/atualidades/instrucoesadmin/Paginas/Oficio_Circulado_90054_2022.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei n.º 61/2025 — alterações CPLP (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Vistos MNE — CPLP', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
