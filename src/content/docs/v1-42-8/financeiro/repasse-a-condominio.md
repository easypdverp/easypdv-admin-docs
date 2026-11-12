---
title: Repasse a Condomínio
description: Como calcular, fechar e acompanhar o repasse mensal devido a cada condomínio no Despensinha ERP.
sidebar:
  order: 9
---

O módulo de **Repasse a Condomínio** calcula, mês a mês e por ponto de venda, o valor devido ao condomínio onde o ponto está instalado: o cashback sobre o faturamento e o custeio de energia. Os termos do acordo vêm do cadastro do condomínio e podem ser ajustados em cada mês. Depois de fechado, o repasse gera um extrato em PDF e pode ser lançado como conta a pagar.

O acesso ao módulo e às ações de reabrir o mês e lançar conta a pagar fica disponível conforme as permissões do usuário.

## Acessando o Repasse a Condomínio

Acesse **Finanças → Repasse a condomínio**. A tela reúne, de cima para baixo, os filtros, os cartões com os totais do mês, o gráfico de evolução e a listagem de repasses.

Por padrão, a tela abre no mês anterior ao atual, já que o mês corrente ainda não terminou.

### Filtros

| Campo | Descrição |
|-------|-----------|
| Condomínio | Mostra apenas os repasses de um condomínio. Sem seleção, mostra **Todos os condomínios**. Ao trocar o condomínio, o filtro de ponto de venda é limpo |
| Ponto de venda | Mostra apenas os repasses de um ponto de venda. Quando há um condomínio selecionado, lista só os pontos desse condomínio |
| Mês | Mês de referência dos repasses |
| Status | **Rascunho** ou **Fechado**. Sem seleção, mostra **Todos** |

### Totais do mês

Quatro cartões resumem o mês escolhido no filtro, respeitando também o condomínio e o ponto de venda selecionados:

| Cartão | Descrição |
|--------|-----------|
| Faturamento bruto no mês | Soma do faturamento bruto, com a quantidade de pontos de venda e de condomínios envolvidos |
| Cashback no mês | Soma do cashback e quanto ele representa, em percentual, do faturamento |
| Energia no mês | Soma da energia, com a quantidade de leituras pendentes e de repasses com energia isenta |
| Total a repassar | Soma dos totais e a variação percentual em relação ao mês anterior (**vs mês anterior**). Sem total no mês anterior, exibe **Sem mês anterior para comparar** |

### Listagem

| Coluna | Descrição |
|--------|-----------|
| Ponto de venda | Nome do ponto de venda e, abaixo, o condomínio |
| Mês | Mês de referência do repasse |
| Status | Rascunho ou Fechado |
| Faturamento | Faturamento bruto considerado no repasse |
| Cashback | Valor do cashback |
| Energia | Valor da energia. Exibe **Leitura pendente** quando falta a leitura do medidor e a marca **isenta** quando a energia foi isentada no mês |
| Total | Valor total a repassar |
| Conta a pagar | Situação da conta a pagar ligada ao repasse, com a data de vencimento ou de pagamento. Em repasse fechado ainda sem conta, exibe o atalho **Lançar conta** |
| Fechado | Há quanto tempo o repasse foi fechado (passe o mouse para ver a data e a hora) |

Clique em uma linha para abri-la: um rascunho abre para edição e um repasse fechado abre a tela de detalhes.

Quando não há repasses para o filtro, a tela exibe **Nenhum repasse neste filtro**.

### Ações da listagem

O menu de ações de cada linha muda conforme a situação do repasse.

