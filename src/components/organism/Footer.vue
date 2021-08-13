<template>
  <div :class="$style.footer">
    <p>{{ completedTaskCount }}/{{ allTaskLength }} left</p>
    <div :class="$style.sorting">
      <Radio v-for="sort in sortData"
      :key="sort.id"
      :sorting="sort.type"
      :isPicked="sort.isPicked" />
    </div>
  </div>
</template>

<script>
import Radio from "../molecule/Radio.vue";
import {mapGetters} from "vuex"

export default {
  computed: mapGetters (["allTaskLength","completedTaskCount"]),
  data() {
    return {
      sortData: [
        {
          id: 1,
          type: "All",
          isPicked: true,
        },
        {
          id: 2,
          type: "Active",
          isPicked: false,
        },
        {
          id: 3,
          type: "Complete",
          isPicked: false,
        },
      ],
    };
  },
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
