import vuex from "@/store/index";

export default {
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
    buttonTitle: "All",
  },
  mutations: vuex.mutations,
  getters: vuex.getters,
};
