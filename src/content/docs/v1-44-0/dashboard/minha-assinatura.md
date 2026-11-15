---
title: Minha Assinatura
description: Como consultar o plano, os módulos, a utilização do sistema e os dados de cobrança de cada empresa no Despensinha ERP.
sidebar:
  order: 3
---

A tela **Minha Assinatura** reúne as informações da assinatura do Despensinha ERP: o plano contratado, os módulos disponíveis, os números de utilização do sistema, os dados de cobrança de cada empresa e as faturas. As informações ficam organizadas nas abas **detalhes**, **dados de cobrança** e **faturas**.

## Acessando

Acesse **Início → Minha assinatura**. A tela abre na aba **detalhes**. Para alternar entre as abas, clique no nome da aba desejada no topo da página; a aba ativa fica destacada.

| Aba | Descrição |
|-----|-----------|
| **detalhes** | Plano da assinatura, módulos e utilização do sistema |
| **dados de cobrança** | Dados de cobrança de cada empresa e forma de pagamento |
| **faturas** | Lista de faturas da assinatura |

> O acesso à tela depende das permissões do usuário. Caso a opção não apareça no menu, entre em contato com o administrador do sistema.

## Aba detalhes

A aba **detalhes** é dividida em três cards: **Plano da assinatura**, **Módulos** e **Utilização do sistema**.

### Plano da assinatura

O card mostra a situação da assinatura no canto superior direito, com o selo **Ativo** ou **Inativo**, e os dados do plano contratado.

| Campo | Descrição |
|-------|-----------|
| **Plano** | Nome do plano contratado |
| **Periodicidade** | Periodicidade de cobrança do plano |
| **Valor** | Valor do plano, em reais |
| **Última assinatura** | Data da última assinatura do plano |
| **Última modificação** | Data da última alteração no plano |

Quando uma informação não está disponível, o campo exibe **--**.

### Módulos

O card **Módulos** lista os módulos do sistema e indica, no topo, quantos estão ativos em relação ao total disponível (por exemplo, "3 de 8 ativos"). Cada módulo aparece em um bloco com o nome, uma descrição complementar e a situação:

| Situação | Descrição |
|----------|-----------|
| **Ativo** | O módulo faz parte da assinatura e está em uso |
| **Disponível** | O módulo existe, mas não está ativo na assinatura. O bloco exibe o botão **EM BREVE**, ainda sem ação |

Quando não há módulos a exibir, o card mostra a mensagem **Nenhum módulo disponível**.

### Utilização do sistema

O card **Utilização do sistema** apresenta indicadores de uso do ambiente.

| Indicador | Descrição |
|-----------|-----------|
| **Produtos** | Quantidade de produtos cadastrados |
| **Sessões ativas** | Total de sessões ativas no sistema |
| **Tempo médio de sessão** | Duração média das sessões, em horas, minutos e segundos |
| **Pedidos de venda** | Total de pedidos de venda |
| **Ordens de compra** | Total de ordens de compra |
| **Notas fiscais emitidas** | Total de notas fiscais emitidas |
| **Notas fiscais canceladas** | Total de notas fiscais canceladas |
| **Notificações enviadas** | Total de notificações enviadas |
| **Terminais** | Quantidade de terminais ativos |
| **Disponibilidade do sistema** | Percentual de disponibilidade do sistema, acompanhado do selo **online** |

## Aba dados de cobrança

A aba **dados de cobrança** mostra os dados que a EasyPDV utiliza para cobrar a assinatura. A cobrança é definida por empresa: cada empresa do ambiente tem os seus próprios dados de cobrança.

### Dados de cobrança utilizados pela EasyPDV

O card lista uma linha por empresa:

| Coluna | Descrição |
|--------|-----------|
| **EMPRESA** | Nome fantasia da empresa ou, se não houver, a razão social. Empresas inativas exibem o selo **Inativa** ao lado do nome |
| **NOME DE COBRANÇA** | Nome ou razão social usado na cobrança |
| **CPF/CNPJ** | Documento de cobrança, formatado como CPF ou CNPJ. Quando não informado, exibe **--** |
| **E-MAIL** | E-mail que recebe a cobrança |

### Como editar os dados de cobrança de uma empresa

1. Acesse **Início → Minha assinatura** e clique na aba **dados de cobrança**
2. Na lista, clique no menu de ações da empresa desejada
3. Selecione **Editar**. A janela **Dados de cobrança · (nome da empresa)** é aberta
4. Preencha os dados de identificação:
   - **Tipo** (obrigatório) -- **Pessoa jurídica** ou **Pessoa física**. Ao trocar o tipo, o documento é limpo
   - **Nome / Razão Social** (obrigatório) -- nome de quem recebe a cobrança
   - **CNPJ** ou **CPF** (obrigatório) -- o campo muda conforme o tipo: **CNPJ** para pessoa jurídica e **CPF** para pessoa física
   - **Regime Tributário** -- **Simples nacional**, **Simples Nacional - Excesso de sublimite**, **Regime Normal** ou **Microempreendedor individual**
   - **Inscrição Estadual** -- número da inscrição estadual
   - **IE Isento** -- marque quando a empresa for isenta de inscrição estadual. Ao marcar, o campo **Inscrição Estadual** é limpo e bloqueado
   - **E-mail** (obrigatório) -- e-mail que recebe a cobrança, em formato válido
   - **Telefone** -- telefone de contato, no formato (11) 99999-9999
5. Preencha o **Endereço de cobrança**:
   - **CEP** (obrigatório) -- ao informar o CEP, o sistema completa automaticamente o endereço, o bairro, a cidade e a UF encontrados
   - **Endereço** (obrigatório)
   - **Número** (obrigatório)
   - **Bairro** (obrigatório)
   - **Complemento**
   - **Cidade** (obrigatório)
   - **UF** (obrigatório)
6. Clique em **Salvar**

Se algum campo obrigatório estiver vazio ou inválido, o sistema indica o problema abaixo do campo e não salva. Ao salvar com sucesso, o sistema exibe a mensagem **Dados de cobrança atualizados com sucesso**, fecha a janela e atualiza a lista. Para sair sem salvar, clique em **Cancelar**.

### Forma de pagamento

O card **Forma de pagamento** mostra como a assinatura é paga:

| Campo | Descrição |
|-------|-----------|
| **Boleto bancário** | Forma de pagamento da assinatura, com o selo **Ativo** |
| **Faturado mensalmente** | Periodicidade do faturamento |
| **Dia de vencimento** | Dia do mês em que o boleto vence |

O botão **Alterar** aparece desabilitado: a forma de pagamento não pode ser alterada por esta tela.

## Aba faturas

A aba **faturas** apresenta o card **Faturas**, com a tabela das faturas da assinatura:

| Coluna | Descrição |
|--------|-----------|
| **Referência** | Período de referência da fatura |
| **Vencimento** | Data de vencimento da fatura |
| **Valor** | Valor da fatura |
| **Status** | Situação da fatura |
| **Ações** | Ações disponíveis para a fatura |

Quando não há faturas, a tabela exibe a mensagem **Nenhuma fatura encontrada** e o aviso **As faturas aparecerão aqui quando disponíveis**.
