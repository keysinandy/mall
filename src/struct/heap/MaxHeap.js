import Heap from './Heap'

class MaxHeap extends Heap {
  constructor () {
    super((a,b) => a - b > 0)
  }
}

export default MaxHeap
