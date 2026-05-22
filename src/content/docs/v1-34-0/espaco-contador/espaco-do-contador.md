---
title: Espaco do Contador
description: Como utilizar o espaco do contador no Despensinha ERP.
sidebar:
  order: 1
---

O **Espaco do Contador** e a area do sistema destinada aos usuarios com perfil de contador. Ele reune ferramentas para acompanhamento fiscal, gerenciamento de acessos e envio de convites para novos contadores.

## Dashboard Fiscal

O dashboard e a tela principal do espaco do contador. Ele exibe metricas sobre notas fiscais emitidas e permite acesso rapido a arquivos fiscais.

### Filtros de Visualizacao

| Filtro | Descricao |
|--------|-----------|
| **Periodo** | Seleciona o mes de referencia (ultimos 12 meses disponiveis) |
| **Tipo de Nota** | Filtra por tipo: Todas, Cupom fiscal eletronico (NFC-e), Nota fiscal de entrada (NF-e entrada) ou Nota fiscal de saida (NF-e saida) |

### Cartoes de Resumo

O dashboard exibe quatro cartoes com metricas do periodo:

| Cartao | O que mostra |
|--------|-------------|
| **Notas Emitidas** | Total de notas emitidas e variacao percentual em relacao ao mes anterior |
| **Sucesso** | Quantidade de notas autorizadas e percentual de sucesso |
| **Negada** | Quantidade de notas negadas e percentual sobre o total |
| **Valor Total** | Valor monetario total das notas e variacao em relacao ao mes anterior |

### Downloads Rapidos

O painel de downloads rapidos oferece duas opcoes:

- **Baixar SPED Fiscal** -- Gera e baixa o arquivo SPED Fiscal do periodo selecionado
- **Baixar todas as notas** -- Gera e baixa um PDF consolidado com todas as notas do periodo

Ambos os downloads sao processados em segundo plano. O sistema exibe o progresso e disponibiliza o arquivo automaticamente ao concluir.

### Tabela de Notas Fiscais

A tabela lista todas as notas fiscais do periodo:

| Coluna | Descricao |
|--------|-----------|
| **Numero** | Numero da nota fiscal |
| **Serie** | Numero de serie |
| **Tipo** | Tipo da nota (NFC-e, NF-e entrada, NF-e saida) |
| **Destinatario** | Nome do destinatario |
| **CNPJ** | CNPJ do destinatario |
| **Data Emissao** | Data em que a nota foi emitida |
| **Valor** | Valor total da nota |
| **Status** | Pendente, Emitida, Autorizada, Negada ou Cancelada |
| **Acoes** | Baixar PDF (DANFE) e baixar XML |

A tabela possui busca por fornecedor ou numero da nota, paginacao e filtro por status (abas).

## Gerenciar Acessos

A pagina de acessos permite visualizar e gerenciar os usuarios vinculados ao espaco do contador.

Para acessar, navegue ate **Espaco Contador -> Acessos** no menu lateral.

### Tabela de Acessos

| Coluna | Descricao |
|--------|-----------|
| **Login** | Login do usuario |
| **Situacao** | Ativo ou Inativo |
| **Perfil** | Perfil de acesso do usuario |
| **Data Atualizacao** | Data da ultima alteracao |
| **Acoes** | Alterar senha, Remover ou Ativar/Desativar |

A tabela possui busca por nome ou login. E possivel exportar os dados em PDF ou CSV.

### Acoes Disponiveis

- **Alterar senha** -- Redefine a senha de acesso do usuario
- **Remover** -- Remove o acesso do usuario ao espaco do contador
- **Ativar/Desativar** -- Alterna o status do acesso entre ativo e inativo

## Gerenciar Convites

A pagina de convites permite enviar e gerenciar convites para novos contadores acessarem o sistema.

Para acessar, navegue ate **Espaco Contador -> Convites** no menu lateral.

### Enviar Novo Convite

1. Na pagina de convites, localize o formulario de envio no topo
2. Informe o **e-mail** do convidado
3. Clique em **Enviar convite**
4. O sistema envia um e-mail com o link de aceite ao destinatario

### Tabela de Convites

| Coluna | Descricao |
|--------|-----------|
| **E-mail** | E-mail do convidado e perfil de acesso |
| **Status** | Pendente, Aceito, Expirado ou Cancelado |
| **Criado por** | Nome de quem enviou o convite |
| **Validade** | Data de expiracao do convite |
| **Data de Envio** | Data e hora do envio |
| **Acoes** | Copiar link, Reenviar, Cancelar ou Remover |

### Acoes por Status

| Status do Convite | Acoes Disponiveis |
|-------------------|-------------------|
| **Pendente e valido** | Copiar link, Reenviar, Cancelar |
| **Expirado ou Cancelado** | Remover |
| **Aceito** | Nenhuma acao disponivel |
