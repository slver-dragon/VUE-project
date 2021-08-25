import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Radio from "@/components/molecule/Radio.vue";

let localVue = createLocalVue();
localVue.use(Vuex);

describe("Radio element", () => {
  test("element present", () => {
    let wrapper = mount(Radio, { localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(Radio)).toBeTruthy();
  });

  test("changes status with click", async () => {
    let wrapper = mount(Radio, { localVue });
    let changer = wrapper.find('input[type = "radio"]');
    await changer.trigger('click');
    expect(changer.element.checked).toBeTruthy();
  });
});