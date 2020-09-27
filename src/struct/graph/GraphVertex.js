class GraphVertex {
  constructor(value) {
    if (value == null) {
      throw new Error('vertex value cant be null')
    }
    this.value = value
    this.edges = new Map()
    this.UNI_KEY = Symbol(value)
  }

  addEdge(edge) {
    this.edges.set(edge.UNI_KEY, edge)
    return this
  }

  getEdges() {
    let edges = []
    for (const edge of this.edges.values()) {
      edges.push(edge)
    }
    return edges
  }
  hasEdge(edge) {
    return this.getEdges().includes(edge)
  }

  deleteEdge(edge) {
    this.edges.delete(edge.UNI_KEY)
  }

  findEdge(vert) {
    if (vert === this) return null

    let result = this.getEdges().filter(edge => {
      return edge.startVertex === vert || edge.endVertex === vert
    })

    return result[0] || null
  }

  deleteAllEdges() {
    this.edges.clear()
  }

  getDegree() {
    return this.getEdges().length
  }

  getNeighbors() {
    return this.getEdges().map(v => {
      return v.startVertex === this ? v.endVertex : v.startVertex
    })
  }

  hasNeighbor(vert) {
    return this.getNeighbors().includes(vert)
  }

  getKey() {
    return this.UNI_KEY
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

export default GraphVertex
