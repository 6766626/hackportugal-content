export default {
  editorialVoice: 'hackportugal',
  id: 'inheritance-death-pt',
  categoryId: 'emergency_rights',
  title: 'Inheritance and death in Portugal — what to do',
  tldr: 'When someone close dies in PT: 1) the death certificate is issued by a doctor/hospital; 2) registration at the Conservatória do Registo Civil within 48 hours (via Loja CTT, Espaço Cidadão or online); 3) Imposto do Selo on inheritance — 10% (for non-relatives and non-CPLP); spouse/children/parents — 0%; 4) Habilitação de Herdeiros at a notary; 5) transfer of property at the Conservatória Predial; 6) notify the bank / insurers. A foreigner without a residence permit can inherit in PT under Brussels IV rules (you can choose the applicable law — your country’s or PT’s).',
  tags: ['inheritance', 'death', 'Imposto do Selo', 'Conservatória', 'estate'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'first-48h',
      title: '⏰ First 48 hours',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'If death occurs in a hospital/clinic', content: [
            { kind: 'checklist', items: [
              '🩺 The doctor issues a “Certidão de Óbito” (death certificate)',
              '🏥 The hospital automatically notifies the Conservatória',
              '⚰️ The body is transferred to the funeral home',
              '📞 The funeral home organises the funeral and registration'
            ]}
          ]},
          { id: 'h2', title: 'If at home or outside hospital', content: [
            { kind: 'checklist', items: [
              '📞 Call 112 — a medic will come and certify the death',
              '🚓 Sometimes GNR/PSP are called — for the record (especially if a crime is suspected)',
              '🩺 The family doctor or SNS 24 duty doctor issues the Certidão',
              '⚰️ The funeral home collects the body',
              '📋 The family registers the death at the Conservatória within 48 hours'
            ]}
          ]},
          { id: 'h3', title: 'Death registration', content: [
            { kind: 'checklist', items: [
              '🏛️ Any Conservatória do Registo Civil (or Loja CTT, Espaço Cidadão)',
              '🌐 Alternative: online via CMD on eportugal.gov.pt',
              '📜 Documents: Certidão de Óbito from the doctor + deceased’s CC + applicant’s CC',
              '✅ Free if completed within 48 hours',
              '⚠️ Late filing >48 h = fine €50–€200',
              '📜 You receive the “Assento de Óbito”'
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
              '🏛️ Municipal funeral homes (cm-cidade.pt) — cheaper',
              '🏢 Private: Servilusa, Funerária do Telhal, etc.',
              '💰 Simple ceremony: €1,500–€3,000',
              '💰 With all services: €4,000–€8,000',
              '⚖️ Everything is more expensive in a large city'
            ]}
          ]},
          { id: 'f2', title: 'Cremation or burial', content: [
            { kind: 'checklist', items: [
              '⚱️ **Cremation**: €350–€700, plus urn €100–€500',
              '⚰️ **Burial**: €800–€2,000 (burial plot in a municipal cemetery)',
              '🏛️ Family tombs (jazigo): purchase €5,000–€30,000, annual fees',
              '⏰ Funerals usually take place 24–72 hours after death',
              '🇷🇺 To repatriate the body: process via the consulate, €5,000–€15,000'
            ]}
          ]},
          { id: 'f3', title: 'Religious considerations', content: [
            { kind: 'checklist', items: [
              '✝️ Catholic mass: free for parishioners',
              '☪️ Muslim ceremony: Mesquita Central de Lisboa',
              '✡️ Jewish: Comunidade Israelita',
              '🛐 Orthodox: Orthodox services are held at Sé de Lisboa',
              '🌐 Secular ceremony: increasingly chosen by foreigners'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'inheritance-process',
      title: '📜 Inheritance — process',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: '1. Habilitação de Herdeiros', content: [
            { kind: 'checklist', items: [
              '🏛️ A notary certifies the circle of heirs',
              '📋 Documents: Assento de Óbito, heirs’ passports/CC, marriage/birth certificate',
              '💰 €200–€500 (depends on complexity)',
              '⏱️ 1–2 weeks',
              '📜 You receive the “Habilitação de Herdeiros” — the official deed'
            ]}
          ]},
          { id: 'i2', title: '2. Inventory of assets', content: [
            { kind: 'checklist', items: [
              '📊 List of all the deceased’s assets',
              '🏠 Property (cadastro at Finanças and Conservatória Predial)',
              '🚗 Vehicles (IMT)',
              '💰 Bank accounts (request to Banco de Portugal)',
              '📈 Investments, shares (CMVM, broker)',
              '👨‍💼 If there is a business — shares in an Lda',
              '⚠️ Some assets may be hidden — it is better to hire a lawyer if the sums are large'
            ]}
          ]},
          { id: 'i3', title: '3. Imposto do Selo (inheritance tax)', content: [
            { kind: 'checklist', items: [
              '🟢 **Exempt 0%**: spouse, children, grandchildren and parents of the deceased',
              '🟡 **10% Imposto do Selo**: brothers/sisters, uncles/aunts, nephews/nieces, non-relatives',
              '🟣 PT differs from other countries — inheritance for close relatives is NOT taxed',
              '⏰ Declaration within 30 days via AT (Modelo 1 do Imposto do Selo)',
              '💸 Payment: up to 60 days after submitting the declaration'
            ]}
          ]},
          { id: 'i4', title: '4. Registration of asset transfer', content: [
            { kind: 'checklist', items: [
              '🏠 **Property**: Conservatória Predial (inheritance partition €350 + stamp duty)',
              '🚗 **Car**: IMT — change of owner, €50',
              '🏦 **Bank accounts**: with Habilitação de Herdeiros and paid Imposto do Selo → transfer to the heirs',
              '📊 **Shares**: through the broker'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'foreign',
      title: '🌍 For foreigners — Brussels IV',
      content: [
        { kind: 'paragraph', text: 'EU Regulation 650/2012 (Brussels IV) gives you the right to choose which law applies — the law of your country of citizenship OR PT (where you are located). This matters for Russian/Ukrainian/British citizens, whose rules differ.' },
        { kind: 'checklist', items: [
          '📜 **Will (Testamento)**: you can make one at a notary in PT, choosing the applicable law (for example, Russian law)',
          '🇷🇺 No will + Russian heirs: PT law applies (meaning the spouse/children receive everything in equal shares)',
          '⚖️ With a will under Russian law: more flexible solutions are possible',
          '💰 Cost: €200–€500 (notary)',
          '🌐 IMPORTANT for British citizens: the UK is not part of Brussels IV (after Brexit), separate rules apply',
          '🇪🇺 EU citizens: certificado europeu de sucessão is recognised across the EU',
          '🏛️ A lawyer specialising in “direito sucessório internacional” is recommended'
        ]}
      ]
    },
    {
      id: 'after',
      title: '📋 After receiving the inheritance',
      content: [
        { kind: 'checklist', items: [
          '💰 **IMI** (property tax) — you now pay it. Re-register with Finanças within 90 days',
          '🩺 **SNS / insurance**: notify them (if the deceased was a dependent)',
          '🏦 **Bank**: notify and close/transfer accounts',
          '📞 **Subscriptions and contracts**: phone, internet, utilities, Netflix — cancel or transfer',
          '👨‍⚖️ **Social pensions**: notify Segurança Social — payments will be stopped',
          '📊 **Accounting for recibos verdes**: close the activity if they were self-employed',
          '⚖️ **Court cases**: if the deceased was a party — the heirs take over the proceedings',
          '🏠 **Rental property**: the contract automatically transfers to the heirs (Lei 6/2006)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '📜 Make a will at any age, especially if you are a foreigner — it will simplify the process',
          '🆘 Funeral home 24/7: SNS 808 24 24 24 — the line is not only for medical questions',
          '🤝 A lawyer for “direito sucessório” is essential if: there is property >€500k, foreigners are involved, heirs are disputed',
          '⏱️ 30 days for the Imposto do Selo declaration — missing it = fine of up to 25%',
          '💰 The deceased’s life insurance contract — separate procedure, not part of the inheritance (if a beneficiary is named)',
          '🌐 PT has international agreements with the Russian Federation/UA on inheritance — they simplify the process',
          '🏠 If the deceased was a tenant — the heir has the right to continue the contract; they cannot be evicted',
          '📊 Keep all documents (Habilitação de Herdeiros, Imposto do Selo payment, registos) — they may be needed for FATCA / your country of tax residence'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Simple funeral home', amountEURMin: 1500, amountEURMax: 3000 },
    { label: 'Cremation + urn', amountEURMin: 450, amountEURMax: 1200 },
    { label: 'Habilitação de Herdeiros (notary)', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Imposto do Selo for non-relatives', amountEURMin: 10, amountEURMax: 10, note: '% of value' },
    { label: 'Registration of property transfer', amountEUR: 350 },
    { label: 'Will at a notary (prudent)', amountEURMin: 100, amountEURMax: 300 }
  ],
  sources: [
    { title: 'IRN — Conservatórias and notary offices', url: 'https://justica.gov.pt/Servicos/Registos-de-obito', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Tributária — Imposto do Selo (inheritance)', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU Regulation 650/2012 — Brussels IV', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012R0650', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
