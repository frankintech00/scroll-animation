// define the variable boxes
// querySelectorAll selects all .box classes and puts them in a node list

const boxes = document.querySelectorAll(".box");

// the addEventListener will call the function checkBoxes when the content box is scrolled into the window
// note the checkBoxes is to check the position of the boxes and has nothing to do with the check box form elements

window.addEventListener("scroll", checkBoxes);

// the function is called here so any content box already in window will be displayed - if it wasn't then they would appear until you start to scroll
checkBoxes();

function checkBoxes() {
  // triggerBottom defines a point in the window- in this case it is the inner height of the window divided by 5 times 4 - essentially 4/5 of the window height
  const triggerBottom = (window.innerHeight / 5) * 4;

  //   forEach cycles through thr node list
  boxes.forEach((box) => {
    //   boxTop is defined as the top of the content box using the getBoundingClientRect().top
    const boxTop = box.getBoundingClientRect().top;
    // the if else function then check if the top of the content box is abive or below the triggerBottom
    if (boxTop < triggerBottom) {
      // if it's above the triggerBottom then a class of .show is added to the div - boxTop would be less than triggerBottom because it is defined from the top of the window
      box.classList.add("show");
    } else {
      // if it's below then the class of .show is removed from the div
      box.classList.remove("show");
    }
    // The function is called on line 11
  });
}
