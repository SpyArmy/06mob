const navElement = document.querySelector('#theNav > ul');
const btnElement = document.querySelector('#theNav > button');
const rightNow = new Date();


btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
} )

document.querySelector('#year').textContent = rightNow.getFullYear();

console.log('Hello, world!');