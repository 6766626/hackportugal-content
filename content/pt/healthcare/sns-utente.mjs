export default {
  editorialVoice: 'hackportugal',
  id: 'sns-utente',
  categoryId: 'healthcare',
  title: 'Registo no SNS e obtenção do número de utente',
  tldr: 'O número de utente é um número pessoal no SNS. Dá direito a entrar na lista para médico de família, a internamento, receitas comparticipadas. É tratado no Centro de Saúde / USF da área de residência. Normalmente são necessários passaporte/ID, NIF, documento de permanência legal (autorização de residência, visto, certificado de registo UE) ou, se não houver autorização de residência, atestado da Junta de Freguesia que confirme expressamente a residência em Portugal há mais de 90 dias (Despacho n.º 25360/2001). O NISS normalmente não é exigido para o número de utente. Este número ≠ NIF: para cuidados de saúde é necessário especificamente o número de utente.',
  tags: ['sns', 'utente', 'saúde'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what',
      title: 'O que é e para que serve',
      content: [
        { kind: 'paragraph', text: 'O número de utente é um identificador de 9 dígitos no SNS. Sem ele, é mais difícil marcar consultas no SNS e obter receitas comparticipadas; alguns serviços programados podem ser cobrados segundo as tabelas do SNS para pessoas sem direito ao SNS confirmado. A assistência de urgência e os casos protegidos estão disponíveis independentemente do número.' },
        { kind: 'paragraph', text: 'Dá acesso ao SNS e à inscrição na lista para médico de família (o médico em si nem sempre é atribuído de imediato; em algumas regiões pode ficar muito tempo sem médico de família), consultas, análises, internamento, comparticipações na farmácia (até 90% de desconto em receitas), vacinas do PNV. A linha 112 pode ser chamada por todas as pessoas que se encontrem em Portugal, independentemente de terem utente — o número ajuda no acompanhamento posterior e na cobrança/comparticipações.' }
      ]
    },
    {
      id: 'how',
      title: 'Como obter',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Encontrar o seu Centro de Saúde', content: [
            { kind: 'paragraph', text: 'Em sns24.gov.pt ou sns.pt, através do código postal.' }
          ]},
          { id: 's2', title: '2. Comparecer presencialmente com os documentos', content: [
            { kind: 'checklist', items: ['ID/passaporte + documento de estatuto: cartão de residência/autorização de residência, Cartão de Cidadão, certificado de registo cidadão UE, visto válido/comprovativo de permanência legal; se não houver autorização de residência — atestado da Junta de Freguesia sobre residência há mais de 90 dias', 'NIF', 'Comprovativo de morada (atestado, factura de serviços ou contrato de arrendamento)', '⚠️ O NISS normalmente NÃO é necessário para o número de utente. Se já o tiver — pode levá-lo consigo; uma recusa apenas por falta de NISS deve ser contestada, pedindo o fundamento por escrito'] }
          ]},
          { id: 's3', title: '3. Preencher o formulário de inscrição', content: [
            { kind: 'paragraph', text: 'O Centro de Saúde irá registá-lo e atribuir-lhe o número de utente. Por vezes emitem um número temporário, e o definitivo chega mais tarde.' }
          ]},
          { id: 's4', title: '4. Obter médico de família', content: [
            { kind: 'timeline', text: 'O número de utente em si é normalmente emitido no dia do atendimento ou no prazo de 1–14 dias. A atribuição de médico de família é uma etapa separada: pode ser imediata ou demorar muitos meses, consoante a região. Em Lisboa/Porto a lista de espera é maior; nas zonas do interior costuma ser mais rápido.' }
          ]}
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'Se ainda não tiver autorização de residência',
      content: [
        { kind: 'paragraph', text: 'Estrangeiros sem autorização de residência também podem obter acesso ao SNS, mas normalmente é exigido um atestado da Junta de Freguesia que indique expressamente que reside em Portugal há mais de 90 dias (Despacho n.º 25360/2001). Muitas vezes a Junta pede duas testemunhas residentes na freguesia ou outros comprovativos de morada. Sem essa confirmação, estão garantidas a assistência de urgência e algumas situações protegidas; os cuidados programados podem ser facturados segundo as tabelas do SNS.' },
        { kind: 'warning', text: 'A assistência de urgência é prestada independentemente dos documentos. Além disso, grávidas, menores, vacinação, doenças infecciosas/ameaças à saúde pública, planeamento familiar e algumas outras situações protegidas têm um regime especial de acesso. Na prática, ainda assim peça o número de utente provisório e o fundamento por escrito em caso de recusa.' }
      ]
    },
    {
      id: 'private',
      title: 'Em paralelo: seguro de saúde privado',
      content: [
        { kind: 'paragraph', text: 'SNS + seguro de saúde privado é uma prática normal. Opções populares: Médis, Multicare (Fidelidade), Tranquilidade. Desde 25 €/mês por um plano básico até 80 €/mês por um plano completo. Cobre clínicas privadas e reduz as filas de espera.' }
      ]
    }
  ],
  documents: [
    { title: 'Documento de identificação + estatuto', note: 'Autorização de residência / CC / passaporte + visto ou certificado de registo UE; sem autorização de residência — atestado da Junta de Freguesia sobre residência >90 dias' },
    { title: 'NIF' },
    { title: 'Comprovativo de morada', note: 'Atestado de Residência, contrato de arrendamento ou factura de serviços' },
    { title: 'NISS — não obrigatório', note: 'não é necessário para o número de utente, mas pode levá-lo se já o tiver' }
  ],
  costs: [{ label: 'Registo no SNS', amountEUR: 0 }],
  timelineDaysMin: 1,
  timelineDaysMax: 14,
  sources: [
    { title: 'SNS — Portal Oficial', url: 'https://www.sns.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Despacho n.º 25360/2001 — acesso de cidadãos estrangeiros ao SNS', url: 'https://diariodarepublica.pt/dr/detalhe/despacho/25360-2001-3043226', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS24 — Portal Cidadão', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Pedir o número de utente do SNS', url: 'https://eportugal.gov.pt/servicos/pedir-o-numero-de-utente-do-sns', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
