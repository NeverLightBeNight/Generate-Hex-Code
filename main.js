class GenerateHex {
  #selectors = {
    generateButton: document.querySelector("[data-js-generate]"),
    hexBg: document.querySelectorAll("[data-js-hex-bg]"),
    hexText: document.querySelectorAll("[data-js-hex-text]"),
  };

  #maxHex = 0xffffff;

  #createRandomHex() {
    const randomColor = Math.floor(Math.random() * (this.#maxHex + 1));

    return `#${randomColor.toString(16).padStart("6", "0")}`;
  }

  generateHex() {
    if (!this.#selectors.generateButton) return;

    this.#selectors.generateButton.addEventListener("click", () => {
      this.#selectors.hexBg.forEach((element) => {
        element.style.backgroundColor = this.#createRandomHex();
      });
      this.#selectors.hexText.forEach((element) => {
        element.textContent = this.#createRandomHex();
      });
    });
  }
}

let result = new GenerateHex()
result.generateHex()