export default {
  editorialVoice: 'hackportugal',
  id: 'change-tax-address',
  categoryId: 'documents_fiscal',
  title: 'Alteração da morada fiscal (domicílio fiscal) nas Finanças',
  tldr: 'A morada fiscal (domicílio fiscal) é um campo obrigatório nas Finanças. Ao abrigo do art. 19 da LGT (Lei Geral Tributária), a nova morada deve ser comunicada no prazo de 60 dias. A alteração é gratuita e faz-se online em portaldasfinancas.gov.pt em 3 minutos. IMPORTANTE: alterar a morada nas Finanças NÃO actualiza automaticamente a morada na AIMA, SNS, Segurança Social, IRN/Cartão de Cidadão, banco, IMT — é necessário notificar cada entidade separadamente. O domicílio fiscal determina: para onde são enviadas as cartas da AT, a região do IMI e a taxa de IRS (na Madeira/Açores aplicam-se descontos).',
  tags: ['domicílio fiscal', 'morada', 'Finanças', 'mudança'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'online',
      title: 'Online — a forma mais rápida',
      content: [
        { kind: 'checklist', items: [
          '💻 Entrar em portaldasfinancas.gov.pt (palavra-passe ou Chave Móvel Digital)',
          '📂 «Os Seus Serviços» → «Dados Pessoais Relevantes» → «Alterar Morada»',
          '🏠 Introduzir a nova morada (rua, número, código postal, freguesia)',
          '✅ Confirmar — a alteração entra em vigor imediatamente',
          '📬 Receber a confirmação em PDF por e-mail — guardar',
          '🆓 Gratuito'
        ]},
        { kind: 'warning', text: 'Alterar a morada nas Finanças NÃO actualiza automaticamente a morada na AIMA, SNS, Segurança Social, IRN, banco ou carta de condução. Se tiver Cartão de Cidadão — altere separadamente a morada do Cartão de Cidadão através do ePortugal/Loja de Cidadão (isto actualizará várias entidades através da AMA, mas não a AT). Notifique cada entidade separadamente.' }
      ]
    },
    {
      id: 'in-person',
      title: 'Presencialmente nas Finanças',
      content: [
        { kind: 'checklist', items: [
          'Só é necessário se o Portal recusar (por exemplo, a morada não for reconhecida pelos CTT)',
          'Marcação através do Portal → «Agendamento (marcação)» → «Alteração de Morada»',
          'Ou sem marcação em repartições grandes de Lisboa/Porto',
          'Documentos: Cartão de Cidadão / autorização de residência + comprovativo de morada (factura de serviços, contrato de arrendamento)'
        ]}
      ]
    },
    {
      id: 'foreign-address',
      title: 'Morada estrangeira (para não residentes)',
      content: [
        { kind: 'paragraph', text: 'Se NÃO é residente em Portugal, mas tem NIF — a morada pode ser estrangeira. A alteração é feita através do mesmo Portal, mas no campo «País» deve seleccionar o seu país.' },
        { kind: 'warning', text: 'A morada por si só ≠ residência fiscal; o estatuto de residência depende dos critérios efectivos do Código do IRS (183+ dias ou habitação permanente). Para não residentes, os rendimentos de fonte portuguesa são tributados a taxas especiais (Código do IRS art. 71-72): salário/trabalho independente normalmente 25%, dividendos/juros normalmente 28%, imóveis — segundo regras próprias. As convenções para evitar a dupla tributação podem alterar as taxas.' }
      ]
    },
    {
      id: 'when-change',
      title: 'Quando é obrigatório alterar',
      content: [
        { kind: 'checklist', items: [
          '🏠 Mudança de casa dentro de Portugal (prazo de 60 dias)',
          '🇵🇹 Entrada em Portugal e obtenção de autorização de residência (tornar-se residente fiscal)',
          '✈️ Saída de Portugal (tornar-se não residente — ou manter a residência fiscal em Portugal através de 183+ dias)',
          '🏝️ Mudança para a Madeira / Açores — descontos no IRS',
          '💼 Registo de empresa — a morada pode ser diferente da morada de casa',
          '👫 Casamento / divórcio — actualizar o estado civil nas Finanças'
        ]}
      ]
    },
    {
      id: 'confirmation',
      title: 'Certidão de domicílio fiscal — certificado',
      content: [
        { kind: 'paragraph', text: 'O certificado confirma a sua morada fiscal actual. É necessário para bancos, arrendamento e processos de visto.' },
        { kind: 'checklist', items: [
          'Portal das Finanças → «Certidões» → «Certidão de Domicílio Fiscal (certificado de morada fiscal)»',
          'Imediato, PDF com código QR',
          'Gratuito',
          'Verificação através de portaldasfinancas.gov.pt/certidoes'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Alteração de Morada', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei Geral Tributária (LGT) — artigo 19 (domicílio fiscal)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1998-34541975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — artigos 71 e 72 (taxas para não residentes)', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/default.aspx', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Alterar Domicílio Fiscal', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/alterar-o-domicilio-fiscal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}
