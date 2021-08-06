<template>
  <div class="taskContainer">
    <label class="task">
      <input type="checkbox" class="input-point" />
      <span class="check-box" /> {{ taskN }}
    </label>
    <div class="deleter"></div>
  </div>
</template>

<script>
export default {
  props: {
    taskN: String,
  },
};
</script>

<style lang="scss">
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

    .input-point {
      display: none;
    }

    .check-box {
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

    .input-point:checked + .check-box:before {
      opacity: 1;
    }

    .input-point:checked + .check-box:after {
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
