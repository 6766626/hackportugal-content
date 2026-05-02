export default {
  editorialVoice: 'hackportugal',
  id: 'hunting-license-pt',
  categoryId: 'daily_life',
  title: 'Licença de caçador (Carta de Caçador) e armas em Portugal',
  tldr: 'Para caçar em Portugal em 2026, um residente precisa da Carta de Caçador do ICNF: inscrição no exame, teoria sobre legislação da caça/espécies/segurança, depois licença de caça anual e seguro obrigatório de responsabilidade civil. Os não residentes, em regra, não fazem o exame português: precisam de licença especial de caça para não residentes + direito de caça válido no país de residência + seguro. As armas seguem uma via separada através da PSP: LUPA, avaliação médica/psicológica, formação, cofre, registo da arma.',
  tags: ['caça', 'armas', 'icnf', 'psp'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-frame',
      title: 'O que é exatamente necessário para caçar legalmente',
      content: [
        { kind: 'paragraph', text: 'Em Portugal, “saber disparar” não é suficiente. A caça é regulada pelo ICNF e pelas zonas de caça, enquanto as armas são reguladas pela PSP. São dois sistemas diferentes: a Carta de Caçador não dá direito a possuir uma espingarda, e a licença de arma não dá direito a caçar.' },
        { kind: 'checklist', items: [
          'Carta de Caçador — documento de identificação do caçador, normalmente exigido aos residentes após exame do ICNF',
          'Licença de caça — licença de caça anual/sazonal; sem ela, a Carta de Caçador por si só não dá direito a sair para caçar',
          'Seguro de responsabilidade civil — seguro obrigatório de responsabilidade do caçador perante terceiros',
          'Direito de caçar numa zona concreta: zona de caça associativa, turística, municipal ou território nacional com calendário venatório em vigor',
          'Para armas de fogo: LUPA da PSP e registo de cada arma',
          'Para não residentes: licença especial de caça para não residentes em vez da via normal através do exame português',
          'Para introduzir armas a partir do estrangeiro: regras separadas da PSP/alfândega; o passaporte europeu de arma de fogo, por si só, não substitui a autorização para caçar',
          'Cumprimento dos limites de abate, espécies, datas da época e regras de transporte de armas'
        ] },
        { kind: 'warning', text: 'Não é possível legalizar a caça “com efeitos retroativos”. Se for fiscalizado pela GNR/ICNF sem licença de caça válida, seguro ou direito de acesso à zona, trata-se de uma contraordenação; em infrações com armas, pode haver responsabilidade criminal e apreensão da arma.' }
      ]
    },
    {
      id: 'resident-carta',
      title: 'Via do residente: Carta de Caçador através do ICNF',
      content: [
        { kind: 'paragraph', text: 'Se vive em Portugal e quer caçar regularmente, a via de base é obter a Carta de Caçador. O pedido é feito através do serviço gov.pt/ICNF, e o exame é organizado pelo ICNF. O exame é em português; o objetivo prático é compreender as espécies locais, a segurança, a lei da caça e o calendário venatório.' },
        { kind: 'checklist', items: [
          'Verifique se tem NIF e documento de identificação: autorização de residência, Cartão de Cidadão ou passaporte com permanência legal',
          'Inscreva-se no exame da Carta de Caçador através do gov.pt ou do canal do ICNF',
          'Pague a taxa do exame/serviço segundo as referências indicadas pelo ICNF',
          'Prepare-se nos temas: espécies cinegéticas, épocas de defeso, zonas de caça, segurança, armas, cães, responsabilidade',
          'Compareça no exame com documento de identificação e comprovativo de inscrição/pagamento',
          'Depois de passar no exame, aguarde a emissão da Carta de Caçador',
          'Trate separadamente da licença de caça anual e do seguro — sem eles não pode sair para caçar',
          'Se planeia caçar com arma de fogo, comece em paralelo o processo da PSP para a LUPA'
        ] },
        { kind: 'warning', text: 'A Carta de Caçador não é uma “licença de arma”. Mesmo com Carta de Caçador, não pode comprar nem guardar uma espingarda de caça sem o procedimento da PSP ao abrigo da Lei 5/2006.' }
      ]
    },
    {
      id: 'non-resident',
      title: 'Se é não residente ou vem caçar a Portugal',
      content: [
        { kind: 'paragraph', text: 'Para estrangeiros que não residem permanentemente em Portugal, existe um regime simplificado: licença especial de caça para não residentes. Normalmente é necessário provar que já tem direito a caçar no país de residência/nacionalidade e contratar um seguro português de responsabilidade civil.' },
        { kind: 'checklist', items: [
          'Passaporte ou ID válido',
          'Documento que comprove o direito de caça no seu país: hunting licence / hunter card / licença de caçador',
          'Tradução ou explicação do documento, se não estiver em PT/EN/ES/FR; na prática, o organizador da caça ajuda frequentemente',
          'Licença especial de caça para não residentes, emitida através do ICNF/canal autorizado',
          'Seguro de responsabilidade civil válido em Portugal — seguro de responsabilidade do caçador',
          'Confirmação da caça numa zona concreta: convite, contrato com zona de caça turística/associativa ou organizador',
          'Se trouxer armas da UE: European Firearms Pass + convite/fundamento da viagem + cumprimento das regras da PSP',
          'Se trouxer armas de um país terceiro: confirme antecipadamente a autorização temporária da PSP e o regime aduaneiro; não traga armas “à sorte”'
        ] },
        { kind: 'warning', text: 'A licença especial para não residentes não transforma um turista em proprietário de uma arma portuguesa. Ela cobre o direito de caçar mediante o cumprimento das condições, mas o transporte, a introdução, o armazenamento e a utilização de armas continuam sujeitos às regras da PSP e da Lei 5/2006.' }
      ]
    },
    {
      id: 'insurance-and-season',
      title: 'Seguro, época e local de caça',
      content: [
        { kind: 'paragraph', text: 'O seguro obrigatório é um dos documentos mais frequentemente verificados no terreno. Deve cobrir a responsabilidade civil do caçador perante terceiros em Portugal. A apólice costuma ser emitida por época; clubes de caça e organizadores vendem frequentemente um pacote “licença + seguro”.' },
        { kind: 'checklist', items: [
          'Verifique se a apólice menciona expressamente caça/atividade cinegética, e não apenas desporto ou viagens',
          'Leve consigo uma cópia em papel ou offline da apólice: nas zonas rurais, a internet é muitas vezes instável',
          'Antes de sair, consulte o calendário venatório do ICNF para a época atual: espécies, datas, limites e métodos permitidos',
          'Confirme o tipo de zona: municipal, associativa, turística ou outra; as regras de acesso são diferentes',
          'Não confie em “os locais disseram que pode”: são necessários documentos da zona ou acompanhamento por um organizador responsável',
          'Respeite as distâncias em relação a casas, estradas, pessoas, gado e trabalhos agrícolas',
          'Transporte a arma descarregada, dentro de estojo, separada das munições, se aplicável às condições da licença',
          'Após a caça, guarde os documentos relativos ao abate/autorização, se a zona exigir reporte'
        ] },
        { kind: 'warning', text: 'O calendário venatório muda de época para época. As datas de caça ao coelho, javali, perdiz, pombo e outras espécies não podem ser copiadas do PDF do ano anterior ou de conselhos no Facebook.' }
      ]
    },
    {
      id: 'firearms-psp',
      title: 'Armas: licença separada da PSP',
      content: [
        { kind: 'paragraph', text: 'As armas de fogo são controladas pela Polícia de Segurança Pública (PSP). Para caça, normalmente estão em causa as classes C/D ao abrigo da Lei 5/2006, mas a categoria concreta depende do tipo de arma. O processo inclui verificação de aptidão, formação, registo da arma e requisitos de armazenamento.' },
        { kind: 'checklist', items: [
          'Apresente o pedido de Licença de Uso e Porte de Arma (LUPA) na PSP/SIGAE ou através do canal disponível da PSP',
          'Prepare ID/autorização de residência, NIF, comprovativo de morada e prova de permanência legal',
          'Obtenha atestado médico de aptidão física e psíquica; a PSP pode exigir avaliação psicológica',
          'Faça a formação/exame obrigatório de segurança no manuseamento de armas, se aplicável à sua categoria',
          'Apresente certificado do registo criminal, se a PSP não o obtiver diretamente',
          'Comprove a necessidade da arma: caça, tiro desportivo ou outra finalidade legal',
          'Organize o armazenamento seguro em casa: armário/cofre, munições guardadas separadamente, acesso apenas pelo proprietário',
          'Após a compra, registe a arma e guarde o livrete/documentos de registo juntamente com a licença',
          'Renove a LUPA com antecedência; o atraso pode levar à apreensão da arma e a sanções administrativas'
        ] },
        { kind: 'warning', text: 'Não compre uma arma de caça “com recibo” a um particular sem a PSP. A transmissão de arma sem registo e autorização legais é um risco grave ao abrigo da Lei 5/2006.' }
      ]
    },
    {
      id: 'practical-route',
      title: 'Roteiro prático para um expat',
      content: [
        { kind: 'paragraph', text: 'A via mais segura é decidir primeiro se é residente-caçador ou convidado para uma viagem. Para uma única caçada organizada, é quase sempre mais barato e mais rápido seguir pela licença especial para não residentes e por um organizador local. Para viver em Portugal e caçar regularmente — Carta de Caçador + licença anual + PSP, se precisar da sua própria arma.' },
        { kind: 'checklist', items: [
          'Se vive em Portugal: comece pela Carta de Caçador do ICNF, depois trate da licença de caça e do seguro',
          'Se vem para 1–2 caçadas: peça ao organizador que emita/verifique a licença especial de caça para não residentes',
          'Se já tem arma noutro país da UE: prepare antecipadamente o European Firearms Pass e o convite para a caça',
          'Se vem de um país fora da UE: antes de comprar bilhetes, confirme junto da PSP a importação temporária e os documentos da arma',
          'Se o seu português é fraco: recorra a uma associação de caçadores ou a uma zona de caça turística; conhecem as regras locais',
          'Tenha sempre o conjunto de documentos no carro e consigo: ID, Carta/licença, seguro, documentos da arma, autorização da zona',
          'Não misture caça e álcool: em caso de incidente, isso agrava a responsabilidade e o litígio com o seguro',
          'Depois de mudar para outro concelho, atualize a morada nos sistemas relacionados com armas e documentos'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Exame/emissão da Carta de Caçador através do ICNF', amountEURMin: 20, amountEURMax: 40, note: 'A taxa exata depende do serviço do ICNF e da forma de apresentação; verifique no gov.pt/ICNF antes de pagar.' },
    { label: 'Licença de caça anual', amountEURMin: 30, amountEURMax: 80, note: 'Valor indicativo para licença regional/nacional; o montante varia consoante o tipo de licença e a época.' },
    { label: 'Seguro de caçador', amountEURMin: 15, amountEURMax: 50, note: 'Apólice sazonal típica de responsabilidade civil para caça; pacotes de clubes podem custar mais.' },
    { label: 'Pacote de caça organizada para não residente', amountEURMin: 100, amountEURMax: 500, note: 'Não inclui voos e alojamento; depende da zona, do tipo de caça, do acompanhamento e dos documentos incluídos.' },
    { label: 'Procedimento da PSP para armas', amountEURMin: 50, amountEURMax: 250, note: 'Taxas, formação, avaliação médica/psicológica e documentos; não inclui o custo da arma, do cofre e das munições.' }
  ],
  sources: [
    { title: 'gov.pt: obter a Carta de Caçador', url: 'https://www2.gov.pt/en/servicos/obter-a-carta-de-cacador', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'ICNF: caça, licenças, calendário venatório e gestão cinegética', url: 'https://www.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'PSP: armas e explosivos, licenças de uso e porte de arma', url: 'https://www.psp.pt/Pages/atividades/ArmasExplosivos.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 5/2006: regime jurídico das armas e munições', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34574575', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
