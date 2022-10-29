import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');

  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  
};

export const getProductsByCategory = (categoryId) => {
  // obtenemos la basedatos
  const database = getFirestore();

  // obtenemos la referencia a la collecion
  const collectionReference = collection(database, 'items');

  // crear query/consulta con el filtro que queremos aplicar
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))

  // obtenemos los datos desde firestore
  return getDocs(collectionQuery)
    .then(snapshot => {
      if (snapshot.size === 0)
        return [];
      
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

const products = [
  { title: 'Jabonera Peirano', category: 'accesorios', description: 'CARACTERÍSTICAS-Cierre cerámico. ACABADO: -Cuerpo totalmente metálico. MODELOS DISPONIBLES: -Bicomando lavatorio.', price: 7100,pictureURL: 'https://i.postimg.cc/9QT9rRYd/jabonera-cromo-peirano.jpg', stock: 10},
  { title: 'Toallero Peirano', category: 'accesorios', description: 'CARACTERÍSTICAS-Cierre cerámico. ACABADO: -Cuerpo totalmente metálico. MODELOS DISPONIBLES: -Bicomando lavatorio.', price: 3100,pictureURL: 'https://i.postimg.cc/MGVY23L8/Toallero-de-amurar-cromo-peirano.jpg', stock: 10},
  { title: 'Toallero Barral', category: 'accesorios', description: 'CARACTERÍSTICAS-Cierre cerámico. ACABADO: -Cuerpo totalmente metálico. MODELOS DISPONIBLES: -Bicomando lavatorio.', price: 4000,pictureURL: 'https://i.postimg.cc/3Rr0SL51/Toallero-cromo-peirano.jpg', stock: 10}
]

export const createAllProducts = async () => {
  try {
    // obtenemos la basedatos
    const database = getFirestore(); 

    // obtenemos la referencia a la collecion
    const collectionReference = collection(database, 'items');
    for(let i = 0; i < products.length; i++) {
      const snapshot = await addDoc(collectionReference, products[i]);
    }
  } catch (error) {
    console.warn(error)
  }
}

