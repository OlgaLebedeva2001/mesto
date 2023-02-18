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
    renderer: ({ name, link }) => {
      const card = new Card(
        { name, link },
        "#element-template",
        handleCardClick
      );
      const cardElement = card.getView();

      cardList.addItem(cardElement);
    },
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
  infoTitle.value = name;
  infoSubtitle.value = job;
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

  const newCard = new Card(
    { name, link },
    "#element-template",
    handleCardClick
  );

  cardList.addItem(newCard.getView());

  popupAddForm.close();
}

popupAddButton.addEventListener("click", () => {
  enableValidationAdd.resetValidation();
  popupAddForm.open();
});

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
