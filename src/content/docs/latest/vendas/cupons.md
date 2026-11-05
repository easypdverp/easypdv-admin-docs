---
title: Cupons
description: Criação e gestão de cupons de desconto no Despensinha ERP.
sidebar:
  order: 6
---

Os **Cupons** permitem aplicar descontos em pedidos de venda e no PDV, com controle de validade, valor mínimo, quantidade de usos, limite por cliente, categorias, pontos de venda, produtos e marcas vinculados.

## Como Criar um Cupom

1. Acesse **Vendas → Cupons**
2. Clique em **Novo Cupom**
3. Preencha os dados do cupom:
   - Código
   - Nome
   - Tipo de desconto: porcentagem ou valor fixo
   - Valor do desconto
   - Valor máximo de desconto, quando aplicável
   - Valor mínimo de compra, se necessário
   - Data de validade
   - Limite de usos, se necessário
   - Limite por cliente, se necessário
   - Quantidade mínima e máxima de itens, se necessário
   - Categorias, pontos de venda, produtos e marcas associados
4. Salve o cadastro

## Aplicação

O cupom é informado no campo **Código do Cupom** na tela de pedido de venda. O sistema valida automaticamente as condições configuradas, como validade, valor mínimo, limites de uso e associações cadastradas.

## Campos do Cupom

| Campo | Descrição |
|---|---|
| Nome | Nome de identificação do cupom |
| Código | Identificação usada para aplicar o cupom |
| Situação | Define se o cupom está ativo ou inativo |
| Tipo de desconto | Define se o desconto é porcentagem ou valor fixo |
| Valor do desconto | Valor aplicado ao pedido |
| Valor máximo de desconto | Limite máximo de desconto, quando o tipo for porcentagem |
| Valor mínimo de compra | Valor mínimo necessário para aceitar o cupom |
| Limite por usuário | Quantidade máxima de usos por usuário |
| Limite total de usos | Quantidade máxima de aplicações permitidas |
| QTD. mínima de itens | Quantidade mínima de itens exigida para uso |
| QTD. máxima de itens | Quantidade máxima de itens permitida para uso |
| Categorias | Categorias vinculadas ao cupom |
| Pontos de venda | Pontos de venda vinculados ao cupom |
| Produtos | Produtos vinculados ao cupom |
| Marcas | Marcas vinculadas ao cupom |
| Data da criação | Data em que o cupom foi cadastrado |
| Última modificação | Data da última atualização do cupom |
| ID do cupom | Identificador interno do registro |

## Tipo de desconto

O campo **Tipo de desconto** define como o valor é informado no cupom.

| Tipo | Descrição |
| --- | --- |
| Porcentagem | Aplica um desconto em porcentagem sobre o pedido |
| Valor fixo | Aplica um desconto em valor monetário |

## Valor do desconto

O campo **Valor do desconto** aceita sempre 2 casas decimais.

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

Quando o produto ou item não possui código de barras informado, o sistema exibe o campo em branco nos detalhes e nas telas de seleção relacionadas.