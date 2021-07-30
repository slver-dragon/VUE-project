<template>
  <div id="app">
    <div class="page">
      <span class="title block">to do list</span>
      <label class="element ready">
        <div class="task">
          <input type="checkbox" class="input-point" checked />
          <span class="check-box"></span>Task 1
        </div>
        <span class="deleter"></span>
      </label>
      <label class="element ready">
        <div class="task">
          <input type="checkbox" class="input-point" />
          <span class="check-box"></span>Task 2
        </div>
        <span class="deleter"></span>
      </label>
      <label class="element ready">
        <div class="task">
          <input type="checkbox" class="input-point" />
          <span class="check-box"></span>Task 3
        </div>
        <span class="deleter"></span>
      </label>
      <input class="element new" type="button" value="Add a new task" />
      <span class="footer block">
        <p>1/3 left</p>
        <div class="sorting">
          <label class="sorting-button"
            ><input type="radio" name="sorter" checked /><span class="sorting-type"
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
@import "../src/assets/styles/style.scss";

#app {
  display: flex;
  margin: auto;
  background: linear-gradient(90deg, #ff7e5f, #feb567);
}
</style>
