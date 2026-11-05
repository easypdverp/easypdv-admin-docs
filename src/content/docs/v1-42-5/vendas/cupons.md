---
title: Cupons
description: Criação e gestão de cupons de desconto no Despensinha ERP.
sidebar:
  order: 6
---

Os **Cupons** permitem aplicar descontos em pedidos de venda e no PDV, com controle de validade, valor mínimo, quantidade de usos, limite por cliente e associações com categorias, pontos de venda, produtos e marcas.

## Como Criar um Cupom

1. Acesse **Vendas → Cupons**
2. Clique em **Novo Cupom**
3. Preencha os dados do cupom:
   - Nome
   - Código
   - Tipo de desconto: porcentagem ou valor fixo
   - Valor do desconto
   - Valor máximo de desconto, quando o tipo for porcentagem
   - Data de validade
   - Valor mínimo da compra, se necessário
   - Limite total de usos, se necessário
   - Limite por usuário, se necessário
   - Quantidade mínima de itens, se necessário
   - Quantidade máxima de itens, se necessário
   - Categorias, pontos de venda, produtos e marcas associados, quando aplicável
4. Salve o cadastro

## Aplicação

O cupom é informado no campo **Código do Cupom** na tela de pedido de venda. O sistema valida automaticamente as condições configuradas, como validade, valor mínimo, limites de uso, quantidade de itens e associações permitidas.

## Campos do Cupom

| Campo | Descrição |
|---|---|
| Nome | Nome de identificação do cupom |
| Código | Identificação usada para aplicar o cupom |
| Situação | Define se o cupom está ativo ou inativo |
| Tipo de desconto | Define se o desconto é porcentagem ou valor fixo |
| Valor do desconto | Valor aplicado ao pedido |
| Valor máximo de desconto | Limite máximo do desconto, usado no tipo porcentagem |
| Valor mínimo da compra | Valor mínimo necessário para aceitar o cupom |
| Limite por usuário | Quantidade máxima de usos por cliente |
| Limite total de usos | Quantidade máxima de aplicações permitidas |
| Quantidade mínima de itens | Quantidade mínima de itens exigida para uso |
| Quantidade máxima de itens | Quantidade máxima de itens permitida para uso |
| Categorias | Categorias vinculadas ao cupom |
| Pontos de venda | Pontos de venda vinculados ao cupom |
| Produtos | Produtos vinculados ao cupom |
| Marcas | Marcas vinculadas ao cupom |
| Data da criação | Data em que o cupom foi cadastrado |
| Última modificação | Data da última atualização |
| ID do cupom | Identificador interno do registro |

## Tipo de desconto

O campo **Tipo de desconto** define como o valor é informado no cupom.

| Tipo | Descrição |
| --- | --- |
| Porcentagem | Aplica um desconto em porcentagem sobre o pedido |
| Valor fixo | Aplica um desconto em valor monetário |

## Valor do desconto

O campo **Valor do desconto** usa 2 casas decimais.

| Tipo | Formato |
| --- | --- |
| Porcentagem | Número com 2 casas decimais |
| Valor fixo | Valor em dinheiro com 2 casas decimais |

Exemplos:

- **10,00** para desconto fixo de R$ 10,00
- **15,50** para desconto de 15,50% quando o tipo é porcentagem

## Observações

- O cupom pode ser usado em pedidos de venda e no PDV.
- O sistema só aceita o cupom quando as condições cadastradas são atendidas.
- Cupons ativos aparecem na listagem com identificação de status.
- A tela de detalhes mostra as regras do cupom, os vínculos cadastrados e o uso acumulado.

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

### Ocorrências

Na lista de ocorrências, a coluna **Itens** mostra a quantidade de itens vinculados a cada ocorrência.

### Planograma

Na tela de detalhes do planograma, a lista de itens exibe a coluna de miniatura para identificação visual dos produtos.