export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      user: this._name.textContent,
      about: this._about.textContent,
      _id: this._id,
      avatar: this._avatar.src,
    };
  }

  setUserInfo(name, about, _id) {
    this._name.textContent = name;
    this._about.textContent = about;
    this._id = _id;
  }

  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }
}
