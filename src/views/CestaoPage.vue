<template>
  <div>
    <NavBar/>
    <div class="container">
      <BreadCrumbProdutos texto="Cestão"/>
      <div class="d-flex flex-row">
       <NavBarProdutos pag-cestao="paginaAtiva"/>
        <div class="d-flex flex-wrap flex-row justify-content-center barraCards">
          <CardProduto class="card" :image-url="require('@/assets/cestao_m.jpg')" card-title="Cestão" alt-text="Cestão"/>
          <CardProduto class="card" :image-url="require('@/assets/tapete_cestao.jpg')" card-title="Tapete e Cestão" alt-text="Tapete e Cestão"/>
          <CardProduto class="card" :image-url="require('@/assets/cestao_cinza.jpg')" card-title="Cestão Cinza" alt-text="Cestão Cinza"/>
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
