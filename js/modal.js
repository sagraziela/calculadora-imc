import Utils from "./utils.js"

export const userWeight = document.querySelector('#user-weight')
export const userHeight = document.querySelector('#user-height')

const utils = Utils({
    userWeight,
    userHeight
})

export const Modal = {

    screen: document.querySelector('.modal-wrapper'),
    message: document.querySelector('#result'),
    buttonClose: document.querySelector('.close'),

    open() {
        this.screen.classList.add('open')
        Modal.message.innerText = `Seu IMC é de: ${utils.calcIMC()}`
    },
    close() {
        this.screen.classList.remove('open')
        utils.resetInputs()
    }
}

Modal.buttonClose.addEventListener('click', () => {
    Modal.close()
})

window.addEventListener('keydown', event => {
    if (event.key === "Escape") {
        Modal.close()
    }
})

