export default {
  editorialVoice: 'hackportugal',
  id: 'recurso-hierarquico-at',
  categoryId: 'taxes',
  title: 'Impugnação hierárquica de decisões das Finanças: recurso hierárquico',
  tldr: 'O recurso hierárquico é uma reclamação administrativa contra uma decisão das Finanças dirigida a um superior hierárquico da Autoridade Tributária. O prazo típico é de 30 dias a contar da notificação da decisão, com entrega através do Portal das Finanças → Contencioso → Recurso Hierárquico ou por escrito no Serviço de Finanças. Não é uma “pausa” da dívida: a cobrança e a execução fiscal normalmente continuam, salvo se existir garantia/suspensão. Em 2026, utilize-o para liquidações contestadas, indeferimentos de reclamação graciosa, decisões de IMI/IRS/IVA, mas não deixe passar os prazos judiciais.',
  tags: ['finanças', 'impostos', 'reclamação', 'irs'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o recurso hierárquico',
      content: [
        { kind: 'paragraph', text: 'O recurso hierárquico é um pedido para reapreciar uma decisão fiscal não pelo mesmo inspector/serviço, mas por um órgão superior da Autoridade Tributária e Aduaneira. A base é o Código de Procedimento e de Processo Tributário (CPPT), especialmente os art. 66 e 67.' },
        { kind: 'paragraph', text: 'Na prática, é uma via administrativa entre “simplesmente escrever às Finanças” e o tribunal. É utilizado quando recebeu uma decisão desfavorável: indeferimento, indeferimento parcial, liquidação adicional, decisão sobre reclamação graciosa, decisão sancionatória/procedimental ou outro acto da AT que afecte os seus direitos.' },
        { kind: 'checklist', items: [
          'Prazo como regra geral: 30 dias a contar da data de notificação da decisão das Finanças.',
          'É dirigido ao órgão superior, mas apresentado através do serviço/órgão que proferiu a decisão contestada.',
          'Pode ser apresentado online através do Portal das Finanças: Contencioso → Recurso Hierárquico.',
          'Pode ser apresentado por escrito no Serviço de Finanças com comprovativo de recepção.',
          'Não é o mesmo que reclamação graciosa: a reclamação normalmente pede primeiro à própria AT que corrija o acto; o recurso hierárquico eleva o litígio a um nível superior.',
          'Não é um processo judicial: a decisão continua dentro da AT.',
          'Para montantes complexos de IRS, IVA, IMI, AIMI, IMT, é melhor mostrar o texto a um contabilista certificado ou a um advogado fiscal antes de o apresentar.'
        ] }
      ]
    },
    {
      id: 'deadline',
      title: 'Prazo de 30 dias: como contar',
      content: [
        { kind: 'paragraph', text: 'O risco principal é deixar passar o prazo. Nos litígios fiscais, o prazo conta-se normalmente a partir do momento em que a decisão se considera notificada: data de recepção da carta registada, data de leitura na Caixa Postal Eletrónica/ViaCTT, data de notificação no Portal das Finanças ou data indicada na notificação electrónica.' },
        { kind: 'checklist', items: [
          'Guarde o PDF da notificação e o envelope/rastreamento postal, se a carta chegou pelos Correios.',
          'Verifique a Caixa Postal Eletrónica/ViaCTT: para muitos contribuintes, a notificação electrónica tem relevância jurídica.',
          'Não conte o prazo “a partir da data em que reparei na carta”, se a notificação já se considera entregue nos termos da lei.',
          'Se o último dia calhar num fim-de-semana/feriado, normalmente o prazo passa para o dia útil seguinte, mas não construa a sua estratégia com base nisso.',
          'Para notificações relacionadas com execução fiscal, os prazos podem ser mais curtos ou correr em paralelo com outros prazos.',
          'Se estiver simultaneamente a ponderar recorrer a tribunal, verifique separadamente o prazo de impugnação judicial: o recurso hierárquico nem sempre “congela” de forma segura a estratégia judicial.'
        ] },
        { kind: 'warning', text: 'Não espere por uma resposta das Finanças “um dia destes”. O recurso hierárquico tem normalmente efeito devolutivo: o litígio é remetido para um nível superior, mas a cobrança do imposto, os juros e a execução fiscal não ficam, por si só, suspensos. Para suspender a cobrança, muitas vezes é necessária uma garantia idónea, pagamento em prestações ou outro mecanismo formal.' }
      ]
    },
    {
      id: 'prepare',
      title: 'O que preparar antes de apresentar',
      content: [
        { kind: 'paragraph', text: 'Um bom recurso hierárquico não é uma carta emocional. Deve mostrar rapidamente: que acto contesta, porque é ilegal ou errado, que provas o confirmam e que decisão pede que seja tomada.' },
        { kind: 'checklist', items: [
          'O seu NIF, nome, morada fiscal e e-mail/telefone de contacto.',
          'Identificação da decisão: número de processo, liquidação, demonstração de acerto de contas, nota de cobrança, despacho ou referência do documento.',
          'Data da notificação e prova da notificação.',
          'Cronologia breve: o que apresentou, quando as Finanças responderam, o que exactamente foi indeferido/cobrado.',
          'Fundamentos jurídicos: normas do CIRS/CIRC/CIVA/CIMI/CIMT/LGT/CPPT, se aplicável.',
          'Provas factuais: contrato de arrendamento, recibos de renda, recibos verdes, declaração de IRS, faturas, comprovativos de pagamento, certificado de residência fiscal, Atestado de Residência, extractos bancários.',
          'Pedido claro: anular a liquidação, reconhecer a dedução, devolver o imposto, corrigir o cadastro, anular juros/coima, etc.',
          'Ficheiros PDF com nomes claros: 01-notificacao.pdf, 02-declaracao-irs.pdf, 03-contrato.pdf.',
          'Se o documento não estiver em PT/EN, prepare uma tradução ou, pelo menos, uma explicação em português.'
        ] },
        { kind: 'warning', text: 'Escreva em português. As Finanças não são obrigadas a analisar o mérito de um texto noutra língua, e uma tradução automática sem estrutura muitas vezes prejudica o caso. Mínimo: “Exmo. Senhor Diretor de Finanças…”, factos, fundamentos jurídicos, pedido, anexos.' }
      ]
    },
    {
      id: 'submit-online',
      title: 'Apresentação através do Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'Em 2026, a via principal é o Portal das Finanças. É necessário NIF e palavra-passe da AT ou Chave Móvel Digital (CMD). Se não tiver acesso, recupere a palavra-passe com antecedência: a entrega da carta com o código pode demorar dias, e o prazo não espera.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar no Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Abra portaldasfinancas.gov.pt → Iniciar Sessão. Entre com NIF/senha ou CMD. Confirme que está a actuar em nome do seu NIF, e não em nome de uma empresa/terceiro.' }
          ] },
          { id: 'menu', title: '2. Encontrar o formulário', content: [
            { kind: 'paragraph', text: 'Vá a Serviços / Cidadãos → Contencioso → Recurso Hierárquico. Os nomes das opções no Portal podem mudar ligeiramente, por isso utilize a pesquisa do site: “recurso hierárquico”.' }
          ] },
          { id: 'fill', title: '3. Preencher o requerimento', content: [
            { kind: 'checklist', items: [
              'Seleccione o imposto/área: IRS, IVA, IMI, IMT, IUC, coimas ou outro.',
              'Indique o número do processo ou da liquidação.',
              'Insira um resumo breve dos argumentos no campo descrição.',
              'Anexe o PDF com o texto completo do recurso e os anexos.',
              'Verifique os limites de tamanho dos ficheiros; se necessário, junte/comprima os PDF.',
              'Submeta e descarregue o comprovativo de entrega.'
            ] }
          ] },
          { id: 'proof', title: '4. Guardar a prova de entrega', content: [
            { kind: 'paragraph', text: 'Guarde imediatamente o comprovativo, o número do processo e uma captura de ecrã da página de confirmação. É o seu escudo se, mais tarde, as Finanças disserem que a reclamação não entrou ou entrou fora de prazo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-submission',
      title: 'O que acontece depois da apresentação',
      content: [
        { kind: 'paragraph', text: 'O órgão que praticou o acto contestado recebe o recurso e pode rever a sua posição ou remeter o processo para o superior hierárquico. Pelo CPPT, a decisão sobre o recurso hierárquico deve ser tomada dentro dos prazos administrativos, mas na prática a espera pode prolongar-se.' },
        { kind: 'checklist', items: [
          'Verifique o Portal das Finanças → A minha área → Mensagens / Processos / Contencioso.',
          'Acompanhe a ViaCTT ou a Caixa Postal Eletrónica, se estiver activada.',
          'Se chegar um pedido de elementos, responda dentro do prazo indicado e junte apenas provas relevantes.',
          'Se o imposto a pagar já tiver sido emitido, verifique o prazo de pagamento: o recurso não elimina automaticamente a obrigação de pagamento.',
          'Em caso de risco de execução fiscal, pergunte no Serviço de Finanças sobre garantia, pagamento em prestações ou suspensão da execução.',
          'Se a decisão for favorável, confirme que a AT corrigiu efectivamente a liquidação/cadastro e devolveu o dinheiro com juros indemnizatórios, se forem devidos.',
          'Se houver indeferimento, avalie uma impugnação judicial ou ação administrativa com um advogado.'
        ] },
        { kind: 'warning', text: 'Não confunda “reclamação apresentada” com “dívida congelada”. Se houver uma nota de cobrança de 3 000 € e o prazo de pagamento expirar, podem começar a contar juros de mora e pode iniciar-se execução fiscal, mesmo enquanto o recurso hierárquico está a ser apreciado.' }
      ]
    },
    {
      id: 'when-to-use',
      title: 'Quando o recurso hierárquico é adequado, e quando não é',
      content: [
        { kind: 'paragraph', text: 'O recurso hierárquico é útil quando o erro das Finanças é visível nos documentos e você quer corrigir administrativamente a decisão sem tribunal. Por exemplo: a AT não considerou a residência fiscal, recusou uma dedução, calculou incorrectamente IMI/IMT, não aceitou provas no IRS, processou incorrectamente uma declaração de substituição.' },
        { kind: 'checklist', items: [
          'Adequado: existe uma decisão escrita das Finanças e está dentro dos 30 dias.',
          'Adequado: o montante em litígio não justifica tribunal, mas os documentos são fortes.',
          'Adequado: é necessário criar um rasto formal antes de um litígio posterior.',
          'Cuidado: o litígio já está em execução fiscal — são necessários instrumentos de defesa separados.',
          'Cuidado: a questão exige testemunhas, perícia ou interpretação jurídica complexa — o tribunal pode ser mais eficaz.',
          'Não substitui a revisão oficiosa: a revisão oficiosa é um mecanismo separado de correcção de um acto tributário, muitas vezes utilizado quando os prazos normais já passaram.',
          'Não substitui a reclamação graciosa: se ainda está na fase de contestação inicial da liquidação, verifique que instrumento oferece o melhor prazo e efeito.'
        ] },
        { kind: 'paragraph', text: 'Táctica prática para um expat: se estiver em causa um IRS/IMI pequeno e o prazo de 30 dias ainda estiver a correr — apresente o recurso hierárquico de forma cuidada e rápida. Se estiver em causa um montante elevado, NHR/IFICI, dupla residência, IVA ou risco de cobrança — não poupe na consulta: um erro na escolha do procedimento pode custar mais do que o imposto.' }
      ]
    }
  ],
  costs: [
    { label: 'Apresentação de recurso hierárquico nas Finanças', amountEUR: 0, note: 'Normalmente não há taxa de justiça pela apresentação administrativa.' },
    { label: 'Consulta com contabilista/consultor fiscal', amountEURMin: 60, amountEURMax: 200, note: 'Valor indicativo para análise de um caso simples de IRS/IMI; Lisboa/Porto e urgência são mais caros.' },
    { label: 'Advogado fiscal', amountEURMin: 150, amountEURMax: 500, note: 'Valor indicativo para uma consulta inicial ou preparação da posição; o litígio judicial é calculado separadamente.' },
    { label: 'Garantia para suspensão de execução fiscal', amountEURMin: 0, amountEURMax: 0, note: 'O montante depende da dívida, juros e custos; o banco pode cobrar comissões por uma garantia bancária.' }
  ],
  sources: [
    { title: 'CPPT — Código de Procedimento e de Processo Tributário, art. 66–67 sobre recurso hierárquico', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'LGT — Lei Geral Tributária, garantias gerais dos contribuintes', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1998-34438775', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Re-activar: o que é um recurso hierárquico no contexto fiscal', url: 'https://www.re-activar.pt/faqs/o-que-e-um-recurso-hierarquico-no-contexto-fiscal/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Caixa Geral de Depósitos: revisão oficiosa e diferença face a outros meios de correcção de impostos', url: 'https://www.cgd.pt/Site/Saldo-Positivo/leis-e-impostos/Pages/revisao-oficiosa.aspx', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
