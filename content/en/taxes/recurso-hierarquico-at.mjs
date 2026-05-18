export default {
  editorialVoice: 'hackportugal',
  id: 'recurso-hierarquico-at',
  categoryId: 'taxes',
  title: 'Hierarchical appeal against Finanças decisions: recurso hierárquico',
  tldr: 'Recurso hierárquico is an administrative complaint against a Finanças decision to a higher-ranking manager within the Autoridade Tributária. The typical deadline is 30 days from notification of the decision, submitted via Portal das Finanças → Contencioso → Recurso Hierárquico or in writing at the Serviço de Finanças. It is not a “pause” on the debt: cobrança and execução fiscal usually continue unless there is a guarantee/suspension. In 2026, use it for disputed liquidações, refusals following reclamação graciosa, IMI/IRS/IVA decisions, but do not miss court deadlines.',
  tags: ['finanças', 'taxes', 'appeal', 'irs'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What recurso hierárquico is',
      content: [
        { kind: 'paragraph', text: 'Recurso hierárquico is a request to review a tax decision not by the same inspector/service, but by a higher-ranking body of the Autoridade Tributária e Aduaneira. The basis is the Código de Procedimento e de Processo Tributário (CPPT), especially art. 66 and 67.' },
        { kind: 'paragraph', text: 'In practice, this is an administrative route between “just writing to Finanças” and going to court. It is used when you have received something desfavorável: a refusal, partial refusal, additional liquidação, a decision on a reclamação graciosa, a penalty/procedural decision, or another AT act that affects your rights.' },
        { kind: 'checklist', items: [
          'General deadline: 30 days from the date of notification of the Finanças decision.',
          'It is addressed to the higher-ranking body, but submitted through the service/body that issued the disputed decision.',
          'It can be submitted online via Portal das Finanças: Contencioso → Recurso Hierárquico.',
          'It can be submitted in writing at the Serviço de Finanças with proof of receipt.',
          'It is not the same as reclamação graciosa: reclamação usually first asks AT itself to correct the act; recurso hierárquico escalates the dispute.',
          'It is not court proceedings: the decision remains within AT.',
          'For complex IRS, IVA, IMI, AIMI, IMT amounts, it is better to show the text to a contabilista certificado or tax lawyer before filing.'
        ] }
      ]
    },
    {
      id: 'deadline',
      title: 'The 30-day deadline: how to count it',
      content: [
        { kind: 'paragraph', text: 'The key risk is missing the prazo. In tax disputes, the deadline is usually counted from the moment the decision is deemed to have been notified to you: the date of receipt of the carta registada, the leitura date in Caixa Postal Eletrónica/ViaCTT, the notification date in Portal das Finanças, or the date stated in the electronic notification.' },
        { kind: 'checklist', items: [
          'Save the notification PDF and the envelope/postal tracking if the letter arrived by Correios.',
          'Check Caixa Postal Eletrónica/ViaCTT: for many taxpayers, electronic notification is legally significant.',
          'Do not count the deadline from “the date I noticed the letter” if the notification is already deemed delivered by law.',
          'If the final day falls on a weekend/public holiday, the deadline usually moves to the next working day, but do not build your strategy around this.',
          'For notifications connected with execução fiscal, deadlines may be shorter or run in parallel with other deadlines.',
          'If you are also considering court action, separately check the impugnação judicial deadline: recurso hierárquico does not always safely “freeze” a court strategy.'
        ] },
        { kind: 'warning', text: 'Do not wait for a reply from Finanças “at some point”. Recurso hierárquico usually has devolutivo effect: the dispute is escalated, but cobrança of the tax, juros and execução fiscal do not stop by themselves. To suspend collection, you often need a garantia idónea, pagamento em prestações or another formal mechanism.' }
      ]
    },
    {
      id: 'prepare',
      title: 'What to prepare before filing',
      content: [
        { kind: 'paragraph', text: 'A good recurso hierárquico is not an emotional letter. It must quickly show: which act you are appealing, why it is unlawful or mistaken, what evidence supports this, and what decision you ask to be made.' },
        { kind: 'checklist', items: [
          'Your NIF, name, address fiscal and contact e-mail/phone number.',
          'Identification of the decision: número processo, liquidação, demonstração de acerto de contas, nota de cobrança, despacho or referência do documento.',
          'Date of notification and proof of notification.',
          'Brief chronology: what you submitted, when Finanças replied, and exactly what was refused/assessed.',
          'Legal grounds: CIRS/CIRC/CIVA/CIMI/CIMT/LGT/CPPT rules, if applicable.',
          'Factual evidence: tenancy agreement, recibos de renda, recibos verdes, declaração de IRS, faturas, comprovativos de pagamento, certificado de residência fiscal, Atestado de Residência, bank statements.',
          'Clear pedido: cancel the liquidação, recognise the deduction, refund the imposto, correct the cadastro, cancel juros/coima, etc.',
          'PDF files with clear names: 01-notificacao.pdf, 02-declaracao-irs.pdf, 03-contrato.pdf.',
          'If a document is not in PT/EN, prepare a translation or at least an explanation in Portuguese.'
        ] },
        { kind: 'warning', text: 'Write in Portuguese. Finanças is not obliged to examine English text on the merits, and unstructured machine translation often makes the case worse. Minimum: “Exmo. Senhor Diretor de Finanças…”, facts, legal grounds, pedido, anexos.' }
      ]
    },
    {
      id: 'submit-online',
      title: 'Filing through Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'In 2026, the main route is Portal das Finanças. You need a NIF and AT password or Chave Móvel Digital (CMD). If you do not have access, recover your password in advance: delivery of the letter with the code may take days, and the prazo will not wait.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Open portaldasfinancas.gov.pt → Iniciar Sessão. Log in with NIF/senha or CMD. Check that you are acting under your own NIF, not a company’s or a third party’s.' }
          ] },
          { id: 'menu', title: '2. Find the form', content: [
            { kind: 'paragraph', text: 'Go to Serviços / Cidadãos → Contencioso → Recurso Hierárquico. Menu item names in the Portal may change slightly, so use the site search: “recurso hierárquico”.' }
          ] },
          { id: 'fill', title: '3. Fill in the application', content: [
            { kind: 'checklist', items: [
              'Select the tax/area: IRS, IVA, IMI, IMT, IUC, coimas or other.',
              'Enter the processo or liquidação number.',
              'Insert a short summary of your arguments in the descrição field.',
              'Attach a PDF with the full recurso text and anexos.',
              'Check file size limits; if necessary, merge/compress the PDFs.',
              'Submit and download the comprovativo de entrega.'
            ] }
          ] },
          { id: 'proof', title: '4. Save proof of submission', content: [
            { kind: 'paragraph', text: 'Immediately save the comprovativo, case number and a screenshot of the confirmation page. This is your shield if Finanças later says the complaint was not received or was received late.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-submission',
      title: 'What happens after filing',
      content: [
        { kind: 'paragraph', text: 'The body that issued the disputed act receives the recurso and may review its own position or forward the case to the higher-ranking manager. Under the CPPT, a decision on a recurso hierárquico must be made within administrative deadlines, but in practice the wait can drag on.' },
        { kind: 'checklist', items: [
          'Check Portal das Finanças → A minha área → Mensagens / Processos / Contencioso.',
          'Monitor ViaCTT or Caixa Postal Eletrónica if it is activated.',
          'If a pedido de elementos arrives, reply within the stated deadline and attach only relevant evidence.',
          'If the tax payable has already been issued, check the prazo de pagamento: recurso does not automatically cancel the obrigação de pagamento.',
          'If there is a risk of execução fiscal, ask the Serviço de Finanças about garantia, pagamento em prestações or suspensão da execução.',
          'If the decision is positive, check that AT has actually corrected the liquidação/cadastro and refunded the money with juros indemnizatórios, if due.',
          'If it is refused, assess impugnação judicial or ação administrativa with a lawyer.'
        ] },
        { kind: 'warning', text: 'Do not confuse “complaint filed” with “debt frozen”. If there is a nota de cobrança for €3,000 and the payment prazo expires, juros de mora may accrue and execução fiscal may begin after expiry, even while the recurso hierárquico is being considered.' }
      ]
    },
    {
      id: 'when-to-use',
      title: 'When recurso hierárquico is appropriate, and when it is not',
      content: [
        { kind: 'paragraph', text: 'Recurso hierárquico is useful when the Finanças error is visible from the documents and you want to correct the decision administratively without going to court.\n\nFor example: AT did not take tax residence into account, refused a deduction, calculated IMI/IMT incorrectly, did not accept evidence for IRS, or processed a declaração de substituição incorrectly.' },
        { kind: 'checklist', items: [
          'Appropriate: there is a written Finanças decision and you are within the 30 days.',
          'Appropriate: the disputed amount does not justify court, but the documents are strong.',
          'Appropriate: you need to create a formal trail before a further dispute.',
          'Be careful: the dispute is already in execução fiscal — separate defence tools are needed.',
          'Be careful: the issue requires witnesses, expert evidence or complex interpretation of the law — court may be more effective.',
          'Does not replace revisão oficiosa: revisão oficiosa is a separate mechanism for correcting a tax act, often used when ordinary deadlines have already passed.',
          'Does not replace reclamação graciosa: if you are still at the initial stage of challenging a liquidação, check which tool gives the best deadline and effect.'
        ] },
        { kind: 'paragraph', text: 'Practical tactic for an expat: if it is a small IRS/IMI issue and the 30-day deadline is still alive, file a recurso hierárquico carefully and quickly. If it concerns a large amount, NHR/IFICI, dual residence, IVA or collection risk, do not save money on advice: a mistake in choosing the procedure may cost more than the tax.' }
      ]
    }
  ],
  costs: [
    { label: 'Filing a recurso hierárquico with Finanças', amountEUR: 0, note: 'There is usually no state fee for administrative filing.' },
    { label: 'Consultation with a contabilista/tax adviser', amountEURMin: 60, amountEURMax: 200, note: 'Indicative price for reviewing a simple IRS/IMI case; Lisbon/Porto and urgency cost more.' },
    { label: 'Tax lawyer', amountEURMin: 150, amountEURMax: 500, note: 'Indicative price for an initial consultation or preparation of a position; court litigation is calculated separately.' },
    { label: 'Garantia to suspend execução fiscal', amountEURMin: 0, amountEURMax: 0, note: 'The amount depends on the debt, juros and custos; a bank may charge fees for a bank guarantee.' }
  ],
  sources: [
    { title: 'CPPT — Código de Procedimento e de Processo Tributário, art. 66–67 on recurso hierárquico', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'LGT — Lei Geral Tributária, general taxpayer guarantees', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1998-34438775', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Re-activar: what recurso hierárquico is in a tax context', url: 'https://www.re-activar.pt/faqs/o-que-e-um-recurso-hierarquico-no-contexto-fiscal/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Caixa Geral de Depósitos: revisão oficiosa and the difference from other ways to correct taxes', url: 'https://www.cgd.pt/Site/Saldo-Positivo/leis-e-impostos/Pages/revisao-oficiosa.aspx', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
