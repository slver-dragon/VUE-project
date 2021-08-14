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
    
    displayTaskSort(state) {
      switch (state.sortData.filter((i) => i.isPicked)[0].id) {
        case 3: return state.taskData.filter((i) => !i.isChecked);
        case 2: return state.taskData.filter((i) => i.isChecked);
        default: return state.taskData;
      }
    }
  },

  mutations: {
    changeTaskStatus(state, id) {
      state.taskData = state.taskData.map((i) =>
        i.id === id ? { ...i, isChecked: !i.isChecked } : i
      );
    },

    deleteTask(state, id) {
      state.taskData.splice(id - 1, 1);
      for (let i = 0; i < state.taskData.length; i++) {
        state.taskData[i].id = i + 1;
      }
    },

    addTask(state,task) {
      state.taskData.push({id:state.taskData.length + 1,task:task,isChecked:true});
    },

    changeRadio(state,btnId) {
      state.sortData = state.sortData.map((i) => i.id === btnId ? { ...i, isPicked: true } : { ...i, isPicked: false });
    }
  },
});
