class GraphEdge {
  constructor (startVertex, endVertex, value = 0) {
    this.startVertex = startVertex
    this.endVertex = endVertex
    this.weight = value
    this.UNI_KEY = Symbol(value)
  }

  getKey() {
    return `${this.startVertex.value}_${this.endVertex.value}`
  }

  reverse() {
    [this.startVertex, this.endVertex] = [this.endVertex, this.startVertex]
  }

  toString() {
    return this.getKey()
  }
}

export default GraphEdge
