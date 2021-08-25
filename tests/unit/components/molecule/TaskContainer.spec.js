import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Container from "@/components/molecule/TaskContainer.vue";
import mutations from "@/components/store/index.js"

let localVue = createLocalVue();
localVue.use(Vuex);

describe("Task element", () => {
  test("element present", () => {
    let wrapper = mount(Container, { localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(Container)).toBeTruthy();
  });

  test("changes status with click", async () => {
    let wrapper = mount(Container, { localVue });
    let changer = wrapper.find('input[type = "checkbox"]');
    await changer.trigger("click");
    expect(changer.element.checked).toBeTruthy();
  });

  test("delete task from list", async () => {
    let wrapper = mount(Container, { localVue });
    let changer = wrapper.findAll("div").at(1);
    await changer.trigger("click");
    console.log(changer);
    /*добавить обработку мутации*/
  });

  
});
