'use strict';

const productDescr = "lorem ipsum, quia dolor sit, amet, consectetur, \
adipisci velit, sed quia non numquam eius modi tempora incidunt, \
ut labore et dolore magnam aliquam quaerat voluptatem.";

// 1. получите все кнопки и сохраните в переменную

// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию handleClick


/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    // 2. из объекта события получите ссылку на .product и
    // сохраните в переменную:
    const cardNode = clickedButtonEvent.target.parentNode;

    // 3. создайте литерал объекта со следующими свойствами:
    const card = {
        wrap: cardNode, // здесь элемент с классом .product
        img: cardNode.querySelector("img"), // здесь картинка внутри .product
        productName: cardNode.querySelector(".productName"), // здесь .productName, который внутри .product
        button: cardNode.querySelector("button"), // здесь button, который внутри .product
    };

    // 4. получаем текст на кнопке, которая внутри .product
    
    let buttonText = card.button.textContent;
    if (buttonText == "Подробнее") { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
        // 4.2 если да, то передаем объект card в функцию showMoreText
        showMoreText(card);
    } else if (buttonText == "Отмена") { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
        // 4.4 если да, то передаем объект card в функцию hideMoreText
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    // 5. картинке внутри .product ставим стиль display: block
    card.img.style.display = "block";
    
    // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    let descr = card.wrap.querySelector(".desc");
    if (descr != null) {
        descr.remove();
    }
    
    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    card.button.textContent = "Подробнее";
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    // 6. картинке внутри .product ставим display: none
    card.img.style.display = "none";
    
    // 6.1 сохраняем произвольный текст в переменную
    // const productDescr
    
    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    let divDescr = document.createElement("div");
    divDescr.classList.add("desc");
    divDescr.innerText = productDescr;

    card.productName.after(divDescr);
    
    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    card.button.textContent = "Отмена";
}


let btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener("click", handleClick);
});