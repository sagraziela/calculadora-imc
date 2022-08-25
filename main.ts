
const form = document.querySelector('form') as HTMLFormElement
const userWeight = document.querySelector('#user-weight') as HTMLInputElement
const userHeight = document.querySelector('#user-height') as HTMLInputElement
let imc: string


const Modal = {

    screen: document.querySelector('.modal-wrapper') as HTMLElement,
    message: document.querySelector('#result') as HTMLElement,
    buttonClose: document.querySelector('.close') as HTMLButtonElement,

    open() {
        this.screen.classList.add('open')
        Modal.message.innerText = `Seu IMC é de: ${calcIMC()}`
    },
    close() {
        this.screen.classList.remove('open')
        resetInputs()
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


form.onsubmit = event => {
    event.preventDefault()

    if (notANumber(Number(userWeight.value)) || notANumber(Number(userHeight.value))) {
        
        AlertError.open()

    } else {
        Modal.open()
        AlertError.close()
    }
}



function calcIMC() {
    let weight = Number(userWeight.value)
    let height = Number(userHeight.value) / 100
    
    return imc = (weight / (height * height)).toFixed(2)
    }

function resetInputs() {
    userWeight.value = ''
    userHeight.value = ''
}

function notANumber(value: number) {
    return isNaN(value) || value === undefined
}


const AlertError = {
    element: document.querySelector('.alert-error') as HTMLElement,

    open() {
        this.element.classList.add('open')
    },
    close() {
        this.element.classList.remove('open')
    }
}