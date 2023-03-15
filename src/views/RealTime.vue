<template>
    <h1>Real-time data</h1>
    <div v-for="post in posts" :key="post.id">
        <div>{{ post.title }}</div>
    </div>
</template>
  
<script>
import { ref } from "vue"
import { db, onSnapshot, collection } from "@/firebase/config";
export default {
    setup() {
        const posts = ref([])

        onSnapshot(collection(db, "posts"),
            (snapshot) => {
                let docs = snapshot.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
                console.log(docs)
                posts.value = docs
            });

        return { posts }
    }
}
</script>
  
<style></style>