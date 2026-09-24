---
title: Notificacoes
description: Como visualizar e gerenciar notificacoes no Despensinha ERP.
sidebar:
  order: 1
---

O modulo de **Notificacoes** centraliza todos os avisos e alertas gerados pelo Despensinha ERP. As notificacoes informam sobre eventos importantes relacionados a vendas, financeiro, estoque, clientes, operacoes e sistema.

## Tipos de Notificacao

As notificacoes sao organizadas por categoria, facilitando a identificacao rapida do assunto.

| Categoria | Exemplos |
|-----------|----------|
| **Financeiro** | Pagamento recebido, fatura vencida, limite de credito, alteracao de preco |
| **Cliente** | Novo cliente, feedback recebido, aniversario de cliente, atualizacao de perfil |
| **Estoque** | Estoque baixo, produto vencido, alta demanda, novo fornecedor |
| **Vendas** | Nova venda, pedido cancelado, pedido enviado, meta atingida |
| **Entrega** | Entrega atrasada, manutencao de equipamento |
| **Sistema** | Atualizacao do sistema, nova funcionalidade, acesso nao autorizado, nova integracao |
| **Gestao** | Reuniao agendada, tarefa atribuida, novo projeto, ausencia de funcionario |
| **Documentos** | Novo documento, atualizacao de legislacao, certificado vencendo, relatorio pronto |
| **Comunicacao** | Novo comentario, novo ticket de suporte |

## Listagem de Notificacoes

A pagina de notificacoes exibe todas as notificacoes em formato de lista, agrupadas por data de registro. Cada notificacao mostra:

| Coluna | Descricao |
|--------|-----------|
| Icone | Icone representando o tipo da notificacao |
| Titulo | Descricao resumida do evento |
| Data | Tempo decorrido desde o registro da notificacao |
| Status | Indica se a notificacao foi lida ou nao |

## Filtros Disponiveis

| Filtro | Descricao |
|--------|-----------|
| Periodo | Filtra notificacoes a partir de uma data especifica |
| Status | Filtra por notificacoes lidas ou nao lidas |

## Acoes Disponiveis

| Acao | Descricao |
|------|-----------|
| Criar notificacao | Registra uma notificacao manualmente |
| Marcar como lida | Altera o status da notificacao para lida |
| Remover | Exclui a notificacao selecionada |
| Exportar | Exporta a lista de notificacoes em formato PDF ou CSV |
| Atualizar | Recarrega a lista de notificacoes |

## Como Gerenciar Notificacoes

1. Acesse **Notificacoes** no menu principal
2. Visualize a lista de notificacoes agrupadas por data
3. Para marcar uma notificacao como lida, clique no botao de confirmacao ao lado da notificacao
4. Para remover uma notificacao, clique no botao de lixeira ao lado da notificacao
5. Utilize os filtros de periodo e status para localizar notificacoes especificas

## Notificacoes por Push

A area de notificacoes por push permite consultar os envios realizados para os destinatarios cadastrados. O acesso a essa area depende da permissao de notificacoes por push.

### Acesso

| Item | Descricao |
|------|-----------|
| Rota | `/notificacoes/push` |
| Permissao | `NOTIFICACOES_PUSH` |

### Informacoes exibidas

| Campo | Descricao |
|------|-----------|
| Destinatario | Nome ou identificacao de quem recebeu a notificacao |
| Mensagem | Conteudo enviado |
| Data de envio | Data e hora do envio |
| Status | Situacao do envio |

### Uso

1. Acesse **Notificacoes** no menu principal
2. Entre na opcao de notificacoes por push
3. Consulte os registros de envio disponiveis
4. Use a lista para acompanhar os envios realizados