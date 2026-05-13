export default {
  editorialVoice: 'hackportugal',
  id: 'casamento-dois-paises-internacional',
  categoryId: 'nationality',
  title: 'Marriage to a foreign national: dual registration',
  tldr: 'An international marriage in Portugal is usually done in two tracks: first the processo preliminar de casamento and a civil ceremony at the Conservatória/Cartório, then recognition of the marriage in each spouse’s country of citizenship — via the consulate or directly in the home country’s registry. The base state fee for a Portuguese civil marriage is €120. Foreign documents almost always need a Hague apostille, a translation into Portuguese (PT), and a freshness/validity period typically up to 6 months.',
  tags: ['marriage', 'apostille', 'conservatória', 'consulate'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'two-circuits',
      title: 'Logic: one marriage, two registrations',
      content: [
        { kind: 'paragraph', text: 'If you enter into a casamento civil in Portugal, the marriage itself arises under Portuguese law after registration at the Conservatória do Registo Civil or an authorised Cartório. But for your country of citizenship this is usually a “foreign act” that must then be recognised, registered, or at least presented with an apostille and translation.' },
        { kind: 'paragraph', text: 'Therefore, plan the process as two independent projects: 1) the Portuguese procedure for entering into marriage; 2) subsequent use of the Portuguese certidão de casamento in Brazil, the Russian Federation, Ukraine or another country of citizenship.' },
        { kind: 'checklist', items: ['In Portugal the marriage is processed by the Conservatória/IRN or an authorised Cartório Notarial', 'Your country’s consulate does not usually “create” a Portuguese marriage — it registers or accepts an already issued Portuguese record', 'For the Portuguese side, documents on identity, birth and absence of impediments to marry are required', 'For the foreign side, legalisation/apostille and translation are almost always required', 'After the wedding a Portuguese certidão de casamento is needed for the foreign procedure', 'The country of citizenship may require a separate formality: consular registration, transcription, entry into the register, or simple recognition of the document'] }
      ]
    },
    {
      id: 'portugal-procedure',
      title: '1. Carry out the casamento civil in Portugal',
      content: [
        { kind: 'paragraph', text: 'The process starts with the processo preliminar de casamento. It can be opened in any Conservatória do Registo Civil, regardless of where you live in Portugal. Typically one or both prospective spouses submit the application, indicate the property regime, and choose the date/place of the ceremony.' },
        { kind: 'checklist', items: ['Passport or Cartão de Cidadão / residence card', 'NIF — not always legally mandatory for the marriage itself, but often needed for payments and communication', 'Certidão de nascimento: recent, full, with parents’ details', 'Document on marital status or certificado de capacidade matrimonial, if your country of citizenship issues it', 'Documents evidencing divorce/death of a previous spouse, if applicable', 'Hague Apostille on foreign documents if the country is party to the 1961 Hague Convention', 'Translation into Portuguese if the document is not in PT and the Conservatória does not accept it directly', 'Witness details are usually not mandatory for a civil marriage in the Conservatória, but may be required in specific cases or for a ceremony outside the office'] },
        { kind: 'warning', text: 'Do not buy tickets for the wedding date until the Conservatória has accepted the documents with no pendência. The most common delay is not the application form, but a foreign certificate: no apostille, translation not accepted, document older than the allowed period, or the country does not issue a certificado de capacidade matrimonial.' }
      ]
    },
    {
      id: 'foreign-documents',
      title: '2. Prepare foreign documents with no pendência',
      content: [
        { kind: 'paragraph', text: 'The Portuguese registrar checks not only the passport, but also capacity to marry: age, absence of an existing marriage, prohibited degrees of kinship, validity of a divorce. For a foreign national this is evidenced by documents from the country of citizenship.' },
        { kind: 'substeps', items: [
          { id: 'apostille', title: 'Apostille or consular legalisation', content: [
            { kind: 'paragraph', text: 'If the document was issued in a country that is party to the Hague Apostille Convention, an apostille from that country is usually required. Russian, Ukrainian and Brazilian documents for Portugal are, as a rule, apostilled in the country of issue. If the country is not a party to the Convention, consular legalisation is required.' }
          ] },
          { id: 'translation', title: 'Translation into Portuguese', content: [
            { kind: 'paragraph', text: 'The translation must be acceptable to the Portuguese civil registry. In practice, they accept a translation certified by a Portuguese notary, a lawyer/solicitador, the consulate, or made under the rules of the issuing country with subsequent legalisation. A simple PDF from a translator without certification often leads to a pendência.' }
          ] },
          { id: 'freshness', title: 'Freshness/validity period', content: [
            { kind: 'paragraph', text: 'IRN usually expects recent documents on birth and marital capacity; in practice the benchmark is up to 6 months, unless the document itself or issuing authority specifies otherwise. Old Soviet/early-format birth certificates are often requested to be replaced by a current extract.' }
          ] }
        ] },
        { kind: 'checklist', items: ['Check the exact name: Latin script in the passport and Cyrillic/Ukrainian/Portuguese transliteration must be reconcilable', 'Check place of birth and parents’ names — discrepancies raise questions', 'For divorce: not just a stamp, but a document on dissolution of marriage/court judgment with proof of finality', 'For widowhood: death certificate of the previous spouse', 'For a name change: a document linking the old and the new surname', 'Make scans before filing, but have originals at the appointment', 'Do not laminate documents: the apostille and certifications may not be accepted'] }
      ]
    },
    {
      id: 'after-wedding',
      title: '3. After the ceremony: certidão and apostille',
      content: [
        { kind: 'paragraph', text: 'After registration of the marriage in Portugal, obtain the certidão de casamento. For use abroad a paper certidão is usually required, then an apostille at the Procuradoria-Geral da República or an authorised service, then a translation into the language of the country where the document will be presented.' },
        { kind: 'checklist', items: ['Request the certidão de casamento from the Conservatória or via Civil Online if an electronic format is acceptable', 'Check whether a full certidão narrativa is needed or a standard certidão is sufficient', 'Affix an apostille in Portugal if the document will go to a country of the Hague Apostille Convention', 'Do the translation after the apostille if the destination country requires translation and the apostille must also be translated', 'Check whether the consulate accepts an electronic certidão with código de acesso or requires paper', 'Keep several certified copies: one set often goes to the consulate/registry and is not returned'] },
        { kind: 'warning', text: 'A Portuguese certidão without an apostille may work within Portugal, but outside Portugal it is often not accepted. The reverse mistake is also common: people apostille a foreign document in Portugal, whereas the apostille must be placed by the country that issued the document.' }
      ]
    },
    {
      id: 'home-country',
      title: '4. Register or recognise the marriage in your country of citizenship',
      content: [
        { kind: 'paragraph', text: 'After a Portuguese wedding, check the rules for each country of citizenship separately. If the spouses are citizens of different countries, there may be two independent procedures. For example, a Brazilian spouse usually does the registro de casamento at the Consulado do Brasil and then a transcrição at a cartório in Brazil. For the Russian Federation and Ukraine, the approach is often different: the Portuguese marriage is recognised as a foreign act with an apostille and translation, and the consulate may not perform a “second wedding”, but notarial/record actions or provide information on how to use the document.' },
        { kind: 'checklist', items: ['Open the website of your country’s consulate in Portugal and find the casamento / registro civil / estado civil section', 'Check whether an appointment and the personal presence of both spouses are required', 'Clarify whether they will retain the original certidão de casamento or return it after verification', 'Check translation requirements: sworn translator, notarial certification, translation in the destination country or translation in Portugal', 'Clarify whether the surname changes automatically — in many countries a surname change after a foreign marriage is not automatic', 'If you have children, clarify separate consequences: the child’s nationality, parents’ record, autorização de viagem, passport', 'If the marriage is same-sex, check recognition in the country of citizenship in advance: Portugal allows casamento entre pessoas do mesmo sexo, but not all countries will transcribe it'] },
        { kind: 'warning', text: 'Consular registration does not replace the Portuguese processo preliminar de casamento. And conversely: a Portuguese wedding does not guarantee automatic updating of your documents in your country of citizenship, tax authority, bank, immigration database, or land registry.' }
      ]
    },
    {
      id: 'nationality-immigration',
      title: '5. What this means for residence permits and nationality',
      content: [
        { kind: 'paragraph', text: 'Marriage to a Portuguese citizen may be a basis for subsequent naturalisation by marriage, but the casamento itself does not grant a passport and does not create a residence permit automatically. To live in Portugal, the foreign spouse still goes through the AIMA track unless they have another right of stay.' },
        { kind: 'paragraph', text: 'For nationality by marriage, the classic rule in the Lei da Nacionalidade is marriage or união de facto of more than 3 years with a Portuguese citizen, plus a declaration of intent to acquire nationality. **03.05.2026 President Seguro promulgated Decreto AR 48/XVII** (new wording of the Lei da Nacionalidade); as of 13.05.2026 the law has STILL NOT been published in the DRE (10 days since promulgation). After publication in the Diário da República the minimum marriage duration for applying for nationality will increase from 3 to 5 years. The law text contains a transitional provision: pending procedures are governed by the previous wording of Lei 37/81 (3 years). Before applying, check the regime in the DRE.' },
        { kind: 'checklist', items: ['Keep the Portuguese certidão de casamento', 'Keep evidence of joint life: tenancy agreement, bills, IRS, bank documents, children, insurances', 'For AIMA prepare a separate pack for reagrupamento familiar or another type of residence permit', 'For Finanças update marital status if it affects IRS', 'For SNS, the bank, the employer and the insurer, update data only after changing documents or if required', 'Do not confuse casamento with união de facto: they have different evidential requirements and consequences'] }
      ]
    }
  ],
  costs: [
    { label: 'Process and registration of civil marriage', amountEUR: 120, note: 'Base IRN fee for a civil marriage; additional services, a prenuptial agreement, or a ceremony outside the Conservatória are paid separately.' },
    { label: 'Apostille in Portugal', amountEUR: 10.2, note: 'Indicative per Portuguese document; check the current fee with the PGR/issuing service before filing.' },
    { label: 'Marriage certificate', amountEURMin: 10, amountEURMax: 20, note: 'Depends on the format and the request channel; electronic certidão and paper extract may have different prices.' },
    { label: 'Certified translation', amountEURMin: 25, amountEURMax: 60, note: 'Usually per page/document; price depends on the language, urgency and notarial certification.' }
  ],
  sources: [
    { title: 'Portal da Justiça: civil marriage and registry services', url: 'https://justica.gov.pt/Servicos/Iniciar-processo-de-casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN: Civil Registry, marriage and certificates', url: 'https://irn.justica.gov.pt/Servicos/Cidadao/Casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Civil — marriage procedure and foreign documents', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal da Justiça: request a marriage certificate', url: 'https://justica.gov.pt/Servicos/Pedir-certidao-de-casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-13',
  verifyIntervalDays: 90
}
