let string = document.querySelector("input").value;
let button = document.querySelectorAll("button");
Array.from(button).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      if(String(string).includes("x")) {
        string = eval(string.replaceAll("x", "*"));
      } else {
        string = eval(string);
      }
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "%") {
      string = string / 100;
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = String(string).slice(0, -1);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
