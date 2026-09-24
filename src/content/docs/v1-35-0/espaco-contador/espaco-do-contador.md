---
title: Espaco do Contador
description: Como utilizar o espaco do contador no Despensinha ERP.
sidebar:
  order: 1
---

O **Espaço do Contador** é a área do sistema destinada aos usuários com perfil de contador. Ele reúne ferramentas para acompanhamento fiscal, gerenciamento de acessos e envio de convites para novos contadores.

## Dashboard Fiscal

O dashboard é a tela principal do espaço do contador. Ele exibe métricas sobre notas fiscais emitidas e permite acesso rápido a arquivos fiscais.

### Filtros de Visualização

| Filtro | Descrição |
|--------|-----------|
| **Período** | Seleciona o mês de referência entre os últimos 12 meses disponíveis |
| **Tipo de Nota** | Filtra por tipo: Todas, Cupom fiscal eletrônico (NFC-e), Nota fiscal de entrada (NF-e entrada) ou Nota fiscal de saída (NF-e saída) |

### Cartões de Resumo

O dashboard exibe quatro cartões com métricas do período:

| Cartão | O que mostra |
|--------|-------------|
| **Notas Emitidas** | Total de notas emitidas e variação percentual em relação ao mês anterior |
| **Sucesso** | Quantidade de notas autorizadas e percentual de sucesso |
| **Negada** | Quantidade de notas negadas e percentual sobre o total |
| **Valor Total** | Valor monetário total das notas e variação em relação ao mês anterior |

### Downloads Rápidos

O painel de downloads rápidos oferece duas opções:

- **Baixar SPED Fiscal** — Gera e baixa o arquivo SPED Fiscal do período selecionado
- **Baixar todas as notas** — Gera e baixa um PDF consolidado com todas as notas do período

Ambos os downloads são processados em segundo plano. O sistema exibe o progresso e disponibiliza o arquivo automaticamente ao concluir.

### Tabela de Notas Fiscais

A tabela lista todas as notas fiscais do período:

| Coluna | Descrição |
|--------|-----------|
| **Número** | Número da nota fiscal |
| **Série** | Número de série |
| **Tipo** | Tipo da nota (NFC-e, NF-e entrada, NF-e saída) |
| **Destinatário** | Nome do destinatário |
| **CNPJ** | CNPJ do destinatário |
| **Data Emissão** | Data em que a nota foi emitida |
| **Valor** | Valor total da nota |
| **Status** | Pendente, Emitida, Autorizada, Negada ou Cancelada |
| **Ações** | Baixar PDF (DANFE) e baixar XML |

A tabela possui busca por fornecedor ou número da nota, paginação e filtro por status (abas).

## Gerenciar Acessos

A página de acessos permite visualizar e gerenciar os usuários vinculados ao espaço do contador.

Para acessar, navegue até **Espaço Contador -> Acessos** no menu lateral.

### Tabela de Acessos

| Coluna | Descrição |
|--------|-----------|
| **Login** | Login do usuário |
| **Situação** | Ativo ou Inativo |
| **Perfil** | Perfil de acesso do usuário |
| **Data Atualização** | Data da última alteração |
| **Ações** | Alterar senha, Remover ou Ativar/Desativar |

A tabela possui busca por nome ou login. É possível exportar os dados em PDF ou CSV.

### Ações Disponíveis

- **Alterar senha** — Redefine a senha de acesso do usuário
- **Remover** — Remove o acesso do usuário ao espaço do contador
- **Ativar/Desativar** — Alterna o status do acesso entre ativo e inativo

## Gerenciar Convites

A página de convites permite enviar e gerenciar convites para novos contadores acessarem o sistema.

Para acessar, navegue até **Espaço Contador -> Convites** no menu lateral.

### Enviar Novo Convite

1. Na página de convites, localize o formulário de envio no topo
2. Informe o **e-mail** do convidado
3. Clique em **Enviar convite**
4. O sistema envia um e-mail com o link de aceite ao destinatário

### Tabela de Convites

| Coluna | Descrição |
|--------|-----------|
| **E-mail** | E-mail do convidado e perfil de acesso |
| **Status** | Pendente, Aceito, Expirado ou Cancelado |
| **Criado por** | Nome de quem enviou o convite |
| **Validade** | Data de expiração do convite |
| **Data de Envio** | Data e hora do envio |
| **Ações** | Copiar link, Reenviar, Cancelar ou Remover |

### Ações por Status

| Status do Convite | Ações Disponíveis |
|-------------------|-------------------|
| **Pendente e válido** | Copiar link, Reenviar, Cancelar |
| **Expirado ou Cancelado** | Remover |
| **Aceito** | Nenhuma ação disponível |