---
title: NF-e Entrada
description: Recebimento de Notas Fiscais de fornecedores no Despensinha ERP.
sidebar:
  order: 4
---

A **NF-e de Entrada** registra o recebimento de mercadorias de fornecedores, atualizando o estoque e o contas a pagar.

## Como Lançar uma NF-e de Entrada

1. Acesse **Suprimentos → NF-e Entrada**
2. Clique em **Nova NF-e Entrada**
3. Faça o **upload do XML** da nota fiscal ou preencha manualmente
4. Verifique os dados: fornecedor, itens, valores e impostos
5. Vincule a um Pedido de Compra (opcional)
6. Clique em **Confirmar** — o estoque é atualizado automaticamente

## Importação via XML

O sistema lê o XML da NF-e e preenche automaticamente os campos de fornecedor, produtos, quantidades, preços e dados fiscais. Produtos não cadastrados são sinalizados para cadastro.

## Efeitos no Sistema

- Saldo de estoque incrementado conforme os itens da nota
- Lançamento automático de conta a pagar no financeiro (se configurado)
