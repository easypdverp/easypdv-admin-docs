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

## Observações

- O cupom pode ser usado em pedidos de venda e no PDV.
- O sistema só aceita o cupom quando as condições cadastradas são atendidas.
- Cupons ativos aparecem na listagem com identificação de status.