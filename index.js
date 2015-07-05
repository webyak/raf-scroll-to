var raf = require('raf');

Math.easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

/**
* Scroll to a DOM element
*
* @param {Element} element  - The element to scroll to.
* @param {number}  to       - The position to scroll to, relative to the top
*                           	of the element.
* @param {number}  duration - How long the scrolling should take.
*/
function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 10;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            raf(animateScroll);
        }
    };
    animateScroll();
}

module.exports = scrollTo;
