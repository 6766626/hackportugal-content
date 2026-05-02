export default {
  editorialVoice: 'hackportugal',
  id: 'casamento-dois-paises-internacional',
  categoryId: 'nationality',
  title: 'Marriage to a foreigner with different nationalities: dual formalisation',
  tldr: 'An international marriage in Portugal is usually handled in 2 tracks: first the processo preliminar de casamento and civil ceremony at a Conservatória/Cartório, then recognition of the marriage in each spouse’s country of nationality — through the consulate or directly in that country’s register. The basic state fee for a Portuguese civil marriage is €120. Foreign documents almost always need a Hague apostille, a PT translation and a freshness period usually of up to 6 months.',
  tags: ['marriage', 'apostille', 'conservatória', 'consulate'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'two-circuits',
      title: 'The logic: one marriage, two formalities',
      content: [
        { kind: 'paragraph', text: 'If you enter into a casamento civil in Portugal, the marriage itself comes into existence under Portuguese law after registration at a Conservatória do Registo Civil or an authorised Cartório. But for your country of nationality this is usually a “foreign act”, which must then be recognised, registered or at least presented with an apostille and translation.' },
        { kind: 'paragraph', text: 'So plan the process as 2 independent projects: 1) the Portuguese marriage procedure; 2) subsequent use of the Portuguese certidão de casamento in Brazil, Russia, Ukraine or another country of nationality.' },
        { kind: 'checklist', items: ['In Portugal, the marriage is handled by a Conservatória/IRN or a Cartório Notarial with the relevant powers', 'Your country’s consulate usually does not “create” a Portuguese marriage — it registers or accepts an already completed Portuguese act', 'For the Portuguese side, documents on identity, birth and absence of impediments to marriage are needed', 'For the foreign side, legalisation/apostille and translation are almost always needed', 'After the wedding, a certidão de casamento português is needed for the foreign procedure', 'The country of nationality may require a separate format: consular registration, transcription, entry in a register or simply recognition of the document'] }
      ]
    },
    {
      id: 'portugal-procedure',
      title: '1. Formalise the casamento civil in Portugal',
      content: [
        { kind: 'paragraph', text: 'The process starts with the processo preliminar de casamento. It can be opened at any Conservatória do Registo Civil, regardless of your place of residence in Portugal. Usually one or both future spouses submit the application, state the property regime and choose the date/place of the ceremony.' },
        { kind: 'checklist', items: ['Passport or Cartão de Cidadão / cartão de residência', 'NIF — not always legally required for the marriage itself, but often needed for payments and communication', 'Certidão de nascimento: recent, full, with parents’ details', 'Document on marital status or certificado de capacidade matrimonial, if the country of nationality issues it', 'Divorce/death documents for a previous spouse, if applicable', 'Hague apostille on foreign documents, if the country participates in the 1961 Hague Convention', 'Translation into Portuguese, if the document is not in PT and the Conservatória does not accept it directly', 'Witness details are usually not mandatory for a civil marriage at a Conservatória, but may be needed in specific cases or for a ceremony outside the office'] },
        { kind: 'warning', text: 'Do not buy tickets for the wedding date until the Conservatória has accepted the documents without pendência. The most common delay is not the application form, but a foreign certificate: no apostille, translation not accepted, document older than the permitted period, or the country does not issue a certificado de capacidade matrimonial.' }
      ]
    },
    {
      id: 'foreign-documents',
      title: '2. Prepare foreign documents without pendência',
      content: [
        { kind: 'paragraph', text: 'The Portuguese registrar checks not only the passport, but also capacity to marry: age, absence of an existing marriage, absence of prohibited kinship, validity of divorce. For a foreigner, this is confirmed by documents from the country of nationality.' },
        { kind: 'substeps', items: [
          { id: 'apostille', title: 'Apostille or consular legalisation', content: [
            { kind: 'paragraph', text: 'If the document was issued in a country that is a party to the Hague Apostille Convention, an apostille from that country is usually required. Russian, Ukrainian and Brazilian documents for Portugal are, as a rule, apostilled in the country of issue. If the country is not a party to the convention, consular legalisation is required.' }
          ] },
          { id: 'translation', title: 'Translation into Portuguese', content: [
            { kind: 'paragraph', text: 'The translation must be suitable for the Portuguese civil registry. In practice, translations certified by a Portuguese notary, lawyer/solicitador, consulate, or completed under the rules of the issuing country with subsequent legalisation are accepted. A simple PDF from a translator without certification often leads to pendência.' }
          ] },
          { id: 'freshness', title: 'Freshness period', content: [
            { kind: 'paragraph', text: 'IRN usually expects recent documents on birth and marital capacity; in practice, the guide is up to 6 months, unless the document itself or the issuing authority states another period. Old Soviet/early-format birth certificates are often required to be replaced with an up-to-date extract.' }
          ] }
        ] },
        { kind: 'checklist', items: ['Check the exact name: Latin script in the passport, Cyrillic/Ukrainian/Portuguese transliteration must be explainable', 'Check place of birth and parents’ names — discrepancies raise questions', 'For divorce: not just a stamp is needed, but a document on dissolution of marriage/court decision that has entered into force', 'For widowhood: death certificate of the previous spouse', 'For a change of surname: a document linking the old and new surname', 'Make scans before submission, but have originals at the appointment', 'Do not laminate documents: the apostille and certifications may not be accepted'] }
      ]
    },
    {
      id: 'after-wedding',
      title: '3. After the ceremony: certidão and apostille',
      content: [
        { kind: 'paragraph', text: 'After registering the marriage in Portugal, obtain a certidão de casamento. For use abroad, a paper certidão is usually needed, then an apostille from the Procuradoria-Geral da República or authorised service, then a translation into the language of the country where the document will be presented.' },
        { kind: 'checklist', items: ['Request the certidão de casamento at the Conservatória or through Civil Online, if the electronic format is suitable', 'Check whether a full certidão narrativa is needed or whether an ordinary certidão is enough', 'Place an apostille in Portugal if the document will go to a country under the Hague Apostille Convention', 'Translate after the apostille if the destination country requires a translation and the apostille must also be translated', 'Check whether the consulate accepts an electronic certidão with código de acesso or requires paper', 'Keep several certified copies: one set often goes to the consulate/register without being returned'] },
        { kind: 'warning', text: 'A Portuguese certidão without an apostille may work inside Portugal, but outside Portugal it is often not accepted. The reverse mistake is also common: people apostille a foreign document in Portugal, although the apostille is placed by the country that issued the document.' }
      ]
    },
    {
      id: 'home-country',
      title: '4. Register or recognise the marriage in the country of nationality',
      content: [
        { kind: 'paragraph', text: 'After the Portuguese wedding, check the rules of each country of nationality separately. If the spouses are citizens of different countries, there may be two independent procedures. For example, a Brazilian spouse usually does the registro de casamento at the Consulado do Brasil and then the transcrição at a cartório in Brazil. For Russia and Ukraine, the approach is often different: the Portuguese marriage is recognised as a foreign act if there is an apostille and translation, while the consulate may perform not a “second wedding”, but notarial/record-keeping actions or provide information on how to use the document.' },
        { kind: 'checklist', items: ['Open your country’s consulate website in Portugal and find the casamento / registro civil / estado civil section', 'Check whether an appointment and the personal presence of both spouses are required', 'Clarify whether they keep the original certidão de casamento or return it after checking', 'Check translation requirements: sworn translator, notarial certification, translation in the destination country or translation in Portugal', 'Clarify whether the surname changes automatically — in many countries, a surname change after a foreign marriage is not automatic', 'If there are children, clarify separate consequences: child’s nationality, recording of parents, autorização de viagem, passport', 'If the marriage is same-sex, check recognition in the country of nationality in advance: Portugal allows casamento entre pessoas do mesmo sexo, but not all countries transcribe it'] },
        { kind: 'warning', text: 'Consular registration does not replace the Portuguese processo preliminar de casamento. And vice versa: a Portuguese wedding does not guarantee automatic updating of your documents in the country of nationality, tax authority, bank, immigration database or property register.' }
      ]
    },
    {
      id: 'nationality-immigration',
      title: '5. What this gives for a residence permit and nationality',
      content: [
        { kind: 'paragraph', text: 'Marriage to a Portuguese citizen may be a basis for subsequent naturalisation by marriage, but the casamento itself does not issue a passport and does not create an automatic residence permit. To live in Portugal, the foreign spouse still goes through the AIMA immigration track if they have no other right of stay.' },
        { kind: 'paragraph', text: 'For nationality by marriage, the classic rule in the Lei da Nacionalidade is marriage or união de facto of more than 3 years with a Portuguese citizen and a declaration of the wish to acquire nationality. As of April 2026, it is important to monitor the reform: the new version of the nationality law was approved on 01.04.2026, but has not yet been promulgated; apply the current rules only after checking publication in the Diário da República.' },
        { kind: 'checklist', items: ['Keep the certidão de casamento portuguesa', 'Keep evidence of life together: rental contract, bills, IRS, bank documents, children, insurance', 'For AIMA, prepare a separate package for Reagrupamento Familiar or another type of residence permit', 'For Finanças, update marital status if this affects IRS', 'For SNS, bank, employer and insurer, update data only after changing documents or if required', 'Do not confuse casamento with união de facto: these are different regimes of evidence and consequences'] }
      ]
    }
  ],
  costs: [
    { label: 'Processo e registo de casamento civil', amountEUR: 120, note: 'Basic IRN fee for a civil marriage; additional services, a prenuptial agreement or a ceremony outside the Conservatória are paid separately.' },
    { label: 'Apostille in Portugal', amountEUR: 10.2, note: 'Guide price for one Portuguese document; check the current fee with the PGR/serviço emissor before submission.' },
    { label: 'Certidão de casamento', amountEURMin: 10, amountEURMax: 20, note: 'Depends on the format and request channel; an electronic certidão and a paper extract may cost different amounts.' },
    { label: 'Certified translation', amountEURMin: 25, amountEURMax: 60, note: 'Usually per page/document; the price depends on the language, urgency and notarial certification.' }
  ],
  sources: [
    { title: 'Portal da Justiça: casamento civil and registration services', url: 'https://justica.gov.pt/Servicos/Iniciar-processo-de-casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN: Registo Civil, casamento and certidões', url: 'https://irn.justica.gov.pt/Servicos/Cidadao/Casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Civil — marriage procedure and foreign documents', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal da Justiça: pedido de certidão de casamento', url: 'https://justica.gov.pt/Servicos/Pedir-certidao-de-casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
