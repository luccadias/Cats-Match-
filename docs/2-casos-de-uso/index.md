# Casos de uso

## 1. Diagrama de casos de uso


![Dagrama dos casos de uso](caso_de_uso.png)

## 2. Especificação dos casos de uso

### 2.1. Caso de uso **REGISTRAR CHAMADO**

| Campo          | Informação        |
|---|---|
| Identificador: | UC01              |
| Nome:          | Manter Cadastro |
| Atores:        | Usuário |
| Sumário:       | Incluir, alterar e excluir cadastro |

| Fluxo Principal |
|---|
| 1) O usuario seleciona seleciona a opção **Alterar cadastro**. |
| 2) O sistema redireciona para pagina de alteração do perfil.                   |
| 3) O Cliente realiza altereção desejada em seu cadastro. |
| 4) O sistema registra que a operação foi bem-sucedida. |

| Fluxo Alternativo (2a): O sistema não encontra as informações do usuário. |
|---| 
| 1) O sistema informa que não conseguiu recuperar as informações do usuário e apresenta a opção de cadastrar o usuário. |
| 2) O Usuario preenche o formulário de cadastro ou entra pelo facebook. |
| 3) O sistema registra os dados do usuário. |
| 4) Volta ao passo (3) do fluxo principal. |


### 2.2. Cadastrar animal de estimação **

| Campo          | Informação        |
|---|---|
| Identificador: | UC02              |
| Nome:          | Cadastrar animal de estimação |
| Atores:        | Usuário |
| Sumário:       | O Usuário realiza o cadastro do seu animal de estimação |

| Fluxo Principal |
|---|
| 1) O usuario seleciona seleciona a opção **Cadastrar animal de estimação**. |
| 2) O sistema redireciona para pagina de cadastro de animal.                   |
| 3) O Cliente preenche as informações sobre seu animal e cadastra uma foto. |
| 4) O sistema registra que a operação foi bem-sucedida. |

| Fluxo Alternativo (2a): O sistema informa que animal ja esta cadastrado. |
|---| 
| 1) O sistema informa que não conseguiu realizar o cadastro pois animal ja está cadastrado. |
| 2) O Usuario clica para cadastrar um animal diferente. |
| 3) O sistema processa opção. |
| 4) Volta ao passo (3) do fluxo principal. |

### 2.3. Buscar animal para adoção **

| Campo          | Informação        |
|---|---|
| Identificador: | UC02              |
| Nome:          | Buscar animal para adoção |
| Atores:        | Usuário |
| Sumário:       | O Usuário realiza o busca de animal para adoção |

| Fluxo Principal |
|---|
| 1) O usuario seleciona seleciona a opção **Buscar animal para adoção**. |
| 2) O sistema redireciona para pagina de adoção onde é exibida lista de animais.                   |
| 3) O Cliente escolhe o animal que deseja e seleciona. |
| 4) O sistema registra opção. |

| Fluxo Alternativo (2a): O sistema informa que não a animais disponiveis. |
|---| 
| 1) O sistema informa que não há animais para adoção. |

### 2.4. Interagir com dono do animal **

| Campo          | Informação        |
|---|---|
| Identificador: | UC04              |
| Nome:          | Interagir com dono do animal |
| Atores:        | Usuário |
| Sumário:       | O Usuário realiza contato com o dono do animal qual deseja adotar |

| Fluxo Principal |
|---|
| 1) O usuario seleciona seleciona a opção **Interagir com dono do animal**. |
| 2) O sistema redireciona para pagina de chat onde é exibida uma conversa com o dono.                   |
| 3) Os dois clientes interagem. |

| Fluxo Alternativo (2a): O sistema informa que não a animais disponiveis. |
|---| 
| 1) O sistema informa que não há chat disponivel. |
