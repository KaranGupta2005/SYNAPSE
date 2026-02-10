// Decision Schema
const decisionSchema = {
  type: 'object',
  properties: {
    id: { type: 'string', required: true },
    context: { type: 'object', required: true },
    options: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          action: { type: 'string' },
          score: { type: 'number' },
          confidence: { type: 'number' }
        }
      }
    },
    selected: { type: 'object' },
    reasoning: { type: 'string' },
    timestamp: { type: 'number' }
  }
};

module.exports = decisionSchema;
