---
title: NF-e Saída
description: Emissão de Nota Fiscal Eletrônica de saída no Despensinha ERP.
sidebar:
  order: 4
---

A **NF-e de Saída** é o documento fiscal eletrônico emitido nas vendas para outras empresas (B2B). A emissão é feita diretamente no sistema e enviada à SEFAZ.

## Como Emitir uma NF-e de Saída

1. Acesse **Vendas → Notas de saída** e clique em **Adicionar** (botão +), ou use a ação **Gerar nota de saída** em um [pedido de venda](../pedidos-de-venda/)
2. Na seção **Geral**, confira o **Emitente**, o **Tipo de Entrada**, a **Série** e a **Natureza de operação**
3. Preencha os dados fiscais:
   - CFOP (natureza da operação)
   - NCM dos produtos
   - Alíquotas de impostos (ICMS, PIS, COFINS, IPI)
4. Inclua os produtos e preencha os **Pagamentos**
5. Clique em **Salvar**
6. Na lista, use a ação **Autorizar nota fiscal** para enviar a nota à SEFAZ

## Emitente, Série e Natureza de Operação

A NF-e de saída é sempre emitida por uma empresa da conta. O campo **Emitente** aparece quando a conta tem mais de uma empresa ativa e é obrigatório; com uma única empresa ativa, o campo não é exibido e a nota é emitida por ela.

| Campo | Descrição |
|-------|-----------|
| Emitente | Empresa que emite a nota. Só pode ser escolhido na criação; na edição, o campo apenas mostra a empresa |
| Tipo de Entrada | **Emissão Própria**, **Terceiros** ou **Exportação** |
| Série | Na emissão própria, preenchida com a série padrão da NF-e da empresa emitente e bloqueada na edição. Na nota de terceiros, é informada manualmente |
| Número | Na emissão própria, próximo número da série na empresa emitente, preenchido pelo sistema |
| Natureza de operação | Preenchida com a natureza padrão da empresa emitente. Ao escolher a natureza, o **Regime tributário** acompanha o dela |
| Regime tributário | Regime tributário usado na nota |

Ao trocar o **Emitente** de uma nota nova, a natureza de operação volta ao padrão da nova empresa e, na emissão própria, a série e o número também. Os dados fiscais dos produtos incluídos na nota são preenchidos a partir da natureza de operação e da empresa emitente.

Quando o **Regime tributário** da nota é diferente do regime cadastrado para a empresa emitente, o formulário exibe o aviso **Regime tributário divergente**, indicando os dois regimes. Nesse caso, confira a natureza de operação ou o cadastro da empresa.

## Pagamentos

Na seção **Pagamentos**, as contas financeiras disponíveis na **Conta de destino** e nas parcelas são as da empresa emitente. Ao trocar o **Emitente**, as parcelas que estavam com conta de outra empresa ficam sem conta, para que seja escolhida uma conta da nova empresa.

## Campos Fiscais Importantes

| Campo | Descrição |
|-------|-----------|
| CFOP | Código Fiscal de Operações e Prestações |
| NCM | Nomenclatura Comum do Mercosul |
| ICMS | Imposto sobre Circulação de Mercadorias |
| PIS / COFINS | Contribuições federais |
| Natureza de Operação | Descrição da operação fiscal |

## Ações Disponíveis

- **Autorizar nota fiscal**: Envia a nota pendente à SEFAZ
- **Reemitir nota fiscal**: Reenvia uma nota negada
- **Cancelar**: Cancela a NF-e autorizada (prazo de 24h após emissão)
- **Baixar XML / Baixar DANFE**: Download dos documentos fiscais
- **Emitir nota de devolução**: Abre a nota de devolução de uma NF-e autorizada

## Situação da Nota

| Situação | Descrição |
|----------|-----------|
| Pendente | Nota salva e ainda não autorizada |
| Em autorização | Nota enviada à SEFAZ, aguardando o retorno |
| Autorizado | Nota autorizada pela SEFAZ |
| Negado | Nota recusada pela SEFAZ |
| Erro de comunicação | O envio à SEFAZ não teve resposta |
| Contingência | Nota emitida em contingência |
| Cancelado | Nota cancelada |
| Cancelado Negado | Pedido de cancelamento recusado pela SEFAZ |

O filtro **Status** da lista e a ação **Alterar Situação** usam essa mesma lista de situações.

Em **Filtrar**, também é possível filtrar por **Empresa** (quando a conta tem mais de uma empresa ativa), **Período**, **Mês**, **Tipo**, **Finalidade**, **Produto**, **Estado (UF)**, **Com as operações** e **Sem as operações**.

## Nota de Devolução

A ação **Emitir nota de devolução**, disponível para notas com situação **Autorizado**, abre a janela **Nota de devolução** em três etapas:

1. **Fiscal e transporte**: escolha a **Natureza de operação** de devolução e, se quiser, preencha **Motivo/observações (opcional)** e os dados do transportador
2. **Produtos e movimentações**: marque os itens a devolver e as quantidades. Opcionalmente, ative **Movimentar financeiro** para registrar o reembolso
3. **Revisão e emissão**: confira os dados e clique em **Salvar** ou em **Salvar e emitir NF-e**

A lista de produtos mostra apenas os itens que ainda têm saldo devolvível, com as colunas **Qtd. original**, **Já devolvida**, **Saldo** e **Qtd. a devolver**. O botão **Selecionar todo o saldo devolvível** marca todos os itens com a quantidade restante. Quando todos os itens da nota já foram devolvidos, a janela mostra a mensagem **Todos os itens já foram devolvidos** e não permite seguir.

Com **Movimentar financeiro** ativado, preencha:

| Campo | Descrição |
|-------|-----------|
| Forma de pagamento | Forma usada no reembolso |
| Conta financeira | Conta ativa da empresa emitente da nota de origem |
| Data | Data do lançamento |
| Valor financeiro | Valor do reembolso |
| Observação | Texto livre (opcional) |

O reembolso é lançado ao salvar a devolução.
