---
title: Estoque
description: Controle de saldo e movimentações de estoque no Despensinha ERP.
sidebar:
  order: 5
---

O módulo de **Estoque** exibe o saldo atual de produtos por armazém e registra as movimentações de entrada e saída.

## Consulta de Saldo

Acesse **Suprimentos → Controle de estoques** para visualizar o saldo de cada produto por depósito. Use os filtros para buscar por produto, categoria ou depósito.

### Saldo na data de referência

O relatório **Saldo de Estoque** (**Relatórios → Suprimentos → Estoque → Saldo**) mostra o saldo de cada produto em cada depósito, valorizado a custo médio e a preço de venda. Por padrão, mostra o saldo de agora; para consultar o saldo de um dia passado, preencha o filtro **Data de referência**.

| Campo | Descrição |
|-------|-----------|
| Estoque | Filtra por depósito |
| Categoria | Filtra por categoria |
| Produto | Filtra por produto |
| Situação do saldo | **Só com saldo**, **Só negativos**, **Sem custo** (saldo positivo sem custo médio) ou **Custo acima do preço** (custo médio acima do preço de venda); vazio, mostra todos |
| Data de referência | Saldo no fim do dia informado; vazio, o saldo de agora |
| Empresa | Filtra pela empresa; aparece quando há mais de uma empresa para escolher |

Com data de referência, a coluna **Físico** traz a quantidade no fim daquele dia, calculada a partir dos lançamentos, e é valorizada pelo custo médio e pelo preço de venda atuais. As colunas **Reservado** e **Disponível** não têm histórico e aparecem como "—". A data de referência e a situação escolhidas ficam registradas no cabeçalho do arquivo exportado.

## Movimentações

Cada operação que afeta o estoque gera uma movimentação registrada.

| Tipo | Origem | Permissão |
|------|--------|------------|
| Entrada | NF-e de Entrada, ajuste manual, conferência de recebimento | Suprimentos → Estoque |
| Saída | NFC-e, NF-e de Saída, ajuste manual | Suprimentos → Estoque |
| Transferência | Movimentação entre armazéns | Suprimentos → Estoque |
| Inventário | Conferência de estoque | Suprimentos → Inventário |

## Depósitos

O sistema suporta múltiplos depósitos. Cada PDV é vinculado a um depósito específico de onde o estoque é baixado nas vendas.

### Empresa do depósito e do ponto de venda

Cada depósito e cada ponto de venda pertencem a uma empresa, informada no campo **Empresa** do cadastro:

| Situação | Comportamento |
|----------|---------------|
| Uma única empresa ativa | O campo não aparece e a empresa ativa é usada automaticamente |
| Mais de uma empresa ativa | A escolha da **Empresa** é obrigatória no cadastro |
| Edição do cadastro | O campo **Empresa** aparece bloqueado; a empresa não pode ser trocada |

No cadastro do ponto de venda, a seleção de depósito mostra apenas os depósitos da empresa escolhida, e trocar a empresa limpa o depósito selecionado. As listagens de depósitos e de pontos de venda podem ser filtradas por empresa.

Nas telas de estoque, a empresa limita as transferências: não é possível transferir mercadoria entre depósitos de empresas diferentes. Nesse caso, o sistema exibe a mensagem "Entre depósitos de empresas diferentes, a mercadoria passa com nota fiscal, não por transferência".

## Abastecimento de Picklist

No fluxo de picklist, o sistema permite iniciar o abastecimento em dois formatos:

| Tipo | Descrição |
|------|-----------|
| Abastecer | Realiza apenas o abastecimento dos produtos. |
| Abastecer + Conferência | Realiza o abastecimento e também informa quantas unidades de cada produto existem no ponto de venda. |

Ao iniciar o abastecimento, escolha o tipo desejado na janela de confirmação. Durante o processo, a tela fica bloqueada até a conclusão da operação.

Na rotina de abastecimento, inclusive com conferência, o sistema permite:

