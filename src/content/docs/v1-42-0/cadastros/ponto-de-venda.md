---
title: Ponto de Venda
description: Como cadastrar e configurar pontos de venda no Despensinha ERP.
sidebar:
  order: 6
---

O **Ponto de Venda (PDV)** representa um caixa físico ou virtual onde as vendas são realizadas.

## Como Cadastrar um PDV

1. Acesse **Cadastros → Operação → Pontos de Venda**
2. Clique em **Adicionar**
3. Na aba **Geral**, escolha a **Empresa** (quando aparecer), o **Condomínio**, o **Tipo de PDV**, o **Local interno** e a localização no mapa
4. Em **Estoque**, escolha o **Centro de distribuição** de onde o estoque é baixado
5. Ajuste as abas **Travas** e **Customização**, se precisar
6. Clique em **Salvar**

A aba **Geral** mostra, ao lado do nome, a quantidade de campos obrigatórios ainda com erro.

## Campos Principais

| Campo | Descrição |
|-------|-----------|
| **Empresa** | Empresa a que o ponto de venda pertence. Aparece e é obrigatória só quando há mais de uma empresa ativa |
| **Condomínio** | Condomínio onde o PDV está instalado (obrigatório) |
| **Terminal** | Terminal associado ao PDV; a lista mostra só terminais que ainda não estão em outro ponto de venda |
| **Tipo de PDV** | **Mercado de auto atendimento** ou **Máquina de venda** (obrigatório) |
| **Local interno** | Local do PDV dentro do condomínio (obrigatório) |
| **Latitude** / **Longitude** | Preenchidas pelo botão do mapa, ao escolher a posição do ponto de venda (obrigatórias) |
| **Centro de distribuição** | Depósito de onde o estoque é baixado |
| **Estoque compartilhado** | Ponto de venda principal do mesmo condomínio cujo estoque este PDV compartilha |
| Status | Ativo / Inativo |

### Empresa e depósito

Quando há mais de uma empresa ativa, o campo **Empresa** aparece no topo da aba **Geral** e precisa ser preenchido antes de salvar. Os campos **Centro de distribuição** e **Estoque compartilhado** ficam bloqueados até a empresa ser escolhida e passam a listar apenas os depósitos e pontos de venda dessa empresa. Ao trocar a empresa, os dois campos são limpos para uma nova escolha.

Com uma empresa só, o campo **Empresa** não aparece e o ponto de venda fica com essa empresa.

Na edição de um ponto de venda, a **Empresa** aparece bloqueada e não pode ser trocada.

## Tema do Aplicativo

Na aba **Customização**, o card **Tema do Aplicativo** define as cores usadas no POS e no EasyPDV Touch deste PDV. Cor não definida usa o padrão de cada app (o campo mostra **Padrão do app**).

| Campo | Descrição |
|-------|-----------|
| **Cor Primária** | Botões, ícones e destaques |
| **Cor Secundária** | Badge de quantidade e botão **Identificar-se** no EasyPDV Touch |
| **Cor Terciária** | Categoria selecionada e selos de oferta |
| **Cor da Fonte** | Textos |

Cada cor pode ser escolhida no seletor de cores ou digitada em hexadecimal (por exemplo, `#62296A`).

Ao lado das cores, a **Pré-visualização do tema** mostra, conforme as cores são alteradas, como as telas ficam em cada app. Use os botões **EasyPDV Touch** e **POS** para alternar entre os dois. A prévia reproduz as telas dos apps, com as cores calculadas da mesma forma que cada app calcula.

Um ponto de venda recém-criado já vem com as cores roxas padrão preenchidas, inclusive uma **Cor Secundária** escura (`#62296A`), para que o badge de quantidade e o botão **Identificar-se** fiquem visíveis no EasyPDV Touch.

A mesma aba também traz **Imagem de Plano de Fundo** (imagem de fundo do aplicativo do ponto de venda) e **Imagens Promocionais** (até 6 banners exibidos no app).

## Terminais

O **Terminal** (dispositivo físico) do PDV é escolhido no campo **Terminal** da aba **Geral**. Os terminais são gerenciados em **Cadastros → Operação → Terminais**.
