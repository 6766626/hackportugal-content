// 23 top-level categories for HackPortugal. Ordered by arrival funnel.
// `hasVariants: true` means CPLP/EU-EEA/3rd-country branches materially differ.
// `titles` / `subtitles` hold per-language overrides; fallback to root `title`/`subtitle`.

export default [
  { id: 'before_arrival',       order: 1,  title: 'Перед приездом',            subtitle: 'Визы, апостиль, перевод, консульства', sfSymbol: 'airplane',                          hasVariants: true,
    titles:    { pt: 'Antes da chegada',          en: 'Before arrival' },
    subtitles: { pt: 'Vistos, apostilas, traduções, consulados', en: 'Visas, apostilles, translations, consulates' } },

  { id: 'documents_fiscal',     order: 2,  title: 'Документы и фискалка',      subtitle: 'NIF, NISS, Cartão de Cidadão',          sfSymbol: 'doc.text',                          hasVariants: true,
    titles:    { pt: 'Documentos e fiscal',       en: 'Documents & tax ID' },
    subtitles: { pt: 'NIF, NISS, Cartão de Cidadão', en: 'NIF, NISS, Cartão de Cidadão' } },

  { id: 'residence_permit',     order: 3,  title: 'ВНЖ и AIMA',                subtitle: 'D7, D8, CPLP, продление, AIMA online',  sfSymbol: 'person.text.rectangle',             hasVariants: true,
    titles:    { pt: 'Residência e AIMA',          en: 'Residency & AIMA' },
    subtitles: { pt: 'D7, D8, CPLP, renovação, AIMA online', en: 'D7, D8, CPLP, renewals, AIMA online' } },

  { id: 'nationality',          order: 4,  title: 'Гражданство',               subtitle: 'Натурализация, по браку, язык A2',      sfSymbol: 'checkmark.seal',                    hasVariants: true,
    titles:    { pt: 'Nacionalidade',              en: 'Nationality' },
    subtitles: { pt: 'Naturalização, casamento, CIPLE A2', en: 'Naturalisation, marriage, CIPLE A2' } },

  { id: 'healthcare',           order: 5,  title: 'Здравоохранение',           subtitle: 'SNS, utente, скорая, страховка',        sfSymbol: 'cross.case',                        hasVariants: false,
    titles:    { pt: 'Saúde',                      en: 'Healthcare' },
    subtitles: { pt: 'SNS, utente, urgências, seguros', en: 'SNS, utente, emergencies, insurance' } },

  { id: 'housing_rent',         order: 6,  title: 'Аренда жилья',              subtitle: 'Contrato, caução, fiador',              sfSymbol: 'house',                             hasVariants: false,
    titles:    { pt: 'Arrendamento',               en: 'Renting' },
    subtitles: { pt: 'Contrato, caução, fiador',   en: 'Contract, caução, fiador' } },

  { id: 'housing_buy',          order: 7,  title: 'Покупка жилья',             subtitle: 'Ипотека, IMT, AL',                      sfSymbol: 'key',                               hasVariants: false,
    titles:    { pt: 'Compra de casa',             en: 'Buying a home' },
    subtitles: { pt: 'Hipoteca, IMT, AL',          en: 'Mortgage, IMT, AL' } },

  { id: 'banking',              order: 8,  title: 'Банки и финансы',           subtitle: 'ActivoBank, MB Way, IBAN',              sfSymbol: 'creditcard',                        hasVariants: false,
    titles:    { pt: 'Bancos e finanças',          en: 'Banking & money' },
    subtitles: { pt: 'ActivoBank, MB WAY, IBAN',   en: 'ActivoBank, MB WAY, IBAN' } },

  { id: 'taxes',                order: 9,  title: 'Налоги',                    subtitle: 'IRS, IFICI (бывший NHR), recibos',      sfSymbol: 'percent',                           hasVariants: true,
    titles:    { pt: 'Impostos',                   en: 'Taxes' },
    subtitles: { pt: 'IRS, IFICI (ex-NHR), recibos verdes', en: 'IRS, IFICI (ex-NHR), recibos verdes' } },

  { id: 'work_business',        order: 10, title: 'Работа и ИП',               subtitle: 'Atividade, recibos verdes, контракты',  sfSymbol: 'briefcase',                         hasVariants: false,
    titles:    { pt: 'Trabalho e negócio',         en: 'Work & self-employment' },
    subtitles: { pt: 'Atividade, recibos verdes, contratos', en: 'Activity, recibos verdes, contracts' } },

  { id: 'education_children',   order: 11, title: 'Дети и образование',        subtitle: 'Школы, детсад, abono, нострификация',   sfSymbol: 'graduationcap',                     hasVariants: false,
    titles:    { pt: 'Crianças e educação',        en: 'Children & education' },
    subtitles: { pt: 'Escolas, creche, abono, equivalência', en: 'Schools, creche, abono, diploma recognition' } },

  { id: 'auto_ownership',       order: 12, title: 'Авто: владение',            subtitle: 'Растаможка, страховки, техосмотр, IUC', sfSymbol: 'car',                               hasVariants: false,
    titles:    { pt: 'Automóvel: posse',           en: 'Car: ownership' },
    subtitles: { pt: 'ISV, seguros, IPO, IUC',     en: 'ISV, insurance, IPO, IUC' } },

  { id: 'auto_trips',           order: 13, title: 'Авто: поездки',             subtitle: 'Via Verde, заправки, ДТП, эвакуация',   sfSymbol: 'road.lanes',                        hasVariants: false,
    titles:    { pt: 'Automóvel: viagens',         en: 'Car: on the road' },
    subtitles: { pt: 'Via Verde, combustível, acidentes, reboque', en: 'Via Verde, fuel, accidents, towing' } },

  { id: 'public_transport',     order: 14, title: 'Общественный транспорт',    subtitle: 'Navegante, viver Cascais, проездные',   sfSymbol: 'tram',                              hasVariants: false,
    titles:    { pt: 'Transportes públicos',       en: 'Public transport' },
    subtitles: { pt: 'Navegante, viver Cascais, passes', en: 'Navegante, viver Cascais, passes' } },

  { id: 'driving_license',      order: 15, title: 'Водительские права',        subtitle: 'Обмен, продление, международные',       sfSymbol: 'person.badge.key',                  hasVariants: true,
    titles:    { pt: 'Carta de condução',          en: 'Driving licence' },
    subtitles: { pt: 'Troca, renovação, licenças internacionais', en: 'Exchange, renewal, international permits' } },

  { id: 'animals',              order: 16, title: 'Животные',                  subtitle: 'Перевозка, жизнь, ветеринары',          sfSymbol: 'pawprint',                          hasVariants: false,
    titles:    { pt: 'Animais',                    en: 'Pets' },
    subtitles: { pt: 'Importação, vida, veterinários', en: 'Import, daily life, vets' } },

  { id: 'telecom',              order: 17, title: 'Связь и интернет',          subtitle: 'SIM, eSIM, тарифы, VPN',                sfSymbol: 'antenna.radiowaves.left.and.right', hasVariants: false,
    titles:    { pt: 'Comunicações e internet',    en: 'Phone & internet' },
    subtitles: { pt: 'SIM, eSIM, tarifários, VPN', en: 'SIM, eSIM, plans, VPN' } },

  { id: 'digital_gov',          order: 18, title: 'Бюрократия онлайн',         subtitle: 'Chave Móvel, Espaço Cidadão, доверенности', sfSymbol: 'lock.shield',                   hasVariants: false,
    titles:    { pt: 'Burocracia online',          en: 'Online bureaucracy' },
    subtitles: { pt: 'Chave Móvel, Espaço Cidadão, procurações', en: 'Chave Móvel, Espaço Cidadão, power of attorney' } },

  { id: 'daily_life',           order: 19, title: 'Быт и покупки',             subtitle: 'Continente, Lidl, техника, посылки',    sfSymbol: 'cart',                              hasVariants: false,
    titles:    { pt: 'Vida diária',                en: 'Daily life' },
    subtitles: { pt: 'Continente, Lidl, eletrodomésticos, encomendas', en: 'Continente, Lidl, appliances, parcels' } },

  { id: 'travel_portugal',      order: 20, title: 'Путешествия по Португалии', subtitle: 'Лиссабон, Порту, пляжи, природа',       sfSymbol: 'map',                               hasVariants: false,
    titles:    { pt: 'Viagens por Portugal',       en: 'Travel in Portugal' },
    subtitles: { pt: 'Lisboa, Porto, praias, natureza', en: 'Lisbon, Porto, beaches, nature' } },

  { id: 'food_leisure',         order: 21, title: 'Еда и досуг',               subtitle: 'Кухни, футбол, кино, мероприятия',      sfSymbol: 'fork.knife',                        hasVariants: false,
    titles:    { pt: 'Comida e lazer',             en: 'Food & leisure' },
    subtitles: { pt: 'Gastronomia, futebol, cinema, eventos', en: 'Cuisine, football, cinema, events' } },

  { id: 'emergency_rights',     order: 22, title: 'Экстренные ситуации',       subtitle: '112, юрпомощь, CICDR, права потребителя', sfSymbol: 'exclamationmark.triangle',        hasVariants: false,
    titles:    { pt: 'Emergências',                en: 'Emergencies' },
    subtitles: { pt: '112, apoio jurídico, CICDR, direitos do consumidor', en: '112, legal aid, CICDR, consumer rights' } },

  { id: 'country_specific',     order: 23, title: 'По странам происхождения',  subtitle: 'Нюансы для граждан РФ, BY, UA, US, UK, BR и др.', sfSymbol: 'globe',                hasVariants: true,
    titles:    { pt: 'Por país de origem',         en: 'By country of origin' },
    subtitles: { pt: 'Particularidades para cidadãos RU, BY, UA, US, UK, BR e outros', en: 'Specifics for RU, BY, UA, US, UK, BR and other citizens' } }
]
