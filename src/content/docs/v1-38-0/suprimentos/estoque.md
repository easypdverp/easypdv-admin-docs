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
| Entrada | NF-e de Entrada, ajuste manual, conferência de recebimento |
| Saída | NFC-e, NF-e de Saída, ajuste manual |
| Transferência | Movimentação entre armazéns |

## Armazéns

O sistema suporta múltiplos armazéns. Cada PDV é vinculado a um armazém específico de onde o estoque é baixado nas vendas.

## Alertas de Estoque Mínimo

Produtos com estoque abaixo do mínimo configurado são exibidos no dashboard e na listagem do estoque com alerta visual.

## Conferência de Recebimento

Notas de entrada podem passar por uma conferência de recebimento antes de entrarem no estoque. Nessa etapa, o sistema permite:

- conferir cada item da nota;
- informar quantidades recebidas;
- registrar motivo quando houver divergência;
- marcar todos os itens como conferidos;
- concluir a conferência quando todos os itens estiverem validados.

A conferência fica vinculada à nota fiscal e pode ser consultada depois.

## Abastecimento de Picklist

As operações de abastecimento de picklist podem funcionar com conferência junto. Nessa rotina, o sistema permite:

- abastecer itens da picklist;
- informar a quantidade no PDV;
- acompanhar itens por lote;
- cancelar o abastecimento em andamento;
- concluir a operação quando os itens estiverem atendidos.

Quando a picklist está em etapa de abastecimento com conferência, a operação fica disponível para continuidade pela mesma tela.