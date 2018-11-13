var makeDuckDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, ...arguments);
  // this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
}

makeDuckDancer.prototype = Object.create(makeDancer.prototype);
makeDuckDancer.prototype.constructor = makeDuckDancer;

makeDuckDancer.prototype.step = function () {
  // makeDancer.prototype.step.call(this);
  // this.$node.toggle();

  this.$node.addClass('imager');
  // $('<img src="./assets/giphy.gif">').appendTo(".imager");
  // this.$node.css('top', 130);
  // this.$.animate({ opacity: .35 }, 110000);
  var jack = Math.random() * 75;
  var back = Math.random() * 120;
  console.log(jack, back);
  // this.setPosition(jack, back);

}