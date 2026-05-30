export default {
  editorialVoice: 'hackportugal',
  id: 'recibos-verdes',
  categoryId: 'work_business',
  title: 'Recibos Verdes — trabalhar como independente',
  tldr: 'Recibos Verdes — recibos digitais de trabalhador independente no Portal das Finanças. São usados por freelancers e empresários em nome individual. No regime simplificado, a base de IRS depende do tipo de rendimento: para a maioria dos serviços profissionais — 75% do volume de negócios, para outros tipos de atividade — outros coeficientes segundo o CIRS art. 31. As contribuições sociais são 21,4% do relevant income (normalmente 70% dos serviços ou 20% das vendas). IVA: isenção art. 53 CIVA para volume de negócios anual ≤ 15 000 €.',
  tags: ['recibos verdes', 'trabalhador independente', 'trabalho independente', 'atividade'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'open',
      title: 'Abrir Início de Atividade',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Entrar no Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Com o seu NIF e palavra-passe.' }
          ]},
          { id: 'o2', title: '2. Cidadão → Alterar Atividade → Abrir Atividade', content: [
            { kind: 'paragraph', text: 'Escolher o código de atividade: CAE e/ou código da tabela do artigo 151.º CIRS. Para serviços profissionais (TI, consultoria, design), muitas vezes o código CIRS é o mais importante; em caso de dúvida, confirme com um contabilista — a escolha influencia os IRS coefficients e a retenção.' }
          ]},
          { id: 'o3', title: '3. Escolher o regime', content: [
            { kind: 'checklist', items: [
              'Regime Simplificado — regime padrão para volume de negócios anual até 200 000 €. Os coeficientes da base dependem do tipo de rendimento (nem sempre 75%)',
              'Contabilidade Organizada — para volumes de negócios elevados ou por opção voluntária, exige contabilista certificado'
            ]}
          ]},
          { id: 'o4', title: '4. IVA', content: [
            { kind: 'checklist', items: [
              'Regime de isenção (CIVA art. 53) — para volume de negócios anual/previsto ≤ 15 000 € e cumprimento das condições; ao abrir atividade, o volume de negócios previsto é calculado proporcionalmente ao ano',
              'Confirmar: «Em caso de ultrapassagem normal do limite do art. 53 durante o ano, a alteração é apresentada em janeiro do ano seguinte, e o IVA aplica-se a partir de fevereiro; em caso de perda de outras condições, os prazos podem ser diferentes. Após a passagem para o regime normal, passam a existir declarações periódicas de IVA e pagamentos de IVA». A taxa normal é 23% (ou 13%/6% para determinados serviços). Para clientes B2B no estrangeiro, aplica-se frequentemente reverse charge / regras de localização'
            ]}
          ]},
          { id: 'o5', title: '5. Segurança Social', content: [
            { kind: 'paragraph', text: 'Na primeira abertura de atividade, o enquadramento na Segurança Social normalmente só começa a produzir efeitos após um período inicial (habitualmente os primeiros 12 meses — isenção).\n\nDepois, a taxa é de 21,4% sobre o rendimento relevante: 70% dos serviços ou 20% das vendas/produção/hotel/restaurante, com declaração trimestral e possibilidade de ajuste da base dentro das regras.' }
          ]}
        ]}
      ]
    },
    {
      id: 'invoicing',
      title: 'Emitir Recibo Verde (recibo eletrónico de trabalhador independente)',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: '1. No Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Cidadão → Recibos e Faturas → Emitir Fatura-Recibo (se o serviço já foi pago), Fatura (se primeiro emite a fatura) ou Recibo (quando o pagamento é recebido). Isto não depende diretamente de estar no regime de IVA ou em isenção.' }
          ]},
          { id: 'i2', title: '2. Preencher os dados do cliente', content: [
            { kind: 'paragraph', text: 'Nome, NIF, morada. Para clientes estrangeiros, o IVA depende das regras de localização: serviços B2B a uma empresa estrangeira muitas vezes seguem sem IVA português / reverse charge ou operação fora do campo; B2C e digital services podem ser tributados de outra forma. Verifique de acordo com o tipo de serviço e o estatuto do cliente.' }
          ]},
          { id: 'i3', title: '3. Indicar o montante e a categoria', content: [
            { kind: 'paragraph', text: 'Os serviços são incluídos na fatura. Escrever: «Se não estiver em isenção art. 53, ao emitir o documento deve escolher a taxa de IVA aplicável ou o motivo de não liquidação/isenção. Para clientes estrangeiros e reverse charge, não confie no “automático”: verifique as regras de localização e o estatuto do cliente».' }
          ]},
          { id: 'i4', title: '4. Retenção de imposto (retenção)', content: [
            { kind: 'paragraph', text: 'A retenção na fonte nem sempre se aplica: normalmente quando o cliente português é uma empresa/entidade com organized accounting, obrigada a reter. Os particulares normalmente não fazem retenção. Pequenos TI podem ter dispensa de retenção nas condições do CIRS art. 101.º-B. As taxas dependem do tipo de rendimento: frequentemente 25% para professional services (art. 151), 11,5% para alguns outros rendimentos, 16,5% para determinados casos de IP/outros. Para clientes estrangeiros — normalmente 0.' }
          ]},
          { id: 'i5', title: '5. Assinar e enviar ao cliente', content: [
            { kind: 'paragraph', text: 'Documento digital. O cliente regista-o na sua contabilidade.' }
          ]}
        ]}
      ]
    },
    {
      id: 'taxes',
      title: 'Impostos no fim do ano',
      content: [
        { kind: 'paragraph', text: 'No regime simplificado:' },
        { kind: 'checklist', items: [
          'Para muitos serviços profissionais, a base de IRS = 75% do volume de negócios; para outros tipos de rendimento aplicam-se outros coeficientes segundo o CIRS art. 31',
          'Aplica-se a escala progressiva de IRS para 2026: 11,97%–48% em 9 escalões',
          'Contribuições sociais de 21,4% sobre o rendimento relevante: 70% dos serviços ou 20% das vendas/produção, com declaração trimestral',
          'Substituir por: «Pagamentos por conta de IRS podem ser determinados pela AT com base na declaração/liquidação de IRS anterior; não é um imposto automático para todos os TI. Se forem determinados, normalmente são pagos 3 vezes por ano — em julho, setembro e dezembro».'
        ]},
        { kind: 'paragraph', text: 'Para sujeitos abrangidos pelo IFICI (novo regime, substituiu o NHR desde 2024): taxa fixa de 20% sobre atividade qualificada das listas aprovadas, desde que cumpridas as condições do regime.' }
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos',
      content: [
        { kind: 'checklist', items: [
          'Contabilista certificado — recomendado, 50–150 €/mês',
          'Guarde todos os Recibos Verdes durante 10 anos',
          'Entregue o IRS anualmente entre abril e junho',
          'Se os clientes forem apenas internacionais, guarde comprovativos bancários para AIMA/Finanças',
          'O primeiro ano sem contribuições sociais é uma excelente oportunidade para começar'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Recibos Verdes', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — Trabalhadores Independentes', url: 'https://www.seg-social.pt/trabalhadores-independentes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Abrir Atividade', url: 'https://www.gov.pt/cidadaos/-/informacoes/abrir-atividade-de-trabalhador-independente', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
