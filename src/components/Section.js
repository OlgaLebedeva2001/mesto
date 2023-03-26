export default class Section {
  constructor({ items, renderer }, selector) {
    this._initialArray = items;
    this._renderer = renderer;

    this._container = document.querySelector(selector);
  }
  renderItems() {
    this._initialArray.forEach((item) => {
      const renderCard = this._renderer(item);
      this.addItem(renderCard);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
