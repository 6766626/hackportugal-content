export default {
  editorialVoice: 'hackportugal',
  id: 'inheritance-death-pt',
  categoryId: 'emergency_rights',
  title: 'Inheritance and death in Portugal — what to do',
  tldr: 'Upon the death of a close relative in PT: 1) the death certificate is issued by the doctor/hospital; 2) registration at the Conservatória do Registo Civil within 48 h (via Loja CTT, Espaço Cidadão or online); 3) Imposto do Selo on inheritances — 10% (for non-relatives and not from CPLP); spouse/children/parents — 0%; 4) Habilitação de Herdeiros at a notary; 5) transfer of real estate at the Conservatória Predial; 6) notify the bank/insurers. A foreigner without a residence permit can receive an inheritance in PT under the Brussels IV rules (you can choose the applicable law — of your country or PT).',
  tags: ['inheritance', 'death', 'imposto do selo', 'conservatória', 'estate'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'first-48h',
      title: '⏰ The first 48 hours',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'If the death occurs in a hospital/clinic', content: [
            { kind: 'checklist', items: [
              '🩺 The doctor issues the «Certidão de Óbito» (death certificate)',
              '🏥 The hospital automatically notifies the Conservatória',
              '⚰️ The body is handed over to the funeral home',
              '📞 The funeral home organises the funeral and the registration'
            ]}
          ]},
          { id: 'h2', title: 'If at home or outside a hospital', content: [
            { kind: 'checklist', items: [
              '📞 Call 112 — a medic will attend and certify death',
              '🚓 GNR/PSP may be called — for the report (especially where foul play is suspected)',
              '🩺 The family doctor or SNS 24 on-call issues the Certidão',
              '⚰️ The funeral home collects the body',
              '📋 The family registers the death at the Conservatória within 48 hours'
            ]}
          ]},
          { id: 'h3', title: 'Death registration', content: [
            { kind: 'checklist', items: [
              '🏛️ Any Conservatória do Registo Civil (or Loja CTT, Espaço Cidadão)',
              '🌐 Alternative: online via CMD at eportugal.gov.pt',
              '📜 Documents: Certidão de Óbito from the doctor + CC of the deceased + CC of the applicant',
              '✅ Free if done within 48 hours',
              '⚠️ Late >48 h = fine €50–€200',
              '📜 You receive the «Assento de Óbito»'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'funeral',
      title: '⚰️ Funeral',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Choosing a funeral home', content: [
            { kind: 'checklist', items: [
              '🏛️ Municipal funeral services (cm-cidade.pt) — cheaper',
              '🏢 Private: Servilusa, Funerária do Telhal, etc.',
              '💰 Simple ceremony: €1,500–€3,000',
              '💰 With all services: €4,000–€8,000',
              '⚖️ In big cities everything is pricier'
            ]}
          ]},
          { id: 'f2', title: 'Cremation or burial', content: [
            { kind: 'checklist', items: [
              '⚱️ **Cremation**: €350–€700, plus urn €100–€500',
              '⚰️ **Burial**: €800–€2,000 (grave plot at a municipal cemetery)',
              '🏛️ Family vaults (jazigo): purchase €5,000–€30,000, annual fees',
              '⏰ Usually the funeral takes place 24–72 hours after death',
              '🇷🇺 Repatriating the body: via the consulate, €5,000–€15,000'
            ]}
          ]},
          { id: 'f3', title: 'Religious aspects', content: [
            { kind: 'checklist', items: [
              '✝️ Catholic Mass: free for parishioners',
              '☪️ Muslim ceremony: Mesquita Central de Lisboa',
              '✡️ Jewish: Comunidade Israelita',
              '🛐 Orthodox: Orthodox services are available at the Sé de Lisboa',
              '🌐 Secular ceremony: increasingly chosen by foreigners'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'inheritance-process',
      title: '📜 Inheritance — the process',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: '1. Habilitação de Herdeiros', content: [
            { kind: 'checklist', items: [
              '🏛️ A notary certifies the circle of heirs',
              '📋 Documents: Assento de Óbito, passports/CC of the heirs, marriage/birth certificate',
              '💰 €200–€500 (depends on complexity)',
              '⏱️ 1–2 weeks',
              '📜 You receive the «Habilitação de Herdeiros» — the official deed'
            ]}
          ]},
          { id: 'i2', title: '2. Inventory of assets', content: [
            { kind: 'checklist', items: [
              '📊 List all the deceased’s assets',
              '🏠 Real estate (cadastro at Finanças and Conservatória Predial)',
              '🚗 Vehicles (IMT)',
              '💰 Bank accounts (request via Banco de Portugal)',
              '📈 Investments, shares (CMVM, broker)',
              '👨‍💼 If there is a business — shares in an Lda',
              '⚠️ Some assets may be hidden — it is better to hire a lawyer if the amounts are large'
            ]}
          ]},
          { id: 'i3', title: '3. Imposto do Selo (inheritance tax)', content: [
            { kind: 'checklist', items: [
              '🟢 **Exempt 0%**: spouse, children, grandchildren and parents of the deceased',
              '🟡 **10% Imposto do Selo**: siblings, uncles/aunts, nieces/nephews, non-relatives',
              '🟣 PT differs from other countries — inheritances for close relatives are NOT taxed',
              '⏰ File within 30 days via AT (Modelo 1 do Imposto do Selo)',
              '💸 Payment: within 60 days after filing'
            ]}
          ]},
          { id: 'i4', title: '4. Registration of transfer of assets', content: [
            { kind: 'checklist', items: [
              '🏠 **Real estate**: Conservatória Predial (inheritance entry €350 + stamp duty)',
              '🚗 **Vehicles**: IMT — change of owner, €50',
              '🏦 **Bank accounts**: with the Habilitação de Herdeiros and Imposto do Selo paid → transfer to the heirs',
              '📊 **Shares**: via the broker'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'foreign',
      title: '🌍 For foreigners — Brussels IV',
      content: [
        { kind: 'paragraph', text: 'EU Regulation 650/2012 (Brussels IV) allows you to choose which law applies — the law of your nationality OR PT (where you are). This matters for Russian/Ukrainian/British citizens, whose rules differ.' },
        { kind: 'checklist', items: [
          '📜 **Will (Testamento)**: can be made with a notary in PT, choosing the applicable law (e.g., Russian)',
          '🇷🇺 Without a will + Russian heirs: PT law applies (i.e., spouse/children inherit in equal shares)',
          '⚖️ With a will under Russian law: more flexible arrangements may be possible',
          '💰 Cost: €200–€500 (notary)',
          '🌐 IMPORTANT for British citizens: the UK is not part of Brussels IV (post-Brexit), separate rules apply',
          '🇪🇺 For EU citizens: the certificado europeu de sucessão is recognised across the EU',
          '🏛️ A lawyer specialising in «direito sucessório internacional» is recommended'
        ]}
      ]
    },
    {
      id: 'after',
      title: '📋 After receiving the inheritance',
      content: [
        { kind: 'checklist', items: [
          '💰 **IMI** (property tax) — you now pay it. Re-register at Finanças within 90 days',
          '🩺 **SNS / insurance**: notify (if the deceased was a dependent)',
          '🏦 **Bank**: notify and close/transfer accounts',
          '📞 **Subscriptions and contracts**: phone, internet, utilities, Netflix — cancel or transfer',
          '👨‍⚖️ **Social pensions**: notify Segurança Social — payments will be stopped',
          '📊 **Accounting for recibos verdes**: close the activity if they were a sole trader',
          '⚖️ **Court proceedings**: if the deceased was a party — the heirs step into the case',
          '🏠 **Rented property**: the contract automatically passes to the heirs (Lei 6/2006)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '📜 Make a will at any age, especially if you are a foreigner — it will simplify the process',
          '🆘 Funeral support 24/7: SNS 808 24 24 24 — the line is not only for medical queries',
          '🤝 A lawyer for «direito sucessório» is essential if: there is property > €500,000, foreigners, disputed heirs',
          '⏱️ 30 days to file the Imposto do Selo — missing it = fine up to 25%',
          '💰 The deceased’s life insurance policy — a separate procedure, not part of the estate (if a beneficiary is named)',
          '🌐 PT has international agreements with the Russian Federation/Ukraine on inheritance — they simplify the process',
          '🏠 If the deceased was a tenant — the heir has the right to continue the contract; eviction is not permitted',
          '📊 Keep all documents (Habilitação de Herdeiros, Imposto do Selo payment, registos) — they may be needed for FATCA / your country of tax residence'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Basic funeral home service', amountEURMin: 1500, amountEURMax: 3000 },
    { label: 'Cremation + urn', amountEURMin: 450, amountEURMax: 1200 },
    { label: 'Habilitação de Herdeiros (notary)', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Imposto do Selo for non-relatives', amountEURMin: 10, amountEURMax: 10, note: '% of value' },
    { label: 'Registration of transfer of real estate', amountEUR: 350 },
    { label: 'Will with a notary (precautionary)', amountEURMin: 100, amountEURMax: 300 }
  ],
  sources: [
    { title: 'IRN — Conservatórias e Cartórios', url: 'https://justica.gov.pt/Servicos/Registos-de-obito', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Tributária — Imposto do Selo (inheritance)', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU Regulation 650/2012 — Brussels IV', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012R0650', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
