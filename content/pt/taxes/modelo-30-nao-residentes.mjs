export default {
  editorialVoice: 'hackportugal',
  id: 'modelo-30-nao-residentes',
  categoryId: 'taxes',
  title: 'Modelo 30 — declaração mensal de pagamentos a não residentes',
  tldr: 'A Modelo 30 é entregue nas Finanças quando uma empresa, ENI ou atividade paga rendimentos a um não residente: prestador estrangeiro, senhorio, consultor, titular de direitos, credor.\n\nO prazo é até ao fim do 2.º mês após o pagamento: pagamento em 10.04.2026 → declaração até 30.06.2026. É entregue mesmo quando se aplica a Convenção para Evitar Dupla Tributação através da Modelo 21-RFI. Por atraso, normalmente pode haver coima de 150 € a 3 750 € ao abrigo do RGIT.',
  tags: ['modelo30', 'não residentes', 'irs', 'irc', 'retenção'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é a Modelo 30 e quando surge',
      content: [
        { kind: 'paragraph', text: 'A Modelo 30 é a declaração mensal de rendimentos pagos ou colocados à disposição de sujeitos passivos não residentes. Em termos simples: é um reporte às Finanças sobre rendimentos que um pagador português pagou a uma pessoa ou empresa sem residência fiscal em Portugal.' },
        { kind: 'paragraph', text: 'Para um expat, isto surge sobretudo não na vida pessoal, mas quando tem uma sociedade, ENI ou atividade aberta: pagou a um programador estrangeiro, profissional de marketing, consultor, advogado, senhorio, juros, royalties, dividendos ou outros rendimentos que, pelas regras portuguesas, são considerados rendimento de um não residente.' },
        { kind: 'checklist', items: [
          'Uma Lda portuguesa paga a um freelancer de Espanha, dos EUA, do Brasil ou da Ucrânia por serviços.',
          'Atividade / recibos verdes paga a um prestador estrangeiro como despesa de negócio.',
          'Uma empresa portuguesa paga renda a um landlord não residente por um imóvel em Portugal.',
          'A empresa paga dividends/shareholder remuneration a um acionista não residente.',
          'Existem juros de um empréstimo a um não residente.',
          'Existem royalties, licenças, software/IP payments a um não residente.',
          'Aplicou uma reduced rate ou exemption ao abrigo de um double tax treaty — a obrigação declarativa continua normalmente a existir.',
          'O pagamento não foi em dinheiro, mas por compensação/retenção/colocação à disposição — o facto relevante para a Modelo 30 ainda pode ocorrer.'
        ] }
      ]
    },
    {
      id: 'who-files',
      title: 'Quem é obrigado a entregar',
      content: [
        { kind: 'paragraph', text: 'A obrigação recai sobre a entidade devedora ou entidade pagadora: quem deve pagar o rendimento ou quem efetivamente o paga. Pode ser uma empresa, associação, condomínio, ENI ou pessoa singular com atividade, se o pagamento estiver relacionado com a sua atividade económica.' },
        { kind: 'paragraph', text: 'Um trabalhador por conta de outrem comum, sem atividade, que apenas compra um serviço a um estrangeiro para fins pessoais, em regra, não se torna um declarante regular da Modelo 30. Mas se tiver NIF com atividade aberta ou empresa, o contabilista deve verificar cada pagamento ao estrangeiro.' },
        { kind: 'warning', text: 'Não confunda a Modelo 30 com a declaração recapitulativa de IVA / VIES. O VIES comunica operações intracomunitárias de IVA. A Modelo 30 comunica rendimentos de não residentes para efeitos de IRS/IRC e retenção na fonte. Por vezes, a mesma operação exige ambos os reportes.' }
      ]
    },
    {
      id: 'deadline',
      title: 'Prazos: mensal, mas com desfasamento de 2 meses',
      content: [
        { kind: 'paragraph', text: 'A Modelo 30 é entregue até ao fim do 2.º mês seguinte ao mês do pagamento, vencimento, liquidação, apuramento ou colocação à disposição do rendimento. Não espere pelo IRS/IRC anual — esta é uma obrigação mensal.' },
        { kind: 'checklist', items: [
          'Pagamento em 05.01.2026 → entregar até 31.03.2026.',
          'Pagamento em 29.02.2026 → entregar até 30.04.2026.',
          'Pagamento em 10.04.2026 → entregar até 30.06.2026.',
          'Pagamento em 31.12.2026 → entregar até 28.02.2027.',
          'Se no mês houve vários pagamentos a não residentes, são incluídos na declaração desse mês.',
          'Se não houve pagamentos a não residentes, normalmente não se entrega uma Modelo 30 a zeros.',
          'Se o prazo cair num fim de semana/feriado, aplicam-se as regras gerais de prorrogação dos prazos fiscais para o dia útil seguinte.'
        ] },
        { kind: 'warning', text: 'Erro prático: orientar-se pela data da invoice. Para a Modelo 30, não é apenas a factura que é crítica, mas o momento do pagamento, vencimento ou colocação à disposição. Confirme com o contabilista que data ele usa na sua situação.' }
      ]
    },
    {
      id: 'withholding-and-treaties',
      title: 'Retenção na fonte e convenções para evitar dupla tributação',
      content: [
        { kind: 'paragraph', text: 'A Modelo 30 não substitui a retenção do imposto. Se, pelas regras portuguesas, for necessário reter IRS/IRC sobre o rendimento de um não residente, o pagador faz a retenção na fonte, paga-a às Finanças e entrega separadamente a Modelo 30.' },
        { kind: 'paragraph', text: 'A taxa depende do tipo de rendimento, do estatuto do beneficiário e da convenção fiscal. Em casos típicos, para não residentes surgem frequentemente 25% sobre business/professional income, rents, royalties ou corporate income, mas os dividendos pagos a pessoas singulares podem ser sujeitos a 28%, e uma treaty pode reduzir a taxa ou conceder isenção. Não use uma única taxa para todos os pagamentos.' },
        { kind: 'checklist', items: [
          'Verifique a residência fiscal do beneficiário à data do pagamento.',
          'Determine o tipo de rendimento: serviços, renda, royalties, interest, dividends, pensions, commissions, etc.',
          'Verifique se o rendimento é considerado obtido de fonte em Portugal.',
          'Verifique o Código do IRS ou o Código do IRC aplicável.',
          'Se existir Convenção para Evitar Dupla Tributação, obtenha a Modelo 21-RFI antes do pagamento ou antes de aplicar a reduced rate.',
          'Guarde o certificado de residência fiscal do beneficiário, se for exigido.',
          'Se os documentos da treaty não estiverem prontos, é mais seguro reter imposto à taxa interna e depois tratar do refund/regularização.',
          'Declare na Modelo 30 não só o montante do rendimento, mas também o imposto retido ou o fundamento para a não retenção.'
        ] },
        { kind: 'warning', text: 'A Modelo 21-RFI não é uma “declaração em vez da Modelo 30”. É o documento para aplicar treaty relief. Mesmo quando o imposto não é retido por causa da convenção, a Modelo 30 normalmente continua a ser a obrigação declarativa do pagador.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Como entregar no Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'collect-data', title: '1. Reúna os dados do pagamento', content: [
            { kind: 'checklist', items: [
              'NIF do pagador português.',
              'Mês e ano do pagamento ou da colocação à disposição.',
              'Nome/denominação do não residente.',
              'País de residência fiscal do beneficiário.',
              'Tax identification number estrangeiro do beneficiário, se existir.',
              'Tipo de rendimento de acordo com as tabelas da Modelo 30.',
              'Gross amount antes de retenções.',
              'Montante da retenção na fonte, se tiver sido efetuada.',
              'Fundamento para reduced rate ou exemption, se tiver sido aplicada treaty.',
              'Dados da Modelo 21-RFI / certificado de residência fiscal, se tiverem sido usados.'
            ] }
          ] },
          { id: 'submit-online', title: '2. Entregue a declaração online', content: [
            { kind: 'paragraph', text: 'Entre no Portal das Finanças com NIF e senha ou através da Chave Móvel Digital. A área encontra-se normalmente em Entregar > Declarações > Modelo 30 ou através da pesquisa no site das Finanças. A declaração pode ser preenchida online ou enviada por ficheiro, se o software de contabilidade gerar XML.' }
          ] },
          { id: 'save-proof', title: '3. Guarde os comprovativos', content: [
            { kind: 'checklist', items: [
              'Comprovativo de entrega Modelo 30.',
              'Cópia da invoice/contract com o não residente.',
              'Comprovativo do pagamento bancário.',
              'Comprovativo de pagamento retenção na fonte, se existiu.',
              'Modelo 21-RFI e certificado de residência fiscal.',
              'Correspondência sobre o estatuto fiscal do beneficiário.',
              'Cálculo da taxa e referência à treaty/article, se aplicou benefício.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'mistakes',
      title: 'Erros típicos e coimas',
      content: [
        { kind: 'checklist', items: [
          'Não entregar a Modelo 30 porque “o fornecedor emitiu invoice sem IVA”. IVA e obrigações declarativas de IRS/IRC são regimes diferentes.',
          'Achar que, se o prestador for da EU, a Modelo 30 não é necessária. O estatuto EU, por si só, não elimina a obrigação.',
          'Pagar o montante gross ao não residente quando era necessário fazer retenção na fonte.',
          'Aplicar treaty sem Modelo 21-RFI ou sem comprovativo de residência fiscal.',
          'Declarar pela data da invoice em vez da data do pagamento/colocação à disposição.',
          'Esquecer pagamentos a sócios não residentes: dividends, interest, management fees.',
          'Não reconciliar a Modelo 30 com as despesas contabilísticas e os pagamentos bancários.',
          'Pensar que um NIF pessoal sem empresa é sempre seguro: se houver atividade aberta e o pagamento estiver relacionado com ela, a obrigação pode surgir.'
        ] },
        { kind: 'paragraph', text: 'Por falta de entrega ou entrega tardia de uma declaração fiscal, o RGIT prevê normalmente uma coima de 150 € a 3 750 €. Se o erro estiver relacionado com imposto não retido, o risco é maior: as Finanças podem exigir o próprio imposto, juros compensatórios e coimas separadas.' },
        { kind: 'warning', text: 'Se encontrou Modelos 30 em falta de meses anteriores, não espere por uma inspeção. Peça ao contabilista para entregar a falta/declaração de substituição e verificar separadamente a retenção na fonte. A correção voluntária costuma ser mais barata do que uma notificação da AT.' }
      ]
    }
  ],
  costs: [
    { label: 'Entrega da Modelo 30 nas Finanças', amountEUR: 0, note: 'Não há taxa administrativa; a entrega através do Portal das Finanças é gratuita.' },
    { label: 'Preparação contabilística de uma declaração', amountEURMin: 20, amountEURMax: 75, note: 'Referência de mercado para pequenos negócios; casos complexos com treaty custam mais.' },
    { label: 'Coima por falta de entrega/atraso da declaração', amountEURMin: 150, amountEURMax: 3750, note: 'Intervalo típico da coima ao abrigo do RGIT art. 116; o resultado depende dos factos e do comportamento do contribuinte.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Modelo 30: rendimentos pagos a não residentes',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — Decreto-Lei 442-A/88, obrigações declarativas e retenção na fonte',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1988-34464575',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — Convenções para evitar dupla tributação e formulários RFI',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/convencoes_evitar_dupla_tributacao/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regime Geral das Infrações Tributárias — coimas por falta de declarações',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2001-34459875',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
