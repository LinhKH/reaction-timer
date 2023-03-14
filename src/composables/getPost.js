import { ref } from 'vue'
import { db, doc, getDoc } from "@/firebase/config";

const getPost = (id) => {

    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            // simulate delay
            // await new Promise(resolve => {
            //     setTimeout(resolve, 2000)
            // })

            const docRef = doc(db, "posts", id)
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                post.value = { ...docSnap.data(), id: id }
            } else {
                error.value = "Document does not exist"
            }

        }
        catch (err) {
            error.value = err.message
        }
    }

    return { post, error, load }
}

export default getPost