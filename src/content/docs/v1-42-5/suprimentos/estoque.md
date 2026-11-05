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

## Ordens de Compra

As ordens de compra são criadas, editadas, aprovadas, canceladas e exportadas na área de Suprimentos. A lista mostra itens, fornecedor, empresa, situação, valores, anexos e movimentações vinculadas.

### Consulta e listagem

A página de ordens de compra lista os pedidos por situação e permite filtrar por fornecedor, empresa, datas e situação. A visualização em linha mostra o resumo da ordem, os itens e os lançamentos ligados a ela.

| Campo | Descrição |
|------|-----------|
| Situação | Em aberto, aprovado, faturado ou cancelado |
| Fornecedor | Fornecedor da ordem |
| Empresa | Empresa responsável |
| Valor | Total da ordem |
| Origem | Documento que gerou a ordem |
| Operações | Lançamentos de estoque, contas a pagar ou nota de entrada ligados à ordem |

### Itens da ordem

Cada item da ordem mostra:

| Campo | Descrição |
|------|-----------|
| Descrição | Nome do produto |
| Código de barras | GTIN/EAN quando informado |
| SKU / SKU Forn. | Código interno e código do fornecedor |
| QTD | Quantidade comprada na unidade do produto |
| Preço un. | Preço unitário informado |
| IPI / ICMS | Tributos do item quando preenchidos |
| Total | Total do item |
| Estoque | Informação de estoque do produto |

### Cadastro e edição

Na criação e na edição da ordem de compra, o sistema permite informar:

| Campo | Descrição |
|------|-----------|
| Empresa | Empresa da ordem |
| Fornecedor | Fornecedor principal |
| Data | Data da ordem |
| Condição de pagamento | Condição financeira |
| Observações | Texto livre |
| Endereço | Endereço da ordem, preenchido a partir do fornecedor quando disponível |

Os itens podem ser incluídos, editados e removidos, e o sistema mantém os dados de produto, quantidade, preço e tributos.

### Anexos

A ordem de compra permite anexar arquivos. Os anexos são listados com nome, tipo e data de última modificação. É possível incluir e remover anexos conforme a permissão do usuário.

### Operações vinculadas

A ordem de compra pode ter operações ligadas a ela:

| Operação | Uso |
|----------|-----|
| Lançar estoque | Gera entrada de estoque a partir da ordem |
| Estornar estoque | Reverte a entrada de estoque vinculada |
| Lançar contas a pagar | Gera títulos financeiros vinculados |
| Estornar contas a pagar | Reverte os títulos vinculados |
| Gerar nota de entrada | Cria a nota fiscal de entrada a partir da ordem |

As operações aparecem conforme o status da ordem e a existência de operações anteriores.

## Necessidade de compra

A tela de **Necessidade de compra** mostra os produtos que precisam ser comprados com base na origem escolhida.

### Filtros

Os filtros ficam em um card e permitem combinar origem, ponto de venda, períodos, categorias, produtos e fornecedor padrão.

| Campo | Descrição |
|------|-----------|
| Origem | Define se o cálculo considera **Planograma** ou **Vendas** |
| Ponto de venda | Usado quando a origem é planograma |
| Considerar saídas dos últimos | Número de dias usado para o cálculo na origem de vendas |
| Calcular estoque para | Número de dias para cobrir com a compra |
| Pontos de venda | Lista de PDVs considerados no cálculo de vendas |
| Categorias | Filtra por categorias de produtos |
| Produtos | Filtra por produtos específicos |
| Fornecedor padrão | Limita o cálculo a um fornecedor |
| Apenas produtos zerados | Mostra apenas itens sem saldo |
| Apenas produtos em excesso | Mostra apenas itens com excesso de estoque |
| Com venda nos últimos | Limita a produtos com saída recente |

### Agrupamento e lista

A lista pode ser agrupada por produto ou fornecedor. Cada grupo mostra o resumo de quantidade e valor e permite selecionar itens para revisão. O sistema exibe também o total geral da compra calculada.

### Revisão e geração de ordens

