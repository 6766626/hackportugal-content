export default {
  editorialVoice: 'hackportugal',
  id: 'cam-motorista-imt',
  categoryId: 'driving_license',
  title: 'CAM — certificado obrigatório de motorista profissional de camião ou autocarro',
  tldr: 'CAM — Certificado de Aptidão de Motorista, a qualificação profissional portuguesa para motoristas C/C1/CE e D/D1/DE, quando o transporte de mercadorias ou passageiros é uma actividade profissional. Em 2026, o percurso normal é: carta de condução da categoria necessária + formação inicial acelerada de 140 h numa escola reconhecida pelo IMT, exame e emissão da CQM/código 95. A cada 5 anos é necessária formação contínua de 35 h. Sem CAM/CQM, uma viagem comercial pode acabar em coima e problemas para o empregador.',
  tags: ['cam', 'imt', 'camião', 'autocarro'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-cam',
      title: 'O que é o CAM e quem precisa dele',
      content: [
        { kind: 'paragraph', text: 'O CAM não é uma carta de condução normal. É uma qualificação profissional de motorista para transporte de mercadorias e passageiros ao abrigo do Decreto-Lei 126/2009, na redacção em vigor. Na prática, o empregador e a fiscalização verificam se o motorista tem uma qualificação válida: CAM/CQM ou a menção código 95 associada às categorias C ou D.' },
        { kind: 'checklist', items: ['É necessário para a condução profissional das categorias C1, C1E, C, CE — transporte de mercadorias.', 'É necessário para a condução profissional das categorias D1, D1E, D, DE — transporte de passageiros.', 'É necessário tanto para motoristas por conta de outrem como para trabalhadores independentes, se o transporte for uma actividade comercial.', 'É necessário para estrangeiros nas mesmas condições que para cidadãos portugueses.', 'Normalmente é exigido já no momento da contratação: a empresa não deixará o motorista sair em serviço sem uma qualificação válida.', 'É válido por 5 anos; a renovação é feita através de formação contínua de 35 h.', 'O CAM não substitui a carta de condução: primeiro é necessário ter a categoria C/D ou estar no processo de a obter.' ] },
        { kind: 'warning', text: 'Se tem apenas carta de categoria B, o CAM não lhe dá direito a conduzir um camião ou autocarro. Primeiro precisa da categoria C/CE ou D/DE correspondente na carta de condução.' }
      ]
    },
    {
      id: 'exemptions',
      title: 'Quando o CAM não é necessário',
      content: [
        { kind: 'paragraph', text: 'A lei prevê excepções. São importantes para quem se muda para Portugal: nem toda a condução de um veículo pesado exige automaticamente CAM, mas o transporte comercial quase sempre exige.' },
        { kind: 'checklist', items: ['Veículos com velocidade máxima até 45 km/h.', 'Veículos das forças armadas, forças de segurança, bombeiros, proteção civil e serviços de emergência — no âmbito das suas funções.', 'Veículos em ensaios de estrada, reparação, inspecção, desenvolvimento técnico ou manutenção.', 'Condução de aprendizagem para obter a categoria de carta ou o próprio CAM.', 'Transporte não comercial de passageiros ou mercadorias para fins pessoais.', 'Transporte de materiais, equipamentos ou ferramentas que o motorista utiliza na sua actividade principal, desde que a condução em si não seja a actividade principal.', 'Algumas operações agrícolas e locais — apenas se se enquadrarem numa excepção específica da lei.' ] },
        { kind: 'warning', text: 'A frase “transporto as minhas ferramentas” não resolve o problema se, na prática, trabalha como motorista de entregas, estafeta em veículo pesado ou realiza viagens comerciais regulares. Em casos duvidosos, peça confirmação por escrito ao empregador ou à escola de condução/entidade formadora.' }
      ]
    },
    {
      id: 'requirements-before-course',
      title: 'O que preparar antes do curso',
      content: [
        { kind: 'paragraph', text: 'O CAM é obtido através de formação em entidades formadoras reconhecidas pelo IMT. Antes de se inscrever, verifique não só o preço, mas também se a escola está autorizada a ministrar exactamente a formação inicial/contínua CAM para o grupo necessário: mercadorias ou passageiros.' },
        { kind: 'checklist', items: ['Carta de condução com a categoria necessária ou processo confirmado para obtenção da categoria C/C1/CE ou D/D1/DE.', 'Documento de identificação: Cartão de Cidadão, autorização de residência, passaporte com estatuto válido ou outro documento aceite.', 'NIF — normalmente necessário para o contrato, factura e registo no sistema da escola.', 'Morada e contactos em Portugal: email, telefone e, por vezes, comprovativo de morada.', 'Aptidão médica para categorias pesadas — através de médico, se estiver a abrir/renovar C ou D em paralelo.', 'Avaliação psicológica — frequentemente exigida para o grupo 2 e condução profissional.', 'Compreensão de português: a formação e os testes decorrem normalmente em PT; confirme antecipadamente o idioma dos materiais.', 'Se a carta não for portuguesa: verifique se é reconhecida em Portugal e se pode trabalhar com ela, ou trate primeiro da troca de carta no IMT.' ] },
        { kind: 'warning', text: 'Para cidadãos de países fora da UE, ter um antigo cartão profissional do seu país não significa CAM automático em Portugal. O empregador pode pedir especificamente a CQM/código 95 portuguesa ou uma qualificação da UE reconhecida.' }
      ]
    },
    {
      id: 'initial-qualification',
      title: 'Primeira obtenção: formação inicial de 140 h',
      content: [
        { kind: 'paragraph', text: 'Para a maioria dos motoristas adultos utiliza-se a formação inicial acelerada — 140 horas. A formação inicial comum completa de 280 horas existe no sistema, mas no mercado é mais frequente o percurso acelerado de 140 h. O curso abrange segurança, condução económica, tacógrafo, regras de trabalho e repouso, carga, segurança de passageiros, responsabilidade do transportador e actuação em caso de acidente.' },
        { kind: 'substeps', items: [
          { id: 'choose-school', title: '1. Escolher uma escola reconhecida pelo IMT', content: [
            { kind: 'paragraph', text: 'Procure uma escola de condução ou centro de formação que indique claramente “CAM mercadorias”, “CAM passageiros”, “formação inicial acelerada” e “entidade certificada/reconhecida pelo IMT”.' }
          ] },
          { id: 'complete-140h', title: '2. Concluir 140 horas de formação', content: [
            { kind: 'paragraph', text: 'O horário pode ser diurno, nocturno ou intensivo. Na prática, conte com 3 a 8 semanas, dependendo do calendário e da sua disponibilidade.' }
          ] },
          { id: 'imt-exam', title: '3. Passar a avaliação/exame', content: [
            { kind: 'paragraph', text: 'Após o curso, a escola encaminha para a avaliação segundo as regras do IMT. Confirme com a escola se a inscrição no exame está incluída no preço e quanto custa uma repetição.' }
          ] },
          { id: 'request-cqm', title: '4. Obter a CQM ou o código 95', content: [
            { kind: 'paragraph', text: 'Após a conclusão com aproveitamento, a qualificação é registada no sistema do IMT. O motorista precisa de um documento/menção que comprove a qualificação profissional: Carta de Qualificação de Motorista (CQM) ou o código 95 correspondente, se aplicável à sua situação.' }
          ] }
        ] },
        { kind: 'warning', text: 'Não comece a trabalhar “enquanto o cartão está em processo”, a menos que o empregador confirme a legalidade de sair para o serviço. Numa fiscalização, não conta apenas o diploma da escola, mas sim a qualificação válida reconhecida pelo IMT.' }
      ]
    },
    {
      id: 'renewal',
      title: 'Renovação a cada 5 anos: formação contínua de 35 h',
      content: [
        { kind: 'paragraph', text: 'O CAM/CQM é válido por 5 anos. Para renovar, é necessário frequentar formação contínua de 35 horas antes do termo do prazo. Não é uma repetição completa das 140 h: o objectivo é actualizar conhecimentos sobre segurança, regras, tacógrafo, eco-driving e alterações legislativas.' },
        { kind: 'checklist', items: ['Verifique a validade da CQM/código 95 pelo menos 6 meses antes da data de caducidade.', 'Inscreva-se na formação contínua de 35 h numa entidade formadora reconhecida pelo IMT.', 'Confirme se o curso se aplica a mercadorias, passageiros ou cobre ambas as qualificações.', 'Após o curso, a escola transmite os dados/documentos para actualizar a qualificação.', 'Guarde o comprovativo de frequência e o recibo até receber o documento actualizado.', 'Se o prazo já expirou, não realize viagens profissionais até restabelecer a qualificação.', 'Ao mudar de empregador, entregue cópia da CQM/código 95 válida e da carta de condução.' ] },
        { kind: 'warning', text: 'Um CAM/CQM caducado significa, na prática, ausência de qualificação profissional. É um risco distinto de uma carta de condução caducada: a carta pode estar válida, mas continuar a não ser permitido trabalhar comercialmente como motorista C/D.' }
      ]
    },
    {
      id: 'expat-specific',
      title: 'Aspectos específicos para estrangeiros e mudança para Portugal',
      content: [
        { kind: 'paragraph', text: 'Se já trabalhou como motorista noutro país da UE e tem um código 95 ou driver qualification card válido, mostre primeiro os documentos ao empregador e ao IMT/escola. Em geral, as qualificações da UE são reconhecidas até ao fim da validade, mas a renovação em Portugal deve ser feita segundo as regras locais através de 35 h de formação contínua, se vive e trabalha aqui.' },
        { kind: 'checklist', items: ['Carta da UE: verifique a validade das categorias C/D e do código 95; se for residente em Portugal, podem aplicar-se regras de registo/troca.', 'Carta fora da UE: trate primeiro da troca de carta no IMT; sem categoria C/D reconhecida, o CAM por si só não ajuda.', 'Autorização de residência: para trabalhar como motorista é necessário estatuto legal com direito ao trabalho; o CAM não legaliza a permanência.', 'NISS e contrato de trabalho: são necessários para o empregador e para a Segurança Social, mas não substituem o CAM.', 'ADR, tacógrafo, cartão de condutor: são documentos separados. Para mercadorias perigosas, o ADR é necessário além do CAM.', 'Transporte de passageiros: a empresa pode exigir verificações adicionais, ausência de antecedentes criminais ou formação interna.', 'Idioma: mesmo que o instrutor fale inglês ou russo, os materiais oficiais e a interacção com o IMT são normalmente em português.' ] },
        { kind: 'warning', text: 'Tenha cuidado com anúncios de “CAM em 2 dias” ou “sem exame”. Para a qualificação inicial, as 140 h são uma exigência real; um certificado fictício pode custar-lhe o emprego, coimas e problemas em futuras fiscalizações do IMT/ACT.' }
      ]
    }
  ],
  costs: [
    { label: 'Formação inicial acelerada CAM 140 h', amountEURMin: 450, amountEURMax: 900, note: 'Intervalo de mercado entre escolas; depende de mercadorias/passageiros, região, horário e de o exame/taxas administrativas estarem incluídos.' },
    { label: 'Formação contínua CAM 35 h', amountEURMin: 120, amountEURMax: 300, note: 'Intervalo típico para renovação por 5 anos; confirme se a escola transmite os dados ao IMT e se os documentos estão incluídos.' },
    { label: 'Documentos adicionais do motorista', amountEURMin: 30, amountEURMax: 150, note: 'Atestado médico, avaliação psicológica, cartão de condutor/tacógrafo ou repetições de exame podem ser pagos à parte.' }
  ],
  sources: [
    { title: 'IMT: CAM — Certificado de Aptidão de Motorista', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Cidadao/Cartas-Conducao/CAM/Paginas/CAM.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 126/2009 — qualificação inicial e formação contínua de motoristas', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2009-34508075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IMT: Carta de Qualificação de Motorista / categorias profissionais', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Cidadao/Cartas-Conducao/Paginas/CartasConducao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
