# Meu site CRUD - MVP

Este projeto é um MVP (Minimum Viable Product) da Disciplina Desenvolvimento Full Stack Básico da PUCRIO.

## Introdução

Esse front-end está utilizando a [API](https://github.com/Levickl/MVP-3-BackEnd) desenvolvida no projeto e também a API do Auth0 para gerenciamento de usuários. Existem dois tipos de usuários: admin e normal. O usuário admin tem permissão para editar, criar, deletar e ver usuários, enquanto o usuário normal pode apenas visualizar os dados.

Vale ressaltar que o CSS foi desenvolvido de forma pura, sem o uso de frameworks.

## Utilização da API

Este front-end consome a API desenvolvida para gerenciar operações de CRUD (Create, Read, Update, Delete). Para que o front-end funcione corretamente, é necessário ter a API em execução. O repositório da API pode ser encontrado [aqui](https://github.com/Levickl/MVP-3-BackEnd).

A API do Auth0 esta todo configurado corretamente dentro do codigo com a key para fazer o controle dos usuarios.

## Como executar

### 1. Executando com Docker
Abra o terminal no diretório do projeto (onde o Dockerfile está localizado):

```
cd FrontEnd
```

Construa a imagem Docker:

```
docker build -t meu-html-server .
```

Execute o contêiner Docker na porta 5500:
```
docker run -d -p 5500:80 meu-html-server
```

Acesse o front-end no navegador:

Abra http://127.0.0.1:5500 para visualizar o site.

### 2. Executando com o Live Server no Visual Studio Code

- Requisitos: Tenha o Live Server instalado no VSCode.

Inicie o Live Server: Clique com o botão direito no arquivo index.html e selecione Open with Live Server.

Acesse o front-end no navegador: Abra http://127.0.0.1:5500 para visualizar o site.

## Logins

Aqui estão os logins para os dois tipos de usuários:

- **Usuário Admin**:
    - Email: `levileao89@gmail.com`
    - Senha: `12345678`

- **Usuário Normal**:
    - Email: `levickl@hotmail.com`
    - Senha: `12345678`
