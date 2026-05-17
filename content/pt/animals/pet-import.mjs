export default {
  editorialVoice: 'hackportugal',
  id: 'pet-import',
  categoryId: 'animals',
  title: 'Entrada de animal em Portugal',
  tldr: 'Para cães, gatos e furões: microchip + vacina contra a raiva pelo menos 21 dias antes da entrada + Pet Passport (UE) ou AHC (Animal Health Certificate para países fora da UE). A entrada a partir de países da UE é quase sem obstáculos. A partir de países fora da UE — certificado de um veterinário com acreditação estatal + documentos em inglês ou português.',
  tags: ['animais', 'cão', 'gato', 'entrada'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'basics',
      title: 'Requisitos obrigatórios',
      content: [
        { kind: 'checklist', items: [
          'Microchip ISO 11784/11785 (norma internacional)',
          'Vacinação contra a raiva pelo menos 21 dias antes da entrada (após a primeira vacinação)',
          'Título de anticorpos contra a raiva (para países com alto risco de raiva — análise ao sangue, validade de 30 dias, espera de 3 meses após o teste)',
          'Idade do animal — mínimo 15 semanas (vacina + 21 dias)',
          'Documentos: Pet Passport (para UE/EEE) ou Animal Health Certificate (AHC) — para países fora da UE'
        ]},
        { kind: 'warning', text: 'Para o Egipto, a Turquia e alguns países de África aplicam-se requisitos adicionais. Para a Federação Russa em 2026, a titulação é obrigatória.' }
      ]
    },
    {
      id: 'eu-countries',
      title: 'A partir da UE / EEE',
      content: [
        { kind: 'paragraph', text: 'Pet Passport (europeu), emitido por um veterinário num país da UE. Com este documento, a entrada em Portugal é livre. O controlo na fronteira é mínimo.' }
      ]
    },
    {
      id: 'russia',
      title: 'A partir da Rússia',
      audience: { countryCodes: ['RU'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Microchip + vacina', content: [
            { kind: 'paragraph', text: 'Numa clínica veterinária na Federação Russa. Verifique a compatibilidade do microchip com a norma ISO.' }
          ]},
          { id: 'r2', title: '2. Titulação da raiva', content: [
            { kind: 'paragraph', text: 'Obrigatória para a Federação Russa. O sangue é enviado para um laboratório acreditado (na UE ou em alguns laboratórios na Federação Russa). Anticorpos — pelo menos 0,5 IU/ml.' }
          ]},
          { id: 'r3', title: '3. Espera de 3 meses', content: [
            { kind: 'paragraph', text: 'Devem decorrer 3 meses desde a data da colheita de sangue para titulação até à entrada na UE. Planeie com antecedência.' }
          ]},
          { id: 'r4', title: '4. Certificado f. n.º 1 → f. n.º 5e → AHC', content: [
            { kind: 'paragraph', text: 'A clínica veterinária estatal emite o formulário n.º 1 (para a Federação Russa), que é trocado pelo formulário n.º 5e para exportação. Depois, no posto de controlo veterinário estatal à saída, é necessário obter o AHC em inglês.' }
          ]},
          { id: 'r5', title: '5. Entrada', content: [
            { kind: 'paragraph', text: 'No ponto de entrada na UE (Lisboa, Porto, Faro), é necessário apresentar o AHC + passaporte + microchip. A verificação é realizada pelo posto de inspecção veterinária fronteiriço (BIP).' }
          ]}
        ]}
      ]
    },
    {
      id: 'transport',
      title: 'Transporte',
      content: [
        { kind: 'checklist', items: [
          'Avião — carga (para animais de grande porte) ou cabina (para pequenos até 8 kg). Cada companhia aérea tem as suas próprias regras.',
          'Porta-bagagens do carro — permitido, é necessária uma transportadora ou cinto de segurança',
          'Comboio — normalmente com açaime ou em transportadora',
          'Ferry — é necessário verificar as regras da linha específica'
        ]}
      ]
    },
    {
      id: 'after-arrival',
      title: 'Após a chegada',
      content: [
        { kind: 'checklist', items: [
          'Registo do microchip no SIAC (base de dados portuguesa) — numa clínica veterinária, cerca de 20 €',
          'Obter o Pet Passport português — pode ser útil para viagens de regresso',
          'Vacinas anuais — raiva, leptospirose, etc.',
          'Para cães de raças perigosas são necessários licenciamento e seguro',
          'Na praia e na cidade, são frequentemente necessários açaime e trela'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Microchip', amountEURMin: 30, amountEURMax: 60 },
    { label: 'Vacina contra a raiva', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Titulação', amountEURMin: 60, amountEURMax: 150 },
    { label: 'AHC / Pet Passport', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Voo do animal', amountEURMin: 100, amountEURMax: 500, note: 'depende do tamanho e da distância' },
    { label: 'Registo no SIAC', amountEURMin: 15, amountEURMax: 25 }
  ],
  sources: [
    { title: 'DGAV — Direcção-Geral de Alimentação e Veterinária', url: 'https://www.dgav.pt/animais/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Comissão Europeia — Viajar com animais de companhia', url: 'https://food.ec.europa.eu/animals/movement-pets_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'SIAC — Sistema de Informação de Animais de Companhia', url: 'https://siac.vet/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
