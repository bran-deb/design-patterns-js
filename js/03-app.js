//Singleton

let instancia = null

class Persona {
    constructor(nombre, email) {
        if (!instancia) {               //si no hay instancia
            this.nombre = nombre
            this.email = email
            instancia = this            //asignamos las variables a instancia
        } else {
            return instancia            //retorna instancia actual
        }
    }
}

const persona = new Persona('Juan', 'correo')
console.log(persona)

const persona2 = new Persona('otro juan', 'otro correo')
console.log(persona2)
