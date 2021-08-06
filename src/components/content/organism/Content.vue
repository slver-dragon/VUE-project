<template>
  <div class="content">
    <TaskContainer
      v-for="(taskN, isChecked) in taskData"
      v-bind:key="taskData.id"
      v-bind:taskN="taskData.task"
      v-bind:isChecked="taskData.isChecked"
    />
    <NewTask />
  </div>
</template>

<script>
import TaskContainer from "../molecule/TaskContainer.vue";
import NewTask from "../atom/NewTask.vue";

export default {
  data() {
    taskData: [
      {
        id: 1,
        task: "Task 1",
        isChecked: true,
      },
      {
        task: "Task 2",
        isChecked: false,
      },
      {
        task: "Task 3",
        isChecked: false,
      },
    ];
    return {};
  },
  components: {
    TaskContainer,
    NewTask,
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
