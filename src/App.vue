<template>
  <div id="app">
    <div class="page">
      <div class="title">to do list</div>
      <div class="content">
        <TaskContainer taskN="Task 1" />
        <TaskContainer taskN="Task 2" />
        <TaskContainer taskN="Task 3" />
        <input class="new" type="text" placeholder="Add a new task" />
      </div>
      <div class="footer block">
        <p>1/3 left</p>
        <div class="sorting">
          <Radio sorting="All" />
          <Radio sorting="Active" />
          <Radio sorting="Complete" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TaskContainer from './components/content/TaskContainer.vue'
import Radio from './components/content/Radio.vue'

export default {
  data() {
    return {};
  },
  components: {
    TaskContainer,
    Radio
  }
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
@import "./assets/styles/reset.scss";

#app {
  height: 100vh;
  background: url(./assets/img/back.png) no-repeat center center;
  background-size: cover;
  padding-top: 5rem;

  .page {
    margin: 0 auto;
    max-width: 33.75rem;
    background: #fff4e9;
    font-family: $myFontFamily;
    color: $myFontColor;

    .title {
      text-align: center;
      font-weight: 600;
      background: #ffca93;
      padding: 1rem 1.75rem;
    }

    .content {
      padding: 1.75rem;
      background: $contentBG;

      .new {
        width: 100%;
        padding: 0.5rem 0;
        text-align: center;
        color: #ffca93;
        background-color: #ffecd8;
        border: 0.125rem dashed #ffca93;
        border-radius: 0.3rem;
        cursor: pointer;

        &::placeholder {
          color: #ffca93;
          padding-left: 0.5rem;
        }

        &:focus {
          outline: none;
        }
      }
    }

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
  }
}
</style>
