/*
== Задание 1 с сайта ==
Перепишите класс
Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

P.S. Часики тикают в консоли. Откройте её, чтобы посмотреть.
*/

function ClockFn({ template }) {
    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        let output = template
            .replace("h", hours)
            .replace("m", mins)
            .replace("s", secs);

        console.log(output);
    }

    this.stop = function () {
        clearInterval(timer);
    };

    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    };
}

class Clock {
    constructor(template) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        let output = this.template
            .replace("h", hours)
            .replace("m", mins)
            .replace("s", secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer)
    }

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }
}

const clock = new Clock("h:m:s");
clock.start();