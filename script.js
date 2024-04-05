const SimpleButton = document.getElementById("simple");
let flag1 = false;
SimpleButton.addEventListener("click", function () {
  flag1 = true;
});

const hexButton = document.getElementById("hex");
let flag2 = false;
hexButton.addEventListener("click", function () {
  flag1=false;
  flag2 = true;
});

const clickMe = document.getElementById("click");

let simpleArr = ["green", "red", "rgb(245,246,47)", "#B2DF8A"];

function randomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}
let colorText = document.getElementById("colorCode");

clickMe.addEventListener("click", function () {
  if (flag1 == true) {

    const randInd = Math.floor(Math.random() * simpleArr.length);
    document.body.style.backgroundColor = simpleArr[randInd];
    colorText.innerText=`${simpleArr[randInd]}`;

  } else if (flag2 == true) {
    let randomColor = randomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorText.innerText=`${randomColor}`;
  }
});
