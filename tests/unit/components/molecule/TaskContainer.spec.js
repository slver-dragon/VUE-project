import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Container from "@/components/molecule/TaskContainer.vue";

let localVue = createLocalVue();
localVue.use(Vuex);

describe("Task element", () => {
  let mutations;
  let store;

  beforeEach(() => {
    mutations = {
      changeTaskStatus: jest.fn(),
      deleteTask: jest.fn(),
      saveData: jest.fn(),
    };
    store = new Vuex.Store({ mutations });
  });

  test("element present", () => {
    let wrapper = mount(Container, { localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(Container)).toBeTruthy();
  });

  test("change status with click", () => {
    let wrapper = mount(Container, { store, localVue });
    wrapper.find('input[type = "checkbox"]').trigger("click");
    expect(mutations.changeTaskStatus).toHaveBeenCalled();
  });

  test("delete task from list", async () => {
    let wrapper = mount(Container, { store, localVue });
    wrapper.findAll("div").at(1).trigger("click");
    expect(mutations.deleteTask).toHaveBeenCalled();
  });
});
