---
title: Necessidade de compra
description: Como ver o que comprar e gerar as ordens de compra a partir da Necessidade de compra no Despensinha ERP.
sidebar:
  order: 2.5
---

A **Necessidade de compra** mostra o que precisa ser comprado, produto a produto, e gera as ordens de compra a partir da seleção. Acesse em **Suprimentos → Necessidade de compra**.

## Filtros

Os filtros ficam no card do topo da tela. Ajuste os campos e clique em **Gerar relatório** para atualizar a lista.

| Campo | Descrição |
|-------|-----------|
| **Origem** | De onde sai a quantidade sugerida: **Vendas** (pela média de saída) ou **Planograma** (pelo desejado no planograma do ponto de venda) |
| **Ponto de venda** | Só na origem **Planograma**: o ponto de venda com planograma a considerar |
| **Considerar saídas dos últimos** | Só na origem **Vendas**: período usado para calcular a média de saída (30, 60 ou 90 dias) |
| **Calcular estoque para** | Só na origem **Vendas**: quantos dias de estoque a compra deve cobrir (7, 15, 30, 60 ou 90 dias) |
| **Pontos de venda** | Só na origem **Vendas**: os pontos de venda considerados. Sem nenhum escolhido, a lista considera todos |
| **Categorias** | Limita a lista às categorias escolhidas. Sem nenhuma escolhida, considera todas |
| **Produtos** | Limita a lista aos produtos escolhidos (busca por nome, SKU ou código de barras) |
| **Fornecedor padrão** | Mostra só os produtos daquele fornecedor padrão. A opção **Sem fornecedor** mostra os produtos sem fornecedor cadastrado |
| **Apenas produtos zerados** | Mostra só os produtos sem estoque |
| **Apenas produtos em excesso** | Só na origem **Vendas**: mostra os produtos com estoque acima do ideal (veja [Produtos em excesso](#produtos-em-excesso)) |
| **Com venda nos últimos** | Ao marcar, mostra só os produtos que tiveram venda no período escolhido ao lado (7, 15, 30, 60 ou 90 dias) |

Abaixo dos campos, um texto explica como a sugestão é calculada para a origem escolhida:

- **Vendas**: a sugestão é a quantidade para cobrir os dias escolhidos pela média de saída, descontando o que está em pedido (só ordens aprovadas).
- **Planograma**: a sugestão é o desejado no planograma, menos o atual, menos o que está em pedido (só ordens aprovadas).

Na origem **Planograma**, a tela já abre com o primeiro ponto de venda que tem planograma. Se nenhum ponto de venda tiver planograma, a tela avisa para cadastrar um ou usar a origem **Vendas**.

## Lista de produtos

Acima da lista aparece um resumo com quantos produtos há para comprar e quantos estão parados. A lista pode ser exportada pelo botão **Exportar**, e o arquivo traz os filtros usados no cabeçalho.

| Coluna | Descrição |
|--------|-----------|
| **Produto** | Descrição, SKU e categoria. Quando o produto não tem fornecedor, aparece o aviso "sem fornecedor cadastrado" |
| **Última venda** | Há quantos dias o produto foi vendido pela última vez. Produto sem venda há mais de 30 dias recebe o selo **Parado** |
| **Atual** | Estoque atual, em vermelho quando está igual ou abaixo do estoque mínimo |
| **Cobertura** | Origem **Vendas**: quantos dias o estoque atual cobre e a situação do produto |
| **Desejado** | Origem **Planograma**: quantidade desejada no planograma |
| **Sugerida** | Quantidade sugerida para compra. Quando já existe quantidade em pedido, mostra quanto foi descontado |
| **Comprar** | Quantidade que será comprada. Começa com a sugestão e pode ser alterada |
| **Fornecedor** | Fornecedor padrão do produto, ou o selo **Sem fornecedor** |
| **Custo est.** | Custo estimado da compra, pela quantidade em **Comprar** e o custo do vínculo com o fornecedor |

### Ordenar por coluna

Clique no título de uma coluna para ordenar a lista por ela. As colunas **Produto**, **Última venda**, **Atual**, **Desejado**, **Cobertura** e **Sugerida** permitem ordenação.

### Agrupar por

Em **Agrupar por**, escolha como a lista é organizada:

- **Produto**: os produtos em uma lista única, com os parados reunidos no grupo **Parados** no fim. Antes de comprar um produto parado, confira se ele ainda está em linha.
- **Fornecedor**: um grupo por fornecedor padrão, com o grupo **Sem fornecedor** primeiro. Cada grupo mostra o subtotal estimado e o atalho **Gerar só esta ordem**. No grupo **Sem fornecedor**, o atalho **Definir fornecedor** abre a revisão para escolher um.

Os grupos podem ser recolhidos e expandidos.

### Detalhes do produto

Expanda a linha para ver os números por trás da sugestão:

- Origem **Vendas**: **Média de saída/dia**, **Saídas no período**, **Estoque mínimo**, **Estoque ideal** e **Lead time**.
- Origem **Planograma**: **Desejado no planograma**, **Estoque mínimo**, **Atual no PDV**, **Vendas em 30 dias** e **Em pedido (aprovado)**.
- **Fornecedor padrão**, com o custo e o código do produto no fornecedor.
- **Ordens de compra** do produto, com a situação de cada uma e se ela já desconta da sugestão (só as aprovadas descontam).

## Situação da cobertura

Na origem **Vendas**, a coluna **Cobertura** mostra um selo com a situação do produto, que vai de sem estoque até estoque suficiente. A situação **Excesso** indica estoque acima do ideal para os dias escolhidos, ou acima do mínimo sem nenhuma saída no período.

## Produtos em excesso

Marque **Apenas produtos em excesso** (origem **Vendas**) para listar só os produtos com situação **Excesso**. Nesse modo a lista é só de consulta: não há seleção nem geração de ordens, e as colunas mostradas são **Produto**, **Última venda**, **Atual**, **Giro/dia**, **Cobertura** e **Fornecedor**.

As opções **Apenas produtos zerados** e **Apenas produtos em excesso** não podem ficar marcadas ao mesmo tempo.

## Como gerar ordens de compra

1. Marque os produtos que deseja comprar. Digitar uma quantidade em **Comprar** também marca o produto. A seleção é mantida ao trocar de página, de filtro ou de agrupamento.
2. Confira a barra no rodapé da lista, que mostra o número de itens, as unidades, o valor estimado e quantos itens estão sem custo ou sem fornecedor.
3. Clique em **Gerar**: o botão mostra quantas ordens serão geradas, uma por fornecedor (por exemplo, **Gerar 2 ordens de compra**). Quando nenhum item selecionado tem fornecedor, o botão é **Revisar compra**. Para desfazer a seleção, use **Limpar seleção**.
4. Na tela **Revisar compra**, confira cada ordem (veja abaixo).
5. Clique em **Criar** (por exemplo, **Criar 2 ordens de compra**).

Trocar a **Origem** ou o **Ponto de venda** do planograma recomeça a seleção.

### Revisar compra

A revisão mostra, à esquerda, um cartão por ordem que será criada (uma por fornecedor), com o total, o número de itens e a entrega prevista, e o **Total da compra** de todas as ordens. À direita, ficam os dados da ordem escolhida:

| Campo | Descrição |
|-------|-----------|
| **Empresa** | A empresa que compra todas as ordens geradas. Só aparece quando há mais de uma empresa ativa |
| **Previsão de entrega** | Sugerida a partir do maior lead time entre os itens da ordem |
| **Condição de pagamento** | Vem preenchida com a condição de pagamento do fornecedor |
| **Observação para o fornecedor** | Texto opcional |

Na tabela de itens, ajuste **Comprar** e **Custo unit.** de cada produto. Com o custo vazio, a ordem usa o custo médio. No menu de cada item:

- **Mover para outro fornecedor**: leva o item para a ordem de outro fornecedor.
- **Tirar da compra**: remove o item da revisão.

Os itens sem fornecedor ficam no cartão **Sem fornecedor** e ficam de fora até que um fornecedor seja escolhido em **Escolher fornecedor**.

### Resultado

Depois de criar, a tela mostra as ordens criadas, com número, fornecedor, itens, entrega prevista, situação e valor. As ordens são criadas **Em aberto**; o estoque só entra quando a mercadoria for recebida e lançada.

- **Abrir**: abre a ordem de compra.
- **Aprovar agora** (com mais de uma ordem, **Aprovar as N agora**): aprova as ordens criadas.
- **Ver ordens de compra**: vai para a lista de [Ordens de compra](../pedidos-de-compra/).
- **Definir fornecedor**: quando algum item ficou de fora por falta de fornecedor, volta à revisão para escolher um.
- **Voltar à necessidade**: volta para a lista, já sem os itens que viraram ordem.
