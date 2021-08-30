import Vuex from "vuex";
import {createLocalVue } from "@vue/test-utils";
import storeConfig from "./store.cfg";

const localVue = createLocalVue ();
localVue.use (Vuex)
const store = storeConfig;

describe("store testing", () => {
  it("return all tasks", () => {
    console.log(store.getters.allTasks)
    expect(store.getters.allTasks.length).toBe(3);
  });

  /*it("return all sorting", () => {
    expect(store.getters.radioBnt.length).toBe(3);
  });

  it("number of all tasks", () => {
    expect(store.getters.allTaskLength).toBe(3);
  });

  it("number of all completed tasks", () => {
    expect(store.getters.completedTaskCount).toBe(1);
  });

  it("sorting type", () => {
    /*console.log(store.getters.displayTaskSort);
    /*console.log(store.getters.displayTaskSort);
    console.log(store.getters.displayTaskSort);
    /*store.state.filter = "All";
    expect(store.getters.displayTaskSort).toStrictEqual(store.state.taskData);
    store.state.filter = "Active";
    expect(store.getters.displayTaskSort.length).toBe(1);
    store.state.filter = "Completed";
    expect(store.getters.displayTaskSort.length).toBe(0);

    /*console.log(store.state.getters.displayTaskSort)
    expect(store.state.getters.displayTaskSort.type).toEqual("")

    store.state.buttonTitle = "All";
    expect(store.getters.displayTaskSort).toStrictEqual(store.state.taskData);
    store.state.buttonTitle = "Active";
    expect(store.getters.displayTaskSort.length).toBe(3);
    store.state.buttonTitle = "Completed";
    expect(store.getters.displayTaskSort.length).toBe(0);*/
  /*});

  /*it("change task status", () => {});*/

  /*it("delete task", () => {
    let givenIndex = 1;
    store.commit("deleteTask", givenIndex);
    expect(store.state.taskData).toStrictEqual(
      store.state.taskData.splice(givenIndex, 1)
    );
  });*/
});
