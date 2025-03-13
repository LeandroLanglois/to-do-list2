const button = document.querySelector('.button')
const input = document.querySelector('.input')
const list = document.querySelector('.list')


let mylist = []

function addNewTask() {
    mylist.push({
        task: input.value,
        complete: false
    })

    showTask()
}

function showTask() {

    let newLi = ''

    mylist.forEach((item, index) => {

        newLi = newLi + `
        
            <li class="task ${item.complete && "done"}">
                <img src="./botao-de-verificacao.png" alt="concluído" onclick = "completeTask(${index})">
                <p>${item.task}</p>
                <img src="./lixo-removebg-preview.png" alt="excluir" id="lixo" onclick = "deleteitem(${index})">
            </li>
        
        `
    })

    list.innerHTML = newLi

}

function completeTask(index) {
    mylist[index].complete = !mylist[index].complete


    showTask()
}



function deleteitem(index) {
    mylist.splice(index, 1)

    showTask()
}

button.addEventListener('click', addNewTask)

