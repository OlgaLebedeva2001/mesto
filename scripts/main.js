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
const cardsContainer = document.querySelector(".elements");

let form2Element = document.querySelector(".popup2__form"); //форма добавления
let titleInput = document.querySelector(".popup2__input_field_title"); //инпут для названия
let linkInput = document.querySelector(".popup2__input_field_link"); //импут для ссылки
const template = document.querySelector("#element-template");

const popupImg = document.querySelector(".popup__open-card");
const buttonCloseImg = popupImg.querySelector(".popup__close-card");

const popupImageOpen = popupImg.querySelector(".popup__img-container");
const popupImageImg = popupImg.querySelector(".popup__img");
const popupImageTitle = popupImg.querySelector(".popup__img-title");

//////////////////////////////////////////////////////////////////

const createCard = ({ name, link }) => {
  const card = template.content
    .querySelector(".elements__element")
    .cloneNode(true);

  card
    .querySelector(".element__description")
    .querySelector(".description__title").textContent = name;

  const image = card.querySelector(".element__image");

  card.querySelector(".element__image").src = link;
  card.querySelector(".element__image").alt = name;

  card.querySelector(".element__del").addEventListener("click", () => {
    card.remove();
  });

  const cardLike = card
    .querySelector(".element__description")
    .querySelector(".description__vector");
  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle("description__vector_active");
  });

  image.addEventListener("click", () => {
    openBigImage({ name, link });
  });

  return card;
};

const renderCard = ({ name, link }) => {
  cardsContainer.prepend(createCard({ name, link }));
};

cardsContainer.append(...initialCards.map(createCard));

const addCard = (event) => {
  event.preventDefault();
  renderCard({ name: titleInput.value, link: linkInput.value });
  titleInput.value = " ";
  linkInput.value = " ";
  closePopup2();
};

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

function openBigImage({ name, link }) {
  popupImageImg.src = link;
  popupImageImg.alt = name;
  popupImageTitle.textContent = name;
  popupOpenImg();
}

//////////////////////////////////////////////////////////////

function popupOpenImg() {
  popupImg.classList.add("popup__open-card_opened");
}
function popupCloseImg() {
  popupImg.classList.remove("popup__open-card_opened");
}

///////////////////////////////////////////////////////////////
// Обработчик «отправки» формы

function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  infoTitle.textContent = nameInput.value;
  infoSubtitle.textContent = jobInput.value;
  closePopup();
}
//////////////////////////////////////////////////////////////////

editPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);

/////////////////////////////////////////////////////////////////

addPopupButton.addEventListener("click", openPopup2);
closePopup2Button.addEventListener("click", closePopup2);
form2Element.addEventListener("submit", addCard);

//////////////////////////////////////////////////////////////////

buttonCloseImg.addEventListener("click", () => {
  popupCloseImg();
});
