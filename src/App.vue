<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"  :key="$route.path"/>
    </transition>
  </router-view>

</template>

<script>

export default {
  name: 'App',
  components: {
  }

}
</script>

<style lang="css">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: "Para";
  src: local("Para"),   url(@/fonts/Para/Para_Regular_Central.otf) format("truetype");
  font-family: "Lustria";
  src: local("Lustria"), url(@/fonts/Lustria/Lustria_Regular.ttf) format("truetype");
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
