---
title: Pedidos de Compra
description: Como criar e gerenciar pedidos de compra no Despensinha ERP.
sidebar:
  order: 2
---

Os **Pedidos de Compra** (no sistema, **Ordens de compra**) registram as solicitações de reposição de estoque feitas a fornecedores.

Para ver o que precisa ser comprado e gerar várias ordens de uma vez, use a [Necessidade de compra](../necessidade-de-compra/).

## Como Criar um Pedido de Compra

1. Acesse **Suprimentos → Ordens de compra**
2. Clique em **Adicionar**
3. Selecione o **Fornecedor** e, quando houver mais de uma empresa ativa, a **Empresa** compradora
4. Adicione os produtos: item, quantidade e preço unitário
5. Defina a **Data prevista** de entrega
6. Clique em **Salvar**

### Empresa

O campo **Empresa** indica qual empresa faz a compra e é obrigatório quando há mais de uma empresa ativa. Com uma única empresa ativa, o campo não aparece e a ordem fica com ela. Ao trocar a empresa, as parcelas mantêm só as contas financeiras daquela empresa. A empresa aparece no card **Geral** dos detalhes da ordem.

### Item, IPI e total

Ao adicionar ou editar um produto, o modal mostra dois valores separados:

| Campo | Descrição |
|-------|-----------|
| **Total do item** | Quantidade × preço unitário. O total do item não inclui o IPI |
| **IPI do item** | Percentual de IPI aplicado sobre o total do item, descontado o desconto do item |

Nos **Totais da compra**, o IPI entra uma única vez no total da ordem:

**Total Geral** = **Total dos produtos** − descontos + **Frete** + **Total IPI**

As parcelas partem do total com IPI. Nos detalhes da ordem, a tabela de itens mostra as colunas **IPI %** e **IPI (R$)** de cada item.

## Status

| Status | Descrição |
|--------|-----------|
| Em aberto | Em elaboração; pode ser editada, aprovada, cancelada ou removida |
| Aprovado | Aprovada para compra; a quantidade passa a contar como "em pedido" na Necessidade de compra |
| Faturado | Ordem faturada |
| Cancelado | Ordem cancelada |

A lista tem abas por situação (**todas**, **em aberto**, **aprovado**, **faturado**, **cancelado**), cada uma com o valor total das ordens.

## Filtros

Clique em **Filtrar** na lista de ordens de compra, preencha os campos e clique em **Aplicar**:

| Campo | Descrição |
|-------|-----------|
| **Empresa** | Uma ou mais empresas compradoras. Só aparece quando há mais de uma empresa ativa |
| **Período** | Intervalo de datas |
| **Mês** | Mês de referência |
| **Situação** | Situação da ordem |
| **Produto** | Ordens que contêm o produto |
| **Valor** | Faixa de valor da ordem, com **Valor mínimo** e **Valor máximo**. Deixe o máximo vazio para não limitar |
| **Fornecedor** | Busca por nome, CPF ou CNPJ |
| **Origem** | Como a ordem foi criada |
| **Marcadores** | Digite o marcador e pressione Enter |

## Exportar e enviar

A ação **Exportar e enviar**, no menu de cada ordem da lista ou dos detalhes, gera o documento da ordem para o fornecedor. À direita fica a **Prévia dos itens**, com uma amostra dos itens e das colunas escolhidas; o arquivo completo é gerado ao baixar, imprimir ou enviar.

Escolha como usar o documento:

| Opção | Descrição |
|-------|-----------|
| **Baixar** | Escolha o formato (**PDF**, pronto para conferir, ou **XLSX**, planilha para negociar) e clique em **Baixar PDF** ou **Baixar XLSX**. O PDF também pode ser impresso por **Preparar PDF para imprimir** |
| **E-mail** | Informe os **Destinatários** (separados por vírgula ou ponto e vírgula), o **Assunto**, a **Mensagem do e-mail** e os **Anexos** (PDF, XLSX ou ambos) e clique em **Enviar e-mail**. Exige o envio de e-mails configurado na empresa |
| **WhatsApp** | Informe o **WhatsApp do fornecedor** (com +, código do país e DDD) e a **Mensagem do WhatsApp**, clique em **Preparar link** e depois em **Abrir WhatsApp**. O endereço do documento é incluído na mensagem, e o envio é concluído no próprio WhatsApp |

Em **Personalizar arquivo**, ajuste o conteúdo do documento:

- **Informações do documento**: **Exibir valores**, **Condições de pagamento**, **Entrega e frete**, **Observações do pedido** e **Observações dos itens**. Sem **Exibir valores**, preços, descontos e totais ficam ocultos.
- **Ordenar itens por**: **Sequência da ordem**, **Descrição** ou **Código interno**.
- **Colunas dos itens**: **Código interno**, **Código do fornecedor**, **EAN**, **Descrição**, **Unidade**, **Quantidade**, **Preço unitário**, **Desconto** e **Total**. **Descrição**, **Unidade** e **Quantidade** são obrigatórias. No XLSX, também é possível renomear e reordenar as colunas.

As opções partem do padrão da empresa; **Restaurar padrão da empresa** desfaz as alterações. Se você fechar o modal durante a geração, ela continua em Tarefas.

## Recebimento

Após a entrega, faça o recebimento lançando a **NF-e de Entrada** correspondente, que atualiza automaticamente o saldo de estoque.
