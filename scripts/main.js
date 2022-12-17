const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
//////////////////////////////////////////////////////////////////
const editPopupButton = document.querySelector(".info__edit-button");
const closePopupButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
let infoTitle = document.querySelector(".info__title");
let infoSubtitle = document.querySelector(".info__subtitle");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_field_name");
let jobInput = document.querySelector(".popup__input_field_job");
/////////////////////////////////////////////////////////////
let addPopupButton = document.querySelector(".profile__add-button");
const closePopup2Button = document.querySelector(".popup2__close");
const popup2 = document.querySelector(".popup2");
let titleInput = document.querySelector(".popup2__input_field_title");
let linkInput = document.querySelector(".popup2__input_field_link");
let form2Element = document.querySelector(".popup2__form");
let pictureTitle = document.querySelector(".description__title");
let pictureLink = document.querySelector(".element__image");
//////////////////////////////////////////////////////////////
function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = infoTitle.textContent;
  jobInput.value = infoSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}
/////////////////////////////////////////////////////////////
function openPopup2() {
  popup2.classList.add("popup2_opened");
}

function closePopup2() {
  popup2.classList.remove("popup2_opened");
}
///////////////////////////////////////////////////////////////
// Обработчик «отправки» формы
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  infoTitle.textContent = nameInput.value;
  infoSubtitle.textContent = jobInput.value;
  closePopup();
}
//////////////////////////////////////////////////////////////////
function addFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  pictureTitle.textContent = titleInput.value;
  pictureLink.textContent = linkInput.value;
  closePopup2();
}
//////////////////////////////////////////////////////////////////
editPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);
/////////////////////////////////////////////////////////////////
addPopupButton.addEventListener("click", openPopup2);
closePopup2Button.addEventListener("click", closePopup2);
form2Element.addEventListener("submit", addFormSubmit);
