<template>
  <div :class="$style.footer">
    <p>{{ completedTaskCount }}/{{ allTaskLength }} left</p>
    <div :class="$style.sorting">
      <Radio v-for="sort in radioBnt"
      :key="sort.id"
      :sorting="sort.type"
      :isPicked="sort.isPicked"
      :id="sort.id" />
    </div>
  </div>
</template>

<script>
import Radio from "../molecule/Radio.vue";
import {mapGetters} from "vuex"

export default {
  computed: mapGetters (["allTaskLength","completedTaskCount","radioBnt"]),
  
  components: {
    Radio,
  },
};
</script>

<style lang="scss" module>
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
