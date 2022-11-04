<template>
  <nav class="navbar navbar-expand-lg fixed-top position-relative menu">
    <div class="container-fluid">
      <a @click="$router.push('/')" href="#"><img class="position-absolute" src="@/assets/logoJooli.png" alt="Logotipo"></a>
      <div>
        <ul class="navbar-nav">
          <li><a class="nav-link" @click="$router.push('/')" href="#"><i class="fa-solid fa-house fa-lg"></i></a></li>
          <li><a class="nav-link" @click="$router.push('/produtos')" href="#">Produtos</a></li>
          <li><a class="nav-link" @click="$router.push('/sobre')" href="#">Sobre</a></li>
          <li><a class="nav-link" @click="$router.push('/contato')" href="#">Contato</a></li>
          <li><a class="nav-link" @click="$router.push('/sacola')" href="#"><i class="fa-solid fa-bag-shopping fa-lg"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default{
  name: 'NavBar',
}
</script>

<style scoped>
.menu{
  background-color: #7ed9c8;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 3rem;
}

.container-fluid {
  height: 2rem;
}

.container-fluid a img {
  bottom: 0.3rem;
  left: 0;
}

.navbar-nav li a {
  text-decoration: none;
  font-family: "Lustria", "Para", arial;
  color: #000000;
  transition: all 0.3s;
  font-weight: bold;
}

.navbar-nav li a:hover {
  color: white;
}

.fixed-top img {
  margin-top: 0.2rem;
  margin-left: 1rem;
}

.input-group {
  top: 0.8rem;
  left: 7.5rem;
}

button {
  z-index: 1;
  background: none;
  border: none;
  left: 12.5rem;
}
</style>