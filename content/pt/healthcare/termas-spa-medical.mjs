export default {
  editorialVoice: 'hackportugal',
  id: 'termas-spa-medical',
  categoryId: 'healthcare',
  title: 'Termas: termas terapêuticas em Portugal e comparticipação SNS',
  tldr: 'Em Portugal, o termalismo não é apenas spa, mas sim tratamentos médicos com água termal. Se o médico de família do SNS prescrever tratamentos termais e você escolher termas-aderentes licenciadas, o SNS comparticipa 35% do custo dos tratamentos, até ao máximo de 95 € por pessoa por ano. Um tratamento típico de 14 dias custa 220–500 € sem alojamento; após a comparticipação, fica em cerca de 145–405 €. Destinos populares: Caldas da Rainha, Monfortinho, São Pedro do Sul, Vidago.',
  tags: ['termas', 'sns', 'saúde', 'comparticipação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts',
      title: 'O que conta como termas terapêuticas e o que é apenas spa',
      content: [
        { kind: 'paragraph', text: 'Termas, no sentido médico português, são um estabelecimento termal licenciado, onde são utilizadas águas minerais naturais com indicações terapêuticas reconhecidas. Há médico hidrologista / médico responsável, ficha clínica e tratamentos prescritos: inalações, duches, banhos, lamas, cura de bebida, massagens como parte do tratamento.' },
        { kind: 'paragraph', text: 'Um hotel spa comum, uma piscina de água aquecida, um circuito de sauna ou um pacote wellness de lazer não dão direito a comparticipação SNS. Só são comparticipados tratamentos termais prescritos clinicamente em termas participantes.' },
        { kind: 'checklist', items: [
          'É necessário número de utente SNS',
          'É necessária uma razão médica: reumatologia, aparelho locomotor, vias respiratórias, dermatologia, digestão — depende da água específica',
          'É necessária referenciação / prescrição de um médico do SNS, normalmente o médico de família',
          'As termas devem estar licenciadas pela DGS e participar no sistema de comparticipação',
          'A comparticipação aplica-se aos tratamentos, não ao hotel, alimentação, deslocação ou spa turístico',
          'No local, normalmente continua a ser necessária uma consulta termal inicial antes do início do tratamento'
        ] }
      ]
    },
    {
      id: 'sns-reimbursement',
      title: 'Como funciona a comparticipação SNS em 2026',
      content: [
        { kind: 'paragraph', text: 'Em abril de 2026, a regra de base mantém-se: o SNS comparticipa 35% do custo dos tratamentos termais prescritos, mas não mais de 95 € por utente por ano civil. Se o tratamento custar 200 €, o reembolso será de 70 €. Se o tratamento custar 350 €, 35% = 122,50 €, mas receberá no máximo 95 €.' },
        { kind: 'paragraph', text: 'Normalmente, o regime não funciona como um “desconto na caixa”. Você paga o tratamento às termas, guarda os documentos e submete-os de acordo com as regras que as termas explicam no local: fatura-recibo com NIF, comprovativo da realização dos tratamentos e prescrição médica / termo de responsabilidade, se necessário.' },
        { kind: 'checklist', items: [
          'Confirme que o seu médico de família emite uma prescrição de tratamentos termais, e não apenas uma recomendação para “ir a banhos”',
          'Antes de reservar, pergunte às termas: “São aderentes à comparticipação do SNS em 2026?”',
          'Confirme qual é o mínimo de dias exigido para o tratamento terapêutico: muitas vezes 12–14 dias',
          'Peça um orçamento discriminado: consulta termal, inscrição, tratamentos, extras de spa',
          'Pague com NIF na fatura — sem NIF, o reembolso pode tornar-se problemático',
          'Guarde o comprovativo de pagamento e o documento de conclusão do tratamento',
          'Não misture no mesmo valor tratamentos médicos e spa cosmético, se quiser uma contabilidade clara para o reembolso'
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
            { kind: 'paragraph', text: 'Explique o diagnóstico e o objetivo: dores articulares, rinite/sinusite crónica, bronquite, problemas de pele, recuperação após lesões. Leve exames antigos, relatório médico, lista de medicamentos.' }
          ] },
          { id: 'prescription', title: '2. Obtenha prescrição para tratamentos termais', content: [
            { kind: 'paragraph', text: 'Peça ao médico que indique a área terapêutica e a necessidade do tratamento. Para o SNS, o que importa é a prescrição médica, não uma recomendação turística.' }
          ] },
          { id: 'choose-termas', title: '3. Escolha termas licenciadas', content: [
            { kind: 'paragraph', text: 'Verifique o estabelecimento na Termas de Portugal e no site das próprias termas. Ligue e confirme: se aceitam prescrição SNS, que documentos são necessários, quantos dias dura o tratamento, se há médico termal nas datas pretendidas.' }
          ] },
          { id: 'onsite', title: '4. Faça a consulta termal no local', content: [
            { kind: 'paragraph', text: 'O médico local adapta o programa: por exemplo, 14 dias de inalações, duches, banhos ou cura de bebida. Alguns tratamentos são contraindicados em caso de oncologia, insuficiência cardíaca grave, infeções agudas, gravidez — a decisão cabe ao médico.' }
          ] },
          { id: 'paperwork', title: '5. Recolha os documentos para o reembolso', content: [
            { kind: 'checklist', items: [
              'Fatura-recibo com o seu NIF',
              'Comprovativo de pagamento',
              'Documento dos tratamentos termais realizados',
              'Cópia ou dados da prescrição',
              'IBAN, se a submissão for feita por reembolso',
              'Contacto da contabilidade das termas para eventual pedido do SNS'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'destinations',
      title: 'Para onde ir: 4 destinos fáceis de compreender',
      content: [
        { kind: 'paragraph', text: 'Portugal é pequeno, mas as estâncias termais são muito diferentes. A escolha deve ser feita não pela beleza do hotel, mas pela indicação terapêutica da água específica e pela logística: se conseguirá ir aos tratamentos durante 12–14 dias seguidos.' },
        { kind: 'checklist', items: [
          'Caldas da Rainha — histórico Hospital Termal Rainha D. Leonor; conveniente a partir de Lisboa, muitas vezes considerado para queixas reumatológicas, do aparelho locomotor e respiratórias',
          'Termas de Monfortinho — leste de Castelo Branco, mais perto da fronteira espanhola; formato tranquilo, frequentemente escolhido para indicações cutâneas, respiratórias e reumáticas',
          'Termas de São Pedro do Sul — um dos centros termais mais conhecidos e visitados do país; boa infraestrutura, popular para reumatologia, reabilitação e tratamentos respiratórios',
          'Vidago / Vidago Palace — norte, Trás-os-Montes; conhecido pelas águas minerais e curas de bebida, frequentemente associado a indicações digestivas e metabólicas',
          'Se vive no Algarve ou no Alentejo, verifique também as termas mais próximas: por vezes, a poupança na deslocação é mais importante do que uma marca “de topo”',
          'Para um tratamento com crianças, confirme antecipadamente os limites de idade e a existência de acompanhamento pediátrico'
        ] },
        { kind: 'warning', text: 'Nem todas as indicações são iguais em todas as termas. “Tenho asma” ou “doem-me as costas” não é suficiente: o médico deve cruzar o diagnóstico, a composição da água, os tratamentos e as contraindicações.' }
      ]
    },
    {
      id: 'budget',
      title: 'Quanto custa um tratamento de 14 dias',
      content: [
        { kind: 'paragraph', text: 'Orçamento realista para um adulto em 2026: parte médica de 220–500 € por 12–14 dias, se escolher um tratamento terapêutico e não luxury wellness. Após a comparticipação SNS máxima de 95 €, a parte médica efetiva fica muitas vezes em 145–405 €.' },
        { kind: 'checklist', items: [
          'Consulta termal: normalmente 35–60 €',
          'Inscrição / taxa administrativa: 10–25 €',
          'Pacote de tratamentos 12–14 dias: cerca de 180–420 €',
          'Total do tratamento antes do reembolso: cerca de 220–500 €',
          'Comparticipação SNS máxima: 95 € por ano',
          'Alojamento: desde 40–70 €/noite num alojamento simples até 120–250 €/noite num hotel termal',
          'Deslocação: autocarro/comboio é mais barato, mas para algumas termas é mais conveniente ir de carro',
          'Extras de spa, massagens “relax”, cosmética e piscinas normalmente não entram na comparticipação médica'
        ] },
        { kind: 'paragraph', text: 'A forma mais comum de poupar é ir fora de agosto e dos feriados, ficar não num hotel termal mas num apartamento/guesthouse local nas proximidades, e comprar apenas o pacote médico prescrito pelo médico.' }
      ]
    }
  ],
  costs: [
    { label: 'Comparticipação SNS para tratamentos termais', amountEURMax: 95, note: '35% do custo dos tratamentos, mas no máximo 95 € por utente por ano civil' },
    { label: 'Consulta termal', amountEURMin: 35, amountEURMax: 60, note: 'Consulta médica inicial nas termas; o preço depende da estância' },
    { label: 'Tratamento terapêutico de 12–14 dias', amountEURMin: 220, amountEURMax: 500, note: 'Sem alojamento nem deslocação; pacotes luxury spa podem ser mais caros' },
    { label: 'Custo efetivo após o reembolso máximo do SNS', amountEURMin: 145, amountEURMax: 405, note: 'Se o tratamento for elegível para comparticipação e for atingido o limite de 95 €' }
  ],
  sources: [
    { title: 'DGS: termalismo e licenciamento de estabelecimentos termais', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Termas de Portugal: diretório de termas, indicações e contactos', url: 'https://www.termasdeportugal.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portaria n.º 337-C/2018: regime de comparticipação pelo SNS dos tratamentos termais', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/337-c-2018-117669735', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS: cuidados de saúde e acesso através do número de utente', url: 'https://www.sns.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
