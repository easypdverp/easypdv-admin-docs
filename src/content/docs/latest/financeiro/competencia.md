---
title: Competencia
description: Como gerenciar periodos de competencia financeira no Despensinha ERP.
sidebar:
  order: 4
---

A **Visão de Competência** organiza os lançamentos financeiros (contas a pagar e a receber) por período de competência, permitindo uma análise financeira mais precisa independente da data de pagamento.

## Acessando a Visão de Competência

Acesse **Finanças → Competências** para visualizar os lançamentos organizados por período. A listagem exibe:

| Coluna | Descrição |
|--------|-----------|
| Competência | Mês/ano de competência e data de emissão |
| Situação | Status do lançamento (Pago, Parcialmente Pago, Pendente, Cancelado) |
| Criação | Data e hora em que o lançamento foi cadastrado |
| Descrição | Descrição do lançamento e categoria financeira |
| Cliente | Nome e CPF/CNPJ do cliente ou fornecedor |
| Valor | Valor total e detalhamento de parcelas; em vermelho para despesa e em verde para receita |
| Origem | Origem do lançamento no sistema |
| Marcadores | Tags associadas ao lançamento |

## Status dos Lançamentos

| Status | Descrição |
|--------|-----------|
| Pago | Lançamento totalmente quitado |
| Parcialmente Pago | Lançamento com pagamento parcial |
| Pendente | Lançamento aguardando pagamento |
| Cancelado | Lançamento cancelado |

## Tipos de Lançamento

| Tipo | Descrição |
|------|-----------|
| Despesa | Conta a pagar -- saída financeira |
| Receita | Conta a receber -- entrada financeira |

## Criando Lançamentos

A partir da visão de competência, é possível criar novos lançamentos:

1. Clique em **Adicionar**
2. Escolha **Adicionar despesa** ou **Adicionar receita**
3. O sistema redireciona para o formulário de **Contas a Pagar** ou **Contas a Receber**, conforme a escolha

## Ações Disponíveis

Para cada lançamento na listagem:
- **Visualizar** -- acesse os detalhes completos do lançamento
- **Duplicar** -- crie uma cópia do lançamento
- **Remover** -- exclua o lançamento

## Detalhes do Lançamento

Em **Visualizar**, a tela de detalhes mostra os blocos **Geral** (competência, descrição, cliente/fornecedor, categoria, código do documento e origem), **Financeiro** (progresso do pagamento, valor total, parcelas, valor pago, em aberto, condição, marcadores e observações), **Parcelas**, **Pagamentos** e **Anexos**.

O bloco **Anexos** reúne os arquivos anexados à conta e às suas parcelas, com **NOME**, **TAMANHO**, **TIPO** e **ÚLTIMA MODIFICAÇÃO** de cada arquivo, e o botão **Baixar** para abri-lo.

## Filtros e Navegação

Use a busca para localizar por cliente/fornecedor ou código do documento. Em **Filtrar**, é possível filtrar por **Período**, **Mês**, **Tipo**, **Empresa** (quando há mais de uma empresa ativa), **Situação**, **Categoria financeira**, **Origem**, **Valor** e **Marcadores**.

As abas **todas**, **receitas** e **despesas** separam os lançamentos por tipo e mostram a quantidade e os totais de cada grupo. Ao lado das abas fica o **Balanço** dos lançamentos filtrados.

A listagem pode ser exportada nos formatos **PDF** e **CSV**.

## Relação com Contas a Pagar e Receber

A visão de competência consolida os lançamentos de **Contas a Pagar** e **Contas a Receber** em uma única tela, organizados pelo período de competência. Alterações feitas em qualquer uma das telas são refletidas na visão de competência.
