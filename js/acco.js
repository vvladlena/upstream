
// ф-ция открытия
const openItem = item => {

    const container = item.closest('.team__item');
    const contentBlock = container.find('.member__description');
    const textBlock = contentBlock.find('.member__description-block');
    const reqHight = textBlock.height();

    container.addClass('member_active')
    contentBlock.height(reqHight);

};

//закрыть все открытые
const closeEveryItem = container => {
    const items = container.find('.member__description');
    const itemContainer = container.find('.team__item');


    itemContainer.removeClass('member_active');
    items.height(0);
};

$('.member__link').click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const container = $this.closest('.team__list');//передаем при вызове ф-ции зкрытия, ищем все блоки в списке
    const elemContainer = $this.closest('.team__item');

    if (elemContainer.hasClass('member_active')) {
        closeEveryItem(container);
    } else {
        closeEveryItem(container);
        openItem($this); //вызов ф-ции открытия, по нажитию
    }


});