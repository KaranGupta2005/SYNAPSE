// Context Schema
const contextSchema = {
  type: 'object',
  properties: {
    userId: { type: 'string', required: true },
    sessionId: { type: 'string', required: true },
    location: {
      type: 'object',
      properties: {
        lat: { type: 'number' },
        lng: { type: 'number' }
      }
    },
    time: {
      type: 'object',
      properties: {
        timestamp: { type: 'number' },
        hour: { type: 'number' },
        dayOfWeek: { type: 'number' }
      }
    },
    environment: { type: 'object' }
  }
};

module.exports = contextSchema;
