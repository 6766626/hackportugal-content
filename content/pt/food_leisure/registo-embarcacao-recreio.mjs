export default {
  editorialVoice: 'hackportugal',
  id: 'registo-embarcacao-recreio',
  categoryId: 'food_leisure',
  title: 'Registo de embarcação de recreio — Capitania',
  tldr: 'Qualquer embarcação com mais de 2,5 m de comprimento ou com motor de potência superior a 4,5 kW exige registo na Capitania do Porto (sob a DGAM/AMN — AMN: autoridade marítima nacional).\n\nA classe de navegação — Local/Costeira/Largo — determina onde pode navegar e que equipamento é necessário.\n\nCusto do registo: ~50–200 € consoante a classe e o tamanho. Em paralelo, são necessários: seguro (~150–400 € por ano), licença de exploração (~50 €) e, para pesca, uma licença separada de pesca lúdica a partir de embarcação. Importação da UE: o IVA é pago apenas para embarcação nova; usada (6+ meses e/ou 100+ horas de motor) — sem IVA. De países fora da UE — direitos aduaneiros + IVA + equivalente ao ISV. Uma embarcação importada é registada novamente em Portugal e recebe um novo número.',
  tags: ['barco', 'embarcação', 'registo', 'capitania', 'amn'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando o registo é obrigatório',
      content: [
        { kind: 'checklist', items: [
          '✅ Qualquer embarcação com mais de 2,5 m de comprimento',
          '✅ Qualquer embarcação a motor com motor de potência superior a 4,5 kW (~6 cv)',
          '✅ Veleiros de qualquer tamanho, se saírem da zona balnear',
          '✅ Caiaques e SUP com qualquer motor',
          '✅ Motos de água — todas',
          '❌ Pequenos caiaques de plástico e pranchas de SUP sem motor — não precisam de registo',
          '❌ Colchões e boias insufláveis — não são considerados embarcações'
        ] },
        { kind: 'paragraph', text: 'Se a embarcação estiver em Portugal há mais de 6 meses — o registo é obrigatório independentemente do país de bandeira. Isto também se aplica a iates “visitantes temporários”.' }
      ]
    },
    {
      id: 'classes',
      title: 'Classes de navegação (categoria de navegação)',
      content: [
        { kind: 'paragraph', text: 'A classe determina a que distância da costa e em que condições é permitido navegar. Esta é a decisão mais importante no momento do registo.' },
        { kind: 'checklist', items: [
          'Local: até 5 milhas da costa em águas abrigadas. Equipamento mínimo. Adequada para pesca costeira diurna.',
          'Costeira: até 25 milhas. São obrigatórios rádio VHF e coletes salva-vidas; EPIRB é recomendado.',
          'Costeira-oceânica: até 60 milhas. Conjunto de equipamento alargado.',
          'Largo: sem limites de distância. Requisitos próximos dos da IMO.',
          'Interior: rios e albufeiras. Categoria separada.'
        ] },
        { kind: 'paragraph', text: 'Quanto mais elevada for a classe, mais caros são o registo, o seguro e a manutenção. Para pesca de praia, 90% das pessoas escolhem Local.' }
      ]
    },
    {
      id: 'how-to-register',
      title: 'Processo de registo de uma embarcação nova',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Documentos do proprietário',
            content: [
              { kind: 'checklist', items: [
                'NIF e Cartão de Cidadão ou passaporte + comprovativo de morada',
                'IBAN para reembolso de pagamentos em excesso',
                'Procuração, se o pedido não for apresentado pelo proprietário'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Documentos da embarcação',
            content: [
              { kind: 'checklist', items: [
                'Factura para embarcação nova ou declaração de venda para embarcação usada',
                'Certificado CE (para embarcações novas da UE): declaração de conformidade',
                'Dados técnicos: comprimento, largura, calado, potência do motor, material do casco, modelo',
                'Fotografias da embarcação de vários ângulos e do número de série (HIN — Hull Identification Number)',
                'Para importação de países fora da UE: declaração aduaneira DAU'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Entrega na Capitania do Porto',
            content: [
              { kind: 'paragraph', text: 'Dirija-se à Capitania mais próxima (Lisboa, Cascais, Sesimbra, Setúbal, Peniche, Aveiro, Porto, Olhão, Faro, entre outras). Pode marcar online em amn.pt → Capitania → Marcação.' },
              { kind: 'checklist', items: [
                'Preencher o requerimento (formulário)',
                'Pagar a taxa de registo (depende da classe e do tamanho)',
                'Obter o registo temporário de imediato',
                'O registo definitivo chega por correio em 2–4 semanas'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Obter o número de registo e aplicá-lo no casco',
            content: [
              { kind: 'paragraph', text: 'Formato: P-XX-NNNN, em que P — Portugal, XX — porto de registo (LX — Lisboa, CS — Cascais, SE — Setúbal, FA — Faro, etc.), NNNN — número. O número deve ser aplicado no casco de ambos os lados com tinta indelével ou numa placa colocada em local visível.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'imported-boats',
      title: 'Importação de embarcação da UE ou de países fora da UE',
      content: [
        { kind: 'paragraph', text: 'Se se mudar para Portugal com a sua embarcação — terá de a registar novamente.' },
        { kind: 'checklist', items: [
          'Da UE, embarcação nova (< 6 meses ou < 100 horas de motor): é necessário pagar IVA 23% em Portugal',
          'Da UE, usada (> 6 meses e > 100 horas): não é necessário pagar IVA, mas o registo é obrigatório',
          'De países fora da UE: direitos aduaneiros (normalmente 0% para embarcações de recreio), IVA 23% sobre o valor declarado, equivalente ao ISV pelo motor',
          'O DAU (declaração aduaneira) é tratado na alfândega portuária',
          'Depois da alfândega — registo normal na Capitania'
        ] },
        { kind: 'paragraph', text: 'Se tinha uma embarcação noutro país da UE, ao mudar-se para Portugal com autorização de residência pode usar o regime de transferência de residência (isenção de IVA), se a embarcação estiver na sua propriedade há mais de 6 meses e se se mudar de forma permanente. O pedido é feito através das Finanças no prazo de 12 meses após o registo em Portugal.' }
      ]
    },
    {
      id: 'mandatory-equipment',
      title: 'Equipamento obrigatório por classe',
      content: [
        { kind: 'paragraph', text: 'Mínimo para a classe Local:' },
        { kind: 'checklist', items: [
          'Coletes salva-vidas em número igual ao de pessoas a bordo',
          'Âncora com cabo de comprimento não inferior a 4× a profundidade na zona de navegação prevista',
          'Sinal sonoro de socorro (apito ou sirene)',
          'Extintor, se estiver instalado motor de combustão interna',
          'Bomba ou balde para escoamento de água',
          'Motor suplente ou remos (se o motor principal tiver potência superior a 4,5 kW)',
          'Kit de primeiros socorros',
          'Lanterna impermeável'
        ] },
        { kind: 'paragraph', text: 'Para a classe Costeira, adicionalmente:' },
        { kind: 'checklist', items: [
          'Rádio VHF (exige licença separada — ver guia sobre Carta de Marinheiro/VHF)',
          'GPS ou plotter/cartas de navegação',
          'Foguetes de sinalização',
          'EPIRB é recomendado',
          'Balsa salva-vidas para embarcações com mais de 6 m de comprimento'
        ] }
      ]
    },
    {
      id: 'insurance',
      title: 'Seguro — obrigatório',
      content: [
        { kind: 'paragraph', text: 'O seguro de responsabilidade civil é obrigatório para as embarcações de recreio (Decreto-Lei 93/2018, art. 33.º), com capital mínimo seguro de 250 000 €. Isentas apenas embarcações a remos/canoas e pequenas embarcações de praia que naveguem a menos de 300 m da costa.' },
        { kind: 'checklist', items: [
          'Mínimo: responsabilidade civil ~150–300 € por ano',
          'Completo (corpo + civil): 0,5–1,5% do valor da embarcação por ano',
          'Documentos russos/ucranianos são aceites por seguradoras portuguesas habituais (Tranquilidade, Fidelidade, Allianz, Lusitania), o essencial é que a embarcação esteja registada em PT',
          'Cobertura: danos a terceiros, casco, motor, equipamento, reboque, assistência',
          'Franquia: normalmente 5–10% do valor da embarcação ou montante fixo'
        ] }
      ]
    },
    {
      id: 'fees-renewal',
      title: 'Pagamentos e renovação',
      content: [
        { kind: 'paragraph', text: 'Uma vez por ano é necessária uma licença de exploração da embarcação (equivalente à inspeção periódica de um automóvel):' },
        { kind: 'checklist', items: [
          'Local: ~50 € por ano',
          'Costeira: ~80 € por ano',
          'Largo: ~150 € por ano',
          'Inspeção: de 4 em 4 anos para a maioria das classes, ~50–100 € por visita',
          'Também é cobrada uma taxa anual (taxa de embarcação) — ~30–100 € consoante o tamanho'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Coimas por infrações',
      content: [
        { kind: 'checklist', items: [
          'Embarcação sem registo: 250–2 500 € + possível apreensão',
          'Sem licença de exploração: 100–500 €',
          'Sem seguro: 300–3 000 € para pessoas singulares (600–12 000 € para pessoas coletivas), nos termos do art. 54.º do DL 93/2018',
          'Falta de equipamento obrigatório: 100–1 000 € (por cada item em falta)',
          'Exceder a classe de navegação (embarcação Local em zona Largo): 250–1 500 €',
          'Utilização da embarcação sem a carta de navegador exigida: 500–2 500 €'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Registo de embarcação — classe Local', amountEURMin: 50, amountEURMax: 100, note: 'Pagamento único, comprimento 5–7 m' },
    { label: 'Registo de embarcação — classe Costeira', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Licença anual de navegação — classe Local', amountEUR: 50 },
    { label: 'Inspeção — de 4 em 4 anos', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Seguro (apenas responsabilidade civil)', amountEURMin: 150, amountEURMax: 300, note: 'Por ano' },
    { label: 'Seguro completo (corpo)', amountEURMin: 300, amountEURMax: 1500, note: '0,5–1,5% do valor' },
    { label: 'IVA na importação de embarcação nova', amountEURMin: 0, amountEURMax: 50000, note: '23% do valor — exemplo: embarcação de 50 000 € = 11 500 € de IVA' }
  ],
  sources: [
    { title: 'AMN — Autoridade Marítima Nacional', url: 'https://www.amn.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'DGAM — Direção-Geral da Autoridade Marítima', url: 'https://www.amn.pt/DGAM/Paginas/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Capitanias — encontrar o porto mais próximo', url: 'https://www.amn.pt/DGAM/Capitanias/Paginas/Capitanias.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 93/2018 — Regime Jurídico da Náutica de Recreio', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/93-2018-116950304', kind: 'law', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'Decreto-Lei 93/2018, art. 33.º — seguro obrigatório de embarcações', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/93-2018-116950304', kind: 'law', language: 'pt', lastRetrieved: '2026-05-30' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 365
}
