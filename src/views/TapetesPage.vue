<template>
  <div>
    <NavBar/>
    <div class="container">
      <BreadCrumbProdutos texto="Tapetes"/>
      <div class="d-flex flex-row">
       <NavBarProdutos pag-tapetes="paginaAtiva"/>
        <div class="d-flex flex-wrap flex-row justify-content-center barraCards">
          <CardProduto class="card" :image-url="require('@/assets/tapete_coracoes.jpg')" card-title="Tapete com corações" alt-text="Tapete com corações."/>
          <CardProduto class="card" :image-url="require('@/assets/tapete_b.jpg')" card-title="Tapete" alt-text="Tapete."/>
          <CardProduto class="card" :image-url="require('@/assets/tapete_kit.jpg')" card-title="Tapete Kit" msg-Card="Um tapete, uma cesta, uma bandeja média, um porta fraldas, um porta cotonetes e um porta algodão." alt-text="Kit tapete, composto por um tapete, uma cesta, uma bandeja média, um porta fraldas, um porta cotonetes e um porta algodão."/>
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
  name: 'DecoracaoPage',
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
