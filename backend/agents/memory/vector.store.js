// Vector Store for Embeddings
class VectorStore {
  constructor() {
    this.vectors = [];
  }

  async add(id, vector, metadata) {
    this.vectors.push({ id, vector, metadata });
  }

  async search(queryVector, k = 5) {
    // Find k nearest neighbors
    const distances = this.vectors.map(item => ({
      ...item,
      distance: this.cosineSimilarity(queryVector, item.vector)
    }));
    
    return distances
      .sort((a, b) => b.distance - a.distance)
      .slice(0, k);
  }

  cosineSimilarity(a, b) {
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magA * magB);
  }
}

module.exports = VectorStore;
