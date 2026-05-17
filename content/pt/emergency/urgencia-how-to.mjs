export default {
  editorialVoice: 'hackportugal',
  id: 'urgencia-how-to',
  categoryId: 'emergency_rights',
  title: 'Como não ficar todo o dia na urgência',
  tldr: 'A urgência em Portugal funciona segundo o Manchester Triage System — a cor depende da gravidade da situação. Vermelho — imediatamente, laranja — ≤ 10 min, amarelo — ≤ 60 min, verde — ≤ 120 min, azul — ≤ 240 min. Para reduzir a espera: (1) primeiro SNS 24 (**808 24 24 24**) — triagem de enfermagem segundo algoritmos clínicos (não é um médico ao telefone), encaminha para o nível adequado; (2) Atendimento Complementar no Centro de Saúde (à noite/ao fim de semana); (3) urgências privadas (CUF, Lusíadas, Luz) — 20–80 €; (4) aplicação «Tempos de Espera SNS» para verificar a fila. ⚠️ Os números 808 são tarifados de acordo com o tarifário do assinante: cartões SIM móveis e estrangeiros podem ser pagos.',
  tags: ['urgência', 'ambulância', 'sns', 'manchester'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'before',
      title: '📞 Antes de ir — ligue para o SNS 24',
      content: [
        { kind: 'paragraph', text: 'SNS 24 (**808 24 24 24**) — linha pública de saúde, funciona 24/7. Triagem de enfermagem segundo algoritmos clínicos (não é uma conversa com um médico). O serviço em si é gratuito, mas o número 808 é tarifado de acordo com o tarifário do assinante: cartões SIM móveis e estrangeiros podem ser cobrados ao minuto:' },
        { kind: 'checklist', items: [
          '🟢 Não urgente → marcar consulta com o médico de família no Centro de Saúde',
          '🟡 Precisa de ajuda, mas não imediatamente → clínica privada / consulta não urgente',
          '🟠 Urgente, mas não emergência → urgência especializada (pediátrica, infantil, ginecológica)',
          '🔴 Emergência → chamar o INEM (112) ou ir à urgência',
          'Idiomas: PT + EN (dizer «English please»)',
          'Aplicação SNS 24: chat com médico, videochamada — sem esperar por um operador telefónico',
          '💡 O SNS 24 tem muitas vezes menos carga do que a urgência: 15 min para diagnóstico'
        ]}
      ]
    },
    {
      id: 'manchester',
      title: '🎨 Manchester Triage System — como será avaliado',
      content: [
        { kind: 'paragraph', text: 'Ao chegar à urgência, a primeira avaliação é feita por uma enfermeira ou enfermeiro na triagem: questionário de 3–5 min → atribuição de uma cor.' },
        { kind: 'checklist', items: [
          '🔴 **Vermelho (vermelho) — EMERGÊNCIA**: atendimento **imediato**. Paragem cardíaca, AVC, traumatismo grave, perda de consciência',
          '🟠 **Laranja (laranja) — MUITO URGENTE**: em **≤ 10 min**. Dor forte no peito, dificuldade em respirar, hemorragia importante',
          '🟡 **Amarelo (amarelo) — URGENTE**: em **≤ 60 min**. Dor moderada, febre com agravamento, membro partido',
          '🟢 **Verde (verde) — POUCO URGENTE**: em **≤ 120 min**. Ferida sem hemorragia, dores moderadas, náuseas',
          '🔵 **Azul (azul) — NÃO URGENTE**: em **≤ 240 min** (4 horas!). Sintomas ≤ 7 dias, constipação ligeira, dor ligeira',
          '⚪ **Branco** — não requer cuidados urgentes (deve ir ao médico de família) — mandam-no para casa'
        ]},
        { kind: 'warning', text: '80% dos doentes em Portugal chegam com cor amarela/verde/azul — e esperam 2–4 horas. Se lhe atribuíram azul — é mais realista marcar consulta no Centro de Saúde ou ir a uma clínica privada.' }
      ]
    },
    {
      id: 'shortcuts',
      title: '⚡ Como reduzir a espera',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Centro de Saúde — Atendimento Complementar', content: [
            { kind: 'checklist', items: [
              'Nos centros de saúde existe um «Atendimento Complementar» separado — para situações que não exigem internamento',
              'Funcionam pelo menos até às 20:00 em alguns centros, alguns — 24/7 (Cascais, Almada)',
              'Marcação através do SNS 24 (chamada / aplicação) — chegue à hora marcada',
              'Espera: normalmente 10–30 min',
              'Gratuito — as taxas moderadoras nos cuidados de saúde primários do SNS foram eliminadas (reforma Decreto-Lei 37/2022)'
            ]}
          ]},
          { id: 's2', title: '2. Hospital Urgência — menos sobrecarregada', content: [
            { kind: 'checklist', items: [
              'Em Lisboa: Hospital Beatriz Ângelo (Loures) — normalmente mais rápido do que Santa Maria',
              'Hospital de Cascais (se vive em Cascais/Estoril) — frequentemente mais calmo',
              'Porto: Hospital de São João — 4–6 horas; Hospital de Pedro Hispano (Matosinhos) — por vezes 2–3 horas',
              '📱 **Aplicação «Tempos de Espera SNS»** — tempos de espera reais em todos os hospitais!',
              '💡 Verifique antes de sair — vá para o local menos sobrecarregado'
            ]}
          ]},
          { id: 's3', title: '3. Manhã de segunda a quinta-feira', content: [
            { kind: 'checklist', items: [
              'Horas mais sobrecarregadas: noite (18:00–23:00) e fins de semana',
              'Horas mais livres: segunda–quinta 9:00–12:00',
              'Evite: domingo à noite (tudo o que não abriu ao fim de semana aparece aí)',
              'Evite: junho–setembro (turistas + período de férias nos centros de saúde)'
            ]}
          ]},
          { id: 's4', title: '4. Urgência privada', content: [
            { kind: 'checklist', items: [
              'Custo: 20–80 € por visita sem seguro, 0–15 € de copagamento com seguro privado',
              'Rede: **CUF, Lusíadas, Luz, Trofa, Hospital da Misericórdia**',
              'Espera: normalmente 15–45 min',
              'Funcionam 24/7 nos grandes centros, das 8:00 às 24:00 — nos mais pequenos',
              'Consulta, análises, raio-X, ecografia — no local',
              'As receitas podem ser levadas de imediato à farmácia (por exemplo, Lusíadas Farmácia ao lado)'
            ]}
          ]},
          { id: 's5', title: '5. Urgências especializadas', content: [
            { kind: 'checklist', items: [
              '**Pediátrica** (crianças até 15–18 anos): serviços separados. Em Lisboa — Hospital Dona Estefânia. No Porto — Centro Materno-Infantil do Norte (CHUSJ/ULS Santo António, após a integração do antigo Maria Pia)',
              '**Ginecológica / Obstétrica**: Maternidade Alfredo da Costa (Lisboa), Maternidade Júlio Dinis (Porto)',
              '**Psiquiátrica**: Hospital Magalhães Lemos (Porto), Hospital Júlio de Matos (Lisboa)',
              '**Estomatológica** (dentes): Hospital São José e clínicas privadas (IMD, Dental Family)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'what-bring',
      title: '📋 O que levar consigo',
      content: [
        { kind: 'checklist', items: [
          '🆔 **CC / autorização de residência / passaporte**',
          '📇 **Número de Utente (SNS)** — mesmo sem ele será atendido, mas o processo será mais demorado',
          '💊 **Lista dos medicamentos atuais** — escrita ou fotografia no telemóvel',
          '📄 **Historial médico**: doenças crónicas, alergias, cirurgias',
          '💳 **Cartão bancário**: caso sejam prescritos medicamentos pagos (uma parte é comparticipada pelo SNS, o restante é pago)',
          '📚 **Livro / carregador / comida** — a espera pode ser de 2–4 horas',
          '🗣️ **Dicionário de PT / tradutor**: 90% dos médicos compreendem EN, mas o pessoal auxiliar muitas vezes não'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos gerais',
      content: [
        { kind: 'checklist', items: [
          '🔁 **Médico de família** (médico de família) — a chave principal. Inscrição no centro de saúde da área de residência, gratuita. Cada residente com Número de Utente tem direito a um',
          '📝 **Receita**: o médico de família emite para 3–6 meses em caso de doenças crónicas — não é preciso ir à urgência de cada vez',
          '📞 **Primeiro SNS 24, sempre** — eles próprios decidem se é necessária urgência',
          '💻 **Portal MySNS** (mysns.min-saude.pt): consultar as suas receitas, marcações, resultados de análises',
          '🚑 **INEM (112)**: apenas para situações que realmente ameaçam a vida. Chamadas falsas são punidas com coima',
          '🌙 **Horas nocturnas na urgência**: se puder esperar até de manhã — espere. 2–4 da manhã — é o período mais difícil'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'SNS 24 — 808 24 24 24', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Tempos de Espera SNS (aplicação e site)', url: 'https://tempos.min-saude.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGS — Manchester Triage System', url: 'https://www.dgs.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'INEM — Instituto Nacional de Emergência Médica', url: 'https://www.inem.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
