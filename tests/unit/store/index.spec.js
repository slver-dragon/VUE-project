import storeConfig from "./store.cfg";

const store = storeConfig;

describe("store testing", () => {
  it("return all tasks", () => {
    expect(store.getters.allTasks.length).toBe(3);
  });

  it("return all sorting", () => {
    expect(store.getters.radioBnt.length).toBe(3);
  });

  it("number of all tasks", () => {
    expect(store.getters.allTaskLength).toBe(3);
  });

  it("number of all completed tasks", () => {
    expect(store.getters.completedTaskCount).toBe(1);
  });

  /*it("sorting type", () => {

    /*console.log(store.state.getters.displayTaskSort)
    expect(store.state.getters.displayTaskSort.type).toEqual("")
  });*/

  /*it("change task status", () => {});*/

  it("delete task", () => {
    let givenIndex = 1;
    store.commit("deleteTask", givenIndex);
    expect(store.state.taskData).toStrictEqual(
      store.state.taskData.splice(givenIndex, 1)
    );
  });
});
