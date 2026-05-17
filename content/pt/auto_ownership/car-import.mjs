export default {
  editorialVoice: 'hackportugal',
  id: 'car-import',
  categoryId: 'auto_ownership',
  title: 'Importação de um automóvel para Portugal',
  tldr: 'Para residentes existe o benefício **transferência de residência** — importação sem ISV se estiverem cumpridas as condições: ter sido proprietário do automóvel ≥ 6 meses antes da mudança, ter vivido no país anterior ≥ 12 meses, apresentar os documentos no prazo de 12 meses após se tornar residente. Caso contrário — ISV + IUC anual. Se o automóvel for importado de um país **fora da UE**, podem ainda aplicar-se desalfandegamento, direitos aduaneiros e IVA, se não houver isenção por transferência de residência. Para **BEV 100%** o ISV é normalmente 0 €; híbridos/PHEV — taxas especiais.',
  tags: ['automóvel', 'desalfandegamento', 'isv', 'matrícula'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'options',
      title: 'Duas vias',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'A. Benefício (transferência de residência) — sem ISV', content: [
            { kind: 'checklist', items: [
              'Você torna-se residente em Portugal (obteve autorização de residência / CRUE)',
              'Foi proprietário do automóvel ≥ 6 meses antes da mudança',
              'Viveu no país de origem ≥ 12 meses',
              'Apresentar os documentos no prazo de 12 meses a contar da data em que se tornou residente',
              'O automóvel não é vendido durante 12 meses após a importação',
              'Aplica-se apenas a UM automóvel por pessoa'
            ]}
          ]},
          { id: 'o2', title: 'B. Importação normal — com ISV', content: [
            { kind: 'paragraph', text: 'Se as condições do benefício não forem cumpridas — ISV (Imposto sobre Veículos). É calculado com base na cilindrada + CO2 + idade. Para um automóvel novo pode ser 5 000-30 000 €. Para **100% elétricos** o ISV é normalmente 0 €, mas mantêm-se os custos de registo. Para híbridos/plug-in híbridos aplicam-se taxas e condições especiais. Na importação a partir de fora da UE, verificam-se separadamente os direitos aduaneiros e o IVA.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documentos',
      content: [
        { kind: 'checklist', items: [
          'Documento original do veículo / livrete ou certificado de matrícula (normalmente apostila + tradução)',
          'Passaporte + autorização de residência',
          'NIF',
          'Comprovativo de morada em Portugal',
          '“Carta Verde” válida',
          'Fatura de compra (se o automóvel for novo ou tiver sido comprado recentemente)',
          'Comprovativo de residência no estrangeiro ≥ 12 meses (CRUE/autorização de residência no país anterior, faturas, contrato de arrendamento)',
          'Certificado de conformidade (CoC) do fabricante — para automóveis da UE'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Passo a passo',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Entrada em Portugal', content: [
            { kind: 'paragraph', text: 'Entrar com o automóvel usando as matrículas atuais. Notificar a Autoridade Tributária no prazo de 20 dias através do e-AT.' }
          ]},
          { id: 's2', title: '2. Inspeção periódica obrigatória (IPO)', content: [
            { kind: 'paragraph', text: 'Num dos centros de IPO. ~40 €. Obter o certificado B (para automóvel não registado).' }
          ]},
          { id: 's3', title: '3. Registo: DAV na AT e matrícula', content: [
            { kind: 'paragraph', text: 'Processo correto: 1) homologação técnica/inspeção/CoC, quando necessário, através do IMT; 2) entrega da **DAV (Declaração Aduaneira de Veículo)** na AT e pagamento do ISV ou obtenção de isenção; 3) após a atribuição da matrícula, mandar fazer as chapas; 4) registar o automóvel no IRN/Conservatória/Automóvel Online.' }
          ]},
          { id: 's4', title: '4. ISV — pagamento ou isenção', content: [
            { kind: 'paragraph', text: 'Na DAV, indicar o regime: pagar o ISV ou pedir **isenção de ISV por transferência de residência** com os documentos. Para automóveis de fora da UE, tratar separadamente o regime aduaneiro e verificar a isenção de direitos aduaneiros/IVA.' }
          ]},
          { id: 's5', title: '5. Receber o Documento Único Automóvel (certificado de matrícula)', content: [
            { kind: 'paragraph', text: 'Documento único = certificado de matrícula + registo. Chega por correio entre 10-30 dias.' }
          ]},
          { id: 's6', title: '6. Substituir as matrículas', content: [
            { kind: 'paragraph', text: 'Mandar fazer as matrículas portuguesas (~50 €). Instalar. Agora o automóvel fica totalmente integrado no sistema português.' }
          ]},
          { id: 's7', title: '7. Fazer um seguro português', content: [
            { kind: 'paragraph', text: 'Mudar para um seguro português (Tranquilidade, Liberty, Fidelidade, etc.). A “Carta Verde” anterior deixa de ser relevante.' }
          ]}
        ]}
      ]
    },
    {
      id: 'annual',
      title: 'Obrigações anuais',
      content: [
        { kind: 'checklist', items: [
          'IUC (Imposto Único de Circulação) — imposto anual, por cilindrada + CO2. 30-500 €/ano',
          'Seguro — 250-700 €/ano',
          'IPO (inspeção periódica obrigatória) — de 2 em 2 anos para automóveis até 8 anos, anualmente para os mais antigos',
          'Via Verde (pagamento de portagens) — opcional'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IPO (inspeção periódica obrigatória)', amountEUR: 40 },
    { label: 'Registo IMT + DUA', amountEURMin: 55, amountEURMax: 80 },
    { label: 'Matrículas', amountEURMin: 30, amountEURMax: 80 },
    { label: 'ISV (se não houver benefício)', amountEURMin: 500, amountEURMax: 20000, note: 'por cilindrada/CO2/idade' },
    { label: 'IUC anual', amountEURMin: 30, amountEURMax: 500 }
  ],
  timelineDaysMin: 10,
  timelineDaysMax: 60,
  sources: [
    { title: 'Portal das Finanças — ISV e transferência de residência', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IMT — Registo de veículo', url: 'https://www.imt-ip.pt/sites/imtt/portugues/Paginas/imtt.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Importar veículo', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/importar-um-veiculo-para-portugal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
