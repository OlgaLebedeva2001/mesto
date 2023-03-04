# Проект: Место. Создано в рамках курса Базовый JavaScript и работа с браузером.

## Выполнила студентка 60 потока Лебедева Ольга

### Описание проектной работы:

Данная работа представляет из себя Лендинг (Landing page) с POP-UP окнами: изменение данных профиля, добавления новых карточек и открытием картинок. Данный сайт состоит из 3 смысловых блоков.

Проект выполнен с использованием технологии <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="html5" alt="html5" width="40" height="40"/>&nbsp и <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" title="css" alt="css" width="40" height="40"/>&nbsp. В данной работе использованы разные методы и свойства. Из основных это - flexbox, grid layout, медиазапросы и т.д. Структура сайта и файлов выполнена в соответствии с правилами БЭМ nested. Сайт адаптивный. Максимальная ширина 1280px, минимальная - 320px, что соответствует поставленной задаче.

Так-же в этой работе был использован <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="javascript" alt="javascript" width="40" height="40"/>&nbsp - это позволило менять имя и информацию о себе в профиле (аватар, имя и хобби), добавлять новые карточки и удалять их, открывать изображения на полный экран, ставить лайки.

В процессе работы над проектом в него была добвлена валидация форм, теперь кнопка в POP-UP становится неактивной, если поля ввода имеют ошибочные значения. Также добавлено закрытие форм по нажатию на Overlay и Escape.

В процессе работы над проектом был произведен рефакторинг кода. Были добавлены файлы:
Api.js
Card.js
FormValidator.js
UserInfo.js
Section.js
PopupWithImage.js
PopupWithForm.js
PopupWithConfirmation.js
Popup.js

В данных файлах были прописаны следующие классы:

- класс создания карточек на странице;
- класс валидации форм;
- класс описывающий поведение поп-ап окон;
- класс описывающий запросы к серверу;
- класс с информацией о пользователе.

Проект на данный момент собран с помощью вебпака и не отображается по ссылке https://olgalebedeva2001.github.io/mesto/index.html .

Все фотографии на данном сайте взяты с сайта https://unsplash.com/

Макет данного сайта был предоставлен Яндекс.Практикумом в виде ссылки на редактор Figma. (https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1&t=Mac0HF8zKliGWyRY-0)

## Ссылка на итоговый проект с github.com:

https://olgalebedeva2001.github.io/mesto/index.html
