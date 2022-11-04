<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="imageUrl" :alt="altText">
    <div class="card-body position-relative">
      <p class="card-title position-absolute">{{title}}</p>
      <p class="card-text">{{msgCard}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsHome",
  data() {
    return {

    }
  },
  props: {
    imageUrl: String,
    altText: String,
    msgCard: String,
    title: String,
  },
}
</script>

<style scoped>

.card-title {
  font-family: "Lustria", "Para", arial;
  font-size: 24px;
  color: #23756e;
  font-weight: bold;
  text-align: center;
  bottom: 4.5rem;
  margin: auto;
}

.card-text {
  text-align: center;
  color: #7ed9c8;
  font-family: "Lustria", "Para", arial;
  transform: translateY(40px);
  transition: 0.5s;
  opacity: 0;
}

.card:hover .card-text {
  transform: translateY(0px);
  opacity: 1;
}

.card {
  border-radius: 150px 150px 0 0;
  height: 22rem;
}

img {
  border-radius: 150px 150px 0 0;
}
</style>