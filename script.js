// elementos

const form = document.getElementById('userForm')
const listBtn = document.getElementById('listBtn')
const userList = document.getElementById('usersList')

// array de usuários

const users = [];

// adicionar usuários

function addUser(name,age,course){
    users.push({name,age,course});
}

// display de usuários

function displayUsers(){
    userList.innerHTML = '';
    users.forEach((user, index) =>{
        const userHTML = `
        <div class="userItem">
            <h3>${user.name}</h3>
            <p>Age: ${user.age}</p>
            <p>Course: ${user.course}</p>
            <button class="deleteBtn" onclick="deleteUser(${index})">Deletar</button>
        </div>
        `;
        userList.insertAdjacentHTML('beforeend', userHTML);
    });
}

// função deletar

function deleteUser (index) {
    if (confirm("Você tem certeza que deseja deletar este usuário?")) {
        users.splice(index, 1);
        displayUsers();
    }
}

// função lista de usuários

function toggleUsersList(){
    userList.classList.toggle('hidden')
    if(!userList.classList.contains('hidden'))
        displayUsers();
}

// formulario inserir usuário

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;
    addUser(name, age, course);
    form.reset();
})

// botão listagem

listBtn.addEventListener('click', toggleUsersList)

// validação de dados
function addUser (name, age, course) {
    if (!name || !age || !course) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    if (isNaN(age) || age <= 0) {
        alert("Por favor, insira uma idade válida.");
        return;
    }
    users.push({ name, age, course });
}