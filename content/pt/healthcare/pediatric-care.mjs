export default {
  editorialVoice: 'hackportugal',
  id: 'pediatric-care',
  categoryId: 'healthcare',
  title: 'Pediatra em Portugal — SNS, médicos privados, o que esperar',
  tldr: 'Após o registo, é atribuído à criança um Número de Utente; o médico de família é atribuído se houver listas disponíveis na USF/UCSP — caso contrário, a criança fica sem médico de família, mas mantém o acesso à vacinação, ao programa Saúde Infantil através da unidade/consulta aberta/enfermagem e a cuidados urgentes. As consultas programadas de Saúde Infantil e Juvenil seguem o calendário da DGS (1.ª semana; 1, 2, 4, 6, 9, 12, 15, 18 meses; 2, 3, 4, 5 anos; 6–7, 8, 10, 12–13 e 15–18 anos) — gratuitas. A Pediatria no SNS é através de referenciação para hospital/cuidados especializados; no sector privado, os pediatras fazem frequentemente também consultas preventivas de rotina (60–120 €/consulta sem seguro). Urgência pediátrica: Hospital Dona Estefânia (Lisboa), Hospital Pediátrico (Coimbra), Hospital de São João (Porto). Em caso de risco de vida — 112; nos restantes casos, primeiro SNS 24 (808 24 24 24).',
  tags: ['pediatra', 'crianças', 'sns', 'médico de família'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'sns-system',
      title: '🏥 Como funciona o SNS para crianças',
      content: [
        { kind: 'paragraph', text: 'Diferença importante face à Federação Russa/BR: no SNS, o acompanhamento primário é normalmente feito pelo **médico de família** (medicina geral e familiar) e pelo enfermeiro de família. A Pediatria no SNS está normalmente disponível através de referenciação para hospital/cuidados especializados. No sector privado, os pediatras fazem frequentemente também consultas preventivas de rotina.' },
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Registo da criança no SNS', content: [
            { kind: 'checklist', items: [
              '1. Após o nascimento / chegada — no **Centro de Saúde** da área de residência',
              '2. Documentos: ID/passaporte ou Cartão de Cidadão da criança, certidão de nascimento, NIF (se tiver), comprovativo de morada/estatuto de residência. O NISS normalmente NÃO é necessário para o número de utente — são números diferentes',
              '3. Será atribuído um **Número de Utente** (vitalício)',
              '4. Se houver listas disponíveis na USF/UCSP — será atribuído médico de família. Se não houver — a criança fica sem médico de família, mas mantém o acesso à vacinação, ao programa Saúde Infantil através da unidade/consulta aberta/enfermagem',
              '5. Será automaticamente incluída no programa Saúde Infantil e Juvenil — consultas programadas segundo o calendário da DGS',
              '⚠️ Uma parte significativa dos utentes em Portugal continua sem médico de família; números actualizados — em SNS Transparência / relatórios da ACSS'
            ]}
          ]},
          { id: 'f2', title: 'Saúde Infantil e Juvenil — consultas programadas', content: [
            { kind: 'checklist', items: [
              'Gratuito para o utente, segundo o Programa Nacional de Saúde Infantil e Juvenil da DGS:',
              '🍼 **Primeiro ano**: 1.ª semana de vida; 1, 2, 4, 6, 9, 12 meses — peso/altura, desenvolvimento, vacinas, alimentação',
              '🧒 **1–5 anos**: 15, 18 meses; 2, 3, 4, 5 anos — fala, motricidade, vacinas',
              '📚 **Escola**: 6–7, 8, 10 anos — crescimento, visão, audição, vacinas',
              '🧑 **Adolescente**: 12–13 e 15–18 anos — desenvolvimento sexual, estado psicoemocional, autonomia',
              '📱 Os lembretes chegam na aplicação SNS 24',
              '📋 Boletim electrónico de vacinas e consultas — na aplicação (o calendário local pode variar)'
            ]}
          ]},
          { id: 'f3', title: 'Especialista pediatra', content: [
            { kind: 'checklist', items: [
              'Referenciação pelo médico de família através do sistema referenciação/SIGA SNS para consulta hospitalar; para crianças, sem taxas moderadoras. O tempo de espera depende da prioridade e do hospital — pode demorar semanas ou muitos meses',
              'Para uma situação urgente: pediatra privado por 60–120 € / consulta',
              'Áreas frequentes de referenciação: endocrinologia pediátrica, neurologia pediátrica, dermatologia pediátrica',
              '**Pediatra privado com seguro** (Médis/Multicare): copagamento de 10–25 €'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'private-clinics',
      title: '💼 Pediatras e clínicas privadas',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Quando ir a uma clínica privada', content: [
            { kind: 'checklist', items: [
              'Não há médico de família no SNS (lista de espera)',
              'Barreira linguística — os médicos do SNS nem sempre falam inglês',
              'Marcação rápida (24-48 h numa clínica privada)',
              'Serviços adicionais: avaliação nutricional, psicólogo, terapeuta da fala',
              'Parece que o médico de família não é especialista no problema específico'
            ]}
          ]},
          { id: 'c2', title: 'Redes de clínicas', content: [
            { kind: 'checklist', items: [
              '**CUF Pediatrics** (Lisboa, Porto, Algarve) — serviços abrangentes',
              '**Lusíadas Pediatrics** — Amadora, Porto',
              '**Hospital da Luz Pediatrics** — Lisboa, Setúbal',
              '**Grupo Trofa Saúde** — zona do Porto',
              '**Joaquim Chaves** — clínicas em formato retail',
              '**Rede AdvanceCare** — através do seguro'
            ]}
          ]},
          { id: 'c3', title: 'Preços sem seguro', content: [
            { kind: 'checklist', items: [
              'Consulta de pediatria geral: 60–100 €',
              'Consulta de subespecialidade (neurologia, cardiologia, endocrinologia pediátricas): 80–150 €',
              'Urgência pediátrica privada: 50–80 €',
              'Análises e exames (análises ao sangue, ecografia): 30–150 € por exame',
              'Pacote «acompanhamento no primeiro ano»: 300–600 € (consultas mensais + controlo das etapas de desenvolvimento)'
            ]}
          ]},
          { id: 'c4', title: 'Com seguro privado', content: [
            { kind: 'checklist', items: [
              '**Médis**: plano familiar ~100–180 €/mês, copagamento de 10–20 €',
              '**Multicare** (Fidelidade): ~80–150 €/mês, copagamento semelhante',
              '**AdvanceCare** (Generali): planos mais individualizados',
              '**Tranquilidade**: opção progressiva',
              'Para uma criança em separado: ~20–40 €/mês',
              'Para simples consultas de pediatria, a carência é frequentemente inexistente ou curta, mas depende da apólice; verifique as carências para exames, internamento, doenças preexistentes e inclusão de recém-nascido'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'urgencia',
      title: '🚨 Urgência pediátrica',
      content: [
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Hospitais com urgência pediátrica', content: [
            { kind: 'checklist', items: [
              '🏥 **Lisboa**: Hospital Dona Estefânia — principal hospital pediátrico',
              '🏥 **Porto**: Hospital de São João, Centro Materno-Infantil do Norte',
              '🏥 **Coimbra**: Hospital Pediátrico',
              '🏥 **Faro**: serviço pediátrico do Hospital de Faro',
              '🏥 **Cascais**: Hospital de Cascais (serviço pediátrico)',
              'Privados: CUF Tejo Pediatric, Luz Pediatric — menos filas',
              '⚠️ Antes de se deslocar, verifique os serviços de urgência disponíveis nas páginas do SNS/ULS ou ligue para o SNS 24: as unidades de urgência pediátrica podem ter restrições temporárias. Para hospitais privados, confirme o horário da urgência pediátrica e as idades aceites antes da visita'
            ]}
          ]},
          { id: 'u2', title: 'Quando ir à urgência', content: [
            { kind: 'checklist', items: [
              '🚨 Em caso de risco de vida — **112** (número europeu único de emergência)',
              '🔴 SIM: febre alta em criança <3 meses (qualquer >38°C), convulsões, falta de ar intensa, desmaio, traumatismo grave, reacção alérgica',
              '🟡 Normalmente não é necessário: constipação sem complicações, febre até 39°C em crianças mais velhas, traumatismo ligeiro',
              '📞 Em casos não urgentes/duvidosos, ligue primeiro para o **SNS 24: 808 24 24 24** — o operador/enfermeiro fará a triagem telefónica e dirá para onde ir. A Manchester Triage é aplicada já após a chegada à urgência hospitalar',
              '💡 Em muitos Centro de Saúde existe Atendimento Complementar — uma alternativa menos sobrecarregada'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'vaccinations-children',
      title: '💉 Vacinas PNV para crianças',
      content: [
        { kind: 'paragraph', text: 'Veja o guia separado «Vacinas em Portugal» — esquema completo do PNV + particularidades.' }
      ]
    }
  ],
  sources: [
    { title: 'DGS — Programa Nacional de Saúde Infantil e Juvenil', url: 'https://www.dgs.pt/documentos-e-publicacoes/programa-tipo-de-atuacao-em-saude-infantil-e-juvenil.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS 24 — Saúde Infantil', url: 'https://www.sns24.gov.pt/tema/crescer-saudavel/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS — Serviços de Urgência', url: 'https://www.sns.gov.pt/sns/servicos-de-urgencia/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Hospital Dona Estefânia (pediátrico)', url: 'https://www.ulslc.min-saude.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
