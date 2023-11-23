// get the image from the html document

const image = document.getElementById("second")

// initially there is no fade because the user hasn't scrolled yet

let fading = false

// initially there have been no clicks

let clickState = 0

// detect when the user scrolls the mouse wheel

window.addEventListener('wheel', (event) => {

  // if not fading, do this

  if (!fading) {

    // if the wheel scrolls vertically above 0 (the starting position) then the user is scrolling down

    if (event.deltaY > 0) {
      console.log("scrolling down")

      // if scrolling down, add css class to trigger the "down" animation

      image.classList.add("down")
      image.classList.remove("up")

      // if not scrolling down (scrolling up), use css class to trigger the "up" animation

    } else {
      console.log("scrolling up")
      image.classList.add("up")
      image.classList.remove("down")
    }

    // doing the above means that now there is a fade happening:

    fading = true

    // during the fade, prevent the function from triggering for 2 seconds

    setTimeout(() => {
      fading = false
    }, 2000)
  }
}
)

// alternative trigger - clicking

// when the window is clicked...

window.onclick = (event) => {

  console.log("click")

  // if not fading, do this:

  if (!fading) {

    // increase the click state

    clickState++;

    // if the click number is odd, trigger the down animation

    if (clickState % 2 !== 0) {
      console.log("even")
      image.classList.add("down")
      image.classList.remove("up")
    }

    // if the click number is even, trigger the up animation

    else {
      console.log("odd")
      image.classList.add("up")
      image.classList.remove("down")
    }

    // doing the above means that now there is a fade happening:

    fading = true

    // during the fade, prevent the function from triggering for 2 second

    setTimeout(() => {
      fading = false
    }, 2000)
  }
}



