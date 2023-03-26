const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  activeButtonClass: "popup__button-submit_valid",
  inactiveButtonClass: "popup__button-submit_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

const cardsContainer = ".elements";

const popupProfile = document.querySelector(".popup_type_edit-profile");
const formEditElement = popupProfile.querySelector("#editForm");
const popupEditButton = document.querySelector(".info__edit-button");
const infoTitle = document.querySelector(".info__title");
const infoSubtitle = document.querySelector(".info__subtitle");

const popupName = popupProfile.querySelector(".popup__input_type_name");
const popupJob = popupProfile.querySelector(".popup__input_type_job");

const popupEditAvatar = document.querySelector(".popup_type_edit-avatar");
const formEditAvatar = popupEditAvatar.querySelector("#editAvatar");

const popupCard = document.querySelector(".popup_type_add-card");
const formAddElement = popupCard.querySelector("#addForm");
const popupAddButton = document.querySelector(".profile__add-button");

const buttonEditAvatar = document.querySelector(".profile__avatar-edit");

export {
  validationConfig,
  cardsContainer,
  formEditElement,
  popupEditButton,
  infoTitle,
  infoSubtitle,
  formAddElement,
  popupAddButton,
  popupName,
  popupJob,
  buttonEditAvatar,
  formEditAvatar,
};
