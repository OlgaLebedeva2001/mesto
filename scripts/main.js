import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

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

///////////////////////////////////////////////////////
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  activeButtonClass: "popup__button-submit_valid",
  inactiveButtonClass: "popup__button-submit_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

///////////////////////////////////////////////////////////////////
const cardsContainer = document.querySelector(".elements");
///////////////////////////////////////////////////////////////////

const popupProfile = document.querySelector(".popup_type_edit-profile");
const formEditElement = popupProfile.querySelector("#editForm");
const popupEditButton = document.querySelector(".info__edit-button");
const infoTitle = document.querySelector(".info__title");
const infoSubtitle = document.querySelector(".info__subtitle");
const nameInput = popupProfile.querySelector(".popup__input_type_name");
const jobInput = popupProfile.querySelector(".popup__input_type_job");

///////////////////////////////////////////////////////////////////
const buttonCloseList = document.querySelectorAll(".popup__close");
///////////////////////////////////////////////////////////////////

const popupCard = document.querySelector(".popup_type_add-card");
const formAddElement = popupCard.querySelector("#addForm");
const popupAddButton = document.querySelector(".profile__add-button");
const titleInput = popupCard.querySelector(".popup__input_type_title-img");
const linkInput = popupCard.querySelector(".popup__input_type_link");

/////////////////////////////////////////////////////////////////////

const popupImg = document.querySelector(".popup_type_img");
const popupImageImg = popupImg.querySelector(".popup__img");
const popupImageTitle = popupImg.querySelector(".popup__img-title");

/////////////////////////////////////////////////////////////////////

function openPopup(popup) {
  popup.addEventListener("click", closePopupOnOverlay);
  document.addEventListener("keydown", closePopupOnEscape);
  popup.classList.add("popup_opened");
}

function closePopupOnEscape(evt) {
  if (evt.code == "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

function closePopupOnOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.target);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupOnEscape);
  popup.removeEventListener("click", closePopupOnOverlay);
}
//////////////////////////////////////////////////////////////////

function openPopupProfile() {
  nameInput.value = infoTitle.textContent;
  jobInput.value = infoSubtitle.textContent;
  enableValidationEdit.resetValidation();
  openPopup(popupProfile);
}

function handleEditForm(evt) {
  evt.preventDefault();
  infoTitle.textContent = nameInput.value;
  infoSubtitle.textContent = jobInput.value;
  closePopup(popupProfile);
}

//////////////////////////////////////////////////////////////////

const renderCard = ({ name, link }) => {
  const card = new Card({ name, link }, "#element-template", openBigImage);
  return card.getView();
};

//////////////////////////////////////////////////////
initialCards.forEach(({ name, link }) => {
  cardsContainer.append(renderCard({ name, link }));
});

//////////////////////////////////////////////////////////////////
const enableValidationEdit = new FormValidator(
  formEditElement,
  validationConfig
);
enableValidationEdit.enableValidation(formEditElement);

const enableValidationAdd = new FormValidator(formAddElement, validationConfig);
enableValidationAdd.enableValidation(formAddElement);

//////////////////////////////////////////////////////////////////

const addCard = (event) => {
  event.preventDefault();
  cardsContainer.prepend(
    renderCard({ name: titleInput.value, link: linkInput.value })
  );
  closePopup(popupCard);
  formAddElement.reset();
};

//////////////////////////////////////////////////////////////////

function openBigImage(name, link) {
  popupImageImg.src = link;
  popupImageImg.alt = name;
  popupImageTitle.textContent = name;
  openPopup(popupImg);
}

//////////////////////////////////////////////////////////////////

popupEditButton.addEventListener("click", openPopupProfile);

formEditElement.addEventListener("submit", handleEditForm);

/////////////////////////////////////////////////////////////////

popupAddButton.addEventListener("click", () => {
  enableValidationAdd.resetValidation();
  openPopup(popupCard);
});

formAddElement.addEventListener("submit", addCard);

//////////////////////////////////////////////////////////////////

buttonCloseList.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popup));
});
