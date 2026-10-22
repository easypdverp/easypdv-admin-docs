---
title: Setup Guide
description: Guia de configuracao inicial do Despensinha ERP.
sidebar:
  order: 2
---

O **Setup Guide** e o assistente de configuracao inicial do Despensinha ERP. Ao acessar o sistema pela primeira vez, o usuario e direcionado automaticamente para este fluxo, que deve ser concluido antes de utilizar as demais funcionalidades.

O processo de configuracao e dividido em quatro etapas sequenciais, apresentadas em formato de passo a passo.

## Etapas do Setup

### Etapa 1: Dados da Empresa

Nesta etapa, o usuario informa os dados cadastrais da empresa.

| Campo | Descricao | Obrigatorio |
|-------|-----------|:-----------:|
| Razao social | Nome juridico da empresa | Sim |
| Nome fantasia | Nome comercial da empresa | Sim |
| Tipo de pessoa | Pessoa Fisica ou Juridica | Sim |
| CNPJ | Numero do CNPJ (se Pessoa Juridica) | Condicional |
| CPF | Numero do CPF (se Pessoa Fisica) | Condicional |
| Telefone | Telefone de contato da empresa | Sim |
| Regime tributario | Regime fiscal da empresa | Sim |
| Endereco | Rua, numero, bairro, CEP, cidade e estado | Sim |

> O campo CNPJ e obrigatorio quando o tipo de pessoa for Juridica. O campo CPF e obrigatorio quando o tipo de pessoa for Fisica.

### Etapa 2: Configuracoes de Acesso

Nesta etapa, o usuario configura as credenciais do administrador do sistema.

| Campo | Descricao | Obrigatorio |
|-------|-----------|:-----------:|
| E-mail do administrador | E-mail que sera utilizado para login | Sim |
| Senha do administrador | Senha de acesso (minimo 6 caracteres) | Sim |
| Confirmacao de senha | Repetir a senha para confirmacao | Sim |

> As senhas devem ser identicas. Caso nao sejam, o sistema exibira uma mensagem de erro.

### Etapa 3: Logo e Estilo

Nesta etapa, o usuario personaliza a aparencia do sistema com a identidade visual da empresa. E possivel enviar o logotipo e configurar o estilo visual.

### Etapa 4: Finalizado

Apos preencher todas as etapas, o sistema exibe uma tela de confirmacao indicando que a configuracao foi concluida com sucesso. A partir desse momento, o sistema esta pronto para uso.

## Como Completar o Setup

1. Acesse o Despensinha ERP pela primeira vez
2. O sistema exibira automaticamente o assistente de configuracao
3. Preencha os **dados da empresa** e clique em **Continuar**
4. Configure o **e-mail e senha do administrador** e clique em **Continuar**
5. Personalize o **logo e estilo** do sistema e clique em **Finalizar**
6. Aguarde a confirmacao e comece a utilizar o sistema
