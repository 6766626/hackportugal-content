export default {
  editorialVoice: 'hackportugal',
  id: 'nif-third-country',
  categoryId: 'documents_fiscal',
  title: 'Como obter o NIF — cidadãos de países terceiros',
  tldr: 'NIF (Número de Identificação Fiscal) — número fiscal português, necessário para tudo: arrendamento, banco, SIM, SNS. Desde 2022 (Ofício Circulado 90054/2022), o simples facto de um não residente com morada fora da UE/EEE obter um NIF nem sempre exige representante fiscal — a obrigação surge quando existe ligação fiscal a Portugal (rendimento, imóvel, automóvel, actividade).\n\nGratuito presencialmente nas Finanças ou 70–150 € através de representante online (intervalo de mercado em 2026).',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['nif', 'documentos', 'impostos', 'primeiros passos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is',
      title: 'O que é o NIF e para que serve',
      content: [
        { kind: 'paragraph', text: 'Número fiscal de 9 dígitos. É emitido pela Autoridade Tributária e Aduaneira (AT). Sem NIF não é possível: arrendar uma casa com contrato de longa duração, abrir conta num banco português, assinar contrato de trabalho, comprar um SIM com contrato, inscrever-se no SNS, comprar automóvel ou imóvel.' },
        { kind: 'warning', text: 'Não confundir com o NISS (número da Segurança Social) — é um número separado da Segurança Social, necessário para trabalhar e para prestações sociais.' },
        { kind: 'paragraph', text: 'autorização de residência ≠ residência fiscal. Obter o cartão de residente, por si só, não faz de si residente fiscal nem altera a sua morada fiscal na AT — isso deve ser feito separadamente.' }
      ]
    },
    {
      id: 'variant-in-portugal',
      title: 'Opção A. Presencialmente nas Finanças (se já estiver em Portugal)',
      audience: { statuses: ['visiting', 'newlyArrived', 'resident'] },
      content: [
        { kind: 'paragraph', text: 'Se for pessoalmente às Finanças, deve estar legalmente em Portugal: com visto, ao abrigo do regime de isenção de visto ou com autorização de residência válida de outro país Schengen (quando aplicável).' },
        { kind: 'checklist', items: [
          'Passaporte (original + cópia)',
          'Para morada fiscal estrangeira — comprovativo de morada do país de residência (factura, extracto bancário com menos de 3 meses). É melhor indicar uma morada portuguesa apenas quando existir base real: contrato de arrendamento, atestado de residência, facturas de serviços. Um voucher de hotel normalmente não serve para morada fiscal',
          'Se a sua morada fiscal for fora da UE/EEE e surgir uma ligação fiscal a Portugal (rendimento/imóvel/automóvel/actividade) — em regra, é necessário nomear um fiscal representative com domicílio fiscal em Portugal. Uma alternativa para muitas pessoas singulares é aderir às notificações/citações electrónicas no Portal das Finanças/Caixa Postal Eletrónica; para IVA/actividade profissional e alguns casos específicos, o representante continua a ser obrigatório'
        ]},
        { kind: 'paragraph', text: 'Como conseguir atendimento: site das Finanças → "Agendamentos" → atendimento presencial → escolher o serviço "Atribuição de Número de Contribuinte". Em algumas repartições pode haver fila sem marcação, mas o atendimento sem agendamento não é garantido; é melhor marcar ou confirmar no serviço de finanças específico.' },
        { kind: 'timeline', text: 'Recebe o NIF no dia da visita (imprimem a confirmação com o Número de Identificação Fiscal).' },
        { kind: 'cost', items: [{ label: 'Taxa das Finanças', amountEUR: 0 }] }
      ]
    },
    {
      id: 'variant-remote',
      title: 'Opção B. À distância através de representante',
      content: [
        { kind: 'paragraph', text: 'Se ainda não estiver em Portugal ou não quiser deslocar-se e esperar em fila — contrata um representante fiscal (advogado/empresa).\n\nPode retirar o representante depois de alterar a morada fiscal para uma morada portuguesa (normalmente depois da mudança e da obtenção da autorização de residência) — mas isto faz-se através da alteração de morada no Portal das Finanças, e não automaticamente ao obter a autorização de residência.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Escolher representante', content: [
            { kind: 'paragraph', text: 'O representante é uma pessoa singular ou colectiva com domicílio fiscal em Portugal. Opções: advogado português (Ordem dos Advogados — portal.oa.pt), solicitador, contabilista certificado ou empresa/prestador de serviços. Verifique o contrato, os poderes, o preço de renovação e quem será exactamente o fiscal representative; não existe uma certificação estatal universal especial para “empresas de NIF”. Para actividade com IVA podem aplicar-se requisitos adicionais.' }
          ]},
          { id: 's2', title: '2. Enviar os documentos', content: [
            { kind: 'checklist', items: ['Digitalização do passaporte', 'Comprovativo de morada dos últimos 3 meses (factura, extracto bancário)', 'Procuração assinada — o representante normalmente envia um modelo'] }
          ]},
          { id: 's3', title: '3. Receber o NIF por e-mail', content: [
            { kind: 'timeline', text: 'Normalmente 5–15 dias úteis.' }
          ]}
        ]},
        { kind: 'cost', items: [{ label: 'Representante', amountEURMin: 70, amountEURMax: 150, note: 'pagamento único, muitas vezes inclui 1 alteração de morada' }] }
      ]
    },
    {
      id: 'after',
      title: 'Depois de obter o NIF',
      content: [
        { kind: 'checklist', items: [
          'Activar a palavra-passe do Portal das Finanças (ver guia "Obter a palavra-passe das Finanças")',
          'Verificar se a morada está registada correctamente (importante para a correspondência fiscal)',
          'Verificar o estatuto de residente/não residente na AT e a existência de representante fiscal — actualizar se necessário',
          'Guardar o comprovativo do NIF (impressão do Número de Identificação Fiscal)'
        ]},
        { kind: 'warning', text: 'Se se tornou efectivamente residente fiscal em Portugal (183+ dias ou habitação permanente), altere separadamente a morada fiscal para uma morada portuguesa. Enquanto na AT constar uma morada estrangeira/estatuto de não residente, o empregador português retém IRS como para não residente — para employment income, normalmente a taxa é de 25% (Código do IRS art. 72; retenção na fonte — segundo as regras de retenção na fonte).' }
      ]
    }
  ],
  documents: [
    { title: 'Passaporte', note: 'original + cópia de todas as páginas preenchidas' },
    { title: 'Comprovativo de morada', note: 'factura de serviços / extracto bancário com menos de 3 meses' },
    { title: 'Procuração', note: 'apenas para a opção com representante' }
  ],
  costs: [
    { label: 'Taxa administrativa das Finanças', amountEUR: 0 },
    { label: 'Através de representante (online)', amountEURMin: 70, amountEURMax: 150 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 15,
  sources: [
    { title: 'Autoridade Tributária — Ofício Circulado n.º 90054/2022 (representante fiscal)', url: 'https://info.portaldasfinancas.gov.pt/pt/atualidades/instrucoesadmin/Paginas/Oficio_Circulado_90054_2022.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Pedir NIF para pessoa singular', url: 'https://eportugal.gov.pt/servicos/pedir-o-numero-de-identificacao-fiscal-nif-para-pessoa-singular', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do IRS — domicílio fiscal e tributação de não residentes', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/default.aspx', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
