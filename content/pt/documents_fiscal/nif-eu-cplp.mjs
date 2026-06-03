export default {
  editorialVoice: 'hackportugal',
  id: 'nif-eu-cplp',
  categoryId: 'documents_fiscal',
  title: 'Como obter o NIF — cidadãos da UE/EEE/Suíça e CPLP',
  tldr: 'A necessidade de representante fiscal é determinada não pela cidadania, mas pela residência fiscal / morada e pela existência de obrigações fiscais em Portugal. Para uma morada na UE/EEE, normalmente não é exigido representante fiscal (princípios das directivas de assistência mútua). Para uma morada na CPLP fora da UE, aplicam-se as regras gerais: é necessário representante quando existe ligação fiscal a Portugal. Após o Ofício Circulado 90054/2022, muitas vezes é possível obter um NIF simples, sem obrigações fiscais em Portugal, sem representante. A emissão nas Finanças é gratuita e feita no próprio dia.',
  audience: { citizenships: ['euEeaSwiss', 'cplp'] },
  tags: ['nif', 'documentos', 'cplp', 'ue'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'why-easier',
      title: 'Porque é mais simples',
      content: [
        { kind: 'paragraph', text: 'Se a sua morada fiscal se situar na UE/EEE, normalmente não é exigido representante. Se a morada for fora da UE/EEE, incluindo países da CPLP, as Finanças podem emitir o NIF, mas, em caso de obrigações fiscais posteriores, confirme a exigência de representante fiscal ou a adesão às notificações electrónicas. A regra depende da morada fiscal, não do passaporte.' }
      ]
    },
    {
      id: 'how',
      title: 'Como obter',
      content: [
        { kind: 'checklist', items: [
          'Passaporte (original)',
          'Documento recente com morada — por exemplo, uma factura de serviços públicos, extracto bancário ou outro documento aceite pelo serviço de Finanças em causa; de preferência emitido nos últimos 3 meses',
          'O NIF é emitido através das Finanças/AT. Ter um processo na AIMA, por si só, não garante a emissão do NIF na mesma visita; confirme se existe marcação/balcão separado das Finanças'
        ]},
        { kind: 'paragraph', text: 'Se ainda não tiver NIF, a marcação online através do Portal das Finanças pode não estar disponível (muitas funcionalidades exigem NIF/palavra-passe).\n\nVerifique o Atendimento por Marcação/contactos da AT, a chamada para o Centro de Atendimento Telefónico ou a possibilidade de atendimento presencial num serviço de Finanças/Loja do Cidadão.' },
        { kind: 'timeline', text: 'O NIF é normalmente emitido no dia do atendimento bem-sucedido; o prazo não inclui a espera pela marcação — nas grandes cidades, a fila pode demorar mais tempo.' }
      ]
    },
    {
      id: 'cplp-note',
      title: 'Cidadãos da CPLP — importante',
      audience: { citizenships: ['cplp'] },
      content: [
        { kind: 'paragraph', text: 'O próprio NIF não depende do estatuto migratório: pode obtê-lo nas Finanças logo após a entrada. Para cidadãos brasileiros, a entrada é mais simples, uma vez que não é exigido visto para estadas curtas até 90 dias. Tenha presente, porém, que, após a Lei 61/2025, já não é possível requerer a autorização de residência CPLP dentro do país após uma entrada sem visto — é necessário um visto de residência obtido no consulado antes da entrada.' },
        { kind: 'warning', text: 'A Lei 61/2025 (entrou em vigor em 23.10.2025) tornou mais rigorosas as regras de entrada para cidadãos da CPLP, excepto Brasil: agora é exigido visto CPLP no consulado antes da entrada. A excepção aplica-se apenas a cidadãos brasileiros (entrada sem visto por 90 dias).\n\nConfirme os requisitos actualizados em vistos.mne.gov.pt.' }
      ]
    }
  ],
  documents: [
    { title: 'Passaporte', note: 'original' },
    { title: 'Comprovativo da morada efectiva', note: 'em Portugal, na UE/EEE ou fora da UE/EEE; se a morada for fora da UE/EEE — confirme as regras sobre representante fiscal quando surgirem obrigações fiscais' }
  ],
  costs: [
    { label: 'Taxa das Finanças', amountEUR: 0 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 1,
  sources: [
    { title: 'ePortugal — Obter NIF', url: 'https://www.gov.pt/servicos/pedir-o-numero-de-identificacao-fiscal-nif-para-pessoa-singular', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AT — Ofício Circulado 90054/2022 (representante fiscal)', url: 'https://info.portaldasfinancas.gov.pt/pt/atualidades/instrucoesadmin/Paginas/Oficio_Circulado_90054_2022.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei n.º 61/2025 — alterações CPLP (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Vistos MNE — CPLP', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
