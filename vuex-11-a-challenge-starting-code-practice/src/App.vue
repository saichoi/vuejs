<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  provide() {
    return {
      products: this.products,
      cart: this.cart,
      addProductToCart: this.addProductToCart,
      removeProductFromCart: this.removeProductFromCart,
      login: this.login,
      logout: this.logout,
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>