// hex - #RRGGBB

const generateButton = document.querySelector("[data-js-generate]");
const hexBg = document.querySelectorAll("[data-js-hex-bg]");
const hexText = document.querySelectorAll("[data-js-hex-text]");

const arrayHexBg = [...hexBg];
const arrayHexText = [...hexText];

for (let i = 0; i < arrayHexBg.length; i++) {
  generateButton.addEventListener("click", () => {
    arrayHexBg.forEach((bg) => {
      bg.style.backgroundColor = `#${Math.floor(Math.random() * (1_000_000 - 100_000) + 100_000)}`;
      arrayHexText.forEach(
        (text) =>
          (text.textContent = `#${Math.floor(Math.random() * (1_000_000 - 100_000) + 100_000)}`),
      );
    });
  });
}
