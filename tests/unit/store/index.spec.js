import Vuex from "Vuex";
import { createLocalVue } from "@vue/test-utils";
import store from "@/components/store/index.js";

let localVue = createLocalVue();
localVue.use(Vuex);

let taskData = [
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
];

let sortData = [
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
];

let state = { taskData };

describe("task", () => {
  it("возвращает задания", () => {
    let current = store.getters.allTasks();
    console.log(current);
    expect(current).toEqual([ taskData[0], taskData[2] ])
  });
});