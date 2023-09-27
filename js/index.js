const gridItems = document.querySelectorAll(".grid-item")
const images = [...document.querySelectorAll(".grid-item__img")]

function main() {
    gsap.registerPlugin(ScrollTrigger)

    gridItems.forEach(function (item) {
        const imageWrapper = item.querySelector(".grid-item__img-wrap")
        const image = item.querySelector(".grid-item__img")

        //previous grid item
        const ps = item.previousElementSibling

        //check if current grid item is on the left relative to the previous grid item
        const onLeft = ps && item.offsetLeft < ps.offsetLeft + ps.offsetWidth

        const tl = gsap.timeline({
            defaults: {},
            scrollTrigger: {
                trigger: item,
                start: "top bottom-=80",
                end: "100% bottom",
                scrub: 1,
            },
        })

        tl.fromTo(
            imageWrapper,
            {
                scale: 0,
                transformOrigin: onLeft ? "100% 0%" : "0% 0%",
            },
            {
                scale: 1,
            }
        ).fromTo(
            image,
            {
                scale: 5,
                transformOrigin: onLeft ? "100% 0%" : "0% 0%",
            },
            {
                scale: 1,
            },
            "<"
        )
    })
}

main()
