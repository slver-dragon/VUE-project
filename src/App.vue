<template>
  <div id="app">
    <div class="page">
      <span class="title block">to do list</span>
      <label class="element ready">
        <div class="task">
          <input type="checkbox" class="input-point" checked />
          <span class="check-box"></span>Task 1
        </div>
      </label>
      <span class="deleter"></span>
      <label class="element ready">
        <div class="task">
          <input type="checkbox" class="input-point" />
          <span class="check-box"></span>Task 2
        </div>
      </label>
      <span class="deleter"></span>
      <label class="element ready">
        <div class="task">
          <input type="checkbox" class="input-point" />
          <span class="check-box"></span>Task 3
        </div>
      </label>
      <span class="deleter"></span>
      <input class="element new" type="text" placeholder="Add a new task" />
      <span class="footer block">
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
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
@import "./assets/styles/reset.scss";

#app {
  display: flex;
  align-items: center;
  margin: auto;
  height: 100vh;
  background: url(./assets/img/back.png) no-repeat center center;
  background-size: cover;
  position: relative;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 33.625em;
  height: 27.188em;
  margin: 0.5% auto;
  background: #fff4e9;
  z-index: 1;

  .block {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $myFont;
    color: #7f4b13;
    font-weight: 600;
    background: #ffca93;
    height: 11.495%;
  }

  .title {
    font-size: 1.25rem;
    margin-bottom: 1.75em;
  }

  .element {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: $myFont;
    font-size: 1.25rem;
    font-weight: 400;
    width: 89.22%;
    height: 11.495%;
    margin: 0.25% 5.5556%;
    border-radius: 0.3em;

    .task {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin-left: 0.8em;

      .input-point {
        display: none;
      }

      .check-box {
        display: inline-block;
        width: 1em;
        height: 1em;
        border: 0.1em solid #feb567;
        border-radius: 25%;
        position: relative;
        margin-right: 0.5em;
        vertical-align: middle;
      }

      .check-box:before {
        display: block;
        content: "";
        width: 1em;
        height: 1em;
        color: #ffdfbe;
        background-color: #feb567;
        border-radius: 25%;
        opacity: 0;
      }

      .check-box:after {
        display: block;
        content: "";
        width: 0.6em;
        height: 0.3em;
        top: 0.2em;
        left: 0.1em;
        border-left: 4px solid #ffdfbe;
        border-bottom: 4px solid #ffdfbe;
        transform: rotate(0.85turn);
        background: #feb567;
        position: absolute;
        opacity: 0;
      }

      .input-point:checked + .check-box:before {
        opacity: 1;
      }

      .input-point:checked + .check-box:after {
        opacity: 1;
      }
    }
  }

  .deleter {
    display: inline-block;
    width: 1.2em;
    height: 1.3em;
    color: #feb567;
    border: 0.1em solid #feb567;
    border-radius: 25%;
    vertical-align: middle;
    position: relative;
    margin-right: 0.8em;
    top: -2.25em;
    left: 29.5em;
  }

  .deleter:before {
    content: "\00D7";
    top: 0.16em;
    left: 0.35em;
    position: absolute;
    margin-right: 0.8em;
  }

  .footer {
    display: flex;
    justify-content: space-around;
    margin-top: 1.75em;

    .sorting {
      display: flex;
      justify-content: space-between;
      width: 60%;

      input[type="radio"] {
        display: none;
      }

      .sorting-button {
        border: none;

        input[type="radio"]:checked + .sorting-type {
          border: 0.125rem solid #7f4b13;
          border-radius: 0.3em;
          padding: 0.125rem 0.25rem;
        }
      }
    }
  }

  .ready {
    color: #7f4b13;
    background-color: #ffdfbe;
  }

  .new {
    text-align: center;
    color: #ffca93;
    background-color: #ffecd8;
    border: 0.125rem dashed #ffca93;
  }
}
</style>
