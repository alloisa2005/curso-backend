
class Usuario {
  
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName = () => `${this.nombre} ${this.apellido}`;

  addMascota = (mascota) => this.mascotas.push(mascota);

  countMascotas = () => this.mascotas.length;

  addBook = (nombre,autor) => this.libros.push({nombre,autor});

  getBookNames = () => this.libros.map(libro => libro.nombre);
}

let pepe = new Usuario('Roberto', 'Castro', [], []);
console.log(pepe.getFullName());

pepe.addMascota('Perro');
pepe.addMascota('Gato');
pepe.addMascota('Conejo');
console.log(pepe.countMascotas());

pepe.addBook('Harry Potter', 'J.K. Rowling');
pepe.addBook('El señor de los anillos', 'J.R.R. Tolkien');
pepe.addBook('El Hobbit', 'J.R.R. Tolkien');
console.log(pepe.getBookNames());