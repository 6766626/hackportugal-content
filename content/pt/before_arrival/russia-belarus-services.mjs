export default {
  editorialVoice: 'hackportugal',
  id: 'russia-belarus-services',
  categoryId: 'before_arrival',
  title: 'Serviços consulares para a Federação Russa/Bielorrússia — apostilas, procurações, certificados',
  tldr: 'Após Fevereiro de 2022, as ligações directas com a Federação Russa/Bielorrússia tornaram-se mais difíceis: não há voos directos, o SWIFT está limitado. Os consulados funcionam: apostila do certificado de registo criminal através dos «Gosuslugi» + envio por courier, procurações — através do consulado em Lisboa para cidadãos em Portugal, cancelamento remoto de registo — através do MFC + notário com assinatura eIDAS. A maioria dos procedimentos demora 2–6 semanas, contra 3–5 dias antes de 2022.',
  audience: { countryCodes: ['RU', 'BY'] },
  tags: ['apostila', 'procuração', 'federação russa', 'bielorrússia', 'consulado'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'consular-info',
      title: 'Consulados em Portugal',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Consulado da Federação Russa em Lisboa', content: [
            { kind: 'checklist', items: [
              'Morada: Rua Visconde de Santarém, 57, 1000-286 Lisboa',
              'Marcação: lisbon.mid.ru (online)',
              'Horário: seg–sex 09:00–13:00 (apenas com marcação)',
              'Tel.: +351 21 846 2424',
              'Serviços: passaporte interno (renovação), passaporte internacional, actos notariais, certificados'
            ]}
          ]},
          { id: 'c2', title: 'Consulado da Bielorrússia em Lisboa', content: [
            { kind: 'paragraph', text: 'Não existe. O mais próximo fica em Madrid (Espanha). Serviços: por correio ou deslocação a Madrid.' }
          ]},
          { id: 'c3', title: 'Embaixada da Federação Russa em Lisboa', content: [
            { kind: 'paragraph', text: 'Encerra frequentemente. Verifique o estado antes da visita. O atendimento a cidadãos é feito através da secção consular.' }
          ]}
        ]}
      ]
    },
    {
      id: 'apostille',
      title: 'Apostila do certificado de registo criminal',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Federação Russa: através dos Gosuslugi + embaixada em Portugal', content: [
            { kind: 'checklist', items: [
              '🇷🇺 «Gosuslugi.ru» → «Certificado de registo criminal» — pedido online gratuito',
              '📅 Fica pronto em 10 dias úteis',
              '🖨️ Imprimir no MFC mais próximo ou enviar a um familiar na Federação Russa',
              '🏛️ Apostila — Ministério do Interior da Federação Russa, através do MFC 5 dias úteis, 2 500 RUB',
              '📦 Por courier (EMS ou DHL) para Lisboa: 2–3 semanas',
              '💶 Total 30–80 € + tempo'
            ]},
            { kind: 'paragraph', text: 'Alternativa: através da embaixada de Portugal em Moscovo. Emitem um certificado de registo criminal das bases centrais de Portugal, mas para um cidadão da Federação Russa também é necessário o certificado russo.' }
          ]},
          { id: 'a2', title: 'Federação Russa: através do consulado em Lisboa', content: [
            { kind: 'paragraph', text: 'O Consulado da Federação Russa em Lisboa pode SOLICITAR ao Ministério do Interior da Federação Russa um certificado em nome de um cidadão que viva em Portugal. Prazo 60–120 dias. Pago — ~80 €. Nem sempre funciona; confirme por telefone.' }
          ]},
          { id: 'a3', title: 'Bielorrússia: através da embaixada em Madrid', content: [
            { kind: 'paragraph', text: 'Pedido online através de posolbel.es ou visita presencial. Apostila no Ministério dos Negócios Estrangeiros da Bielorrússia (através de pessoa mandatada). Mínimo 1 mês.' }
          ]}
        ]}
      ]
    },
    {
      id: 'diploma-apostille',
      title: 'Apostila de diploma / documentos de educação',
      content: [
        { kind: 'checklist', items: [
          '🎓 Federação Russa: diploma → Rosobrnadzor → apostila → MFC em Moscovo',
          '🎓 Exige o original do diploma ou duplicado notarial',
          '🎓 Através de procuração — um familiar na Federação Russa pode tratar por si',
          '⏰ Prazo 10–30 dias',
          '💶 Taxa estatal 2500 RUB (~25 €) + serviços ~50–100 €',
          '🔄 Depois — reconhecimento em Portugal (DGES), ver guia sobre reconhecimento'
        ]},
        { kind: 'warning', text: 'Bielorrússia: a apostila do Ministério da Educação exige presença física ou procuração geral. Sem isso — é impossível.' }
      ]
    },
    {
      id: 'power-of-attorney',
      title: 'Procuração para actos na Federação Russa/Bielorrússia a partir de Portugal',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Opção A. Consulado da Federação Russa em Lisboa', content: [
            { kind: 'checklist', items: [
              'Procuração notarial clássica no território de Portugal',
              'Marcação online: lisbon.mid.ru',
              'Documentos: passaporte internacional, minuta da procuração em russo',
              'Custo: 40–80 €',
              'Aceite na Federação Russa sem legalização adicional'
            ]}
          ]},
          { id: 'p2', title: 'Opção B. Notário português + apostila + tradução', content: [
            { kind: 'checklist', items: [
              'Um notário português prepara a procuração',
              'Apostila ao abrigo da Convenção de Haia no Ministério da Justiça de Portugal',
              'Tradução juramentada para russo',
              'Envio por courier para a Federação Russa',
              'Custo: 100–200 €',
              'Prazo: 2–4 semanas',
              'Adequado se você NÃO for cidadão da Federação Russa'
            ]}
          ]},
          { id: 'p3', title: 'Opção C. Procuração digital através dos Gosuslugi', content: [
            { kind: 'paragraph', text: 'Desde 2023, existe um serviço de notário remoto — videochamada com ESIA. Apenas para cidadãos da Federação Russa com conta activa. Custo 2 000–5 000 RUB. Aceite para a maioria dos actos.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tax-residence-cert',
      title: 'Certificado de residência fiscal da Federação Russa',
      content: [
        { kind: 'paragraph', text: 'É necessário para o IRS em Portugal, se houver rendimentos da Federação Russa, ou para reembolso de 30 % de imposto retido na Federação Russa. Pedido através da «Área do contribuinte» em nalog.ru → «Certificado de estatuto de residente da Federação Russa».' },
        { kind: 'checklist', items: [
          'Online através do Serviço Fiscal Federal',
          '40 dias úteis',
          'Gratuito',
          'Emitido em inglês',
          'Para Portugal — não são necessários apostila + tradução (Convenção de Haia + acordo)'
        ]}
      ]
    },
    {
      id: 'remote-deregistration',
      title: 'Cancelamento remoto de registo / encerramento de empresário em nome individual na Federação Russa',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Cancelamento do registo de residência (remoção do registo)', content: [
            { kind: 'checklist', items: [
              'Opção 1: Gosuslugi → «Cancelamento do registo» → através da área pessoal',
              'Opção 2: procuração para familiar através do consulado ou eIDAS → MFC',
              '10 dias úteis',
              'Importante: o passaporte internacional mantém-se totalmente válido; no entanto, perde o registo de residência'
            ]}
          ]},
          { id: 'r2', title: 'Encerramento de empresário em nome individual', content: [
            { kind: 'checklist', items: [
              'Gosuslugi → «Serviço Fiscal Federal: encerramento de empresário em nome individual» → online',
              'Custo 160 RUB',
              '5 dias úteis',
              'Liquidar dívidas de contribuições + impostos antes do encerramento',
              'Encerrar a caixa registadora (se existia) + contas',
              'Declaração ao Serviço Fiscal Federal até ao dia 15 do mês seguinte'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Apostila de certificado da Federação Russa + courier', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Procuração através do consulado da Federação Russa', amountEURMin: 40, amountEURMax: 80 },
    { label: 'Procuração através de notário português + apostila + tradução', amountEURMin: 100, amountEURMax: 200 },
    { label: 'Apostila de diploma da Federação Russa + serviços', amountEURMin: 75, amountEURMax: 125 }
  ],
  sources: [
    { title: 'Consulado da Federação Russa em Lisboa', url: 'https://lisbon.mid.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' },
    { title: 'Convenção de Haia — Apostila', url: 'https://www.hcch.net/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Ministério da Justiça PT — Apostila', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGES — Reconhecimento de habilitações estrangeiras', url: 'https://www.dges.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
