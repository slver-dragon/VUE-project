import vuex from "@/store/index";

export default {
  state: {
    taskData: [],
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
    buttonTitle: "Все",
  },
  mutations: vuex.mutations,
  getters: vuex.getters,
};
