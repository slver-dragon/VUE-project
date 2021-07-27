<template>
  <div id="app">
    <div class="page">
      <span>What needs to be done?</span>
      <br />
      <span>{{ checkedNames }}</span>
      <br />
      <label class="element">
        <span class="check-box"></span>
        <input class="choiser" type="checkbox" id="one" value="Learn React!" v-model="checkedNames" checked />Learn React!
      </label>
      <br />
      <label class="element">
        <span class="check-box"></span>
        <input class="choiser" type="checkbox" id="two" value="Make HomeWork!" v-model="checkedNames" />Make HomeWork!
      </label>
      <br />
      <label class="element">
        <span class="check-box"></span>
        <input class="choiser" type="checkbox" id="three" value="Relaxation!" v-model="checkedNames" />Relaxation!
        </label>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedNames: [],
    };
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  margin: auto;
  background-color: #444;

  .page {
    display: flex;
    flex-direction: column;
    width: 31%;
    height: 40%;
    margin: 0.5% auto;
    padding: 1rem;
    background: #ccc;
    border: 0.125rem solid #000;

    span {
      font-size: 2.25vw;
      margin: 0% auto;
    }

    .element {
      font-size: 2.5vw;
      vertical-align: middle;
      margin: 1% 0.5%;
      padding-left: 1.2em;

      .check-box {
        width: 0.7em;
        height: 0.7em;
        margin-right: 0.5em;
        background-color: #ccc;
        display: inline-block;
        border-radius: 50%;
        box-shadow: 0em 0em 0em 0.15em #000;
      }
    }

    .choiser {
      transform: scale(1.75);
      vertical-align: middle;
      margin: 1%;
      -webkit-appearance: none;
      -moz-appearance: none;
    }

    .choiser:checked ~ .check-box {
      display: none;      
    }
  }
}
</style>


<!--
<style>
  /* для элемента input c type="radio" */
  .custom-radio {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  /* для элемента label связанного с .custom-radio */
  .custom-radio+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  /* создание в label псевдоэлемента  before со следующими стилями */
  .custom-radio+label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  /* стили при наведении курсора на радио */
  .custom-radio:not(:disabled):not(:checked)+label:hover::before {
    border-color: #b3d7ff;
  }
  /* стили для активной радиокнопки (при нажатии на неё) */
  .custom-radio:not(:disabled):active+label::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }
  /* стили для радиокнопки, находящейся в фокусе */
  .custom-radio:focus+label::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  /* стили для радиокнопки, находящейся в фокусе и не находящейся в состоянии checked */
  .custom-radio:focus:not(:checked)+label::before {
    border-color: #80bdff;
  }
  /* стили для радиокнопки, находящейся в состоянии checked */
  .custom-radio:checked+label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }
  /* стили для радиокнопки, находящейся в состоянии disabled */
  .custom-radio:disabled+label::before {
    background-color: #e9ecef;
  }
</style>

<input class="custom-radio" name="color" type="radio" id="color-green" value="green">
<label for="color-green">Green</label>
-->
