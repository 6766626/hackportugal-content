export default {
  editorialVoice: 'hackportugal',
  id: 'abono-de-familia',
  categoryId: 'education_children',
  title: 'Abono de Família — prestação para crianças',
  tldr: 'Abono de Família — prestação para crianças/jovens até aos 16 anos; depois dos 16 — mediante confirmação de frequência escolar, com limites de idade por nível de ensino (normalmente até aos 24 anos; em caso de deficiência podem aplicar-se regras especiais/prolongamento até aos 27). O valor é aproximadamente 44,77 €–190,98 €/mês no abono base (depende do escalão e da idade), além de eventuais majorações. O pedido é normalmente feito através da Segurança Social Direta; após aprovação, o pagamento é feito mensalmente para o IBAN registado. Cidadãos estrangeiros com residência legal em Portugal e NISS podem ter direito, sujeito à verificação de rendimentos/recursos, composição do agregado familiar, idade e escolaridade da criança.',
  tags: ['abono', 'prestação', 'família', 'crianças'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'who',
      title: 'Quem tem direito',
      content: [
        { kind: 'checklist', items: [
          'Residente em Portugal com NISS',
          'Crianças até aos 16 anos — sem condição de escolaridade; a partir dos 16 anos — normalmente é exigida prova escolar',
          'Rendimento familiar abaixo do limite (depende do escalão — confirme os valores actualizados por ano)',
          'Para crianças com mais de 16 anos, normalmente é necessário confirmar a frequência/situação escolar; para as mais novas, a escola não é uma condição. A inscrição no SNS é útil, mas não é uma condição base do abono',
          'Cidadãos estrangeiros com residência legal em Portugal e NISS podem ter direito nas mesmas condições de verificação de rendimentos/recursos, composição do agregado familiar, idade e escolaridade da criança; o NISS por si só não garante o pagamento. O DL 8/2019 eliminou as antigas restrições relativas ao período mínimo de residência'
        ]},
        { kind: 'paragraph', text: 'O DL 8/2019 e reformas posteriores aboliram o período mínimo de residência para o Abono.' }
      ]
    },
    {
      id: 'amount',
      title: 'Valor (para 2026)',
      content: [
        { kind: 'paragraph', text: 'É determinado pelo escalão de rendimento. Os limites estão indexados ao IAS 2026 = 537,13 €. Valores de Janeiro de 2026 segundo o ISS:' },
        { kind: 'checklist', items: [
          '1º escalão (rendimento mais baixo) — 190,98 € por mês por criança ≤36 meses; 75,13 € por criança mais velha',
          '2º escalão — 161,65 € / 75,13 €',
          '3º escalão — 132,07 € (≤36 meses) / 59,33 € (36–72 meses) / 54,35 € (>72 meses)',
          '4º escalão — 88,43 € para crianças ≤36 meses; 44,77 € para 36–72 meses; após 72 meses, confirmar o direito (muitas vezes o abono base do 4.º escalão não é pago)',
          '5º escalão — o Abono não é pago'
        ]},
        { kind: 'paragraph', text: 'Famílias monoparentais: +35%. Bonificação por deficiência — complemento fixo em caso de deficiência. Majoração extraordinária adicional — para o 2.º e seguintes filhos ≤36 meses nos escalões 1–4. Os valores actualizados e os limites dos escalões estão sempre em seg-social.pt.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como pedir',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Entrar na Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'seg-social.pt → SSD → acesso através da Chave Móvel Digital ou NISS+palavra-passe.' }
          ]},
          { id: 'a2', title: '2. «Família» → «Abono de Família»', content: [
            { kind: 'paragraph', text: 'Menu → «Requerer Abono de Família». Preencher online.' }
          ]},
          { id: 'a3', title: '3. Anexar documentos', content: [
            { kind: 'checklist', items: [
              'Certidão de nascimento da criança (digitalização)',
              'NISS e NIF da criança',
              'Comprovativo da escola (para idade de escolaridade obrigatória)',
              'IBAN para o pagamento'
            ]}
          ]},
          { id: 'a4', title: '4. Aguardar a confirmação', content: [
            { kind: 'timeline', text: '30–60 dias. A data de início do pagamento depende da data em que nasceu o direito e do prazo de apresentação do pedido: se for apresentado a tempo, pode ser pago desde uma data anterior; em caso de pedido tardio, normalmente é pago apenas a partir do mês seguinte ao pedido. Para recém-nascidos, confirme o prazo especial de pedido.' }
          ]}
        ]}
      ]
    },
    {
      id: 'updates',
      title: 'Manutenção',
      content: [
        { kind: 'paragraph', text: 'O escalão é recalculado automaticamente após a entrega do IRS (Agosto-Setembro). Se o IRS não tiver sido entregue/não existirem dados fiscais ou se a família se tiver mudado recentemente, a Segurança Social pode pedir prova de rendimentos/condição de recursos. Para crianças/jovens com mais de 16 anos, confirme anualmente a escolaridade na SSD dentro do prazo indicado pela SS (prova escolar).' },
        { kind: 'paragraph', text: 'Em caso de alteração de morada, escola ou rendimento — actualize os dados na SSD no prazo de 30 dias.' }
      ]
    },
    {
      id: 'related',
      title: 'Prestações relacionadas',
      content: [
        { kind: 'checklist', items: [
          'Bolsa de Estudo — bolsa para alunos de famílias com baixos rendimentos',
          'ASE (Acção Social Escolar) — refeições gratuitas, transporte, manuais escolares',
          'Garantia para a Infância — mecanismo automático/de cálculo de complemento para crianças de agregados familiares com rendimentos muito baixos; depende não apenas do escalão abono, mas também do IRS/rendimento da família',
          'Subsídio Parental — prestações de parentalidade (mãe/pai)',
          'Licença Parental — licença parental (120–180 dias)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Segurança Social — Abono de Família', url: 'https://www.seg-social.pt/abono-de-familia-para-criancas-e-jovens', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Pedir Abono de Família', url: 'https://eportugal.gov.pt/servicos/pedir-o-abono-de-familia-para-criancas-e-jovens', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 176/2003 — Abono de Família', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/176-2003', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
