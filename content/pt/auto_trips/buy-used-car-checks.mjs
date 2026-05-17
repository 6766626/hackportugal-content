export default {
  editorialVoice: 'hackportugal',
  id: 'buy-used-car-checks',
  categoryId: 'auto_trips',
  title: 'Como verificar um automóvel usado antes de comprar em Portugal',
  tldr: 'Verificação de **4 camadas**: (1) **ACP / Standvirtual** — relatório histórico por VIN, 15-30 €: multas, quilometragem, acidentes; (2) **Carfax Portugal** — base de dados internacional com histórico dos EUA/UE; (3) **Portal das Finanças** — verificar se existem dívidas de IUC, ISV; (4) **inspecção manual** + mecânico independente por 50-150 €. O vendedor deve fornecer o DUA (Documento Único Automóvel), IPO válido, manual, chaves (original + suplente). Coima ao vendedor por ocultação: até 3 × o valor do automóvel.',
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
              'VIN (17 caracteres) — no DUA e no pára-brisas',
              'Descodificadores gratuitos: vincarfax.com, vindecoder.net — verificar modelo, ano, motor, equipamento',
              'Comparar com o anúncio — discrepância frequente = sinal de alerta'
            ]}
          ]},
          { id: 'o2', title: 'ACP Histórico (recomendado)', content: [
            { kind: 'checklist', items: [
              'ACP (Automóvel Club de Portugal) — relatório oficial',
              'Custa ~15-30 € por relatório',
              'Mostra: matrículas, mudanças de proprietário, IPO, histórico de acidentes, histórico de quilometragem',
              'acp.pt → Histórico do Veículo',
              'Relatório em 5 min'
            ]}
          ]},
          { id: 'o3', title: 'Carfax Portugal', content: [
            { kind: 'paragraph', text: 'Alternativa ao ACP, mais detalhada para automóveis estrangeiros (DE/FR/ES): carfax.pt, 20-40 €. Mostra o histórico de acidentes no país da primeira matrícula.' }
          ]},
          { id: 'o4', title: 'SICV (gratuito!)', content: [
            { kind: 'checklist', items: [
              '**SICV** — Sistema Informativo do Certificado de Veículo',
              'Portal gratuito do IMT: sicv.imt-ip.pt',
              'Mostra: matrícula, modelo, data de registo, inspecção, dívidas de IUC',
              'Não mostra o histórico de acidentes'
            ]}
          ]},
          { id: 'o5', title: 'Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Através do vendedor (ele entra com a sua CMD) — verificar se existem dívidas de IUC, ISV. As dívidas passam para o novo proprietário!' }
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
          '📋 **Certificado IPO** — válido na data da compra (não expira nos próximos 30 dias)',
          '📖 **Manual do condutor** (livro de revisões) + histórico de manutenção, de preferência',
          '🔑 **2 chaves**: original + suplente. 1 chave → negociar uma redução do preço',
          '🧾 **Factura proforma / contrato de compra-venda** — do concessionário (se o vendedor for comerciante) ou contrato simples (se for particular)',
          '📄 **Registo de propriedade** — certificado de propriedade',
          '⚠️ Se faltar alguma coisa → motivo significativo para negociar ou desistir'
        ]}
      ]
    },
    {
      id: 'inspection',
      title: '🔧 Inspecção presencial',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: 'Visual', content: [
            { kind: 'checklist', items: [
              'Pintura: a cor é uniforme? Irregularidade → repintura (esteve envolvido num acidente)',
              'Folgas: são iguais entre portas/capot/porta da bagageira? Irregularidade → danos na carroçaria',
              'Pneus: desgaste uniforme? Irregular → problemas na suspensão',
              'Embaladeiras, parte inferior: ferrugem, fissuras — crítico',
              'Vidros: fissuras, lascas',
              'Faróis: baços, amarelos — não é crítico, mas é motivo para negociar',
              'Interior: o desgaste do volante / pedais corresponde à quilometragem? Incompatibilidade → quilometragem adulterada!'
            ]}
          ]},
          { id: 'i2', title: 'Test-drive', content: [
            { kind: 'checklist', items: [
              'Mínimo 20 min, a velocidades diferentes',
              'Arranque: verificar se a embraiagem patina',
              'Direcção: vibração, folga, dureza',
              'Travões: pulsação, chiar, irregularidade',
              'Mudanças: sem ruídos de engragem, tudo suave',
              'Suspensão em estrada irregular: pancadas → amortecedores gastos',
              'Escape: fumo azul = óleo, branco = líquido de refrigeração',
              'Electrónica: todos os botões, sinais, vidros, ar condicionado, som',
              'Parar com o travão de mão numa subida — verificar'
            ]}
          ]},
          { id: 'i3', title: 'Mecânico independente (recomendado)', content: [
            { kind: 'checklist', items: [
              '**Inspecção pré-compra** — 50-150 € por uma inspecção de 2 horas',
              'Centros populares: Norauto, Midas, oficinas locais com scanner OBD-II',
              'Verificam: erros do computador, estado do motor, caixa de velocidades, suspensão',
              'Relatório com fotos + lista de problemas',
              '💡 O vendedor recusa → desista da compra'
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
          'Comprar adaptador Bluetooth OBD-II: 20-40 € (OBDLink MX+, Veepeak)',
          'Aplicação: Car Scanner (Android), OBD Auto Doctor (iOS)',
          'Ligar antes do test-drive',
          'Mostra: quilometragem real (não adulterável), erros guardados, dados em tempo real',
          'Reposição do código pelo vendedor 10 min antes do encontro — detecta-se pelos monitores de prontidão incompletos',
          'Obrigatório para automóveis > 50 000 € / usados de marcas premium'
        ]}
      ]
    },
    {
      id: 'payment',
      title: '💳 Pagamento e entrega',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'De concessionário', content: [
            { kind: 'checklist', items: [
              'Transferência bancária — a opção mais segura',
              'MB WAY até 2 500 €',
              'Crédito automóvel: Crédito Auto (ActivoBank, Caixa, Cofidis) — taxas de 5-10% ao ano',
              'IVA 23% incluído no preço, o concessionário deve emitir factura'
            ]}
          ]},
          { id: 'p2', title: 'De particular', content: [
            { kind: 'checklist', items: [
              'Melhor no IMT / Conservatória Automóvel — local público, ambos presentes como testemunhas',
              'Transferência bancária — mostrar imediatamente o comprovativo',
              'Contrato simples (2 exemplares, nome completo/NIF de ambos + matrícula do automóvel + valor + data)',
              'NÃO dinheiro em numerário > 3 000 € (Lei 92/2017 — em geral não é permitido entre pessoas singulares)',
              'Entrega do DUA + chaves + documentos em mão'
            ]}
          ]},
          { id: 'p3', title: 'Registo em nome do novo proprietário', content: [
            { kind: 'checklist', items: [
              '**Em 60 dias** (por lei) — registar a transmissão no IMT / Conservatória do Registo Automóvel / Espaço Automóvel na Loja do Cidadão',
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
          '**Penhor sobre o automóvel**: verificar o Registo Automóvel (pode ser gratuito através do ACP ou IRN)',
          '**Automóvel penhorado/apreendido**: o SICV mostra',
          '**VIN falsificado (remarcado)**: verificar em vários locais (motor, pilar, placa) — devem coincidir',
          '**Danos após inundação**: suspeitar se o preço for demasiado bom — verificar tapetes, cabos eléctricos',
          '**«Não estou, o meu sobrinho entrega»**: DUA original + procuração notarial',
          '**Concessionários falsos ao estilo AliExpress**: apenas através de stands / comerciantes de usados conhecidos',
          '**«Vamos dar uma volta, os documentos estão na mala, mostro depois»**: nunca'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'ACP Histórico', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Carfax Portugal', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Inspecção pré-compra', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Scanner OBD-II', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Registo da transmissão (IMT)', amountEURMin: 45, amountEURMax: 65 }
  ],
  sources: [
    { title: 'IMT — SICV (verificação de automóvel)', url: 'https://portal.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ACP — Automóvel Club de Portugal', url: 'https://www.acp.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Registo Automóvel', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
