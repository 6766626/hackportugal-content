export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-estacionamento-pmr',
  categoryId: 'auto_trips',
  title: 'Cartão de Estacionamento PMR — estacionamento para pessoas com deficiência',
  tldr: 'O Cartão de Estacionamento PMR é o cartão europeu de estacionamento para pessoas com deficiência e mobilidade condicionada. Em Portugal, é emitido gratuitamente pelo IMT, normalmente com base no AMIM com incapacidade permanente ≥60% e indicação médica de mobilidade condicionada. O cartão é pessoal, não está associado a um automóvel: é válido quando o titular conduz ou é transportado. Dá direito a lugares PMR e a estacionamento gratuito em lugares municipais; é reconhecido na UE.',
  tags: ['pmr', 'imt', 'estacionamento', 'amim'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que o cartão PMR permite',
      content: [
        { kind: 'paragraph', text: 'O Cartão de Estacionamento para Pessoas com Deficiência Condicionadas na Mobilidade é o cartão oficial azul de estacionamento ao estilo da UE. Em Portugal, é emitido pelo IMT, não pela Câmara Municipal, nem pela polícia, nem pelo SNS.' },
        { kind: 'checklist', items: ['estacionamento em lugares assinalados com o sinal de estacionamento para pessoas com deficiência / PMR', 'estacionamento gratuito em lugares municipais na via pública, incluindo zonas pagas da Câmara Municipal', 'utilização do cartão noutros países da UE pelo princípio do reconhecimento mútuo', 'o cartão não se aplica a um automóvel específico, mas sim à pessoa', 'pode ser usado no seu próprio automóvel, táxi, carro alugado ou automóvel de um familiar, se o titular do cartão viajar no veículo', 'o cartão original deve ser colocado em local visível atrás do para-brisas, com a frente virada para fora'] },
        { kind: 'warning', text: 'O cartão não dá direito a bloquear entradas, passeios, passadeiras, acessos de emergência, paragens de autocarro nem locais onde seja proibido parar. A coima e o reboque são possíveis mesmo com PMR.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem tem direito',
      content: [
        { kind: 'paragraph', text: 'A condição de base é uma deficiência comprovada por Atestado Médico de Incapacidade Multiuso (AMIM) e uma limitação real da mobilidade. Na prática, o IMT orienta-se pelo Decreto-Lei 307/2003 e alterações posteriores: o caso-chave é incapacidade permanente de natureza motora ≥60%.' },
        { kind: 'checklist', items: ['AMIM com deficiência permanente ou de longa duração', 'normalmente ≥60% em caso de incapacidade motora / limitação de deslocação', 'no AMIM ou nos documentos médicos deve ficar claro que a mobilidade está condicionada', 'residentes em Portugal com NIF podem apresentar o pedido através do IMT', 'crianças e adultos têm direito ao cartão se cumprirem os critérios médicos', 'o cartão pode ser emitido para a pessoa que é transportada, mesmo que ela própria não conduza', 'instituições que transportam pessoas com deficiência podem ter um regime separado para veículos de serviço'] },
        { kind: 'warning', text: 'Nem todo o AMIM ≥60% significa automaticamente direito ao estacionamento PMR. Se a deficiência não estiver relacionada com a mobilidade, o IMT pode pedir esclarecimentos ou recusar. Antes de apresentar o pedido, verifique a formulação do AMIM.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para apresentar no IMT',
      content: [
        { kind: 'paragraph', text: 'O conjunto de documentos é simples, mas é melhor preparar os digitalizados com antecedência. Se o AMIM foi emitido em Portugal, é o documento mais forte. Atestados estrangeiros geralmente exigem reconhecimento ou um AMIM português.' },
        { kind: 'checklist', items: ['AMIM — Atestado Médico de Incapacidade Multiuso', 'documento de identificação: Cartão de Cidadão, autorização de residência ou passaporte', 'NIF', 'comprovativo de morada em Portugal, se o IMT o solicitar', 'email e telefone de contacto', 'se o pedido for apresentado por representante — procuração ou documento que comprove a representação', 'para menor — documentos do progenitor / representante legal', 'digitalizações legíveis em PDF/JPG, sem páginas cortadas'] },
        { kind: 'warning', text: 'Não envie o AMIM original por correio sem necessidade. Para o pedido online, normalmente basta uma cópia digital; mantenha o original consigo para eventual verificação.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como tratar através do IMT',
      content: [
        { kind: 'substeps', items: [
          { id: 'online', title: '1. Apresentar o pedido online', content: [
            { kind: 'paragraph', text: 'Entre no IMT Online / serviços IMT e escolha o serviço Cartão de Estacionamento para Pessoas com Deficiência. Para iniciar sessão, normalmente usa-se Chave Móvel Digital (CMD), Cartão de Cidadão ou outros métodos disponíveis em autenticação.gov.' },
            { kind: 'checklist', items: ['verifique os dados pessoais', 'carregue o AMIM', 'carregue o documento de identificação, se o sistema pedir', 'indique a morada de entrega', 'guarde o comprovativo de submissão'] }
          ]},
          { id: 'desk', title: '2. Se não conseguir online — balcão IMT', content: [
            { kind: 'paragraph', text: 'Pode dirigir-se ao atendimento IMT mediante marcação. Isto é útil se não tiver CMD, se houver um representante, documentos estrangeiros ou se o sistema não aceitar o AMIM.' }
          ]},
          { id: 'receive', title: '3. Receber o cartão', content: [
            { kind: 'paragraph', text: 'Após aprovação, o IMT emite ou envia o cartão. O prazo depende da carga do serviço; conte com algumas semanas, sobretudo em Lisboa e no Porto.' }
          ]}
        ]},
        { kind: 'warning', text: 'O serviço de emissão do cartão é gratuito. Se um intermediário pedir uma “taxa estatal IMT” elevada, isso não é uma taxa oficial pelo Cartão de Estacionamento PMR.' }
      ]
    },
    {
      id: 'use-rules',
      title: 'Como usar sem coimas',
      content: [
        { kind: 'paragraph', text: 'O cartão só funciona quando a pessoa a quem foi emitido se encontra no automóvel: como condutor ou passageiro. Não se pode deixar o cartão a um familiar “para o que der e vier”.' },
        { kind: 'checklist', items: ['coloque o cartão original atrás do para-brisas de forma a que o número e a validade fiquem visíveis', 'use lugares PMR apenas para entrada, saída ou estacionamento do titular do cartão', 'nos lugares municipais na via pública o estacionamento é gratuito, mas é sempre melhor verificar as regras locais de tempo/zonas no parquímetro ou no site da Câmara', 'em parques privados de centros comerciais, aeroportos e garagens concessionadas, a gratuitidade não é garantida', 'noutros países da UE, cumpra as regras locais: o direito é reconhecido, mas os limites de tempo e a obrigação de pagamento podem variar', 'se o cartão for perdido ou roubado, informe o IMT e peça uma substituição', 'quando o prazo de validade terminar, peça a renovação com antecedência, com AMIM atualizado'] },
        { kind: 'warning', text: 'O uso abusivo do cartão — por exemplo, estacionar sem a presença do titular — pode levar a coima, apreensão do cartão e problemas na renovação.' }
      ]
    },
    {
      id: 'moving-to-portugal',
      title: 'Se acabou de se mudar para Portugal',
      content: [
        { kind: 'paragraph', text: 'Se já tiver um EU disability parking card de outro país da UE, normalmente é reconhecido em Portugal. Use-o segundo as mesmas regras: cartão visível atrás do vidro, titular do cartão dentro do automóvel.' },
        { kind: 'paragraph', text: 'Se o cartão ou o atestado tiverem sido emitidos fora da UE, é melhor tratar de um AMIM português através do sistema de saúde e depois apresentar o pedido no IMT. Para o AMIM, normalmente é necessária avaliação por junta médica; os prazos dependem da região e podem ser longos.' },
        { kind: 'checklist', items: ['obtenha NIF e morada em Portugal', 'inscreva-se no SNS e obtenha número de utente, se pretende tratar do AMIM', 'reúna traduções de relatórios médicos, se não estiverem em português', 'peça o AMIM através do Centro de Saúde / autoridade de saúde', 'depois de obter o AMIM, apresente o pedido do Cartão de Estacionamento PMR no IMT'] }
      ]
    }
  ],
  costs: [
    { label: 'Emissão do Cartão de Estacionamento PMR no IMT', amountEUR: 0, note: 'O serviço oficial é gratuito; só podem existir custos indiretos com traduções, procuração ou deslocação ao IMT.' }
  ],
  sources: [
    { title: 'IMT: Cartão de estacionamento para pessoas com deficiência', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'INR: direitos e estacionamento de pessoas com deficiência', url: 'https://www.inr.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 307/2003 — cartão de estacionamento de modelo comunitário', url: 'https://dre.pt', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
