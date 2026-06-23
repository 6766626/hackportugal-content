export default {
  editorialVoice: 'hackportugal',
  id: 'aima-online-2026',
  categoryId: 'residence_permit',
  title: 'Renovar a autorização de residência através do portal online da AIMA',
  tldr: 'Em 2026, a renovação da autorização de residência deve ser iniciada online, mas o percurso depende da data de caducidade e do tipo de cartão. Os cartões comuns caducados a partir de 01.07.2025 são renovados através de portal-renovacoes.aima.gov.pt. Cartões antigos caducados entre 22.02.2020 e 30.06.2025 seguem por services.aima.gov.pt/RAR/reqrenew ou pelo percurso indicado por email pela AIMA/EMAIMA; CPLP, ARI e cartões de familiares de cidadãos da UE têm regras próprias. Segundo o gov.pt, o pedido pode ser feito desde 90 dias antes do fim da validade. Para cartões caducados depois de 30.06.2025, o direito de residência mantém-se por 6 meses após a data de caducidade; se, durante esse período, tiver iniciado a renovação e tiver comprovativo/recibo, a AIMA considera a permanência legal até à conclusão do processo — mesmo depois desses 6 meses. Após o registo do pedido e pagamento, a AIMA emite um comprovativo válido por 180 dias: leve-o consigo juntamente com o cartão caducado.',
  tags: ['aima', 'autorização de residência', 'renovação', 'online'],
  estimatedReadMinutes: 10,
  recentlyChangedAt: '2026-06-23',
  changeSummary: 'Corrigida a interpretação do prazo de 6 meses (Decreto Regulamentar 84/2007 art. 63.º n.º 14) e acrescentada a situação após o prazo de 15.04.2026 segundo os esclarecimentos da AIMA.',
  steps: [
    {
      id: 'which-portal',
      title: 'Escolha primeiro o percurso correto',
      content: [
        { kind: 'paragraph', text: 'Em 2026, a AIMA não tem uma entrada universal para todas as renovações. Se escolher o portal errado, o processo pode não aparecer ou seguir para o canal incorreto.' },
        { kind: 'checklist', items: [
          '✅ Autorização de residência caducada ou a caducar desde 01.07.2025: percurso principal em portal-renovacoes.aima.gov.pt',
          '✅ Autorização de residência caducada entre 22.02.2020 e 30.06.2025: se não recebeu email da AIMA/EMAIMA, use services.aima.gov.pt/RAR/reqrenew; em 23.06.2026 isto já é urgente, porque o prazo de 15.04.2026 passou',
          '✅ CPLP: procedimento separado em services.aima.gov.pt/CPLP, não o fluxo comum do portal-renovacoes',
          '✅ ARI / Golden Visa: fluxo ARI separado no Portal das Renovacoes, disponível desde 16.02.2026 segundo a AIMA',
          '✅ Residente de Longa Duração: a AIMA abriu a renovação no Portal das Renovacoes, mas confirme primeiro o NISS e a morada',
          '❌ Primeiro cartão depois de visto D, primeira autorização de residência, CRUE de cidadãos da UE e cartões de familiares de cidadãos da UE não são renovações comuns através deste portal'
        ]},
        { kind: 'warning', text: 'Se mudou nome, morada, NIF, passaporte, NISS ou outros dados, submeta primeiro a atualização através do formulário de contacto da AIMA com o assunto Alteracao de Dados. A AIMA indica separadamente que alterações de dados pessoais não são tratadas como pedido comum de renovação.' }
      ]
    },
    {
      id: 'when-to-apply',
      title: 'Quando submeter',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Segundo o gov.pt, pode submeter desde 90 dias antes de o cartão caducar; a renovação da autorização temporária deve ser pedida até 30 dias antes do fim da validade',
          '✅ Na prática: comece a verificar o portal 90 dias antes e submeta assim que a AIMA abrir a sua data/categoria',
          '⚠️ Cartões caducados depois de 30.06.2025: ao abrigo do Decreto Regulamentar 84/2007, art. 63.º n.º 14, o direito de residência mantém-se por 6 meses após a data de caducidade. Se, durante esse período, tiver iniciado a renovação e tiver comprovativo/recibo, a AIMA considera a permanência legal até à conclusão do processo — mesmo depois desses 6 meses.',
          '⚠️ Se o cartão caducou antes de 30.06.2025 e não iniciou a renovação até 15.04.2026, não espere: submeta o pedido em services.aima.gov.pt/RAR/reqrenew e discuta o caso com um advogado ou CLAIM',
          '🧾 Após o registo do pedido e pagamento, a AIMA emite um comprovativo válido por 180 dias. É prova do processo, mas não é um cartão de residência completo para viagens Schengen'
        ]},
        { kind: 'warning', text: 'Não conte com as antigas prorrogações automáticas. A AIMA anunciou expressamente o fim das prorrogações automáticas e liga o estatuto legal ao início do processo de renovação.' }
      ]
    },
    {
      id: 'prerequisites',
      title: 'O que verificar antes de começar',
      content: [
        { kind: 'checklist', items: [
          '📧 Acesso ao email que indicar à AIMA: password, informação de pagamento e notificações chegam aí; verifique o Spam',
          '🪪 O número do cartão de residência válido/caducado, NIF, data de nascimento e passaporte devem coincidir com os registos da AIMA',
          '🏠 A morada deve estar atualizada: o novo cartão é enviado para a morada do processo/AIMA',
          '🔢 O NISS é necessário para validação; se já tem NISS mas a AIMA não o vê, atualize os dados através do formulário de contacto',
          '💸 Antes de submeter, confirme que não há dívidas às Financas e à Seguranca Social; se a validação do portal demorar, certidoes recentes ajudam',
          '🔐 A Chave Movel Digital não é o único método de acesso ao Portal das Renovacoes, mas é útil para obter certidões, certificado do registo criminal e outros serviços públicos',
          '📄 Prepare PDF/JPG a cores, legíveis e sem cortes; a lista de documentos no portal é mais importante do que qualquer checklist genérica'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'Passo a passo no portal-renovacoes',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Registe-se ou entre', content: [
            { kind: 'paragraph', text: 'Abra portal-renovacoes.aima.gov.pt e crie acesso com os dados do cartão/documento. A AIMA descreve o processo como registo no portal: a password é enviada para o email indicado.' },
            { kind: 'warning', text: 'Não confunda o Portal das Renovacoes com o Portal de Serviços geral da AIMA. O portal geral serve para outros serviços; as renovações comuns depois de 01.07.2025 seguem por renovações.' }
          ]},
          { id: 's2', title: '2. Aguarde as validações automáticas', content: [
            { kind: 'paragraph', text: 'Depois do registo, o sistema faz validações, incluindo situação fiscal e contributiva. Segundo o guia prático em Downloads, isto pode levar vários dias, por isso não deixe o processo para a última semana.' },
            { kind: 'checklist', items: [
              'Financas: certidao de nao divida',
              'Seguranca Social: comprovativo de situacao contributiva / regularidade',
              'Se o portal ficar preso na validação, guarde capturas de ecrã e a data da tentativa'
            ]}
          ]},
          { id: 's3', title: '3. Crie Novo Pedido', content: [
            { kind: 'paragraph', text: 'Quando as validações passarem, clique em Novo Pedido e escolha Renovacao de Autorizacao de Residencia. O comentário normalmente pode ficar vazio, salvo se o portal pedir explicação.' },
            { kind: 'warning', text: 'Se o sistema mostrar categoria errada, morada antiga, NISS incorreto ou não deixar iniciar o processo, não submeta às cegas. Atualize primeiro os dados pelo formulário de contacto da AIMA e guarde o comprovativo desse pedido.' }
          ]},
          { id: 's4', title: '4. Pague o DUC/Multibanco', content: [
            { kind: 'paragraph', text: 'Depois de um pedido bem-sucedido, o portal gera o documento de pagamento. A AIMA informa que o pagamento só pode ocorrer 24 horas após a emissão das guias. Em casos de utilizadores, o prazo de pagamento apareceu muitas vezes como 10 dias, mas siga o prazo apresentado na sua área pessoal.' },
            { kind: 'warning', text: 'O valor depende da categoria, canal digital, idade, isenções e tipo de cartão. Não use valores antigos de chats: pague exatamente o que consta do DUC/página de pagamento.' }
          ]},
          { id: 's5', title: '5. Carregue os documentos', content: [
            { kind: 'paragraph', text: 'Segundo o guia prático e casos da comunidade, o carregamento de documentos abre depois do pagamento; muitas vezes o portal dá 10 dias. Se o seu portal mostrar outro prazo, siga o portal. Não espere apenas pelo email: verifique a área pessoal manualmente.' },
            { kind: 'checklist', items: [
              'Cartão de residência — ambos os lados',
              'Passaporte — página de dados e páginas com carimbos/vistos se o portal pedir',
              'Comprovativo de condicoes de alojamento: contrato de arrendamento, domicilio fiscal, recibos de renda, atestado de residencia ou outro documento da sua lista',
              'Comprovativo de meios de subsistencia: contrato de trabalho, recibos verdes/faturas, IRS, extratos bancários, pensão ou documentos ligados ao seu artigo',
              'Certidao de nao divida Financas',
              'Comprovativo de situacao contributiva / regularidade Seguranca Social, se aplicável',
              'Comprovativo de sistema de saude: número de utente SNS ou seguro, se aplicável',
              'Requerimento Inicial / Modelo 1, se pedido; para renovação escolha Renovacao de A.R. TEMPORARIA/PERMANENTE e indique o artigo da sua autorização',
              'Autorizacao para consulta do registo criminal portugues ou certificado do registo criminal — conforme o que o seu ecrã pedir'
            ]},
            { kind: 'warning', text: 'A lista de documentos é pessoal. D7, D8, art. 88/89/90, estudante, reagrupamento familiar e menores têm conjuntos diferentes; uma checklist genérica não substitui o ecrã do seu processo.' }
          ]},
          { id: 's6', title: '6. Guarde o comprovativo', content: [
            { kind: 'paragraph', text: 'Após o registo do pedido e pagamento, a AIMA emite um recibo/comprovativo de pedido de renovacao. Segundo o comunicado da AIMA de 15.10.2025, é válido por 180 dias.' },
            { kind: 'checklist', items: [
              'Guarde o PDF na cloud, no telefone e no email',
              'Leve consigo o cartão caducado e o comprovativo',
              'Para bancos, SNS, escola e empregadores em Portugal, este costuma ser o documento principal durante a espera',
              'Para viagens fora de Portugal, não equivale a um cartão de residência válido; uma companhia aérea ou outro país Schengen pode recusar o PDF'
            ]}
          ]},
          { id: 's7', title: '7. Acompanhe o estado e o email', content: [
            { kind: 'paragraph', text: 'Depois do pagamento, a AIMA inicia a análise. Em casos da comunidade, após a verificação dos documentos aparecem marcas verdes, depois um estado como concluido/deferido e um email. Se a AIMA pedir documentos adicionais, o prazo de resposta costuma ser curto, por isso não perca a notificação.' },
            { kind: 'timeline', text: 'Os prazos reais variam muito: de algumas semanas a vários meses. Se não houver movimento após 90 dias, crie um rasto escrito: formulário de contacto AIMA, email regional, Livro Amarelo/Provedor de Justiça; para atraso prolongado, discuta com advogado uma ação administrativa contra a inércia.' }
          ]},
          { id: 's8', title: '8. Receba o cartão', content: [
            { kind: 'paragraph', text: 'Após deferimento, o cartão normalmente é enviado por CTT para a morada atual. Por isso a morada na AIMA é crítica. Se o cartão não chegar depois da aprovação, registe a data do deferimento, verifique a caixa de correio/aviso CTT e contacte a AIMA.' }
          ]}
        ]}
      ]
    },
    {
      id: 'old-expired',
      title: 'Se o cartão caducou antes de 30.06.2025',
      content: [
        { kind: 'paragraph', text: 'Este já não é o cenário comum do portal-renovacoes. A AIMA separa cartões antigos caducados e cartões depois de 01.07.2025: os antigos são tratados pela Estrutura de Missao / services.aima.gov.pt, enquanto a AIMA assegura renovações depois de 01.07.2025.' },
        { kind: 'checklist', items: [
          'Se recebeu email de renovacao.ar@aima.gov.pt, siga o link do email e guarde todas as confirmações',
          'Se não recebeu email, a AIMA indica services.aima.gov.pt/RAR/reqrenew para cartões caducados entre 22.02.2020 e 30.06.2025',
          'Após o pedido, deverá ser contactado por email para confirmação, pagamento, possível atendimento presencial/biometria e carregamento de documentos',
          'A AIMA indicou que o recibo comprovativo deve ser disponibilizado até 10 dias úteis após a confirmação do pagamento',
          'CPLP, ARI e cartões UE/familiares não estão abrangidos por este serviço RAR'
        ]},
        { kind: 'warning', text: 'Em 23.06.2026, o prazo de 15.04.2026 já passou. O Governo não introduziu uma nova prorrogação geral depois de 15.04.2026. Segundo a posição da AIMA, os titulares de cartões caducados antes de 30.06.2025 que não iniciaram a renovação são considerados em situação irregular; só um processo registado no portal com comprovativo protege. Se ainda não submeteu, submeta com urgência em services.aima.gov.pt/RAR/reqrenew e consulte um advogado/CLAIM.' }
      ]
    },
    {
      id: 'documents-details',
      title: 'Documentos que geram confusão',
      content: [
        { kind: 'substeps', items: [
          { id: 'doc1', title: 'Habitação', content: [
            { kind: 'paragraph', text: 'O comprovativo de habitação pode ser contrato de arrendamento, recibos de renda, domicilio fiscal, atestado de residencia, declaração do proprietário ou documentos de propriedade. Carregue exatamente o tipo pedido pelo portal.' }
          ]},
          { id: 'doc2', title: 'Rendimentos', content: [
            { kind: 'paragraph', text: 'Para trabalho por conta de outrem, normalmente prepara-se contrato de trabalho, recibos de vencimento e IRS/declaração. Para independente: atividade aberta, recibos verdes/faturas, IRS e extrato bancário. Para D7: pensão, rendimento passivo e movimentos da conta. A lógica da AIMA é que o rendimento seja claro, regular e ligado ao seu artigo.' }
          ]},
          { id: 'doc3', title: 'Registo criminal', content: [
            { kind: 'paragraph', text: 'O Justiça.gov.pt diz expressamente que cidadãos estrangeiros que pedem ou renovam autorização de residência em Portugal podem autorizar a AIMA a aceder ao registo criminal português em vez de se deslocarem a um balcão para obter o certificado. Mas se o seu ecrã pedir certificado, este pode ser pedido online; custa 5 € e a emissão online pode demorar até 3 dias úteis.' }
          ]},
          { id: 'doc4', title: 'Modelo 1 / Requerimento Inicial', content: [
            { kind: 'paragraph', text: 'O PDF prático em Downloads explica o Modelo 1 em separado. Se o portal pedir Requerimento Inicial, preencha os dados pessoais, assinale Renovacao de A.R. TEMPORARIA/PERMANENTE e indique o artigo da Lei 23/2007 ao abrigo do qual a sua autorização atual foi emitida.' }
          ]},
          { id: 'doc5', title: 'Menores e família', content: [
            { kind: 'paragraph', text: 'Crianças e reagrupamento familiar costumam ter documentos adicionais: certidões, autorizações parentais, documentos do requerente principal e prova do vínculo familiar. Não copie a lista de um adulto D7/D8 para uma criança sem verificar o ecrã.' }
          ]}
        ]}
      ]
    },
    {
      id: 'costs-2026',
      title: 'Taxas AIMA em 2026',
      content: [
        { kind: 'paragraph', text: 'A tabela atual da AIMA ao abrigo da Portaria 307/2023 mostra duas colunas: taxa normal e taxa reduzida para canal digital. O Portal das Renovacoes calcula o valor exato; os valores abaixo servem para conferir o DUC, não substituem o documento de pagamento.' },
        { kind: 'checklist', items: [
          'Rececao e Analise para renovação de AR temporaria/permanente: 133,00 €; canal digital 99,80 €',
          'Art. 75(1) Concessao ou Renovacao AR Temporaria: 114,30 €; canal digital 85,80 €',
          'Art. 76(2) Renovacao/Alteracao de Dados AR Permanente: 61,90 €; canal digital 46,30 €',
          'Art. 90-A(2) Renovacao ARI: 4 210,30 €; canal digital 3 157,80 €',
          'Segunda via do cartão: normalmente 50% da respetiva taxa de emissão'
        ]},
        { kind: 'warning', text: 'A linha de 307,20 € na tabela refere-se a Apreciacao do Pedido para dispensa de visto consular em artigos específicos, não à renovação normal do art. 75. Não a use como valor universal para renovação comum.' }
      ]
    },
    {
      id: 'if-rejected-or-delayed',
      title: 'Se o pedido ficar parado ou for recusado',
      content: [
        { kind: 'paragraph', text: 'Primeiro separe atraso técnico do portal de um pedido processual da AIMA. Atraso técnico: não há botão, validação não passou ou pagamento não está ativo. Pedido processual: a AIMA já pediu documento, correção ou atendimento.' },
        { kind: 'checklist', items: [
          'Guarde capturas de ecrã, emails, DUC, comprovativo de pagamento e número do processo',
          'Se a validação Financas/Seguranca Social estiver parada, anexe certidoes recentes no contacto com a AIMA',
          'Se receber pedido de elementos / aperfeicoamento, responda dentro do prazo do email; normalmente é curto',
          'Se receber indeferimento, não discuta em chats: mostre a carta a um advogado, porque os prazos para audiencia previa/reclamacao/recurso dependem do tipo de ato',
          'Se o comprovativo de 180 dias estiver a expirar e ainda não houver decisão, escreva à AIMA com antecedência e guarde prova da tentativa de renovar/esclarecer o estatuto'
        ]},
        { kind: 'warning', text: 'O comprovativo ajuda a provar que o processo foi iniciado, mas não transforma um cartão caducado num documento de viagem completo. O risco de viajar mantém-se até chegar o cartão físico.' }
      ]
    },
    {
      id: 'not-renewal',
      title: 'O que não é renovação comum',
      content: [
        { kind: 'checklist', items: [
          'Primeiro cartão após visto D: primeira concessao / emissao inicial através da AIMA, não renovação',
          'CRUE de cidadãos da UE: tratado pelas regras de cidadãos da UE, não pelo portal-renovacoes',
          'Cartao de residencia para familiar de cidadao da UE: procedimento AIMA separado',
          'CPLP: canal separado services.aima.gov.pt/CPLP e muitas vezes biometria/agendamento',
          'Primeira passagem para residência permanente: não é o mesmo que renovar uma autorização temporária; consulte o guia separado de permanente',
          'Estudantes que não concluíram estudos e trabalham ao abrigo do art. 122(j), e alguns casos de altamente qualificados/estudantes sem visto, têm percursos próprios por formulário de contacto publicados pela AIMA'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Cartão de residência', note: 'ambos os lados, mesmo se já caducou' },
    { title: 'Passaporte', note: 'página de dados; páginas adicionais se o portal pedir' },
    { title: 'Comprovativo de alojamento', note: 'contrato, recibos, domicilio fiscal, atestado ou outro documento da sua lista' },
    { title: 'Comprovativo de meios de subsistencia', note: 'salário, recibos verdes, IRS, pensão, extratos bancários — conforme o seu artigo' },
    { title: 'Certidao de nao divida Financas', note: 'útil preparar antecipadamente' },
    { title: 'Comprovativo de situacao contributiva Seguranca Social', note: 'se aplicável; verifique o NISS' },
    { title: 'SNS / seguro de saúde', note: 'se exigido pela sua categoria' },
    { title: 'Modelo 1 / Requerimento Inicial', note: 'se pedido; indicar renovação e artigo da Lei 23/2007' },
    { title: 'Autorizacao para consulta do registo criminal ou certificado', note: 'depende do que o ecrã pedir' }
  ],
  costs: [
    { label: 'Rececao e Analise — renovação AR', amountEUR: 133, note: 'canal digital: 99,80 €' },
    { label: 'Art. 75(1) — renovacao AR temporaria', amountEUR: 114.30, note: 'canal digital: 85,80 €' },
    { label: 'Art. 76(2) — renovacao/alteracao AR permanente', amountEUR: 61.90, note: 'canal digital: 46,30 €' },
    { label: 'Art. 90-A(2) — renovacao ARI', amountEUR: 4210.30, note: 'canal digital: 3 157,80 €' },
    { label: 'Certificado do registo criminal online', amountEUR: 5 },
    { label: 'Coima/risco por atraso', amountEURMin: 75, amountEURMax: 300, note: 'depende do caso; não substitui aconselhamento' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 180,
  sources: [
    { title: 'gov.pt — Renovar a autorização de residência', url: 'https://www.gov.pt/servicos/renovar-a-autorizacao-de-residencia', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — Portal das Renovações já está disponível', url: 'https://aima.gov.pt/pt/noticias/o-portal-das-renovacoes-ja-esta-disponivel', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — Portal de Renovações: Autorizações de Residência', url: 'https://aima.gov.pt/pt/noticias/portal-de-renovacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — Fim das Prorrogações Automáticas', url: 'https://aima.gov.pt/pt/noticias/asfn', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — Esclarecimento: Direito de Residência', url: 'https://aima.gov.pt/pt/noticias/direito-de-residencia', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — AR expirada entre 22.02.2020 e 30.06.2025', url: 'https://aima.gov.pt/pt/noticias/dskhf', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — services.aima.gov.pt para renovações antigas', url: 'https://aima.gov.pt/pt/noticias/services-aima-gov-pt-novo-servico-para-renovacao-de-autorizacoes-de-residencia', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — Renovação do Título de Residente de Longa Duração', url: 'https://aima.gov.pt/pt/noticias/renovacao-do-titulo-de-residente-de-longa-duracao', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — Tabela de Taxas', url: 'https://aima.gov.pt/documents/tabela-de-taxas-e-demais-encargos-a-cobrar-pelos-procedimentos-administrativos.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'Justiça.gov.pt — Registo criminal de pessoas', url: 'https://justica.gov.pt/Servicos/Pedir-e-consultar-registo-criminal-de-pessoas', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'Lei 23/2007 — regime jurídico de entrada, permanência, saída e afastamento', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-06-14' }
  ],
  lastVerified: '2026-06-23',
  verifyIntervalDays: 45
}
