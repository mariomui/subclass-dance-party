var imageDancer = function (top, left, timeBetweenSteps) {
    makeDancer.call(this, ...arguments);
    this.setPosition(top, left);
}

imageDancer.prototype = Object.create(makeDancer.prototype);
imageDancer.prototype.constructor = imageDancer;

imageDancer.prototype.step = function () {
    this.$node.addClass('santa')
    makeDancer.prototype.step(this);
}