import { 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    updateDoc, 
    deleteDoc, 
    getDoc,
    query,
    where,
    orderBy,
    increment 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

import { 
    getStorage, 
    ref, 
    uploadBytes, 
    getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

export const articleService = {
    // Criar artigo
    async create(articleData) {
        try {
            // Upload da imagem se existir
            if (articleData.seo?.image) {
                const storage = getStorage();
                const imageRef = ref(storage, `articles/${Date.now()}_${articleData.seo.image.name}`);
                await uploadBytes(imageRef, articleData.seo.image);
                articleData.seo.imageUrl = await getDownloadURL(imageRef);
                delete articleData.seo.image; // Remove o arquivo antes de salvar
            }

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
    async getAll(filters = {}) {
        try {
            let q = collection(window.db, "articles");
            
            // Aplica filtros
            if (filters.status) {
                q = query(q, where("status", "==", filters.status));
            }
            
            if (filters.category) {
                q = query(q, where("category", "==", filters.category));
            }

            // Ordenação
            if (filters.orderBy) {
                q = query(q, orderBy(filters.orderBy, filters.order || 'desc'));
            }

            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error("Erro ao buscar artigos:", error);
            throw error;
        }
    },

    // Buscar artigos agendados
    async getScheduledArticles() {
        try {
            const now = new Date();
            const q = query(
                collection(window.db, "articles"),
                where("status", "==", "scheduled"),
                where("scheduledDate", "<=", now)
            );
            
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error("Erro ao buscar artigos agendados:", error);
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
    async updateStatus(id, status) {
        try {
            const docRef = doc(window.db, "articles", id);
            await updateDoc(docRef, {
                status,
                updatedAt: new Date()
            });
            console.log("Status do artigo atualizado com sucesso");
        } catch (error) {
            console.error("Erro ao atualizar status:", error);
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
    },

    // Incrementar visualizações
    async incrementViews(id) {
        try {
            const docRef = doc(window.db, "articles", id);
            await updateDoc(docRef, {
                views: firebase.firestore.FieldValue.increment(1)
            });
        } catch (error) {
            console.error("Erro ao incrementar visualizações:", error);
            throw error;
        }
    },

    async update(id, articleData) {
        try {
            const docRef = doc(window.db, "articles", id);
            
            // Se houver nova imagem
            if (articleData.seo?.image) {
                const storage = getStorage();
                const imageRef = ref(storage, `articles/${Date.now()}_${articleData.seo.image.name}`);
                await uploadBytes(imageRef, articleData.seo.image);
                articleData.seo.imageUrl = await getDownloadURL(imageRef);
                delete articleData.seo.image;
            }
    
            await updateDoc(docRef, {
                ...articleData,
                updatedAt: new Date()
            });
            
            console.log("Artigo atualizado com sucesso");
        } catch (error) {
            console.error("Erro ao atualizar artigo:", error);
            throw error;
        }
    },

    async getFeatured() {
        try {
            const q = query(
                collection(window.db, "articles"),
                where("featured", "==", true),
                where("status", "==", "published"),
                orderBy("createdAt", "desc")
            );
            
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error("Erro ao buscar artigos em destaque:", error);
            throw error;
        }
    }
};