
class Libro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
    }
  
    obtenerInformacion() {
      return `${this.titulo} - ${this.autor}`;
    }
  }
  
  class Biblioteca {
    constructor() {
      this.libros = [];
    }
  
    agregarLibro(libro) {
      this.libros.push(libro);
    }
  
    listarLibros() {
      return this.libros.map(libro => libro.obtenerInformacion());
    }
  }
  
  const libro1 = new Libro("las mujeres que aman demaisado", "Robin Norwood");
  const libro2 = new Libro("Game of Thrones", "novela de George R. R. Martin");
  
  const biblioteca = new Biblioteca();
  biblioteca.agregarLibro(libro1);
  biblioteca.agregarLibro(libro2);
  
  console.log("Lista de libros en la biblioteca:");
  console.log(biblioteca.listarLibros());
  
