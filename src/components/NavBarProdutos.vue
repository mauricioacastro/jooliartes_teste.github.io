<template>
  <div class="d-flex flex-row barraProdutos">
    <nav class="navbar navbar-expand-lg d-flex flex-column barraNavProdutos">
      <ul class="ulProdutos">
        <li><a :class="pagKitBaby" @click="$router.push('/produtos/kitbaby')" href="#">KitBaby</a></li>
        <li><a :class="pagBolsas" @click="$router.push('/produtos/bolsas')" href="#">Bolsas</a></li>
        <li><a :class="pagDecoracao" @click="$router.push('/produtos/decoracao')" href="#">Decoração</a></li>
        <li><a :class="pagTapetes" @click="$router.push('/produtos/tapetes')" href="#">Tapetes</a></li>
        <li><a :class="pagCestao" @click="$router.push('/produtos/cestao')" href="#">Cestão</a></li>
        <li><a :class="pagLembrancrinhas" @click="$router.push('/produtos/lembrancinhas')" href="#">Lembrancinhas</a></li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'NavBarProdutos',
  data() {
    return {

    }
  },
  props: {
    pagKitBaby: String,
    pagBolsas: String,
    pagDecoracao: String,
    pagTapetes: String,
    pagCestao: String,
    pagLembrancrinhas: String
  },
}
</script>

<style scoped>

.barraProdutos {
  margin-top: 4rem;
}

.barraNavProdutos {
  border-radius: 12px;
  padding-right: 0.5rem;
  height: 11.5rem;
}


.ulProdutos {
  margin-top: 0.5rem;
}

ul {
  list-style: none;
}

ul li::before {
  content: "\2022";
  color: #7ed9c8;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

li {
  transition: all 0.3s;
}

li:hover {
  transform: scale(1.1);
}

a {
  transition: all 0.3s;
  text-decoration: none;
  color: #4f4f4f;
}

a:hover {
  color: #7ed9c8;
  cursor: pointer;
  transform: scale(1.1);
}

.paginaAtiva {
  color: #7ed9c8;
}

</style>