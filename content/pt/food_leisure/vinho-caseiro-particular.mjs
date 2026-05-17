export default {
  editorialVoice: 'hackportugal',
  id: 'vinho-caseiro-particular',
  categoryId: 'food_leisure',
  title: 'Vinho caseiro próprio — o que é permitido sem licença',
  tldr: 'Se tiver videiras no seu terreno, pode fazer vinho para consumo próprio sem qualquer licença. O limite é 100 l por ano por família sem declaração (lei IVDP). Acima de 100 l — declaração obrigatória ao IVV (Instituto da Vinha e do Vinho), mesmo sem venda. Vender é um negócio seriamente regulado: exige atestado de qualidade, certificações IGP/DOC, IVA, registo no IVV. Para quintas com vinha, vale a pena confirmar se o terreno pertence a uma região DOC — isso afecta as castas e o estilo permitidos. Misturar com vinhos comuns e vender como DOC sem certificação = multa elevada.',
  tags: ['vinho', 'ivdp', 'doc', 'caseiro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'limits',
      title: 'Limites para consumo próprio',
      content: [
        { kind: 'paragraph', text: 'Portugal é o quinto país produtor de vinho do mundo. A lei trata a produção caseira de forma relativamente flexível, mas há regras claras:' },
        { kind: 'checklist', items: [
          'Até 100 l/ano por família: NENHUMA declaração. Faça e beba, ofereça aos vizinhos',
          '100-1000 l/ano: a declaração ao IVV (Instituto da Vinha e do Vinho) é obrigatória, mesmo sem venda. A declaração é gratuita, mas obrigatória',
          '1000+ l/ano: já é produção comercial. Registo da vinha, atestado, análises regulares',
          'Os limites contam por «família» (agregado familiar), não por cada adulto'
        ] },
        { kind: 'paragraph', text: 'Isto aplica-se ao vinho «vinho de mesa» — comum. Para outros produtos:' },
        { kind: 'checklist', items: [
          'Aguardente (brandy, aguardente vínica): exige licenciamento alfandegário, mesmo em pequeno volume',
          'Vinagre: para uso pessoal — não é regulado',
          'Licor — sem adição de açúcar/álcool: até 30 l/ano sem declaração'
        ] }
      ]
    },
    {
      id: 'doc-regions',
      title: 'Regiões DOC e uvas no terreno',
      content: [
        { kind: 'paragraph', text: 'Se o seu terreno estiver numa das regiões DOC (Denominação de Origem Controlada), tem uma escolha: usar a certificação ou não. Sem certificação, o seu vinho é «vinho regional» ou «vinho» (categoria geral).' },
        { kind: 'checklist', items: [
          'Douro DOC: Porto clássico e vinhos secos. Castas: Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Barroca',
          'Vinho Verde DOC: vinhos jovens e leves. Castas: Loureiro, Trajadura, Alvarinho',
          'Alentejo DOC: tintos encorpados. Aragonez, Trincadeira, Castelão',
          'Dão DOC: tintos e brancos elegantes. Touriga Nacional, Encruzado, Jaen',
          'Bairrada DOC: clássicas Baga, Maria Gomes',
          'Madeira DOC: vinhos de sobremesa. Sercial, Verdelho, Bual, Malvasia',
          'Lisboa: «vinho regional» — entre DOC e a categoria geral. Grande flexibilidade',
          'Algarve: 4 regiões DOC + região geral',
          'Açores: solos vulcânicos, castas específicas (Verdelho, Arinto dos Açores)'
        ] },
        { kind: 'paragraph', text: 'Para fazer vinho DOC — é necessária certificação na Comissão Vitivinícola Regional (CVR) da região correspondente. Mínimo: registo da vinha no IVV + análises do vinho + prova pela comissão.' }
      ]
    },
    {
      id: 'making',
      title: 'Processo — o que é necessário',
      content: [
        { kind: 'paragraph', text: 'Conjunto básico para produção familiar até 100 l:' },
        { kind: 'checklist', items: [
          'Uvas: 100 kg = ~70-75 l de vinho',
          'Esmagador: manual ~150 € ou aluguer a partir de 30 €/dia',
          'Cuba de fermentação: depósito de plástico com tampa 100 l — 50-100 €',
          'Sulfito (metabissulfito de potássio): obrigatório, contra bactérias. ~10 € por época',
          'Leveduras enológicas: ~5 €/pacote para 100 l',
          'Densímetro + refractómetro: para medir o açúcar. ~30-50 €',
          'Garrafas de vidro escuro 0,75 l: 0,5-1 € cada',
          'Rolhas naturais (cortiça do Algarve): 0,20-0,50 € cada',
          'Cápsulas e rótulos: extra para ficar bonito',
          'Barrica (se quiser): carvalho 25-50 l = 200-500 €. Para tintos com envelhecimento mais longo'
        ] },
        { kind: 'paragraph', text: 'Processo simplificado:' },
        { kind: 'checklist', items: [
          'Vindima: de meados de Setembro ao fim de Outubro, dependendo da região',
          'Esmagamento + remoção do engaço',
          'Sulfito de imediato',
          'Leveduras após 24 horas',
          'Fermentação: 7-15 dias a ~22-26°C',
          'Trasfega para depósito limpo: separar das borras',
          'Atesto (até à borda), tampa bem fechada',
          'Envelhecimento: 3-12 meses, dependendo do estilo',
          'Engarrafamento',
          'Maturação em garrafa: mínimo 6-12 meses para tintos'
        ] }
      ]
    },
    {
      id: 'selling',
      title: 'Se quiser vender — requisitos sérios',
      content: [
        { kind: 'paragraph', text: 'O comércio é outra liga. Além do conjunto empresarial normal, são necessários:' },
        { kind: 'checklist', items: [
          'Registo da vinha no IVV (RVCC — Registo Vitivinícola)',
          'Declarações de colheita e produção em cada época',
          'Análises ao vinho: teor alcoólico, sulfitos, acidez, microrganismos',
          'Laboratório acreditado pelo IPAC: ~80-200 € por análise completa',
          'Rótulos segundo EU 2019/787: tipo, região, % alcoólica, volume, NIF, país, alergénios (sulfitos, ovos)',
          'Lote Code (lote): obrigatório',
          'Atividade aberta nas Finanças: código CIRS 1102 — produção de vinhos',
          'IVA: 13% reduzido para vinho de mesa, 23% para premium',
          'Venda em mercados: licença da Câmara, imposto especial AT (alcohol tax) ~0,10 €/l',
          'Venda online: a ASAE fiscaliza, registo de vendedor obrigatório',
          'Exportação para fora da UE: licença da Direção Geral das Alfândegas (alfândega)'
        ] }
      ]
    },
    {
      id: 'tips',
      title: 'Conselhos e festivais',
      content: [
        { kind: 'checklist', items: [
          'Se tiver 5-10 videiras na sua casa de campo — conte logo com 50-70 l de vinho por época (já é stock familiar)',
          'A casta «vinhão» (região do Vinho Verde) — é a mais «de casa de campo»: fácil de fazer, técnica acessível',
          'Agricultores locais (vinicultores) aceitam muitas vezes azeitonas/uvas dos vizinhos por uma percentagem ou dinheiro',
          'Adega cooperativa — cooperativa local de produtores de vinho, pode aceitar as suas uvas e fazer vinho colectivo',
          'Festas regionais: Festa das Vindimas em Palmela (Setembro), Vinho Verde Festival no Noroeste, Festa do Vinho na Madeira',
          'Cursos para entusiastas: IVDP no Porto, Universidade de Évora, ESAS Castelo Branco',
          'Livros: «Manual do Vinho Caseiro» (em português), muitos canais de YouTube'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Multas por infracções',
      content: [
        { kind: 'checklist', items: [
          'Produção acima de 100 l sem declaração ao IVV: 100-1000 €',
          'Venda sem registo: 500-5000 €',
          'Uso de nome DOC sem certificação: 1500-25000 €',
          'Falsificação de nome regional: crime',
          'Aguardente sem licença alfandegária: 500-25000 € + apreensão',
          'Não pagar o imposto especial sobre o álcool na venda: 1000-50000 €'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Uvas (se comprar)', amountEURMin: 0.50, amountEURMax: 2, note: 'Por kg; para 100 l — 100-150 kg' },
    { label: 'Kit inicial (depósito, leveduras, sulfito)', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Esmagador manual', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Garrafas 0,75 l para 100 l de vinho', amountEURMin: 70, amountEURMax: 130, note: '~130 garrafas' },
    { label: 'Barrica de carvalho 25-50 l', amountEURMin: 200, amountEURMax: 500, note: 'Opcional para tinto' },
    { label: 'Análise para comércio', amountEURMin: 80, amountEURMax: 200, note: 'Laboratorial' },
    { label: 'Certificação DOC', amountEURMin: 200, amountEURMax: 500, note: 'Através da CVR' }
  ],
  sources: [
    { title: 'IVV — Instituto da Vinha e do Vinho', url: 'https://www.ivv.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IVDP — Instituto dos Vinhos do Douro e Porto', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 219/2008 — regime jurídico do sector do vinho', url: 'https://dre.pt/dre/detalhe/decreto-lei/219-2008-441478', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — apoio à viticultura', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
