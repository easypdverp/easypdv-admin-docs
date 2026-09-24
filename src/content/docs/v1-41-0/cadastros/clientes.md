---
title: Clientes
description: Como cadastrar e gerenciar clientes no Despensinha ERP.
sidebar:
  order: 2
---

O cadastro de **Clientes** permite registrar pessoas físicas (CPF) e jurídicas (CNPJ) que realizam compras no sistema.

## Campos Principais

| Campo | Descrição |
|-------|-----------|
| Nome / Razão Social | Nome completo ou razão social |
| CPF / CNPJ | Documento de identificação |
| E-mail | Endereço de e-mail para contato |
| Telefone | Número de telefone |
| Endereço | Logradouro, número, bairro, cidade, UF, CEP |
| Tags | Etiquetas para categorização |
| Status | Situação do cadastro: ativo ou inativo |

## Como Cadastrar um Cliente

1. Acesse **Cadastros → Clientes**
2. Clique em **Novo Cliente**
3. Preencha os dados obrigatórios (nome e CPF/CNPJ)
4. Adicione contatos e endereço conforme necessário
5. Clique em **Salvar**

## Listagem e Filtros

A listagem de clientes permite filtrar por:
- Nome ou documento (CPF/CNPJ)
- Tags associadas
- Status (ativo/inativo)

## Editar e Desativar

- Para editar, clique no nome do cliente na listagem
- Para desativar, use o menu de ações e selecione **Desativar**
- Clientes desativados não aparecem nas seleções de pedidos de venda

## Confirmação de Cadastro por Link

Quando o cliente recebe um link de confirmação, ele abre uma página de confirmação com o nome informado no cadastro.

| Situação | Mensagem exibida |
|----------|------------------|
| Cadastro pendente | `Confirmar cadastro de [nome] no EasyPDV?` |
| Em confirmação | `Confirmando...` |
| Cadastro confirmado | `Cadastro confirmado. Pode voltar ao terminal.` |
| Cadastro já confirmado | `Cadastro já confirmado.` |
| Cadastro expirado ou link inválido | `Link expirado. Cadastre-se de novo no terminal.` |

Na página de confirmação, o cliente clica em **Confirmar** para concluir o cadastro.