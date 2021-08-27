import Vuex from "Vuex";
import { createLocalVue } from "@vue/test-utils";
import Container from "../../../src/store/index"

let localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    taskData: [],
    sortData: [],
    getters: Container.getters,
  },
  mutations: Container.mutations,
})

describe("store testing", () => {
  it("return all tasks", () => {
    expect(store.state.getters.allTasks.length).toBe(3)
  });

  it("return all sorting", () => {
    expect(store.state.getters.radioBnt.length).toBe(3)
  });

  it("number of all tasks", () => {
    expect(store.state.getters.allTaskLength).toBe(3)
  });

  it("number of all completed tasks", () => {
    expect(store.state.getters.completedTaskCount).toBe(1)
  });

  /*it("sorting type", () => {

    /*console.log(store.state.getters.displayTaskSort)
    expect(store.state.getters.displayTaskSort.type).toEqual("")
  });*/

  it("change task status", () => {
    console.log(store.mutations);
  })
});

/*import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Actions from '../../../src/components/Actions'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Actions.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('вызывает "actionInput", когда значение события — "input"', () => {
    const wrapper = shallowMount(Actions, { store, localVue })
    const input = wrapper.find('input')
    input.element.value = 'input'
    input.trigger('input')
    expect(actions.actionInput).toHaveBeenCalled()
  })

  it('не вызывает "actionInput", когда значение события не "input"', () => {
    const wrapper = shallowMount(Actions, { store, localVue })
    const input = wrapper.find('input')
    input.element.value = 'not input'
    input.trigger('input')
    expect(actions.actionInput).not.toHaveBeenCalled()
  })

  it('вызывает действие хранилища "actionClick" по нажатию кнопки', () => {
    const wrapper = shallowMount(Actions, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(actions.actionClick).toHaveBeenCalled()
  })
})*/