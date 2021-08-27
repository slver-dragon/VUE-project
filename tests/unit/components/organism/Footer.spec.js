import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Container from "@/components/organism/Footer.vue";

let localVue = createLocalVue();
localVue.use(Vuex);

describe("Footer", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      radioBnt: () => [
        {
          id: 1,
          type: "All",
          isPicked: true,
        },
      ],
      completedTaskCount: () => [
        {
          id: 1,
          task: "Task 1",
          isChecked: false,
        },
      ],
      allTaskLength: () => [
        {
          id: 1,
          task: "Task 1",
          isChecked: false,
        },
      ],
    };
    store = new Vuex.Store({ getters });
  });

  test("footer present", () => {
    let wrapper = mount(Container, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(Container)).toBeTruthy();
  });
});