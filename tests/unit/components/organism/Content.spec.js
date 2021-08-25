import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Container from "@/components/organism/Content.vue";

let localVue = createLocalVue();
localVue.use(Vuex);

describe("Content", () => {
  test("content present", () => {
    let wrapper = mount(Container, { localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(Container)).toBeTruthy();
  });
});
