const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  activeButtonClass: "popup__button-submit_valid",
  inactiveButtonClass: "popup__button-submit_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

const form = document.querySelector(".popup__form");

const nameEditFormInput = document.querySelector("#name");
const jobEditFormInput = document.querySelector("#job");

////////////////////////////////////////////////////////////////

const titleImgAddFormInput = document.querySelector("#title-img");
const linkAddFormInput = document.querySelector("#link");

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
const pictureTitle = document.querySelector(".description__title");
const pictureLink = document.querySelector(".element__image");

/////////////////////////////////////////////////////////////////////

const popupImg = document.querySelector(".popup_type_img");
const popupImageOpen = popupImg.querySelector(".popup__img-container");
const popupImageImg = popupImg.querySelector(".popup__img");
const popupImageTitle = popupImg.querySelector(".popup__img-title");

/////////////////////////////////////////////////////////////////////

const template = document
  .querySelector("#element-template")
  .content.querySelector(".elements__element");

///////////////////////////////////////////////////////////////////

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
  openPopup(popupProfile);
}

function handleEditForm(evt) {
  evt.preventDefault();
  infoTitle.textContent = nameInput.value;
  infoSubtitle.textContent = jobInput.value;
  closePopup(popupProfile);
}

//////////////////////////////////////////////////////////////////

const createCard = ({ name, link }) => {
  const card = template.cloneNode(true);

  card.querySelector(".description__title").textContent = name;

  const image = card.querySelector(".element__image");

  image.src = link;
  image.alt = name;

  card.querySelector(".element__del").addEventListener("click", () => {
    card.remove();
  });

  const cardLike = card.querySelector(".description__vector");
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

//////////////////////////////////////////////////////////////////

const addCard = (event) => {
  event.preventDefault();
  renderCard({ name: titleInput.value, link: linkInput.value });
  closePopup(popupCard);
  formAddElement.reset();
};

//////////////////////////////////////////////////////////////////

function openBigImage({ name, link }) {
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
  openPopup(popupCard);
});

formAddElement.addEventListener("submit", addCard);

//////////////////////////////////////////////////////////////////

buttonCloseList.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popup));
});

enableValidation(validationConfig);
