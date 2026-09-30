let btn = document.getElementById('button')
let list = document.getElementById('listItems')
let input = document.getElementById('listInput')

btn.addEventListener('click',() => {
    let li = document.createElement('li')
    li.innerText = input.value

    list.appendChild(li)
})