<template>
  <div :class="$style.content">
    <TaskContainer
      v-for="tasks in displayTaskSort"
      :key="tasks.id"
      :taskN="tasks.task"
      :isChecked="tasks.isChecked"
      :id="tasks.id"
    />
    <NewTask />
  </div>
</template>

<script>
import TaskContainer from "../molecule/TaskContainer.vue";
import NewTask from "../atom/NewTask.vue";
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["displayTaskSort"]),
  components: {
    TaskContainer,
    NewTask,
  },
};
</script>

<style lang="scss" module>
@import "../../assets/styles/variables.scss";

.content {
  padding: 1.75rem;
  background: $contentBG;
}
</style>
