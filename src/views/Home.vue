<template>
    <div class="home">
        <h1>Homepage</h1>
        <HelloWorld></HelloWorld>
    </div>
</template>
  
<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
    name: 'Home',
    components: {
        HelloWorld
    }
}
</script>