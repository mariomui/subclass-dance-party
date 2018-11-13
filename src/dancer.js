var makeDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps
  makeDancer.prototype.step.call(this);
}

makeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

// Sets random position upon instantiation.
makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}

// Functionality to line all dancers up for a line dance.
makeDancer.prototype.lineup = function (i) {
  var styleSettings = {
    top: 600,
    left: (document.width / window.dancers.length) * i,
  };
  this.$node.css(styleSettings);
}

// Functionality to line Dancers up to the left
makeDancer.prototype.leftLineup = function (i) {
  var styleSettings = {
    left: (window.innerWidth / 2) - 500,
    top: (window.innerHeight / window.dancers.length) * i,

  }
  this.$node.css(styleSettings);
}

// Functionality to line OtherDancers up to the right
makeDancer.prototype.rightLineup = function (i) {
  var styleSettings = {
    left: (window.innerWidth / 2),
    top: (window.innerHeight / window.dancers.length) * i,

  }
  this.$node.css(styleSettings);
}

makeDancer.prototype.hover = function () {
  console.log('fdjhsok');
}