// get the image from the html document

const image = document.getElementById("second")

// initially there is no fade because the user hasn't scrolled yet

let fading = false

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



