import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Todos los productos
export async function getProducts() {
    const productsCollection = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollection);
    const productList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return productList;
}

// Categorias
export async function getProductsByCategory(categoryId) {
    const productsCollection = collection(db, "products");
    // OJO: Asegúrate de que en Firebase el campo se llame 'categoryId'
    const q = query(productsCollection, where("categoryId", "==", categoryId));
    const productsSnapshot = await getDocs(q);
    const productList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return productList;
}

// obtener x id
export async function getProductById(productId) {
    const productDoc = doc(db, "products", productId);
    const productSnapshot = await getDoc(productDoc);
    if (productSnapshot.exists()) {
        return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
        throw new Error("Producto no encontrado.");
    }
}
export const createOrder = async (order) => {
    try {
        const ordersCollection = collection(db, "orders");
        const docRef = await addDoc(ordersCollection, order);
        return docRef.id;
    } catch (error) {
        console.error("Error al crear la orden: ", error);
        throw error;
    }
};