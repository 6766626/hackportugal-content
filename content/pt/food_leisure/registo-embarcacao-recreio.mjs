export default {
  editorialVoice: 'hackportugal',
  id: 'registo-embarcacao-recreio',
  categoryId: 'food_leisure',
  title: 'Registo de embarcação de recreio — Capitania (capitania do porto)',
  tldr: 'Qualquer embarcação com mais de 2,5 m ou com motor superior a 4,5 kW requer registo na Capitania do Porto (sob a DGAM/AMN — AMN: Autoridade Marítima Nacional). A categoria de navegação — Local/Costeira/Largo — define onde pode navegar e que equipamento é obrigatório. Custo do registo: ~50–200 € consoante a categoria e o tamanho. Em paralelo são necessários: seguro (~150–400 €/ano), licença de navegação (~50 €) e, para pesca, licença própria de pesca lúdica a partir de embarcação. Importação da UE: o IVA (IVA português) só se paga para embarcação nova; usada (6+ meses e/ou 100+ horas de motor) — sem IVA. De países fora da UE — direitos + IVA + equivalente do ISV. A embarcação importada é registada novamente em Portugal e recebe um novo número.',
  tags: ['barco', 'embarcação', 'registo', 'capitania', 'amn'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'when-needed',
      title: 'Quando o registo é obrigatório',
      content: [
        { kind: 'checklist', items: [
          '✅ Qualquer embarcação com comprimento superior a 2,5 m',
          '✅ Qualquer embarcação a motor com potência superior a 4,5 kW (~6 hp)',
          '✅ Veleiros de qualquer tamanho, se saem da zona de banhos',
          '✅ Caiaques e SUP com qualquer motor',
          '✅ Mota de água/jet ski — todos',
          '❌ Pequenos caiaques de plástico e pranchas de SUP sem motor — não é necessário registo',
          '❌ Colchões e boias insufláveis — não são considerados embarcação'
        ] },
        { kind: 'paragraph', text: 'Se a embarcação permanecer em Portugal por mais de 6 meses, o registo é obrigatório independentemente do pavilhão. Aplica-se também a iates “visitantes temporários”.' }
      ]
    },
    {
      id: 'classes',
      title: 'Categorias de navegação (categoria de navegação)',
      content: [
        { kind: 'paragraph', text: 'A categoria determina a que distância da costa e em que condições é permitido navegar. É a decisão mais importante no registo.' },
        { kind: 'checklist', items: [
          'Local: até 5 milhas da costa em águas abrigadas. Equipamento mínimo. Adequado para pesca costeira diurna.',
          'Costeira: até 25 milhas. Rádio VHF e coletes salva‑vidas obrigatórios; EPIRB recomendado.',
          'Costeira-oceânica: até 60 milhas. Conjunto alargado de equipamento.',
          'Largo: sem limites de afastamento. Requisitos próximos da IMO.',
          'Interior: rios e albufeiras. Categoria distinta.'
        ] },
        { kind: 'paragraph', text: 'Quanto mais alta a categoria, mais caros o registo, o seguro e a manutenção. Para pesca costeira, 90% das pessoas escolhem Local.' }
      ]
    },
    {
      id: 'how-to-register',
      title: 'Processo de registo de embarcação nova',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Documentos do proprietário',
            content: [
              { kind: 'checklist', items: [
                'NIF e Cartão de Cidadão ou passaporte + comprovativo de morada',
                'IBAN para devolução de pagamentos em excesso',
                'Procuração, se não for o proprietário a apresentar'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Documentos da embarcação',
            content: [
              { kind: 'checklist', items: [
                'Fatura para embarcação nova ou declaração de venda para usada',
                'Certificado CE (para embarcações novas da UE): declaração de conformidade',
                'Dados técnicos: comprimento, boca, calado, potência do motor, material do casco, modelo',
                'Fotografias da embarcação de vários ângulos e do número de série (HIN — Hull Identification Number)',
                'Para importação de países fora da UE: declaração aduaneira DAU'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Entrega na Capitania do Porto',
            content: [
              { kind: 'paragraph', text: 'Dirija-se à Capitania mais próxima (Lisboa, Cascais, Sesimbra, Setúbal, Peniche, Aveiro, Porto, Olhão, Faro, etc.). Pode marcar online em amn.pt → Capitania → Marcação.' },
              { kind: 'checklist', items: [
                'Preencher o requerimento (formulário)',
                'Pagar a taxa de registo (depende da categoria e do tamanho)',
                'Obter registo provisório de imediato',
                'O registo definitivo chega por correio em 2–4 semanas'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Obter o número de registo e aplicá-lo no casco',
            content: [
              { kind: 'paragraph', text: 'Formato: P-XX-NNNN, onde P — Portugal, XX — porto de registo (LX — Lisboa, CS — Cascais, SE — Setúbal, FA — Faro, etc.), NNNN — número. O número deve ser aplicado no casco em ambos os bordos com tinta indelével ou placa em local visível.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'imported-boats',
      title: 'Importação de embarcação da UE ou de países fora da UE',
      content: [
        { kind: 'paragraph', text: 'Ao mudar-se para Portugal com a sua embarcação, esta tem de ser registada novamente.' },
        { kind: 'checklist', items: [
          'Da UE, embarcação nova (< 6 meses ou < 100 horas de motor): é necessário pagar IVA (IVA português) 23% em Portugal',
          'Da UE, usada (> 6 meses e > 100 horas): não há IVA, mas o registo é obrigatório',
          'De países fora da UE: direitos aduaneiros (normalmente 0% para embarcações de recreio), IVA 23% sobre o valor declarado, equivalente do ISV pelo motor',
          'DAU (declaração aduaneira) é emitida na alfândega do porto',
          'Após a alfândega — registo padrão na Capitania'
        ] },
        { kind: 'paragraph', text: 'Se tinha uma embarcação noutro país da UE, ao mudar-se com autorização de residência para Portugal pode usar o regime de transferência de residência (isenção de IVA), desde que a embarcação esteja na sua propriedade há mais de 6 meses e venha residir de forma permanente. Pedido nas Finanças no prazo de 12 meses após o registo em Portugal.' }
      ]
    },
    {
      id: 'mandatory-equipment',
      title: 'Equipamento obrigatório por categoria',
      content: [
        { kind: 'paragraph', text: 'Mínimo para a categoria Local:' },
        { kind: 'checklist', items: [
          'Coletes salva‑vidas pelo número de pessoas a bordo',
          'Âncora com cabo de comprimento mínimo de 4× a profundidade na área prevista',
          'Sinal sonoro de socorro (apito ou sirene)',
          'Extintor, se houver motor de combustão interna',
          'Bomba ou balde para acholamento de água',
          'Motor de reserva ou remos (se o motor principal for superior a 4,5 kW)',
          'Kit de primeiros socorros',
          'Lanterna estanque'
        ] },
        { kind: 'paragraph', text: 'Para a categoria Costeira, adicionalmente:' },
        { kind: 'checklist', items: [
          'Rádio VHF (requer licença própria — ver guia sobre Carta de Marinheiro/VHF)',
          'GPS ou cartógrafo/cartas de navegação',
          'Sinais pirotécnicos',
          'EPIRB recomendado',
          'Balsa salva‑vidas para embarcações com mais de 6 m'
        ] }
      ]
    },
    {
      id: 'insurance',
      title: 'Seguro — obrigatório',
      content: [
        { kind: 'paragraph', text: 'Desde 2018 o seguro de responsabilidade civil é obrigatório para todas as embarcações registadas (Lei 4/2018).' },
        { kind: 'checklist', items: [
          'Mínimo: responsabilidade civil ~150–300 € por ano',
          'Completo (corpo + civil): 0,5–1,5% do valor da embarcação por ano',
          'Documentos russos/ucranianos são aceites pelas seguradoras portuguesas habituais (Tranquilidade, Fidelidade, Allianz, Lusitania), desde que a embarcação esteja registada em PT',
          'Coberturas: danos a terceiros, casco, motor, equipamento, reboque (rebocagem), assistência',
          'Franquia: normalmente 5–10% do valor da embarcação ou um montante fixo'
        ] }
      ]
    },
    {
      id: 'fees-renewal',
      title: 'Taxas e renovação',
      content: [
        { kind: 'paragraph', text: 'Todos os anos é necessária a licença de navegação da embarcação (semelhante à inspeção de um automóvel):' },
        { kind: 'checklist', items: [
          'Local: ~50 € por ano',
          'Costeira: ~80 € por ano',
          'Largo: ~150 € por ano',
          'Vistoria: de 4 em 4 anos para a maioria das categorias, ~50–100 € por visita',
          'Cobra-se também uma taxa anual (taxa de embarcação) — ~30–100 € consoante o tamanho'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Coimas por infrações',
      content: [
        { kind: 'checklist', items: [
          'Embarcação sem registo: 250–2 500 € + possível apreensão',
          'Sem licença de navegação: 100–500 €',
          'Sem seguro: 250–2 500 € (como no automóvel)',
          'Falta de equipamento obrigatório: 100–1 000 € (por cada item em falta)',
          'Exceder a categoria de navegação (embarcação Local em zona Largo): 250–1 500 €',
          'Utilização da embarcação sem a habilitação de mar exigida: 500–2 500 €'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Registo de embarcação — classe Local', amountEURMin: 50, amountEURMax: 100, note: 'Único, comprimento 5–7 m' },
    { label: 'Registo de embarcação — classe Costeira', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Licença anual de navegação — classe Local', amountEUR: 50 },
    { label: 'Vistoria — a cada 4 anos', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Seguro (apenas responsabilidade civil)', amountEURMin: 150, amountEURMax: 300, note: 'Por ano' },
    { label: 'Seguro completo (corpo)', amountEURMin: 300, amountEURMax: 1500, note: '0,5–1,5% do valor' },
    { label: 'IVA na importação de embarcação nova', amountEURMin: 0, amountEURMax: 50000, note: '23% do valor — exemplo: embarcação 50 000 € = 11 500 € de IVA' }
  ],
  sources: [
    { title: 'AMN — Autoridade Marítima Nacional', url: 'https://www.amn.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'DGAM — Direção-Geral da Autoridade Marítima', url: 'https://www.amn.pt/DGAM/Paginas/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Capitanias — encontrar o porto mais próximo', url: 'https://www.amn.pt/DGAM/Paginas/Capitanias.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 124/2004 — embarcações de recreio', url: 'https://dre.pt/dre/detalhe/decreto-lei/124-2004-220127', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Lei 4/2018 — seguro obrigatório de embarcações', url: 'https://dre.pt/dre/detalhe/lei/4-2018-114655100', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
