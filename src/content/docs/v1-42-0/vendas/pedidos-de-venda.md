---
title: Pedidos de Venda
description: Como criar e gerenciar pedidos de venda no Despensinha ERP.
sidebar:
  order: 2
---

Os **Pedidos de Venda** registram as vendas realizadas para clientes, com controle de itens, quantidades, preços e status.

## Como Criar um Pedido de Venda

1. Acesse **Vendas → Pedidos de venda**
2. Clique em **Adicionar** (botão +)
3. Selecione o **Ponto de venda** e, se necessário, o **Cliente**
4. Adicione os itens: produto, quantidade e preço
5. Preencha os **Pagamentos**
6. Clique em **Salvar**

## Pagamentos

O pedido usa a empresa do ponto de venda. Na seção **Pagamentos**, as contas financeiras disponíveis na **Conta de destino** e nas parcelas são as da empresa do **Ponto de venda** selecionado. Ao trocar o ponto de venda por outro de empresa diferente, as parcelas que estavam com conta da empresa anterior ficam sem conta, para que seja escolhida uma conta da nova empresa.

## Status do Pedido

| Status | Descrição |
|--------|-----------|
| Em aberto | Pedido em elaboração; é o único status que permite **Editar** |
| Aprovado | Pedido aprovado |
| Faturado | Pedido faturado |
| Cancelado | Pedido cancelado |
| Não concluída | Venda cancelada com um motivo de não conclusão |

A situação **Não concluída** aparece para o pedido cancelado que tem motivo de não conclusão. Nesse caso, o motivo é exibido logo abaixo da situação, na lista e na tela de detalhes do pedido. O pedido cancelado sem motivo aparece como **Cancelado**.

O status pode ser trocado pela ação **Alterar Situação**, com as opções **Em aberto**, **Aprovado**, **Faturado** e **Cancelado**.

## Listagem e Filtros

A lista de pedidos exibe as colunas **NÚMERO**, **DATA**, **SITUAÇÃO**, **PONTO DE VENDA**, **CLIENTE**, **VALOR** (com a quantidade de itens), **MARCADORES**, **ORIGEM** e **OPERAÇÕES**. As abas **todas**, **aprovado**, **faturado** e **cancelado** separam os pedidos pela situação e mostram o valor total dos pedidos da aba.

Em **Filtrar**, estão disponíveis:

| Filtro | Descrição |
|--------|-----------|
| Período | Intervalo de datas do pedido |
| Ponto de Venda | Ponto de venda do pedido |
| Cliente | Cliente do pedido, pesquisado por nome, CPF ou CNPJ |
| Situação | Status do pedido |
| Origem | Origem do pedido |
| Produtos | Pedidos que contêm os produtos selecionados |
| Valor | Faixa de valor do pedido, com **Valor mínimo** e **Valor máximo**. Os dois são opcionais: sem valor máximo, a faixa não tem limite superior |
| Marcadores | Marcadores do pedido. Digite cada marcador e pressione Enter |
| Só as que deviam ter NFC-e e estão sem NFC-e autorizada | Mostra apenas as vendas que deveriam ter NFC-e e ainda não têm uma NFC-e autorizada |

O botão **Filtrar** mostra quantos filtros estão ativos, e **Limpar** remove todos de uma vez.

## Impressão

A ação **Imprimir** abre a janela **Imprimir Pedido**, onde é possível escolher a ordem dos itens: **Inserção**, **Alfabética**, **Localização** ou **Código**. O cabeçalho da impressão traz a razão social (ou o nome fantasia), o endereço, o CNPJ e a inscrição estadual da empresa do ponto de venda do pedido. Sem inscrição estadual, o cabeçalho mostra **ISENTO**.

## Faturamento

A partir do pedido, é possível gerar a nota fiscal pelas ações **Gerar nota de saída** ([NF-e de saída](../nfe-saida/)) ou **Gerar nota de consumidor** ([NFC-e](../nfce/)). Cada ação fica disponível enquanto o pedido ainda não tem a nota correspondente.
