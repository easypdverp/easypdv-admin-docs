---
title: Estoque
description: Controle de saldo e movimentações de estoque no Despensinha ERP.
sidebar:
  order: 5
---

O módulo de **Estoque** exibe o saldo atual de produtos por armazém e registra as movimentações de entrada e saída.

## Consulta de Saldo

Acesse **Suprimentos → Estoque** para visualizar o saldo de cada produto por depósito. Use os filtros para buscar por produto, categoria ou depósito.

## Movimentações

Cada operação que afeta o estoque gera uma movimentação registrada.

| Tipo | Origem | Permissão |
|------|--------|------------|
| Entrada | NF-e de Entrada, ajuste manual, conferência de recebimento | Suprimentos → Estoque |
| Saída | NFC-e, NF-e de Saída, ajuste manual | Suprimentos → Estoque |
| Transferência | Movimentação entre armazéns | Suprimentos → Estoque |
| Inventário | Conferência de estoque | Suprimentos → Inventário |

## Depósitos

O sistema suporta múltiplos depósitos. Cada PDV é vinculado a um depósito específico de onde o estoque é baixado nas vendas.

## Abastecimento de Picklist

No fluxo de picklist, o sistema permite iniciar o abastecimento em dois formatos:

| Tipo | Descrição |
|------|-----------|
| Abastecer | Realiza apenas o abastecimento dos produtos. |
| Abastecer + Conferência | Realiza o abastecimento e também informa quantas unidades de cada produto existem no ponto de venda. |

Ao iniciar o abastecimento, escolha o tipo desejado na janela de confirmação. Durante o processo, a tela fica bloqueada até a conclusão da operação.

## Lançamentos de Estoque

Na área de movimentações, o sistema separa os lançamentos por tipo:

| Tipo | Descrição |
|------|-----------|
| Entrada | Registra a entrada de produtos no estoque |
| Saída | Registra a saída de produtos do estoque |
| Saldo | Ajusta a quantidade em estoque |

Os botões de ajuste e transferência aparecem conforme a permissão do usuário.

## Lotes e Validades

Os produtos com controle de lote exibem informações de lote e validade.

| Ação | Permissão |
|------|------------|
| Adicionar lote | Suprimentos → Lotes |
| Editar lote | Suprimentos → Lotes |
| Remover lote | Suprimentos → Lotes |

## Alertas de Estoque Mínimo

Produtos com estoque abaixo do mínimo configurado são exibidos no dashboard e na listagem do estoque com alerta visual.

## Suprimentos

Na área de **Suprimentos**, os cadastros e operações exibem o código de barras do produto quando ele está disponível. Quando o produto não possui código informado, o campo fica em branco.

### Código de barras em compras, NF-e, conferência e separação

O código de barras aparece em telas de compra, entrada de NF-e, conferência de estoque, separação de pedidos e listas de produtos do estoque.

| Tela | Exibição do código |
|------|--------------------|
| Compra | No item do produto e na busca para lançamento de lotes |
| NF-e de Entrada | No produto selecionado e no item da nota |
| Conferência de estoque | Na lista de itens, detalhes e edição do item |
| Separação de pedidos | Na lista de itens e no detalhe do produto |
| Estoque | Na seleção e na exibição de produtos com lote |
| Pedido de compra | No produto vinculado ao item e no lançamento de lotes |

### Campos de produto nas telas de suprimentos

| Campo | Exibição |
|------|----------|
| Descrição | Nome do produto |
| Código de barras | GTIN/EAN quando informado |
| SKU | Código interno ou do fornecedor, conforme a tela |
| Preço | Valor do item quando aplicável |
| Quantidade | Quantidade sugerida ou informada |

### Relação entre produto e código de barras

| Situação | Exibição |
|----------|----------|
| Produto com GTIN/EAN | Código aparece na tela |
| Produto sem GTIN/EAN | Campo fica em branco |
| Busca por item do pedido | O sistema relaciona pelo GTIN/EAN ou pelo SKU do fornecedor |

### Lançamento de lotes

Ao lançar lotes a partir de pedidos de compra ou notas de entrada, o sistema usa o código de barras e o SKU do fornecedor para localizar o produto correspondente. Isso ajuda a preencher o item certo antes da confirmação do lançamento.

## Conferência de Estoque

A tela de conferência de estoque lista os itens com os campos de situação, quantidade atual e quantidade conferida.

| Campo | Descrição |
|------|-----------|
| Situação | Indica o status da conferência do item. |
| QTD. ATUAL | Mostra a quantidade atual registrada no estoque. |
| QTD. CONFERIDA | Mostra a quantidade informada na conferência. |

Ao finalizar a conferência, o sistema valida os itens e conclui o processo.

| Ação | Descrição |
|------|-----------|
| Finalizar conferência | Conclui a conferência de estoque. |
| Cancelar | Fecha a janela sem concluir a operação. |

## Conferência de Recebimento

Notas de entrada podem passar por uma conferência de recebimento antes de entrarem no estoque. Nessa etapa, o sistema permite:

- conferir cada item da nota;
- informar quantidades recebidas;
- registrar motivo quando houver divergência;
- marcar todos os itens como conferidos;
- concluir a conferência quando todos os itens estiverem validados.

A conferência fica vinculada à nota fiscal e pode ser consultada depois.

## Abastecimento de Picklist

As operações de abastecimento de picklist podem funcionar com conferência junto. Nessa rotina, o sistema permite:

- abastecer itens da picklist;
- informar a quantidade no PDV;
- acompanhar itens por lote;
- cancelar o abastecimento em andamento;
- concluir a operação quando os itens estiverem atendidos.

Quando a picklist está em etapa de abastecimento com conferência, a operação fica disponível para continuidade pela mesma tela.

## Detalhes do Produto

Na tela de detalhes do produto, o sistema exibe abas conforme a permissão do usuário:

| Aba | Exibição |
|-----|----------|
| Lançamentos | Movimentações do produto |
| Reservas | Reservas do produto |
| Lotes e Validades | Lotes vinculados ao produto |
| Configurações | Regras de controle do produto |

As ações de transferência, ajuste, exportação e manutenção de lotes ficam disponíveis de acordo com a permissão do usuário.

## Operações de Inventário

A tela **Operações de Inventário** lista tarefas de separação, abastecimento, abastecimento combinado e inventário.

| Tipo | Uso |
|------|-----|
| Separação | Separar produtos para uma picklist |
| Abastecimento | Abastecer produtos no ponto de venda |
| Abastecimento combinado | Abastecer e conferir a quantidade no ponto de venda |
| Inventário | Conferência de estoque por operação |

Ao abrir uma operação pelo link da notificação, o sistema leva direto para os detalhes da tarefa.

## Permissões no Estoque

Algumas ações e abas ficam visíveis conforme a permissão do usuário.

| Permissão | Uso |
|-----------|-----|
| Suprimentos → Estoque | Consulta de saldo, lançamentos, transferências e exportações |
| Suprimentos → Ajustes de Estoque | Ajustes, edição de configurações, ações de inventário |
| Suprimentos → Lotes | Gestão de lotes e validade |
| Suprimentos → Inventário | Conferência de estoque |
| Suprimentos → Separação | Separação de picklists |
| Suprimentos → Abastecimento | Execução de abastecimento |
| Suprimentos → Abastecimento combinado | Execução de abastecimento com conferência |
