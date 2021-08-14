<template>
  <div id="app">
    <div class="page">
      <div class="title">Список задач</div>
      <Content />
      <Footer />
    </div>
  </div>
</template>

<script>
import Content from "./components/organism/Content.vue";
import Footer from "./components/organism/Footer.vue";

export default {
  
  data() {
    return {};
  },
  components: {
    Content,
    Footer,
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
