<template>
  <div>
    <center>
      <b-button type="is-dark" expanded>
        <router-link style="color: #fff" :to="myRouter">{{ title }}</router-link>
      </b-button>
    </center>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    myRouter: {
      type: String,
      required: true,
    },
  },
};
</script>
