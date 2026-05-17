export default {
  editorialVoice: 'hackportugal',
  id: 'glovo-uber-bolt-driver',
  categoryId: 'work_business',
  title: 'Glovo / Uber Eats / Bolt Food: como tornar-se estafeta em Portugal',
  tldr: 'Um estafeta de entregas em Portugal trabalha normalmente como trabalhador independente através de recibos verdes: abre atividade nas Finanças, regista-se na Segurança Social, faz o onboarding na Glovo / Uber Eats / Bolt Food e paga os seus próprios impostos, seguro, combustível e reparações. O rendimento real em 2026 é de cerca de 5–12 €/hora antes de despesas; com e-bike costuma ser mais barato, com automóvel é mais caro devido ao IUC, ao seguro e ao combustível. O estatuto de turista não dá direito a trabalhar.',
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
          'O NISS é necessário para as contribuições para a Segurança Social; se não o tiver, trate dele antes ou imediatamente após começar a trabalhar.',
          'É necessária uma conta bancária com IBAN na zona SEPA para receber pagamentos das plataformas.',
          'A idade é normalmente 18+; as plataformas podem exigir smartphone, documentos do veículo e verificação do perfil.',
          'Para scooter/mota/automóvel são necessárias carta de condução válida da categoria adequada, seguro automóvel/moto e documentos do veículo.'
        ] },
        { kind: 'warning', text: 'Não comece a fazer entregas com estatuto de turista ou sem atividade aberta: os pagamentos das plataformas são visíveis ao banco e às Finanças, e numa fiscalização a polícia pode qualificar isto como trabalho ilegal.' }
      ]
    },
    {
      id: 'open-atividade',
      title: '2. Abra atividade nas Finanças como recibos verdes',
      content: [
        { kind: 'paragraph', text: 'Antes do primeiro pagamento, abra atividade no Portal das Finanças. É gratuito. Na prática, os estafetas usam recibos verdes: emite um recibo/fatura pelos serviços prestados e declara o rendimento como Categoria B de IRS.' },
        { kind: 'checklist', items: [
          'Entre no Portal das Finanças → Todos os Serviços → Início de Atividade.',
          'Escolha o regime Categoria B — trabalhador independente.',
          'Discuta o código de atividade com um contabilista: muitas vezes considera-se o CAE 53200, outras atividades de courier/postal activities, ou um código CIRS para outros serviços; o código pode influenciar o coeficiente em IRS.',
          'Se o volume de negócios previsto for até 15 000 € por ano, normalmente pode aplicar a isenção de IVA ao abrigo do art. 53 CIVA.',
          'Se ultrapassar o limite de IVA ou escolher o regime normal, terá de cobrar IVA e entregar declarações periódicas.',
          'Com um volume de negócios reduzido, normalmente não há retenção na fonte, mas isso depende do regime e do cliente.',
          'Guarde o comprovativo de início de atividade: as plataformas ou o contabilista podem pedi-lo.',
          'Após o registo, emita recibos verdes no Portal das Finanças ou através de software compatível.'
        ] },
        { kind: 'warning', text: 'Não escolha o código de atividade ao acaso. Para um estafeta, a diferença entre códigos pode alterar a base tributável no regime simplificado. Uma hora com um contabilista costuma ser mais barata do que corrigir uma atividade aberta incorretamente.' }
      ]
    },
    {
      id: 'platform-onboarding',
      title: '3. Registe-se na Glovo, Uber Eats e Bolt Food',
      content: [
        { kind: 'paragraph', text: 'A lógica é semelhante: registo online, envio de documentos, verificação do perfil, escolha da cidade e do meio de transporte, obtenção da mochila térmica e acesso à aplicação. A disponibilidade de vagas depende da cidade: Lisboa, Porto, Braga, Coimbra, Faro e zonas turísticas são normalmente mais ativas, mas as plataformas podem fechar temporariamente o onboarding.' },
        { kind: 'substeps', items: [
          { id: 'glovo', title: 'Glovo', content: [
            { kind: 'paragraph', text: 'Comece no site da Glovo para estafetas. Normalmente são necessários ID/passaporte ou autorização de residência, NIF, IBAN, telefone, e-mail, prova do direito a trabalhar e dados do veículo. A Glovo pode propor uma sessão informativa e regras de utilização da aplicação.' }
          ] },
          { id: 'uber-eats', title: 'Uber Eats', content: [
            { kind: 'paragraph', text: 'O registo é feito através da conta Uber. Para automóvel/scooter, normalmente pedem carta de condução, documentos do veículo e seguro. Para bicicleta, a lista é mais simples, mas o direito a trabalhar e o registo fiscal continuam a ser necessários.' }
          ] },
          { id: 'bolt-food', title: 'Bolt Food', content: [
            { kind: 'paragraph', text: 'A Bolt Food integra estafetas através do formulário Bolt courier. Os requisitos dependem da cidade e do tipo de transporte. Após a aprovação, obtém acesso ao modo de slot/online, às regras de aceitação de pedidos e aos pagamentos.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Compare as comissões, bónus e regras de cancelamento de pedidos de cada plataforma.',
          'Verifique quem emite os documentos: você próprio através de recibos verdes ou a plataforma através de self-billing.',
          'Confirme o calendário de pagamentos: semanalmente, quinzenalmente ou segundo o ciclo interno da plataforma.',
          'Não use a conta de outra pessoa: há risco de bloqueio, problemas com seguro e impostos.',
          'Guarde todos os relatórios de pagamentos, gorjetas, bónus e retenções.'
        ] }
      ]
    },
    {
      id: 'vehicle-costs',
      title: '4. Escolha o transporte: a e-bike costuma compensar mais do que o automóvel',
      content: [
        { kind: 'paragraph', text: 'O rendimento de um estafeta depende não só dos pedidos, mas também das despesas. Em 2026, a receita bruta realista é de cerca de 5–12 €/hora antes de impostos, combustível, reparações e amortização. Com chuva, à noite e ao fim de semana pode ser mais; em horas paradas, pode ficar abaixo do salário mínimo quando convertido para valor horário.' },
        { kind: 'checklist', items: [
          'Bicicleta normal: despesas mínimas, mas menor velocidade e maior esforço físico.',
          'E-bike: bom equilíbrio para Lisboa/Porto; precisa de cadeado, bateria, manutenção dos travões e pneus.',
          'Scooter/mota: mais rápida e cómoda em distâncias maiores, mas exige carta, capacete, seguro, combustível e reparações.',
          'Automóvel: conforto com chuva, mas estacionamento, trânsito, combustível, seguro, IUC e desgaste consomem frequentemente o rendimento.',
          'O IUC é pago anualmente por automóvel/mota e depende do ano, cilindrada, CO₂ e tipo de combustível.',
          'O seguro de responsabilidade civil é obrigatório para veículos motorizados; confirme se cobre utilização comercial.',
          'Para e-bike, verifique os limites: uma pedelec normal até 25 km/h e 250 W não é igual a um ciclomotor; modelos mais potentes podem exigir outra categoria legal.',
          'Compre uma mochila térmica, impermeável, power bank, suporte para telemóvel e boas luzes — isto não é luxo, são despesas de trabalho.'
        ] },
        { kind: 'warning', text: 'Se tiver um acidente durante uma entrega, um seguro pessoal comum pode recusar a cobertura se a apólice excluir utilização profissional. Antes de começar, confirme por escrito a cobertura junto da seguradora.' }
      ]
    },
    {
      id: 'tax-social-security',
      title: '5. Impostos, Segurança Social e montante líquido real',
      content: [
        { kind: 'paragraph', text: 'Recibos verdes não são “dinheiro na mão”. Do valor bruto é necessário reservar para IRS, Segurança Social, IVA se aplicável, reparações, comunicações, equipamento e períodos sem pedidos. Se abriu atividade pela primeira vez, normalmente existe isenção de contribuições para a Segurança Social nos primeiros 12 meses, mas depois as contribuições tornam-se regulares.' },
        { kind: 'checklist', items: [
          'IRS: o rendimento da Categoria B é declarado anualmente na Modelo 3, normalmente de 1 de abril a 30 de junho relativamente ao ano anterior.',
          'As taxas progressivas de IRS aplicam-se à base tributável; o primeiro escalão em 2026 é 11,97%.',
          'No regime simplificado, as Finanças não consideram toda a receita, mas uma parte segundo um coeficiente; o coeficiente depende do tipo de atividade.',
          'Segurança Social: após a isenção, o trabalhador independente entrega declarações trimestrais.',
          'A taxa padrão para trabalhador independente é 21,4% sobre o rendimento relevante; para serviços, o rendimento relevante é normalmente calculado sobre uma parte da receita.',
          'IVA: com volume de negócios até 15 000 € por ano, aplica-se frequentemente o art. 53 CIVA; acima do limite, aplicam-se as regras normais de IVA.',
          'Guarde despesas: reparações, mochila, telemóvel, comunicações, combustível, seguro, estacionamento. Mesmo que esteja no regime simplificado, os documentos ajudam em inspeções e em mudanças de regime.',
          'Se trabalha em paralelo com contrato de trabalho, verifique as regras de acumulação e eventuais isenções na Segurança Social.'
        ] },
        { kind: 'paragraph', text: 'Exemplo: se a plataforma mostra 800 € num mês, isso ainda não é rendimento líquido. Subtraia 80–250 € de transporte, comunicações/equipamento, futuras contribuições para a Segurança Social e IRS. Para estafetas de automóvel, a margem líquida é muitas vezes bastante inferior à de uma e-bike.' }
      ]
    },
    {
      id: 'worker-rights-risks',
      title: '6. Riscos do trabalho em plataformas',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existe uma presunção de contrato de trabalho para digital platforms quando há sinais de dependência e controlo, introduzida no Código do Trabalho pela Lei 13/2023. Mas, na prática, a maioria dos estafetas continua a ser integrada como independent contractors, pelo que a proteção social é mais fraca do que a de um trabalhador com contrato.' },
        { kind: 'checklist', items: [
          'Não há férias pagas, subsídio de Natal nem subsídio de férias se você não for trabalhador por conta de outrem.',
          'Doença e acidente só são cobertos com contribuições corretas e estatuto contributivo adequado.',
          'A conta pode ser temporariamente bloqueada por reclamações, cancelamentos, suspeita de multiaccounting ou violação das regras da plataforma.',
          'Gorjetas e bónus também são rendimento e devem entrar na contabilidade.',
          'Não aceite “alugar uma conta” de outro estafeta: o rendimento fiscal não ficará em seu nome, mas a responsabilidade e o risco de bloqueio mantêm-se.',
          'Se o rendimento se tornar regular e elevado, fale com um contabilista sobre VAT, deductions, regime simplificado vs contabilidade organizada.',
          'O IEFP pode ser útil se procura trabalho mais estável, formação em português ou requalificação em vez de trabalho em plataformas.'
        ] },
        { kind: 'warning', text: 'As entregas em plataformas servem como início rápido, mas não substituem um contrato de trabalho completo: para renovação da autorização de residência, arrendamento de casa e histórico de crédito, recibos verdes com rendimento instável parecem muitas vezes mais fracos do que um contrato sem termo.' }
      ]
    }
  ],
  costs: [
    { label: 'Abertura de atividade nas Finanças', amountEUR: 0, note: 'Gratuito através do Portal das Finanças; um contabilista não é obrigatório, mas é útil.' },
    { label: 'Contabilista para configuração e consultas', amountEURMin: 25, amountEURMax: 60, note: 'Intervalo mensal típico para um trabalhador independente simples; uma consulta pontual pode ser cobrada à parte.' },
    { label: 'Mochila térmica, impermeável, suporte para telemóvel, power bank', amountEURMin: 40, amountEURMax: 150, note: 'Algumas plataformas vendem ou alugam a mochila; as condições variam consoante a cidade.' },
    { label: 'E-bike usada ou bicicleta de trabalho', amountEURMin: 300, amountEURMax: 1200, note: 'Depende da bateria, do estado e da proteção contra roubo.' },
    { label: 'Despesas mensais com automóvel/scooter', amountEURMin: 120, amountEURMax: 400, note: 'Combustível, manutenção, seguro, estacionamento; o IUC é pago separadamente todos os anos e depende do veículo.' }
  ],
  sources: [
    { title: 'Glovo Portugal — registo de estafetas e informação sobre a plataforma', url: 'https://glovoapp.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IEFP — emprego, formação e apoio aos trabalhadores em Portugal', url: 'https://www.iefp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — início de atividade, recibos verdes, IVA e IRS', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — trabalhadores independentes e contribuições', url: 'https://www.seg-social.pt/trabalhadores-independentes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
