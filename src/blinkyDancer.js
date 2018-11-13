var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, ...arguments);
  // this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
}

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function () {
  // Refer to superclass .step
  // while it's timing out, call toggle

  makeDancer.prototype.step.call(this);
  this.$node.toggle();
  this.$node.addClass('blinky');
}

// makeBlinkyDancer.prototype.step = function () {
//   makeDancer.prototype.step.call(this);
// }