---
title: Contas Bancarias
description: Como cadastrar e gerenciar contas bancarias no Despensinha ERP.
sidebar:
  order: 6
---

O módulo de **Contas Bancárias** permite cadastrar e gerenciar as contas bancárias do estabelecimento, que são utilizadas em lançamentos financeiros, boletos e operações de Pix.

## Acessando as Contas Bancárias

Acesse **Preferências → Finanças → Contas bancárias** para visualizar todas as contas cadastradas. A listagem exibe:

| Coluna | Descrição |
|--------|-----------|
| Nome | Nome identificador da conta |
| Empresa | Empresa dona da conta (aparece só quando há mais de uma empresa ativa) |
| Situação | Ativo ou Inativo |
| Conta | Banco, agência e número da conta |
| Data Atualização | Data da última modificação |

## Como Cadastrar uma Conta Bancária

1. Acesse **Preferências → Finanças → Contas bancárias**
2. Clique no botão **Adicionar**
3. Preencha os dados na aba **Geral**:
   - **Empresa** (obrigatório quando há mais de uma empresa ativa) -- empresa dona da conta; com uma só empresa, a conta fica nela
   - **Nome** (obrigatório) -- nome identificador da conta
   - **Tipo de conta** (obrigatório) -- Corrente ou Poupança
   - **Banco** (obrigatório) -- selecione o banco na lista
   - **Agência-dígito** (obrigatório) -- número da agência e dígito verificador
   - **Conta-dígito** (obrigatório) -- número da conta e dígito verificador
   - **Conta financeira** (obrigatório) -- vincule a uma conta financeira do sistema; a lista mostra só as contas financeiras da empresa escolhida
4. Opcionalmente, configure a aba **Pix**:
   - **Tipo de chave** -- E-mail, CPF, CNPJ, Telefone ou Chave Aleatória
   - **Chave pix** -- valor da chave
5. Opcionalmente, configure a aba **Boleto**:
   - **Instruções boleto** -- até 4 linhas de instruções
   - **Nº de dias em que aceita o recebimento** -- número de dias aceitos após o vencimento
   - **Nº de dias para multa após o vencimento** -- número de dias para aplicar multa
   - **Taxa mensal de juros** -- percentual de juros ao mês
   - **Multa** -- valor fixo da multa
6. Clique em **Salvar**

Ao trocar a **Empresa**, a **Conta financeira** escolhida é limpa se pertencer a outra empresa.

## Editando uma Conta Bancária

1. Na listagem, clique no menu de ações da conta desejada
2. Selecione **Editar**
3. Altere os campos necessários
4. Salve as alterações

A **Empresa** de uma conta já cadastrada não pode ser alterada.

## Ativando ou Desativando

1. Na listagem, clique no menu de ações
2. Selecione **Ativar** ou **Desativar**
3. Confirme a operação

Contas inativas não aparecem como opção em lançamentos financeiros.

## Removendo uma Conta Bancária

1. Na listagem, clique no menu de ações
2. Selecione **Remover**
3. Confirme a exclusão

## Filtros e Exportação

Em **Filtrar**, use a **Situação** para exibir apenas contas ativas ou inativas e, quando há mais de uma empresa ativa, a **Empresa** para ver só as contas de uma ou mais empresas.

A listagem pode ser exportada nos formatos **PDF** e **CSV**.
