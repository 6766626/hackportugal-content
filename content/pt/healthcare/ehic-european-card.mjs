export default {
  editorialVoice: 'hackportugal',
  id: 'ehic-european-card',
  categoryId: 'healthcare',
  title: 'CESD — Cartão Europeu de Seguro de Doença (EHIC)',
  tldr: 'Cartão Europeu de Seguro de Doença (CESD), também conhecido como EHIC — dá acesso a cuidados médicos necessários prestados pelo sistema público em todos os países da UE, EEE, Suíça e Reino Unido nas mesmas condições que os segurados locais. Gratuito. Em Portugal, normalmente é válido por **3 anos**; depois é necessário pedir a renovação/um novo cartão. O CESD é emitido pelo país competente de seguro: para pessoas com cobertura portuguesa da Segurança Social — através da SS Direta. Pode pedir um certificado provisório se o cartão não chegar a tempo. O CESD/EHIC só é válido durante uma estadia temporária no estrangeiro, não em caso de mudança de residência nem de viagem feita especificamente para tratamento.',
  tags: ['ehic', 'cesd', 'saúde', 'viagens'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'who-can',
      title: 'Quem pode obter',
      content: [
        { kind: 'checklist', items: [
          'Pessoas para quem Portugal é o **país competente** de cobertura médica/social: trabalhadores por conta de outrem e trabalhadores independentes com Segurança Social, pensionistas com cobertura portuguesa, beneficiários de prestações, dependentes reconhecidos e utilizadores de outros sistemas portugueses. O NISS, por si só, não garante o direito ao CESD',
          'Dependentes (filhos, cônjuge) — são tratados através do segurado principal. O cartão é sempre individual',
          'Estudantes Erasmus: o cartão é emitido pelo país onde o estudante está segurado. O CESD português é necessário ao estudante se Portugal for o seu país competente de seguro; um estudante estrangeiro em Portugal normalmente usa o EHIC do seu país',
          'Pensionistas: o cartão é emitido pelo país competente. Se a pensão e a cobertura médica vierem de Portugal — através da Segurança Social. Se o pensionista viver em PT com S1 de outro país, o EHIC é normalmente emitido pelo país que emitiu o S1/paga a pensão',
          '❌ Turistas / não residentes — não, precisam de seguro privado de viagem'
        ]}
      ]
    },
    {
      id: 'what-covers',
      title: 'O que cobre',
      content: [
        { kind: 'paragraph', text: 'O CESD é aceite em **32 países/territórios do sistema EHIC**: 27 países da UE, Islândia, Listenstaine, Noruega, Suíça e Reino Unido.\n\n⚠️ **Nota importante para cidadãos de países terceiros (Federação Russa/Bielorrússia/Ucrânia/EUA/Reino Unido, etc.) que residem legalmente em Portugal**: o CESD português é emitido, mas NEM sempre é aceite na Dinamarca, Islândia, Listenstaine, Noruega e Suíça — historicamente, estes países não aplicavam a coordenação EHIC/CESD a cidadãos de países terceiros em toda a sua extensão (Regulation (EU) 1231/2010 + acordos bilaterais). Para cidadãos da UE, a cobertura existe em todos os locais; para cidadãos de países terceiros, está garantida na totalidade nos 27 países da UE + UK (nos termos do acordo UK-EU). O Reino Unido aceita EHIC/CESD para cuidados médicos públicos necessários durante uma estadia temporária; os GHIC/UK EHIC britânicos são cartões separados para pessoas seguradas no UK.' },
        { kind: 'checklist', items: [
          '✅ Cuidados médicos necessários no sistema público durante uma estadia temporária — não apenas urgência, mas também tratamento que não possa ser razoavelmente adiado até ao regresso a casa',
          '✅ Hospitalização em situações agudas',
          '✅ Consultas/tratamentos de doenças crónicas (diálise, quimioterapia) — deve combinar previamente',
          '✅ **112** — número de emergência gratuito. A assistência/o transporte em si é pago ou não pago de acordo com as regras do país de estadia, como para os segurados locais',
          '✅ Medicamentos sujeitos a receita médica — com a comparticipação local como os residentes',
          '❌ Clínicas privadas — NÃO estão cobertas (é necessário seguro de viagem)',
          '❌ Regresso a casa por evacuação médica aérea — NÃO está coberto',
          '❌ Parto no estrangeiro (planeado) — não',
          '❌ Medicina dentária (excepto emergências)',
          '❌ Vacinação'
        ]},
        { kind: 'warning', text: 'O CESD complementa, não substitui, o seguro de viagem. Para uma viagem confortável (repatriamento, clínicas privadas, bagagem), compre na mesma uma apólice de 10-30 € junto de uma seguradora.' }
      ]
    },
    {
      id: 'how-get',
      title: 'Como obter',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. Entrada na SS Direta', content: [
            { kind: 'paragraph', text: 'seg-social.pt → Segurança Social Direta → Iniciar sessão. Entrada: NISS + palavra-passe, ou CMD, ou Cartão de Cidadão.' }
          ]},
          { id: 'g2', title: '2. Menu "Família" → "Cartão Europeu de Seguro de Doença"', content: [
            { kind: 'paragraph', text: 'Ou pesquise por "CESD" na barra. Será apresentado o estado do cartão — existe / está a expirar / não existe.' }
          ]},
          { id: 'g3', title: '3. Pedir o cartão', content: [
            { kind: 'checklist', items: [
              'Indicar a morada de entrega (normalmente é preenchida a partir do perfil)',
              'Adicionar dependentes (o sistema perguntará sobre eles)',
              'Confirmar — é emitido gratuitamente',
              'Cartão físico — 10-14 dias úteis por correio',
              'O Certificado Provisório de Substituição pode ser pedido como substituição temporária se o cartão ainda não tiver sido recebido ou se tiver sido perdido; o prazo de validade está indicado no próprio certificado'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'use-abroad',
      title: 'Como usar no estrangeiro',
      content: [
        { kind: 'checklist', items: [
          'No hospital público: apresentar o CESD + passaporte',
          'O valor da taxa moderadora/copagamento depende do país e do tipo de serviço: em alguns países, os cuidados ambulatórios são gratuitos; noutros, paga-se primeiro parte da tarifa ou uma taxa fixa. Antes da viagem, verifique as regras do país concreto no Your Europe / site nacional de saúde',
          'Se pagou do próprio bolso (o médico não reconheceu o cartão / não o tinha consigo) — guarde todos os recibos, o reembolso é feito através da Segurança Social no regresso',
          'Se foi numa clínica privada — o CESD não funciona, mas guarde os recibos para o seguro privado',
          'O CESD não garante gratuitidade: o paciente paga as mesmas taxas e copagamentos não reembolsáveis que os segurados locais'
        ]}
      ]
    },
    {
      id: 'lost',
      title: 'Perda, renovação, alteração de dados',
      content: [
        { kind: 'checklist', items: [
          'Validade: normalmente **3 anos**. A renovação/um novo cartão deve ser pedido antes do fim da validade através da Segurança Social Direta ou de outro canal disponível',
          'Perdeu no estrangeiro — peça o Certificado Provisório online e envie-o por email para o hospital público',
          'Alteração de NISS (raro) — o cartão mantém-se, os dados serão actualizados',
          'Ao mudar-se para outro país da UE, o NISS não desaparece, mas se Portugal já não for o seu país competente de cobertura médica, o CESD português não pode ser utilizado; deve tratar do EHIC no novo país competente',
          'O cartão é sempre individual, incluindo para crianças. Depois dos 18 anos, o direito depende de a pessoa continuar coberta como dependente ou ter cobertura própria através de trabalho/estudos/outro regime'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'CESD (cartão e renovação)', amountEUR: 0 },
    { label: 'Certificado provisório (Provisório)', amountEUR: 0 },
    { label: 'Seguro de viagem (recomendado adicionalmente)', amountEURMin: 10, amountEURMax: 30, note: 'por viagem' }
  ],
  sources: [
    { title: 'Segurança Social — CESD', url: 'https://www.seg-social.pt/cartao-europeu-de-seguro-de-doenca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — pedido de CESD online', url: 'https://www.seg-social.pt/pedido-cartao-europeu-seguro-doenca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'UE — Your Europe — cuidados de saúde não planeados: estadias temporárias', url: 'https://europa.eu/youreurope/citizens/health/unplanned-healthcare/temporary-stays/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'UK NHS — cuidados de saúde para visitantes do UK provenientes da UE', url: 'https://www.nhs.uk/nhs-services/visiting-or-moving-to-england/visiting-england-from-the-eea/', kind: 'official', language: 'en', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
