var makeRainbowDancer = function (top, left, timeBetweenSteps) {
    makeDancer.call(this, ...arguments);
    this.setPosition(top, left);
}

makeRainbowDancer.prototype = Object.create(makeDancer.prototype);
makeRainbowDancer.prototype.constructor = makeRainbowDancer;

makeRainbowDancer.prototype.step = function () {
    this.$node.addClass('gingerbread');
}