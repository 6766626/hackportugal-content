export default {
  editorialVoice: 'hackportugal',
  id: 'livro-reclamacoes',
  categoryId: 'emergency_rights',
  title: 'Livro de Reclamações — como reclamar correctamente',
  tldr: 'Livro de Reclamações — todos os estabelecimentos em Portugal são obrigados a tê-lo e a disponibilizá-lo quando solicitado. A reclamação é automaticamente encaminhada para o regulador (ANAC, ASAE, ERSE, BdP, ANACOM — consoante o sector) — é uma ferramenta poderosa, ao contrário das avaliações no Google. Versão electrónica: livroreclamacoes.pt — submissão online, sem deslocação. A resposta é obrigatória em **15 dias**. Coimas para estabelecimentos: até 25 000 € para pessoas colectivas. Muito eficaz — muitas infracções são corrigidas após a reclamação.',
  tags: ['reclamações', 'queixas', 'consumidores', 'direitos'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what-is',
      title: '📚 O que é o Livro de Reclamações',
      content: [
        { kind: 'paragraph', text: 'Nos termos do **DL 156/2005** — qualquer empresa que preste serviços a consumidores é obrigada a ter Livro de Reclamações (livro físico com formulários normalizados ou versão electrónica) e a disponibilizá-lo ao primeiro pedido do cliente.' },
        { kind: 'checklist', items: [
          '📚 **Livro físico**: formulários em papel em 3 vias — o original fica no livro, 1 cópia para si, 1 cópia é enviada ao regulador',
          '💻 **Livro electrónico**: em livroreclamacoes.pt — submissão online após a visita',
          '🚫 **Recusa de disponibilização** — é uma infracção, com coimas de 250-3 750 € (pessoas singulares), 5 000-25 000 € (pessoas colectivas)',
          '⏰ **A resposta é obrigatória em 15 dias úteis** ou a empresa é sancionada',
          '🏢 **Quem é obrigado**: restaurantes, hotéis, bancos, seguradoras, telecomunicações, ginásios, centros médicos, supermercados, companhias aéreas, táxis — tudo, excepto algumas excepções (serviços públicos — sistema diferente)'
        ]}
      ]
    },
    {
      id: 'when-to-use',
      title: '🎯 Quando utilizar',
      content: [
        { kind: 'checklist', items: [
          '🍽️ **Restaurante**: comida estragada, recusa em aceitar Multibanco / meio de pagamento válido, taxas adicionais de «service» não previstas no contrato',
          '🏨 **Hotel**: quarto diferente do reservado, comodidades avariadas, publicidade enganosa',
          '🏦 **Banco**: apresentação enganosa de produto financeiro, comissões ocultas, recusa de atendimento',
          '📱 **Telecomunicações (NOS, MEO, Vodafone)**: facturas incorrectas, internet sem funcionar, recusa em repor a subscrição',
          '🛡️ **Seguradoras**: recusa de pagamento de indemnização, tratamento lento, condições enganosas',
          '🚗 **Aluguer de automóveis**: cobranças ocultas, reclamações por danos após a devolução do veículo',
          '🛒 **Lojas**: recusa em aceitar devolução no prazo de 14 dias (online), publicidade enganosa, bens defeituosos',
          '🏥 **Clínicas privadas**: diagnóstico incorrecto, erros na factura',
          '✈️ **Companhias aéreas**: cancelamento, atraso, problemas com bagagem — também se aplica o procedimento separado EU 261/2004',
          '⚠️ **Para serviços públicos do Estado**: o Livro não funciona; utilize o Provedor de Justiça'
        ]}
      ]
    },
    {
      id: 'how-to-file',
      title: '✍️ Como apresentar uma reclamação',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Método A — Livro físico no local', content: [
            { kind: 'checklist', items: [
              'Peça ao gerente: «Pode-me trazer o Livro de Reclamações?»',
              'Receba o formulário em 3 vias',
              'Preencha no local: o seu nome, NIF, contacto, descrição da situação, data, hora',
              '**Seja concreto**: o que aconteceu exactamente, o que pretende (reembolso, pedido de desculpas, correcção)',
              'Assinatura + data',
              'O gerente fica com o original; uma cópia — para si, outra cópia — seguirá para o regulador',
              'Se o gerente se recusar a entregar — isso já é uma infracção; anote o nome dele, fotografe a recusa, prossiga online'
            ]}
          ]},
          { id: 'h2', title: 'Método B — online (livroreclamacoes.pt)', content: [
            { kind: 'checklist', items: [
              '**livroreclamacoes.pt** → procurar a empresa por NIF / nome / morada',
              'Entrar com CMD ou simplesmente com registo por email',
              'Formulário: detalhes da reclamação, provas anexadas (fotografias, recibos, capturas de ecrã)',
              'Enviar — a cópia segue automaticamente para a empresa + regulador',
              'Disponível 24/7, não é necessário estar no local',
              '**Recomendado** para a maioria dos casos — rasto digital e mais simples'
            ]}
          ]},
          { id: 'h3', title: 'Método C — directamente ao regulador', content: [
            { kind: 'checklist', items: [
              'ANACOM (telecomunicações) — anacom.pt/queixas',
              'ERSE (energia) — erse.pt',
              'BdP (bancos) — clientebancario.bportugal.pt',
              'ASAE (alimentação / bens de consumo) — asae.gov.pt',
              'ASF (seguros) — asf.com.pt',
              'IMT (transportes) — imt-ip.pt',
              'DGS (saúde) — dgs.pt',
              'ERS (prestadores privados de cuidados de saúde) — ers.pt'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'what-happens-next',
      title: '📊 O que acontece a seguir',
      content: [
        { kind: 'checklist', items: [
          '📅 **Dia 1**: a sua cópia + a cópia do regulador são recebidas',
          '📅 **Dia 5-10**: a empresa recebe notificação do regulador, deve preparar a resposta',
          '📅 **Dia 15**: a empresa **é obrigada** a enviar-lhe uma resposta (ou o regulador inicia uma investigação)',
          '⚖️ **Se não houver resposta** ou se a resposta for insatisfatória — o regulador pode:',
          '  - Fiscalizar a empresa (especialmente a ASAE)',
          '  - Emitir uma advertência',
          '  - Aplicar uma coima (250-25 000 €)',
          '  - Obrigá-la a fazer formação / alterar práticas',
          '🤝 **A maioria dos casos (~70%)**: a empresa contacta-o com um pedido de desculpas / reembolso / solução no prazo de 7 dias — não querem uma fiscalização do regulador',
          '⏳ **Se for necessária uma acção**: o processo no regulador demora 30-90 dias',
          '⚖️ **Processo civil/penal — separadamente**: se quiser uma compensação financeira pessoal superior ao valor nominal — apresente também no Tribunal de Pequena Causa ou num tribunal comum'
        ]}
      ]
    },
    {
      id: 'effective-tips',
      title: '💡 Dicas para reclamações eficazes',
      content: [
        { kind: 'checklist', items: [
          '✅ **Concretização**: «não gostei do atendimento» — fraco. «Às 14:35 o gerente recusou aceitar MB WAY, indicado no recibo, e exigiu dinheiro, que eu não tinha» — forte',
          '✅ **Provas documentais**: recibos, fotografias, capturas de ecrã — anexe',
          '✅ **Pedido concreto**: «exijo reembolso de 50 €» / «formação do empregado de mesa»',
          '✅ **Tom profissional**, sem emoções',
          '✅ **Referência à lei relevante**: «nos termos do DL 24/2014 tenho direito à devolução no prazo de 14 dias em compras online»',
          '✅ **Prazo razoável** para resposta',
          '⚠️ **Sem ameaças** (mesmo uma ameaça legal de tribunal) na própria reclamação — isso é um processo separado',
          '⚠️ **Sem ataques pessoais** aos funcionários — foco na empresa',
          '✅ **Guarde uma cópia** da reclamação para si',
          '✅ **Relembre** após 15 dias, se não houver resposta — escale para o regulador'
        ]}
      ]
    },
    {
      id: 'special-categories',
      title: '🎯 Categorias especiais',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Companhias aéreas', content: [
            { kind: 'checklist', items: [
              'O Livro de Reclamações funciona',
              '+ EU Regulation 261/2004 para compensação por atraso/cancelamento (ver guia eu-flight-compensation)',
              '+ ANAC (autoridade nacional da aviação) — anac.pt',
              'Através da AirHelp / Flightright, se não quiser tratar sozinho'
            ]}
          ]},
          { id: 's2', title: 'Serviços públicos', content: [
            { kind: 'checklist', items: [
              'O Livro NÃO funciona para AT, AIMA, IRN, Conservatórias',
              '**Provedor de Justiça** (ombudsman de Portugal): provedor-jus.pt — principal via de escalamento',
              '**Inspeção-Geral**: cada ministério tem uma inspecção',
              '**Reclamação ao superior hierárquico**: reclamação oficial ao superior hierárquico na mesma entidade'
            ]}
          ]},
          { id: 's3', title: 'Negócios online', content: [
            { kind: 'checklist', items: [
              'Plataformas (Glovo, Uber, Airbnb, Booking) — primeiro através dos processos internos próprios',
              'Se não houver solução — DGC (Direção-Geral do Consumidor) — consumer.gov.pt',
              'Transfronteiriço (site na EU) — ECC-Net (Centro Europeu do Consumidor), serviço gratuito',
              'Fora da EU — possibilidades limitadas, principalmente procedimentos internos'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Apresentação no Livro de Reclamações', amountEUR: 0 },
    { label: 'Versão online livroreclamacoes.pt', amountEUR: 0 },
    { label: 'Reclamação ao regulador', amountEUR: 0 },
    { label: 'Comissão da AirHelp', amountEUR: 0, note: '25-35% da compensação' }
  ],
  sources: [
    { title: 'Livro de Reclamações Online', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 156/2005 — Livro de Reclamações', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2005-34481275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Provedor de Justiça', url: 'https://www.provedor-jus.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGC — Direção-Geral do Consumidor', url: 'https://www.consumidor.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
