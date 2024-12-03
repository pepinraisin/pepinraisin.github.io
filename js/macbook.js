function at(progress, trigger) {
    return progress > trigger - epsilon && progress < trigger + epsilon;
}
const macbook = document.querySelector(".macbook");
const contents = Object.values(document.querySelectorAll(".contentInner"));
const clients = document.querySelector("#clients");
const hero = document.querySelector("#hero");
const logos = document.querySelector(".logos");

const epsilon = 0.01;
const duration = 4000;
const fractions = [0.1, 0.4, 0.7];
const offsets = fractions.map((fraction) => duration * fraction);
const durations = [0.3 * duration, 0.3 * duration, 0.3 * duration];
const controller = new ScrollMagic.Controller();

const deviceScenes = [
    {
        fraction: 0.1,
        FORWARD: () => {
            macbook.classList.remove("closed");
        },
        BACKWARD: () => {
            macbook.classList.add("closed");
        },
    },
    {
        fraction: 0.4,
        FORWARD: () => {
            macbook.classList.add("imac");
        },
        BACKWARD: () => {
            macbook.classList.remove("imac");
        },
    },
    {
        fraction: 0.7,
        FORWARD: () => {
            macbook.classList.add("iphone");
        },
        BACKWARD: () => {
            macbook.classList.remove("iphone");
        },
    },
];

//#region device
new ScrollMagic.Scene({ triggerElement: "#protagonist", duration })
    .setPin("#apple-magic")
    .on("progress", function (event) {
        deviceScenes.forEach((scene) => {
            if (event.progress > scene.fraction) {
                scene["FORWARD"]();
            } else {
                scene["BACKWARD"]();
            }
        });
    })
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
//#endregion

//#region screen content
new ScrollMagic.Scene({
    triggerElement: "#protagonist",
    offset: offsets[0],
    duration: durations[0],
})
    .setClassToggle(".content-inner.first", "active")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#protagonist",
    offset: offsets[1],
    duration: durations[0],
})
    .setClassToggle(".content-inner.second", "active")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#protagonist",
    offset: offsets[2],
    duration: 1600,
})
    .setClassToggle(".content-inner.third", "active")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
//#endregion

//#region heading content
new ScrollMagic.Scene({
    triggerElement: "#protagonist",
    offset: offsets[0],
    duration: durations[0],
})
    .setClassToggle(".heading-inner.first", "active")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#protagonist",
    offset: offsets[1],
    duration: durations[0],
})
    .setClassToggle(".heading-inner.second", "active")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#protagonist",
    offset: offsets[2],
    duration: 1600,
})
    .setClassToggle(".heading-inner.third", "active")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
//#endregion

//#region footer content
new ScrollMagic.Scene({
    triggerElement: "#protagonist",
    offset: offsets[0],
    duration: durations[0],
})
    .setClassToggle(".foot-inner.first", "active")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#protagonist",
    offset: offsets[1],
    duration: durations[0],
})
    .setClassToggle("#font-well", "active")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
//#endregion

//#region colors
new ScrollMagic.Scene({
    triggerElement: "#protagonist",
    offset: offsets[1],
    duration: durations[0],
})
    .setClassToggle("#protagonist", "purple-bg")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#protagonist",
    offset: offsets[2],
    duration: durations[0],
})
    .setClassToggle("#protagonist", "green-bg")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#clients",
    triggerHook: 1,
    // offset: -300,
    duration: clients.offsetHeight,
})
    .setClassToggle("#protagonist", "black-bg")
    .on("progress", function (event) {
        logos.style.transform =
            "translateY(" + event.progress * -clients.offsetHeight * 2 + "px)";
    })
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
//#endregion

new ScrollMagic.Scene({
    triggerHook: 0,
    triggerElement: "#hero",
    duration: hero.offsetHeight,
})
    .on("progress", function (event) {
        if (svgPaths.length)
            svgPaths.map((d, i) => {
                const direction = i % 2 === 0 ? 1 : -1;
                const translateY =
                    direction * event.progress * clients.offsetHeight;
                const factor = 10;
                d.style.transform = `translateY(${translateY / factor}px)`;
            });
    })
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
