---
title: Espaco do Gestor
description: Como utilizar o espaco do gestor no Despensinha ERP.
sidebar:
  order: 1
---

O **Espaco do Gestor** e a area do sistema destinada aos usuarios com perfil de gestor. Ele oferece uma visao gerencial simplificada, focada no acompanhamento financeiro das comunidades e pontos de venda vinculados.

## Visao Geral

O dashboard do gestor centraliza as informacoes financeiras mais importantes em uma unica tela, permitindo acompanhar contas a pagar, contas a receber, saldo liquido e parcelas vencidas.

Para acessar, navegue ate **Espaco Gestor** no menu lateral. O acesso ao dashboard depende da permissao de visualizacao do espaco do gestor, e o sistema carrega automaticamente os dados da primeira comunidade vinculada ao gestor.

## Filtros de Visualizacao

O painel de filtros permite ajustar a visualizacao dos dados financeiros:

| Filtro | Descricao |
|--------|-----------|
| **Comunidade** | Seleciona a comunidade (condominio) para visualizar |
| **Ponto de Venda** | Filtra por um ponto de venda especifico ou exibe todos |
| **Periodo** | Define o intervalo de tempo com os ultimos 12 meses disponiveis |

Ao trocar a comunidade, o filtro de ponto de venda e redefinido automaticamente.

## Cartoes de Resumo

O dashboard exibe quatro cartoes com metricas financeiras:

| Cartao | O que mostra |
|--------|-------------|
| **Contas a Pagar** | Valor total a pagar e quantidade de contas vencidas |
| **Contas a Receber** | Valor total a receber e quantidade a vencer no mes |
| **Saldo Liquido** | Diferenca entre contas a receber e contas a pagar |
| **Vencidas** | Quantidade total de parcelas vencidas e valor acumulado |

Os valores sao atualizados automaticamente conforme os filtros selecionados.

## Grafico Comparativo

Abaixo dos cartoes de resumo, um grafico apresenta a comparacao visual entre **Contas a Pagar** e **Contas a Receber** ao longo do periodo selecionado. Esse grafico facilita a identificacao de tendencias e periodos criticos.

## Tabela de Contas a Pagar

A tabela lista todas as parcelas de contas a pagar da comunidade selecionada:

| Coluna | Descricao |
|--------|-----------|
| **Descricao** | Nome da conta e observacoes |
| **Condominio** | Comunidade e localidade do ponto de venda |
| **Vencimento** | Data de vencimento da parcela |
| **Valor** | Valor bruto da parcela |
| **Status** | Em aberto, Paga, Atrasada ou Cancelada |
| **Acoes** | Ver detalhes e enviar comprovante de pagamento |

A tabela possui busca por descricao ou contato, paginacao e filtro por status em abas. E possivel exportar os dados em PDF ou CSV. A visualizacao da tabela usa layout em lista.

### Enviar Comprovante

1. Na tabela de contas a pagar, localize a parcela desejada
2. Clique no icone de **Enviar documento** (icone de upload)
3. Selecione o arquivo do comprovante de pagamento
4. Confirme o envio

### Ver Detalhes

1. Na tabela, clique no icone de **Ver detalhes** (icone de lupa)
2. O sistema exibe as informacoes completas da parcela em um modal

## Tabela de Contas a Receber

A tabela de contas a receber funciona de forma identica a tabela de contas a pagar, exibindo as parcelas a receber com as mesmas colunas, filtros e opcoes de exportacao. A visualizacao da tabela usa layout em lista.

## Detalhes da Parcela

Ao abrir os detalhes de uma parcela, o sistema exibe as informacoes completas da conta, incluindo dados de vencimento, valor, status e anexos relacionados. Enquanto os dados sao carregados, o modal mostra um indicador de carregamento.

## Envio de Documento

O envio de comprovante aceita os arquivos nos formatos:

| Formato |
|---------|
| PDF |
| JPG |
| JPEG |
| PNG |
| DOC |
| DOCX |

Depois de selecionar os arquivos, o sistema permite revisar a lista antes do envio. Durante o envio, os botoes ficam desabilitados e um indicador mostra o andamento da operacao.

## Layout da Pagina

O conteudo do **Espaco do Gestor** aparece dentro de uma estrutura padronizada de pagina, com breadcrumb e titulo no topo.
