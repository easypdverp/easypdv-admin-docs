---
title: Notificacoes
description: Como visualizar e gerenciar notificacoes no Despensinha ERP.
sidebar:
  order: 1
---

O módulo de **Notificações** centraliza todos os avisos e alertas gerados pelo Despensinha ERP. As notificações informam sobre eventos importantes relacionados a vendas, financeiro, estoque, clientes, operações e sistema.

## Tipos de Notificação

As notificações são organizadas por categoria, facilitando a identificação rápida do assunto.

| Categoria | Exemplos |
|-----------|----------|
| **Financeiro** | Pagamento recebido, fatura vencida, limite de crédito, alteração de preço |
| **Cliente** | Novo cliente, feedback recebido, aniversário de cliente, atualização de perfil |
| **Estoque** | Estoque baixo, produto vencido, alta demanda, novo fornecedor |
| **Vendas** | Nova venda, pedido cancelado, pedido enviado, meta atingida |
| **Entrega** | Entrega atrasada, manutenção de equipamento |
| **Sistema** | Atualização do sistema, nova funcionalidade, acesso não autorizado, nova integração |
| **Gestão** | Reunião agendada, tarefa atribuída, novo projeto, ausência de funcionário |
| **Documentos** | Novo documento, atualização de legislação, certificado vencendo, relatório pronto |
| **Comunicação** | Novo comentário, novo ticket de suporte |

## Listagem de Notificações

A página de notificações exibe todas as notificações em formato de lista, agrupadas por data de registro. Cada notificação mostra:

| Coluna | Descrição |
|--------|-----------|
| Ícone | Ícone representando o tipo da notificação |
| Título | Descrição resumida do evento |
| Data | Tempo decorrido desde o registro da notificação |
| Status | Indica se a notificação foi lida ou não |

A lista usa visualização em formato de tabela simples e mostra o status com etiquetas de cor:

| Status | Descrição |
|--------|-----------|
| **Lido** | Notificação já aberta ou processada |
| **Não lido** | Notificação ainda não visualizada |

## Filtros Disponíveis

| Filtro | Descrição |
|--------|-----------|
| Período | Filtra notificações a partir de uma data específica |
| Status | Filtra por notificações lidas ou não lidas |

## Ações Disponíveis

| Ação | Descrição |
|------|-----------|
| Criar notificação | Adiciona uma nova notificação manualmente |
| Marcar como lida | Altera o status da notificação para lida |
| Remover | Exclui a notificação selecionada |
| Exportar | Exporta a lista de notificações em formato PDF ou CSV |
| Atualizar | Recarrega a lista de notificações |

## Notificações Push

A área de **Notificações Push** reúne as notificações enviadas para os aplicativos do sistema. O acesso depende da permissão de notificações por push. A lista mostra as informações principais de cada item:

| Coluna | Descrição |
|--------|-----------|
| Título | Nome da notificação push |
| App alvo | Aplicativo que recebe a notificação |
| Status | Situação da notificação |
| Criado por | Usuário responsável pelo cadastro |
| Enviado em | Data e hora do envio |

### Status da notificação push

| Status | Descrição |
|--------|-----------|
| **Rascunho** | Notificação salva sem envio |
| **Enviando** | Notificação em processamento de envio |
| **Enviada** | Notificação entregue com sucesso |
| **Falha parcial** | Parte dos envios teve problema |
| **Falhou** | Envio não concluído |
| **Cancelada** | Notificação cancelada |

### App alvo

| App alvo | Descrição |
|----------|-----------|
| **Todos** | Envio para todos os aplicativos |
| **App Cliente** | Envio para o aplicativo do cliente |
| **App Operador** | Envio para o aplicativo do operador |

### Ações disponíveis na lista de notificações push

| Ação | Descrição |
|------|-----------|
| Nova notificação push | Abre o formulário para criar uma notificação |
| Enviar agora | Envia uma notificação em rascunho imediatamente |
| Editar | Abre a notificação para alteração |
| Cancelar | Cancela uma notificação em rascunho |

## Como Gerenciar Notificações

1. Acesse **Notificações** no menu principal
2. Visualize a lista de notificações agrupadas por data
3. Para marcar uma notificação como lida, clique no botão de confirmação ao lado da notificação
4. Para remover uma notificação, clique no botão de lixeira ao lado da notificação
5. Utilize os filtros de período e status para localizar notificações específicas

## Como Gerenciar Notificações Push

1. Acesse **Notificações Push** dentro do módulo de notificações
2. Clique em **Nova notificação push** para abrir o formulário de cadastro
3. Informe o título, a mensagem e, se necessário, adicione uma imagem
4. Selecione o app alvo e, quando aplicável, o ponto de venda
5. Defina se o envio será imediato ou em data e hora programadas
6. Salve a notificação para mantê-la como rascunho ou para envio conforme a configuração
7. Use o menu da linha para **Enviar agora**, **Editar** ou **Cancelar** uma notificação em rascunho

### Campos da notificação push

| Campo | Descrição |
|-------|-----------|
| Título | Assunto da notificação |
| Mensagem | Texto exibido ao usuário |
| Imagem | Arquivo ou link de imagem da notificação |
| App alvo | Define o aplicativo que recebe a notificação |
| Ponto de venda | Campo usado quando o app alvo é o app do cliente |
| Enviar agora | Define se o envio acontece imediatamente |
| Data e hora para envio | Define o horário do envio quando a notificação não é enviada na hora |
