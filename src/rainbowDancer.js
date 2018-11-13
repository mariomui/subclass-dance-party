var makeRainbowDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, ...arguments);
  // this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
}

makeRainbowDancer.prototype = Object.create(makeDancer.prototype);
makeRainbowDancer.prototype.constructor = makeRainbowDancer;

makeRainbowDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();

  this.$node.addClass('rainbow')
}