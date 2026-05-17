export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-estacionamento-pmr',
  categoryId: 'auto_trips',
  title: 'Cartão de Estacionamento PMR — estacionamento para pessoas com deficiência',
  tldr: 'Cartão de Estacionamento PMR — cartão europeu de estacionamento para pessoas com deficiência e mobilidade reduzida. Em Portugal, é emitido gratuitamente pelo IMT, normalmente com base no AMIM com incapacidade permanente ≥60% e indicação médica de limitação da mobilidade. O cartão é pessoal, não está associado ao veículo: é válido quando o titular conduz ou é transportado. Dá direito a lugares PMR e a estacionamento gratuito em lugares municipais; é reconhecido na UE.',
  tags: ['pmr', 'imt', 'estacionamento', 'amim'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'O que o cartão PMR permite',
      content: [
        { kind: 'paragraph', text: 'Cartão de Estacionamento para Pessoas com Deficiência Condicionadas na Mobilidade — cartão de estacionamento oficial azul de modelo europeu. Em Portugal, é emitido pelo IMT, não pela Câmara Municipal, nem pela polícia, nem pelo SNS.' },
        { kind: 'checklist', items: ['estacionamento em lugares assinalados com sinal de estacionamento para pessoas com deficiência / PMR', 'estacionamento gratuito em lugares municipais na via pública, incluindo zonas pagas da Câmara Municipal', 'utilização do cartão noutros países da UE pelo princípio do reconhecimento mútuo', 'o cartão não é válido para um veículo específico, mas sim para a pessoa', 'pode ser usado no seu próprio carro, táxi, automóvel alugado ou carro de um familiar, se o titular do cartão estiver no veículo', 'o cartão original deve ser colocado em local visível atrás do para-brisas, com a frente virada para o exterior'] },
        { kind: 'warning', text: 'O cartão não dá direito a bloquear entradas, passeios, passadeiras, acessos de emergência, paragens de autocarro nem lugares onde seja proibido parar. Pode haver coima e reboque mesmo com PMR.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Quem tem direito',
      content: [
        { kind: 'paragraph', text: 'A condição de base é uma deficiência comprovada por Atestado Médico de Incapacidade Multiuso (AMIM) e uma limitação real da mobilidade. Na prática, o IMT orienta-se pelo Decreto-Lei 307/2003 e alterações posteriores: o caso principal é a incapacidade permanente de natureza motora ≥60%.' },
        { kind: 'checklist', items: ['AMIM com incapacidade permanente ou de longa duração', 'normalmente ≥60% em caso de deficiência motora / limitação de deslocação', 'no AMIM ou nos documentos médicos deve ficar claro que a mobilidade está limitada', 'residentes em Portugal com NIF podem apresentar o pedido através do IMT', 'crianças e adultos têm direito ao cartão se cumprirem os critérios médicos', 'o cartão pode ser emitido para a pessoa transportada, mesmo que ela própria não conduza', 'instituições que transportam pessoas com deficiência podem ter um regime separado para veículos de serviço'] },
        { kind: 'warning', text: 'Nem todo o AMIM ≥60% significa automaticamente direito a estacionamento PMR. Se a deficiência não estiver relacionada com a mobilidade, o IMT pode pedir esclarecimentos ou recusar. Antes de apresentar o pedido, verifique a formulação do AMIM.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para apresentar no IMT',
      content: [
        { kind: 'paragraph', text: 'O conjunto de documentos é simples, mas é melhor preparar os ficheiros digitalizados com antecedência. Se o AMIM tiver sido emitido em Portugal, é o documento mais forte. Certificados estrangeiros normalmente exigem reconhecimento ou um AMIM português.' },
        { kind: 'checklist', items: ['AMIM — Atestado Médico de Incapacidade Multiuso', 'documento de identificação: Cartão de Cidadão, autorização de residência ou passaporte', 'NIF', 'comprovativo de morada em Portugal, se o IMT o solicitar', 'email e telefone de contacto', 'se o pedido for apresentado por representante — procuração ou documento que comprove a representação', 'para menor — documentos do progenitor / representante legal', 'digitalizações em PDF/JPG legíveis, sem páginas cortadas'] },
        { kind: 'warning', text: 'Não envie o AMIM original por correio sem necessidade. Para o pedido online, normalmente basta uma cópia digital; mantenha o original consigo para eventual verificação.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como pedir através do IMT',
      content: [
        { kind: 'substeps', items: [
          { id: 'online', title: '1. Apresentar o pedido online', content: [
            { kind: 'paragraph', text: 'Aceda ao IMT Online / serviços IMT e escolha o serviço Cartão de Estacionamento para Pessoas com Deficiência. Para entrar, normalmente usa-se Chave Móvel Digital (CMD), Cartão de Cidadão ou outros meios disponíveis em autenticação.gov.' },
            { kind: 'checklist', items: ['verifique os dados pessoais', 'carregue o AMIM', 'carregue o documento de identificação, se o sistema o pedir', 'indique a morada de entrega', 'guarde o comprovativo de submissão'] }
          ]},
          { id: 'desk', title: '2. Se não conseguir online — balcão IMT', content: [
            { kind: 'paragraph', text: 'Pode dirigir-se ao atendimento IMT com marcação. Isto é útil se não tiver CMD, se houver representante, documentos estrangeiros ou se o sistema não aceitar o AMIM.' }
          ]},
          { id: 'receive', title: '3. Receber o cartão', content: [
            { kind: 'paragraph', text: 'Após aprovação, o IMT emite ou envia o cartão. O prazo depende da carga do serviço; conte com algumas semanas, sobretudo em Lisboa e no Porto.' }
          ]}
        ]},
        { kind: 'warning', text: 'A emissão do cartão é gratuita. Se um intermediário pedir uma grande “taxa oficial do IMT”, isso não é uma taxa oficial pelo Cartão de Estacionamento PMR.' }
      ]
    },
    {
      id: 'use-rules',
      title: 'Como usar sem coimas',
      content: [
        { kind: 'paragraph', text: 'O cartão só funciona quando a pessoa a quem foi emitido está no veículo: como condutor ou passageiro. Não se pode deixar o cartão a um familiar “por precaução”.' },
        { kind: 'checklist', items: ['coloque o cartão original atrás do para-brisas de modo a que o número e a validade fiquem visíveis', 'use os lugares PMR apenas para entrada, saída ou estacionamento do titular do cartão', 'nos lugares municipais na via pública, o estacionamento é gratuito, mas convém verificar na mesma as regras locais de tempo/zonas no parquímetro ou no site da Câmara', 'em parques privados de centros comerciais, aeroportos e garagens concessionadas, a gratuitidade não é garantida', 'noutros países da UE, cumpra as regras locais: o direito é reconhecido, mas os limites de tempo e a gratuitidade podem variar', 'se o cartão for perdido ou roubado, informe o IMT e peça a substituição', 'quando a validade terminar, peça a renovação com antecedência, com AMIM actualizado'] },
        { kind: 'warning', text: 'O uso abusivo do cartão — por exemplo, estacionar sem a presença do titular — pode levar a coima, apreensão do cartão e problemas na renovação.' }
      ]
    },
    {
      id: 'moving-to-portugal',
      title: 'Se acabou de se mudar para Portugal',
      content: [
        { kind: 'paragraph', text: 'Se já tiver um cartão europeu de estacionamento para pessoas com deficiência emitido por outro país da UE, ele é geralmente reconhecido em Portugal. Use-o segundo as mesmas regras: cartão visível atrás do vidro, titular do cartão dentro do veículo.' },
        { kind: 'paragraph', text: 'Se o cartão ou certificado tiver sido emitido fora da UE, é melhor obter um AMIM português através do sistema de saúde e depois apresentar o pedido ao IMT. Para o AMIM, normalmente é necessária avaliação por junta médica; os prazos dependem da região e podem ser longos.' },
        { kind: 'checklist', items: ['obtenha NIF e morada em Portugal', 'inscreva-se no SNS e obtenha o número de utente, se pretende pedir o AMIM', 'reúna traduções dos relatórios médicos, se não estiverem em português', 'peça o AMIM através do Centro de Saúde / autoridade de saúde', 'depois de obter o AMIM, peça o Cartão de Estacionamento PMR no IMT'] }
      ]
    }
  ],
  costs: [
    { label: 'Emissão do Cartão de Estacionamento PMR no IMT', amountEUR: 0, note: 'O serviço oficial é gratuito; podem existir apenas custos indiretos com traduções, procuração ou deslocação ao IMT.' }
  ],
  sources: [
    { title: 'IMT: Cartão de estacionamento para pessoas com deficiência', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'INR: direitos e estacionamento de pessoas com deficiência', url: 'https://www.inr.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 307/2003 — cartão de estacionamento de modelo comunitário', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/307-2003-617116', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
