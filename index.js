let btn = document.getElementById('button')
let list = document.getElementById('listItems')
let input = document.getElementById('listInput')

btn.addEventListener('click',() => {
    if(input.value === '') {
        alert('You have not entered an item ')
        return
    }

    let li = document.createElement('li')
    li.innerText = input.value
    list.append(li)
})