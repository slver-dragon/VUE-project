<template>
  <div id="app">
    <div class="page">
      <h1 class="title">Список задач</h1>
      <Content />
      <Footer />
    </div>
  </div>
</template>

<script>
import Content from "./components/organism/Content.vue";
import Footer from "./components/organism/Footer.vue";
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    Content,
    Footer,
  },

  methods: {
    ...mapMutations(["loadData"]),
  },

  mounted () {
    this.loadData();
  },
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";

#app {
  height: 100vh;
  background: url(./assets/img/back.png) no-repeat center center;
  background-size: cover;
  padding-top: 5rem;

  .page {
    margin: 0 auto;
    max-width: 33.75rem;
    background: #fff4e9;
    font-family: $myFontFamily;
    color: $myFontColor;

    .title {
      text-align: center;
      font-weight: 600;
      background: #ffca93;
      padding: 1rem 1.75rem;
    }
  }
}
</style>
