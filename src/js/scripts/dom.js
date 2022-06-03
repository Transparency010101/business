// * тут небольшие DOM/BOM скрипты

// * Фильтер для news {
const newsNavFilterItem = document.querySelectorAll(".news__nav-filter-item");
const newsColumnsColumn = document.querySelectorAll(".news-columns__column");

newsNavFilterItem.forEach(link => {
    link.addEventListener("click", function (e) {
        let dataFilterCount = link.getAttribute("data-filter");
        newsColumnsColumn.forEach(column => {
            if (dataFilterCount == "3" && dataFilterCount == 3) {
                column.classList.add("active");
            } else {
                column.classList.remove("active");
                if (column.classList.contains("filter_" + dataFilterCount)) {
                    column.classList.add("active");
                }
            }
        });
        e.preventDefault();
    });
});
// * Фильтер для news }

// // * Меняется flex размер, взависимости от количетва колонок {
// let newsColumnsColumnLenght = newsColumnsColumn.length;

// newsColumnsColumn.forEach(el => {
//     switch (newsColumnsColumnLenght) {
//         case 1:
//             el.style.flex = "0 0 100%";
//             break;

//         case 3:
//             el.style.flex = "0 0 33.333%";
//             break;

//         case 2:
//             el.style.flex = "0 0 50%";
//             break;

//         case 4:
//             el.style.flex = "0 0 25%";
//             break;
//     }
// });
// // * Меняется flex размер, взависимости от количетва колонок }

// * Изменяет отборание ссылок фильтров {
newsNavFilterItem.forEach(link => {
    link.addEventListener("click", function () {
        newsNavFilterItem.forEach(removeLink => {
            removeLink.classList.remove("active");
        });
        link.classList.add("active");
    });
});
// * Изменяет отборание ссылок фильтров }
