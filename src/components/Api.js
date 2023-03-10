class Api {
  constructor() {}
  getCards() {
    const p = fetch("https://mesto.nomoreparties.co/v1/cohort-61/cards", {
      headers: {
        authorization: "3886a799-4854-4a3c-8a86-4cfa412e7d56",
      },
    });
    return p.then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

export default Api;
