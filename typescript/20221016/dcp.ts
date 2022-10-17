/*
Create a custom EventTarget class that implements the following methods:
- addEventListener(name, callback)
- removeEventListener(name, callback)
- dispatchEvent(name)
*/

type ListenerMap = { [key: string]: Set<Function> }

class MyEventTarget {
  listeners: ListenerMap = {}

  addEventListener(name: string, callback: Function): void {
    if (!(name in this.listeners)) this.listeners[name] = new Set<Function>()
    this.listeners[name].add(callback)
  }

  addEventListeners(name: string, ...callbacks: Function[]): void {
    if (!(name in this.listeners)) this.listeners[name] = new Set<Function>()
    for (const callback of callbacks) this.listeners[name].add(callback)
  }

  removeEventListener(name: string, callback: Function): void {
    if (name in this.listeners) this.listeners[name].delete(callback)
  }

  removeEventListeners(name: string, ...callbacks: Function[]): void {
    if (name in this.listeners) for (const callback of callbacks) this.listeners[name].delete(callback)
  }

  dispatchEvent(name: string): void {
    if (name in this.listeners) this.listeners[name].forEach(fn => fn())
  }

  dispatchEvents(...names: string[]): void {
    for (const name of names) this.dispatchEvent(name)
  }
}

const eventTarget = new MyEventTarget()
const foo1 = () => console.log('foo1')
const foo2 = () => console.log('foo2')
const foo3 = () => console.log('foo3')
const bar1 = () => console.log('bar1')
const bar2 = () => console.log('bar2')
const bar3 = () => console.log('bar3')
const baz1 = () => console.log('baz1')
const baz2 = () => console.log('baz2')
const baz3 = () => console.log('baz3')
eventTarget.addEventListeners('foo', foo1, foo2, foo3)
eventTarget.addEventListeners('bar', bar1, bar2, bar3)
eventTarget.addEventListeners('baz', baz1, baz2, baz3)
eventTarget.dispatchEvents('foo', 'bar', 'baz')
console.log('-'.repeat(10))
eventTarget.removeEventListener('foo', foo1)
eventTarget.removeEventListener('bar', bar2)
eventTarget.removeEventListener('baz', baz3)
eventTarget.dispatchEvents('foo', 'bar', 'baz')
console.log('-'.repeat(10))
eventTarget.removeEventListeners('foo', foo1, foo2, foo3)
eventTarget.removeEventListeners('bar', bar1, bar2, bar3)
eventTarget.removeEventListeners('baz', baz1, baz2, baz3)
eventTarget.dispatchEvents('foo', 'bar', 'baz')
console.log('-'.repeat(10))