Na revisão, o sistema organiza os itens por fornecedor e permite ajustar quantidade, custo, observações e fornecedor de cada item antes de gerar as ordens de compra.

| Campo | Descrição |
|------|-----------|
| Quantidade | Quantidade a comprar |
| Custo unitário | Custo do item na compra |
| Fornecedor | Fornecedor do item |
| Data prevista | Data de entrega prevista |
| Condição de pagamento | Condição financeira da ordem |
| Observações | Texto livre da ordem |

Se houver itens sem fornecedor, eles ficam separados para definição manual do fornecedor antes da geração das ordens.

### Ordens criadas

Depois da geração, o sistema exibe as ordens criadas e os itens que ficaram de fora por falta de fornecedor. A partir daí é possível aprovar as ordens em lote ou voltar para definir o fornecedor dos itens pendentes.

## Conferência de Recebimento de NF-e

Na NF-e de entrada, a conferência de recebimento organiza os itens da nota para validação antes de entrarem no estoque.

### Itens da conferência

A tabela de conferência mostra:

| Campo | Descrição |
|------|-----------|
| Produto | Descrição e código do item |
| Qtd. da nota | Quantidade prevista na nota |
| Qtd. recebida | Quantidade conferida |
| Motivo | Motivo da divergência, quando houver |
| Conferido | Indica se o item já foi validado |

Os itens divergentes podem ser ajustados linha por linha. Quando a quantidade conferida não coincide com a quantidade da nota, o sistema pede um motivo de divergência.

### Finalização

Ao concluir a conferência, o sistema valida se todos os itens estão conferidos e se as divergências foram informadas corretamente. A conferência pode ser consultada depois pela própria nota.

## NF-e de Entrada

A lista de notas fiscais de entrada mostra as notas importadas, recebidas ou em conferência. A página de detalhes exibe dados da nota, itens, anexos, ocorrências e operações relacionadas.

### Ações na nota

| Ação | Descrição |
|------|-----------|
| Autorizar nota fiscal | Envia a autorização da nota |
| Recusar nota | Registra a recusa da nota |
| Reemitir nota fiscal | Tenta novamente a emissão |
| Importar nota | Importa a nota de entrada |
| Cancelar | Cancela a nota de entrada |
| Remover | Remove a nota e as operações ligadas |
| Lançar estoque | Gera entrada de estoque |
| Estornar estoque | Reverte o estoque lançado |
| Lançar contas a pagar | Gera contas a pagar ligadas à nota |
| Estornar contas | Reverte as contas geradas |
| Ver recebimento | Abre a conferência de recebimento |
| Ver nota de entrada | Abre os detalhes da nota importada |

### Importação

A importação pode ser feita por chave de acesso ou por arquivo XML. O sistema mostra uma pré-visualização da nota, com emitente, data, valor total e itens, antes da importação final.

### Ocorrências

As ocorrências da nota exibem registros de status, data e descrição. A exportação da lista segue os mesmos filtros aplicados na tela.

### Boletos e lançamentos

Quando a nota gera títulos financeiros ou lançamentos de estoque, o sistema mostra os vínculos na própria tela de detalhes e permite consultar ou estornar as operações relacionadas.

## Pedido de compra

O pedido de compra aparece nas telas de compra e de suprimentos como documento de origem ou destino. O sistema mostra dados de fornecedor, empresa, itens, lotes e anexos.

### Itens e lotes

Ao vincular um pedido de compra a uma entrada, o sistema usa o código de barras e o SKU do fornecedor para localizar o item correspondente. Os lotes são lançados por item e podem ser associados ao produto certo antes da confirmação.

### Resumo e totais

O sistema calcula:

| Campo | Descrição |
|------|-----------|
| Itens | Quantidade de linhas do pedido |
| Quantidade | Quantidade total de produtos |
| Total de itens | Soma dos itens antes de descontos |
| IPI | Total de impostos do pedido |
| Descontos | Descontos aplicados |
| Total final | Valor final do pedido |

### Parcelas e pagamentos

O pedido de compra pode exibir parcelas e resumo de pagamentos conforme a condição escolhida.

## Inventário e Ajustes

