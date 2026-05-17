export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-agua-doce-icnf',
  categoryId: 'food_leisure',
  title: 'Pesca em água doce — licença ICNF (Instituto da Conservação da Natureza e das Florestas)',
  tldr: 'A pesca em rios, albufeiras e lagos de Portugal continental é regulada pelo ICNF (Instituto da Conservação da Natureza e das Florestas), não pela DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos). A licença é obtida online em icnf.pt → e-Balcão ou através da aplicação SI ICNF por ~5-15 €. Categorias principais: pesca lúdica (desportiva); pesca de salmonídeos (truta, salmão — licença própria e épocas específicas); pesca em zonas concessionadas (zonas especiais com pagamento adicional). Existem períodos de defeso por espécie: truta — aproximadamente novembro–março, salmão — proibido quase todo o ano, salvo eventos raros. Limite diário: 8 peixes para truta e até 30 para a maioria das restantes espécies.',
  tags: ['pesca', 'pesca', 'icnf', 'rio', 'água-doce'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-regulates',
      title: 'ICNF, não DGRM — porque é importante',
      content: [
        { kind: 'paragraph', text: 'Em Portugal há dois reguladores para a pesca lúdica. Muitas vezes, os principiantes confundem:' },
        { kind: 'checklist', items: [
          'ICNF: rios, albufeiras, lagos, ribeiras no continente. Toda a água doce',
          'DGRM: mar, estuários até ao limite das águas marítimas, lagoas ligadas ao mar (Ria Formosa, Lagoa de Óbidos)',
          'A licença de uma entidade não é válida na outra',
          'Em zonas de fronteira (por exemplo, Tejo em Lisboa acima de Vila Franca de Xira) — é água doce, é necessária licença ICNF',
          'Açores e Madeira têm regras próprias — é um tema à parte'
        ] },
        { kind: 'warning', text: 'Se você pesca com spinning a partir de uma ponte sobre o Mondego em Coimbra com uma licença marítima da DGRM — isso é ilegal. E o inverso também: a licença ICNF não cobre a pesca no porto de Cascais.' }
      ]
    },
    {
      id: 'license-types',
      title: 'Categorias de licenças — o que escolher',
      content: [
        { kind: 'checklist', items: [
          'Pesca lúdica (desportiva): a maioria das espécies de água doce (achigã, lúcio, barbos, bordalo, ruivaca, pimpão). Em 95% dos casos — é a opção certa',
          'Pesca de salmonídeos: truta e salmão. Licença separada e prazos próprios',
          'Pesca em zonas concessionadas: zonas especialmente delimitadas, pagamento adicional além da licença normal. Muitas vezes são os melhores locais',
          'Lagoa de Albufeira e albufeiras: normalmente aplicam-se as mesmas regras — pesca lúdica. Mas algumas albufeiras podem ter condições especiais'
        ] },
        { kind: 'paragraph', text: 'Validade das licenças (normalmente):' },
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
      title: 'Pedido através de icnf.pt',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Aceda a icnf.pt → e-Balcão',
            content: [
              { kind: 'paragraph', text: 'icnf.pt → secção Cidadão → Caça e Pesca → Pesca em águas interiores. Aí também encontrará a ligação para o portal online e-Balcão.' }
            ]
          },
          {
            id: 's2',
            title: 'Autenticação por CMD ou CC',
            content: [
              { kind: 'paragraph', text: 'Chave Móvel Digital (CMD, chave digital) — é o método mais rápido. A alternativa é o Cartão de Cidadão (cartão de cidadão) com leitor. Sem CMD/CC, o registo com NIF (número fiscal) + e-mail também funciona, mas demora mais.' }
            ]
          },
          {
            id: 's3',
            title: 'Escolha o tipo, a região e o prazo',
            content: [
              { kind: 'checklist', items: [
                'Tipo: pesca lúdica ou salmonídeos',
                'Região: por defeito, Portugal continental',
                'Prazo de validade: 1 dia / 8 dias / mês / 6 meses / ano',
                'Opções especiais: lagoas/zonas concessionadas (se tencionar pescar aí)'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Pagamento e receção do PDF',
            content: [
              { kind: 'paragraph', text: 'Multibanco, MB WAY, cartão bancário. Após o pagamento, receberá um PDF por e-mail e na área pessoal. Guarde-o e leve-o consigo.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'rules-limits',
      title: 'Regras e épocas (período de defeso)',
      content: [
        { kind: 'paragraph', text: 'As épocas e os períodos de defeso em água doce são geralmente mais rigorosos do que no mar:' },
        { kind: 'checklist', items: [
          'Truta: a época é normalmente março–outubro; em novembro–fevereiro há proibição (proteção da desova)',
          'Salmão: proibido quase todo o ano, salvo eventos tradicionais raros; no Minho — regime especial',
          'Achigã e lúcio: muitas vezes permitidos durante todo o ano, mas pode haver restrições na época de reprodução',
          'Barbo e bordalo: em regra, permitidos durante grande parte do ano',
          'Carpa e pimpão: permitidos, considerados espécies de menor valor',
          'Lampreia: época de inverno, com restrições especiais e quotas',
          'Sável: na primavera, fortemente regulado',
          'Lagostim-vermelho-da-luisiana: espécie invasora, pode ser capturado durante todo o ano'
        ] },
        { kind: 'paragraph', text: 'Limite diário:' },
        { kind: 'checklist', items: [
          'Truta: até 8 exemplares por dia, tamanho mínimo 19 cm',
          'Achigã: até 3 por dia, tamanho mínimo 25 cm',
          'Lúcio: até 3 por dia, tamanho mínimo 35 cm',
          'Barbo: até 30 peixes',
          'Carpa: até 30 peixes',
          'Limite total acumulado: não mais de 30 peixes de espécies autorizadas por dia'
        ] },
        { kind: 'warning', text: 'As épocas e os limites mudam por portarias. Dados atualizados — em icnf.pt e na aplicação SI ICNF (para iPhone e Android).' }
      ]
    },
    {
      id: 'best-spots',
      title: 'Onde pescar bem em água doce',
      content: [
        { kind: 'checklist', items: [
          'Rio Mondego (Coimbra e para montante): truta, achigã, barbo',
          'Rio Zêzere e albufeiras de Castelo do Bode, Cabril: achigã e lúcio de nível mundial',
          'Rio Minho na fronteira com Espanha: salmão (com autorizações especiais), sável',
          'Rio Lima: truta, lampreia',
          'Rio Tejo acima de Lisboa: barbos e achigã',
          'Rio Guadiana e Alqueva (a maior albufeira da Europa): excelente pesca de achigã',
          'Albufeiras: Aguieira, Castelo de Bode, Idanha — a pesca é permitida em quase todo o lado',
          'Lagoas nos Açores: Furnas, Sete Cidades — truta-de-rio selvagem'
        ] },
        { kind: 'paragraph', text: 'Zonas concessionadas (pagas) — muitas vezes são os melhores locais: Penacova, Foz do Sousa, vários troços no Mondego. Pagamento adicional de ~10 € além da licença normal por dia.' }
      ]
    },
    {
      id: 'enforcement-fines',
      title: 'Quem fiscaliza nos rios',
      content: [
        { kind: 'checklist', items: [
          'GNR (Guarda Nacional Republicana), unidade SEPNA (polícia ambiental) — principais fiscalizações',
          'Vigilantes da Natureza ICNF — inspetores da natureza do ICNF',
          'Polícia Florestal — em parques nacionais'
        ] },
        { kind: 'checklist', items: [
          'Sem licença: 100-500 € + apreensão do material',
          'Exceder o limite diário: até 500 €',
          'Peixe abaixo do tamanho mínimo: 100-250 € por cada um',
          'Pesca em período de defeso: até 1 000 €',
          'Métodos proibidos (redes, veneno, etc.): procedimento criminal'
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
    { label: 'Conjunto básico de pesca à bóia', amountEURMin: 50, amountEURMax: 120 }
  ],
  sources: [
    { title: 'ICNF — Pesca em águas interiores', url: 'https://www.icnf.pt/cacaepesca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF e-Balcão — pedido de licença online', url: 'https://eservicos.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 112/2017 — regime Pesca em Águas Interiores', url: 'https://dre.pt/dre/detalhe/decreto-lei/112-2017-108128620', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'GNR SEPNA — polícia ambiental', url: 'https://www.gnr.pt/sepna.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
