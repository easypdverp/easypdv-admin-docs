---
title: Preferências
description: Configurações do sistema Despensinha ERP.
sidebar:
  order: 1
---

O módulo de **Preferências** centraliza as configurações do sistema, organizadas por categoria. Acesse em **Preferências** no menu lateral.

## Configurações Essenciais (Primeiro Acesso)

Antes de iniciar as operações, configure obrigatoriamente:

1. **Empresas** — dados fiscais de cada empresa (tipo de pessoa, CNPJ ou CPF, regime tributário, estado e endereço)
2. **Certificado Digital** — obrigatório para emissão de NF-e e NFC-e
3. **Armazém** — ao menos um armazém para controle de estoque
4. **Cenário Tributário** — regras de impostos para os produtos comercializados
5. **Conta Financeira** — ao menos uma conta ou caixa para o módulo financeiro

## Configurações Fiscais

| Configuração | Descrição |
|-------------|-----------|
| Cenários Tributários | Regras fiscais por produto e operação |
| NCM | Nomenclatura Comum do Mercosul |
| CFOP | Código Fiscal de Operações e Prestações |
| CEST | Código Especificador da Substituição Tributária |
| Natureza de Operação | Tipos de operações fiscais |
| NFe | Configurações de emissão da Nota Fiscal Eletrônica |

## Configurações Financeiras

| Configuração | Descrição |
|-------------|-----------|
| Contas Financeiras | Caixas e contas bancárias do estabelecimento |
| Bancos | Cadastro de bancos |
| Contas Bancárias | Dados da conta bancária, incluindo agência, número da conta e dígitos |
| Gateways de Pagamento | Integrações com maquininhas, meios de pagamento e cobrança |
| Categorias Financeiras | Agrupamentos usados no controle financeiro |
| Marcadores de Financeiro | Etiquetas para contas a pagar, contas a receber e fluxo de caixa |

## Configurações de Estoque

| Configuração | Descrição |
|-------------|-----------|
| Armazéns | Locais de armazenamento de estoque |
| Unidades de Conversão | Conversão entre unidades de medida |

## Configurações de Vendas

| Configuração | Descrição |
|-------------|-----------|
| Métodos de Pagamento | Formas de pagamento aceitas no estabelecimento |
| Métodos de Recebimento | Configuração de recebimentos |
| Vendas | Parâmetros gerais de vendas |
| Marcadores de Vendas | Etiquetas para pedidos e notas fiscais |

## Configurações de Suprimentos

| Configuração | Descrição |
|-------------|-----------|
| Suprimentos | Parâmetros gerais de suprimentos |
| Ordens de Compra | Configurações do fluxo de compra |
| Ordens de Venda | Configurações do fluxo de venda |
| Separação | Regras para separação de pedidos |
| Marcadores de Suprimentos | Etiquetas para ordens de compra, notas de entrada e separação |

## Configurações Comerciais

| Configuração | Descrição |
|-------------|-----------|
| Marcas | Marcas dos produtos |
| Tags | Etiquetas para classificação e definição de layout |
| Marcadores de Produtos | Etiquetas para organização de itens |
| Modelos de Etiquetas | Modelos usados na criação de etiquetas |

### Editor de tags

O editor de tags permite criar e imprimir etiquetas a partir de modelos com texto e código de barras.

Na visualização da etiqueta, o campo **Código** exibe o valor **GTIN/EAN** do produto.

Ao gerar o PDF, o sistema valida o GTIN/EAN somente quando o modelo de etiqueta contém um elemento de código de barras. Modelos que usam apenas texto não exigem validação desse campo.

Quando a etiqueta tem código de barras, o sistema usa o formato configurado no elemento do modelo. Se houver produtos inválidos, o PDF é gerado com os produtos válidos e a lista de erros é retornada para conferência. Se nenhum produto estiver válido, a impressão é bloqueada.

## Configurações de Cadastro

