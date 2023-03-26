import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithAck from "../components/PopupWithAck.js";
import "./index.css";
import {
  validationConfig,
  formEditElement,
  cardsContainer,
  popupEditButton,
  formAddElement,
  popupAddButton,
  infoSubtitle,
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

//////////////////////////////////////////////////////////////////
/*const cardList = new Section(
  {
    //items: initialCards.reverse(),
    renderer: createCard,
  },
  cardsContainer
);*/

//cardList.renderItems();
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
  const { user, about } = userInfo.getUserInfo();
  popupName.value = user;
  popupJob.value = about;
  formProfileValidator.resetValidation();
  popupEditForm.open();
  /*popupEditForm.setInputValues({ name, job });
  enableValidationEdit.resetValidation();
  popupEditForm.open();*/
});

function submitProfileForm(inputValues) {
  const { _id, avatar } = userInfo.getUserInfo();
  /*userInfo.setUserInfo(inputValues.name, inputValues.job);
  popupEditForm.close();*/
  popupEditForm.renameButton();
  api
    .setEditUserInfo(inputValues)
    .then(() => {
      userInfo.setUserInfo(inputValues.name, inputValues.job, _id, avatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditForm.close();
    });
}

////////////////////////////////////////////////////////////////

//Форма Add:
const popupAddForm = new PopupWithForm(".popup_type_add-card", submitCardForm);
popupAddForm.setEventListeners();

function submitCardForm(inputValues) {
  const name = inputValues.pictureTitle;
  const link = inputValues.pictureLink;
  popupAddForm.renameButton();
  //const newCard = createCard({ name, link });

  api
    .createCard({ name, link })
    .then((newItem) => {
      const newCard = createCard(newItem);
      cardsBasket.addItem(newCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddForm.close();
    });
  //cardList.addItem(newCard);
}

popupAddButton.addEventListener("click", () => {
  enableValidationAdd.resetValidation();
  popupAddForm.open();
});

//////////////////////////////////////////////////////////////////

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
  //const cardElement = card.getView();
  //return cardElement;
  return card;
}

//////////////////////////////////////////////////////////////////
const userInfo = new UserInfo({
  name: ".info__title",
  about: ".info__subtitle",
  avatar: ".profile__avatar",
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

const formProfileValidator = new FormValidator(
  formEditElement,
  validationConfig
);
formProfileValidator.enableValidation();

///////////////////////////////////////////////////////////
/*const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-61",
  "3886a799-4854-4a3c-8a86-4cfa412e7d56"
);*/
api
  .getCards()
  .then((itemsApi) => {
    console.log(itemsApi);
    cardsBasket = new Section(
      {
        items: itemsApi.reverse(),
        renderer: createCard,
      },
      cardsContainer
      //".elements"
    );
    cardsBasket.renderItems();
    //cardsContainer.append(cardList.renderItems(items.reverse()));
  })
  .catch((err) => {
    console.log(err);
  });

api
  .getUserInfo()
  .then((userInfoApi) => {
    //userInfo.getUserInfo(name, about, avatar);
    console.log(userInfoApi);
    userInfo.setUserInfo(
      userInfoApi.name,
      userInfoApi.about,
      userInfoApi._id,
      userInfoApi.avatar
    );
    userInfo.setUserAvatar(userInfoApi.avatar);
  })
  .catch((err) => {
    console.log(err);
  });

/*api.createCard(item)
.then((newItem)=>{
  cardList.addItem(newItem);
})*/

//форма удаления карточки
const popupDeleteCard = new PopupWithAck(".popup_type_del");
popupDeleteCard.setEventListeners();

//удаление карточки
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

const formAvatarValidator = new FormValidator(formEditAvatar, validationConfig);
formAvatarValidator.enableValidation();

//форма для аватара
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
    })
    .catch((err) => {
      console.log(err);
    })

    .finally(() => {
      popupEditAvatarForm.close();
    });
}

//Лайк карточки:

function likeCard(card, _id) {
  api
    .addLike(_id)
    .then((cardData) => {
      //console.log(cardData)
      card.likeElement(cardData);
    })
    .catch((err) => {
      console.log(err);
    });
}

//Дизлайк карточки:
function dislikeCard(card, _id) {
  api
    .deleteLike(_id)
    .then((cardData) => {
      //console.log(cardData)
      card.dislikeElement(cardData);
    })
    .catch((err) => {
      console.log(err);
    });
}
