// Planning Constraints
class PlanningConstraints {
  constructor() {
    this.constraints = [];
  }

  add(constraint) {
    this.constraints.push(constraint);
  }

  validate(plan) {
    return this.constraints.every(c => c.check(plan));
  }

  filter(options) {
    return options.filter(opt => 
      this.constraints.every(c => c.check(opt))
    );
  }
}

module.exports = PlanningConstraints;
