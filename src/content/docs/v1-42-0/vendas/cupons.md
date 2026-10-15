---
title: Cupons
description: Criação e gestão de cupons de desconto no Despensinha ERP.
sidebar:
  order: 6
---

Os **Cupons** permitem aplicar descontos em pedidos de venda e no PDV, com controle de validade, valor mínimo e quantidade de usos.

## Como Criar um Cupom

1. Acesse **Vendas → Cupons**
2. Clique em **Novo Cupom**
3. Preencha os dados do cupom:
   - Código
   - Tipo de desconto: percentual ou valor fixo
   - Valor do desconto
   - Data de validade
   - Valor mínimo do pedido, se necessário
   - Limite de usos, se necessário
4. Salve o cadastro

## Aplicação

O cupom é informado no campo **Código do Cupom** na tela de pedido de venda. O sistema valida automaticamente as condições configuradas, como validade, valor mínimo e limite de usos.

## Campos do Cupom

| Campo | Descrição |
|---|---|
| Código | Identificação usada para aplicar o cupom |
| Tipo de desconto | Define se o desconto é percentual ou valor fixo |
| Valor do desconto | Valor aplicado ao pedido |
| Data de validade | Data limite para uso do cupom |
| Valor mínimo do pedido | Valor mínimo necessário para aceitar o cupom |
| Limite de usos | Quantidade máxima de aplicações permitidas |
| Limite por cliente | Quantidade máxima de usos por cliente |

## Tipo de desconto

O campo **Tipo de desconto** define como o valor é informado no cupom.

| Tipo | Descrição |
| --- | --- |
| Percentual | Aplica um desconto em porcentagem sobre o pedido |
| Fixo | Aplica um desconto em valor monetário |

## Valor do desconto

O campo **Valor do desconto** aceita sempre 2 casas decimais.

| Tipo | Formato |
| --- | --- |
| Percentual | Número com 2 casas decimais |
| Fixo | Valor em dinheiro com 2 casas decimais |

Exemplos:

- **10,00** para desconto fixo de R$ 10,00
- **15.50** para desconto de 15,50% quando o tipo é percentual

## Observações

- O cupom pode ser usado em pedidos de venda e no PDV.
- O sistema só aceita o cupom quando as condições cadastradas são atendidas.
- Cupons ativos aparecem na listagem com identificação de status.

Quando o produto ou item não possui código de barras informado, o sistema exibe o campo em branco nos detalhes e nas telas de seleção relacionadas.

## Ocorrências de Venda

As **Ocorrências de Venda** registram situações relacionadas ao atendimento comercial, com controle de status, resultado, observações, evidências, itens e comentários.

Você pode acessar em **Vendas → Ocorrência**.

## Como Criar uma Ocorrência

1. Acesse **Vendas → Ocorrência**
2. Clique em **Novo**
3. Informe os dados da ocorrência
4. Adicione, se necessário:
   - Itens relacionados
   - Evidências
   - Comentários
   - Observações
5. Salve

## Detalhes da Ocorrência

Na tela de detalhes, você visualiza e controla:

| Campo | Descrição |
|---|---|
| Código | Identificação da ocorrência |
| Cliente | Cliente relacionado |
| Ponto de venda | Ponto de venda relacionado |
| Status | Situação atual da ocorrência |
| Resultado | Resultado do atendimento |
| Observação | Texto livre com informações da ocorrência |
| Itens | Produtos ou itens vinculados |
| Evidências | Arquivos anexados |
| Comentários | Registro de acompanhamentos |

## Ações Disponíveis

### Status

O sistema permite alterar o status da ocorrência e informar um resultado e uma observação no momento da alteração.

### Itens

É possível incluir itens na ocorrência com informações de produto, descrição, quantidade e valores.

### Evidências

Você pode anexar arquivos como evidência da ocorrência. Cada evidência pode ter uma descrição.

| Campo | Descrição |
|---|---|
| Arquivo | Documento ou imagem anexada |
| Descrição | Texto opcional para identificar a evidência |

### Comentários

Comentários servem para registrar acompanhamentos e anotações sobre a ocorrência.

| Campo | Descrição |
|---|---|
| Conteúdo | Texto do comentário |

## Gerar Pedido de Venda a partir da Ocorrência

A ocorrência pode servir como base para um pedido de venda. Nesse caso, o pedido usa os dados da ocorrência, como cliente, ponto de venda, itens e observações.

O pedido gerado também mantém o vínculo com a ocorrência de origem.

## Impressão de Etiquetas no Planograma

Na tela de detalhes do planograma, a impressão de etiquetas usa um filtro por período e por categoria. O sistema valida os itens antes de gerar o PDF e mostra os registros com inconsistência de código de barras para revisão.

