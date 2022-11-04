<template>
  <div class="card" style="width: 18rem;">
    <img :src="imageUrl" :alt="altText" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{cardTitle}}</h5>
      <p class="card-text">{{msgCard}}</p>
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn border border-info" @click="adicionarAoCarrinho"><a href="#">ENCOMENDAR</a></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduto",
  data() {
    return {
      item: {
        produtoImg: this.imageUrl,
        produtoNome: this.cardTitle,
        produtoDescricao: this.altText,
      }
    }
  },
  props: {
    imageUrl: String,
    altText: String,
    msgCard: String,
    cardTitle: String
  },
  methods: {
    adicionarAoCarrinho() {
      this.$store.commit('adicionarAoCarrinho', this.item);
      this.$swal("Sucesso!", "Produto Adicionado na Sacola!", "toast");
    }
  }
}
</script>

<style scoped>
h5 {
  font-family: "Para", "Lustria", arial;
  color: #23756e;
}

p {
  font-family: "Para", "Lustria", arial;
  color: #AAA;
}

button {
  width: 9rem;
  background-color: white;
  font-family: "Lustria", arial, "Para";
  border-color: black;
  transition: all 0.4s;
  border-radius: 8px;

}

button:hover {
  background-color: #7ed9c8;
}

a {
  text-decoration: none;
  color: #23756e;

}

button:hover a {
  color: white;
  
}
.card {
  padding-bottom: 2rem;
}
.card-body {
  text-align:center;
}

</style>