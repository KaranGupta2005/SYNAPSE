// Planning Strategies
const strategies = {
  greedy: (options) => {
    // Select best immediate option
    return options[0];
  },

  balanced: (options) => {
    // Balance short-term and long-term goals
    return options[Math.floor(options.length / 2)];
  },

  exploratory: (options) => {
    // Encourage exploration
    return options[Math.floor(Math.random() * options.length)];
  }
};

module.exports = strategies;
