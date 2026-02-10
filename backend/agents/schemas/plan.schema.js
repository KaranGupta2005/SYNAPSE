// Plan Schema
const planSchema = {
  type: 'object',
  properties: {
    id: { type: 'string', required: true },
    goal: { type: 'string', required: true },
    steps: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          action: { type: 'string' },
          params: { type: 'object' },
          order: { type: 'number' }
        }
      }
    },
    strategy: { type: 'string' },
    estimatedDuration: { type: 'number' },
    constraints: { type: 'array' }
  }
};

module.exports = planSchema;
