---
title: Estoque
description: Controle de saldo e movimentações de estoque no Despensinha ERP.
sidebar:
  order: 5
---

O módulo de **Estoque** exibe o saldo atual de produtos por armazém e registra as movimentações de entrada e saída.

## Consulta de Saldo

Acesse **Suprimentos → Estoque** para visualizar o saldo de cada produto por armazém. Use os filtros para buscar por produto, categoria ou armazém.

## Movimentações

Cada operação que afeta o estoque gera uma movimentação registrada.

| Tipo | Origem | Permissão |
|------|--------|------------|
| Entrada | NF-e de Entrada, ajuste manual | Suprimentos → Estoque |
| Saída | NFC-e, NF-e de Saída, ajuste manual | Suprimentos → Estoque |
| Transferência | Movimentação entre armazéns | Suprimentos → Estoque |
| Inventário | Conferência de estoque | Suprimentos → Inventário |

## Armazéns

O sistema suporta múltiplos armazéns. Cada PDV é vinculado a um armazém específico de onde o estoque é baixado nas vendas.

## Lançamentos de Estoque

Na área de movimentações, o sistema separa os lançamentos por tipo:

| Tipo | Descrição |
|------|-----------|
| Entrada | Registra a entrada de produtos no estoque |
| Saída | Registra a saída de produtos do estoque |
| Saldo | Ajusta a quantidade em estoque |

Os botões de ajuste e transferência aparecem conforme a permissão do usuário.

## Lotes e Validades

Os produtos com controle de lote exibem informações de lote e validade.

| Ação | Permissão |
|------|------------|
| Adicionar lote | Suprimentos → Lotes |
| Editar lote | Suprimentos → Lotes |
| Remover lote | Suprimentos → Lotes |

## Alertas de Estoque Mínimo

Produtos com estoque abaixo do mínimo configurado são exibidos no dashboard e na listagem do estoque com alerta visual.

## Detalhes do Produto

Na tela de detalhes do produto, o sistema exibe abas conforme a permissão do usuário:

| Aba | Exibição |
|-----|----------|
| Lançamentos | Movimentações do produto |
| Reservas | Reservas do produto |
| Lotes e Validades | Lotes vinculados ao produto |
| Configurações | Regras de controle do produto |

As ações de transferência, ajuste, exportação e manutenção de lotes ficam disponíveis de acordo com a permissão do usuário.

## Operações de Inventário

A tela **Operações de Inventário** lista tarefas de separação, abastecimento, abastecimento combinado e inventário.

| Tipo | Uso |
|------|-----|
| Separação | Separar produtos para uma picklist |
| Abastecimento | Abastecer produtos no ponto de venda |
| Abastecimento combinado | Abastecer e conferir a quantidade no ponto de venda |
| Inventário | Conferência de estoque por operação |

Ao abrir uma operação pelo link da notificação, o sistema leva direto para os detalhes da tarefa.

## Permissões no Estoque

Algumas ações e abas ficam visíveis conforme a permissão do usuário.

| Permissão | Uso |
|-----------|-----|
| Suprimentos → Estoque | Consulta de saldo, lançamentos, transferências e exportações |
| Suprimentos → Ajustes de Estoque | Ajustes, edição de configurações, ações de inventário |
| Suprimentos → Lotes | Gestão de lotes e validade |
| Suprimentos → Inventário | Conferência de estoque |
| Suprimentos → Separação | Separação de picklists |
| Suprimentos → Abastecimento | Execução de abastecimento |
| Suprimentos → Abastecimento combinado | Execução de abastecimento com conferência |