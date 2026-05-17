export default {
  editorialVoice: 'hackportugal',
  id: 'mobile-carriers-compared',
  categoryId: 'telecom',
  title: 'Operadores móveis e internet — comparação de tarifários 2026',
  tldr: 'O mercado português foi alterado pela DIGI (2024) — comunicações móveis a partir de 5 €/mês, fibra 1 Gbps por 10 €/mês, fibra 10 Gbps por 15 €/mês. A NOS lançou a marca económica WOO (5 €/mês, 100 GB, sem fidelização). MEO/NOS/Vodafone — mais caros (14,99–15 € pelo mesmo volume), mas com melhor cobertura nas aldeias e mais pacotes com TV. Marcas secundárias da MEO: Uzo e Moche (não aumentam preços em 2026). Para contrato é necessário NIF, Cartão de Cidadão/autorização de residência, IBAN.',
  tags: ['telemóvel', 'internet', 'fibra', 'sim', 'meo', 'nos', 'vodafone', 'digi', 'woo', 'tarifário'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'landscape-2026',
      title: 'Mercado 2026 — o que mudou',
      content: [
        { kind: 'paragraph', text: 'Com a chegada da DIGI (novembro de 2024, operador romeno RCS&RDS), o mercado português mudou: a fibra 1 Gbps por 10 €/mês e o telemóvel ilimitado por 6 € obrigaram os concorrentes a responder com marcas económicas. A NOS lançou a WOO, a Altice/MEO promove as suas marcas Uzo e Moche sem aumentos em 2026.' },
        { kind: 'warning', text: 'A MEO, a NOS e a Vodafone aumentaram os preços em 2026 (indexação à inflação). Exceção: contratos celebrados/renovados a partir de 11 de novembro de 2025 — abrangidos pelo “tarifário congelado”. Uzo, Moche e DIGI não aumentam os preços. Verifique as condições atuais antes de subscrever.' }
      ]
    },
    {
      id: 'carriers',
      title: 'Operadores — pontos fortes e preços',
      content: [
        { kind: 'substeps', items: [
          { id: 'digi', title: 'DIGI — preço baixo, crescimento rápido', content: [
            { kind: 'checklist', items: [
              'Telemóvel 5 €/mês — 150 GB + chamadas (anteriormente eram 100 GB, melhorado em 2026)',
              'Telemóvel ilimitado: 6 €/mês (uma linha). Desce para 5 € se tiver fibra ou ≥3 linhas',
              'Fibra 1 Gbps — 10 €/mês (instalação gratuita com fidelização de 3 meses)',
              'Fibra 10 Gbps (PRO-DIGI) — 15 €/mês, router Wi-Fi 7 incluído',
              'Combinado: fibra 1 Gbps + telemóvel ilimitado = 15 €/mês',
              'Telemóvel — SEM qualquer fidelização; fibra — apenas 3 meses',
              'Chamadas para 40 países incluídas',
              'Cobertura: estão a construir a própria rede 5G, parcialmente roaming. Nas aldeias e zonas de montanha — mais fraca do que a “grande tríade”',
              'Prometem não aumentar preços em 2026'
            ]}
          ]},
          { id: 'woo', title: 'WOO — marca económica da NOS', content: [
            { kind: 'checklist', items: [
              'Telemóvel 5 €/mês — 100 GB + chamadas/SMS',
              '7 €/mês — dados ilimitados + 5000 min/SMS',
              'Fibra a partir de 15 €/mês (só internet)',
              'Combinado: fibra 1 Gbps + 100 GB de telemóvel = 20 €/mês',
              'SEM fidelização em todos os tarifários (telemóvel + fibra)',
              'Cobertura NOS (subsidiária da NOS) — ao nível da rede da empresa-mãe',
              'Lançada em 2025 em resposta à DIGI; posiciona-se como marca económica'
            ]}
          ]},
          { id: 'meo', title: 'MEO (Altice Portugal) — a maior', content: [
            { kind: 'checklist', items: [
              'Melhor cobertura em aldeias e nas estradas',
              'Pacote forte: fibra + TV + internet + telemóvel',
              'Contrato móvel: ~14,99 €/mês por 100 GB + chamadas (significativamente mais caro do que DIGI/WOO pelo mesmo volume)',
              'Suporta eSIM',
              'Marcas secundárias: Uzo (formato digital) e Moche (para jovens) — NÃO aumentam os preços em 2026',
              'Aplicação disponível em inglês'
            ]}
          ]},
          { id: 'nos', title: 'NOS — urbana, 5G rápido', content: [
            { kind: 'checklist', items: [
              '5G mais rápido em Lisboa/Porto segundo benchmarks',
              'Pacotes digitais com Netflix/HBO Max',
              'Contrato móvel: ~15 €/mês por 100 GB + chamadas',
              'eSIM — ativação online rápida',
              'Marca económica: WOO (contrato separado)'
            ]}
          ]},
          { id: 'vodafone', title: 'Vodafone Portugal', content: [
            { kind: 'checklist', items: [
              'Chamadas internacionais e roaming fora da UE — os mais vantajosos da “grande tríade”',
              'Contrato móvel: ~14,99 €/mês por 100 GB',
              'Suporta eSIM',
              'Red M (~23 €/mês) — 25 GB + Spotify/TVOD',
              'Adequado para quem viaja frequentemente'
            ]}
          ]},
          { id: 'nowo', title: 'NOWO', content: [
            { kind: 'paragraph', text: 'Operador alternativo. Internet doméstica forte, rede móvel arrendada à NOS. Bom para pacotes (TV + internet + telemóvel) — a partir de 30 €/mês por tudo. Depois das aquisições no mercado (Vodafone/DIGI), a sua importância diminuiu, mas os tarifários mantêm-se.' }
          ]}
        ]}
      ]
    },
    {
      id: 'no-fidelity',
      title: 'Tarifários sem fidelização (sem penalizações por rescisão)',
      content: [
        { kind: 'paragraph', text: 'Fidelização = período obrigatório de contrato (normalmente 12/24 meses). Em caso de rescisão antecipada — penalização: mensalidade remanescente × meses restantes. Um tarifário sem fidelização permite sair a qualquer momento.' },
        { kind: 'checklist', items: [
          'DIGI telemóvel — SEM fidelização por defeito (para todos os tarifários)',
          'DIGI fibra — apenas 3 meses de fidelização; sem isso, a instalação custa 70 € em vez de 20 €',
          'WOO — todos os tarifários sem fidelização',
          'MEO/NOS/Vodafone — oferecem tarifários sem fidelização, mas ~5–10 €/mês mais caros do que o mesmo pacote com fidelização',
          'Internet fixa sem fidelização na “grande tríade”: a instalação pode ir até 350 €',
          'Uzo (MEO) e Moche (MEO) — tarifários jovens/digitais, normalmente sem fidelização',
          'Ao mudar-se para Portugal para um período de teste (3–6 meses) — escolha DIGI ou WOO com pré-pago / sem fidelização'
        ]}
      ]
    },
    {
      id: 'home-internet',
      title: 'Internet doméstica (fibra) — intervalo de preços 2026',
      content: [
        { kind: 'substeps', items: [
          { id: 'hi1', title: 'Preços para “só internet”', content: [
            { kind: 'checklist', items: [
              'DIGI 1 Gbps — 10 €/mês (a mais barata em Portugal)',
              'DIGI 10 Gbps (PRO-DIGI) — 15 €/mês',
              'WOO 1 Gbps — a partir de 15 €/mês',
              'Vodafone/NOS/MEO 1 Gbps — 30–40 €/mês (sem TV/telemóvel)',
              'Vodafone/NOS/MEO sem fidelização — mais +5–10 €/mês'
            ]}
          ]},
          { id: 'hi2', title: 'Pacotes combinados (internet + telemóvel + TV)', content: [
            { kind: 'checklist', items: [
              'DIGI fibra 1 Gbps + telemóvel ilimitado = 15 €/mês',
              'DIGI fibra 1 Gbps + TV + telemóvel ilimitado = 25 €/mês',
              'DIGI fibra 10 Gbps + TV + telemóvel ilimitado (2 linhas) = ~32 €/mês',
              'WOO fibra 1 Gbps + telemóvel 100 GB = 20 €/mês',
              'Pacotes MEO/NOS/Vodafone com 3–4 serviços — a partir de 40 €/mês (normalmente 50–70 €)'
            ]}
          ]},
          { id: 'hi3', title: 'Armadilhas', content: [
            { kind: 'checklist', items: [
              'Verifique a cobertura de fibra na morada ANTES de subscrever — não existe em todo o lado (Portugal rural muitas vezes DSL/4G)',
              'Instalação: DIGI/WOO — muitas vezes gratuita com fidelização de 3 meses',
              'Router: DIGI — Wi-Fi 6 (1 Gbps) ou Wi-Fi 7 (10 Gbps) incluído',
              'Combinado com telemóvel — mudar para a DIGI compensa mais se precisar de ≥2 linhas',
              'Para jogos/streaming — 10 Gbps PRO-DIGI tem upload simétrico'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'prepaid',
      title: 'Comunicações pré-pagas (sem contrato) — para as primeiras semanas',
      content: [
        { kind: 'paragraph', text: 'Para turistas, recém-chegados ou utilização temporária. O SIM compra-se em loja, numa estação de serviço, nos CTT.' },
        { kind: 'checklist', items: [
          '🛍️ Preço do SIM: 10–15 € (frequentemente inclui saldo inicial)',
          '📝 Documentos: passaporte / Cartão de Cidadão / autorização de residência (registo obrigatório desde 2022)',
          '💰 Carregamento: Multibanco, banco online, aplicação do operador, quiosque',
          '📱 Pacotes: “de bolso” — 10 € = 10 GB + 100 min, 1 mês',
          '⏰ Sem carregamento, o SIM é desativado após 6 meses',
          '🌐 Roaming na UE — gratuito (RLAH) em todos os operadores',
          '💡 DIGI/WOO são mais vantajosos do que pré-pago: 5 €/mês com débito automático mensal, pode terminar a qualquer momento'
        ]}
      ]
    },
    {
      id: 'contract',
      title: 'Tarifário com contrato',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'O que é necessário para aderir', content: [
            { kind: 'checklist', items: [
              'NIF',
              'Cartão de Cidadão ou autorização de residência',
              'IBAN para débito direto',
              'Por vezes — extrato bancário de 6 meses (para novos residentes)',
              'Assinatura do contrato presencialmente ou online através da CMD'
            ]}
          ]},
          { id: 'c2', title: 'Condições do contrato', content: [
            { kind: 'checklist', items: [
              'Prazo habitual: 12 ou 24 meses (para fidelização)',
              'Rescisão antecipada com fidelização: mensalidade remanescente × meses restantes',
              'Desconto no equipamento — normalmente apenas com fidelização de 24 meses',
              'Após o prazo — renovação automática por 1 mês (pode rescindir a qualquer momento)',
              'DIGI/WOO/Uzo/Moche — sem fidelização, sem estes riscos'
            ]}
          ]},
          { id: 'c3', title: 'Portabilidade (transferência de número)', content: [
            { kind: 'paragraph', text: 'Mudar de operador mantendo o número — gratuito, 1 dia útil. Pedir ao novo operador; o antigo fecha automaticamente o contrato. Importante: NÃO rescindir o contrato por iniciativa própria antes da portabilidade, caso contrário o número perde-se.' }
          ]}
        ]}
      ]
    },
    {
      id: 'esim',
      title: 'eSIM — ativação em 5 minutos',
      content: [
        { kind: 'checklist', items: [
          '📱 Suportado pela MEO, NOS, Vodafone, DIGI',
          '💻 Adesão online no site do operador',
          '🆔 Entrada através da CMD ou verificação do documento',
          '📧 O código QR chega por email',
          '📱 Digitalizar nas “Definições” do iPhone / Android',
          '⚡ Ativação em 5 minutos',
          '💶 Preço igual ao do SIM',
          '❗ A WOO e algumas marcas secundárias ainda suportam apenas SIM físico'
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Litígios com o operador',
      content: [
        { kind: 'checklist', items: [
          '📋 Livro de Reclamações — o operador é obrigado a responder em 15 dias',
          '🏛️ ANACOM — regulador, reclamação online em anacom.pt',
          '⚖️ Arbitragem CNIACC — obrigatória para operadores em pedidos < 5 000 €',
          '🚫 Cessação do serviço sem motivo — infração; compensação',
          '📅 Em caso de atrasos no pagamento — aviso com 15 dias antes do corte',
          '🔍 Tarifarios.anacom.pt — comparador oficial de tarifários (atualizado regularmente)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'DIGI móvel 150 GB', amountEUR: 5, note: '€/mês, sem fidelização' },
    { label: 'DIGI móvel ilimitado (1 linha)', amountEUR: 6, note: '€/mês' },
    { label: 'DIGI fibra 1 Gbps', amountEUR: 10, note: '€/mês' },
    { label: 'DIGI fibra 10 Gbps PRO-DIGI', amountEUR: 15, note: '€/mês' },
    { label: 'WOO móvel 100 GB', amountEUR: 5, note: '€/mês, sem fidelização' },
    { label: 'WOO móvel ilimitado', amountEUR: 7, note: '€/mês' },
    { label: 'MEO/NOS/Vodafone móvel 100 GB', amountEURMin: 14.99, amountEURMax: 15, note: '€/mês, contrato' },
    { label: 'SIM pré-pago', amountEURMin: 10, amountEURMax: 15 },
    { label: 'Combinado móvel+fibra (grande operador)', amountEURMin: 40, amountEURMax: 70, note: '€/mês' }
  ],
  sources: [
    { title: 'ANACOM — regulador das comunicações', url: 'https://www.anacom.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANACOM — Tarifário.pt (comparação de operadores)', url: 'https://tarifarios.anacom.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DIGI Portugal — tarifários móveis', url: 'https://www.digi.pt/tarifarios-telemovel/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DIGI Portugal — fibra', url: 'https://www.digi.pt/net/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'WOO — tarifários móveis', url: 'https://www.woo.pt/tarifarios-telemovel', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 74-B/2021 — serviços de comunicações', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2021-170593125', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CNIACC — arbitragem nacional de telecomunicações', url: 'https://www.cniacc.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 120
}
