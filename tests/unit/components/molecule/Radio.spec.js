import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Radio from "@/components/molecule/Radio.vue";

let localVue = createLocalVue();
localVue.use(Vuex);

describe("Radio element", () => {
  let mutations;
  let store;

  beforeEach(() => {
    mutations = { changeRadio: jest.fn() };
    store = new Vuex.Store({ mutations });
  });

  test("element present", () => {
    let wrapper = mount(Radio, { localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(Radio)).toBeTruthy();
  });

  test("change status with click", () => {
    let wrapper = mount(Radio, { store, localVue });
    wrapper.find('input[type = "radio"]').trigger("click");
    expect(mutations.changeRadio).toHaveBeenCalled();
  });
});
