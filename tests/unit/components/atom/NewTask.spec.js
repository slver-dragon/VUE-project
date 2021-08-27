import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Container from "@/components/atom/NewTask.vue";

let localVue = createLocalVue();
localVue.use(Vuex);

describe("New task", () => {
  let mutations;
  let store;

  beforeEach(() => {
    mutations = {
      addTask: jest.fn(),
      saveData: jest.fn(),
    };
    store = new Vuex.Store({ mutations });
  });
  
  test("element present", () => {
    let wrapper = mount(Container, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(Container)).toBeTruthy();
  });

  test("add task to list",  () => {
    let wrapper = mount(Container, { store, localVue });
    wrapper.find('input[type = "text"]').trigger("keyup.enter");
    expect(mutations.addTask).toHaveBeenCalled();
  });
});