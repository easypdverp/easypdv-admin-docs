---
title: Contas a Pagar
description: Gestão de contas a pagar no Despensinha ERP.
sidebar:
  order: 2
---

O módulo de **Contas a Pagar** registra e controla todas as despesas e obrigações financeiras do estabelecimento.

## Como Registrar uma Conta a Pagar

1. Acesse **Finanças → Contas a pagar**
2. Clique em **Adicionar**
3. Em **Informações da Conta**, preencha:

| Campo | Descrição |
|-------|-----------|
| **Empresa** | Empresa dona da conta. Obrigatório; aparece só quando há mais de uma empresa ativa (com uma só, a conta fica nela) |
| **Fornecedor / Condomínio** | Quem recebe o pagamento |
| **Valor** | Valor total da conta |
| **Emissão** | Data de emissão do documento |
| **Competência** | Data de competência da despesa |
| **Descrição** | Texto que identifica a conta |
| **Ponto de Venda** | Ponto de venda ao qual a despesa se refere. A busca mostra só os pontos da empresa escolhida e, quando o fornecedor é um condomínio, só os pontos desse condomínio |
| **Código do documento** | Código do documento de origem (boleto, nota, pedido) |
| **Marcadores** | Etiquetas para organizar a conta |
| **Observações** | Anotações livres |

4. Em **Pagamentos**, informe a **Condição de pagamento**, a **Forma de pagamento**, a **Categoria financeira**, a **Conta de destino**, o **Método de pagamento** e o **Gateway** para gerar as parcelas
5. Salve

A **Conta de destino** e a **Conta financeira** de cada parcela listam só as contas financeiras da empresa da conta. Ao trocar a **Empresa**, as parcelas perdem a conta financeira que for de outra empresa e o **Ponto de Venda** é limpo se não pertencer à nova empresa.

## Contas Geradas a Partir de Outros Documentos

Uma conta a pagar pode ser criada a partir de uma ordem de compra ou de uma nota fiscal de entrada. Nesse caso, o formulário já vem preenchido com a **Empresa** do documento e com o **Código do documento** formado pelo prefixo da origem e o número do documento:

| Origem | Código do documento |
|--------|---------------------|
| Ordem de compra | `PC-` seguido do número da ordem (ex.: `PC-123`) |
| Nota fiscal de entrada | `NFE-` seguido do número da nota (ex.: `NFE-4567`) |

Ao duplicar uma conta, a **Empresa** e o **Ponto de Venda** são copiados e o **Código do documento** fica em branco.

## Listagem

A listagem de **Contas a pagar** mostra uma linha por parcela, com as colunas **VENCIMENTO**, **DESCRIÇÃO**, **PARCELA**, **FORNECEDOR / CONDOMÍNIO**, **PONTO DE VENDA**, **CÓDIGO DO DOCUMENTO**, **SITUAÇÃO**, **VALOR**, **MARCADORES** e **ORIGEM**.

As abas no topo separam as parcelas por situação: **todas**, **em aberto**, **emitidas**, **vencendo hoje**, **pagas**, **atrasadas** e **canceladas**.

Em **Filtrar**, é possível filtrar por **Período**, **Mês**, **Situação**, **Categoria financeira**, **Forma de pagamento**, **Empresa** (quando há mais de uma empresa ativa), **Ponto de venda**, **Valor** e **Marcadores**. Os filtros aplicados também vão para a exportação.

## Baixa de Pagamento

1. Na listagem, abra o menu de ações da parcela
2. Clique em **Informar pagamento**
3. Em **Adicionar pagamento**, informe a **Data**, o **Valor pago** e, se for o caso, a **Conta Financeira** (só aparecem as contas da empresa da conta), **Juros**, **Multa** e **Desconto**
4. Confirme — o lançamento é registrado no caixa

## Parcelas

Contas a pagar podem ser parceladas. Cada parcela aparece individualmente na listagem com sua data de vencimento.

Em **Editar parcela**, o campo **Conta Financeira** lista só as contas financeiras da empresa da conta. Em **Ver detalhes da parcela**, aparecem o **Código do documento** e, quando há mais de uma empresa ativa, a **Empresa** da conta.
