var makeDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  makeDancer.prototype.step.call(this);
  this.timeBetweenSteps = timeBetweenSteps
}

makeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}

makeDancer.prototype.lineup = function (i) {
  var styleSettings = {
    top: 50,
    left: (window.screen.width / window.dancers.length) * i,
  };
  this.$node.css(styleSettings);
}