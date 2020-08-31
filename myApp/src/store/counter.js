import { observable } from 'mobx'
import { service } from '../services'

const counterStore = observable({
  counter: 0,
  counterStore() {
    this.counter++
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  },
  getData() {
    service.getData().then(res => {
      console.log(res);
    })
  }
})

export default counterStore
