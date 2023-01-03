const cardsContainer = document.querySelector(".elements");
///////////////////////////////////////////////////////////////////

const popupProfile = document.querySelector(".popup_type_edit-profile");
const formEditElement = popupProfile.querySelector("#editForm");
const buttonCloseEditForm = popupProfile.querySelector(".popup__close");
const popupEditButton = document.querySelector(".info__edit-button");

const infoTitle = document.querySelector(".info__title");
const infoSubtitle = document.querySelector(".info__subtitle");

const nameInput = popupProfile.querySelector(".popup__input_type_name");
const jobInput = popupProfile.querySelector(".popup__input_type_job");
///////////////////////////////////////////////////////////////////

const popupCard = document.querySelector(".popup_type_add-card");
const formAddElement = popupCard.querySelector("#addForm");
const buttonCloseAddForm = popupCard.querySelector(".popup__close");
const popupAddButton = document.querySelector(".profile__add-button");

const titleInput = popupCard.querySelector(".popup__input_type_title-img");
const linkInput = popupCard.querySelector(".popup__input_type_link");

const pictureTitle = document.querySelector(".description__title");
const pictureLink = document.querySelector(".element__image");

/////////////////////////////////////////////////////////////////////

const popupImg = document.querySelector(".popup_type_img");
const buttonCloseImg = popupImg.querySelector(".popup__close");
const popupImageOpen = popupImg.querySelector(".popup__img-container");
const popupImageImg = popupImg.querySelector(".popup__img");
const popupImageTitle = popupImg.querySelector(".popup__img-title");

/////////////////////////////////////////////////////////////////////
const template = document
  .querySelector("#element-template")
  .content.querySelector(".elements__element");

///////////////////////////////////////////////////////////////////

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
//////////////////////////////////////////////////////////////////

function openPopupProfile() {
  nameInput.value = infoTitle.textContent;
  jobInput.value = infoSubtitle.textContent;
  openPopup(popupProfile);
}

function handleFormSubmit(evt) {
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

formEditElement.addEventListener("submit", handleFormSubmit);

buttonCloseEditForm.addEventListener("click", () => {
  closePopup(popupProfile);
});

/////////////////////////////////////////////////////////////////

popupAddButton.addEventListener("click", () => {
  openPopup(popupCard);
});

formAddElement.addEventListener("submit", addCard);

buttonCloseAddForm.addEventListener("click", () => {
  closePopup(popupCard);
});

//////////////////////////////////////////////////////////////////

buttonCloseImg.addEventListener("click", () => {
  closePopup(popupImg);
});
