import Heap from './Heap'

class MinHeap extends Heap {
  constructor () {
    super((a,b) => b - a > 0)
  }
}

export default MinHeap
