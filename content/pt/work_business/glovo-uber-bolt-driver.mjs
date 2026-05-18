export default {
  editorialVoice: 'hackportugal',
  id: 'glovo-uber-bolt-driver',
  categoryId: 'work_business',
  title: 'Glovo / Uber Eats / Bolt Food: como tornar-se estafeta em Portugal',
  tldr: 'Um estafeta de entregas em Portugal trabalha normalmente como trabalhador independente através de recibos verdes: abre atividade nas Finanças, regista-se na Segurança Social, faz o onboarding na Glovo / Uber Eats / Bolt Food e paga por conta própria impostos, seguro, combustível e reparações. O rendimento real em 2026 é de cerca de 5–12 €/hora antes de despesas; com e-bike costuma ser mais barato, de carro é mais caro devido ao IUC, ao seguro e ao combustível. O estatuto de turista não dá direito a trabalhar.',
  tags: ['glovo', 'recibosverdes', 'estafeta', 'impostos'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-status',
      title: '1. Verifique o direito a trabalhar',
      content: [
        { kind: 'paragraph', text: 'A Glovo, a Uber Eats e a Bolt Food em Portugal normalmente integram estafetas como prestadores independentes, e não como trabalhadores por conta de outrem. Isto significa que você é responsável pelo seu estatuto legal, impostos, Segurança Social, seguro e instrumento de trabalho: bicicleta, e-bike, scooter ou automóvel.' },
        { kind: 'checklist', items: [
          'Cidadão da UE: precisa de NIF, morada e, normalmente, Certificado de Registo de Cidadão da União Europeia após 3 meses de residência.',
          'Não UE: precisa de autorização de residência ou visto que permita trabalhar em Portugal; a entrada como turista não serve.',
          'O NIF é obrigatório: sem ele não é possível abrir atividade nem receber pagamentos como trabalhador independente.',
          'O NISS é necessário para contribuições à Segurança Social; se ainda não o tiver, trate dele antes ou imediatamente depois de começar a trabalhar.',
          'É necessária uma conta bancária com IBAN na zona SEPA para receber pagamentos das plataformas.',
          'A idade é normalmente 18+; as plataformas podem exigir smartphone, documentos do veículo e verificação do perfil.',
          'Para scooter/mota/automóvel são necessárias carta de condução válida da categoria correspondente, seguro automóvel/moto e documentos do veículo.'
        ] },
        { kind: 'warning', text: 'Não comece a fazer entregas com estatuto de turista ou sem atividade aberta: os pagamentos das plataformas são visíveis para o banco e para as Finanças, e numa fiscalização a polícia pode qualificar isso como trabalho ilegal.' }
      ]
    },
    {
      id: 'open-atividade',
      title: '2. Abra atividade nas Finanças como recibos verdes',
      content: [
        { kind: 'paragraph', text: 'Antes do primeiro pagamento, abra atividade no Portal das Finanças. É gratuito. Na prática, os estafetas usam recibos verdes: emite recibo/fatura pelos serviços prestados e declara o rendimento como Categoria B de IRS.' },
        { kind: 'checklist', items: [
          'Entre no Portal das Finanças → Todos os Serviços → Início de Atividade.',
          'Escolha o regime Categoria B — trabalhador independente.',
          'Discuta o código de atividade com um contabilista: muitas vezes considera-se o CAE 53200, outras atividades de courier/postal, ou um código CIRS para outros serviços; o código pode influenciar o coeficiente em IRS.',
          'Escreva: “Se o volume de negócios esperado não exceder 15 000 € por ano, normalmente é possível o regime de isenção ao abrigo do art. 53 CIVA; no ano de abertura de atividade, o limite é calculado proporcionalmente/anualizado com base no volume de negócios esperado, por isso, se não começar em janeiro, confirme o cálculo com um contabilista.”',
          'Se ultrapassar o limite de IVA ou escolher o regime normal, terá de cobrar IVA e entregar declarações periódicas.',
          'Com um volume de negócios reduzido, normalmente não há retenção na fonte, mas isso depende do regime e do cliente.',
          'Guarde o comprovativo de início de atividade: as plataformas ou o contabilista podem pedi-lo.',
          'Depois do registo, emita recibos verdes no Portal das Finanças ou através de software compatível.'
        ] },
        { kind: 'warning', text: 'Não escolha o código de atividade ao acaso. Para um estafeta, a diferença entre códigos pode alterar a base tributável no regime simplificado. Uma hora com um contabilista muitas vezes custa menos do que corrigir uma atividade aberta incorretamente.' }
      ]
    },
    {
      id: 'platform-onboarding',
      title: '3. Faça o registo na Glovo, Uber Eats e Bolt Food',
      content: [
        { kind: 'paragraph', text: 'A lógica é semelhante: registo online, carregamento de documentos, verificação do perfil, escolha da cidade e do transporte, obtenção da mochila térmica e acesso à aplicação. A disponibilidade de vagas depende da cidade: Lisboa, Porto, Braga, Coimbra, Faro e zonas turísticas costumam ser mais ativas, mas as plataformas podem fechar temporariamente o onboarding.' },
        { kind: 'substeps', items: [
          { id: 'glovo', title: 'Glovo', content: [
            { kind: 'paragraph', text: 'Comece no site da Glovo para estafetas. Normalmente são necessários documento de identificação/passaporte ou autorização de residência, NIF, IBAN, telefone, e-mail, comprovativo do direito a trabalhar e dados do transporte. A Glovo pode propor uma sessão informativa e regras de utilização da aplicação.' }
          ] },
          { id: 'uber-eats', title: 'Uber Eats', content: [
            { kind: 'paragraph', text: 'O registo é feito através da conta Uber. Para automóvel/scooter, normalmente pedem carta de condução, documentos do veículo e seguro. Para bicicleta, a lista é mais simples, mas o direito a trabalhar e o registo fiscal continuam a ser necessários.' }
          ] },
          { id: 'bolt-food', title: 'Bolt Food', content: [
            { kind: 'paragraph', text: 'A Bolt Food integra estafetas através do formulário Bolt courier. Os requisitos dependem da cidade e do tipo de transporte. Depois da aprovação, recebe acesso ao regime de slot/online, às regras de aceitação de pedidos e aos pagamentos.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Compare as comissões, bónus e regras de cancelamento de pedidos de cada plataforma.',
          'Verifique quem emite os documentos: você próprio através de recibos verdes ou a plataforma por self-billing.',
          'Confirme o calendário de pagamentos: semanal, quinzenal ou segundo o ciclo interno da plataforma.',
          'Não use a conta de outra pessoa: há risco de bloqueio, problemas com seguro e impostos.',
          'Guarde todos os relatórios de pagamentos, gorjetas, bónus e retenções.'
        ] }
      ]
    },
    {
      id: 'vehicle-costs',
      title: '4. Escolha o transporte: a e-bike é muitas vezes mais vantajosa do que o automóvel',
      content: [
        { kind: 'paragraph', text: 'O rendimento de um estafeta depende não só dos pedidos, mas também das despesas. Em 2026, a receita bruta realista é de cerca de 5–12 €/hora antes de impostos, combustível, reparações e amortização. Com chuva, à noite e ao fim de semana pode ser mais; nas horas paradas, pode ficar abaixo do salário mínimo convertido à hora.' },
        { kind: 'checklist', items: [
          'Bicicleta normal: despesas mínimas, mas menor velocidade e maior esforço físico.',
          'E-bike: bom equilíbrio para Lisboa/Porto; precisa de cadeado, bateria, manutenção de travões e pneus.',
          'Scooter/mota: mais rápida e cómoda em distâncias maiores, mas exige carta, capacete, seguro, combustível e reparações.',
          'Automóvel: conforto com chuva, mas estacionamento, trânsito, combustível, seguro, IUC e desgaste consomem frequentemente o rendimento.',
          'O IUC é pago anualmente por automóveis/motas e depende do ano, cilindrada, CO₂ e tipo de combustível.',
          'Acrescente um item separado: “Além do seguro automóvel/moto para veículos motorizados, o trabalhador independente deve contratar seguro de acidentes de trabalho para a atividade independente; confirme que a apólice cobre entregas/estafeta.”',
          'Para e-bike, confirme os limites: uma pedelec normal até 25 km/h e 250 W não é equivalente a um ciclomotor; modelos mais potentes podem exigir outra categoria legal.',
          'Compre mochila térmica, impermeável, power bank, suporte de telemóvel e boas luzes — isto não é luxo, são despesas de trabalho.'
        ] },
        { kind: 'warning', text: 'Reescrever para: “Antes da primeira entrega, confirme por escrito duas coberturas: seguro de responsabilidade civil/auto para o transporte com utilização profissional e seguro de acidentes de trabalho para atividade de estafeta/trabalhador independente.”' }
      ]
    },
    {
      id: 'tax-social-security',
      title: '5. Impostos, Segurança Social e o valor líquido real',
      content: [
        { kind: 'paragraph', text: 'Recibos verdes não são “dinheiro líquido”. Do valor bruto é necessário reservar dinheiro para IRS, Segurança Social, IVA quando aplicável, reparações, telecomunicações, equipamento e tempos sem trabalho. Escreva: “No primeiro início de atividade, o enquadramento na Segurança Social para trabalhador independente normalmente começa apenas no 1.º dia do 12.º mês após o início da atividade; depois disso são entregues declarações trimestrais e pagas contribuições. Se já teve atividade antes, existe contrato de trabalho ou situações especiais — confirme na Segurança Social Direta/com um contabilista.”' },
        { kind: 'checklist', items: [
          'IRS: o rendimento da Categoria B é declarado anualmente no Modelo 3, normalmente de 1 de abril a 30 de junho relativamente ao ano anterior.',
          'Substituir por: “As taxas progressivas de IRS aplicam-se à base tributável segundo a tabela anual de IRS; as taxas e os escalões mudam conforme o ano e a região, por isso confirme a tabela de IRS para 2026 no Portal das Finanças/Orçamento do Estado.” Se mantiver um número, verifique-o na tabela oficial de IRS de 2026.',
          'No regime simplificado, as Finanças não consideram toda a receita, mas uma parte segundo um coeficiente; o coeficiente depende do tipo de atividade.',
          'Segurança Social: depois da isenção, o trabalhador independente entrega declarações trimestrais.',
          'A taxa padrão para trabalhador independente é de 21,4% do rendimento relevante; para serviços, o rendimento relevante é normalmente calculado sobre uma parte da receita.',
          'IVA: com volume de negócios até 15 000 € por ano, aplica-se frequentemente o art. 53 CIVA; acima do limite, aplicam-se as regras normais de IVA.',
          'Guarde as despesas: reparações, mochila, telemóvel, telecomunicações, combustível, seguro, estacionamento. Mesmo que esteja no regime simplificado, os documentos ajudam em fiscalizações e numa mudança de regime.',
          'Se trabalha em paralelo com contrato de trabalho, confirme as regras de acumulação e eventuais isenções na Segurança Social.'
        ] },
        { kind: 'paragraph', text: 'Exemplo: se a plataforma mostra 800 € num mês, isso ainda não é rendimento líquido. Desconte transporte 80–250 €, telecomunicações/equipamento, futuras contribuições para a Segurança Social e IRS. Nos estafetas de automóvel, a margem líquida é frequentemente bastante inferior à de uma e-bike.' }
      ]
    },
    {
      id: 'worker-rights-risks',
      title: '6. Riscos do trabalho em plataformas',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existe uma presunção de contrato de trabalho para plataformas digitais quando há sinais de dependência e controlo, introduzida no Código do Trabalho pela Lei 13/2023. Mas, na prática, a maioria dos estafetas continua a ser integrada como independent contractors, pelo que a proteção social é mais fraca do que a de um trabalhador com contrato.' },
        { kind: 'checklist', items: [
          'Não há férias pagas, subsídio de Natal nem subsídio de férias se você não for trabalhador por conta de outrem.',
          'Doença e acidente só são cobertos com contribuições corretas e estatuto de seguro adequado.',
          'A conta pode ser temporariamente bloqueada por reclamações, cancelamentos, suspeita de multi-contas ou violação das regras da plataforma.',
          'Gorjetas e bónus também são rendimento e devem ser contabilizados.',
          'Não aceite “alugar uma conta” de outro estafeta: o rendimento fiscal não ficará em seu nome, mas a responsabilidade e o risco de bloqueio mantêm-se.',
          'Se o rendimento se tornar regular e elevado, fale com um contabilista sobre IVA, deduções, regime simplificado vs contabilidade organizada.',
          'O IEFP pode ser útil se procura trabalho mais estável, formação em português ou reconversão profissional em vez de trabalho em plataformas.'
        ] },
        { kind: 'warning', text: 'A entrega por plataformas serve como arranque rápido, mas não substitui um contrato de trabalho completo: para renovar a autorização de residência, arrendar casa e construir histórico de crédito, recibos verdes com rendimento instável muitas vezes parecem mais fracos do que um contrato sem termo.' }
      ]
    }
  ],
  costs: [
    { label: 'Abertura de atividade nas Finanças', amountEUR: 0, note: 'Gratuito através do Portal das Finanças; um contabilista não é obrigatório, mas é útil.' },
    { label: 'Contabilista para configuração e consultas', amountEURMin: 25, amountEURMax: 60, note: 'Intervalo mensal típico para um trabalhador independente simples; uma consulta pontual pode ser cobrada à parte.' },
    { label: 'Mochila térmica, impermeável, suporte de telemóvel, power bank', amountEURMin: 40, amountEURMax: 150, note: 'Algumas plataformas vendem ou alugam a mochila; as condições mudam consoante a cidade.' },
    { label: 'E-bike em segunda mão ou bicicleta de trabalho', amountEURMin: 300, amountEURMax: 1200, note: 'Depende da bateria, do estado e da proteção contra roubo.' },
    { label: 'Despesas mensais com automóvel/scooter', amountEURMin: 120, amountEURMax: 400, note: 'Combustível, manutenção, seguro, estacionamento; o IUC é pago separadamente todos os anos e depende do veículo.' }
  ],
  sources: [
    { title: 'Glovo Portugal — registo de estafetas e informação sobre a plataforma', url: 'https://glovoapp.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IEFP — emprego, formação e apoio a trabalhadores em Portugal', url: 'https://www.iefp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — início de atividade, recibos verdes, IVA e IRS', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — trabalhadores independentes e contribuições', url: 'https://www.seg-social.pt/trabalhadores-independentes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
