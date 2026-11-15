---
title: Convites
description: Como gerenciar convites de workspace no Despensinha ERP.
sidebar:
  order: 8
---

O sistema de **Convites** permite convidar novos usuarios para acessar o Despensinha ERP. Atraves de convites, administradores e contadores podem adicionar colaboradores enviando um link de cadastro por e-mail.

## Tipos de Convite

O sistema suporta dois tipos de convite conforme o perfil do convidado:

| Tipo | Perfil | Dados Solicitados no Aceite |
|------|--------|-----------------------------|
| **Contador** | Acesso ao espaco contabil e fiscal | Nome, CPF/CNPJ, e-mail, telefone, CRC |
| **Funcionario** | Acesso ao sistema conforme papel atribuido | Nome, matricula, e-mail, telefone |

## Como Enviar um Convite

Os convites podem ser enviados a partir do **Espaco do Contador -> Convites**:

1. Acesse **Espaco Contador -> Convites**
2. No formulario de envio, informe o **e-mail** do convidado
3. Clique em **Enviar convite**
4. O sistema envia automaticamente um e-mail com o link de aceite

O convite possui uma data de validade. Caso expire, e possivel reenviar.

## Como Aceitar um Convite

Ao receber o convite por e-mail, o convidado deve:

1. Clicar no **link de convite** recebido por e-mail
2. O sistema verifica se o convite e valido e nao esta expirado
3. Preencher os **dados pessoais** conforme o tipo de convite (contador ou funcionario)
4. Criar uma **senha de acesso** que atenda aos requisitos:
   - Minimo de 8 caracteres
   - Pelo menos uma letra maiuscula
   - Pelo menos um numero
   - Confirmacao da senha
5. Clicar em **Definir senha e acessar**
6. Apos a confirmacao, o sistema redireciona para a pagina de login

Se o convite estiver expirado ou invalido, o sistema exibe uma mensagem de erro orientando o usuario a solicitar um novo convite.

## Status dos Convites

| Status | Descricao |
|--------|-----------|
| **Pendente** | Convite enviado, aguardando aceite do destinatario |
| **Aceito** | Destinatario aceitou o convite e criou sua conta |
| **Expirado** | Convite ultrapassou a data de validade sem ser aceito |
| **Cancelado** | Convite foi cancelado manualmente pelo remetente |

## Gerenciar Convites Enviados

Na pagina de convites, a tabela lista todos os convites enviados com as seguintes informacoes: e-mail, status, criado por, validade e data de envio.

### Acoes Disponiveis

As acoes variam conforme o status do convite:

| Status | Acoes |
|--------|-------|
| **Pendente e valido** | Copiar link, Reenviar, Cancelar |
| **Expirado ou Cancelado** | Remover |
| **Aceito** | Nenhuma acao disponivel |

- **Copiar link** -- Copia o link de convite para a area de transferencia
- **Reenviar** -- Envia novamente o e-mail de convite ao destinatario
- **Cancelar** -- Invalida o convite, impedindo o aceite
- **Remover** -- Remove o convite da listagem
