export default {
  editorialVoice: 'hackportugal',
  id: 'home-insurance',
  categoryId: 'housing_rent',
  title: 'Seguro de habitação — seguro multirriscos',
  tldr: 'Por lei (art. 1429 Código Civil), para apartamentos em condomínio (propriedade horizontal), é obrigatório o seguro contra **risco de incêndio** — tanto para as fracções autónomas como para as partes comuns. O multirriscos habitação é mais abrangente (incêndio + água + roubo + responsabilidade civil), mas, como obrigação contratual, o banco exige-o no crédito à habitação — não é uma lei, é uma condição do crédito. Para inquilinos, o seguro não é obrigatório, mas é recomendado (seguro de recheio, 50-150 €/ano). Melhores seguradoras em 2026: Fidelidade, Generali Tranquilidade (marca Generali), Allianz, Zurich, Liberty. O custo anual de 150-500 € para um apartamento de 70-100 m² depende das coberturas e da franquia.',
  tags: ['seguro', 'seguro', 'habitação', 'multirriscos'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: '📋 Tipos de seguros de habitação',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Seguro Multirriscos Habitação (principal)', content: [
            { kind: 'checklist', items: [
              '**Obrigatório** como condição contratual — o banco exige no crédito à habitação (crédito = contrato de seguro)',
              'Cobre: incêndio, explosão, inundação, fenómenos naturais (trovoada, furacão), roubo, vandalismo',
              '⚠️ **Responsabilidade civil familiar** — NÃO está sempre incluída no multirriscos. Pode ser uma subscrição separada; confirme',
              'Electrónica, mobiliário (recheio) — subsecção separada; algumas apólices seguram apenas o imóvel/edifício sem recheio — verifique',
              'Despesas com habitação temporária — normalmente uma cobertura adicional limitada, não universal',
              'Custo anual: 150-500 € por apartamento de 70-100 m²'
            ]}
          ]},
          { id: 't2', title: 'Seguro de Recheio (apenas para inquilinos)', content: [
            { kind: 'checklist', items: [
              'Os seus bens (mobiliário, equipamentos, objectos de valor)',
              'Sem cobertura do próprio edifício (isso é responsabilidade do proprietário)',
              'Responsabilidade civil — se causar danos (por exemplo, inundar os vizinhos)',
              '50-150 €/ano — muito mais barato',
              'Recomendado se tiver equipamentos no valor total superior a 3 000 €'
            ]}
          ]},
          { id: 't3', title: 'Seguro contra incêndio (obrigatório por lei)', content: [
            { kind: 'checklist', items: [
              'Seguro **obrigatório** contra o risco de incêndio nos termos do art. 1429 Código Civil — para cada fracção autónoma E para as partes comuns do edifício',
              'O administrador do condomínio verifica a existência das apólices e pode contratá-las por conta dos proprietários, se não existirem apólices',
              'Mínimo — incêndio; na prática, normalmente contrata-se multirriscos (inclui incêndio + água + responsabilidade civil)',
              'Pago pelo proprietário de cada apartamento; partes comuns — através da quota do condomínio',
              'NÃO cobre o conteúdo interior do apartamento (recheio) — para isso é necessário um multirriscos separado com recheio'
            ]}
          ]},
          { id: 't4', title: 'Complementos especializados', content: [
            { kind: 'checklist', items: [
              '**Assistência domiciliária 24/7** — canalizador, electricista, serralheiro em caso de problemas (+10-30 €/ano)',
              '**Reparação de electrodomésticos** — reparação de grandes electrodomésticos após a garantia (+20-40 €/ano)',
              '**Protecção contra ciberroubo** — protecção contra ciberroubo e roubo de identidade (+5-15 €/ano)',
              '**Seguro para animais** — veterinário para animais (por vezes pode ser adicionado ao seguro de habitação)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'choose',
      title: '🎯 Como escolher uma seguradora',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Principais empresas', content: [
            { kind: 'checklist', items: [
              '**Fidelidade** — a maior, portuguesa, fiável',
              '**Generali Tranquilidade** (grupo Generali) — boas condições, muitos agentes',
              '**Allianz** — internacional, um pouco mais cara, mas fiável',
              '**Zurich** — premium, melhor para património de valor elevado',
              '**Liberty Seguros** — pacotes específicos com bónus',
              '**Cofidis, Mediator** — marketplace de seguros, funcionam como intermediários',
              '**CTT Seguros** — nas lojas CTT, preços agradáveis'
            ]}
          ]},
          { id: 'c2', title: 'Comparação online', content: [
            { kind: 'checklist', items: [
              '**ComparaJá.pt** — agregador de cotações',
              '**Doctor Finanças** — comparador financeiro',
              '**Raconoscer / Seguros.pt** — especializados',
              'Comparar: preço, franquia, limites de cobertura, exclusões',
              '💡 **Poder de negociação**: mostre outra cotação — podem baixar o preço até 20%'
            ]}
          ]},
          { id: 'c3', title: 'O que verificar', content: [
            { kind: 'checklist', items: [
              '**Capital seguro do edifício** — deve ser ≥ ao custo de reconstrução (não ao preço de mercado!)',
              '**Capital seguro do recheio** — avalie os seus bens com honestidade (não copie os exemplos da seguradora)',
              '**Franquia**: normalmente 100-300 €, quanto mais alta — mais barata é a apólice',
              '**Exclusões**: ler as letras pequenas — normalmente não cobrem:',
              '  - Sismos (é preciso adicionar separadamente)',
              '  - Guerra / riscos nucleares / terrorismo estão geralmente excluídos',
              '  - Utilização comercial (se arrendar em AL)',
              '  - Jóias > 5 000 € (avaliação separada, declaração)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'claim',
      title: '📞 Como participar um sinistro',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Imediatamente (48 h)', content: [
            { kind: 'checklist', items: [
              'Ligar para a linha 24 horas da seguradora (todas têm)',
              'Ou através da aplicação (a maioria tem)',
              '📸 **Fotografar TODOS os danos** — passo mais importante',
              'Não reparar antes da avaliação (excepto medidas de emergência: cortar a água, a electricidade)',
              'Guardar todos os recibos: reparação de emergência, habitação temporária',
              'Testemunhas: vizinhos, polícia (em caso de roubo)'
            ]}
          ]},
          { id: 's2', title: 'Documentos', content: [
            { kind: 'checklist', items: [
              'Contrato de seguro (apólice)',
              'Fotografias / vídeos dos danos',
              'Auto da polícia (em caso de roubo, vandalismo)',
              'Recibos de reparação / compras do que ficou danificado',
              'Declaração do vizinho / sindico, se forem testemunhas'
            ]}
          ]},
          { id: 's3', title: 'Perito', content: [
            { kind: 'paragraph', text: 'A seguradora envia um perito em 3-7 dias. Recomendo estar em casa, mostrar tudo e discutir os detalhes. Pode chamar um perito independente (100-300 €), se a seguradora subvalorizar os danos.' }
          ]},
          { id: 's4', title: 'Pagamento', content: [
            { kind: 'checklist', items: [
              '**Valores pequenos**: 2-4 semanas',
              '**Valores elevados > 5 000 €**: 1-3 meses',
              '**Litígios**: Provedor do Cliente da seguradora → Provedor dos Segurados (ASF) → tribunal',
              'Ajuda gratuita: DECO Proteste (defesa dos direitos dos consumidores) para litígios'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Conselhos',
      content: [
        { kind: 'checklist', items: [
          '📝 **Inventário com fotografias**: fotografe todos os bens importantes (equipamentos, jóias, obras de arte) com números de série. Para participação de sinistro — é o padrão de excelência',
          '💾 **Cópia de segurança digital**: guarde o inventário na nuvem (não no dispositivo)',
          '🔒 **Botão de pânico / alarme**: desconto de 10-15% da seguradora',
          '🎂 **Data de renovação**: reveja a apólice todos os anos — os seus bens mudaram (comprou equipamentos novos, mudou de casa)',
          '💍 **Jóias / relógios / colecção de valor elevado**: declaração separada, é necessária avaliação independente',
          '🌊 **Catástrofes naturais**: a cobertura de sismos em PT é barata (zona de baixa actividade), mas se a sua região for de risco (Algarve, Açores) — adicione',
          '🏠 **Alojamento Local (AL)**: se arrendar — precisa de um seguro comercial separado (muitos seguros padrão excluem)',
          '💰 **Pagamento anual ou mensal**: o anual é 3-5% mais barato',
          '📅 **Cancelamento**: por escrito 30 dias antes da renovação',
          '🔄 **Mudança de seguradora**: compare todos os anos; poupanças de 10-20% são típicas'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Multirriscos para apartamento de 70-100 m²', amountEURMin: 150, amountEURMax: 500, note: '€/ano' },
    { label: 'Seguro de recheio (inquilino)', amountEURMin: 50, amountEURMax: 150, note: '€/ano' },
    { label: 'Assistência domiciliária (extra)', amountEURMin: 10, amountEURMax: 30, note: '€/ano' },
    { label: 'Perito independente', amountEURMin: 100, amountEURMax: 300 }
  ],
  sources: [
    { title: 'ASF — Autoridade de Supervisão de Seguros', url: 'https://www.asf.com.pt/consumidor', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — art. 1429 (seguro obrigatório contra incêndio em PH)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DL 72/2008 — Regime Jurídico do Contrato de Seguro', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/72-2008-456608', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ComparaJá — comparação de seguros', url: 'https://www.comparaja.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
