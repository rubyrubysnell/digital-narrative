// make a targetList from the elements with the "observable"

const targetList = document.getElementsByClassName("observable");

// do this function whenever the user scrolls

const updateOpacity = () => {

    // iterate through the list of targets (like a for loop)

  for (const target of targetList) {

    // for each target, find the distance between the TOP of the element and the TOP of the viewport

    const top = target.getBoundingClientRect().top

    // for each target, also find the distance between the BOTTOM of the element and the TOP of the viewport

    const bottom = target.getBoundingClientRect().bottom

        // check if the distance between the TOP of the element and the TOP of the viewport is MORE than HALF of the viewport 
        
        // AKA if it's in the bottom half of the viewport

        // IMPORTANT: for web, the height of the viewport is measured from the top of the screen to the bottom

    if(top > window.innerHeight / 2){

        // =============== STEP 1 ================

        // get a value between 0 and 1 by dividing:
        
            // the distance from the top of the element to the top of the viewport

        // from

            // the full viewport height

        // this value is the proportion of of the viewport that the top of the element has passed

            // when the distance = viewport height, the proportion = 1

            // when distance = 0.5 viewport height, the proportion = 0.5

            // when distance = 0 viewport height, the proportion = 0

        // =============== STEP 2 ================

        // why do we do 1 - ?

        // when the top of the image is at the bottom of the screen (full viewport height), we want the opacity to be 0

        // however, as shown in STEP 1, when distance = viewport height, the proportion is 1

        // to make the opacity 0 when the proportion is 1, we need to use 1 - proportion

        // =============== STEP 3 ================

        // if we want the image to have opacity of 1 when it is fully in the viewport - AKA by the time the top of the image reaches half viewport height, we need to multiply the result from STEP 2 by 2

        // because when distance = 0.5 viewport height, the proportion is 0.5, but we need it to be 1

      target.style.opacity = 2 * (1 - top / window.innerHeight);
    }

    // if the distance between the BOTTOM of the element and the TOP of the viewport is LESS than half the viewport 

    // AKA if it's in the top half of the viewport

    // then get the value between 0 and 1 as shown above...

    // ...but do not invert the value, because 

    // 

    else {
      target.style.opacity = 2 * bottom / window.innerHeight;
    }
  }
}

// ensuring that the opacity is already in place when the page loads, so that images partially in view are not opaque until scroll

window.onscroll = () => {
    updateOpacity();
}

window.onload = () => {
    updateOpacity();
}