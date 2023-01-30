
// ф-ция открытия
const openItem = item => {

    const container = item.closest('.questions__item');
    const contentBlock = container.find('.question__description');
    const textBlock = contentBlock.find('.question__description-block');
    const reqHight = textBlock.height();

    container.addClass('question--active')
    contentBlock.height(reqHight);

};

//закрыть все открытые
const closeEveryItem = container => {
    const items = container.find('.question__description');
    const itemContainer = container.find('.questions__item');


    itemContainer.removeClass('question--active');
    items.height(0);
};

$('.question__title').click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const container = $this.closest('.questions__list');//передаем при вызове ф-ции зкрытия, ищем все блоки в списке
    const elemContainer = $this.closest('.questions__item');

    if (elemContainer.hasClass('question--active')) {
        closeEveryItem(container);
    } else {
        closeEveryItem(container);
        openItem($this); //вызов ф-ции открытия, по нажитию
    }


});