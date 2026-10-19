---
title: Listas de Preco
description: Como criar e gerenciar listas de preco no Despensinha ERP.
sidebar:
  order: 7
---

As **Listas de Preco** permitem definir precos diferenciados para conjuntos de produtos, com controle de vigencia e markup. Cada lista possui um nome, uma situacao (ativo/inativo), datas de inicio e termino, e uma colecao de produtos com seus respectivos precos.

## Campos Principais

| Campo | Descrição |
|-------|-----------|
| Nome | Nome identificador da lista de preco |
| Situação | Ativo ou Inativo |
| Data de Início | Início do período de vigência da lista |
| Data de Término | Fim do período de vigência da lista |
| Produtos | Itens vinculados à lista com seus precos |

### Campos dos Produtos na Lista

| Campo | Descrição |
|-------|-----------|
| Descrição | Nome e código de barras (EAN) do produto |
| Preco Original | Preco de custo do produto |
| Markup (%) | Percentual de margem aplicado |
| Preco na Lista | Preco final de venda na lista |
| Data Atualização | Data da última modificação do item |

## Como Criar uma Lista de Preco

1. Acesse **Cadastros → Listas de Preco**
2. Clique em **Adicionar** (botão +)
3. Preencha o **Nome** da lista
4. Selecione a **Situação** (Ativo ou Inativo)
5. Defina as datas de **Início** e **Término** da vigência (opcional)
6. Na seção **Produtos**, clique em **Adicionar** para incluir itens
7. Para cada produto, informe o preco original, markup e preco na lista
8. Clique em **Salvar**

## Importar de Planograma

É possível importar produtos diretamente de um planograma existente para a lista de preco, utilizando o botão **Importar de Planograma** na tela de criação ou edição.

## Listagem e Filtros

A listagem de listas de preco exibe as colunas: nome, situação, quantidade de produtos, início e fim de vigência, data de cadastro e data de atualização. É possível:

- Pesquisar pelo nome da lista
- Filtrar por situação (ativo/inativo)
- Selecionar múltiplas listas para ações em lote
- Exportar a listagem em PDF ou CSV

## Ações Disponíveis

| Ação | Descrição |
|------|-----------|
| Editar | Abre o formulário de edição da lista |
| Ativar/Desativar | Alterna a situação da lista |
| Remover | Remove a lista de preco |

As ações em lote permitem ativar, desativar ou remover múltiplas listas simultaneamente.

## Preço de Venda no Cadastro do Produto

O preço de venda padrão do produto fica no campo **Preço** do cadastro, em **Cadastros → Catálogo → Produtos**.

### Formar preço a partir do custo e do markup

Ao lado do campo **Preço**, o botão **Formar preço** (ícone de calculadora) abre um formador de preço:

| Campo | Descrição |
|-------|-----------|
| Custo unitário | Custo por unidade de venda. Deve ser maior que zero. |
| Markup (%) | Percentual aplicado sobre o custo. Deve ser maior ou igual a zero. |
| Sugerido | Preço calculado: custo unitário × (1 + markup ÷ 100), arredondado em centavos. |

1. Informe o **Custo unitário** e o **Markup (%)**
2. Clique em **Calcular** (ou pressione Enter em um dos campos)
3. Confira o valor **Sugerido** e clique em **Aplicar** para levá-lo ao campo **Preço**

Alterar o custo ou o markup apaga a sugestão até um novo cálculo. O formador não grava o custo nem o markup no produto: só o preço aplicado é salvo junto com o cadastro. Se o valor calculado ultrapassar o limite do cadastro, o sistema avisa e não sugere preço.

### Histórico de Preços

Na listagem de produtos, o ícone de gráfico ao lado do preço (ou na coluna de ações) abre o **Histórico de Preços** do produto. O histórico é carregado sempre que a janela é aberta, com as alterações registradas até aquele momento.

| Situação | Exibição |
|----------|----------|
| Mais de um preço registrado | Gráfico com a evolução do preço por data; ao passar o mouse, o último ponto aparece como **atual** |
| Apenas um preço registrado | O preço vigente e a data desde quando vale (**vigente desde**), com o aviso de que o gráfico aparece a partir da primeira alteração |
| Nenhum preço registrado | Mensagem **Nenhum histórico de preço disponível** |
