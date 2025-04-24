import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuração do Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyDR9HXeh9eNScZdlPWq2pS9ie1JrKEzzt0",
    authDomain: "blog-resilumi.firebaseapp.com",
    projectId: "blog-resilumi",
    storageBucket: "blog-resilumi.appspot.com",
    messagingSenderId: "463362753675",
    appId: "1:463362753675:web:23575dd564b4b2b502008e",
    measurementId: "G-4FH9R2SN9G"
};

// Inicializa o Firebase App
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
export const db = getFirestore(app);