<template>
  <div :class="$style.content">
    <TaskContainer
      v-for="tasks in taskData"
      :key="tasks.id"
      :taskN="tasks.task"
      :isChecked="tasks.isChecked"
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
          isChecked: false,
        },
        {
          id: 2,
          task: "Task 2",
          isChecked: true,
        },
        {
          id: 3,
          task: "Task 3",
          isChecked: false,
        },
      ],
    };
  },
  components: {
    TaskContainer,
    NewTask,
  },
};
</script>

<style lang="scss" module>
@import "../../../assets/styles/variables.scss";

.content {
  padding: 1.75rem;
  background: $contentBG;
}
</style>
