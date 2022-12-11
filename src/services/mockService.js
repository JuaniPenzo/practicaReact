import data from '../data/data';

export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

export function getSingleItem(idProducto) {    
  return new Promise((resolve, reject) => {
      setTimeout(()=> {
          let productoEncontrado = data.find(elementoArray => elementoArray.id === parseInt(idProducto) )
              if(productoEncontrado)
              resolve(productoEncontrado)
              else reject("Item no encontrado")
          })
      },2000)
  }
