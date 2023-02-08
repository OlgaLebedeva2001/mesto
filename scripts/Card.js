class Card {
  constructor({ name, link }, template, clickImage) {
    this._name = name;
    this._link = link;
    this._template = template;
    this._clickImage = clickImage;
  }

  _getTemplateCard() {
    const card = document
      .querySelector(this._template)
      .content.querySelector(".elements__element")
      .cloneNode(true);
    return card;
  }

  _handleDelete() {
    this._newCard.remove();
    this._newCard = null;
  }

  _handleLikeCard() {
    this._likeButton.classList.toggle("description__vector_active");
  }

  _setEventListeners() {
    this._deleteCard = this._newCard.querySelector(".element__del");
    this._deleteCard.addEventListener("click", () => this._handleDelete());

    this._likeButton = this._newCard.querySelector(".description__vector");
    this._likeButton.addEventListener("click", () => this._handleLikeCard());

    this.link.addEventListener("click", () =>
      this._clickImage(this._name, this._link)
    );
  }

  _setData() {
    const name = this._newCard.querySelector(".description__title");
    name.textContent = this._name;
    this.link = this._newCard.querySelector(".element__image");
    this.link.src = this._link;
    this.link.alt = this._name;
  }

  getView() {
    this._newCard = this._getTemplateCard();
    this._setData();
    this._setEventListeners();

    return this._newCard;
  }
}

export default Card;
