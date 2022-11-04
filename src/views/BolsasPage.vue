<template>
  <div>
    <NavBar/>
    <div class="container">
      <BreadCrumbProdutos texto="Bolsas"/>
      <div class="d-flex flex-row">
       <NavBarProdutos pag-bolsas="paginaAtiva"/>
        <div class="d-flex flex-wrap flex-row justify-content-center barraCards">
          <CardProduto class="card" :image-url="require('@/assets/bolsa_preta.jpg')" card-title="Bolsa Preta" alt-text="Bolsa Preta"/>
          <CardProduto class="card" :image-url="require('@/assets/bolsa_olhogrego.jpg')" card-title="Bolsa Olho Grego" alt-text="Bolsa Olho Grego"/>
          <CardProduto class="card" :image-url="require('@/assets/kit_mateira_verde.jpg')" card-title="Kit Mateira Verde" msg-Card="Uma mateira e um porta cuia." alt-text="Kit Mateira Verde, composto por uma mateira e um porta cuia."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_mateira_rosa.jpg')" card-title="Kit Mateira Rosa" msg-Card="Uma mateira e um porta cuia." alt-text="Kit Mateira Rosa, composto por uma mateira e um porta cuia."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_mateira_colorida.jpg')" card-title="Kit Mateira Colorida" msg-Card="Uma mateira e um porta cuia." alt-text="Kit Mateira Colorida, composto por uma mateira e um porta cuia."/>
          <CardProduto class="card" :image-url="require('@/assets/bolsa_mostarda.jpg')" card-title="Bolsa Mostarda" alt-text="Bolsa mostarda."/>
        </div>
      </div>
    </div>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
import CardProduto from "@/components/CardProduto";
import NavBarProdutos from "@/components/NavBarProdutos";
import BreadCrumbProdutos from "@/components/BreadCrumbProdutos";

export default {
  name: 'BolsasPage',
  components: {
    BreadCrumbProdutos,
    NavBarProdutos,
    CardProduto,
    NavBar,
    FooterBar,
  }
}

</script>

<style scoped>
.container {
  margin-bottom: 4rem;
}

.barraCards {
  margin-left: 2rem;
}

.card {
  margin-bottom: 1rem;
  margin-right: 1rem;
}
</style>
