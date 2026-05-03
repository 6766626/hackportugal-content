export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-agua-doce-icnf',
  categoryId: 'food_leisure',
  title: 'Pesca em água doce — licença do ICNF (Instituto da Conservação da Natureza e das Florestas)',
  tldr: 'A pesca em rios, albufeiras e lagos de Portugal continental é regulada pelo ICNF (Instituto da Conservação da Natureza e das Florestas), e não pela DGRM (gestão dos recursos marinhos). A licença obtém-se online em icnf.pt → e-Balcão ou através da aplicação SI ICNF por ~5-15 €. Principais categorias: pesca lúdica (desportiva); pesca de salmonídeos (truta, salmão — licença separada e épocas próprias); pesca em zonas concessionadas (zonas especiais com suplemento). Existem períodos de defeso por espécie: truta — aproximadamente novembro–março, salmão — quase todo o ano proibido, salvo raras exceções. Limite diário: 8 peixes para truta e até 30 para a maioria das outras espécies.',
  tags: ['pesca', 'icnf', 'rio', 'água-doce'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-regulates',
      title: 'ICNF, não DGRM — porque é importante',
      content: [
        { kind: 'paragraph', text: 'Em Portugal há dois reguladores para a pesca lúdica. Os iniciantes confundem-nos frequentemente:' },
        { kind: 'checklist', items: [
          'ICNF: rios, albufeiras, lagos e ribeiros no continente. Toda a água doce',
          'DGRM: mar, estuários até ao limite das águas marítimas, lagoas ligadas ao mar (Ria Formosa, Lagoa de Óbidos)',
          'A licença de um não é válida para o outro',
          'Em zonas de transição (por exemplo, o Tejo na área de Lisboa a montante de Vila Franca de Xira) — é água doce, precisa de licença ICNF',
          'Açores e Madeira têm regras próprias — assunto à parte'
        ] },
        { kind: 'warning', text: 'Se pescar com spinning de uma ponte sobre o Mondego em Coimbra com uma licença marítima da DGRM — é ilegal. E o inverso: a licença ICNF não cobre a pesca no porto de Cascais.' }
      ]
    },
    {
      id: 'license-types',
      title: 'Categorias de licenças — qual escolher',
      content: [
        { kind: 'checklist', items: [
          'Pesca lúdica (desportiva): a maioria das espécies de água doce (achigã, lúcio, barbos, bordalo, ruivaca, pimpão). Em 95% dos casos é a sua opção',
          'Pesca de salmonídeos: truta (truta) e salmão (salmão). Licença separada e prazos próprios',
          'Zonas concessionadas: zonas especialmente delimitadas, suplemento além da licença normal. Frequentemente os melhores locais',
          'Lagoa de Albufeira e albufeiras: regra geral é a mesma — pesca lúdica. Mas em algumas albufeiras podem existir condições específicas'
        ] },
        { kind: 'paragraph', text: 'Validade das licenças (típico):' },
        { kind: 'checklist', items: [
          '1 dia: ~3 €',
          '8 dias: ~5 €',
          '1 mês: ~10 €',
          '6 meses: ~15 €',
          '1 ano: ~25 €'
        ] }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Como pedir em icnf.pt',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Entre em icnf.pt → e-Balcão',
            content: [
              { kind: 'paragraph', text: 'icnf.pt → secção Cidadão → Caça e Pesca → Pesca em águas interiores. Aí encontrará a ligação para o portal online e-Balcão.' }
            ]
          },
          {
            id: 's2',
            title: 'Autenticação via CMD ou CC',
            content: [
              { kind: 'paragraph', text: 'Chave Móvel Digital (CMD, chave digital) é a forma mais rápida. Alternativa — Cartão de Cidadão com leitor. Sem CMD/CC, o registo com NIF + e‑mail também funciona, mas é mais demorado.' }
            ]
          },
          {
            id: 's3',
            title: 'Escolha o tipo, a região e a validade',
            content: [
              { kind: 'checklist', items: [
                'Tipo: pesca lúdica ou salmonídeos',
                'Região: por defeito, Portugal continental',
                'Validade: 1 dia / 8 dias / 1 mês / 6 meses / 1 ano',
                'Opções especiais: lagoas/zonas concessionadas (se planeia pescar lá)'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Pagamento e receção do PDF',
            content: [
              { kind: 'paragraph', text: 'Multibanco, MB WAY, cartão bancário. Após o pagamento, receberá o PDF por e‑mail e na área pessoal. Guarde-o e leve-o consigo.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'rules-limits',
      title: 'Regras e épocas (defeso)',
      content: [
        { kind: 'paragraph', text: 'As épocas e o defeso em água doce são normalmente mais restritivos do que no mar:' },
        { kind: 'checklist', items: [
          'Truta: época geralmente de março a outubro; de novembro a fevereiro é defeso (proteção da desova)',
          'Salmão: quase todo o ano em defeso, salvo raros eventos tradicionais; no Minho existe regime específico',
          'Achigã e lúcio: muitas vezes permitidos todo o ano, mas podem existir restrições na época de reprodução',
          'Barbo e bordalo: regra geral, permitidos na maior parte do ano',
          'Carpa e pimpão: permitidos; considerados espécies menos nobres',
          'Lampreia: época de inverno, com restrições e quotas específicas',
          'Sável: na primavera, fortemente regulado',
          'Lagostim-vermelho-americano: espécie invasora, pode ser capturado todo o ano'
        ] },
        { kind: 'paragraph', text: 'Limite diário:' },
        { kind: 'checklist', items: [
          'Truta: até 8 exemplares/dia, tamanho mínimo 19 cm',
          'Achigã: até 3/dia, tamanho mínimo 25 cm',
          'Lúcio: até 3/dia, tamanho mínimo 35 cm',
          'Barbo: até 30 peixes',
          'Carpa: até 30 peixes',
          'Limite total: no máximo 30 peixes de espécies permitidas por dia'
        ] },
        { kind: 'warning', text: 'As épocas e limites mudam por portaria. Dados atualizados — em icnf.pt e na aplicação SI ICNF (iPhone e Android).' }
      ]
    },
    {
      id: 'best-spots',
      title: 'Onde pescar bem em água doce',
      content: [
        { kind: 'checklist', items: [
          'Rio Mondego (Coimbra e montante): truta, achigã, barbo',
          'Rio Zêzere e albufeiras de Castelo do Bode e Cabril: achigã e lúcio de nível mundial',
          'Rio Minho na fronteira com Espanha: salmão (com autorizações especiais) e sável',
          'Rio Lima: truta, lampreia',
          'Rio Tejo a montante de Lisboa: barbos e achigã',
          'Rio Guadiana e Alqueva (a maior albufeira da Europa): excelente pesca de achigã',
          'Albufeiras: Aguieira, Castelo de Bode, Idanha — a pesca é permitida quase em toda a parte',
          'Lagoas nos Açores: Furnas, Sete Cidades — truta fário selvagem'
        ] },
        { kind: 'paragraph', text: 'Zonas concessionadas (pagas) — muitas vezes os melhores locais: Penacova, Foz do Sousa, vários troços no Mondego. Suplemento de ~10 € além da licença normal por dia.' }
      ]
    },
    {
      id: 'enforcement-fines',
      title: 'Quem fiscaliza nos rios',
      content: [
        { kind: 'checklist', items: [
          'GNR (Guarda Nacional Republicana), unidade SEPNA (polícia ambiental) — principais fiscalizações',
          'Vigilantes da Natureza do ICNF — inspetores da natureza do ICNF',
          'Polícia Florestal — em parques naturais'
        ] },
        { kind: 'checklist', items: [
          'Sem licença: 100-500 € + apreensão do material',
          'Exceder o limite diário: até 500 €',
          'Peixe abaixo do tamanho mínimo: 100-250 € por exemplar',
          'Pesca em época de defeso: até 1 000 €',
          'Métodos proibidos (redes, venenos, etc.): procedimento criminal'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Licença 1 dia', amountEUR: 3 },
    { label: 'Licença 8 dias', amountEUR: 5 },
    { label: 'Licença 1 mês', amountEUR: 10 },
    { label: 'Licença 6 meses', amountEUR: 15 },
    { label: 'Licença 1 ano', amountEUR: 25 },
    { label: 'Zona concessionada — dia', amountEURMin: 5, amountEURMax: 15, note: 'Além da licença normal' },
    { label: 'Conjunto básico de pesca à boia', amountEURMin: 50, amountEURMax: 120 }
  ],
  sources: [
    { title: 'ICNF — Pesca em águas interiores', url: 'https://www.icnf.pt/cacaepesca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF e-Balcão — pedido de licença online', url: 'https://eservicos.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 112/2017 — regime da Pesca em Águas Interiores', url: 'https://dre.pt/dre/detalhe/decreto-lei/112-2017-108128620', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'GNR SEPNA — polícia ambiental', url: 'https://www.gnr.pt/sepna.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
