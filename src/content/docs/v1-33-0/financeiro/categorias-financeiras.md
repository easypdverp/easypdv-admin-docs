---
title: Categorias Financeiras
description: Como configurar categorias financeiras no Despensinha ERP.
sidebar:
  order: 8
---

As **Categorias Financeiras** organizam os lançamentos financeiros em grupos e subcategorias, funcionando como um plano de contas simplificado para classificar receitas e despesas.

## Acessando as Categorias Financeiras

Acesse **Financeiro -> Categorias Financeiras** para visualizar todos os grupos cadastrados. A listagem exibe:

| Coluna | Descrição |
|--------|-----------|
| Nome | Nome do grupo de categorias |
| Situação | Ativo ou Inativo |
| Categorias | Quantidade de subcategorias no grupo |
| Data Cadastro | Data de criação do grupo |
| Data Atualização | Data da última modificação |

## Estrutura Hierárquica

As categorias financeiras seguem uma estrutura de dois níveis:

1. **Grupo** — nível superior que agrupa categorias relacionadas (ex: Despesas Fixas, Receitas Operacionais)
2. **Categorias** — itens dentro do grupo que classificam os lançamentos (ex: Aluguel, Energia, Vendas)

## Como Criar um Grupo de Categorias

1. Acesse **Financeiro -> Categorias Financeiras**
2. Clique no botão **Adicionar**
3. Preencha:
   - **Nome** (obrigatório) — nome do grupo (ex: Despesas Fixas)
   - **Situação** — Ativo ou Inativo
4. Na seção **Categorias**, adicione as subcategorias:
   - Clique em **Adicionar** para incluir uma nova categoria
   - Informe o nome da categoria
   - Defina se é padrão para compras e/ou vendas
5. Clique em **Salvar**

## Propriedades das Categorias

Cada categoria dentro de um grupo possui:

| Propriedade | Descrição |
|-------------|-----------|
| Nome | Nome da categoria |
| Situação | Ativo ou Inativo |
| Padrão Compra | Se esta categoria é aplicada automaticamente em compras |
| Padrão Venda | Se esta categoria é aplicada automaticamente em vendas |
| Data Cadastro | Data de criação |
| Data Atualização | Data da última modificação |

## Editando um Grupo

1. Na listagem, clique no menu de ações do grupo desejado
2. Selecione **Editar**
3. Altere o nome, situação ou as categorias do grupo
4. Dentro da edição, é possível:
   - Adicionar novas categorias
   - Editar categorias existentes
   - Ativar/desativar categorias individualmente
   - Remover categorias
5. Salve as alterações

## Ativando ou Desativando

Grupos e categorias podem ser ativados ou desativados individualmente:

1. Na listagem, clique no menu de ações
2. Selecione **Ativar** ou **Desativar**
3. Confirme a operação

Grupos e categorias inativos não aparecem como opção nos lançamentos financeiros.

## Removendo

1. Na listagem, clique no menu de ações
2. Selecione **Remover**
3. Confirme a exclusão

## Filtros e Exportação

Use o filtro de situação para exibir apenas grupos ativos ou inativos.

A listagem pode ser exportada nos formatos **PDF** e **Excel**.

## Relação com Lançamentos Financeiros

As categorias financeiras são utilizadas ao registrar **Contas a Pagar** e **Contas a Receber**, classificando cada lançamento. Elas também aparecem na **Visão de Competência**, permitindo filtrar e analisar os lançamentos por categoria.

Os lançamentos de **Contas a Receber** também podem ser criados a partir de uma **Ocorrência de venda**. Nesse caso, o sistema usa os dados da ocorrência para preencher informações como cliente, ponto de venda, valor, descrição, número do documento e observações.