export default {
  "editorialVoice": "hackportugal",
  "id": "close-activity",
  "categoryId": "work_business",
  "title": "Encerramento de atividade (trabalhador independente) e de pessoa coletiva em Portugal",
  "tldr": "Encerramento de recibos verdes (cessação de atividade): art. 33 CIVA — através do Portal das Finanças, gratuitamente, no prazo de 15 dias após o último recibo emitido. É necessário: submeter a declaração final de IVA + Modelo 3 IRS (se houve faturação no ano) + notificar a Segurança Social. Encerramento de Unipessoal / Lda — mais complexo: dissolução + liquidação através da Conservatória Comercial (200-400 €) + declarações finais. Processo de 6-12 meses. Se houver dívidas — insolvência através do tribunal.",
  "tags": [
    "cessação",
    "encerramento de atividade independente",
    "liquidação",
    "pessoa coletiva"
  ],
  "estimatedReadMinutes": 6,
  "steps": [
    {
      "id": "cessacao-atividade",
      "title": "👤 Encerramento de atividade independente (recibos verdes)",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "c1",
              "title": "1. Concluir o trabalho ativo",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Emitir o último recibo",
                    "Receber os pagamentos dos clientes (idealmente 30 dias antes do encerramento)",
                    "Reunir todas as faturas de fornecedores para o IVA deduzida",
                    "Informar os clientes sobre a cessação da atividade (email, carta) — é uma boa prática",
                    "Contratos ativos — rescindir ou reencaminhar"
                  ]
                }
              ]
            },
            {
              "id": "c2",
              "title": "2. Submeter a cessação na AT",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Portal das Finanças → Serviços → Atividades → Cessação",
                    "Indicar a data do último dia de atividade",
                    "Motivo: voluntary (normalmente a opção a escolher), trabalho subordinado (se passou a trabalhar por conta de outrem), mudança de país, aposentação",
                    "Submeter — o processo é imediato, o certificado chega no prazo de uma hora",
                    "Permite encerrar a atividade em qualquer dia, incluindo retroativamente (mas com justificação)"
                  ]
                }
              ]
            },
            {
              "id": "c3",
              "title": "3. IVA final",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Se estava enquadrado em IVA (>15k de faturação) — submeter a declaração final de IVA",
                    "Período: trimestre / mês em que ocorreu a cessação",
                    "Prazo: até ao dia 20 do mês seguinte",
                    "Se houver IVA a pagar (deve à AT) — pagar",
                    "Se houver crédito (a AT deve-lhe) — receber o reembolso em 30-60 dias"
                  ]
                }
              ]
            },
            {
              "id": "c4",
              "title": "4. IRS final",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Na declaração de IRS (submissão entre abril e junho do ano seguinte) — continuar a preencher o Anexo B",
                    "Calcular o imposto sobre toda a faturação do ano da cessação",
                    "Se CTC / categoria simplificada — 75% como base",
                    "Retenção na fonte (retenções dos clientes) — são abatidas ao imposto",
                    "Se o montante for negativo — reembolso"
                  ]
                }
              ]
            },
            {
              "id": "c5",
              "title": "5. Segurança Social",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Recebem automaticamente a notificação da AT no prazo de 10 dias",
                    "MAS: se tinha carência (isenção de 12 meses) e não pagava contribuições — a longo prazo é melhor confirmar na Segurança Social Direta",
                    "Contribuição final do mês da cessação: 21,4% de 70% da faturação desse mês",
                    "Prazo: dia 20 do mês seguinte",
                    "**Após a cessação**: deixam de ser cobradas contribuições; o período contributivo acumulado mantém-se (para a futura pensão)"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "reopen",
      "title": "🔄 Reabrir atividade",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Reabertura atividade — possível a qualquer momento através do Portal das Finanças",
            "Mas: se abriu e encerrou a atividade em menos de 12 meses — a AT pode sinalizar isto como suspeito (tentativa de evitar impostos)",
            "Recomenda-se manter ≥ 12 meses entre o encerramento e a reabertura",
            "Nova abertura — como um registo completamente novo: novamente 12 meses de carência de isenção da Segurança Social (se não trabalhou a recibos verdes nos 3 anos anteriores)"
          ]
        }
      ]
    },
    {
      "id": "company-closure",
      "title": "🏢 Encerramento de pessoa coletiva (Lda, Unipessoal, SA)",
      "content": [
        {
          "kind": "paragraph",
          "text": "Muito mais complexo e caro do que atividade independente. Processo de dissolução + liquidação."
        },
        {
          "kind": "substeps",
          "items": [
            {
              "id": "l1",
              "title": "Etapa 1: Dissolução",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Sócios (fundadores) tomam a decisão em Assembleia Geral",
                    "Submissão na Conservatória Comercial — registo da dissolução",
                    "Publicação no Boletim Oficial",
                    "Custo: 100-200 €"
                  ]
                }
              ]
            },
            {
              "id": "l2",
              "title": "Etapa 2: Liquidação",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Nomeação do liquidatário (muitas vezes — o último gerente/administrador)",
                    "Inventário de ativos e passivos",
                    "Venda de bens, pagamento de dívidas",
                    "Balanço final",
                    "Distribuição entre os sócios de acordo com as quotas/participações",
                    "Processo: 6-18 meses",
                    "Custo: depende muito da complexidade. Unipessoal simples — 500-1000 €. Lda média — 1500-5000 €. SA com ativos — 5000-20000+"
                  ]
                }
              ]
            },
            {
              "id": "l3",
              "title": "Etapa 3: Registo encerramento",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Registo final na Conservatória Comercial",
                    "Submissão das declarações finais na IES (Informação Empresarial Simplificada)",
                    "Notificação da Segurança Social sobre a cessação",
                    "Conservação dos documentos contabilísticos durante 5 anos (por lei)",
                    "Certidão de encerramento — a empresa está oficialmente encerrada"
                  ]
                }
              ]
            },
            {
              "id": "l4",
              "title": "Simplified dissolução (se não houver ativos / dívidas)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "«Empresa na Hora» dissolução — num dia na Conservatória",
                    "Apenas para casos simples: sem dívidas por pagar, sem dívidas à AT, sem ativos",
                    "Custo: ~360 €",
                    "Adequado para ~40% das empresas"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "bankruptcy",
      "title": "💸 Insolvência — se as dívidas > ativos",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Insolvência → através do tribunal",
            "Procedimento acelerado através do PER (Processo Especial de Revitalização), se ainda houver possibilidade de recuperação",
            "PEVE (Processo Especial de Viabilização) — para microempresas",
            "Insolvência completa com liquidação — 1-3 anos, o tribunal nomeia um administrador",
            "Para os sócios: responsabilidade pessoal apenas se houver responsabilidade subsidiária, fraude ou garantias pessoais",
            "Unipessoal Lda — o sócio está protegido (responsabilidade limitada)",
            "ENI (Empresário em Nome Individual, = empresário individual em sentido comercial) — responsabilidade pessoal total",
            "Custo: custas judiciais 1000-5000 €, advogado 2000-10000 €"
          ]
        }
      ]
    },
    {
      "id": "checklist-final",
      "title": "✅ Lista de verificação final",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "f1",
              "title": "Financeiros",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Todos os clientes pagaram ou os receipts foram marcados como incobráveis",
                    "Todos os fornecedores foram pagos",
                    "IVA final submetido",
                    "IRS/IRC final submetido",
                    "IES final (para Lda) submetida",
                    "Contribuições da Segurança Social pagas",
                    "Encerrar a conta bancária da empresa (ou transferir para uma conta pessoal)",
                    "Cancelar subscrições (software, domínios, alojamento)"
                  ]
                }
              ]
            },
            {
              "id": "f2",
              "title": "Jurídicos",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Informar o regulador, se a atividade era regulada (por exemplo, imobiliário — APEMIP; seguros — ASF)",
                    "Cancelar marcas registadas (ou transferi-las)",
                    "Revogar o acesso delegado no Portal das Finanças para o antigo contabilista",
                    "Entregar documentos de arquivo (conservar durante 5 anos)",
                    "Informar Chave Móvel Digital / certificados digitais — podem manter-se ativos"
                  ]
                }
              ]
            },
            {
              "id": "f3",
              "title": "Administrativos",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Encerrar contas em lojas / fornecedores",
                    "Encerrar a caixa de correio da empresa (Gmail / Outlook)",
                    "Remover do Google My Business, redes sociais",
                    "Configurar o reencaminhamento do domínio / email",
                    "Informar o banco (não para a conta pessoal, mas se existia uma conta comercial)",
                    "Cancelar seguros empresariais"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "costs": [
    {
      "label": "Cessação atividade (atividade independente)",
      "amountEUR": 0,
      "note": "gratuito através do Portal das Finanças"
    },
    {
      "label": "Declarações finais (se através de contabilista)",
      "amountEURMin": 100,
      "amountEURMax": 300
    },
    {
      "label": "Simplified dissolução (Empresa na Hora)",
      "amountEUR": 360
    },
    {
      "label": "Encerramento de Unipessoal (com liquidação)",
      "amountEURMin": 500,
      "amountEURMax": 1000
    },
    {
      "label": "Lda média (processo completo)",
      "amountEURMin": 1500,
      "amountEURMax": 5000
    },
    {
      "label": "Insolvência através do tribunal",
      "amountEURMin": 1000,
      "amountEURMax": 5000
    }
  ],
  "sources": [
    {
      "title": "Portal das Finanças — Cessação Atividade",
      "url": "https://info.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "IRN — Conservatória Comercial",
      "url": "https://justica.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Código da Insolvência (CIRE)",
      "url": "https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2004-34453275",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    }
  ],
  "lastVerified": "2026-04-22",
  "verifyIntervalDays": 365
}
