export default {
  editorialVoice: 'hackportugal',
  id: 'certidao-domicilio-fiscal',
  categoryId: 'documents_fiscal',
  title: 'Certidão de domicílio fiscal — comprovativo da morada fiscal',
  tldr: 'A Certidão de domicílio fiscal é uma certidão oficial da Autoridade Tributária que confirma a sua morada fiscal em Portugal. Pode ser necessária para: pedido de nacionalidade, abertura de conta em alguns bancos, registo de veículo, renovação da autorização de residência em situações-limite. Não confundir: para comprovar residência fiscal ao abrigo de convenções para evitar a dupla tributação, é necessária uma Certidão de Residência Fiscal separada. É gratuita e pode ser descarregada online através do Portal das Finanças em 2 minutos.',
  tags: ['certidão', 'morada', 'finanças'],
  estimatedReadMinutes: 3,
  steps: [
    {
      id: 'what-for',
      title: 'Para que serve',
      content: [
        { kind: 'checklist', items: [
          'Pedido de nacionalidade portuguesa — o IRN por vezes solicita',
          'Abertura de conta bancária, se não houver outro comprovativo de morada',
          'Registo de veículo no IMT — comprovativo da morada do proprietário',
          'Renovação da autorização de residência em casos discutíveis — a AIMA solicita',
          'Não confundir: para autoridades fiscais estrangeiras e aplicação de DTT é necessária uma Certidão de Residência Fiscal separada, e não a certidão de domicílio fiscal',
          'Apresentação de queixa ao Provedor de Justiça, tribunal, Finanças'
        ]}
      ]
    },
    {
      id: 'online',
      title: 'Obter online (a forma mais simples)',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Entrar no Portal das Finanças', content: [
            { kind: 'paragraph', text: 'portaldasfinancas.gov.pt → Iniciar sessão → NIF + palavra-passe, ou Chave Móvel Digital, ou Cartão de Cidadão.' }
          ]},
          { id: 'o2', title: '2. Encontrar o serviço', content: [
            { kind: 'paragraph', text: 'Na pesquisa do Portal das Finanças, introduza «certidão domicílio fiscal» ou abra Todos os Serviços → Certidões → Pedir certidão e escolha o tipo necessário.' }
          ]},
          { id: 'o3', title: '3. Escolher o tipo e o ano', content: [
            { kind: 'checklist', items: [
              'Certidão de Domicílio Fiscal — se for necessária a morada na AT (banco, AIMA)',
              'Certidão de Residência Fiscal — se for necessário comprovar a residência fiscal em Portugal num ano específico perante uma autoridade fiscal estrangeira/DTT',
              'Para residência fiscal, está frequentemente disponível uma versão em inglês; para domicílio fiscal, normalmente basta o PDF em português com código de verificação'
            ]}
          ]},
          { id: 'o4', title: '4. Descarregar o PDF', content: [
            { kind: 'paragraph', text: 'É emitida de imediato, com código QR para verificação de autenticidade. Normalmente aceitam o PDF/impresso com código de verificação, mas o banco ou a AIMA podem pedir outro proof of address ou um comprovativo mais recente.' }
          ]}
        ]}
      ]
    },
    {
      id: 'offline',
      title: 'Obter presencialmente nas Finanças (se não tiver acesso online)',
      content: [
        { kind: 'checklist', items: [
          'Marcação através do Portal das Finanças para atendimento presencial',
          'Documentos: NIF + Cartão de Cidadão/autorização de residência + passaporte',
          'Pedir ao funcionário a "certidão de domicílio fiscal"',
          'Normalmente emitem ou ajudam a imprimir a certidão no dia do atendimento; o formato e o prazo dependem do serviço de finanças e do tipo de certidão'
        ]}
      ]
    },
    {
      id: 'validity',
      title: 'Prazo de validade',
      content: [
        { kind: 'checklist', items: [
          'Não existe prazo oficial — a certidão reflecte a morada no momento da emissão',
          'Os bancos exigem frequentemente uma certidão "com menos de 3 meses"',
          'IRN/AIMA: depende do procedimento; é mais seguro apresentar uma certidão com menos de 3 meses, se a lista concreta de documentos não indicar outro prazo',
          'Se a morada mudou — peça uma nova, a antiga deixa de ser válida',
          'Para certificado de residência fiscal — é válido para um ano fiscal específico'
        ]}
      ]
    },
    {
      id: 'issues',
      title: 'Problemas frequentes',
      content: [
        { kind: 'warning', text: 'Se a morada nas Finanças estiver desactualizada e você se tiver mudado — altere-a primeiro (ver guia «Alteração da morada fiscal»). Caso contrário, a certidão confirmará a morada antiga.' },
        { kind: 'warning', text: 'Para não residentes, o domicílio fiscal na AT é normalmente a morada estrangeira de residência fiscal, e não a portuguesa; por isso, a certidão pode não comprovar a morada efectiva em Portugal. Se for necessário comprovar a morada em Portugal (por exemplo, para um banco), pode usar um atestado de residência da Junta de Freguesia — mas a Junta só o emite mediante confirmação da residência efectiva; a lista de provas depende da freguesia, e convém perguntar antecipadamente ao banco que proof of address aceita.' }
      ]
    }
  ],
  costs: [
    { label: 'Certidão de domicílio fiscal (online)', amountEUR: 0 },
    { label: 'Certidão de residência fiscal (para convenções para evitar a dupla tributação)', amountEUR: 0 }
  ],
  timelineDaysMin: 0,
  timelineDaysMax: 1,
  sources: [
    { title: 'Portal das Finanças — Certidões', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Certidão de residência fiscal', url: 'https://www.gov.pt/servicos/obter-certidao-de-residencia-fiscal', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
