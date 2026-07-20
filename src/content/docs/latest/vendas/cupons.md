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
3. Defina:
   - Código do cupom
   - Tipo de desconto
   - Valor do desconto
   - Data de validade
   - Valor mínimo do pedido (opcional)
   - Limite de usos (opcional)
4. Salve

## Aplicação

Cupons são aplicados nos pedidos de venda pelo campo **Código do Cupom** na tela de pedido. O sistema valida automaticamente as condições do cupom, como validade, valor mínimo e limite de usos.

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

## Regras de uso

| Campo | Descrição |
| --- | --- |
| Código do cupom | Identifica o cupom usado no pedido |
| Data de validade | Define até quando o cupom pode ser usado |
| Valor mínimo do pedido | Exige um valor mínimo para permitir o desconto |
| Limite de usos | Limita a quantidade total de utilizações |
| Limite por cliente | Limita a quantidade de usos por cliente |

## Aplicação no pedido

Ao informar o cupom no pedido, o sistema confere as regras cadastradas e aplica o desconto quando o cupom está válido para aquela venda.