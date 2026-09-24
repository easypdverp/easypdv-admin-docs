---
title: Planograma
description: Como criar e gerenciar planogramas de vendas no Despensinha ERP.
sidebar:
  order: 3
---

O **Planograma** permite definir quais produtos devem estar disponíveis em cada ponto de venda, controlando quantidades desejadas, mínimas e preços. Ele funciona como um mapa de abastecimento: cada planograma é vinculado a um ponto de venda e lista os produtos com suas respectivas quantidades e valores.

## Campos Principais

| Campo | Descrição |
|-------|-----------|
| Número | Número sequencial gerado automaticamente |
| Ponto de Venda | PDV ao qual o planograma está vinculado (código e localidade) |
| Cliente | Cliente associado ao ponto de venda |
| Situação | Status atual do planograma (Rascunho, Ativo, Pendente, Arquivado) |
| Quantidades | Indicadores de produtos: total, críticos (abaixo do mínimo) e zerados |
| Origem | Planograma anterior que originou este (quando aplicável) |
| Data Criação | Data em que o planograma foi criado |
| Data Modificação | Data da última alteração |

## Como Criar um Planograma

1. Acesse **Vendas → Planogramas**
2. Clique em **Adicionar** (botão +)
3. Selecione o **Ponto de Venda** desejado
4. O planograma será criado com o status **Rascunho**
5. Na tela de detalhes, clique em **Adicionar produto** para incluir itens
6. Para cada produto, informe o **preço**, a **quantidade desejada** e a **quantidade mínima**
7. Após incluir todos os produtos, clique em **Finalizar planograma**
8. O planograma passará para o status **Pendente**, aguardando ativação

## Status do Planograma

| Status | Descrição |
|--------|-----------|
| Rascunho | Planograma em elaboração, permite adicionar, editar e remover produtos |
| Pendente | Finalizado e aguardando ativação |
| Ativo | Planograma em uso no ponto de venda |
| Arquivado | Planograma removido ou substituído |

## Detalhes do Planograma

Ao acessar os detalhes de um planograma, é possível visualizar:

- **Resumo**: número do planograma, situação, ponto de venda e cliente
- **Indicadores**: total de produtos, quantidade de itens críticos e zerados
- **Lista de Produtos**: tabela com descrição, categoria, preço e quantidades (atual/desejada)

Os indicadores de quantidade utilizam cores para facilitar a identificação:
- **Verde**: quantidade atual acima do mínimo
- **Amarelo**: quantidade atual igual ou abaixo do mínimo (crítico)
- **Vermelho**: quantidade atual zerada

## Listagem e Filtros

A listagem de planogramas exibe as colunas: número, cliente/PDV, situação, quantidades, data de criação e data de atualização. É possível:

- Filtrar por status (Ativo, Rascunho, Pendente, Arquivado) usando as abas de navegação
- Ordenar por número sequencial
- Pesquisar por texto
- Exportar a listagem em PDF ou CSV

## Ações Disponíveis

As ações variam conforme o status do planograma:

| Status | Ações |
|--------|-------|
| Rascunho | Ajustar (editar produtos), Finalizar, Remover |
| Pendente | Ajustar, Ativar, Remover |
| Ativo | Visualizar detalhes |
