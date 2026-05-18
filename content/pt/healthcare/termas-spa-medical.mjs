export default {
  editorialVoice: 'hackportugal',
  id: 'termas-spa-medical',
  categoryId: 'healthcare',
  title: 'Termas: termas medicinais em Portugal e comparticipação SNS',
  tldr: 'Em Portugal, o termalismo não é apenas spa, mas sim procedimentos médicos com água termal. Se o médico de família do SNS prescrever tratamentos termais e você escolher termas-aderentes licenciadas, o SNS comparticipa **35% do custo dos tratamentos** através de **pagamento da comparticipação diretamente ao estabelecimento termal-aderente** (e não por reembolso ao utente). O limite anual base por utente está definido na Portaria n.º 337-C/2018 — 95 €; periodicamente, o Ministério da Saúde pode publicar uma portaria/despacho atualizado — **verifique o limite e as condições atuais em sns.gov.pt e no estabelecimento termal escolhido antes de marcar**. Um tratamento típico de 14 dias custa 220–500 € sem alojamento. Destinos populares: Caldas da Rainha, Monfortinho, São Pedro do Sul, Vidago.',
  tags: ['termas', 'sns', 'saúde', 'comparticipação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts',
      title: 'O que conta como termas medicinais e o que é apenas spa',
      content: [
        { kind: 'paragraph', text: 'Termas, no sentido médico português, são um estabelecimento termal licenciado, onde são utilizadas águas minerais naturais com indicações terapêuticas reconhecidas. Existe médico hidrologista / médico responsável, ficha clínica e tratamentos prescritos: inalações, duches, banhos, lamas, tratamento por ingestão, massagens como parte do tratamento.' },
        { kind: 'paragraph', text: 'Um hotel spa comum, uma piscina de água aquecida, um sauna circuit ou um pacote wellness de lazer não dão direito a comparticipação SNS. Só são comparticipados tratamentos termais prescritos clinicamente em termas participantes.' },
        { kind: 'checklist', items: [
          'É necessário número de utente SNS',
          'É necessário um motivo médico: reumatologia, aparelho locomotor, vias respiratórias, dermatologia, digestão — depende da água específica',
          'É necessária referenciação / prescrição por um médico do SNS, normalmente médico de família',
          'As termas devem estar licenciadas pela DGS e participar no sistema de comparticipação',
          'A comparticipação aplica-se aos tratamentos, não ao hotel, alimentação, deslocação ou spa turístico',
          'No local, normalmente continua a ser necessária uma consulta termal inicial antes de iniciar o tratamento'
        ] }
      ]
    },
    {
      id: 'sns-reimbursement',
      title: 'Como funciona a comparticipação SNS em 2026',
      content: [
        { kind: 'paragraph', text: 'Regra base (Portaria n.º 337-C/2018): o SNS comparticipa **35% do custo dos tratamentos termais prescritos**, mas até ao limite anual por utente. O limite base da portaria é **95 €/ano**. O limite pode ser revisto por portaria/despacho separado — antes de marcar, verifique o valor atual em sns.gov.pt e/ou diretamente nas termas-aderente. A comparticipação é paga **diretamente ao estabelecimento termal**, e não ao utente: você paga a sua parte (65%) às termas, e os 35% (até ao limite) são transferidos pelo SNS para o estabelecimento. Exemplo: se o tratamento custar 200 €, a sua parte é 130 €, e o SNS transferirá 70 € para as termas.' },
        { kind: 'paragraph', text: 'Normalmente, o processo não funciona como um “desconto na caixa”. Você paga o tratamento às termas, guarda os documentos e entrega-os de acordo com as regras explicadas no local pelas termas: fatura-recibo com NIF, comprovativo da realização dos tratamentos e prescrição médica / termo de responsabilidade, se exigido.' },
        { kind: 'checklist', items: [
          'Confirme que o seu médico de família emite especificamente uma prescrição de tratamentos termais, e não apenas uma recomendação para “ir a águas”',
          'Antes de reservar, pergunte às termas: “São aderentes à comparticipação do SNS em 2026?”',
          'Confirme qual o mínimo de dias exigido para o tratamento terapêutico: frequentemente 12–14 dias',
          'Peça um orçamento detalhado: consulta termal, inscrição, tratamentos, spa extras',
          'Pague com NIF na fatura — sem NIF, a comparticipação pode tornar-se problemática',
          'Guarde o comprovativo de pagamento e o documento de conclusão do tratamento',
          'Não misture no mesmo valor procedimentos médicos e spa cosmético, se quiser uma contabilidade clara para a comparticipação'
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
            { kind: 'paragraph', text: 'Explique o diagnóstico e o objetivo: dores nas articulações, rinite/sinusite crónica, bronquite, problemas de pele, recuperação após lesões. Leve exames antigos, relatório médico e lista de medicamentos.' }
          ] },
          { id: 'prescription', title: '2. Obtenha a prescrição para tratamentos termais', content: [
            { kind: 'paragraph', text: 'Peça ao médico que indique a área terapêutica e a necessidade do tratamento. Para o SNS, o que importa é uma prescrição médica, não uma recomendação turística.' }
          ] },
          { id: 'choose-termas', title: '3. Escolha termas licenciadas', content: [
            { kind: 'paragraph', text: 'Verifique a unidade na Termas de Portugal e no site das próprias termas. Telefone e confirme: se aceitam prescrição SNS, que documentos são necessários, quantos dias dura o tratamento e se há médico termal nas datas pretendidas.' }
          ] },
          { id: 'onsite', title: '4. Faça a consulta termal no local', content: [
            { kind: 'paragraph', text: 'O médico local adapta o programa: por exemplo, 14 dias de inalações, duches, banhos ou tratamento por ingestão. Alguns procedimentos são contraindicados em oncologia, insuficiência cardíaca grave, infeções agudas, gravidez — a decisão cabe ao médico.' }
          ] },
          { id: 'paperwork', title: '5. Recolha os documentos para a comparticipação', content: [
            { kind: 'checklist', items: [
              'Fatura-recibo com o seu NIF',
              'Comprovativo de pagamento',
              'Documento sobre os tratamentos termais realizados',
              'Cópia ou dados da prescrição',
              'IBAN, se o processo for por reembolso',
              'Contacto da contabilidade das termas para eventual pedido do SNS'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'destinations',
      title: 'Para onde ir: 4 destinos claros',
      content: [
        { kind: 'paragraph', text: 'Portugal é pequeno, mas as estâncias termais são muito diferentes. A escolha deve ser feita não pela beleza do hotel, mas pela indicação terapêutica da água específica e pela logística: se conseguirá ir aos tratamentos durante 12–14 dias seguidos.' },
        { kind: 'checklist', items: [
          'Caldas da Rainha — histórico Hospital Termal Rainha D. Leonor; conveniente a partir de Lisboa, frequentemente considerado para queixas reumatológicas, locomotoras e respiratórias',
          'Termas de Monfortinho — leste de Castelo Branco, mais perto da fronteira espanhola; formato tranquilo, frequentemente escolhido para indicações de pele, respiratórias e reumáticas',
          'Termas de São Pedro do Sul — um dos centros termais mais conhecidos e visitados do país; forte infraestrutura, popular para reumatologia, reabilitação e tratamentos respiratórios',
          'Vidago / Vidago Palace — norte, Trás-os-Montes; conhecido pelas águas minerais e tratamentos por ingestão, frequentemente associado a indicações digestivas e metabólicas',
          'Se vive no Algarve ou no Alentejo, verifique também as termas mais próximas: por vezes, a poupança na deslocação é mais importante do que uma marca “topo de gama”',
          'Para um tratamento com crianças, confirme antecipadamente os limites de idade e a existência de acompanhamento pediátrico'
        ] },
        { kind: 'warning', text: 'Nem todas as indicações são iguais em todas as termas. “Tenho asma” ou “tenho dores nas costas” não é suficiente: o médico deve cruzar o diagnóstico, a composição da água, os procedimentos e as contraindicações.' }
      ]
    },
    {
      id: 'budget',
      title: 'Quanto custa um tratamento de 14 dias',
      content: [
        { kind: 'paragraph', text: 'Orçamento realista para um adulto em 2026: parte médica 220–500 € por 12–14 dias, se escolher um tratamento terapêutico e não um luxury wellness. Depois da aplicação da comparticipação SNS de 35% (até ao limite anual base de 95 € ou ao limite atual), a sua parte é normalmente 130–400 €. Verifique o limite antes de marcar.' },
        { kind: 'checklist', items: [
          'Consulta termal: normalmente 35–60 €',
          'Inscrição / taxa administrativa: 10–25 €',
          'Pacote de tratamentos de 12–14 dias: cerca de 180–420 €',
          'Total do tratamento antes da comparticipação: cerca de 220–500 €',
          'Limite anual base SNS: **95 €/ano** (Portaria 337-C/2018) — pago diretamente às termas; verifique o limite atual em sns.gov.pt',
          'Alojamento: desde 40–70 €/noite num alojamento simples até 120–250 €/noite num hotel termal',
          'Deslocação: autocarro/comboio é mais barato, mas algumas termas são mais práticas apenas de carro',
          'Spa extras, massagens “relax”, cosmética e piscinas normalmente não entram na comparticipação médica'
        ] },
        { kind: 'paragraph', text: 'A forma mais comum de poupar é ir fora de agosto e dos feriados, ficar não num hotel termal, mas num apartamento/local guesthouse próximo, e comprar apenas o pacote médico prescrito pelo médico.' }
      ]
    }
  ],
  costs: [
    { label: 'Comparticipação SNS para tratamentos termais', amountEURMax: 95, note: '35% do custo dos tratamentos, limite anual base da Portaria 337-C/2018 = 95 €. Podem existir portaria/despacho mais recentes — verifique em sns.gov.pt. O pagamento é feito diretamente às termas-aderente.' },
    { label: 'Consulta termal', amountEURMin: 35, amountEURMax: 60, note: 'Consulta inicial do médico nas termas; o preço depende da estância' },
    { label: 'Tratamento terapêutico de 12–14 dias', amountEURMin: 220, amountEURMax: 500, note: 'Sem alojamento nem deslocação; pacotes luxury spa podem ser mais caros' },
    { label: 'Custo efetivo após aplicação da comparticipação', amountEURMin: 130, amountEURMax: 405, note: 'Se o tratamento for elegível para comparticipação e for aplicado o limite base de 95 € do SNS' }
  ],
  sources: [
    { title: 'DGS: termalismo e licenciamento de estabelecimentos termais', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Termas de Portugal: catálogo de termas, indicações e contactos', url: 'https://www.termasdeportugal.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portaria n.º 337-C/2018 (com alterações): regime de comparticipação pelo SNS dos tratamentos termais', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/337-c-2018-117669735', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS: cuidados de saúde e acesso através do número de utente', url: 'https://www.sns.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
