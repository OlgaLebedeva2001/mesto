import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import ConfirmationPopup from "../components/ConfirmationPopup.js";
import "./index.css";
import {
  validationConfig,
  formEditElement,
  cardsContainer,
  popupEditButton,
  formAddElement,
  popupAddButton,
  popupName,
  popupJob,
  buttonEditAvatar,
  formEditAvatar,
} from "../utils/constants.js";

let cardsBasket;

const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-61",
  "3886a799-4854-4a3c-8a86-4cfa412e7d56"
);

export { api };

const formAvatarValidator = new FormValidator(formEditAvatar, validationConfig);
formAvatarValidator.enableValidation();

const formProfileValidator = new FormValidator(
  formEditElement,
  validationConfig
);
formProfileValidator.enableValidation();

const enableValidationAdd = new FormValidator(formAddElement, validationConfig);
enableValidationAdd.enableValidation();

const popupWithImage = new PopupWithImage(".popup_type_img");
popupWithImage.setEventListeners();

const userInfo = new UserInfo({
  name: ".info__title",
  about: ".info__subtitle",
  avatar: ".profile__avatar",
});

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userInfoApi, itemsApi]) => {
    console.log(userInfoApi);
    userInfo.setUserInfo(
      userInfoApi.name,
      userInfoApi.about,
      userInfoApi._id,
      userInfoApi.avatar
    );
    userInfo.setUserAvatar(userInfoApi.avatar);

    console.log(itemsApi);
    cardsBasket = new Section(
      {
        items: itemsApi.reverse(),
        renderer: createCard,
      },
      cardsContainer
    );
    cardsBasket.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

const popupDeleteCard = new ConfirmationPopup(".popup_type_del");
popupDeleteCard.setEventListeners();
export { popupDeleteCard };

const popupEditForm = new PopupWithForm(
  ".popup_type_edit-profile",
  submitProfileForm
);
popupEditForm.setEventListeners();

popupEditButton.addEventListener("click", () => {
  const { user, about } = userInfo.getUserInfo();
  popupName.value = user;
  popupJob.value = about;
  formProfileValidator.resetValidation();
  popupEditForm.open();
});

function submitProfileForm(inputValues) {
  const { _id, avatar } = userInfo.getUserInfo();
  popupEditForm.renameButton();
  api
    .setEditUserInfo(inputValues)
    .then(() => {
      userInfo.setUserInfo(inputValues.name, inputValues.job, _id, avatar);
      popupEditForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditForm.nameButton();
    });
}

const popupEditAvatarForm = new PopupWithForm(
  ".popup_type_edit-avatar",
  submitAvatarForm
);
popupEditAvatarForm.setEventListeners();

buttonEditAvatar.addEventListener("click", () => {
  formAvatarValidator.resetValidation();
  popupEditAvatarForm.open();
});

function submitAvatarForm(inputValues) {
  popupEditAvatarForm.renameButton();
  api
    .setEditAvatar(inputValues)
    .then(() => {
      userInfo.setUserAvatar(inputValues.avatar);
      popupEditAvatarForm.close();
    })
    .catch((err) => {
      console.log(err);
    })

    .finally(() => {
      popupEditAvatarForm.nameButton();
    });
}

const popupAddForm = new PopupWithForm(".popup_type_add-card", submitCardForm);
popupAddForm.setEventListeners();

function submitCardForm(inputValues) {
  const name = inputValues.pictureTitle;
  const link = inputValues.pictureLink;
  popupAddForm.renameButton();

  api
    .createCard({ name, link })
    .then((newItem) => {
      const newCard = createCard(newItem);
      cardsBasket.addItem(newCard);
      popupAddForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddForm.nameButton();
    });
}

popupAddButton.addEventListener("click", () => {
  enableValidationAdd.resetValidation();
  popupAddForm.open();
});

function createCard(item) {
  const card = new Card(
    item,
    userInfo.getUserInfo(),
    "#element-template",
    handleCardClick,
    deleteCard,
    likeCard,
    dislikeCard
  ).getTemplateCard();
  return card;
}

function deleteCard(card, _id) {
  popupDeleteCard.open(() => {
    api
      .deleteCardApi(_id)
      .then(() => {
        card.deleteCardElement();
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function dislikeCard(card, _id) {
  api
    .deleteLike(_id)
    .then((cardData) => {
      card.dislikeElement(cardData);
    })
    .catch((err) => {
      console.log(err);
    });
}

function likeCard(card, _id) {
  api
    .addLike(_id)
    .then((cardData) => {
      card.likeElement(cardData);
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}