| Campo | Descrição |
|---|---|
| Situação | Filtro por situação do item |
| Categoria | Filtro por uma ou mais categorias |
| Quantidade de cópias | Número de etiquetas por item |
| Template | Modelo da etiqueta |

Se houver itens com código de barras inválido, o sistema permite revisar os dados antes da impressão.

### Opções de impressão

| Opção | Descrição |
|---|---|
| Todos os produtos | Imprime etiquetas de todos os produtos do planograma |
| Produtos com alterações recentes | Imprime etiquetas dos produtos conforme o período selecionado |

### Período

Quando a opção **Produtos com alterações recentes** é selecionada, o sistema exibe a escolha do período.

| Período | Descrição |
|---|---|
| 7 dias | Considera os produtos com alterações nos últimos 7 dias |
| 15 dias | Considera os produtos com alterações nos últimos 15 dias |
| 30 dias | Considera os produtos com alterações nos últimos 30 dias |
| 60 dias | Considera os produtos com alterações nos últimos 60 dias |

## Vendas

Na área de vendas, o sistema exibe informações em listas e consultas para facilitar a operação.

### Pedido de venda

Na lista de pedidos de venda, a coluna **Ponto de Venda** mostra o nome do ponto de venda vinculado ao pedido.

A lista de pedidos também permite filtrar por valor, por marcador e por situação de nota fiscal eletrônica esperada sem NFC-e autorizada.

### Nota fiscal de saída

Na lista de notas fiscais de saída, a coluna **Destinatário** mostra o nome do destinatário do documento.

### Ocorrências

Na lista de ocorrências, a coluna **Itens** mostra a quantidade de itens vinculados a cada ocorrência.

### Planograma

Na tela de detalhes do planograma, a lista de itens exibe a coluna de miniatura para identificação visual dos produtos.

## NFC-e

A emissão de NFC-e usa a empresa como emitente. Quando há mais de uma empresa disponível, o sistema exibe o campo de escolha do **Emitente** na tela de criação e de inutilização de numeração.

### Campos da NFC-e

| Campo | Descrição |
|---|---|
| Emitente | Empresa responsável pela nota |
| Série | Série da NFC-e da empresa selecionada |
| Número | Número da nota na série selecionada |
| Natureza de operação | Natureza padrão da empresa ou selecionada manualmente |
| Regime tributário | Código de regime tributário da empresa |
| Destinatário | Cliente ou consumidor da nota |
| Produtos | Itens da nota fiscal |
| Pagamentos | Parcelas e formas de pagamento |

### Regras de preenchimento

| Regra | Descrição |
|---|---|
| Emitente obrigatório | A nota só é salva com uma empresa selecionada |
| Série por empresa | A série padrão e o próximo número seguem a empresa escolhida |
| Natureza por empresa | A natureza padrão considera o regime tributário da empresa |
| Contas por empresa | As parcelas e contas financeiras seguem a empresa da nota |

### Inutilização de numeração

Na inutilização de numeração de NFC-e, o sistema exibe a empresa quando existem várias empresas ativas. Se houver apenas uma empresa, ela é usada como emitente da inutilização.

| Campo | Descrição |
|---|---|
| Empresa | Empresa responsável pela numeração a inutilizar |
| Série | Série da numeração |
| Número inicial | Primeiro número do intervalo |
| Número final | Último número do intervalo |
| Justificativa | Motivo da inutilização |

### Produtos da NFC-e

Na inclusão e edição de itens, o sistema usa a empresa, a natureza de operação, o regime tributário e o estado de destino para montar os dados fiscais do item.

### Formas de pagamento

| Campo | Descrição |
|---|---|
| Empresa | Empresa usada para buscar contas financeiras da nota |
| Data | Data de vencimento ou emissão usada no cálculo das parcelas |
| Condição de pagamento | Forma de parcelamento |
| Parcelas | Lista de títulos gerados |

## Nota fiscal de saída

A nota fiscal de saída também usa a empresa como emitente e busca os padrões de série e natureza de operação conforme a empresa selecionada.

### Campos da nota fiscal de saída

| Campo | Descrição |
|---|---|
| Emitente | Empresa responsável pela nota |
| Tipo de entrada/saída | Define se a operação é própria ou de terceiro |
| Série | Série da nota da empresa |
| Número | Número da nota na série selecionada |
| Natureza de operação | Natureza padrão da empresa |
| Regime tributário | Regime tributário usado na operação |
| Destinatário | Cliente ou parceiro de destino |
| Produtos | Itens da nota |
| Pagamentos | Títulos e parcelas |

### Regra de empresa

| Regra | Descrição |
|---|---|
| Emitente obrigatório | A nota exige uma empresa selecionada |
| Série da empresa | O próximo número considera a empresa e a série |
| Natureza da empresa | A natureza padrão segue a empresa da nota |
| Pagamentos da empresa | As parcelas usam as contas da empresa |

