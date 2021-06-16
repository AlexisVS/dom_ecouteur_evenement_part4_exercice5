// exo 1
let input = document.getElementsByTagName('input');
input[0].addEventListener('focus', () => {
    input[0].style.backgroundColor = 'blue'
})

// exo 2

input[1].addEventListener('focus', () => {
    input[1].style.backgroundColor = 'blue'
})
input[1].addEventListener('focusout', () => {
    input[1].style.backgroundColor = 'inherit'
})
// exo 3
let p1 = document.getElementsByClassName('premierParagraphe')[0]
let p2 = document.getElementsByClassName('secondParagraphe')[0]
let p3 = document.getElementsByClassName('dernierParagraphe')[0]
p1.innerHTML = p2.innerHTML;
p3.innerHTML = p2.innerHTML;

// exo 4
let aRenommer = document.getElementById('exo4');
let button = document.querySelectorAll('.buttonExo.btn.btn-primary')[1];

button.addEventListener('click', () => {
    aRenommer.innerHTML = document.getElementsByTagName('input')[2].value
})

// exo 5

let exo5Button = document.querySelector('.btn.btn-primary.mb-2');
console.log(exo5Button);
let exo5P = document.querySelectorAll('p')[4].innerHTML.substr(9).trim()
let exo5Image = document.querySelector('img')
console.log(exo5Image);
exo5Button.addEventListener('click', () => {
    console.log(exo5Image.attributes);
    exo5Image.setAttribute('src', exo5P)
})
// 6

let exo6Image1 = document.querySelectorAll('img')[1]
let exo6Image2 = document.querySelectorAll('img')[2]
let src;
exo6Image1.addEventListener('click', () => {
    exo6Image2.setAttribute('src',exo6Image1.getAttribute('src'))
})

//7
let allP = document.querySelectorAll('.box-body')[6].querySelectorAll('p')
let exo6Button = document.querySelectorAll('.box-body')[6].querySelector('.btn.btn-primary.mb-2');
exo6Button.addEventListener('click', () => {
    let tempP = allP[0].innerHTML
    allP[0].innerHTML = allP[1].innerHTML;
    allP[1].innerHTML = tempP
})