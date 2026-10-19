---
title: Contas a Receber
description: Gestão de contas a receber no Despensinha ERP.
sidebar:
  order: 3
---

O módulo de **Contas a Receber** controla as receitas esperadas e os recebimentos realizados.

## Como Registrar uma Conta a Receber

1. Acesse **Finanças → Contas a receber**
2. Clique em **Adicionar**
3. Em **Informações da Conta**, preencha:

| Campo | Descrição |
|-------|-----------|
| **Empresa** | Empresa dona da conta. Obrigatório; aparece só quando há mais de uma empresa ativa (com uma só, a conta fica nela) |
| **Fornecedor** | Cliente, fornecedor ou condomínio que paga a conta |
| **Valor** | Valor total da conta |
| **Emissão** | Data de emissão do documento |
| **Competência** | Data de competência da receita |
| **Descrição** | Texto que identifica a conta |
| **Ponto de Venda** | Ponto de venda ao qual a receita se refere. O campo fica sempre disponível; a busca mostra só os pontos da empresa escolhida e, quando o pagador é um condomínio, só os pontos desse condomínio |
| **Código do documento** | Código do documento de origem |
| **Marcadores** | Etiquetas para organizar a conta |
| **Observações** | Anotações livres |

4. Em **Pagamentos**, informe a condição, a forma, a **Categoria financeira** e a **Conta de destino** para gerar as parcelas
5. Salve

A **Conta de destino** e a **Conta financeira** de cada parcela listam só as contas financeiras da empresa da conta. Ao trocar a **Empresa**, as parcelas perdem a conta financeira que for de outra empresa e o **Ponto de Venda** é limpo se não pertencer à nova empresa.

## Baixa de Recebimento

1. Na listagem, abra o menu de ações da parcela
2. Clique em **Informar recebimento**
3. Informe a **Data**, o valor recebido e, se for o caso, a **Conta Financeira** (só aparecem as contas da empresa da conta)
4. Confirme

## Status e Filtros

| Status | Descrição |
|--------|-----------|
| Em aberto | Ainda não recebida e dentro do prazo |
| Emitida | Parcela emitida |
| Vencendo hoje | Vence na data atual |
| Recebida parcialmente | Parte do valor já foi recebida |
| Recebida | Baixa registrada |
| Atrasada | Prazo de vencimento ultrapassado sem recebimento |
| Cancelada | Conta cancelada |

A listagem mostra as colunas **VENCIMENTO**, **DESCRIÇÃO**, **PARCELA**, **CLIENTE / CONDOMÍNIO**, **CÓDIGO DO DOCUMENTO**, **SITUAÇÃO**, **VALOR**, **MARCADORES** e **ORIGEM**.

Em **Filtrar**, é possível filtrar por **Período**, **Mês**, **Situação**, **Categoria financeira**, **Forma de pagamento**, **Empresa** (quando há mais de uma empresa ativa), **Valor** e **Marcadores**.

Em **Editar parcela**, o campo **Conta Financeira** lista só as contas financeiras da empresa da conta. Em **Ver detalhes da parcela**, aparecem o **Código do documento** e, quando há mais de uma empresa ativa, a **Empresa** da conta.

## Vendas, NF-e e Ocorrências

Contas a receber podem ser geradas automaticamente a partir de pedidos de venda e NF-e, dependendo da configuração da natureza de operação. Também é possível criar a conta a partir de um pedido de venda, de uma nota fiscal de saída, de uma NFC-e ou de uma ocorrência de venda; o formulário já vem preenchido com os dados do documento:

| Origem | Empresa | Código do documento |
|--------|---------|---------------------|
| Pedido de venda | Empresa do ponto de venda do pedido | `PV-` seguido do número do pedido |
| Nota fiscal de saída | Empresa da nota | `NFE-` seguido do número da nota |
| NFC-e | Empresa da nota | `NFCE-` seguido do número da nota |
| Ocorrência de venda | Empresa do ponto de venda da ocorrência | Código da ocorrência |

No pedido de venda e na ocorrência, o **Ponto de Venda** também vem preenchido. Ao duplicar uma conta, a **Empresa** é copiada e o **Código do documento** fica em branco.
