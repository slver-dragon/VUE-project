<template>
  <div class="footer">
    <p>1/3 left</p>
    <div class="sorting">
      <Radio sorting="All" />
      <Radio sorting="Active" />
      <Radio sorting="Complete" />
    </div>
  </div>
</template>

<script>
import Radio from "../molecule/Radio.vue";

export default {
  data() {
    return {};
  },
  components: {
    Radio,
  },
};
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.75rem;
  font-weight: 600;
  background: #ffca93;

  .sorting {
    display: flex;
  }
}
</style>
