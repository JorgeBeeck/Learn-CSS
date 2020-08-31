<template>
  <b-navbar type="is-dark" :mobile-burger="false">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <sidebar />
      </b-navbar-item>
    </template>

    <template slot="start">
      <b-navbar-item>
        <p class="subtitle has-text-light">Learn CSS</p>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import sidebar from "@/components/template/sidebar.vue";
export default {
  components: {
    sidebar,
  },
};
</script>
