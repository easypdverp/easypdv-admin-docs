---
title: Inventário
description: Como realizar o inventário físico no Despensinha ERP.
sidebar:
  order: 6
---

O **Inventário** permite realizar a contagem física do estoque e ajustar o saldo do sistema conforme o resultado apurado. A contagem é feita pela conferência de estoque, que fica em uma tela própria: **Suprimentos → Conferências de estoque**.

## Como Realizar um Inventário

1. Acesse **Suprimentos → Conferências de estoque**
2. Clique em **Iniciar nova**
3. Preencha a janela **Iniciar conferência de estoque** e clique em **Iniciar**
4. Informe a quantidade contada de cada produto
5. Clique em **Finalizar Conferência** — o sistema conclui a conferência e ajusta o estoque

| Campo | Descrição |
|-------|-----------|
| Depósito | Depósito a ser conferido |
| Data próxima de expiração dos produtos | Prazo de validade considerado: **7 dias**, **15 dias** ou **30 dias** |
| Dias desde última conferência | **Todos** ou produtos não conferidos há **7**, **15**, **30**, **60** ou **90 dias** |
| Tipo de conferência | **Total** ou **Sob demanda** |

## Listagem de Conferências

A tela **Conferências de Estoque** lista as conferências com situação, depósito, progresso, total em perdas, data de início e duração.

| Situação | Ações disponíveis |
|----------|-------------------|
| Em andamento | **Visualizar**, **Continuar**, **Cancelar**, **Finalizar** |
| Concluído | **Visualizar** |
| Cancelado | **Visualizar** |

## Verificação de Inventário

Antes de finalizar, revise o relatório de divergências:
- **Positivo**: quantidade contada maior que o saldo do sistema
- **Negativo**: quantidade contada menor que o saldo do sistema

Ao finalizar com produtos ainda não conferidos, o sistema avisa **Ainda existem produtos a conferir** e oferece a opção **Zerar quantidades de produtos não inventariados**.

## Conferência e Operações de Inventário

A conferência de estoque é iniciada, acompanhada e finalizada apenas na tela **Conferências de estoque**. A tela **Operações de inventário** reúne as tarefas de separação e abastecimento das picklists e não lista conferências.
