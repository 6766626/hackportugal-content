export default {
  editorialVoice: 'hackportugal',
  id: 'doacao-roupa-moveis',
  categoryId: 'daily_life',
  title: 'Where to donate old clothes, furniture and food: Re-Food, Cáritas, Banco Alimentar',
  tldr: 'In Portugal, it is better to donate food, clothing and furniture for the right purpose rather than putting them “in the general bin”. Re-Food collects surplus food through local núcleos and volunteers, Banco Alimentar accepts non-perishable products at warehouses and supermarket campaigns, and Cáritas and Loja Solidária take clothing, shoes, bedding, and sometimes furniture and household appliances. In Lisboa/Porto, large furniture often needs to be agreed first with Câmara Municipal or the local Cáritas: putting it out on the street without permission can result in a fine.',
  tags: ['donation', 'clothing', 'furniture', 'food', 'caritas'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'sort-before-donation',
      title: '1. Sort things first: not everything can be donated',
      content: [
        { kind: 'paragraph', text: 'The main rule: charity in Portugal is not a free dump. Organisations accept items that can be passed straight on to a family, sold in a Loja Solidária or used safely.' },
        { kind: 'checklist', items: [
          'Clothing: clean, dry, without mould or a strong smell; it is better to sort into bags and label them “adulto”, “criança”, “bebé”.',
          'Shoes: only in pairs, without serious wear; laces/zips must work.',
          'Bedding and towels: washed; mattresses are rarely accepted because of hygiene and transport.',
          'Furniture: photos, dimensions, floor, whether there is a lift — send these in advance to Cáritas, Loja Solidária or Câmara Municipal.',
          'Appliances: working, with cables; not everyone accepts large appliances, especially fridges and washing machines.',
          'Food: only safe food. Non-perishable products — Banco Alimentar; cooked food and surplus from businesses — usually through Re-Food, but only after agreement.',
          'Documents, medicines, expired cosmetics, opened baby formula, alcohol — do not put these in donations.',
          'If an item is broken, wet, has bedbugs/mould — it is lixo volumoso or reciclagem, not doação.'
        ] }
      ]
    },
    {
      id: 'food-refood-banco-alimentar',
      title: '2. Food: Re-Food ≠ Banco Alimentar',
      content: [
        { kind: 'paragraph', text: 'Re-Food and Banco Alimentar Contra a Fome work differently. Re-Food is a local volunteer network that rescues prepared surplus food from restaurants, cafés, supermarkets and partners, then quickly distributes it to people in need. It is not a universal drop-off point for household leftovers.' },
        { kind: 'paragraph', text: 'Banco Alimentar is a network of food banks. They primarily accept non-perishable products: rice, pasta, tinned food, UHT milk, olive oil, sugar, flour, cereals, baby food in sealed packaging. Donations are handled through warehouses, supermarket campaigns and partner institutions.' },
        { kind: 'checklist', items: [
          'For Re-Food: find the nearest núcleo on re-food.org and write to them before handing over food.',
          'Do not bring a homemade pot of soup to Re-Food without prior agreement: food safety requirements are strict.',
          'If you have a café, restaurant, bakery or catering business — Re-Food can be a good channel for regular surplus donations.',
          'For Banco Alimentar: donate sealed products with a normal shelf life.',
          'Check Banco Alimentar campaigns in supermarkets: volunteers usually stand at the entrance and hand out bags for buying products.',
          'Online donations and “vale” in supermarkets are often more convenient than transporting products yourself.',
          'Frozen food, perishables, opened packaging, home preserves — usually not suitable for Banco Alimentar.'
        ] },
        { kind: 'warning', text: 'Do not leave food at the doors of Re-Food, Cáritas or a church at night. It may be thrown away because it is impossible to confirm temperature, expiry date and origin.' }
      ]
    },
    {
      id: 'clothes-furniture-caritas',
      title: '3. Clothing and furniture: Cáritas, paróquia, Loja Solidária',
      content: [
        { kind: 'paragraph', text: 'Cáritas Portuguesa is a national structure, but donations are usually organised at the level of Cáritas Diocesana, paróquia or a local Loja Solidária. Conditions vary by city: some accept only clothing, some have a warehouse for furniture, and some require an appointment in advance.' },
        { kind: 'checklist', items: [
          'Open caritas.pt and find your Cáritas Diocesana by area of residence.',
          'Write briefly in Portuguese: what you are donating, number of bags, photos of furniture, address, floor, lift, when is convenient.',
          'For clothing, use strong bags, not food boxes; label them “roupa de mulher”, “homem”, “criança”, “cama”.',
          'Children’s items, prams, cots and school backpacks are often in demand, but must be clean and safe.',
          'Furniture is not collected automatically: smaller Loja Solidária may not have a van or warehouse.',
          'If the organisation does not reply, try your local paróquia or Junta de Freguesia: they often know local families and projects.',
          'For valuable items, you can first sell them via OLX/Facebook Marketplace and donate the money to Banco Alimentar or Cáritas.'
        ] },
        { kind: 'warning', text: 'Street clothing containers do not always belong to charitable organisations. Check the logo, website and container operator; some containers are commercial textile collections.' }
      ]
    },
    {
      id: 'lisboa-porto-deep-dive',
      title: '4. Lisboa and Porto: how to act in practice',
      content: [
        { kind: 'paragraph', text: 'In Lisboa and Porto, the problem is usually not who needs the item, but logistics: parking, carrying, lift, warehouse, volunteer schedule. The larger the item, the earlier you should write and the more details you should provide.' },
        { kind: 'substeps', items: [
          {
            id: 'lisboa',
            title: 'Lisboa',
            content: [
              { kind: 'checklist', items: [
                'Food: look for the nearest Re-Food Lisboa núcleo by area; for regular food donations from a business, write in advance.',
                'Non-perishable products: Banco Alimentar Contra a Fome has a structure in the Lisboa region; it is more convenient to take part in supermarket campaigns or donate through partners.',
                'Clothing: Cáritas Diocesana de Lisboa, paróquias and Loja Solidária accept according to their own schedules; do not turn up with 10 bags without calling.',
                'Furniture: send photos and dimensions first. If the charitable organisation does not collect, arrange recolha de monos / resíduos volumosos through Câmara Municipal de Lisboa.',
                'If you live in a prédio, agree with the condomínio where to place the furniture temporarily until collection.'
              ] }
            ]
          },
          {
            id: 'porto',
            title: 'Porto',
            content: [
              { kind: 'checklist', items: [
                'Food: Re-Food works through local núcleos; volunteers collect surplus along routes rather than accepting everything at the door.',
                'Long-life products: Banco Alimentar do Porto and supermarket campaigns are the simplest route.',
                'Clothing and shoes: Cáritas Diocesana do Porto, paróquias, Loja Solidária and local associações accept by prior contact.',
                'Large furniture: check with Cáritas/Loja Solidária whether they have recolha. If not — use the serviço municipal de recolha de volumosos in Porto.',
                'Do not leave a sofa next to the contentor do lixo: in central Porto this quickly becomes a breach of street-cleaning rules.'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'message-template',
      title: '5. Ready-made WhatsApp/email text in Portuguese',
      content: [
        { kind: 'paragraph', text: 'Portuguese organisations often work through volunteers. A short and specific message increases the chance of a reply.' },
        { kind: 'paragraph', text: 'Olá! Gostaria de doar alguns bens em bom estado. Tenho: [2 sacos de roupa de adulto / mesa 120x80 / cadeira / alimentos não perecíveis]. Posso enviar fotos. Moro em [bairro, cidade], [andar], [com/sem elevador]. Gostaria de saber se aceitam e se é possível entregar ou agendar recolha. Obrigado/a.' },
        { kind: 'checklist', items: [
          'Attach 2–4 photos of furniture or appliances.',
          'State the exact bairro, but give the full address only after confirmation.',
          'Write “doar”, “recolha”, “entrega”, “Loja Solidária”, “bens em bom estado”.',
          'If it is food, add the expiry date and the condition of the packaging.',
          'If you need quick collection when moving house, write the date honestly: “preciso desocupar até sexta-feira”.',
          'If there is no reply within 3–5 working days, try another paróquia, Junta de Freguesia or municipal collection.'
        ] }
      ]
    },
    {
      id: 'what-not-to-do',
      title: '6. What not to do',
      content: [
        { kind: 'checklist', items: [
          'Do not throw clothing next to a full container: rain will ruin the items and they will become rubbish.',
          'Do not leave furniture on the pavement without booking recolha de volumosos.',
          'Do not donate expired food “just in case someone can use it”. Organisations will have to spend time sorting and disposing of it.',
          'Do not send volunteers 5-minute voice messages: a list + photos is better.',
          'Do not demand collection “today in an hour”: most projects rely on volunteers.',
          'Do not mix good items with rubbish in the same bag.',
          'Do not use charity as a way to get rid of items after bedbug infestation, mould or flooding.'
        ] },
        { kind: 'warning', text: 'If an item is already unusable, choose an ecocentro, recolha de monos, WEEE/REEE for electronics or ordinary recycling. This is fairer and cheaper for everyone.' }
      ]
    }
  ],
  costs: [
    { label: 'Donation of food, clothing or items', amountEUR: 0, note: 'Organisations do not charge for the doação itself, but may refuse because of the condition of items or lack of storage.' },
    { label: 'Municipal bulky waste collection', amountEUR: 0, note: 'In many municípios the service is free by appointment for residents, but rules and limits depend on Câmara Municipal.' },
    { label: 'Private furniture transport', amountEURMin: 25, amountEURMax: 80, note: 'Typical range for a small city transport job; depends on floor, lift, distance and urgency.' }
  ],
  sources: [
    { title: 'Re-Food Portugal — food rescue and redistribution network', url: 'https://www.re-food.org', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Banco Alimentar Contra a Fome — food banks and campaigns', url: 'https://www.bancoalimentar.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Cáritas Portuguesa — social support network and Cáritas Diocesana', url: 'https://www.caritas.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
