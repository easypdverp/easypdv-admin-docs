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

## Sino de notificações

O sino no topo da tela abre um painel com as abas **Notificações** e **Tarefas**. A aba **Notificações** mostra as notificações não lidas, com a contagem (por exemplo, **3 não lidas**) e o botão **Ver todas**, que leva à listagem completa. O painel acompanha o tema claro ou escuro escolhido no sistema.

Cada notificação mostra o ícone do tipo, o título, há quanto tempo foi registrada e um trecho da descrição. Algumas notificações recebem uma etiqueta de situação:

| Situação | Descrição |
|----------|-----------|
| **Urgente** | Aviso que pede atenção imediata. O ícone fica em vermelho |
| **Resolvida** | Aviso urgente cujo problema já foi resolvido. O ícone fica em verde. Quando um aviso urgente é resolvido, prevalece a etiqueta **Resolvida** |

### Abrir a origem da notificação

Ao clicar em uma notificação, ela é marcada como lida e o sistema abre a tela onde o assunto pode ser tratado:

| Origem da notificação | Tela aberta |
|-----------------------|-------------|
| Pedido de venda | Detalhes do pedido de venda |
| Picklist | Detalhes da picklist |
| Operação de inventário | Detalhes da operação de inventário |
| Ponto de venda | Edição do ponto de venda |
| Terminal | Edição do terminal |
| Pesquisa de satisfação | Resultados da pesquisa de satisfação |
| Produto | Edição do produto no catálogo |
| Estoque de produto | Estoque do produto em **Controle de estoques** |

Quando a notificação não tem uma origem dessas, mas está ligada a um ponto de venda, o clique abre a edição desse ponto de venda. Sem origem nem ponto de venda, a notificação é apenas marcada como lida.

### Resumo do dia

A notificação de resumo do dia mostra, no próprio sino, as informações organizadas por ponto de venda: o nome do ponto de venda em destaque e, abaixo, uma linha para cada assunto. O sino exibe as duas primeiras seções; quando há mais, aparece a indicação **Mais N seções**.

Ao clicar no resumo, ele é marcado como lido e abre em uma janela com todas as seções.

Quando uma linha traz o link **Gerar picklist**, ele abre a tela de **Picklists** com o cadastro de uma nova picklist já aberto para o ponto de venda daquela seção. O link aparece tanto no sino quanto na janela do resumo e só abre o cadastro para quem tem acesso à gestão de picklists.

## Preferências de notificação

Cada usuário escolhe quais tipos de notificação quer receber no sino:

1. Abra o menu do usuário e clique em **Configurações da conta**
2. Acesse a aba **Notificações**
3. Desligue os tipos que não quer receber; cada tipo tem uma descrição do que ele avisa

As notificações urgentes chegam sempre, mesmo quando o tipo está desligado.

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
