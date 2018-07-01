<template>
  <div id="app">
    <AppHeader />
    <main class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
  </div>
</template>

<script>
import AppHeader from "components/organism/AppHeader";
export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
  @import "assets/sass/_core.scss";
  @import "assets/sass/_base.scss";
</style>
