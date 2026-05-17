export default {
  editorialVoice: 'hackportugal',
  id: 'ifap-agricultura-subsidios',
  categoryId: 'work_business',
  title: 'IFAP: subsídios PEPAC para microagricultores e agricultor familiar',
  tldr: 'O IFAP paga subsídios agrícolas no âmbito do PEPAC 2023-2027: pagamentos de base/ecológicos, apoios associados e regimes para pequenas explorações. Para um expat com terreno, isto não é “dinheiro pela terra”: são necessários NIF, IBAN, registo como beneficiário IFAP, parcelas no iSIP/parcelário, atividade agrícola e o Pedido Único anual. Para uma microexploração, é realista contar com cerca de 500-3 000 € por ano, mas o valor depende das culturas, hectares, animais e regras do ano. O Estatuto da Agricultura Familiar dá prioridades e benefícios, mas exige trabalho familiar, rendimentos da agricultura e limites.',
  tags: ['ifap', 'pepac', 'quinta', 'agricultura'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-ifap-pays',
      title: 'O que o IFAP paga na prática',
      content: [
        { kind: 'paragraph', text: 'O IFAP é o Instituto de Financiamento da Agricultura e Pescas. É por este organismo que passam os pagamentos PEPAC 2023-2027: pagamentos diretos da PAC, medidas ambientais, compensações por zonas, animais/culturas e parte dos projetos de investimento. Para um pequeno terreno, o importante não são subvenções para um “sonho no campo”, mas sim o Pedido Único anual e o registo correto da exploração.' },
        { kind: 'paragraph', text: 'Um microagricultor típico com alguns hectares de olival, vinha, pomar, pastagem ou horta pode ver valores na ordem dos 500-3 000 € por ano. Não é uma taxa garantida: os pagamentos são calculados com base nos eligible hectares, na cultura, região, direitos/regimes, compromissos ambientais, animais e orçamento da campanha concreta.' },
        { kind: 'checklist', items: [
          'O PEPAC vigora no período 2023-2027; as candidaturas e os pagamentos decorrem em campanhas anuais',
          'O formulário principal é o Pedido Único, submetido através do Portal do IFAP ou de entidade reconhecida',
          'São necessárias parcelas inseridas no iSIP/parcelário, com culturas e áreas corretas',
          'A terra deve ser sua, arrendada ou legalmente utilizada; “o vizinho autorizou” sem documento é arriscado',
          'Para animais, são necessários registos corretos no SNIRA/BDN e cumprimento das regras veterinárias',
          'A venda de produtos exige atividade aberta nas Finanças e contas/faturas normais',
          'Os subsídios podem ser verificados no local e por monitorização por satélite',
          'Erros nas áreas, culturas ou dupla declaração de terra levam a reduções e devoluções'
        ] }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Quem pode candidatar-se como expat',
      content: [
        { kind: 'paragraph', text: 'A nacionalidade normalmente não é o filtro principal. Mais importante é estar identificado em Portugal como beneficiário IFAP, ter NIF, conta bancária com IBAN, acesso ao Portal do IFAP e direito legal de usar terra agrícola. Para um residente com autorização de residência, um cidadão da UE com CRUE ou uma empresa Lda, o percurso é praticamente igual: primeiro o registo da exploração, depois a candidatura anual.' },
        { kind: 'checklist', items: [
          'NIF e acesso às Finanças; para processos online, a Chave Móvel Digital ou o Cartão de Cidadão são convenientes',
          'IBAN em nome do requerente ou da empresa',
          'Documento da terra: escritura/caderneta predial, contrato de arrendamento, comodato ou outro título válido',
          'Registo como beneficiário IFAP e dados de identificação atualizados',
          'Parcelário/iSIP: cada área agrícola deve estar desenhada e classificada',
          'Atividade agrícola nas Finanças, se houver venda regular de produtos ou atividade empresarial',
          'NISS e Segurança Social — se trabalhar como trabalhador independente ou contratar trabalhadores',
          'Ausência de dívidas críticas à Autoridade Tributária e à Segurança Social para muitas medidas de apoio',
          'Para agricultura biológica — contrato com entidade certificadora e cumprimento do regime de produção biológica'
        ] },
        { kind: 'warning', text: 'A compra de uma quinta ou terreno rústico, por si só, não dá autorização de residência nem cria direito a subsídios. O IFAP olha para a exploração agrícola real, os documentos de utilização da terra e o cumprimento das regras da campanha.' }
      ]
    },
    {
      id: 'register-ifap',
      title: 'Como registar-se no IFAP e preparar o terreno',
      content: [
        { kind: 'paragraph', text: 'O caminho prático para quem está a começar é não tentar preencher tudo sozinho de imediato, mas ir a uma associação agrícola, gabinete técnico ou entidade reconhecida no seu concelho. Estas entidades conhecem as culturas locais, trabalham com o parcelário e normalmente submetem o Pedido Único por uma pequena taxa. Mas a responsabilidade pelos dados continua a ser sua.' },
        { kind: 'substeps', items: [
          { id: 'beneficiario', title: '1. Tornar-se beneficiário IFAP', content: [
            { kind: 'paragraph', text: 'O registo cria o seu número de beneficiário/NIFAP e associa o NIF, morada, contactos e IBAN. Confirme que o nome no IFAP coincide com a conta bancária e os dados fiscais.' }
          ] },
          { id: 'parcelario', title: '2. Inserir a terra no parcelário/iSIP', content: [
            { kind: 'paragraph', text: 'Cada parcela é desenhada no mapa, indicando a cultura, área, regime de utilização e limites. Em quintas antigas, muitas vezes descobre-se que o cadastro, a caderneta predial e a vedação real não coincidem — isto deve ser resolvido antes da candidatura.' }
          ] },
          { id: 'activity', title: '3. Regularizar o estatuto fiscal', content: [
            { kind: 'paragraph', text: 'Se vender azeite, legumes, ovos, mel ou serviços, abra atividade nas Finanças com o CAE/CIRS adequado. Um volume de negócios reduzido pode estar abrangido pela isenção de IVA ao abrigo do art. 53 CIVA, se for respeitado o limite anual de 15 000 €, mas isso não elimina a obrigação de emitir faturas nem o IRS.' }
          ] },
          { id: 'evidence', title: '4. Reunir provas da exploração', content: [
            { kind: 'checklist', items: [
              'caderneta predial rústica ou contrato de arrendamento/comodato',
              'plano das parcelas do iSIP',
              'fotografias das culturas, árvores, sistemas de rega, pastagens',
              'faturas de sementes, plantas, ração, fertilizantes, certificação',
              'registos veterinários e SNIRA/BDN para animais',
              'contrato com lagar, adega, cooperativa ou compradores, se existirem',
              'certificado de produção biológica, se declarar medidas biológicas'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'pedido-unico',
      title: 'Pedido Único anual: onde se perde dinheiro',
      content: [
        { kind: 'paragraph', text: 'O Pedido Único é a declaração/candidatura anual aos pagamentos. A campanha normalmente abre no início do ano e fecha na primavera; as datas exatas são publicadas todos os anos pelo IFAP. Em 2026, consulte o calendário da campanha em ifap.pt: atrasos ou correções fora do prazo podem significar penalizações, redução do pagamento ou recusa.' },
        { kind: 'checklist', items: [
          'Confirme quais parcelas são realmente eligible: floresta, pátio, casa, piscina e estradas não são pagos como área agrícola',
          'Não exagere nos hectares: a monitorização por satélite e as verificações detetam rapidamente discrepâncias',
          'Indique a cultura correta: olival, vinha, frutos secos, pastagem permanente, hortícolas, etc.',
          'Verifique os compromissos dos eco-regimes: podem dar pagamento adicional, mas exigem provas',
          'Se declarar animais, confira datas, números, movimentos e registos veterinários',
          'Guarde os documentos durante pelo menos vários anos: o IFAP pode pedi-los depois do pagamento',
          'Calcule o imposto separadamente: os subsídios podem constituir rendimento para IRS/IRC, consoante o seu regime',
          'Depois da submissão, consulte mensagens/notificações no Portal do IFAP, não apenas o email'
        ] },
        { kind: 'warning', text: 'O erro mais caro dos principiantes é declarar terra que, na prática, é usada pelo vizinho, por um arrendatário ou pelo antigo proprietário. Uma dupla candidatura sobre a mesma parcela quase sempre leva a conflito, bloqueio e verificações.' }
      ]
    },
    {
      id: 'agricultor-familiar',
      title: 'Estatuto da Agricultura Familiar: para que serve',
      content: [
        { kind: 'paragraph', text: 'O Estatuto da Agricultura Familiar foi criado pelo Decreto-Lei 64/2018. Não é um “salário do Estado” separado, mas sim o reconhecimento de uma exploração agrícola familiar. O título pode dar prioridade ou condições mais favoráveis em algumas medidas PEPAC, programas de desenvolvimento rural, mercados locais, capacitação e procedimentos administrativos.' },
        { kind: 'paragraph', text: 'Os critérios não são avaliados por uma descrição bonita da quinta, mas sim pelos rendimentos, trabalho da família, registo da exploração e limites. Na prática, o título é útil para quem vive efetivamente da agricultura, pelo menos em parte, e não apenas para quem possui uma casa de campo com jardim.' },
        { kind: 'checklist', items: [
          'O requerente deve ser titular de exploração agrícola familiar e maior de idade',
          'A exploração deve estar registada e identificada no IFAP/parcelário',
          'O trabalho familiar deve representar uma parte substancial do trabalho total da exploração',
          'A proporção do rendimento agrícola no rendimento do agregado deve cumprir as regras do estatuto',
          'O rendimento do agregado e o volume de pagamentos diretos da PAC não devem ultrapassar os limites estabelecidos',
          'São necessários dados atualizados nas Finanças e na Segurança Social',
          'O título de reconhecimento é normalmente pedido online através do ecossistema IFAP/DGADR',
          'Após o reconhecimento, é necessário manter os critérios; em caso de alterações, o título pode não ser renovado ou ser anulado'
        ] },
        { kind: 'warning', text: 'Não confunda agricultor familiar com um regime fiscal especial automático. IVA, IRS, Segurança Social, autorizações sanitárias, licenças de água/furo e regras de venda de produtos continuam a ser obrigações separadas.' }
      ]
    },
    {
      id: 'micro-farm-playbook',
      title: 'Plano prático para uma microexploração em 2026',
      content: [
        { kind: 'paragraph', text: 'Se acabou de comprar ou arrenda um terreno, o objetivo do primeiro ano não é maximizar o subsídio, mas sim ter dados limpos. Corrija o parcelário, legalize a utilização da terra, escolha as culturas, abra atividade se houver vendas e submeta um Pedido Único rigoroso. Só depois faz sentido acrescentar agricultura biológica, animais, eco-regimes ou projetos de investimento.' },
        { kind: 'checklist', items: [
          'Janeiro-fevereiro: reunir documentos da terra, NIF, IBAN, acessos ao Portal do IFAP/Finanças',
          'Fevereiro-março: ir a uma associação agrícola e verificar o parcelário/iSIP',
          'Antes de submeter o Pedido Único: decidir que culturas e áreas declarar realisticamente',
          'Primavera: submeter o Pedido Único dentro do prazo da campanha 2026 e guardar o comprovativo',
          'Verão-outono: responder às notificações do IFAP, manter o terreno no estado declarado',
          'Em caso de vendas: emitir faturas, registar despesas e considerar os subsídios para IRS',
          'Antes de novos investimentos: verificar os avisos abertos do PEPAC, em vez de comprar maquinaria “para uma subvenção futura”',
          'Se o rendimento da exploração se tornar regular: verificar o Estatuto da Agricultura Familiar e a Segurança Social'
        ] },
        { kind: 'warning', text: 'Subvenções para trator, irrigation, estufa ou turismo rural não seguem o mesmo procedimento dos pagamentos diretos anuais. Normalmente é necessário um aviso aberto, plano de negócios, orçamento, financiamento próprio e aguardar aprovação antes de realizar despesas. Compras antes da aprovação muitas vezes não são compensadas.' }
      ]
    }
  ],
  costs: [
    { label: 'Registo como beneficiário IFAP', amountEUR: 0, note: 'Normalmente gratuito; podem existir custos se tudo for tratado por uma associação/gabinete.' },
    { label: 'Apoio de associação agrícola com o Pedido Único', amountEURMin: 25, amountEURMax: 150, note: 'Referência para uma microcandidatura; depende da região, do número de parcelas e da condição de associado.' },
    { label: 'Pagamento anual realista para uma microexploração', amountEURMin: 500, amountEURMax: 3000, note: 'Não é uma tabela do IFAP, mas uma ordem prática para pequenos terrenos; o valor efetivo é calculado pelo PEPAC.' },
    { label: 'Certificação de produção biológica', amountEURMin: 150, amountEURMax: 500, note: 'Por ano para um pequeno produtor; o preço depende da entidade certificadora e das culturas.' }
  ],
  sources: [
    { title: 'IFAP — Portal oficial: Pedido Único e apoios PEPAC', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'PEPAC Portugal 2023-2027 — Plano Estratégico da PAC', url: 'https://www.pepacc.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGADR — Estatuto da Agricultura Familiar', url: 'https://www.dgadr.gov.pt/estatuto-da-agricultura-familiar', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 64/2018 — Estatuto da Agricultura Familiar', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/64-2018-116068879', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
