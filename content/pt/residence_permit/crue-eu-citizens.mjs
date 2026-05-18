export default {
  editorialVoice: 'hackportugal',
  id: 'crue-eu-citizens',
  categoryId: 'residence_permit',
  title: 'CRUE — registo de cidadãos da UE/EEE/Suíça',
  tldr: 'Os cidadãos da UE/EEE/Suíça não precisam de visto. Se planeia viver em Portugal MAIS de 3 meses — deve registar-se no prazo de 30 dias após o fim dos primeiros 3 meses de permanência e obter o Certificado de Registo de Cidadão da União Europeia (CRUE).\n\nÉ tratado na Câmara Municipal da área de residência. ~15 € (para crianças com menos de 6 anos — 7,50 €), normalmente é emitido no dia da visita; a espera por marcação depende do município.',
  audience: { citizenships: ['euEeaSwiss'] },
  tags: ['crue', 'ue', 'registo'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what',
      title: 'O que é o CRUE',
      content: [
        { kind: 'paragraph', text: 'CRUE = Certificado de Registo de Cidadão da União Europeia. Confirma o seu direito a residir em Portugal enquanto cidadão da UE. É válido por 5 anos; depois — residência permanente.' },
        { kind: 'warning', text: 'NÃO é equivalente a uma autorização de residência para cidadãos de países terceiros — o CRUE não lhe dá mais direitos do que aqueles que já tem enquanto cidadão da UE. É apenas o registo de residência.' }
      ]
    },
    {
      id: 'when',
      title: 'Quando se deve registar',
      content: [
        { kind: 'paragraph', text: 'O CRUE só é necessário se tiver intenção de permanecer em Portugal MAIS de 3 meses; para estadias até 3 meses, normalmente basta ao cidadão da UE ter um documento de identificação/passaporte válido. Nos termos da Lei n.º 37/2006 art. 14: o registo é feito no prazo de 30 dias após o fim dos primeiros 3 meses de permanência. A coima por incumprimento é de 400 €–1500 €.' },
        { kind: 'paragraph', text: 'Na prática, muitos municípios aceitam o registo logo após a entrada.' }
      ]
    },
    {
      id: 'where',
      title: 'Onde obter',
      content: [
        { kind: 'paragraph', text: 'Normalmente — na Câmara Municipal da área de residência. Em alguns municípios, parte do atendimento pode ser delegada na Junta de Freguesia, mas isto deve ser confirmado localmente.' },
        { kind: 'paragraph', text: 'A marcação depende do município: consulte o site da sua Câmara Municipal ou contacte diretamente o balcão/serviços municipais. O Portal do Eleitor NÃO é utilizado para o CRUE (é um site sobre assuntos eleitorais). Nas grandes cidades (Lisboa, Porto), a marcação é obrigatória.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos',
      content: [
        { kind: 'paragraph', text: 'Nos termos da Lei n.º 37/2006 art. 7, os documentos concretos dependem da categoria:' },
        { kind: 'checklist', items: [
          'Documento de identificação nacional ou passaporte',
          'Comprovativo de morada em Portugal (contrato de arrendamento / comprovativo de alojamento)',
          'Trabalhador por conta de outrem / trabalhador independente: declaração sob compromisso de honra sobre trabalho ou independent activity, contrato ou declaração de início de atividade, se solicitado',
          'Estudante: comprovativo de matrícula + declaração de meios suficientes e (quando aplicável) cobertura médica',
          'Economicamente inativo / pensionista: declaração de meios suficientes e (quando aplicável) cobertura médica'
        ]},
        { kind: 'paragraph', text: 'Frequentemente basta uma declaração sob compromisso de honra, mas a Câmara concreta pode pedir extratos bancários, comprovativo de pensão, contrato, enrolment letter ou outros comprovativos — verifique antecipadamente a lista do seu município.' }
      ]
    },
    {
      id: 'after',
      title: 'Depois de obter',
      content: [
        { kind: 'checklist', items: [
          'O NIF pode e normalmente deve ser obtido ANTES do CRUE ou em paralelo — é frequentemente necessário para arrendamento, trabalho e serviços públicos',
          'NISS (se trabalha)',
          'Registo no SNS / centro de saúde — normalmente com NIF, CRUE e comprovativo de morada; consoante a situação, podem pedir NISS, S1 ou outro comprovativo do direito a cuidados de saúde',
          'Troca da carta de condução — não é necessária, as cartas de condução da UE são aceites diretamente',
          'Após 5 anos — há um procedimento separado para pedir o certificado de residência permanente; não é uma substituição automática do CRUE'
        ]},
        { kind: 'paragraph', text: 'De acordo com a legislação em vigor, a naturalização é possível após 5 anos de residência legal, desde que sejam cumpridos os restantes requisitos, incluindo conhecimento de português A2.\n\n**03.05.2026 O Presidente Seguro promulgou o Decreto AR 48/XVII** — após publicação no DRE, o prazo para cidadãos da UE/EEE/Suíça aumentará para 7 anos (equiparados à CPLP).' }
      ]
    }
  ],
  costs: [
    { label: 'Taxa do CRUE', amountEUR: 15, note: 'para crianças com menos de 6 anos — cerca de 7,50 €; confirme na tabela da sua Câmara Municipal' }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 1,
  sources: [
    { title: 'ePortugal — registo de cidadão da União Europeia', url: 'https://eportugal.gov.pt/cidadaos-ue/-/informacoes/registar-como-cidadao-da-uniao-europeia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei nº 37/2006 — entrada e residência de cidadãos da UE', url: 'https://diariodarepublica.pt/dr/detalhe/lei/37-2006', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Your Europe — formalidades de residência em Portugal', url: 'https://europa.eu/youreurope/citizens/residence/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
