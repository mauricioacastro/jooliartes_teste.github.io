<template>
  <div>
    <NavBar/>
    <div class="container">
      <BreadCrumb texto="Produtos"/>
      <div class="d-flex flex-row">
       <NavBarProdutos/>
          <div class="d-flex flex-wrap flex-row justify-content-center barraCards">
            <CardProduto class="card" :image-url="require('@/assets/kit_higiene01.jpg')" card-title="Kit Baby Petit" msg-Card="Um porta fraldas, um porta cotonetes e um porta algodão." alt-text="Kit Baby Petit, composto por um porta fraldas, um porta cotonetes e um porta algodão."/>
            <CardProduto class="card" :image-url="require('@/assets/bolsa_preta.jpg')" card-title="Bolsa Preta" alt-text="Bolsa Preta"/>
            <CardProduto class="card" :image-url="require('@/assets/chav_arcoiris.jpg')" card-title="Chaveiro Arco Íris" alt-text="Chaveiro Arco Íris"/>
            <CardProduto class="card" :image-url="require('@/assets/tapete_coracoes.jpg')" card-title="Tapete com corações" alt-text="Tapete"/>
            <CardProduto class="card" :image-url="require('@/assets/cestao_m.jpg')" card-title="Cestão" alt-text="Cestão"/>
            <CardProduto class="card" :image-url="require('@/assets/kit_higiene06.jpg')" card-title="Kit Baby Joli" msg-Card="Uma bandeja grande, um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão." alt-text="Kit Baby Joli, composto por uma bandeja grande, um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão."/>
          </div>
      </div>
    </div>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
import BreadCrumb from "@/components/BreadCrumb";
import CardProduto from "@/components/CardProduto";
import NavBarProdutos from "@/components/NavBarProdutos";

export default {
  name: 'ProdutosPage',
  components: {
    CardProduto,
    BreadCrumb,
    FooterBar,
    NavBar,
    NavBarProdutos
  },
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
