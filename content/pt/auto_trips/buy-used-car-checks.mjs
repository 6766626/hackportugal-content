export default {
  editorialVoice: 'hackportugal',
  id: 'buy-used-car-checks',
  categoryId: 'auto_trips',
  title: 'Como verificar um carro usado antes de comprar em Portugal',
  tldr: 'Verificação de **4 camadas**: (1) **ACP / Standvirtual** — relatório histórico por VIN, 15-30 €: multas, quilometragem, acidentes; (2) **Carfax Portugal** — base de dados internacional com histórico dos EUA/UE; (3) **Portal das Finanças** — verificar se existem dívidas de IUC, ISV; (4) **inspeção manual** + mecânico independente por 50-150 €. O vendedor deve fornecer o DUA (Documento Único Automóvel), IPO válido, manual, chaves (original + suplente).\n\nCoima ao vendedor por ocultação: até 3 × o valor do carro.',
  tags: ['automóvel', 'verificação', 'vin', 'compra'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'before-buy',
      title: '📋 Antes da visita — verificações online',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Descodificação do VIN', content: [
            { kind: 'checklist', items: [
              'VIN (17 caracteres) — no DUA e no para-brisas',
              'Descodificadores gratuitos: vincarfax.com, vindecoder.net — verificar modelo, ano, motor, equipamento',
              'Comparar com o anúncio — divergência frequente = sinal de alerta'
            ]}
          ]},
          { id: 'o2', title: 'ACP Histórico (recomendado)', content: [
            { kind: 'checklist', items: [
              'ACP (Automóvel Club de Portugal) — relatório oficial',
              'Custa cerca de 15-30 € por relatório',
              'Mostra: registos, mudanças de proprietário, IPO, histórico de acidentes, histórico de quilometragem',
              'acp.pt → Histórico do Veículo',
              'Relatório em 5 min'
            ]}
          ]},
          { id: 'o3', title: 'Carfax Portugal', content: [
            { kind: 'paragraph', text: 'Alternativa ao ACP, mais detalhada para carros estrangeiros (DE/FR/ES): carfax.pt, 20-40 €. Mostra o histórico de acidentes no país da primeira matrícula.' }
          ]},
          { id: 'o4', title: 'SICV (gratuito!)', content: [
            { kind: 'checklist', items: [
              '**SICV** — Sistema Informativo do Certificado de Veículo',
              'Portal gratuito do IMT: sicv.imt-ip.pt',
              'Mostra: matrícula, modelo, data de registo, inspeção periódica, dívidas de IUC',
              'Não mostra histórico de acidentes'
            ]}
          ]},
          { id: 'o5', title: 'Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Através do vendedor (ele entra com a sua CMD) — verificar se não existem dívidas de IUC, ISV. As dívidas passam para o novo proprietário!' }
          ]}
        ]}
      ]
    },
    {
      id: 'paperwork',
      title: '📄 Documentos do vendedor — obrigatório',
      content: [
        { kind: 'checklist', items: [
          '📑 **DUA (Documento Único Automóvel)** — ORIGINAL, não cópia. Com logótipo azul, VIN, dados do proprietário',
          '📋 **Certificado de IPO** — válido na data da compra (não expira nos 30 dias seguintes)',
          '📖 **Manual do condutor** (livro de revisões) + histórico de manutenção, de preferência',
          '🔑 **2 chaves**: original + suplente. 1 chave → negociar uma redução de preço',
          '🧾 **Factura proforma / contrato de compra-venda** — do concessionário (se o vendedor for comerciante) ou contrato simples (se for particular)',
          '📄 **Registo de propriedade** — certificado de propriedade',
          '⚠️ Se faltar alguma coisa → motivo significativo para negociar ou desistir'
        ]}
      ]
    },
    {
      id: 'inspection',
      title: '🔧 Inspeção presencial',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: 'Visual', content: [
            { kind: 'checklist', items: [
              'Pintura: a cor é uniforme? Irregularidade → repintura (esteve envolvido num acidente)',
              'Folgas: são iguais entre portas/capot/porta-bagagens? Irregularidade → danos na carroçaria',
              'Pneus: desgaste uniforme? Irregular → problemas na suspensão',
              'Embaladeiras, parte inferior: ferrugem, fissuras — crítico',
              'Vidros: fissuras, lascas',
              'Faróis: baços, amarelados — não é crítico, mas é motivo para negociar',
              'Interior: desgaste do volante / pedais corresponde à quilometragem? Incompatibilidade → quilometragem adulterada!'
            ]}
          ]},
          { id: 'i2', title: 'Test-drive', content: [
            { kind: 'checklist', items: [
              'Mínimo 20 min, a diferentes velocidades',
              'Arranque: verificar se a embraiagem não patina',
              'Direção: vibração, folga, peso excessivo',
              'Travões: pulsação, chiar, travagem desigual',
              'Mudanças: sem arranhar, tudo suave',
              'Suspensão em estrada irregular: pancadas → amortecedores gastos',
              'Escape: fumo azul = óleo, branco = líquido de refrigeração',
              'Eletrónica: todos os botões, luzes, vidros, ar condicionado, música',
              'Parar com travão de mão numa subida — verificar'
            ]}
          ]},
          { id: 'i3', title: 'Mecânico independente (recomendado)', content: [
            { kind: 'checklist', items: [
              '**Inspeção pré-compra** — 50-150 € por uma inspeção de 2 horas',
              'Centros populares: Norauto, Midas, oficinas locais com scanner OBD-II',
              'Verificam: erros informáticos, estado do motor, caixa de velocidades, suspensão',
              'Relatório com fotografias + lista de problemas',
              '💡 Se o vendedor recusar → desista da compra'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'test-obd',
      title: '💻 Scanner OBD-II — obrigatório',
      content: [
        { kind: 'checklist', items: [
          'Comprar adaptador OBD-II Bluetooth: 20-40 € (OBDLink MX+, Veepeak)',
          'Aplicação: Car Scanner (Android), OBD Auto Doctor (iOS)',
          'Ligar antes do test-drive',
          'Mostra: quilometragem real (não adulterável), erros guardados, dados em tempo real',
          'Código apagado pelo vendedor 10 min antes do encontro — deteta-se por monitores de prontidão não concluídos',
          'Obrigatório para carros > 50 000 € / usados de marcas premium'
        ]}
      ]
    },
    {
      id: 'payment',
      title: '💳 Pagamento e entrega',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'A um concessionário', content: [
            { kind: 'checklist', items: [
              'Transferência bancária — a opção mais segura',
              'MB WAY até 2 500 €',
              'Crédito automóvel: Crédito Auto (ActivoBank, Caixa, Cofidis) — taxas de 5-10% ao ano',
              'IVA 23% incluído no preço, o concessionário deve emitir factura'
            ]}
          ]},
          { id: 'p2', title: 'A um particular', content: [
            { kind: 'checklist', items: [
              'Melhor no IMT / Conservatória Automóvel — local público, ambos como testemunhas',
              'Transferência bancária — mostrar imediatamente o comprovativo',
              'Contrato simples (2 exemplares, nome completo/NIF de ambos + matrícula do carro + valor + data)',
              'NÃO dinheiro vivo > 3 000 € (Lei 92/2017 — de todo proibido entre pessoas singulares)',
              'Entrega do DUA + chaves + documentos em mão'
            ]}
          ]},
          { id: 'p3', title: 'Registo em nome do novo proprietário', content: [
            { kind: 'checklist', items: [
              '**Em 60 dias** (por lei) — registar a transferência no IMT / Conservatória do Registo Automóvel / Espaço Automóvel numa Loja do Cidadão',
              'Taxa: 45-65 € (online / presencial)',
              'Documentos: DUA, contrato de compra e venda, Cartão de Cidadão/autorização de residência de ambos, IPO',
              '⚠️ Se o vendedor não entregou o DUA — você não é proprietário, o registo é impossível'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'scams',
      title: '🚩 Esquemas de fraude frequentes',
      content: [
        { kind: 'checklist', items: [
          '**Quilometragem adulterada**: comparar com o relatório ACP + desgaste do interior',
          '**Penhor sobre o carro**: verificar no Registo Automóvel (pode ser gratuito através do ACP ou IRN)',
          '**Automóvel apreendido**: o SICV mostra',
          '**VIN falsificado (alterado)**: verificar em diferentes locais (motor, pilar, chapa) — devem coincidir',
          '**Danos após inundação**: suspeitar se o preço for demasiado bom — verificar tapetes, cabos elétricos',
          '**“Não estou cá, o meu sobrinho entrega”**: DUA original + procuração notarial',
          '**Falsos concessionários ao estilo AliExpress**: apenas através de stands / empresas de usados conhecidas',
          '**“Vamos dar uma volta, os documentos estão na mala, mostro depois”**: nunca'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'ACP Histórico', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Carfax Portugal', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Inspeção pré-compra', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Scanner OBD-II', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Registo da transferência (IMT)', amountEURMin: 45, amountEURMax: 65 }
  ],
  sources: [
    { title: 'IMT — SICV (verificação de automóvel)', url: 'https://portal.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ACP — Automóvel Club de Portugal', url: 'https://www.acp.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Registo Automóvel', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
