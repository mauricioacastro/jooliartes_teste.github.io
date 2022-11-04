<template>
    <MDBCarousel
        v-model="carousel1"
        :items="items1"
        fade
    />
</template>

<script>
import { ref } from "vue";
import { MDBCarousel } from "mdb-vue-ui-kit";
import KitBaby1 from "@/assets/sldkitarcoiris.jpg"
import KitBaby2 from "@/assets/sldkitsafari.jpg"
import KitBaby3 from "@/assets/sldkitlilas.jpg"

export default {
  name: 'CarouselDisplay',
  components: {
    MDBCarousel
  },
  setup() {
    const items1 = [
      {
        src: KitBaby1,
        alt: "Kit Baby 1",
        label: "",
      },
      {
        src: KitBaby2,
        alt: "Kit Baby 2",
        label: "",
      },
      {
        src: KitBaby3,
        alt: "Kit Baby 3",
        label: "",
      }
    ];
    const carousel1 = ref(0);
    return {
      items1,
      carousel1
    };
  }
};
</script>

<style scoped>

</style>
