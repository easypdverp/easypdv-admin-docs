---
title: Agenda
description: Como visualizar, criar, editar e remover compromissos na Agenda do Despensinha ERP.
sidebar:
  order: 2
---

A **Agenda** reúne os compromissos do estabelecimento em um calendário. Nela é possível acompanhar os compromissos por mês, semana ou dia, cadastrar novos compromissos, indicar os funcionários envolvidos e consultar, editar ou remover compromissos existentes.

## Acessando a Agenda

Acesse **Início → Agenda**. A tela abre com o título **Calendário**, exibindo o mês atual, e o botão **Adicionar Compromisso** fica no topo da página.

> O acesso à Agenda depende das permissões do usuário. Caso o item não apareça no menu, entre em contato com o administrador do sistema.

## Navegando pelo calendário

Na parte superior do calendário ficam os controles de navegação:

| Controle | Descrição |
|----------|-----------|
| Setas (esquerda e direita) | Avançam ou voltam um mês, uma semana ou um dia, conforme a visualização ativa |
| **Hoje** | Retorna o calendário para a data atual |
| Título central | Mostra o período exibido, como o mês e o ano ou o intervalo da semana |
| **Mês**, **Semana** e **Dia** | Alternam a visualização do calendário. A visualização ativa fica destacada |

O dia atual aparece destacado com um círculo colorido em todas as visualizações.

## Visualizações

### Mês

A visualização **Mês** exibe uma grade com os dias do mês organizados de domingo a sábado. Os dias que pertencem aos meses anterior e seguinte aparecem esmaecidos.

- Cada dia mostra até três compromissos. Compromissos com horário exibem a hora de início antes da descrição.
- Quando o dia tem mais de três compromissos, aparece a indicação **mais N...**. Clique nela para abrir a lista **Todos os compromissos**, com todos os compromissos do dia.
- Clicar em uma área vazia do dia abre o cadastro de um novo compromisso já com essa data preenchida.

### Semana e Dia

As visualizações **Semana** e **Dia** exibem os compromissos em uma grade de horários, de 00:00 às 23:00, no fuso **GMT-03**. A **Semana** mostra os sete dias, de domingo a sábado, e o **Dia** mostra apenas a data selecionada.

- A linha **Todo o dia**, no topo da grade, reúne os compromissos marcados como dia inteiro, com até três por dia e a indicação **mais N...** para os demais.
- Os demais compromissos aparecem na linha da hora em que começam, com até dois por horário. Quando há mais, clique em **mais N...** para ver a lista completa.
- Clicar em um horário vazio abre o cadastro de um novo compromisso já com a data e o horário preenchidos: o início na hora clicada e o término uma hora depois.

Em todas as visualizações, os compromissos de dia inteiro aparecem primeiro e os demais seguem em ordem de horário de início. Cada compromisso é exibido na sua data de início, com a cor de fundo escolhida no cadastro.

### Agenda em telas menores

Em celulares e telas estreitas, a Agenda é exibida em formato compacto:

- O calendário mostra sempre o mês, e as setas ao lado do título avançam ou voltam um mês.
- Os dias que têm compromissos exibem um pequeno marcador abaixo do número.
- Toque em um dia para selecioná-lo. A lista **Compromissos do dia** abaixo do calendário mostra os compromissos da data selecionada, com o horário de início quando houver. Se não houver compromissos, aparece a mensagem **Nenhum compromisso.**
- O botão **Adicionar Compromisso** ocupa toda a largura da tela e abre o cadastro já com a data selecionada.

## Como criar um compromisso

1. Acesse **Início → Agenda**
2. Clique no botão **Adicionar Compromisso**, ou clique em um dia ou horário vazio do calendário
3. Na janela **Adicionar Compromisso**, preencha os dados:
   - **Descrição** (obrigatório) -- texto que identifica o compromisso no calendário
   - **Localização** -- local do compromisso
   - **Cor de fundo** -- cor usada para exibir o compromisso no calendário
   - **Para os funcionários** -- funcionários envolvidos no compromisso
   - **O dia todo** -- marque para que o compromisso ocupe o dia inteiro, sem horário
   - **Data de início** (obrigatório) -- data em que o compromisso começa
   - **Horário de início** (obrigatório quando **O dia todo** está desmarcado) -- hora em que o compromisso começa
   - **Data de término** (obrigatório) -- data em que o compromisso termina
   - **Horário de término** (obrigatório quando **O dia todo** está desmarcado) -- hora em que o compromisso termina
   - **Notas adicionais** -- observações sobre o compromisso
