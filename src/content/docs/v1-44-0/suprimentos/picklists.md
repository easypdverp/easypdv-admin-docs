---
title: Picklists
description: Como criar e gerenciar listas de separacao de produtos no Despensinha ERP.
sidebar:
  order: 3
---

A **Picklist** (lista de separacao) e uma lista de produtos que precisam ser separados e/ou abastecidos em um ponto de venda. Ela e gerada a partir do planograma do PDV, identificando quais produtos e quantidades precisam ser repostos.

## Acessando as Picklists

Acesse **Suprimentos -> Picklists** para visualizar todas as picklists cadastradas. A listagem exibe:

| Coluna | Descricao |
|--------|-----------|
| Numero | Numero sequencial da picklist |
| Situacao | Status atual (Pendente, Em Separacao, Separada, Em Abastecimento, Abastecida) |
| Tipo | Completa ou Por Categoria |
| Descricao | Descricao livre da picklist |
| Ponto de Venda | PDV associado (comunidade e localidade) |
| Operacoes | Datas e duracao da separacao e abastecimento |
| Data Criacao | Data em que a picklist foi criada |

## Como Criar uma Picklist

1. Acesse **Suprimentos -> Picklists**
2. Clique no botao **Adicionar**
3. No modal de criacao, preencha:
   - **Ponto de venda** (obrigatorio) -- selecione o PDV que possui planograma ativo
   - **Descricao** -- texto livre para identificar a picklist
4. Selecione o **Tipo**:
   - **Completa** -- gera itens para todos os produtos do planograma
   - **Por Categoria** -- gera itens apenas para as categorias selecionadas
5. Configure as opcoes adicionais:
   - **Picklist por categoria** -- cria uma picklist separada para cada categoria
   - **Somente estoque critico** -- inclui apenas produtos com estoque abaixo do minimo
6. Clique em **Criar**

## Status da Picklist

A picklist segue um fluxo de status conforme as operacoes sao realizadas:

| Status | Descricao |
|--------|-----------|
| Pendente | Picklist criada, aguardando inicio das operacoes |
| Em Separacao | Operacao de separacao em andamento |
| Separada | Separacao concluida |
| Em Abastecimento | Operacao de abastecimento em andamento |
| Abastecida | Abastecimento concluido |

## Operacoes

### Separacao

A separacao e o processo de coletar os produtos no estoque de origem conforme a picklist:

1. Na listagem, clique em **Separar** na picklist desejada
2. Confirme o inicio da separacao
3. Na tela de operacao, registre as quantidades separadas para cada produto
4. Ao finalizar, a picklist muda para o status **Separada**

### Abastecimento

O abastecimento e o processo de entregar os produtos separados no ponto de venda:

1. Na listagem, clique em **Abastecer** na picklist separada
2. Confirme o inicio do abastecimento
3. Na tela de operacao, registre as quantidades entregues
4. Ao finalizar, a picklist muda para o status **Abastecida**

## Editando uma Picklist

Picklists com status **Pendente** podem ser editadas:

1. Clique no menu de acoes e selecione **Editar**
2. Na tela de edicao, visualize os detalhes: cliente, ponto de venda, planograma de origem e datas
3. Na tabela de itens, e possivel:
   - Editar a quantidade de cada produto
   - Remover itens da picklist

## Acoes Disponveis

As acoes variam conforme o status da picklist:

- **Pendente**: Ver Picklist, Editar, Separar, Abastecer, Remover
- **Em Separacao**: Ver Picklist, Continuar Separacao, Remover
- **Separada**: Ver Picklist, Ver Separacao, Abastecer, Remover
- **Em Abastecimento**: Ver Picklist, Continuar Abastecimento, Ver Separacao (se aplicavel), Remover
- **Abastecida**: Ver Picklist, Ver Abastecimento, Ver Separacao (se aplicavel)

## Filtros e Exportacao

Use os filtros na listagem para buscar por numero ou descricao. As abas de status permitem filtrar por situacao.

A listagem pode ser exportada nos formatos **PDF** e **CSV**.
