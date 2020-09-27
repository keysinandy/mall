class Graph {
  constructor (isDirect) {
    this.vertexes = new Map()
    this.edges = new Map()
    this.isDirect = isDirect
  }

  addVertex(vertex) {
    this.vertexes.set(vertex.UNI_KEY, vertex)
    return this
  }
  hasVertex(vertex) {
    return this.vertexes.has(vertex.UNI_KEY)
  }

  getVertexByKey(key) {
    return this.vertexes.get(key)
  }

  getNeighbors(vertex) {
    return vertex.getNeighbors()
  }

  getAllVertexes() {
    let vertexes = []
    for (const vertex of this.vertexes.values()) {
      vertexes.push(vertex)
    }
    return vertexes
  }

  getAllEdges() {
    let edges = []
    for (const vertex of this.edges.values()) {
      edges.push(vertex)
    }
    return edges
  }

  addEdge(edge) {
    let startVertex = edge.startVertex
    let endVertex = edge.endVertex
    if (!this.hasVertex(startVertex)) {
      this.addVertex(startVertex)
    }
    if (!this.hasVertex(endVertex)) {
      this.addVertex(endVertex)
    }

    if (this.hasEdge(edge)) {
      throw new Error(`edge ${edge} is already in graph`)
    } else {
      this.edges.set(edge.UNI_KEY, edge)
    }

    startVertex.addEdge(edge)
    if (!this.isDirect) {
      endVertex.addEdge(edge)
    }
    return this
  }

  hasEdge(edge) {
    return this.edges.has(edge.UNI_KEY)
  }

  deleteEdge(edge) {
    if (this.hasEdge(edge)) {
      this.edges.delete(edge.UNI_KEY)
    } else {
      throw new Error(`edge ${edge} not in graph`)
    }

    let startVertex = edge.startVertex
    let endVertex = edge.endVertex

    startVertex.deleteEdge(edge)
    endVertex.deleteEdge(edge)
  }

  findEdge(startVertex, endVertex) {
    let vertex = this.vertexes.get(startVertex.UNI_KEY)
    if (!vertex) return null
    return vertex.findEdge(endVertex)
  }

  getWeight() {
    return this.getAllEdges().reduce((weight, edge) => {
      return weight + edge.weight
    }, 0)
  }

  reverse() {
    this.getAllEdges().forEach(edge => {
      this.deleteEdge(edge)
      edge.reverse()
      this.addEdge(edge)
    })
  }

  getVerticesIndices() {
    let verticesIndices = {}
    this.getAllVertexes().forEach((vertex, index) => {
      verticesIndices[vertex.UNI_KEY] = index
    })
    return verticesIndices
  }

  getAdjacencyMatrix() {
    let len = this.getAllVertexes().length
    let vertexMatrix = Array(len).fill(null).map(v => Array(len).fill(Infinity))

    this.getAllVertexes().forEach((vertex, index) => {
      vertex.getNeighbors().forEach(neighbor => {
        let indices = this.getVerticesIndices()[neighbor.UNI_KEY];
        vertex.findEdge(neighbor) && (vertexMatrix[index][indices] = vertex.findEdge(neighbor).weight)
      })
    })
    return vertexMatrix

  }

  toString() {
    return this.getAllVertexes().map(v => v.value).toString()
  }
}

export default Graph
