export default {
  editorialVoice: 'hackportugal',
  id: 'recurso-hierarquico-at',
  categoryId: 'taxes',
  title: 'Recurso hierárquico de decisões das Finanças: recurso hierárquico',
  tldr: 'O recurso hierárquico é uma reclamação administrativa contra uma decisão das Finanças dirigida a um superior hierárquico da Autoridade Tributária. O prazo típico é de 30 dias a contar da notificação da decisão, com submissão através do Portal das Finanças → Contencioso → Recurso Hierárquico ou por escrito no Serviço de Finanças. Não é uma “pausa” da dívida: a cobrança e a execução fiscal normalmente continuam, salvo se houver garantia/suspensão. Em 2026, use-o para liquidações contestadas, indeferimentos de reclamação graciosa, decisões de IMI/IRS/IVA, mas não deixe passar os prazos judiciais.',
  tags: ['finanças', 'impostos', 'recurso', 'irs'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que é o recurso hierárquico',
      content: [
        { kind: 'paragraph', text: 'O recurso hierárquico é um pedido para reapreciar uma decisão fiscal não pelo mesmo inspector/serviço, mas por um órgão superior da Autoridade Tributária e Aduaneira. A base é o Código de Procedimento e de Processo Tributário (CPPT), especialmente os art. 66 e 67.' },
        { kind: 'paragraph', text: 'Na prática, é uma via administrativa entre “simplesmente escrever às Finanças” e ir a tribunal. É usado quando recebe uma decisão desfavorável: indeferimento, indeferimento parcial, liquidação adicional, decisão sobre reclamação graciosa, decisão sancionatória/procedimental ou outro acto da AT que afecte os seus direitos.' },
        { kind: 'checklist', items: [
          'Prazo por regra geral: 30 dias a contar da data de notificação da decisão das Finanças.',
          'É dirigido ao órgão superior hierárquico, mas apresentado através do serviço/órgão que proferiu a decisão contestada.',
          'Pode ser submetido online através do Portal das Finanças: Contencioso → Recurso Hierárquico.',
          'Pode ser apresentado por escrito no Serviço de Finanças, com comprovativo de recepção.',
          'Não é o mesmo que reclamação graciosa: a reclamação normalmente pede primeiro à própria AT que corrija o acto; o recurso hierárquico eleva o litígio a um nível superior.',
          'Não é um processo judicial: a decisão continua dentro da AT.',
          'Para montantes complexos de IRS, IVA, IMI, AIMI, IMT, é melhor mostrar o texto a um contabilista certificado ou a um advogado fiscal antes de submeter.'
        ] }
      ]
    },
    {
      id: 'deadline',
      title: 'Prazo de 30 dias: como contar',
      content: [
        { kind: 'paragraph', text: 'O risco principal é deixar passar o prazo. Em litígios fiscais, o prazo normalmente conta-se a partir do momento em que a decisão se considera notificada: data de recepção da carta registada, data de leitura na Caixa Postal Eletrónica/ViaCTT, data da notificação no Portal das Finanças ou data indicada na notificação electrónica.' },
        { kind: 'checklist', items: [
          'Guarde o PDF da notificação e o envelope/rastreio postal, se a carta tiver chegado pelos Correios.',
          'Verifique a Caixa Postal Eletrónica/ViaCTT: para muitos contribuintes, a notificação electrónica tem relevância jurídica.',
          'Não conte o prazo “a partir da data em que reparei na carta”, se a notificação já se considerar entregue nos termos da lei.',
          'Se o último dia cair num fim-de-semana/feriado, normalmente o prazo passa para o dia útil seguinte, mas não construa a sua estratégia com base nisso.',
          'Para notificações relacionadas com execução fiscal, os prazos podem ser mais curtos ou correr em paralelo com outros prazos.',
          'Se estiver simultaneamente a ponderar ir a tribunal, verifique separadamente o prazo de impugnação judicial: o recurso hierárquico nem sempre “congela” com segurança a estratégia judicial.'
        ] },
        { kind: 'warning', text: 'Não espere por uma resposta das Finanças “um dia destes”. O recurso hierárquico normalmente tem efeito devolutivo: o litígio é remetido para cima, mas a cobrança do imposto, juros e execução fiscal não param por si só. Para suspender a cobrança, muitas vezes é necessária garantia idónea, pagamento em prestações ou outro mecanismo formal.' }
      ]
    },
    {
      id: 'prepare',
      title: 'O que preparar antes da submissão',
      content: [
        { kind: 'paragraph', text: 'Um bom recurso hierárquico não é uma carta emocional. Deve mostrar rapidamente: que acto está a impugnar, por que motivo é ilegal ou errado, que provas o demonstram e que decisão pede que seja tomada.' },
        { kind: 'checklist', items: [
          'O seu NIF, nome, domicílio fiscal e e-mail/telefone de contacto.',
          'Identificação da decisão: número de processo, liquidação, demonstração de acerto de contas, nota de cobrança, despacho ou referência do documento.',
          'Data da notificação e prova da notificação.',
          'Cronologia breve: o que submeteu, quando as Finanças responderam, o que exactamente indeferiram/cobraram.',
          'Fundamentos jurídicos: normas do CIRS/CIRC/CIVA/CIMI/CIMT/LGT/CPPT, se aplicável.',
          'Provas factuais: contrato de arrendamento, recibos de renda, recibos verdes, declaração de IRS, faturas, comprovativos de pagamento, certificado de residência fiscal, atestado de residência, extractos bancários.',
          'Pedido claro: anular a liquidação, reconhecer a dedução, devolver o imposto, corrigir o cadastro, anular juros/coima, etc.',
          'Ficheiros PDF com nomes claros: 01-notificacao.pdf, 02-declaracao-irs.pdf, 03-contrato.pdf.',
          'Se o documento não estiver em PT/EN, prepare uma tradução ou pelo menos uma explicação em português.'
        ] },
        { kind: 'warning', text: 'Escreva em português. As Finanças não são obrigadas a apreciar no mérito um texto em russo, e uma tradução automática sem estrutura muitas vezes piora o caso. Mínimo: “Exmo. Senhor Diretor de Finanças…”, factos, fundamentos jurídicos, pedido, anexos.' }
      ]
    },
    {
      id: 'submit-online',
      title: 'Submissão através do Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'Em 2026, a via principal é o Portal das Finanças. É necessário NIF e palavra-passe da AT ou Chave Móvel Digital (CMD). Se não tiver acesso, recupere a palavra-passe com antecedência: a entrega da carta com o código pode demorar dias, e o prazo não espera.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Entrar no Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Abra portaldasfinancas.gov.pt → Iniciar Sessão. Entre com NIF/senha ou CMD. Verifique que está a actuar a partir do seu NIF, e não do de uma empresa/terceiro.' }
          ] },
          { id: 'menu', title: '2. Encontrar o formulário', content: [
            { kind: 'paragraph', text: 'Vá a Serviços / Cidadãos → Contencioso → Recurso Hierárquico. Os nomes dos itens no Portal podem mudar ligeiramente, por isso use a pesquisa do site: “recurso hierárquico”.' }
          ] },
          { id: 'fill', title: '3. Preencher o requerimento', content: [
            { kind: 'checklist', items: [
              'Seleccione o imposto/área: IRS, IVA, IMI, IMT, IUC, coimas ou outro.',
              'Indique o número do processo ou da liquidação.',
              'Insira um resumo breve dos argumentos no campo descrição.',
              'Anexe o PDF com o texto completo do recurso e anexos.',
              'Verifique os limites de tamanho dos ficheiros; se necessário, junte/comprima os PDF.',
              'Submeta e descarregue o comprovativo de entrega.'
            ] }
          ] },
          { id: 'proof', title: '4. Guardar a prova de submissão', content: [
            { kind: 'paragraph', text: 'Guarde imediatamente o comprovativo, o número do processo e uma captura de ecrã da página de confirmação. É o seu escudo se mais tarde as Finanças disserem que a reclamação não deu entrada ou entrou fora de prazo.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-submission',
      title: 'O que acontece depois da submissão',
      content: [
        { kind: 'paragraph', text: 'O órgão que praticou o acto contestado recebe o recurso e pode ele próprio rever a posição ou remeter o processo ao superior hierárquico. Nos termos do CPPT, a decisão sobre o recurso hierárquico deve ser tomada dentro dos prazos administrativos, mas na prática a espera pode prolongar-se.' },
        { kind: 'checklist', items: [
          'Verifique Portal das Finanças → A minha área → Mensagens / Processos / Contencioso.',
          'Acompanhe a ViaCTT ou Caixa Postal Eletrónica, se estiver activada.',
          'Se chegar um pedido de elementos, responda no prazo indicado e anexe apenas provas relevantes.',
          'Se o imposto a pagar já tiver sido emitido, verifique o prazo de pagamento: o recurso não anula automaticamente a obrigação de pagamento.',
          'Perante risco de execução fiscal, pergunte no Serviço de Finanças sobre garantia, pagamento em prestações ou suspensão da execução.',
          'Se a decisão for favorável, verifique se a AT corrigiu efectivamente a liquidação/cadastro e devolveu o dinheiro com juros indemnizatórios, se forem devidos.',
          'Se houver indeferimento, avalie impugnação judicial ou ação administrativa com um advogado.'
        ] },
        { kind: 'warning', text: 'Não confunda “reclamação apresentada” com “dívida congelada”. Se existir uma nota de cobrança de 3 000 € e o prazo de pagamento expirar, depois do vencimento podem ser cobrados juros de mora e iniciada execução fiscal, mesmo enquanto o recurso hierárquico está a ser apreciado.' }
      ]
    },
    {
      id: 'when-to-use',
      title: 'Quando o recurso hierárquico faz sentido, e quando não',
      content: [
        { kind: 'paragraph', text: 'O recurso hierárquico é útil quando o erro das Finanças é visível pelos documentos e pretende corrigir administrativamente a decisão sem tribunal. Por exemplo: a AT não considerou a residência fiscal, recusou uma dedução, calculou incorrectamente IMI/IMT, não aceitou provas em IRS, processou erradamente uma declaração de substituição.' },
        { kind: 'checklist', items: [
          'Adequado: existe uma decisão escrita das Finanças e está dentro dos 30 dias.',
          'Adequado: o valor em litígio não justifica tribunal, mas os documentos são fortes.',
          'Adequado: é necessário criar um rasto formal antes de um litígio posterior.',
          'Cuidado: o litígio já está em execução fiscal — são necessários instrumentos de defesa separados.',
          'Cuidado: a questão exige testemunhas, perícia ou interpretação complexa da lei — o tribunal pode ser mais eficaz.',
          'Não substitui a revisão oficiosa: a revisão oficiosa é um mecanismo separado de correcção de acto fiscal, muitas vezes usado quando os prazos normais já passaram.',
          'Não substitui a reclamação graciosa: se ainda está na fase de impugnação inicial da liquidação, verifique qual o instrumento que dá melhor prazo e efeito.'
        ] },
        { kind: 'paragraph', text: 'Táctica prática para expatriados: se estiver em causa um pequeno IRS/IMI e o prazo de 30 dias ainda estiver a correr — submeta o recurso hierárquico de forma cuidada e rápida. Se estiver em causa um montante elevado, NHR/IFICI, dupla residência, IVA ou risco de cobrança — não poupe na consulta: um erro na escolha do procedimento pode custar mais do que o imposto.' }
      ]
    }
  ],
  costs: [
    { label: 'Submissão de recurso hierárquico nas Finanças', amountEUR: 0, note: 'Normalmente não há taxa de justiça pela submissão administrativa.' },
    { label: 'Consulta com contabilista/consultor fiscal', amountEURMin: 60, amountEURMax: 200, note: 'Referência para análise de um caso simples de IRS/IMI; Lisboa/Porto e urgência ficam mais caros.' },
    { label: 'Advogado fiscal', amountEURMin: 150, amountEURMax: 500, note: 'Referência para consulta inicial ou preparação da posição; litígio judicial é calculado à parte.' },
    { label: 'Garantia para suspensão da execução fiscal', amountEURMin: 0, amountEURMax: 0, note: 'O montante depende da dívida, juros e custos; o banco pode cobrar comissões por garantia bancária.' }
  ],
  sources: [
    { title: 'CPPT — Código de Procedimento e de Processo Tributário, art. 66–67 sobre recurso hierárquico', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'LGT — Lei Geral Tributária, garantias gerais dos contribuintes', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1998-34438775', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Re-activar: o que é um recurso hierárquico no contexto fiscal', url: 'https://www.re-activar.pt/faqs/o-que-e-um-recurso-hierarquico-no-contexto-fiscal/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Caixa Geral de Depósitos: revisão oficiosa e diferença face a outras formas de correcção de impostos', url: 'https://www.cgd.pt/Site/Saldo-Positivo/leis-e-impostos/Pages/revisao-oficiosa.aspx', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
