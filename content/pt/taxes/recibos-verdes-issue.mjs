export default {
  editorialVoice: 'hackportugal',
  id: 'recibos-verdes-issue',
  categoryId: 'taxes',
  title: 'Como emitir um recibo verde — passo a passo',
  tldr: 'O recibo verde é um recibo eletrónico de trabalhador independente. É emitido no Portal das Finanças → «Recibos Verdes Eletrónicos». São necessários: atividade aberta, NIF do cliente, montante e descrição do serviço. O IVA depende do regime: regime normal (frequentemente 23% no continente, com taxas dependentes do serviço e da região) ou regime de isenção art. 53 CIVA para volume de negócios até 15 000 €/ano, se cumpridas as condições.\n\nPrazo — até ao 5.º dia útil após o momento da exigibilidade (conclusão do serviço, emissão da fatura ou adiantamento).',
  tags: ['recibo verde', 'trabalhador independente', 'atividade'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'prereq',
      title: 'O que é necessário antes do primeiro recibo',
      content: [
        { kind: 'checklist', items: [
          '✅ Atividade aberta nas Finanças (Início de Atividade)',
          '✅ Código de atividade: CAE e/ou código CIRS nos termos do art. 151 (CAE de 5 dígitos: por exemplo 70220 — consultoria de gestão, 62010 — programação informática)',
          '✅ NIF e palavra-passe do Portal das Finanças (ou Chave Móvel Digital)',
          '✅ Decisão sobre IVA: regime de isenção art. 53 CIVA (volume de negócios anual esperado/anterior ≤ 15 000 € + outras condições) ou regime normal (a taxa depende do serviço e da região; frequentemente 23% no continente)',
          '✅ O NISS é necessário para a Segurança Social; para a emissão de recibo basta a abertura de atividade, NIF e acesso ao Portal das Finanças',
          '✅ IBAN para receber o pagamento'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'Emitir o recibo — passo a passo',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Entrar no Portal das Finanças', content: [
            { kind: 'paragraph', text: 'portaldasfinancas.gov.pt → «Os Seus Serviços» → «Emitir Faturas e Recibos Eletrónicos» → «Recibos».' }
          ]},
          { id: 's2', title: '2. Preencher os dados do cliente', content: [
            { kind: 'checklist', items: [
              'NIF do cliente (português ou estrangeiro)',
              'Nome / denominação da empresa',
              'Morada — por vezes é preenchida automaticamente pelo NIF PT, mas deve ser verificada',
              'Para clientes estrangeiros, o IVA depende de B2B/B2C, do país e do tipo de serviço — é necessário verificar as regras de localização art. 6 CIVA'
            ]}
          ]},
          { id: 's3', title: '3. Descrição do serviço', content: [
            { kind: 'checklist', items: [
              'Data da prestação',
              'Descrição (breve: «Serviços de consultoria», «Desenvolvimento de software»)',
              'Quantidade / unidade (h — horas, un. — unidade)',
              'Preço unitário',
              'Montante total'
            ]}
          ]},
          { id: 's4', title: '4. IVA', content: [
            { kind: 'checklist', items: [
              'Regime de isenção art. 53 CIVA: não é cobrado IVA; indicar o motivo — "IVA - regime de isenção [artigo 53.º do CIVA]". Trata-se de uma isenção, não de uma taxa de 0%',
              'Regime normal de IVA: aplicar a taxa correspondente — frequentemente 23% no continente para serviços comuns; a taxa depende do serviço e da região (Madeira/Açores — outras)',
              'Cliente B2B noutro país da UE com VAT/VIES válido: normalmente não é cobrado IVA em Portugal, indicando reverse charge / autoliquidação; verifique o VIES e uma eventual declaração recapitulativa',
              'Cliente fora da UE: para B2B, muitas vezes o lugar de tributação é fora de Portugal, não sendo cobrado IVA PT; para B2C e special services — regras próprias (não "0%")'
            ]}
          ]},
          { id: 's5', title: '5. Retenção de IRS', content: [
            { kind: 'checklist', items: [
              'Cliente em Portugal — empresa/entidade com contabilidade organizada: a retenção depende do tipo de atividade — frequentemente 25% para profissões da tabela art. 151 CIRS; 11,5% apenas para alguns outros rendimentos da Cat. B',
              'Cliente pessoa singular em Portugal — normalmente sem retenção',
              'Cliente estrangeiro — sem retenção portuguesa',
              'Com volume de negócios abaixo do limite e cumpridas as condições, pode aplicar-se dispensa de retenção nos termos do art. 101-B CIRS',
              'IFICI: eligible income é tributado à taxa de 20% na declaração anual, mas a retenção não passa automaticamente a 11,5% — aplica-se a taxa/código conforme o CIRS e as instruções da AT'
            ]}
          ]},
          { id: 's6', title: '6. Envio', content: [
            { kind: 'paragraph', text: 'Após a emissão, o documento fica disponível no Portal das Finanças; pode ser descarregado em PDF e enviado ao cliente. Não está previsto como passo obrigatório qualquer confirmação separada do pagamento pelo cliente no Portal.' }
          ]}
        ]}
      ]
    },
    {
      id: 'timing',
      title: 'Quando emitir',
      content: [
        { kind: 'checklist', items: [
          '📅 Normalmente após a prestação do serviço ou aquando do recebimento de um adiantamento; para serviços continuados — aplicam-se regras especiais de exigibilidade',
          '⏰ Regra geral — até ao 5.º dia útil após o momento da exigibilidade (art. 36 CIVA)',
          '⚠️ O incumprimento das regras de faturação pode dar origem a coimas nos termos do RGIT; o montante depende da situação e do estatuto',
          '🔄 Pagamento antecipado → recibo relativo ao adiantamento, recibo final — aquando do pagamento do remanescente',
          '💳 Pagamento por cartão → recibo imediato (quando o dinheiro entra no banco)',
          '🧾 Os recibos verdes são normalmente emitidos eletronicamente através do Portal das Finanças / sistemas autorizados pela AT; os documentos em papel só são permitidos em casos limitados'
        ]}
      ]
    },
    {
      id: 'errors',
      title: 'Correção de erros',
      content: [
        { kind: 'checklist', items: [
          '⛔ O recibo JÁ foi emitido — não pode ser alterado. Apenas pode ser anulado ou emitido um documento retificativo',
          '🔄 A anulação/correção é feita no Portal das Finanças, mas a admissibilidade e as consequências dependem do tipo de documento e das declarações já submetidas',
          '🚨 Se uma simples anulação não for possível ou se o documento já constar de declarações: nota de crédito, novo documento, declaração substitutiva ou correção de IVA/IRS — consoante o caso',
          '📅 No trimestre em curso, a correção é normalmente refletida na declaração de IVA corrente'
        ]}
      ]
    },
    {
      id: 'tax-obligations',
      title: 'Obrigações fiscais associadas',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'IVA — mensal ou trimestral, se estiver no regime normal', content: [
            { kind: 'checklist', items: [
              'Trimestral: a declaração periódica é normalmente entregue até ao dia 20 do segundo mês após o trimestre; pagamento — até ao dia 25 do mesmo mês',
              'Mensal: até ao dia 20 do segundo mês após o mês de referência',
              'Regime de isenção art. 53 CIVA (≤ 15 000 €/ano e outras condições): sem cobrança de IVA e sem declaração periódica de IVA'
            ]}
          ]},
          { id: 't2', title: 'Segurança Social — declaração trimestral', content: [
            { kind: 'paragraph', text: 'Os Trabalhadores independentes pagam normalmente 21,4% sobre o rendimento relevante: geralmente 70% do rendimento de serviços ou 20% das vendas/produção/hotelaria/restauração. O cálculo é feito com base na declaração trimestral, com possível ajustamento de ±25%. No primeiro início de atividade existe normalmente uma isenção inicial de 12 meses; depois — mínimo de 20 € em certos casos. O limite mensal da base é 12×IAS = 6 445,56 € (IAS 2026 = 537,13 €).' }
          ]},
          { id: 't3', title: 'IRS — uma vez por ano (Anexo B / C)', content: [
            { kind: 'paragraph', text: 'A Modelo 3 é normalmente entregue entre 1 de abril e 30 de junho. No regime simplificado, o coeficiente depende do tipo de rendimento: para muitos professional services — 0,75; para outros — 0,35, 0,15, etc.; parte das despesas pode exigir comprovação. O IFICI confere uma taxa de 20% apenas para eligible income, desde que cumpridas as condições.' }
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Faturas e Recibos Verdes', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do IVA (DRE)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34470075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do IRS (DRE)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — Trabalhadores Independentes', url: 'https://www.seg-social.pt/trabalhadores-independentes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
