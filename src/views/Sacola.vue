<template>
  <div>
    <NavBar/>
    <div class="container mt-5">
      <h1 class="mb-5">Produtos na Sacola</h1>
      <table v-if="obterItensCarrinho.length > 0" class="table table-hover table-striped">
        <thead>
        <tr>
          <th>Produto</th>
          <th>Nome</th>
          <th>Descrição</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, i) in obterItensCarrinho" :key="i">
          <td><img :src="item.produtoImg"></td>
          <td class="texto">{{item.produtoNome}}</td>
          <td class="texto">{{ item.produtoDescricao }}</td>
          <td><button @click="this.$store.commit('removerItem', item)" class="btn btn-danger botaoExcluir"><i class="fa-solid fa-trash fa-xl"></i></button></td>
        </tr>
        </tbody>
      </table>
      <p class="carrinhoVazio" v-else>Sua sacola está vazia!</p>
      <div class="d-flex flex-row justify-content-center">
        <a v-if="obterItensCarrinho.length > 0" class="btn border border-info botaoPedido" :href="'https://wa.me/5551998500102?text='" target="_blank">Realizar Pedido</a>
        <a class="btn border border-info botaoVerMais" @click="$router.push('/produtos')" href="#">Ver mais Produtos</a>
      </div>
    </div>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";

export default {
  name: 'SacolaPage',
  data() {
    return {
    }
  },
  components: {
    FooterBar,
    NavBar,
  },
  computed: {
    obterItensCarrinho() {
      return this.$store.getters.obterItensCarrinho
      },
    }
}
</script>

<style scoped>
.container {
  margin-bottom: 4rem;
}

.botaoExcluir {
  margin-left: 2rem;
  margin-top: 2rem;
  transition: all 0.3s;
}

.botaoExcluir:hover {
  transform: scale(1.1);
}

img {
  width: 100px;
  height: 100px;
}

th {
  font-weight: bold;
  font-family: "Para", "Lustria", arial;
}

.texto {
  font-family: "Lustria", "Para", arial;
  padding-top: 3.5rem;
}

.botaoPedido {
  background-color: #7ed9c8;
  transition: all 0.3s;
  font-family: "Lustria", "Para", arial;
  font-weight: bold;
  border-radius: 8px;
  margin-right: 2rem;
  text-decoration: none;
  color: white;
}

.botaoPedido:hover {
  transform: scale(1.1);
}

.botaoVerMais {
  font-family: "Lustria", "Para", arial;
  font-weight: bold;
  transition: all 0.3s;
  border-radius: 8px;
  text-decoration: none;
  color: #23756e;
}

.botaoVerMais:hover {
  transform: scale(1.1);
}

p.carrinhoVazio {
  font-family: "Lustria", "Para", arial;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
}
</style>
