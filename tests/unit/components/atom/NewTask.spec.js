import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Container from "@/components/atom/NewTask.vue";

let localVue = createLocalVue();
localVue.use(Vuex);

describe("New task", () => {
  test("element present", () => {
    let wrapper = mount(Container, { localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(Container)).toBeTruthy();
  });

  test("add task to list", async () => {
    let wrapper = mount(Container, { localVue });
    let changer = wrapper.find("input");
    await changer.trigger("click");
    console.log(changer);
    /*добавить обработку мутации*/
  });
});