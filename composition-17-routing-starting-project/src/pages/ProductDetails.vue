<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price}}</h3>
    <p>{{ description}}</p>
    <router-link to="/products/p2">Product 2</router-link>
  </section>
</template>

<script>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: ['pid'], // router에서 넘겨준 props
  setup() {
    const products = inject('products');
    
    const route = useRoute();
    console.log(route);
    
    const selectedProduct = computed(() => products.value.find(product => product.id === route.params.pid)); // props.pid 혹은 route.params.pid 사용할 수 있다.
    const title = computed(() => selectedProduct.value.title);
    const price = computed(() => selectedProduct.value.price);
    const description = computed(() => selectedProduct.value.description);

    return { title, price, description };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>