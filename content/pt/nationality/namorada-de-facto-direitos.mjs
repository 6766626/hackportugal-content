export default {
  editorialVoice: 'hackportugal',
  id: 'namorada-de-facto-direitos',
  categoryId: 'nationality',
  title: 'União de Facto: direitos dos parceiros sem casamento',
  tldr: 'A união de facto não é um «casamento civil», mas sim a união factual de duas pessoas que vivem como casal há mais de 2 anos. Em 2026, confere direitos em matéria de habitação, IRS, SNS/hospital, prestações sociais após a morte, arrendamento, Reagrupamento Familiar junto da AIMA e, quando o parceiro é português, uma via para a nacionalidade após 3 anos de união. Mas o estatuto não é aplicado automaticamente: na prática, são necessárias provas, muitas vezes uma declaração da Junta de Freguesia ou reconhecimento na Conservatória. Não passa a ser herdeiro como um cônjuge — é necessário planeamento testamentário.',
  tags: ['união-de-facto', 'nacionalidade', 'parceiros', 'habitação'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-counts',
      title: '1. O que conta como união de facto',
      content: [
        { kind: 'paragraph', text: 'Nos termos da Lei 7/2001, a união de facto é a situação em que duas pessoas, independentemente do sexo, vivem juntas há mais de 2 anos em condições análogas às dos cônjuges. A coabitação, por si só, cria uma situação factual, mas para exercer direitos é necessário prová-la perante as Finanças, a Segurança Social, a AIMA, o hospital, o banco, o tribunal ou a Conservatória.' },
        { kind: 'checklist', items: [
          'Mínimo: 2 anos de vida em comum como casal.',
          'Uma morada comum é o indício prático mais forte.',
          'São abrangidos casais de qualquer sexo.',
          'Não é necessário casamento e o apelido não muda.',
          'Não existe um regime automático de bens comuns como no casamento.',
          'Para a nacionalidade com parceiro português, é necessária uma união superior a 3 anos e um reconhecimento separado.',
          'Para muitos procedimentos basta uma declaração da Junta de Freguesia, mas não para todos.',
          'A Conservatória pode formalizar o reconhecimento da união de facto se ambos os parceiros o declararem e não existirem impedimentos legais.'
        ] },
        { kind: 'warning', text: 'A união de facto não se constitui se existirem impedimentos previstos na Lei 7/2001: idade inferior a 18 anos, demência notória/incapacidade, casamento anterior não dissolvido sem separação judicial, parentesco próximo, adoção em linha proibida, ou condenação por homicídio ou tentativa de homicídio do cônjuge do outro parceiro.' }
      ]
    },
    {
      id: 'how-to-prove',
      title: '2. Como provar a união: Junta ou Conservatória',
      content: [
        { kind: 'paragraph', text: 'No dia a dia, o documento mais frequente é a declaração da Junta de Freguesia de que vivem juntos há mais de 2 anos. Para uma formalização mais robusta, pode dirigir-se à Conservatória do Registo Civil e pedir o reconhecimento da união de facto. Isto não é uma «cerimónia sem casamento»: o documento confirma o estatuto perante terceiros, mas não cria um regime matrimonial de bens.' },
        { kind: 'checklist', items: [
          'Passaportes ou Cartão de Cidadão / cartão de residência de ambos os parceiros.',
          'NIF de ambos os parceiros.',
          'Prova de morada comum: contrato de arrendamento, escritura, faturas, certificado de domicílio fiscal.',
          'Declaração sob compromisso de honra de ambos os parceiros sobre a vida em comum há mais de 2 anos.',
          'Declaração da Junta de Freguesia — geralmente com 2 testemunhas ou confirmações locais; as regras dependem da Junta.',
          'Certidões de nascimento, se a Conservatória pedir a verificação do estado civil e dos impedimentos.',
          'Se um dos parceiros tiver sido casado: documento de divórcio ou separação judicial de pessoas e bens.',
          'Para estrangeiros: os documentos do país de origem exigem frequentemente apostila/legalização e tradução para português.'
        ] },
        { kind: 'warning', text: 'Não confunda «vivemos juntos» com «a entidade aceitou isso como provado». A AIMA, o IRN em matéria de nacionalidade, a Segurança Social e o tribunal podem exigir níveis de prova diferentes. Para a nacionalidade, uma declaração da Junta, por si só, normalmente não basta: é necessário o reconhecimento judicial da união de facto com um cidadão português.' }
      ]
    },
    {
      id: 'rights-during-life',
      title: '3. Direitos em vida: habitação, IRS, saúde, trabalho',
      content: [
        { kind: 'paragraph', text: 'A lei atribui aos parceiros em união de facto um conjunto de direitos semelhantes aos dos cônjuges, mas não uma equivalência total ao casamento. A principal diferença prática é esta: o Estado reconhece a família para determinados fins, mas o património não se torna automaticamente comum.' },
        { kind: 'checklist', items: [
          'IRS: é possível entregar uma declaração conjunta como casal unido de facto, se a união durar há mais de 2 anos e a morada/provas coincidirem. É uma opção, não uma obrigação.',
          'Habitação: a casa de família recebe proteção; em caso de separação, o tribunal pode decidir quem fica na casa de morada de família, especialmente se existirem filhos ou dependência económica.',
          'Arrendamento: os direitos relativos ao contrato de arrendamento e à proteção da habitação familiar podem transmitir-se ao parceiro nos casos previstos na lei.',
          'SNS e hospital: o parceiro é normalmente reconhecido como pessoa próxima para acompanhamento, informação e decisões, mas para cenários médicos graves é melhor fazer uma procuração e uma Diretiva Antecipada de Vontade.',
          'Trabalho: vários tipos de licença e faltas justificadas aplicam-se por analogia aos cônjuges, por exemplo em caso de morte do parceiro ou responsabilidades familiares, se o empregador exigir prova da união.',
          'Prestações sociais: o parceiro sobrevivo pode requerer pensão de sobrevivência, subsídio por morte e outras prestações da Segurança Social quando a união estiver provada.',
          'Imigração: a AIMA pode considerar o parceiro em união de facto como membro da família para efeitos de Reagrupamento Familiar, se a união estiver comprovada de forma sólida.'
        ] },
        { kind: 'warning', text: 'A entrega conjunta de IRS nem sempre é vantajosa. Em 2026, a primeira taxa de IRS é 11,97%, mas o resultado final depende dos rendimentos do casal, das deduções, dos dependentes e do estatuto de residência. Antes de entregar, compare a simulação individual vs conjunta no Portal das Finanças.' }
      ]
    },
    {
      id: 'property-and-breakup',
      title: '4. Património e separação: o que não existe sem casamento',
      content: [
        { kind: 'paragraph', text: 'A união de facto não cria automaticamente comunhão de adquiridos, separação de bens ou outro regime matrimonial. Em caso de separação, não existe um «divórcio» padrão com partilha de bens conjugais. Cada pessoa conserva aquilo que está em seu nome, e os investimentos controvertidos provam-se pelos meios civis comuns: contrato, transferências bancárias, faturas, reconhecimento de dívida, enriquecimento sem causa.' },
        { kind: 'checklist', items: [
          'Um apartamento em nome de um dos parceiros pertence juridicamente a esse parceiro, mesmo que o outro tenha ajudado a pagar o crédito habitação, se não existir contrato separado ou provas.',
          'A compra conjunta de imóvel deve ser feita em nome de ambos na escritura, com quotas, por exemplo 50/50 ou 70/30.',
          'Uma conta bancária conjunta não prova direitos iguais sobre todo o património do casal.',
          'A contribuição para obras deve, idealmente, ser documentada com faturas em nome do parceiro que pagou e transferências bancárias.',
          'Pode celebrar um contrato de coabitação: quem paga o quê, a quem pertence cada bem e como são compensados os investimentos.',
          'Se existirem filhos, as questões de responsabilidades parentais são resolvidas separadamente e não dependem do casamento.',
          'A casa de família pode ser atribuída temporária ou permanentemente a um dos parceiros por decisão judicial, mas isso não significa uma transmissão automática da propriedade.'
        ] },
        { kind: 'warning', text: 'O erro mais comum dos expatriados: viver 5 anos juntos, pagar o crédito habitação do parceiro e pensar que é «como um casamento». Não é. Sem escritura, contrato de coabitação, reconhecimento de dívida ou um histórico bancário claro, recuperar investimentos é difícil e caro.' }
      ]
    },
    {
      id: 'death-inheritance-nationality',
      title: '5. Morte do parceiro, herança e nacionalidade',
      content: [
        { kind: 'paragraph', text: 'Em matéria sucessória, a união de facto é mais fraca do que o casamento. O parceiro sobrevivo recebe proteção relativamente à casa de família e pode beneficiar de vantagens fiscais, mas não se torna automaticamente herdeiro legal como um cônjuge. Se quiser deixar bens ao parceiro, é necessário um testamento ou outra estrutura sucessória que tenha em conta os herdeiros legitimários: filhos, cônjuge, pais.' },
        { kind: 'checklist', items: [
          'Casa de família: o parceiro sobrevivo tem direito a habitar a casa de morada de família pelo prazo previsto na Lei 7/2001; quando a união dura há mais de 5 anos, o prazo pode estar ligado à duração da união.',
          'Arrendamento: o contrato pode transmitir-se ao parceiro sobrevivo se forem cumpridas as condições legais.',
          'Proteção social: a pensão de sobrevivência e o subsídio por morte podem ser possíveis, mas a Segurança Social exigirá prova da união de facto.',
          'Herança: sem testamento, o parceiro não é equiparado ao cônjuge na ordem dos herdeiros.',
          'Imposto: para transmissões gratuitas entre unidos de facto, pode aplicar-se a isenção de 10% de Imposto do Selo, mas o direito ao próprio bem continua a ter de surgir por testamento, contrato ou lei.',
          'Nacionalidade: o parceiro estrangeiro de um cidadão português pode pedir a nacionalidade portuguesa após mais de 3 anos de união de facto, mas primeiro é necessário o reconhecimento da união em tribunal cível.',
          'A nova lei da nacionalidade foi aprovada pelo parlamento em 01.04.2026, mas em 28.04.2026 ainda não tinha sido promulgada; aplique o regime vigente da Lei da Nacionalidade até a nova redação entrar em vigor.'
        ] },
        { kind: 'warning', text: 'Para a nacionalidade através de união de facto, não basta estarem ambos registados na mesma morada. O IRN exige uma união de facto juridicamente reconhecida com cidadão português e verifica os fundamentos de oposição, incluindo a ligação à comunidade portuguesa, quando aplicável.' }
      ]
    },
    {
      id: 'expat-checklist',
      title: '6. Checklist prática para expatriados',
      content: [
        { kind: 'paragraph', text: 'Se se muda para Portugal ou já vive aqui como casal sem casamento, reúna a base de prova com antecedência. É mais barato do que reconstruir 2–3 anos de vida em comum perante a AIMA, o IRN, o tribunal ou a Segurança Social.' },
        { kind: 'checklist', items: [
          'Obtenham ambos NIF e indiquem a mesma morada fiscal nas Finanças, se viverem efetivamente juntos.',
          'Incluam ambos no contrato de arrendamento ou peçam um atestado de residência na Junta de Freguesia.',
          'Guarde faturas de serviços, internet, condomínio e seguros onde seja visível a morada comum.',
          'Mantenha transferências bancárias relativas à habitação e compras de valor elevado; não pague tudo em numerário.',
          'Se um parceiro depender da autorização de residência do outro, confirme previamente junto da AIMA os requisitos de prova de união de facto e de rendimentos.',
          'Se um parceiro for português e o objetivo for a nacionalidade, planeie o reconhecimento judicial antes de apresentar o pedido ao IRN.',
          'Faça um testamento se quiser garantir direitos sucessórios ao parceiro.',
          'Para imóveis, formalize as quotas na escritura, não numa «combinação verbal».',
          'Para questões médicas, faça uma procuração ou Diretiva Antecipada de Vontade se quiser que o parceiro tome decisões numa situação crítica.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Declaração da Junta de Freguesia', amountEURMin: 0, amountEURMax: 15, note: 'A prática municipal varia: algumas Junta emitem gratuitamente, outras cobram um pequeno emolumento.' },
    { label: 'Tradução de documento estrangeiro para PT', amountEURMin: 20, amountEURMax: 60, note: 'Por página; apostila/legalização são pagas separadamente no país de emissão.' },
    { label: 'Reconhecimento judicial da união de facto para nacionalidade', amountEURMin: 300, amountEURMax: 1200, note: 'Estimativa incluindo advogado e custas; depende do tribunal, da complexidade das provas e do país dos documentos.' }
  ],
  sources: [
    { title: 'Lei 7/2001 — proteção das uniões de facto, DRE', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2001-34417875', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Justiça.gov.pt — reconhecimento da união de facto', url: 'https://justica.gov.pt/Servicos/Reconhecimento-da-uniao-de-facto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei da Nacionalidade — Lei 37/81, art. 3, DRE', url: 'https://dre.pt/dre/legislacao-consolidada/lei/1981-34536975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Justiça.gov.pt — pedir nacionalidade portuguesa por casamento ou união de facto', url: 'https://justica.gov.pt/Servicos/Pedir-a-nacionalidade-portuguesa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
