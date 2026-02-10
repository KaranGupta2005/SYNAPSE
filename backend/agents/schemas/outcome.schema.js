// Outcome Schema
const outcomeSchema = {
  type: 'object',
  properties: {
    id: { type: 'string', required: true },
    planId: { type: 'string', required: true },
    success: { type: 'boolean', required: true },
    results: { type: 'array' },
    metrics: {
      type: 'object',
      properties: {
        duration: { type: 'number' },
        accuracy: { type: 'number' },
        userSatisfaction: { type: 'number' }
      }
    },
    reward: { type: 'number' },
    feedback: { type: 'string' },
    timestamp: { type: 'number' }
  }
};

module.exports = outcomeSchema;
