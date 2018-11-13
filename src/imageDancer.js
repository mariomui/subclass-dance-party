var imageDancer = function(top, left, timeBetweenSteps) {
    makeDancer.call(this, ...arguments);
    // this.$node = $('<span class="dancer"></span>');
    this.setPosition(top, left);
}

imageDancer.prototype = Object.create(makeDancer.prototype);
imageDancer.prototype.constructor = imageDancer;
// $('.lineup').appendTo('body');
imageDancer.prototype.step = function() {
    // makeDancer.prototype.step.call(this);

    this.$node.addClass('imager')

    // this.$node.addClass('this');
    // makeDancer.prototype.lineup.call(this);
    // $('<img src="./assets/giphy.gif">').appendTo(".imager");
    // this.$node.css('top', 130);
    // this.$.animate({ opacity: .35 }, 110000);
    // var jack = Math.random() * 75;
    // var back = Math.random() * 120;
    // console.log(jack, back);
    // $('.lineup').appendTo('.lineup');

}