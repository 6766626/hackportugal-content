export default {
  editorialVoice: 'hackportugal',
  id: 'casamento-dois-paises-internacional',
  categoryId: 'nationality',
  title: 'Marriage to a foreigner with different nationalities: dual formalisation',
  tldr: 'An international marriage in Portugal is usually handled in 2 tracks: first the processo preliminar de casamento and the civil ceremony at the Conservatória/Cartório, then recognition of the marriage in each spouse’s country of nationality — through the consulate or directly in that country’s register. The basic state fee for a Portuguese civil marriage is €120. Foreign documents almost always need a Hague apostille, a PT translation and a freshness period usually of up to 6 months.',
  tags: ['marriage', 'apostille', 'conservatória', 'consulate'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'two-circuits',
      title: 'The logic: one marriage, two formalities',
      content: [
        { kind: 'paragraph', text: 'If you enter into casamento civil in Portugal, the marriage itself comes into existence under Portuguese law after registration at the Conservatória do Registo Civil or an authorised Cartório. But for your country of nationality, this is usually a “foreign act” that must then be recognised, registered or at least presented with an apostille and translation.' },
        { kind: 'paragraph', text: 'You should therefore plan the process as 2 independent projects: 1) the Portuguese procedure for entering into marriage; 2) the subsequent use of the Portuguese certidão de casamento in Brazil, Russia, Ukraine or another country of nationality.' },
        { kind: 'checklist', items: ['In Portugal, the marriage is formalised by the Conservatória/IRN or a Cartório Notarial with the relevant powers', 'The consulate of your country usually does not “create” a Portuguese marriage — it registers or accepts an already completed Portuguese act', 'For the Portuguese side, documents proving identity, birth and absence of impediments to marriage are required', 'For the foreign side, legalisation/apostille and translation are almost always required', 'After the wedding, a certidão de casamento português is needed for the foreign procedure', 'The country of nationality may require a separate formality: consular registration, transcription, entry in a register or simply recognition of the document'] }
      ]
    },
    {
      id: 'portugal-procedure',
      title: '1. Formalise the casamento civil in Portugal',
      content: [
        { kind: 'paragraph', text: 'The process starts with the processo preliminar de casamento. It can be opened at any Conservatória do Registo Civil, regardless of where you live in Portugal. Usually one or both future spouses submit the application, indicate the property regime and choose the date/place of the ceremony.' },
        { kind: 'checklist', items: ['Passport or Cartão de Cidadão / cartão de residência', 'NIF — not always legally mandatory for the marriage itself, but often needed for payments and communication', 'Certidão de nascimento: recent, complete, with parents’ details', 'Document proving marital status or certificado de capacidade matrimonial, if the country of nationality issues one', 'Divorce/death documents for a previous spouse, if applicable', 'Hague apostille on foreign documents, if the country is a party to the 1961 Hague Convention', 'Translation into Portuguese, if the document is not in PT and the Conservatória does not accept it directly', 'Witness details are usually not mandatory for a civil marriage at the Conservatória, but may be needed in specific cases or for a ceremony outside the office'] },
        { kind: 'warning', text: 'Do not buy tickets for the wedding date until the Conservatória has accepted the documents without pendência. The most common delay is not the application form, but a foreign certificate: no apostille, the translation is not accepted, the document is older than the permitted period or the country does not issue a certificado de capacidade matrimonial.' }
      ]
    },
    {
      id: 'foreign-documents',
      title: '2. Prepare foreign documents without pendência',
      content: [
        { kind: 'paragraph', text: 'The Portuguese registrar checks not only the passport, but also capacity to marry: age, absence of an existing marriage, absence of prohibited kinship, validity of a divorce. For a foreign national, this is confirmed by documents from the country of nationality.' },
        { kind: 'substeps', items: [
          { id: 'apostille', title: 'Apostille or consular legalisation', content: [
            { kind: 'paragraph', text: 'If the document was issued in a country that is a party to the Hague Apostille Convention, an apostille from that country is usually required. Russian, Ukrainian and Brazilian documents for Portugal are generally apostilled in the country of issue. If the country is not a party to the convention, consular legalisation is required.' }
          ] },
          { id: 'translation', title: 'Translation into Portuguese', content: [
            { kind: 'paragraph', text: 'The translation must be suitable for Portuguese civil registry.\n\nIn practice, translations certified by a Portuguese notary, lawyer/solicitador, consulate, or carried out under the rules of the issuing country with subsequent legalisation are accepted. A simple PDF from a translator without certification often results in pendência.' }
          ] },
          { id: 'freshness', title: 'Freshness period', content: [
            { kind: 'paragraph', text: 'IRN usually expects recent documents on birth and matrimonial capacity; in practice, the guide is up to 6 months, unless the document itself or the issuing authority indicates another period. Old Soviet/early-format birth certificates are often requested to be replaced with a current extract.' }
          ] }
        ] },
        { kind: 'checklist', items: ['Check the exact name: Latin spelling in the passport, Cyrillic/Ukrainian/Portuguese transliteration must be explainable', 'Check place of birth and parents’ names — discrepancies raise questions', 'For divorce: not just a stamp is needed, but a document confirming dissolution of marriage/court decision that has become final', 'For widowhood: death certificate of the previous spouse', 'For change of surname: a document linking the old and new surname', 'Make scans before submission, but have the originals at the appointment', 'Do not laminate documents: the apostille and certifications may not be accepted'] }
      ]
    },
    {
      id: 'after-wedding',
      title: '3. After the ceremony: certidão and apostille',
      content: [
        { kind: 'paragraph', text: 'After registration of the marriage in Portugal, obtain the certidão de casamento. For use abroad, a paper certidão is usually needed, then an apostille at the Procuradoria-Geral da República or authorised service, then a translation into the language of the country where the document will be presented.' },
        { kind: 'checklist', items: ['Request the certidão de casamento at the Conservatória or through Civil Online, if an electronic format is suitable', 'Check whether a full certidão narrativa is needed or whether an ordinary certidão is sufficient', 'Obtain an apostille in Portugal if the document will go to a country in the Hague Apostille Convention', 'Arrange the translation after the apostille, if the destination country requires a translation and the apostille must also be translated', 'Check whether the consulate accepts an electronic certidão with código de acesso or requires paper', 'Keep several certified copies: one set is often taken by the consulate/register and not returned'] },
        { kind: 'warning', text: 'A Portuguese certidão without an apostille may work within Portugal, but outside Portugal it is often not accepted. The opposite mistake is also common: people apostille a foreign document in Portugal, even though the apostille is issued by the country that issued the document.' }
      ]
    },
    {
      id: 'home-country',
      title: '4. Register or recognise the marriage in the country of nationality',
      content: [
        { kind: 'paragraph', text: 'After the Portuguese wedding, check the rules of each country of nationality separately. If the spouses are nationals of different countries, there may be two independent procedures.\n\nFor example, a Brazilian spouse usually does the registro de casamento at the Consulado do Brasil and then the transcrição at a cartório in Brazil. For Russia and Ukraine, the approach is often different: the Portuguese marriage is recognised as a foreign act if there is an apostille and translation, and the consulate may perform not a “repeat wedding”, but notarial/registration actions or provide information on how to use the document.' },
        { kind: 'checklist', items: ['Open the website of your country’s consulate in Portugal and find the casamento / registro civil / estado civil section', 'Check whether an appointment is required and whether both spouses must attend in person', 'Clarify whether they keep the original certidão de casamento or return it after checking', 'Check translation requirements: sworn translator, notarisation, translation in the destination country or translation in Portugal', 'Clarify whether the surname changes automatically — in many countries a surname change after a foreign marriage is not automatic', 'If there are children, clarify separate consequences: the child’s nationality, registration of parents, autorização de viagem, passport', 'If the marriage is same-sex, check recognition in the country of nationality in advance: Portugal allows casamento entre pessoas do mesmo sexo, but not all countries transcribe it'] },
        { kind: 'warning', text: 'Consular registration does not replace the Portuguese processo preliminar de casamento. And vice versa: a Portuguese wedding does not guarantee automatic updating of your documents in your country of nationality, tax office, bank, immigration database or property register.' }
      ]
    },
    {
      id: 'nationality-immigration',
      title: '5. What this gives for residence permit and nationality',
      content: [
        { kind: 'paragraph', text: 'Marriage to a Portuguese national may be a basis for later naturalisation through marriage, but the casamento itself does not issue a passport and does not create an automatic residence permit. To live in Portugal, the foreign spouse still goes through the AIMA immigration track, unless they have another right to stay.' },
        { kind: 'paragraph', text: 'For nationality through marriage, the basic rule in the Lei da Nacionalidade is marriage or união de facto for more than 3 years with a Portuguese national and a declaration of the wish to acquire nationality.\n\n03.05.2026 President Seguro promulgated Decreto AR 48/XVII; it was published on 18.05.2026 as Lei Orgânica n.º 1/2026 (amending Lei 37/81) and entered into force on 19.05.2026. Important: the minimum marriage period to apply remains 3 years — it did NOT increase to 5 years. The real change is elsewhere: a stricter opposition regime (oposição) to acquiring nationality. Under the revised Article 9, the State cannot oppose (the marriage is presumed sufficient) only when the marriage or união de facto has lasted more than 6 years or when the couple has common children with Portuguese nationality; otherwise the applicant must prove an effective connection to the Portuguese community. This is a new and contested rule — before applying, check the current version of the law and AIMA/IRN practice, or consult a lawyer.' },
        { kind: 'checklist', items: ['Keep the certidão de casamento portuguesa', 'Keep evidence of living together: tenancy agreement, bills, IRS, bank documents, children, insurance policies', 'For AIMA, prepare a separate package for Reagrupamento Familiar or another type of residence permit', 'For Finanças, update marital status if this affects IRS', 'For SNS, bank, employer and insurer, update details only after changing documents or if required', 'Do not confuse casamento with união de facto: they are different regimes of evidence and consequences'] }
      ]
    }
  ],
  costs: [
    { label: 'Processo e registo de casamento civil', amountEUR: 120, note: 'Basic IRN fee for a civil marriage; additional services, a prenuptial agreement or a ceremony outside the Conservatória are paid separately.' },
    { label: 'Apostille in Portugal', amountEUR: 10.2, note: 'Indicative cost for one Portuguese document; check the current fee with the PGR/serviço emissor before submission.' },
    { label: 'Certidão de casamento', amountEURMin: 10, amountEURMax: 20, note: 'Depends on the format and request channel; an electronic certidão and a paper extract may have different prices.' },
    { label: 'Certified translation', amountEURMin: 25, amountEURMax: 60, note: 'Usually per page/document; the price depends on the language, urgency and notarisation.' }
  ],
  sources: [
    { title: 'Portal da Justiça: civil marriage and registration services', url: 'https://justica.gov.pt/Servicos/Iniciar-processo-de-casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN: Registo Civil, marriage and certidões', url: 'https://irn.justica.gov.pt/Servicos/Cidadao/Casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Civil — marriage procedure and foreign documents', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal da Justiça: request a certidão de casamento', url: 'https://justica.gov.pt/Servicos/Pedir-certidao-de-casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
