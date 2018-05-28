# Plano de testes

## Nome do caso de uso: Manter cadastro

**Preparação:**

* Criar um usuário no sistema.

**Procedimento de teste:**

| Passo | Procedimento | Resultado esperado |
| --- | --- | --- |
| 1 | Executar o navegador Chrome e acesse a URL http://catsmatch.mybluemix.net/. | Apresentação da tela de login do sistema |
| 2 | Clicar no botão **Cadastrar** e preencher o nome de usuário (JoaoFlavio), e-mail (joaoflavio@gmail.com) e senha (12345). | Tooltip Usuario Cadastrado |
| 3 | Clicar na opção de **Confirmar**. | Apresentação da tela de login do sistema |



## Nome do caso de uso: Cadastrar animal de estimação

**Preparação:**

* Realizar o cadastro de um animal para adoção

**Procedimento de teste:**

| Passo | Procedimento | Resultado esperado |
| --- | --- | --- |
| 1 | Executar o navegador Chrome e acesse a URL http://catsmatch.mybluemix.net/. | Apresentação da tela de login do sistema |
| 2 | Informar o email (joaoflavio@gmail.com), senha (12345) e depois clicar no botão **Entrar**. | Apresentação da tela inicial do site |
| 3 | Clicar na opção **Cadastrar pet**, preencher o nome (Mia), idade (2), raça (Siames), descrição (Gata fofa e carinhosa) e inserir uma foto (a sua escolha), após isso, clicar no botão **Cadastrar gato** | Tooltip gato cadastrado |



## Nome do caso de uso: Buscar animais para adoção

**Preparação:**

* Procurar por animais disponíveis para adoção

**Procedimento de teste:**

| Passo | Procedimento | Resultado esperado |
| --- | --- | --- |
| 1 | Executar o navegador Chrome e acesse a URL http://catsmatch.mybluemix.net/. | Apresentação da tela de login do sistema |
| 2 | Informar o email (joaoflavio@gmail.com), senha (12345) e depois clicar no botão **Entrar**. | Apresentação da tela inicial do site |
| 3 | Clicar na opção **Pagina Adoção** | Apresentação de todos os animais cadastrados |



## Nome do caso de uso: Interagir com o dono do animal

**Preparação:**

* Realizar interação com o dono do animal que deseja adotar

**Procedimento de teste:**

| Passo | Procedimento | Resultado esperado |
| --- | --- | --- |
| 1 | Executar o navegador Chrome e acesse a URL http://catsmatch.mybluemix.net/. | Apresentação da tela de login do sistema |
| 2 | Informar o nome de usuário, senha e depois clicar no botão **Entrar**. | Apresentação da tela inicial do site |
| 3 | Usuário seleciona o gato que deseja interagir com o dono na **página de adoção** | Apresentação da tela de chat para interação |
| 4 | Usuário interage com o dono | Apresentação da tela de chat para interação |

