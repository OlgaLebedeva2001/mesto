const openPopupButton = document.querySelector(".info__edit-button");
const closePopupButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
let infoTitle = document.querySelector(".info__title");
let infoSubtitle = document.querySelector(".info__subtitle");
// Находим форму в DOM
let formElement = document.querySelector(".popup__form"); //  Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__input_field_name"); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".popup__input_field_job"); // Воспользуйтесь инструментом .querySelector()

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = infoTitle.textContent;
  jobInput.value = infoSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  infoTitle.textContent = nameInput.value;
  infoSubtitle.textContent = jobInput.value;
  closePopup();
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
// Прикрепляем обработчик к форме:он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