A área de inventário reúne operações de entrada, saída, transferência, ajuste e conferência. Cada tela exibe o saldo do produto, depósitos relacionados e ações de movimentação.

### Saldo por depósito

O painel do produto mostra o saldo por depósito, com destaque para o depósito selecionado e os demais depósitos vinculados ao item.

| Campo | Descrição |
|------|-----------|
| Disponível | Quantidade livre para uso |
| Reservado | Quantidade reservada |
| Físico | Quantidade física no depósito |
| Mínimo | Saldo mínimo configurado |
| Ideal | Saldo ideal configurado |

### Ajuste de estoque

O ajuste permite informar quantidade, data, observações e lotes. O sistema valida o total dos lotes e mantém os saldos coerentes com a movimentação informada.

### Entrada e saída

As entradas e saídas podem ser feitas com quantidade direta ou por lotes. Quando há lotes, o sistema exige as quantidades e as datas de validade conforme o tipo de operação.

### Transferência

A transferência entre depósitos move a quantidade do depósito de origem para o depósito de destino, mantendo a rastreabilidade da movimentação.

## Reservas

A aba de reservas do produto mostra quantidades comprometidas em pedidos e operações vinculadas. A consulta ajuda a identificar o que está disponível para venda e o que já está separado para outras rotinas.

| Campo | Descrição |
|------|-----------|
| Pedido | Documento que gerou a reserva |
| Quantidade | Quantidade reservada |
| Origem | Operação que gerou a reserva |
| Situação | Status da reserva |

## Dashboard de Estoque

O dashboard de estoque mostra alertas e atalhos para produtos com saldo crítico, lotes próximos do vencimento, estoques negativos e movimentações recentes.

### Alertas

| Alerta | Descrição |
|-------|-----------|
| Estoque mínimo | Produto abaixo do mínimo |
| Lote próximo do vencimento | Lote com validade próxima |
| Estoque negativo | Saldo abaixo de zero |
| Produto sem custo | Produto com saldo sem custo médio |

### Ações rápidas

| Ação | Uso |
|------|-----|
| Ajustar estoque | Abre a tela de ajuste |
| Transferir | Abre a transferência entre depósitos |
| Nova entrada | Inicia uma entrada manual |
| Nova saída | Inicia uma saída manual |
| Conferir estoque | Abre a conferência de estoque |

## Pedidos, separação e abastecimento

As rotinas de separação e abastecimento usam a mesma base de tarefa e mostram o acompanhamento por status, histórico e itens pendentes.

### Status das tarefas

| Status | Descrição |
|--------|-----------|
| Em andamento | A tarefa está aberta |
| Concluído | A tarefa foi finalizada |
| Cancelado | A tarefa foi cancelada |

### Detalhe da tarefa

O detalhe mostra:

| Campo | Descrição |
|------|-----------|
| Tipo | Separação, abastecimento ou abastecimento combinado |
| Picklist | Picklist vinculada |
| PDV | Ponto de venda de origem |
| Situação | Status atual da tarefa |
| Histórico | Eventos da operação |
| Itens | Produtos da tarefa |

### Conclusão da tarefa

Ao finalizar, o sistema valida os itens e mostra os pendentes antes de concluir. Em abastecimento combinado, a conferência da quantidade no ponto de venda faz parte do fluxo.

## Permissões gerais

Algumas ações da área de suprimentos dependem da permissão do usuário.

| Permissão | Uso |
|-----------|-----|
| Suprimentos → Ordens de compra | Criar, editar, aprovar, cancelar, remover e exportar ordens |
| Suprimentos → Notas fiscais de entrada | Importar, autorizar, recusar, cancelar e exportar notas |
| Suprimentos → Recebimento de mercadorias | Abrir, continuar, consultar e estornar conferências |
| Suprimentos → Picking | Criar, editar, remover e exportar picklists |
| Suprimentos → Ajustes de estoque | Ajustar estoque, transferir e exportar movimentos |
| Suprimentos → Conferência de estoque | Iniciar, continuar, finalizar e exportar conferências |
| Suprimentos → Lotes | Gerenciar lotes e validades |

