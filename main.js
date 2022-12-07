const openPopupButton = document.querySelector(".info__edit-button");
const closePopupButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
function openPopup() {
  popup.classList.add("active");
}
function closePopup() {
  popup.classList.remove("active");
}
openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

// Находим форму в DOM
let formElement = document.querySelector(".popup__form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector(".input__name"); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".input__job"); // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  // Получите значение полей jobInput и nameInput из свойства value
  let nameImputText = nameInput.value;
  let jobInputText = jobInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  let infoTitle = document.querySelector(".info__title");
  let infoSubtitle = document.querySelector(".info__subtitle");
  // Вставьте новые значения с помощью textContent
  infoTitle.textContent = nameImputText;
  infoSubtitle.textContent = jobInputText;
  closePopup();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
