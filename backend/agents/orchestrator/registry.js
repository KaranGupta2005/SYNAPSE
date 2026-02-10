// Agent Registry
class AgentRegistry {
  constructor() {
    this.agents = new Map();
  }

  register(name, agent) {
    this.agents.set(name, agent);
  }

  get(name) {
    return this.agents.get(name);
  }

  getAll() {
    return Array.from(this.agents.values());
  }
}

module.exports = AgentRegistry;
