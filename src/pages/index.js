import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";
import {
  initialCards,
  validationConfig,
  cardsContainer,
  formEditElement,
  popupEditButton,
  infoTitle,
  infoSubtitle,
  formAddElement,
  popupAddButton,
} from "../utils/constants.js";

//////////////////////////////////////////////////////////////////
const cardList = new Section(
  {
    items: initialCards.reverse(),
    renderer: createCard,
  },
  cardsContainer
);

cardList.renderItems();
//////////////////////////////////////////////////////////////////

//Открытие большой картинки:
const popupWithImage = new PopupWithImage(".popup_type_img");
popupWithImage.setEventListeners();

/////////////////////////////////////////////////////////////////
//Форма Edit:
const popupEditForm = new PopupWithForm(
  ".popup_type_edit-profile",
  submitProfileForm
);
popupEditForm.setEventListeners();

popupEditButton.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  popupEditForm.setInputValues({ name, job });
  enableValidationEdit.resetValidation();
  popupEditForm.open();
});

function submitProfileForm(inputValues) {
  userInfo.setUserInfo(inputValues.name, inputValues.job);
  popupEditForm.close();
}

////////////////////////////////////////////////////////////////

//Форма Add:
const popupAddForm = new PopupWithForm(".popup_type_add-card", submitCardForm);
popupAddForm.setEventListeners();

function submitCardForm(inputValues) {
  const name = inputValues.pictureTitle;
  const link = inputValues.pictureLink;

  const newCard = createCard({ name, link });

  cardList.addItem(newCard);

  popupAddForm.close();
}

popupAddButton.addEventListener("click", () => {
  enableValidationAdd.resetValidation();
  popupAddForm.open();
});

//////////////////////////////////////////////////////////////////

function createCard(item) {
  const card = new Card(item, "#element-template", handleCardClick);
  const cardElement = card.getView();
  return cardElement;
}

//////////////////////////////////////////////////////////////////
const userInfo = new UserInfo({
  name: ".info__title",
  job: ".info__subtitle",
});
//////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}
//////////////////////////////////////////////////////////////////

const enableValidationEdit = new FormValidator(
  formEditElement,
  validationConfig
);
enableValidationEdit.enableValidation(formEditElement);

const enableValidationAdd = new FormValidator(formAddElement, validationConfig);
enableValidationAdd.enableValidation(formAddElement);
