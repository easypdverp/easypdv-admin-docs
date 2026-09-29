---
title: Clientes
description: Como cadastrar e gerenciar clientes no Despensinha ERP.
sidebar:
  order: 2
---

O cadastro de **Clientes** permite registrar pessoas físicas e jurídicas que realizam compras no sistema.

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
4. Adicione contatos, endereço e demais informações conforme necessário
5. Clique em **Salvar**

## Listagem e Filtros

A listagem de clientes permite filtrar por:
- Nome ou documento (CPF/CNPJ)
- Tags associadas
- Status (ativo/inativo)

A tela de listagem também exibe o status do cliente com indicação visual.

Na listagem, o nome do cliente é clicável e abre a tela de edição. Também é possível clicar na linha do cliente para acessar os detalhes.

## Editar e Desativar

- Para editar, clique no nome do cliente na listagem ou selecione a linha
- Para desativar, use o menu de ações e selecione **Desativar**
- Clientes desativados não aparecem nas seleções de pedidos de venda

## Contatos do Cliente

Um cliente pode ter contatos vinculados ao cadastro, como pessoas responsáveis pelo atendimento ou recebimento.

Os contatos podem incluir informações como:
- Nome
- Telefone
- E-mail
- Endereço
- Anexos

### Anexos

Os contatos do cliente permitem incluir arquivos, como documentos e imagens, para consulta no próprio cadastro.

### Informações complementares

A tela de cadastro do cliente também permite organizar os dados por abas, separando:
- Contatos
- Acessos
- Anexos

Isso facilita a consulta e o preenchimento das informações do cliente.

A listagem de contatos do cliente exibe a coluna **Telefone** para identificação do contato.

| Campo | Descrição |
|-------|-----------|
| Telefone | Número de telefone do contato |

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
