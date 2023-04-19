
/*
 
/*
* Запишем объект на страницу
*
* */
function ButonInfo(Id) {
    id = Id;
};

const writeReview = review => {
    let likeCounter = '';
    
    let ButtonId = Math.random();
    
    // Для проверки, является ли объект отзывом, используем свойство hasOwnProperty
    if (review.hasOwnProperty('rate')) {
        likeCounter += '<button id="' + ButtonId + '" style="border: none" onclick="addLike(this.id)">' + `❤️ ${review.rate}</button>`
    }
    
    // Запишем результат
    
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['author']}</b>  ${review['date']}${likeCounter}    </i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
   
}

function addLike(ButtonId) {
    
    // Найдём нужный элемент по id
    let element = document.getElementById(ButtonId);

    // Преобразуем текст элемента в массив, разбив его по пробелам (так как счётчик лайков у нас отделен от символа ❤️пробелом)
    let array = element.innerText.split(' ')

    // Вытащим искомое значение счётчика и сразу же преобразуем его в число, так как
    // при сложении любого значения со строкой в JS будет строка, а нам этого не требуется
    let resultNum = parseInt(array[array.length - 1], 10);

    // Увеличим счётчик
    resultNum += 1

    // Сохраним измененное значение обратно в массив
    array[array.length - 1] = `${resultNum}`

    // Обновим текст элемента
    element.innerText = array.join(' ') 
}




/*
* Конструктор, через который создаётся комментарий
*
* */
function Comment() {
    // Запросим имя
    this.author = prompt("Как вас зовут ?")
    if (this.author == null) {
        this.empty = true
        return
    }

    // Запросим текст
    this.text = prompt("Оставьте отзыв")
    if (this.text == null) {
        this.empty = true
        return
    }

    // Сохраним текущее время
    this.date = new Date().toLocaleString()
}


/*
* Оставить комментарий
*
* */


function addComment() {
    let comment = new Comment()
    
    // проверяем, успешно ли юзер осуществил ввод
    if (comment.empty) {
        return;
    }

    // Запросим, хочет ли пользователь оставить полноценный отзыв или это будет обычный комментарий
    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')

    if (enableLikes) {
        // Создадим для отзыва новый объект из прототипа - комментария
        let review = Object.create(comment)
        // и добавим ему нужное свойство
        review.rate = 0;

        

        // Добавляем отзыв с возможностью пользовательских оценок
        writeReview(review)
    } else {
        // Добавим простой комментарий без возможности оценки
        writeReview(comment)
    }
}


// управление слайдами
const currentSlide = {
    index: 0
};
function showImage(index) {
    let slides = document.getElementsByClassName("sliderItem");
    for (let slide of slides) {
        slide.style.display = 'none';
    }
    //if (index >= slides.length) {
    //    slides[0].style.display = 'block';
    //    currentSlide.index = 0;
    //}
    if (index >= 0 && index < slides.length) {
        slides[index].style.display = 'block';
    }
    //if (index < 0) {
    //    slides[0].style.display = 'block';
    //    currentSlide.index = 0;
    //}
    
}
function next(currentIndex) {
    debugger
    
    showImage(currentIndex + 1);
    currentSlide.index++;
    
}


