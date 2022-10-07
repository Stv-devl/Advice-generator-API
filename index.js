const body = document.querySelector("body");
const switchAdvice = document.querySelector(".switch-advice");
const adviceId = document.querySelector(".advice-id");
const adviceDisplay = document.querySelector(".advice-display");
const loader = document.querySelector(".loader");

loader.classList.add("active");

//function getAdvice => get api with fetch and display id & advice
function getAdvice() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => {
      const data = res.slip;
      console.log(data);

      adviceId.textContent = data.id;
      adviceDisplay.textContent = '"' + data.advice + '"';
      loader.classList.remove("active");
      switchAdvice.classList.remove("active");
    });
}

getAdvice();

//new advice at click
switchAdvice.addEventListener("click", () => {
  switchAdvice.classList.add("active");
  getAdvice();
});
