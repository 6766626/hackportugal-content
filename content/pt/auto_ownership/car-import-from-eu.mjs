export default {
  editorialVoice: 'hackportugal',
  id: 'car-import-from-eu',
  categoryId: 'auto_ownership',
  title: 'Importação de automóvel da UE — procedimento detalhado',
  tldr: 'Importar um automóvel da UE (Alemanha, França, Espanha, Polónia, Países Baixos, Itália) é popular devido à diferença de preços de cerca de 20-30%. Procedimento: 1) DAV (declaração aduaneira de veículos) no prazo de 20 dias; 2) ISV (depende da cilindrada, CO₂, idade — para usados há reduções parciais até 65%); 3) IUC anualmente; 4) Matrícula (chapa de matrícula portuguesa) no IMT; 5) IPO (inspeção técnica); 6) COC ou certificado conformidade. Para veículos elétricos novos — ISV 0%. Em caso de mudança de residência (transferência residência) — isenção total de ISV sob condições de posse de 6+ meses.',
  tags: ['importação', 'automóvel', 'ue', 'isv'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'why',
      title: '💡 Porque se importa da UE',
      content: [
        { kind: 'checklist', items: [
          '💰 Preço: o mercado alemão de automóveis usados é 20-30% mais barato do que o português',
          '🔧 Escolha: em Portugal há uma oferta limitada de modelos/configurações específicos',
          '🏎️ Segmento: o segmento premium (BMW, Audi, Mercedes) em Portugal está pouco representado; compra-se frequentemente na Alemanha/Países Baixos',
          '📋 Transparência: TÜV alemão = histórico detalhado',
          '⚡ Veículos elétricos: grande oferta nos Países Baixos/Alemanha',
          '🔙 Não compensa: modelos de grande volume (Renault Clio, VW Polo) — a diferença é pequena e o transporte custa dinheiro'
        ]}
      ]
    },
    {
      id: 'overall-cost',
      title: '💰 Custo total da importação',
      content: [
        { kind: 'paragraph', text: 'Orçamento aproximado para um BMW 318d usado de 2020, comprado na Alemanha por 18 000 €:' },
        { kind: 'checklist', items: [
          'Custo do automóvel na Alemanha: 18 000 €',
          'Transporte (camião porta-automóveis Alemanha → Portugal): 1 200-1 800 € ou condução por conta própria (combustível + motéis ~400 €)',
          'ISV (imposto sobre a matrícula): 1 500-3 500 € (depende da cilindrada e do CO₂; para um automóvel com 5 anos, redução de 40%)',
          'Registo no IMT + matrícula: 135 €',
          'IPO (inspeção técnica): 40 €',
          'Seguro para o primeiro ano: 400-800 €',
          'Total: ~21 500-24 700 €',
          'O mesmo automóvel em Portugal: 23 000-26 000 €',
          'Poupança: 1 500-4 500 €'
        ]},
        { kind: 'warning', text: 'A poupança nem sempre é enorme — calcule um caso concreto. Para automóveis abaixo de 10 000 €, a poupança é frequentemente absorvida pelo transporte. Para o segmento premium a partir de 20 000 € — normalmente compensa.' }
      ]
    },
    {
      id: 'step-by-step',
      title: '📋 Procedimento passo a passo',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Passo 1: Compra na UE', content: [
            { kind: 'checklist', items: [
              'Procurar através de mobile.de, autoscout24.com, autotrader.nl',
              'Verificar o automóvel presencialmente (ou através de um inspetor especializado por 100-200 €)',
              'Contrato de compra e venda, assinatura de ambas as partes',
              'O vendedor fornece: COC (Certificate of Conformity) — obrigatório, caso contrário haverá problemas na matrícula em Portugal',
              'Contrato + fatura + COC + documento de propriedade do veículo (Fahrzeugbrief / Teil II na Alemanha) — todos os originais',
              '⚠️ Matrículas de exportação (Ausfuhrkennzeichen na Alemanha) — matrícula temporária de 5-30 dias para a deslocação'
            ]}
          ]},
          { id: 'p2', title: 'Passo 2: Deslocação / transporte para Portugal', content: [
            { kind: 'checklist', items: [
              'Por conta própria: combustível + portagens + motéis, 1-3 dias a partir da Alemanha',
              'Camião porta-automóveis: 1 200-1 800 €, 5-10 dias (empresas: Berneria, Autos Deluxe, Finsterwalder)',
              'Para Portugal — entrada livre, sem alfândega (UE)',
              'Seguro para a deslocação: temporário de 30 dias com green card — 50-150 €'
            ]}
          ]},
          { id: 'p3', title: 'Passo 3: DAV na AT (no prazo de 20 dias)', content: [
            { kind: 'checklist', items: [
              'Declaração Aduaneira de Veículo — é obrigatório submeter na Autoridade Tributária no prazo de 20 dias úteis após a importação',
              'Submissão: através do Portal das Finanças (NIF + CMD) → IVA/ISV → DAV',
              'Anexar: COC, contrato, documento alemão do automóvel, VIN, fotografias',
              'A AT calcula o ISV com base nas características',
              'Pagamento do ISV: cerca de 30 dias para pagar'
            ]}
          ]},
          { id: 'p4', title: 'Passo 4: ISV — cálculo e pagamento', content: [
            { kind: 'checklist', items: [
              'ISV = Componente Cilindrada (imposto sobre a cilindrada) + Componente Ambiental (imposto sobre CO₂)',
              'Escalão por cilindrada: 10-30 € por cada 250 cm³ em motores de combustão pequenos → 3-4+ € por cm³ para motores grandes',
              'Escalão de CO₂: 5-350 € por cada g/km acima dos valores-limite',
              'Redução para usados: 5-20% no 1.º ano, até 65% após 5 anos',
              '0% ISV: veículos elétricos (BEV)',
              'Tarifa reduzida: PHEV com autonomia >50 km',
              '💡 Simulador: portaldasfinancas.gov.pt → Simuladores → ISV'
            ]}
          ]},
          { id: 'p5', title: 'Passo 5: Matrícula (chapa de matrícula portuguesa)', content: [
            { kind: 'checklist', items: [
              'Após o pagamento do ISV — a AT emite o certificado desalfandegamento',
              'Com ele, dirija-se ao IMT (Instituto da Mobilidade e dos Transportes)',
              'Marcação em portal.imt-ip.pt → Matrícula — taxa 135 €',
              'Recebe: Documento Único Automóvel (DUA) + matrículas portuguesas',
              'Prazo: 2-4 semanas'
            ]}
          ]},
          { id: 'p6', title: 'Passo 6: IPO (inspeção técnica)', content: [
            { kind: 'checklist', items: [
              'Obrigatória após a importação — em qualquer centro certificado',
              'Custo: ~40 €',
              'Verificam: emissões, travões, luzes, segurança',
              'O TÜV alemão não conta — é necessário fazer novamente a IPO',
              'Normalmente passa sem problemas se o TÜV alemão estiver válido'
            ]}
          ]},
          { id: 'p7', title: 'Passo 7: Seguro e IUC', content: [
            { kind: 'checklist', items: [
              'Seguro permanente — obrigatório antes da primeira viagem. 400-1200 €/ano',
              'IUC (imposto anual) — calculado automaticamente, pagamento em abril',
              'Cartões EDP / Galp para postos de combustível com descontos',
              'Via Verde — para portagens'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'relocation-exemption',
      title: '✨ Isenção de ISV em caso de mudança de residência (importante)',
      content: [
        { kind: 'paragraph', text: 'Se você se mudar para Portugal (transferência de residência) — pode importar o automóvel com ISENÇÃO TOTAL de ISV.' },
        { kind: 'checklist', items: [
          '📅 Condições: ter vivido no país de partida ≥ 6 meses antes da mudança',
          '🚗 Condições: o automóvel ser seu há ≥ 6 meses antes da mudança (provar: certificado de matrícula + seguro + faturas de manutenção)',
          '📅 Prazo de submissão: 12 meses após se tornar residente em Portugal',
          '🚫 Não pode vender durante 12 meses após a importação (caso contrário, o ISV será cobrado retroativamente)',
          '📄 Documentos: certificado de transferência de residência do MNE (consulado de Portugal no país de partida) + documentos do automóvel + comprovativo de morada em Portugal',
          '💡 Poupança enorme: o ISV normalmente é 2-5 mil € para um automóvel médio — gratuito se houver isenção',
          '⚠️ Se mudou o objetivo da deslocação / comprou o automóvel recentemente — a isenção não se aplica'
        ]}
      ]
    },
    {
      id: 'common-issues',
      title: '🆘 Dificuldades frequentes',
      content: [
        { kind: 'checklist', items: [
          'Sem COC: sem ele, o ISV é calculado pela tarifa máxima + a matrícula fica bloqueada; encomendar ao fabricante na Alemanha custa 200-500 €, espera de 4-8 semanas',
          'VIN não reconhecido: é necessária uma inspeção técnica no IMT — 200-400 €',
          'Mais de 25 anos / clássico: categoria de matrícula separada («veículo histórico»), ISV mais barato, mas há restrições de emissões',
          'Modificações (tuning, rodas grandes): nem tudo é aceite em Portugal, pode não passar na IPO',
          'Automóvel de fora da UE (UK após o Brexit, US): alfândega completa + IVA 23% por cima. Mais complicado do que a partir da UE',
          'Atraso: todo o procedimento normalmente demora 4-8 semanas desde a entrada até às matrículas portuguesas. Planeie antecipadamente o aluguer de automóvel para esse período'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Transporte por camião porta-automóveis Alemanha → Portugal', amountEURMin: 1200, amountEURMax: 1800 },
    { label: 'ISV (usado, 5 anos)', amountEURMin: 1500, amountEURMax: 3500, note: 'automóvel médio' },
    { label: 'ISV para veículo elétrico', amountEUR: 0 },
    { label: 'Matrícula IMT', amountEUR: 135 },
    { label: 'IPO inspeção técnica', amountEUR: 40 },
    { label: 'COC (certificado)', amountEURMin: 200, amountEURMax: 500, note: 'se não for fornecido pelo vendedor' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 60,
  sources: [
    { title: 'AT — ISV e DAV', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — Matrícula', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do ISV (DL 22-A/2007)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2007-34525875', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
