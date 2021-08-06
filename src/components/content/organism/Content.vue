<template>
  <div class="content">
    <TaskContainer
      v-for="(task, isChecked) in taskData"
      :key="taskData.id"
      :taskN="taskData.task"
      :isChecked="taskData.isChecked"
    />
    <NewTask />
  </div>
</template>

<script>
import TaskContainer from "../molecule/TaskContainer.vue";
import NewTask from "../atom/NewTask.vue";

export default {
  data() {
    return {
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
    ]
    };
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
