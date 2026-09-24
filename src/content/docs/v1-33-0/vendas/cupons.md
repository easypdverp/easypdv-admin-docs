---
title: Cupons
description: Criação e gestão de cupons de desconto no Despensinha ERP.
sidebar:
  order: 6
---

Os **Cupons** permitem aplicar descontos em pedidos de venda e no PDV, com controle de validade, valor mínimo e quantidade de usos.

## Como Criar um Cupom

1. Acesse **Vendas → Cupons**
2. Clique em **Novo Cupom**
3. Defina:
   - Código do cupom
   - Tipo de desconto (percentual ou valor fixo)
   - Valor do desconto
   - Data de validade
   - Valor mínimo do pedido (opcional)
   - Limite de usos (opcional)
4. Salve

## Aplicação

Cupons são aplicados nos pedidos de venda pelo campo **Código do Cupom** na tela de pedido. O sistema valida automaticamente as condições (validade, valor mínimo e limite de usos).

## Ocorrências de Venda

As **Ocorrências de Venda** registram situações relacionadas ao atendimento comercial, com controle de status, resultado, observações, evidências, itens e comentários.

Você pode acessar em **Vendas → Ocorrência**.

## Como Criar uma Ocorrência

1. Acesse **Vendas → Ocorrência**
2. Clique em **Novo**
3. Informe os dados da ocorrência
4. Adicione, se necessário:
   - Itens relacionados
   - Evidências
   - Comentários
   - Observações
5. Salve

## Detalhes da Ocorrência

Na tela de detalhes, você visualiza e controla:

| Campo | Descrição |
|---|---|
| Código | Identificação da ocorrência |
| Cliente | Cliente relacionado |
| Ponto de venda | Ponto de venda relacionado |
| Status | Situação atual da ocorrência |
| Resultado | Resultado do atendimento |
| Observação | Texto livre com informações da ocorrência |
| Itens | Produtos ou itens vinculados |
| Evidências | Arquivos anexados |
| Comentários | Registro de acompanhamentos |

## Ações Disponíveis

### Status

O sistema permite alterar o status da ocorrência e informar um resultado e uma observação no momento da alteração.

### Itens

É possível incluir itens na ocorrência com informações de produto, descrição, quantidade e valores.

### Evidências

Você pode anexar arquivos como evidência da ocorrência. Cada evidência pode ter uma descrição.

| Campo | Descrição |
|---|---|
| Arquivo | Documento ou imagem anexada |
| Descrição | Texto opcional para identificar a evidência |

### Comentários

Comentários servem para registrar acompanhamentos e anotações sobre a ocorrência.

| Campo | Descrição |
|---|---|
| Conteúdo | Texto do comentário |

## Gerar Pedido de Venda a partir da Ocorrência

A ocorrência pode servir como base para um pedido de venda. Nesse caso, o pedido usa os dados da ocorrência, como cliente, ponto de venda, itens e observações.

O pedido gerado também mantém o vínculo com a ocorrência de origem.

## Impressão de Etiquetas no Planograma

Na tela de detalhes do planograma, a impressão de etiquetas usa um filtro por período e por categoria. O sistema valida os itens antes de gerar o PDF e mostra os registros com inconsistência de código de barras para revisão.

| Campo | Descrição |
|---|---|
| Situação | Filtro por situação do item |
| Categoria | Filtro por uma ou mais categorias |
| Quantidade de cópias | Número de etiquetas por item |
| Template | Modelo da etiqueta |

Se houver itens com código de barras inválido, o sistema permite revisar os dados antes da impressão.