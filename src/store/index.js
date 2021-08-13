import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskData: [
      {
        id: 1,
        task: "Task 1",
        isChecked: false,
      },
      {
        id: 2,
        task: "Task 2",
        isChecked: true,
      },
      {
        id: 3,
        task: "Task 3",
        isChecked: false,
      },
    ],
    sortData: [
      {
        id: 1,
        type: "All",
        isPicked: true,
      },
      {
        id: 2,
        type: "Active",
        isPicked: false,
      },
      {
        id: 3,
        type: "Complete",
        isPicked: false,
      },
    ],
  },

  getters: {
    allTasks(state) {
      return state.taskData;
    },

    radioBnt(state) {
      return state.sortData;
    },

    allTaskLength(state) {
      return state.taskData.length;
    },

    completedTaskCount(state) {
      return state.taskData.filter((i) => i.isChecked).length;
    },
  },

  mutations: {
    check() {
      console.log("yoo");
    },
  },
  //actions: {}
});
