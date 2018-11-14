describe('Add Santa', function () {

    var santa;
    var timeBetweenSteps = 100;
    //Once a santa is added, it should recognize santa as an instance of dancer
    beforeEach(function () {
        santa = new imageDancer(10, 20, timeBetweenSteps);
    });

    it('should recognize a new Santa as an instance of it\'s superclass', function () {
        expect(santa).to.be.an.instanceof(makeDancer);
    });
});


describe('blinkyDancer', function () {

    var blinkyDancer, clock;
    var timeBetweenSteps = 100;

    beforeEach(function () {
        clock = sinon.useFakeTimers();
        blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
    });

    it('should have a jQuery $node object', function () {
        expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
    });

    it('should have a step function that makes its node blink', function () {
        sinon.spy(blinkyDancer.$node, 'toggle');
        blinkyDancer.step();
        expect(blinkyDancer.$node.toggle.called).to.be.true;
    });

    describe('dance', function () {
        it('should call step at least once per second', function () {
            sinon.spy(blinkyDancer, 'step');
            expect(blinkyDancer.step.callCount).to.be.equal(0);
            clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
            clock.tick(timeBetweenSteps);

            expect(blinkyDancer.step.callCount).to.be.equal(1);

            clock.tick(timeBetweenSteps);
            expect(blinkyDancer.step.callCount).to.be.equal(2);
        });
    });
});