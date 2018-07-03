<template>
  <section class="hero">
  <header id="header">
    <img src="@/assets/images/Logo_ML.png" srcset="@/assets/images/Logo_ML@2x.png.png" alt="Logo mercado livre" width="60" height="35 ">
  </header>
  <header class="hero-header">
    <h1 class="hero-title">Infelizmente não temos o que procura</h1>
  </header>
  <footer class="hero-footer">
    <router-link :to="{name: 'Products'}" class="button">Volte para a nossa tela inicial e veja mais produtos</router-link>
  </footer>
</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  width: 100%;
  background-image: url(https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71d59cd22de21da8d2939bc203617983&auto=format&fit=crop&w=1560&q=80);
  background-position: center;
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  #header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hero-footer {
    display: flex;
  }
  #logo {
    font-size: 5vh;
  }
  #menu-icon {
    font-size: 6vh;
  }
  .hero-title {
    font-size: 7vh;
    padding-bottom: 50%;
  }
  .button {
    font-size: 3vh;
    text-decoration: none;
    color: white;
    padding: 15px;
    text-align: center;
    border: 1px black solid;
    margin-bottom: 15px;
  }
}
</style>
