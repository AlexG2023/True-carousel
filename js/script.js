const slides = document.querySelectorAll('.carousel__item'),
modal = document.querySelector('.modal'),
modalAlt = document.querySelector('.modal__alt'),
modalNum = document.querySelector('.modal__num'),
modalImg = document.querySelector('.modal__img img'),
mainBlock = document.querySelector('.carousel');
let pos = 0;

window.addEventListener("click", function(event){
	if(event.target.classList.contains('carousel__prev-btn_1')) getPrevlSlide1();
	if(event.target.classList.contains('carousel__prev-btn_2')) getPrevlSlide2();
	if(event.target.classList.contains('carousel__prev-btn_3')) getPrevlSlide3();
	if(event.target.classList.contains('carousel__next-btn_1')) getNextlSlide1();
	if(event.target.classList.contains('carousel__next-btn_2')) getNextlSlide2();
	if(event.target.classList.contains('carousel__next-btn_3')) getNextlSlide3();
	if(event.target.tagName == 'IMG') showImg(event.target);
	if(event.target.classList.contains('carousel__modal')||
		event.target.classList.contains('modal__close')) closeImg(event.target);
});

function getPrevlSlide1(){
	if(pos <= 0) pos = slides.length;
	pos--;
	changePos(pos);
}
function getPrevlSlide2(){
	if(pos <= 0) pos = slides.length;
	pos--;
	changePos(pos);
	if(pos <= 0) pos = slides.length;
	pos--;
	changePos(pos);
}
function getPrevlSlide3(){
	if(pos <= 0) pos = slides.length;
	pos--;
	changePos(pos);
	if(pos <= 0) pos = slides.length;
	pos--;
	changePos(pos);
	if(pos <= 0) pos = slides.length;
	pos--;
	changePos(pos);
}

function getNextlSlide1(){
	if(pos >= slides.length) pos = 0;
	pos++;
	changePos(pos);
}
function getNextlSlide2(){
	if(pos >= slides.length) pos = 0;
	pos++;
	changePos(pos);
	if(pos >= slides.length) pos = 0;
	pos++;
	changePos(pos);
}
function getNextlSlide3(){
	if(pos >= slides.length) pos = 0;
	pos++;
	changePos(pos);
	if(pos >= slides.length) pos = 0;
	pos++;
	changePos(pos);
	if(pos >= slides.length) pos = 0;
	pos++;
	changePos(pos);
}
function changePos(pos){
	slides.forEach(item =>{
		if(item.classList.contains('carousel__item_3')||
			item.classList.contains('carousel__item_4')||
			item.classList.contains('carousel__item_5')||
			item.classList.contains('carousel__item_6')||
			item.classList.contains('carousel__item_7')||
			item.classList.contains('carousel__item_8')||
			item.classList.contains('carousel__item_9')||
			item.classList.contains('carousel__item_10')){
			item.classList.remove('carousel__item_3');
			item.classList.remove('carousel__item_4');
			item.classList.remove('carousel__item_5');
			item.classList.remove('carousel__item_6');
			item.classList.remove('carousel__item_7');
			item.classList.remove('carousel__item_8');
			item.classList.remove('carousel__item_9');
			item.classList.remove('carousel__item_10');
		}
	});
	if(pos+1 <= slides.length) slides[pos].classList.add('carousel__item_3');
	if(pos+2 <= slides.length)slides[pos+1].classList.add('carousel__item_4');
	if(pos+3 <= slides.length)slides[pos+2].classList.add('carousel__item_5');
	if(pos+4 <= slides.length)slides[pos+3].classList.add('carousel__item_6');
	if(pos+5 <= slides.length)slides[pos+4].classList.add('carousel__item_7');
	if(pos+6 <= slides.length)slides[pos+5].classList.add('carousel__item_8');
	if(pos+7 <= slides.length)slides[pos+6].classList.add('carousel__item_9');
	if(pos+8 <= slides.length)slides[pos+7].classList.add('carousel__item_10');

	if(pos >= slides.length) slides[pos-slides.length].classList.add('carousel__item_3');
	if(pos+1 >= slides.length)slides[pos+1-slides.length].classList.add('carousel__item_4');
	if(pos+2 >= slides.length)slides[pos+2-slides.length].classList.add('carousel__item_5');
	if(pos+3 >= slides.length)slides[pos+3-slides.length].classList.add('carousel__item_6');
	if(pos+4 >= slides.length)slides[pos+4-slides.length].classList.add('carousel__item_7');
	if(pos+5 >= slides.length)slides[pos+5-slides.length].classList.add('carousel__item_8');
	if(pos+6 >= slides.length)slides[pos+6-slides.length].classList.add('carousel__item_9');
	if(pos+7 >= slides.length)slides[pos+7-slides.length].classList.add('carousel__item_10');
	addBtns();
}

function addBtns(){
	let mainSlide = document.querySelector('.carousel__item_6'),
	btnPrev = document.querySelector('.prev'),
	btnNext = document.querySelector('.next');
	mainSlide.append(btnNext);
	mainSlide.prepend(btnPrev);
	// if(pos+1 <= slides.length) {
	// 	!mainSlide.previousElementSibling.querySelector('img').removeAttribute("title");
	// 	console.log(`during ${pos};`)}
	mainSlide.querySelector('img').setAttribute("title", 'Открыть');
	// if(pos+3 > slides.length) {
	// 	mainSlide.nextElementSibling.querySelector('img').removeAttribute("title");
	// 	console.log(`during ${pos};`)}
	changeImg(mainSlide.querySelector('img'));
}
function changeImg(mainSlide){
	modalImg.src = mainSlide.getAttribute('src');
	modalAlt.textContent =  mainSlide.getAttribute('alt');
	let num;
	if(pos+4 <= slides.length){
		num = pos+4;
	} else{ num = pos-slides.length+4}
	modalNum.textContent = `${num}/${slides.length}`;
}
function showImg(target){
	modal.style.display = 'flex';
	setTimeout(function(){modal.classList.add('modal__active');}, 10);
	changeImg(target);
}
function closeImg(target){
	modal.classList.remove('modal__active');
	setTimeout(function(){modal.style.display = '';}, 500);
}