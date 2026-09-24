---
title: Dashboard
description: Visao geral do painel principal do Despensinha ERP.
sidebar:
  order: 1
---

O **Dashboard** é o painel principal do Despensinha ERP. Ele apresenta uma visão consolidada das principais métricas do negócio, organizadas em abas temáticas: **Vendas**, **Operação** e **Financeiro**. Ao acessar o sistema, o Dashboard é uma das áreas principais disponíveis conforme suas permissões.

## Navegação entre Abas

O Dashboard possui abas na parte superior da página. Clique no nome da aba desejada para alternar entre elas. A aba ativa fica destacada visualmente.

| Aba | Descrição |
|-----|-----------|
| **Vendas** | Métricas de desempenho comercial e produtos mais vendidos |
| **Operação** | Indicadores operacionais, telemetria de PDVs, validade de produtos e tarefas de estoque |
| **Financeiro** | Visão financeira com fluxo de caixa, lucro e contas |

> O acesso a cada aba depende das permissões do usuário. Caso uma aba não apareça, entre em contato com o administrador do sistema.

## Aba Vendas

A aba de Vendas exibe os principais indicadores de desempenho comercial do negócio.

| Indicador | Descrição |
|-----------|-----------|
| Cartões informativos | Resumo geral com métricas de vendas do período |
| Produtos mais vendidos | Ranking dos produtos com maior volume de vendas |
| Total de vendas | Gráfico com a evolução do total de vendas ao longo do tempo |
| Ticket médio | Gráfico com a evolução do valor médio por venda |
| Categorias mais vendidas | Ranking das categorias de produtos mais vendidas |
| Horários de pico | Gráfico mostrando os horários com maior volume de vendas |
| Formas de pagamento | Distribuição das vendas por forma de pagamento utilizada |

Os cards e graficos da aba de Vendas se adaptam ao tamanho da tela. Em telas menores, os filtros e informacoes ficam organizados em coluna para facilitar a leitura.

### Total de vendas

O card de Total de vendas mostra os valores consolidados do periodo selecionado.

| Campo | Descricao |
|-------|-----------|
| Periodo | Selecao de data usada para filtrar os dados do grafico |
| Valor total | Soma das vendas no periodo |
| Total de pedidos | Quantidade de pedidos no periodo |
| Grafico | Evolucao do total de vendas ao longo do tempo |

### Ticket medio

O card de Ticket medio mostra o valor medio por venda no periodo selecionado.

| Campo | Descricao |
|-------|-----------|
| Periodo | Selecao de data usada para filtrar os dados do grafico |
| Ticket medio | Valor medio por venda no periodo |
| Quantidade de vendas | Total de vendas consideradas no calculo |
| Grafico | Evolucao do ticket medio ao longo do tempo |

### Produtos mais vendidos

O card de Produtos mais vendidos exibe o ranking dos itens com maior volume de vendas.

| Campo | Descricao |
|-------|-----------|
| Periodo | Selecao de data usada para filtrar os produtos exibidos |
| Vendas totais | Total de vendas consideradas no ranking |
| Lista | Tabela com os produtos ordenados por desempenho |

A lista de produtos usa rolagem horizontal quando necessario para manter a leitura em telas menores.

## Aba Operação

A aba de Operação apresenta indicadores voltados para a gestão operacional do negócio.

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

| Indicador | Descrição |
|-----------|-----------|
| Produtos próximos ao vencimento | Lista de produtos com data de validade próxima |
| Disponibilidade de PDVs | Status de disponibilidade dos pontos de venda |
| Destaques operacionais | Resumo dos principais eventos operacionais |
| Últimas tarefas de estoque | Histórico das tarefas de estoque mais recentes |
| Perda de produtos | Indicadores de perdas e desperdício de produtos |

### Disponibilidade de PDVs

O card de disponibilidade de PDVs mostra o percentual de pontos de venda disponiveis no momento.

| Campo | Descricao |
|-------|-----------|
| Percentual disponivel | Percentual de PDVs em funcionamento |
| Status | Indicacao visual da disponibilidade |
| Resumo | Informacao consolidada para leitura rapida |

As informacoes dessa area ficam organizadas em coluna nas telas menores para manter a visualizacao clara.

## Aba Financeiro

A aba Financeiro oferece uma visão completa da saúde financeira do negócio.

| Indicador | Descrição |
|-----------|-----------|
| Visão geral de lucro | Resumo do lucro no período selecionado |
| Resumo financeiro | Gráfico com a distribuição de receitas e despesas |
| Fluxo de caixa | Gráfico com a movimentação de entradas e saídas |
| Aging de recebíveis | Análise do envelhecimento das contas a receber |
| Crescimento financeiro | Gráfico com a evolução financeira ao longo do tempo |
| Contas a receber | Lista das próximas contas a receber |
| Contas a pagar | Lista das próximas contas a pagar |

Os cards financeiros seguem uma organizacao responsiva e se ajustam em coluna em telas menores.

## Página inicial: aplicativos e notícias

A página inicial reúne as informações do app do cliente e do app operacional.

| Área | Descrição |
|------|-----------|
| EasyPDV Operador | App para gestão de estoque, separação de pedidos e leitura de código de barras |
| Seu app de compras | App com a marca do cliente, com link para lojas e identidade própria |
| Visualização por carrossel | Exibição em sequência das imagens do aplicativo |
| Informações do app | Nome, ícone, descrição e links de acesso às lojas |
| Contato com suporte | Canal para falar sobre publicação e configuração do app |

### App EasyPDV Operador

O app **EasyPDV Operador** é voltado para a rotina operacional. Ele reúne recursos para apoiar o trabalho no estoque e na operação.

| Recurso | Descrição |
|---------|-----------|
| Separação de pedidos | Ajuda na organização e separação de pedidos |
| Reposição | Apoia a reposição de produtos no estoque |
| Inventário | Facilita a contagem e conferência de itens |
| Leitura de código de barras | Permite usar a câmera ou coletor para identificação rápida de produtos |
| Lojas | Acesso direto para download na App Store e no Google Play |

### Seu app de compras

O app de compras mostra a identidade visual do cliente e os links das lojas quando o aplicativo está publicado.

| Campo | Descrição |
|-------|-----------|
| Nome da marca | Nome exibido no cartão do app |
| Ícone | Ícone do aplicativo |
| Imagens | Capturas de tela exibidas no carrossel |
| Link da Play Store | Endereço do app na Google Play |
| Link da App Store | Endereço do app na App Store |

Quando o app ainda está em preparação, a área exibe uma mensagem de acompanhamento e um botão para contato com o suporte. Quando o app não está disponível para publicação, a área apresenta o recurso como uma possibilidade para o cliente.

### Disponibilidade do aplicativo

| Situação | Descrição |
|----------|-----------|
| App publicado | Exibe a marca, os ícones, as imagens e os links das lojas definidos para a conta |
| App em preparação | Exibe mensagem de acompanhamento e contato com o suporte |
| App indisponível | Exibe a oferta do app de compras com a marca do cliente |

### Notícias

O painel também exibe conteúdos de mercado em formato de notícias. A seção consulta a fonte configurada no ambiente do sistema e mostra a lista de itens retornados pela API.

| Campo | Descrição |
|-------|-----------|
| Fonte de notícias | URL configurada em `VITE_APP_NEWS_API_URL` |
| Exibição | Lista de notícias carregadas no painel |
| Tratamento de retorno | Quando a resposta não é uma lista, o sistema mostra a aba sem itens |
| Requisição | Consulta feita diretamente à API configurada no ambiente |
