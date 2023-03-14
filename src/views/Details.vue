<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
        <button @click="deletePost">Delete Post</button>
    </div>
    <div v-else>
        <Spinner />
    </div>
</template>
  
<script>
import getPost from '@/composables/getPost'

// component imports
import Spinner from '../components/Spinner.vue'

import { useRoute, useRouter } from "vue-router";

import { db, doc, deleteDoc } from "@/firebase/config";

export default {
    props: ['id'],
    components: { Spinner },
    setup() {
        const route = useRoute()
        const router = useRouter()
        const { error, post, load } = getPost(route.params.id)

        load()

        const deletePost = async () => {
            const docRef = doc(db, "posts", route.params.id);
            deleteDoc(docRef)
                .then(() => {
                    console.log("Entire Document has been deleted successfully.")
                    router.push('/')
                })
                .catch(error => {
                    console.log(error);
                })
        }

        return { error, post, deletePost }
    },
}
</script>
  
<style scoped>
.post {
    max-width: 1200px;
    margin: 0 auto;
}

.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}

.pre {
    white-space: pre-wrap;
}
</style>