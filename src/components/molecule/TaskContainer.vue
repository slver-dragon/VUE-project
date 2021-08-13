<template>
  <div :class="$style.taskContainer">
    <label :class="$style.task">
      <input type="checkbox" :class="$style.inputPoint" :checked = "isChecked" @click="change"/>
      <span :class="$style.checkBox" /> {{ taskN }}
    </label>
    <div :class="$style.deleter" @click="clear"></div>
  </div>
</template>

<script>

import {mapMutations} from "vuex"

export default {
  props: {
    taskN: String,
    isChecked: Boolean,
    id: Number,
  },

  methods: {
    ...mapMutations(["changeTaskStatus","deleteTask","addTask"]),
    change() {
      this.changeTaskStatus(this.id)
    },

    clear() {
      this.deleteTask(this.id)
    },
  }
};
</script>

<style lang="scss" module>
@import "./src/assets/styles/variables.scss";

.taskContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background: $taskBG;
  border-radius: 0.3rem;
  margin-bottom: 1.5rem;

  .task {
    flex: 1 1 auto;

    .inputPoint {
      display: none;
    }

    .checkBox {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border: 0.15rem solid #feb567;
      border-radius: 25%;
      position: relative;
      margin-right: 0.5rem;

      &:before {
        display: block;
        content: "";
        width: 1.2rem;
        height: 1.2rem;
        color: #ffdfbe;
        background-color: #feb567;
        border-radius: 25%;
        opacity: 0;
        position: absolute;
        top: -0.1rem;
      }

      &:after {
        display: block;
        content: "";
        width: 0.6rem;
        height: 0.3rem;
        top: 0.1rem;
        left: 0.1rem;
        border-left: 4px solid #ffdfbe;
        border-bottom: 4px solid #ffdfbe;
        transform: rotate(0.85turn);
        background: #feb567;
        position: absolute;
        opacity: 0;
      }
    }

    .inputPoint:checked + .checkBox:before {
      opacity: 1;
    }

    .inputPoint:checked + .checkBox:after {
      opacity: 1;
    }
  }

  .deleter {
    flex: 0 0 1.2rem;
    width: 1.2rem;
    height: 1.2rem;
    color: #feb567;
    border: 0.15rem solid #feb567;
    border-radius: 25%;
    position: relative;
    cursor: pointer;

    &:before {
      content: "\00D7";
      left: 0.35rem;
      top: -0.1rem;
      position: absolute;
      margin-right: 0.8rem;
    }
  }
}
</style>
