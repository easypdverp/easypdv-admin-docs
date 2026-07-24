---
title: Estoque
description: Controle de saldo e movimentações de estoque no Despensinha ERP.
sidebar:
  order: 5
---

O módulo de **Estoque** exibe o saldo atual de produtos por armazém e registra todas as movimentações de entrada e saída.

## Consulta de Saldo

Acesse **Suprimentos → Estoque** para visualizar o saldo de cada produto por armazém. Use os filtros para buscar por produto, categoria ou armazém.

## Movimentações

Cada operação que afeta o estoque gera uma movimentação registrada:

| Tipo | Origem |
|------|--------|
| Entrada | NF-e de Entrada, ajuste manual |
| Saída | NFC-e, NF-e de Saída, ajuste manual |
| Transferência | Movimentação entre armazéns |

## Armazéns

O sistema suporta múltiplos armazéns. Cada PDV é vinculado a um armazém específico de onde o estoque é baixado nas vendas.

## Abastecimento de Picklist

No fluxo de picklist, o sistema permite iniciar o abastecimento em dois formatos:

| Tipo | Descrição |
|------|-----------|
| Abastecer | Realiza apenas o abastecimento dos produtos. |
| Abastecer + Conferência | Realiza o abastecimento e também informa quantas unidades de cada produto existem no ponto de venda. |

Ao iniciar o abastecimento, escolha o tipo desejado na janela de confirmação. Durante o processo, a tela fica bloqueada até a conclusão da operação.

## Alertas de Estoque Mínimo

Produtos com estoque abaixo do mínimo configurado são exibidos no dashboard e na listagem do estoque com alerta visual.