### Devolução de nota

Na devolução, o assistente mostra apenas quando a nota possui itens com saldo devolvível. Se todos os itens já tiverem sido devolvidos, o sistema exibe uma mensagem informando isso.

| Campo | Descrição |
|---|---|
| Item | Produto devolvido |
| Quantidade | Quantidade devolvida |
| Valor financeiro | Valor lançado na devolução |
| Conta financeira | Conta usada no lançamento |
| Empresa | Empresa da nota de origem |

## Pedido de venda

O pedido de venda exibe o status com rótulo próprio e, quando existe um motivo de não conclusão, o sistema mostra esse motivo abaixo da situação.

### Status do pedido

| Situação | Descrição |
|---|---|
| Em aberto | Pedido em edição ou aguardando confirmação |
| Aprovado | Pedido confirmado |
| Cancelado | Pedido cancelado sem motivo de não conclusão |
| Não concluída | Pedido cancelado com motivo de não conclusão |
| Faturado | Pedido já faturado |

### Filtros da lista

| Filtro | Descrição |
|---|---|
| Período | Filtra por data |
| Cliente | Filtra por cliente |
| Ponto de venda | Filtra por ponto de venda |
| Situação | Filtra por status do pedido |
| Origem | Filtra por origem do pedido |
| Produto | Filtra por item do pedido |
| Marcadores | Filtra por etiquetas do pedido |
| Valor | Filtra por faixa de valor |
| NFC-e | Mostra apenas pedidos esperados com NFC-e autorizada ou sem NFC-e autorizada |

### Operações do pedido

| Campo | Descrição |
|---|---|
| Imprimir | Gera impressão do pedido |
| Editar | Abre o pedido para edição |
| Remover | Exclui o pedido |
| Gerar nota de saída | Cria uma nota fiscal a partir do pedido |
| Lançar contas a receber | Gera os títulos financeiros |
| Lançar estoque | Gera o lançamento de estoque |

### Pagamentos do pedido

| Campo | Descrição |
|---|---|
| Empresa | Empresa usada para buscar contas financeiras |
| Data | Data usada para calcular vencimentos |
| Condição de pagamento | Regra de parcelamento |
| Parcelas | Lista de parcelas do pedido |

### Regras de empresa

| Regra | Descrição |
|---|---|
| Empresa do pedido | O pedido usa a empresa do ponto de venda |
| Contas por empresa | As parcelas usam contas da empresa do ponto de venda |
| Status exibido | Quando há motivo de não conclusão, o sistema mostra o motivo junto da situação |

## Planograma

O cadastro de itens do planograma usa um formulário em campos separados para facilitar o preenchimento.

### Campos do item do planograma

| Campo | Descrição |
|---|---|
| Produto | Produto associado ao item |
| Preço unitário | Preço de venda do item |
| Quantidade desejada | Quantidade alvo para o item |
| Mínimo crítico | Quantidade mínima para alerta |
| Múltiplo de abastecimento | Número usado na sugestão de reposição |

### Regras de preenchimento

| Regra | Descrição |
|---|---|
| Produto obrigatório | O item precisa ter um produto |
| Preço obrigatório | O preço é obrigatório |
| Quantidade desejada obrigatória | Define a meta do item |
| Mínimo crítico obrigatório | Define o ponto de alerta |
| Múltiplo opcional | Quando informado, deve ser maior que zero e não pode ser maior que a quantidade desejada |

### Múltiplo de abastecimento

Quando o campo **Múltiplo de abastecimento** é preenchido, a picklist trabalha com múltiplos inteiros desse valor.

| Campo | Descrição |
|---|---|
| Múltiplo | Valor inteiro usado na reposição |
| Sugestão | Reposição respeita o múltiplo informado |

## Estoque de devolução

Na devolução de itens de nota, o sistema mostra apenas os itens com saldo devolvível e permite selecionar a conta financeira da empresa da nota.

| Campo | Descrição |
|---|---|
| Conta financeira | Conta usada no lançamento da devolução |
| Empresa | Empresa da nota de origem |
| Produto | Item devolvido |
| Quantidade | Quantidade devolvida |
| Valor | Valor lançado na devolução |

## Situação dos documentos

Os status e badges de documentos fiscais e pedidos seguem a situação do documento e mostram a descrição recebida do sistema.

| Documento | Campo | Descrição |
|---|---|---|
| NFC-e | Situação | Mostra o status fiscal do documento |
| Nota de saída | Situação | Mostra o status fiscal do documento |
| Pedido de venda | Situação | Mostra o status do pedido |
| Pedido de venda | Motivo | Quando houver motivo de não conclusão, ele aparece junto da situação |