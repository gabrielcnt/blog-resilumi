import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export const articleService = {
    // Criar artigo
    async create(articleData) {
        try {
            const docRef = await addDoc(collection(window.db, "articles"), {
                ...articleData,
                createdAt: new Date(),
                updatedAt: new Date(),
                views: 0
            });
            console.log("Artigo criado com ID:", docRef.id);
            return docRef.id;
        } catch (error) {
            console.error("Erro ao criar artigo:", error);
            throw error;
        }
    },

    // Listar todos os artigos
    async getAll() {
        try {
            const querySnapshot = await getDocs(collection(window.db, "articles"));
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error("Erro ao buscar artigos:", error);
            throw error;
        }
    },

    // Buscar um artigo por ID
    async getById(id) {
        try {
            const docRef = doc(window.db, "articles", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() };
            } else {
                throw new Error("Artigo não encontrado");
            }
        } catch (error) {
            console.error("Erro ao buscar artigo:", error);
            throw error;
        }
    },

    // Atualizar artigo
    async update(id, data) {
        try {
            const docRef = doc(window.db, "articles", id);
            await updateDoc(docRef, {
                ...data,
                updatedAt: new Date()
            });
            console.log("Artigo atualizado com sucesso");
        } catch (error) {
            console.error("Erro ao atualizar artigo:", error);
            throw error;
        }
    },

    // Deletar artigo
    async delete(id) {
        try {
            await deleteDoc(doc(window.db, "articles", id));
            console.log("Artigo deletado com sucesso");
        } catch (error) {
            console.error("Erro ao deletar artigo:", error);
            throw error;
        }
    }
};