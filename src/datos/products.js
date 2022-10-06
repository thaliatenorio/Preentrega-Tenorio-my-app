export const products = [
    {id: 1, title: 'Jabonera Peirano', category: 'Cromado', description: 'CARACTERÍSTICAS-Cierre cerámico. ACABADO: -Cuerpo totalmente metálico. MODELOS DISPONIBLES: -Bicomando lavatorio.', price: 7100,pictureURL: 'https://i.postimg.cc/9QT9rRYd/jabonera-cromo-peirano.jpg'},
    {id: 2, title: 'Toallero Peirano', category: 'Cromado', description: 'CARACTERÍSTICAS-Cierre cerámico. ACABADO: -Cuerpo totalmente metálico. MODELOS DISPONIBLES: -Bicomando lavatorio.', price: 3100,pictureURL: 'https://i.postimg.cc/MGVY23L8/Toallero-de-amurar-cromo-peirano.jpg'},
    {id: 3, title: 'Toallero Barral', category: 'Cromado', description: 'CARACTERÍSTICAS-Cierre cerámico. ACABADO: -Cuerpo totalmente metálico. MODELOS DISPONIBLES: -Bicomando lavatorio.', price: 4000,pictureURL: 'https://i.postimg.cc/3Rr0SL51/Toallero-cromo-peirano.jpg'},
    {id: 4, title: 'Jabonera de Vidrio', category: 'Negro Mate', description: 'CARACTERÍSTICAS-Cierre cerámico. ACABADO: -Cuerpo totalmente metálico. MODELOS DISPONIBLES: -Bicomando lavatorio.',price: 3100,pictureURL: 'https://i.postimg.cc/nrCjZCLQ/jabonera-de-vidrio-de-amurar-aro-peirano-negro.jpg'},
    {id: 5, title: 'Percha De Amurar', category: 'Negro Mate', description: 'CARACTERÍSTICAS-Cierre cerámico. ACABADO: -Cuerpo totalmente metálico. MODELOS DISPONIBLES: -Bicomando lavatorio.',price: 3100,pictureURL: 'https://i.postimg.cc/SKmWhkY7/percha-de-amurar-aro-peirano-negro.jpg'},
    {id: 6, title: 'Kit Accesorios Completo', category: 'Negro Mate', description: 'CARACTERÍSTICAS-Cierre cerámico. ACABADO: -Cuerpo totalmente metálico. MODELOS DISPONIBLES: -Bicomando lavatorio.',price: 3100,pictureURL: 'https://i.postimg.cc/B6VDHFYM/Set-peirano-negro.jpg'}
]

export const obtenerProductos = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        return resolve(products);
      }, 1000)
    })
  
    return promise
  };
  
  export const traerProducto = (id) => {
    const promise = new Promise((resolve) => {
      const result = products.find((product) => product.id === parseInt(id))
      setTimeout(() => {
        return resolve(result);
      }, 1000)
    })
  
    return promise
  };
  
  export const traerProductosByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
      const results = products.filter((product) => product.category === categoryId);
      setTimeout(() => {
        return resolve(results);
      }, 1000)
    })
  
    return promise
  };