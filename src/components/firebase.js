// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrBijIizt2Jq7_p9g4fXMeVfI3GYJiX20",
  authDomain: "ecommerce-react-mg.firebaseapp.com",
  projectId: "ecommerce-react-mg",
  storageBucket: "ecommerce-react-mg.firebasestorage.app",
  messagingSenderId: "329038746217",
  appId: "1:329038746217:web:7b21a6a9c08d29270c08f8",
  measurementId: "G-3QHBSTZKE9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
const db = getFirestore(app);
const analytics = getAnalytics(app);

export async function getProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((docu) => {
        return {
          id: docu.id,
          ...docu.data(),
        };
      });
      return productsList;
    } else {
      console.log("Coleccion vacia !");
    }
  } catch (error) {
    console.error("error al obtener la coleccion: ", error);
  }
}

export async function getProduct(id) {
  const documentRef = doc(db, "products", id);

  try {
    const snapshot = await getDoc(documentRef);
    if (snapshot.exists()) {
      return snapshot.data();
    } else {
      console.log("El documento no existe.");
    }
  } catch (error) {
    console.error("Error al obtener el document: ", error);
  }
}

export async function filterProductsByCategory(Category) {
  try {
    const filteredQuery = query(
      collection(db, "products"),
      where("category", "==", Category)
    );
    const querySnapshot = await getDocs(filteredQuery);
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((docu) => {
        return {
          id: docu.id,
          ...docu.data(),
        };
      });
      return productsList;
    } else {
      console.log("Coleccion vacía !");
    }
  } catch (error) {
    console.error("Error al obtener el documento: ", error);
  }
}

export async function sendOrder(order) {
  const ordersCollection = collection(db, "orders");
  try {
    const docRef = await addDoc(ordersCollection, order);
    return docRef.id;
  } catch (error) {
    console.error("Error al agregar el documento nuevo ", error);
  }
}

export async function updateProduct(title, toUpdate) {
  try {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("title", "==", title)); 

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      alert("No se encontró el producto con el ID especificado.");
      return;
    }

    querySnapshot.forEach(async (documentSnapshot) => {
        const itemDocRef = doc(db, "products", documentSnapshot.id);
        await updateDoc(itemDocRef, toUpdate);
    });

  } catch (error) {
    console.log("Hubo un error al actualizar!", error);
  }
}