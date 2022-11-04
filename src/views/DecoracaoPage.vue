<template>
  <div>
    <NavBar/>
    <div class="container">
      <BreadCrumbProdutos texto="Decoração"/>
      <div class="d-flex flex-row">
        <NavBarProdutos pag-decoracao="paginaAtiva"/>
        <div class="d-flex flex-wrap flex-row justify-content-center barraCards">
          <CardProduto class="card" :image-url="require('@/assets/cest_melancia.jpg')" card-title="Cestinho Melancia" alt-text="Cestinho para planta, nas cores de melância."/>
          <CardProduto class="card" :image-url="require('@/assets/tapete_kit.jpg')" card-title="Tapete Kit" msg-Card="Um tapete, uma cesta, uma bandeja média, um porta fraldas, um porta cotonetes e um porta algodão." alt-text="Kit tapete, composto por um tapete, uma cesta, uma bandeja média, um porta fraldas, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/portajoias.jpg')" card-title="Porta Jóias" msg-Card="Um porta jóias." alt-text="Porta jóias, cores variadas."/>
          <CardProduto class="card" :image-url="require('@/assets/porta_pinceis.jpg')" card-title="Kit Porta pincéis" msg-Card="Um porta pincél e um porta algodão." alt-text="Porta pincéis."/>
          <CardProduto class="card" :image-url="require('@/assets/porta_pinceis2.jpg')" card-title="Kit Porta pincéis" msg-Card="Um porta pincél e um porta perfume." alt-text="Porta pincéis."/>
          <CardProduto class="card" :image-url="require('@/assets/cest_utilidades.jpg')" card-title="Cestos utilidades" msg-Card="Um cesto utilidades." alt-text="Cestos de utilidades."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_escritorio.jpg')" card-title="Kit Escritório" msg-Card="Um porta canetas, um porta postIt e um porta xícara." alt-text="Kit Escritório."/>
          <CardProduto class="card" :image-url="require('@/assets/portacopos.jpg')" card-title="Porta Copos" alt-text="Porta copos."/>
          <CardProduto class="card" :image-url="require('@/assets/casa_pet.jpg')" card-title="Casa Pet" alt-text="Casinha de pets"/>
          <CardProduto class="card" :image-url="require('@/assets/kit_paovinho.jpg')" card-title="Kit Toscana" msg-Card="Uma cesta com saco para pães e um porta vinho." alt-text="Kit Toscana, composto por uma cesta com saco para pães e um porta vinho."/>
          <CardProduto class="card" :image-url="require('@/assets/mochinho.jpg')" card-title="Mochinho com capa" alt-text="Mochinho com capa."/>
          <CardProduto class="card" :image-url="require('@/assets/arcoiris.jpg')" card-title="Arco Íris de porta" alt-text="Arco íris para porta."/>
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
