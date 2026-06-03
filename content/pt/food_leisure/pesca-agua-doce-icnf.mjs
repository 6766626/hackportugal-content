export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-agua-doce-icnf',
  categoryId: 'food_leisure',
  title: 'Pesca em água doce — licença ICNF (Instituto da Conservação da Natureza e das Florestas)',
  tldr: 'A pesca em rios, albufeiras e lagos de Portugal continental é regulada pelo ICNF (Instituto da Conservação da Natureza e das Florestas), e não pela DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos).\n\nA licença é obtida online em icnf.pt → e-Balcão ou através da aplicação SI ICNF. A licença de residente é anual (válida para o ano civil): nacional ~20,52 €, regional ~12,31 €. Os não residentes podem adquirir licenças de curta duração: 7 dias ~16,81 €, 30 dias ~22,45 €. As principais categorias são: pesca lúdica (desportiva); pesca de salmonídeos (truta, salmão — licença separada e épocas próprias); pesca em zonas concessionadas (zonas especiais com pagamento adicional).\n\nAplicam-se períodos de defeso por espécie: truta — aberta aproximadamente de março a julho (até 31 de agosto em águas específicas), em defeso aproximadamente de agosto/setembro a fevereiro; salmão — proibido durante quase todo o ano, salvo eventos raros. Limite diário: 8 peixes para truta e até 30 para a maioria das restantes espécies.',
  tags: ['pesca', 'pesca-desportiva', 'icnf', 'rio', 'água-doce'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-regulates',
      title: 'ICNF, não DGRM — porque é importante',
      content: [
        { kind: 'paragraph', text: 'Em Portugal existem dois reguladores para a pesca lúdica. Muitas vezes, os principiantes confundem-nos:' },
        { kind: 'checklist', items: [
          'ICNF: rios, albufeiras, lagos e ribeiros no continente. Toda a água doce',
          'DGRM: mar, estuários até ao limite das águas marítimas, lagoas ligadas ao mar (Ria Formosa, Lagoa de Óbidos)',
          'A licença de uma entidade não é válida na outra',
          'Em zonas de fronteira (por exemplo, o Tejo em Lisboa a montante de Vila Franca de Xira) — é água doce, é necessária licença ICNF',
          'Açores e Madeira têm regras próprias — é um tema à parte'
        ] },
        { kind: 'warning', text: 'Se pescar à amostra a partir de uma ponte sobre o Mondego em Coimbra com uma licença marítima da DGRM — isso é ilegal. E vice-versa: a licença ICNF não cobre a pesca no porto de Cascais.' }
      ]
    },
    {
      id: 'license-types',
      title: 'Categorias de licenças — o que escolher',
      content: [
        { kind: 'checklist', items: [
          'Pesca lúdica (desportiva): a maioria das espécies de água doce (achigã, lúcio, barbos, bordalo, ruivaca, pimpão). Em 95% dos casos — é a sua opção',
          'Pesca de salmonídeos: truta e salmão. Licença separada e prazos próprios',
          'Pesca em zonas concessionadas: zonas especialmente delimitadas, com pagamento adicional além da licença normal. Muitas vezes são os melhores locais',
          'Lagoa de Albufeira e albufeiras: normalmente aplicam-se as mesmas regras — pesca lúdica. Mas algumas albufeiras podem ter condições especiais'
        ] },
        { kind: 'paragraph', text: 'Validade e custo (tipicamente):' },
        { kind: 'checklist', items: [
          'Residente, nacional (todo o país), para o ano civil: ~20,52 €',
          'Residente, regional, para o ano civil: ~12,31 €',
          'Não residente, 7 dias: ~16,81 €',
          'Não residente, 30 dias: ~22,45 €'
        ] },
        { kind: 'paragraph', text: 'A licença de residente é válida para o ano civil (até 31 de dezembro), e não por 12 meses a contar da data de emissão.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Pedido através de icnf.pt',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Entre em icnf.pt → e-Balcão',
            content: [
              { kind: 'paragraph', text: 'icnf.pt → secção Cidadão → Caça e Pesca → Pesca em águas interiores. Aí encontrará também a ligação para o portal online e-Balcão.' }
            ]
          },
          {
            id: 's2',
            title: 'Autenticação através de CMD ou CC',
            content: [
              { kind: 'paragraph', text: 'Chave Móvel Digital (CMD) — é a forma mais rápida. A alternativa é o Cartão de Cidadão (CC) com leitor. Sem CMD/CC, o registo com NIF + e-mail também funciona, mas demora mais.' }
            ]
          },
          {
            id: 's3',
            title: 'Escolha o tipo, a região e o prazo',
            content: [
              { kind: 'checklist', items: [
                'Tipo: pesca lúdica ou salmonídeos',
                'Região: por defeito, Portugal continental',
                'Validade: para residentes — o ano civil (nacional ou regional); para não residentes — 7 ou 30 dias',
                'Opções especiais: lagoas/zonas concessionadas (se tenciona pescar aí)'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Pagamento e obtenção do PDF',
            content: [
              { kind: 'paragraph', text: 'Multibanco, MB WAY, cartão bancário. Após o pagamento, receberá um PDF por e-mail e na área pessoal. Guarde-o e leve-o consigo.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'rules-limits',
      title: 'Regras e épocas (defeso)',
      content: [
        { kind: 'paragraph', text: 'As épocas e o defeso em água doce são normalmente mais rigorosos do que no mar:' },
        { kind: 'checklist', items: [
          'Truta: a época é geralmente de 1 de março a 31 de julho (até 31 de agosto em águas específicas ao abrigo do Anexo III e, excecionalmente, até 30 de setembro em certas albufeiras); fora da época há defeso (proteção da desova)',
          'Salmão: proibido durante quase todo o ano, salvo raros eventos tradicionais; no Minho — regime especial',
          'Achigã e lúcio: muitas vezes permitidos durante todo o ano, mas podem existir restrições na época de reprodução',
          'Barbo e bordalo: regra geral, permitidos durante a maior parte do ano',
          'Carpa e pimpão: permitidos, considerados espécies de menor valor',
          'Lampreia: época de inverno, com restrições e quotas especiais',
          'Sável: na primavera, fortemente regulado',
          'Lagostim-vermelho-do-luisiana: espécie invasora, pode ser capturado durante todo o ano'
        ] },
        { kind: 'paragraph', text: 'Limite diário:' },
        { kind: 'checklist', items: [
          'Truta: até 8 exemplares por dia, tamanho mínimo 20 cm',
          'Achigã: até 3 por dia, tamanho mínimo 20 cm',
          'Lúcio: até 3 por dia, tamanho mínimo 35 cm',
          'Barbo: até 30 peixes',
          'Carpa: até 30 peixes',
          'Limite total acumulado: não mais de 30 peixes de espécies permitidas por dia'
        ] },
        { kind: 'warning', text: 'As épocas e os limites mudam por portarias. Dados atualizados — em icnf.pt e na aplicação SI ICNF (para iPhone e Android).' }
      ]
    },
    {
      id: 'best-spots',
      title: 'Onde pescar bem em água doce',
      content: [
        { kind: 'checklist', items: [
          'Rio Mondego (Coimbra e a montante): truta, achigã, barbo',
          'Rio Zêzere e albufeiras de Castelo do Bode, Cabril: achigã e lúcio de nível mundial',
          'Rio Minho na fronteira com Espanha: salmão (com autorizações especiais), sável',
          'Rio Lima: truta, lampreia',
          'Rio Tejo a montante de Lisboa: barbos e achigã',
          'Rio Guadiana e Alqueva (a maior albufeira da Europa): excelente pesca de achigã',
          'Albufeiras: Aguieira, Castelo de Bode, Idanha — a pesca é permitida em quase todo o lado',
          'Lagoas nos Açores: Furnas, Sete Cidades — truta-fário selvagem'
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
          'Sem licença: 100-500 € + apreensão das artes de pesca',
          'Excesso do limite diário: até 500 €',
          'Peixe abaixo do tamanho mínimo: 100-250 € por cada',
          'Pesca em período de defeso: até 1 000 €',
          'Métodos proibidos (redes, veneno, etc.): procedimento criminal'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Residente, nacional (ano civil)', amountEUR: 20.52 },
    { label: 'Residente, regional (ano civil)', amountEUR: 12.31 },
    { label: 'Não residente, 7 dias', amountEUR: 16.81 },
    { label: 'Não residente, 30 dias', amountEUR: 22.45 },
    { label: 'Zona concessionada — dia', amountEURMin: 5, amountEURMax: 15, note: 'Além da licença normal' },
    { label: 'Conjunto básico de pesca à boia', amountEURMin: 50, amountEURMax: 120 }
  ],
  sources: [
    { title: 'ICNF — Pesca em águas interiores', url: 'https://www.icnf.pt/cacaepesca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF e-Balcão — pedido de licença online', url: 'https://eservicos.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 112/2017 — regime Pesca em Águas Interiores', url: 'https://dre.pt/dre/detalhe/decreto-lei/112-2017-108128620', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'GNR SEPNA — polícia ambiental', url: 'https://www.gnr.pt/sepna.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