- abastecer itens da picklist;
- informar a quantidade no PDV;
- acompanhar itens por lote;
- cancelar o abastecimento em andamento;
- concluir a operação quando os itens estiverem atendidos.

Quando a picklist está em etapa de abastecimento com conferência, a operação fica disponível para continuidade pela mesma tela.

### Lotes do item abastecido

Na aba **Validade & Lotes** do item de abastecimento, os lotes dependem de a tarefa ter ou não um depósito de origem:

| Situação | Como informar o lote |
|----------|----------------------|
| Com depósito de origem | Clique em **Adicionar lote** e, no campo **Lote**, escolha um dos lotes do produto no depósito de origem. O texto digitado filtra os lotes desse produto. Sem lote escolhido, ou quando a quantidade dos lotes não bate com a abastecida, o sistema seleciona os lotes automaticamente. |
| Sem depósito de origem | Digite o lote, a validade e a quantidade, como em uma entrada de estoque. O lote e a validade informados entram no estoque do PDV. As sugestões de lote mostram os lotes que o produto já tem no depósito do PDV. |

Antes de salvar, o sistema confere os lotes informados e avisa quando há:

| Mensagem | Motivo |
|----------|--------|
| Nome do lote é obrigatório | Lote sem nome |
| Validade do lote é obrigatória | Lote sem data de validade |
| Quantidade do lote deve ser maior que zero | Lote com quantidade zero |
| A soma dos lotes passa da quantidade abastecida | Soma dos lotes maior que a quantidade abastecida |

## Lançamentos de Estoque

Na área de movimentações, o sistema separa os lançamentos por tipo:

| Tipo | Botão | Descrição |
|------|-------|-----------|
| Entrada | **Nova Entrada** | Registra a entrada de produtos no estoque |
| Saída | **Nova Saída** | Registra a saída de produtos do estoque |
| Balanço | **Novo Balanço** | Ajusta a quantidade em estoque |

Os botões de ajuste e transferência aparecem conforme a permissão do usuário.

### Criar produto durante o lançamento

Nas janelas **Nova Entrada**, **Nova Saída** e **Novo Balanço**, quando o produto buscado não existe, o campo **Produto** oferece a opção **Criar produto "…"** com o texto digitado. Ela abre a janela **Criar produto** com a descrição já preenchida; ao salvar, o produto criado fica selecionado no lançamento. A opção aparece apenas para usuários com acesso ao cadastro de produtos.

### Custo na entrada manual

Na janela **Nova Entrada**, os campos **Preço de compra** e **Preço de custo** são obrigatórios. O **Preço de custo** começa vazio e precisa ser informado; o valor zero é aceito quando digitado.

### Transferência entre depósitos

A janela **Nova Transferência** move um produto do **Depósito de origem** para o **Depósito de destino**.

| Campo | Descrição |
|-------|-----------|
| Produto | Produto a transferir |
| Depósito de origem | Depósito de onde o produto sai |
| Depósito de destino | Depósito para onde o produto vai |
| Quantidade | Quantidade transferida, maior que zero |
| Preço | Valor de venda do produto |
| Observações | Texto livre |

A transferência não pede preço de custo: o custo usado é o custo médio do produto no depósito de origem. Os depósitos precisam ser da mesma empresa.

## Lotes e Validades

Os produtos com controle de lote exibem informações de lote e validade.

| Ação | Permissão |
|------|------------|
| Adicionar lote | Suprimentos → Lotes |
| Editar lote | Suprimentos → Lotes |
| Remover lote | Suprimentos → Lotes |

## Alertas de Estoque Mínimo

Produtos com estoque abaixo do mínimo configurado são exibidos no dashboard e na listagem do estoque com alerta visual.

## Suprimentos

Na área de **Suprimentos**, os cadastros e operações exibem o código de barras do produto quando ele está disponível. Quando o produto não possui código informado, o campo fica em branco.

### Código de barras em compras, NF-e, conferência e separação

