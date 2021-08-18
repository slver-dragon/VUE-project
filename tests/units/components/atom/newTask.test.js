import Vuex from "vuex";
import { mount } from "@vue/test-utils";
import newTask from "../../../../src/components/atom/NewTask";

Vue.use(Vuex);

describe("newTask", () => {
  it("Принимает новое задание", async () => {
    const wrapper = mount(newTask)

    await wrapper.find("[data-newTask]").setValue("Новое здание")
    await wrapper.find("input").trigger("key.enter")

    expect(wrapper.find(".new").text())
      .toBe("Новое задание")
  })
})