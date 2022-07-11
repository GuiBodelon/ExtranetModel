<template>
    <div class="containerBGImage col-9"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BackgroundImage'
})
</script>

<style scoped>
.containerBGImage {
    background: url(../../public/images/background_login.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
};

</style>