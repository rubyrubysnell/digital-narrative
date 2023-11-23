// get the image from the html document

const image = document.getElementById("second")

// detect when the user scrolls the mouse wheel

window.addEventListener('wheel', function(event) {

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
  }
)
