export default {
  editorialVoice: 'hackportugal',
  id: 'termas-spa-medical',
  categoryId: 'healthcare',
  title: 'Termas: termas terapêuticas em Portugal e comparticipação SNS',
  tldr: 'Em Portugal, o termalismo não é apenas spa, mas sim tratamentos médicos com água termal. Se o médico de família do SNS prescrever tratamentos termais e você escolher termas-aderentes licenciadas, o SNS comparticipa 35% do custo dos tratamentos através de pagamento da comparticipação diretamente ao estabelecimento termal aderente (e não por reembolso ao utente).\n\nDesde 1 de outubro de 2025, o limite anual por utente está definido na Portaria n.º 280/2025/1 e é de 110 € (anteriormente 95 €, ao abrigo da Portaria n.º 337-C/2018). O limite é revisto periodicamente — verifique o valor e as condições em vigor em sns.gov.pt e no estabelecimento termal escolhido antes de marcar. Um curso típico de 14 dias custa 220–500 € sem alojamento. Destinos populares: Caldas da Rainha, Monfortinho, São Pedro do Sul, Vidago.',
  tags: ['termas', 'sns', 'saúde', 'comparticipação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts',
      title: 'O que conta como termas terapêuticas e o que é apenas spa',
      content: [
        { kind: 'paragraph', text: 'Termas, no sentido médico português, são um estabelecimento termal licenciado onde se utilizam águas minerais naturais com indicações terapêuticas reconhecidas. Existe médico hidrologista / médico responsável, ficha clínica e tratamentos prescritos: inalações, duches, banhos, lamas, cura hidropínica, massagens como parte do tratamento.' },
        { kind: 'paragraph', text: 'Um hotel spa comum, uma piscina de água aquecida, sauna circuit ou um pacote wellness de lazer não dão direito a comparticipação SNS. Só são comparticipados tratamentos termais medicamente prescritos em termas aderentes.' },
        { kind: 'checklist', items: [
          'É necessário número de utente SNS',
          'É necessária uma razão médica: reumatologia, aparelho locomotor, vias respiratórias, dermatologia, digestão — depende da água específica',
          'É necessária referenciação / prescrição de um médico do SNS, normalmente médico de família',
          'As termas devem estar licenciadas pela DGS e participar no sistema de comparticipação',
          'A comparticipação aplica-se aos tratamentos, não ao hotel, alimentação, transporte ou spa turístico',
          'No local, normalmente continua a ser necessária uma primeira consulta termal antes do início do curso'
        ] }
      ]
    },
    {
      id: 'sns-reimbursement',
      title: 'Como funciona a comparticipação SNS em 2026',
      content: [
        { kind: 'paragraph', text: 'Regra base: o SNS comparticipa 35% do custo dos tratamentos termais prescritos, mas até ao limite anual por utente. Desde 1 de outubro de 2025, o limite é de 110 €/ano (Portaria n.º 280/2025/1; anteriormente 95 €, ao abrigo da Portaria n.º 337-C/2018).\n\nO limite é revisto periodicamente — antes de marcar, confirme o valor em vigor em sns.gov.pt e/ou diretamente nas termas-aderente. A comparticipação é paga diretamente ao estabelecimento termal, e não ao utente: você paga a sua parte às termas, e o SNS transfere os 35% (até ao limite) para o estabelecimento.\n\nExemplo: se o curso custar 200 €, o SNS transfere 70 € (35%) para as termas, e a sua parte é 130 €.' },
        { kind: 'paragraph', text: 'Normalmente, o regime não funciona como um “desconto na caixa”. Você paga o curso às termas, guarda os documentos e entrega-os de acordo com as regras que as termas explicam no local: fatura-recibo com NIF, comprovativo da realização dos tratamentos e prescrição médica / termo de responsabilidade, se necessário.' },
        { kind: 'checklist', items: [
          'Confirme que o seu médico de família emite especificamente uma prescrição de tratamentos termais, e não apenas uma recomendação para “ir a banhos”',
          'Antes de reservar, pergunte às termas: “São aderentes à comparticipação do SNS em 2026?”',
          'Confirme qual o mínimo de dias exigido para o curso terapêutico: muitas vezes 12–14 dias',
          'Peça um orçamento discriminado: consulta termal, inscrição, tratamentos, spa extras',
          'Pague com NIF na fatura — sem NIF, a comparticipação pode tornar-se problemática',
          'Guarde o comprovativo de pagamento e o documento de conclusão do curso',
          'Não misture, no mesmo montante, procedimentos médicos e spa cosmético se quiser uma contabilidade correta para a comparticipação'
        ] },
        { kind: 'warning', text: 'O SNS não paga alojamento. 14 dias em São Pedro do Sul ou Vidago podem ser baratos em tratamentos, mas caros em hotel na época alta. Calcule o orçamento completo: tratamento + alojamento + transporte + alimentação.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Passo a passo: como obter a prescrição e não perder a comparticipação',
      content: [
        { kind: 'substeps', items: [
          { id: 'doctor', title: '1. Marque consulta com o médico de família', content: [
            { kind: 'paragraph', text: 'Explique o diagnóstico e o objetivo: dores articulares, rinite/sinusite crónica, bronquite, problemas de pele, recuperação após lesões. Leve exames antigos, relatório médico e lista de medicamentos.' }
          ] },
          { id: 'prescription', title: '2. Obtenha a prescrição para tratamentos termais', content: [
            { kind: 'paragraph', text: 'Peça ao médico que indique a área terapêutica e a necessidade do curso. Para o SNS, o que conta é a prescrição médica, não uma recomendação turística.' }
          ] },
          { id: 'choose-termas', title: '3. Escolha termas licenciadas', content: [
            { kind: 'paragraph', text: 'Verifique o estabelecimento na Termas de Portugal e no site das próprias termas. Telefone e confirme: se aceitam prescrição SNS, que documentos são necessários, quantos dias dura o curso e se há médico termal nas datas pretendidas.' }
          ] },
          { id: 'onsite', title: '4. Faça a consulta termal no local', content: [
            { kind: 'paragraph', text: 'O médico local adapta o programa: por exemplo, 14 dias de inalações, duches, banhos ou cura hidropínica. Alguns tratamentos são contraindicados em caso de oncologia, insuficiência cardíaca grave, infeções agudas, gravidez — a decisão cabe ao médico.' }
          ] },
          { id: 'paperwork', title: '5. Recolha os documentos para a comparticipação', content: [
            { kind: 'checklist', items: [
              'Fatura-recibo com o seu NIF',
              'Comprovativo de pagamento',
              'Documento dos tratamentos termais realizados',
              'Cópia ou dados da prescrição',
              'IBAN, se o processo for feito por reembolso',
              'Contacto da contabilidade das termas em caso de pedido do SNS'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'destinations',
      title: 'Para onde ir: 4 destinos fáceis de entender',
      content: [
        { kind: 'paragraph', text: 'Portugal é pequeno, mas as estâncias termais são muito diferentes. É melhor escolher não pela beleza do hotel, mas pela indicação terapêutica da água específica e pela logística: se conseguirá ir aos tratamentos durante 12–14 dias seguidos.' },
        { kind: 'checklist', items: [
          'Caldas da Rainha — histórico Hospital Termal Rainha D. Leonor; conveniente a partir de Lisboa, muitas vezes considerado para queixas reumatológicas, do aparelho locomotor e respiratórias',
          'Termas de Monfortinho — leste de Castelo Branco, mais perto da fronteira espanhola; formato tranquilo, frequentemente escolhido para indicações dermatológicas, respiratórias e reumáticas',
          'Termas de São Pedro do Sul — um dos centros termais mais conhecidos e visitados do país; forte infraestrutura, popular para reumatologia, reabilitação e tratamentos respiratórios',
          'Vidago / Vidago Palace — norte, Trás-os-Montes; conhecido pelas águas minerais e curas hidropínicas, frequentemente associado a indicações digestivas e metabólicas',
          'Se vive no Algarve ou no Alentejo, verifique também as termas mais próximas: por vezes a poupança no transporte é mais importante do que uma marca “topo de gama”',
          'Para um curso com crianças, confirme com antecedência as restrições de idade e a existência de acompanhamento pediátrico'
        ] },
        { kind: 'warning', text: 'Nem todas as indicações são iguais em todas as termas. “Tenho asma” ou “dói-me as costas” não é suficiente: o médico deve cruzar o diagnóstico, a composição da água, os tratamentos e as contraindicações.' }
      ]
    },
    {
      id: 'budget',
      title: 'Quanto custa um curso de 14 dias',
      content: [
        { kind: 'paragraph', text: 'Orçamento realista para um adulto em 2026: componente médica de 220–500 € por 12–14 dias, se escolher um curso terapêutico e não luxury wellness. Depois da aplicação da comparticipação SNS de 35% (até ao limite anual de 110 €), a sua parte costuma ficar em 143–390 €.\n\nVerifique o limite antes de marcar.' },
        { kind: 'checklist', items: [
          'Consulta termal: normalmente 35–60 €',
          'Inscrição / taxa administrativa: 10–25 €',
          'Pacote de tratamentos 12–14 dias: cerca de 180–420 €',
          'Total do tratamento antes da comparticipação: cerca de 220–500 €',
          'Limite anual do SNS: 110 €/ano desde 1 de outubro de 2025 (Portaria 280/2025/1; anteriormente 95 €) — pago diretamente às termas; verifique o limite em vigor em sns.gov.pt',
          'Alojamento: desde 40–70 €/noite num alojamento simples até 120–250 €/noite num hotel termal',
          'Transporte: autocarro/comboio são mais baratos, mas algumas termas são mais práticas apenas de carro',
          'Spa extras, massagens “relax”, cosmética e piscinas normalmente não entram na comparticipação médica'
        ] },
        { kind: 'paragraph', text: 'A forma mais comum de poupar é ir fora de agosto e dos feriados, ficar não no hotel termal, mas num apartamento/local guesthouse próximo, e comprar apenas o pacote médico prescrito pelo médico.' }
      ]
    }
  ],
  costs: [
    { label: 'Comparticipação SNS para tratamentos termais', amountEURMax: 110, note: '35% do custo dos tratamentos, limite anual de 110 € desde 1 de outubro de 2025 (Portaria 280/2025/1; anteriormente 95 € ao abrigo da Portaria 337-C/2018). Verifique o limite em vigor em sns.gov.pt. O pagamento é feito diretamente às termas-aderente.' },
    { label: 'Consulta termal', amountEURMin: 35, amountEURMax: 60, note: 'Primeira avaliação médica nas termas; o preço depende da estância' },
    { label: 'Curso terapêutico de 12–14 dias', amountEURMin: 220, amountEURMax: 500, note: 'Sem alojamento nem transporte; pacotes luxury spa podem ser mais caros' },
    { label: 'Custo efetivo após aplicação da comparticipação', amountEURMin: 143, amountEURMax: 390, note: 'Se o curso for elegível para comparticipação e for aplicado o limite de 110 € do SNS' }
  ],
  sources: [
    { title: 'DGS: termalismo e licenciamento de estabelecimentos termais', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Termas de Portugal: catálogo de termas, indicações e contactos', url: 'https://www.termasdeportugal.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portaria n.º 280/2025/1: limite da comparticipação do SNS aumentado para 110 €/ano desde 1 de outubro de 2025 (altera o regime da Portaria n.º 337-C/2018)', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/280-2025-1', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'SNS: cuidados de saúde e acesso através do número de utente', url: 'https://www.sns.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
