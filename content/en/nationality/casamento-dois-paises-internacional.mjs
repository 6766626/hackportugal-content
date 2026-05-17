export default {
  editorialVoice: 'hackportugal',
  id: 'casamento-dois-paises-internacional',
  categoryId: 'nationality',
  title: 'Marriage to a foreigner of different nationalities: dual formalisation',
  tldr: 'An international marriage in Portugal is usually handled in 2 circuits: first the processo preliminar de casamento and civil ceremony at a Conservatória/Cartório, then recognition of the marriage in each spouse’s country of nationality — through the consulate or directly in that country’s register. The basic state fee for a Portuguese civil marriage is €120. Foreign documents almost always need a Hague apostille, translation into PT and freshness usually within 6 months.',
  tags: ['marriage', 'apostille', 'conservatória', 'consulate'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'two-circuits',
      title: 'The logic: one marriage, two formalities',
      content: [
        { kind: 'paragraph', text: 'If you enter into a casamento civil in Portugal, the marriage itself is created under Portuguese law after registration at the Conservatória do Registo Civil or an authorised Cartório. But for your country of nationality it is usually a “foreign act”, which then has to be recognised, registered or at least presented with an apostille and translation.' },
        { kind: 'paragraph', text: 'Therefore plan the process as 2 independent projects: 1) the Portuguese procedure for entering into the marriage; 2) the subsequent use of the Portuguese certidão de casamento in Brazil, Russia, Ukraine or another country of nationality.' },
        { kind: 'checklist', items: ['In Portugal, the marriage is formalised by the Conservatória/IRN or a Cartório Notarial with the relevant powers', 'Your country’s consulate usually does not “create” the Portuguese marriage — it registers or accepts the already completed Portuguese act', 'For the Portuguese side, identity, birth and absence-of-impediment documents are needed', 'For the foreign side, legalisation/apostille and translation are almost always needed', 'After the wedding, a certidão de casamento português is needed for the foreign procedure', 'The country of nationality may require a separate format: consular registration, transcription, entry in the register or simply recognition of the document'] }
      ]
    },
    {
      id: 'portugal-procedure',
      title: '1. Formalise the casamento civil in Portugal',
      content: [
        { kind: 'paragraph', text: 'The process starts with the processo preliminar de casamento. It can be opened at any Conservatória do Registo Civil, regardless of where you live in Portugal. Usually one or both future spouses submit the application, indicate the property regime and choose the date/place of the ceremony.' },
        { kind: 'checklist', items: ['Passport or Cartão de Cidadão / cartão de residência', 'NIF — not always legally required for the marriage itself, but often needed for payments and communication', 'Certidão de nascimento: recent, full, with parents’ details', 'Document on marital status or certificado de capacidade matrimonial, if the country of nationality issues it', 'Divorce/death documents for a previous spouse, if applicable', 'Hague apostille on foreign documents, if the country participates in the 1961 Hague Convention', 'Translation into Portuguese, if the document is not in PT and the Conservatória does not accept it directly', 'Witness details are usually not mandatory for a civil marriage at the Conservatória, but may be needed in specific cases or for a ceremony outside the office'] },
        { kind: 'warning', text: 'Do not buy tickets around the wedding date until the Conservatória has accepted the documents without pendência. The most common delay is not the application form, but the foreign certificate: no apostille, the translation is not accepted, the document is older than the permitted period or the country does not issue a certificado de capacidade matrimonial.' }
      ]
    },
    {
      id: 'foreign-documents',
      title: '2. Prepare foreign documents without pendência',
      content: [
        { kind: 'paragraph', text: 'The Portuguese registrar checks not only the passport, but also the capacity to marry: age, absence of an existing marriage, absence of prohibited kinship, validity of divorce. For a foreigner, this is confirmed by documents from the country of nationality.' },
        { kind: 'substeps', items: [
          { id: 'apostille', title: 'Apostille or consular legalisation', content: [
            { kind: 'paragraph', text: 'If the document was issued in a country that is party to the Hague Apostille Convention, an apostille from that country is usually needed. Russian, Ukrainian and Brazilian documents for Portugal are generally apostilled in the country of issue. If the country is not a party to the convention, consular legalisation is needed.' }
          ] },
          { id: 'translation', title: 'Translation into Portuguese', content: [
            { kind: 'paragraph', text: 'The translation must be suitable for the Portuguese civil registry. In practice, translations certified by a Portuguese notary, lawyer/solicitador, consulate, or completed under the rules of the issuing country with subsequent legalisation are accepted. A simple PDF from a translator without certification often leads to a pendência.' }
          ] },
          { id: 'freshness', title: 'Freshness period', content: [
            { kind: 'paragraph', text: 'IRN usually expects recent birth and marriage-capacity documents; in practice, the benchmark is up to 6 months, unless the document itself or the issuing authority states another period. Old Soviet/early-format birth certificates are often requested to be replaced with an up-to-date extract.' }
          ] }
        ] },
        { kind: 'checklist', items: ['Check the exact name: Latin script in the passport and Cyrillic/Ukrainian/Portuguese transliteration must be explainable', 'Check place of birth and parents’ names — discrepancies raise questions', 'For divorce: not just a stamp is needed, but a document on dissolution of marriage/court decision that has entered into force', 'For widowhood: death certificate of the previous spouse', 'For a change of surname: a document linking the old and new surname', 'Make scans before submission, but have the originals at the appointment', 'Do not laminate documents: apostilles and certifications may not be accepted'] }
      ]
    },
    {
      id: 'after-wedding',
      title: '3. After the ceremony: certidão and apostille',
      content: [
        { kind: 'paragraph', text: 'After the marriage is registered in Portugal, obtain a certidão de casamento. For use abroad, a paper certidão is usually needed, then an apostille from the Procuradoria-Geral da República or authorised service, then translation into the language of the country where the document will be presented.' },
        { kind: 'checklist', items: ['Request a certidão de casamento at the Conservatória or through Civil Online, if the electronic format is suitable', 'Check whether a full certidão narrativa is needed or whether an ordinary certidão is sufficient', 'Place the apostille in Portugal if the document will go to a Hague Apostille Convention country', 'Have the translation done after the apostille, if the destination country requires a translation and the apostille must also be translated', 'Check whether the consulate accepts an electronic certidão with a código de acesso or requires paper', 'Keep several certified copies: one set often goes to the consulate/register without being returned'] },
        { kind: 'warning', text: 'A Portuguese certidão without an apostille may work within Portugal, but outside Portugal it is often not accepted. The reverse mistake is also common: people apostille a foreign document in Portugal, even though the apostille is issued by the country that issued the document.' }
      ]
    },
    {
      id: 'home-country',
      title: '4. Register or recognise the marriage in the country of nationality',
      content: [
        { kind: 'paragraph', text: 'After the Portuguese wedding, check the rules of each country of nationality separately. If the spouses are citizens of different countries, there may be two independent procedures. For example, a Brazilian spouse usually completes registro de casamento at the Consulado do Brasil and then transcrição at a cartório in Brazil. For Russia and Ukraine the approach is often different: the Portuguese marriage is recognised as a foreign act if there is an apostille and translation, while the consulate may perform not a “second wedding”, but notarial/record-related acts or provide information on using the document.' },
        { kind: 'checklist', items: ['Open your country’s consulate website in Portugal and find the casamento / registro civil / estado civil section', 'Check whether an appointment is needed and whether both spouses must attend in person', 'Clarify whether they keep the original certidão de casamento or return it after checking', 'Check translation requirements: sworn translator, notarial certification, translation in the destination country or translation in Portugal', 'Clarify whether the surname changes automatically — in many countries, a surname change after a foreign marriage is not automatic', 'If there are children, clarify separate consequences: child’s nationality, parents’ record, autorização de viagem, passport', 'If the marriage is same-sex, check recognition in the country of nationality in advance: Portugal allows casamento entre pessoas do mesmo sexo, but not all countries transcribe it'] },
        { kind: 'warning', text: 'Consular registration does not replace the Portuguese processo preliminar de casamento. And vice versa: a Portuguese wedding does not guarantee automatic updating of your documents in the country of nationality, tax authority, bank, migration database or property register.' }
      ]
    },
    {
      id: 'nationality-immigration',
      title: '5. What this gives for residence permit and citizenship',
      content: [
        { kind: 'paragraph', text: 'Marriage to a Portuguese citizen may be a basis for later naturalisation by marriage, but casamento itself does not issue a passport and does not create an automatic residence permit. To live in Portugal, the foreign spouse still goes through the AIMA immigration circuit if they have no other right to stay.' },
        { kind: 'paragraph', text: 'For citizenship by marriage, the classic rule in the Lei da Nacionalidade is marriage or união de facto for more than 3 years with a Portuguese citizen and a declaration of the wish to acquire citizenship. **On 03/05/2026 President Seguro promulgated Decreto AR 48/XVII** (new wording of the Lei da Nacionalidade); as of 13/05/2026 the law has STILL NOT been published in the DRE (10 days from promulgation). After publication in the Diário da República, the minimum marriage period for applying for citizenship will increase from 3 to 5 years. The text of the law contains a transitional provision: cases in progress are subject to the previous wording of Lei 37/81 (3 years). Before applying, check the regime in the DRE.' },
        { kind: 'checklist', items: ['Keep the certidão de casamento portuguesa', 'Keep evidence of living together: tenancy agreement, bills, IRS, bank documents, children, insurance', 'For AIMA, prepare a separate file for Reagrupamento Familiar or another type of residence permit', 'For Finanças, update marital status if it affects IRS', 'For SNS, bank, employer and insurer, update details only after changing documents or if required', 'Do not confuse casamento with união de facto: these are different regimes of evidence and consequences'] }
      ]
    }
  ],
  costs: [
    { label: 'Processo e registo de casamento civil', amountEUR: 120, note: 'Basic IRN fee for a civil marriage; additional services, a prenuptial agreement or a ceremony outside the Conservatória are paid separately.' },
    { label: 'Apostille in Portugal', amountEUR: 10.2, note: 'Indicative amount for one Portuguese document; check the current fee with the PGR/serviço emissor before submission.' },
    { label: 'Certidão de casamento', amountEURMin: 10, amountEURMax: 20, note: 'Depends on the format and request channel; an electronic certidão and a paper extract may cost different amounts.' },
    { label: 'Certified translation', amountEURMin: 25, amountEURMax: 60, note: 'Usually per page/document; the price depends on the language, urgency and notarial certification.' }
  ],
  sources: [
    { title: 'Portal da Justiça: civil marriage and registration services', url: 'https://justica.gov.pt/Servicos/Iniciar-processo-de-casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN: Registo Civil, marriage and certidões', url: 'https://irn.justica.gov.pt/Servicos/Cidadao/Casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Civil — marriage procedure and foreign documents', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1995-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal da Justiça: request a certidão de casamento', url: 'https://justica.gov.pt/Servicos/Pedir-certidao-de-casamento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
