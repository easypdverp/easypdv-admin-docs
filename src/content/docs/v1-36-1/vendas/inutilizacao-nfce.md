---
title: Inutilizacao NFC-e
description: Como inutilizar numeracoes de NFC-e no Despensinha ERP.
sidebar:
  order: 8
---

A **Inutilizacao de NFC-e** permite invalidar faixas de numeracao de Notas Fiscais de Consumidor Eletronicas que nao foram utilizadas. Esse procedimento e obrigatorio quando ocorrem quebras na sequencia numerica da NFC-e, evitando problemas com a SEFAZ.

## Quando Utilizar

A inutilizacao deve ser feita quando:

- Houve pulo de numeracao na emissao de NFC-e
- Numeros foram reservados mas nao chegaram a ser utilizados
- Falhas no sistema geraram lacunas na sequencia de numeracao

A SEFAZ exige que todas as lacunas de numeracao sejam formalmente inutilizadas para manter a conformidade fiscal.

## Campos Principais

| Campo | Descrição |
|-------|-----------|
| Série | Série da NFC-e a ser inutilizada |
| Número Inicial | Primeiro número da faixa a inutilizar |
| Número Final | Último número da faixa a inutilizar |
| Justificativa | Motivo da inutilização (mínimo 15 caracteres) |
| Situação | Status da solicitação (Pendente, Concluída, Cancelada) |
| Protocolo SEFAZ | Protocolo retornado pela SEFAZ após processamento |
| Data | Data em que a inutilização foi solicitada |

## Como Inutilizar Numeração

1. Acesse **Vendas → Inutilização NFC-e**
2. Clique em **Adicionar** (botão +)
3. Preencha a **Série** da NFC-e
4. Informe o **Número Inicial** e o **Número Final** da faixa
5. Escreva a **Justificativa** (mínimo 15 caracteres)
6. Clique em **Salvar** para enviar a solicitação à SEFAZ

## Status da Inutilização

| Status | Descrição |
|--------|-----------|
| Pendente | Solicitação registrada, aguardando processamento pela SEFAZ |
| Concluída | Numeração inutilizada com sucesso junto à SEFAZ |
| Cancelada | Solicitação de inutilização cancelada |

## Listagem e Filtros

A listagem de inutilizações exibe as colunas: situação, numeração (faixa inicial-final), justificativa, data de registro e data de atualização. É possível:

- Filtrar por situação (Pendente, Concluída, Cancelada)
- Ordenar por data
- Exportar a listagem em PDF ou CSV
