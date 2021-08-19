import { shallowMount} from "@vue/test-utils";
import app from "../../src/App";

describe("app", () => {
    it("Выводит заголовок", async () => {
      let wrapper = shallowMount(app);
      expect(wrapper.text()).toMatch("Список задач");
    })
    it("Глубина дерева", async () => {
        let wrapper = shallowMount(app);
        console.log(wrapper.html().length)
      })
  })