4. Clique em **Salvar**

Ao salvar, o sistema exibe a mensagem **Compromisso adicionado com sucesso** e o compromisso passa a aparecer no calendário. Para desistir do cadastro, clique em **Cancelar**.

### Campos do compromisso

| Campo | Descrição |
|-------|-----------|
| **Descrição** | Texto exibido no calendário para identificar o compromisso |
| **Localização** | Local onde o compromisso acontece |
| **Cor de fundo** | Cor do compromisso no calendário: Azul, Cinza, Verde, Amarelo, Vermelho, Roxo, Ciano, Preto, Indigo ou Laranja. A cor padrão é Azul |
| **Para os funcionários** | Lista de funcionários envolvidos. Digite o nome para buscar e selecione um ou mais funcionários |
| **O dia todo** | Indica que o compromisso ocupa o dia inteiro. Quando marcado, os campos de horário ficam ocultos |
| **Data de início** | Data em que o compromisso começa |
| **Horário de início** | Hora de início, exibida apenas para compromissos que não são de dia inteiro |
| **Data de término** | Data em que o compromisso termina |
| **Horário de término** | Hora de término, exibida apenas para compromissos que não são de dia inteiro |
| **Notas adicionais** | Observações e informações complementares |

### Valores preenchidos automaticamente

| Como o cadastro foi aberto | Valores iniciais |
|----------------------------|------------------|
| Botão **Adicionar Compromisso** | Data atual, com **O dia todo** marcado |
| Clique em um dia da visualização **Mês** | Data clicada, com **O dia todo** marcado |
| Clique em um horário das visualizações **Semana** ou **Dia** | Data clicada, com **O dia todo** desmarcado, início na hora clicada e término uma hora depois |
| Botão **Adicionar Compromisso** em telas menores | Dia selecionado no calendário, com **O dia todo** marcado |

Quando **O dia todo** é desmarcado manualmente, os horários sugeridos são 10:00 para o início e 11:00 para o término.

## Visualizando os detalhes de um compromisso

Clique em um compromisso no calendário, na lista **Todos os compromissos** ou na lista **Compromissos do dia** para abrir a janela **Detalhes do Compromisso**. Ela exibe:

| Campo | Descrição |
|-------|-----------|
| **Descrição** | Texto do compromisso |
| **Localização** | Local do compromisso, exibido apenas quando informado |
| **Para os funcionários** | Funcionários envolvidos. Quando nenhum foi informado, aparece **Nenhum funcionário selecionado** |
| **O dia todo** | Indica se o compromisso ocupa o dia inteiro |
| **Data de início** e **Horário de início** | Data e hora de início. O horário não aparece em compromissos de dia inteiro |
| **Data de término** e **Horário de término** | Data e hora de término. O horário não aparece em compromissos de dia inteiro |
| **Cor de fundo** | Cor usada no calendário |
| **Notas adicionais** | Observações, exibidas apenas quando informadas |

Na parte inferior da janela ficam os botões **Editar** (ícone de lápis), **Excluir** (ícone de lixeira) e **Fechar**.

## Editando um compromisso

1. Clique no compromisso no calendário para abrir os detalhes
2. Clique no botão **Editar** (ícone de lápis)
3. Na janela **Editar Compromisso**, altere os campos necessários. Os campos e as regras de preenchimento são os mesmos do cadastro
4. Clique em **Salvar**

Ao salvar, o sistema exibe a mensagem **Compromisso alterado com sucesso** e o calendário é atualizado.

## Removendo um compromisso

1. Clique no compromisso no calendário para abrir os detalhes
2. Clique no botão **Excluir** (ícone de lixeira)
3. Na janela **Remover compromisso**, confirme clicando em **Remover compromisso**

Ao confirmar, o sistema exibe a mensagem **Compromisso removido com sucesso** e o compromisso deixa de aparecer no calendário. Para desistir, clique em **Cancelar**.
