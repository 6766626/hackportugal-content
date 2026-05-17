export default {
  editorialVoice: 'hackportugal',
  id: 'pet-travel-eu-passport',
  categoryId: 'animals',
  title: 'EU pet passport e viagens com animais de companhia na UE',
  tldr: 'Para viajar na UE com um cão, gato ou furão a partir de Portugal, é necessário um EU pet passport, um microchip ISO e uma vacinação antirrábica válida. A vacinação primária só começa a contar após 21 dias; normalmente, o animal deve ter mais de 12 semanas. Até 5 animais — viagem não comercial. Madeira/Açores podem pedir documentos sanitários adicionais através do transportador/região. Para regressar de países non-EU “não listados” é necessário rabies titre ≥0,5 IU/ml; para o UK em 2026, normalmente não é necessário titre.',
  tags: ['animais', 'passaporteanimal', 'dgav', 'viagens'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-passport-covers',
      title: 'O que é o EU pet passport',
      content: [
        { kind: 'paragraph', text: 'O EU pet passport é uma caderneta de modelo normalizado da UE para cães, gatos e furões. Em Portugal, é emitido por um veterinário autorizado. O passaporte é necessário para deslocações entre países da UE e para regressar à UE a partir de alguns países terceiros, se todos os registos tiverem sido feitos correctamente antes da saída.' },
        { kind: 'paragraph', text: 'O passaporte não é um “visto” para o animal e não substitui as regras da companhia aérea, ferry, hotel ou alojamento arrendado. Confirma a identificação do animal, as vacinas antirrábicas, por vezes tratamentos antiparasitários e exames clínicos.' },
        { kind: 'checklist', items: [
          'A quem se aplica: cão, gato, furão',
          'Onde obter em Portugal: num veterinário com acesso à emissão do EU pet passport',
          'Base obrigatória para animais residentes: registo no SIAC pelo microchip',
          'O passaporte é válido enquanto o microchip for legível e os registos de vacinação estiverem actualizados',
          'Para aves, coelhos, roedores e répteis aplicam-se outras regras — o EU pet passport não é utilizado para estes animais'
        ] }
      ]
    },
    {
      id: 'minimum-eu-rules',
      title: 'Regras mínimas da UE: chip, raiva, 21 dias',
      content: [
        { kind: 'paragraph', text: 'Para uma viagem não comercial normal dentro da UE, o animal deve estar identificado com um microchip ISO 11784/11785 ou com uma tatuagem legível aplicada antes de 03.07.2011. A vacina contra a raiva deve ser administrada depois da colocação do chip ou no mesmo dia, mas não antes.' },
        { kind: 'checklist', items: [
          'Microchip: ISO 11784/11785; se o chip não for normalizado, o titular deve ter um leitor',
          'Idade: a vacinação primária contra a raiva normalmente não é feita antes das 12 semanas',
          'Espera após a primeira vacina: 21 dias antes da viagem',
          'Reforço sem atraso: é válido de imediato, se a vacina anterior ainda estava válida',
          'Reforço após atraso: conta como vacinação primária — novamente 21 dias de espera',
          'As datas no passaporte devem ser inseridas pelo veterinário: data de vacinação, prazo de validade, fabricante/lote da vacina',
          'Até 5 animais por proprietário/acompanhante autorizado — limite normal de uma viagem não comercial',
          'Mais de 5 animais são permitidos para exposições/competições/treinos mediante prova de inscrição e idade dos animais superior a 6 meses'
        ] },
        { kind: 'warning', text: 'Não compre o bilhete antes de verificar as datas. O erro mais frequente é a vacina antirrábica ter sido administrada antes do microchip ou o voo estar marcado antes do 21.º dia após a vacinação primária. Na fronteira, isto pode resultar em recusa de entrada, quarentena ou regresso a seu cargo.' }
      ]
    },
    {
      id: 'documents-before-trip',
      title: 'O que verificar 1–2 meses antes da viagem',
      content: [
        { kind: 'substeps', items: [
          { id: 'vet-check', title: '1. Verificação veterinária', content: [
            { kind: 'checklist', items: [
              'Confirmar com leitor que o número do microchip coincide com o número no passaporte e no SIAC',
              'Verificar a validade da vacina antirrábica na data de entrada e de reentrada',
              'Pedir ao veterinário para corrigir apenas de forma legal: sem rasuras, com assinatura/carimbo onde exigido',
              'Confirmar se é necessário clinical examination / health certificate para o transportador',
              'Verificar as regras do país de destino sobre tratamentos antiparasitários'
            ] }
          ] },
          { id: 'carrier-check', title: '2. Transportador', content: [
            { kind: 'paragraph', text: 'As companhias aéreas e ferries têm limites próprios quanto a peso, caixa de transporte, raças brachycephalic, número de animais na cabina e época de transporte. Estas são regras comerciais e podem ser mais rigorosas do que a legislação da UE.' }
          ] },
          { id: 'route-check', title: '3. Itinerário', content: [
            { kind: 'paragraph', text: 'Se voar em trânsito por um país non-EU ou regressar desse país à UE, verifique não só o país final, mas também todas as escalas, a saída da zona de trânsito, a mudança de aeroporto e a bagagem.' }
          ] }
        ] }
      ]
    },
    {
      id: 'madeira-azores',
      title: 'Madeira e Açores: o que muda',
      content: [
        { kind: 'paragraph', text: 'Madeira e Açores são Portugal, mas são regiões autónomas insulares com procedimentos sanitários próprios e práticas de controlo dos transportadores. Para cães, gatos e furões, em regra, são necessários microchip, EU pet passport e vacina antirrábica válida, mesmo que voe a partir de Lisboa ou do Porto.' },
        { kind: 'checklist', items: [
          'Consulte a página da DGAV sobre viagens de animais de companhia antes de comprar o bilhete',
          'Verifique as regras da Região Autónoma da Madeira ou da Região Autónoma dos Açores, se o transportador as referir',
          'Confirme antecipadamente com a companhia aérea: animal na cabina, no porão ou como cargo',
          'Leve o passaporte do animal na bagagem de mão, não o coloque na mala despachada',
          'Para alguns voos/operadores, pode ser solicitada uma declaração de saúde / atestado sanitário do veterinário alguns dias antes da partida',
          'Para cães, verifique as regras locais sobre açaime/trela e acesso a transportes públicos',
          'No voo de regresso ao continente, mantenha os mesmos documentos: passaporte, vacina, chip, reserva do animal junto do transportador'
        ] },
        { kind: 'warning', text: 'Não trate um voo interno para as ilhas “como um autocarro em Portugal”. Na prática, a recusa de embarque ocorre mais frequentemente não por causa da DGAV, mas por incumprimento dos requisitos da companhia aérea: caixa de transporte incorrecta, ausência de reserva confirmada para o animal, vacina expirada ou falta de uma veterinary declaration recente, se tiver sido pedida.' }
      ]
    },
    {
      id: 'uk-and-non-eu-return',
      title: 'UK e non-EU: quando é necessário rabies titre',
      content: [
        { kind: 'paragraph', text: 'Rabies titre é uma análise ao sangue para detectar anticorpos contra a raiva. Para entrar na UE, é obrigatória ao regressar de países que não constam das listas seguras da UE para a raiva. O resultado mínimo é 0,5 IU/ml. A amostra é colhida não antes de 30 dias após a vacinação e, depois, para entrada a partir desses países, normalmente é necessário um período de espera de 3 meses.' },
        { kind: 'paragraph', text: 'Se a análise for feita na UE antes da saída, o resultado ≥0,5 IU/ml estiver registado no EU pet passport e a vacinação antirrábica for depois mantida sem atrasos, a espera de 3 meses no regresso normalmente não se aplica. Esta é a melhor opção para viagens longas fora da UE.' },
        { kind: 'checklist', items: [
          'UK / Great Britain em 2026 normalmente não exige rabies titre para regressar à UE, porque pertence aos listed third countries',
          'Para viajar com um cão para o UK, normalmente é necessário tratamento contra tapeworm por um veterinário 24–120 horas antes da entrada',
          'Se no UK o animal recebeu um novo rabies booster, verifique se o EU passport o reconhece; por vezes, para regressar é necessário um animal health certificate',
          'A partir de um país unlisted non-EU sem titre feito previamente, podem ocorrer atrasos, quarentena ou recusa de entrada na UE',
          'O laboratório para o titre deve ser aprovado pela UE',
          'Um itinerário através de um país com elevado risco de raiva pode alterar os requisitos, mesmo que o país final seja “seguro”'
        ] },
        { kind: 'warning', text: 'O UK não é a UE. Não confunda as regras de entrada no UK com as regras de regresso à UE. Para o UK, são importantes os requisitos britânicos, incluindo tapeworm para cães; para regressar a Portugal, contam as regras da UE/DGAV e o estatuto do país de partida.' }
      ]
    },
    {
      id: 'day-of-travel',
      title: 'No dia da viagem: checklist curta',
      content: [
        { kind: 'checklist', items: [
          'EU pet passport na bagagem de mão',
          'O número do microchip no passaporte coincide com o animal',
          'Rabies vaccine válida na data de entrada',
          'Passaram 21 dias após a vacinação primária, se for a primeira vacina ou se houve atraso no reforço',
          'A reserva do animal foi confirmada por escrito pelo transportador',
          'A caixa de transporte cumpre as dimensões da companhia aérea',
          'Há trela, peitoral, açaime para cães, se exigido',
          'Para Madeira/Açores ou para o transportador — declaração de saúde recente, se tiver sido pedida',
          'Para UK/Irlanda/Finlândia/Malta/Noruega com cão — verificar tapeworm treatment 24–120 horas antes da entrada',
          'Os contactos do veterinário e as cópias dos documentos estão guardados no telemóvel'
        ] },
        { kind: 'paragraph', text: 'Na fronteira ou no embarque, podem pedir para ver o animal e ler o chip. Se o chip não for legível, os documentos deixam, na prática, de estar associados ao animal — isto cria risco de recusa de transporte.' }
      ]
    }
  ],
  costs: [
    { label: 'EU pet passport no veterinário', amountEURMin: 10, amountEURMax: 30, note: 'Valor indicativo em clínicas privadas; o preço não inclui vacinação nem chip' },
    { label: 'Microchip + registo SIAC', amountEURMin: 20, amountEURMax: 45, note: 'Depende da clínica e dos serviços incluídos' },
    { label: 'Vacina antirrábica', amountEURMin: 20, amountEURMax: 45, note: 'Normalmente anual ou pelo prazo indicado pelo fabricante e pelo veterinário' },
    { label: 'Rabies titre', amountEURMin: 60, amountEURMax: 140, note: 'O preço depende da clínica, do laboratório e do envio da amostra' },
    { label: 'Declaração de saúde / atestado sanitário', amountEURMin: 20, amountEURMax: 60, note: 'Pode ser exigida pelo transportador ou para itinerários específicos' }
  ],
  sources: [
    { title: 'DGAV — Vai viajar? FAQ (animais de companhia)', url: 'https://www.dgav.pt/faq/conteudo/vai-viajar/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Regulamento (UE) n.º 576/2013: deslocação sem carácter comercial de animais de companhia', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX%3A32013R0576', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Comissão Europeia: viajar com animais de companhia e outros animais na UE', url: 'https://europa.eu/youreurope/citizens/travel/carry/animal-plant/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Governo do UK: levar o seu cão, gato ou furão de companhia para a Great Britain', url: 'https://www.gov.uk/bring-pet-to-great-britain', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
