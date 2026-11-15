---
title: NFC-e
description: Emissão de Nota Fiscal de Consumidor Eletrônica no Despensinha ERP.
sidebar:
  order: 5
---

A **NFC-e** é o cupom fiscal eletrônico emitido nas vendas para consumidor final (B2C), geralmente no ponto de venda.

## Como Emitir uma NFC-e

1. Acesse **Vendas → Notas fiscais consumidor** e clique em **Adicionar** (botão +), ou use a ação **Gerar nota de consumidor** em um [pedido de venda](../pedidos-de-venda/)
2. Na aba **Detalhes**, confira o **Emitente**, a **Série** e a **Natureza de operação**
3. Informe o **Cliente**, se necessário
4. Na aba **Produtos e pagamento**, inclua os produtos e preencha os **Pagamentos**
5. Clique em **Salvar**
6. Na lista, use a ação **Autorizar nota fiscal** para enviar a nota à SEFAZ

## Emitente, Série e Número

A NFC-e é sempre emitida por uma empresa da conta. O campo **Emitente** aparece quando a conta tem mais de uma empresa ativa e é obrigatório; com uma única empresa ativa, o campo não é exibido e a nota é emitida por ela.

| Campo | Descrição |
|---|---|
| Emitente | Empresa que emite a nota. Só pode ser escolhido na criação; na edição, o campo apenas mostra a empresa |
| Série | Preenchida com a série padrão da NFC-e da empresa emitente. Pode ser alterada na criação e fica bloqueada na edição |
| Número | Próximo número da série na empresa emitente, preenchido pelo sistema |
| Natureza de operação | Preenchida com a natureza padrão da empresa emitente. Ao escolher a natureza, o **Regime tributário** acompanha o dela |
| Regime tributário | Regime tributário usado na nota |

Ao trocar o **Emitente** de uma nota nova, a série, o número e a natureza de operação voltam aos padrões da nova empresa.

Os dados fiscais dos produtos incluídos na nota são preenchidos a partir da natureza de operação e da empresa emitente.

## Pagamentos

Na seção **Pagamentos**, as contas financeiras disponíveis na **Conta de destino** e nas parcelas são as da empresa emitente. Ao trocar o **Emitente**, as parcelas que estavam com conta de outra empresa ficam sem conta, para que seja escolhida uma conta da nova empresa.

## Cancelamento

NFC-e pode ser cancelada em até **30 minutos** após a emissão. Após esse prazo, é necessário emitir uma NF-e de devolução.

:::note
O prazo de cancelamento de NFC-e (30 minutos) é diferente do prazo da NF-e (24 horas). Para mais detalhes, consulte a seção [FAQ — Fiscal](../../faq/#fiscal).
:::

## Consulta

Acesse **Vendas → Notas fiscais consumidor** para listar as notas, baixar o DANFE e o XML das notas emitidas. As abas **todas**, **pendente**, **autorizada**, **cancelada** e **negada** separam as notas pela situação.

Em **Filtrar**, é possível filtrar por **Empresa** (quando a conta tem mais de uma empresa ativa), **Período**, **Mês**, **Status**, **Tipo**, **Produto**, **Estado (UF)**, **Com as operações** e **Sem as operações**.

### Situação da nota

| Situação | Descrição | Ação na lista |
|---|---|---|
| Pendente | Nota salva e ainda não autorizada | **Autorizar nota fiscal** |
| Em autorização | Nota enviada à SEFAZ, aguardando o retorno | — |
| Autorizado | Nota autorizada pela SEFAZ | — |
| Negado | Nota recusada pela SEFAZ | **Reemitir nota fiscal** |
| Erro de comunicação | O envio à SEFAZ não teve resposta | **Consultar e reenviar à SEFAZ** |
| Contingência | Nota emitida em contingência | **Transmitir à SEFAZ** |
| Cancelado | Nota cancelada | — |
| Cancelado Negado | Pedido de cancelamento recusado pela SEFAZ | — |

O filtro **Status** e a ação **Alterar Situação** usam essa mesma lista. A ação **Alterar Situação** fica disponível apenas para usuários com permissão para ajustar a situação de notas.
