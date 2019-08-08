function City(name, reward, base = false) {
    this.name = name;
    this.reward = reward;
    this.base = base;
    this.to = [];

    City.prototype.getName = function () {
        return this.name;
    };

    City.prototype.getBase = function () {
        return this.base;
    };

    City.prototype.getReward = function () {
        return this.award;
    };

    City.prototype.getTo = function () {
        return this.to;
    };
}