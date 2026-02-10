// Time Context Utilities
const getTimeContext = () => {
  const now = new Date();
  return {
    timestamp: now.getTime(),
    hour: now.getHours(),
    dayOfWeek: now.getDay(),
    isWeekend: now.getDay() === 0 || now.getDay() === 6
  };
};

const getTimeOfDay = (hour) => {
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
};

module.exports = { getTimeContext, getTimeOfDay };
