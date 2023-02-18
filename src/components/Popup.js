export default class Popup {
  constructor(popup) {
    this._popup = document.querySelector(popup);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
  }

  _handleEscClose(evt) {
    if (evt.code == "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const buttonClose = this._popup.querySelector(".popup__close");
    buttonClose.addEventListener("click", () => {
      this.close();
    });

    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.currentTarget === evt.target) {
        this.close();
      }
    });
  }
}
