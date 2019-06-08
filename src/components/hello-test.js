import Vue from 'vue'
import Hello from './Hello.vue'

describe('Hello App', () => {
  it('has a created hook', () => {
    expect(typeof Hello.created).toBe('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Hello.data).toBe('function')
    const defaultData = Hello.data()
    expect(defaultData.message).toBe('hello!')
  })
  it('correctly sets the message when created', () => {
    const vm = new Vue(Hello).$mount()
    expect(vm.message).toBe('bye!')
  })
  it('renders the correct message', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('bye!')
  })
})