| Configuração | Descrição |
|-------------|-----------|
| Cadastros | Parâmetros de cadastro de entidades |
| Empresas | Empresas (CNPJ) do ambiente, com regime, endereço, contatos e contador |
| Configuração de Cadastro | Regras para cadastros de usuários e permissões |

## Configurações do Sistema

| Configuração | Descrição |
|-------------|-----------|
| Papéis de Usuário | Definição de permissões por perfil |
| Provedores de Comunicação | Configuração de e-mail, SMS e WhatsApp |
| Interface do Usuário | Preferências visuais do sistema |
| Envio de Arquivos | Parâmetros de envio e recebimento de arquivos |
| Usuário | Preferências da conta do usuário logado |
| Eventos de Webhook | Consulta dos eventos enviados pelo sistema |
| Empresas | Empresas (CNPJ) do ambiente, com regime, endereço, contatos e contador |
| Canais de Comunicação | Configuração de comunicação com o sistema |
| E-mail | Configurações de envio de e-mails |
| Certificado Digital | Configuração do certificado para emissão fiscal |
| Estoque | Regras gerais de estoque |
| Separação | Parâmetros do processo de separação |
| Emissão Fiscal | Configurações para NF-e e NFC-e |

### Empresas

Em **Preferências › Empresas** ficam as empresas (CNPJ) do ambiente. Cada empresa tem seus próprios dados fiscais, endereço, contatos e contador, e é escolhida nas telas que dependem dela, como a emissão de notas e o certificado digital.

A listagem mostra:

| Coluna | Descrição |
|--------|-----------|
| CNPJ | Documento da empresa |
| Razão social | Razão social, com o nome fantasia logo abaixo |
| Regime | Regime tributário da empresa |
| Situação | **Ativa** ou **Inativa** |

No menu da linha, **Editar** abre o cadastro da empresa e **Inativar** (ou **Ativar**) muda a situação após confirmação. Uma empresa inativa deixa de aparecer nos campos de escolha de empresa, mas as notas, as contas e o SPED dela continuam no sistema. Ao ativá-la, ela volta aos campos de escolha.

Para cadastrar uma empresa, clique no botão de adicionar da listagem. O cadastro (**Nova empresa**) e a edição (**Editar empresa**) usam o mesmo formulário, salvo com **Criar empresa** ou **Salvar alterações**. Ao tentar sair da tela com alterações não salvas, o sistema avisa antes de descartá-las.

#### Dados da empresa

| Campo | Descrição |
|-------|-----------|
| Razão social | Nome jurídico da empresa. Obrigatório |
| Nome fantasia | Como a empresa é conhecida. Obrigatório |
| Tipo de pessoa | **Física** ou **Jurídica**. Obrigatório |
| CNPJ | Documento da empresa, exibido para pessoa jurídica. Obrigatório |
| CPF | Documento exibido para pessoa física. Obrigatório |
| Regime tributário | **Simples nacional**, **Simples Nacional - Excesso de sublimite**, **Regime Normal** ou **Microempreendedor individual**. Obrigatório |
| Apuração do IRPJ | **Lucro Real**, **Lucro Presumido** ou **Lucro Arbitrado**. Aparece somente no **Regime Normal** |
| Inscrição estadual | Inscrição estadual da empresa |
| Inscrição municipal | Inscrição municipal da empresa |
| Estado | Estado da empresa. Obrigatório |

#### Contabilidade

O cartão **Contabilidade** mostra o contador responsável pela empresa. O preenchimento é opcional: a empresa pode ser salva e o contador informado depois. Cada empresa tem um único contador.

Sem contador, o cartão oferece duas opções:

| Ação | Descrição |
|------|-----------|
| **Cadastrar contador** | Abre a janela **Cadastrar contador** para registrar um novo contador. Ao concluir com **Cadastrar e selecionar**, ele já fica vinculado à empresa |
| **Selecionar cadastrado** | Abre a janela **Selecionar contador**, com busca por nome ou CRC entre os contadores já cadastrados. Confirme com **Usar este contador**. Se o profissional não estiver na lista, **Cadastrar contador** abre o cadastro com o nome já digitado na busca |

