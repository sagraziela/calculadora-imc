export default function Utils({
    userWeight,
    userHeight
}) {
    let imc

    function calcIMC(weight, height) {
        weight = Number(userWeight.value)
        height = Number(userHeight.value) / 100
        
        return imc = (weight / (height * height)).toFixed(2)
        }
    
    function resetInputs() {
        userWeight.value = ''
        userHeight.value = ''
    }

    function notANumber(value) {
        return isNaN(value) || value == ""
    }

    return {
        calcIMC,
        resetInputs,
        notANumber
    }
}
