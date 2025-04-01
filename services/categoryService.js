import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export const categoryService = {
    // Criar categoria
    async create(categoryData) {
        try {
            const docRef = await addDoc(collection(window.db, "categories"), {
                ...categoryData,
                createdAt: new Date(),
                totalArticles: 0
            });
            console.log("Categoria criada com ID:", docRef.id);
            return docRef.id;
        } catch (error) {
            console.error("Erro ao criar categoria:", error);
            throw error;
        }
    },

    // Listar categorias
    async getAll() {
        try {
            const querySnapshot = await getDocs(collection(window.db, "categories"));
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error("Erro ao buscar categorias:", error);
            throw error;
        }
    },

    // Atualizar categoria
    async update(id, data) {
        try {
            const docRef = doc(window.db, "categories", id);
            await updateDoc(docRef, {
                ...data,
                updatedAt: new Date()
            });
            console.log("Categoria atualizada com sucesso");
        } catch (error) {
            console.error("Erro ao atualizar categoria:", error);
            throw error;
        }
    },

    // Deletar categoria
    async delete(id) {
        try {
            await deleteDoc(doc(window.db, "categories", id));
            console.log("Categoria deletada com sucesso");
        } catch (error) {
            console.error("Erro ao deletar categoria:", error);
            throw error;
        }
    }
};