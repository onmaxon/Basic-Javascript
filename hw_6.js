var doc =  document;
var album = doc.querySelector('.album');
var cells = 2;
var galleryItem = doc.querySelector('.galleryItem').content;
var mainImage = doc.querySelector('.img');

/* //создаем галарею  - картинки снизу на основе template */
var renderItems = function () {
    let newItem; // объявим новый элемент
    let roulette = doc.createDocumentFragment (); 
    /* // создаем рулетку зависимость галереи от  количества изображений. Добавление элементов в рулетку */

    for (let i = 0; i < cells; i++) {
        
        newItem = galleryItem.cloneNode(true);
//        newItem.querySelector('.imgThumb').classList.add('gThumb');
        newItem.querySelector('.imgThumb').classList.add('thumb' + i);
        newItem.querySelector('.imgThumb').style.backgroundImage = "url('img/background-" + (i + 1) + ".JPG')";
        roulette.appendChild(newItem);
    }
    album.appendChild(roulette);

};
renderItems();

//Функция увеличения картинки при клике на маленькую снизу
var galleryApp = function (evt) {
    if (evt.target.parentElement.className == 'albumWrapper' || evt.target.classList.contains('imgThumb') == true) {
        mainImage.style.backgroundImage = evt.target.style.backgroundImage; 
    }  
};
window.addEventListener ('click', galleryApp);

window.addEventListener ('click', function (evt) {console.log(evt);})