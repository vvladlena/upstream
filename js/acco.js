
// ф-ция открытия
const openItem = item => {

    const container = item.closest('.acco__item');
    const contentBlock = container.find('.acco__description');
    const textBlock = contentBlock.find('.acco__description-block');
    const reqHight = textBlock.height();

    container.addClass('acco--active')
    contentBlock.height(reqHight);

};

//закрыть все открытые
const closeEveryItem = container => {
    const items = container.find('.acco__description');
    const itemContainer = container.find('.acco__item');


    itemContainer.removeClass('acco--active');
    items.height(0);
};

$('.acco__title').click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const container = $this.closest('.acco__list');//передаем при вызове ф-ции зкрытия, ищем все блоки в списке
    const elemContainer = $this.closest('.acco__item');

    if (elemContainer.hasClass('acco--active')) {
        closeEveryItem(container);
    } else {
        closeEveryItem(container);
        openItem($this); //вызов ф-ции открытия, по нажитию
    }


});