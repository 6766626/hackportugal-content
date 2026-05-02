export default {
  editorialVoice: 'hackportugal',
  id: 'glovo-uber-bolt-driver',
  categoryId: 'work_business',
  title: 'Glovo / Uber Eats / Bolt Food: como tornar-se estafeta em Portugal',
  tldr: 'Um estafeta de entregas em Portugal trabalha normalmente como trabalhador independente através de recibos verdes: abre atividade nas Finanças, regista-se na Segurança Social, faz o onboarding na Glovo / Uber Eats / Bolt Food e paga por conta própria impostos, seguro, combustível e reparações. O rendimento real em 2026 é de cerca de 5–12 €/hora antes de despesas; com e-bike costuma ser mais barato, de carro é mais caro devido ao IUC, seguro e combustível. O estatuto de turista não dá direito a trabalhar.',
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
          'O NISS é necessário para contribuições para a Segurança Social; se não o tiver, trate dele antes ou imediatamente após começar a trabalhar.',
          'É necessária uma conta bancária com IBAN na zona SEPA para receber pagamentos das plataformas.',
          'A idade normalmente é 18+; as plataformas podem exigir smartphone, documentos do veículo e verificação do perfil.',
          'Para scooter/mota/automóvel são necessárias carta de condução válida da categoria correspondente, seguro automóvel/moto e documentos do veículo.'
        ] },
        { kind: 'warning', text: 'Não comece a fazer entregas com estatuto de turista ou sem atividade aberta: os pagamentos das plataformas são visíveis para o banco e para as Finanças, e, numa fiscalização, a polícia pode qualificar isso como trabalho ilegal.' }
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
          'Discuta o código de atividade com um contabilista: muitas vezes considera-se o CAE 53200, outras atividades courier/postais, ou um código CIRS para outros serviços; o código pode influenciar o coeficiente no IRS.',
          'Se o volume de negócios previsto for até 15 000 € por ano, normalmente pode aplicar a isenção de IVA ao abrigo do art. 53 CIVA.',
          'Se ultrapassar o limite de IVA ou escolher o regime normal, terá de cobrar IVA e entregar declarações periódicas.',
          'Com volume de negócios reduzido, normalmente não há retenção na fonte, mas isso depende do regime e do cliente.',
          'Guarde o comprovativo de início de atividade: as plataformas ou o contabilista podem pedi-lo.',
          'Depois do registo, emita recibos verdes no Portal das Finanças ou através de software compatível.'
        ] },
        { kind: 'warning', text: 'Não escolha o código de atividade ao acaso. Para um estafeta, a diferença entre códigos pode alterar a base tributável no regime simplificado. Uma hora com um contabilista é muitas vezes mais barata do que corrigir uma atividade aberta de forma errada.' }
      ]
    },
    {
      id: 'platform-onboarding',
      title: '3. Faça o onboarding na Glovo, Uber Eats e Bolt Food',
      content: [
        { kind: 'paragraph', text: 'A lógica é semelhante: registo online, carregamento de documentos, verificação do perfil, escolha da cidade e do transporte, obtenção da mochila térmica e acesso à aplicação. A disponibilidade de inscrições depende da cidade: Lisboa, Porto, Braga, Coimbra, Faro e zonas turísticas tendem a ser mais ativas, mas as plataformas podem encerrar temporariamente o onboarding.' },
        { kind: 'substeps', items: [
          { id: 'glovo', title: 'Glovo', content: [
            { kind: 'paragraph', text: 'Comece no site da Glovo para estafetas. Normalmente são necessários ID/passaporte ou autorização de residência, NIF, IBAN, telefone, e-mail, comprovativo do direito a trabalhar e dados do transporte. A Glovo pode propor uma sessão informativa e regras de utilização da aplicação.' }
          ] },
          { id: 'uber-eats', title: 'Uber Eats', content: [
            { kind: 'paragraph', text: 'O registo é feito através da conta Uber. Para automóvel/scooter, normalmente pedem carta de condução, documentos do veículo e seguro. Para bicicleta, a lista é mais simples, mas o direito a trabalhar e o registo fiscal continuam a ser necessários.' }
          ] },
          { id: 'bolt-food', title: 'Bolt Food', content: [
            { kind: 'paragraph', text: 'A Bolt Food integra estafetas através do formulário Bolt courier. Os requisitos dependem da cidade e do tipo de transporte. Após aprovação, recebe acesso ao sistema de slots/modo online, às regras de aceitação de pedidos e aos pagamentos.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Compare comissões, bónus e regras de cancelamento de pedidos em cada plataforma.',
          'Verifique quem emite os documentos: você através de recibos verdes ou a plataforma por self-billing.',
          'Confirme o calendário de pagamentos: semanalmente, quinzenalmente ou de acordo com o ciclo interno da plataforma.',
          'Não use a conta de outra pessoa: há risco de bloqueio, problemas com seguro e impostos.',
          'Guarde todos os relatórios de pagamentos, gorjetas, bónus e retenções.'
        ] }
      ]
    },
    {
      id: 'vehicle-costs',
      title: '4. Escolha o transporte: e-bike é muitas vezes mais vantajosa do que automóvel',
      content: [
        { kind: 'paragraph', text: 'O rendimento de um estafeta depende não só dos pedidos, mas também das despesas. Em 2026, a receita bruta realista é de cerca de 5–12 €/hora antes de impostos, combustível, reparações e depreciação. À chuva, à noite e ao fim de semana pode ser mais; nas horas calmas, pode ficar abaixo do salário mínimo convertido para valor/hora.' },
        { kind: 'checklist', items: [
          'Bicicleta normal: despesas mínimas, mas menor velocidade e maior esforço físico.',
          'E-bike: bom equilíbrio para Lisboa/Porto; são necessários cadeado, bateria, manutenção dos travões e pneus.',
          'Scooter/mota: mais rápida e conveniente em distâncias maiores, mas exige carta, capacete, seguro, combustível e reparações.',
          'Automóvel: confortável à chuva, mas estacionamento, trânsito, combustível, seguro, IUC e desgaste consomem frequentemente o rendimento.',
          'O IUC é pago anualmente para automóvel/mota e depende do ano, cilindrada, CO₂ e tipo de combustível.',
          'O seguro de responsabilidade civil é obrigatório para veículos motorizados; verifique se cobre utilização comercial.',
          'Para e-bike, confirme os limites: uma pedelec normal até 25 km/h e 250 W não é igual a um ciclomotor; modelos mais potentes podem exigir outra categoria legal.',
          'Compre mochila térmica, impermeável, power bank, suporte de telemóvel e boas luzes — não é luxo, são despesas de trabalho.'
        ] },
        { kind: 'warning', text: 'Se tiver um acidente durante uma entrega, um seguro pessoal comum pode recusar a cobertura se a apólice excluir uso profissional. Antes de começar, confirme por escrito a cobertura junto da seguradora.' }
      ]
    },
    {
      id: 'tax-social-security',
      title: '5. Impostos, Segurança Social e valor líquido real',
      content: [
        { kind: 'paragraph', text: 'Recibos verdes não são “dinheiro na mão”. Do valor bruto, deve reservar para IRS, Segurança Social, IVA quando aplicável, reparações, telecomunicações, equipamento e períodos sem trabalho. Se abriu atividade pela primeira vez, normalmente aplica-se a isenção de contribuições para a Segurança Social nos primeiros 12 meses, mas depois as contribuições tornam-se regulares.' },
        { kind: 'checklist', items: [
          'IRS: o rendimento da Categoria B é declarado anualmente no Modelo 3, normalmente de 1 de abril a 30 de junho relativamente ao ano anterior.',
          'As taxas progressivas de IRS aplicam-se à base tributável; o primeiro escalão em 2026 é 11,97%.',
          'No regime simplificado, as Finanças não consideram toda a receita, mas uma parte segundo um coeficiente; o coeficiente depende do tipo de atividade.',
          'Segurança Social: após a isenção, o trabalhador independente entrega declarações trimestrais.',
          'A taxa normal para trabalhador independente é 21,4% sobre o rendimento relevante; para serviços, o rendimento relevante é normalmente calculado sobre uma parte da receita.',
          'IVA: com volume de negócios até 15 000 € por ano, aplica-se frequentemente o art. 53 CIVA; acima do limite, aplicam-se as regras normais de IVA.',
          'Guarde despesas: reparações, mochila, telemóvel, comunicações, combustível, seguro, estacionamento. Mesmo que esteja no regime simplificado, os documentos ajudam em fiscalizações e na mudança de regime.',
          'Se trabalha em paralelo com contrato de trabalho, verifique as regras de acumulação e possíveis isenções na Segurança Social.'
        ] },
        { kind: 'paragraph', text: 'Exemplo: se a plataforma mostrar 800 € num mês, isso ainda não é rendimento líquido. Subtraia transporte 80–250 €, comunicações/equipamento, futuras contribuições para a Segurança Social e IRS. Para estafetas de automóvel, a margem líquida é muitas vezes bastante inferior à de uma e-bike.' }
      ]
    },
    {
      id: 'worker-rights-risks',
      title: '6. Riscos do trabalho em plataformas',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existe uma presunção de contrato de trabalho para digital platforms quando há indícios de dependência e controlo, introduzida no Código do Trabalho pela Lei 13/2023. Mas, na prática, a maioria dos estafetas continua a ser integrada como independent contractors, pelo que a proteção social é mais fraca do que a de um trabalhador com contrato.' },
        { kind: 'checklist', items: [
          'Não há férias pagas, subsídio de Natal nem subsídio de férias, se não for trabalhador por conta de outrem.',
          'Doença e lesão só são cobertas com contribuições corretas e estatuto de seguro adequado.',
          'A conta pode ser temporariamente bloqueada por reclamações, cancelamentos, suspeita de multi-accounting ou violação das regras da plataforma.',
          'Gorjetas e bónus também são rendimento e devem entrar na contabilidade.',
          'Não aceite “arrendar uma conta” de outro estafeta: o rendimento fiscal não ficará em seu nome, mas a responsabilidade e o risco de bloqueio permanecem.',
          'Se o rendimento se tornar regular e elevado, fale com um contabilista sobre VAT, deductions, regime simplificado vs contabilidade organizada.',
          'O IEFP pode ser útil se procura trabalho mais estável, aprendizagem de português ou reconversão em vez de emprego em plataformas.'
        ] },
        { kind: 'warning', text: 'A entrega por plataformas serve como início rápido, mas não substitui um contrato de trabalho completo: para renovar uma autorização de residência, arrendar casa e construir histórico de crédito, recibos verdes com rendimento instável muitas vezes parecem mais fracos do que um contrato sem termo.' }
      ]
    }
  ],
  costs: [
    { label: 'Abertura de atividade nas Finanças', amountEUR: 0, note: 'Gratuito através do Portal das Finanças; contabilista não é obrigatório, mas é útil.' },
    { label: 'Contabilista para configuração e consultas', amountEURMin: 25, amountEURMax: 60, note: 'Intervalo mensal típico para um trabalhador independente simples; uma consulta pontual pode ter custo separado.' },
    { label: 'Mochila térmica, impermeável, suporte de telemóvel, power bank', amountEURMin: 40, amountEURMax: 150, note: 'Algumas plataformas vendem ou alugam a mochila; as condições mudam consoante a cidade.' },
    { label: 'E-bike usada ou bicicleta de trabalho', amountEURMin: 300, amountEURMax: 1200, note: 'Depende da bateria, estado e proteção contra roubo.' },
    { label: 'Despesas mensais com automóvel/scooter', amountEURMin: 120, amountEURMax: 400, note: 'Combustível, manutenção, seguro, estacionamento; o IUC é pago separadamente todos os anos e depende do veículo.' }
  ],
  sources: [
    { title: 'Glovo Portugal — registo de estafetas e informação sobre a plataforma', url: 'https://glovoapp.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IEFP — emprego, formação e apoio a trabalhadores em Portugal', url: 'https://www.iefp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — início de atividade, recibos verdes, IVA e IRS', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — trabalhadores independentes e contribuições', url: 'https://www.seg-social.pt/trabalhadores-independentes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
