---
title: Relatórios
description: Central de relatórios do Despensinha ERP.
sidebar:
  order: 1
---

A central de **Relatórios** reúne análises detalhadas das operações do estabelecimento, com filtros por período e outras opções de busca conforme o tipo de relatório. Em várias telas, os dados podem ser visualizados em tabelas, exportados e usados para acompanhar desempenho, estoque, compras, financeiro, notas fiscais e indicadores por ponto de venda.

## Relatórios de Vendas

Acesse **Relatórios → Vendas** para visualizar os painéis disponíveis conforme suas permissões:

### Geral
- Resumo geral de vendas
- Vendas por período
- Vendas por produto, categoria, cliente, ponto de venda, dia, mês, promoção e cupom
- Vendas por operador
- Ticket médio e quantidade de itens por venda
- Métodos de pagamento utilizados
- Produtos não encontrados na leitura de código de barras
- Evolução de notas fiscais de venda
- Indicadores por ponto de venda

### Relatório de Vendas Geral
- Quantidade vendida, bruto, descontos e líquido
- Preço médio com faixa mínima e máxima
- Custo, lucro bruto, margem e markup, quando a venda tem custo
- Totais do filtro: vendas, ticket médio e clientes identificados
- Desconto por tipo: promoção, cupom e forma de pagamento

### Evolução de Vendas
- Valor vendido por hora
- Quantidade de transações por hora
- Hora de pico, hora mais fraca e média por hora com venda
- Grade de vendas por dia da semana e hora

### Venda por Categoria, Cliente, Ponto de Venda, Produto, Dia, Mês, Promoção e Cupom
- Visões agrupadas conforme o filtro selecionado
- Totais do período no rodapé
- Exportação com as colunas exibidas na tela

### Vendas por Hora
- Total vendido e quantidade de transações por hora
- Comparação com outro período
- Exportação da série por hora e por dia da semana

### Conversão do PDV
- Indicadores de início, conclusão e abandono da compra
- Conversão por ponto de venda, adquirente, forma de pagamento ou dia da semana × hora
- Totais do filtro no rodapé
- Exportação dos mesmos indicadores exibidos na tela

### Produtos não encontrados
- Produtos procurados e não encontrados nas vendas
- Situação do código de barras
- Data da primeira e da última leitura
- Ação para cadastrar o produto ou inserir no planograma

### Relatórios de Notas Fiscais

Acesse **Relatórios → Vendas → Notas Fiscais** para visualizar:
- Consulta por produto
- Operação
- Cliente
- Evolução
- Resumo fiscal por CFOP e outros grupos, conforme o relatório
- Situação da nota fiscal
- Modelo da nota fiscal
- IBS e CBS, quando disponíveis

## Relatórios de Suprimentos

Acesse **Relatórios → Suprimentos** para visualizar:

### Estoque
- Movimentações de estoque por período
- Posição de estoque atual ou por data de referência
- Entradas e saídas de estoque
- Maior circulação de itens
- Itens sem circulação
- Itens abaixo do mínimo
- Visão financeira do estoque
- Consumo de produtos e duração do estoque
- Quebra e acuracidade por ponto de venda

### Relatórios de Nota de Entrada

Acesse **Relatórios → Suprimentos → Nota de Entrada** para visualizar:
- Operação
- Fornecedor
- Produto
- Evolução
- Produto por fornecedor
- Situação da nota de entrada

### Outros relatórios
- Ordem de compra
- Perda de produto e ajustes de inventário
- Necessidade de compra
- Sem circulação com foco no planograma ativo

### Custo da mercadoria vendida

Acesse **Relatórios → Suprimentos → Custo da mercadoria vendida** para acompanhar:
- Custo total das mercadorias vendidas
- Custo por período
- Custo por produto
- Custo por categoria
- Comparação entre custo e vendas
- Valor de faturamento sem custo informado

## Relatórios Financeiros

Acesse **Relatórios → Financeiro** para visualizar:

### Geral
- Saldos por conta financeira
- DRE
- Resultado por PDV
- Fluxo de caixa realizado e projetado

### Caixa
- Resumo de receitas e despesas por categoria
- Resumo por cliente ou fornecedor

### Contas
- Contas a pagar por período, status, fornecedor e categoria
- Contas a receber por período, status, cliente e categoria
- Recebimentos

## Exportação

Os relatórios podem ser exportados em:

| Formato | Uso |
|---|---|
| **PDF** | Impressão e arquivamento |
| **Excel (.xlsx)** | Análise em planilhas |
| **CSV** | Integração com outros sistemas |

## Filtros e visualização

A maior parte dos relatórios usa filtros para refinar a consulta, como:

| Filtro | Uso |
|---|---|
| **Período** | Define a data inicial e final do relatório |
| **Cliente** | Filtra resultados por cliente |
| **Fornecedor** | Filtra resultados por fornecedor |
| **Produto** | Filtra resultados por produto |
| **Categoria** | Filtra resultados por categoria |
| **Depósito / estoque** | Filtra resultados por local de estoque |
| **Ponto de venda** | Filtra resultados por PDV |
| **Operador** | Filtra resultados por operador |
| **Status** | Filtra títulos, pedidos ou lançamentos por situação |
| **Empresa** | Filtra resultados por empresa quando o acesso é múltiplo |
| **Situação da nota** | Filtra notas fiscais por situação |
| **Modelo da nota** | Filtra por NF-e, NFC-e ou ambos |
| **Regime** | Filtra a DRE por competência ou caixa |
| **Comparar meses** | Mostra uma coluna por mês no período da DRE |
| **Agrupar por** | Define o tipo de agrupamento em relatórios de venda e conversão |

As tabelas exibem valores numéricos alinhados à direita e, em alguns relatórios, indicadores de status aparecem com etiquetas coloridas para facilitar a leitura. Alguns painéis mostram cards de resumo acima ou abaixo da tabela, com totais do filtro inteiro.