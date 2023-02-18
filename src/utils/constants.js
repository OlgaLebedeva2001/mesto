const initialCards = [
  {
    name: "Япония",
    link: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Австралия",
    link: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Россия",
    link: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Венеция",
    link: "https://images.unsplash.com/photo-1638707743318-6e9509cd3acc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    name: "Франция",
    link: "https://images.unsplash.com/photo-1670945797773-616bb3a63359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    name: "Грузия",
    link: "https://images.unsplash.com/photo-1626096762791-5cdb64c4363d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
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
const cardsContainer = ".elements";
///////////////////////////////////////////////////////////////////

const popupProfile = document.querySelector(".popup_type_edit-profile");
const formEditElement = popupProfile.querySelector("#editForm");
const popupEditButton = document.querySelector(".info__edit-button");
const infoTitle = document.querySelector(".info__title");
const infoSubtitle = document.querySelector(".info__subtitle");

///////////////////////////////////////////////////////////////////

const popupCard = document.querySelector(".popup_type_add-card");
const formAddElement = popupCard.querySelector("#addForm");
const popupAddButton = document.querySelector(".profile__add-button");

export {
  initialCards,
  validationConfig,
  cardsContainer,
  formEditElement,
  popupEditButton,
  infoTitle,
  infoSubtitle,
  formAddElement,
  popupAddButton,
};
