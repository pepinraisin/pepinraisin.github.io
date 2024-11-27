var typed = new Typed("#rotating-head", {
    strings: ["Technology", "Branding", "Marketing"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
});

const logoContainer = document.querySelector(".logos");
const mySvg = document.getElementById("hero-bg-obj");

function svgMagic() {
    Object.values(
        mySvg.contentDocument?.querySelectorAll("#layer1 > g") ?? {}
    ).map((path) => {
        svgPaths.push(path);
    });
}

function mouseMagic(e) {
    const mouseX = e.clientX;
    const midX = window.innerWidth / 2;
    const differential = mouseX - midX;

    if (svgPaths.length)
        svgPaths.map((d, i) => {
            const direction = i % 2 === 0 ? 1 : -1;
            d.style.transform = `translateX(${
                (direction * differential) / 50
            }px)`;
        });
}

function scrollMagic() {
    const coin = Math.round(Math.random());
    const scrollPosition = window.scrollY;
    const mousePosition = window.mouseX;
    const difference = scrollPosition - window.innerHeight * 0.7;
    const difference2 = scrollPosition - window.innerHeight * 1.6;
    const translation = difference2 * 3;

    if (scrollPosition > 0.5 * window.innerHeight)
        Object.values(document.querySelectorAll("#services>div")).map((d) =>
            d.classList.add("pulsar")
        );
    if (difference > 1)
        logoContainer.style.transform = `translateY(-${difference / 2}px)`;
    if (difference2 > 1)
        if (translation < 700)
            document.querySelector(
                ".testim"
            ).style.transform = `translateY(${translation}px)`;
        else
            document.querySelector(
                ".testim"
            ).style.transform = `translateY(700px)`;
    if (svgPaths.length)
        svgPaths.map((d, i) => {
            const direction = i % 2 === 0 ? 1 : -1;
            d.style.transform = `translateY(${
                (direction * scrollPosition) / 20
            }px)`;
        });
}

let svgPaths = [];

mySvg.addEventListener("load", svgMagic);
// window.addEventListener('scroll', scrollMagic);
// document.getElementById("hero").addEventListener('mousemove', mouseMagic);
document.addEventListener("DOMContentLoaded", function (event) {
    svgMagic();
    // scrollMagic();
});
svgMagic();