Com contador, o cartão mostra a foto, o nome, o CRC, o e-mail e o telefone dele, além de:

| Ação | Descrição |
|------|-----------|
| **Editar dados** | Abre a janela **Editar contador** para alterar os dados do contador. Confirme com **Salvar contador** |
| **Trocar contador** | Abre a janela **Trocar contador** para escolher outro contador cadastrado |

Ao trocar o contador, salve a empresa para confirmar o novo vínculo.

As janelas de cadastro e edição do contador têm os campos **Nome**, **CRC**, **Tipo**, **CNPJ** ou **CPF**, **Razão social**, **RG**, **Data fundação** ou **Data nascimento**, **Indicador da IE**, **Inscrição Estadual**, **Inscrição Municipal**, **E-mail**, **Telefone**, **Celular** e o endereço.

#### Endereço da empresa

Seção recolhível com **CEP**, **Logradouro**, **Número**, **Complemento**, **Bairro** e **Cidade**.

#### Contato e identidade visual

Seção recolhível com **E-mail**, **Telefone**, **WhatsApp**, **Website**, **Instagram**, **Facebook** e o logo da empresa (imagens PNG ou JPG).

### Configuração fiscal por empresa

A configuração da nota fiscal eletrônica (NFe) e o certificado digital são definidos para cada empresa. Quando há mais de uma empresa ativa, essas telas exibem o campo **Empresa** no topo; ao trocar a empresa, a tela passa a mostrar a configuração dela. Com uma empresa só, o campo não aparece.

#### CSC da NFC-e

Na configuração da NFe, o campo **Token CSC da NFC-e** nunca exibe o token gravado. Quando a empresa já tem um CSC, o campo fica vazio com a indicação **Configurado — informe um novo token para trocar**. Para trocar o CSC, digite o novo token e salve; se o campo ficar vazio ao salvar, o CSC gravado é mantido.

#### Busca automática de notas fiscais

Na configuração da NFe, a opção **Busca automática de notas fiscais** liga ou desliga, para a empresa escolhida, a busca das NF-e emitidas contra o CNPJ dela. Desligar a opção pausa a busca daquela empresa; ligar de novo a retoma.

A tela de notas de entrada mostra o estado da busca de cada empresa:

| Estado | Descrição |
|--------|-----------|
| **Sincronização ativa** | A busca está funcionando normalmente |
| **Erro na sincronização** | As últimas tentativas falharam; a mensagem do erro aparece logo abaixo |
| **Sincronização pausada** | A busca está desligada para a empresa |

Cada estado mostra também a data da **Última busca**, o NSU processado e o tempo até a **Próxima busca**. Com mais de uma empresa, cada linha traz o nome e o CNPJ da empresa e o botão **Pausar** ou **Retomar**, que abre a configuração da NFe já na empresa da linha. O botão aparece para quem tem acesso a essa configuração.

### Certificado Digital

A tela de **Certificado Digital** permite enviar e remover o arquivo do certificado usado na emissão de documentos fiscais.

| Campo | Descrição |
|------|-----------|
| Empresa | Empresa que usa o certificado. Aparece quando há mais de uma empresa ativa |
| Arquivo do certificado | Arquivo utilizado na emissão de NF-e e NFC-e |
| Senha | Senha de acesso ao certificado |
| Remover arquivo anterior | Indica se o arquivo cadastrado será substituído no envio |

### Gateways de Pagamento

A tela de **Gateways de Pagamento** reúne as informações do provedor e as taxas por forma de pagamento.

| Campo | Descrição |
|------|-----------|
| Tipo de pessoa | Define se o cadastro é de pessoa física ou jurídica |
| CPF | Documento usado quando o cadastro é de pessoa física |
| CNPJ | Documento usado quando o cadastro é de pessoa jurídica |
| Email | Email de contato do gateway |
| Telefone | Telefone de contato do gateway |
| Endereço | Endereço cadastrado para o provedor |
| Taxas por forma de pagamento | Percentuais e valores cobrados em cada meio de pagamento |

