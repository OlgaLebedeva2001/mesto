import Popup from "./Popup.js";

export default class PopupWithAck extends Popup {
  constructor(selector) {
    super(selector);
    this._button = this._popup.querySelector(".popup__button-submit");
  }
  open(handleSubmit) {
    super.open();
    this._handleSubmit = handleSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }
}
