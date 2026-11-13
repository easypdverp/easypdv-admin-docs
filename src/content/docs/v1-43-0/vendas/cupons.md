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

## Filtros da listagem

Na listagem de cupons, o filtro de período usa a data inicial no começo do dia e a data final no fim do dia. Isso permite pesquisar cupons por intervalo de datas com precisão.

| Campo | Descrição |
|---|---|
| Data inicial | Data de início do período de busca |
| Data final | Data de fim do período de busca |
| Situação | Filtra cupons ativos ou inativos |
| Código | Pesquisa pelo código do cupom |

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

### Nota fiscal de saída

Na lista de notas fiscais de saída, a coluna **Destinatário** mostra o nome do destinatário do documento.

### NFC-e

Na tela de detalhes da NFC-e, o sistema organiza as informações em abas de **Produtos e pagamento** e **Detalhes**.

Na aba **Produtos e pagamento**, você visualiza:

- Lista de produtos
- Totais da nota
- Pagamentos e parcelas

A seção **Totais da nota** mostra o valor total em destaque e pode exibir também o total resumido no cabeçalho.

À direita da tela, o sistema exibe uma prévia do cupom fiscal com:

| Campo | Descrição |
|---|---|
| Situação | Status da NFC-e |
| Emitente | Nome do emitente |
| Número | Número do documento |
| Série | Série da NFC-e |
| Data | Data de emissão ou vencimento exibida na prévia |
| Itens | Produtos listados com quantidade, unidade e valor |
| Produtos | Total dos produtos |
| Desconto | Valor do desconto |
| Frete | Valor do frete, quando informado |
| Seguro | Valor do seguro, quando informado |
| Outras despesas | Valores adicionais, quando informados |
| Total | Valor total da NFC-e |
| Forma de pagamento | Meios de pagamento e valores correspondentes |

A prévia é apenas uma consulta e não substitui o DANFE.

### Ocorrências

Na lista de ocorrências, a coluna **Itens** mostra a quantidade de itens vinculados a cada ocorrência.

### Planograma

Na tela de detalhes do planograma, a lista de itens pode exibir seleção por linha e ações em lote. O sistema permite:

- Selecionar produtos da página
- Definir quantidades em lote
- Ativar ou inativar itens
- Remover itens, quando o planograma está em rascunho

Na lista de itens do planograma, a coluna de descrição usa um texto mais curto para facilitar a visualização, e algumas colunas ficam ocultas em telas menores.

Também é possível editar as quantidades de um item diretamente na linha, por meio de um modal específico para quantidade desejada e mínimo crítico.

### NFC-e e emissão fiscal

Na edição de itens de nota fiscal, a seleção de produto preenche os dados principais do item, como descrição, código, unidade de medida, código de barras e preço unitário. O sistema mantém a consistência dos dados do item conforme o produto escolhido.