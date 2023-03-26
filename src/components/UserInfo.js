export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    /*this._name.textContent = name;
    this._about.textContent = about;
    this._avatar.src = avatar;
    /*return {
      this._name.textContent=name,
      this._job.textContent=job,
    };*/

    return {
      user: this._name.textContent, //считывает текстовое содержимое this._name(т.е. элемента селектор которого дан) и записывает его в поле user
      about: this._about.textContent,
      _id: this._id,
      avatar: this._avatar.src,
    };
  }

  setUserInfo(name, about, _id, avatar) {
    this._name.textContent = name;
    this._about.textContent = about;
    this._id = _id;
    this._avatar.src = avatar;
  }

  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }
}
