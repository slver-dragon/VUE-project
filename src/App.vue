<template>
  <div id="app">
    <div class="page">
      <span class="title block">to do list</span>
      <label class="element">
        <input type="checkbox" class="input-point" id="task-1" />
        <span class="check-box"></span>Learn React!
      </label>
      <label class="element">
        <input type="checkbox" class="input-point" id="task-2" />
        <span class="check-box"></span>Make HomeWork!
      </label>
      <label class="element">
        <input type="checkbox" class="input-point" id="task-3" />
        <span class="check-box"></span>Relaxation!
      </label>
      <span class="footer block"></span>
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
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

$myFont: "Open Sans";
$border: 0.0625rem solid #000;
$permission: 62rem,31rem;

#app {
  display: flex;
  margin: auto;
  background-color: #e5e5e5;
}

.page {
  display: flex;
  flex-direction: column;
  width: 21%;
  height: 40%;
  margin: 0.5% auto;
  background: #ccc;
  border: $border;

  .block {
    font-family: $myFont;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    background: #aaa;
  }

  .title {
    border-bottom: $border;
  }

  .element {
    font-size: 1.25rem;
    font-weight: 400;
    margin: 1% 0.5%;
    padding-left: 1.2em;
    background-color: #bbb;
    border-radius: 5%;

    .input-point {
      margin: 1%;
      -webkit-appearance: none;
      -moz-appearance: none;
    }

    .check-box {
      display: inline-block;
      width: 0.5em;
      height: 0.5em;
      border: 0.1em solid black;
      border-radius: 50%;
      position: relative;
      margin-right: 0.5em;
    }

    .check-box:before {
      display: block;
      content: "";
      position: absolute;
      width: 0.3em;
      height: 0.3em;
      top: 0.1em;
      left: 0.1em;
      background-color: black;
      border-radius: 50%;
      opacity: 0;
    }

    .input-point:checked + .check-box:before {
      opacity: 1;
    }

    .footer {
      border-top: $border;
    }
  }
}

@media (max-width: nth($permission,1)) {
  .page {
    width: 50%;
  }
}

@media (max-width: nth($permission,2)) {
  .page {
    width: 100%;
  }
}
</style>

<!--<div class="page">
      <label class="element">
        <span class="check-box"></span>
        <input class="input-point" type="checkbox" id="one" value="Learn React!" checked />Learn React!
      </label>
      <br />
      <label class="element">
        <span class="check-box"></span>
        <input class="input-point" type="checkbox" id="two" value="Make HomeWork!" />Make HomeWork!
      </label>
      <br />
      <label class="element">
        <span class="check-box"></span>
        <input class="input-point" type="checkbox" id="three" value="Relaxation!" />Relaxation!
      </label>
      <br />
      <span class="task-list">What needs to be done?</span>
      <br />
      <span class="task-list">{{ checkedNames }}</span>
    </div>-->

<!---->
