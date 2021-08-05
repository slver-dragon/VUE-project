<template>
  <div class="content">
    <TaskContainer taskN="Task 1" />
    <TaskContainer taskN="Task 2" />
    <TaskContainer taskN="Task 3" />
    <NewTask />
  </div>
</template>

<script>
import TaskContainer from "../molecule/TaskContainer.vue";
import NewTask from "../atom/NewTask.vue";

export default {
  data() {
    return {};
  },
  components: {
    TaskContainer,
    NewTask
  },
};
</script>

<style lang="scss">
@import "../../../assets/styles/variables.scss";

.content {
  padding: 1.75rem;
  background: $contentBG;
}
</style>
