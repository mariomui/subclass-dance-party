var makeDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step = function () {
    setTimeout(this.step, timeBetweenSteps);
  }

  this.setPosition = function (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }

  this.step();
  this.setPosition(top, left);
  // this.setPosition(top, left);
}


// makeDancer.prototype.step = function () {
//   setTimeout(this.step, this.timeBetweenSteps);
// };
// makeDancer.prototype.setPosition = function (top, left) {
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };