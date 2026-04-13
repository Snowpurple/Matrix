const para = document.querySelector("p")
const text = para.innerText

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let iteration = 0
let interval = null

function randomText() {
    const str = text.split('').map((char, index) => {

        if (index < iteration) {
            return char
        }
        return characters.split('')[Math.floor(Math.random() * 52)]
    }).join("")

    para.innerText = str
    iteration += 1
}


para.addEventListener('mouseenter', function() {
    iteration = 0;
    clearInterval(interval)
    interval = setInterval(randomText, 20);
})