---
title: Categorias Financeiras
description: Como configurar categorias financeiras no Despensinha ERP.
sidebar:
  order: 8
---

As **Categorias Financeiras** organizam os lançamentos financeiros em grupos e subcategorias, funcionando como um plano de contas simplificado para classificar receitas e despesas.

## Acessando as Categorias Financeiras

Acesse **Preferências → Finanças → Categorias financeiras** para visualizar todos os grupos cadastrados. A listagem exibe:

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

1. Acesse **Preferências → Finanças → Categorias financeiras**
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

As categorias financeiras são utilizadas ao registrar **Contas a Pagar** e **Contas a Receber**, classificando cada lançamento. Elas também aparecem na **Visão de Competência**, permitindo filtrar e analisar os lançamentos por plano de contas.

Nos lançamentos de contas, o campo aparece como **Plano de contas**. Para despesas, o sistema mostra contas do plano do tipo despesa; para receitas, mostra contas do tipo receita. Nos demais contextos financeiros, a lista de contas pode considerar apenas as opções compatíveis com o tipo do lançamento.

No fluxo de **Movimentação de Caixa**, o plano de contas também é usado para classificar entradas e saídas. Quando a movimentação é do tipo entrada, o sistema mostra contas de receita; quando é do tipo saída, mostra contas de despesa. Se o tipo da movimentação mudar, o plano de contas informado é validado de acordo com o novo tipo.

Em conciliações bancárias, o plano de contas aparece na criação de lançamentos manuais, na antecipação de parcelas e no fechamento do dia da adquirente. Nesses casos, a seleção considera apenas contas ativas e compatíveis com o tipo do lançamento.

Na listagem de **Fluxo de Caixa** e em relatórios financeiros, o nome da conta aparece com seu código quando disponível, facilitando a identificação.  

Os lançamentos de **Contas a Receber** também podem ser criados a partir de uma **Ocorrência de venda**. Nesse caso, o sistema usa os dados da ocorrência para preencher informações como cliente, ponto de venda, valor, descrição, número do documento e observações.

A parcela de cada título aparece identificada pelo número do item na sequência, ajudando na leitura dos lançamentos parcelados.