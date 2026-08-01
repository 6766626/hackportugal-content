export default {
  editorialVoice: 'hackportugal',
  id: 'certidao-domicilio-fiscal',
  categoryId: 'documents_fiscal',
  title: 'Certidão de domicílio fiscal — comprovativo da morada fiscal',
  tldr: 'A Certidão de domicílio fiscal é uma certidão oficial da Autoridade Tributária que confirma a sua morada fiscal em Portugal. O principal cenário para imigrantes: comprovar a morada junto da AIMA na concessão/renovação da autorização de residência quando o seu nome NÃO consta do contrato de arrendamento — pelas regras da AIMA de 29.11.2025, nesse caso é necessária esta certidão com menos de 30 dias no dia do atendimento + uma declaração pessoal sob compromisso de honra (a AIMA já não aceita atestados da junta). Também é necessária para: pedido de nacionalidade, abertura de conta bancária, registo de veículo. Importante: a certidão confirma a morada registada nas Finanças — se estiver desatualizada, atualize-a primeiro. Não confundir: para a residência fiscal ao abrigo de uma DTT é necessária uma Certidão de Residência Fiscal separada. Gratuita, descarregada online através do Portal das Finanças em 2 minutos.',
  tags: ['certidão', 'morada', 'finanças'],
  estimatedReadMinutes: 3,
  recentlyChangedAt: '2026-08-01',
  changeSummary: '🆕 Adicionado o principal cenário AIMA (regras de 29.11.2025): se não constar do contrato de arrendamento, para a concessão/renovação da autorização de residência é necessária esta certidão com menos de 30 dias no dia do atendimento + declaração sob compromisso de honra (n.º do registo predial, fundamento, nome e NIF do proprietário). A AIMA não aceita atestados da junta. A morada nas Finanças deve coincidir com a declarada à AIMA.',
  steps: [
    {
      id: 'what-for',
      title: 'Para que serve',
      content: [
        { kind: 'checklist', items: [
          'Pedido de nacionalidade portuguesa — o IRN por vezes solicita',
          'Abertura de conta bancária, se não houver outro comprovativo de morada',
          'Registo de veículo no IMT — comprovativo da morada do proprietário',
          '🛂 AIMA — concessão/renovação da autorização de residência quando NÃO consta do contrato de arrendamento/comodato (regra de 29.11.2025): no dia do atendimento — esta certidão com menos de 30 dias + declaração pessoal sob compromisso de honra (n.º de registo do imóvel, fundamento da residência, nome e NIF do proprietário)',
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
          '🛂 Para a AIMA (comprovativo de alojamento quando não consta do contrato) — estritamente com menos de 30 dias no dia do atendimento; para o IRN, normalmente basta com menos de 3 meses',
          'Se a morada mudou — peça uma nova, a antiga deixa de ser válida',
          'Para a certidão de residência fiscal — é válida para um ano fiscal específico'
        ]}
      ]
    },
    {
      id: 'issues',
      title: 'Problemas frequentes',
      content: [
        { kind: 'warning', text: 'Se a morada nas Finanças estiver desactualizada e você se tiver mudado — altere-a primeiro (ver guia «Alteração da morada fiscal»). Caso contrário, a certidão confirmará a morada antiga. Para a AIMA isto é crítico: a certidão só funciona se a morada fiscal coincidir com a morada que declara à AIMA — atualize a morada nas Finanças ANTES de pedir a certidão.' },
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
    { title: 'ePortugal — Certidão de residência fiscal', url: 'https://www.gov.pt/servicos/obter-certidao-de-residencia-fiscal', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AIMA — Comprovativo de Alojamento: Concessão e Renovação de Autorização de Residência (29.11.2025)', url: 'https://aima.gov.pt/pt/noticias/hklkjl', kind: 'official', language: 'pt', lastRetrieved: '2026-08-01' }
  ],
  lastVerified: '2026-08-01',
  verifyIntervalDays: 365
}
