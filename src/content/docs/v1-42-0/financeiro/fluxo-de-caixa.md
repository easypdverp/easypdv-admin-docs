---
title: Fluxo de Caixa
description: Visualização do fluxo de caixa no Despensinha ERP.
sidebar:
  order: 5
---

A tela **Caixas e Bancos** apresenta as entradas, saídas e lançamentos de saldo das contas financeiras do estabelecimento (caixas físicos e contas bancárias).

## Acesso

Acesse **Finanças → Caixas e bancos**.

## Informações Exibidas

Acima da listagem ficam os totais do que está filtrado:

- **Saldo inicial** -- saldo da conta no início do período
- **Entradas** -- soma das entradas
- **Saídas** -- soma das saídas
- **Saldo final** -- saldo da conta no fim do período

O **Saldo inicial** e o **Saldo final** só aparecem quando há uma **Conta** escolhida no filtro. Sem conta filtrada, a tela mostra apenas **Entradas** e **Saídas**.

A listagem traz as colunas **DATA**, **TIPO** (**Entrada**, **Saída** ou **Saldo**), **CLIENTE**, **VALOR** (com a conta financeira do lançamento logo abaixo), **CATEGORIA**, **MARCADORES** e **OBS**.

## Filtros

Em **Filtrar**, é possível filtrar por:

| Campo | Descrição |
|-------|-----------|
| **Período** | Intervalo de datas |
| **Mês** | Mês dos lançamentos |
| **Tipo** | Entrada, Saída ou Saldo |
| **Empresa** | Uma ou mais empresas; aparece só quando há mais de uma empresa ativa |
| **Conta** | Conta financeira (caixa ou conta bancária) |
| **Categoria financeira** | Categoria dos lançamentos |
| **Valor** | Valor do lançamento |
| **Marcadores** | Etiquetas dos lançamentos |

Os filtros aplicados também vão para a exportação.

## Lançamentos Manuais

Clique em **Adicionar lançamento** para registrar uma movimentação diretamente no caixa, informando **Valor**, **Categoria**, **Portador** (a conta financeira), **Tipo**, **Data**, **Competência**, **Cliente**, **Marcadores** e **Observações**. Pelo menu de ações de cada linha é possível **Editar** ou **Remover** o lançamento.

## Contas Financeiras

As contas financeiras (caixa físico, conta bancária) são cadastradas em **Preferências → Finanças → Contas financeiras**.

| Campo | Descrição |
|-------|-----------|
| **Empresa** | Empresa dona da conta. Obrigatório; aparece só quando há mais de uma empresa ativa. Não pode ser alterada depois do cadastro |
| **Descrição da conta** | Nome da conta |
| **Número** | Número da conta, só dígitos |

Cada empresa tem a sua conta principal. Para trocá-la, abra o menu de ações da conta e escolha **Tornar preferencial**; ela passa a ser a principal da empresa dela, e a principal das outras empresas continua a mesma. Na listagem, a conta principal leva a etiqueta **Preferêncial**, e a coluna **EMPRESA** e o filtro **Empresa** aparecem quando há mais de uma empresa ativa.

Nas contas a pagar e a receber, nos pagamentos e nas contas bancárias, só aparecem para escolha as contas financeiras da empresa do documento.
