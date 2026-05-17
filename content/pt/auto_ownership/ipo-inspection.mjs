export default {
  editorialVoice: 'hackportugal',
  id: 'ipo-inspection',
  categoryId: 'auto_ownership',
  title: 'Inspeção IPO — como, quando e quanto custa',
  tldr: 'A Inspeção Periódica Obrigatória (IPO) é a inspeção técnica obrigatória. Um automóvel ligeiro novo (categoria M1 — ligeiro de passageiros) faz a primeira IPO ao fim de 4 anos, depois de 2 em 2 anos até aos 8 anos e, a partir daí, anualmente. É feita em centros acreditados pelo IMT (Controlauto, SGS, Tecnauto, Strada e outros operadores). Custa cerca de 30-40 € para um automóvel ligeiro. O regime de base é o Decreto-Lei 144/2017; as tabelas tarifárias e a periodicidade são actualizadas periodicamente por Portaria do IMT. Leve consigo: DUA, seguro, documento de identificação do proprietário, carta de condução.',
  tags: ['ipo', 'inspeção', 'imt', 'automóvel'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-framework',
      title: 'Enquadramento legal',
      content: [
        { kind: 'paragraph', text: 'A IPO é regulada pelo Decreto-Lei 144/2017 e pela Portaria 178/2023. A supervisão cabe ao IMT (Instituto da Mobilidade e dos Transportes). Os centros certificados funcionam em regime de concessão, com uma base de dados única do IMT.' }
      ]
    },
    {
      id: 'frequency',
      title: 'Periodicidade da inspeção',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Automóveis ligeiros (categoria B, até 3,5 t)', content: [
            { kind: 'checklist', items: [
              'Novo: primeira IPO 4 anos após a data de matrícula',
              'Dos 4 aos 8 anos: de 2 em 2 anos',
              'Depois dos 8 anos: anualmente',
              'Táxi / aluguer / escola de condução / frota comercial: anualmente, independentemente da idade'
            ]}
          ]},
          { id: 'f2', title: 'Motociclos', content: [
            { kind: 'paragraph', text: 'Primeira IPO ao fim de 4 anos, depois de 2 em 2 anos (independentemente da idade).' }
          ]},
          { id: 'f3', title: 'Veículos pesados > 3,5 t e autocarros', content: [
            { kind: 'paragraph', text: 'Anualmente desde o primeiro ano de utilização.' }
          ]},
          { id: 'f4', title: 'Veículos eléctricos e híbridos', content: [
            { kind: 'paragraph', text: 'Os mesmos prazos. Adicionalmente — verificação do isolamento da cablagem de alta tensão.' }
          ]}
        ]},
        { kind: 'warning', text: 'O prazo da IPO está indicado no autocolante junto ao pára-brisas e no Portal das Contra-Ordenações (IMT). O atraso dá lugar a coima de 250–1250 €.' }
      ]
    },
    {
      id: 'how-to-book',
      title: 'Como marcar',
      content: [
        { kind: 'checklist', items: [
          '💻 Sites dos centros (Controlauto, SGS, Riberalves, Tecnauto, Auto-Inspeção) — marcação 7/7',
          '📞 Nos centros maiores, muitas vezes é possível fazer sem marcação, com 15–30 min de espera',
          '🗓️ Pode marcar até 3 meses antes do fim do prazo anterior',
          '📍 Restrição — apenas em Portugal; pode escolher qualquer centro'
        ]},
        { kind: 'paragraph', text: 'A lista de todos os centros acreditados é publicada pelo IMT no seu site, na secção «Inspeção Técnica de Veículos».' }
      ]
    },
    {
      id: 'documents',
      title: 'O que levar consigo',
      content: [
        { kind: 'checklist', items: [
          '📄 DUA (Documento Único Automóvel) — documento do veículo',
          '📄 Certificado de Matrícula (se os documentos forem do modelo antigo)',
          '📄 Apólice de seguro válida (seguro automóvel obrigatório)',
          '🆔 Cartão de Cidadão do proprietário (ou autorização de residência + passaporte)',
          '🚗 Automóvel com cintos, travões e luzes a funcionar',
          '⚠️ Triângulo de sinalização, colete reflector, kit de primeiros socorros',
          '🔧 Pneus com menos de 10 anos, piso mínimo de 1,6 mm'
        ]},
        { kind: 'warning', text: 'Se os documentos estiverem em nome de uma pessoa colectiva — procuração da empresa com carimbo.' }
      ]
    },
    {
      id: 'the-process',
      title: 'Processo da inspeção',
      content: [
        { kind: 'paragraph', text: 'Demora 25–40 minutos. Verificam:' },
        { kind: 'checklist', items: [
          '🔦 Iluminação (faróis, luzes de presença, indicadores de mudança de direcção, luzes de travão)',
          '🛑 Sistema de travagem (banco de ensaio)',
          '🚨 Amortecimento (banco de ensaio)',
          '🛞 Pneus / profundidade do piso',
          '📋 Números do chassis e do motor são comparados com o DUA',
          '💨 Emissões de CO2 (sonda no escape)',
          '🪞 Espelhos, limpa-pára-brisas',
          '🎯 Geometria das luzes («alinhamento de faróis»)',
          '🪑 Cintos de segurança e airbags',
          '🔋 ABS / ESP / electrónica (diagnóstico OBD)'
        ]}
      ]
    },
    {
      id: 'results',
      title: 'Resultado e o que fazer se for reprovado',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Aprovado (verde)', content: [
            { kind: 'paragraph', text: 'Recebe um novo selo e o DUA actualizado. Tudo fica automaticamente registado no IMT.' }
          ]},
          { id: 'r2', title: 'Aprovado com Deficiências Ligeiras (laranja)', content: [
            { kind: 'paragraph', text: 'Passou, mas são necessárias pequenas correcções — ficam registadas no relatório. Não é necessário reinspeccionar; deve corrigir até à próxima IPO.' }
          ]},
          { id: 'r3', title: 'Reprovado (vermelho)', content: [
            { kind: 'checklist', items: [
              'Não pode circular de imediato (se houver defeitos críticos) ou até à reparação (se não forem críticos)',
              'Prazo para reinspecção — 30 dias no MESMO centro, a preço reduzido',
              'Após 30 dias — IPO completa de novo',
              'Se voltar a não passar no prazo de 30 dias + 7 — o IMT aplica uma coima'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IPO para automóvel ligeiro (categoria B)', amountEURMin: 30, amountEURMax: 40 },
    { label: 'Motociclo', amountEURMin: 20, amountEURMax: 28 },
    { label: 'IPO repetida (reinspecção)', amountEURMin: 12, amountEURMax: 18 },
    { label: 'Coima por atraso na IPO', amountEURMin: 250, amountEURMax: 1250 }
  ],
  sources: [
    { title: 'IMT — Inspeção Técnica de Veículos', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Veiculos/Pages/Inspeccao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei n.º 144/2017 — Regime de inspeção técnica', url: 'https://dre.pt/dre/detalhe/decreto-lei/144-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria n.º 178/2023 — tarifas e periodicidade', url: 'https://dre.pt/dre/detalhe/portaria/178-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Fazer a inspeção periódica do veículo', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/realizar-a-inspecao-periodica-ao-veiculo-ipo-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
