export default {
  editorialVoice: 'hackportugal',
  id: 'car-import',
  categoryId: 'auto_ownership',
  title: 'Importação de automóvel para Portugal',
  tldr: 'Para residentes existe o benefício **isenção de ISV por transferência de residência** (CISV art. 58) — importação sem ISV. Condições principais: residência normal fora de Portugal durante **≥ 6 meses** consecutivos antes da mudança, posse do automóvel durante **≥ 6 meses** antes da transferência da residência, automóvel comprado em condições gerais (não tax-free), submissão da DAV no **prazo de 12 meses** a contar da data em que se tornou residente, não vender durante 12 meses após a importação, um automóvel por pessoa. Se o automóvel for importado **de um país fora da UE**, aplica-se adicionalmente uma isenção aduaneira separada de direitos/IVA ao abrigo do Regulamento (UE) 1186/2009 — aí existe o requisito de **12 meses** de residência fora do território aduaneiro da UE (não confundir com a condição de 6 meses do ISV). Sem benefício — ISV + IUC anual. Para **BEV 100%** o ISV é normalmente 0 €; híbridos/PHEV — taxas especiais reduzidas.',
  tags: ['automóvel', 'desalfandegamento', 'isv', 'matrícula'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'options',
      title: 'Duas vias',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'A. Benefício de ISV — isenção por transferência de residência', content: [
            { kind: 'checklist', items: [
              'Você transfere a residência normal para Portugal (obteve autorização de residência/CRUE, estabeleceu fiscal residence)',
              'Residência normal fora de Portugal — **≥ 6 meses** consecutivos antes da transferência (CISV art. 58). NÃO 12 meses — 12 meses refere-se à isenção aduaneira SEPARADA de direitos/IVA na importação de fora da UE',
              'Posse do automóvel — **≥ 6 meses** antes da transferência da residência',
              'Automóvel comprado em condições gerais (não tax-free / não em regime diplomático)',
              'Submissão da DAV — **no prazo de 12 meses** a contar da data da transferência da residência',
              'Não vender o automóvel **durante 12 meses** após a importação (caso contrário, o ISV é reposto)',
              'Apenas UM automóvel por pessoa',
              'Na importação de fora da UE: é adicionalmente exigida residência ≥ 12 meses fora do território aduaneiro da UE + posse do automóvel para isenção de direitos/IVA ao abrigo do Reg. (UE) 1186/2009'
            ]}
          ]},
          { id: 'o2', title: 'B. Importação normal — com ISV', content: [
            { kind: 'paragraph', text: 'Se as condições do benefício não forem cumpridas — ISV (Imposto sobre Veículos). É calculado com base na cilindrada + CO2 + idade. Para um automóvel novo pode ser 5 000-30 000 €. Para **100% elétricos** o ISV é normalmente 0 €, mas mantêm-se os custos de registo. Para híbridos/plug-in híbridos aplicam-se taxas e condições especiais. Na importação de fora da UE, os direitos aduaneiros e o IVA são verificados separadamente.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documentos',
      content: [
        { kind: 'checklist', items: [
          'Documento original do veículo / livrete técnico (normalmente apostilha + tradução)',
          'Passaporte + autorização de residência',
          'NIF',
          'Comprovativo de morada em Portugal',
          '«Carta Verde» válida',
          'Fatura de compra (se o automóvel for novo ou tiver sido comprado recentemente)',
          'Comprovativo de residência normal no estrangeiro: para o benefício de ISV — ≥ 6 meses; para o benefício aduaneiro na importação de fora da UE — ≥ 12 meses. Documentos: CRUE/autorização de residência no país anterior, residência fiscal, faturas de serviços públicos, contrato de arrendamento',
          'Certificado de Conformidade (CoC) do fabricante — para automóveis da UE'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Passo a passo',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Entrada em Portugal', content: [
            { kind: 'paragraph', text: 'Entrar com o automóvel com as matrículas atuais. Notificar a Autoridade Tributária (serviço fiscal) no prazo de 20 dias através do e-AT.' }
          ]},
          { id: 's2', title: '2. Inspeção técnica (IPO)', content: [
            { kind: 'paragraph', text: 'Num dos centros IPO. ~40 €. Obter o certificado B (para automóvel não registado).' }
          ]},
          { id: 's3', title: '3. Registo: DAV na AT e matrícula', content: [
            { kind: 'paragraph', text: 'Processo correto: 1) aprovação técnica/inspeção/CoC, se necessário, através do IMT; 2) submissão da **DAV (Declaração Aduaneira de Veículo)** na AT e pagamento do ISV ou obtenção da isenção; 3) após a atribuição da matrícula, encomendar as chapas de matrícula; 4) registar o automóvel no IRN/Conservatória/Automóvel Online.' }
          ]},
          { id: 's4', title: '4. ISV — pagamento ou isenção', content: [
            { kind: 'paragraph', text: 'Na DAV, declarar o regime: pagar o ISV ou solicitar **isenção de ISV por transferência de residência** com os documentos. Para automóveis de fora da UE, tratar separadamente do regime aduaneiro e verificar a isenção de direitos/IVA.' }
          ]},
          { id: 's5', title: '5. Obter o Documento Único Automóvel (livrete)', content: [
            { kind: 'paragraph', text: 'Documento único = livrete + registo. Chega por correio em 10-30 dias.' }
          ]},
          { id: 's6', title: '6. Substituir as matrículas', content: [
            { kind: 'paragraph', text: 'Encomendar chapas de matrícula portuguesas (~50 €). Instalar. Agora o automóvel está totalmente no sistema português.' }
          ]},
          { id: 's7', title: '7. Fazer um seguro português', content: [
            { kind: 'paragraph', text: 'Mudar para um seguro português (Tranquilidade, Liberty, Fidelidade, etc.). A antiga «Carta Verde» deixa de ser relevante.' }
          ]}
        ]}
      ]
    },
    {
      id: 'annual',
      title: 'Obrigações anuais',
      content: [
        { kind: 'checklist', items: [
          'IUC (Imposto Único de Circulação) — imposto anual, por motor + CO2. 30-500 €/ano',
          'Seguro — 250-700 €/ano',
          'IPO (inspeção técnica) — de 2 em 2 anos para automóveis até 8 anos, anualmente para os mais antigos',
          'Via Verde (pagamento de portagens) — opcional'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IPO (inspeção técnica)', amountEUR: 40 },
    { label: 'Registo IMT + DUA', amountEURMin: 55, amountEURMax: 80 },
    { label: 'Matrículas', amountEURMin: 30, amountEURMax: 80 },
    { label: 'ISV (se sem benefício)', amountEURMin: 500, amountEURMax: 20000, note: 'por cilindrada/CO2/idade' },
    { label: 'IUC anual', amountEURMin: 30, amountEURMax: 500 }
  ],
  timelineDaysMin: 10,
  timelineDaysMax: 60,
  sources: [
    { title: 'Portal das Finanças (portal fiscal) — ISV e transferência de residência', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IMT — Registo de veículo', url: 'https://www.imt-ip.pt/sites/imtt/portugues/Paginas/imtt.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Importar veículo', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/importar-um-veiculo-para-portugal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
