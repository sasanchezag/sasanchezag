function platzom(str) {
    let translation = str

    // si termina en "ar" se suprimen
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2) 
    }


    // si termina con z se le añade pe
    if (str.toLowerCase().startsWith('z')){
        translation += 'pe'
    }

    
    // si tiene 10 o mas letras se parte a la mitad unir con guion
    
    const length = translation.length
    if (length >= 10) {
        const firstHalf = translation.slice(0, Math.round(length / 2))
        const SecondtHalf = translation.slice(Math.round(length / 2))
        translation = `${firstHalf}-${SecondtHalf}`
    
    }
    
    //si es palindromo no cuentan las reglas anteriores
    //devolvemos la misma palabra intercambiando may y mins

     
    const reverse = (str) => str.split('').reverse().join('')
   
    function minMay(str) {
        const length = str.length
        let translation = ''
        let capitalize = true
        for (let i = 0; i < length; i++){
            const char = str.charAt
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize

        }
        return translation     
    }
   
    


    if (str == reverse(str)){
        return minMay (str)


    }
    
    return translation   
}

console.log(platzom("Programar"))
console.log(platzom("Zorro"))
console.log(platzom("Abecedario"))
console.log(platzom("sometemos"))