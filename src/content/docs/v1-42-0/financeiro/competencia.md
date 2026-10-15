---
title: Competencia
description: Como gerenciar periodos de competencia financeira no Despensinha ERP.
sidebar:
  order: 4
---

A **Visao de Competencia** organiza os lancamentos financeiros (contas a pagar e a receber) por periodo de competencia, permitindo uma analise financeira mais precisa independente da data de pagamento.

## Acessando a Visao de Competencia

Acesse **Financeiro -> Competencia** para visualizar os lancamentos organizados por periodo. A listagem exibe:

| Coluna | Descricao |
|--------|-----------|
| Documento | Numero do documento e condicao de pagamento |
| Situacao | Status do lancamento (Pago, Parcialmente Pago, Pendente, Cancelado) |
| Competencia | Mes/ano de competencia e data de emissao |
| Tipo | Despesa ou Receita |
| Descricao | Descricao do lancamento e categoria financeira |
| Cliente | Nome e CPF/CNPJ do cliente ou fornecedor |
| Valor | Valor total e detalhamento de parcelas |
| Origem | Origem do lancamento no sistema |
| Marcadores | Tags associadas ao lancamento |

## Status dos Lancamentos

| Status | Descricao |
|--------|-----------|
| Pago | Lancamento totalmente quitado |
| Parcialmente Pago | Lancamento com pagamento parcial |
| Pendente | Lancamento aguardando pagamento |
| Cancelado | Lancamento cancelado |

## Tipos de Lancamento

| Tipo | Descricao |
|------|-----------|
| Despesa | Conta a pagar -- saida financeira |
| Receita | Conta a receber -- entrada financeira |

## Criando Lancamentos

A partir da visao de competencia, e possivel criar novos lancamentos:

1. Clique no botao de adicionar
2. Escolha o tipo: **Nova Despesa** ou **Nova Receita**
3. O sistema redireciona para o formulario de **Contas a Pagar** ou **Contas a Receber**, conforme a escolha

## Acoes Disponiveis

Para cada lancamento na listagem:
- **Visualizar** -- acesse os detalhes completos do lancamento
- **Duplicar** -- crie uma copia do lancamento
- **Remover** -- exclua o lancamento

## Filtros e Navegacao

Use os filtros para buscar por cliente/fornecedor ou numero do documento. As abas de status permitem filtrar por situacao dos lancamentos.

O total de valores e exibido de forma consolidada na barra de navegacao.

A listagem pode ser exportada nos formatos **PDF** e **CSV**.

## Relacao com Contas a Pagar e Receber

A visao de competencia consolida os lancamentos de **Contas a Pagar** e **Contas a Receber** em uma unica tela, organizados pelo periodo de competencia. Alteracoes feitas em qualquer uma das telas sao refletidas na visao de competencia.
