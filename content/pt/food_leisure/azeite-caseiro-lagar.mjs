export default {
  editorialVoice: 'hackportugal',
  id: 'azeite-caseiro-lagar',
  categoryId: 'food_leisure',
  title: 'O seu próprio azeite — apanha da azeitona e prensagem no lagar',
  tldr: 'Se tem oliveiras no seu terreno, pode fazer o seu próprio azeite. A época de apanha da azeitona (apanha) vai do fim de outubro a dezembro. Os apanhadores cobram 60-100 €/dia; a apanha por conta própria com redes (panos) é gratuita, mas exige muito trabalho. A prensagem (lagar) é paga em percentagem ou em dinheiro: ~30-60 €/100 kg de azeitona, ou 10-15% do azeite produzido. Rendimento: 100 kg de boas azeitonas dão 12-20 l de azeite. Para consumo próprio não é necessária qualquer licença. Venda — registo DGAV + certificação IGP (Azeite do Alentejo, Trás-os-Montes, etc.). Conservação: garrafa de vidro escuro, 16-18°C, até 18 meses.',
  tags: ['azeite', 'oliveira', 'lagar', 'apanha', 'azeitona'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-and-how',
      title: 'Quando e como apanhar azeitonas',
      content: [
        { kind: 'paragraph', text: 'A época da apanha da azeitona (apanha da azeitona) é no fim do outono. As datas exatas dependem da região e da variedade da árvore, mas em média:' },
        { kind: 'checklist', items: [
          'Fim de outubro — início de dezembro: época principal',
          'Algarve e sul — normalmente mais cedo (a partir de 15 de outubro)',
          'Norte (Trás-os-Montes, Alentejo) — mais tarde (novembro-dezembro)',
          'Variedades: galega (clássica, pequena), cobrançosa (versátil), cordovil (no Alentejo), verdeal',
          'Maturação: as azeitonas escurecem de verde para roxo e preto. Para azeite, o ideal é a fase “sanguinha” — meio roxas',
          'Demasiado verdes: mais amargor, menor rendimento em azeite',
          'Demasiado maduras (engelhadas): menos azeite, mais acidez'
        ] }
      ]
    },
    {
      id: 'collecting',
      title: 'Métodos de apanha',
      content: [
        { kind: 'checklist', items: [
          'REDES + VARAS (vareio): estende as redes (panos) debaixo da árvore e bate nos ramos com uma vara ou uma forquilha vibratória. É o método mais comum para uma família. Barato, mas trabalhoso. Uma pessoa — ~50-100 kg/dia',
          'APANHA À MÃO (apanha à mão): cuidadosa para azeitonas de mesa. Lenta, mas sem pisaduras. ~20-40 kg/dia',
          'VIBRADORES (vibradores): máquinas mecânicas que se prendem ao tronco. Profissional, para explorações maiores. Aluguer a partir de 200 €/dia',
          'PENTES ELÉTRICOS (vareadores eléctricos): a bateria, facilitam a apanha. Aluguer a partir de 80 €/dia, compra ~300-500 €',
          'APANHADORES (apanhadores): pessoas locais vêm ver as suas árvores. 60-100 €/dia por pessoa + comida. Procure através da Junta de Freguesia ou de um agricultor local'
        ] },
        { kind: 'paragraph', text: 'A regra principal: as azeitonas devem chegar ao lagar no prazo de 24-48 horas após a apanha. Mais tempo — oxidação, acidez mais elevada, azeite estragado.' },
        { kind: 'warning', text: 'NÃO apanhe azeitonas do chão que lá estejam há mais de um dia. Já estão em fermentação e darão azeite “lampante” — acidez elevada, qualidade técnica, não serve para alimentação.' }
      ]
    },
    {
      id: 'lagar',
      title: 'Lagar — onde transformar em azeite',
      content: [
        { kind: 'paragraph', text: 'O lagar é o local de extração do azeite. Existem lagares em todas as regiões com olival. Pequenos volumes privados (50-500 kg) são aceites sem problema.' },
        { kind: 'checklist', items: [
          'Encontrar um lagar: através de um agricultor local, na Junta de Freguesia, ou no site da COTHN (Confederação dos Olivicultores)',
          'Aceitam lotes inteiros a partir de ~50 kg (mínimo para pôr a linha a funcionar)',
          'Se tiver menos — junte-se a vizinhos (lagar partilhado)',
          'Lagares modernos: continuous extraction (centrífuga). É o padrão para pequenos lotes',
          'Tradicionais (granito + capachos de palha): quase desapareceram, mas existem lagares turísticos em Trás-os-Montes — o azeite é mais saboroso, mas o processo demora mais',
          'Tempo no lagar: ~2-4 horas desde a receção até ao azeite pronto'
        ] },
        { kind: 'paragraph', text: 'Pagamento:' },
        { kind: 'checklist', items: [
          'Em dinheiro: 30-60 € por 100 kg de azeitona',
          'Em percentagem: 10-15% do azeite produzido fica no lagar (eles vendem)',
          'Muitas vezes pode escolher — o que compensa mais depende do volume e do preço atual do azeite',
          'Extração a frio (extra virgem): sem aquecimento. Melhor qualidade. Custa um pouco mais'
        ] }
      ]
    },
    {
      id: 'yield',
      title: 'Quanto azeite vai obter',
      content: [
        { kind: 'checklist', items: [
          'Boas azeitonas no início da época: 18-22 l de azeite por 100 kg',
          'Médias: 14-18 l por 100 kg',
          'Tardias/demasiado maduras: 10-14 l',
          'Más/danificadas: 8-12 l + acidez elevada',
          'Média da época em Portugal — 15-17 l por 100 kg'
        ] },
        { kind: 'paragraph', text: 'Uma oliveira adulta dá cerca de 10-30 kg de fruto por ano. Ou seja, 5-10 árvores = 100-300 kg = 15-50 l de azeite. É uma reserva para um ano para uma família, com margem para oferecer.' }
      ]
    },
    {
      id: 'storage',
      title: 'Conservação do azeite',
      content: [
        { kind: 'paragraph', text: 'Os principais inimigos do azeite são a luz, a temperatura e o oxigénio. Regras:' },
        { kind: 'checklist', items: [
          'Recipiente: vidro escuro (verde ou castanho), potes de barro, inox. NUNCA plástico e NUNCA vidro transparente exposto à luz',
          'Temperatura: 14-18°C é o ideal. Frigorífico — demasiado frio (o azeite fica turvo; não é crítico, mas não é para conservação)',
          'Prazo: azeite caseiro sem conservantes — máximo 12-18 meses',
          'Sinal de deterioração: rançoso — cheira a azeite velho, cartão',
          'Engarrafar em garrafas de 0.5-1 l: uma garrafa aberta deve ser consumida em 2-3 meses',
          'Marcar a data da extração — esquece-se surpreendentemente depressa'
        ] }
      ]
    },
    {
      id: 'selling',
      title: 'Venda — regras próprias',
      content: [
        { kind: 'paragraph', text: 'Se quiser vender o seu azeite, precisa de licenças e certificações.' },
        { kind: 'checklist', items: [
          'Registo como olivicultor na DGAV (Direção-Geral de Alimentação e Veterinária)',
          'Abertura de atividade nas Finanças: código CIRS 1311 — agricultura',
          'IVA: até 14 500 €/ano de volume de negócios pode trabalhar sem IVA (a partir de 2025)',
          'Rótulos segundo EU regulations: produtor, NIF, tipo (extra virgem / virgem / olivais), peso, prazo de validade, país',
          'Análises laboratoriais: acidez (% oleic acid), peroxídeos, K232/K270 — parâmetros de qualidade obrigatórios',
          'Laboratórios: acreditados pela ASAE. ~50-150 € por análise',
          'Certificações IGP/DOP (premium): Azeite do Alentejo Interior, Azeite de Trás-os-Montes, Azeite do Norte Alentejano, etc. — registo separado no IPV (Instituto Português da Qualidade) ou CertiQuê',
          'Venda em mercados locais: licença da Câmara Municipal, ~30-100 €/dia',
          'Venda online: IVA se o volume de negócios ultrapassar o limite'
        ] }
      ]
    },
    {
      id: 'tasting',
      title: 'Prova e avaliação da qualidade',
      content: [
        { kind: 'paragraph', text: 'Vai querer provar o seu azeite com atenção. Prova profissional segundo as normas da UE:' },
        { kind: 'checklist', items: [
          'Copo azul ou opaco (para não se distrair com a cor)',
          'Deitar ~15 ml, aquecer nas mãos até 28°C',
          'Aroma: frutado — herbáceo — amargo (bom indicador de fenóis)',
          'Gole: atributos positivos — frutado, amargo, picante',
          'Defeitos: rançoso, avinhado, mofo, tulha',
          'Provas profissionais: cursos da COTHN ou da Universidade de Évora, para conhecedores sérios',
          'Bom azeite: pica na garganta — são polifenóis, antioxidantes, muito benéficos'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Redes (panos) para a apanha, reutilizáveis', amountEURMin: 30, amountEURMax: 80, note: 'Compra única' },
    { label: 'Vara com pente vibratório', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Pente elétrico (vareador)', amountEURMin: 300, amountEURMax: 500, note: 'Para utilização regular' },
    { label: 'Apanhador por dia', amountEURMin: 60, amountEURMax: 100, note: 'Mais comida' },
    { label: 'Lagar pago em dinheiro', amountEURMin: 30, amountEURMax: 60, note: 'Por 100 kg de azeitona' },
    { label: 'Lagar pago em percentagem', amountEUR: 0, note: '10-15% do azeite produzido fica no lagar' },
    { label: 'Análise de acidez', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Garrafas de vidro escuro de 0.5 l', amountEURMin: 1, amountEURMax: 3, note: 'Cada' }
  ],
  sources: [
    { title: 'DGAV — Direção-Geral de Alimentação e Veterinária', url: 'https://www.dgav.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'COTHN — Centro Operativo e Tecnológico Hortofrutícola Nacional', url: 'https://www.cothn.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Azeite IGP — DOP Alentejo, Trás-os-Montes', url: 'https://tradicional.dgadr.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — apoio à olivicultura', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
