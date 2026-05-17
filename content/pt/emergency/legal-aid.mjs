export default {
  editorialVoice: 'hackportugal',
  id: 'legal-aid',
  categoryId: 'emergency_rights',
  title: 'Apoio jurídico em Portugal — como encontrar e onde obter gratuitamente',
  tldr: 'Em Portugal, o acesso ao apoio jurídico é um direito constitucional. O apoio jurídico gratuito (Apoio Judiciário) para pessoas com baixos rendimentos é pedido através da Segurança Social. Advogados pagos — de 60 €/hora a mais de 500 €/hora em sociedades de topo. A Ordem dos Advogados é o registo de todos os advogados licenciados. Para questões simples, há consultas gratuitas na Junta de Freguesia e em clínicas universitárias.',
  tags: ['jurista', 'advogado', 'apoio jurídico'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Tipos de juristas em Portugal',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Advogado (Advogado)', content: [
            { kind: 'paragraph', text: 'Jurista plenamente habilitado, licenciado pela Ordem dos Advogados. Pode representar em qualquer tribunal. Formação obrigatória de 5 anos + 18 meses de estágio + exame.' }
          ]},
          { id: 't2', title: 'Solicitador', content: [
            { kind: 'paragraph', text: 'Jurista com prática mais limitada: não pode representar nos tribunais superiores. Adequado para imobiliário, heranças, registos. Normalmente mais barato. Licença — Ordem dos Solicitadores (OSAE).' }
          ]},
          { id: 't3', title: 'Jurista / consultor', content: [
            { kind: 'paragraph', text: 'Não pode representar em tribunal. Dá consultas. Muitas vezes, juristas especializados (imigração, impostos) trabalham nesta função para estrangeiros.' }
          ]}
        ]}
      ]
    },
    {
      id: 'free-aid',
      title: 'Apoio jurídico gratuito (Apoio Judiciário)',
      content: [
        { kind: 'paragraph', text: 'Ao abrigo da Lei 34/2004. Têm direito as pessoas com rendimentos abaixo do limiar. Aplica-se em processos cíveis, administrativos e penais.' },
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Quem tem direito', content: [
            { kind: 'checklist', items: [
              'Residentes em Portugal (independentemente da nacionalidade, desde que tenham estatuto legal)',
              'Rendimento do agregado familiar inferior a 3/4 IAS (= ~402,85 €/mês por membro do agregado em 2026, IAS = 537,13 €) — isenção total',
              'De 3/4 a 1,5× IAS (~402,85 €–805,70 €/mês por membro do agregado em 2026) — pagamento parcial',
              'Pessoas coletivas — em casos específicos',
              'Para refugiados e grupos vulneráveis — automaticamente'
            ]}
          ]},
          { id: 'a2', title: 'O que cobre', content: [
            { kind: 'checklist', items: [
              'Taxa de justiça em tribunal (total ou parcial)',
              'Advogado (nomeado a partir da lista)',
              'Solicitador (para alguns atos)',
              'Peritagens (mediante justificação)',
              'NÃO cobre: serviços notariais (exceto casos especiais)'
            ]}
          ]},
          { id: 'a3', title: 'Como pedir', content: [
            { kind: 'checklist', items: [
              'Pedido na Segurança Social (online através da SSD ou presencialmente)',
              'Documentos: comprovativo de rendimentos, atestado de residência, descrição do caso',
              'Prazo de análise — 30 dias',
              'Após aprovação — advogado nomeado',
              'Pode impugnar a recusa em tribunal'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'low-cost-options',
      title: 'Consultas gratuitas / de baixo custo',
      content: [
        { kind: 'checklist', items: [
          '⚖️ Gabinete de Apoio ao Cidadão — na Junta de Freguesia; 1–2 dias por mês de consulta jurídica gratuita',
          '🏛️ Espaço Justiça — rede pública; consultas iniciais gratuitas',
          '🎓 Faculdades de Direito — clínicas junto das faculdades de Direito em Lisboa, Porto, Coimbra. Gratuito, com estudantes a trabalhar sob orientação de professores',
          '📞 DECO Proteste — defesa dos direitos dos consumidores; linha jurídica (213 710 000) para associados. Subscrição ~12 €/mês',
          '👷 Sindicatos — apoio jurídico gratuito aos membros em questões laborais',
          '🏛️ Provedor de Justiça — queixas gratuitas contra entidades públicas',
          '💻 ePortugal — recursos informativos sobre procedimentos comuns',
          '🇺🇦 Para ucranianos: Assembleia da República — apoio gratuito a refugiados através da Cruz Vermelha'
        ]}
      ]
    },
    {
      id: 'paid-lawyers',
      title: 'Advogados pagos — como escolher',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Onde procurar', content: [
            { kind: 'checklist', items: [
              'Portal da Ordem dos Advogados (oa.pt) — registo oficial, filtro por cidade e especialização',
              'Portal OSAE (osae.pt) — solicitadores',
              'Recomendações de conhecidos — o mais fiável',
              'Advogados bilingues: filtro por Lisboa + línguas estrangeiras',
              'Para imigração — experiência com a AIMA é crítica'
            ]}
          ]},
          { id: 'p2', title: 'Preços', content: [
            { kind: 'checklist', items: [
              '💶 Primeira consulta: 50–150 € (30–60 minutos)',
              '💶 Avença para pequenas empresas: 200–500 €/mês',
              '💶 Acompanhamento de imigração (D7/D8): 800–2500 €',
              '💶 Golden Visa: 3 000–10 000 €',
              '💶 Naturalização: 600–1500 €',
              '💶 Divórcio por mútuo acordo: 500–1200 €',
              '💶 Compra de imóvel: 0,5–1% do preço',
              '💶 Processo judicial: depende da complexidade, frequentemente uma parte fixa + % do valor ganho'
            ]}
          ]},
          { id: 'p3', title: 'Primeira reunião', content: [
            { kind: 'checklist', items: [
              '📋 Traga TODOS os documentos do caso',
              '💰 Pergunte pelo orçamento total — não apenas pela primeira consulta',
              '⏰ Informe-se sobre o prazo estimado',
              '✍️ O contrato de acompanhamento de longo prazo (contrato de avença) é obrigatório para acompanhamento de longo prazo',
              '📃 Fatura: IVA 23%',
              '🗣️ Em que línguas trabalham (PT/EN/ES/FR/por vezes RU)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'types-of-cases',
      title: 'Quando é necessário um advogado',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Recusa da AIMA de autorização de residência / autorização de residência permanente — é obrigatório um advogado com prática em imigração',
          '🏛️ Recusa de nacionalidade — recurso através do IRN',
          '🏠 Litígio com senhorio / despejo — advogado com urgência (os prazos judiciais são curtos)',
          '💼 Despedimento / litígio laboral — ACT + advogado',
          '🚗 Acidente rodoviário com feridos — advogado especializado em seguros',
          '💰 Questões de sanções (cidadãos da Federação Russa/Brasil) — advogado especializado em cumprimento de sanções',
          '⚖️ Divórcio, partilha de bens',
          '🧒 Pensão de alimentos, guarda',
          '💼 Contratos empresariais (constituição, M&A)',
          '🏠 Compra de imóvel — verificação jurídica',
          '🧑‍⚕️ Erros médicos — advogados especializados',
          '💀 Herança — normalmente um solicitador é suficiente'
        ]}
      ]
    },
    {
      id: 'rights-in-court',
      title: 'Os seus direitos ao lidar com um advogado',
      content: [
        { kind: 'checklist', items: [
          '⚖️ O advogado está vinculado ao segredo profissional (sigilo profissional) — absolutamente',
          '📃 Direito a contrato escrito (contrato de avença)',
          '💰 Direito a orçamento de despesas (orçamento)',
          '🔄 Direito de mudar de advogado a qualquer momento',
          '📋 Direito a receber cópias de todos os documentos do processo',
          '🚫 Queixa contra advogado — Ordem dos Advogados (Conselho de Deontologia)',
          '🏛️ Indemnização em caso de negligência profissional — através do seguro de responsabilidade civil (todos os advogados são obrigados a tê-lo)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Ordem dos Advogados (OA) — registo de advogados', url: 'https://portal.oa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'OSAE — Ordem dos Solicitadores e dos Agentes de Execução', url: 'https://www.osae.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 34/2004 — Acesso ao direito e aos tribunais', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2004-34510275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — Apoio Judiciário', url: 'https://www.seg-social.pt/apoio-judiciario', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Provedor de Justiça — provedor de justiça de Portugal', url: 'https://www.provedor-jus.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
