import Stack from '../stack'

describe("测试 stack", () => {
  it("test push", () => {
    let stack = new Stack()
    expect(stack.push(1)).toBe(1)
    expect(stack.peak()).toBe(1)
  })

  it("test pop", () => {
    let stack = new Stack()
    stack.push(1)
    stack.push(2)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBeNull()
  })

  it("test isEmpty", () => {
    let stack = new Stack()
    stack.push(1)
    expect(stack.isEmpty()).toBe(false)
    stack.pop()
    expect(stack.isEmpty()).toBe(true)
  })

  it("test peak", () => {
    let stack = new Stack()
    expect(stack.peak()).toBeNull()
    stack.push(1)
    expect(stack.peak()).toBe(1)
  })

  it("test toString", () => {
    let stack = new Stack()
    expect(stack.toString()).toBe("")
    stack.push(1)
    stack.push(2)
    expect(stack.toString()).toBe("21")
    expect(stack.toString(",")).toBe("2,1")
  })

  it("test toArray", () => {
    let stack = new Stack()
    expect(stack.toArray()).toEqual([])
    stack.push(1)
    stack.push(2)
    expect(stack.toArray()).toEqual([2, 1])
  })
})