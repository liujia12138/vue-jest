// import {shallowMount} from "@vue/test-utils"
import { mount } from '@vue/test-utils'
import MyComponent from "../../src/components/vueTest/test.vue"

describe('MyComponent.vue', () => {
  const wrapper = mount(MyComponent, {
    propsData: {
      msg: 'Hello'
    }
  })

  it('has msg', () => {
    expect(wrapper.text()).toBe("Hello")
  })
})