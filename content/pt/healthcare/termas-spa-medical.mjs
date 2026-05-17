export default {
  editorialVoice: 'hackportugal',
  id: 'termas-spa-medical',
  categoryId: 'healthcare',
  title: 'Termas: termas terapêuticas em Portugal e comparticipação SNS',
  tldr: 'Em Portugal, o termalismo não é apenas spa, mas sim tratamentos médicos com água termal. Se o médico de família do SNS prescrever tratamentos termais e você escolher termas-aderentes licenciadas, o SNS comparticipa 35% do custo dos tratamentos, até ao máximo de **110 € por pessoa por ano civil** (novo limite desde 1 de outubro de 2025; anteriormente era 95 €). Um tratamento típico de 14 dias custa 220–500 € sem alojamento. Destinos populares: Caldas da Rainha, Monfortinho, São Pedro do Sul, Vidago.',
  tags: ['termas', 'sns', 'saúde', 'comparticipação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts',
      title: 'O que conta como termas terapêuticas e o que é apenas spa',
      content: [
        { kind: 'paragraph', text: 'Termas, no sentido médico português, são um estabelecimento termal licenciado onde são utilizadas águas minerais naturais com indicações terapêuticas reconhecidas. Existe um médico hidrologista / médico responsável, ficha clínica e tratamentos prescritos: inalações, duches, banhos, lamas, cura hidropínica, massagens como parte do tratamento.' },
        { kind: 'paragraph', text: 'Um hotel spa comum, uma piscina de água aquecida, um sauna circuit ou um pacote wellness para descanso não dão direito à comparticipação SNS. Apenas são comparticipados tratamentos termais prescritos clinicamente em termas aderentes.' },
        { kind: 'checklist', items: [
          'É necessário número de utente SNS',
          'É necessária uma razão médica: reumatologia, aparelho locomotor, vias respiratórias, dermatologia, digestão — depende da água concreta',
          'É necessária referenciação / prescrição de um médico do SNS, normalmente médico de família',
          'As termas devem estar licenciadas pela DGS e participar no sistema de comparticipação',
          'A comparticipação aplica-se aos tratamentos, não ao hotel, alimentação, deslocação ou spa turístico',
          'No local, normalmente continua a ser necessária uma consulta termal inicial antes de começar o tratamento'
        ] }
      ]
    },
    {
      id: 'sns-reimbursement',
      title: 'Como funciona a comparticipação SNS em 2026',
      content: [
        { kind: 'paragraph', text: 'Em maio de 2026, a regra de base é a seguinte: o SNS comparticipa 35% do custo dos tratamentos termais prescritos, até ao máximo de **110 € por utente por ano civil** (limite aumentado desde 1 de outubro de 2025; anteriormente era 95 €). Se o tratamento custar 200 €, o reembolso será de 70 €. Se o tratamento custar 350 €, 35% = 122,50 €, mas receberá no máximo 110 €.' },
        { kind: 'paragraph', text: 'Normalmente, o esquema não funciona como um “desconto na caixa”. Você paga o tratamento às termas, guarda os documentos e entrega-os de acordo com as regras que as termas explicam no local: fatura-recibo com NIF, comprovativo da realização dos tratamentos e prescrição médica / termo de responsabilidade, se necessário.' },
        { kind: 'checklist', items: [
          'Confirme que o seu médico de família emite especificamente uma prescrição de tratamentos termais, e não apenas uma recomendação para “ir às águas”',
          'Antes de reservar, pergunte às termas: “São aderentes à comparticipação do SNS em 2026?”',
          'Confirme qual o mínimo de dias exigido para um tratamento terapêutico: muitas vezes 12–14 dias',
          'Peça um orçamento discriminado: consulta termal, inscrição, tratamentos, spa extras',
          'Pague com NIF na fatura — sem NIF, o reembolso pode tornar-se problemático',
          'Guarde o comprovativo de pagamento e o documento de conclusão do tratamento',
          'Não misture no mesmo valor tratamentos médicos e spa cosmético se quiser uma contabilidade clara para o reembolso'
        ] },
        { kind: 'warning', text: 'O SNS não paga alojamento. 14 dias em São Pedro do Sul ou Vidago podem ser baratos em tratamentos, mas caros em hotel na época alta. Calcule o orçamento completo: tratamento + alojamento + deslocação + alimentação.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Passo a passo: como obter a prescrição e não perder a comparticipação',
      content: [
        { kind: 'substeps', items: [
          { id: 'doctor', title: '1. Marque consulta com o médico de família', content: [
            { kind: 'paragraph', text: 'Explique o diagnóstico e o objetivo: dores nas articulações, rinite/sinusite crónica, bronquite, problemas de pele, recuperação após lesões. Leve exames antigos, relatório médico, lista de medicamentos.' }
          ] },
          { id: 'prescription', title: '2. Obtenha uma prescrição para tratamentos termais', content: [
            { kind: 'paragraph', text: 'Peça ao médico que indique a área terapêutica e a necessidade do tratamento. Para o SNS, é importante uma prescrição médica, não uma recomendação turística.' }
          ] },
          { id: 'choose-termas', title: '3. Escolha termas licenciadas', content: [
            { kind: 'paragraph', text: 'Verifique a unidade na Termas de Portugal e no site das próprias termas. Ligue e confirme: se aceitam prescrição SNS, que documentos são necessários, quantos dias dura o tratamento, se há médico termal nas datas pretendidas.' }
          ] },
          { id: 'onsite', title: '4. Faça a consulta termal no local', content: [
            { kind: 'paragraph', text: 'O médico local adapta o programa: por exemplo, 14 dias de inalações, duches, banhos ou cura hidropínica. Alguns tratamentos são contraindicados em oncologia, insuficiência cardíaca grave, infeções agudas, gravidez — a decisão cabe ao médico.' }
          ] },
          { id: 'paperwork', title: '5. Recolha os documentos para o reembolso', content: [
            { kind: 'checklist', items: [
              'Fatura-recibo com o seu NIF',
              'Comprovativo de pagamento',
              'Documento dos tratamentos termais realizados',
              'Cópia ou dados da prescrição',
              'IBAN, se a submissão for feita por reembolso',
              'Contacto da contabilidade das termas para o caso de pedido do SNS'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'destinations',
      title: 'Para onde ir: 4 destinos fáceis de perceber',
      content: [
        { kind: 'paragraph', text: 'Portugal é pequeno, mas as estâncias termais são muito diferentes. A escolha deve ser feita não pela beleza do hotel, mas pela indicação terapêutica da água concreta e pela logística: se consegue ir aos tratamentos durante 12–14 dias seguidos.' },
        { kind: 'checklist', items: [
          'Caldas da Rainha — histórico Hospital Termal Rainha D. Leonor; conveniente a partir de Lisboa, muitas vezes considerado para reumatologia, queixas do aparelho locomotor e respiratórias',
          'Termas de Monfortinho — leste de Castelo Branco, mais perto da fronteira espanhola; formato tranquilo, muitas vezes escolhido para indicações de pele, respiratórias e reumáticas',
          'Termas de São Pedro do Sul — um dos centros termais mais conhecidos e visitados do país; infraestrutura forte, popular para reumatologia, reabilitação e tratamentos respiratórios',
          'Vidago / Vidago Palace — norte, Trás-os-Montes; conhecido pelas águas minerais e curas hidropínicas, muitas vezes associado a indicações digestivas e metabólicas',
          'Se vive no Algarve ou no Alentejo, verifique também as termas mais próximas: por vezes, a poupança na deslocação é mais importante do que uma marca “topo de gama”',
          'Para um tratamento com crianças, confirme antecipadamente as restrições de idade e a existência de acompanhamento pediátrico'
        ] },
        { kind: 'warning', text: 'Nem todas as indicações são iguais em todas as termas. “Tenho asma” ou “tenho dores nas costas” não é suficiente: o médico deve cruzar o diagnóstico, a composição da água, os tratamentos e as contraindicações.' }
      ]
    },
    {
      id: 'budget',
      title: 'Quanto custa um tratamento de 14 dias',
      content: [
        { kind: 'paragraph', text: 'Orçamento realista para um adulto em 2026: parte médica 220–500 € por 12–14 dias, se escolher um tratamento terapêutico e não luxury wellness. Depois da comparticipação SNS máxima de 110 €, a parte médica efetiva fica muitas vezes entre 110–390 €.' },
        { kind: 'checklist', items: [
          'Consulta termal: normalmente 35–60 €',
          'Inscrição / taxa administrativa: 10–25 €',
          'Pacote de tratamentos 12–14 dias: cerca de 180–420 €',
          'Total do tratamento antes do reembolso: cerca de 220–500 €',
          'Comparticipação SNS máxima: **110 € por ano** (desde 1 de outubro de 2025)',
          'Alojamento: desde 40–70 €/noite num alojamento simples até 120–250 €/noite num hotel termal',
          'Deslocação: autocarro/comboio é mais barato, mas algumas termas são mais convenientes apenas de carro',
          'Spa extras, massagens “relax”, cosmética e piscinas normalmente não entram na comparticipação médica'
        ] },
        { kind: 'paragraph', text: 'A forma mais comum de poupar é ir fora de agosto e dos feriados, ficar não num hotel termal, mas num apartamento/local guesthouse próximo, e comprar apenas o pacote médico prescrito pelo médico.' }
      ]
    }
  ],
  costs: [
    { label: 'Comparticipação SNS para tratamentos termais', amountEURMax: 110, note: '35% do custo dos tratamentos, até ao máximo de 110 € por utente por ano civil (novo limite desde 1 de outubro de 2025)' },
    { label: 'Consulta termal', amountEURMin: 35, amountEURMax: 60, note: 'Observação inicial pelo médico nas termas; o preço depende da estância' },
    { label: 'Tratamento terapêutico de 12–14 dias', amountEURMin: 220, amountEURMax: 500, note: 'Sem alojamento nem deslocação; pacotes luxury spa podem ser mais caros' },
    { label: 'Custo efetivo após o reembolso máximo do SNS', amountEURMin: 110, amountEURMax: 390, note: 'Se o tratamento for elegível para comparticipação e for atingido o limite de 110 €' }
  ],
  sources: [
    { title: 'DGS: termalismo e licenciamento de estabelecimentos termais', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Termas de Portugal: catálogo de termas, indicações e contactos', url: 'https://www.termasdeportugal.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portaria n.º 337-C/2018 (com alterações): regime de comparticipação pelo SNS dos tratamentos termais', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/337-c-2018-117669735', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS: cuidados de saúde e acesso através do número de utente', url: 'https://www.sns.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
