export default {
  editorialVoice: 'hackportugal',
  id: 'mental-health-resources',
  categoryId: 'emergency_rights',
  title: 'Saúde mental — linhas de apoio e ajuda',
  tldr: 'Em crise: SNS 24 → opção 4 (apoio psicológico do SNS, 24/7) ou SOS Voz Amiga 213 544 545 (linha de prevenção do suicídio, 15:30-00:30).\n\n⚠️ Os números 808 são tarifados de acordo com o tarifário do assinante (cartões SIM móveis/estrangeiros podem ter custos). Pelo SNS — o médico de família encaminha para psicólogo/psiquiatra (gratuito, lista de espera de 1-3 meses). Psicólogo privado 50-90 €/sessão, psiquiatra 80-150 €. Profissionais de língua inglesa — na CUF, Lusíadas, Luz. Online: BetterHelp, ePsicólogos. Linha Vida 1414 — para dependências, tem horário de funcionamento (NÃO 24/7).',
  tags: ['psicologia', 'psiquiatra', 'crise', 'saúde mental'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'crisis',
      title: '🆘 Crise — para onde ligar agora',
      content: [
        { kind: 'checklist', items: [
          '☎️ 112 — serviço de emergência, em caso de intenções suicidas / ameaça à vida',
          '☎️ SNS 24: 808 24 24 24 → opção 4 — apoio psicológico do SNS, 24/7. O serviço em si é gratuito, mas o número 808 é tarifado de acordo com o tarifário do assinante (cartões SIM móveis/estrangeiros podem ser cobrados ao minuto)',
          '☎️ SOS Voz Amiga: 213 544 545 — linha anónima de prevenção do suicídio, todos os dias 15:30-00:30',
          '☎️ Telefone Amizade: 222 080 707 — linha no Porto, 16:00-23:00',
          '☎️ Linha Vida (ICAD/SICAD): 1414 — para dependências (drogas/álcool). Tem horário de funcionamento — NÃO é 24 horas. Gratuito',
          '☎️ APAV (para vítimas de violência): 116 006 — apoio nacional a vítimas de crime',
          '☎️ Linha SOS Estudante: 239 484 020 — para estudantes em crise'
        ]}
      ]
    },
    {
      id: 'sns-route',
      title: '🏥 Pelo SNS — o percurso oficial',
      content: [
        { kind: 'paragraph', text: 'A medicina pública em Portugal cobre apoio psicológico e psiquiátrico, mas o acesso é lento.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Médico de família', content: [
            { kind: 'checklist', items: [
              'Marcar através da aplicação SNS 24 ou do Centro de Saúde',
              'Descrever os sintomas: ansiedade, depressão, problemas de sono, ataques de pânico',
              'O médico de família pode: prescrever medicação para dormir / ansiolíticos, encaminhar para um especialista',
              'Gratuito para utentes registados no SNS'
            ]}
          ]},
          { id: 's2', title: '2. Psicólogo no SNS', content: [
            { kind: 'checklist', items: [
              'Lista de espera: normalmente 1-3 meses, até 6 meses nas capitais',
              '6-12 sessões por norma',
              'A terapia cognitivo-comportamental é a mais comum',
              'Gratuito',
              'Muitas vezes apenas em português; psicólogos de língua inglesa nas grandes cidades são raros'
            ]}
          ]},
          { id: 's3', title: '3. Psiquiatra no SNS', content: [
            { kind: 'checklist', items: [
              'Para tratamento medicamentoso (antidepressivos, ansiolíticos, estabilizadores do humor)',
              'Lista de espera mais curta (1-2 meses) do que para psicólogo',
              'Apenas com encaminhamento do médico de família',
              'Hospital de Júlio de Matos (Lisboa), Magalhães Lemos (Porto), CHUC (Coimbra) — os maiores hospitais psiquiátricos'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'private',
      title: '💼 Ajuda privada — mais rápida',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Preços 2026', content: [
            { kind: 'checklist', items: [
              'Psicólogo: 50-90 €/sessão (50-60 min)',
              'Psiquiatra (primeira consulta): 100-150 €',
              'Psiquiatra (consulta de seguimento): 60-100 €',
              'Terapia de casal: 80-120 €',
              'Coaching / terapia não clínica: 60-100 €',
              'Terapia de grupo: 25-50 €/sessão'
            ]}
          ]},
          { id: 'p2', title: 'Redes e clínicas', content: [
            { kind: 'checklist', items: [
              'CUF Saúde Mental — todas as grandes cidades, inglês disponível',
              'Lusíadas Saúde Mental — Lisboa, Porto',
              'Hospital da Luz Mental Health — Lisboa',
              'INSPIRA Saúde — rede independente, de língua inglesa',
              'Therapie em Lisboa — conveniente para expats',
              'Pesquisa: ordemdospsicologos.pt → Encontrar Psicólogo'
            ]}
          ]},
          { id: 'p3', title: 'Seguro', content: [
            { kind: 'checklist', items: [
              'Médis: 10-30 € de copagamento; normalmente 8-12 sessões/ano',
              'Multicare (Fidelidade): semelhante',
              'AdvanceCare (Generali): pacote de saúde mental 200-400 €/ano + copagamento',
              '⚠️ Carência (período de espera após contratar o seguro): normalmente 90 dias para saúde mental',
              '⚠️ Doenças preexistentes (diagnóstico ANTES de contratar): frequentemente excluídas'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'online',
      title: '🌐 Terapia online',
      content: [
        { kind: 'checklist', items: [
          'ePsicólogos (sediada em Portugal) — 30-50 €/sessão online',
          'BetterHelp — plataforma mais internacional, 60-90 €/semana (subscrição)',
          'Talkspace — texto + vídeo, 65-120 €/semana',
          'Mindler.pt — teleterapia baseada em Portugal',
          'Headspace, Calm — aplicações de meditação, não são terapia, 6-12 €/mês',
          'Hoory, Wysa — chatbot de IA para ansiedade / depressão — gratuito, não substitui a terapia',
          'É mais fácil encontrar terapeutas online de língua inglesa do que presenciais'
        ]}
      ]
    },
    {
      id: 'expat-specific',
      title: '🌍 Especificidades para imigrantes',
      content: [
        { kind: 'checklist', items: [
          'Stress de adaptação: mudar de país = top 5 dos acontecimentos de vida mais stressantes. É normal sentir solidão e frustração nos primeiros 6-12 meses',
          'Barreira linguística no médico: significativa para apoio de qualidade em saúde mental. Um psicólogo de língua inglesa é mais caro, mas mais eficaz',
          'Psicólogos de língua russa em Portugal: lista limitada, procurar em chats de Telegram de comunidades expat',
          'Instabilidade financeira (espera pelo visto, gastar poupanças) = gatilhos sérios para ansiedade',
          'Isolamento: nos primeiros meses, a rede social é fraca. Solução — encontros, intercâmbios linguísticos, grupos de expats',
          'Adaptação das crianças: mudança de escola / língua → as crianças podem regredir. Acompanhamentos regulares com o pediatra ou psicólogo escolar'
        ]}
      ]
    },
    {
      id: 'community',
      title: '👥 Comunidade e apoio',
      content: [
        { kind: 'checklist', items: [
          'Russian Mental Health PT Telegram/Facebook — apoio entre pares',
          'Internations Lisbon Mental Health — encontros, gratuito',
          'Mindful Lisbon — meditação, grupos de ioga',
          'LGBT+ Centre (Lisbon) — apoio entre pares para a comunidade LGBTQ+',
          'ELCM / Alma Lusitana (para falantes de português) — terapia de grupo',
          'Women\'s Group Lisbon Expat — apoio especificamente para mulheres',
          'Anonymous Alcoholics Portugal — encontros diários, EN/PT/RU',
          'Narcóticos Anónimos — dependências, multilingue'
        ]}
      ]
    },
    {
      id: 'tax-deduction',
      title: '💰 Dedução fiscal',
      content: [
        { kind: 'checklist', items: [
          'Despesas com psicólogo/psiquiatra — despesas de saúde para dedução no IRS',
          '15% das despesas até 1000 €/família — dedução padrão',
          'Obter factura com NIF — obrigatório para a dedução',
          'Medicamentos da farmácia com receita também contam',
          'Guarde os recibos durante 4 anos (período de verificação)',
          'Se trabalha com recibos verdes: despesas de terapia por stress laboral podem contar como despesa profissional (consulte um contabilista)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Psicólogo no SNS', amountEUR: 0 },
    { label: 'Psicólogo privado', amountEURMin: 50, amountEURMax: 90, note: '€/sessão' },
    { label: 'Primeira consulta de psiquiatria', amountEURMin: 100, amountEURMax: 150 },
    { label: 'Terapia online (BetterHelp)', amountEURMin: 60, amountEURMax: 90, note: '€/semana' },
    { label: 'Pacote de seguro para saúde mental', amountEURMin: 200, amountEURMax: 400, note: '€/ano' }
  ],
  sources: [
    { title: 'SNS 24 — Saúde Mental', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Ordem dos Psicólogos Portugueses', url: 'https://www.ordemdospsicologos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SOS Voz Amiga', url: 'https://www.sosvozamiga.org/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'APAV — apoio à vítima', url: 'https://apav.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
