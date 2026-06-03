export default {
  editorialVoice: 'hackportugal',
  id: 'siba-host-registration',
  categoryId: 'housing_rent',
  title: 'SIBA: mandatory registration of foreign guests within 3 working days',
  tldr: 'SIBA is the online boletins de alojamento system: if you host a foreigner for payment in Portugal — AL, Airbnb, Booking, rooms, guest house, hostel, hotel or even paid rental accommodation — you must report the guest’s details within 3 working days after check-in and after check-out. The obligation comes from Lei 23/2007, arts. 15–16. The fine for missing it is usually €100–500 for an individual and up to €2,000 for a company for each breach.',
  tags: ['siba', 'rent', 'accommodation', 'aima'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-siba',
      title: 'What SIBA is and who must file',
      content: [
        { kind: 'paragraph', text: 'SIBA is the Sistema de Informação de Boletins de Alojamento. It is the electronic submission of a boletim de alojamento: a notification to the state that a foreign national has stayed with you in paid accommodation.' },
        { kind: 'paragraph', text: 'After SEF was closed, functions moved to AIMA and other bodies, but the old portal name siba.ssi.gov.pt still appears in instructions and among hosts. For the user, the practical meaning has not changed: a paid host must submit the foreign guest’s details.' },
        { kind: 'checklist', items: [
          'Must file: hotéis, hostels, guest houses, alojamento local (AL), Airbnb, Booking, Expedia and direct bookings',
          'Must file: owners of rooms and flats, if the accommodation is paid',
          'Must file: property management companies and property managers',
          'Must file for each foreign guest, not only for the lead booker',
          'EU citizens also count as foreigners for this obligation: the criterion is non-Portuguese citizenship',
          'A free visit by friends or relatives to your own flat is usually not a SIBA scenario, because there is no alojamento a título oneroso',
          'Registering a rental contract with Finanças does not replace the boletim de alojamento if you are in fact providing paid accommodation to a foreigner'
        ] }
      ]
    },
    {
      id: 'deadlines',
      title: 'Deadline: 3 working days after check-in and check-out',
      content: [
        { kind: 'paragraph', text: 'Lei 23/2007, art. 16 requires the entrada and saída of a foreign national to be reported through a boletim de alojamento. The practical rule for the host: submit the details in SIBA no later than 3 working days after the check-in date and no later than 3 working days after the check-out date.' },
        { kind: 'checklist', items: [
          'The count runs by working days; Saturday and Sunday usually do not count',
          'Public holidays in Portugal do not count as working days',
          'Under the SIBA rule, the day of check-in (the accommodation date) already counts as the first of the three working days; the deadline after departure is counted the same way',
          'Example: a guest arrives on Wednesday 1 April 2026 — that is a working day and the first day of the period, so the boletim must be filed no later than Friday 3 April 2026',
          'If the booking is extended, check whether the check-out date needs to be updated in SIBA',
          'If the guest left earlier, submit the saída using the actual date',
          'If one guest cancelled the trip and did not stay overnight, no boletim is filed for that person',
          'If 4 foreigners arrived, 4 boletins are needed, even if there is only one booking'
        ] },
        { kind: 'warning', text: 'Do not wait until the end of the month and do not submit data “in batches” retrospectively. The fine is assessed for breach of the notification obligation, and with several guests the amount grows quickly.' }
      ]
    },
    {
      id: 'data-to-collect',
      title: 'What data to collect from the guest',
      content: [
        { kind: 'paragraph', text: 'Collect the data at check-in, before handing over the keys. Normal practice is to verify the passport/ID in person or through a secure pre-check-in if the property is operated remotely.' },
        { kind: 'checklist', items: [
          'Full name as in the passport or national ID',
          'Date of birth',
          'Place of birth, if requested by the form',
          'Citizenship / nationality',
          'Country of permanent residence',
          'Document type: passport, ID card, residence card',
          'Document number',
          'Country of issue of the document',
          'Check-in date',
          'Check-out date',
          'Address of the accommodation property',
          'Booking details or internal reference, if you use a property-management system'
        ] },
        { kind: 'warning', text: 'Store copies of documents carefully. SIBA needs the data, not necessarily indefinite storage of passport scans. If you make copies, limit access, the retention period and explain to the guest the purpose of processing under GDPR.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'How to file the boletim in SIBA',
      content: [
        { kind: 'substeps', items: [
          { id: 'register-host', title: '1. Register the host or property', content: [
            { kind: 'paragraph', text: 'Access to SIBA is needed. It is usually arranged by the owner, management company or property administrator. For AL, prepare the NIF, owner/company details, property address and registo AL number in advance, if applicable.' }
          ] },
          { id: 'create-arrival', title: '2. Enter the entrada after check-in', content: [
            { kind: 'paragraph', text: 'Create a boletim for each foreign guest. Check the spelling of the name, document number and dates: errors in passport details and dates are the most common cause of problems during an inspection.' }
          ] },
          { id: 'create-departure', title: '3. Close the saída after check-out', content: [
            { kind: 'paragraph', text: 'After check-out, submit the saída within 3 working days. If you use a Channel Manager/PMS, do not rely blindly on automation: check that the record really went to SIBA.' }
          ] },
          { id: 'save-proof', title: '4. Save the confirmation', content: [
            { kind: 'paragraph', text: 'Keep the submission number/receipt and the internal booking history. During an inspection, it is useful to show that the data was sent on time.' }
          ] }
        ] }
      ]
    },
    {
      id: 'fines-and-risks',
      title: 'Fines and typical mistakes',
      content: [
        { kind: 'paragraph', text: 'Liability follows from the Lei 23/2007 regime. In practice, a range of €100–500 is often indicated for an individual and up to €2,000 for a legal entity for failure to file or late filing of the boletim. The risk is assessed per guest/episode, so one large booking can become several breaches.' },
        { kind: 'checklist', items: [
          'Mistake: filing only the lead guest, not all foreigners',
          'Mistake: assuming that EU citizens do not need to be filed',
          'Mistake: thinking that Airbnb or Booking send everything themselves',
          'Mistake: not filing the saída after check-out',
          'Mistake: filing by the booking date, not by the actual check-in',
          'Mistake: not checking the automatic PMS integration with SIBA',
          'Mistake: not having proof of submission during an inspection',
          'Mistake: treating long-term paid rental as fully outside the regime without a legal check'
        ] },
        { kind: 'warning', text: 'If you rent out housing not as AL but under a long-term contract to a foreigner, the SIBA obligation is more disputed in everyday practice, but the wording of the law is broader: “todos aqueles que facultem, a título oneroso, alojamento a cidadãos estrangeiros”. For systematic rentals to foreigners, it is better to set up a process or obtain a written position from a lawyer/accountant.' }
      ]
    },
    {
      id: 'practical-setup',
      title: 'Practical setup for a host',
      content: [
        { kind: 'paragraph', text: 'Make SIBA part of check-in/check-out, like cleaning and handing over keys. This is especially important if different people manage the accommodation: the owner, co-host, cleaning team and property manager.' },
        { kind: 'checklist', items: [
          'Add a SIBA point to the pre-check-in message template',
          'Collect the details of all guests before arrival, but verify them at check-in',
          'Assign one person responsible for submitting the entrada',
          'Assign one person responsible for the saída',
          'Put a reminder in the calendar for the 2nd working day after check-in and check-out',
          'Once a month, export the booking list and reconcile it with SIBA',
          'For a PMS/Channel Manager, enable the integration error log',
          'Store submission confirmations together with the booking reference',
          'For team work, use separate access accounts, not a shared password in a messenger'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Fine for non-filing/late filing for an individual', amountEURMin: 100, amountEURMax: 500, note: 'Usually indicated for breach of the boletim de alojamento obligation; the actual classification depends on the authority and the circumstances.' },
    { label: 'Fine for a legal entity', amountEURMin: 400, amountEURMax: 2000, note: 'Practical upper range, often cited for companies/accommodation operators.' },
    { label: 'Filing a boletim in SIBA', amountEUR: 0, note: 'No state fee is charged for the electronic submission itself; PMS/Channel Manager tools or property manager services may be paid.' }
  ],
  sources: [
    { title: 'Lei 23/2007 — regime for entry, stay and departure of foreigners, arts. 15–16 and sanctions', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-67564445', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SIBA — boletins de alojamento portal', url: 'https://siba.ssi.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'GuestReady: SIBA guest registration in Portugal', url: 'https://www.guestready.com/blog/siba-guest-registration-sef-aima-portugal/', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
