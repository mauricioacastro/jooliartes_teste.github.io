<template>
  <nav class="breadcrumb">
    <ul>
      <li><a class="home" @click="this.$router.push('/')" href="#">Home</a></li>
      <li>{{texto}}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: {
    texto: String,
  }
}

</script>

<style scoped>
.breadcrumb {
  padding: 0.1rem;
  margin-top: 0.5rem;
  height: 3rem;
}

.home {
  text-decoration: none;
  color: #7ed9c8;
}

.breadcrumb li {
  padding: .05rem .25rem;
  font-family: "Lustria", "Para", arial;
  float: left;
  color: #a4a4a4;
  font-size: 1.1rem;
  list-style-type: none;
}

.breadcrumb li:after {
  content: '›';
  display: inline;
  margin-left: 0.2rem;
  font-size: 1.5rem;
  color: #AAA;
  padding: 0 .0725rem 0 .15rem;
}

.breadcrumb li:last-child:after {
  content: '';
}
</style>