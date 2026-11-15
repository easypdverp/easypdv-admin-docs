---
title: NF-e Entrada
description: Recebimento de Notas Fiscais de fornecedores no Despensinha ERP.
sidebar:
  order: 4
---

A **NF-e de Entrada** registra o recebimento de mercadorias de fornecedores, atualizando o estoque e o contas a pagar.

## Como Lançar uma NF-e de Entrada

1. Acesse **Suprimentos → Notas de entrada**
2. Clique em **Adicionar** para preencher manualmente, ou em **Importar → Importar via XML** / **Importar via Chave de Acesso**
3. Verifique os dados: fornecedor, itens, valores e impostos
4. Vincule a um Pedido de Compra (opcional)
5. Clique em **Salvar**
6. No menu da nota, use **Lançar estoque** e **Lançar contas a pagar** conforme necessário

## Importação via XML

O sistema lê o XML da NF-e e preenche automaticamente os campos de fornecedor, produtos, quantidades, preços e dados fiscais. Produtos não cadastrados são sinalizados para cadastro.

Na importação por XML ou por chave de acesso, o **número** e a **série** da nota são os do fornecedor, como constam no documento, e já aparecem preenchidos antes de salvar.

## Lançar estoque

A ação **Lançar estoque** só aparece no menu da nota quando ela pode entrar no estoque:

- Nota de terceiro (emitida pelo fornecedor): em qualquer situação, exceto cancelada.
- Nota própria: somente quando autorizada.

Depois que o estoque é lançado, o menu mostra **Estornar estoque** no lugar.

## Conferência de recebimento

A conferência de recebimento compara a quantidade da nota com a quantidade recebida. No menu da nota, use **Receber mercadoria** para iniciar, **Continuar recebimento** para retomar uma conferência em andamento ou **Ver recebimento** para abrir uma conferência concluída.

O modal **Conferência de recebimento** mostra a **Situação**, o **Responsável** e a **Data** da conferência e a lista de itens:

| Coluna | Descrição |
|--------|-----------|
| **Produto** | Descrição do item |
| **Qtd. nota** | Quantidade informada na nota |
| **Qtd. recebida** | Quantidade conferida; em destaque quando difere da nota |
| **Motivo** | Motivo da divergência, quando houver |

No topo do modal, ao lado da situação, ficam:

- **Exportar**: exporta os itens da conferência.
- **Estornar conferência**: desfaz uma conferência já concluída.

Enquanto a conferência está em andamento, o rodapé mostra **Continuar recebimento**.

## Filtros

Clique em **Filtrar** na lista de notas de entrada para refinar a busca. Além de período, mês, status, tipo, produto, estado (UF) e operações, a lista oferece:

| Campo | Descrição |
|-------|-----------|
| **Empresa** | Uma ou mais empresas. Só aparece quando há mais de uma empresa |
| **Conferência com divergência** | Em **Pendências**: mostra as notas cuja conferência de recebimento terminou com pendência |
| **Sem estoque ou sem financeiro** | Em **Pendências**: mostra as notas em que falta lançar o estoque, o financeiro ou ambos. Não combina com Estoque e Financeiro marcados juntos em **Com as operações** |

## Efeitos no Sistema

- Saldo de estoque incrementado conforme os itens da nota
- Lançamento automático de conta a pagar no financeiro (se configurado)
