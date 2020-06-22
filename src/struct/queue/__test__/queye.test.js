import Queue from '../queue'
describe("测试queue", () => {

  it("test enqueue", () => {
    let queue = new Queue()
    queue.enqueue(1)
    expect(queue.peak()).toBe(1)
  })

  it("test enqueue", () => {
    let queue = new Queue()
    queue.enqueue(1)
    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBeNull()
  })

  it("test isEmpty", () => {
    let queue = new Queue()
    expect(queue.isEmpty()).toBe(true)
    queue.enqueue(1)
    expect(queue.isEmpty()).toBe(false)
    queue.dequeue()
    expect(queue.isEmpty()).toBe(true)
  })

  it("test peak", () => {
    let queue = new Queue()
    expect(queue.peak()).toBeNull()
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.peak()).toBe(1)
    queue.dequeue()
    expect(queue.peak()).toBe(2)
    queue.dequeue()
    expect(queue.peak()).toBeNull()
  })
})
