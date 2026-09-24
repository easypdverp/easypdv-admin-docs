---
title: Perguntas Frequentes
description: Respostas para as dúvidas mais comuns sobre o Despensinha ERP.
sidebar:
  order: 1
---

## Acesso e Usuários

### Como redefinir a senha de um usuário?

Acesse **Cadastros → Funcionários**, localize o usuário e clique em **Reenviar Convite**. Um novo link de acesso será enviado por e-mail.

### Como alterar o papel (perfil) de um funcionário?

Acesse **Cadastros → Funcionários**, localize o funcionário e clique em **Editar**. Altere o campo **Papel** e salve. As novas permissões entram em vigor no próximo login.

### Como desativar o acesso de um funcionário?

Acesse **Cadastros → Funcionários**, localize o funcionário, clique no menu de ações e selecione **Desativar**. O usuário não conseguirá mais acessar o sistema.

## Catálogo e Produtos

### Como adicionar um novo produto ao catálogo?

Acesse **Cadastros → Catálogo → Produtos** e clique em **Novo Produto**. Preencha nome, NCM, unidade de medida e preço de venda.

### Como configurar o estoque mínimo de um produto?

Acesse **Cadastros → Catálogo → Produtos**, edite o produto e preencha o campo **Estoque Mínimo**. O sistema emitirá alertas quando o saldo ficar abaixo desse valor.

## Fiscal

### Como cancelar uma NF-e emitida?

NF-e pode ser cancelada em até **24 horas** após a emissão. Acesse **Vendas → NF-e Saída**, localize a nota e clique em **Cancelar**. Informe o motivo e confirme.

### Qual o prazo para cancelar uma NFC-e?

O prazo para cancelamento de NFC-e é de **30 minutos** após a emissão — diferente da NF-e, que permite até 24 horas. Após o prazo, é necessário emitir uma NF-e de devolução.

### Como corrigir dados de uma NF-e já emitida?

Para correções que não alteram valores, emita uma **Carta de Correção Eletrônica (CC-e)** na tela da NF-e. Para correções de valores, cancele a nota e emita uma nova (dentro do prazo de cancelamento).

### Quais configurações fiscais são necessárias antes de emitir NF-e?

Configure em **Preferências**:
1. **Cenário Tributário** — regras de ICMS, PIS, COFINS por produto
2. **CFOP** — códigos de operação para cada tipo de venda
3. **NCM** — cadastro dos produtos com NCM correto
4. O certificado digital A1 deve estar instalado nas configurações da comunidade

## Estoque

### Como realizar uma transferência de estoque entre armazéns?

Acesse **Suprimentos → Estoque → Transferências**, clique em **Nova Transferência**, selecione os armazéns de origem e destino, adicione os produtos e confirme.

### O que fazer quando o estoque de um produto fica negativo?

Verifique as movimentações do produto em **Suprimentos → Estoque** e identifique a saída que causou o saldo negativo. Realize um ajuste manual de estoque ou lance a NF-e de entrada que ficou pendente.

### Como ajustar o estoque manualmente?

Acesse **Suprimentos → Inventário**, crie um novo inventário para o armazém desejado, informe as quantidades corretas e finalize. O sistema calculará e aplicará as diferenças automaticamente.

## Financeiro

### Como registrar um pagamento parcial?

Acesse **Financeiro → Contas a Pagar**, localize a conta e clique em **Registrar Pagamento**. Informe o valor parcial pago. O saldo restante permanece como pendente na listagem.

### Como visualizar contas vencidas?

Em **Financeiro → Contas a Pagar** (ou **Contas a Receber**), use o filtro **Status → Vencido** para listar apenas os lançamentos em atraso.
