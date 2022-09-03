let fs = require('fs');

class Contenedor {

  constructor(archivo) {
    this.archivo = archivo;
  }

  save = async (obj) => {
    
    try {
      if(fs.existsSync(this.archivo)){
        let arch = await fs.promises.readFile(this.archivo, 'utf-8');
        let data = JSON.parse(arch);
        let id = data[data.length - 1].id+1;
        obj.id = id;
        console.log(obj);
        data.push(obj);
        await fs.promises.writeFile(this.archivo,JSON.stringify(data,null,2))
        return {status: "success", message: "Producto agregado"}
      }else {
        obj.id = 1
        await fs.promises.writeFile(this.archivo, JSON.stringify([obj], null, 2))
        return {status: "success", message: "Archivo creado"}
      }

    } catch (error) {
      return {status: 'error', message: error.message}
    }
  }  

  getById = async (id) => {
    try {
      if(fs.existsSync(this.archivo)){
        let arch = await fs.promises.readFile(this.archivo, 'utf-8');
        let data = JSON.parse(arch);
        let obj = data.find( (item) => item.id === id);
        
        if(!obj) return {status: 'error', data: `No existe el producto con ID: ${id}`}
        return {status: 'success', data: obj};
      }else {
        return {status:'error', message:`No existe el archivo ${this.archivo}`}
      }      
    } catch (error) {
      return {status:'error', message: error.message}
    }
  }

  getAll = async () => {
    try {
      if(fs.existsSync(this.archivo)){

        let arch = await fs.promises.readFile(this.archivo, 'utf-8');
        let data = JSON.parse(arch);

        return {status: 'success', data};

      }else {
        return {status: 'error', data: `No existe el archivo ${this.archivo}`}
      }      

    } catch (error) {
      return {status: 'error', data: error.message}
    }
  }    

  deleteById = async (id) => {
    try {
      if(fs.existsSync(this.archivo)){
        let arch = await fs.promises.readFile(this.archivo, 'utf-8');
        let data = JSON.parse(arch);
        
        let obj = data.find( (item) => item.id === id);        
        if(!obj) return {status: 'error', data: `No existe el producto con ID: ${id}`}
  
        data = data.filter( (item) => item.id !== id);      
  
        await fs.promises.writeFile(this.archivo,JSON.stringify(data,null,2))
        return {status: "success", message: `Producto ID ${id} eliminado con éxito`}
      }else{
        return {status:'error', message:`No existe el archivo ${this.archivo}`}
      }
    } catch (error) {
      console.log(`No existe el archivo ${this.archivo}`);
    }
  }

  deleteAll = async () => {
    try {
      if(fs.existsSync(this.archivo)){                
        await fs.promises.writeFile(this.archivo,JSON.stringify([],null,2))
      }else{
        return {status:'error', message:`No existe el archivo ${this.archivo}`}
      }      
    } catch (error) {
      console.log(`No existe el archivo ${this.archivo}`);
    }
  }  
}

module.exports = Contenedor;