### Cenários Tributários

A tela de **Cenários Tributários** organiza os parâmetros fiscais por tributo, em abas separadas.

#### Dados gerais

| Campo | Descrição |
|------|-----------|
| Nome | Nome do cenário fiscal |
| Regime | Regime tributário usado como base |
| Estado | Estado de referência do cenário |
| CFOP | CFOP vinculado ao cenário |

#### Aba ICMS

| Campo | Descrição |
|------|-----------|
| Situação tributária (CST/CSOSN) | Situação tributária do ICMS conforme o regime |
| ICMS DIFAL para não contribuinte | Indica se o DIFAL é aplicado para consumidor final não contribuinte |
| Modalidade base de cálculo | Forma usada para calcular a base do ICMS |
| Modalidade base de cálculo ICMS-ST | Forma usada para calcular a base do ICMS-ST |
| Alíquota aplicável de cálculo do crédito | Percentual usado no cálculo de crédito |
| Alíquota ICMS | Percentual do ICMS |
| Base de Cálculo ICMS | Percentual da base de cálculo do ICMS |
| Alíquota FCP | Percentual do Fundo de Combate à Pobreza |
| Alíquota FCP ST | Percentual de FCP sobre ICMS-ST |
| Alíquota PIS | Percentual de PIS usado no bloco fiscal |
| Alíquota COFINS | Percentual de COFINS usado no bloco fiscal |
| MVA / IVA | Margem de valor agregado |
| Alíquota ICMS-ST | Percentual do ICMS-ST |
| Base de Cálculo ICMS-ST | Percentual da base de cálculo do ICMS-ST |
| Base Diferimento | Percentual usado no diferimento |
| Presumido | Percentual presumido |
| Cód. benef. Redução BC | Código de benefício fiscal para redução de base |

#### Aba IPI

| Campo | Descrição |
|------|-----------|
| Situação tributária do IPI | Situação tributária do IPI |
| Alíquota | Percentual do IPI |
| Código de enquadramento | Código de enquadramento do IPI |

#### Aba ISSQN

| Campo | Descrição |
|------|-----------|
| Situação tributária (CST) | Situação tributária do ISSQN |
| Alíquota | Percentual do ISSQN |
| Base | Percentual da base do ISSQN |
| Descontar ISS | Indica se o ISS é descontado da nota fiscal |

#### Aba PIS

| Campo | Descrição |
|------|-----------|
| Situação tributária do PIS | Situação tributária do PIS |
| Alíquota | Percentual do PIS |

#### Aba COFINS

| Campo | Descrição |
|------|-----------|
| Situação tributária do COFINS | Situação tributária do COFINS |
| Alíquota | Percentual do COFINS |

#### Aba IBS/CBS

| Campo | Descrição |
|------|-----------|
| Situação tributária (CST) | Situação tributária do IBS/CBS |
| Classificação Tributária | Classificação tributária conforme a situação escolhida |
| Alíq. IBS UF | Percentual do IBS estadual |
| % Redução | Percentual de redução aplicado |
| Alíq. Efetiva | Percentual efetivo calculado |
| Alíq. IBS Municipal | Percentual do IBS municipal |
| CBS | Percentual da CBS |

#### Aba IS

| Campo | Descrição |
|------|-----------|
| Situação tributária (CST) | Situação tributária do Imposto Seletivo |
| Classificação Tributária | Classificação tributária do imposto |
| Alíquota (%) | Percentual do imposto |
| Alíq. específica (R$/unid) | Valor específico por unidade |
| Unidade Tributável | Unidade usada no cálculo |

### Natureza de Operação

A tela de **Natureza de Operação** organiza as configurações fiscais por aba, incluindo impostos, exceções e classificações tributárias.

