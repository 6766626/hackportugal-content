export default {
  editorialVoice: 'hackportugal',
  id: 'siba-host-registration',
  categoryId: 'housing_rent',
  title: 'SIBA: mandatory registration of foreign guests within 3 working days',
  tldr: 'SIBA is the online boletins de alojamento system: if you accommodate a foreigner in Portugal for payment — AL, Airbnb, Booking, rooms, guest house, hostel, hotel or even paid housing rental — you must report the guest’s details within 3 working days after arrival and after departure. The obligation comes from Lei 23/2007, arts. 15–16. The fine for missing it is usually €100–€500 for an individual and up to €2,000 for a company for each breach.',
  tags: ['siba', 'rent', 'accommodation', 'aima'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-siba',
      title: 'What SIBA is and who must file',
      content: [
        { kind: 'paragraph', text: 'SIBA is the Sistema de Informação de Boletins de Alojamento. It is the electronic filing of a boletim de alojamento: a notification to the state that a foreign citizen has stayed with you in paid accommodation.' },
        { kind: 'paragraph', text: 'After SEF was closed, functions passed to AIMA and other bodies, but the old portal name siba.sef.pt still appears in instructions and among hosts. For the user, the meaning has not changed: a paid host must submit the foreign guest’s details.' },
        { kind: 'checklist', items: [
          'Required to file: hotéis, hostels, guest houses, alojamento local (AL), Airbnb, Booking, Expedia and direct bookings',
          'Required to file: owners of rooms and flats, if the accommodation is paid',
          'Required to file: property management companies and property managers',
          'Required to file for each foreign guest, not only the lead booker',
          'EU citizens also count as foreigners for this obligation: the criterion is not having Portuguese citizenship',
          'A free visit by friends or relatives to your own flat is usually not a SIBA scenario, because there is no alojamento a título oneroso',
          'Registration of a rental contract with Finanças does not replace the boletim de alojamento if you are in fact providing paid accommodation to a foreigner'
        ] }
      ]
    },
    {
      id: 'deadlines',
      title: 'Deadline: 3 working days after arrival and departure',
      content: [
        { kind: 'paragraph', text: 'Lei 23/2007, art. 16 requires the entrada and saída of a foreign citizen to be reported through a boletim de alojamento. The practical rule for a host: submit the data in SIBA no later than 3 working days after the arrival date and no later than 3 working days after the departure date.' },
        { kind: 'checklist', items: [
          'Arrival on Friday: the count runs by working days; Saturday and Sunday usually do not count',
          'Public holidays in Portugal do not count as working days',
          'If the guest arrived on 1 April 2026 and it is a working day, the safe deadline is by the end of 6 April 2026, if there is no public holiday/weekend in between',
          'If the booking is extended, check whether the departure date needs to be updated in SIBA',
          'If the guest left earlier, submit the saída using the actual date',
          'If one guest cancelled the trip and did not stay overnight, no boletim is filed for them',
          'If 4 foreigners arrived, 4 boletins are needed, even if there is one booking'
        ] },
        { kind: 'warning', text: 'Do not wait until the end of the month and do not submit data “in batches” retrospectively. The fine is assessed for breach of the notification obligation, and with several guests the amount grows quickly.' }
      ]
    },
    {
      id: 'data-to-collect',
      title: 'What data to take from the guest',
      content: [
        { kind: 'paragraph', text: 'Collect the data at check-in, before handing over the keys. Normal practice is to check the passport/ID in person or through a secure pre-check-in process if the property operates remotely.' },
        { kind: 'checklist', items: [
          'Full name as in the passport or national ID',
          'Date of birth',
          'Place of birth, if requested by the form',
          'Citizenship / nationality',
          'Country of permanent residence',
          'Document type: passport, ID card, residence card',
          'Document number',
          'Country of issue of the document',
          'Arrival date',
          'Departure date',
          'Address of the accommodation property',
          'Booking details or internal reference, if you use a property-management system'
        ] },
        { kind: 'warning', text: 'Store copies of documents carefully. SIBA needs the data, not necessarily indefinite storage of passport scans. If you make copies, restrict access, the retention period and explain to the guest the purpose of processing under GDPR.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'How to file a boletim in SIBA',
      content: [
        { kind: 'substeps', items: [
          { id: 'register-host', title: '1. Register the host or property', content: [
            { kind: 'paragraph', text: 'You need access to SIBA. It is usually arranged by the owner, management company or property administrator. For AL, prepare the NIF, owner/company details, property address and registo AL number in advance, if applicable.' }
          ] },
          { id: 'create-arrival', title: '2. Enter the entrada after arrival', content: [
            { kind: 'paragraph', text: 'Create a boletim for each foreign guest. Check the spelling of the name, document number and dates: mistakes in passport details and dates are the most common cause of problems during an inspection.' }
          ] },
          { id: 'create-departure', title: '3. Close the saída after departure', content: [
            { kind: 'paragraph', text: 'After check-out, submit the saída within 3 working days. If you use a Channel Manager/PMS, do not rely blindly on automation: check that the record has really gone to SIBA.' }
          ] },
          { id: 'save-proof', title: '4. Save the confirmation', content: [
            { kind: 'paragraph', text: 'Keep the submission number/receipt and the internal booking history. During an inspection, it is useful to show that the data was sent on time.' }
          ] }
        ] }
      ]
    },
    {
      id: 'fines-and-risks',
      title: 'Fines and common mistakes',
      content: [
        { kind: 'paragraph', text: 'Liability follows from the Lei 23/2007 regime. In practice, a range of €100–€500 for an individual and up to €2,000 for a legal entity is often quoted for failure to file or late filing of a boletim. The risk is assessed per guest/episode, so one large booking can become several breaches.' },
        { kind: 'checklist', items: [
          'Mistake: filing only the lead guest, not all foreigners',
          'Mistake: assuming that EU citizens do not need to be filed',
          'Mistake: thinking that Airbnb or Booking submit everything themselves',
          'Mistake: not filing the saída after departure',
          'Mistake: filing by the booking date rather than the actual arrival',
          'Mistake: not checking the automatic PMS integration with SIBA',
          'Mistake: having no proof of submission during an inspection',
          'Mistake: assuming long-term paid rental is completely outside the regime without a legal check'
        ] },
        { kind: 'warning', text: 'If you rent out housing not as AL, but under a long-term contract to a foreigner, the SIBA obligation is more disputed in everyday practice, but the wording of the law is broader: “todos aqueles que facultem, a título oneroso, alojamento a cidadãos estrangeiros”. For systematic rental to foreigners, it is better to set up a process or obtain a written position from a lawyer/accountant.' }
      ]
    },
    {
      id: 'practical-setup',
      title: 'Practical setup for a host',
      content: [
        { kind: 'paragraph', text: 'Make SIBA part of check-in/check-out, like cleaning and handing over keys. This is especially important if different people manage the accommodation: owner, co-host, cleaning team and property manager.' },
        { kind: 'checklist', items: [
          'Add a SIBA item to the pre-check-in message template',
          'Collect data for all guests before arrival, but verify it at check-in',
          'Assign one person responsible for submitting the entrada',
          'Assign one person responsible for the saída',
          'Put a reminder in the calendar for the 2nd working day after arrival and departure',
          'Once a month, export the booking list and reconcile it with SIBA',
          'For PMS/Channel Manager, enable the integration error log',
          'Store submission confirmations together with the booking reference',
          'For team work, use separate access accounts, not a shared password in a messenger'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Fine for failure to file/late filing for an individual', amountEURMin: 100, amountEURMax: 500, note: 'Usually quoted for breach of the boletim de alojamento obligation; the actual classification depends on the authority and the circumstances.' },
    { label: 'Fine for a legal entity', amountEURMin: 400, amountEURMax: 2000, note: 'The practical upper range often cited for companies/accommodation operators.' },
    { label: 'Filing a boletim in SIBA', amountEUR: 0, note: 'No state fee is charged for the electronic filing itself; PMS/Channel Manager or property manager services may be paid.' }
  ],
  sources: [
    { title: 'Lei 23/2007 — regime for entry, stay and departure of foreigners, arts. 15–16 and sanctions', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-67564445', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SIBA — boletins de alojamento portal', url: 'https://siba.sef.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'GuestReady: SIBA guest registration in Portugal', url: 'https://www.guestready.com/blog/siba-guest-registration-sef-aima-portugal/', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
