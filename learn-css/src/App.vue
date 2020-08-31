<template>
  <div id="app">
    <header>
      <navbar />
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from "@/components/template/navbar.vue";
export default {
  components: {
    navbar,
  },
};
</script>
