<script setup>
import QuoteCard from './components/QuoteCard/QuoteCard.vue'
</script>

<template>

  <main>
    <div class="container">
      <QuoteCard />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: 100vh;
  display: flex;
  place-items: center;
}
.container {
  display: flex;
  // background: #000;
  justify-content: center;
  // align-items: center;
}
</style>