// Memory Agent
class MemoryAgent {
  constructor() {
    this.name = 'memory';
    this.shortTerm = [];
    this.longTerm = new Map();
  }

  async store(key, value, type = 'short') {
    if (type === 'short') {
      this.shortTerm.push({ key, value, timestamp: Date.now() });
    } else {
      this.longTerm.set(key, value);
    }
  }

  async retrieve(key, type = 'short') {
    if (type === 'short') {
      return this.shortTerm.find(item => item.key === key);
    }
    return this.longTerm.get(key);
  }

  async search(query) {
    // Search memory for relevant information
    return [];
  }
}

module.exports = MemoryAgent;