O código de barras aparece em telas de compra, entrada de NF-e, conferência de estoque, separação de pedidos e listas de produtos do estoque.

| Tela | Exibição do código |
|------|--------------------|
| Compra | No item do produto e na busca para lançamento de lotes |
| NF-e de Entrada | No produto selecionado e no item da nota |
| Conferência de estoque | Na lista de itens, detalhes e edição do item |
| Separação de pedidos | Na lista de itens e no detalhe do produto |
| Estoque | Na seleção e na exibição de produtos com lote |
| Pedido de compra | No produto vinculado ao item e no lançamento de lotes |

### Campos de produto nas telas de suprimentos

| Campo | Exibição |
|------|----------|
| Descrição | Nome do produto |
| Código de barras | GTIN/EAN quando informado |
| SKU | Código interno ou do fornecedor, conforme a tela |
| Preço | Valor do item quando aplicável |
| Quantidade | Quantidade sugerida ou informada |

### Relação entre produto e código de barras

| Situação | Exibição |
|----------|----------|
| Produto com GTIN/EAN | Código aparece na tela |
| Produto sem GTIN/EAN | Campo fica em branco |
| Busca por item do pedido | O sistema relaciona pelo GTIN/EAN ou pelo SKU do fornecedor |

### Lançamento de lotes

Ao lançar lotes a partir de pedidos de compra ou notas de entrada, o sistema usa o código de barras e o SKU do fornecedor para localizar o produto correspondente. Isso ajuda a preencher o item certo antes da confirmação do lançamento.

#### Custo unitário com fator de conversão

O custo lançado é sempre por unidade de estoque do produto, e o rótulo do campo mostra essa unidade (por exemplo, **Custo unit. (UN)**). Quando o vínculo do produto com o fornecedor tem fator de conversão (por exemplo, 1 CX = 12 UN), a linha lança a quantidade da origem multiplicada pelo fator e o custo unitário é o preço da embalagem dividido pelo fator, com até 4 casas decimais. Assim, uma caixa de 12 unidades a R$ 24,00 entra como 12 unidades a R$ 2,00, e o **Total estimado** bate com o valor da origem.

No painel de comparação da linha, a coluna **No catálogo** mostra a quantidade com o fator aplicado e o custo por unidade de estoque.

#### Sugestão de custo ao ajustar a quantidade

Na janela **Lançar estoque a partir da nota fiscal**, quando a linha não tem fator de conversão e você altera a **Qtd** (por exemplo, para lançar em unidades um item que a nota traz em caixas), ao sair do campo o sistema sugere o custo por unidade abaixo do campo de custo: **Usar R$ …/UN**. A dica do link mostra o cálculo — total original da nota dividido pela quantidade informada. Clique no link para aplicar o custo sugerido; se preferir, mantenha ou digite outro valor.

## Conferência de Estoque

A tela de conferência de estoque lista os itens com os campos de situação, quantidade atual e quantidade conferida.

| Campo | Descrição |
|------|-----------|
| Situação | Indica o status da conferência do item. |
| QTD. ATUAL | Mostra a quantidade atual registrada no estoque. |
| QTD. CONFERIDA | Mostra a quantidade informada na conferência. |

Ao finalizar a conferência, o sistema valida os itens e conclui o processo.

| Ação | Descrição |
|------|-----------|
| Finalizar conferência | Conclui a conferência de estoque. |
| Cancelar | Fecha a janela sem concluir a operação. |

## Conferência de Recebimento

Notas de entrada podem passar por uma conferência de recebimento antes de entrarem no estoque. Nessa etapa, o sistema permite:

- conferir cada item da nota;
- informar quantidades recebidas;
- registrar motivo quando houver divergência;
- marcar todos os itens como conferidos;
- concluir a conferência quando todos os itens estiverem validados.

A conferência fica vinculada à nota fiscal e pode ser consultada depois.

## Detalhes do Produto

