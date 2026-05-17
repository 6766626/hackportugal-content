export default {
  editorialVoice: 'hackportugal',
  id: 'civil-marriage',
  categoryId: 'nationality',
  title: 'Registo civil de casamento em Portugal — como registar um casamento',
  tldr: 'O registo civil de casamento realiza-se na Conservatória do Registo Civil. Está disponível para residentes e não residentes. Prazo: depende da carga da Conservatória e da completude dos documentos; não existe um “período de proclamas de 30 dias” fixo. Após a abertura do processo preliminar, o conservador verifica os impedimentos matrimoniais; depois de despacho favorável, o casamento deve ser celebrado no prazo de 6 meses. Casamento urgente NÃO é um procedimento acelerado turístico, mas sim um procedimento excecional para perigo iminente de morte ou parto iminente. Requisitos: passaporte, certidão de nascimento (com apostila + tradução para estrangeiros), certificado de capacidade matrimonial do seu país (se não for cidadão português). O casamento entre pessoas do mesmo sexo é permitido desde 2010 (Lei 9/2010). Casamento religioso — com efeitos civis através da Concordata (católico) ou da Lei 16/2001 (outras confissões).',
  tags: ['casamento', 'casamento civil', 'cerimónia', 'casamento'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'requirements',
      title: '📋 Quem pode casar',
      content: [
        { kind: 'checklist', items: [
          '👫 Qualquer casal, independentemente do sexo — o casamento entre pessoas do mesmo sexo é permitido desde 2010 (Lei 9/2010)',
          '🎂 ≥ 18 anos; 16-17 — com autorização dos pais',
          '✅ Não estar num casamento válido (em qualquer país)',
          '✅ Capacidade jurídica (sem limitações legais que impeçam o casamento)',
          '⚠️ A bigamia é crime em Portugal, punível com até 2 anos de prisão',
          '🌍 Um casamento celebrado em Portugal é reconhecido na maioria dos países após apostila',
          '⚠️ Alguns países (EAU, Arábia Saudita, etc.) NÃO reconhecem casamentos entre pessoas do mesmo sexo — tenha isto em conta',
          '👨‍👩‍👧 Filhos: proteção jurídica em todos os direitos e responsabilidades parentais (guarda conjunta, herança, seguro)'
        ]}
      ]
    },
    {
      id: 'process-residents',
      title: '🏛️ Processo — para residentes em Portugal',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Passo 1: Apresentação do processo preliminar', content: [
            { kind: 'checklist', items: [
              'Na Conservatória do Registo Civil (qualquer uma em Portugal)',
              'Documentos:',
              '  - Cartão de Cidadão / autorização de residência / passaporte de ambos os futuros cônjuges',
              '  - Certidões de divórcio ou de óbito (se houve casamento anterior)',
              '  - Para estrangeiros — certificado de capacidade matrimonial + certidão de nascimento (apostila + tradução)',
              'As testemunhas normalmente NÃO são obrigatórias na apresentação do processo preliminar; podem ser necessárias em casos/tipos de cerimónia específicos. Confirme na Conservatória escolhida',
              '**Custo: 120 €** (não urgente)'
            ]}
          ]},
          { id: 'r2', title: 'Passo 2: Verificação dos impedimentos matrimoniais', content: [
            { kind: 'paragraph', text: 'A conservadora abre o processo preliminar e verifica os impedimentos matrimoniais (impedimentos absolutos e relativos: idade, capacidade jurídica, parentesco, casamento existente, etc.). Isto NÃO é um período fixo de 30 dias de anúncio público — o prazo depende da carga da Conservatória e da completude dos documentos. No fim da análise — despacho favorável. O casamento deve ser celebrado no prazo de 6 meses após o despacho.' },
            { kind: 'paragraph', text: 'Se existir um impedimento — a Conservatória notifica; um impediment dispensável pode ser afastado por requerimento, um impediment dirimente impede o casamento.' }
          ]},
          { id: 'r3', title: 'Passo 3: Cerimónia civil', content: [
            { kind: 'checklist', items: [
              'Conservatória ou local certificado (hotel, garrafeira — mediante taxa adicional)',
              'A conservadora realiza o registo — 15-20 minutos',
              'Assinatura do livro, troca de alianças (opcional), beijo (opcional 😄)',
              'A Certidão de Casamento é emitida imediatamente',
              'Custo da cerimónia na Conservatória: incluído; cerimónia externa: +50-150 €'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'foreigners',
      title: '🌍 Para estrangeiros — documentos adicionais',
      content: [
        { kind: 'paragraph', text: 'Se você ou o seu parceiro for estrangeiro sem residência em Portugal, serão necessários mais documentos.' },
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Certificado de Capacidade Matrimonial', content: [
            { kind: 'checklist', items: [
              'Declaração do seu país que comprove o direito a casar',
              'Confirma: que não é casado + que tem capacidade jurídica para casar',
              'Obter no registo civil do país de origem / consulado',
              'Os consulados portugueses não o emitem a cidadãos portugueses que se desloquem para casar no estrangeiro',
              'Válido por 6 meses',
              'Apostila + tradução juramentada para português'
            ]}
          ]},
          { id: 'f2', title: 'Certidão de nascimento', content: [
            { kind: 'checklist', items: [
              'Certidão emitida há ≤ 6 meses',
              'Apostila (Hague) ou legalização consular',
              'Tradução juramentada para português',
              'Do Brasil: cartório civil → apostila no MRE'
            ]}
          ]},
          { id: 'f3', title: 'Certidão de divórcio / óbito', content: [
            { kind: 'paragraph', text: 'Apostila + tradução para confirmar a inexistência de casamento válido. Prazo ≤ 6 meses.' }
          ]},
          { id: 'f4', title: 'Sem residência? Casamento para turistas', content: [
            { kind: 'checklist', items: [
              'É possível — um estrangeiro turista pode casar em Portugal',
              'Documentos adicionais: comprovativo de morada (mesmo que seja num hotel), cópias dos carimbos de entrada',
              'Requerentes brasileiros: a língua não é uma barreira; o Estatuto de Igualdade é um procedimento separado e não simplifica diretamente o registo do casamento',
              'Portugal não disponibiliza um procedimento acelerado para turismo de casamento como Las Vegas',
              '⚠️ Alguns consulados exigem autorização de residência para o processo — confirme localmente'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'urgent',
      title: '⚡ Casamento urgente — procedimento excecional',
      content: [
        { kind: 'warning', text: 'Casamento urgente NÃO é um procedimento acelerado turístico e NÃO é uma opção de regime “urgente”. É um procedimento **excecional** de casamento sem o processo preliminar habitual nas situações previstas na lei.' },
        { kind: 'checklist', items: [
          '🩺 **Perigo iminente de morte** de um dos nubentes',
          '👶 **Parto iminente**',
          '⚖️ Regulado pelo art. 1622 Código Civil',
          'Pode ser celebrado por qualquer pessoa na presença de 4 testemunhas e depois é registado na Conservatória',
          '⚠️ Não se destina a casamentos “ao fim de semana”, casamentos na praia ou aceleração do procedimento. Para acelerar o procedimento normal — discuta com a Conservatória concreta a completude dos documentos',
          'Para casamentos na praia/fora da Conservatória — procedimento normal + cerimónia externa mediante taxa adicional da Conservatória'
        ]}
      ]
    },
    {
      id: 'religious',
      title: '⛪ Casamento religioso com efeitos civis',
      content: [
        { kind: 'checklist', items: [
          'Católico: Concordata Santa Sé-Portugal (1940, revista em 2004) — reconhecimento civil automático',
          'Evangélico / protestante / outro: um ministro registado pode realizar a cerimónia com efeitos civis (Lei 16/2001)',
          'As religiões muçulmana, judaica, hindu e budista também são reconhecidas',
          'Condição prévia: o mesmo processo preliminar na Conservatória com verificação de impedimentos (o prazo depende da carga e da completude dos documentos; não há período fixo de 30 dias)',
          'Após a cerimónia religiosa: o ministro envia o livro assinado de volta à Conservatória → registo no livro civil',
          'Cerimónias religiosas entre pessoas do mesmo sexo — apenas nas confissões que as realizem (alguns metodistas, quakers, humanistas seculares)'
        ]}
      ]
    },
    {
      id: 'after',
      title: '✅ Depois do casamento',
      content: [
        { kind: 'checklist', items: [
          '📄 Obter a Certidão de Casamento imediatamente após o registo',
          '🆔 Atualizar Cartão de Cidadão / autorização de residência — alteração de apelido (opcional em Portugal, frequente entre mulheres, mas não obrigatória)',
          '📑 Atualizar os dados nas Finanças (se quiser entrega conjunta de IRS)',
          '🏥 Atualizar Segurança Social / SNS (parceiro dependente)',
          '🏠 Atualizar dados bancários — contas conjuntas, beneficiários',
          '📧 Atualizar seguro, empregador, serviços públicos',
          '🌍 Se o casamento for internacional: registar o casamento em ambos os países (para reconhecimento no outro país)',
          '👶 Filhos: para cônjuges de sexos diferentes, aplica-se a presunção de paternidade do marido relativamente aos filhos nascidos ou concebidos no casamento (Código Civil arts. 1796–1838). Para casais do mesmo sexo, PMA/FIV, gestação de substituição, adoção e certidões de nascimento estrangeiras — é necessária análise/registo jurídico separado',
          '💰 IRS: os casais escolhem entre tributação separada e tributação conjunta na declaração anual Modelo 3. Englobamento é um mecanismo separado para categorias específicas de rendimentos (por exemplo, mais-valias ou rendimentos de investimento), não a própria opção de entrega conjunta'
        ]}
      ]
    },
    {
      id: 'divorce-prevention',
      title: '💔 Convenção antenupcial',
      content: [
        { kind: 'paragraph', text: 'Convenção Antenupcial — contrato celebrado antes do casamento. Define o regime de bens.' },
        { kind: 'checklist', items: [
          '**Por defeito (sem convenção antenupcial)**: comunhão de adquiridos — os bens adquiridos após o casamento são comuns; os adquiridos antes do casamento são separados',
          '**Comunhão geral**: tudo é comum, mesmo os bens adquiridos antes do casamento',
          '**Separação total**: nada é comum, cada um é proprietário dos seus bens',
          'A convenção antenupcial deve ser **assinada ANTES do casamento** no notário / na Conservatória',
          'Custo: 100-300 €',
          'Recomendado: separação total, se houver uma diferença significativa de património ou se os cônjuges tiverem negócios',
          '⚠️ Após o casamento, o regime de bens normalmente NÃO se altera (princípio da imutabilidade convenção antenupcial). A alteração só é possível em casos estritamente limitados pela lei. Escolha o regime ANTES do casamento'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Processo preliminar normal', amountEUR: 120 },
    { label: 'Cerimónia fora da Conservatória / fora do horário normal', amountEUR: 200, note: 'Mais eventuais despesas de deslocação/local; confirme na tabela de emolumentos IRN' },
    { label: 'Suplemento por cerimónia externa (além do emolumento oficial)', amountEURMin: 50, amountEURMax: 150, note: 'Despesas de local/transporte; depende da Conservatória' },
    { label: 'Apostila + tradução de documentos (por 1 pessoa)', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Convenção antenupcial', amountEURMin: 100, amountEURMax: 300 }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 60,
  sources: [
    { title: 'IRN — Casamento Civil', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código Civil — Casamento (livro IV)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 9/2010 — Casamento entre pessoas do mesmo sexo', url: 'https://diariodarepublica.pt/dr/detalhe/lei/9-2010-616040', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
