<template>
  <div>
    <NavBar/>
    <div class="container">
      <BreadCrumbProdutos texto="Lembrancinhas"/>
      <div class="d-flex flex-row">
        <NavBarProdutos pag-lembrancrinhas="paginaAtiva"/>
        <div class="d-flex flex-wrap flex-row justify-content-center barraCards">
          <CardProduto class="card" :image-url="require('@/assets/lbc_coracaosimples.jpg')" card-title="Chaveiro coração" msg-Card="Chaveiro coração simples" alt-text="Chaveiro coração simples"/>
          <CardProduto class="card" :image-url="require('@/assets/lbc_coracao.jpg')" card-title="Chaveiro coração" msg-Card="Chaveiro coração com nome" alt-text="Chaveiro coração com nome"/>
          <CardProduto class="card" :image-url="require('@/assets/chav_arcoiris.jpg')" card-title="Chaveiro Arco Íris" alt-text="Chaveiro Arco Íris"/>
          <CardProduto class="card" :image-url="require('@/assets/chaveiro04.jpg')" card-title="Chaveiro Ursinho" alt-text="Chaveiro Ursinho"/>
          <CardProduto class="card" :image-url="require('@/assets/chav_estrela.jpg')" card-title="Chaveiro Estrela" alt-text="Chaveiro Estrela"/>
          <CardProduto class="card" :image-url="require('@/assets/lbc_urso.jpg')" card-title="Chaveiro Ursinho" alt-text="Chaveiro Ursinho"/>
          <CardProduto class="card" :image-url="require('@/assets/chav_flor.jpg')" card-title="Chaveiro Flor" alt-text="Chaveiro Flor"/>
          <CardProduto class="card" :image-url="require('@/assets/chav_rosa.jpg')" card-title="Chaveiro Rosa" alt-text="Chaveiro Coração Rosa"/>
          <CardProduto class="card" :image-url="require('@/assets/chav_roxo.jpg')" card-title="Chaveiro Roxo" alt-text="Chaveiro Coração Roxo"/>
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
