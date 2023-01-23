const findBlockByAlias = (alias) => {
    return $('.reviews__item').filter((ndx, item) => {
        return $(item).attr('data-linked-with') == alias;
    })
}


$('.interactive-avatar__link').click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr('data-open');
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest('.reviews__switcher-item');//ищем ближайший item и записываем в переменную

    itemToShow.addClass('review_active').siblings().removeClass('review_active');
    curItem.addClass('interactive-avatar_active').siblings().removeClass('interactive-avatar_active');//на текущий item добавляем active, у остальных убираем
});