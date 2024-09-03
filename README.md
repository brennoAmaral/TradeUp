# Projeto Expo com React Native

Este projeto é uma aplicação móvel desenvolvido com React Native e gerenciada pelo Expo. O Expo é uma ferramenta que simplifica o desenvolvimento e o teste de aplicativos React Native.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em seu sistema. Você pode baixar e instalar o Node.js a partir de [nodejs.org](https://nodejs.org/), que inclui o npm.


## Estrutura do Projeto

Dentro da pasta `src`, você encontrará a pasta `app`, que é responsável por definir as rotas da aplicação e estilizar o cabeçalho global.

A pasta **Core** é o núcleo do aplicativo e está dividida em três camadas principais:

### View

- **Descrição**: Camada responsável pela apresentação dos dados.
- **Conteúdo**: Inclui formatadores, componentes, páginas, configurações de temas e recursos (assets).

### Application

- **Descrição**: Armazena toda a lógica de comportamento da aplicação.
- **Conteúdo**: Contém casos de uso, repositórios, DTOs (Data Transfer Objects), validações de dados, hooks principais e comportamentos específicos dos componentes e páginas.

### Entity

- **Descrição**: Contém o núcleo da aplicação e mecanismos básicos.
- **Conteúdo**: Inclui um mecanismo flexível para integração com diferentes backends, entidades dos endpoints, factories para mecanismos de busca e configurações de cache.

Esta organização visa proporcionar uma estrutura modular e reutilizável, facilitando a manutenção e evolução do projeto.


## Instalação

Siga os passos abaixo para inicializar e executar o projeto.

### 1. Clone o Repositório

Escolha um diretório do seu computador e abro o bash(ou qualquer interpretador de comando que execute git) e clone o repositório do projeto usando o comando:

```bash

git clone https://github.com/brennoAmaral/TradeUp.git

```

### 2. Acesse a pasta do projeto

Em seu terminal execute:

```bash

cd trade-up

```

### 3. Instalando dependências 

Em seu terminal execute:

```bash

npm install

```

### 4. Variaveis de ambiente 

Crie um arquivo na raiz do projeto e a nomeie com ".env" e dentro dele adicione: 

EXPO_PUBLIC_API_URL=https://dominio_do_teste/api/


### 5. Iniciando o projeto 

Antes de iniciar o projeto é necessário que você possua o android studio instalado 
ou que você instale o aplicativo do expo em seu celular e leia o qr code que será exibido na tela

```bash

npm start

```

### 5. Como gerar build do projeto 

Instale o CLI do EAS

```bash

npm install -g eas-cli

```

ou

```bash

yarn global add eas-cli

```

Realize o login com sua conta expo

```bash

npx eas login

```

build o projeto


```bash

npx eas build -p android

```

