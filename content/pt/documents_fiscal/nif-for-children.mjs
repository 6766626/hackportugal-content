export default {
  editorialVoice: 'hackportugal',
  id: 'nif-for-children',
  categoryId: 'documents_fiscal',
  title: 'NIF para criança — como obter',
  tldr: 'O NIF da criança é frequentemente pedido: para a escola, registo no SNS (Número de Utente), seguro, serviços médicos privados, Abono de Família. Se a criança obtiver a nacionalidade portuguesa e for emitido o primeiro Cartão de Cidadão/Nascer Cidadão, o NIF/NISS/Número de Utente são normalmente atribuídos no âmbito deste procedimento. Para uma criança estrangeira (mesmo nascida em PT), o NIF é tratado separadamente nas Finanças. Gratuito.',
  tags: ['nif', 'crianças', 'documentos'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando o NIF da criança é normalmente pedido',
      content: [
        { kind: 'checklist', items: [
          'Inscrição numa escola pública ou privada, Jardim de Infância ou Creche',
          'Registo no SNS (Número de Utente) — através do Centro de Saúde',
          'Abono de Família — além do NIF, normalmente é necessário o NISS da criança/a ligação na Segurança Social e cumprir as condições de residência e rendimentos',
          'Contratação de seguro de saúde para a criança',
          'Inclusão da criança no Reagrupamento Familiar',
          'Heranças, recebimento de presentes e transferências'
        ]},
        { kind: 'paragraph', text: 'Para a escola e o SNS, a ausência de NIF não deve bloquear o acesso básico, mas o NIF é frequentemente necessário para registos administrativos, prestações, seguros e actos fiscais/financeiros.' }
      ]
    },
    {
      id: 'path-pt-born',
      title: 'Se a criança nasceu em Portugal',
      content: [
        { kind: 'paragraph', text: 'No hospital funciona o Balcão do Nado Vivo — procedimento único de registo do recém-nascido.' },
        { kind: 'checklist', items: [
          'No prazo de 20 dias após o nascimento — registo do nome na Conservatória do Registo Civil',
          'Se for emitido para a criança o Cartão de Cidadão/Nascer Cidadão português, normalmente são atribuídos em conjunto o NIF, o NISS e o Número de Utente',
          'Se a criança continuar a ser cidadã estrangeira, confirme separadamente: NIF — nas Finanças, utente — no centro de saúde, NISS — na Segurança Social/ISS',
          'Os pais recebem a Cédula de Nascimento em formato electrónico ou o Assento de Nascimento',
          'A nacionalidade da criança depende das leis do país dos pais. Ao abrigo da Lei n.º 37/81 art. 1.º em vigor, uma criança nascida em PT de pais estrangeiros pode ser português de origem se, no momento do nascimento, um dos pais residir em PT há pelo menos 1 ano e não se encontrar ao serviço de um Estado estrangeiro; existem também outros fundamentos especiais. A nova lei da nacionalidade, aprovada em 01.04.2026, aguarda promulgação'
        ]}
      ]
    },
    {
      id: 'path-foreign',
      title: 'Se a criança veio do estrangeiro',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Opção A — presencialmente nas Finanças', content: [
            { kind: 'checklist', items: [
              'Marcar atendimento no Portal das Finanças ou comparecer por ordem de chegada',
              'Ambos os pais ou um dos pais + procuração do outro, bem como a criança',
              'Documentos: passaporte da criança, certidão de nascimento (apostila/legalização, se aplicável, + tradução certificada para português; para documentos da UE — verificar o Reg. (EU) 2016/1191 sobre o multilingual standard form), NIF de ambos os pais',
              'Comprovativo de morada em Portugal: contrato de arrendamento ou Atestado de Residência',
              'O NIF é emitido no dia da visita, gratuitamente'
            ]}
          ]},
          { id: 'f2', title: 'Opção B — à distância através de representante', content: [
            { kind: 'paragraph', text: 'Se os pais forem cidadãos de países terceiros e ainda não estiverem em Portugal, aplica-se o mesmo mecanismo que para o NIF de adulto através de representante fiscal. Após a mudança, é necessário alterar a morada fiscal para uma morada em Portugal/EU/EEA — nessa altura, normalmente é possível remover o representante fiscal; a autorização de residência por si só, sem alteração da morada fiscal nas Finanças, não o faz.\n\nCusto — 70–150 € através de advogado ou empresa.' }
          ]},
          { id: 'f3', title: 'Opção C — se a morada fiscal for em Portugal/EU/EEA', content: [
            { kind: 'paragraph', text: 'Se a morada fiscal da criança/do progenitor estiver em Portugal/EU/EEA, normalmente não é necessário fiscal representative. Se a morada for num país terceiro (incluindo CPLP), as regras sobre representante fiscal/notificações electrónicas devem ser verificadas separadamente; a nacionalidade CPLP, por si só, não confere regime EU.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'Depois de obter o NIF',
      content: [
        { kind: 'checklist', items: [
          'O progenitor/representante legal actua em nome da criança; se necessário, pode ser pedida a palavra-passe do Portal das Finanças para o NIF da criança. Para efeitos fiscais, é importante que a criança esteja correctamente associada no agregado familiar',
          'Activar o Portal das Finanças para a criança — se o progenitor precisar de consultar impostos em nome da criança; normalmente, até aos 18 anos isto não é necessário',
          'Fornecer o NIF à escola ou ao Jardim de Infância no momento da inscrição',
          'Para o SNS (Número de Utente), o passo seguinte é contactar o Centro de Saúde da área de residência',
          'Para o Abono de Família — pedido através da Segurança Social Direta do progenitor para a criança'
        ]}
      ]
    },
    {
      id: 'common-issues',
      title: 'Dificuldades frequentes',
      content: [
        { kind: 'warning', text: 'Se o país emissor da certidão não participar na Convenção da Haia sobre Apostila, é necessária legalização consular. Verifique o estatuto do país na HCCH Apostille status table — o Canadá (desde 11.01.2024) e a China (desde Novembro de 2023, parte continental) já utilizam a apostila. Para a Ucrânia — apostila online através da Diia. Para documentos da UE, pode existir multilingual standard form ao abrigo do Reg. (EU) 2016/1191 sem tradução.' },
        { kind: 'warning', text: 'Se a criança nasceu por FIV ou com pai desconhecido — indique apenas um progenitor; as Finanças aceitam isto sem problemas.' },
        { kind: 'warning', text: 'Tradução do nome da criança — confirme como será indicado no passaporte. Transliterações diferentes (MARIIA/MARIA/MARYA) criam problemas na entrada na escola e na obtenção do Abono de Família.' }
      ]
    }
  ],
  documents: [
    { title: 'Certidão de nascimento', note: 'apostila/legalização, se aplicável, + tradução certificada para português; para documentos da UE — verificar multilingual standard form (Reg. EU 2016/1191)' },
    { title: 'Passaporte da criança', note: 'original + cópia' },
    { title: 'Passaportes dos pais', note: 'ambos, com NIF' },
    { title: 'Atestado de Residência', note: 'ou contrato de arrendamento' }
  ],
  costs: [
    { label: 'Taxa das Finanças', amountEUR: 0 },
    { label: 'Apostila + tradução da certidão', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Representante fiscal (se à distância)', amountEURMin: 70, amountEURMax: 150 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 15,
  sources: [
    { title: 'ePortugal — Balcão do Nado Vivo', url: 'https://eportugal.gov.pt/servicos/registar-o-nascimento-no-balcao-do-nado-vivo', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN — Cartão de Cidadão / Nascer Cidadão', url: 'https://irn.justica.gov.pt/Servicos/Cartao-de-Cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AT — Ofício Circulado 90057/2022 (representante fiscal)', url: 'https://info.portaldasfinancas.gov.pt/pt/atualidades/instrucoesadmin/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'HCCH — Estatuto da Convenção da Apostila', url: 'https://www.hcch.net/en/instruments/conventions/status-table/?cid=41', kind: 'official', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'Lei n.º 37/81 — Lei da Nacionalidade', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34514475', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
