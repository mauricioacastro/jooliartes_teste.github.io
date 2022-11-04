<template>
  <div>
    <NavBar/>
      <CarouselDisplay/>
    <div class="container">
      <h1>Produtos</h1>
      <div class="containerCards w-75 d-flex flex-wrap flex-row justify-content-center">
        <a @click="this.$router.push('/produtos/kitbaby')" href="#">
          <CardsHome class="card" :image-url="require('@/assets/kit_higiene01.jpg')" title="Kits Baby" msg-card="Se inspire em mais modelos..." alt-text="Kits Baby"/>
        </a>
        <a @click="this.$router.push('/produtos/lembrancinhas')" href="#">
          <CardsHome class="card" :image-url="require('@/assets/chav_arcoiris.jpg')" title="Lembrancinhas" msg-card="Se inspire em mais modelos..." alt-text="Chaveiro"/>
        </a>
        <a @click="this.$router.push('/produtos/decoracao')" href="#">
          <CardsHome class="card" :image-url="require('@/assets/tapete_kit.jpg')" title="Decoração" msg-card="Se inspire em mais modelos..." alt-text="Porta Cotonete"/>
        </a>
        <a @click="this.$router.push('/produtos/tapetes')" href="#">
          <CardsHome class="card" :image-url="require('@/assets/tapete_coracoes.jpg')" title="Tapetes" msg-card="Se inspire em mais modelos..." alt-text="Tapete"/>
        </a>
        <a @click="this.$router.push('/produtos/cestao')" href="#">
          <CardsHome class="card" :image-url="require('@/assets/cestao_m.jpg')" title="Cestão" msg-card="Se inspire em mais modelos..." alt-text="Cestão"/>
        </a>
        <a @click="this.$router.push('/produtos/bolsas')" href="#">
          <CardsHome class="card" :image-url="require('@/assets/bolsa_preta.jpg')" title="Bolsas" msg-card="Se inspire em mais modelos..." alt-text="Bolsas"/>
        </a>
      </div>
    </div>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from "@/components/FooterBar"
import CardsHome from "@/components/CardsHome";
import CarouselDisplay from "@/components/CarouselDisplay";

export default {
  name: 'HomePage',
  components: {
    CarouselDisplay,
    FooterBar,
    NavBar,
    CardsHome,
  },
}
</script>

<style scoped>
.container {
  margin-top: 1rem;
  margin-bottom: 3.5rem;
}

h1 {
  color: #23756e;
  font-family: "Para", "Lustria", arial;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 2rem auto auto auto;
}

.containerCards {
  margin: 2rem auto auto auto;
}


.card {
  margin-bottom: 2rem;
  margin-right: 2rem;
  transition: all 0.5s;
}

.card:hover {
  transform: scale(1.1);
}

</style>