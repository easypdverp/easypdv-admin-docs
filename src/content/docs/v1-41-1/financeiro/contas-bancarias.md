---
title: Contas Bancarias
description: Como cadastrar e gerenciar contas bancarias no Despensinha ERP.
sidebar:
  order: 6
---

O modulo de **Contas Bancarias** permite cadastrar e gerenciar as contas bancarias do estabelecimento, que sao utilizadas em lancamentos financeiros, boletos e operacoes de Pix.

## Acessando as Contas Bancarias

Acesse **Financeiro -> Contas Bancarias** para visualizar todas as contas cadastradas. A listagem exibe:

| Coluna | Descricao |
|--------|-----------|
| Nome | Nome identificador da conta |
| Situacao | Ativo ou Inativo |
| Conta | Banco, agencia e numero da conta |
| Data Atualizacao | Data da ultima modificacao |

## Como Cadastrar uma Conta Bancaria

1. Acesse **Financeiro -> Contas Bancarias**
2. Clique no botao **Adicionar**
3. Preencha os dados na aba **Geral**:
   - **Nome** (obrigatorio) -- nome identificador da conta
   - **Tipo de conta** (obrigatorio) -- Corrente ou Poupanca
   - **Banco** (obrigatorio) -- selecione o banco na lista
   - **Agencia-digito** (obrigatorio) -- numero da agencia e digito verificador
   - **Conta-digito** (obrigatorio) -- numero da conta e digito verificador
   - **Conta financeira** (obrigatorio) -- vincule a uma conta financeira do sistema
4. Opcionalmente, configure a aba **Pix**:
   - **Tipo de chave** -- E-mail, CPF, CNPJ, Telefone ou Chave Aleatoria
   - **Chave Pix** -- valor da chave
5. Opcionalmente, configure a aba **Boleto**:
   - **Instrucoes de impressao** -- ate 4 linhas de instrucoes
   - **Dias para recebimento** -- numero de dias aceitos apos o vencimento
   - **Dias para multa** -- numero de dias para aplicar multa
   - **Taxa mensal de juros** -- percentual de juros ao mes
   - **Multa** -- valor fixo da multa
6. Clique em **Salvar**

## Editando uma Conta Bancaria

1. Na listagem, clique no menu de acoes da conta desejada
2. Selecione **Editar**
3. Altere os campos necessarios
4. Salve as alteracoes

## Ativando ou Desativando

1. Na listagem, clique no menu de acoes
2. Selecione **Ativar** ou **Desativar**
3. Confirme a operacao

Contas inativas nao aparecem como opcao em lancamentos financeiros.

## Removendo uma Conta Bancaria

1. Na listagem, clique no menu de acoes
2. Selecione **Remover**
3. Confirme a exclusao

## Filtros e Exportacao

Use o filtro de situacao para exibir apenas contas ativas ou inativas.

A listagem pode ser exportada nos formatos **PDF** e **CSV**.
