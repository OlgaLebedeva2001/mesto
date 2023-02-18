import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImageImg = this._popup.querySelector(".popup__img");
    this._popupImageTitle = this._popup.querySelector(".popup__img-title");
  }

  open(name, link) {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._popupImageImg.src = link;
    this._popupImageImg.alt = name;
    this._popupImageTitle.textContent = name;
  }

  close() {
    this._popup.classList.remove("popup_opened");
    this._popupImageImg.src = "";
    this._popupImageImg.alt = "";
    this._popupImageTitle.textContent = "";
  }
}
