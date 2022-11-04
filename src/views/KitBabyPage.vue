<template>
  <div>
    <NavBar/>
    <div class="container">
      <BreadCrumbProdutos texto="Kit Baby"/>
      <div class="d-flex flex-row">
        <NavBarProdutos pag-kit-baby="paginaAtiva"/>
        <div class="d-flex flex-wrap flex-row justify-content-center barraCards">
          <CardProduto class="card" :image-url="require('@/assets/kit_petit_amor.jpg')" card-title="Kit Baby Petit" msg-Card="Um porta fraldas, um porta cotonetes e um porta algodão." alt-text="Kit Baby Petit, composto por um porta fraldas, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_portasonhos_lilas.jpg')" card-title="Kit Baby Porta Sonhos" msg-Card="Um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão." alt-text="Kit Baby Porta Sonhos, composto por um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_higiene03.jpg')" card-title="Kit Baby Porta Sonhos" msg-Card="Um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão." alt-text="Kit Baby Porta Sonhos, composto por um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_higiene04.jpg')" card-title="Kit Baby Jules" msg-Card="Um porta utensílios, um porta cotonetes e um porta algodão." alt-text="Kit Baby Jules, composto por um porta utensílios, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_higiene05.jpg')" card-title="Kit Baby Porta Sonhos" msg-Card="Um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão." alt-text="Kit Baby Porta Sonhos, composto por um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_higiene06.jpg')" card-title="Kit Baby Joli" msg-Card="Uma bandeja grande, um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão." alt-text="Kit Baby Joli, composto por uma bandeja grande, um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_joli_limao.jpg')" card-title="Kit Baby Joli" msg-Card="Uma bandeja grande, um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão." alt-text="Kit Baby Joli, composto por uma bandeja grande, um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_joy_colorido.jpg')" card-title="Kit Baby Joy" msg-Card="Uma bandeja média, um porta fraldas, um porta cotonetes e um porta algodão." alt-text="Kit Baby Joy, composto por uma bandeja média, um porta fraldas, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_jules_lilas.jpg')" card-title="Kit Baby Jules" msg-Card="Um porta utensílios, um porta cotonetes e um porta algodão." alt-text="Kit Baby Jules, composto por um porta utensílios, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_joli_helena.jpg')" card-title="Kit Baby Joli Nome" msg-Card="Uma bandeja grande, um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão." alt-text="Kit Baby Joli com nome, composto por uma bandeja grande, um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_joli_urso.jpg')" card-title="Kit Baby Ursinho" msg-Card="Uma bandeja grande, um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão." alt-text="Kit Baby Joli com pingente urso, composto por uma bandeja grande, um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_joy_flor.jpg')" card-title="Kit Baby Joy" msg-Card="Uma bandeja média, um porta fraldas, um porta cotonetes e um porta algodão." alt-text="Kit Baby Joy com pingente de flor, composto por uma bandeja média, um porta fraldas, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_jules_urso.jpg')" card-title="Kit Baby Jules Ursinho" msg-Card="Um porta utensílios, um porta cotonetes e um porta algodão." alt-text="Kit Baby Jules com pingente urso, composto por um porta utensílios, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_petit_arco.jpg')" card-title="Kit Baby Jules" msg-Card="Um porta utensílios, um porta cotonetes e um porta algodão." alt-text="Kit Baby Petit, composto por um porta fraldas, um porta cotonetes e um porta algodão."/>
          <CardProduto class="card" :image-url="require('@/assets/kit_portasonhos_rosa.jpg')" card-title="Kit Baby Porta Sonhos" msg-Card="Um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão." alt-text="Kit Baby Porta Sonhos, composto por um porta fraldas, um porta utensílios, um porta cotonetes e um porta algodão."/>
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
  name: 'KitBabyPage',
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
