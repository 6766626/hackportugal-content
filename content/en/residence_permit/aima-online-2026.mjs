export default {
  editorialVoice: 'hackportugal',
  id: 'aima-online-2026',
  categoryId: 'residence_permit',
  title: 'Renewing a residence permit through the AIMA online portal',
  tldr: 'In 2026, residence permit renewal should be started online, but the route depends on the expiry date and card type. Ordinary cards expired from 01.07.2025 onward are renewed through portal-renovacoes.aima.gov.pt. Older cards expired from 22.02.2020 to 30.06.2025 go through services.aima.gov.pt/RAR/reqrenew or the AIMA/EMAIMA email route; CPLP, ARI and EU family cards have separate rules. According to gov.pt, you can apply from 90 days before the card expires. For cards that expired after 30.06.2025, residence rights are maintained for 6 months after the expiry date; if during that time you have started renewal and hold a comprovativo/recibo, AIMA considers your stay legal until the process concludes — even after those 6 months. After the renewal request is registered and paid, AIMA issues a comprovativo valid for 180 days: carry it together with the expired card.',
  tags: ['aima', 'residence permit', 'renewal', 'online'],
  estimatedReadMinutes: 10,
  recentlyChangedAt: '2026-06-23',
  changeSummary: '📌 Corrected the framing of the 6-month period (Decreto Regulamentar 84/2007 art. 63.º n.º 14) and added the post-15.04.2026 deadline situation per AIMA clarifications.',
  steps: [
    {
      id: 'which-portal',
      title: 'Choose the right route first',
      content: [
        { kind: 'paragraph', text: 'In 2026, AIMA does not have one universal entry point for all renewals. If you choose the wrong portal, the process may not appear or may go into the wrong channel.' },
        { kind: 'checklist', items: [
          '✅ Residence permit expired or expiring from 01.07.2025: main route is portal-renovacoes.aima.gov.pt',
          '✅ Residence permit expired from 22.02.2020 to 30.06.2025: if you did not receive an AIMA/EMAIMA email, use services.aima.gov.pt/RAR/reqrenew; as of 23.06.2026 this is already urgent because the 15.04.2026 deadline has passed',
          '✅ CPLP: separate procedure on services.aima.gov.pt/CPLP, not the ordinary portal-renovacoes flow',
          '✅ ARI / Golden Visa: separate ARI flow in Portal das Renovacoes, available from 16.02.2026 according to AIMA',
          '✅ Long-term resident: AIMA opened renewal in Portal das Renovacoes, but check your NISS and address first',
          '❌ First card after a D visa, first residence permit, EU citizen CRUE and residence cards for family members of EU citizens are not ordinary renewals through this portal'
        ]},
        { kind: 'warning', text: 'If your name, address, NIF, passport, NISS or other data changed, first submit an update through the AIMA contact form with the subject Alteracao de Dados. AIMA separately states that personal data changes are not handled as an ordinary renewal request.' }
      ]
    },
    {
      id: 'when-to-apply',
      title: 'When to apply',
      content: [
        { kind: 'checklist', items: [
          '🗓️ According to gov.pt, you can apply from 90 days before the card expires; temporary residence renewal should be requested no later than 30 days before expiry',
          '✅ In practice: start checking the portal 90 days before expiry and apply as soon as AIMA opens your date/category',
          '⚠️ Cards that expired after 30.06.2025: under Decreto Regulamentar 84/2007, art. 63.º n.º 14, residence rights are maintained for 6 months after the expiry date. If during that time you have started renewal and hold a comprovativo/recibo, AIMA considers your stay legal until the process concludes — even after those 6 months.',
          '⚠️ If the card expired before 30.06.2025 and you did not start renewal by 15.04.2026, do not wait: submit the request through services.aima.gov.pt/RAR/reqrenew and discuss the case with an advogado or CLAIM',
          '🧾 After registration of the request and payment, AIMA issues a comprovativo valid for 180 days. It proves the process, but it is not a full residence card for Schengen travel'
        ]},
        { kind: 'warning', text: 'Do not rely on old automatic extensions. AIMA explicitly announced the end of automatic extensions and links legal status to having started the renewal process.' }
      ]
    },
    {
      id: 'prerequisites',
      title: 'What to check before starting',
      content: [
        { kind: 'checklist', items: [
          '📧 Access to the email you give AIMA: password, payment information and notifications arrive there; check Spam',
          '🪪 Your valid/expired residence card number, NIF, date of birth and passport should match AIMA records',
          '🏠 Morada should be current: the new card is sent to the address in the process/AIMA',
          '🔢 NISS is needed for successful validation; if you have NISS but AIMA does not see it, update your data through the contact form',
          '💸 Before applying, check that you have no debts with Financas and Seguranca Social; if portal validation takes too long, fresh certidoes help',
          '🔐 Chave Movel Digital is not the only login method for Portal das Renovacoes, but it is useful for certificates, criminal record certificate and other public services',
          '📄 Prepare colour PDF/JPG files, readable and not cropped; the document list in the portal is more important than any generic checklist'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'Step-by-step through portal-renovacoes',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Register or log in', content: [
            { kind: 'paragraph', text: 'Open portal-renovacoes.aima.gov.pt and create access using the card/document data. AIMA describes the process as registration in the portal: the password is sent to the email address you provide.' },
            { kind: 'warning', text: 'Do not confuse Portal das Renovacoes with the general AIMA Services Portal. The general portal is for other services; ordinary renewals after 01.07.2025 go through renovações.' }
          ]},
          { id: 's2', title: '2. Wait for automatic checks', content: [
            { kind: 'paragraph', text: 'After registration, the system runs checks, including tax and social security status. According to the practical guide in Downloads, this can take several days, so do not leave the process until the last week.' },
            { kind: 'checklist', items: [
              'Financas: certidao de nao divida',
              'Seguranca Social: comprovativo de situacao contributiva / regularidade',
              'If the portal is stuck on validation, save screenshots and the attempt date'
            ]}
          ]},
          { id: 's3', title: '3. Create Novo Pedido', content: [
            { kind: 'paragraph', text: 'When validations pass, click Novo Pedido and choose Renovacao de Autorizacao de Residencia. The comment can usually be left empty unless the portal asks for an explanation.' },
            { kind: 'warning', text: 'If the system shows the wrong category, old address, wrong NISS or does not let you start, do not submit blindly. First update the data through the AIMA contact form and keep the proof of that request.' }
          ]},
          { id: 's4', title: '4. Pay the DUC/Multibanco', content: [
            { kind: 'paragraph', text: 'After a successful request, the portal creates the payment document. AIMA says payment is only possible 24 hours after the guias are issued. In user cases, the payment deadline often appeared as 10 days, but follow the deadline shown in your account.' },
            { kind: 'warning', text: 'The amount depends on category, digital channel, age, exemptions and card type. Do not use old amounts from chats: pay exactly what the DUC/payment page says.' }
          ]},
          { id: 's5', title: '5. Upload documents', content: [
            { kind: 'paragraph', text: 'According to the practical guide and community cases, document upload opens after payment; often the portal gives 10 days. If your portal shows a different deadline, trust the portal. Do not wait only for an email: check the account manually.' },
            { kind: 'checklist', items: [
              'Residence permit card — both sides',
              'Passport — data page and stamp/visa pages if requested by the portal',
              'Comprovativo de condicoes de alojamento: rental contract, domicilio fiscal, recibos de renda, atestado de residencia or another document from your list',
              'Comprovativo de meios de subsistencia: employment contract, recibos verdes/faturas, IRS, bank statements, pension or documents matching your article',
              'Certidao de nao divida Financas',
              'Comprovativo de situacao contributiva / regularidade Seguranca Social, if applicable',
              'Comprovativo de sistema de saude: SNS user number or insurance, if applicable',
              'Requerimento Inicial / Modelo 1, if requested; for renewal choose Renovacao de A.R. TEMPORARIA/PERMANENTE and indicate the article of your permit',
              'Autorizacao para consulta do registo criminal portugues or certificado do registo criminal — whichever your screen asks for'
            ]},
            { kind: 'warning', text: 'The document list is personal. D7, D8, art. 88/89/90, student, family reunification and minors have different sets; a generic checklist does not replace your process screen.' }
          ]},
          { id: 's6', title: '6. Save the comprovativo', content: [
            { kind: 'paragraph', text: 'After the renewal request is registered and paid, AIMA issues a recibo/comprovativo de pedido de renovacao. According to the AIMA announcement of 15.10.2025, it is valid for 180 days.' },
            { kind: 'checklist', items: [
              'Save the PDF to cloud storage, phone and email',
              'Carry the expired residence card together with the comprovativo',
              'For banks, SNS, school and employers in Portugal, this is usually the key waiting-period document',
              'For travel outside Portugal, it is not equivalent to a valid residence card; an airline or another Schengen country may refuse the PDF'
            ]}
          ]},
          { id: 's7', title: '7. Watch status and email', content: [
            { kind: 'paragraph', text: 'After payment, AIMA starts analysis. In community cases, once documents are checked, green marks appear, then a status such as concluido/deferido and an email. If AIMA asks for extra documents, the response deadline is usually short, so do not miss the notice.' },
            { kind: 'timeline', text: 'Real timelines vary widely: from a few weeks to several months. If there is no movement after 90 days, start a written trail: AIMA contact form, regional email, Livro Amarelo/Provedor de Justiça; for a long delay, discuss an administrative procedure against inaction with an advogado.' }
          ]},
          { id: 's8', title: '8. Receive the card', content: [
            { kind: 'paragraph', text: 'After deferimento, the card is usually sent by CTT to the current address. That is why the AIMA address matters. If the card does not arrive after approval, record the deferimento date, check the mailbox/CTT notice and contact AIMA.' }
          ]}
        ]}
      ]
    },
    {
      id: 'old-expired',
      title: 'If the card expired before 30.06.2025',
      content: [
        { kind: 'paragraph', text: 'This is no longer the ordinary portal-renovacoes scenario. AIMA separates old expired cards from cards after 01.07.2025: old cases are handled by Estrutura de Missao / services.aima.gov.pt, while AIMA handles renewals after 01.07.2025.' },
        { kind: 'checklist', items: [
          'If you received an email from renovacao.ar@aima.gov.pt, follow the link in the email and keep all confirmations',
          'If no email arrived, AIMA points to services.aima.gov.pt/RAR/reqrenew for cards expired from 22.02.2020 to 30.06.2025',
          'After the request, you should be contacted by email for confirmation, payment, possible atendimento presencial/biometrics and document upload',
          'AIMA stated that the recibo comprovativo should be made available up to 10 business days after payment confirmation',
          'CPLP, ARI and EU/family cards are not covered by this RAR service'
        ]},
        { kind: 'warning', text: 'As of 23.06.2026, the 15.04.2026 deadline has already passed. The government did not introduce a new general extension after 15.04.2026. According to AIMA, holders of cards that expired before 30.06.2025 who never started renewal are now considered irregular; only a registered portal process with a comprovativo protects you. If you have not yet applied, submit urgently through services.aima.gov.pt/RAR/reqrenew and consult an advogado/CLAIM.' }
      ]
    },
    {
      id: 'documents-details',
      title: 'Documents people often confuse',
      content: [
        { kind: 'substeps', items: [
          { id: 'doc1', title: 'Housing', content: [
            { kind: 'paragraph', text: 'Housing proof may be a contrato de arrendamento, recibos de renda, domicilio fiscal, atestado de residencia, owner declaration or property documents. Upload the exact type requested by the portal.' }
          ]},
          { id: 'doc2', title: 'Income', content: [
            { kind: 'paragraph', text: 'For employment, people usually prepare contrato de trabalho, payslips and IRS/declaration. For independente: atividade aberta, recibos verdes/faturas, IRS and bank statement. For D7: pension, passive income and account movement. AIMA wants the income to be understandable, regular and connected to your article.' }
          ]},
          { id: 'doc3', title: 'Registo criminal', content: [
            { kind: 'paragraph', text: 'Justiça.gov.pt explicitly says foreign citizens requesting or renewing residence in Portugal can authorize AIMA to access the Portuguese criminal record instead of going to a counter for the certificate. But if your screen asks for a certificado, it can be requested online; the price is 5 €, and online issuance can take up to 3 business days.' }
          ]},
          { id: 'doc4', title: 'Modelo 1 / Requerimento Inicial', content: [
            { kind: 'paragraph', text: 'The practical PDF in Downloads explains Modelo 1 separately. If the portal asks for Requerimento Inicial, fill in your personal data, mark Renovacao de A.R. TEMPORARIA/PERMANENTE and indicate the Lei 23/2007 article under which your current permit was issued.' }
          ]},
          { id: 'doc5', title: 'Minors and family', content: [
            { kind: 'paragraph', text: 'Children and family reunification often have additional documents: certificates, parental consents, main applicant documents and proof of family relationship. Do not copy an adult D7/D8 list to a child without checking the screen.' }
          ]}
        ]}
      ]
    },
    {
      id: 'costs-2026',
      title: 'AIMA fees in 2026',
      content: [
        { kind: 'paragraph', text: 'The current AIMA table under Portaria 307/2023 shows two columns: standard fee and reduced digital-channel fee. Portal das Renovacoes calculates the exact amount itself; the figures below are reference points for checking the DUC, not a substitute for the payment document.' },
        { kind: 'checklist', items: [
          'Rececao e Analise for renewal of AR temporaria/permanente: 133.00 €; digital channel 99.80 €',
          'Art. 75(1) Concessao ou Renovacao AR Temporaria: 114.30 €; digital channel 85.80 €',
          'Art. 76(2) Renovacao/Alteracao de Dados AR Permanente: 61.90 €; digital channel 46.30 €',
          'Art. 90-A(2) Renovacao ARI: 4,210.30 €; digital channel 3,157.80 €',
          'Second copy of the card: usually 50% of the relevant taxa de emissao'
        ]},
        { kind: 'warning', text: 'The 307.20 € line in the table refers to Apreciacao do Pedido for dispensa de visto consular under specific articles, not to standard art. 75 renewal. Do not use it as a universal amount for ordinary renewal.' }
      ]
    },
    {
      id: 'if-rejected-or-delayed',
      title: 'If the request is stuck or refused',
      content: [
        { kind: 'paragraph', text: 'First separate a technical portal delay from a procedural AIMA request. Technical delay means no button, validation not passed or payment not active. Procedural request means AIMA has already asked for a document, correction or appointment.' },
        { kind: 'checklist', items: [
          'Save screenshots, emails, DUC, payment proof and process number',
          'If Financas/Seguranca Social validation is stuck, attach fresh certidoes in the AIMA request',
          'If you receive pedido de elementos / aperfeicoamento, answer within the deadline in the email; it is usually short',
          'If you receive indeferimento, do not argue in chats: show the letter to an advogado, because deadlines for audiencia previa/reclamacao/recurso depend on the type of act',
          'If the 180-day comprovativo is expiring and there is still no decision, write to AIMA in advance and keep proof that you tried to renew/clarify status'
        ]},
        { kind: 'warning', text: 'The comprovativo helps prove that the process was started, but it does not make an expired card a full travel document. Travel risk remains until the physical card arrives.' }
      ]
    },
    {
      id: 'not-renewal',
      title: 'What is not an ordinary renewal',
      content: [
        { kind: 'checklist', items: [
          'First card after a D visa: primeira concessao / emissao inicial through AIMA, not renewal',
          'CRUE for EU citizens: handled under EU citizen rules, not through portal-renovacoes',
          'Cartao de residencia para familiar de cidadao da UE: separate AIMA procedure',
          'CPLP: separate services.aima.gov.pt/CPLP channel and often biometrics/appointment',
          'First switch to permanent residence: not the same as renewing a temporary permit; check the separate permanent residence guide',
          'Students who did not finish studies and are working under art. 122(j), and some highly qualified/student-without-visa cases, have separate contact-form routes published by AIMA'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Residence permit card', note: 'both sides, even if already expired' },
    { title: 'Passport', note: 'data page; additional pages if the portal asks' },
    { title: 'Comprovativo de alojamento', note: 'contract, receipts, domicilio fiscal, atestado or another document from your list' },
    { title: 'Comprovativo de meios de subsistencia', note: 'salary, recibos verdes, IRS, pension, bank statements — according to your article' },
    { title: 'Certidao de nao divida Financas', note: 'useful to prepare in advance' },
    { title: 'Comprovativo de situacao contributiva Seguranca Social', note: 'if applicable; check NISS' },
    { title: 'SNS / health insurance', note: 'if required by your category' },
    { title: 'Modelo 1 / Requerimento Inicial', note: 'if requested; indicate renewal and the Lei 23/2007 article' },
    { title: 'Autorizacao para consulta do registo criminal or certificate', note: 'depends on what the screen asks for' }
  ],
  costs: [
    { label: 'Rececao e Analise — AR renewal', amountEUR: 133, note: 'digital channel: 99.80 €' },
    { label: 'Art. 75(1) — renovacao AR temporaria', amountEUR: 114.30, note: 'digital channel: 85.80 €' },
    { label: 'Art. 76(2) — renovacao/alteracao AR permanente', amountEUR: 61.90, note: 'digital channel: 46.30 €' },
    { label: 'Art. 90-A(2) — renovacao ARI', amountEUR: 4210.30, note: 'digital channel: 3,157.80 €' },
    { label: 'Online criminal record certificate', amountEUR: 5 },
    { label: 'Late renewal fine/risk', amountEURMin: 75, amountEURMax: 300, note: 'depends on the case; not a substitute for advice' }
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
