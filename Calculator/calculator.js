alert("Let's Calculate");

let screen = document.getElementById("screen");

buttons = document.querySelectorAll("button");

let screenValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);

    // clear condition
    if (buttonText === "C") {
      screenValue = "";
      screen.value = screenValue;
    }

    // equal to condition
    else if (buttonText === "=") {
      screen.value = eval(screenValue);
    }
    
    // clear condition
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
