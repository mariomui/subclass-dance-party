var makeDuckDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, ...arguments);
  // this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
}

makeDuckDancer.prototype = Object.create(makeDancer.prototype);
makeDuckDancer.prototype.constructor = makeDuckDancer;

makeDuckDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();

  this.$node.addClass('image-dancer');
  $('<img src="./assets/giphy.gif">').appendTo(".imager");
  this.$node.css('top', 30);
}