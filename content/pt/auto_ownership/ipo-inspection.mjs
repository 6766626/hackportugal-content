export default {
  editorialVoice: 'hackportugal',
  id: 'ipo-inspection',
  categoryId: 'auto_ownership',
  title: 'Inspeção IPO — como, quando e quanto custa',
  tldr: 'Inspeção Periódica Obrigatória (IPO) — inspeção técnica obrigatória. Um automóvel ligeiro novo (categoria M1 — veículo ligeiro de passageiros) — primeiro IPO após 4 anos, depois de 2 em 2 anos até aos 8 anos, e depois anualmente. É feita em centros acreditados pelo IMT (Controlauto, SGS, Tecnauto, Strada e outros operadores). Custa cerca de 30-40 € para um automóvel ligeiro. O regime de base é o Decreto-Lei 144/2017; as tabelas de tarifas e a periodicidade são actualizadas periodicamente por Portaria IMT. Levar consigo: DUA, seguro, documento de identificação do proprietário, carta de condução.',
  tags: ['ipo', 'inspeção', 'imt', 'automóvel'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-framework',
      title: 'Enquadramento legal',
      content: [
        { kind: 'paragraph', text: 'O IPO é regulado pelo Decreto-Lei (decreto-lei) 144/2017 e pela Portaria 178/2023. A supervisão cabe ao IMT (Instituto da Mobilidade e dos Transportes). Os centros certificados funcionam por concessão, com uma base de dados única do IMT.' }
      ]
    },
    {
      id: 'frequency',
      title: 'Periodicidade da inspeção',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Ligeiros de passageiros (categoria do veículo M1, até 3,5 t)', content: [
            { kind: 'checklist', items: [
              'NB: «categoria M1» é a categoria do veículo segundo o DL 16/2010; não confundir com a «categoria B» da carta de condução',
              'Novo: primeiro IPO 4 anos após a data de matrícula',
              'Dos 4 aos 8 anos: de 2 em 2 anos',
              'Depois dos 8 anos: anualmente',
              'Táxi / aluguer / escola de condução / frota comercial: anualmente, independentemente da idade'
            ]}
          ]},
          { id: 'f2', title: 'Motociclos (categoria L > 125 cm³)', content: [
            { kind: 'paragraph', text: 'O IPO é obrigatório para motociclos da categoria L com cilindrada > 125 cm³. A periodicidade segue a tabela especial do DL 144/2017 (para a maioria das categorias L — primeiro IPO após 4 anos, depois de 2 em 2 anos). Para L1e/ciclomotores até 50 cm³, em regra, o IPO não é exigido.' }
          ]},
          { id: 'f3', title: 'Pesados de mercadorias > 3,5 t (N2/N3) e autocarros (M2/M3)', content: [
            { kind: 'paragraph', text: 'Primeiro IPO 1 ano após a matrícula; depois, de acordo com a tabela: até aos 8 anos — uma vez por ano; depois dos 8 anos — normalmente de 6 em 6 meses para pesados de passageiros (M2/M3). A periodicidade exacta consta do DL 144/2017 + Portaria 178/2023.' }
          ]},
          { id: 'f4', title: 'Veículos eléctricos e híbridos', content: [
            { kind: 'paragraph', text: 'Os mesmos prazos aplicáveis à categoria M1. Adicionalmente — verificação do isolamento da cablagem de alta tensão.' }
          ]}
        ]},
        { kind: 'warning', text: 'O dístico/autocolante IPO obrigatório no para-brisas foi abolido em Portugal — a validade é comprovada pela ficha/certificado de inspeção (electrónico/em papel) e pelo registo no sistema do IMT. Na fronteira/em controlos, a PSP verifica pela base de dados. Atraso — coima de 250–1250 €.' }
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
          '📍 Limitação — apenas em Portugal; pode escolher qualquer centro'
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
          '⚠️ Triângulo de sinalização, colete reflector, estojo de primeiros socorros',
          '🔧 Pneus com menos de 10 anos, piso mínimo de 1,6 mm'
        ]},
        { kind: 'warning', text: 'Se os documentos estiverem em nome de uma pessoa colectiva — procuração da empresa com carimbo.' }
      ]
    },
    {
      id: 'the-process',
      title: 'Processo de inspeção',
      content: [
        { kind: 'paragraph', text: 'Demora 25–40 minutos. Verificam:' },
        { kind: 'checklist', items: [
          '🔦 Iluminação (faróis, mínimos, piscas, luzes de travão)',
          '🛑 Sistema de travagem (banco de ensaio)',
          '🚨 Amortecimento (banco de ensaio)',
          '🛞 Pneus / profundidade do piso',
          '📋 Números do chassis e do motor são conferidos com o DUA',
          '💨 Emissões de CO2 (sonda no escape)',
          '🪞 Espelhos, limpa-vidros',
          '🎯 Geometria da luz («alinhamento de faróis»)',
          '🪑 Cintos de segurança e airbags',
          '🔋 ABS / ESP / electrónica (diagnóstico OBD)'
        ]}
      ]
    },
    {
      id: 'results',
      title: 'Resultado e o que fazer se chumbar',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Aprovado (verde)', content: [
            { kind: 'paragraph', text: 'Recebe a **ficha/certificado de inspeção** (em papel ou electrónico) com a data do próximo IPO. Num IPO normal, o DUA **não é actualizado** — só é reemitido quando há alteração dos dados técnicos (por exemplo, após reparação do chassis/motor). Tudo fica automaticamente no IMT.' }
          ]},
          { id: 'r2', title: 'Aprovado com Deficiências Ligeiras (laranja)', content: [
            { kind: 'paragraph', text: 'Passou, mas são necessárias pequenas correcções — ficam registadas no relatório. Não é necessário repetir a inspeção; deve corrigir até ao próximo IPO.' }
          ]},
          { id: 'r3', title: 'Reprovado (vermelho)', content: [
            { kind: 'checklist', items: [
              'Não pode circular de imediato (se houver defeitos críticos) ou até à reparação (se não forem críticos)',
              'Prazo para reinspeção — 30 dias no MESMO centro, a preço reduzido',
              'Após 30 dias — novo IPO completo',
              'Se não passar novamente no prazo de 30 dias + 7 — o IMT aplica coima'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IPO para veículo ligeiro de passageiros (categoria M1)', amountEURMin: 30, amountEURMax: 40 },
    { label: 'Motociclo', amountEURMin: 20, amountEURMax: 28 },
    { label: 'IPO repetido (reinspeção)', amountEURMin: 12, amountEURMax: 18 },
    { label: 'Coima por atraso no IPO', amountEURMin: 250, amountEURMax: 1250 }
  ],
  sources: [
    { title: 'IMT — Inspeção Técnica de Veículos', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Veiculos/Pages/Inspeccao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei n.º 144/2017 — Regime de inspeção técnica (inspeção periódica)', url: 'https://dre.pt/dre/detalhe/decreto-lei/144-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria n.º 178/2023 — tarifas e periodicidade', url: 'https://dre.pt/dre/detalhe/portaria/178-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Fazer a inspeção periódica do veículo', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/realizar-a-inspecao-periodica-ao-veiculo-ipo-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
