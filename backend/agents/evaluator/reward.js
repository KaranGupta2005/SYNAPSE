// Reward Calculation
const calculateReward = (outcome, context) => {
  let reward = 0;
  
  // Positive feedback
  if (outcome.success) reward += 1.0;
  if (outcome.userSatisfaction) reward += outcome.userSatisfaction;
  
  // Negative feedback
  if (outcome.error) reward -= 0.5;
  if (outcome.delay > context.threshold) reward -= 0.3;
  
  return Math.max(-1, Math.min(1, reward));
};

const normalizeReward = (reward, min = -1, max = 1) => {
  return (reward - min) / (max - min);
};

module.exports = { calculateReward, normalizeReward };
