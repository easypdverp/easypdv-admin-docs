---
title: NF-e Saída
description: Emissão de Nota Fiscal Eletrônica de saída no Despensinha ERP.
sidebar:
  order: 4
---

A **NF-e de Saída** é o documento fiscal eletrônico emitido nas vendas para outras empresas (B2B). A emissão é feita diretamente no sistema e enviada à SEFAZ.

## Como Emitir uma NF-e de Saída

1. Acesse **Vendas → NF-e Saída** ou a partir de um Pedido de Venda confirmado
2. Preencha os dados fiscais:
   - CFOP (natureza da operação)
   - NCM dos produtos
   - Alíquotas de impostos (ICMS, PIS, COFINS, IPI)
3. Clique em **Emitir** para enviar à SEFAZ

## Campos Fiscais Importantes

| Campo | Descrição |
|-------|-----------|
| CFOP | Código Fiscal de Operações e Prestações |
| NCM | Nomenclatura Comum do Mercosul |
| ICMS | Imposto sobre Circulação de Mercadorias |
| PIS / COFINS | Contribuições federais |
| Natureza de Operação | Descrição da operação fiscal |

## Ações Disponíveis

- **Emitir**: Envia para SEFAZ e gera o XML
- **Cancelar**: Cancela a NF-e (prazo de 24h após emissão)
- **Baixar XML / DANFE**: Download dos documentos fiscais
- **Enviar por e-mail**: Envia o DANFE ao destinatário
