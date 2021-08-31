import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import storeConfig from "./store.cfg";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(storeConfig);

describe("store testing", () => {
  test("getters: return all tasks", () => {
    expect(store.getters.allTasks.length).toBe(3);
  });

  test("getters: return all sorting", () => {
    expect(store.getters.radioBnt.length).toBe(3);
  });

  test("getters: number of all tasks", () => {
    expect(store.getters.allTaskLength).toBe(3);
  });

  test("getters: number of all completed tasks", () => {
    expect(store.getters.completedTaskCount).toBe(1);
  });

  test("getters: number of all completed tasks", () => {
    expect(store.getters.completedTaskCount).toBe(1);
  });

  test("getters: display sorted tasks", () => {
    for (let i = 0; i < 3; i++) {
      store.state.sortData[i].isPicked = true;
      switch (i) {
        case 0:
          expect(store.getters.displayTaskSort.length).toBe(3);
          break;
        case 1:
          expect(store.getters.displayTaskSort.length).toBe(1);
          break;
        default:
          expect(store.getters.displayTaskSort.length).toBe(2);
      }
      store.state.sortData[i].isPicked = false;
    }

    /*expect(store.getters.displayTaskSort).toBe(1);*/
  });

  test("change task status", () => {
    let oldState = store.state.taskData[0].isChecked;
    store.commit("changeTaskStatus", 1);
    expect(store.state.taskData[0].isChecked).toBe(!oldState);
  });

  test("delete task", () => {
    let oldState = store.state.taskData.length;
    store.commit("deleteTask", 1);
    expect(store.state.taskData.length).toBe(--oldState);
  });

  test("add task", () => {
    let oldState = store.state.taskData.length;
    store.commit("addTask", 1);
    expect(store.state.taskData.length).toBe(++oldState);
  });

  test("sorting button", () => {
    for (let i = 1; i < 4; ++i) {
      store.commit("changeRadio", i);
      expect(store.state.sortData[i - 1].isPicked).toBe(true);
    }
  });

  test("save/load store", () => {
    window.localStorage.clear;
    store.commit("loadData");
    store.commit("saveData");
    for (let i = 1; i <= store.state.taskData.length; ++i) {
      store.commit("deleteTask", 1);
    }
    store.commit("loadData");
  });
});