#### Aba ICMS

| Campo | Descrição |
|------|-----------|
| Situação tributária do ICMS | Situação tributária conforme o regime |
| Modalidade base de cálculo | Forma de cálculo da base do ICMS |
| Modalidade base de cálculo ICMS-ST | Forma de cálculo da base do ICMS-ST |
| ICMS DIFAL para não contribuinte | Indica uso do DIFAL |
| Alíquota ICMS | Percentual do ICMS |
| Base de Cálculo ICMS | Percentual da base do ICMS |
| Alíquota FCP | Percentual do FCP |
| Alíquota FCP ST | Percentual do FCP-ST |
| Alíquota ICMS-ST | Percentual do ICMS-ST |
| Base de Cálculo ICMS-ST | Percentual da base do ICMS-ST |
| Alíquota FCP ICMS-ST | Percentual do FCP aplicado ao ICMS-ST |
| CFOP | CFOP da operação |
| Obter ICMS-ST retido anteriormente a partir de nota fiscal de compra | Usa o valor retido em nota de compra |
| Exceções de ICMS | Regras específicas para situações tributárias |

#### Aba IPI

| Campo | Descrição |
|------|-----------|
| Situação tributária do IPI | Situação tributária do IPI |
| Alíquota | Percentual do IPI |
| Código de enquadramento | Código de enquadramento do IPI |
| Exceções de IPI | Regras específicas para o IPI |

#### Aba ISSQN

| Campo | Descrição |
|------|-----------|
| Situação tributária do ISSQN | Situação tributária do ISSQN |
| Alíquota | Percentual do ISSQN |
| Base | Percentual da base do ISSQN |
| Descontar ISS | Indica se o ISS é descontado da nota fiscal |
| Exceções de ISSQN | Regras específicas para o ISSQN |

#### Aba PIS

| Campo | Descrição |
|------|-----------|
| Situação tributária do PIS | Situação tributária do PIS |
| Alíquota | Percentual do PIS |
| Exceções de PIS | Regras específicas para o PIS |

#### Aba COFINS

| Campo | Descrição |
|------|-----------|
| Situação tributária do COFINS | Situação tributária do COFINS |
| Alíquota | Percentual do COFINS |
| Exceções de COFINS | Regras específicas para o COFINS |

#### Aba IBS/CBS

| Campo | Descrição |
|------|-----------|
| Situação tributária (CST) | Situação tributária do IBS/CBS |
| Classificação Tributária | Classificação tributária conforme a situação escolhida |
| Alíq. IBS UF | Percentual do IBS estadual |
| % Redução | Percentual de redução aplicado |
| Alíq. Efetiva | Percentual efetivo calculado |
| Alíq. IBS Municipal | Percentual do IBS municipal |
| CBS | Percentual da CBS |

#### Aba IS

| Campo | Descrição |
|------|-----------|
| Situação tributária (CST) | Situação tributária do Imposto Seletivo |
| Classificação Tributária | Classificação tributária do imposto |
| Alíquota (%) | Percentual do imposto |
| Alíq. específica (R$/unid) | Valor específico por unidade |
| Unidade Tributável | Unidade usada no cálculo |

## Configurações de Usuário

| Configuração | Descrição |
|-------------|-----------|
| Conta | Dados da conta do usuário logado |
| Notificações | Preferências de avisos recebidos pelo sino |
| Sessões | Controle de acessos e sessões do usuário |

### Notificações do usuário

Em **Configurações da conta**, no menu do usuário, a aba **Notificações** lista os tipos de notificação com a descrição de cada um. Desligue os tipos que não quer receber no sino. As notificações urgentes chegam sempre, mesmo de um tipo desligado. Veja mais em [Notificações](../notificacoes/notificacoes/).

## Acesso por permissão

As seções de **Preferências** aparecem conforme a permissão do usuário. Quando o usuário não tem acesso a uma opção, ela não é exibida no menu nem nas rotas da tela.