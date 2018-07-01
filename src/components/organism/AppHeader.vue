<template>
  <header class="header">
    <router-link :to="{name: 'Products'}">
      <img src="@/assets/images/Logo_ML.png" srcset="@/assets/images/Logo_ML@2x.png.png" alt="Logo mercado livre" width="60" height="35 ">
    </router-link>
    <AppSearchBar />
  </header>
</template>

<script>
import AppSearchBar  from '../molecules/SearchBar'
export default {
  components: {
    AppSearchBar
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/sass/_core.scss";
 .header {
   display: flex;
   width: 100%;
   height: 3.25rem;
   justify-content: center;
   background-color: $theme-ml;

   img {
     margin-right: 2%;
     margin: {
       top: 5px;
       bottom: 5px;
     }

   }
   .searchContainer {
     margin: {
       top: 5px;
       bottom: 5px;
     }
     max-height: 48px;
   }
 }
</style>
