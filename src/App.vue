<template>
  <div id="app">
    <div class="page">
      <label class="element">
        <span class="check-box"></span>
        <input
          class="input-point"
          type="checkbox"
          id="one"
          value="Learn React!"
          v-model="checkedNames"
          checked
        />Learn React!
      </label>
      <br />
      <label class="element">
        <span class="check-box"></span>
        <input
          class="input-point"
          type="checkbox"
          id="two"
          value="Make HomeWork!"
          v-model="checkedNames"
        />Make HomeWork!
      </label>
      <br />
      <label class="element">
        <span class="check-box"></span>
        <input
          class="input-point"
          type="checkbox"
          id="three"
          value="Relaxation!"
          v-model="checkedNames"
        />Relaxation!
      </label>
      <br />
      <span class="task-list">What needs to be done?</span>
      <br />
      <span class="task-list">{{ checkedNames }}</span>
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

<style lang="css">
#app {
  display: flex;
  margin: auto;
  background-color: #444;
}

.page {
  display: flex;
  flex-direction: column;
  width: 31%;
  height: 40%;
  margin: 0.5% auto;
  padding: 1rem;
  background: #ccc;
  border: 0.125rem solid #000;
}

.task-list {
  font-size: 2.25vw;
  margin: 0% auto;
}

.element {
  font-size: 2.5vw;
  margin: 1% 0.5%;
  padding-left: 1.2em;
}

.input-point {
  margin: 1%;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.check-box {
  display: inline-block;
  width: 0.6em;
  height: 0.6em;
  border: 0.1em solid black;
  border-radius: 50%;
  position: relative;
}

.check-box::before {
  display: block;
  content: "";
  position: absolute;
  width: 0.5em;
  height: 0.5em;
  top: 0.05em;
  left: 0.05em;
  background-color: black;
  border-radius: 50%;
  opacity: 0;
}

.input-point:checked + .check-box::before {
  opacity: 1;
}
</style>