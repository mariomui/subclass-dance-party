$(document).ready(function() {
    window.dancers = [];
    window.otherDancers = []; //mario

    $('.addDancerButton').on('click', function(event) {
        /* This function sets up the click handlers for the create-dancer
         * buttons on dancefloor.html. You should only need to make one small change to it.
         * As long as the "data-dancer-maker-function-name" attribute of a
         * class="addDancerButton" DOM node matches one of the names of the
         * maker functions available in the global scope, clicking that node
         * will call the function to make the dancer.
         */

        /* dancerMakerFunctionName is a string which must match
         * one of the dancer maker functions available in global scope.
         * A new object of the given type will be created and added
         * to the stage.
         */
        var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
        //mario: .data-> Store arbitrary data associated with the specified element and/or return the value that was set.



        // get the maker function for the kind of dancer we're supposed to make
        var dancerMakerFunction = window[dancerMakerFunctionName];

        // make a dancer with a random position

        var dancer = new dancerMakerFunction(
            ($(".dancers").height() * Math.random()),
            ($(".dancers").width() * Math.random()),
            Math.random() * 1000
        );

        if (dancer instanceof imageDancer) {

            window.dancers.push(dancer);
        } else if (dancer instanceof makeRainbowDancer) {
            window.otherDancers.push(dancer);
        }
        //to grow it.
        var flag = true;
        $('.dancer').on('click', function() {
            if (flag) {

                $('.dancer').css('transform', 'scale(1.5)');
                flag = false;
            } else {
                $('.dancer').css('transform', 'scale(.4)')
                flag = true;
            }

        })

        $('.lineup').on('click', function() {
            for (var i = 0; i < window.dancers.length; i++) {
                const currentElem = window.dancers[i];
                currentElem.lineup(i);
            }

            for (var i = 0; i < window.otherDancers.length; i++) {
                const currentElem = window.otherDancers[i];
                currentElem.lineup(i);
            }

        });
        $('.horizLineup').on('click', function() {
                for (var i = 0; i < window.dancers.length; i++) {
                    const currentElem = window.dancers[i];
                    currentElem.leftLineup(i);
                }

                for (var r = 0; r < window.otherDancers.length; r++) {
                    const currentElem = window.otherDancers[r];
                    currentElem.rightLineup(r);
                }
            })
            //on a click this should move one dancer to another.
        $('.mover').on('click', function() {
            for (var i = 0; i < window.dancers.length; i++) {
                const currentElem = window.dancers[i];
                const nextElem = window.otherDancers[i];
                currentElem.move(nextElem);
            }
            //dancers[i]$.node.css('left') gets you the left property.
        })

        document.addEventListener('keydown', function(event) {
            if (event.code == 'ArrowDown') {
                makeDancer.prototype.keydown(event);
            } else if (event.code === 'ArrowUp') {
                makeDancer.prototype.keyup(event);
            } else if (event.code === 'ArrowLeft') {
                makeDancer.prototype.keyleft(event);
            } else if (event.code === 'ArrowRight') {
                makeDancer.prototype.keyright(event);
            }
        });

        // console.log(dancers);
        // debugger;
        $(".dancers").append(dancer.$node);
        //appends all the dancer classes to dancer.nodes in the jquery dom.
    });
});