var Slider = function (config) {

    this.config = {};
    this.config.activeClass = typeof config.active !== 'undefined' ? config.activeClass : 'active';
    this.config = config;

    this.next = function () {
        var actualSlide = document.getElementsByClassName(this.config.activeClass)[0];
        actualSlide.classList.remove(this.config.activeClass);
        if (actualSlide.nextElementSibling !== null) {
            actualSlide.nextElementSibling.classList.add(this.config.activeClass);
        }
        else {
            actualSlide.parentNode.firstElementChild.classList.add(this.config.activeClass);
        }

    };

    this.previous = function () {
        var actualSlide = document.getElementsByClassName(this.config.activeClass)[0];
        actualSlide.classList.remove(this.config.activeClass);

        if (actualSlide.previousElementSibling !== null) {
            actualSlide.previousElementSibling.classList.add(this.config.activeClass);
        }
        else {
            actualSlide.parentNode.lastElementChild.classList.add(this.config.activeClass);
        }
    };


};

var slider = new Slider(
    {
        auto: false,
        width: 300,
        height: 500,
        activeClass: 'show',

    }
);

console.log(slider);
