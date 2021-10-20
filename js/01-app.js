//CLASS PATTERN
//patron creacional

class Persona {

    constructor(nombre, email) {
        this.nombre = nombre
        this.email = email
    }
}

const persona = new Persona('juan', 'bran@gmail.com')
console.log(persona)