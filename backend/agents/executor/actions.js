// Action Definitions
const actions = {
  notify: async (params) => {
    return { type: 'notify', params, status: 'sent' };
  },

  recommend: async (params) => {
    return { type: 'recommend', params, status: 'generated' };
  },

  update: async (params) => {
    return { type: 'update', params, status: 'updated' };
  }
};

module.exports = actions;
