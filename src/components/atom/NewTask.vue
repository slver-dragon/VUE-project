<template>
  <input :class="$style.new" type="text" placeholder="Add a new task" v-model="newTask" v-on:keyup.enter="add" />
</template>

<script>
import {mapMutations} from "vuex"

export default {
 
  data () {
    return {
      newTask: ''
    }
    
  },

  methods: {
    ...mapMutations(["addTask"]),
    
    add() {
      this.addTask(this.newTask);
      this.newTask = ''
    },

  }
}
</script>

<style lang="scss" module>
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
</style>
