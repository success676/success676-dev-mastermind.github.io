// Находим все наши кнопки
const chooseColor = document.querySelectorAll('.choose__color-btn');
const contentItem = document.querySelectorAll('.content-item');

// Пробегаемся циклом и тем самым отслеживаем событие клика. При клике запускается функция open
chooseColor.forEach(function(element) {
    element.addEventListener('click', open)
});

function open(evt){
    const target = evt.currentTarget; // находим того на кого мы тыкнули при помощи метода currentTarget
    const button = target.dataset.button; // Определяем дата атрибут target
    const contentActive = document.querySelectorAll(`.${button}`); // То на что мы нажали будет использоваться в дальнейшем

    chooseColor.forEach(function(item){
        item.classList.remove('choose__color-btn--active')
    });
    target.classList.add('choose__color-btn--active');

    contentItem.forEach(function(item) {
        item.classList.remove('content-item__active')
    });
    contentActive.forEach(function(item) {
        item.classList.add('content-item__active')
    });
};

