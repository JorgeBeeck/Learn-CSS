<template>
  <section>
    <b-sidebar
      type="is-dark"
      :fullheight="fullheight"
      :overlay="overlay"
      v-model="open"
    >
      <div class="p-1">
        <center>
          <h1 class="title has-text-light">Learn CSS</h1>

          <hr />

          <b-button type="is-dark" expanded>BACKGROUND COLOR</b-button>
          <b-button type="is-dark" expanded>BORDER</b-button>
          <b-button type="is-dark" expanded>MARGINS</b-button>
          <b-button type="is-dark" expanded>PADDING</b-button>
          <b-button type="is-dark" expanded>HEIGHT/WIDTH</b-button>
          <b-button type="is-dark" expanded>BOX MODEL</b-button>

          <hr />
        </center>
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
export default {
  data() {
    return {
      open: false,
      overlay: true,
      fullheight: true,
    };
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
