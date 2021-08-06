<template>
  <label class="sorting-button"
    ><input type="radio" name="sorter" />
    <span class="sorting-type">{{ sorting }}</span>
  </label>
</template>

<script>
export default {
  props: {
    sorting: String,
  },
};
</script>

<style lang="scss">
input[type="radio"] {
  display: none;
}

.sorting-button {
  border: none;
  margin-left: 0.5rem;

  input[type="radio"]:checked + .sorting-type {
    border: 0.125rem solid #7f4b13;
    border-radius: 0.3rem;
    padding: 0.125rem 0.25rem;
  }
}
</style>
