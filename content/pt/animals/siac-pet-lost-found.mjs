export default {
  editorialVoice: 'hackportugal',
  id: 'siac-pet-lost-found',
  categoryId: 'animals',
  title: 'SIAC.pt: animal de companhia perdido ou encontrado em Portugal',
  tldr: 'O SIAC é a base portuguesa de microchips para cães, gatos e furões. Se o animal de companhia se perdeu, anuncie o desaparecimento em SIAC.pt com o número do microchip e confirme imediatamente que o telefone, email e morada do titular estão actualizados. Se encontrou um animal, não o registe em seu nome: leve-o a um veterinário, Câmara Municipal, GNR/PSP ou canil para leitura do chip. Através da Europetnet é possível procurar chips estrangeiros. O anúncio no SIAC é gratuito; o veterinário pode cobrar a consulta.',
  tags: ['siac', 'animal de companhia', 'microchip', 'animais'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-siac-does',
      title: 'O que é o SIAC e porque o microchip resolve tudo',
      content: [
        { kind: 'paragraph', text: 'O SIAC é o Sistema de Informação de Animais de Companhia, a base nacional de identificação de animais de companhia em Portugal. Para cães, gatos e furões, a identificação por microchip e o registo no SIAC são a base jurídica normal segundo o Decreto-Lei 82/2019.' },
        { kind: 'paragraph', text: 'O microchip em si não contém GPS. Guarda um número. Um veterinário, canil municipal, polícia ou serviço autorizado lê o número e procura o titular no SIAC. Por isso, a probabilidade de recuperar o animal depende não só do chip, mas também de o telefone, email e morada do titular estarem actualizados.' },
        { kind: 'checklist', items: ['Confirme que tem o número de identificação eletrónica — o número de microchip de 15 dígitos.', 'Guarde o DIAC — Documento de Identificação do Animal de Companhia, emitido após o registo.', 'Depois de se mudar para Portugal, não confie apenas numa base estrangeira: peça ao veterinário para confirmar o registo no SIAC.', 'Depois de mudar de telefone, email, morada ou titular, actualize os dados através de um veterinário ou de outra entidade registadora.', 'Se o animal se perder, o anúncio em SIAC.pt é submetido com o número do microchip.', 'Se o animal for encontrado, primeiro lê-se o microchip e depois contacta-se o titular.'] }
      ]
    },
    {
      id: 'lost-animal',
      title: 'Se o seu animal de companhia se perdeu 🐕',
      content: [
        { kind: 'paragraph', text: 'Não espere 24 horas. Em Portugal, os animais encontrados são frequentemente levados a um veterinário, a um canil municipal ou comunicados à Câmara Municipal. Quanto mais cedo o estado "desaparecido" surgir no SIAC, mais rapidamente a leitura do chip levará até si.' },
        { kind: 'substeps', items: [
          { id: 'prepare-data', title: '1. Reúna os dados', content: [
            { kind: 'checklist', items: ['Número do microchip no DIAC, no passaporte do animal ou na clínica veterinária.', 'Nome do animal, espécie e raça, cor, sexo, idade.', 'Data e hora aproximada do desaparecimento.', 'Localização exacta: rua, freguesia, concelho, pontos de referência.', 'O seu telefone com WhatsApp/chamadas e email.', 'Fotografia do animal, de preferência recente e de corpo inteiro.', 'Sinais particulares: coleira, cicatriz, medicação, medo de pessoas, agressividade, dieta.'] }
          ]},
          { id: 'submit-siac', title: '2. Submeta o anúncio no SIAC', content: [
            { kind: 'paragraph', text: 'Abra SIAC.pt → "Anunciar Animal Desaparecido". Preencha o formulário com o número do microchip, contactos e local do desaparecimento. Se os dados do titular na base não corresponderem aos actuais, telefone em paralelo ao seu veterinário e peça para actualizar os contactos no SIAC.' }
          ]},
          { id: 'call-local-network', title: '3. Avise os serviços locais', content: [
            { kind: 'checklist', items: ['Veterinário onde o animal está registado.', 'Canil/Gatil municipal ou Centro de Recolha Oficial de Animais do seu concelho.', 'Câmara Municipal — departamento de proteção animal ou ambiente.', 'Junta de Freguesia da zona do desaparecimento.', 'GNR ou PSP, se o animal puder estar na estrada ou houver suspeita de furto.', 'Clínicas veterinárias vizinhas: peça para lerem o chip e confirmarem no SIAC.', 'Grupos locais de Facebook/WhatsApp da zona, mas sem publicar o número completo do microchip.'] }
          ]}
        ]},
        { kind: 'warning', text: 'Não publique o número completo do microchip, uma cópia do DIAC ou os seus documentos em grupos abertos. Para um anúncio público bastam fotografia, zona, nome do animal, telefone e sinais particulares. O número completo é necessário para o SIAC, veterinário e serviços oficiais.' }
      ]
    },
    {
      id: 'found-animal',
      title: 'Se encontrou um animal 🐈',
      content: [
        { kind: 'paragraph', text: 'A sua tarefa é manter o animal em segurança e verificar o microchip o mais rapidamente possível. Não registe o animal encontrado em seu nome, não o transporte para longe sem necessidade e não o entregue a terceiros sem verificar o titular.' },
        { kind: 'checklist', items: ['Se o animal estiver ferido — leve-o ao veterinário mais próximo ou telefone para o 112 se houver perigo para pessoas/estrada.', 'Se o animal estiver calmo — fotografe-o, registe a localização exacta e a hora em que foi encontrado.', 'Peça a qualquer veterinário para ler o microchip. Muitas clínicas ajudam gratuitamente, mas a consulta pode ser cobrada.', 'Se não houver clínicas por perto — contacte o canil municipal, Câmara Municipal, GNR ou PSP.', 'Se o microchip for encontrado no SIAC, o contacto com o titular é normalmente feito pelo veterinário ou por um serviço autorizado através da base.', 'Se o chip for estrangeiro, verifique através da Europetnet ou peça ao veterinário para o fazer.', 'Se não houver chip, submeta um anúncio "Animal Encontrado" em SIAC.pt e informe a Câmara Municipal.'] },
        { kind: 'paragraph', text: 'Em SIAC.pt existe um formulário separado "Anunciar Animal Encontrado". É útil quando encontrou um animal e quer deixar registo no sistema nacional: são indicados os dados do animal, local onde foi encontrado, contactos de quem encontrou e, se conhecido, o número do microchip.' },
        { kind: 'warning', text: 'Não pode simplesmente ficar com um cão ou gato encontrado. Em Portugal, o titular é determinado pelo SIAC/DIAC, e a alteração de titularidade deve ser feita através do sistema. A apropriação sem autorização pode criar problemas jurídicos, sobretudo se o titular já tiver comunicado o desaparecimento.' }
      ]
    },
    {
      id: 'europetnet-foreign-chip',
      title: 'Chip estrangeiro e Europetnet',
      content: [
        { kind: 'paragraph', text: 'A Europetnet agrega muitas bases europeias de microchips. Se o animal veio de outro país ou se o chip encontrado não aparece no SIAC, o número pode ser verificado através da Europetnet: o sistema mostra em que base o chip está registado e para onde deve contactar a seguir.' },
        { kind: 'checklist', items: ['Introduza o microchip de 15 dígitos sem espaços.', 'Se o sistema indicar uma base estrangeira, contacte essa base ou peça ajuda ao veterinário.', 'Se o animal é seu e se mudou para Portugal, registe/associe os dados no SIAC através de um veterinário.', 'Confirme que no SIAC consta um telefone português ou email através do qual será realmente encontrado.', 'Se o animal tiver EU pet passport, confirme o número do microchip no passaporte, no SIAC e na Europetnet.', 'Em viagem, mantenha uma chapa na coleira com o telefone, porque o microchip exige um leitor.'] },
        { kind: 'warning', text: 'A Europetnet não substitui o SIAC. Para viver em Portugal, um animal encontrado por um serviço local deve ser identificável através de um contacto português funcional do titular. Um número estrangeiro sem telefone actualizado atrasa frequentemente a devolução durante dias.' }
      ]
    },
    {
      id: 'update-owner-data',
      title: 'Como actualizar os dados do titular no SIAC',
      content: [
        { kind: 'paragraph', text: 'A razão mais frequente pela qual o chip "não funciona" é um telefone antigo, o email do titular anterior ou uma morada noutro país. Depois de uma mudança de casa, troca de número, divórcio, transmissão do animal ou morte do titular, actualize o SIAC antes que aconteça alguma coisa.' },
        { kind: 'checklist', items: ['Marque consulta com um veterinário e peça para verificar a ficha SIAC.', 'Leve passaporte/autorização de residência ou Cartão de Cidadão, NIF se tiver, DIAC e EU pet passport.', 'Confirme o nome do titular, morada, telefone, email.', 'Se o animal passou para si vindo de outro titular, faça a alteração de titularidade, e não apenas uma entrega verbal.', 'Depois da alteração, peça o DIAC actualizado ou uma confirmação.', 'Guarde o número do microchip no telefone, na nuvem e junto de um segundo membro da família.', 'Se os dados no SIAC estiverem errados, não adie: o desaparecimento do animal é o pior momento para burocracia.'] },
        { kind: 'paragraph', text: 'Segundo o Decreto-Lei 82/2019, o titular é obrigado a comunicar alterações relevantes, incluindo desaparecimento, morte, alteração de titular e de dados. Na prática, o mais simples é fazê-lo através de um veterinário, porque este tem acesso ao SIAC e leitor para confirmar o microchip.' }
      ]
    }
  ],
  costs: [
    { label: 'Anúncio "animal desaparecido/encontrado" em SIAC.pt', amountEUR: 0, note: 'A submissão através dos formulários públicos do SIAC é gratuita.' },
    { label: 'Leitura do microchip', amountEURMin: 0, amountEURMax: 20, note: 'Frequentemente gratuita no veterinário, canil municipal ou serviços; uma clínica privada pode registá-la como consulta.' },
    { label: 'Microchip + primeiro registo no SIAC', amountEURMin: 15, amountEURMax: 35, note: 'O preço de mercado no veterinário depende da clínica e inclui o acto de identificação/registo.' },
    { label: 'Actualização dos dados do titular', amountEURMin: 0, amountEURMax: 15, note: 'Depende do veterinário; alguns fazem juntamente com uma consulta normal.' }
  ],
  sources: [
    { title: 'SIAC: anunciar animal desaparecido', url: 'https://www.siac.pt/pt/anunciar-animal-desaparecido', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SIAC: anunciar animal encontrado', url: 'https://www.siac.pt/pt/anunciar-animal-encontrado', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 82/2019: identificação de animais de companhia e SIAC', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/82-2019-122728684', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Europetnet: pesquisa de microchip em bases europeias', url: 'https://www.europetnet.com/', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
