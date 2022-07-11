<template>
  <div class="row">
    <BackgroundImage></BackgroundImage>
    <div class="col-3 colunaLogin q-pa-lg">
      <LogoSPA></LogoSPA>
      <router-view v-slot="{ Component }">
        <transition name="scale-app">
          <component :is="Component" />
        </transition>
      </router-view>
      <CardInfos></CardInfos>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BackgroundImage from "../components/BackgroundImage.vue";
import LogoSPA from "../components/LogoSPA.vue";
import CardInfos from "../components/CardInfos.vue";

export default defineComponent({
  name: "Login",

  components: {
    BackgroundImage,
    LogoSPA,
    CardInfos,
  },
});
</script>

<style scoped>
.colunaLogin{
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}
/*ROUTER ANIMATED TRANSITION*/
.scale-app-enter-active,
.scale-app-leave-active {
  transition: all 0.5s ease;
}


.scale-app-enter-from,
.scale-app-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
