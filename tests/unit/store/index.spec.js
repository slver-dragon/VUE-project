import Vuex from "vuex";
import {createLocalVue } from "@vue/test-utils";
import storeConfig from "./store.cfg";

const localVue = createLocalVue ();
localVue.use (Vuex)
const store = storeConfig;

describe("store testing", () => {
  test("change task status", () => {
    console.log(store.state.taskData[0].isChecked);
    console.log(store.commit("changeTaskStatus", 1));

    /*expect(store.state.taskData[0]).toStrictEqual(store.commit("changeTaskStatus", 1))*/
   });

  /*it("delete task", () => {
    let givenIndex = 1;
    store.commit("deleteTask", givenIndex);
    expect(store.state.taskData).toStrictEqual(
      store.state.taskData.splice(givenIndex, 1)
    );
  });*/
});
