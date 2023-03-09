(()=>{"use strict";const t=class{constructor({name:t,link:e},s,i){this._name=t,this._link=e,this._template=s,this._handleCardClick=i}_getTemplateCard(){return document.querySelector(this._template).content.querySelector(".elements__element").cloneNode(!0)}_handleDelete(){this._newCard.remove(),this._newCard=null}_handleLikeCard(){this._likeButton.classList.toggle("description__vector_active")}_setEventListeners(){this._deleteCard=this._newCard.querySelector(".element__del"),this._deleteCard.addEventListener("click",(()=>this._handleDelete())),this._likeButton=this._newCard.querySelector(".description__vector"),this._likeButton.addEventListener("click",(()=>this._handleLikeCard())),this.link.addEventListener("click",(()=>this._handleCardClick(this._name,this._link)))}_setData(){this._newCard.querySelector(".description__title").textContent=this._name,this.link=this._newCard.querySelector(".element__image"),this.link.src=this._link,this.link.alt=this._name}getView(){return this._newCard=this._getTemplateCard(),this._setData(),this._setEventListeners(),this._newCard}},e=class{constructor(t,e){this._formElement=t,this._config=e}resetValidation(){this._toggleButtonState(),this._inputList.forEach((t=>{this._hideInputError(t)}))}_showInputError=t=>{const e=this._formElement.querySelector(`.${t.id}-error`);e.classList.add(this._config.errorClass),e.textContent=t.validationMessage,t.classList.add(this._config.inputErrorClass)};_hideInputError=t=>{const e=this._formElement.querySelector(`.${t.id}-error`);e.classList.remove(this._config.errorClass),e.textContent="",t.classList.remove(this._config.inputErrorClass)};_checkInputValidity(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}_hasInvalidInput(){return this._inputList.some((t=>!t.validity.valid))}_toggleButtonState(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.remove(this._config.activeButtonClass),this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.add(this._config.activeButtonClass),this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1)}_setEventListeners(){this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((t=>{t.addEventListener("input",(()=>{this._checkInputValidity(t),this._toggleButtonState()}))}))}enableValidation(){this._setEventListeners()}};class s{constructor(t){this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}open(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose(t){"Escape"==t.code&&this.close()}setEventListeners(){this._popup.querySelector(".popup__close").addEventListener("click",(()=>{this.close()})),this._popup.addEventListener("mousedown",(t=>{t.currentTarget===t.target&&this.close()}))}}class i extends s{constructor(t,e){super(t),this._handleFormSubmit=e,this._form=this._popup.querySelector(".popup__form"),this._inputList=Array.from(this._form.querySelectorAll(".popup__input"))}_getInputValues(){return this._formValues={},this._inputList.forEach((t=>{this._formValues[t.name]=t.value})),this._formValues}close(){super.close(),this._form.reset()}setInputValues(t){this._inputList.forEach((e=>{e.value=t[e.name]}))}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(t=>{t.preventDefault(),this._handleFormSubmit(this._getInputValues())}))}}const n={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-submit",activeButtonClass:"popup__button-submit_valid",inactiveButtonClass:"popup__button-submit_invalid",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},o=document.querySelector(".popup_type_edit-profile").querySelector("#editForm"),r=document.querySelector(".info__edit-button"),a=(document.querySelector(".info__title"),document.querySelector(".info__subtitle"),document.querySelector(".popup_type_add-card").querySelector("#addForm")),l=document.querySelector(".profile__add-button"),u=new class{constructor({items:t,renderer:e},s){this._initialArray=t,this._renderer=e,this._container=document.querySelector(s)}renderItems(){this._initialArray.forEach((t=>{const e=this._renderer(t);this.addItem(e)}))}addItem(t){this._container.prepend(t)}}({items:[{name:"Япония",link:"https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{name:"Австралия",link:"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{name:"Россия",link:"https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{name:"Венеция",link:"https://images.unsplash.com/photo-1638707743318-6e9509cd3acc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"},{name:"Франция",link:"https://images.unsplash.com/photo-1670945797773-616bb3a63359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"},{name:"Грузия",link:"https://images.unsplash.com/photo-1626096762791-5cdb64c4363d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"}].reverse(),renderer:h},".elements");u.renderItems();const p=new class extends s{constructor(t){super(t),this._popupImageImg=this._popup.querySelector(".popup__img"),this._popupImageTitle=this._popup.querySelector(".popup__img-title")}open(t,e){super.open(),this._popupImageImg.src=e,this._popupImageImg.alt=t,this._popupImageTitle.textContent=t}close(){super.close(),this._popupImageImg.src="",this._popupImageImg.alt="",this._popupImageTitle.textContent=""}}(".popup_type_img");p.setEventListeners();const c=new i(".popup_type_edit-profile",(function(t){d.setUserInfo(t.name,t.job),c.close()}));c.setEventListeners(),r.addEventListener("click",(()=>{const{name:t,job:e}=d.getUserInfo();c.setInputValues({name:t,job:e}),f.resetValidation(),c.open()}));const _=new i(".popup_type_add-card",(function(t){const e=h({name:t.pictureTitle,link:t.pictureLink});u.addItem(e),_.close()}));function h(e){return new t(e,"#element-template",m).getView()}_.setEventListeners(),l.addEventListener("click",(()=>{b.resetValidation(),_.open()}));const d=new class{constructor({name:t,job:e}){this._name=document.querySelector(t),this._job=document.querySelector(e)}getUserInfo(){return{name:this._name.textContent,job:this._job.textContent}}setUserInfo(t,e){this._name.textContent=t,this._job.textContent=e}}({name:".info__title",job:".info__subtitle"});function m(t,e){p.open(t,e)}const f=new e(o,n);f.enableValidation(o);const b=new e(a,n);b.enableValidation(a)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJha3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFrdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWt0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3ByYWt0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJha3RpY3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wcmFrdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJha3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9wcmFrdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9wcmFrdGljdW0vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYXJkIHtcclxuICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGxpbmsgfSwgdGVtcGxhdGUsIGhhbmRsZUNhcmRDbGljaykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9saW5rID0gbGluaztcclxuICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XHJcbiAgfVxyXG5cclxuICBfZ2V0VGVtcGxhdGVDYXJkKCkge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3RlbXBsYXRlKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19lbGVtZW50XCIpXHJcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICByZXR1cm4gY2FyZDtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVEZWxldGUoKSB7XHJcbiAgICB0aGlzLl9uZXdDYXJkLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5fbmV3Q2FyZCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlTGlrZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJkZXNjcmlwdGlvbl9fdmVjdG9yX2FjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2RlbGV0ZUNhcmQgPSB0aGlzLl9uZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9fZGVsXCIpO1xyXG4gICAgdGhpcy5fZGVsZXRlQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5faGFuZGxlRGVsZXRlKCkpO1xyXG5cclxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9uZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25fX3ZlY3RvclwiKTtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2hhbmRsZUxpa2VDYXJkKCkpO1xyXG5cclxuICAgIHRoaXMubGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHRoaXMuX25hbWUsIHRoaXMuX2xpbmspXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX3NldERhdGEoKSB7XHJcbiAgICBjb25zdCBuYW1lID0gdGhpcy5fbmV3Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uX190aXRsZVwiKTtcclxuICAgIG5hbWUudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xyXG4gICAgdGhpcy5saW5rID0gdGhpcy5fbmV3Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX2ltYWdlXCIpO1xyXG4gICAgdGhpcy5saW5rLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICB0aGlzLmxpbmsuYWx0ID0gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIGdldFZpZXcoKSB7XHJcbiAgICB0aGlzLl9uZXdDYXJkID0gdGhpcy5fZ2V0VGVtcGxhdGVDYXJkKCk7XHJcbiAgICB0aGlzLl9zZXREYXRhKCk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9uZXdDYXJkO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3IoZm9ybUVsZW1lbnQsIGNvbmZpZykge1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcclxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuICB9XHJcbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICApO1xyXG5cclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5lcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gIH07XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvciA9IChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxyXG4gICAgKTtcclxuXHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcuZXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgfTtcclxuXHJcbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmIChpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaGFzSW52YWxpZElucHV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+ICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCh0aGlzLl9pbnB1dExpc3QpKSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcuYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcuYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2NvbmZpZy5pbnB1dFNlbGVjdG9yKVxyXG4gICAgKTtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICB0aGlzLl9jb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3JcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuXHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cCkge1xyXG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwKTtcclxuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfb3BlbmVkXCIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlbmVkXCIpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUVzY0Nsb3NlKGV2dCkge1xyXG4gICAgaWYgKGV2dC5jb2RlID09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBidXR0b25DbG9zZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpO1xyXG4gICAgYnV0dG9uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGlmIChldnQuY3VycmVudFRhcmdldCA9PT0gZXZ0LnRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cCwgaGFuZGxlRm9ybVN1Ym1pdCkge1xyXG4gICAgc3VwZXIocG9wdXApO1xyXG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XHJcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pbnB1dFwiKSk7XHJcbiAgfVxyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybVZhbHVlcztcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIHNldElucHV0VmFsdWVzKGRhdGEpIHtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAvLyDRgtGD0YIg0LLRgdGC0LDQstC70Y/QtdC8INCyIGB2YWx1ZWAg0LjQvdC/0YPRgtCwINC00LDQvdC90YvQtSDQuNC3INC+0LHRitC10LrRgtCwINC/0L4g0LDRgtGA0LjQsdGD0YLRgyBgbmFtZWAg0Y3RgtC+0LPQviDQuNC90L/Rg9GC0LBcclxuICAgICAgaW5wdXQudmFsdWUgPSBkYXRhW2lucHV0Lm5hbWVdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBpbml0aWFsQ2FyZHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCLQr9C/0L7QvdC40Y9cIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTA4MDY4NDM5NTctMzFmNGM5YTkxYzY1P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMTcwJnE9ODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwi0JDQstGB0YLRgNCw0LvQuNGPXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2OTczMDM1ODcyLWE0ZWMxNmI4ZThkOT9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTE3MCZxPTgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcItCg0L7RgdGB0LjRj1wiLFxyXG4gICAgbGluazogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0NzQ0ODQxNS1lOWY1YjI4ZTU3MGQ/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTExNzAmcT04MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLQktC10L3QtdGG0LjRj1wiLFxyXG4gICAgbGluazogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzODcwNzc0MzMxOC02ZTk1MDljZDNhY2M/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTQ2NCZxPTgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcItCk0YDQsNC90YbQuNGPXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjcwOTQ1Nzk3NzczLTYxNmJiM2E2MzM1OT9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDM1JnE9ODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwi0JPRgNGD0LfQuNGPXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjI2MDk2NzYyNzkxLTVjZGI2NGM0MzYzZD9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NDM1JnE9ODBcIixcclxuICB9LFxyXG5dO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCB2YWxpZGF0aW9uQ29uZmlnID0ge1xyXG4gIGZvcm1TZWxlY3RvcjogXCIucG9wdXBfX2Zvcm1cIixcclxuICBpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cF9faW5wdXRcIixcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX2J1dHRvbi1zdWJtaXRcIixcclxuICBhY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fYnV0dG9uLXN1Ym1pdF92YWxpZFwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwicG9wdXBfX2J1dHRvbi1zdWJtaXRfaW52YWxpZFwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0LWVycm9yX3Zpc2libGVcIixcclxufTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgY2FyZHNDb250YWluZXIgPSBcIi5lbGVtZW50c1wiO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBwb3B1cFByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfZWRpdC1wcm9maWxlXCIpO1xyXG5jb25zdCBmb3JtRWRpdEVsZW1lbnQgPSBwb3B1cFByb2ZpbGUucXVlcnlTZWxlY3RvcihcIiNlZGl0Rm9ybVwiKTtcclxuY29uc3QgcG9wdXBFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvX19lZGl0LWJ1dHRvblwiKTtcclxuY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvX190aXRsZVwiKTtcclxuY29uc3QgaW5mb1N1YnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvX19zdWJ0aXRsZVwiKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IHBvcHVwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV9hZGQtY2FyZFwiKTtcclxuY29uc3QgZm9ybUFkZEVsZW1lbnQgPSBwb3B1cENhcmQucXVlcnlTZWxlY3RvcihcIiNhZGRGb3JtXCIpO1xyXG5jb25zdCBwb3B1cEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgaW5pdGlhbENhcmRzLFxyXG4gIHZhbGlkYXRpb25Db25maWcsXHJcbiAgY2FyZHNDb250YWluZXIsXHJcbiAgZm9ybUVkaXRFbGVtZW50LFxyXG4gIHBvcHVwRWRpdEJ1dHRvbixcclxuICBpbmZvVGl0bGUsXHJcbiAgaW5mb1N1YnRpdGxlLFxyXG4gIGZvcm1BZGRFbGVtZW50LFxyXG4gIHBvcHVwQWRkQnV0dG9uLFxyXG59O1xyXG4iLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IHtcclxuICBpbml0aWFsQ2FyZHMsXHJcbiAgdmFsaWRhdGlvbkNvbmZpZyxcclxuICBjYXJkc0NvbnRhaW5lcixcclxuICBmb3JtRWRpdEVsZW1lbnQsXHJcbiAgcG9wdXBFZGl0QnV0dG9uLFxyXG4gIGluZm9UaXRsZSxcclxuICBpbmZvU3VidGl0bGUsXHJcbiAgZm9ybUFkZEVsZW1lbnQsXHJcbiAgcG9wdXBBZGRCdXR0b24sXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXHJcbiAge1xyXG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcy5yZXZlcnNlKCksXHJcbiAgICByZW5kZXJlcjogY3JlYXRlQ2FyZCxcclxuICB9LFxyXG4gIGNhcmRzQ29udGFpbmVyXHJcbik7XHJcblxyXG5jYXJkTGlzdC5yZW5kZXJJdGVtcygpO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8v0J7RgtC60YDRi9GC0LjQtSDQsdC+0LvRjNGI0L7QuSDQutCw0YDRgtC40L3QutC4OlxyXG5jb25zdCBwb3B1cFdpdGhJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZShcIi5wb3B1cF90eXBlX2ltZ1wiKTtcclxucG9wdXBXaXRoSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8v0KTQvtGA0LzQsCBFZGl0OlxyXG5jb25zdCBwb3B1cEVkaXRGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oXHJcbiAgXCIucG9wdXBfdHlwZV9lZGl0LXByb2ZpbGVcIixcclxuICBzdWJtaXRQcm9maWxlRm9ybVxyXG4pO1xyXG5wb3B1cEVkaXRGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5wb3B1cEVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCB7IG5hbWUsIGpvYiB9ID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICBwb3B1cEVkaXRGb3JtLnNldElucHV0VmFsdWVzKHsgbmFtZSwgam9iIH0pO1xyXG4gIGVuYWJsZVZhbGlkYXRpb25FZGl0LnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gIHBvcHVwRWRpdEZvcm0ub3BlbigpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFByb2ZpbGVGb3JtKGlucHV0VmFsdWVzKSB7XHJcbiAgdXNlckluZm8uc2V0VXNlckluZm8oaW5wdXRWYWx1ZXMubmFtZSwgaW5wdXRWYWx1ZXMuam9iKTtcclxuICBwb3B1cEVkaXRGb3JtLmNsb3NlKCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8v0KTQvtGA0LzQsCBBZGQ6XHJcbmNvbnN0IHBvcHVwQWRkRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiLnBvcHVwX3R5cGVfYWRkLWNhcmRcIiwgc3VibWl0Q2FyZEZvcm0pO1xyXG5wb3B1cEFkZEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdENhcmRGb3JtKGlucHV0VmFsdWVzKSB7XHJcbiAgY29uc3QgbmFtZSA9IGlucHV0VmFsdWVzLnBpY3R1cmVUaXRsZTtcclxuICBjb25zdCBsaW5rID0gaW5wdXRWYWx1ZXMucGljdHVyZUxpbms7XHJcblxyXG4gIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKHsgbmFtZSwgbGluayB9KTtcclxuXHJcbiAgY2FyZExpc3QuYWRkSXRlbShuZXdDYXJkKTtcclxuXHJcbiAgcG9wdXBBZGRGb3JtLmNsb3NlKCk7XHJcbn1cclxuXHJcbnBvcHVwQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZW5hYmxlVmFsaWRhdGlvbkFkZC5yZXNldFZhbGlkYXRpb24oKTtcclxuICBwb3B1cEFkZEZvcm0ub3BlbigpO1xyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChpdGVtKSB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGl0ZW0sIFwiI2VsZW1lbnQtdGVtcGxhdGVcIiwgaGFuZGxlQ2FyZENsaWNrKTtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2V0VmlldygpO1xyXG4gIHJldHVybiBjYXJkRWxlbWVudDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lOiBcIi5pbmZvX190aXRsZVwiLFxyXG4gIGpvYjogXCIuaW5mb19fc3VidGl0bGVcIixcclxufSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gaGFuZGxlQ2FyZENsaWNrKG5hbWUsIGxpbmspIHtcclxuICBwb3B1cFdpdGhJbWFnZS5vcGVuKG5hbWUsIGxpbmspO1xyXG59XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3QgZW5hYmxlVmFsaWRhdGlvbkVkaXQgPSBuZXcgRm9ybVZhbGlkYXRvcihcclxuICBmb3JtRWRpdEVsZW1lbnQsXHJcbiAgdmFsaWRhdGlvbkNvbmZpZ1xyXG4pO1xyXG5lbmFibGVWYWxpZGF0aW9uRWRpdC5lbmFibGVWYWxpZGF0aW9uKGZvcm1FZGl0RWxlbWVudCk7XHJcblxyXG5jb25zdCBlbmFibGVWYWxpZGF0aW9uQWRkID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybUFkZEVsZW1lbnQsIHZhbGlkYXRpb25Db25maWcpO1xyXG5lbmFibGVWYWxpZGF0aW9uQWRkLmVuYWJsZVZhbGlkYXRpb24oZm9ybUFkZEVsZW1lbnQpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBzZWxlY3Rvcikge1xyXG4gICAgdGhpcy5faW5pdGlhbEFycmF5ID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG5cclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gIH1cclxuICByZW5kZXJJdGVtcygpIHtcclxuICAgIHRoaXMuX2luaXRpYWxBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlbmRlckNhcmQgPSB0aGlzLl9yZW5kZXJlcihpdGVtKTtcclxuICAgICAgdGhpcy5hZGRJdGVtKHJlbmRlckNhcmQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwKSB7XHJcbiAgICBzdXBlcihwb3B1cCk7XHJcbiAgICB0aGlzLl9wb3B1cEltYWdlSW1nID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1nXCIpO1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZVRpdGxlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1nLXRpdGxlXCIpO1xyXG4gIH1cclxuXHJcbiAgb3BlbihuYW1lLCBsaW5rKSB7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgICB0aGlzLl9wb3B1cEltYWdlSW1nLnNyYyA9IGxpbms7XHJcbiAgICB0aGlzLl9wb3B1cEltYWdlSW1nLmFsdCA9IG5hbWU7XHJcbiAgICB0aGlzLl9wb3B1cEltYWdlVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZUltZy5zcmMgPSBcIlwiO1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZUltZy5hbHQgPSBcIlwiO1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHsgbmFtZSwgam9iIH0pIHtcclxuICAgIHRoaXMuX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWUpO1xyXG4gICAgdGhpcy5fam9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihqb2IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LFxyXG4gICAgICBqb2I6IHRoaXMuX2pvYi50ZXh0Q29udGVudCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyhuYW1lLCBqb2IpIHtcclxuICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5fam9iLnRleHRDb250ZW50ID0gam9iO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJuYW1lIiwibGluayIsInRlbXBsYXRlIiwiaGFuZGxlQ2FyZENsaWNrIiwidGhpcyIsIl9uYW1lIiwiX2xpbmsiLCJfdGVtcGxhdGUiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX2dldFRlbXBsYXRlQ2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfaGFuZGxlRGVsZXRlIiwiX25ld0NhcmQiLCJyZW1vdmUiLCJfaGFuZGxlTGlrZUNhcmQiLCJfbGlrZUJ1dHRvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9kZWxldGVDYXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9zZXREYXRhIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhbHQiLCJnZXRWaWV3IiwiZm9ybUVsZW1lbnQiLCJjb25maWciLCJfZm9ybUVsZW1lbnQiLCJfY29uZmlnIiwicmVzZXRWYWxpZGF0aW9uIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiX2lucHV0TGlzdCIsImZvckVhY2giLCJpbnB1dEVsZW1lbnQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJlcnJvckVsZW1lbnQiLCJpZCIsImFkZCIsImVycm9yQ2xhc3MiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImlucHV0RXJyb3JDbGFzcyIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hhc0ludmFsaWRJbnB1dCIsInNvbWUiLCJfYnV0dG9uRWxlbWVudCIsImFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImRpc2FibGVkIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImVuYWJsZVZhbGlkYXRpb24iLCJQb3B1cCIsInBvcHVwIiwiX3BvcHVwIiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsIm9wZW4iLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldnQiLCJjb2RlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdXBlciIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2Zvcm0iLCJfZ2V0SW5wdXRWYWx1ZXMiLCJfZm9ybVZhbHVlcyIsImlucHV0IiwidmFsdWUiLCJyZXNldCIsInNldElucHV0VmFsdWVzIiwiZGF0YSIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGlvbkNvbmZpZyIsImZvcm1TZWxlY3RvciIsImZvcm1FZGl0RWxlbWVudCIsInBvcHVwRWRpdEJ1dHRvbiIsImZvcm1BZGRFbGVtZW50IiwicG9wdXBBZGRCdXR0b24iLCJjYXJkTGlzdCIsIml0ZW1zIiwicmVuZGVyZXIiLCJzZWxlY3RvciIsIl9pbml0aWFsQXJyYXkiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwicmVuZGVySXRlbXMiLCJpdGVtIiwicmVuZGVyQ2FyZCIsImFkZEl0ZW0iLCJlbGVtZW50IiwicHJlcGVuZCIsInJldmVyc2UiLCJjcmVhdGVDYXJkIiwicG9wdXBXaXRoSW1hZ2UiLCJfcG9wdXBJbWFnZUltZyIsIl9wb3B1cEltYWdlVGl0bGUiLCJwb3B1cEVkaXRGb3JtIiwiaW5wdXRWYWx1ZXMiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwiam9iIiwiZ2V0VXNlckluZm8iLCJlbmFibGVWYWxpZGF0aW9uRWRpdCIsInBvcHVwQWRkRm9ybSIsIm5ld0NhcmQiLCJwaWN0dXJlVGl0bGUiLCJwaWN0dXJlTGluayIsIkNhcmQiLCJlbmFibGVWYWxpZGF0aW9uQWRkIiwiX2pvYiIsIkZvcm1WYWxpZGF0b3IiXSwic291cmNlUm9vdCI6IiJ9