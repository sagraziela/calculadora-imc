import { 
    userWeight,
    userHeight, 
    Modal
} from './modal.js'
import Utils from './utils.js'
import { AlertError } from './alert-error.js'

const form = document.querySelector('form')

const utils = Utils({
    userWeight,
    userHeight
})

form.onsubmit = event => {
    event.preventDefault()

    if (utils.notANumber(userWeight.value) || utils.notANumber(userHeight.value)) {
        
        AlertError.open()

    } else {
        Modal.open()
        AlertError.close()
    }
}

