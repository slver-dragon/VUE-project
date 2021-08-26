import Vuex from "Vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Container from "@/components/molecule/TaskContainer.vue";
import Store from "../../../../src/store/index";

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

  let state = Store.state;

  test("delete task from list", async () => {
    let wrapper = mount(Container, { localVue });
    let changer = wrapper.findAll("div").at(1);
    await changer.trigger("click");
    state.mutations.deleteTask(1);
    console.log(Store.state.taskData.length - state.taskData.length);
    /*expect(state.taskData.length === )*/
  });

  
});
