//Constructor pattern

class Persona {

    constructor(nombre, email) {
        this.nombre = nombre
        this.email = email
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email)
        this.empresa = empresa
    }
}

const persona = new Persona('juan', 'email.com')
const cliente = new Cliente('pedrales', 'otro@email.com', 'corp')

console.log(persona)
console.log(cliente)