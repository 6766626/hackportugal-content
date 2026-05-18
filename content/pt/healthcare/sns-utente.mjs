export default {
  editorialVoice: 'hackportugal',
  id: 'sns-utente',
  categoryId: 'healthcare',
  title: 'Registo no SNS e obtenção do número de utente',
  tldr: 'Número de utente — número pessoal no SNS. Dá direito a inscrever-se na lista para médico de família, a hospitalização e a receitas comparticipadas. É pedido no Centro de Saúde / USF da área de residência. Normalmente são necessários passaporte/ID, NIF, documento de permanência legal (autorização de residência, visto, certificado de registo UE) ou, se ainda não tiver autorização de residência, atestado da Junta de Freguesia que confirme expressamente a residência em Portugal há mais de 90 dias (Despacho n.º 25360/2001). O NISS normalmente não é necessário para o número de utente. Este número ≠ NIF: para cuidados de saúde é mesmo necessário o número de utente.',
  tags: ['sns', 'utente', 'saúde'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what',
      title: 'O que é e para que serve',
      content: [
        { kind: 'paragraph', text: 'Número de utente — identificador de 9 dígitos no SNS. Sem ele é mais difícil marcar consultas no SNS e obter receitas comparticipadas; alguns serviços programados podem ser cobrados segundo as tabelas do SNS para pessoas sem direito ao SNS confirmado. O atendimento de urgência e os casos protegidos estão disponíveis independentemente do número.' },
        { kind: 'paragraph', text: 'Dá acesso ao SNS e à inscrição na lista para médico de família (o médico nem sempre é atribuído de imediato; em várias regiões é possível ficar muito tempo sem médico de família), consultas, análises, hospitalização, comparticipações na farmácia (até 90% de desconto em receitas), vacinas do PNV. Todas as pessoas que se encontrem em Portugal podem ligar para o 112 independentemente de terem número de utente — o número ajuda no registo posterior e na cobrança/comparticipações.' }
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
            { kind: 'checklist', items: ['ID/passaporte + documento de estatuto: cartão de residência/autorização de residência, cartão de cidadão, certificado de registo cidadão UE, visto válido/prova de permanência legal; se não tiver autorização de residência — atestado da Junta de Freguesia sobre residência há mais de 90 dias', 'NIF', 'Comprovativo de morada (atestado, conta de serviços ou contrato de arrendamento)', '⚠️ O NISS normalmente NÃO é necessário para o número de utente. Se o tiver — pode levá-lo consigo; uma recusa apenas por falta de NISS deve ser contestada, pedindo a fundamentação por escrito'] }
          ]},
          { id: 's3', title: '3. Preencher o formulário de registo', content: [
            { kind: 'paragraph', text: 'O Centro de Saúde fará o seu registo e atribuirá o número de utente. Por vezes é emitido um número temporário, chegando o definitivo mais tarde.' }
          ]},
          { id: 's4', title: '4. Obter médico de família', content: [
            { kind: 'timeline', text: 'O número de utente em si é normalmente emitido no dia do pedido ou no prazo de 1–14 dias. A atribuição de médico de família é uma etapa separada: pode acontecer de imediato ou demorar muitos meses, dependendo da região. Em Lisboa/Porto a lista de espera é maior; nas zonas menos urbanas tende a ser mais rápido.' }
          ]}
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'Se ainda não tiver autorização de residência',
      content: [
        { kind: 'paragraph', text: 'Estrangeiros sem autorização de residência também podem obter acesso ao SNS, mas normalmente é exigido um atestado da Junta de Freguesia que indique expressamente que reside em Portugal há mais de 90 dias (Despacho n.º 25360/2001).\n\nFrequentemente a Junta pede duas testemunhas residentes na freguesia ou outras provas de morada. Sem essa confirmação, estão garantidos o atendimento de urgência e alguns casos protegidos específicos; os cuidados programados podem ser facturados segundo as tabelas do SNS.' },
        { kind: 'warning', text: 'O atendimento de urgência é prestado independentemente dos documentos. Além disso, grávidas, menores, vacinação, doenças infecciosas/ameaças à saúde pública, planeamento familiar e algumas outras situações protegidas têm um regime especial de acesso.\n\nNa prática, peça ainda assim um número de utente provisório e a fundamentação por escrito em caso de recusa.' }
      ]
    },
    {
      id: 'private',
      title: 'Em paralelo: seguro de saúde privado',
      content: [
        { kind: 'paragraph', text: 'SNS + seguro de saúde privado é uma prática normal. Opções populares: Médis, Multicare (Fidelidade), Tranquilidade. Desde 25 €/mês por um plano básico até 80 €/mês por um plano completo. Cobre clínicas privadas e reduz tempos de espera.' }
      ]
    }
  ],
  documents: [
    { title: 'Documento de identificação + estatuto', note: 'Autorização de residência / CC / passaporte + visto ou certificado de registo UE; sem autorização de residência — atestado da Junta de Freguesia sobre residência >90 dias' },
    { title: 'NIF' },
    { title: 'Comprovativo de morada', note: 'Atestado de Residência, contrato de arrendamento ou conta de serviços' },
    { title: 'NISS — não obrigatório', note: 'não é necessário para o número de utente, mas pode levá-lo se já o tiver' }
  ],
  costs: [{ label: 'Registo no SNS', amountEUR: 0 }],
  timelineDaysMin: 1,
  timelineDaysMax: 14,
  sources: [
    { title: 'SNS — Portal Oficial', url: 'https://www.sns.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Despacho n.º 25360/2001 — acesso de cidadãos estrangeiros ao SNS', url: 'https://diariodarepublica.pt/dr/detalhe/despacho/25360-2001-3043226', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS24 — Portal do Cidadão', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Pedir o número de utente do SNS', url: 'https://eportugal.gov.pt/servicos/pedir-o-numero-de-utente-do-sns', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
