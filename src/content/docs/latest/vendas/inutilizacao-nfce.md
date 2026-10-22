---
title: Inutilizacao NFC-e
description: Como inutilizar numeracoes de NFC-e no Despensinha ERP.
sidebar:
  order: 8
---

A **Inutilização de NFC-e** permite invalidar faixas de numeração de Notas Fiscais de Consumidor Eletrônicas que não foram utilizadas. Esse procedimento é obrigatório quando ocorrem quebras na sequência numérica da NFC-e, evitando problemas com a SEFAZ.

## Quando Utilizar

A inutilização deve ser feita quando:

- Houve pulo de numeração na emissão de NFC-e
- Números foram reservados mas não chegaram a ser utilizados
- Falhas no sistema geraram lacunas na sequência de numeração

A SEFAZ exige que todas as lacunas de numeração sejam formalmente inutilizadas para manter a conformidade fiscal.

## Campos Principais

| Campo | Descrição |
|-------|-----------|
| Empresa | Empresa dona da numeração a inutilizar. Aparece apenas quando a conta tem mais de uma empresa ativa |
| Série | Série da NFC-e a ser inutilizada |
| Número inicial | Primeiro número da faixa a inutilizar |
| Número final | Último número da faixa a inutilizar |
| Justificativa | Motivo da inutilização (mínimo 15 caracteres) |

A numeração da NFC-e é controlada por empresa. Por isso, quando a conta tem mais de uma empresa ativa, o campo **Empresa** é obrigatório. Com uma única empresa ativa, o campo não é exibido e a inutilização é feita para essa empresa.

## Como Inutilizar Numeração

1. Acesse **Vendas → Inutilizar NFC-e**
2. Clique em **Adicionar** (botão +)
3. Na janela **Inutilização de numeração**, selecione a **Empresa**, se o campo for exibido
4. Preencha a **Série** da NFC-e
5. Informe o **Número inicial** e o **Número final** da faixa
6. Escreva a **Justificativa** (mínimo 15 caracteres)
7. Clique em **Salvar** para enviar a solicitação à SEFAZ

## Status da Inutilização

| Status | Descrição |
|--------|-----------|
| Pendente | Solicitação registrada, aguardando processamento pela SEFAZ |
| Concluída | Numeração inutilizada com sucesso junto à SEFAZ |
| Cancelada | Solicitação de inutilização cancelada |

## Listagem e Filtros

A listagem de inutilizações exibe as colunas: situação, numeração (faixa inicial-final), justificativa, data de registro e data de atualização. É possível:

- Filtrar por situação (**Todos**, **Em andamento**, **Concluído**, **Cancelado**)
- Ordenar por data
- Exportar a listagem em PDF ou CSV
