var makeDancer = function(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps
    makeDancer.prototype.step.call(this);
}

makeDancer.prototype.step = function() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

// Sets random position upon instantiation.
makeDancer.prototype.setPosition = function(top, left) {
    var styleSettings = {
        top: top,
        left: left
    };
    this.$node.css(styleSettings);
}

// Functionality to line all dancers up for a line dance.
makeDancer.prototype.lineup = function(i) {
    var styleSettings = {
        top: 600,
        left: (document.width / window.dancers.length) * i,
    };
    this.$node.css(styleSettings);
}

// Functionality to line Dancers up to the left
makeDancer.prototype.leftLineup = function(i) {
    var styleSettings = {
        left: (window.innerWidth / 2) - 500,
        top: (window.innerHeight / window.dancers.length) * i,

    }
    this.$node.css(styleSettings);
}

// Functionality to line OtherDancers up to the right
makeDancer.prototype.rightLineup = function(i) {
    var styleSettings = {
        left: (window.innerWidth / 2),
        top: (window.innerHeight / window.dancers.length) * i,

    }
    this.$node.css(styleSettings);
}

makeDancer.prototype.hover = function() {
    console.log('fdjhsok');
}

//input oves the this to the object.
makeDancer.prototype.move = function(otherDancer) {
    var left = otherDancer.$node.css('left');
    var top = otherDancer.$node.css('top');
    var styleSettings = {
        top: top,
        left: left,
        // transition-timing - function: 'ease',

        // /* Also the same as */
        // transition-timing - function: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    };
    console.log(this.$node, '!');
    this.$node.css(styleSettings);
}


makeDancer.prototype.keydown = function(evt) {
    var topvalue = dancers[0].$node.css('top');
    var leftvalue = dancers[0].$node.css('left');
    topvalue = Number(topvalue.split('px')[0]);
    topvalue += 75;
    console.log(topvalue);
    dancers[0].setPosition(topvalue, leftvalue);
}

makeDancer.prototype.keyup = function(evt) {
    var topvalue = dancers[0].$node.css('top');
    var leftvalue = dancers[0].$node.css('left');
    topvalue = Number(topvalue.split('px')[0]);
    topvalue -= 75;
    console.log(topvalue);
    dancers[0].setPosition(topvalue);
}

makeDancer.prototype.keyleft = function(evt) {
    var leftValue = dancers[0].$node.css('left');
    var topvalue = dancers[0].$node.css('top');
    leftValue = Number(leftValue.split('px')[0]);
    leftValue -= 75;
    dancers[0].setPosition(topvalue, leftValue);
}

makeDancer.prototype.keyright = function(evt) {
    var leftValue = dancers[0].$node.css('left');
    var topvalue = dancers[0].$node.css('top');
    leftValue = Number(leftValue.split('px')[0]);
    leftValue += 75;
    dancers[0].setPosition(topvalue, leftValue);
}