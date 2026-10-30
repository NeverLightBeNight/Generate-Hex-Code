class GenerateHex {
  // Задаем объект с селекторами с которыми мы будем работать
  // Инкапсулируем - чтобы нельзя было обращаться через объект класса , это делается с теми вещами с которыми будем работать только в классе 
  #selectors = {
    generateButton: document.querySelector("[data-js-generate]"),
    hexBg: document.querySelectorAll("[data-js-hex-bg]"),
    hexText: document.querySelectorAll("[data-js-hex-text]"),
  };

  // Создает шаблон hex формулы для того чтобы по ниму работать
  #maxHex = 0xffffff;

  // Создаем метод creeateRandomHex и туда выносим логику создания hex
  #createRandomHex() {
    // Создаем рандомайзер ( + 1 нужен для того чтобы перевести программный формат на наш обычный то есть не с нуля а с 1)
    const randomColor = Math.floor(Math.random() * (this.#maxHex + 1));
    
    // Возвращаем уже отформатированый HEX , преводим в шеснацеричную
    // PadStart нужен для того чтобы мы дополнили строку пока длинна не станет 6 - дополняет нулями 
    return `#${randomColor.toString(16).padStart("6", "0")}`;
  }

  generateHex() {
    // Проверяем добавилась ли у нас кнопка если нет то выходим 
    if (!this.#selectors.generateButton) return;

    // Создаем событие клика на кнопку генерации hex
    this.#selectors.generateButton.addEventListener("click", () => {
      // Теперь проходимся по всем квадратам куда будем устанавливать цвет 
      // Достали каждый квадрат и именуем <<element>>
      this.#selectors.hexBg.forEach((element) => {
        // Каждому квадрату задаем стиль цвета backgroundColor = берем и запускаем метод создания hex тем самым в backgroundColor будет попадать уже сделанный hex
        element.style.backgroundColor = this.#createRandomHex();
        element.textContent = this.#createRandomHex();
      });
      // проходимся по всем элементам текста под квадратом и забираем их именуя <<element>>
      this.#selectors.hexText.forEach((element) => {
        // каждому элементу задаем текст - самого hex генератора
        element.textContent = this.#createRandomHex();
      });
    });
  }
}

// Создаем ответ
let result = new GenerateHex()
// Из него выводим метод генерации hex 
result.generateHex()