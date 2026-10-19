---
title: Tarefas de Estoque
description: Como gerenciar tarefas e conferencias de estoque no Despensinha ERP.
sidebar:
  order: 7
---

As **Tarefas de Estoque** (Operacoes de Inventario) registram todas as operacoes realizadas sobre o estoque, como separacoes, abastecimentos e inventarios. Cada tarefa rastreia o tipo de operacao, os estoques envolvidos, o status e a duracao.

## Acessando as Tarefas de Estoque

Acesse **Suprimentos -> Tarefas de Estoque** para visualizar todas as operacoes registradas. A listagem exibe:

| Coluna | Descricao |
|--------|-----------|
| Tipo | Tipo da operacao (Abastecimento, Inventario, Separacao) |
| Operacao | Picklist ou operacao associada e ponto de venda |
| Estoques | Estoques de origem e destino envolvidos |
| Situacao | Status da tarefa (Em Andamento, Concluido, Cancelado) |
| Periodo | Datas de inicio e fim com duracao total |

## Tipos de Tarefa

| Tipo | Descricao |
|------|-----------|
| Abastecimento | Entrega de produtos do estoque para o ponto de venda, vinculada a uma picklist |
| Separacao | Coleta de produtos no estoque de origem conforme uma picklist |
| Inventario | Contagem e conferencia fisica do estoque |

## Status das Tarefas

| Status | Descricao |
|--------|-----------|
| Em Andamento | Tarefa em execucao |
| Concluido | Tarefa finalizada com sucesso |
| Cancelado | Tarefa cancelada antes da conclusao |

## Visualizando Detalhes

1. Na listagem, clique em **Detalhes** na tarefa desejada
2. Um modal exibe as informacoes completas da tarefa, incluindo:
   - Produtos movimentados e quantidades
   - Estoques de origem e destino
   - Duracao da operacao

## Conferencias de Estoque

As conferencias de estoque permitem realizar a verificacao fisica dos produtos:

1. Acesse a funcionalidade de conferencia de estoque
2. Inicie uma nova conferencia selecionando o estoque
3. Registre as quantidades contadas para cada produto
4. Ao finalizar, o sistema calcula as divergencias e pode gerar ajustes

### Status da Conferencia

| Status | Descricao |
|--------|-----------|
| Em Andamento | Conferencia em execucao |
| Concluida | Conferencia finalizada |
| Cancelada | Conferencia cancelada |

### Acoes na Conferencia

- **Adicionar itens**: inclua produtos manualmente na conferencia
- **Editar quantidades**: ajuste as quantidades contadas
- **Finalizar**: conclua a conferencia e gere os ajustes
- **Cancelar**: cancele a conferencia sem gerar ajustes

## Filtros e Navegacao

Use os filtros para buscar tarefas por tipo, status ou periodo. As abas de tipo permitem alternar entre Abastecimento, Inventario e Separacao.

A listagem pode ser exportada nos formatos **PDF** e **CSV**.

## Relacao com Picklists

As tarefas de separacao e abastecimento sao criadas automaticamente ao iniciar essas operacoes a partir de uma picklist. Cada picklist pode ter uma tarefa de separacao e uma de abastecimento vinculadas.
