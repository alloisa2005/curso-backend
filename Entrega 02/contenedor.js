let fs = require('fs');

class Contenedor {

  constructor(archivo) {
    this.archivo = archivo;
  }

  reSave = async (obj) => {
    
    try {
      if(fs.existsSync(this.archivo)){
        let arch = await fs.promises.readFile(this.archivo, 'utf-8');
        let data = JSON.parse(arch);
        let id = data[data.length - 1].id+1;
        obj.id = id;
        data.push(obj);
        await fs.promises.writeFile(this.archivo,JSON.stringify(data,null,2))
        return {status: "success", message: "Data added"}
      }else {
        obj.id = 1
        await fs.promises.writeFile(this.archivo, JSON.stringify([obj], null, 2))
        return {status: "success", message: "Data created"}
      }

    } catch (error) {
      return {status: 'error', message: error.message}
    }
  }

  save = (obj) => {
    try {
      let arch = fs.readFileSync(this.archivo, 'utf-8'); 
      let data = JSON.parse(arch);                 
      
      //fs.promises.readFile(this.archivo).then( r => console.log(r));
      // Obtengo nuevo ID a grabar
      let newId = data[data.length - 1].id + 1;
      obj.id = newId;

      data.push(obj);                  
      fs.writeFileSync(this.archivo, JSON.stringify(data,null,2) );          

      return obj.id;

    } catch (error) {  
      // Si el archivo no existe lo creo y le agrego el array con el obj pasado por parametro e ID = 1
      obj.id = 1;
      let data = JSON.stringify([obj],null,2);
      fs.writeFileSync(this.archivo, data);  
      
      return obj.id;
    }
  }

  getById = (id) => {
    try {
      let arch = fs.readFileSync(this.archivo, 'utf-8'); 
      let data = JSON.parse(arch);                 
      let obj = data.find( (item) => item.id === id);
      return obj ? obj : null;      

    } catch (error) {
      console.log(`No existe el archivo ${this.archivo}`);
    }
  }

  getAll = () => {
    try {
      let arch = fs.readFileSync(this.archivo, 'utf-8'); 
      return JSON.parse(arch,null,2);                       

    } catch (error) {
      console.log(`No existe el archivo ${this.archivo}`);
    }
  }

  deleteById = (id) => {
    try {
      let arch = fs.readFileSync(this.archivo, 'utf-8'); 
      let data = JSON.parse(arch);

      data = data.filter( (item) => item.id !== id);

      data = JSON.stringify(data,null,2);
      fs.writeFileSync(this.archivo, data);  

    } catch (error) {
      console.log(`No existe el archivo ${this.archivo}`);
    }
  }

  deleteAll = () => {
    try {
      let data = JSON.stringify([],null,2);
      fs.writeFileSync(this.archivo, data);
    } catch (error) {
      console.log(`No existe el archivo ${this.archivo}`);
    }
  }  
}

module.exports = Contenedor;