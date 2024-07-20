// if else

let weather = "normal";

if (weather === "umaambon") {
  console.log("Magdala ka ng Jacket");
} else if (weather === "umuulan") {
  console.log("Magdala ka ng Payong");
} else if (weather === "malakasAngUlan") {
  console.log("Wag ka nang pumasok");
} else {
  console.log("Papasok ka nang normal");
}

// switch

let weather = "normal";

switch (weather) {
  case "umaambon":
    console.log("Magdala ka ng jacket");
    break;

  case "umuulan":
    console.log("Magdala ka ng payong");
    break;

  case "malakasAngUlan":
    console.log("Wag ka na pumasok");
    break;

  default:
    console.log("papasok ka nang normal");
    break;
}
