export default {
  editorialVoice: 'hackportugal',
  id: 'cae-choice-self-employed',
  categoryId: 'work_business',
  title: 'CAE: como escolher o código de atividade para recibos verdes',
  tldr: 'Para recibos verdes, você não escolhe uma «profissão no cartão de visita», mas sim uma atividade fiscal nas Finanças: código CIRS art. 151 para profissões liberais e/ou CAE Rev.4 para atividade empresarial. Um erro afeta o IVA, a retenção na fonte, a Segurança Social e, por vezes, o IFICI. Em 2026, o limiar de isenção de IVA ao abrigo do art. 53 CIVA é de 15 000 € de volume de negócios por ano; a taxa normal da Segurança Social para trabalhador independente é de 21,4%. O CAE pode ser alterado online, mas é melhor não brincar com efeitos retroativos.',
  tags: ['cae', 'recibosverdes', 'iva', 'ifici'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'cae-vs-cirs',
      title: '1. Compreender a diferença: CAE ≠ CIRS',
      content: [
        { kind: 'paragraph', text: 'Nos recibos verdes, um trabalhador independente pode ter dois tipos de códigos. CAE — Código de Atividade Económica, a classificação da atividade económica segundo a CAE Rev.4. CIRS art. 151 — a lista de códigos profissionais para IRS: programadores, consultores, designers, médicos, advogados e outras prestação de serviços.' },
        { kind: 'paragraph', text: 'Se você vende serviços enquanto profissional, as Finanças esperam frequentemente um código CIRS. Se exerce uma atividade empresarial — e-commerce, produção, aluguer de equipamento, agência, formação como atividade semelhante a uma empresa — é necessário um CAE. Pode ter um código principal e códigos adicionais.' },
        { kind: 'checklist', items: [
          'Desenvolvimento de software freelance: frequentemente CIRS 1332 / 1335 ou um código profissional próximo, e não apenas CAE',
          'Consultoria de IT como serviço empresarial: pode ser necessário o CAE 62020 ou outro código da secção J',
          'Loja online: CAE de comércio, e não CIRS «consultor»',
          'Arrendamento de alojamento através de alojamento local: CAE de alojamento, não CIRS',
          'Design, marketing, copywriting: normalmente CIRS, mas um modelo de agência pode exigir CAE',
          'Cursos e formação: depende do formato — aulas individuais, escola, plataforma online',
          'Se na invoice/recibo descrever um serviço que não existe na atividade escolhida, o código deve ser adicionado antes de começar trabalho regular'
        ] }
      ]
    },
    {
      id: 'search-classificacao',
      title: '2. Procurar o código no Classificação.pt, não em fóruns',
      content: [
        { kind: 'paragraph', text: 'A pesquisa oficial de CAE está em classificacao.pt. Em 2026 utiliza-se a CAE Rev.4. Pesquise por palavras em português: “consultoria informática”, “programação”, “comércio eletrónico”, “formação”, “design”, “marketing”, “alojamento”, “tradução”. Leia não só o nome, mas também as notas explicativas: o que está incluído e o que está excluído.' },
        { kind: 'checklist', items: [
          'Abra classificacao.pt/cae e pesquise pelo termo em PT',
          'Verifique o código completo de 5 dígitos, não apenas a secção A–U',
          'Abra as notas explicativas: é aí que frequentemente existem exclusões',
          'Compare 2–3 códigos próximos: por exemplo software, consultoria, processamento de dados',
          'Verifique se o seu trabalho não se enquadra no CIRS art. 151 em vez de CAE',
          'Se a atividade for mista, escolha uma principal e adicione secundárias',
          'Guarde um print/URL do código: será útil para o contabilista e em caso de inspeção'
        ] },
        { kind: 'warning', text: 'O nome em inglês ou noutra língua não tem força legal. Na declaração de início/alteração de atividade, as Finanças operam com códigos e descrições em português.' }
      ]
    },
    {
      id: 'tax-effects',
      title: '3. Verificar as consequências fiscais: IVA, retenção, IRS',
      content: [
        { kind: 'paragraph', text: 'O código de atividade, por si só, nem sempre determina o imposto, mas ativa as perguntas certas nas Finanças: se o serviço está sujeito a IVA, se existe isenção, se é necessária retenção na fonte, se se aplica o regime simplificado ou a contabilidade organizada.' },
        { kind: 'checklist', items: [
          'IVA art. 53 CIVA: em 2026 a isenção é possível se o volume de negócios do ano anterior não tiver excedido 15 000 € e se estiverem cumpridas as condições do regime',
          'Se o cliente estiver fora de Portugal, verifique as regras de localização do IVA e o reverse charge — especialmente B2B na UE',
          'Algumas operações médicas, educativas e de seguros podem estar isentas ao abrigo de outros artigos do CIVA, mas isso não é uma isenção automática para todos os formadores/terapeutas',
          'A retenção na fonte em IRS depende frequentemente do tipo de serviço e do cliente; para muitos serviços a taxa é de 25%, mas há exceções e dispensa em caso de baixo volume de negócios',
          'No regime simplificado, a matéria coletável depende do coeficiente: muitos serviços são considerados a 75%, vendas de bens a 15%, mas os detalhes dependem do código e da natureza do rendimento',
          'Se o volume de negócios crescer, verifique antecipadamente a passagem para IVA normal e a obrigação de entregar declarações periódicas',
          'Para operações com a UE, pode ser necessária a declaração recapitulativa e o registo VIES correto'
        ] },
        { kind: 'warning', text: 'Não escolha um código “conveniente” apenas por causa do IVA ou do IRS. Se a descrição do recibo não corresponder à atividade, a AT tem fundamento para liquidar imposto adicional, coima e juros.' }
      ]
    },
    {
      id: 'social-security-ifici',
      title: '4. Ter em conta a Segurança Social e o IFICI',
      content: [
        { kind: 'paragraph', text: 'Para trabalhador independente, a taxa normal de contribuições para a Segurança Social é de 21,4%. A base não é calculada diretamente a partir do CAE, mas sim do rendimento relevante: normalmente 70% do rendimento de serviços e 20% da venda de bens/produção. Contudo, o código ajuda a classificar a atividade e a evitar disputas quando tem serviços e vendas mistos.' },
        { kind: 'paragraph', text: 'Para o IFICI, o regime de incentivo fiscal que substituiu o antigo NHR para novos residentes, o CAE pode ser crítico não como “palavra mágica”, mas como prova de que a atividade pertence a uma área económica admissível ou a uma função altamente qualificada. Em 2026, as regras do IFICI estão ligadas a tipos concretos de atividade, ao empregador/cliente, à qualificação e ao registo dentro do prazo definido.' },
        { kind: 'checklist', items: [
          'O primeiro ano de atividade pode dar isenção da Segurança Social até 12 meses, se for o primeiro registo como trabalhador independente',
          'Após a isenção, as declarações da Segurança Social são normalmente entregues trimestralmente',
          'Se você for simultaneamente employee e tiver recibos verdes, pode haver isenção de contribuições como TI se forem cumpridas as condições',
          'Para o IFICI, confirme antecipadamente que o seu CAE/função coincide com a lista de atividades admissíveis',
          'Não altere o CAE retroativamente apenas por causa do IFICI — isso é um risco em caso de inspeção',
          'Guarde contratos, invoices, descrição de serviços e diplomas/certificados: o CAE sozinho não é suficiente'
        ] }
      ]
    },
    {
      id: 'register-change',
      title: '5. Registar ou alterar a atividade nas Finanças',
      content: [
        { kind: 'paragraph', text: 'Os códigos são indicados na declaração de início de atividade ou na declaração de alterações no Portal das Finanças. São necessários NIF, acesso ao Portal das Finanças ou CMD, morada, volume de negócios previsto, regime de IVA, IBAN e os CAE/CIRS escolhidos.' },
        { kind: 'substeps', items: [
          { id: 'start', title: 'Abertura de atividade', content: [
            { kind: 'checklist', items: [
              'Portal das Finanças → Cidadãos → Serviços → Atividade → Início de Atividade',
              'Indique a data de início: deve corresponder ao primeiro serviço/venda real',
              'Escolha a atividade principal e as adicionais, se já forem necessárias',
              'Indique a previsão de volume de negócios — dela depende o regime de IVA',
              'Verifique o campo de IVA: art. 53, regime normal ou isenção especial',
              'Guarde o comprovativo da declaração'
            ] }
          ] },
          { id: 'change', title: 'Alteração de CAE/CIRS', content: [
            { kind: 'paragraph', text: 'Se iniciou uma nova linha de serviços, entregue a declaração de alterações antes de emitir recibos regulares para a nova atividade. A alteração é normalmente gratuita e feita online.' }
          ] }
        ] },
        { kind: 'warning', text: 'Se já tem volume de negócios, clientes da UE, IFICI, trabalhadores contratados ou uma isenção de IVA discutível, não abra atividade “ao acaso”. Uma hora com um contabilista certificado é normalmente mais barata do que corrigir declarações de um ano.' }
      ]
    }
  ],
  costs: [
    { label: 'Entrega de início/alteração de atividade no Portal das Finanças', amountEUR: 0, note: 'Autonomamente online, gratuito' },
    { label: 'Consulta de contabilista certificado sobre CAE/IVA/IFICI', amountEURMin: 50, amountEURMax: 150, note: 'Valor indicativo para uma consulta pontual; casos complexos de IFICI/IVA são mais caros' }
  ],
  sources: [
    {
      title: 'Pesquisa oficial CAE Rev.4 — Classificação Portuguesa das Atividades Económicas',
      url: 'https://www.classificacao.pt/cae',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — início de atividade e obrigações fiscais',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Inicio_actividade.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA — art. 53, regime especial de isenção',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — Guia Prático do Trabalhador Independente',
      url: 'https://www.seg-social.pt/trabalhadores-independentes',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
