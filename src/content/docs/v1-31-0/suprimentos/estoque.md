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

## Alertas de Estoque Mínimo

Produtos com estoque abaixo do mínimo configurado são exibidos no dashboard e na listagem do estoque com alerta visual.

## Suprimentos

Na área de **Suprimentos**, os cadastros e operações exibem o código de barras do produto quando ele está disponível. Quando o produto não possui código informado, o campo fica em branco.

### Código de barras em compras, NF-e, conferência e separação

O código de barras aparece em telas de compra, entrada de NF-e, conferência de estoque, separação de pedidos e listas de produtos do estoque.

| Tela | Exibição do código |
|------|--------------------|
| Compra | No item do produto e na busca para lançamento de lotes |
| NF-e de Entrada | No produto selecionado e no item da nota |
| Conferência de estoque | Na lista de itens, detalhes e edição do item |
| Separação de pedidos | Na lista de itens e no detalhe do produto |
| Estoque | Na seleção e na exibição de produtos com lote |
| Pedido de compra | No produto vinculado ao item e no lançamento de lotes |

### Campos de produto nas telas de suprimentos

| Campo | Exibição |
|------|----------|
| Descrição | Nome do produto |
| Código de barras | GTIN/EAN quando informado |
| SKU | Código interno ou do fornecedor, conforme a tela |
| Preço | Valor do item quando aplicável |
| Quantidade | Quantidade sugerida ou informada |

### Relação entre produto e código de barras

| Situação | Exibição |
|----------|----------|
| Produto com GTIN/EAN | Código aparece na tela |
| Produto sem GTIN/EAN | Campo fica em branco |
| Busca por item do pedido | O sistema relaciona pelo GTIN/EAN ou pelo SKU do fornecedor |

### Lançamento de lotes

Ao lançar lotes a partir de pedidos de compra ou notas de entrada, o sistema usa o código de barras e o SKU do fornecedor para localizar o produto correspondente. Isso ajuda a preencher o item certo antes da confirmação do lançamento.