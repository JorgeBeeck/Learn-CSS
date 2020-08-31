<template>
  <section>
    <b-sidebar type="is-dark" :fullheight="fullheight" :overlay="overlay" v-model="open">
      <div class="p-1">
        <center>
          <h1 class="title">
            <router-link to="/" style="color: #fff">Learn CSS</router-link>
          </h1>
          <hr />
        </center>
        <div v-for="page in pages" :key="page.id">
          <buttonsSidebar v-bind="page" />
        </div>
      </div>
    </b-sidebar>
    <div @click="open = true">
      <div class="iconButton"></div>
      <div class="iconButton"></div>
      <div class="iconButton"></div>
    </div>
  </section>
</template>

<script>
import buttonsSidebar from "@/components/template/buttonsSidebar.vue";
export default {
  data() {
    return {
      pages: [
        {
          id: 0,
          title: "BACKGROUND COLOR",
          myRouter: "/backgroundColor",
        },
        {
          id: 1,
          title: "TEXT COLOR",
          myRouter: "/textColor",
        },
      ],
      open: false,
      overlay: true,
      fullheight: true,
    };
  },
  components: {
    buttonsSidebar,
  },
};
</script>

<style>
.p-1 {
  padding: 1em;
}
.iconButton {
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
}
</style>
