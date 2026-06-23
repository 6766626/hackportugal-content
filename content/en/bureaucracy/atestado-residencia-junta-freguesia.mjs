export default {
  editorialVoice: 'hackportugal',
  id: 'atestado-residencia-junta-freguesia',
  categoryId: 'documents_fiscal',
  title: 'Atestado de residência: proof-of-residence certificate from the Junta de Freguesia',
  tldr: 'The atestado de residência (residence certificate) is an official document from your Junta de Freguesia (your local parish council) confirming where you live. It is requested for school/nursery enrolment, certain social benefits, banks, AIMA and other procedures. It is NOT the same as a comprovativo de morada (proof of address, e.g. a utility bill) or a certificado de residência from AIMA. You will need: photo ID, a comprovativo de morada and the junta form. A key catch for newcomers: if you are not on the electoral roll (recenseamento) of that freguesia, you will need 2 witnesses who are registered there and are not relatives of yours. The cost is usually free or up to ~€5 (≈€5.60 at a Loja do Cidadão).',
  tags: ['atestado de residência', 'junta de freguesia', 'documents', 'morada'],
  estimatedReadMinutes: 6,
  recentlyChangedAt: '2026-06-22',
  changeSummary: 'New guide: how to obtain an atestado de residência at the Junta de Freguesia — documents, witnesses for those not on the electoral roll, cost, and the difference from a comprovativo de morada and the AIMA certificado.',
  steps: [
    {
      id: 'what-and-why',
      title: 'What it is and why you need it',
      content: [
        { kind: 'paragraph', text: 'The atestado de residência is issued by the Junta de Freguesia — the local self-government body at parish/district level. The document officially confirms that you live at a specific address within that freguesia.' },
        { kind: 'checklist', items: [
          '🏫 Enrolling children in school, nursery (creche) or after-school care (ATL) and placement by area of residence.',
          '👶 Some municipal and social benefits (cheque-bebé, large-family support, etc.).',
          '🏦 Sometimes for a bank, an insurer or a telecoms operator.',
          '🪪 Sometimes requested in administrative procedures, including dealings with AIMA.',
          'It confirms the very fact that you live at the address when an ordinary bill is not enough.'
        ] },
        { kind: 'warning', text: 'Do not confuse three different things: the atestado de residência (junta) is a confirmation certificate; the comprovativo de morada is an ordinary water/electricity/gas bill in your name; the certificado de residência (AIMA) is for immigration procedures. Ask the body involved exactly which one they need.' }
      ]
    },
    {
      id: 'documents',
      title: 'Which documents you need',
      content: [
        { kind: 'checklist', items: [
          '🪪 Photo ID: Cartão de Cidadão (citizen card), residence permit (título de residência) or passport.',
          '🧾 Comprovativo de morada (proof of address): a recent bill (água, luz, gás — water, electricity, gas), a rental contract or another document showing the address.',
          '📝 Request form (requerimento) — picked up at the junta or downloaded from its website.',
          'Sometimes a NIF (tax number); check the requirements of your specific junta.',
          'If you are applying on behalf of someone else — a power of attorney or consent.'
        ] }
      ]
    },
    {
      id: 'witnesses',
      title: 'Witnesses (testemunhas) — important for newcomers',
      content: [
        { kind: 'paragraph', text: 'The main hurdle for those who have only just moved: if you are NOT on the electoral roll (recenseamento eleitoral) of that freguesia, the junta usually requires two witnesses.' },
        { kind: 'checklist', items: [
          'You need 2 witnesses (testemunhas) who are themselves registered (recenseados) in that freguesia.',
          'The witnesses confirm that you really do live there.',
          'The witnesses must NOT be your relatives.',
          'Bring copies of their ID; sometimes they must come in person and sign.',
          'Good candidates for witnesses: neighbours, your landlord, long-standing acquaintances from the area.',
          'If you are already recenseado in that freguesia, witnesses are usually not needed.'
        ] },
        { kind: 'warning', text: 'The requirements for witnesses and the procedure vary from junta to junta. Call ahead or check the website of your Junta de Freguesia so you do not make a wasted trip.' }
      ]
    },
    {
      id: 'cost-where',
      title: 'How much it costs and where to get it',
      content: [
        { kind: 'checklist', items: [
          '💶 Usually free or up to ~€5 (≈€5.60 if issued at a Loja do Cidadão) — it depends on the junta.',
          '🏢 In person — at the Junta de Freguesia for your place of residence (where you actually live, not where you may be registered in another town).',
          '💻 Some juntas issue the atestado online via their website/portal — check your freguesia\'s website.',
          '🏬 Some junta services are also available through the Loja do Cidadão / Espaço Cidadão.',
          '⏱️ Often issued the same day; sometimes by appointment only.'
        ] }
      ]
    },
    {
      id: 'practical',
      title: 'Practical tips and frequently asked questions',
      content: [
        { kind: 'checklist', items: [
          'Check the validity period: some bodies only accept an atestado that is no more than 3–6 months old.',
          'Get the certificate from the freguesia where you actually live; you can find your freguesia by address on the municipality\'s website.',
          'Ask right away for as many copies as you need — sometimes that is more convenient than coming back again.',
          'If your address has recently changed, update your comprovativo de morada (bill/contract) first.',
          'For immigration procedures, check whether you specifically need the junta atestado or the certificado de residência from AIMA.'
        ] },
        { kind: 'paragraph', text: 'Related guides: changing your address across all services (Cartão de Cidadão, Finanças, NISS), Espaço Cidadão and Loja do Cidadão.' }
      ]
    }
  ],
  sources: [
    {
      title: 'DECO PROTESTE — Atestado de residência: what it is for and how to obtain it',
      url: 'https://www.deco.proteste.pt/familia-consumo/cidadania/dicas/atestado-residencia-serve-obter',
      kind: 'secondary',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'Freguesia de Estrela — Atestados de residência (example junta, incl. online)',
      url: 'https://www.jf-estrela.pt/comunidade/servicos/1-atestados_de_residencia',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'gov.pt — Espaço Cidadão and junta de freguesia services',
      url: 'https://www.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    }
  ],
  lastVerified: '2026-06-23',
  verifyIntervalDays: 365
}
