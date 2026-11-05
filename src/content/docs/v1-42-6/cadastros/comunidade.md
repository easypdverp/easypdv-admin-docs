---
title: Comunidade
description: Configuração de comunidades e organizações no Despensinha ERP.
sidebar:
  order: 5
---

O cadastro de **Condomínios** reúne as comunidades onde os pontos de venda estão instalados: os dados do condomínio, o acordo financeiro usado no repasse mensal, as pessoas de contato, o acesso do síndico e os anexos.

Acesse em **Cadastros → Parceiros → Condomínios**.

## Listagem

| Coluna | Descrição |
|--------|-----------|
| Condomínio | Nome do condomínio |
| Telefone | Telefone de contato |
| Cidade | Cidade do condomínio |
| Nº residentes | Quantidade de lotes/aptos informada no cadastro |
| Cliente desde | Data de cadastro do condomínio |
| Situação | **Ativo** ou **Inativo** |

No menu da linha estão as ações **Editar**, **Ativar** ou **Desativar** e **Remover**.

## Cadastro do condomínio

Na lateral do cadastro ficam a **Imagem**, a **Situação** (**Ativo** ou **Inativo**) e o **Website** do condomínio. Os demais dados ficam organizados nas abas **Geral**, **Acordo financeiro**, **Pessoas de contato**, **Acesso síndico** e **Anexos**.

### Aba Geral

| Campo | Descrição |
|-------|-----------|
| Razão social | Razão social do condomínio. Obrigatório |
| Nome fantasia | Nome fantasia do condomínio. Obrigatório |
| CNPJ | CNPJ do condomínio. Obrigatório |
| Quantidade de lotes/aptos | Número de unidades do condomínio |
| Tipo de condomínio | **Residencial de casas**, **Residencial de apartamentos**, **Empresarial industrial**, **Empresarial de escritório**, **Empresarial hospitalar** ou **Empresarial universitário**. Obrigatório |
| Telefone | Telefone principal. Obrigatório |
| Celular | Celular de contato |
| Email comercial | E-mail comercial |
| Email financeiro | E-mail do financeiro |
| Endereço | Endereço do condomínio |

### Aba Acordo financeiro

A aba **Acordo financeiro** guarda os termos combinados com o condomínio. É daqui que o [Repasse a Condomínio](../../financeiro/repasse-a-condominio/) lê o cashback, a energia e os dados de pagamento de cada mês. Os campos são opcionais; deixar um campo vazio apaga aquele termo.

#### Cashback

| Campo | Descrição |
|-------|-----------|
| Tipo de cashback | **Nenhum**, **Fixo** ou **Porcentagem** |
| Valor por mês | Valor fixo pago ao condomínio por mês. Aparece com o tipo **Fixo** |
| Percentual da venda bruta | Percentual sobre a venda bruta. Aparece com o tipo **Porcentagem** |
| Mínimo garantido por mês | Valor mínimo pago no mês, mesmo que o percentual dê menos. Aparece com o tipo **Porcentagem** |
| Teto por mês | Valor máximo pago no mês. Aparece com o tipo **Porcentagem** |

Ao trocar o tipo de cashback, os valores que só valiam para o tipo anterior são apagados.

#### Energia

| Campo | Descrição |
|-------|-----------|
| Forma de cobrança | **Nenhuma**, **Fixo** ou **Por kWh** |
| Valor por mês | Valor fixo de energia por mês, com duas casas decimais. Aparece com a forma **Fixo** |
| Tarifa por kWh | Valor cobrado por kWh consumido, com até seis casas decimais (por exemplo, R$ 0,856700). Aparece com a forma **Por kWh** |

#### Pagamento

| Campo | Descrição |
|-------|-----------|
| Dia do pagamento | Dia do mês seguinte ao apurado em que o repasse é pago (de 1 a 31) |
| Forma de repasse | **PIX**, **TED**, **Boleto** ou **Abatimento na taxa de condomínio** |

#### Conta de repasse

| Campo | Descrição |
|-------|-----------|
| Banco | Banco da conta que recebe o repasse |
| Agência | Número da agência |
| Dígito | Dígito da agência |
| Conta | Número da conta |
| Dígito | Dígito da conta |
| Tipo de conta | **Corrente** ou **Poupança** |
| Tipo da chave PIX | **E-mail**, **CPF**, **CNPJ**, **Telefone** ou **Chave aleatória** |
| Chave PIX | Chave PIX do favorecido |
| Favorecido | Nome de quem recebe o repasse. Pode ser a administradora do condomínio |
| CPF/CNPJ do favorecido | Documento do favorecido |

#### Contrato

| Campo | Descrição |
|-------|-----------|
| Início da parceria | Data de início do acordo. A carência conta a partir dela |
| Carência (meses) | Quantidade de meses de carência, contados a partir do início da parceria |
| Fim da vigência | Data de término do acordo |
| Aviso prévio (dias) | Prazo de aviso prévio para encerrar o acordo |
| Índice de reajuste | **IPCA**, **IGP-M** ou **INPC**. Campo informativo: o reajuste não é aplicado pelo sistema |
| Mês do reajuste | Mês do ano em que o reajuste acontece |

### Aba Pessoas de contato

Lista as pessoas de contato do condomínio, com nome, descrição e telefones. Cada pessoa tem **Nome** (obrigatório), **E-mail**, **Setor**, **Ramal**, **Celular**, **Telefone** e **Notas adicionais**. No menu da linha, use **Editar** ou **Remover**.

### Aba Acesso síndico

Lista os usuários de acesso do síndico. Clique em **Adicionar acesso síndico** e informe **E-mail** e **Senha**. No menu da linha, use **Editar**, **Ativar** ou **Desativar** e **Remover**.

### Aba Anexos

Reúne os arquivos do condomínio, com nome, tamanho, tipo e data da última modificação. No menu da linha, use **Download** ou **Remover**.

## Como cadastrar um condomínio

1. Acesse **Cadastros → Parceiros → Condomínios**
2. Clique no botão de adicionar da listagem
3. Preencha os dados da aba **Geral**
4. Na aba **Acordo financeiro**, informe os termos de cashback, energia, pagamento, conta de repasse e contrato
5. Salve o cadastro
