<template>
  <label :class="$style.sortingButton"
    ><input
      type="radio"
      name="sorter"
      :checked="isPicked"
      :id="id"
      @click="change"
    />
    <span :class="$style.sortingType">{{ sorting }}</span>
  </label>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    sorting: String,
    isPicked: Boolean,
    id: Number,
  },

  methods: {
    ...mapMutations(["changeRadio"]),
    change() {
      this.changeRadio(this.id);
    },
  },
};
</script>

<style lang="scss" module>
input[type="radio"] {
  display: none;
}

.sortingButton {
  border: none;
  margin-left: 0.5rem;

  input[type="radio"]:checked + .sortingType {
    border: 0.125rem solid #7f4b13;
    border-radius: 0.3rem;
    padding: 0.125rem 0.25rem;
  }
}
</style>
