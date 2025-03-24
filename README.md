# Registro de Usuários

Este projeto é um aplicativo simples de registro de usuários que permite adicionar, listar e deletar usuários. Os usuários são armazenados em um array e suas informações (nome, idade e curso) são exibidas na interface do usuário.

## Funcionalidades

- **Adicionar Usuários**: Permite que o usuário insira seu nome, idade e curso através de um formulário.
- **Listar Usuários**: Exibe todos os usuários registrados em uma lista.
- **Deletar Usuários**: Permite que o usuário delete um registro de usuário após confirmação.
- **Validação de Dados**: Verifica se todos os campos estão preenchidos e se a idade é um número válido antes de adicionar um usuário.

## Estrutura do Código

### Elementos HTML

O código utiliza os seguintes elementos HTML:

- `userForm`: Formulário para inserir os dados do usuário.
- `listBtn`: Botão para mostrar ou ocultar a lista de usuários.
- `usersList`: Elemento onde a lista de usuários é exibida.

### Array de Usuários

Os usuários são armazenados em um array chamado `users`, onde cada usuário é representado como um objeto com as propriedades `name`, `age` e `course`.

### Funções Principais

1. **addUser (name, age, course)**:
   - Adiciona um novo usuário ao array `users`.
   - Realiza validações para garantir que todos os campos estejam preenchidos e que a idade seja válida.

2. **displayUsers()**:
   - Exibe a lista de usuários no elemento `usersList`.
   - Limpa a lista existente antes de adicionar os novos usuários.

3. **deleteUser (index)**:
   - Remove um usuário do array `users` com base no índice fornecido.
   - Solicita confirmação antes de deletar o usuário.

4. **toggleUsersList()**:
   - Alterna a visibilidade da lista de usuários.
   - Exibe a lista se não estiver oculta.

5. **Evento de Submissão do Formulário**:
   - Adiciona um ouvinte de evento ao formulário que impede o comportamento padrão de recarregar a página e chama a função `addUser ` com os valores dos campos de entrada.

6. **Evento de Clique no Botão de Listagem**:
   - Adiciona um ouvinte de evento ao botão que chama a função `toggleUsersList` para mostrar ou ocultar a lista de usuários.

## Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
