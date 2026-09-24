---
title: Dashboard
description: Visao geral do painel principal do Despensinha ERP.
sidebar:
  order: 1
---

O **Dashboard** e o painel principal do Despensinha ERP. Ele apresenta uma visao consolidada das principais metricas do negocio, organizadas em quatro abas tematicas: **Vendas**, **Operacao**, **Financeiro** e **Mercado**. Ao acessar o sistema, o Dashboard e a primeira tela exibida.

## Navegacao entre Abas

O Dashboard possui quatro abas na parte superior da pagina. Clique no nome da aba desejada para alternar entre elas. A aba ativa fica destacada visualmente.

| Aba | Descricao |
|-----|-----------|
| **Vendas** | Metricas de desempenho comercial e produtos mais vendidos |
| **Operacao** | Indicadores operacionais, telemetria de PDVs e tarefas de estoque |
| **Financeiro** | Visao financeira com fluxo de caixa, lucro e contas |
| **Mercado** | Funcionalidade em desenvolvimento, sera disponibilizada em breve |

> O acesso a cada aba depende das permissoes do usuario. Caso uma aba nao apareca, entre em contato com o administrador do sistema.

## Aba Vendas

A aba de Vendas exibe os principais indicadores de desempenho comercial do negocio.

| Indicador | Descricao |
|-----------|-----------|
| Cartoes informativos | Resumo geral com metricas de vendas do periodo |
| Produtos mais vendidos | Ranking dos produtos com maior volume de vendas |
| Total de vendas | Grafico com a evolucao do total de vendas ao longo do tempo |
| Ticket medio | Grafico com a evolucao do valor medio por venda |
| Categorias mais vendidas | Ranking das categorias de produtos mais vendidas |
| Horarios de pico | Grafico mostrando os horarios com maior volume de vendas |
| Formas de pagamento | Distribuicao das vendas por forma de pagamento utilizada |

## Aba Operacao

A aba de Operacao apresenta indicadores voltados para a gestao operacional do negocio.

### Telemetria de PDVs

A area de telemetria mostra os pontos de venda em cards com informacoes resumidas de cada PDV. Cada card exibe o status geral do terminal, vendas do dia, conectividade, bateria, estoque e tempo desde a ultima leitura.

| Campo | Descricao |
|-------|-----------|
| Status do PDV | Indica se o PDV esta online, offline, com atencao ou em estado critico |
| Vendas hoje | Total de vendas contabilizadas no dia |
| Conectividade | Tipo e status de conexao, como Wi-Fi, cabo ou rede movel |
| Bateria | Nivel de bateria do terminal, quando informado |
| Estoque | Percentual de estoque disponivel |
| Ultima leitura | Tempo desde o ultimo envio de telemetria |
| Informacoes do terminal | Sistema, versao, modelo e versao do aplicativo |

Cada card tambem oferece as acoes abaixo:

| Acao | Descricao |
|------|-----------|
| Detalhes | Abre uma janela com informacoes completas de telemetria |
| Notificar | Abre o envio de notificacao para o PDV |
| Editar PDV | Acessa a tela de edicao do ponto de venda |
| Configuracoes do terminal | Acessa a configuracao do terminal vinculado |
| Reiniciar terminal | Solicita o reinicio do terminal vinculado |

### Janela de detalhes de telemetria

A janela de detalhes mostra as informacoes completas do PDV selecionado.

| Secao | Informacoes exibidas |
|-------|----------------------|
| Conectividade | Status, tipo de conexao, nome da rede, sinal, IP e latencia |
| Hardware | Bateria, carregamento, espaco livre, memoria, CPU e temperatura |
| Aplicativo | Versao, tempo em funcionamento, ultima sincronizacao, tamanho do catalogo e erros |
| Transacoes | Quantidade de transacoes concluídas, falhas e receita desde o ultimo envio |
| Saude | Marcadores de alerta da telemetria |
| Terminal | Modelo, marca, sistema, serial, MAC e versao |

### Filtros e visualizacao

| Recurso | Descricao |
|---------|-----------|
| Busca | Permite localizar PDVs por nome, codigo ou endereco |
| Filtros | Mostram PDVs em todos os estados, disponiveis ou indisponiveis |
| Modo painel | Exibe os cards em tela cheia para acompanhamento ao vivo |
| Atualizacao automatica | Mantem os dados de telemetria atualizados em intervalos regulares |

### Indicadores operacionais

| Indicador | Descricao |
|-----------|-----------|
| Produtos proximos ao vencimento | Lista de produtos com data de validade proxima |
| Disponibilidade de PDVs | Status de disponibilidade dos pontos de venda |
| Destaques operacionais | Resumo dos principais eventos operacionais |
| Ultimas tarefas de estoque | Historico das tarefas de estoque mais recentes |
| Perda de produtos | Indicadores de perdas e desperdicio de produtos |

## Aba Financeiro

A aba Financeiro oferece uma visao completa da saude financeira do negocio.

| Indicador | Descricao |
|-----------|-----------|
| Visao geral de lucro | Resumo do lucro no periodo selecionado |
| Resumo financeiro | Grafico com a distribuicao de receitas e despesas |
| Fluxo de caixa | Grafico com a movimentacao de entradas e saidas |
| Aging de recebiveis | Analise do envelhecimento das contas a receber |
| Crescimento financeiro | Grafico com a evolucao financeira ao longo do tempo |
| Contas a receber | Lista das proximas contas a receber |
| Contas a pagar | Lista das proximas contas a pagar |

## Aba Mercado

A aba Mercado esta em desenvolvimento e sera disponibilizada em breve com novas funcionalidades de inteligencia de mercado.