Para um **rascunho**:
- **Editar rascunho**: abre o formulário do repasse
- **Fechar repasse**: fecha o repasse direto da listagem. Fica desabilitado enquanto houver algum impedimento (veja [O que impede o fechamento](#o-que-impede-o-fechamento)); passe o mouse sobre a opção para ver o motivo
- **Excluir rascunho**: exclui o rascunho e seus anexos, após confirmação

Para um repasse **fechado**:
- **Abrir**: abre a tela de detalhes
- **Lançar conta a pagar** ou **Ver conta a pagar**: conforme o repasse já tenha ou não uma conta a pagar
- **Exportar PDF**: abre o extrato do repasse em PDF
- **Compartilhar**: copia o link direto do extrato
- **Reabrir mês**: volta o repasse a rascunho, após confirmação

### Exportação

A listagem pode ser exportada nos formatos **PDF** e **Excel**, com as colunas de ponto de venda, condomínio, mês, status, faturamento, cashback, energia, total e situação da conta a pagar, levando os filtros aplicados.

## Situações do repasse

| Situação | Descrição |
|----------|-----------|
| Rascunho | Repasse em preparação. Os valores são recalculados a cada alteração e todos os dados podem ser editados |
| Fechado | Repasse concluído. Os valores ficam congelados, o extrato em PDF é gerado e o repasse pode virar conta a pagar. Para alterar, é preciso reabrir o mês |

O ciclo de um repasse é:

1. **Criar** o rascunho, escolhendo o mês e o ponto de venda
2. **Preencher** a leitura do medidor, conferir faturamento e cashback, anexar documentos e salvar o rascunho quantas vezes for necessário
3. **Fechar** o repasse quando o mês tiver terminado e não houver pendência de energia
4. **Lançar a conta a pagar** a partir do repasse fechado
5. **Registrar o pagamento** na conta a pagar; a situação do pagamento aparece no repasse

## Como criar um repasse

1. Acesse **Finanças → Repasse a condomínio**
2. Clique no botão **Novo repasse**
3. No card **Identificação e período**, preencha:
   - **Mês de referência** (obrigatório): já vem com o mês anterior ao atual
   - **Ponto de venda** (obrigatório): apenas pontos de venda ativos são listados
   - **Condomínio**: preenchido automaticamente com o condomínio do ponto de venda
4. Confira os termos, os valores e, se houver cobrança de energia por kWh, informe a leitura do medidor
5. Anexe os documentos do mês
6. Clique em **Salvar rascunho** para continuar depois, ou em **Fechar repasse** para concluir

Os botões **Salvar rascunho** e **Fechar repasse** só ficam disponíveis depois que o mês e o ponto de venda são escolhidos. Ao editar um rascunho já salvo, o mês e o ponto de venda não podem ser alterados.

Ao trocar o ponto de venda, os termos são carregados novamente a partir do cadastro do novo condomínio. Trocar o ponto de venda ou o mês também descarta o faturamento e o cashback informados manualmente, que voltam aos valores calculados.

### Dados de repasse do condomínio

Logo abaixo da identificação, o quadro **Dados de repasse do condomínio** mostra, apenas para consulta, como o condomínio recebe o repasse:

| Campo | Descrição |
|-------|-----------|
| Forma | Forma de repasse ao condomínio |
| Dia do pagamento | Dia do mês em que o repasse é pago |
| Banco | Código e nome do banco |
| Agência / Conta | Agência e conta com dígitos |
| Chave PIX | Chave PIX e seu tipo |
| Favorecido | Nome do favorecido |

O link **Editar no cadastro** abre o cadastro do condomínio. Se o condomínio ainda não tiver esses dados, o quadro avisa para preencher a aba **Acordo financeiro** do cadastro. Veja também [Comunidade](../../cadastros/comunidade/).

### Avisos

No topo do formulário e da tela de detalhes podem aparecer os seguintes avisos:

| Aviso | Quando aparece |
|-------|----------------|
| O contrato deste condomínio terminou antes do fim deste mês. Confira a vigência no cadastro. | A vigência do contrato com o condomínio acabou antes do fim do mês do repasse |
| Este mês cai dentro do aviso prévio do fim da vigência. | O mês do repasse está dentro do período de aviso prévio do contrato |
| Energia pendente. | Falta a leitura do medidor (ou outro dado) para calcular a energia; o motivo é exibido junto |

## Termos deste repasse

O card **Termos deste repasse** traz o acordo do condomínio copiado do cadastro no momento em que o repasse é criado. Ele aparece recolhido, com um resumo em uma linha, por exemplo: cashback percentual com mínimo e teto, energia por kWh com a tarifa e meses de carência.

Clique em **Ver e alterar** para abrir os campos e ajustar os termos apenas para este mês, sem mudar o cadastro do condomínio:

| Campo | Descrição |
|-------|-----------|
| Tipo de cashback | **Nenhum**, **Fixo** ou **Porcentagem** |
| Percentual da venda bruta | Percentual do cashback sobre o faturamento (quando o tipo é **Porcentagem**) |
| Valor por mês | Valor fixo do cashback (quando o tipo é **Fixo**) |
| Mínimo garantido por mês | Valor mínimo do cashback percentual |
| Teto por mês | Valor máximo do cashback percentual |
| Forma de cobrança da energia | **Nenhuma**, **Fixo** ou **Por kWh** |
| Tarifa por kWh | Valor cobrado por kWh consumido, com até seis casas decimais (quando a forma é **Por kWh**) |
| Valor por mês | Valor fixo da energia, com duas casas decimais (quando a forma é **Fixo**) |
| Início da parceria | Data de início da parceria com o condomínio |
| Carência (meses) | Quantidade de meses de carência |

Ao trocar o tipo de cashback, os campos que só valiam para o tipo anterior são limpos. O mesmo vale para a forma de cobrança da energia.

Cada termo diferente do cadastro recebe a marca **Alterado** e mostra abaixo o valor do cadastro (**Cadastro:**). O título do card indica quantas alterações foram feitas no mês (por exemplo, **2 alterações neste mês**). Para desfazer os ajustes, clique em **Restaurar do cadastro**. Para fechar os campos, clique em **Recolher**.

## Cashback

O card **Cashback** aparece quando o repasse tem cashback e traz dois campos, preenchidos automaticamente:

| Campo | Descrição |
|-------|-----------|
| Faturamento bruto | Vendas faturadas do ponto de venda no mês, calculadas pelo sistema |
| Cashback do mês | Cashback calculado pelos termos deste repasse |

Os dois valores podem ser informados manualmente. Um valor informado recebe a marca **Alterado** e mostra abaixo o valor calculado (**Calculado:**); clique em **Usar o calculado** para voltar ao valor do sistema.

## Medição de energia

O card **Medição de energia** aparece quando o repasse tem cobrança de energia.

Quando a cobrança é **Por kWh**, o card exibe:

| Campo | Descrição |
|-------|-----------|
| Leitura anterior (kWh) | Vem do repasse anterior desse ponto de venda, apenas para consulta (passe o mouse para ver a origem e a data). No primeiro repasse do ponto de venda, o campo pode ser preenchido e parte de zero |
| Leitura atual (kWh) | Leitura do medidor no mês |
| Data da leitura | Data em que a leitura atual foi feita |
| Consumo do mês | Consumo em kWh, calculado pelo sistema a partir das leituras |

Em qualquer forma de cobrança, a opção **Isentar custeio de energia neste mês** deixa a energia em R$ 0,00 no total do mês. O consumo continua registrado.

A foto do medidor é anexada no card **Anexos**.

## Observações internas

O campo **Observações internas** guarda anotações sobre o repasse. Ele não aparece para o condomínio nem no PDF exportado.

## Anexos

O card **Anexos** tem um lugar para cada documento; o que ainda falta aparece vazio:

| Campo | Descrição |
|-------|-----------|
| Foto do medidor | Uma foto do medidor no mês de referência |
| Imagem do faturamento | Uma imagem do faturamento do mês |
| Outros documentos | Quantos documentos forem necessários |

São aceitos arquivos **JPG**, **JPEG**, **PNG** e **PDF** de até 20 MB. Para enviar, arraste o arquivo para a área indicada ou selecione-o; uma barra mostra o progresso do envio.

Cada anexo exibe o nome e o tamanho do arquivo, com as ações **Visualizar** (para imagens), **Baixar** e **Remover**. Os anexos ficam ligados ao repasse quando o rascunho é salvo ou fechado. Em um repasse fechado, os anexos podem apenas ser visualizados e baixados.

## Como os valores são calculados

O card **Valores do repasse** mostra o cálculo atualizado sempre que algum dado do formulário muda:

| Linha | Descrição |
|-------|-----------|
| Faturamento bruto | Vendas faturadas do ponto de venda no mês, calculadas pelo sistema. Quando informado manualmente, exibe **Valor alterado** e o valor calculado |
| Dias isentos | Dias da carência fora da base de cálculo, quando houver |
| Cashback | Cashback do mês conforme os termos. Exibe **Termo alterado** quando algum termo de cashback foi ajustado no mês, ou **Valor alterado** quando o próprio valor foi informado |
| Energia | Valor da energia. Exibe **Tarifa alterada** quando a tarifa foi ajustada no mês |
| Total a repassar | Soma do cashback e da energia, com a data de vencimento |

O cashback segue o tipo definido nos termos:
- **Porcentagem**: percentual aplicado sobre o faturamento bruto. Se o resultado ficar abaixo do **Mínimo garantido por mês**, vale o mínimo; se ficar acima do **Teto por mês**, vale o teto. O detalhamento indica qual caso se aplicou (**abaixo do mínimo, vale o mínimo**, **acima do teto, vale o teto** ou **dentro do mínimo e do teto**)
- **Fixo**: o valor por mês definido nos termos
- **Nenhum**: sem cashback

A energia segue a forma de cobrança:
- **Por kWh**: consumo do mês multiplicado pela tarifa por kWh, exibida com seis casas decimais. O detalhamento mostra o cálculo no formato consumo em kWh × tarifa
- **Fixo**: o valor por mês definido nos termos
- **Nenhuma**: sem cobrança de energia
- Com **Isentar custeio de energia neste mês** marcado, a energia fica em R$ 0,00 e o detalhamento mostra o consumo registrado

## Fechando o repasse

Ao clicar em **Fechar repasse**, o sistema salva o rascunho, fecha o repasse e abre a tela de detalhes. Fechar congela os valores; depois de fechado, o repasse pode ser lançado como conta a pagar.

### O que impede o fechamento

Enquanto houver algum impedimento, o botão **Fechar repasse** fica desabilitado e o formulário mostra, logo acima dos botões, o aviso **Ainda não dá para fechar o repasse:** com a lista do que falta:

| Impedimento | Como resolver |
|-------------|---------------|
| O mês ainda não terminou (por exemplo, **O mês 10/2026 ainda não terminou**) | Aguarde o fim do mês de referência |
| Falta a leitura do medidor (ou outro motivo de energia pendente) | Informe a leitura atual do medidor ou isente a energia do mês |

Na listagem, a opção **Fechar repasse** do menu de ações fica desabilitada pelos mesmos motivos.

## Tela do repasse fechado

Um repasse fechado abre na tela **Repasse fechado**, com o título **Repasse de** mês **·** ponto de venda, a situação, o condomínio e quem fechou o repasse, com data e hora.

A tela exibe:
- **Valores fechados**: os mesmos valores do cálculo, congelados, com o **Total repassado** e o **Vencimento**. O aviso **Reabra para alterar** indica que é preciso reabrir o mês para mudar qualquer valor
- **Anexos**: os documentos do repasse, para visualizar ou baixar. Sem anexos, exibe **Nenhum anexo.**
- **Observações internas**: quando houver
- **Conta a pagar**: o vínculo com a conta a pagar (veja abaixo)
- **Dados de repasse do condomínio**: os dados bancários e de pagamento do condomínio

No topo da tela ficam os botões **Exportar PDF**, **Compartilhar** e **Reabrir mês**.

### Conta a pagar

Enquanto o repasse fechado não tem conta a pagar, o card **Conta a pagar** informa que a conta abre já preenchida com favorecido, valor e vencimento. Clique em **Lançar conta a pagar** para abrir o formulário de [Contas a Pagar](../contas-a-pagar/) com:
- **Favorecido**: o condomínio
- **Valor**: o total do repasse
- **Vencimento**: a data de vencimento do repasse
- **Descrição**: "Repasse a condomínio de" mês **·** ponto de venda
- O ponto de venda e a empresa do repasse, com uma parcela já preenchida

Quem não tem acesso a contas a pagar vê a mensagem **Peça a quem tem acesso a contas a pagar para lançar.**

Depois de lançada, o card mostra:

| Campo | Descrição |
|-------|-----------|
| Conta | Número da conta a pagar, com link para abri-la |
| Favorecido | Favorecido do repasse |
| Valor | Total do repasse |
| Vencimento | Data de vencimento (conta em aberto) |
| Pagamento | Link **Registrar na conta a pagar** (conta em aberto) |
| Pago em | Data e forma de pagamento (conta paga) |
| Comprovante | Comprovante do pagamento, quando anexado na conta (conta paga) |

O pagamento é sempre registrado na conta a pagar; o repasse apenas reflete a situação.

### Reabrindo o mês

Para alterar um repasse fechado, clique em **Reabrir mês** (na tela de detalhes ou no menu de ações da listagem) e confirme. O repasse volta a rascunho e os valores são recalculados. A opção só aparece conforme as permissões do usuário.

## Exportando e compartilhando

Ao fechar o repasse, o sistema gera o extrato em PDF. Enquanto o extrato não estiver disponível, **Exportar PDF** fica desabilitado com o aviso **Extrato ainda não gerado**.

- **Exportar PDF** abre o extrato em uma nova aba
- **Compartilhar** oferece:
  - **Enviar por e-mail**: abre o programa de e-mail com o assunto "Repasse a condomínio" e o link do extrato no corpo
  - **Enviar por WhatsApp**: abre o WhatsApp com a mensagem e o link do extrato
  - **Copiar link direto**: copia o link do extrato

O link abre o extrato sem login. As observações internas ficam de fora.

## Evolução do repasse por ponto de venda

O gráfico **Evolução do repasse por ponto de venda** mostra, mês a mês, o total (cashback + energia) dos repasses já fechados, com uma linha por ponto de venda.

- O gráfico acompanha o filtro de **Condomínio** da tela
- No campo **Todos os pontos de venda**, escolha um ou mais pontos para comparar; sem seleção, mostra todos
- No seletor de ano, escolha o ano atual ou um dos dois anteriores
- Passe o mouse sobre o gráfico para ver o valor de cada ponto de venda no mês

O gráfico desenha até oito pontos de venda. Acima disso, exibe **Filtre por condomínio ou escolha até 8 pontos de venda para ver o gráfico.** Quando não há repasse fechado no ano, exibe **Nenhum mês fechado em** ano.

## Relação com o cadastro do condomínio

Os termos do repasse (cashback, energia, início da parceria e carência) e os dados de repasse (forma, dia do pagamento, conta bancária e chave PIX) vêm da aba **Acordo financeiro** do cadastro do condomínio. Ajustes feitos em **Termos deste repasse** valem apenas para o mês e não alteram o cadastro. Veja [Comunidade](../../cadastros/comunidade/).
