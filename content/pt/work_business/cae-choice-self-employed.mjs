export default {
  editorialVoice: 'hackportugal',
  id: 'cae-choice-self-employed',
  categoryId: 'work_business',
  title: 'CAE: como escolher o código de atividade para recibos verdes',
  tldr: 'Para recibos verdes, você não escolhe a “profissão no cartão de visita”, mas sim a atividade fiscal nas Finanças: código CIRS art. 151 para profissões liberais e/ou CAE Rev.4 para atividade empresarial. Um erro afeta o IVA, a retenção na fonte, a Segurança Social e, por vezes, o IFICI. Em 2026, o limiar de isenção de IVA ao abrigo do art. 53 CIVA é de 15 000 € de volume de negócios por ano; a taxa normal da Segurança Social para trabalhador independente é de 21,4%. O CAE pode ser alterado online, mas é melhor não brincar com alterações retroativas.',
  tags: ['cae', 'recibosverdes', 'iva', 'ifici'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'cae-vs-cirs',
      title: '1. Perceber a diferença: CAE ≠ CIRS',
      content: [
        { kind: 'paragraph', text: 'Nos recibos verdes, um trabalhador independente pode ter dois tipos de códigos. CAE — Código de Atividade Económica, classificação das atividades económicas segundo a CAE Rev.4. CIRS art. 151 — lista de códigos profissionais para IRS: programadores, consultores, designers, médicos, advogados e outras prestações de serviços.' },
        { kind: 'paragraph', text: 'Se vende serviços como profissional, as Finanças esperam frequentemente um código CIRS. Se exerce uma atividade empresarial — comércio eletrónico, produção, aluguer de equipamento, agência, formação como atividade semelhante a empresa — é necessário um CAE. Pode ter um código principal e códigos adicionais.' },
        { kind: 'checklist', items: [
          'Desenvolvimento de software como freelancer: frequentemente CIRS 1332 / 1335 ou um código profissional próximo, e não apenas CAE',
          'Consultoria de TI como serviço empresarial: pode ser necessário CAE 62020 ou outro código da secção J',
          'Loja online: CAE de comércio, e não CIRS “consultor”',
          'Arrendamento de alojamento através de Alojamento Local (AL): CAE de alojamento, não CIRS',
          'Design, marketing, copywriting: normalmente CIRS, mas um modelo de agência pode exigir CAE',
          'Cursos e formação: depende do formato — aulas individuais, escola, plataforma online',
          'Se na invoice/recibo descreve um serviço que não existe na atividade escolhida, o código deve ser acrescentado antes do trabalho regular'
        ] }
      ]
    },
    {
      id: 'search-classificacao',
      title: '2. Procurar o código no Classificação.pt, não em fóruns',
      content: [
        { kind: 'paragraph', text: 'A pesquisa oficial de CAE está em classificacao.pt. Em 2026 é utilizada a CAE Rev.4. Pesquise por palavras em português: “consultoria informática”, “programação”, “comércio eletrónico”, “formação”, “design”, “marketing”, “alojamento”, “tradução”. Leia não só a designação, mas também as notas explicativas: o que está incluído e o que está excluído.' },
        { kind: 'checklist', items: [
          'Abra classificacao.pt/cae e pesquise pelo termo em PT',
          'Verifique o código completo de 5 dígitos, e não apenas a secção A–U',
          'Abra as notas explicativas: muitas vezes há exclusões',
          'Compare 2–3 códigos próximos: por exemplo software, consultoria, processamento de dados',
          'Verifique se o seu trabalho não se enquadra no CIRS art. 151 em vez de CAE',
          'Se a atividade for mista, escolha uma principal e acrescente secundárias',
          'Guarde uma captura de ecrã/URL do código: será útil para o contabilista e em caso de verificação'
        ] },
        { kind: 'warning', text: 'A designação em inglês ou noutra língua não tem valor. Na declaração de início/alteração de atividade, as Finanças trabalham com códigos e descrições em português.' }
      ]
    },
    {
      id: 'tax-effects',
      title: '3. Verificar as consequências fiscais: IVA, retenção, IRS',
      content: [
        { kind: 'paragraph', text: 'O código de atividade, por si só, nem sempre determina o imposto, mas desencadeia as perguntas certas nas Finanças: se o serviço está sujeito a IVA, se há isenção, se é necessária retenção na fonte, se se aplica o regime simplificado ou a contabilidade organizada.' },
        { kind: 'checklist', items: [
          'IVA art. 53 CIVA: em 2026, a isenção é possível se o volume de negócios do ano anterior não tiver excedido 15 000 € e se forem cumpridas as condições do regime',
          'Se o cliente estiver fora de Portugal, verifique as regras de localização do IVA e o reverse charge — especialmente B2B na UE',
          'Algumas operações médicas, educativas e de seguros podem ser isentas ao abrigo de outros artigos do CIVA, mas isto não é uma isenção automática para todos os professores/terapeutas',
          'A retenção na fonte em IRS surge sobretudo quando o cliente em Portugal está obrigado a reter (empresa ou entidade com contabilidade organizada); para particulares e a maioria dos clientes estrangeiros normalmente não há retenção. Para muitos serviços da tabela do art. 151 CIRS a taxa é de 25%, mas há exceções e dispensa em caso de baixo volume de negócios',
          'No regime simplificado, a matéria coletável depende do coeficiente (art. 31 CIRS): os serviços profissionais da tabela do art. 151 CIRS são normalmente considerados a 75%, outros serviços fora dessa lista a 35%, as vendas de bens a 15%; confirme o coeficiente exato consoante a natureza do rendimento',
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
        { kind: 'paragraph', text: 'Para trabalhador independente, a taxa normal de contribuições para a Segurança Social é de 21,4%. A base não é calculada diretamente a partir do CAE, mas sim do rendimento relevante: normalmente 70% do rendimento de serviços e 20% da venda de bens/produção. No entanto, o código ajuda a classificar a atividade e a evitar litígios quando há serviços e vendas mistos.' },
        { kind: 'paragraph', text: 'Para o IFICI — um regime de incentivo fiscal mais restrito, dirigido à investigação científica, à inovação e a certas funções altamente qualificadas, que sucedeu ao NHR para novos residentes mas não replica a sua amplitude —, o CAE pode ser importante não como uma “palavra mágica”, mas como prova de que a atividade pertence a uma área económica admissível ou a uma função altamente qualificada. Em 2026, as regras do IFICI estão ligadas a tipos específicos de atividade, ao empregador/cliente, à qualificação e ao registo dentro do prazo estabelecido.' },
        { kind: 'checklist', items: [
          'O primeiro ano de atividade pode dar isenção de Segurança Social até 12 meses, se for o primeiro registo como trabalhador independente',
          'Após a isenção, as declarações à Segurança Social são normalmente entregues trimestralmente',
          'Se for simultaneamente employee e tiver recibos verdes, pode haver isenção de contribuições como TI se as condições forem cumpridas',
          'Para o IFICI, verifique antecipadamente que o seu CAE/função coincide com a lista de atividades admissíveis',
          'Não altere o CAE retroativamente apenas por causa do IFICI — isto é um risco em caso de verificação',
          'Guarde contratos, invoices, descrição de serviços e diplomas/certificados: um CAE por si só não é suficiente'
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
              'Entregue o início de atividade antes de começar a operar e antes do primeiro recibo/fatura; a data de início deve corresponder ao início real da atividade (retroagir implica risco de coimas e correções)',
              'Escolha a atividade principal e as adicionais, se já forem necessárias',
              'Indique a previsão de volume de negócios — dela depende o regime de IVA',
              'Verifique o campo de IVA: art. 53, regime normal ou isenção especial',
              'Guarde o comprovativo da declaração'
            ] }
          ] },
          { id: 'change', title: 'Alteração de CAE/CIRS', content: [
            { kind: 'paragraph', text: 'Se iniciou uma nova linha de serviços, entregue a declaração de alterações antes de emitir recibos regulares pela nova atividade. A alteração é normalmente gratuita e feita online.' }
          ] }
        ] },
        { kind: 'warning', text: 'Se já tem volume de negócios, clientes da UE, IFICI, contratação de trabalhadores ou uma isenção de IVA discutível, não abra atividade “ao acaso”. Uma hora com um contabilista certificado costuma ser mais barata do que corrigir declarações de um ano inteiro.' }
      ]
    }
  ],
  costs: [
    { label: 'Entrega de início/alteração de atividade no Portal das Finanças', amountEUR: 0, note: 'Gratuito se fizer online por conta própria' },
    { label: 'Consulta com contabilista certificado sobre CAE/IVA/IFICI', amountEURMin: 50, amountEURMax: 150, note: 'Valor indicativo para uma consulta pontual; casos complexos de IFICI/IVA são mais caros' }
  ],
  sources: [
    {
      title: 'Pesquisa oficial de CAE Rev.4 — Classificação Portuguesa das Atividades Económicas',
      url: 'https://www.classificacao.pt/cae',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — início de atividade e obrigações fiscais',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Inicio_atividade.pdf',
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
      title: 'Código do IRS — art. 31.º (coeficientes do regime simplificado) e art. 101.º/101.º-B (retenção na fonte e dispensa)',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs31.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'IFICI — art. 58.º-A do EBF e Portaria n.º 352/2024/1 (atividades elegíveis e registo)',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/pages/faqs-01018.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'Segurança Social — Guia Prático do Trabalhador Independente',
      url: 'https://www.seg-social.pt/trabalhadores-independentes',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
