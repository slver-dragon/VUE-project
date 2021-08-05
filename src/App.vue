<template>
  <div id="app">
    <div class="page">
      <div class="title">to do list</div>
      <div class="content">
        <taskContainer></taskContainer>
        <taskContainer></taskContainer>
        <taskContainer></taskContainer>
        <input class="new" type="text" placeholder="Add a new task" />
      </div>
      <div class="footer block">
        <p>1/3 left</p>
        <div class="sorting">
          <label class="sorting-button"
            ><input type="radio" name="sorter" checked /><span
              class="sorting-type"
              >All</span
            ></label
          >
          <label class="sorting-button"
            ><input type="radio" name="sorter" /><span class="sorting-type"
              >Active</span
            ></label
          >
          <label class="sorting-button"
            ><input type="radio" name="sorter" /><span class="sorting-type"
              >Complete</span
            ></label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import taskContainer from './assets/components/content/taskContainer.vue'

export default {
  data() {
    return {};
  },
  components: {
    taskContainer
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
            width: 0.9rem;
            height: 0.9rem;
            border: 0.1rem solid #feb567;
            border-radius: 25%;
            position: relative;
            margin-right: 0.5rem;

            &:before {
              display: block;
              content: "";
              width: 1rem;
              height: 1rem;
              color: #ffdfbe;
              background-color: #feb567;
              border-radius: 25%;
              opacity: 0;
            }

            &:after {
              display: block;
              content: "";
              width: 0.6rem;
              height: 0.3rem;
              top: 0.2rem;
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
          height: 1.3rem;
          color: #feb567;
          border: 0.1rem solid #feb567;
          border-radius: 25%;
          position: relative;
          cursor: pointer;

          &:before {
            content: "\00D7";
            left: 0.35rem;
            position: absolute;
            margin-right: 0.8rem;
          }
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

        input[type="radio"] {
          display: none;
        }

        .sorting-button {
          border: none;
          margin-left: 0.5rem;

          input[type="radio"]:checked + .sorting-type {
            border: 0.125rem solid #7f4b13;
            border-radius: 0.3rem;
            padding: 0.125rem 0.25rem;
          }
        }
      }
    }
  }
}
</style>