Na tela de detalhes do produto, o sistema exibe abas conforme a permissão do usuário:

| Aba | Exibição |
|-----|----------|
| Lançamentos | Movimentações do produto |
| Reservas | Reservas do produto |
| Lotes e Validades | Lotes vinculados ao produto |
| Configurações | Regras de controle do produto |
| Alertas | Avisos de estoque, lote e ações relacionadas ao produto |

As ações de transferência, ajuste, exportação e manutenção de lotes ficam disponíveis de acordo com a permissão do usuário.

### Aba Lançamentos

A aba **Lançamentos** lista as movimentações do produto:

| Campo | Descrição |
|-------|-----------|
| DATA | Data e hora do lançamento, com o tipo (**Entrada**, **Saída** ou **Balanço**) |
| QUANTIDADE | Quantidade movimentada, com sinal, e o número de lotes quando houver |
| VALOR | Preço do lançamento e, abaixo, o custo quando informado |
| DEPÓSITO | Depósito do lançamento; nas transferências, também o depósito de destino |
| SALDO | Saldo do produto no depósito logo após o lançamento |
| ORIGEM | Documento que gerou o lançamento. Quando é um pedido de venda, ordem de compra, NF-e de entrada ou de saída, NFC-e, tarefa de estoque ou picklist, a origem é um link que abre o documento |
| OBSERVAÇÕES | Observações do lançamento |

Os alertas podem exibir ações diretas para:

| Ação | Uso |
|------|-----|
| Navegar para lote | Acessa a informação relacionada ao lote do produto |
| Navegar para depósito | Abre a movimentação ou ajuste do depósito relacionado |
| Criar ordem de compra | Inicia a abertura de uma ordem de compra quando o usuário tem permissão |

Quando uma ação está disponível, o sistema mostra o comando correspondente no alerta conforme a permissão do usuário.

## Operações de Inventário

A tela **Operações de Inventário** lista tarefas de separação, abastecimento e abastecimento combinado.

| Tipo | Uso |
|------|-----|
| Separação | Separar produtos para uma picklist |
| Abastecimento | Abastecer produtos no ponto de venda |
| Abastecimento combinado | Abastecer e conferir a quantidade no ponto de venda |

A conferência de estoque não aparece nesta tela: ela é feita apenas em **Suprimentos → Conferências de estoque** (veja [Inventário](../inventario/)).

Ao abrir uma operação pelo link da notificação, o sistema leva direto para os detalhes da tarefa.

## Permissões no Estoque

Algumas ações e abas ficam visíveis conforme a permissão do usuário.

| Permissão | Uso |
|-----------|-----|
| Suprimentos → Estoque | Consulta de saldo, lançamentos, transferências e exportações |
| Suprimentos → Ajustes de Estoque | Ajustes, edição de configurações, ações de inventário |
| Suprimentos → Lotes | Gestão de lotes e validade |
| Suprimentos → Inventário | Conferência de estoque |
| Suprimentos → Separação | Separação de picklists |
| Suprimentos → Abastecimento | Execução de abastecimento |
| Suprimentos → Abastecimento combinado | Execução de abastecimento com conferência |

## Separação de Picklist

Na tela de separação de picklist, cada item mostra a quantidade separada e permite informar valores antes da confirmação.

| Campo | Descrição |
|------|-----------|
| Quantidade | Quantidade informada para separação |
| Status | Indica se o item está separado ou pendente |
| Ação | Confirma a separação do item |

Os itens com quantidade diferente da quantidade padrão exibem o indicador **Não confirmado** até a confirmação da separação.

### Ações na separação

| Ação | Descrição |
|------|-----------|
| Aumentar quantidade | Soma uma unidade à quantidade do item |
| Diminuir quantidade | Reduz uma unidade da quantidade do item |
| Editar quantidade | Informa manualmente a quantidade desejada |
| Marcar como separado | Confirma a separação do item com a quantidade informada |

Durante a separação, o sistema mantém o valor informado até a confirmação do item.
