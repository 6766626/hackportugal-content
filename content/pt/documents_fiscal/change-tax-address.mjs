export default {
  editorialVoice: 'hackportugal',
  id: 'change-tax-address',
  categoryId: 'documents_fiscal',
  title: 'Alteração da morada fiscal (domicílio fiscal) nas Finanças',
  tldr: 'A morada fiscal (domicílio fiscal) é um campo obrigatório nas Finanças. De acordo com o art. 19.º LGT (Lei Geral Tributária), a nova morada deve ser comunicada no prazo de 60 dias. A alteração é gratuita. Se tiver Cartão de Cidadão, a morada é alterada através do procedimento CC/ePortugal, com confirmação por código recebido por carta; se tiver apenas NIF, através do Portal das Finanças → Alterar Domicílio Fiscal. IMPORTANTE: a alteração da morada nas Finanças NÃO actualiza automaticamente AIMA, SNS, Segurança Social, banco, carta de condução — deve notificar cada entidade separadamente. Para o IMI, o mais importante é sobretudo o estatuto de habitação própria e permanente; a própria taxa de IMI depende do município onde se situa o imóvel.',
  tags: ['domicílio fiscal', 'morada', 'finanças', 'mudança'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'online',
      title: 'Online — a forma mais rápida',
      content: [
        { kind: 'checklist', items: [
          '💻 Se tiver Cartão de Cidadão: altere a morada através do ePortugal/Cartão de Cidadão; a confirmação é feita com um código recebido por carta. Após a confirmação, a morada é transmitida à AT',
          '💻 Se tiver apenas NIF/autorização de residência sem Cartão de Cidadão: portaldasfinancas.gov.pt → «Os Seus Serviços» → «Dados Pessoais Relevantes» → «Alterar Domicílio Fiscal»',
          '🏠 Introduzir a nova morada (rua, número, código postal, freguesia)',
          '✅ Para alterações apenas na AT, normalmente é aplicada de imediato ou após validação; para CC — após confirmação com o código da carta',
          '📬 Descarregar o comprovativo/certidão no Portal das Finanças e guardar o PDF',
          '🆓 Gratuito'
        ]},
        { kind: 'warning', text: 'A alteração da morada nas Finanças NÃO actualiza automaticamente a morada na AIMA, SNS, Segurança Social, banco ou carta de condução. Deve notificar cada entidade separadamente. No caso do CC, o procedimento pode actualizar parcialmente algumas entidades através da AMA, mas a AIMA e muitos serviços — não.' }
      ]
    },
    {
      id: 'in-person',
      title: 'Presencialmente nas Finanças',
      content: [
        { kind: 'checklist', items: [
          'Só é necessário se o Portal recusar (por exemplo, se a morada não for reconhecida pelos CTT)',
          'Marcação através do Portal → «Agendamento (marcação de atendimento)» → «Alteração de Morada»',
          'Em alguns serviços pode haver atendimento sem marcação, mas não deve contar com isso; é mais seguro marcar com antecedência',
          'Documentos: Cartão de Cidadão / autorização de residência + comprovativo de morada (factura de serviços públicos, contrato de arrendamento)'
        ]}
      ]
    },
    {
      id: 'foreign-address',
      title: 'Morada no estrangeiro (não residentes)',
      content: [
        { kind: 'paragraph', text: 'Se NÃO for residente em Portugal, mas tiver NIF — a morada pode ser estrangeira. A alteração é feita através do mesmo Portal, mas no campo «País» deve seleccionar o seu país.' },
        { kind: 'warning', text: 'Um domicílio fiscal estrangeiro normalmente significa registo na AT como não residente, mas a residência fiscal é determinada pelas regras do art. 16.º CIRS (183+ dias ou habitação que indique habitual residence). Para não residentes, os rendimentos de fonte portuguesa são tributados a taxas especiais: trabalho dependente/independente frequentemente 25% (art. 72), dividendos/juros normalmente 28% de retenção, jurisdições de blacklist — 35%; imóveis — segundo regras próprias. As convenções para evitar a dupla tributação podem alterar as taxas.' },
        { kind: 'warning', text: 'Se a sua morada fiscal estiver fora da UE/EEE, verifique a obrigação de nomear representante fiscal. Em alguns casos, essa obrigação deixa de se aplicar com a adesão às notificações electrónicas, mas para IVA/actividade profissional o representante pode continuar a ser obrigatório.' }
      ]
    },
    {
      id: 'when-change',
      title: 'Quando é obrigatório alterar',
      content: [
        { kind: 'checklist', items: [
          '🏠 Mudança dentro de Portugal (prazo de 60 dias, art. 19.º LGT)',
          '🇵🇹 Mudança para Portugal e cumprimento efectivo dos critérios de residência fiscal (183+ dias ou habitação que indique habitual residence); obter uma autorização de residência, por si só, não equivale a tax residence',
          '✈️ Ao sair de Portugal: actualize o domicílio fiscal na AT no prazo de 60 dias e verifique separadamente se será residente fiscal nesse ano de acordo com o art. 16.º CIRS',
          '🏝️ Mudança para Madeira / Açores — reduções no IRS',
          '💼 Registo de empresa — a morada pode ser diferente da morada de casa'
        ]},
        { kind: 'paragraph', text: 'Casamento/divórcio — não é uma alteração do domicílio fiscal, mas deve verificar os dados pessoais/agregado familiar para efeitos de IRS.' }
      ]
    },
    {
      id: 'confirmation',
      title: 'Certidão de domicílio fiscal — comprovativo',
      content: [
        { kind: 'paragraph', text: 'A certidão confirma a sua morada fiscal actual. Pode ser necessária para o banco, senhorio, contabilista ou entidade pública; os requisitos dependem do procedimento concreto.' },
        { kind: 'checklist', items: [
          'Portal das Finanças → «Certidões» → «Certidão de Domicílio Fiscal»',
          'Imediato, PDF com código QR',
          'Gratuito',
          'Verificação de autenticidade — através do Portal das Finanças → Validar certidão/documento, pelo código ou código QR no PDF'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Alteração de Morada', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei Geral Tributária (LGT) — artigo 19.º, domicílio fiscal', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1998-34541975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do IRS — art. 16.º, 71.º, 72.º (residência, taxas)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Alterar morada do Cartão de Cidadão', url: 'https://eportugal.gov.pt/servicos/alterar-a-morada-do-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
