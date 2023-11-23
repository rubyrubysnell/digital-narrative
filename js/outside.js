const image = document.getElementById("second")

// DETECTING SCROLL DIRECTION

// find the original scroll position

let previousScrollPosition = 0

const isScrollingDown = () => {

    // by default, we are not scrolling down

    let goingDown = false

    // new scroll position is determined by how many pixels the page is being scrolled along vertically (window.scrollY)

    let scrollPosition = window.scrollY

    // compare whether the new scroll position is more than 0

    if (scrollPosition > previousScrollPosition) {

        // if it is, then we are scrolling down, so change it to "true"

        goingDown = true
    }

    // update the scroll position

    previousScrollPosition = scrollPosition

    return goingDown

}

// TRIGGERING THE ANIMATIONS

// make a function that reacts to the detection of the scroll direction

const handleScroll = () => {

// when scroll down is detected, the image fades into view by adding the "down" class to the image on top (which triggers a css opacity animation) and removing the "up" class

    if (isScrollingDown()) {
        image.parentNode.classList.add("down")
        image.parentNode.classList.remove("up")
    } else {

        // if scroll down is not detected then assume you're scrolling up, and apply the opposite animation

        image.parentNode.classList.add("up")
        image.parentNode.classList.remove("down")
    }

}

