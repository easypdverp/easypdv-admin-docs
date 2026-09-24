---
title: Categorias Financeiras
description: Como configurar categorias financeiras no Despensinha ERP.
sidebar:
  order: 8
---

As **Categorias Financeiras** organizam os lancamentos financeiros em grupos e subcategorias, funcionando como um plano de contas simplificado para classificar receitas e despesas.

## Acessando as Categorias Financeiras

Acesse **Financeiro -> Categorias Financeiras** para visualizar todos os grupos cadastrados. A listagem exibe:

| Coluna | Descricao |
|--------|-----------|
| Nome | Nome do grupo de categorias |
| Situacao | Ativo ou Inativo |
| Categorias | Quantidade de subcategorias no grupo |
| Data Cadastro | Data de criacao do grupo |
| Data Atualizacao | Data da ultima modificacao |

## Estrutura Hierarquica

As categorias financeiras seguem uma estrutura de dois niveis:

1. **Grupo** -- nivel superior que agrupa categorias relacionadas (ex: Despesas Fixas, Receitas Operacionais)
2. **Categorias** -- itens dentro do grupo que classificam os lancamentos (ex: Aluguel, Energia, Vendas)

## Como Criar um Grupo de Categorias

1. Acesse **Financeiro -> Categorias Financeiras**
2. Clique no botao **Adicionar**
3. Preencha:
   - **Nome** (obrigatorio) -- nome do grupo (ex: Despesas Fixas)
   - **Situacao** -- Ativo ou Inativo
4. Na secao **Categorias**, adicione as subcategorias:
   - Clique em **Adicionar** para incluir uma nova categoria
   - Informe o nome da categoria
   - Defina se e padrao para compras e/ou vendas
5. Clique em **Salvar**

## Propriedades das Categorias

Cada categoria dentro de um grupo possui:

| Propriedade | Descricao |
|-------------|-----------|
| Nome | Nome da categoria |
| Situacao | Ativo ou Inativo |
| Padrao Compra | Se esta categoria e aplicada automaticamente em compras |
| Padrao Venda | Se esta categoria e aplicada automaticamente em vendas |
| Data Cadastro | Data de criacao |
| Data Atualizacao | Data da ultima modificacao |

## Editando um Grupo

1. Na listagem, clique no menu de acoes do grupo desejado
2. Selecione **Editar**
3. Altere o nome, situacao ou as categorias do grupo
4. Dentro da edicao, e possivel:
   - Adicionar novas categorias
   - Editar categorias existentes
   - Ativar/desativar categorias individualmente
   - Remover categorias
5. Salve as alteracoes

## Ativando ou Desativando

Grupos e categorias podem ser ativados ou desativados individualmente:

1. Na listagem, clique no menu de acoes
2. Selecione **Ativar** ou **Desativar**
3. Confirme a operacao

Grupos e categorias inativos nao aparecem como opcao nos lancamentos financeiros.

## Removendo

1. Na listagem, clique no menu de acoes
2. Selecione **Remover**
3. Confirme a exclusao

## Filtros e Exportacao

Use o filtro de situacao para exibir apenas grupos ativos ou inativos.

A listagem pode ser exportada nos formatos **PDF** e **Excel**.

## Relacao com Lancamentos Financeiros

As categorias financeiras sao utilizadas ao registrar **Contas a Pagar** e **Contas a Receber**, classificando cada lancamento. Elas tambem aparecem na **Visao de Competencia**, permitindo filtrar e analisar os lancamentos por categoria.
