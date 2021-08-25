import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Container from "@/components/organism/Footer.vue";

let localVue = createLocalVue();
localVue.use(Vuex);

describe("Footer", () => {
  test("footer present", () => {
    let wrapper = mount(Container, { localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(Container)).toBeTruthy();
  });
});