export default {
  editorialVoice: 'hackportugal',
  id: 'mortgage-foreigners',
  categoryId: 'housing_buy',
  title: 'Crédito à habitação para estrangeiros em Portugal',
  tldr: 'Estrangeiros residentes podem obter crédito à habitação: o LTV macroprudencial para habitação **owner-occupied/permanent** é até 90% do **menor valor entre** o preço de compra e a avaliação; para secondary residence — até 80%; non-resident borrowers — normalmente inferior. Euribor a 6 meses no início de maio de 2026 ≈ 2,45–2,56% (desceu do pico de ~4% em 2023). Spreads portugueses típicos de 0,6–1,5%. Taxa real ~3,0–4,0%.\n\n**Limite macroprudencial do prazo** (Banco de Portugal desde 2022): para borrowers até 30 anos — até 40 anos; para 30-35 anos — até 37 anos; para >35 anos — até 35 anos. Processo de 30–90 dias.',
  tags: ['crédito à habitação', 'banco', 'habitação', 'imobiliário'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'eligibility',
      title: 'Quem pode obter',
      content: [
        { kind: 'checklist', items: [
          'Residentes com rendimento em Portugal: LTV macroprudencial — até 90% do **menor valor entre** o preço de compra e a avaliação para owner-occupied permanent residence, até 80% para secondary',
          'Não residentes com rendimento fora de Portugal — normalmente 60–70%; as condições concretas dependem do banco',
          'Cidadãos da EU: os bancos avaliam a tax residency, a fonte/moeda do rendimento e a employment stability — a cidadania EU por si só não equivale às condições de um residente em Portugal',
          'Cidadãos não EU: não existe uma regra universal de “2 anos de autorização de residência”; alguns bancos são mais favoráveis a uma autorização de residência estável com rendimento em Portugal — avaliação individual',
          'Substituir por: "Golden Visa: novas ARI através da compra de imóveis já não estão disponíveis; para requerentes/titulares de ARI existentes, o banco continua a verificar individualmente a origem dos fundos, riscos de sanções e rendimento."'
        ]},
        { kind: 'warning', text: 'Cidadãos da Federação Russa enfrentam restrições em alguns bancos desde 2022 — a escolha é mais limitada e as taxas de juro podem ser mais elevadas. Verifique as condições no banco concreto.' }
      ]
    },
    {
      id: 'rates',
      title: 'Taxas e tipos (2026)',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Taxa variável (Euribor + spread)', content: [
            { kind: 'paragraph', text: 'Euribor a 6 meses no início de maio de 2026 ≈ 2,45–2,56% (após o pico de ~4% em 2023). Spread — 0,6–1,5%. Total — 3,0–4,0%. Recalculada a cada 6 meses.' }
          ]},
          { id: 'r2', title: 'Taxa fixa', content: [
            { kind: 'paragraph', text: 'Por 5–20 anos. ~3,0–4,0% em 2026. Protege contra oscilações, mas é menos flexível.' }
          ]},
          { id: 'r3', title: 'Taxa mista', content: [
            { kind: 'paragraph', text: 'Fixa nos primeiros 5–10 anos → variável. Popular entre estrangeiros.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documentos para o banco',
      content: [
        { kind: 'checklist', items: [
          'Passaporte + autorização de residência/Cartão de Cidadão',
          'NIF',
          'Últimas 3 declarações de IRS ou equivalente para não residentes',
          'Últimos 3–6 recibos de vencimento / extratos bancários',
          'Histórico de crédito: para requerentes não portugueses — certidão do país de residência',
          'Contrato promessa de compra e venda (contrato preliminar)',
          'Caderneta Predial do imóvel (do vendedor)',
          'Certidão Permanente Imóvel',
          'Relatório de avaliação (avaliação) — o banco pode exigir o seu próprio avaliador',
          'Documentos do co-requerente, se existir'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Processo',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Aprovação prévia', content: [
            { kind: 'paragraph', text: 'Contactar bancos (no mínimo 3) → obter aprovação prévia com indicação do montante e da taxa. Prazo — 2–3 semanas.' }
          ]},
          { id: 'p2', title: '2. Encontrar habitação', content: [
            { kind: 'paragraph', text: 'Com a aprovação prévia em mãos, as negociações com o vendedor são levadas mais a sério. Assinar CPCV (contrato de promessa) + sinal (sinal) — normalmente 10% (não é uma regra obrigatória). ⚠️ Inclua obrigatoriamente no CPCV uma **mortgage contingency clause** — caso contrário, se o banco recusar, pode perder o sinal.' }
          ]},
          { id: 'p3', title: '3. Avaliação bancária', content: [
            { kind: 'paragraph', text: 'O banco nomeia um avaliador. 300–500 €. Se a avaliação for inferior ao preço, o banco financiará apenas até ao valor da avaliação.' }
          ]},
          { id: 'p4', title: '4. Aprovação final', content: [
            { kind: 'paragraph', text: 'O banco emite uma carta de aprovação (carta de aprovação). Validade — 30–60 dias.' }
          ]},
          { id: 'p5', title: '5. Escritura (ato notarial)', content: [
            { kind: 'paragraph', text: 'Assinatura simultânea do contrato de crédito à habitação e do contrato de compra e venda no notário. O banco paga o dinheiro ao vendedor e você recebe as chaves.' }
          ]}
        ]}
      ]
    },
    {
      id: 'costs',
      title: 'Custos associados',
      content: [
        { kind: 'checklist', items: [
          'IMT (imposto sobre a transmissão de propriedade): para own permanent residence — escala marginal progressiva com abatements (pode ser 0% para os escalões de preço mais baixos); para outra residential — a partir de 1%. Veja o guia separado sobre IMT',
          'IS (imposto do selo) — 0,8% do valor + 0,6% do montante do crédito à habitação',
          'Notário / escritura — 500–1500 €',
          'Registo — 250–400 €',
          'Seguro de vida — normalmente uma contractual condition do banco, e não um legal requirement; o banco pode aprovar estruturas alternativas (escolha do credor). O custo varia consoante a idade/saúde; ~200–800 €/ano',
          'Seguro da habitação — 150–400 €/ano',
          'Comissões bancárias — 0,5–1% do crédito à habitação'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — Guia do Crédito à Habitação', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 74-A/2017 — regras do crédito à habitação', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/74-a-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASF — Autoridade de Supervisão de Seguros (seguro de vida)', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (portal fiscal) — calculadoras de IMT, IS', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
