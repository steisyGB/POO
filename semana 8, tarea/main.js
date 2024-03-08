class AseoCasa{
    constructor(dia,nombre,oficio){
        this.dia=dia
        this.nombre=nombre
        this.oficio=oficio
    }

    Casa(){
        return console.log(`el dia ${this.dia} le corresponde a ${this.nombre} ${this.oficio} ` )
    } 
}

class persona1 extends AseoCasa{
    Casa(){
        return console.log(`el dia ${this.dia} le corresponde a ${this.nombre} ${this.oficio}` )
    }
}

class persona2 extends AseoCasa{
    Casa(){
        return console.log(`el dia ${this.dia} le corresponde a ${this.nombre} ${this.oficio}` )
    }
}

let Aseo1 = new persona1 ('Lunes', 'Anthony', 'barrer el patio')
let Aseo2 = new persona2 ('Viernes', 'Stanley', 'lavar los platos')

Aseo1.Casa()
Aseo2.Casa()


//ejercicio 2
class Alumno{
    constructor(estudiante,materia,nota){
        this.estudiante=estudiante
        this.materia=materia
        this.nota=nota
    }

    reprobar(){
        return console.log(`el estudiante ${this.estudiante} reprobara la materia de ${this.materia} con una nota de ${this.nota} ` )
    } 
}

class Estudiante1 extends Alumno{
    reprobar(){
        return console.log(`el estudiante ${this.estudiante} reprobara la materia de ${this.materia} con una nota de ${this.nota} ` )
    } 
}

class Estudiante2 extends Alumno{
    reprobar(){
        return console.log(`el estudiante ${this.estudiante} reprobara la materia de ${this.materia} con una nota de ${this.nota} ` )
    } 
}

let Alumno1R = new Estudiante1 ('Oscar', 'Matematica 3', '4.9')
let Alumno2R = new Estudiante2 ('Federico', 'Redes Informaticas', '4.0')

Alumno1R.reprobar()
Alumno2R.reprobar()