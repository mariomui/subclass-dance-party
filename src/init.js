$(document).ready(function () {
    window.dancers = [];
    window.otherDancers = []; //mario
    $('.addDancerButton').on('click', function (event) {
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

        $('.dancer').on('click', function () {
            $('.dancer').css('transform', 'scale(1.5)');
        })

        $('.lineup').on('click', function () {
            for (var i = 0; i < window.dancers.length; i++) {
                const currentElem = window.dancers[i];
                currentElem.lineup(i);
            }

            for (var i = 0; i < window.otherDancers.length; i++) {
                const currentElem = window.otherDancers[i];
                currentElem.lineup(i);
            }

        });
        $('.horizLineup').on('click', function () {
            for (var i = 0; i < window.dancers.length; i++) {
                const currentElem = window.dancers[i];
                currentElem.leftLineup(i);
            }

            for (var r = 0; r < window.otherDancers.length; r++) {
                const currentElem = window.otherDancers[r];
                currentElem.rightLineup(r);
            }
        })
        console.log(dancers);
        // debugger;
        $(".dancers").append(dancer.$node);
    });
});