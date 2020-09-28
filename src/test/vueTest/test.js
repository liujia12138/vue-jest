/* eslint-disable no-undef */
import {shallowMount} from "@vue/test-utils"
import MyComponent from "../../components/vueTest/test.vue"
import HelloWord from "../../components/vueTest/test.vue"
// 挂载元素并返回已渲染的组件的工具函数
function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData
  })
}

describe('MyComponent', () => {
  it('renders correctly with different props', () => {
    expect(
      getMountedComponent(MyComponent, {
        msg: 'Hello'
      }).text()
    ).toBe('Hello')

    expect(
      getMountedComponent(MyComponent, {
        msg: 'Bye'
      }).text()
    ).toBe('Bye')
  }),
  it('has a button', ()=>{
    expect(getMountedComponent(MyComponent, {
      msg: 'Hello'
    }).contains("button")).toBe(false)
  })
  it('has a button', ()=>{
    expect(getMountedComponent(HelloWord, {
      msg: 'Hello HelloWord'
    }).contains("button")).toBe(false)
  })
})