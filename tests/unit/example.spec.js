import { shallowMount } from "@vue/test-utils";
import NewTask from "@/components/atom/NewTask.vue";


describe("test for component NewTask", () => {
  const wrapper = shallowMount(NewTask);

  it("render input", () => {
    expect(wrapper.find("input")).toBeTruthy();
  });

  it("visibility", () => {
    expect(wrapper.isVisible()).toBe(true);
  });
});
