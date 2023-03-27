class Card {
  constructor(
    item,
    user,
    template,
    handleCardClick,
    deleteCard,
    likeCard,
    dislikeCard
  ) {
    this._name = item.name;
    this._link = item.link;
    this._userId = user._id;
    this._ownerId = item.owner._id;
    this._cardId = item._id;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._deleteCard = deleteCard;
    this._likeCard = likeCard;
    this._dislikeCard = dislikeCard;
    this._likeQuantity = item.likes;
  }

  getTemplateCard = () => {
    this._card = document
      .querySelector(this._template)
      .content.querySelector(".elements__element")
      .cloneNode(true);
    this._like = this._card.querySelector(".like__vector");
    this._likeQuantityCard = this._card.querySelector(".like__quantity");
    this._title = this._card.querySelector(".description__title");
    this._image = this._card.querySelector(".element__image");
    this._delete = this._card.querySelector(".element__del");

    this._fillCard();
    this._setEventHandlers();

    return this._card;
  };

  likeElement(cardData) {
    this._likeQuantityCard.textContent = cardData.likes.length;
    this._likeQuantity = cardData.likes;
    this._like.classList.add("like__vector_active");
  }

  dislikeElement(cardData) {
    this._like.classList.remove("like__vector_active");
    this._likeQuantityCard.textContent = cardData.likes.length;
    this._likeQuantity = cardData.likes;
  }

  _isLike = () => {
    return this._likeQuantity.find(
      (elementId) => elementId._id === this._userId
    );
  };

  _isYourCard() {
    if (this._ownerId === this._userId) {
      return true;
    } else {
      return false;
    }
  }

  _likeCardForUser() {
    if (this._isLike()) {
      this._dislikeCard(this, this._cardId);
    } else {
      this._likeCard(this, this._cardId);
    }
  }

  deleteCardElement() {
    this._delete.closest(".element").remove();
  }

  _setEventHandlers = () => {
    this._delete.addEventListener("click", () =>
      this._deleteCard(this, this._cardId)
    );

    this._like.addEventListener("click", () => this._likeCardForUser());

    this._image.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  };

  _fillCard = () => {
    if (this._isLike()) {
      this._like.classList.add("like__vector_active");
    } else {
      this._like.classList.remove("like__vector_active");
    }

    if (this._isYourCard() === false) {
      const deleteElement = this._card.querySelector(".element__del");
      deleteElement.remove();
    }

    this._likeQuantityCard.textContent = this._likeQuantity.length;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;
  };
}

export default Card;
