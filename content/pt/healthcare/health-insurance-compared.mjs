export default {
  editorialVoice: 'hackportugal',
  id: 'health-insurance-compared',
  categoryId: 'healthcare',
  title: 'Seguro de saúde privado em Portugal — Médis, Multicare, CUF e outros',
  tldr: 'O SNS está disponível para residentes registados/utente; a maioria dos serviços essenciais não tem taxas moderadoras (Lei n.º 22/2022), mas medicamentos, estomatologia, óculos e parte dos serviços são pagos à parte ou parcialmente. As listas de espera para especialistas variam de semanas a meses consoante a região, a prioridade e a especialidade. O seguro privado acelera — medicina geral/urgência muitas vezes no próprio dia, especialistas/exames em dias-semanas. Principais seguradoras: Médis (Ocidental–Ageas), Multicare (Fidelidade), Allianz Portugal, Generali Tranquilidade; AdvanceCare é uma rede/administrador (não uma seguradora separada). Preços 2026: 30–80 €/mês plano básico, 100–250 €/mês completo. Para vistos D7/D8, os consulados normalmente exigem seguro médico de viagem — os requisitos exactos variam por consulado.',
  tags: ['seguro', 'saúde', 'médis', 'multicare', 'medicina privada'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why',
      title: 'Porque ter seguro privado quando existe o SNS',
      content: [
        { kind: 'checklist', items: [
          '⏰ SNS: as listas de espera para especialistas variam de semanas a meses consoante a região, a prioridade e a especialidade',
          '🏥 O sistema privado é geralmente mais rápido: medicina geral/urgência muitas vezes no próprio dia, especialistas/exames — de alguns dias a semanas consoante a rede e o médico',
          '💊 A maioria das taxas moderadoras no SNS foi abolida desde 2022 (Lei n.º 22/2022); permanecem, por exemplo, urgência sem referenciação do SNS24/INEM/centro de saúde e alguns serviços fora do SNS',
          '🧪 Análises/RM pelo SNS — de semanas a meses; pelo seguro, frequentemente 1–2 semanas',
          '💰 Dedução em IRS: 15% em despesas de saúde dentro do limite do agregado familiar (Código do IRS art. 78.º-C)',
          '🌍 Para vistos D7 / D8, os consulados normalmente exigem seguro médico de viagem — os requisitos concretos diferem por consulado',
          '👨‍⚕️ Escolha do médico — pelo seguro é geralmente mais ampla (dentro da rede); pelo SNS depende de haver médico de família e do sistema de referenciação'
        ]}
      ]
    },
    {
      id: 'providers',
      title: 'Principais seguradoras',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Médis (Ageas)', content: [
            { kind: 'checklist', items: [
              'Popular entre estrangeiros — aplicação em inglês',
              'Rede com ~300 acordos directos com clínicas',
              'Sem pagamento antecipado em clínicas parceiras',
              'Pacotes: Basic, Complete, Health Total',
              'A partir de 35 €/mês para um adulto saudável',
              'Limite elevado de despesas anuais (até 500 000 €)'
            ]}
          ]},
          { id: 'p2', title: 'Multicare (Fidelidade)', content: [
            { kind: 'checklist', items: [
              'Maior grupo segurador em Portugal; Multicare é a marca de seguro de saúde da Fidelidade. Não é um seguro público (participação maioritária — Fosun através da Longrun Portugal)',
              'Rede Hospital da Luz + CUF + Lusíadas',
              'Uma das redes mais amplas de prestadores de cuidados de saúde',
              'Pacotes: Proteção, Vida, Vida+',
              'A partir de 40 €/mês',
              'Estomatologia forte no pacote'
            ]}
          ]},
          { id: 'p3', title: 'AdvanceCare', content: [
            { kind: 'paragraph', text: 'Rede/plataforma de serviços médicos (administrador de managed-care/rede), e não uma seguradora separada. É frequentemente utilizada por produtos de seguro da Generali Tranquilidade e parceiros; confirme quem é exactamente a seguradora jurídica na apólice. A partir de 30 €/mês.' }
          ]},
          { id: 'p4', title: 'Generali Tranquilidade', content: [
            { kind: 'paragraph', text: 'Desde 2024, a Tranquilidade pertence ao grupo Generali e opera sob a marca Generali Tranquilidade; em 2024, a Liberty Seguros Portugal foi integrada nela. Planos premium, cobertura internacional, mais caro, mas com apoio forte para estrangeiros. A partir de 50 €/mês.' }
          ]},
          { id: 'p4b', title: 'Allianz Portugal', content: [
            { kind: 'paragraph', text: 'Grupo segurador separado (NÃO faz parte da Tranquilidade/Generali). Planos de saúde e cobertura internacional para expats. Compare separadamente.' }
          ]},
          { id: 'p5', title: 'ADSE (para trabalhadores do sector público)', content: [
            { kind: 'paragraph', text: 'A ADSE é uma subsistema público de saúde para trabalhadores do sector público, aposentados da função pública e seus dependentes elegíveis (Decreto-Lei n.º 7/2017). Não é uma seguradora privada nem uma apólice comum para expats.' }
          ]}
        ]}
      ]
    },
    {
      id: 'clinics',
      title: 'Redes de clínicas privadas',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Luz Saúde', content: [
            { kind: 'paragraph', text: 'Maior rede em Lisboa e no Porto. O Hospital da Luz é o principal. Os seguros aceites dependem do Hospital/Clínica da Luz concreto, do plano, do médico e do serviço; confirme o acordo/convenção e a pre-authorisation antes da visita.' }
          ]},
          { id: 'c2', title: 'CUF', content: [
            { kind: 'paragraph', text: 'Uma das maiores redes privadas em Portugal, com dezenas de unidades em todo o país. Boa cirurgia e maternidade. Aplicação forte com processo clínico. Lista actualizada — no site da CUF.' }
          ]},
          { id: 'c3', title: 'Lusíadas Saúde', content: [
            { kind: 'paragraph', text: 'Grande rede privada de hospitais e clínicas; desde 2023 pertence ao grupo francês Vivalto Santé. Clínicas em Lisboa, Porto, Algarve.' }
          ]},
          { id: 'c4', title: 'HPA Saúde (Algarve)', content: [
            { kind: 'paragraph', text: 'Domina no sul. Cardiologia e ortopedia fortes.' }
          ]}
        ]}
      ]
    },
    {
      id: 'what-covered',
      title: 'O que está normalmente coberto',
      content: [
        { kind: 'checklist', items: [
          '✅ Consultas de ambulatório (médicos de todas as especialidades)',
          '✅ Exames (análises, RM, TAC, ecografia)',
          '✅ Hospitalização (hospitais privados) — se incluída no plano, dentro do capital seguro, da rede e após pre-authorisation',
          '✅ Cirurgias/hospitalização — se incluídas no plano; emergency care deve ser verificado separadamente',
          '✅ Maternidade (após 10–12 meses de período de carência, normalmente com limite separado)',
          '⚠️ Estomatologia — frequentemente à parte',
          '⚠️ Oftalmologia — frequentemente à parte',
          '❌ **Pre-existing conditions** são normalmente excluídas, se a seguradora não tiver aceite previamente por escrito a sua cobertura; por vezes são possíveis limites, agravamento ou carência. É obrigatório ler as Condições Particulares/Especiais',
          '⚠️ Cirurgia puramente estética/cosmetic surgery é normalmente excluída; reconstructive/medically necessary procedures podem estar cobertos nas condições da apólice',
          '⚠️ Tratamento de alta tecnologia (transplante, certos tipos de tratamento oncológico) — limitado'
        ]}
      ]
    },
    {
      id: 'how-to-choose',
      title: 'Como escolher um plano',
      content: [
        { kind: 'checklist', items: [
          '🏥 Verificar a rede — quais os hospitais / médicos mais próximos',
          '💊 Hospitalização: veja o capital anual, franquia/copagamento, limites por acto, quartos, cirurgia, urgência e regras de pre-authorisation',
          '💰 Compare capital por garantia: ambulatório, hospitalização, parto, estomatologia, próteses, oncology; um capital geral elevado não substitui a verificação dos sub-limites',
          '🤰 Planeamento de maternidade — normalmente com limite separado e carência de 10–12 meses',
          '🧒 Crianças no pacote — muitas vezes mais barato do que separado',
          '🇵🇹 Cobertura internacional — para viajantes',
          '📅 Comparar no prazo de 30 dias (direito de livre resolução)',
          '✍️ Questionário de saúde — preencher honestamente, caso contrário pode haver recusa de pagamento'
        ]}
      ]
    },
    {
      id: 'for-visa',
      title: 'Seguro para visto D7 / D8',
      content: [
        { kind: 'paragraph', text: 'Para D7/D8, os consulados normalmente exigem seguro médico de viagem com cobertura de assistência médica e repatriamento para a entrada/período de validade do visto. Depois da chegada, para AIMA/vida em Portugal, é necessário acesso ao SNS (através de número de utente) ou seguro privado. Verifique os requisitos do consulado VFS/MNE concreto.' },
        { kind: 'checklist', items: [
          '💶 Cobertura mínima: 30 000 €',
          '🌍 Deve cobrir TODO o Espaço Schengen',
          '📅 Duração: conforme exigido pelo consulado concreto; muitas vezes a apólice deve cobrir o período de validade do visto/primeira entrada e, para residência posterior, número de SNS ou seguro privado',
          '✈️ Repatriamento — obrigatório na apólice',
          '💊 Medicina de emergência — obrigatória',
          '⚠️ Não conte com uma «commitment to buy on arrival» — se o consulado concreto não o permitir expressamente. É mais seguro anexar um seguro médico de viagem válido que cumpra a checklist do consulado'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Plano básico (saudável, 30–40 anos)', amountEURMin: 30, amountEURMax: 55, note: '€/mês' },
    { label: 'Médio (hospitalização + especialistas)', amountEURMin: 60, amountEURMax: 120, note: '€/mês' },
    { label: 'Premium (tudo + estomatologia + cobertura internacional)', amountEURMin: 150, amountEURMax: 300, note: '€/mês' },
    { label: 'Seguro para visto (1 ano)', amountEURMin: 250, amountEURMax: 600 },
    { label: 'Consulta privada sem seguro', amountEURMin: 50, amountEURMax: 150 }
  ],
  sources: [
    { title: 'ASF — Autoridade de Supervisão de Seguros', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei n.º 22/2022 — taxas moderadoras (abolição)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/22-2022-184170621', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Ministério da Saúde — SNS', url: 'https://www.sns.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ERS — Entidade Reguladora da Saúde', url: 'https://www.ers.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ADSE, I.P.', url: 'https://www.adse.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portal dos Vistos MNE — requisitos D7/D8', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
