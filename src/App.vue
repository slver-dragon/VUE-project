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
      <label class="element new">Add a new task</label>
      <span class="footer block">
        <p>1/3 left</p>
        <ul class="sorting">
          <li>All</li>
          <li>Active</li>
          <li>Complete</li>
        </ul>
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
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
@import "../src/assets/styles/style.scss";

#app {
  display: flex;
  margin: auto;
  background: linear-gradient(90deg, #ff7e5f, #feb567);
}

</style>
