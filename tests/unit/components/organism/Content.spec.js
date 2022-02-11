import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Container from "@/components/organism/Content.vue";

let localVue = createLocalVue();
localVue.use(Vuex);

describe("Content", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      displayTaskSort: () => [
        {
          id: 1,
          type: "All",
          isPicked: true,
        },
      ],
    };
    store = new Vuex.Store({ getters });
  });

  test("content present", () => {
    let wrapper = mount(Container, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(Container)).toBeTruthy();
  });
});
